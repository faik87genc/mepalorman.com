# MEPAL — Kendi site envanteri ve boşluk analizi (iç belge, salt-okunur denetim)

Tarih: 2026-10-28. Kapsam: kod DEĞİŞTİRİLMEDİ. Kaynaklar: `app/`, `lib/`, `components/`, `next.config.ts`, mevcut `.next` derleme çıktısı (125 HTML), `docs/RAKIP-ANALIZI.md`, `docs/RAKIP-ANALIZI-2.md`, `docs/ICERIK-BRIFI.md`.
Not: Next 16.3.6 / React 19.2.8; `node_modules/next/dist/docs/` mevcut. Aşağıdaki öneriler yalnızca mevcut dosya kalıplarına dayanır, yeni API varsayımı yoktur.

---

## 1. Mevcut URL envanteri

Toplam indekslenebilir URL: **122** (sitemap'te). `trailingSlash: true`, tüm rotalar statik (`dynamicParams = false` + `generateStaticParams`). Gizli: `/tesekkurler/` (noindex, robots disallow). Veri kayıtları: 107 slug (21 ürün + 8 hizmet + 25 bölge + 6 sektör + 34 rehber + 7 fiyat + 6 kurumsal).

### 1.1 Ana sayfa ve hub sayfaları (11)
`/`, `/urunler/`, `/hizmetler/`, `/bolge/`, `/sektorler/`, `/rehber/`, `/araclar/`, `/teklif-al/`, `/iletisim/`, `/sss/`, `/galeri/`
(`/sss/` içeriği fiyat+ürün+hizmet SSS'lerinden otomatik derlenir, FAQPage şeması bilerek yok; `/galeri/` ImageGallery şeması var.)

### 1.2 Araçlar (4, `app/araclar/<ad>/page.tsx`, istemci bileşenleri `components/tools/`)
`/araclar/konteyner-palet-hesaplama/`, `/araclar/palet-secici/`, `/araclar/palet-danismani/` (AI sohbet, `/api/danisman`), `/araclar/fotograftan-palet-degerleme/` (`/api/degerleme`). Teklif: `/teklif-al/` sihirbaz (`/api/teklif`).

### 1.3 Fiyat sayfaları (7, kök seviye, `app/[slug]/page.tsx` ← `lib/data/pricePages.ts`)
`/palet-fiyatlari/`, `/ahsap-palet-fiyatlari/`, `/ikinci-el-palet-fiyatlari/`, `/euro-palet-fiyatlari/`, `/plastik-palet-fiyatlari/`, `/hurda-palet-fiyatlari/`, `/ozel-olcu-palet-fiyatlari/`

### 1.4 Ürünler (21, `/urunler/<slug>/` ← `products.ts` + `products-extra.ts`)
80x120-euro-palet, epal-palet, 100x120-palet, cp-palet, ikinci-el-palet, sifir-ahsap-palet, plastik-palet, 145x145-palet, turpal-palet, ozel-olcu-palet, ihracat-paleti, ahsap-sandik, takozlu-palet, ince-palet, ikinci-el-euro-palet, isil-islemli-palet, cakma-epal-palet, orta-palet, kalin-orta-palet, ambalaj-paleti, cp3-palet

### 1.5 Hizmetler (8, `/hizmetler/<slug>/` ← `services.ts` + `services-extra.ts`)
hurda-palet-alimi, palet-alim-satim, palet-tamiri, toptan-palet, yerinde-palet-toplama, palet-nakliye-lojistik, hasarli-palet-alimi, kirik-palet-alimi

### 1.6 Bölgeler (25, `/bolge/<slug>/` ← `regions.ts`; wave 1: 9, wave 2: 10, wave 3: 6)
Kocaeli: gebze-palet, dilovasi-palet, cayirova-palet, sekerpinar-palet, izmit-palet, korfez-palet, derince-palet, kartepe-palet, kocaeli-palet, balcik-palet, gebze-osb-palet, plastikciler-osb-palet
İstanbul Anadolu: tuzla-palet, pendik-palet, darica-palet, kartal-palet, atasehir-kadikoy-palet, sancaktepe-palet, umraniye-palet, sultanbeyli-palet, istanbul-palet, imes-palet, kurtkoy-palet, maltepe-palet, cekmekoy-palet
İstanbul Avrupa yakası: **yok** (yalnızca genel `istanbul-palet`).

### 1.7 Sektörler (6, `/sektorler/<slug>/` ← `sectors.ts`)
gida-ve-icecek, otomotiv-ve-yan-sanayi, beyaz-esya, kimya-ve-plastik, ihracat-ve-lojistik, e-ticaret-ve-depo

### 1.8 Rehber (34, `/rehber/<slug>/` ← `guides-a/b/c/d.ts`, `guides.ts` birleştirir, `week` ile sıralar)
- A (12): euro-palet-olculeri, konteynere-ve-tira-kac-palet-sigar, palet-cesitleri-ve-secimi, epal-palet-ile-standart-palet-farki, ispm-15-nedir, palet-kac-kg-tasir, palet-yuksekligi-kac-cm, 1-tir-kac-palet-alir, ahsap-palet-mi-plastik-palet-mi, ikinci-el-palet-alirken-dikkat-edilecekler, palet-kalite-siniflari, cp-paletleri-olcu-tablosu
- B (12): hurda-paletinizi-nasil-degerlendirirsiniz, palet-nasil-istiflenir, 100x120-ile-80x120-palet-farki, gida-sektoru-icin-palet-secimi, ihracatta-palet-ve-ambalaj-kurallari, palet-raf-sistemleri-ve-raf-yuku, yarim-euro-palet-60x80, palet-havuzu-ve-palet-kiralama, palet-omru-nasil-uzatilir, plastik-palet-cesitleri, palet-maliyetini-dusurmenin-yollari, palet-sozlugu
- C (5): ahsap-palet-nedir, sifir-palet-mi-ikinci-el-palet-mi, palet-fiyatlarini-etkileyen-faktorler, ikinci-el-palet-guvenli-mi, ahsap-palet-geri-donusum
- D (5): cakma-epal-nedir, orta-palet-ve-kalin-orta-palet-farki, ambalaj-paleti-nedir, eur-palet-nedir, hasarli-ve-kirik-palet-ne-yapilir

### 1.9 Kurumsal (6, kök seviye, `app/[slug]/page.tsx` ← `lib/data/pages.ts`)
`/hakkimizda/`, `/belgeler/`, `/referanslar/`, `/kvkk/`, `/cerez-politikasi/`, `/turkiye-geneli-palet-sevkiyati/`

### 1.10 Teknik rotalar
`/sitemap.xml` (`app/sitemap.ts`), `/robots.txt` (`app/robots.ts`: allow `/`, disallow `/api/` ve `/tesekkurler/`, sitemap bağlı), `/llms.txt` (`app/llms.txt/route.ts`, statik), `/opengraph-image` (`app/opengraph-image.tsx`, tek global 1200x630), `/icon.svg`, `404` (`app/not-found.tsx`), API: `/api/teklif`, `/api/danisman`, `/api/degerleme` (header ile noindex, no-store).
Eski WordPress yönlendirmeleri (`next.config.ts` `LEGACY_REDIRECTS`, 10 kalem, 308): ahsap-palet, epal-palet, turpal-palet, euro-palet, plastik-palet, 2-el-palet, ikinci-el-palet, blog, hakkimizda-2, iletisim-2. Yorum: "tam liste Search Console/eski sitemap'ten doldurulacak" notu hâlâ duruyor; `docs/YAYIN-LISTESI.md` repoda yok.

---

## 2. Sistem özeti (kod haritası)

| Konu | Yer | Nasıl çalışır |
|---|---|---|
| Şirket gerçekleri (NAP) | `lib/site.ts` | tek kaynak; JSON-LD, footer, WhatsApp linki buradan |
| Metadata | `lib/seo.ts` `pageMeta()` | `title.absolute`, description, canonical (mutlak URL), OG (website/article, tr_TR), twitter `summary_large_image`, `noindex` seçeneği. Kök `layout.tsx` `metadataBase` + `title.template: "%s"` |
| JSON-LD | `lib/seo.ts` + `components/Content.tsx` `JsonLd` | `<`, kaçışlı script. Kök layout: Organization + LocalBusiness(`#depo`) + WebSite. Sayfa içi: BreadcrumbList (her `Breadcrumbs`), FAQPage (`FaqList`, `schema` bayrağı), Product (ürün+fiyat sayfaları), Service (hizmet, bölge, sektör), Article (rehber), ImageGallery (galeri) |
| Sayfa kabuğu | `components/ContentLayout.tsx` | PageHero (foto), Breadcrumbs, içerik+yan kolon (ContactCard, SideCard), FinalCta, `ld` prop'u |
| Bölüm render | `components/Content.tsx` | `SectionsView` (p, list, steps, table, links), `FaqList`, `PriceTable`, `SpecTable`, `RelatedLinks`, `CtaButtons`, `FinalCta` |
| Kartlar | `ContentLayout.CardGrid` | hub sayfaları; `art==="plastic"` ise fotoğraf yerine SVG çizim |
| Navigasyon/footer | `lib/data/nav.ts` + `components/SiteChrome.tsx` | `mainNav` (7 öğe), `footerGroups` (5 grup, elle seçilmiş linkler), mobil `<details>` menü, `MobileBar` (sabit WhatsApp/ara) |
| Fiyat verisi | `lib/data/prices.ts` | 13 `PRICE_ROWS`, hepsinde `tiers: null` (fiyat yayınlanmıyor; WhatsApp). `PRICES_UPDATED = 2026-10-25` |
| Fotoğraf | `components/Photo.tsx` | 18 gerçek foto (p01–p18, 480/800/1280 webp = 54 dosya `public/img/`), kaynak JPEG'ler `img/`, üretim: `scripts/build-photos.mjs`. `photoFor(art, seed, shift)`: `BY_SLUG` önce, sonra `art` havuzu + tohum hash'i. Alt metinler `PHOTOS` sözlüğünde |
| Art bileşeni | `components/Art.tsx` | Orijinal SVG çizimler (`viewBox 400x260`, `aria-hidden`). 14 `ArtKind`: euro, wood, plastic, used, scrap, big, custom, ispm, crate, cp, truck, container, region, service. `Pallet`, `PalletStack`, `Crate`, `Pin`, `Truck` alt çizimleri. Şu an fiilen yalnızca `plastic` için gösteriliyor (gerçek plastik foto yok); `ContentLayout` `noPhoto = art==="plastic"` |
| Logo/varlık | `components/Logo.tsx`, `public/assets/logo*.png`, `app/icon.svg`, `public/test-logo.svg` | `test-logo.svg` kullanılmıyor görünüyor |
| Denetim | `scripts/audit-build.mjs` | `next build` sonrası: meta uzunlukları, yinelenen title, ince içerik, kırık iç link |
| Güvenlik/başlık | `next.config.ts` | CSP (zorunlu kısmi + report-only tam), HSTS, COOP, Permissions-Policy; `/img` 30 gün önbellek |
| Analitik/çerez | `components/CookieConsent.tsx`, `NEXT_PUBLIC_GA4_ID` | GA4 yalnızca onay sonrası |

Veri sağlığı (script ile ölçüldü): 107 kayıtta title ≤ 60 ve description ≤ 155 ihlali **yok**; yinelenen `keyword` **yok**; veri dosyalarında düz TL rakamı **yok** (brif uyumlu). Kayıtlar arası hiç dahili kopya anahtar kelime çakışması tespit edilmedi.

---

## 3. Yeni sayfa eklemenin adım adım yolu

Ortak: tüm slug'lar küçük harf, ASCII, tire; URL sonu `/`. Yazmadan önce `docs/ICERIK-BRIFI.md` yasaklarını uygula (düz TL yok, rakip adı yok, EPAL/Turpal lisans iddiası yok, kesin teslim süresi yok, uydurma sayı yok). İç linkler yalnızca mevcut rotalara.

### 3.1 Ortak alan şeması (`lib/types.ts` `Base`)
`slug, title (≤60, "| MEPAL" dahil), description (≤155), h1 (tek), answer (2–3 cümle), keyword (sayfaya özgü), sections[] (h + p/list/steps/table/links), faq[], art (ArtKind)`.

### 3.2 Sayfa türüne göre
**A) Yeni ürün** (`/urunler/<slug>/`)
1. `lib/data/products-extra.ts` (veya `products.ts`) dizisine `Product` ekle: ek alanlar `name, priceRow?, specs [["Ölçü","…"]], uses[], related[] (ürün slug), guides[] (rehber slug), blurb`.
2. Fiyat satırı istiyorsan `lib/data/prices.ts` `PRICE_ROWS`'a `{key, name, spec, tiers:null, condition, product:"<slug>"}` ekle; ilgili fiyat sayfasının `rowKeys`'ine key'i ekle (`pricePages.ts`).
3. Fotoğraf: `components/Photo.tsx` `BY_SLUG`'a konuya birebir uyan foto eşle (yoksa `art` havuzundan otomatik). Plastik türevinde `art:"plastic"` → çizim gösterilir.
4. Otomatik gelenler: `generateStaticParams`, `sitemap.ts`, `/urunler/` hub kartı, `llms.txt`, Product JSON-LD, Breadcrumb, FAQPage, SSS sayfası birleşimi.
5. Elle yapılacak: ilgili ürünlerin `related` listesine geri link; footer'da görünsün istiyorsan `nav.ts` `footerGroups`; ana sayfada kart istiyorsan `app/page.tsx`; ilgili rehberin `related`/içerik `links`'ine link.

**B) Yeni hizmet** (`/hizmetler/<slug>/`): `services-extra.ts` (veya `services.ts`) → `Service` (`name, blurb, related[], guides[]`). Otomatik: rota, sitemap, hub, llms.txt, Service şeması (şu an `areaServed` varsayılanı "Kocaeli, İstanbul", bkz. 5). Elle: `nav.ts`, ana sayfa `SERVICES` dizisi (`app/page.tsx`).

