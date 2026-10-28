import type { Metadata } from "next";
import { Breadcrumbs, FinalCta, JsonLd, PageHero } from "@/components/Content";
import { CardGrid } from "@/components/ContentLayout";
import { products } from "@/lib/data/products";
import { fromPriceLabel } from "@/lib/format";
import { collectionLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Palet Çeşitleri ve Ürünler | MEPAL Orman Ürünleri",
  description: "Euro palet, EPAL ölçülü, 100x120, CP, 145x145, plastik, ikinci el ve ihracat paleti. Ölçü, kapasite ve fiyat bilgisi; Gebze depodan teslimat.",
  path: "/urunler/",
});

export default function ProductsIndex() {
  return (
    <>
      <JsonLd data={collectionLd({ name: "Palet Çeşitleri ve Ürünler", description: "Euro palet, EPAL ölçülü, 100x120, CP, 145x145, plastik, ikinci el ve ihracat paleti. Ölçü, kapasite ve fiyat bilgisi; Gebze depodan teslimat.", path: "/urunler/", items: products.map((p) => [p.name, `/urunler/${p.slug}/`] as [string, string]) })} />
      <Breadcrumbs items={[["Ürünler", "/urunler/"]]} />
      <PageHero h1="Palet Çeşitleri ve Ürünler" answer="Euro palet, 100x120, CP, 145x145, plastik, ikinci el ve ISPM-15 ihracat paleti. Her ürün sayfasında ölçü, taşıma kapasitesi, adet kademeli fiyat ve teklif butonu bulunur." />
      <div className="wrap">
        <CardGrid items={products.map((p) => ({ href: `/urunler/${p.slug}/`, title: p.name, blurb: p.blurb, art: p.art, foot: fromPriceLabel(p.slug) ?? "WhatsApp'tan fiyat al" }))} />
      </div>
      <FinalCta message="Merhaba, palet çeşitleri için fiyat almak istiyorum. Ürün: … Adet: … İl: …" />
    </>
  );
}
