import Link from "next/link";
import type { Metadata } from "next";
import { CardGrid } from "@/components/ContentLayout";
import { CtaButtons, FaqList, FinalCta, PriceTable } from "@/components/Content";
import { Icon } from "@/components/Icons";
import { MiniQuote } from "@/components/MiniQuote";
import { Photo } from "@/components/Photo";
import { products } from "@/lib/data/products";
import { regions } from "@/lib/data/regions";
import { guides } from "@/lib/data/guides";
import { sectors } from "@/lib/data/sectors";
import { fromPriceLabel } from "@/lib/format";
import { pageMeta } from "@/lib/seo";
import type { FAQ } from "@/lib/types";

export const metadata: Metadata = pageMeta({
  title: "Palet Satışı Türkiye Geneli | Euro, Ahşap, Plastik | MEPAL",
  description: "Gebze deposundan euro palet, ahşap palet, plastik palet, ikinci el palet satışı ve hurda palet alımı. WhatsApp'tan güncel fiyat ve hızlı teklif.",
  path: "/",
});

const FEATURED = ["80x120-euro-palet", "ikinci-el-palet", "sifir-ahsap-palet", "plastik-palet", "ihracat-paleti", "100x120-palet"];

const SERVICES: { icon: string; title: string; text: string; href: string }[] = [
  { icon: "recycle", title: "İkinci El Palet", text: "Kontrol edilmiş, yeniden kullanılabilir paletler; maliyet odaklı sevkiyat ve depolama için.", href: "/urunler/ikinci-el-palet/" },
  { icon: "box", title: "Ahşap Palet", text: "Standart ve özel ölçülü sıfır ahşap paletler; sanayi ve lojistik kullanımı için.", href: "/urunler/sifir-ahsap-palet/" },
  { icon: "layers", title: "Euro Palet", text: "800×1200 mm euro ölçülü palet tedariki; lojistik ve ihracat akışları için.", href: "/urunler/80x120-euro-palet/" },
  { icon: "boxes", title: "Toptan Palet Tedariki", text: "Tek seferlik veya düzenli toplu siparişler; adet arttıkça avantajlı fiyat.", href: "/hizmetler/toptan-palet/" },
  { icon: "handshake", title: "İkinci El Palet Alımı", text: "Fazla kalan kullanılabilir paletlerinizi satın alıyoruz.", href: "/hizmetler/palet-alim-satim/" },
  { icon: "truck", title: "Hurda Palet Alımı", text: "Hurda ve fazla paletleri sahanızdan topluyor, sağlam kalanları onarıp geri kalanı geri dönüşüme gönderiyoruz.", href: "/hizmetler/hurda-palet-alimi/" },
  { icon: "recycle", title: "Hasarlı Palet Alımı", text: "Kırık tahtası ya da çatlak takozu olan, tamire elverişli paletleri sınıflayıp satın alıyoruz.", href: "/hizmetler/hasarli-palet-alimi/" },
  { icon: "truck", title: "Kırık Palet Alımı", text: "Yapısı dağılmış kırık paletleri toplu halde tesisinizden yükleyip ahşap geri dönüşümüne yönlendiriyoruz.", href: "/hizmetler/kirik-palet-alimi/" },
  { icon: "layers", title: "Isıl İşlemli ve İhracat Paleti", text: "ISPM-15 uyumlu, HT damgalı ısıl işlemli palet ve ihracat paleti temini; ambalaj paleti seçiminde destek.", href: "/urunler/isil-islemli-palet/" },
];

const TERMS: [string, string][] = [
  ["80x120 palet (Euro palet)", "/urunler/80x120-euro-palet/"],
  ["EUR palet nedir?", "/rehber/eur-palet-nedir/"],
  ["EPAL palet", "/urunler/epal-palet/"],
  ["Çakma EPAL palet", "/urunler/cakma-epal-palet/"],
  ["Orta palet", "/urunler/orta-palet/"],
  ["Kalın orta palet", "/urunler/kalin-orta-palet/"],
  ["100x120 palet", "/urunler/100x120-palet/"],
  ["CP3 palet (1140×1140)", "/urunler/cp3-palet/"],
  ["İkinci el Euro palet", "/urunler/ikinci-el-euro-palet/"],
  ["Ambalaj paleti", "/urunler/ambalaj-paleti/"],
  ["İhracat paleti", "/urunler/ihracat-paleti/"],
  ["Isıl işlemli palet", "/urunler/isil-islemli-palet/"],
  ["Hasarlı palet alımı", "/hizmetler/hasarli-palet-alimi/"],
  ["Kırık palet alımı", "/hizmetler/kirik-palet-alimi/"],
  ["Palet fotoğrafları", "/galeri/"],
];

