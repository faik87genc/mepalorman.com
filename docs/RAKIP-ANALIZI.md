# MEPAL — Rakip Analizi (iç doküman, 2026-10-25)

## 0. Yöntem ve sınırlar (dürüst not)
- WebSearch aracı ABD tabanlı özet döndürüyor; Google'ın ham "ilk 8 sonuç" listesi ve "People also ask" kutusu GÖRÜLEMEDİ. Aşağıdaki veri, 11 aramanın özetlerinden ve doğrudan açılan sitelerden gelir.
- Aramalar: palet fiyatları, ahşap/euro/ikinci el/plastik palet fiyatları, hurda palet alımı, gebze palet, palet satış türkiye geneli, 145x145 palet, turpal palet (+1 ek: palet üretimi Kocaeli Gebze).
- "145x145 palet" ve "turpal palet" için ilgili Türkçe sonuç ÇIKMADI (alakasız sonuçlar). Bu iki kelimede SERP rekabeti ölçülemedi; fırsat olabilir ama kanıtlanmadı.
- Fiyat sorgularında (palet/ahşap/euro/ikinci el/plastik fiyatları) sonuçlar karekod.org blog yazısı, Cimri/Akakçe/Teknosa (alakasız: palet = boya/giyim) ve ilan siteleriyle dolu; Gebze üreticileri ancak "gebze ahşap palet" tipi sorgularda göründü.
- Yapısal veri (JSON-LD), schema ve sayfa hızı WebFetch ile görülemedi: "belirlenemedi".
- Açılamayan: emirpalet.com (SSL el sıkışma hatası), paletdepom.com (sertifika hatası), gozepalet.com denenmedi, gebze.doguspalet.com (sertifika süresi dolmuş), altincagpalet.com (sertifika hatası), gocmenpalet.com (HTTP 509). Soncağ (soncag.com) palet değil, mühendislik yazılımı firması: rakip DEĞİL.
- Fiyat rakamı: aşağıda yalnızca blog kaynaklı rakipler "gözlem" olarak anılır; bizim metinlerimize düz TL yazılmaz (brif kuralı).

