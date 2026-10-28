# Rakip analizi, Tur 2 (derin) - iç belge, sitede rakip adı yazılmaz

Tarih: 2026-10-28. Kapsam: ahsappalet.com.tr (59 URL), iklimpalet.com (40 URL), royalpalet.com (33 URL) sitemap'leri + 8 arama sorgusu + mepalorman.com sitemap'i (122 URL) ile karşılaştırma.
Sadece fikir ve yapı çıkarıldı; rakip metni kopyalanmadı. Aşağıdaki title/H1 önerileri bizim yazdığımız özgün öneridir.

## 0. Yöntem ve sınırlar (önce bunu oku)

- Sayfalar WebFetch ile okundu (metne çevrilmiş HTML). Bu yüzden: meta description ve JSON-LD şema bu yöntemle görünmedi. "Yok" demiyorum, "doğrulanamadı" diyorum. Gerçek doğrulama için tarayıcıda "kaynağı görüntüle" veya Rich Results Test gerekir.
- Üç sitenin sitemap'i tam çekildi (59 + 40 + 33 URL). Sayfa içeriğini tek tek okuduğum örnek sayısı: ahsappalet ~12, iklim ~11, royal ~8. Kalan sayfalar aynı şablonu kullandığı için (aşağıda gösterildi) şablon düzeyinde analiz yeterli, ama tek tek kelime sayıları tahmindir.
- Kelime sayıları "ana gövde, menü/footer hariç" tahminidir (±20%).
- Arama aracı gerçek Google TR SERP'i değil, genel bir arama API'si. "istanbul palet" ve "avrupa yakası palet" sorguları anlamsız sonuç (restoran, saray, ders notu) döndü. SERP bölümü bu yüzden "yönsel" kabul edilmeli. Kesin sıralama için Search Console / Ahrefs / Semrush ya da elle gizli sekme araması gerekir.
- Hiçbir Search Console verisi yok. Kanibalizasyon kontrolü "GSC'siz yöntem" (sitemap + niyet çakışması) ile yapıldı; GSC açıldığında sayfa+sorgu raporuyla doğrulanmalı.
- Arama sonuçlarında gördüğüm fiyat rakamları (ör. euro palet 28-43 TL, plastik 51-251 TL, hurda ton başı 501-1001 TL) tutarsız bir satıcı blogundan; kullanılmamalı, doğrulanmamıştır.

## 1. Rakip A: ahsappalet.com.tr (marka: Ata Orman Ürünleri)

### Şablon (tüm 59 URL'nin ~50'si bu kalıpta)
- Title: "[Ürün] | [Alt vurgu cümlesi]" (ör. "Arası Sık Palet | Sık Tahtalı Palet, İnce Ürün Taşıma", "Cp5 Palet | Kimya Sanayi Paleti, Ağır Yük İçin CP Serisi"). Marka sonda.
- H1 sorunu: her sayfada iki adet H1 (ör. "Cp5 Palet" + "Cp5 Palet: Ağır Yükler ... Seçim Rehberi"); H2/H3 hiyerarşisi tutarsız. Teknik zayıflık, ama içerik şablonu tutarlı.
- Gövde: ~1.200-1.600 kelime, 7-8 soruluk SSS, içindekiler tablosu (iki kez tekrar), 6 kartlık "güvence" bölümü, "Diğer Hizmetler" kartları, sosyal paylaşım butonları.
- CTA: telefon (tek numara, 0538...), WhatsApp (hazır mesajlı), "Teklif Alın" -> iletişim, "İletişim Formu", yüzen "7/24 Destek" çubuğu. Her sayfada 5-8 CTA tekrarı.
- İç link: ~50-70 link/sayfa (mega menü: palet çeşitleri ~20, plastik 8, ikinci el 6, kasa 4, fiyat 4). Link kalabalığı yüksek, bağlamsal link az.
- Tablo yok. Sayısal fiyat yok (fiyat sayfaları dahil). Ölçü yok: CP5 sayfası bile "ölçü/yük değerlerini vermiyorum, teyit edin" diyor. Arası sık, kapalı ihracat, şişecam sayfalarında da ölçü/yük rakamı yok.
- Şema: görünürde yok (doğrulanamadı). SSS var ama FAQ şeması doğrulanamadı.
- Meta description: görünmüyor (doğrulanamadı).

