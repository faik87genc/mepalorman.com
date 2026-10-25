import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, CtaButtons } from "@/components/Content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ title: "Teşekkürler | MEPAL Orman Ürünleri", description: "Talebiniz alındı.", path: "/tesekkurler/", noindex: true });

export default function ThanksPage() {
  return (
    <>
      <Breadcrumbs items={[["Teşekkürler", "/tesekkurler/"]]} />
      <div className="wrap prose-narrow" style={{ padding: "2rem 0 3rem" }}>
        <h1>Talebiniz alındı, teşekkürler</h1>
        <p className="answer">Ekibimiz mesai saatlerinde aynı gün, mesai dışında ertesi sabah 08:30’da sizi arayacak.</p>
        <p>Daha hızlı dönüş için aşağıdan WhatsApp’tan da yazabilirsiniz.</p>
        <CtaButtons message="Merhaba, az önce web sitesinden teklif talebi gönderdim." source="thanks" />
        <p>
          Beklerken <Link prefetch={false} href="/rehber/">palet rehberine</Link> göz atabilirsiniz.
        </p>
      </div>
    </>
  );
}