**C) Yeni bölge** (`/bolge/<slug>/`): `lib/data/regions.ts` → `Region` (ek: `name, wave 1|2|3, distance, zones[], blurb, nearby[] (bölge slug)`; `art:"region"`). Otomatik: rota, sitemap, `/bolge/` hub, llms.txt, Service şeması (`area: r.name`). Elle: komşu bölgelerin `nearby` listesi (geri link), gerekirse `localBusinessLd` `areaServed` (şu an 8 isim, sabit), ana sayfa bölge bloğu. Avrupa yakası için metinde "Türkiye geneli sevkiyat" çerçevesi korunmalı (RAKIP-ANALIZI-2 notu).

**D) Yeni fiyat sayfası** (kök `/<slug>/`): `lib/data/pricePages.ts` → `PricePage` (`rowKeys[], related[] (ürün slug), guides[], sections, faq, art`). Otomatik: `app/[slug]` `generateStaticParams`, sitemap (öncelik 0.95), Product şeması (fiyat aralığı boş çünkü `tiers:null`), yan kolonda "Diğer fiyat sayfaları". Elle: `nav.ts` footer "Fiyatlar" grubu, `app/llms.txt/route.ts` "Fiyatlar" listesi (**elle sabit liste**, otomatik değil), ürün sayfalarındaki yan kart (`urunler/[slug]/page.tsx` yalnızca 3 fiyat linki sabit), `app/page.tsx` fiyat bölümü.