### Sayfa grupları ve ana anahtar kelimeler
| Grup | URL'ler | Ana kelime | Not |
|---|---|---|---|
| Ana sayfa | / | ahşap palet, plastik palet, ikinci el palet | Title "Ahşap Palet, Plastik Palet ve İkinci El Palet", ~1.000 kelime makale + 7 SSS, tablo yok |
| Fiyat | palet-fiyatlari, ahsap-, tahta-, euro-palet-fiyati, 80x120-palet-fiyatlari, plastik-, ikinci-el-, hurda-palet-fiyatlari | "[tür] palet fiyatları" | Hepsi "fiyat verilmez, etkenler + teklif" kurgusu. palet-fiyatlari hub'ı ince (~400 kelime, 4 kart, SSS yok). Plastik fiyat sayfası: ölçü/ağırlık, yük sınıfı (statik/dinamik/raf), ilk kullanım vs geri dönüşüm hammaddesi, ilan sitesi uyarısı |
| Ahşap tipleri | ince-, orta-, kalin-tip-palet, euro-palet, arasi-sik-palet, kapali-ihracat-paleti, kadranli-palet, ozel-olcu-palet | tip + palet | "Arası sık = üst tahtaları sıkı dizili, ince/küçük ürün için" (sayfa kendisi "sektörde gevşek kullanılan terim" diyor). "Kapalı = üst yüzey boşluksuz" |
| Marka/müşteri adlı | sisecam-palet, della-palet | marka + palet | Cam ambalaj taşıma paleti kurgusu; marka adı hukuki risk (önceki not geçerli) |
| CP serisi | cp1, cp3, cp5, cp6, cp9 | cp[n] palet | Kimya sanayi paleti kurgusu, ölçü tablosu yok. Biz tek rehber + cp-palet + cp3 ile kapsıyoruz |
| 80x120 varyant | 80x120-turpal-palet, 80x120-kirli-euro-palet | 80x120 [tip] | Niş, yüksek niyetli uzun kuyruk |
| Plastik kümesi (8 URL) | plastik-palet, -cesitleri, -fiyatlari, 80x120-, 100x120-, plastik-euro-, hijyenik-beyaz-, plastik-palet-kasa, -toptan-tedarik | plastik palet + ölçü/tip | Ana ana-sayfa kartında hijyenik kartın görseli bozuk (stray "H"), görseller tekrar |
| İkinci el (7 URL) | ikinci-el-palet, -fiyatlari, -euro-, -ahsap-, -plastik-, ikinci-el-palet-alim-satim, hurda-palet-fiyatlari | ikinci el palet [alt] | Alım-satım sayfasında title "Palet alan firmalar" ifadesini hedefliyor; satıcıya hitap eden bölümler (satışa hazırlık, fotoğraf, yerinde görme) var |
| Kasa/sandık (7 URL) | ahsap-kasa-ve-sandik, ahsap-kasa, tahta-kasa, dekoratif-ahsap-kasa, palet-sandik, ihracat-sandigi, ihracat-kasasi | kasa/sandık varyantları | "ihracat sandığı" ve "ihracat kasası" ayrı URL (olası kendi içinde kanibalizasyon). Palet-sandık ve dekoratif kasa aynı görseli paylaşıyor |
| Blog (6 yazı, 27.09-06.10.2026 arası) | euro-palet-olculeri-ve-epal-farki, ikinci-el-palet-alirken-dikkat-edilecekler (8 nokta), ahsap-palet-nasil-secilir, ihracat-paleti-ispm-15-kurallari, palet-istifleme-ve-depolama-rehberi (9 ipucu), plastik-palet-mi-ahsap-palet-mi | bilgi amaçlı | Kategori/etiket/sayfalama yok. Hepsi son 10 günde yayımlanmış: toplu içerik atağı, yeni site |
| Kurumsal | hakkimizda, iletisim, kvkk, cerez, site-haritasi | - | Bölge/ilçe sayfası YOK |

Güçlü yan: ürün başına bir niyet, bol uzun kuyruk, "fiyat" kelimesiyle 8 ayrı sayfa. Zayıf yan: sayısal veri yok, tablo yok, yinelenen şablon (bölüm başlıkları sayfalar arası benzer), çift H1, thin hub sayfası, tek telefon, bölge kapsaması yok.

## 2. Rakip B: iklimpalet.com (İstanbul Avrupa yakası, Avcılar merkezli)

### Yapı
- Ana sayfa title: "Paletçi İstanbul | Ahşap Palet, EURO Palet, Özel Ölçülü Palet". H1: "Kaliteli Ahşap Paletler, Uygun Fiyatlar". ~450 kelime özgün metin. SSS yok. Şema doğrulanamadı. Sayaç bileşenleri "0" gösteriyor (bozuk).
- 8 ürün, 4 hizmet (palet alım, satım, tamir, toplu alım), 25 ilçe sayfası (tamamı Avrupa yakası). Üst menü ana öğeleri "#" placeholder.
- Adres Avcılar, Firüzköy Mah.; tüm ilçe sayfalarında aynı adres (Bağcılar, Zeytinburnu sayfalarında bile). "Aynı gün teslim" iddiası 25 ilçenin hepsinde.

