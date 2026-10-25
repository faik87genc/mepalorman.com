import Link from "next/link";
import type { Metadata } from "next";
import { CardGrid } from "@/components/ContentLayout";
import { CtaButtons, FaqList, FinalCta } from "@/components/Content";
import { Icon } from "@/components/Icons";
import { MiniQuote } from "@/components/MiniQuote";
import { Photo } from "@/components/Photo";
import { products } from "@/lib/data/products";
import { regions } from "@/lib/data/regions";
import { guides } from "@/lib/data/guides";
import { fromPriceLabel } from "@/lib/format";
import { pageMeta } from "@/lib/seo";
import { PRICES_UPDATED_LABEL } from "@/lib/data/prices";
import type { FAQ } from "@/lib/types";

export const metadata: Metadata = pageMeta({
  title: "Palet Satışı Gebze, Kocaeli, İstanbul | Euro, Ahşap, Plastik | MEPAL",
  description: "Gebze deposundan euro palet, ahşap palet, plastik palet, ikinci el palet satışı ve hurda palet alımı. Tarihli güncel fiyat tablosu, WhatsApp'tan hızlı teklif.",
  path: "/",
});

const FEATURED = ["80x120-euro-palet", "ikinci-el-palet", "sifir-ahsap-palet", "plastik-palet", "ihracat-paleti", "100x120-palet"];

const SERVICES: { icon: string; title: string; text: string; href: string }[] = [
  { icon: "recycle", title: "İkinci El Palet", text: "Kontrol edilmiş, yeniden kullanılabilir paletler; maliyet odaklı sevkiyat ve depolama için.", href: "/urunler/ikinci-el-palet/" },
  { icon: "box", title: "Ahşap Palet", text: "Standart ve özel ölçülü sıfır ahşap paletler; sanayi ve lojistik kullanımı için.", href: "/urunler/sifir-ahsap-palet/" },
  { icon: "layers", title: "Euro Palet", text: "800×1200 mm euro ölçülü palet tedariki; lojistik ve ihracat akışları için.", href: "/urunler/80x120-euro-palet/" },
  { icon: "boxes", title: "Toptan Palet Tedariki", text: "Tek seferlik veya düzenli toplu siparişler; adet kademeli fiyat.", href: "/hizmetler/toptan-palet/" },
  { icon: "handshake", title: "İkinci El Palet Alımı", text: "Fazla kalan kullanılabilir paletlerinizi satın alıyoruz.", href: "/hizmetler/palet-alim-satim/" },
  { icon: "truck", title: "Hurda Palet Alımı", text: "Hasarlı ve hurda paletleri sahanızdan topluyor, geri dönüşüme gönderiyoruz.", href: "/hizmetler/hurda-palet-alimi/" },
];

const faq: FAQ[] = [
  { q: "Palet fiyatlarına KDV dahil mi?", a: "Sitedeki fiyat tabloları KDV hariç, adet başına TL olarak verilir. Nakliye ve KDV, teklif aşamasında teslimat ilinize göre ayrıca hesaplanır." },
  { q: "En az kaç adet palet satıyorsunuz?", a: "Toplu alım odaklı çalışıyoruz; adet kademeleri tablolarda 1–50, 51–200 ve 201+ olarak gösterilir. Küçük miktarlar için de stok durumuna göre teklif verebiliriz." },
  { q: "Hangi bölgelere teslimat yapıyorsunuz?", a: "Gebze depomuzdan Kocaeli ve İstanbul Anadolu yakasındaki fabrika ve depolara sevkiyat yapıyoruz. Bölge sayfalarında ilçelere göre bilgi bulabilirsiniz; farklı iller için teklif isteyin." },
  { q: "İhracat için ısıl işlemli (ISPM-15) palet temin ediyor musunuz?", a: "Evet, HT damgalı ISPM-15 uyumlu ihracat paleti temin ediyoruz. Ülkenizin gereksinimleri için rehber yazımıza bakabilir veya bize danışabilirsiniz." },
  { q: "Kullanılmış paletlerimi satabilir miyim?", a: "Evet. Hurda ve ikinci el palet alımı yapıyoruz. Paletlerin fotoğrafını WhatsApp'tan veya fotoğraftan değerleme aracımızla gönderirseniz ön değerlendirme yapılır; kesin fiyat yerinde kontrolle verilir." },
  { q: "Teklif ne kadar sürede gelir?", a: "Mesai saatlerinde çoğunlukla aynı gün dönüş yapıyoruz. Mesai dışı talepleri ertesi sabah 08:30'da arıyoruz." },
];

