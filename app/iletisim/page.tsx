import type { Metadata } from "next";
import { Breadcrumbs, FaqList } from "@/components/Content";
import { Icon } from "@/components/Icons";
import { MiniQuote } from "@/components/MiniQuote";
import { pageMeta } from "@/lib/seo";
import { site, officeAddress, telHref, waLink, warehouseAddress } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "İletişim: Gebze Depo ve Kadıköy Ofis | MEPAL Orman Ürünleri",
  description: "MEPAL Orman Ürünleri iletişim: 0536 866 83 07, WhatsApp, e-posta, Gebze Pelitli depo ve Kadıköy Kozyatağı ofis adresi, çalışma saatleri, yol tarifi.",
  path: "/iletisim/",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[["İletişim", "/iletisim/"]]} />
      <header className="contact-hero">
        <div className="wrap">
          <p className="eyebrow">İletişim</p>
          <h1>Bize ulaşın.</h1>
          <p className="lead">Ürün, adet ve teslimat ilinizi yazın; mesai saatlerinde en kısa sürede net fiyatla dönüyoruz.</p>
        </div>
      </header>

      <div className="wrap contact-grid">
        <div className="contact-cards">
          <a className="c-card c-card-main" href={telHref} data-evt="phone_click" data-src="contact">
            <span className="c-icon">
              <Icon name="phone" />
            </span>
            <span className="c-label">Telefon</span>
            <strong className="c-value">{site.phone}</strong>
            <span className="c-link">Hemen arayın →</span>
          </a>
          <a className="c-card c-card-main" href={waLink("Merhaba, palet için fiyat almak istiyorum. Ürün: … Adet: … İl: …")} data-evt="whatsapp_click" data-src="contact" rel="noopener" target="_blank">
            <span className="c-icon">
              <Icon name="chat" />
            </span>
            <span className="c-label">WhatsApp</span>
            <strong className="c-value">{site.phone}</strong>
            <span className="c-link">WhatsApp&apos;tan yazın →</span>
          </a>
          <a className="c-card c-wide" href={`mailto:${site.email}`}>
            <span className="c-icon">
              <Icon name="mail" />
            </span>
            <span className="c-label">E-posta</span>
            <strong className="c-value">{site.email}</strong>
            <span className="c-link">E-posta gönderin →</span>
          </a>
          <div className="c-card c-wide">
            <span className="c-icon">
              <Icon name="pin" />
            </span>
            <span className="c-label">{site.warehouse.label}</span>
            <strong className="c-value c-addr">{warehouseAddress}</strong>
            <dl className="c-meta">
              <div>
                <dt>Çalışma saatleri</dt>
                <dd>{site.hours}</dd>
              </div>
              <div>
                <dt>Yetkili</dt>
                <dd>{site.contactPerson}</dd>
              </div>
            </dl>
            <a className="c-link" href={site.mapsUrl} rel="noopener" target="_blank">
              Yol tarifi al ↗
            </a>
            <p className="c-note">Depo ziyaretleri için önce arayın; yükleme ve sevkiyat programına göre sizi uygun saatte karşılayalım.</p>
          </div>
          <div className="c-card c-wide c-quiet">
            <span className="c-label">{site.office.label}</span>
            <span className="c-addr">{officeAddress}</span>
          </div>
        </div>

        <section className="contact-form" aria-labelledby="teklif-formu-h">
          <p className="eyebrow">Teklif formu</p>
          <h2 id="teklif-formu-h">Fiyat teklifi isteyin</h2>
          <p className="contact-form-sub">Formu doldurun, mesai saatlerinde en kısa sürede; mesai dışında ertesi sabah 08:30&apos;da dönüyoruz.</p>
          <MiniQuote />
        </section>
      </div>

      <div className="wrap contact-faq">
        <FaqList
          title="İletişim hakkında"
          items={[
            { q: "Deponuza gelerek palet alabilir miyim?", a: "Evet, stok durumuna göre depodan teslim alabilirsiniz. Önce arayıp ürün ve adedi bildirirseniz hazırlığı yapar, sizi bekletmeden yükleriz." },
            { q: "Fiyat teklifi nasıl alırım?", a: "WhatsApp’tan ürün, adet ve teslimat ilini yazmanız yeterli. Teklif sihirbazını veya yandaki formu da kullanabilirsiniz." },
          ]}
        />
      </div>
    </>
  );
}