**E) Yeni rehber** (`/rehber/<slug>/`): `guides-a/b/c/d.ts`'den birine (yeni küme için yeni `guides-e.ts` açıp `guides.ts` birleşimine ekle) `Guide` ekle (`published, updated, week, related[], readMinutes`). Otomatik: rota, sitemap (`lastModified = updated`), hub, llms.txt, Article şeması, yan kolon başlık içeriği. Eski rehberlere geri link: `lib/data/guides.ts` içindeki `extraRelated` haritası.

**F) Yeni sektör**: `sectors.ts` → `Sector` (`products[]` slug). Otomatik: rota, hub, sitemap. (llms.txt'e girmiyor.)

**G) Yeni kurumsal/statik sayfa** (kök): `lib/data/pages.ts` `StaticPage` (`updated`) → `app/[slug]` ve sitemap otomatik (öncelik 0.4). Nav/footer'a elle.

**H) Yeni hub veya özel şablonlu sayfa** (ör. `/surec/`, `/blog/`): `app/<ad>/page.tsx`, `pageMeta()` + `Breadcrumbs` + `PageHero` + `FinalCta`; **sitemap.ts'e elle** hub listesine ekle.

**I) Yeni fotoğraf**: JPEG'i `img/` altına koy → `scripts/build-photos.mjs` çalıştır (480/800/1280 webp) → `Photo.tsx` `PHOTOS` (Türkçe alt metin) ve `POOLS`/`BY_SLUG`'a ekle. Plastik için gerçek foto gelince `ContentLayout.noPhoto` ve `CardGrid` içindeki `plastic` istisnasını kaldır.

