import type { Metadata } from "next";
import { ContentLayout, SideCard } from "@/components/ContentLayout";
import { pageMeta } from "@/lib/seo";
import Valuation from "@/components/tools/Valuation";

export const metadata: Metadata = pageMeta({
  title: "Fotoğraftan Hurda / İkinci El Palet Değerleme | MEPAL",
  description: "Palet yığınınızın fotoğrafını yükleyin; palet tipi, yaklaşık adet ve kalite sınıfı için ön değerleme alın.",
  path: "/araclar/fotograftan-palet-degerleme/",
});

export default function Page() {
  return (
    <ContentLayout
      crumbs={[["Araçlar", "/araclar/"], ["Fotoğraftan Hurda ve İkinci El Palet Ön Değerleme", "/araclar/fotograftan-palet-degerleme/"]]}
      h1="Fotoğraftan Hurda ve İkinci El Palet Ön Değerleme"
      answer="Palet yığınının fotoğrafını yükleyin; palet tipi, yaklaşık adet ve kalite sınıfı (A/B/C/hurda) için ön değerleme yapılır. Kesin fiyat yerinde kontrolle verilir."
      art="scrap"
      message="Merhaba, hurda/ikinci el paletlerimi satmak istiyorum."
      side={<SideCard title="İlgili sayfalar" links={[["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"],["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"]]} />}
    >
      <Valuation />
    </ContentLayout>
  );
}
