import type { Metadata } from "next";
import { Breadcrumbs, FinalCta, PageHero } from "@/components/Content";
import { CardGrid } from "@/components/ContentLayout";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Palet Araçları: Hesaplayıcı, Seçici, Danışman | MEPAL",
  description: "Konteynere kaç palet sığar, hangi palet doğru, fotoğraftan hurda palet değerleme ve palet danışmanı. Ücretsiz palet araçları.",
  path: "/araclar/",
});

const tools = [
  { href: "/teklif-al/", title: "Teklif sihirbazı", blurb: "Ürün, adet ve il seçin; anında fiyat aralığı alın.", art: "truck" as const },
  { href: "/araclar/konteyner-palet-hesaplama/", title: "Konteyner ve tır palet hesaplayıcı", blurb: "20', 40', 40 HC ve tıra kaç palet sığar; yerleşim çizimi.", art: "container" as const },
  { href: "/araclar/palet-secici/", title: "Palet seçici", blurb: "3 soruda size uygun palet çeşidi.", art: "euro" as const },
  { href: "/araclar/palet-danismani/", title: "Palet danışmanı (yapay zekâ)", blurb: "Yükünüzü anlatın, öneri ve fiyat bilgisi alın.", art: "service" as const },
  { href: "/araclar/fotograftan-palet-degerleme/", title: "Fotoğraftan palet değerleme", blurb: "Hurda/ikinci el palet yığınınız için ön değerleme.", art: "scrap" as const },
];

export default function ToolsIndex() {
  return (
    <>
      <Breadcrumbs items={[["Araçlar", "/araclar/"]]} />
      <PageHero h1="Palet Araçları" answer="Doğru paleti seçmenize, yüklemeyi planlamanıza ve hızlı teklif almanıza yardımcı ücretsiz araçlar." />
      <div className="wrap">
        <CardGrid items={tools} />
      </div>
      <FinalCta message="Merhaba, palet araçlarınızı kullandım, teklif almak istiyorum." />
    </>
  );
}
