import type { Metadata } from "next";
import { ContentLayout, SideCard } from "@/components/ContentLayout";
import { pageMeta } from "@/lib/seo";
import Calculator from "@/components/tools/Calculator";

export const metadata: Metadata = pageMeta({
  title: "Konteynere ve Tıra Kaç Palet Sığar? Hesaplayıcı | MEPAL",
  description: "20', 40', 40 HC konteyner ve 13,6 m tıra kaç palet sığar? Palet ölçüsünü ve ağırlığı girin, yerleşim çizimini görün.",
  path: "/araclar/konteyner-palet-hesaplama/",
});

export default function Page() {
  return (
    <ContentLayout
      crumbs={[["Araçlar", "/araclar/"], ["Konteynere ve Tıra Kaç Palet Sığar? Hesaplayıcı", "/araclar/konteyner-palet-hesaplama/"]]}
      h1="Konteynere ve Tıra Kaç Palet Sığar? Hesaplayıcı"
      answer="20' konteynerde tipik olarak 10–11, 40' konteynerde yaklaşık 23–25 euro palet, 13,6 m tırda ise 33–34 euro palet taşınır. Kendi palet ölçünüz ve ağırlığınızla aşağıdan hesaplayın."
      art="container"
      message="Merhaba, konteyner/tır yüklemesi için palet fiyatı almak istiyorum."
      side={<SideCard title="İlgili sayfalar" links={[["Euro palet ölçüleri", "/rehber/euro-palet-olculeri/"],["Konteynere ve tıra kaç palet sığar? (rehber)", "/rehber/konteynere-ve-tira-kac-palet-sigar/"]]} />}
    >
      <Calculator />
    </ContentLayout>
  );
}