### 3.3 Yayın öncesi kontrol listesi
`npx tsc --noEmit` → `npx next build` → `node scripts/audit-build.mjs` (meta uzunluğu, yinelenen title, kırık link). Brife göre: `next dev/build` ajanlar eş zamanlı çalışırken çakışır.

---

## 4. Rakip analizindeki fırsatlardan hangileri hâlâ EKSİK

Karşılaştırma `RAKIP-ANALIZI.md` (iç doküman 1) ve `RAKIP-ANALIZI-2.md` (iç doküman 2) maddeleri vs. mevcut 122 URL.

### 4.1 Kapananlar (artık bizde var)
takozlu-palet, ince-palet, ikinci-el-euro-palet, isil-islemli-palet, orta/kalın orta palet, cakma-epal, ambalaj-paleti, cp3-palet; yerinde-palet-toplama, palet-nakliye-lojistik, hasarli/kırık palet alımı; hurda-palet-fiyatlari, ozel-olcu-palet-fiyatlari; kocaeli/istanbul/balcik/gebze-osb/plastikciler-osb/imes/kurtkoy/maltepe/cekmekoy bölge sayfaları; /sss/, /galeri/, /turkiye-geneli-palet-sevkiyati/; rehberler (ahsap-palet-nedir, sifir-mi-ikinci-el-mi, fiyat faktörleri, ikinci-el güvenli mi, geri dönüşüm); CP1/CP5/CP9 `cp-paletleri-olcu-tablosu` rehberinde ve ürün metinlerinde geçiyor (RAKIP-2 madde 6 pratikte karşılanmış); "paletçi/palet tedariği/toplu alım" ifadeleri bölge, hizmet, fiyat ve hakkımızda metinlerinde geçiyor (madde 7 büyük ölçüde karşılanmış, başlık/H1 düzeyi ayrıca kontrol edilebilir).

