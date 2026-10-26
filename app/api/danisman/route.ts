import { NextResponse } from "next/server";
import { callClaude, clean, clientIp, originOk, rateLimited } from "@/lib/api";
import { PRICE_ROWS } from "@/lib/data/prices";
import { products } from "@/lib/data/products";
import { site, waLink } from "@/lib/site";

export const runtime = "nodejs";

const catalog = () =>
  products.map((p) => `- ${p.name} (/urunler/${p.slug}/): ${p.blurb}`).join("\n");

const priceTable = () =>
  PRICE_ROWS.map((r) => `- ${r.name} [${r.spec}]`).join("\n");

const system = () => `Sen ${site.name} (Gebze, Kocaeli) için çalışan Palet Danışmanı'sın. Yalnızca palet seçimi, ölçü, kapasite, ISPM-15, ihracat, ikinci el/hurda palet ve teklif süreci hakkında Türkçe, kısa (en fazla 6 cümle) ve net cevap ver.
KURALLAR:
- Fiyat/rakam VERME ve uydurma. Fiyat sorulursa ürünü ve adedi sor, güncel fiyat için WhatsApp'tan yazmasını söyle. Aşağıdaki liste yalnızca ürün çeşitleridir.
- Teslim süresi için kesin söz verme: "stok ve araç programına göre, net süre teklifte" de.
- EPAL/Turpal lisansı olduğunu iddia etme; "EPAL ölçülerinde" de.
- Konu dışı soruları kibarca reddet. Kişisel veri (TC, kart, şifre) isteme; kullanıcı yazarsa uyar.
- Uygun olduğunda ilgili ürün sayfasını bağlantı olarak ver (örn. /urunler/ihracat-paleti/) ve WhatsApp'tan teklif almayı öner.
ÜRÜNLER:
${catalog()}
FİYATLAR:
${priceTable()}
İletişim: ${site.phone}, ${site.warehouse.district} deposu.`;

/** Used when no API key is configured: keyword-based answer from site data only. */
function fallback(q: string): string {
  const t = q.toLowerCase();
  const pick = (slug: string, why: string) => {
    const p = products.find((x) => x.slug === slug);
    return `${why} Ayrıntı: ${p ? `/urunler/${p.slug}/` : "/urunler/"}`;
  };
  if (/ihracat|ispm|ısıl|yurt ?dışı|gümrük/.test(t)) return pick("ihracat-paleti", "Yurt dışı sevkiyatta ISPM-15 ısıl işlem (HT) damgalı ahşap palet gerekir.");
  if (/gıda|ilaç|hijyen|yıkan/.test(t)) return pick("plastik-palet", "Hijyenin önemli olduğu gıda ve ilaçta plastik palet önerilir.");
  if (/kimya|bidon|ibc|boya/.test(t)) return pick("cp-palet", "Kimya sektöründe 114×114 (CP) palet yaygındır.");
  if (/ikinci|2\.? ?el|kullanılmış/.test(t)) return pick("ikinci-el-palet", "Yurt içi tek yönlü sevkiyatta ikinci el sağlam palet maliyeti düşürür.");
  if (/hurda|sat(mak|ar)|alıyor/.test(t)) return "Hurda ve ikinci el palet alıyoruz. Fotoğraf göndererek ön değerleme alabilirsiniz: /araclar/fotograftan-palet-degerleme/";
  if (/ağır|1000|1\.000|ton|makine/.test(t)) return pick("100x120-palet", "Ağır yüklerde daha geniş ve güçlü yapı gerekir; 100×120 veya özel ölçülü palet düşünün.");
  if (/fiyat|kaç ?(tl|para)|ne kadar/.test(t)) return "Güncel fiyat için WhatsApp'tan ürün ve adedi yazın, en kısa sürede dönüş yapıyoruz.";
  return pick("80x120-euro-palet", "Çoğu sektör için en yaygın seçim 80x120 Euro palettir; yük ve kullanım yerini yazarsanız daha doğru öneri verebilirim.");
}

type Msg = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  if (!originOk(req)) return NextResponse.json({ error: "İstek reddedildi." }, { status: 403 });
  if (rateLimited(`danisman:${clientIp(req)}`, 20, 10 * 60_000)) return NextResponse.json({ error: "Çok fazla mesaj. Lütfen biraz sonra tekrar deneyin veya WhatsApp’tan yazın." }, { status: 429 });
  let body: { messages?: Msg[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }
  const messages = (body.messages ?? [])
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-8)
    .map((m) => ({ role: m.role, content: clean(m.content, 800) }))
    .filter((m) => m.content);
  const last = messages[messages.length - 1];
  if (!last || last.role !== "user") return NextResponse.json({ error: "Mesaj boş." }, { status: 400 });

  let reply: string | undefined;
  try {
    const r = await callClaude({ max_tokens: 500, system: system(), messages });
    reply = r?.text.trim();
  } catch {
    reply = undefined;
  }
  const live = !!reply;
  if (!reply) reply = fallback(last.content);
  const conversation = messages.map((m) => `${m.role === "user" ? "Müşteri" : "Danışman"}: ${m.content}`).join("\n");
  return NextResponse.json({ reply, live, whatsapp: waLink(`Merhaba, Palet Danışmanı ile görüştüm. ${last.content.slice(0, 200)}`), summaryLen: conversation.length });
}
