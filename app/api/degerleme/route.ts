import { NextResponse } from "next/server";
import { callClaude, clean, clientIp, originOk, rateLimited, tooLarge } from "@/lib/api";
import { waLink } from "@/lib/site";

export const runtime = "nodejs";

const MAX_B64 = 2_400_000; // ~1.8 MB image after client-side resize

const PROMPT = `Bu fotoğrafta ikinci el/hurda palet yığını var. Yalnızca geçerli JSON döndür: {"palet_tipi": string, "yaklasik_adet": number|null, "kalite": "A"|"B"|"C"|"hurda", "gerekce": string (en fazla 2 cümle, Türkçe), "guven": "düşük"|"orta"|"yüksek"}. Fiyat verme. Fotoğraf palet göstermiyorsa {"hata": "Fotoğrafta palet görünmüyor"} döndür.`;

export async function POST(req: Request) {
  if (!originOk(req)) return NextResponse.json({ error: "İstek reddedildi." }, { status: 403 });
  if (rateLimited(`degerleme:${clientIp(req)}`, 5, 30 * 60_000)) return NextResponse.json({ error: "Çok fazla deneme. Lütfen biraz sonra tekrar deneyin veya fotoğrafı WhatsApp’tan gönderin." }, { status: 429 });
  if (tooLarge(req, MAX_B64 + 4_000)) return NextResponse.json({ error: "Fotoğraf çok büyük (en fazla ~1,8 MB)." }, { status: 413 });
  let body: { image?: string; city?: string; note?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }
  const m = /^data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+/=]+)$/.exec(typeof body?.image === "string" ? body.image : "");
  if (!m || m[2].length > MAX_B64) return NextResponse.json({ error: "Geçerli bir fotoğraf (JPG/PNG/WebP, en fazla ~1,8 MB) yükleyin." }, { status: 400 });
  const city = clean(body.city, 60);
  const wa = waLink(`Merhaba, palet yığınımın fotoğrafını değerlendirmek istiyorum. Konum: ${city || "…"}. Fotoğrafı bu mesajla göndereceğim.`);

  let parsed: Record<string, unknown> | null = null;
  try {
    const r = await callClaude({
      max_tokens: 400,
      messages: [{ role: "user", content: [{ type: "image", source: { type: "base64", media_type: `image/${m[1]}`, data: m[2] } }, { type: "text", text: PROMPT }] }],
    });
    if (r) parsed = JSON.parse(r.text.slice(r.text.indexOf("{"), r.text.lastIndexOf("}") + 1));
  } catch {
    parsed = null;
  }
  if (!parsed) return NextResponse.json({ available: false, whatsapp: wa });
  if (typeof parsed.hata === "string") return NextResponse.json({ available: true, error: parsed.hata, whatsapp: wa });
  return NextResponse.json({
    available: true,
    result: {
      type: clean(parsed.palet_tipi, 80),
      count: typeof parsed.yaklasik_adet === "number" ? parsed.yaklasik_adet : null,
      grade: clean(parsed.kalite, 10),
      reason: clean(parsed.gerekce, 300),
      confidence: clean(parsed.guven, 10),
    },
    whatsapp: wa,
  });
}
