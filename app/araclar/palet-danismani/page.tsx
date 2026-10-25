import type { Metadata } from "next";
import { ContentLayout, SideCard } from "@/components/ContentLayout";
import { pageMeta } from "@/lib/seo";
import Advisor from "@/components/tools/Advisor";

export const metadata: Metadata = pageMeta({
  title: "Yapay Zekâ Palet Danışmanı | MEPAL Orman Ürünleri",
  description: "Yükünüzü anlatın, uygun paleti ve fiyat bilgisini öğrenin. Yapay zekâ destekli palet danışmanı.",
  path: "/araclar/palet-danismani/",
});

export default function Page() {
  return (
    <ContentLayout
      crumbs={[["Araçlar", "/araclar/"], ["Palet Danışmanı", "/araclar/palet-danismani/"]]}
      h1="Palet Danışmanı"
      answer="Ne taşıdığınızı ve nereye gönderdiğinizi yazın; asistan uygun paleti, gerekçesini ve fiyat bilgisini (sitedeki güncel tablodan) söyler."
      art="service"
      message="Merhaba, palet danışmanı ile görüştüm, teklif almak istiyorum."
      side={<SideCard title="İlgili sayfalar" links={[["Palet seçici", "/araclar/palet-secici/"]]} />}
    >
      <Advisor />
    </ContentLayout>
  );
}