## 1. Rakip tablosu (gerçekten incelenenler)
| Site | Güçlü yan (gözlenen) | Zayıf yan (gözlenen) |
|---|---|---|
| ceysangrup.com (Ceysan Grup, Gebze) | En geniş site yapısı: Gebze Palet altında 7 alt sayfa (üretim, 2. el satış, özel imalat, EPAL & ISPM 15, tamir, hurda alım-satım, fiyatlar); Hizmetler altında 8 sayfa; OSB/bölge sayfaları (Dilovası OSB, Geposb, Taysad, Dosb, Balçık, Tuzla, Kurtköy, Sancaktepe); referans listesi (7 isimli müşteri); belgeler sayfası; SSS; blog; WhatsApp + telefon | Fiyat sayfasında rakam yok (sadece faktörler); H1 iki kez; kendi anahtar-kelime listesini sayfada gösteriyor (doldurma izlenimi); "EPAL sertifika" iddiası doğrulanamaz |
| gebzeahsappalet.com (Tur Kaz Palet) | Tek sayfalık güçlü landing; 14 soruluk SSS (ISPM 15, kaç kg taşır, euro palet farkı, teslimat); telefon/WhatsApp yüzen buton; ilçe sayfaları (Kocaeli, Dilovası, Darıca, Tuzla); ısıl işlem fırını üzerine 2 makale; yorum alanı | Başlık "numara + şehir" ile başlıyor; sayaçlar (yıllık tecrübe vb.) boş/0 görünüyor; fiyat yok; net H1 yok |
| paletglobal.com (Balkır Grup bağlantılı) | Kurumsal görünüm; sayılar (müşteri, araç, aylık palet hareketi) ve "Talepten Teslimata" süreç bölümü; Teklif Al formu (KVKK onaylı); Pendik ofisi; ahşap/plastik/sandık/hurda ürün grupları | Fiyat yok; SSS yok; blog içeriği görünmüyor; H1 sadece marka adı; rakamları doğrulanamaz (kendi beyanı) |
| gebzepalet.com.tr | Gebze Güzeller OSB adresi; CP/Euro/özel ölçü/sandık/hurda palet hizmet kartları; Belgelerimiz + ISPM15 sayfası | Eski tasarım; H1 yok; fiyat/SSS/blog yok; sadece marka başlıkları |
| arvenpalet.com.tr | "81 ile sevkiyat", "günlük sevkiyat" vaadi; Gebze + Kocaeli + Bölgeler sayfaları | Aracı/tedarikçi görünümü; ince içerik; fiyat/SSS/blog yok; tek telefon CTA |
| karekod.org (blog, "ikinci el palet fiyatları 2026") | Fiyat sorgularında SERP'e giren tek içerik; 3 tablo (fiyat, şehir ortalaması, palet türleri), 3 soruluk SSS; yıl etiketli başlık | Satıcı değil blog; ~600-900 kelime; veri kaynağı belirsiz, iç tutarsızlık var (aynı sayfada iki farklı euro palet aralığı) |
| gozepalet.com (Göze Palet, Balçık/Gebze) | Yalnızca firmasec.com kaydı görüldü: euro/standart/takozlu/ısıl işlem/CP/ince-orta-kalın palet, yerinden palet toplama, 14 bölgeyi sayıyor (Gebze, Şekerpınar, Dilovası, Tuzla, Darıca, Çayırova, Aydınlı, Orhanlı, İçmeler, Kartal, Pendik, Ümraniye...) | Sitenin kendisi incelenmedi; yorum 0 |
| Doğuş Palet Gebze, Altınçağ, Göçmen Palet | Yalnızca SERP özeti görüldü (site açılamadı): "ikinci el palet gebze" ayrı sayfa, "özel palet imalatı", euro palet alım-satım | İçerik incelenemedi, hüküm verilmez |

Genel gözlem: Gebze rakiplerinin hiçbirinde görünür TL fiyat tablosu yok (hepsi "teklif alın"). Fiyat tablosu sunmak ayrıştırıcı olabilir (prices.ts tablosu bunu karşılıyor). Hiçbiri araç/hesaplayıcı sunmuyor (gözlem: incelenen sayfalarda görülmedi).