### İlçe sayfası şablonu (Avcılar, Zeytinburnu, Bağcılar okundu; kalan 22 aynı)
- Title/H1: "[İlçe] Palet | Paletçi [İlçe] - Ahşap Palet, EURO Palet" veya "[İlçe] Palet Alım Satım | İKLİM PALET" (telefon numarası title'a ekleniyor).
- H2: "[İlçe] Palet Hizmeti", "[İlçe] Palet için Teklif Alın"; H3: "[İlçe] Bölgesinde Hizmetlerimiz", "Neden İklim Palet?", "[İlçe] Palet Fiyatları" (rakamsız).
- 350-450 kelime, SSS yok, tablo yok, harita yok, yorum yok. 4 ürün kartı (euro, plastik, ikinci el, ihracat) + yan çubuk "Yakın Bölgeler" (5 komşu ilçe) + 25 ilçenin tam menüsü.
- Yerel veri sıfır: mahalle, OSB, yol, sektör adı yok. Sadece ilçe adı değişiyor, komşu listesi ve ufak bir cümle değişiyor. Yani "doorway page" riski yüksek; Google'ın scaled content / doorway değerlendirmesinde zayıf kalabilir ama düşük rekabetli sorgularda hâlâ sıralanıyor olması muhtemel.
- CTA: sabit üst çubuk telefon + WhatsApp + "Teklif Al"; sayfada 4-6 tekrar.

### Ürün sayfaları
- ~150-300 kelime. Teknik özellik tablosu (tek rakip bölümü olan tablo): euro 80x120/100x120/110x130, dinamik yük 1.500 kg, ~25 kg, çam/kayın, EUR + ISPM-15, 4 yönlü giriş. İzgara/Press/Metal/Çift Taraflı sayfaları aynı metin ve aynı özellik tablosunu paylaşıyor (kopya; "Metal palet" başlığı altında ahşap izgara anlatılıyor, "Çift taraflı" aynı). Yani 4 sayfa neredeyse kopya, görseller yer tutucu.
- Hizmet sayfaları: palet-alim ~400 kelime (3 adım: ara -> yerinde değerlendirme -> nakit ödeme; hasarlı/metal hurda değerinden, plastik tek tek), palet-tamir ~130 kelime (tahta değiştirme, çivi sıkma, takoz tamiri, kalite kontrol).
- Anahtar kelime stratejisi: "paletçi", "[ilçe] palet", "palet alım satım", "palet tedariği". Tek kelime "paletçi" title'da.

Güçlü yan: Avrupa yakası ilçe kapsaması, "paletçi" dili, alım hizmetinin süreç anlatımı. Zayıf yan: ince/kopya içerik, SSS yok, şema yok (görünmüyor), sabit adres uyuşmazlığı, kırık UI.

## 3. Rakip C: royalpalet.com (Sultanbeyli üretici, kurumsal)

- 33 URL: 5 kategori (/urunler/ahsap-palet, euro-palet, ahsap-kasa-sandik, ikinci-el-palet, kereste-ahsap-ambalaj), 11 ürün sayfası (80x120 standart, 100x120 ağır yük, 80x80, 114x114, 100x120 CP, euro 80x120, ısıl işlemli ISPM-15 euro, ihracat sandığı, katlanır ahşap kasa, sınıflandırılmış ikinci el, palet takozu/kereste), 8 kurumsal (ısıl işlem, kalite-çevre, misyon-vizyon, sertifikalar, referanslar, İK...), 3 blog.
- Ürün sayfaları: 100-150 kelime, tablo yok (madde işaretiyle ölçü; 100x120 ağır yük: 1.500-2.000 kg), SSS yok, fiyat yok. Title = "[Ürün] - Royal Palet". Meta description doğrulanamadı.
- Ana sayfa H1: "Sağlam Paletler, Sağlam İş Birlikleri"; ~500-600 kelime; iddialar: ayda 50.000+ palet, 15+ yıl, ISO 9001, ISO 14001, CE, ISPM-15 damga yetkisi (belge numarası yok).
- Blog: 3 yazı (ISPM-15, euro vs standart, 5 kriter). "5 kriter" yazısı gövdede yaklaşık 40 kelime: kriterler tek cümlede (ölçü, yük, nem, giriş yönü, standart); yazı tarihleri tutarsız (18.06 yazısı, 29.06 ve 10.07 tarihli "diğer yazılar" ile). İnce içerik.
- Bizim açımızdan ilginç: farklı ölçü kaynakları: 80x80, 114x114, 100x120 CP, katlanır ahşap kasa, palet takozu/kereste. Bunlar "ürün katmanı olarak var" ama içerik yok. Kurumsal güven sayfaları (sertifikalar, referanslar, kalite politikası) var; biz /belgeler ve /referanslar ile eşdeğeriz.
- Konumu üretici/sanayi alıcı; fiyat/ilçe/SSS içeriğiyle rekabet etmiyor. Tehdit düşük, fikir kaynağı sınırlı.

## 4. Kıyas: biz ne durumdayız (mepalorman.com sitemap'i, 122 URL)

Bizde var: 6 fiyat sayfası + hub (palet, ahşap, ikinci el, euro, plastik, hurda, özel ölçü), 19 ürün, 8 hizmet, 24 bölge (Kocaeli + Anadolu yakası + `istanbul-palet`), 6 sektör, 29 rehber, 4 araç, galeri, belgeler, referanslar, `turkiye-geneli-palet-sevkiyati`.

Eksik (üç rakibe göre; sitemap karşılaştırması):

| Eksik sayfa/konu | Kim var | Hacim/niyet tahmini |
|---|---|---|
| `/tahta-palet-fiyatlari/` | A | Orta; "tahta palet" konuşma dilinde çok yaygın |
| `/80x120-palet-fiyatlari/` | A | Orta-yüksek (ölçü bazlı arama) |
| Avrupa yakası ilçe sayfaları (21+ ilçe) | B | Yerel niyet, rekabet düşük, hacim ilçe başı küçük ama toplamı büyük |
| `/urunler/80x120-plastik-palet/`, `100x120-plastik-palet/` | A | Ölçü + ürün; plastik fiyat aramasının büyük kısmı |
| `/urunler/hijyenik-plastik-palet/` (beyaz) | A | Gıda/ilaç niş, yüksek ticari niyet |
| `/urunler/plastik-euro-palet/` | A | Orta |
| `/urunler/ikinci-el-plastik-palet/`, `/ikinci-el-ahsap-palet/` | A, B | Yüksek niyet |
| Plastik kasa / palet kasa / toptan plastik | A | Orta |
| Tahta kasa, dekoratif ahşap kasa, palet sandık, ihracat kasası | A | Orta (dekoratif = farklı kitle/bireysel) |
| Arası sık palet, kapalı (sık tahtalı) ihracat paleti | A | Düşük-orta, niş |
| Izgara/kafes palet, press palet, metal palet, çift taraflı palet | B | Düşük-orta, anlam doğrulanmalı |
| CP1, CP5, CP6, CP9 | A | Düşük (CP3 ve CP bizde var) |
| 80x80, 114x114 palet | C | Düşük, sanayi niş (ölçüler başka endüstri standardı) |
| Katlanır ahşap kasa, palet takozu/kereste | C | Düşük-orta |
| 80x120 kirli (kullanılmış) euro palet | A | Düşük, ikinci el euro'ya katıp bölüm yapmak mantıklı |
| Şişecam / della palet | A | Marka adı, hukuki risk; yazılacaksa "cam şişe/ambalaj taşıma paleti" olarak marka dışı |
| "Paletçi", "palet tedariği", "toplu alım", "palet alan firmalar" dili | B, A | Başlık ve giriş metni eksik |
| Palet satış rehberi (satıcıya yönelik: hurda palet nereye satılır, palet satışında KDV/fatura) | A (kısmen) | Arama verisi: "hurda palet KDV" mali müşavir sitelerinde sıralanıyor; niyet var |

Bizde olup üçünde olmayan güçlü yanlar (korunmalı): hasarlı/kırık alımı, çakma EPAL, orta/kalın orta, ısıl işlemli palet, ambalaj paleti, araçlar (konteyner hesaplama, palet seçici, fotoğraftan değerleme), 29 rehber, sektör sayfaları.

## 5. SERP gözlemleri (8 sorgu, arama API'si; yönsel)

| Sorgu | Sonuç görüntüsü | Çıkarım |
|---|---|---|
| istanbul palet | Anlamsız karışık sonuç: restoran, saray, "palet ustası" iş ilanı (eleman.net), firmasec.com rehberi (Beylikdüzü palet firmaları). Palet satıcı siteleri ilk ekranda yok | Genel "istanbul palet" kısa kuyruğu bu araçta güvenilir okunamadı. Gerçek SERP'i elle/araçla kontrol et. Firma rehberi (firmasec) sıralanıyor: dizin kayıtları (Google İşletme + dizinler) değerli |
| avrupa yakası palet | Euro palet ölçü rehberleri (searates, cargoson, kariyer.net sözlük, cimri epal palet) | Bölge kelimesi satıcı siteleriyle eşleşmedi: boşluk açık, ama bu araçta güvenilir okunamadı |
| euro palet fiyatları | Satıcı blogu (karekod.org "İkinci El Palet Fiyatları 2026" tablosu), Wikipedia EUR-pallet, searates, cargoson, kariyer.net, inka-palet datasheet | Fiyat arayanlara tablo veren bir blog öne çıkıyor. Rakip A sayısal fiyat vermiyor: tarih damgalı, aralıklı fiyat tablosu ile fark yaratma fırsatı |
| plastik palet fiyatları | Aynı karekod blogu, cimri/idefix ürün listeleri, akademik makale | Satıcı site yerine marketplace/blog: net fiyat aralığı ve ölçü tabloları içeren sayfa şansı yüksek |
| ikinci el palet | karekod blogu, firmasec firma sayfaları (Gürpınar, Odak Palet), cilticaret, Palet Depom (Bursa), yandex shopping | Firma dizini sayfaları ve küçük satıcı siteleri çıkıyor; rakip A/B ilk ekranda görünmedi |
| palet alım satım | Gürpınar Palet, Çil Ticaret (Gaziosmanpaşa), Göze Palet (Gebze), firmasec, kariyer.net sözlük | Yerel küçük firmalar; "palet alım satım" kısa kuyruk. Göze Palet Gebze/Kocaeli hizmet alanı ile doğrudan rakibimiz |
| hurda palet alan yerler | muhasebenews.com "Hurda palet satışlarında KDV var mı?", Çil Ticaret, Cüne Palet Hurda (Avcılar/Başakşehir), firmasec "palet alım satımı" | Bilgi niyeti karışık: satıcı "KDV/fatura" ve "nereye satarım" soruyor. Rehber + hizmet sayfası eşleşmesi gerekli |
| gebze palet | Göze Palet Orman Ürünleri (Balçık köyü, Gebze: Dilovası, Tuzla, Darıca, Pendik, İstanbul, Kocaeli hizmet alanı), Ozon Palet (Gebze), firmasec | Doğrudan rakip: Göze Palet. Bölgesel anahtar "gebze palet" bizim `/bolge/gebze-palet/` ile eşleşiyor; Google Business Profile, harita ve LocalBusiness şeması kritik |

Not: Rakip A ve B bu aramalarda ilk ekranda görünmedi; yeni siteler (blog tarihleri Eylül-Ekim 2026) ve henüz otorite kazanmamış olabilirler. Bu bir sıralama iddiası değil, aracın sınırlı görüşü.

## 6. Önerilen ilçe listesi (Avrupa yakası ve çevre)

Kural: ilçe sayfası şablon kopyası olmayacak. Her sayfada doğrulanmış yerel veri: ilçedeki sanayi/lojistik bölge adı, Gebze'den yaklaşık mesafe ve ana yol, tipik müşteri sektörü, teslim süresi (gerçek), 2-3 SSS. Aynı gün teslim iddiası yalnızca gerçekse. Gebze deposu uzak: çerçeve "Türkiye geneli sevkiyat" + planlı sevkiyat. İstanbul'da zaten `istanbul-palet` var; ilçe sayfaları bunun alt satelitidir.

Öncelik 1 (sanayi/lojistik yoğun, ilk dalga: 10 sayfa)
1. Esenyurt  2. Avcılar  3. Beylikdüzü  4. Büyükçekmece  5. Başakşehir (İkitelli OSB bağlantısı, doğrula)  6. Bağcılar  7. Küçükçekmece  8. Arnavutköy (Hadımköy, lojistik depolar)  9. Gaziosmanpaşa  10. Sultangazi

Öncelik 2 (ikinci dalga: 7 sayfa)
11. Silivri  12. Çatalca  13. Esenler  14. Bayrampaşa (hal/toptan)  15. Zeytinburnu  16. Bahçelievler  17. Güngören

Öncelik 3 (düşük sanayi, tek "İstanbul merkez ilçeleri" sayfasında birleştir veya sonra)
18. Eyüpsultan  19. Kağıthane  20. Bakırköy  21. Sarıyer  22-25. Fatih, Beyoğlu, Beşiktaş, Şişli: ayrı sayfa değil. Hepsi için tek "Fatih-Beyoğlu-Beşiktaş-Şişli palet" benzeri birleşik sayfa (zayıf talep, konut/ticaret ağırlıklı).

Ek bölgeler (rakip B'de yok, bize stratejik): Trakya (Çorlu, Çerkezköy: Tekirdağ OSB), Bursa, Sakarya (Adapazarı/Hendek), Gölcük-Karamürsel-Başiskele (Kocaeli'nde eksik), Beykoz, Üsküdar (Anadolu'da eksik). Yalnızca gerçekten hizmet verilen yerler için.

Anadolu/Kocaeli tarafı bizde zaten güçlü; rakip B'nin Avrupa kısmını almak onun tek ayağıdır.

## 7. Yeni sayfa önerileri: title / H1 / anahtar kelime

Biçim: URL | Title (≤60 kr hedef) | H1 | Ana kelime + yan kelimeler | Not. "Mepal Orman" marka eki varsayımdır; mevcut title kalıbınıza uyarlayın.
Kanibalizasyon notu: yeni sayfanın ana kelimesi mevcut sahibi olan sayfanın ana kelimesini tekrar etmez; mevcut sahip sayfa (parantez) bağlantıyla beslenir.

### A. Fiyat sayfaları
1. `/tahta-palet-fiyatlari/` | Tahta Palet Fiyatları 2026: Tahta Kalınlığı ve Ölçüye Göre | Tahta Palet Fiyatları: Neye Göre Değişir? | tahta palet fiyatları; tahta palet fiyatı; tahta palet satın al; tahta palet toptan | Sahibi `ahsap-palet-fiyatlari` ("ahşap palet fiyatları"). Bu sayfada "ahşap" title'a girmesin; tahta kalınlığı, kuruluk, tür ekseni.
2. `/80x120-palet-fiyatlari/` | 80x120 Palet Fiyatları: Euro, Standart ve İkinci El | 80x120 Palet Fiyatları | 80x120 palet fiyatları; 80x120 palet kaç TL; 80x120 palet toptan | Sahibi `euro-palet-fiyatlari` ("euro palet fiyatları"). Bu sayfa ölçü ekseni; euro/EPAL ayrımı euro sayfasına link. Çakışma yüksek: önce 6. maddedeki GSC ile doğrula, çakışıyorsa tek sayfa yap.
3. Mevcut fiyat sayfalarına ekle: tarih damgalı "indikatif fiyat aralığı" tablosu (yalnızca müşteri onaylarsa). Rakiplerin hiçbiri rakam vermiyor, arama sonuçlarında blog fiyat tablosu öne çıkıyor.

### B. Plastik palet kümesi (sahip: `/urunler/plastik-palet/` -> "plastik palet"; `/plastik-palet-fiyatlari/` -> "plastik palet fiyatları")
4. `/urunler/80x120-plastik-palet/` | 80x120 Plastik Palet: Ölçü, Yük ve Kullanım | 80x120 Plastik Palet | 80x120 plastik palet; plastik euro palet ölçüsü; rafa uygun plastik palet
5. `/urunler/100x120-plastik-palet/` | 100x120 Plastik Palet: Ağır Yük ve Raf Seçimi | 100x120 Plastik Palet | 100x120 plastik palet; endüstriyel plastik palet
6. `/urunler/hijyenik-plastik-palet/` | Hijyenik Plastik Palet (Beyaz): Gıda ve İlaç İçin | Hijyenik Beyaz Plastik Palet | hijyenik plastik palet; beyaz plastik palet; gıda plastik palet | Gıda/ilaç sektör sayfaları bağlansın.
7. `/urunler/plastik-euro-palet/` | Plastik Euro Palet: Ahşap Euro'dan Farkı | Plastik Euro Palet | plastik euro palet | Başlıkta "euro palet" tek başına geçmesin (euro sayfası sahibi).
8. `/urunler/ikinci-el-plastik-palet/` | İkinci El Plastik Palet: Durum Sınıfları ve Teklif | İkinci El Plastik Palet | ikinci el plastik palet; kullanılmış plastik palet
9. `/urunler/plastik-palet-kasa/` | Plastik Palet Kasa: Palet Üstü Taşıma Kasaları | Plastik Palet Kasa | plastik palet kasa; palet boyutlu plastik kasa | Ürünün tanımı doğrulanmalı (kasa mı, palet-üstü konteyner mi).
10. `/plastik-palet-toptan/` | Plastik Palet Toptan Tedarik | Plastik Palet Toptan | plastik palet toptan; toplu plastik palet | Düşük öncelik; plastik pillar'a bölüm olarak da eklenebilir.

### C. İkinci el ve hurda
11. `/urunler/ikinci-el-ahsap-palet/` | İkinci El Ahşap Palet: A-B-C Sınıfları ve Fiyat Aralığı | İkinci El Ahşap Palet | ikinci el ahşap palet; ikinci el tahta palet | `ikinci-el-palet` sahibi "ikinci el palet"; bu sayfa malzeme ekseni.
12. `/rehber/hurda-palet-nereye-satilir/` | Hurda Palet Nereye Satılır? 6 Adımda Satış Rehberi | Hurda Palet Nereye Satılır, Nasıl Fiyatlanır? | hurda palet alan yerler; hurda palet nereye satılır; hurda palet alan firmalar | `hizmetler/hurda-palet-alimi` hizmet sayfası sahibi; rehber satıcı bilgi niyeti, ona link verir.
13. `/rehber/hurda-palet-satisinda-kdv-fatura/` | Hurda Palet Satışında KDV ve Fatura: Bilmeniz Gerekenler | Hurda Palet Satışında KDV ve Fatura | hurda palet kdv; hurda palet fatura; hurda palet tevkifat | Arama sonuçlarında muhasebe siteleri çıkıyor. Mevzuat bilgisini mali müşavire doğrulat, tarih ver, "mali danışmanlık değildir" notu.
14. `/hizmetler/palet-alan-firmalar/` ya da `palet-alim-satim` sayfasına bölüm | Palet Alan Firma: Ahşap, Plastik, Hurda Palet Satın Alıyoruz | Paletinizi Satın Alıyoruz | palet alan firmalar; palet alan yerler; palet satmak istiyorum | Mevcut `hizmetler/palet-alim-satim` ile çakışma riski: yeni URL yerine o sayfanın başlık/H2'sini genişlet.

### D. Ahşap kasa ailesi (mevcut: `/urunler/ahsap-sandik/`)
15. `/urunler/tahta-kasa/` | Tahta Kasa: Sebze, Meyve ve Sanayi Kasaları | Tahta Kasa | tahta kasa; ahşap sebze kasası; taşıma kasası
16. `/urunler/ihracat-kasasi/` (ihracat sandığı ve kasası tek sayfa) | İhracat Sandığı ve Kasası: ISPM-15 Uyumlu Özel Üretim | İhracat Sandığı ve İhracat Kasası | ihracat sandığı; ihracat kasası; makine sandığı | Rakip A iki URL açmış; biz tek URL ile her iki sorguyu sahipleniyoruz.
17. `/urunler/palet-sandik/` | Palet Sandık: Üst Çerçeve ve Kapaklı Palet Kasası | Palet Sandık | palet sandık; palet kasa | Anlamı doğrulanmalı.
18. `/urunler/dekoratif-ahsap-kasa/` | Dekoratif Ahşap Kasa: Mobilya ve Mekân Kullanımı | Dekoratif Ahşap Kasa | dekoratif ahşap kasa; palet mobilya kasa | Bireysel kitle, B2B odağından sapma; düşük öncelik.
19. `/urunler/katlanir-ahsap-kasa/` | Katlanır Ahşap Kasa: Depolama ve Dönüş Lojistiği | Katlanır Ahşap Kasa | katlanır ahşap kasa | Rakip C'de var, niş.

### E. Niş palet tipleri (anlam ve ölçü doğrulanmadan yazılmasın)
20. `/urunler/arasi-sik-palet/` | Arası Sık Palet: Küçük ve İnce Ürünler İçin Sık Tahtalı | Arası Sık (Sık Tahtalı) Palet | arası sık palet; sık tahtalı palet; kapalı yüzey palet | Rakip bunu "sektörde gevşek kullanılan terim" olarak tanımlıyor; bizim tanımımız açık ve doğrulanmış olmalı.
21. `/urunler/kapali-ihracat-paleti/` | Kapalı İhracat Paleti: Boşluksuz Yüzey, ISPM-15 | Kapalı İhracat Paleti | kapalı ihracat paleti; kapalı palet | `ihracat-paleti` sahibi "ihracat paleti"; bu sayfa yalnızca "kapalı yüzey" ekseni.
22. `/urunler/izgara-kafes-palet/` | Izgara (Kafes) Palet: Havalandırmalı Taşıma | Izgara Palet | izgara palet; kafes palet | Rakip B sayfaları tutarsız; gerçek ürün tanımı (ahşap mı, metal mi) bize sorulsun.
23. `/urunler/press-palet/` | Press (Preslenmiş) Palet: Hafif ve Tek Kullanımlık | Press Palet | press palet; preslenmiş palet | Piyasada talaş-preslenmiş ürünler için kullanılır; rakip metin buna net değil. Doğrula.
24. `/urunler/metal-palet/`, `/urunler/cift-tarafli-palet/` | ürünü gerçekten satıyorsak | yoksa yazma.
25. `/urunler/80x120-kirli-euro-palet/` yerine: `ikinci-el-euro-palet`'e H2 "kirli/kullanılmış euro palet" ekle.
26. CP1/CP5/CP6/CP9: ayrı sayfa yerine `/rehber/cp-paletleri-olcu-tablosu/`'nu güçlendir (CP1-CP9 tablo + her CP için kısa bölüm + "cp5 palet", "cp9 palet" gibi yan kelimeler). Rakip ölçü vermiyor: tablo bizim avantaj.
27. 80x80 / 114x114 palet: ayrı sayfa değil, `rehber` içinde "sanayi standart dışı ölçüler" tablosu veya `ozel-olcu-palet`e bölüm.
28. Şişecam/della palet: marka adıyla yazma. Gerekirse `sektorler/gida-ve-icecek` altında "cam ambalaj taşıma paleti" bölümü.

### F. İlçe sayfası kalıbı (önerilen)
- URL: `/bolge/[ilce]-palet/` (mevcut kalıp). Title: "[İlçe] Palet: Euro, İkinci El ve Plastik Palet Teslimatı" (≤60 kr). H1: "[İlçe] Palet Alım Satım ve Teslimat". Ana kelime: "[ilçe] palet"; yan: "[ilçe] paletçi", "[ilçe] ikinci el palet", "[ilçe] palet alım satım".
- Bölümler: (1) hizmet özeti ve sevkiyat gerçeği (Gebze'den, planlı), (2) o ilçedeki sanayi/lojistik bölgeleri (doğrulanmış), (3) en çok talep edilen 3 ürün (80x120 euro, ikinci el, ihracat), (4) mini SSS (3 soru, ilçeye özgü), (5) yakın ilçe iç linkleri + `istanbul-palet` + fiyat sayfası, (6) CTA: telefon + WhatsApp + teklif formu.
- 450+ kelime özgün, rakip B'nin ~350 kelime şablonunu geçmek yeterli. Şema: LocalBusiness/Service (areaServed), BreadcrumbList.

### G. Ana sayfa ve hub'lar
- Ana sayfa/ilgili hub'lara "paletçi", "palet tedariği", "toplu alım" kelimeleri doğal biçimde (mevcut Gebze/Kocaeli konumunu bozmadan). Title'a "paletçi" eklemeyi başka sayfalarla kanibalizasyon yaratmadan değerlendir.
- Fiyat hub'ı `/palet-fiyatlari/`: rakip A'nın aynı sayfası ~400 kelime ve ince; bizim hub'ı karşılaştırma tablosu + fiyat etkenleri + sayfa kartları ile zenginleştir.

## 8. Teknik/şema/CTA farkı (bizim için kontrol listesi)
- Rakiplerde doğrulanabilir tablo: yalnızca B'nin euro palet özellik tablosu (kopyalanan 4 üründe). A ve C'de tablo yok. Tüm ürün sayfalarımıza ölçü/yük/ağırlık/giriş tablosu (doğrulanmış) ekleyerek fark yaratırız.
- SSS: A tüm sayfalarda var (7-8 soru), B ve C yok. Bizde SSS standardı olmalı. Not: Google, FAQ zengin sonuçlarını 2023'ten beri çoğunlukla devlet/sağlık sitelerine sınırlıyor; şemanın kazancı SERP görünümünden çok içerik anlamlandırma/AI özetleri.
- Şema: üçünde doğrulanamadı. Bizde Organization + LocalBusiness (Gebze adresi) + BreadcrumbList + (ürün sayfalarında) Product (fiyatsız) + FAQPage önerilir; Rich Results Test ile doğrula.
- CTA düzeni: A "5-8 CTA/sayfa + yüzen çubuk" ile agresif; B sabit üst çubuk. Bizim hedef: sabit mobil çubuk (ara/WhatsApp) + sayfa içi 2 CTA (özet sonrası, SSS sonrası) + teklif formu. Gereksiz tekrar yok.
- Title: B telefon numarasını title'a koyuyor (tıklama için belki, ama marka alanı tüketiyor). Önerilmez.
- Ses tonu: "fiyat vermiyoruz, teklif alın" üç rakipte de var. Fark: fiyat aralığı/hesaplayıcı (aracımız var) + sayısal ölçü tabloları.

## 9. Kanibalizasyon haritası (GSC'siz, mevcut + önerilen)
| Birincil sorgu | Sahip sayfa (önerilen) | Dikkat |
|---|---|---|
| ahşap palet fiyatları | /ahsap-palet-fiyatlari/ | tahta fiyat sayfası "ahşap" kelimesini title'a almasın |
| tahta palet fiyatları | /tahta-palet-fiyatlari/ (yeni) | |
| euro palet fiyatları | /euro-palet-fiyatlari/ | 80x120 fiyat sayfası çakışma riski: GSC ile doğrula |
| plastik palet / plastik palet fiyatları | /urunler/plastik-palet/ ; /plastik-palet-fiyatlari/ | yeni plastik sayfaları ölçü/tip eksenine ayrılmalı |
| ikinci el palet | /urunler/ikinci-el-palet/ | ikinci el ahşap/plastik/euro: malzeme ekseni; `ikinci-el-palet-fiyatlari` "fiyat" kelimesinin sahibi |
| hurda palet fiyatları | /hurda-palet-fiyatlari/ | hurda rehberleri "nereye satılır", "KDV" eksenlerinde; hizmet sayfası `hurda-palet-alimi` ile iç link |
| palet alım satım / palet alan | /hizmetler/palet-alim-satim/ | yeni URL açma, sayfayı genişlet |
| ihracat sandığı / kasası | /urunler/ihracat-sandik-kasa/ (tek) | iki URL açma |
| istanbul palet | /bolge/istanbul-palet/ | ilçe sayfaları "[ilçe] palet" sahibi; istanbul-palet ilçelere link verir, ilçelerden geri link |
| gebze palet | /bolge/gebze-palet/ | Gebze OSB, Balçık, İMES vb. alt sayfalar başlıklarında "gebze palet" ana kelimesini tekrarlamasın (mevcut başlıkları GSC'de kontrol et) |

## 10. EN DEĞERLİ 25 FIRSAT (öncelik sırasıyla)

1. İlçe sayfaları ilk dalga: Esenyurt, Avcılar, Beylikdüzü, Büyükçekmece, Başakşehir, Bağcılar, Küçükçekmece, Arnavutköy, Gaziosmanpaşa, Sultangazi (10 sayfa, özgün yerel veriyle). Rakip B'nin tek gerçek avantajı; doorway riskinden kaçınarak alınır.
2. Tarih damgalı, aralıklı fiyat tablosu (onay alınırsa) mevcut 6 fiyat sayfasına: hiçbir rakip sayısal fiyat vermiyor, SERP'te blog tablosu öne çıkıyor.
3. `/tahta-palet-fiyatlari/` (yeni, konuşma dili hacmi).
4. `/80x120-palet-fiyatlari/` (veya euro fiyat sayfasına ölçü ekseni, GSC doğrulamasıyla).
5. Plastik küme: 80x120 + 100x120 plastik palet (iki ölçü sayfası) + plastik pillar'dan link.
6. Hijyenik beyaz plastik palet (gıda/ilaç, yüksek ticari niyet).
7. İkinci el plastik palet + ikinci el ahşap palet (iki satış sayfası, "ikinci el palet" pillar'ı güçlendirir).
8. Hurda/satıcı rehberi: "Hurda palet nereye satılır" (hurda palet alan yerler sorgusu).
9. "Hurda palet satışında KDV ve fatura" rehberi (mali müşavir doğrulamasıyla).
10. `hizmetler/palet-alim-satim` yeniden yapılandırma: "palet alan firmalar", "paletçi" dili, satıcı süreci (fotoğraf, yerinde değerlendirme, ödeme), SSS.
11. Gebze yerel SEO paketi: GBP, LocalBusiness şeması, Balçık/İMES/Gebze OSB sayfalarının doğrulanması; rakip Göze Palet ve Ozon Palet'e karşı yorum/harita sinyali.
12. İlçe sayfaları ikinci dalga: Silivri, Çatalca, Esenler, Bayrampaşa, Zeytinburnu, Bahçelievler, Güngören.
13. Tüm ürün sayfalarına doğrulanmış ölçü/yük tablosu (rakipler ya tablo vermiyor ya kopya tablo).
14. Tüm ürün/fiyat/bölge sayfalarına standart SSS (rakip A'da var, B/C'de yok) + FAQPage şeması.
15. `ihracat sandığı + ihracat kasası` tek sayfada birleşik sahiplik (rakip A iki URL açmış, biz tek güçlü sayfa).
16. Tahta kasa sayfası (`/urunler/tahta-kasa/`).
17. Plastik euro palet + plastik palet kasa + toptan plastik (üçü tek hub altında bölüm de olabilir).
18. Arası sık / sık tahtalı palet sayfası (niş, anlamı doğrulandıktan sonra).
19. Kapalı (boşluksuz) ihracat paleti sayfası.
20. CP rehberini CP1-CP9 tablosuyla güçlendir ("cp5 palet", "cp9 palet" yan kelimeleri).
21. Ana sayfa/hub'larda "paletçi", "palet tedariği", "toplu alım" dil ekleme.
22. Izgara/kafes palet ve press palet (anlam doğrulanırsa); metal/çift taraflı yalnızca satılıyorsa.
23. Trakya (Çorlu/Çerkezköy) ve Kocaeli eksik ilçeler (Gölcük, Karamürsel, Başiskele) bölge sayfaları.
24. Katlanır ahşap kasa + palet takozu/kereste (rakip C'nin boş bıraktığı ürün alanı; mevcut `takozlu-palet` ile çakışma kontrolü).
25. Dekoratif ahşap kasa (bireysel kitle, en düşük öncelik; B2B odağıyla çelişebilir).

## 11. Müşteriye (Cevat Bey) sorulacak/doğrulanacaklar
- İstanbul Avrupa yakasına gerçekten teslim süresi nedir (aynı gün iddiası yok), nakliye politikası?
- Fiyat aralığı yayınlansın mı? Yayınlanacaksa güncelleme sıklığı.
- Ürün listesi: izgara/kafes, press, metal, çift taraflı, kadranlı, arası sık, katlanır kasa, 80x80, 114x114 ürünleri gerçekten tedarik ediliyor mu?
- Plastik palet için gerçek fotoğraf var mı? (önceki notla uyumlu: çizim kullanımı sürüyor)
- Hurda KDV/fatura içeriği için mali müşavir onayı.
- Marka adlı sayfalar (şişecam, della) yazılmayacak mı?

Bu belge çıktısı: iç strateji. Sitede rakip adı veya rakip metni kullanılmayacak.
