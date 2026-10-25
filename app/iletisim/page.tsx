import type { Metadata } from "next";
import { Breadcrumbs, CtaButtons, FaqList, PageHero } from "@/components/Content";
import { MiniQuote } from "@/components/MiniQuote";
import { pageMeta } from "@/lib/seo";
import { site, officeAddress, warehouseAddress } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "İletişim: Gebze Depo ve Kadıköy Ofis | MEPAL Orman Ürünleri",
  description: "MEPAL Orman Ürünleri iletişim: 0536 866 83 07, WhatsApp, e-posta, Gebze Pelitli depo ve Kadıköy Kozyatağı ofis adresi, çalışma saatleri, yol tarifi.",
  path: "/iletisim/",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[["İletişim", "/iletisim/"]]} />
      <PageHero h1="İletişim" answer="En hızlı yol WhatsApp veya telefon: 0536 866 83 07. Mesai saatlerinde çoğunlukla aynı gün dönüş yapıyoruz.">
        <CtaButtons message="Merhaba, palet için bilgi/fiyat almak istiyorum." source="contact" />
      </PageHero>
      <div className="wrap content-grid">
        <div>
          <section className="block">
            <h2>Adresler ve çalışma saatleri</h2>
            <p>
              <strong>{site.warehouse.label}:</strong>
              <br />
              {warehouseAddress}
              <br />
              <a className="btn btn-ghost btn-sm" href={site.mapsUrl} rel="noopener" target="_blank">
                Yol tarifi al
              </a>
            </p>
            <p>
              <strong>{site.office.label}:</strong>
              <br />
              {officeAddress}
            </p>
            <p>
              <strong>Telefon / WhatsApp:</strong> <a href={`tel:${site.phoneE164}`}>{site.phone}</a>
              <br />
              <strong>E-posta:</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              <strong>Yetkili:</strong> {site.contactPerson}
              <br />
              <strong>Çalışma saatleri:</strong> {site.hours}
            </p>
            <p className="note">
              Depo ziyaretleri için önce arayın; yükleme ve sevkiyat programına göre sizi uygun saatte karşılayalım. Mesai dışı mesajlara ertesi sabah 08:30’da dönüyoruz.
            </p>
          </section>
          <FaqList
            title="İletişim hakkında"
            items={[
              { q: "Deponuza gelerek palet alabilir miyim?", a: "Evet, stok durumuna göre depodan teslim alabilirsiniz. Önce arayıp ürün ve adedi bildirirseniz hazırlığı yapar, sizi bekletmeden yükleriz." },
              { q: "Fiyat teklifi nasıl alırım?", a: "WhatsApp’tan ürün, adet ve teslimat ilini yazmanız yeterli. Teklif sihirbazını veya sağdaki formu da kullanabilirsiniz." },
            ]}
          />
        </div>
        <aside className="sidebar">
          <section className="side-card">
            <h2>Teklif formu</h2>
            <MiniQuote />
          </section>
        </aside>
      </div>
    </>
  );
}