const faq: FAQ[] = [
  { q: "Palet fiyatlarına KDV dahil mi?", a: "Fiyatlar KDV hariç verilir. Güncel fiyatı WhatsApp'tan alırsınız; nakliye ve KDV, teklif aşamasında teslimat ilinize göre ayrıca hesaplanır." },
  { q: "En az kaç adet palet satıyorsunuz?", a: "Toplu alım odaklı çalışıyoruz; adet arttıkça birim fiyat düşer. Küçük miktarlar için de stok durumuna göre teklif verebiliriz." },
  { q: "Hangi bölgelere teslimat yapıyorsunuz?", a: "Gebze depomuzdan Türkiye genelinde sevkiyat yapıyoruz. Kocaeli ve İstanbul’da en hızlı teslimat sağlanır; diğer illerde süre ve nakliye maliyeti miktara ve mesafeye göre teklifte bildirilir." },
  { q: "İhracat için ısıl işlemli (ISPM-15) palet temin ediyor musunuz?", a: "Evet, HT damgalı ISPM-15 uyumlu ihracat paleti temin ediyoruz. Ülkenizin gereksinimleri için rehber yazımıza bakabilir veya bize danışabilirsiniz." },
  { q: "Kullanılmış paletlerimi satabilir miyim?", a: "Evet. Hurda palet alımı, hasarlı palet alımı, kırık palet alımı ve ikinci el palet alımı yapıyoruz. Paletlerin fotoğrafını WhatsApp'tan veya fotoğraftan değerleme aracımızla gönderirseniz ön değerlendirme yapılır; kesin fiyat yerinde kontrolle verilir." },
  { q: "Çakma EPAL palet ile EPAL palet aynı mı?", a: "Hayır. Çakma EPAL, 80x120 ölçüde olup EPAL lisansı ve damgası taşımayan palet için kullanılan günlük bir ifadedir. MEPAL EPAL lisanslı üretici değildir; EPAL ölçülerinde Euro palet temin eder ve ikinci el EPAL alım satımı yapar. Damgasız palet açıkça damgasız olarak sunulur." },
  { q: "Teklif ne kadar sürede gelir?", a: "Mesai saatlerinde (Pazartesi–Cumartesi 08:30–18:00) en kısa sürede dönüş yapıyoruz. Mesai dışı talepler bir sonraki çalışma gününde değerlendirilir." },
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
            <p className="eyebrow">Gebze depo · Türkiye geneli sevkiyat</p>
            <h1>Ahşap ve Plastik Palet Satışı – Gebze Depodan Türkiye Geneli</h1>
            <p className="lead">
              WhatsApp’tan hızlı fiyat. Gebze deposundan Türkiye’nin her yerine toplu palet tedariki: euro palet, ahşap palet, plastik palet, ikinci el palet ve hurda palet alımı.
            </p>
            <CtaButtons message="Merhaba, palet için fiyat almak istiyorum. Ürün: … Adet: … İl: …" source="home-hero" />
            <ul className="trust-list">
              <li>WhatsApp&apos;tan güncel fiyat</li>
              <li>Gebze Pelitli’de depo</li>
              <li>ISPM-15 uyumlu ihracat paleti</li>
              <li>Hızlı dönüş</li>
            </ul>
          </div>
          <div className="home-hero-photo">
            <Photo name="p11" priority sizes="(min-width: 900px) 520px, 100vw" />
          </div>
        </div>
      </header>

      <section className="split-strip" aria-label="Alıcı ve satıcılar için">
        <div className="wrap split-in">
          <Link prefetch={false} href="/palet-fiyatlari/" className="split-cell">
            <span>
              <small>Alıcılar için</small>
              <strong>Palet Satın Al</strong>
              <em>Sıfır, ikinci el, euro ve plastik palet — tek veya toplu sipariş.</em>
            </span>
            <Icon name="arrow" size={22} />
          </Link>
          <Link prefetch={false} href="/hizmetler/hurda-palet-alimi/" className="split-cell">
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
                <Link prefetch={false} href={s.href}>
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
            { n: "p15" as const, t: "İkinci El Palet", h: "/urunler/ikinci-el-palet/" },
            { n: "p17" as const, t: "Ahşap Palet", h: "/urunler/sifir-ahsap-palet/" },
            { n: "p13" as const, t: "Euro Palet", h: "/urunler/80x120-euro-palet/" },
          ].map((x) => (
            <Link prefetch={false} key={x.h} href={x.h} className="trio-item">
              <Photo name={x.n} sizes="(min-width: 900px) 360px, 100vw" />
              <span>{x.t}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="urunler-h">
        <div className="wrap">
          <p className="eyebrow">Fiyat için WhatsApp</p>
          <h2 id="urunler-h">Palet çeşitleri</h2>
          <p className="muted">Her ürünün sayfasında ölçü ve taşıma kapasitesi var. Güncel fiyat piyasaya göre değiştiği için WhatsApp&apos;tan veriyoruz.</p>
          <CardGrid items={featured.map((p) => ({ href: `/urunler/${p.slug}/`, title: p.name, blurb: p.blurb, art: p.art, foot: fromPriceLabel(p.slug) ?? "WhatsApp'tan fiyat al" }))} />
          <p className="cta-row">
            <Link prefetch={false} className="btn btn-green" href="/palet-fiyatlari/">
              Palet çeşitleri ve fiyat al
            </Link>
            <Link prefetch={false} className="btn btn-ghost" href="/urunler/">
              Tüm ürünler
            </Link>
          </p>
        </div>
      </section>

      <section className="section beige" aria-labelledby="terim-h">
        <div className="wrap">
          <p className="eyebrow">Hangi palet?</p>
          <h2 id="terim-h">EPAL, çakma EPAL, orta palet, CP3: farkı bilerek seçin</h2>
          <p className="muted">
            Piyasada aynı ölçüdeki ahşap palete farklı adlar verilir: 80x120 palet, EUR palet, Euro palet, EPAL, çakma EPAL. Orta palet ve kalın orta palet ise tahta kalınlığına göre yapılan günlük sınıflardır. Ne aldığınızı bilmeniz için her terimin kendi sayfası var; ihracat için ısıl işlemli palet, ürününüzü sevkiyata hazırlamak için ambalaj paleti sayfalarına bakabilirsiniz.
          </p>
          <ul className="chips">
            {TERMS.map(([label, href]) => (
              <li key={href}>
                <Link prefetch={false} href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="fiyat-h">
        <div className="wrap">
          <p className="eyebrow">Fiyat al</p>
          <h2 id="fiyat-h">Güncel palet fiyatı için WhatsApp</h2>
          <PriceTable rowKeys={["euro-ikinci-el-1", "euro-sifir", "ahsap-sifir-100x120", "ihracat-ispm15", "plastik-hafif"]} compact />
          <p>
            <Link prefetch={false} href="/palet-fiyatlari/">Tüm ürünler için fiyat al →</Link>
          </p>
        </div>
      </section>

      {sectors.length > 0 && (
        <section className="section beige" aria-labelledby="sektor-h">
          <div className="wrap">
            <p className="eyebrow">Sektörler</p>
            <h2 id="sektor-h">Sektörünüze uygun palet</h2>
            <ul className="chips">
              {sectors.map((x) => (
                <li key={x.slug}>
                  <Link prefetch={false} href={`/sektorler/${x.slug}/`}>{x.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="teklif-h">
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
              Daha ayrıntılı seçim için adım adım <Link prefetch={false} href="/teklif-al/">teklif sihirbazını</Link> veya <Link prefetch={false} href="/araclar/">palet araçlarını</Link> kullanabilirsiniz.
            </p>
          </div>
          <MiniQuote id="home" />
        </div>
      </section>

      {regions.length > 0 && (
        <section className="section" aria-labelledby="bolge-h">
          <div className="wrap">
            <p className="eyebrow">Hizmet bölgeleri</p>
            <h2 id="bolge-h">Depomuz Gebze’de, sevkiyat Türkiye’nin her yerine</h2>
            <ul className="chips">
              {[...wave1, ...wave2].map((r) => (
                <li key={r.slug}>
                  <Link prefetch={false} href={`/bolge/${r.slug}/`}>{r.name}</Link>
                </li>
              ))}
              <li>
                <Link prefetch={false} href="/bolge/">Tüm bölgeler →</Link>
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
              <Link prefetch={false} href="/rehber/">Tüm rehber yazıları →</Link>
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
