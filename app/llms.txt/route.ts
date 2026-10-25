import { products } from "@/lib/data/products";
import { services } from "@/lib/data/services";
import { guides } from "@/lib/data/guides";
import { regions } from "@/lib/data/regions";
import { PRICES_UPDATED_LABEL } from "@/lib/data/prices";
import { absoluteUrl, site, warehouseAddress } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const line = (t: string, p: string, d?: string) => `- [${t}](${absoluteUrl(p)})${d ? `: ${d}` : ""}`;
  const body = `# ${site.name}

> ${site.description}

${site.legalName} — depo: ${warehouseAddress}. Telefon/WhatsApp: ${site.phone}. E-posta: ${site.email}. Çalışma saatleri: ${site.hours}. Fiyatlar KDV hariçtir; son güncelleme ${PRICES_UPDATED_LABEL}.

## Fiyatlar
${line("Palet fiyatları (tüm ürünler)", "/palet-fiyatlari/")}
${line("Ahşap palet fiyatları", "/ahsap-palet-fiyatlari/")}
${line("İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/")}
${line("Euro palet fiyatları", "/euro-palet-fiyatlari/")}
${line("Plastik palet fiyatları", "/plastik-palet-fiyatlari/")}

## Ürünler
${products.map((p) => line(p.name, `/urunler/${p.slug}/`, p.blurb)).join("\n")}

## Hizmetler
${services.map((s) => line(s.name, `/hizmetler/${s.slug}/`, s.blurb)).join("\n")}

## Hizmet bölgeleri
${regions.map((r) => line(r.name, `/bolge/${r.slug}/`)).join("\n")}

## Rehber
${guides.map((g) => line(g.h1, `/rehber/${g.slug}/`)).join("\n")}

## Araçlar
${line("Konteynere ve tıra kaç palet sığar hesaplayıcı", "/araclar/konteyner-palet-hesaplama/")}
${line("Palet seçici", "/araclar/palet-secici/")}
${line("Teklif sihirbazı", "/teklif-al/")}
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
