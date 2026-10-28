import type { Metadata } from "next";
import { Breadcrumbs, FinalCta, JsonLd, PageHero } from "@/components/Content";
import { CardGrid } from "@/components/ContentLayout";
import { guides } from "@/lib/data/guides";
import { collectionLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Palet Rehberi: Ölçüler, ISPM-15, Kapasite, Seçim | MEPAL",
  description: "Euro palet ölçüleri, ISPM-15, konteynere kaç palet sığar, palet seçimi ve maliyet rehberleri. Tablolu, doğrudan cevaplı yazılar.",
  path: "/rehber/",
});

export default function GuideIndex() {
  return (
    <>
      <JsonLd data={collectionLd({ name: "Palet Rehberi", description: "Euro palet ölçüleri, ISPM-15, konteynere kaç palet sığar, palet seçimi ve maliyet rehberleri. Tablolu, doğrudan cevaplı yazılar.", path: "/rehber/", items: guides.map((p) => [p.h1, `/rehber/${p.slug}/`] as [string, string]) })} />
      <Breadcrumbs items={[["Rehber", "/rehber/"]]} />
      <PageHero h1="Palet Rehberi" answer="Palet ölçüleri, taşıma kapasitesi, ISPM-15, ihracat kuralları ve doğru palet seçimi hakkında tablolu, kısa cevaplı rehber yazıları." />
      <div className="wrap">
        <CardGrid items={guides.map((g) => ({ href: `/rehber/${g.slug}/`, title: g.h1, blurb: g.description, art: g.art, foot: `${g.readMinutes} dk okuma` }))} />
      </div>
      <FinalCta message="Merhaba, palet seçimi konusunda yardım almak istiyorum." />
    </>
  );
}
