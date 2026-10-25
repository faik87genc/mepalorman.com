import type { Metadata } from "next";
import { Breadcrumbs, FinalCta, PageHero } from "@/components/Content";
import { CardGrid } from "@/components/ContentLayout";
import { services } from "@/lib/data/services";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Palet Hizmetleri: Hurda Alımı, Tamir, Toptan | MEPAL",
  description: "Hurda palet alımı, ikinci el palet alım-satımı, palet tamiri ve toptan kurumsal palet tedariki. Gebze merkezli, Türkiye geneli hizmet.",
  path: "/hizmetler/",
});

export default function ServicesIndex() {
  return (
    <>
      <Breadcrumbs items={[["Hizmetler", "/hizmetler/"]]} />
      <PageHero h1="Palet Hizmetleri" answer="Palet satışının yanında hurda palet alımı, ikinci el alım-satım, palet tamiri ve toptan kurumsal tedarik hizmeti veriyoruz." />
      <div className="wrap">
        <CardGrid items={services.map((s) => ({ href: `/hizmetler/${s.slug}/`, title: s.name, blurb: s.blurb, art: s.art }))} />
      </div>
      <FinalCta message="Merhaba, palet hizmetleriniz hakkında bilgi almak istiyorum." />
    </>
  );
}
