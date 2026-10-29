import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { clean, clientIp, originOk, rateLimited, tooLarge } from "@/lib/api";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Lead = { product: string; quantity: string; city: string; name: string; phone: string; note: string; estimate: string; source: string; company: string; email: string; type: string };

/** Rule-based triage (no external AI call): corporate vs. individual, urgency. */
function classify(l: Lead) {
  const qty = Number(l.quantity) || 0;
  const urgent = /acil|bugün|yarın|hemen/i.test(l.note);
  return { kind: qty >= 50 ? "Kurumsal" : "Bireysel", urgent };
}

async function deliver(l: Lead) {
  const c = classify(l);
  const subject = `[${c.kind}${c.urgent ? " · ACİL" : ""}] ${l.product} · ${l.quantity} adet · ${l.city}`;
  const text = [`Talep türü: ${l.type || "satın alma"}`, `Ad: ${l.name}`, l.company && `Firma: ${l.company}`, `Telefon: ${l.phone}`, l.email && `E-posta: ${l.email}`, `Ürün: ${l.product}`, `Adet: ${l.quantity}`, `İl/ilçe: ${l.city}`, l.estimate && `Sitedeki tahmin: ${l.estimate}`, l.note && `Not: ${l.note}`, `Kaynak: ${l.source}`].filter(Boolean).join("\n");
  if (!process.env.SMTP_HOST) {
    console.log("[teklif] SMTP_HOST tanımlı değil; talep yalnızca günlüğe yazıldı:\n" + subject + "\n" + text);
    return;
  }
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
  });
  await transport.sendMail({ from: process.env.SMTP_FROM || site.email, to: process.env.LEAD_TO || site.email, subject, text });
}

export async function POST(req: Request) {
  const isForm = !(req.headers.get("content-type") || "").includes("application/json");
  const fail = (status: number, error: string) => (isForm ? NextResponse.redirect(new URL("/iletisim/?hata=1", site.baseUrl), 303) : NextResponse.json({ error }, { status }));
  if (!originOk(req)) return fail(403, "İstek reddedildi.");
  if (rateLimited(`teklif:${clientIp(req)}`, 6, 10 * 60_000)) return fail(429, "Çok fazla deneme. Lütfen biraz sonra tekrar deneyin veya WhatsApp’tan yazın.");

  if (tooLarge(req, 20_000)) return fail(413, "Geçersiz istek.");
  let raw: Record<string, unknown> = {};
  try {
    if (isForm) {
      const fd = await req.formData();
      raw = Object.fromEntries(fd.entries());
    } else {
      const parsed: unknown = await req.json();
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fail(400, "Geçersiz istek.");
      raw = parsed as Record<string, unknown>;
    }
  } catch {
    return fail(400, "Geçersiz istek.");
  }

  // Honeypot: bots fill the hidden field; pretend success.
  if (clean(raw.website)) return isForm ? NextResponse.redirect(new URL("/tesekkurler/", site.baseUrl), 303) : NextResponse.json({ ok: true });

  const lead: Lead = {
    product: clean(raw.product, 160),
    quantity: clean(String(raw.quantity ?? ""), 12),
    city: clean(raw.city, 80),
    name: clean(raw.name, 80),
    phone: clean(raw.phone, 24),
    note: clean(raw.note, 400),
    estimate: clean(raw.estimate, 80),
    source: clean(raw.source, 40) || "web",
    company: clean(raw.company, 100),
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean(raw.email, 120)) ? clean(raw.email, 120) : "",
    type: raw.type === "sell" ? "satış (paletini satmak istiyor)" : "satın alma",
  };
  lead.note = [lead.note, clean(raw.details, 600)].filter(Boolean).join(" | ");
  const consent = raw.consent === true || raw.consent === "1" || raw.consent === "on";
  const digits = lead.phone.replace(/\D/g, "");
  if (!lead.name || digits.length < 10 || digits.length > 13 || !lead.product || !lead.city || !consent) return fail(400, "Lütfen tüm alanları ve KVKK onayını doldurun.");

  try {
    await deliver(lead);
  } catch (e) {
    console.error("[teklif] e-posta gönderilemedi", e);
    return fail(502, "Talebiniz şu anda iletilemedi. Lütfen WhatsApp’tan yazın veya arayın.");
  }
  return isForm ? NextResponse.redirect(new URL("/tesekkurler/", site.baseUrl), 303) : NextResponse.json({ ok: true });
}
