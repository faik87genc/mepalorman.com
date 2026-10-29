import { products } from "@/lib/data/products";
import { services } from "@/lib/data/services";
import { guides } from "@/lib/data/guides";
import { regions } from "@/lib/data/regions";
import { pricePages } from "@/lib/data/pricePages";
import { sectors } from "@/lib/data/sectors";
import { staticPages } from "@/lib/data/pages";
import { absoluteUrl, site, warehouseAddress } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const line = (t: string, p: string, d?: string) => `- [${t}](${absoluteUrl(p)})${d ? `: ${d}` : ""}`;
  const body = `# ${site.name}

> ${site.description}

${site.legalName} — depo: ${warehouseAddress}. Telefon/WhatsApp: ${site.phone}. E-posta: ${site.email}. Çalışma saatleri: ${site.hours}. Fiyatlar sitede yayınlanmaz; güncel fiyat WhatsApp'tan verilir (KDV hariç).

## Fiyatlar
${pricePages.map((p) => line(p.h1, `/${p.slug}/`)).join("\n")}

## Ürünler
${products.map((p) => line(p.name, `/urunler/${p.slug}/`, p.blurb)).join("\n")}

## Hizmetler
${services.map((s) => line(s.name, `/hizmetler/${s.slug}/`, s.blurb)).join("\n")}

## Hizmet bölgeleri
${regions.map((r) => line(r.name, `/bolge/${r.slug}/`)).join("\n")}

## Sektörler
${sectors.map((s) => line(s.name, `/sektorler/${s.slug}/`, s.blurb)).join("\n")}

## Rehber
${guides.map((g) => line(g.h1, `/rehber/${g.slug}/`)).join("\n")}

## Araçlar
${line("Konteynere ve tıra kaç palet sığar hesaplayıcı", "/araclar/konteyner-palet-hesaplama/")}
${line("Palet seçici", "/araclar/palet-secici/")}
${line("Palet danışmanı (yapay zekâ sohbet)", "/araclar/palet-danismani/")}
${line("Fotoğraftan palet değerleme", "/araclar/fotograftan-palet-degerleme/")}
${line("Teklif sihirbazı", "/teklif-al/")}
${line("Talepten teslimata süreç", "/surec/")}

## Kurumsal
${staticPages.map((p) => line(p.h1, `/${p.slug}/`)).join("\n")}
${line("Sık sorulan sorular", "/sss/")}
${line("İletişim", "/iletisim/")}
${line("Palet fotoğrafları", "/galeri/")}
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
