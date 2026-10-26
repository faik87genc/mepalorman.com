import type { Metadata } from "next";
import { ContentLayout, SideCard } from "@/components/ContentLayout";
import { pageMeta } from "@/lib/seo";
import Wizard from "@/components/tools/Wizard";

export const metadata: Metadata = pageMeta({
  title: "Teklif Al: 30 Saniyede Palet Fiyatı | MEPAL",
  description: "Ürün, adet ve ilinizi seçin; anında fiyat aralığını görün, WhatsApp veya formla teklif isteyin.",
  path: "/teklif-al/",
});

export default function Page() {
  return (
    <ContentLayout
      crumbs={[["Teklif al", "/teklif-al/"]]}
      h1="Palet Teklif Sihirbazı"
      answer="Ürünü, adedi ve teslimat yerini seçin; tek tıkla WhatsApp'tan veya formla güncel fiyat isteyin. Yaklaşık 30 saniye sürer."
      art="truck"
      message="Merhaba, palet için teklif almak istiyorum."
      side={<SideCard title="İlgili sayfalar" links={[]} />}
    >
      <Wizard />
    </ContentLayout>
  );
}
