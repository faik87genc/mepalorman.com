# MEPAL Orman Ürünleri — içerik yazım brifi (tüm içerik ajanları için)

Proje: C:\Users\FAIKGENC\Desktop\mepalorman.com — Next.js 16 statik site (palet sektörü, Gebze/Kocaeli).
Kaynak yol haritası: Mepalorman_Web_Sitesi_Yol_Haritasi.docx (özeti aşağıda). Sen YALNIZCA kendi sahip olduğun veri dosyasını yazarsın.
Tipler: lib/types.ts (Product, Service, Region, Sector, Guide, Section, FAQ, Table). Fiyat verisi: lib/data/prices.ts (PRICE_ROWS anahtarları). Örnek ürün: lib/data/products.ts.

## Firma gerçekleri (değiştirme, uydurma)
- MEPAL Orman Ürünleri Sanayi ve Ticaret Ltd. Şti. Depo: Pelitli Mah., Maden Sk. No:34, 41400 Gebze/Kocaeli. Ofis: Kozyatağı, Kadıköy/İstanbul.
- Tel/WhatsApp: 0536 866 83 07. Çalışma: Pzt–Cmt 08:30–18:00.
- Ürünler: Euro palet 80x120, ahşap palet, 100x120, 114x114 (CP), 145x145, özel ölçülü, ISPM-15 ısıl işlemli (HT) ihracat paleti, Turpal, EPAL ölçülü/ikinci el EPAL, plastik palet, ikinci el palet, ihracat sandığı. Hizmet: palet tamiri, ikinci el alım-satım, hurda palet ve ahşap atık geri dönüşümü, sıfır palet üretimi, özel ölçü üretim.
- Konum mantığı: depo Gebze'de; Gebze OSB, Plastikçiler OSB, Balçık, Dilovası OSB, Şekerpınar, Tuzla OSB'ye 5–25 dk; ofis Kadıköy (Anadolu yakası).
- Ana mesaj: "Ahşap ve plastik palette bugün fiyat, yarın teslimat. Gebze deposundan Kocaeli ve İstanbul Anadolu yakası fabrikalarına toplu palet tedariki."

## KESİN YASAKLAR (uydurma = yayın riski)
- Kuruluş yılı, "X yıllık tecrübe", araç sayısı, teslim edilen palet sayısı, müşteri/referans adı, ödül, sertifika numarası, Google puanı UYDURMA.
- EPAL/Turpal lisansı olduğunu iddia etme. EPAL ve Turpal tescilli markadır: "EPAL ölçülerinde Euro palet (80x120)", "ikinci el EPAL palet alım-satımı" gibi doğru ifadeler kullan; "EPAL palet üretimi" yazma.
- ISPM-15 ısıl işlemin kendi fırınlarında yapıldığını iddia etme; "ISPM-15 uyumlu, HT damgalı ihracat paleti temini" de.
- Düz TL fiyat/rakam (fiyat yazısı) metin içinde YAZMA; fiyatlar sadece prices.ts tablosundan gelir. Metinde "güncel fiyat tablosuna bakın / teklif alın" de. (Fiyatı etkileyen faktörleri nitelik olarak anlatabilirsin.)
- Kesin teslim süresi sözü verme: "stok ve araç programına göre çoğunlukla ertesi iş günü; net süre teklifte bildirilir" gibi yumuşak ifade.
- Rakip adı verme.
- Teknik değerler (ölçü, kg, kapasite, mm, ISPM-15 kuralları, konteyner iç ölçüleri) DOĞRU olmalı. Emin değilsen WebSearch ile resmî kaynaktan (EPAL, IPPC/ISPM-15, konteyner standartları) doğrula; yine emin değilsen "yaklaşık" de.

