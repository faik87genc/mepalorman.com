import type { Metadata } from "next";
import { Breadcrumbs, FinalCta, JsonLd, PageHero } from "@/components/Content";
import { CardGrid } from "@/components/ContentLayout";
import { sectors } from "@/lib/data/sectors";
import { collectionLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Sektörlere Özel Palet Çözümleri | MEPAL Orman Ürünleri",
  description: "Gıda, otomotiv, beyaz eşya, kimya, ihracat ve e-ticaret depoları için doğru palet seçimi ve toplu tedarik. Gebze depodan teslimat.",
  path: "/sektorler/",
});

export default function SectorsIndex() {
  return (
    <>
      <JsonLd data={collectionLd({ name: "Sektörlere Özel Palet Çözümleri", description: "Gıda, otomotiv, beyaz eşya, kimya, ihracat ve e-ticaret depoları için doğru palet seçimi ve toplu tedarik. Gebze depodan teslimat.", path: "/sektorler/", items: sectors.map((p) => [p.name, `/sektorler/${p.slug}/`] as [string, string]) })} />
      <Breadcrumbs items={[["Sektörler", "/sektorler/"]]} />
      <PageHero h1="Sektörlere Özel Palet Çözümleri" answer="Her sektörün palet gereksinimi farklıdır: hijyen, kimyasal dayanım, raf yükü, ısıl işlem. Sektörünüze uygun paleti seçin, toplu fiyat alın." />
      <div className="wrap">
        <CardGrid items={sectors.map((s) => ({ href: `/sektorler/${s.slug}/`, title: s.name, blurb: s.blurb, art: s.art }))} />
      </div>
      <FinalCta message="Merhaba, sektörüm için palet önerisi ve fiyat almak istiyorum. Sektör: …" />
    </>
  );
}
