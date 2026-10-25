import Link from "next/link";
import type { Metadata } from "next";
import { Art } from "@/components/Art";
import { CardGrid } from "@/components/ContentLayout";
import { CtaButtons, FaqList, FinalCta } from "@/components/Content";
import { MiniQuote } from "@/components/MiniQuote";
import { products } from "@/lib/data/products";
import { regions } from "@/lib/data/regions";
import { guides } from "@/lib/data/guides";
import { fromPriceLabel } from "@/lib/format";
import { pageMeta } from "@/lib/seo";
import { PRICES_UPDATED_LABEL } from "@/lib/data/prices";
import { site } from "@/lib/site";
import type { FAQ } from "@/lib/types";

export const metadata: Metadata = pageMeta({
  title: "Palet Satışı Gebze, Kocaeli, İstanbul | Euro, Ahşap, Plastik | MEPAL",
  description: "Gebze deposundan euro palet, ahşap palet, plastik palet, ikinci el palet satışı ve hurda palet alımı. Tarihli güncel fiyat tablosu, WhatsApp'tan hızlı teklif.",
  path: "/",
});

const FEATURED = ["80x120-euro-palet", "ikinci-el-palet", "sifir-ahsap-palet", "plastik-palet", "ihracat-paleti", "100x120-palet"];

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
      <header className="page-hero home-hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Gebze · Kocaeli · İstanbul Anadolu Yakası</p>
            <h1>Ahşap ve Plastik Palet Satışı – Gebze, Kocaeli, İstanbul</h1>
            <p className="answer">
              Bugün fiyat, yarın teslimat. Gebze deposundan fabrikalara toplu palet tedariki: euro palet, ahşap palet, plastik palet, ikinci el palet ve hurda palet alımı.
            </p>
            <CtaButtons message="Merhaba, palet için fiyat almak istiyorum. Ürün: … Adet: … İl: …" source="home-hero" />
            <ul className="trust-list">
              <li>Tarihli güncel fiyat tablosu</li>
              <li>Gebze Pelitli’de kendi deposu</li>
              <li>ISPM-15 uyumlu ihracat paleti</li>
              <li>Aynı gün dönüş</li>
            </ul>
          </div>
          <div className="hero-aside">
            <Art kind="euro" />
          </div>
        </div>
      </header>

      <section className="section alt" aria-labelledby="urunler-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="urunler-h">Palet çeşitleri ve güncel fiyatlar</h2>
            <p>Her ürünün sayfasında ölçü, taşıma kapasitesi ve adet kademeli fiyat tablosu var. Fiyatlar {PRICES_UPDATED_LABEL} tarihinde güncellendi.</p>
          </div>
          <CardGrid
            items={featured.map((p) => ({ href: `/urunler/${p.slug}/`, title: p.name, blurb: p.blurb, art: p.art, foot: fromPriceLabel(p.slug) ?? "Ölçüye göre teklif" }))}
          />
          <p>
            <Link className="btn btn-ghost" href="/urunler/">
              Tüm ürünler
            </Link>{" "}
            <Link className="btn btn-ghost" href="/palet-fiyatlari/">
              Palet fiyatları tablosu
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="teklif-h">
        <div className="wrap hero-grid">
          <div>
            <h2 id="teklif-h">30 saniyede teklif isteyin</h2>
            <p>Ürün, adet ve teslimat yerini yazın; güncel fiyatı aynı gün iletelim. Daha ayrıntılı seçim için adım adım <Link href="/teklif-al/">teklif sihirbazını</Link> kullanabilirsiniz.</p>
            <ol className="inline-steps">
              <li>Formu doldurun veya WhatsApp’tan yazın.</li>
              <li>Fiyat ve stok bilgisiyle sizi arayalım.</li>
              <li>Onaydan sonra sevkiyatı planlayalım.</li>
            </ol>
          </div>
          <MiniQuote />
        </div>
      </section>

      <section className="section alt" aria-labelledby="neden-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="neden-h">Neden MEPAL?</h2>
          </div>
          <ol className="steps">
            <li>
              <strong>Şeffaf, tarihli fiyat.</strong> Fiyat tablosunun üstünde “son güncelleme” tarihi yazar; adet kademeleri ve KDV durumu açıktır.
            </li>
            <li>
              <strong>Gerçek depo, yakın teslimat.</strong> Gebze Pelitli’deki depodan GOSB, Dilovası, Tuzla ve Anadolu yakası fabrikalarına kısa mesafe.
            </li>
            <li>
              <strong>Doğru palet, doğru ölçü.</strong> <Link href="/araclar/palet-secici/">Palet seçici</Link> ve <Link href="/araclar/konteyner-palet-hesaplama/">konteyner hesaplayıcı</Link> ile ihtiyacınızı önceden netleştirin.
            </li>
            <li>
              <strong>Tek dokunuşla iletişim.</strong> Telefon ve WhatsApp aynı numara: {site.phone}. Sohbet robotu değil, gerçek ekip.
            </li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="hurda-h">
        <div className="wrap">
          <div className="band">
            <div>
              <h2 id="hurda-h">Hurda ve ikinci el paletinizi alıyoruz</h2>
              <p>Fabrikanızda biriken kullanılmış, kırık veya hurda paletleri yerinde değerlendiriyor, ahşap atığı geri dönüşüme gönderiyoruz. Fotoğraf gönderin, ön değerlemeyi aynı gün yapalım.</p>
            </div>
            <div className="cta-row">
              <Link className="btn btn-gold" href="/hizmetler/hurda-palet-alimi/">
                Hurda palet alımı
              </Link>
              <Link className="btn btn-ghost" href="/araclar/fotograftan-palet-degerleme/">
                Fotoğraftan ön değerleme
              </Link>
            </div>
          </div>
        </div>
      </section>

      {regions.length > 0 && (
        <section className="section alt" aria-labelledby="bolge-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="bolge-h">Hizmet bölgeleri</h2>
              <p>Depomuz Gebze’de; Kocaeli ve İstanbul Anadolu yakasındaki sanayi bölgelerine toplu palet teslimatı yapıyoruz.</p>
            </div>
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
        <section className="section" aria-labelledby="rehber-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="rehber-h">Palet rehberi</h2>
            </div>
            <CardGrid items={homeGuides.map((g) => ({ href: `/rehber/${g.slug}/`, title: g.h1, blurb: g.description, art: g.art, foot: `${g.readMinutes} dk okuma` }))} />
            <p>
              <Link href="/rehber/">Tüm rehber yazıları →</Link>
            </p>
          </div>
        </section>
      )}

      <section className="section alt">
        <div className="wrap prose-narrow">
          <FaqList items={faq} title="Sık sorulan sorular" />
        </div>
      </section>

      <FinalCta message="Merhaba, palet için fiyat almak istiyorum. Ürün: … Adet: … İl: …" />
    </>
  );
}