## Yazım kuralları
- Dil: akıcı, doğal Türkçe (yapay zekâ kalıbı/dolgu cümle yok, anahtar kelime doldurma yok). Her sayfa özgün ve satın alma niyetine hizmet etmeli. Kısa paragraflar, somut sayılar, tablolar.
- `title` ≤ 60 karakter ("| MEPAL" son eki ile birlikte), `description` ≤ 155 karakter. Tek H1. `answer` 2–3 cümle, doğrudan cevap (AI/özet kutusu).
- Her anahtar kelime tek sayfaya aittir (Base.keyword). Sayfalar birbirinin kopyası olmasın.
- Bölümler (`sections`) H2 olur; içeride H1 yazma. `list`, `steps`, `table`, `links` alanlarını kullan.
- İç linkler yalnızca var olan rotalara: 
  Fiyat: /palet-fiyatlari/ /ahsap-palet-fiyatlari/ /ikinci-el-palet-fiyatlari/ /euro-palet-fiyatlari/ /plastik-palet-fiyatlari/
  Ürün (/urunler/<slug>/): 80x120-euro-palet, epal-palet, 100x120-palet, cp-palet, ikinci-el-palet, sifir-ahsap-palet, plastik-palet, 145x145-palet, turpal-palet, ozel-olcu-palet, ihracat-paleti, ahsap-sandik
  Hizmet (/hizmetler/<slug>/): hurda-palet-alimi, palet-alim-satim, palet-tamiri, toptan-palet
  Sektör (/sektorler/<slug>/): gida-ve-icecek, otomotiv-ve-yan-sanayi, beyaz-esya, kimya-ve-plastik, ihracat-ve-lojistik, e-ticaret-ve-depo
  Bölge (/bolge/<slug>/): gebze-palet, dilovasi-palet, cayirova-palet, sekerpinar-palet, tuzla-palet, pendik-palet, darica-palet, kartal-palet, atasehir-kadikoy-palet, sancaktepe-palet, izmit-palet, korfez-palet, derince-palet, umraniye-palet, sultanbeyli-palet, kartepe-palet
  Rehber (/rehber/<slug>/) slug'ları: euro-palet-olculeri, konteynere-ve-tira-kac-palet-sigar, palet-cesitleri-ve-secimi, epal-palet-ile-standart-palet-farki, ispm-15-nedir, palet-kac-kg-tasir, palet-yuksekligi-kac-cm, 1-tir-kac-palet-alir, ahsap-palet-mi-plastik-palet-mi, ikinci-el-palet-alirken-dikkat-edilecekler, palet-kalite-siniflari, cp-paletleri-olcu-tablosu, hurda-paletinizi-nasil-degerlendirirsiniz, palet-nasil-istiflenir, 100x120-ile-80x120-palet-farki, gida-sektoru-icin-palet-secimi, ihracatta-palet-ve-ambalaj-kurallari, palet-raf-sistemleri-ve-raf-yuku, yarim-euro-palet-60x80, palet-havuzu-ve-palet-kiralama, palet-omru-nasil-uzatilir, plastik-palet-cesitleri, palet-maliyetini-dusurmenin-yollari, palet-sozlugu
  Araçlar: /teklif-al/ (sihirbaz), /araclar/konteyner-palet-hesaplama/, /araclar/palet-secici/, /araclar/palet-danismani/, /araclar/fotograftan-palet-degerleme/
  Kurumsal: /hakkimizda/ /referanslar/ /belgeler/ /iletisim/ /kvkk/ /cerez-politikasi/
  Section.links biçimi: [["Etiket", "/yol/"]]. Başka rota uydurma.
- Dosyaya UTF-8 (Türkçe karakter) yaz. Dize içinde çift tırnak kullanıyorsan kaçır veya tipografik tırnak (“ ”) kullan. TS dosyası hatasız derlenmeli.
- Doğrulama: `cd C:\Users\FAIKGENC\Desktop\mepalorman.com && npx tsc --noEmit 2>&1 | grep <kendi-dosyan>` — sadece kendi dosyandaki hatalar önemli (diğer dosyalar başka ajanlarca yazılıyor). `next build` / `npm run dev` ÇALIŞTIRMA (aynı .next klasörü çakışır).
- Başka dosyaya dokunma. İşin bitince: yazdığın slug listesini ve dikkat edilmesi gerekenleri 5 satırda raporla.

## EK (rakip analizi turu) — yeni slug'lar
Ürün: takozlu-palet, ince-palet, ikinci-el-euro-palet, isil-islemli-palet
Hizmet: yerinde-palet-toplama, palet-nakliye-lojistik
Fiyat: hurda-palet-fiyatlari, ozel-olcu-palet-fiyatlari
Bölge: kocaeli-palet, istanbul-palet, balcik-palet, gebze-osb-palet, plastikciler-osb-palet, imes-palet, kurtkoy-palet, maltepe-palet, cekmekoy-palet
Rehber: ahsap-palet-nedir, sifir-palet-mi-ikinci-el-palet-mi, palet-fiyatlarini-etkileyen-faktorler, ikinci-el-palet-guvenli-mi, ahsap-palet-geri-donusum
Kurumsal: /sss/, /turkiye-geneli-palet-sevkiyati/
Not: Hizmet alanı TÜRKİYE GENELİ (depo Gebze'de; Kocaeli/İstanbul en hızlı). "Kocaeli ve İstanbul'a özel" gibi dar ifade kullanma. Rakip adı verme.

## EK 2 (SEO tur 2) — yeni slug'lar
Ürün (/urunler/<slug>/): cakma-epal-palet, orta-palet, kalin-orta-palet, ambalaj-paleti, cp3-palet
Hizmet (/hizmetler/<slug>/): hasarli-palet-alimi, kirik-palet-alimi
Rehber (/rehber/<slug>/): cakma-epal-nedir, orta-palet-ve-kalin-orta-palet-farki, ambalaj-paleti-nedir, eur-palet-nedir, hasarli-ve-kirik-palet-ne-yapilir
Sayfa: /galeri/
Not: "cp-palet" CP serisini genel anlatır, 1140×1140 mm ölçüsü "cp3-palet" sayfasına aittir (answer/description farklı tutulur). "Orta palet" ve "kalın orta palet" resmî standart değil, piyasa sınıfıdır; "çakma EPAL" damgasız Euro ölçülü paleti anlatır, EPAL diye sunulmaz.