export default function HomePage() {
  const featured = FEATURED.map((s) => products.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => !!p);
  const wave1 = regions.filter((r) => r.wave === 1);
  const wave2 = regions.filter((r) => r.wave === 2);
  const homeGuides = ["euro-palet-olculeri", "konteynere-ve-tira-kac-palet-sigar", "ispm-15-nedir"].map((s) => guides.find((g) => g.slug === s)).filter((g): g is NonNullable<typeof g> => !!g);
  return (
    <>
      <header className="home-hero">
        <div className="wrap home-hero-grid">
          <div>
            <p className="eyebrow">Gebze · Kocaeli · İstanbul Anadolu Yakası</p>
            <h1>Ahşap ve Plastik Palet Satışı – Gebze, Kocaeli, İstanbul</h1>
            <p className="lead">
              Bugün fiyat, yarın teslimat. Gebze deposundan fabrikalara toplu palet tedariki: euro palet, ahşap palet, plastik palet, ikinci el palet ve hurda palet alımı.
            </p>
            <CtaButtons message="Merhaba, palet için fiyat almak istiyorum. Ürün: … Adet: … İl: …" source="home-hero" />
            <ul className="trust-list">
              <li>Tarihli güncel fiyat tablosu</li>
              <li>Gebze Pelitli’de depo</li>
              <li>ISPM-15 uyumlu ihracat paleti</li>
              <li>Aynı gün dönüş</li>
            </ul>
          </div>
          <div className="home-hero-photo">
            <Photo name="depo" priority sizes="(min-width: 900px) 520px, 100vw" />
          </div>
        </div>
      </header>

      <section className="split-strip" aria-label="Alıcı ve satıcılar için">
        <div className="wrap split-in">
          <Link href="/palet-fiyatlari/" className="split-cell">
            <span>
              <small>Alıcılar için</small>
              <strong>Palet Satın Al</strong>
              <em>Sıfır, ikinci el, euro ve plastik palet — tek veya toplu sipariş.</em>
            </span>
            <Icon name="arrow" size={22} />
          </Link>
          <Link href="/hizmetler/hurda-palet-alimi/" className="split-cell">
            <span>
              <small>Satıcılar için</small>
              <strong>Paletinizi Bize Satın</strong>
              <em>İşletmelerden ikinci el ve hurda palet satın alıyoruz.</em>
            </span>
            <Icon name="arrow" size={22} />
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="hizmet-h">
        <div className="wrap">
          <p className="eyebrow">Hizmetler</p>
          <h2 id="hizmet-h">Her aşama için palet çözümleri</h2>
          <div className="svc-grid">
            {SERVICES.map((s) => (
              <article key={s.title} className="svc">
                <Icon name={s.icon} size={26} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link href={s.href}>
                  Detaylı bilgi <Icon name="arrow" size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section beige" aria-label="Palet çeşitleri">
        <div className="wrap photo-trio">
          {[
            { n: "kullanilmis" as const, t: "İkinci El Palet", h: "/urunler/ikinci-el-palet/" },
            { n: "forklift" as const, t: "Ahşap Palet", h: "/urunler/sifir-ahsap-palet/" },
            { n: "euro-damga" as const, t: "Euro Palet", h: "/urunler/80x120-euro-palet/" },
          ].map((x) => (
            <Link key={x.h} href={x.h} className="trio-item">
              <Photo name={x.n} sizes="(min-width: 900px) 360px, 100vw" alt="" />
              <span>{x.t}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="urunler-h">
        <div className="wrap">
          <p className="eyebrow">Güncel fiyatlar</p>
          <h2 id="urunler-h">Palet çeşitleri ve fiyatları</h2>
          <p className="muted">Her ürünün sayfasında ölçü, taşıma kapasitesi ve adet kademeli fiyat tablosu var. Fiyatlar {PRICES_UPDATED_LABEL} tarihinde güncellendi.</p>
          <CardGrid items={featured.map((p) => ({ href: `/urunler/${p.slug}/`, title: p.name, blurb: p.blurb, art: p.art, foot: fromPriceLabel(p.slug) ?? "Ölçüye göre teklif" }))} />
          <p className="cta-row">
            <Link className="btn btn-green" href="/palet-fiyatlari/">
              Palet fiyatları tablosu
            </Link>
            <Link className="btn btn-ghost" href="/urunler/">
              Tüm ürünler
            </Link>
          </p>
        </div>
      </section>

      <section className="section beige" aria-labelledby="teklif-h">
        <div className="wrap steps-grid">
          <div>
            <p className="eyebrow">Nasıl çalışıyoruz</p>
            <h2 id="teklif-h">Üç basit adım</h2>
            <ol className="num-steps">
              <li>
                <b>01</b> Palet türünü, adedi ve konumunu bize iletin.
              </li>
              <li>
                <b>02</b> Talebinizi inceleyip teklifimizi hazırlıyoruz.
              </li>
              <li>
                <b>03</b> Teslimat veya yükleme detaylarını birlikte belirliyoruz.
              </li>
            </ol>
            <p className="muted">
              Daha ayrıntılı seçim için adım adım <Link href="/teklif-al/">teklif sihirbazını</Link> veya <Link href="/araclar/">palet araçlarını</Link> kullanabilirsiniz.
            </p>
          </div>
          <MiniQuote id="home" />
        </div>
      </section>

      {regions.length > 0 && (
        <section className="section" aria-labelledby="bolge-h">
          <div className="wrap">
            <p className="eyebrow">Hizmet bölgeleri</p>
            <h2 id="bolge-h">Depomuz Gebze’de, teslimat Kocaeli ve İstanbul’a</h2>
            <ul className="chips">
              {[...wave1, ...wave2].map((r) => (
                <li key={r.slug}>
                  <Link href={`/bolge/${r.slug}/`}>{r.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/bolge/">Tüm bölgeler →</Link>
              </li>
            </ul>
          </div>
        </section>
      )}

      {homeGuides.length > 0 && (
        <section className="section beige" aria-labelledby="rehber-h">
          <div className="wrap">
            <p className="eyebrow">Rehber</p>
            <h2 id="rehber-h">Palet rehberinden</h2>
            <CardGrid items={homeGuides.map((g) => ({ href: `/rehber/${g.slug}/`, title: g.h1, blurb: g.description, art: g.art, foot: `${g.readMinutes} dk okuma` }))} />
            <p>
              <Link href="/rehber/">Tüm rehber yazıları →</Link>
            </p>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap prose-narrow">
          <FaqList items={faq} title="Sık sorulan sorular" />
        </div>
      </section>

      <FinalCta message="Merhaba, palet için fiyat almak istiyorum. Ürün: … Adet: … İl: …" />
    </>
  );
}
