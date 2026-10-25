import type { Metadata } from "next";
import { ContentLayout, SideCard } from "@/components/ContentLayout";
import { pageMeta } from "@/lib/seo";
import Selector from "@/components/tools/Selector";

export const metadata: Metadata = pageMeta({
  title: "Palet Seçici: 3 Soruda Doğru Palet | MEPAL",
  description: "Yük tipi, ağırlık ve kullanım yerini seçin; size uygun palet çeşidini gerekçesiyle öğrenin.",
  path: "/araclar/palet-secici/",
});

export default function Page() {
  return (
    <ContentLayout
      crumbs={[["Araçlar", "/araclar/"], ["Palet Seçici: 3 Soruda Doğru Palet", "/araclar/palet-secici/"]]}
      h1="Palet Seçici: 3 Soruda Doğru Palet"
      answer="Taşıdığınız yükü, palet başı ağırlığı ve kullanım yerini seçin; size uygun palet çeşidini ve nedenini görün."
      art="euro"
      message="Merhaba, palet seçimi konusunda yardım almak istiyorum."
      side={<SideCard title="İlgili sayfalar" links={[["Palet çeşitleri ve seçimi", "/rehber/palet-cesitleri-ve-secimi/"],["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"]]} />}
    >
      <Selector />
    </ContentLayout>
  );
}
