# Rakip Analizi — Tur 1 (Derin İnceleme), 2026-10-28

Kapsam: docs/RAKIP-ANALIZI.md (2026-10-25) üzerine inşa edilir. Bu turda sitemap.xml'ler, ana sayfalar ve seçili ürün/fiyat/bölge/SSS/belge sayfaları canlı okundu. Yalnızca fikir ve konu çıkarıldı; metin kopyalanmaz. Bizim sayfalarımıza düz TL fiyat yazma kuralı (brif) geçerli.

## 0. Yöntem, sınırlar ve ÖNCEKİ DOKÜMANA DÜZELTMELER
- Araç: WebFetch (HTML -> metin özeti, küçük model). JSON-LD/schema, canlı `<title>`/meta description bazı sayfalarda görülemedi; "belirlenemedi" yazılan yerler bunu ifade eder. Kelime sayıları tahmindir.
- Erişim: ceysangrup.com, gebzeahsappalet.com, gebzepalet.com.tr, arvenpalet.com.tr, paletglobal.com, firmasec.com AÇILDI. doguspalet.com (http://www.) ve gocmenpalet.com (http://www.) bu turda AÇILDI. emirpalet.com (http ve www: SSL handshake hatası), altincagpalet.com (sertifika doğrulanamıyor, http de 404), paletdepom.com (DNS bulunamadı, ENOTFOUND), gozepalet.com (DNS bulunamadı, www dahil) HÂLÂ AÇILMADI; web aramasında da bu alan adlarına ait sonuç çıkmadı. Göze Palet için tek kaynak firmasec.com kaydı (bağımsız site yok/erişilemiyor).
- Düzeltme 1: Önceki doküman "Gebze rakiplerinin hiçbirinde görünür TL fiyat tablosu yok" diyordu. YANLIŞ. gebzeahsappalet.com/ahsap-palet-fiyatlari/ sayfasında "2025 itibarıyla" etiketli, aralıklı TL fiyat tablosu VAR (yeni EPAL/TURPAL euro, standart, ikinci el, hurda, dekoratif). İç tutarsızlık da var (ikinci el aralığı listede dar, tabloda geniş). Yani fiyat şeffaflığı farkı tamamen "yalnızca biz" değil; ama tek sayfa, ince (~250 kelime), aralıklı, tutarsız. Bizim farkımız: güncelleme tarihli, tutarlı, genişletilmiş tablo + hesaplayıcı.
- Düzeltme 2: Önceki doküman gebzeahsappalet.com için "fiyat yok" diyordu; yukarıdaki gibi düzeltildi. paletglobal.com/palet-fiyatlari/ ise sayısal fiyat içermiyor (yalnızca niteliksel tablo) — o doğru.
- Düzeltme 3: Paletglobal'de "blog görünmüyor / SSS yok" yazılmıştı. Doğrusu: sitemap'te 6 rehber yazısı VAR (plastik palet nedir, ahşap palet nedir, ISPM 15 nedir, konteynere/tıra kaç palet sığar, euro palet ölçüleri, palet fiyatları) ve her birinde 3-4 soruluk SSS bölümü bulunuyor. Ana sayfada SSS yok, rehber sayfalarında var. Paletglobal bu turda EN GÜÇLÜ bilgi-içerik rakibi.
- Düzeltme 4: gebzepalet.com.tr sitemap'i şablon artığı taşıyor (akıllı telefon, dizüstü, beyaz eşya kategorileri ve ürünleri, 11 alakasız URL); gerçek içerik ince.

## 1. Rakip bazında envanter ve bulgular

### 1.1 ceysangrup.com (Ceysan Grup) — 95 URL
**Envanter (sitemap):**
- Kurumsal (10): hizmetlerimiz, hakkimizda, referanslar, belgelerimiz, sikca-sorulan-sorular, sartlar-ve-kosullar, iletisim, galeri, fiyatlar, blog
- Ürün/hizmet (13): palet, 2-el-palet, 2-el-palet-satisi, palet-alim-hizmeti, palet-tamiri, ahsap-palet-uretimi, ozel-olcu-palet-uretimi, isil-islem-ispm-15, hurda, sandik, ahsap-sandik-ve-kasa-uretimi, lojistik-ve-nakliye-hizmeti, kocaeli-ahsap-palet-alim-satim-fiyatlari
- Gebze kümesi (9): gebze-palet, gebze-palet-hizmeti, gebze-palet-uretim-ve-imalat, gebze-palet-tamiri, gebze-ikinci-el-palet-satisi, gebze-2-el-ahsap-palet-ozel-imalat, gebze-hurda-palet-alim-satim, gebze-epal-ispm-15-palet, gebze-ahsap-palet-fiyatlari
- Bölge/OSB (24): cayirova, gosb, imes-osb, plastikciler-osb, tosb, gebkim, dilovasi, dilovasi-osb, tuzla, sekerpinar, darica, hereke, korfez, pendik, kartal (+kartal-palet-24 kopya), sultanbeyli, pelitli, sancaktepe, kurtkoy, balcik, dosb, taysad-osb, geposb
- Tag sayfaları (41): bölge tag'leri + "en-yakin-paletci", "gebze-ucuz-palet", "gebze-palet-firmalari", "gebze-paletci-telefonu", "sifir-palet", "euro-palet", "hurda-palet"
**Sayfa yapısı:** Gebze Ahşap Palet Fiyatları sayfası H2 sırası: fiyatı etkileyen faktörler / güncel fiyat nasıl belirlenir / satılan palet türleri / neden biz / Google'da en çok aranan anahtar kelimeler (doldurma) / hizmet bölgeleri / referans listesi / SSS (5 soru) / hızlı teklif. ~650 kelime. Rakam YOK. Dilovası OSB sayfası ~500-600 kelime, aynı iskelet, yalnızca referans listesi ve SSS bölgeye özgü (şablon). Fiyatlar ana sayfası ~150 kelime, ince.
**Title kalıbı:** "[Konu] - ☎ +90 546 916 34 23 - Ceysan Grup" (telefon title'da). Çift H1 (şablon başlığı + içerik başlığı).
**Güven:** Referanslar sayfası 31 kayıt: "Bölge - Firma", her kayıtta tarih (ay/yıl), ürün/ölçü, tek cümlelik yorum (ör. teslimat hızlı). Logo yok, 1 proje fotoğrafı. EPAL + ISPM 15 beyanı, Belgelerimiz sayfası (içeriği görülemedi). SSS sayfası 9 konu: belgeler, hizmet bölgeleri, fiyat teklifi nasıl alınır, ikinci el alım-satım, tamir, kullanılan ağaç türü, palet çeşitleri, ihracata uygunluk, teslimat hızı.
**Zayıflıklar (fırsatımız):** Çift H1, telefonların tutarsızlığı (üst bilgi 0546..., SSS'te 0262...), footer'da adres/telefon yok, "0 84" gibi anlamsız sayaçlar, blog yazıları aslında bölge sayfaları (tarih yok), kopya URL'ler (kartal-palet / kartal-palet-24, dilovasi / dilovasi-osb), schema görülemedi, hiç sayısal fiyat yok, hurda sayfası ~35 kelime (süreç anlatılmıyor).
**Bizde olmayan:** 24 bölge/OSB sayfası (GOSB, TOSB, GEBKİM, DOSB, Taysad, Geposb, Plastikçiler, İMES, Şekerpınar, Hereke, Körfez, Pelitli, Sultanbeyli, Sancaktepe, Pendik, Kartal), palet-tamiri, ahşap-sandık-ve-kasa, lojistik-ve-nakliye, şartlar-ve-koşullar, galeri, referanslar (tarihli), tag-sayfası mantığı.

### 1.2 gebzeahsappalet.com (Tur Kaz Palet Orman Ürünleri) — 25 URL
**Envanter:** ana sayfa, hakkimizda, hizmetlerimiz, gebze-palet-sikca-sorulan-sorular, galeri (+3 NextGEN sayfa), iletisim; ürün/konu sayfaları: palet, ahsap-palet, ahsap-palet-fiyatlari, ahsap-palet-nedir, gebze-palet-..., gebze-palet-fiyatlari-..., gebze-ahsap-palet-..., gebze-ahsap-palet-fiyatlari-..., gebze-ahsap-sandik-..., gebze-2-el-ahsap-palet-..., gebze-sifir-ahsap-palet-..., gebze-sifir-ve-2-el-palet-... (Gebze kümesinde slug sonuna marka eklenmiş, çok uzun); bölge: kocaeli-palet, dilovasi-palet, darica-palet, tuzla-palet.
**Title:** "[Konu] – Tur Kaz Palet Orman Ürünleri | 05397253132 | Gebze / KOCAELİ | Gebze Palet" (~89 karakter, kesilir). Net H1 yok / slogan H1. H2'ler çoğunlukla slogan.
**Fiyat sayfası (önemli):** H1 "Ahşap Palet Fiyatları (2025 itibarıyla)", H2 "Fiyatı Etkileyen Faktörler" (5: ağaç türü, ölçü, durum, bölge, miktar) + "Özet Tablo" (yeni standart, yeni EPAL 80x120 ve 100x120, TURPAL, ikinci el, hurda, dekoratif palet), H3 ile 4 kategori. ~250 kelime. İç tutarsızlık var. Bu sayfa fiyat sorgularında bize doğrudan rakip.
**SSS:** ana sayfada 14 soru (H3, snippet uyumlu) + ayrı SSS sayfasında 10 soru: sıfır palet nedir/kullanım, 2. el güvenli mi, ISPM 15 nedir, hangi ölçülerde üretim, Gebze dışına teslimat, fiyatlar, sıfır-ikinci el farkı, geri dönüşüme uygun palet, ahşap sandık, nasıl sipariş.
**Güven/CTA:** Yüzen WhatsApp + sticky "Hemen Ara"; testimonial 3 adet (yalnızca ad + unvan); sayaçlar 0 gösteriyor (kırık); form yok (sipariş = telefon); e-posta farklı alan adında. Teknik içerik: standart paletin ~1000 kg taşıdığı ve "1400 kg'lık palet 200 kg yük için gereksiz" örneği (değerli, yaklaşımı alınabilir).
**Ahşap palet nedir** sayfası ~200-250 kelime (artı/eksi listesi); ısıl işlem fırını üzerine 2 blog yazısı (konu çok dar).
**Bölge sayfası (Dilovası)** ~250-300 kelime, şablon, anahtar kelime bloğu.

### 1.3 gebzepalet.com.tr
**Envanter (gerçek):** iletisim, haberler, urun-gruplari, foto-galeri, video-galeri, banka-hesaplari, sss, referanslar; sayfa: hakkimizda, misyon-ve-vizyon, cevre-politikasi, urunlerimiz, isil-islem-ispm15; hizmet: cp-palet, euro-tahta-palet, ozel-olculu-palet, sandik-palet, ahsap-palet, tahta-palet, hurda-palet, paletler. Sitemap'te ayrıca şablondan kalma elektronik ürün sayfaları (indekslenme riski/güven kaybı).
**Bulgular:** Title ve H1 yok (H3 ana başlık), 8 hizmet kartı kesik açıklama, ISPM 15 sayfası ~70 kelime (yetkili firma, belgelerimizde görülebilir beyanı), Güzeller OSB adresi, 08:00-17:00 çalışma saati, sayaçlar (278 müşteri, 1.230 ürün, 1.478 sipariş; beyan, doğrulanamaz), sosyal linkler genel domaine gidiyor, `javascript:void(0)` linkler, SSS/referans sayfası içeriği boş/erişilemez.
**Alınacak fikir:** Çevre politikası, misyon/vizyon, banka hesapları sayfası (kurumsal güven), video galeri, çalışma saatleri.

### 1.4 arvenpalet.com.tr (www) — 29 URL
**Envanter:** anasayfa, hizmetlerimiz, iletisim, hesabim (WooCommerce artığı); 25 bölge yazısı: bolgeler, yarimca, yalova, darica, bayramoglu, dilovasi, izmit, basiskele, mutlukent, hereke, pelitli, balcik, cayirova, gebze, kocaeli, golcuk, deri-sanayi, imes, kartepe, kandira, marmara-geri-donusumculer, kimyacilar, guzeller-sanayi-ahsap-palet, sapanca, korfez. Tümü Ekim 2023'te yayımlanmış blog yazısı (post-sitemap), güncellenmemiş.
**Bulgular:** Gebze sayfası ~800-1.000 kelime ama jenerik ve şablon (Wikipedia'dan tanım), "Fiyatları" bölümünde fiyat yok, "Hızlı Erişim" linkleri "#" (kırık), ana sayfa ~250-300 kelime, form yok (tek CTA "Şimdi Ara"), yazım hataları ("Tedrik", "Erşim"), "81 ile günlük sevkiyat" iddiası, sosyal kanıt yok. "Marmara geri dönüşümcüler", "kimyacılar", "deri sanayi", "Güzeller sanayi" gibi sanayi-bölge/sektör-mahalle adları yaratıcı konu fikri.
**Fırsat:** Kocaeli geneli ilçe kapsamı (İzmit, Başiskele, Kartepe, Gölcük, Kandıra, Sapanca, Yalova) bizde yok.

### 1.5 paletglobal.com (Palet Global Sistemleri, Balkır Group) — kurumsal, en iyi yapılandırılmış
**Envanter (tam):**
- Sayfalar (10): /, urun-gruplarimiz, iletisim, hakkimizda, plastik-palet, ahsap-sandik, ahsap-palet, lisans-belgelerimiz, blog, kariyer
- Hizmetler (4): /hizmetler/hurda-palet, palet-ambalaj, ahsap-grubu, palet-lojistik
- Rehber yazıları (6): plastik-palet-nedir, ahsap-palet-nedir, ispm-15-nedir, konteynere-tira-kac-palet-sigar, euro-palet-olculeri, palet-fiyatlari
- Ürün (26, /urunler/): 60x80-market-paleti; 100x120 UK ahşap, 100x120 euro-3, euro-2, 9 tahtalı, 7 tahtalı; 80x120 7 tahtalı, euro, 5 tahtalı; 7 sandık/kasa modeli (yüksek hacimli depo sandığı, güçlendirilmiş sevkiyat kasası, kapaklı nakliye sandığı, kafes sistem, ızgaralı depolama, açık üst taşıma kasası, endüstriyel kapalı sandık) + ihracat tipi ahşap sandık; 9 plastik palet (100-120 güçlendirilmiş/ızgara taban/standart, 80-120 dayanıklı/ızgara/standart, 60-80 K üstü kapalı/A/3K)
**Kalıplar:**
- Title formülü: "Palet Fiyatları 2026: Ahşap, Plastik ve Euro Palet | Toptan Teklif"; "Euro Palet Ölçüleri: 120x80x14,4 cm, Ağırlık ve Taşıma Kapasitesi"; "Tıra ve Konteynere Kaç Palet Sığar? Tır 33, 40'lık 24, 20'lik 11" (cevabı title'a yazma). Title ile H1 farklı açıdan.
- Rehber sayfası iskeleti: breadcrumb (Anasayfa > Palet Rehberi > yazı) -> giriş -> tablo(lar) -> kıyas -> ilgili ürünlere link -> ISPM/belge notu -> 3-4 soruluk SSS (H3) -> teklif formu. ~420-500 kelime ana gövde: kısa ama tablolu ve doğrudan cevaplı.
- Konteyner tablosu: 20'lik 11 / 9-10; 40'lık 24-25 / 20-21; 13,6 m tır 33 / 26 (euro 80x120 / endüstriyel 100x120). Hesaplayıcı YOK (statik tablo) — hesaplayıcı fırsatı hâlâ açık.
- Euro palet ölçüleri: 2 tablo (EPAL 1 teknik özellik 8 satır; EPAL 1/2/3/6 tipleri), "euro palet kaç kg / yüksekliği / yarım euro palet" SSS'leri.
- ISPM 15 rehberi: 56 °C / 30 dk çekirdek sıcaklığı, damga öğeleri tablosu (IPPC, ülke kodu TR, üretici no, HT/MB), muafiyetler (plastik, kontrplak/OSB, 6 mm altı, sıkıştırılmış ahşap), uymayan ambalajın riskleri, "yurt içinde kullanılabilir mi" sorusu.
- Fiyat rehberi: 7 faktör (malzeme, ölçü, taşıma kapasitesi/yapı, ısıl işlem, adet/süreklilik, yeni-ikinci el, teslimat bölgesi), ahşap/plastik/euro bölümleri, kıyas tablosu (niteliksel), "kurumsal alımlarda maliyet düşürme yolları", 3 SSS (neden değişir, en ekonomik, minimum adet). Sayısal fiyat yok.
- Ürün sayfası ~350-400 kelime: Açıklama, Avantajlar (6), Kullanım Alanları (8), Neden bu palet, Teknik Özellikler tablosu, "Teklif Alın" modal, rehber linkleri.
- Plastik palet kategori sayfası: 6 ürün kartı (Detayları İncele + Teklif Al), "Plastik Palet Fiyatları" ve "Ölçüleri" H2 bölümleri.
- Belgeler: 12 belge kartı (ISO 9001/14001/27001/45001/10002, FSC 2024-2029, TURPAL lisansı, ISPM 15 ısıl işlem, geri dönüşüm lisansı, tedarikçi kayıt, belediye ruhsatı, işaretleme izin belgesi) PDF "Belgeyi Görüntüle" linkli; görsel yok, numara/geçerlilik yok.
- Ana sayfa: Title "Ahşap Palet, Plastik Palet ve Sandık Üretimi | Palet Global"; H1 "Palet Global" (zayıf); sayılar (1958 kuruluş, 600+ müşteri, 100 araç, 2M aylık palet hareketi, 21 servis noktası; beyan); "Talepten Teslimata" bölümü; form: Ad, Telefon, E-posta, Firma, Talep + KVKK onayı; iki ofis (Maslak, Pendik); KVKK politika PDF'leri, çerez tercihleri; kariyer sayfası; grup şirketi bağlantıları.
**Zayıflık:** Yerel (Gebze/OSB) sayfa yok, ana sayfada SSS yok, fiyat yok, hurda hizmeti genel.

### 1.6 firmasec.com
Palet kategorisi yok (AMBALAJ, TAŞIMA-LOJİSTİK, MOBİLYA sektörleri); dizin yapısı /firmalar/[il]/[ilçe], /firma/[id]-[ad], /firma/ara/[kelime]. Göze Palet kaydı: /firma/cdmdfb-goze-palet-orman-urunleri. Firma kartında ad, il/ilçe, anahtar kelime etiketleri. Doğrudan rakip değil, ücretsiz/ücretli firma dizini; "kayıt + NAP tutarlılığı + backlink" fırsatı.

### 1.7 doguspalet.com (Doğuş Palet) — açıldı
Başlık "DOĞUŞ PALET - İSTANBUL - palet, ikinci el palet, 2 el palet". H1 yok. 1990'dan beri, Esenyurt üretim tesisi (~8.000 m² açık, 3.000 m² kapalı), Gebze şubesi (gebze@ e-postası). Ürünler: euro, 80x120, 100x120, CP, PRS-7 (110x130), ahşap sandık (kafes, kapalı, ambalaj), ikinci el (80x120, 100x120, 114x114, 110x130), ISPM 15 ısıl işlemli ve fümige seçenek, metal ve plastik palet, CP palet çizimleri, KVKK, belgelerimiz, fabrikamız. Fiyat yok, SSS yok, CTA zayıf. Alınacak fikir: ölçü bazlı ikinci el stok listesi (114x114, 110x130), CP çizim sayfası, "fabrikamız" tesis metrekare kanıtı.

### 1.8 gocmenpalet.com (Göçmen Palet, Pelitli) — açıldı
Title "Göçmen Palet | Tel: 0554 425 9960". Eski ASP tarzı URL'ler (Urunler-..., HizmetDetay-...). Pelitli Mah. adresi. Ürün: gebze euro palet, gebze sıfır palet, 2. el, tahta kafes, tahta sandık, plastik palet, kereste (ayrı kereste hattı). Ürün detay URL'leri çok zengin: 60x80 euro6, 80x120 ayar palet, 80x120 cam palet, 80x120 euro ahşap, 80x120 ince ahşap, 80x120 orta takoz, 100x100 kadranlı, 100x120 CP1, 100x120 della palet; coğrafi varyantlar (hereke-euro-palet, darica-euro-palet, istanbul/pendik/tuzla-tahta-kafes, yalova/sakarya-kereste). Hizmetler: hurda palet alım satım, tahta palet alım satım, euro palet alım satım, 2. el alım satım, palet alım satım fiyatları, çıkma ahşap palet, ahşap palet fiyatları, balçık palet, pelitli palet, etiket sayfaları (kimyacılar, marmara geri dönüşümcüler, güzeller sanayi, kandıra, kartepe, sakarya). Fiyat sayfası ~55 kelime ve rakamsız; SSS 3 soru (~100 kelime); "Talep Formu" (ad, e-posta, telefon, bilgi). Görsel dosya adları SEO'lu (ör. gebze_ikinci_el_palet_fiyatlari.jpg) ama gerçek içerik ince. Menüler "#" (kırık). Alınacak fikir: ayar/cam/della/kadranlı gibi sektörel palet isimleri (yan anahtar kelimeler), kereste yan hattı.

### 1.9 Açılamayanlar
emirpalet.com, altincagpalet.com, paletdepom.com, gozepalet.com: bu turda da erişilemedi (SSL/DNS/sertifika). Web araması yalnızca Göze Palet'in firmasec.com kaydını verdi (Balçık, 14 bölge, takozlu/CP/ısıl işlemli/ince-orta-kalın, yerinden toplama). Hüküm verilmez. Not: DNS hataları alan adının yazımının veya yayın durumunun değişmiş olabileceğini düşündürür; elle doğrulama önerilir.

## 2. Çapraz karşılaştırma: kim ne yapıyor
| Özellik | Ceysan | Tur Kaz | gebzepalet.com.tr | Arven | Paletglobal | Doğuş | Göçmen |
|---|---|---|---|---|---|---|---|
| Sayısal fiyat | Yok | VAR (2025, aralık) | Yok | Yok | Yok | Yok | Yok |
| Ayrı fiyat sayfası | 2 + 1 | 2 | Yok | Başlık var, içerik yok | Rehber (nitel) | Yok | Var, rakamsız |
| SSS | 9 konu (sayfa) + 5 soru fiyat sayfası | 14 + 10 | Boş | Yok (2 soru) | Rehberlerde 3-4 | Yok | 3 soru |
| Bölge sayfası | 24 | 4 | Yok | 25 | Yok | Yok | Birkaç |
| Teknik rehber | Yok | 1 ince | 1 ince | Yok | 6 | Yok | Yok |
| Form | Yok (tel/WA) | Yok | Yok | Yok | VAR + KVKK | Yok | Talep formu |
| Belge sunumu | Sayfa var, içerik belirsiz | ISPM beyan | Sayfa var | Yok | 12 PDF | Sayfa var | Sayfa var |
| Referans | 31 tarihli kayıt | 3 yorum | boş | Yok | Sayı beyanı | Yok | Sayfa var |
| Hesaplayıcı/araç | Yok | Yok | Yok | Yok | Yok (statik tablo) | Yok | Yok |
| Yeni içerik tarihi | belirsiz | 2025 fiyat | eski | 2023 | 2026-10 güncel | ? | ? |

Sonuç: Hiçbir rakip araç sunmuyor; yalnızca Paletglobal sistematik bilgi içeriği ve form kullanıyor; yerel (OSB) kapsam Ceysan/Arven'de çok geniş ama şablon/ince; fiyatı tek Tur Kaz gösteriyor.

## 3. Bizde olmayan sayfa/anahtar kelimeler (önceki dokümana EK; öncekiler tekrar yazılmadı)
**Rehber/bilgi (Paletglobal kanıtlı):**
- `konteynere-tira-kac-palet-sigar` (hesaplayıcı + tablo; "tır 33, 40'lık 24" kalıbı), `euro-palet-olculeri` (EPAL 1/2/3/6, kg, yükseklik, yarım euro), `ispm-15-nedir` (56 °C/30 dk, damga tablosu, muafiyetler), `plastik-palet-nedir`, `ahsap-palet-nedir`
- `palet-yuk-tasima-kapasitesi` (statik/dinamik/raf yükü; Tur Kaz "1400 kg palet 200 kg yük" örneği)
**Ürün varyantları (Paletglobal, Göçmen):** 60x80 market paleti, 100x120 UK palet, 100x120 euro-2/euro-3, 5/7/9 tahtalı palet, 80x120 ince/orta takoz, ayar palet, cam palet, kadranlı 100x100, della palet, 60x80 euro-6 (yarım palet), kafes sandık, ızgaralı depolama sandığı, kapaklı nakliye sandığı, ihracat tipi sandık, plastik: ızgara taban, üstü kapalı, 60x80 3K/A/K, güçlendirilmiş.
**Fiyat sorguları:** "palet fiyatları 2026", "ahşap palet fiyatları 2025/2026", "kaç para" kalıbı; Göçmen'in "palet alım satım fiyatları" ve "çıkma ahşap palet" yan terimleri.
**Bölge/sektör:** Yarımca, Yalova, Bayramoğlu, İzmit, Başiskele, Mutlukent, Gölcük, Kartepe, Kandıra, Sapanca, Hereke, Körfez, Sultanbeyli, Şekerpınar, Pendik, Kartal; OSB/organize: GOSB, TOSB, GEBKİM, DOSB, Taysad, Geposb, İMES, Plastikçiler, Dilovası OSB, Güzeller OSB, Deri Sanayi; sektör etiketleri: "kimyacılar palet", "marmara geri dönüşümcüler palet".
**Kurumsal:** `belgelerimiz` (PDF kartlı), `referanslar` (tarihli kayıt), `galeri`, `video-galeri`, `cevre-politikasi`, `misyon-vizyon`, `banka-hesaplari`, `kariyer` (Paletglobal), `sartlar-ve-kosullar`, KVKK/aydınlatma/çerez sayfaları, `hizmetler/palet-tamiri`, `hizmetler/palet-lojistik`.
**Yan anahtar kelimeler (tag mantığı):** "en yakın paletçi", "gebze paletçi telefonu", "gebze palet firmaları", "gebze ucuz palet", "palet alan yerler", "çıkma ahşap palet", "palet usta/işçi" (iş ilanı sorgusu, kariyer sayfası ile).

## 4. Dönüşüm ve içerik taktikleri
1. Çift kanal: sticky telefon + yüzen WhatsApp (Ceysan, Tur Kaz). Eksik: Hiçbir yerli rakipte hızlı, kısa teklif formu yok (Paletglobal hariç, o da genel form).
2. KVKK onaylı form (Paletglobal) — hukuken doğru ve güven verir; alanlar: ad, telefon, e-posta, firma, talep. Bizde ölçü/adet/teslim bölgesi alanları ekleyerek ayrıştır.
3. Tarihli referans (ay/yıl + bölge + ürün/ölçü + 1 cümle yorum) — Ceysan'ın en iyi güven formatı. Yalnızca gerçek ve izinli kayıtlarla.
4. PDF'li belge listesi (Paletglobal): belge adı, kurum, geçerlilik tarihi eklenirse onları aşar.
5. Title'da yıl etiketi (2026) fiyat ve ölçü sayfalarında; title'da cevap verme ("Tır 33, 40'lık 24") — snippet/AI özeti alıntısı için.
6. Rehber iskeleti: breadcrumb -> doğrudan cevap -> tablo -> kıyas -> ürün linki -> ISPM notu -> SSS -> form.
7. Yerel sayfa bölümleri: yerel ihtiyaç, ürünler, fiyat notu, neden biz, bölgeye ait referans, SSS (Ceysan). Rakip hatası: bölgeye özgü gerçek bilgi yok. Bizim farkımız: her bölge sayfasında mesafe/rota, OSB giriş-kamyon notu, yakın çalışılan sektör, gerçek teslim süre aralığı.
8. Sayaçlar: kırık/boş sayaç güveni düşürür (Tur Kaz, Ceysan); doğrulanabilir sayı yoksa gösterme.
9. Dokunma noktası hataları (rakiplerde): çift H1, title'da telefon, `#` linkler, tekrar eden "Hızlı Erişim" bloğu, kopya URL, farklı telefon numaraları, şablondan kalan alakasız sayfalar. Bunların hiçbirini yapma.

## 5. Kopyalanmaya değer iyi pratikler (fikir düzeyinde)
- Paletglobal rehber ağı + ürün sayfalarından rehbere iç link zinciri.
- Paletglobal'in ISPM 15 damga öğeleri tablosu mantığı (kendi cümlelerimizle, kaynak: IPPC/ISPM 15 standardı).
- Ceysan'ın fiyat sayfasındaki "fiyatı etkileyen faktörler" + "nakliye dahil mi" + "toplu indirim" SSS üçlüsü.
- Tur Kaz'ın tek sayfada 14 soruluk SSS (H3, FAQPage) ve ayrı SSS sayfası.
- Tur Kaz fiyat sayfası: kategori başlığı (sıfır/ikinci el/hurda/dekoratif) + özet tablo; biz bunu tarihli, tutarlı ve hesaplayıcılı yaparız.
- Ceysan'ın referans kaydı formatı.
- Doğuş'un ölçü bazlı ikinci el stok başlıkları ve "fabrikamız" tesis kanıtı.
- Göçmen'in görsel dosya adlarında anahtar kelime (alt metinle birlikte).
- Arven'in sektör/mahalle adlı sayfa fikri (kimyacılar, deri sanayi) — yalnızca gerçekten hizmet veriyorsak.

## 6. En değerli 25 fırsat (öncelik sırasıyla)
1. Güncelleme tarihli, tutarlı, genişletilmiş fiyat tablosu sayfaları (ahşap, euro, ikinci el, plastik, hurda ton bazlı). Rakiplerden yalnızca Tur Kaz rakam veriyor ve tutarsız; diğerleri hiç. (Düz TL kuralı brife göre uygulanacak; tablo prices.ts'ten.)
2. Konteyner/tır palet hesaplayıcısı + tablo (`/araclar/konteynere-kac-palet-sigar`). Paletglobal statik tabloyla bu sorguda var; hesaplayıcı kimsede yok.
3. Palet seçici/kapasite aracı (yük kg, ölçü, kullanım -> euro/CP/plastik önerisi). Hiçbir rakipte yok.
4. `/rehber/euro-palet-olculeri` (EPAL 1/2/3/6 tablosu, kg, yükseklik, yarım euro) + SSS. Paletglobal ile doğrudan yarış, daha derin yap.
5. `/rehber/ispm-15-nedir` (HT 56 °C/30 dk, damga tablosu, muafiyetler, "yurt içinde de kullanılır mı") — bizde fırın iddiası olmadan "uyumlu palet temini" çerçevesi.
6. KVKK onaylı, ölçü/adet/teslim bölgesi alanlı hızlı teklif formu + yüzen WhatsApp; Gebze rakiplerinin hiçbirinde yok.
7. Gebze çevresi OSB/bölge sayfaları: GOSB, TOSB, GEBKİM, DOSB, Taysad, Geposb, İMES, Plastikçiler, Dilovası OSB, Güzeller OSB, Şekerpınar, Çayırova, Darıca, Tuzla (her biri gerçek içerik; Ceysan/Arven şablon).
8. Kocaeli geneli ilçe sayfaları: İzmit, Körfez, Hereke, Başiskele, Kartepe, Gölcük, Kandıra, Sapanca, Yalova (Arven'de var, ince).
9. İstanbul Anadolu yakası: Pendik, Kartal, Sultanbeyli, Sancaktepe, Ümraniye, Tuzla (Ceysan'da var).
10. SSS merkezi: 25+ soru, kategorilere ayrılmış, FAQPage şeması; Tur Kaz 14, Ceysan 9, Paletglobal 3-4 soru.
11. Belgeler sayfası: PDF + belge adı + kurum + geçerlilik tarihi (Paletglobal'den detaylı), yalnızca elimizde gerçekten bulunan belgeler.
12. Tarihli, izinli referans/vaka kayıtları (Ceysan formatı). Kayıt yoksa "referans" başlığı açma.
13. Ürün varyantı sayfaları: 60x80 market, 100x120 UK, euro-2/3, 5/7/9 tahtalı, ince/orta takoz, ayar, cam, della, kadranlı 100x100.
14. Sandık/kasa sayfaları: kafes, kapalı, ihracat tipi, ızgaralı depolama, kapaklı nakliye (Paletglobal 7+1 model, Ceysan, Göçmen).
15. `/hizmetler/palet-tamiri` ve ömür uzatma rehberi (Ceysan ayrı sayfa; kimse derinleşmemiş).
16. `/hizmetler/hurda-palet-alimi` tam süreç sayfası: ne alınır, hangi durum, nasıl teslim/toplama, ödeme, belge. Ceysan hurda sayfası ~35 kelime, Paletglobal genel.
17. Yerinden palet toplama + lojistik sayfası (Ceysan lojistik, Göze toplama, Paletglobal palet-lojistik).
18. Tek Gebze sayfasında "palet alıp satan yerler / en yakın paletçi / paletçi telefonu" niyetine uygun yan içerik (Ceysan tag kümesi) — doldurma değil, rehber olarak.
19. `/rehber/palet-fiyatlarini-etkileyen-faktorler` + Paletglobal'in 7 faktörünü aşan "toplam maliyet" (ömür, tamir, iade) bölümü ve plastik vs ahşap TCO karşılaştırması.
20. Plastik palet kategori sayfası + model kartları (60x80 3K/A/K üstü kapalı, 80x120 ızgara taban, 100x120 güçlendirilmiş), "plastik palet nedir/ne zaman tercih edilir".
21. Şema katmanı: Organization/LocalBusiness (NAP), Product (offer olmadan veya fiyat aralıklı), FAQPage, BreadcrumbList, Article; rakiplerde doğrulanabilir schema görülmedi.
22. Kurumsal güven paketi: çevre politikası, misyon/vizyon, çalışma saatleri, banka hesapları (gebzepalet.com.tr), galeri + video galeri (tesis/yükleme), "talepten teslimata" 4 adım.
23. Teknik kalite içeriği: palet sınıfı (1/2/3), nem, tahta kalınlığı, taşıma kapasitesi (Tur Kaz'ın "ihtiyaçtan fazla kapasite ödeme" argümanı) — E-E-A-T sinyali.
24. Dış kayıtlar: firmasec.com + diğer dizinler/Google Business, NAP tutarlılığı (rakiplerde telefon tutarsızlığı var).
25. Teknik temizlik avantajı: tek H1, telefonsuz title, sağlam iç linkler, kopya URL yok, canonical, kırık sayaç yok. Rakiplerin ortak zayıflığı; maliyetsiz.

## 7. Cannibalization uyarıları (uygulamadan önce)
- Fiyat kümesi: `/palet-fiyatlari/` pillar; ürün bazlı fiyat sayfaları ("ahşap/euro/ikinci el/plastik palet fiyatları") ve bölge fiyat sayfaları (`gebze-ahsap-palet-fiyatlari`) aynı birincil kelimeyi paylaşır. Her birine tek sahip ata; bölge fiyat sayfasını "gebze" modifiyeriyle ayır.
- Bölge sayfaları (`/bolge/*`) ile ürün sayfaları ("euro palet gebze") çakışmasın: bölge sayfası bölgeyi, ürün sayfası ürünü sahiplenir.
- Rehber `euro-palet-olculeri` ile ürün `euro-palet` başlıkları ayrışsın ("ölçüleri/kg/EPAL" vs "satın al/temin").
- GSC erişimi gelince sayfa+sorgu haritası çıkarılacak; bu analiz sitemap ve içerik düzeyindedir.

## 8. Sonraki tur için açık işler
- emirpalet.com, altincagpalet.com, paletdepom.com, gozepalet.com: elle (tarayıcı) veya Wayback ile doğrula.
- Ceysan belgelerimiz, galeri, ISPM 15 hizmet sayfası; Paletglobal hizmetler/hurda-palet, blog dizini; Tur Kaz galeri ve 2. el sayfaları henüz okunmadı.
- JSON-LD tespiti için ham HTML/kaynak kontrolü (WebFetch özeti yetersiz).
- SERP ve "People also ask" verisi hâlâ yok; hedef sorgu hacimleri için araç gerekli.