## 2. Bizde EKSİK sayfa/konu/anahtar kelime (slug önerileri)
Mevcut slug'lar ICERIK-BRIFI.md'de; aşağıdakiler brifte YOK (rakip veya sorgu kanıtı parantezde).
**Ürün (/urunler/):**
- `takozlu-palet` (Göze: takozlu palet), `ince-palet` ve `orta-kalin-palet` (karekod ince/orta palet satırları; Göze ince-orta-kalın), `sandik-palet` (gebzepalet.com.tr "sandık palet"), `ikinci-el-euro-palet` (Doğuş "2. el euro"; "euro palet" 2. el sorguları), `tahta-palet` (gebzepalet.com.tr "tahta palet")
- `isil-islemli-palet` (HT damgalı; Ceysan/Tur Kaz ISPM 15 sayfaları) — "temin" dilinde, kendi fırınımız iddiası yok
**Hizmet (/hizmetler/):**
- `ahsap-atik-geri-donusum` (brifte hizmet olarak var, sayfası yok), `palet-nakliye-lojistik` (Ceysan lojistik), `yerinde-palet-toplama` (Göze: yerinden toplama), `isil-islem-ispm-15` (Ceysan hizmet sayfası; bizde fırın yok, "uyumlu palet temini" çerçevesi)
**Fiyat/konu:**
- `/hurda-palet-fiyatlari/` (hurda alım sorgusu; ton bazlı sunum karekod'da var), `/gebze-ahsap-palet-fiyatlari/` (Ceysan'ın hedeflediği sorgu), `/kocaeli-ahsap-palet-fiyatlari/` (Ceysan 2. fiyat sayfası), `/ozel-olcu-palet-fiyatlari/`
**Bölge (/bolge/):**
- `kocaeli-palet`, `istanbul-palet` (Arven/Ceysan'da var), `balcik-palet`, `gebze-osb-palet`, `plastikciler-osb-palet`, `kurtkoy-palet`, `imes-palet` (Ceysan, Arven), `aydinli-palet`, `orhanli-palet`, `icmeler-palet` (Göze listesi), `maltepe-palet`, `cekmekoy-palet` (Anadolu yakası, rakipte görülmedi — kendi fırsatımız)
- `turkiye-geneli-palet-sevkiyati` (Arven "81 il", Metkan "Türkiye geneli" iddiası) — yalnızca gerçekten sevkiyat yapıyorsak
**Kurumsal:** `/sss/` (Tur Kaz ve Ceysan'da ayrı SSS sayfası var), `/blog/` dizini (Ceysan, Paletglobal'de var), `/galeri/`, `/surec/` ("Talepten Teslimata" 4-5 adım)
**Rehber (/rehber/):** `ahsap-palet-nedir` (Tur Kaz sayfası), `sifir-palet-mi-ikinci-el-palet-mi`, `palet-fiyatlarini-etkileyen-faktorler` (Ceysan H2), `ikinci-el-palet-guvenli-mi` (Tur Kaz SSS), `ahsap-palet-geri-donusum`, `palet-kalite-1-2-3-sinif` (karekod'da "ince/orta" ayrımı), `suudi-arabistan-palet-zorunlulugu` (AKİB duyurusu: Haziran 2025'ten itibaren konteynerli ithalatta paletleme; DOĞRULAMA şart, tek kaynak özet)
**Anahtar kelime fırsatları:** "gebze ikinci el palet", "gebze euro palet", "ahşap sandık gebze", "palet tamiri gebze", "dilovası palet", "palet hurda ton fiyatı" (nitelik olarak), "2. el palet alan yerler".

## 3. Eklenmesi gereken bölümler
**Ana sayfa (rakiplerde yok/zayıf, bizde olmalı):**
1. Hero: tek H1 + 3 buton (Teklif Al / WhatsApp 0536 866 83 07 / Ara) — yüzen WhatsApp butonu (Tur Kaz'da var)
2. "Bugün fiyat, yarın teslimat" şerit + güncel fiyat tablosu özeti (prices.ts) — rakiplerde fiyat yok
3. Ürün kartları (euro, 100x120, CP, 145x145, plastik, ikinci el, hurda alımı)
4. "Talepten Teslimata" 4 adım (Paletglobal'deki bölüm; ölçü→teklif→stok/araç→teslim)
5. Hizmet bölgeleri haritası/listesi (OSB'ler; Ceysan bölge listesi gibi ama bölge sayfalarına link)
6. Araçlar: konteyner-palet hesaplama, palet seçici (rakipte görülmedi)
7. Sektör blokları, 6 sektör
8. SSS (8-10 soru, FAQPage şeması)
9. Belgeler/ISPM-15 uyumu açıklaması (iddiasız), hakkımızda özeti, KVKK onaylı teklif formu
10. Yorum/referans: yalnızca gerçek ve izinli olanlar; boş sayaç gösterme (Tur Kaz'da 0 görünüyor, güveni zedeliyor)
**Ürün sayfaları:** özet kutusu (answer); ölçü/taşıma kapasitesi tablosu; ne zaman seçilir / ne zaman seçilmez; fiyat tablosu satırı + "teklif al" CTA; ilgili ürün ve rehber linkleri; minimum sipariş/teslim bilgisi (yumuşak ifade); 4-6 soruluk ürüne özel SSS; Product/FAQ/BreadcrumbList şeması; yakın bölge linkleri; kalite sınıfı ve ISPM-15 notu; "Teklif iste" sticky bar (mobil).
**Fiyat sayfaları:** tablo + "fiyatı etkileyen faktörler" (Ceysan H2'si) + güncelleme tarihi + hacim/toptan notu + nakliye dahil mi sorusu (Ceysan SSS'sinde var) + hurdada ton bazlı sunum.

## 4. En çok sorulan 15 SSS sorusu
Kaynak notu: "People also ask" görülemedi. Soru 1-14 rakip SSS'lerinde (Tur Kaz, Ceysan, karekod) gözlenen veya onların kalıplarından türetilmiş; 15 standart kalıp. Cevaplarda düz TL yazma.
1. Ahşap palet fiyatları neye göre değişir? (Ceysan)
2. Euro palet ile standart palet arasındaki fark nedir? (Tur Kaz "Euro Palet Farkı Nedir?")
3. İkinci el palet güvenli mi / avantajlı mı? (Tur Kaz)
4. Ahşap palet kaç kg taşır? (Tur Kaz, karekod "yük kapasitesi")
5. ISPM 15 nedir, neden önemlidir? (Tur Kaz)
6. Palet ölçüleri neye göre seçilir? (Tur Kaz)
7. Toplu palet alımında indirim var mı? (Ceysan)
8. Fiyatlara nakliye ve teslimat dahil mi? (Ceysan)
9. Özel ölçü palet ne zaman gerekir ve fiyatı nasıl belirlenir? (Tur Kaz + Ceysan)
10. Palet teslimatı nasıl yapılır, ne kadar sürer? (Tur Kaz)
11. İkinci el palet durumu nasıl kontrol edilir? (karekod)
12. Hurda palet nereye satılır, nasıl değerlendirilir? (hurda alım sorgusu)
13. Plastik palet mi ahşap palet mi tercih edilmeli?
14. 1 tır / konteynere kaç palet sığar?
15. Palet tamir edilebilir mi / ömrü nasıl uzatılır?

## 5. Title / H1 kalıbı önerileri (title ≤60 karakter, "| MEPAL" dahil)
| Sayfa | Title | H1 |
|---|---|---|
| Ana sayfa | Palet Tedariği Gebze: Ahşap, Euro, Plastik \| MEPAL | Gebze'den Kocaeli ve İstanbul'a Toplu Palet Tedariği |
| /palet-fiyatlari/ | Palet Fiyatları: Ahşap ve Plastik \| MEPAL | Güncel Palet Fiyatları |
| /ahsap-palet-fiyatlari/ | Ahşap Palet Fiyatları Gebze \| MEPAL | Ahşap Palet Fiyatları |
| /euro-palet-fiyatlari/ | Euro Palet Fiyatları 80x120 \| MEPAL | Euro Palet (80x120) Fiyatları |
| /ikinci-el-palet-fiyatlari/ | İkinci El Palet Fiyatları \| MEPAL | İkinci El Palet Fiyatları |
| /plastik-palet-fiyatlari/ | Plastik Palet Fiyatları \| MEPAL | Plastik Palet Fiyatları |
| /hizmetler/hurda-palet-alimi/ | Hurda Palet Alımı Gebze Kocaeli \| MEPAL | Hurda Palet Alımı: Yerinden Alım |
| /urunler/145x145-palet/ | 145x145 Palet Ölçüleri ve Temini \| MEPAL | 145x145 Ahşap Palet |
| /urunler/turpal-palet/ | Turpal Palet Alım Satımı \| MEPAL | Turpal Palet Alım Satımı (marka iddiası yok) |
| /bolge/gebze-palet/ | Gebze Palet: Euro ve Ahşap Palet \| MEPAL | Gebze'de Palet Tedariği |
Kalıp: [Ürün/Konu] + [Bölge veya ölçü] + | MEPAL; yıl etiketi yalnızca fiyat sayfalarında ve güncelleme tarihiyle birlikte (karekod yıl etiketiyle sıralanıyor); telefon numarasını title'a koyma (Ceysan/Tur Kaz yapıyor, okunabilirliği bozuyor). Karakter sayıları elle tahmin edildi, uygulamada sayılmalı.