### 4.2 Hâlâ eksik (öncelik sırasıyla)
1. **İstanbul Avrupa yakası ilçe sayfaları** (RAKIP-2 #1): Avcılar, Esenyurt, Beylikdüzü, Başakşehir, Bağcılar, Küçükçekmece, Büyükçekmece, Silivri, Çatalca vb. Mevcut `regions.ts` içinde sıfır adet (yalnızca `istanbul-palet`). Rakip B'nin 25 sayfalık alanı; en büyük boşluk. Şablon hazır (bölüm 3.2-C); wave 3 olarak eklenir, metinde mesafe/"Türkiye geneli sevkiyat" çerçevesi.
2. **Eksik fiyat sayfaları**: `tahta-palet-fiyatlari`, `80x120-palet-fiyatlari` (RAKIP-2 #2); `gebze-ahsap-palet-fiyatlari`, `kocaeli-ahsap-palet-fiyatlari` (RAKIP-1). `euro-palet-fiyati` ayrı sayfa yerine `euro-palet-fiyatlari` ile aynı niyet (kopya riski; yalnızca title/H1 varyasyonu düşünülmeli).
3. **Plastik palet kümesi** (RAKIP-2 #3): tek `plastik-palet` ürünü var. Eksik: 80x120 plastik, 100x120 plastik, hijyenik (beyaz) plastik palet, plastik euro palet, ikinci el plastik palet, plastik palet kasa. Rehber `plastik-palet-cesitleri` var ama ürün sayfaları yok. Gerçek plastik fotoğraf hâlâ yok (Art çizimi kullanılıyor).
4. **Ahşap kasa ailesi** (#4): `ahsap-sandik` ve `ambalaj-paleti` var; tahta kasa, dekoratif ahşap kasa, palet sandık, ihracat kasası ayrı sayfa olarak yok.
5. **Niş palet tipleri** (#5): arası sık palet, kapalı ihracat paleti, kadranlı palet, 80x120 kirli (kullanılmış) euro palet, ikinci el ahşap palet (ayrı), izgara/press palet. Teknik doğrulama şart.
6. **Hizmet/rehber/diğer (RAKIP-1)**: `ahsap-atik-geri-donusum` (hizmet sayfası; rehber var), `isil-islem-ispm-15` hizmet sayfası (ürün var), `/surec/` ("Talepten Teslimata"; ana sayfada `steps-grid` bölümü var ama ayrı sayfa yok), `/blog/` dizini (rehber hub'ı bunu karşılıyor, eski `/blog` → `/rehber/` yönlendirmesi var), aydinli/orhanli/icmeler bölge sayfaları, `suudi-arabistan-palet-zorunlulugu` rehberi (yüksek doğrulama gereksinimi), `sandik-palet`, `tahta-palet` ürün sayfaları.
7. **Marka/müşteri adlı niş**: "şişecam palet", "della palet" — hukuki durum netleşmeden yapılmamalı (RAKIP-2 notu).
8. **Referanslar/belgeler**: sayfalar var, içerik gerçekliği (uydurma yok) ayrıca doğrulanmalı; boş sayaç gösterilmiyor (iyi).

Karar notu: kapsam/hacim kararı müşteriye (Cevat Bey) sorulmalı (RAKIP-2).

---

## 5. Teknik SEO eksikleri ve bulgular

Derlenmiş HTML (`.next/server/app`) üzerinde doğrulandı; "doğrulanmadı" olanlar belirtildi.

### 5.1 Yüksek öncelik
1. **İç sayfalarda `og:image` / `twitter:image` YOK.** Derlenmiş `urunler/epal-palet.html` içinde yalnızca og:title/description/url/site_name/locale/type ve twitter title/description var; ana sayfada `og:image` (`/opengraph-image`) var. Neden: `pageMeta()` her sayfada `openGraph` nesnesini tamamen yeniden tanımlıyor, kökteki dosya-tabanlı görsel kalıtılmıyor. Sosyal paylaşım ve bazı AI/arama önizlemeleri görselsiz. Çözüm: `pageMeta` içine `openGraph.images`/`twitter.images` eklemek (global OG görseli veya sayfa türüne göre foto `/img/pNN-1280.webp`) ya da `opengraph-image` dosyalarını segment bazlı üretmek.
2. **Product şeması eksik alan**: fiyat yayınlanmadığı için (`tiers:null`) `offers` hiç üretilmiyor (aralık `undefined`); `image`, `sku`, `category`, `additionalProperty` (ölçü) yok. Google ürün zengin sonucu için `offers` veya `review/aggregateRating` gerekir; şu an yalnızca temel anlamlandırma sağlıyor. Uydurma puan eklenmemeli. Öneri: `image` ekle, `offers` yerine `availability`/`seller` içeren `Offer` (price olmadan geçerli değil; bu yüzden Product yerine `Product` + `additionalProperty` ölçü bilgisi veya sadece `WebPage`/`ItemPage` daha dürüst olabilir). `priceValidUntil` yalnızca offers varken yazılır (kod bunu zaten yapıyor).
3. **Service `areaServed` tutarsızlığı**: `serviceLd` varsayılanı "Kocaeli, İstanbul"; hizmet ve sektör sayfaları alan vermiyor, oysa marka mesajı ve brifte "Türkiye geneli". `localBusinessLd` `areaServed` yalnızca 8 yer adı. Öneri: varsayılanı `Country: Türkiye` yapıp bölge sayfalarında ilçeyi korumak.
4. **Sitemap `lastModified`**: ürün/hizmet/bölge/sektör/hub/fiyat tüm sayfalarda `PRICES_UPDATED` (2026-10-25) sabit; yalnızca rehber/kurumsal sayfalar gerçek tarih taşıyor. `priority` Google tarafından yok sayılır. Sayfa içeriği değiştikçe tarihin gerçekten güncellenmesi gerekir; aksi halde lastmod güvenilirliği düşer.

### 5.2 Orta öncelik
5. **llms.txt eksik/sabit**: Fiyat listesi elle sabit 5 kalem (`hurda-palet-fiyatlari`, `ozel-olcu-palet-fiyatlari` yok); sektörler, kurumsal sayfalar, `/sss/`, `/galeri/`, `palet-danismani`, `fotograftan-palet-degerleme` yok. Ürün/hizmet/bölge/rehber otomatik. Metindeki "Fiyatlar sitede yayınlanmaz" ifadesi doğru ama AI crawler için `/palet-fiyatlari/` açıklamasıyla çelişmeyecek şekilde netleştirilebilir. `llms-full.txt` yok.
6. **hreflang yok**: tek dilli (tr-TR) site için zorunlu değil; `<html lang="tr">` ve `inLanguage: tr-TR` mevcut. Çok dilli (EN/AR ihracat) planlanırsa `alternates.languages` eklenmeli. Şimdilik eksik değil, bilgi.
7. **Hub sayfalarında şema**: `/urunler/`, `/hizmetler/`, `/bolge/`, `/rehber/`, `/sektorler/`, `/araclar/` yalnızca BreadcrumbList taşıyor; `CollectionPage`/`ItemList` yok. `WebSite` için `SearchAction` yok (site içi arama zaten yok, gerekmez).
8. **Article şeması**: `image` yok (Google "önerilen alan"), `author` Organization (kabul edilir), `wordCount/keywords` yok. Rehberlere `image` olarak ilgili foto eklenebilir.
9. **Organization**: `sameAs` (sosyal profiller, Google İşletme Profili) yok; `contactPoint` yok; `LocalBusiness` türü genel (daha dar tür, ör. `Store`/`WholesaleStore`, düşünülebilir). `geo` koordinatı "yaklaşık" yorumlu (site.ts) → tam konum pini ile değiştirilmeli (yerel SEO). `taxID` herkese açık şemada yer alıyor (bilinçli mi kontrol edilmeli).
10. **Canonical**: tüm sayfalarda mutlak ve eğik çizgili (`trailingSlash`), doğru. `NEXT_PUBLIC_SITE_URL` yanlış ortamda boş kalırsa varsayılan `https://mepalorman.com` kullanılır; `.env.example`'da var. Sorun yok. Parametreli URL (UTM) için ek bir önlem gerekmiyor (canonical sayfa başına sabit).
11. **FAQPage tekrarı**: SSS sayfası bilerek şemasız (iyi); ancak aynı soru metinleri ürün sayfaları ve `/sss/`'te tekrar ediyor (benzer içerik riski düşük, `uniq` ile tekilleştirilmiş). Google FAQ zengin sonucu 2023'ten beri sınırlı; şema zarar vermez.
12. **Eski WordPress yönlendirmeleri**: yalnızca 10 sabit kalem; canlıya geçişte Search Console'daki gerçek URL listesiyle genişletilmeli (kod notu da bunu söylüyor, `docs/YAYIN-LISTESI.md` yok).

### 5.3 Hız
- Güçlü: `experimental.inlineCss`, `next/font` (Archivo, `display: swap`, `preload`), webp srcset (480/800/1280), hero görsel `fetchPriority=high` ve `loading=eager`, diğerleri lazy, `width/height` + `aspect-ratio` verilmiş (CLS düşük), `/img` 30 gün önbellek, statik üretim, `prefetch={false}` linklerde, GA4 yalnızca onayla.
- Eksik/risk: görseller ham `<img>`; `images.formats` avif tanımlı ama `next/image` kullanılmadığı için AVIF sunulmuyor; `Cache-Control` `immutable` değil (dosya adı hash'siz olduğu için bilinçli olabilir). Hero görseli CSS arka plan değil `<img>`; iyi. Gerçek ölçüm (Lighthouse/CrUX) bu denetimde yapılmadı: **doğrulanmadı**. LCP için 1280px hero sayfa başına tek dosya; mobilde `sizes="100vw"` ile 800w seçilir.
- CSP: zorunlu kısım yalnızca `base-uri/object-src/frame-ancestors/form-action`; tam politika report-only (`'unsafe-inline'` ile). Raporlama uç noktası tanımlı değil (report-uri/report-to yok) → rapor toplanmıyor.

### 5.4 Erişilebilirlik
- İyi: `<html lang="tr">`, "İçeriğe geç" skip link, `<main id="icerik">`, tek H1 yapısı (şablon), `aria-label`'lı nav/aside/section, `aria-current="page"` kırıntıda, SVG çizimler `aria-hidden`, hero foto `alt=""` (dekoratif), içerik fotoları anlamlı Türkçe alt, SSS `<details>/<summary>`, mobil menü `<details>` + `aria-label`.
- Kontrol edilmeli (otomatik/manuel test yapılmadı, **doğrulanmadı**): renk kontrastı (altın/yeşil tema, `theme.css`), odak göstergeleri, mobil menüde klavye/Esc kapatma (yerel `<details>` kullanıyor, Esc ile kapanmaz), çerez bandı odak yönetimi (`CookieConsent`), araç bileşenlerinde (Wizard, Calculator, AdvisorChat) form etiketleri/`aria-live` durum bildirimi, `MobileBar` içerik örtmesi. Öneri: `accessibility-scan` ile örnek sayfa seti taranmalı.
- Metin: "Hemen Ara · 0536…" düğmesi ve WhatsApp bağlantıları `target=_blank` + `rel=noopener` (yeni sekme uyarısı yok, küçük).

### 5.5 Diğer
- Sürüm: `public/test-logo.svg` kullanılmayan test dosyası görünüyor.
- `scripts/audit-build.mjs` var; CI'ye bağlı değil.
- `README.md` ve `Mepalorman_Web_Sitesi_Yol_Haritasi.docx` repoda; `AGENTS.md`/`CLAUDE.md`/`docs/RAKIP-ANALIZI-2.md` izlenmiyor (untracked).
- `trailingSlash: true` ile `/llms.txt` ve `/sitemap.xml` doğrudan dosya olarak sunulur; sorun yok.

---

## 6. Önerilen sıra (özet)
1. `pageMeta` OG/Twitter görseli (tüm 121 iç sayfa) — hızlı, yüksek etki.
2. Avrupa yakası ilçe sayfaları (8–12 adet) — en büyük içerik boşluğu.
3. Eksik fiyat sayfaları (tahta, 80x120, gebze/kocaeli ahşap) ve plastik palet kümesi.
4. `areaServed` düzeltmesi, `llms.txt` tamamlama, sitemap lastmod doğruluğu, şema `image` alanları.
5. Ahşap kasa ailesi ve niş palet tipleri (doğrulanmış teknik bilgiyle).
6. Erişilebilirlik taraması ve Lighthouse ölçümü; yayın öncesi eski URL yönlendirme listesi.
