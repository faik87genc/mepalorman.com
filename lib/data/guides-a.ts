import type { Guide } from "@/lib/types";

// Rehber yazıları, 1.–6. hafta (12 yazı)
export const guidesA: Guide[] = [
  // ───────────────────────── HAFTA 1 ─────────────────────────
  {
    slug: "euro-palet-olculeri",
    title: "Euro Palet Ölçüleri: EPAL 1, 2, 3, 6 Tablosu | MEPAL",
    description: "Euro palet ölçüsü 80x120 cm, yüksekliği 14,4 cm. EPAL 1, EPAL 2, EPAL 3 ve EPAL 6 ölçü, ağırlık ve taşıma kapasitesi tablosu, damga okuma.",
    h1: "Euro Palet Ölçüleri: EPAL 1, EPAL 2, EPAL 3 ve EPAL 6",
    answer: "Standart Euro palet (EPAL 1) 1200 x 800 mm taban ve 144 mm yüksekliğe sahiptir; yaklaşık 25 kg gelir ve 1.500 kg güvenli çalışma yükü için tasarlanmıştır. EPAL 2 (1200 x 1000 mm), EPAL 3 (1000 x 1200 mm) ve yarım boy EPAL 6 (800 x 600 mm) aynı ailenin diğer tipleridir.",
    keyword: "euro palet ölçüleri",
    art: "euro",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 1,
    related: ["epal-palet-ile-standart-palet-farki", "konteynere-ve-tira-kac-palet-sigar", "palet-kac-kg-tasir"],
    readMinutes: 5,
    sections: [
      {
        h: "Euro palet ölçüsü kaç cm?",
        p: [
          "Lojistikte “Euro palet” denince akla gelen ölçü 80 x 120 cm tabandır. Resmî adı EPAL 1 olan bu palet 1200 mm uzunluğa, 800 mm genişliğe ve 144 mm yüksekliğe sahiptir. Avrupa’da raflar, kamyon kasaları, konteynerler ve forklift ekipmanları bu ölçüye göre planlandığı için en yaygın palet tipidir.",
          "Ölçünün yanında dikkat edilecek bir nokta daha var: Palet iki yönden de forklift ya da transpaletle girişe uygundur; ancak uzun kenardan (1200 mm) dört yönlü giriş yapılabilen model dört yönlü, kısa kenardan giriş yalnızca iki yönlü olanlardan ayırt edilir. EPAL 1 dört yönlü girişe uygundur.",
        ],
      },
      {
        h: "EPAL 1, 2, 3 ve 6 ölçü ve taşıma kapasitesi tablosu",
        p: [
          "Aşağıdaki tablo EPAL tarafından tanımlanan dört palet tipinin nominal değerlerini gösterir. Ağırlıklar ahşabın nem oranına göre değişir, bu yüzden “yaklaşık” olarak okunmalıdır.",
        ],
        table: {
          caption: "EPAL palet tipleri: nominal ölçü ve yük değerleri",
          head: ["Tip", "Taban (mm)", "Yükseklik (mm)", "Ağırlık (yaklaşık)", "Taşıma kapasitesi"],
          rows: [
            ["EPAL 1", "1200 x 800", "144", "25 kg", "1.500 kg"],
            ["EPAL 2", "1200 x 1000", "162", "35 kg", "1.250 kg"],
            ["EPAL 3", "1000 x 1200", "144", "EPAL teknik föyünde belirtilir", "1.500 kg"],
            ["EPAL 6", "800 x 600", "144", "9,5 kg", "750 kg"],
          ],
        },
        links: [["80x120 Euro palet ürün sayfası", "/urunler/80x120-euro-palet/"], ["EPAL ölçülü palet", "/urunler/epal-palet/"]],
      },
      {
        h: "EPAL 1 nasıl yapılır? Tahta, takoz ve çivi sayısı",
        p: [
          "EPAL 1 paleti 11 tahta, 9 takoz ve 78 çividen oluşur. Çivilerin yerleri sabittir; bunun amacı paletin çapraz yönde sertliğini korumaktır. Standartta yalnızca EPAL tarafından onaylanmış ve bağımsız olarak test edilmiş çivilere izin verilir.",
          "Bu ayrıntılar pratikte şu işe yarar: Bir paletin takoz sayısı, tahta adedi veya çivi dizilimi tarif edilenden farklıysa, palet EPAL şartnamesine uygun değildir. Fiyatı daha düşük olabilir; ama ihracat, otomatik depo ve değişimli (exchange) kullanım için sorun çıkarabilir.",
        ],
      },
      {
        h: "Euro palet ağırlığı ve taşıma kapasitesi",
        p: [
          "EPAL 1 için güvenli çalışma yükü 1.500 kg’dır. Yani palet düz bir zeminde forklift ya da transpaletle hareket ederken bu ağırlığa kadar yük taşıyabilir. İstiflemede ise düz ve sağlam bir zeminde, en alttaki dolu paletin üzerine gelen toplam yük 5.500 kg’ı geçmemelidir.",
          "Raf sistemlerinde (bölme arası boşta duran palet) kapasite çok daha düşüktür ve raf aralığına, yük dağılımına ve paletin durumuna göre değişir. Raflı depolamada taşıma yükünü paleti satan firmadan ve raf üreticisinden birlikte teyit etmek gerekir. Ayrıntı için palet kaç kg taşır rehberimize bakabilirsiniz.",
        ],
        links: [["Palet kaç kg taşır?", "/rehber/palet-kac-kg-tasir/"]],
      },
      {
        h: "EPAL damgası nasıl okunur?",
        p: [
          "Orijinal bir EPAL paletin iki orta takozunda, uzun kenarlarda marka damgası bulunur. İsimlendirme kabaca şöyledir:",
        ],
        list: [
          "EPAL markası (oval içinde); paletin EPAL lisanslı üretici ya da tamirci tarafından yapıldığını gösterir.",
          "IPPC damgası; ISPM-15 uyumlu ısıl işlem yapıldığını belirtir (2010’dan beri EPAL paletlerde zorunludur).",
          "Ülke kodu ve bitki sağlığı otoritesinin kayıt numarası.",
          "Uygulama yöntemi: HT (ısıl işlem). Metil bromür (MB) uygulaması EPAL paletlerde yasaktır.",
          "EPAL kontrol zımbası (zorunlu); onarılmış paletlerde ayrıca onarım çivisi bulunur.",
          "Lisans numarası, yıl ve ay bilgisi.",
        ],
        links: [["EPAL ile standart palet farkı", "/rehber/epal-palet-ile-standart-palet-farki/"], ["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"]],
      },
      {
        h: "Hangi ölçüyü seçmeliyim: 80x120 mi, 100x120 mi?",
        p: [
          "Ürün kolisi 40x30 ya da 60x40 modül ölçüsündeyse 80x120 Euro palet tabanı verimli doldurur. Taban 100x120 gerektiren sanayi ürünlerinde ve bazı kimya ambalajlarında 100x120 paleti daha uygundur; kimya sektöründe ayrıca CP tipleri tanımlıdır.",
          "Konteyner ya da tıra yüklemede ölçü seçimi doğrudan sığma adedini etkiler. Hesabı elle yapmak yerine konteyner ve tır palet hesaplama aracımızı kullanabilirsiniz.",
        ],
        links: [["Konteyner palet hesaplama aracı", "/araclar/konteyner-palet-hesaplama/"], ["100x120 palet", "/urunler/100x120-palet/"], ["Palet seçici", "/araclar/palet-secici/"]],
      },
      {
        h: "Euro palet fiyatını ne belirler?",
        p: [
          "Fiyat; paletin sıfır, ikinci el ya da tamirli olmasına, EPAL damgalı olup olmadığına, ısıl işlem (HT) şartına, adede ve teslim noktasına göre değişir. Güncel rakamlar için Euro palet fiyat tablosuna bakabilir, adet ve teslim adresini belirterek teklif alabilirsiniz. Gebze deposundan Kocaeli ve İstanbul Anadolu yakasına stok ve araç programına göre çoğunlukla ertesi iş günü sevkiyat yapılır; net süre teklifte bildirilir.",
        ],
        links: [["Euro palet fiyatları", "/euro-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Euro palet ölçüsü kaç cm?", a: "80 x 120 cm tabana ve 14,4 cm yüksekliğe sahiptir (1200 x 800 x 144 mm). Resmî adı EPAL 1’dir." },
      { q: "EPAL 1 ile EPAL 3 arasındaki fark nedir?", a: "İkisi de 144 mm yüksekliktedir. EPAL 1 taban 1200 x 800, EPAL 3 ise 1000 x 1200 mm’dir; EPAL 3 daha kare bir tabana sahiptir ve 100x120 sanayi paletine denk gelir." },
      { q: "EPAL 6 nedir, nerede kullanılır?", a: "800 x 600 mm’lik yarım boy paletidir. Perakende ekranlarında, market kampanya paletlerinde ve küçük hacimli ürün sevkiyatında kullanılır." },
      { q: "Euro palet kaç kg yük taşır?", a: "EPAL 1 için güvenli çalışma yükü 1.500 kg’dır. Raf kullanımında kapasite palet durumuna ve raf sistemine bağlı olarak daha düşüktür." },
      { q: "Euro palet ile EPAL palet aynı şey mi?", a: "Ölçü olarak aynıdır; ancak EPAL damgalı palet, EPAL şartnamesine uygun üretilip kontrol edilmiş paleti ifade eder. Damgasız 80x120 palet ölçü olarak Euro palettir ama EPAL değildir." },
    ],
  },
  {
    slug: "konteynere-ve-tira-kac-palet-sigar",
    title: "Konteynere ve Tıra Kaç Palet Sığar? Tablo | MEPAL",
    description: "20 ft, 40 ft, 40 HC konteynere ve 13,6 m tıra kaç Euro ve 100x120 palet sığar? İç ölçü ve sığma tablosu ile hesaplama aracı.",
    h1: "Konteynere ve Tıra Kaç Palet Sığar?",
    answer: "Tek kat yüklemede 20 ft konteynere yaklaşık 11 Euro palet (80x120), 40 ft konteynere 23–24 Euro palet, 13,6 m standart tıra ise 33 Euro palet sığar. 100x120 paletlerde bu rakamlar düşer: 20 ft’te 10, 40 ft’ta 20–21, tırda 26 civarıdır.",
    keyword: "konteynere kaç palet sığar",
    art: "container",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 1,
    related: ["1-tir-kac-palet-alir", "euro-palet-olculeri", "palet-yuksekligi-kac-cm"],
    readMinutes: 5,
    sections: [
      {
        h: "20 ft, 40 ft ve 40 HC konteyner iç ölçüleri",
        p: [
          "Palet planı için dış değil iç ölçü önemlidir. Aşağıdaki değerler standart kuru yük (dry) konteynerler için yaklaşık iç ölçülerdir; üreticiye ve konteyner yaşına göre birkaç santimetre sapabilir. Kapı açıklığı iç genişlik ve yükseklikten biraz daha küçüktür.",
        ],
        table: {
          caption: "Standart konteyner ve tır iç ölçüleri (yaklaşık)",
          head: ["Araç", "İç uzunluk", "İç genişlik", "İç yükseklik"],
          rows: [
            ["20 ft konteyner", "5,90 m", "2,35 m", "2,39 m"],
            ["40 ft konteyner", "12,03 m", "2,35 m", "2,39 m"],
            ["40 ft HC (High Cube)", "12,03 m", "2,35 m", "2,69 m"],
            ["13,6 m standart tır (tenteli)", "13,60 m", "2,45 m", "yaklaşık 2,70 m"],
          ],
        },
      },
      {
        h: "Konteynere ve tıra Euro palet (80x120) sığma tablosu",
        p: [
          "Aşağıdaki adetler tek kat (üst üste istif olmadan) yükleme içindir. Palet yüklü haldeyken yükseklik ve ağırlık sınırı çoğu zaman belirleyici olur; çift katlı istif yalnızca koli hafifse ve paletin üzerindeki toplam yük istif sınırı içindeyse mümkündür.",
        ],
        table: {
          caption: "Tek kat yüklemede yaklaşık palet adedi",
          head: ["Araç", "Euro palet 80x120", "Standart palet 100x120"],
          rows: [
            ["20 ft konteyner", "11", "10"],
            ["40 ft konteyner", "23–24", "20–21"],
            ["40 ft HC konteyner", "23–24", "20–21"],
            ["13,6 m tır", "33", "26"],
          ],
        },
        links: [["80x120 Euro palet", "/urunler/80x120-euro-palet/"], ["100x120 palet", "/urunler/100x120-palet/"]],
      },
      {
        h: "40 HC konteyner neden daha fazla palet almaz?",
        p: [
          "40 HC’nin farkı yüksekliktir; taban alanı 40 ft ile aynıdır. Tek kat yüklemede palet adedi değişmez, ancak daha yüksek yük istifleyebilirsiniz. Hafif ve hacimli ürünlerde (ambalaj, plastik mamul, tekstil) HC avantaj sağlar. Ağır ürünlerde konteyner ağırlık sınırına, hacimli ürünlerde yüksekliğe takılırsınız.",
          "Bazı hatlarda “pallet wide” konteynerler de kullanılır; iç genişlikleri biraz daha fazladır ve Euro palet adedini artırır. Bu tip konteyner için armatörden iç ölçüyü ayrıca teyit edin.",
        ],
      },
      {
        h: "Euro palet, konteynerde neden bazen yan yana dizilmez?",
        p: [
          "20 ft konteynerin iç genişliği 2,35 m’dir. 80x120 paletleri boyuna iki sıra yan yana dizerseniz 2 x 1,2 = 2,40 m ister; bu sığmaz. Bu yüzden paletler karışık (boyuna ve enine) yerleştirilir ya da tek sıra 80 cm kenarı kapıya bakacak şekilde dizilir. Yerleşim planı, kullanılan adedi ve yükün sabitlenmesi gereken boşluğu belirler.",
          "Tırda 2,45 m genişlik üç sıra palet kenarına (3 x 0,8 = 2,40 m) uygundur; bu nedenle tırda Euro palet 33 adede çıkar. 100x120 paletlerde genişlik ve uzunluk kombinasyonu daha az verimli çalıştığı için 26 civarında kalır.",
        ],
      },
      {
        h: "Palet adedini etkileyen faktörler",
        list: [
          "Palet yükü ve yükseklik: Paletin üzerindeki koli yüksekliği araç iç yüksekliğini aşamaz; kapıda ve tavanda toleransa ihtiyaç vardır.",
          "Brüt ağırlık: Konteynerin ve aracın azami yük sınırı. Ağır ürünlerde floor-loading planı yapılır.",
          "Forklift boşluğu: Yüklemede paletler arasında 10–20 cm boşluk bırakmak gerekir.",
          "Palet taşması (overhang): Yük paletten taşıyorsa pratikteki ölçü artar.",
          "İstif: Çift kat istif yalnızca alttaki paletin üstüne gelen yükü kaldırabiliyorsa ve ürün buna izin veriyorsa uygulanır.",
          "Yük sabitleme: Bağlama bandı, hava yastığı ve kayma önleyici malzeme de yer kaplar.",
        ],
      },
      {
        h: "Konteyner ve tır palet hesaplama aracı",
        p: [
          "Kendi koli ve palet ölçünüze göre sığma adedini hesaplamak için konteyner palet hesaplama aracımızı kullanabilirsiniz. Palet ölçüsünü, koli boyunu ve araç tipini girdiğinizde tek kat ve çift kat için tahmini adedi alırsınız. İhracat yükünüz için damgalı ve ısıl işlemli palet gerekiyorsa ihracat paleti sayfamıza bakın.",
        ],
        links: [["Konteyner palet hesaplama", "/araclar/konteyner-palet-hesaplama/"], ["İhracat paleti (ISPM-15, HT)", "/urunler/ihracat-paleti/"], ["Teklif al", "/teklif-al/"]],
      },
      {
        h: "İhracatta palet seçerken dikkat edilecekler",
        p: [
          "Yurt dışına gönderilecek ahşap palet ISPM-15 şartına uymalı, ısıl işlem (HT) damgası taşımalıdır. Damgasız palet gümrükte geri çevrilebilir veya pahalı bir fümigasyon gerektirebilir. Ölçü kararı verirken karşı ülkedeki depo ve rafların hangi palet ölçüsüne göre kurulduğunu da sormak iyi olur. Fiyat için ihracat paleti ve Euro palet fiyat sayfalarındaki güncel tabloya bakın; adet ve teslim noktası için teklif alın.",
        ],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"], ["Euro palet fiyatları", "/euro-palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "20 ft konteynere kaç Euro palet sığar?", a: "Tek kat yüklemede yaklaşık 11 adet. Çift kat istif mümkünse 22’ye çıkabilir ama yük ağırlığı ve yükseklik buna izin vermelidir." },
      { q: "40 ft konteynere kaç palet sığar?", a: "Euro palet (80x120) için yaklaşık 23–24, standart 100x120 palet için yaklaşık 20–21 adet; 40 HC’de taban aynı olduğu için tek kat adet de aynıdır." },
      { q: "Tıra kaç palet yüklenir?", a: "13,6 m standart tırda 33 Euro palet, 26 civarı 100x120 palet tek kat yüklenir. Bu rakamlar tenteli standart tır içindir; frigo ve mega tırda değişebilir." },
      { q: "40 HC konteyner ile 40 ft arasındaki fark nedir?", a: "Taban ölçüsü aynıdır; HC yaklaşık 30 cm daha yüksektir (iç yükseklik 2,69 m’ye karşı 2,39 m). Palet adedini değil, istif yüksekliğini artırır." },
      { q: "Çift kat palet istifi yapılabilir mi?", a: "Ürün yükü hafifse ve alttaki palete binen toplam yük istif sınırı içindeyse yapılabilir. Yüksekliğin araç içinde sığması ve yükün sabitlenebilmesi de gerekir." },
    ],
  },

  // ───────────────────────── HAFTA 2 ─────────────────────────
  {
    slug: "palet-cesitleri-ve-secimi",
    title: "Palet Çeşitleri ve Seçimi: Hangi Palet Hangi İşe? | MEPAL",
    description: "Ahşap, plastik, Euro, 100x120, CP, sıfır ve ikinci el palet çeşitleri. İş türüne göre palet seçimi, ölçü, yük ve maliyet kriterleri.",
    h1: "Palet Çeşitleri ve Doğru Palet Nasıl Seçilir?",
    answer: "Palet seçimi dört soruya iner: ne taşıyacaksınız, ne kadar ağır, nereye gidecek ve palet geri dönecek mi? İç depoda döngü yapan ürünler için ikinci el ya da plastik, ihracat için ISPM-15 damgalı ahşap, hassas ya da kimya yükü için CP ya da plastik palet çoğunlukla doğru tercihtir.",
    keyword: "palet çeşitleri",
    art: "wood",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 2,
    related: ["ahsap-palet-mi-plastik-palet-mi", "epal-palet-ile-standart-palet-farki", "palet-kalite-siniflari"],
    readMinutes: 5,
    sections: [
      {
        h: "Palet çeşitleri nelerdir?",
        p: [
          "Palet; yükü forklift veya transpaletle kaldırılabilir hale getiren taşıyıcı platformdur. Malzemesine göre ahşap, plastik, metal ve kartonlu (presli) palet olarak ayrılır. Türkiye’de iç piyasa ve ihracatta yoğun biçimde ahşap ve plastik kullanılır.",
          "Aynı malzeme grubunda ölçüye, durumuna (sıfır, ikinci el, tamirli) ve damgasına göre fark vardır. Bu yüzden “palet” demek yetmez; ölçü, durum ve damga bilgisiyle sipariş vermek gerekir.",
        ],
        table: {
          caption: "Yaygın palet çeşitleri ve tipik kullanım alanları",
          head: ["Palet", "Ölçü", "Tipik kullanım"],
          rows: [
            ["Euro palet (EPAL ölçülü)", "80x120 cm", "Genel sanayi, gıda, e-ticaret, lojistik"],
            ["Standart sanayi paleti", "100x120 cm", "Ağır sanayi, kimya ambalajı, makine parçaları"],
            ["CP paleti", "CP1–CP9, değişik", "Kimya, boya, ilaç hammaddesi"],
            ["114x114 / CP3", "114x114 cm", "Bidon, IBC, varil"],
            ["145x145 ve özel ölçü", "Proje bazlı", "Büyük makine, beyaz eşya, özel ambalaj"],
            ["Plastik palet", "Çoğunlukla 80x120, 100x120", "Hijyen gerektiren gıda, ilaç, kapalı döngü"],
          ],
        },
        links: [["Euro palet", "/urunler/80x120-euro-palet/"], ["Plastik palet", "/urunler/plastik-palet/"]],
      },
      {
        h: "Sıfır, ikinci el ve tamirli palet: fark ne?",
        p: [
          "Sıfır palet ilk kullanım içindir; ölçüsü, kalınlığı ve ahşap kalitesi istediğiniz gibi belirlenebilir. İkinci el palet daha önce kullanılmış, kontrol edilmiş ve gerekirse sınıflandırılmış paletlerdir; iç kullanımda fiyat avantajı sağlar. Tamirli palet ise kırık tahtası ya da takozu yenilenmiş paletlerdir.",
          "İkinci el ya da tamirli paletin ihracatta kullanılması gerekiyorsa damga durumu önemlidir. Tamir sonrası damganın geçerliliği ve ısıl işlem şartı kontrol edilmelidir; ayrıntılar ISPM-15 rehberimizde anlatılıyor.",
        ],
        links: [["İkinci el palet", "/urunler/ikinci-el-palet/"], ["Sıfır ahşap palet", "/urunler/sifir-ahsap-palet/"], ["Palet tamiri", "/hizmetler/palet-tamiri/"]],
      },
      {
        h: "Hangi sektöre hangi palet?",
        list: [
          "Gıda ve içecek: Temiz, kokusuz, kırıksız ahşap ya da yıkanabilir plastik palet. Hijyen şartı yüksekse plastik tercih edilir.",
          "Otomotiv ve yan sanayi: Ağır parça için 100x120 ya da özel ölçü, güçlendirilmiş palet.",
          "Beyaz eşya: Büyük ürün tabanına göre 100x120, 114x114 veya özel ölçü.",
          "Kimya ve plastik: CP serisi ya da plastik palet; sıvı sızıntısı ve ağır yük düşünülür.",
          "İhracat ve lojistik: ISPM-15 uyumlu, HT damgalı palet; ölçü çoğunlukla 80x120 ya da 100x120.",
          "E-ticaret ve depo: 80x120 Euro palet, standart ölçüde ve kolay dönen palet.",
        ],
        links: [["Gıda ve içecek sektörü", "/sektorler/gida-ve-icecek/"], ["Kimya ve plastik sektörü", "/sektorler/kimya-ve-plastik/"]],
      },
      {
        h: "Palet seçerken 5 kriter",
        steps: [
          "Yük ağırlığı ve dağılımı: Statik (yerde duran), dinamik (taşınırken) ve raf yükünü ayrı düşünün.",
          "Ölçü: Ürün kolisi palet tabanından taşmasın; taşma hasar ve istif sorunu yaratır.",
          "Kullanım döngüsü: Tek yön mü, geri dönüşlü mü? Tek yön ise ucuz ve basit; döngülüyse dayanıklı palet daha ekonomik olur.",
          "Rota ve damga: Yurt dışına gidecekse ISPM-15 damgası zorunlu olabilir.",
          "Depolama: Raf kullanıyorsanız raf üreticisinin palet şartlarını öğrenin.",
        ],
      },
      {
        h: "Palet seçimi nasıl daha ucuza gelir?",
        p: [
          "Düşük maliyet için daima “en ucuz palet” demek yanlıştır; sevkiyat sırasında kırılan, yük düşüren palet pahalıya gelir. Doğru yaklaşım, kullanım amacına uygun kaliteyi almaktır: iç depo döngüsünde A sınıfı ikinci el, hurda yakın C sınıfı tek kullanımlık nakliyede yeterli olabilir. Palet kalite sınıfları ayrı bir rehberde anlatılıyor.",
          "Ayrıca ürünü paletin tabanına tam oturtmak, taşan koliyi azaltmak ve palet ölçüsünü standartlaştırmak toplam palet sayısını ve nakliye maliyetini düşürür. Yardım için palet seçici ve palet danışmanı araçlarımızı kullanabilirsiniz.",
        ],
        links: [["Palet seçici", "/araclar/palet-secici/"], ["Palet danışmanı", "/araclar/palet-danismani/"], ["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"]],
      },
      {
        h: "Fiyat ve teklif",
        p: [
          "Palet fiyatı; çeşit, ölçü, durum, adet, damga şartı ve teslim noktasına göre değişir. Güncel rakamlar için fiyat sayfalarındaki tabloya bakın. Toplu alımda ya da özel ölçüde teklif alın. Gebze deposundan Kocaeli ve İstanbul Anadolu yakasına stok ve araç programına göre çoğunlukla ertesi iş günü teslimat planlanır; net süre teklifte bildirilir.",
        ],
        links: [["Palet fiyatları", "/palet-fiyatlari/"], ["Ahşap palet fiyatları", "/ahsap-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "En çok kullanılan palet hangisi?", a: "80x120 cm Euro palet. Raflar, araçlar ve konteyner planları bu ölçüye göre kurulduğu için en yaygın tiptir." },
      { q: "Ahşap palet mi plastik palet mi almalıyım?", a: "Tek yön ve ihracat işinde ahşap, kapalı döngü ve hijyen şartlı işlerde plastik genelde daha uygundur. Karşılaştırma için ayrı rehberimize bakın." },
      { q: "İkinci el palet güvenli mi?", a: "Sınıflandırılıp kontrol edilmişse iç kullanımda güvenlidir. Kırık, çatlak ve çivisi çıkmış paletleri ayırmak ve yük sınırını bilmek gerekir." },
      { q: "100x120 palet ne işe yarar?", a: "Taban alanı büyük olan sanayi yüklerinde, torba ve bidon sevkiyatında, ağır parçalarda kullanılır." },
      { q: "Özel ölçülü palet üretilir mi?", a: "Evet. Ürününüze uygun ölçüde sıfır palet üretimi yapılabilir; ölçü, yük ve adet bilgisiyle teklif alın." },
    ],
  },
  {
    slug: "epal-palet-ile-standart-palet-farki",
    title: "EPAL Palet ile Standart Palet Farkı: Damga Okuma | MEPAL",
    description: "EPAL palet ile standart (damgasız) 80x120 palet arasındaki fark nedir? EPAL damgası nasıl okunur, sahte ya da uyumsuz palet nasıl anlaşılır?",
    h1: "EPAL Palet ile Standart Palet Farkı ve Damga Okuma",
    answer: "EPAL palet, EPAL şartnamesine göre üretilmiş ve kontrol edilmiş, her iki orta takozunda marka damgası taşıyan paletlerdir. Standart palet ise aynı 80x120 ölçüde olsa da EPAL damgası ve kontrol zımbası taşımayan, şartname dışı paletlerdir. Damga, çivi ve takoz düzeni bakılarak ayırt edilir.",
    keyword: "epal palet ile standart palet farkı",
    art: "euro",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 2,
    related: ["euro-palet-olculeri", "ispm-15-nedir", "palet-kalite-siniflari"],
    readMinutes: 5,
    sections: [
      {
        h: "EPAL palet ile standart palet arasındaki fark",
        p: [
          "Piyasada “Euro palet” adıyla satılan her 80x120 palet EPAL değildir. EPAL, Avrupa Palet Birliği’nin (European Pallet Association) tescilli markasıdır ve damgalı palet; belirli ahşap kalitesi, tahta-takoz-çivi düzeni ve kontrol şartlarına göre üretilmiş ve takip edilmiş paleti ifade eder.",
          "Damgasız 80x120 palet ölçü olarak Euro palete benzer, ancak aynı şartnameye göre üretilmediği ve kontrolden geçmediği için exchange (değişimli) sistemlerde kabul edilmez, yük sigortası ve bazı depolarda sorun çıkarabilir. İç kullanımda ise fiyat avantajı olabilir.",
        ],
        table: {
          caption: "EPAL palet ve standart 80x120 palet karşılaştırması",
          head: ["Özellik", "EPAL palet", "Standart (damgasız) 80x120"],
          rows: [
            ["Marka damgası", "İki orta takozda oval EPAL damgası", "Yok ya da farklı işaret"],
            ["Yapı", "11 tahta, 9 takoz, 78 çivi", "Üreticiye göre değişir"],
            ["Çivi", "EPAL onaylı, test edilmiş", "Belirli bir şart yok"],
            ["Kontrol", "Kontrol zımbası, lisans numarası", "Yok"],
            ["ISPM-15 / HT", "IPPC damgası zorunlu", "Üreticiye bağlı; damga şart"],
            ["Değişim sistemi (exchange)", "Kabul edilir", "Genellikle kabul edilmez"],
          ],
        },
        links: [["80x120 Euro palet", "/urunler/80x120-euro-palet/"], ["EPAL ölçülü palet", "/urunler/epal-palet/"]],
      },
      {
        h: "EPAL damgası nasıl okunur?",
        p: [
          "Orijinal paletin iki orta takozunda, uzun kenarlarda damgalar bulunur. Bir tarafta EPAL oval logosu, diğer tarafta (ya da aynı tarafta) IPPC damgası yer alır. Damgada şunlara bakın:",
        ],
        list: [
          "EPAL oval logosu: Paletin EPAL markalı olduğunu belirtir.",
          "Ülke kodu: İki harfli ISO kodu (Türkiye için TR).",
          "Bitki sağlığı otoritesi kayıt numarası: Tedaviyi yapan firmanın kayıtlı numarası.",
          "HT: Isıl işlem (heat treatment).",
          "Lisans numarası, yıl ve ay: Palet üreticisinin lisansı ve üretim dönemi.",
          "Kontrol zımbası: Bir tahtaya çakılı EPAL kontrol zımbası.",
          "Onarım çivisi: Onarılmış paletlerde bulunur ve paletin tamir edildiğini gösterir.",
        ],
      },
      {
        h: "Sahte veya uyumsuz EPAL palet nasıl anlaşılır?",
        p: [
          "Sahte ya da şartnameye uymayan paletler genellikle şu işaretlerle yakalanır. Bunlardan biri tek başına kesin kanıt olmayabilir; birden fazlası varsa paleti reddetmek gerekir.",
        ],
        list: [
          "Damga bulanık, kaymış, elle boyanmış ya da şablonla basılmış görünüyor.",
          "Damga yalnızca bir takozda var veya yanlış konumda.",
          "Takoz sayısı 9 değil, tahta sayısı 11 değil.",
          "Üst veya alt tahtalar ince, çatlak ya da dalgalı; kenarlar kırık.",
          "Çiviler düzensiz, paslı veya fazla ve eksik sayıda; çivi sırası ölçüye uymuyor.",
          "Boy-en-yükseklik ölçüsü 1200 x 800 x 144 mm’den belirgin farklı.",
          "Kontrol zımbası yok ya da paleti tamir etmiş olmasına rağmen onarım çivisi yok.",
        ],
      },
      {
        h: "EPAL paletlere ihtiyacınız var mı?",
        p: [
          "EPAL palet gerekliliği alıcının şartına bağlıdır. Müşteri sözleşmesinde veya perakende depo şartında “EPAL damgalı palet” isteniyorsa damgasız palet reddedilir. İç depoda döngü yapan veya tek yön nakliyede kullanılan palet için EPAL damgası şart değildir; ölçü ve kalite yeterli olabilir.",
          "Firmamız EPAL lisanslı üretici olduğunu iddia etmez; EPAL ölçülü Euro palet ve ikinci el EPAL palet alım-satımı yapar. EPAL damgası şartı olan işlerde teklif sırasında bu şartı belirtmeniz yeterlidir.",
        ],
        links: [["İkinci el palet", "/urunler/ikinci-el-palet/"], ["Palet alım satım", "/hizmetler/palet-alim-satim/"]],
      },
      {
        h: "Palet alırken kontrol listesi",
        steps: [
          "Ölçüyü metreyle doğrulayın: 1200 x 800 x 144 mm civarı.",
          "Her iki orta takozdaki damgaları okuyun.",
          "Tahta, takoz ve çivi sayısını sayın.",
          "Kırık, çatlak, çivi çıkması veya nem/mantar belirtilerine bakın.",
          "Kontrol zımbası ve onarım çivisini arayın.",
          "Tutarsız bir durum varsa paleti sınıf düşürerek ya da reddederek alın.",
        ],
      },
      {
        h: "Fiyat ve teklif",
        p: [
          "EPAL damgalı ya da ölçülü paletin fiyatı sıfır/ikinci el durumu, sınıfı ve adede göre değişir. Güncel rakamlar için Euro palet fiyat tablosuna bakın, adet ve sınıf belirterek teklif alın. Stok ve araç programına göre çoğunlukla ertesi iş günü teslimat planlanır; net süre teklifte bildirilir.",
        ],
        links: [["Euro palet fiyatları", "/euro-palet-fiyatlari/"], ["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "EPAL palet ile Euro palet aynı mı?", a: "Ölçü aynıdır. EPAL damgalı palet, EPAL şartnamesine göre üretilmiş ve kontrol edilmiş paletlerdir; damgasız 80x120 palet Euro ölçülü olsa da EPAL değildir." },
      { q: "EPAL damgası paletin neresinde bulunur?", a: "Uzun kenarlardaki iki orta takozda marka damgası, bir tahtada kontrol zımbası bulunur." },
      { q: "Damgasız palet ihracatta kullanılır mı?", a: "ISPM-15 ısıl işlem damgası (IPPC) yoksa ahşap palet ihracatta kabul edilmez. EPAL damgası şartı alıcıya göre değişir ama IPPC damgası genelde şarttır." },
      { q: "Tamir edilmiş EPAL palet geçerli mi?", a: "Onarım yetkili yöntemle yapılmış ve onarım çivisi çakılmışsa palet kullanılabilir. Tamirin EPAL şartnamesine uygun olması gerekir." },
      { q: "EPAL palet üretiyor musunuz?", a: "EPAL lisansı iddiamız yok. EPAL ölçülü Euro palet ve ikinci el EPAL palet alım-satımı yapıyoruz." },
    ],
  },

  // ───────────────────────── HAFTA 3 ─────────────────────────
  {
    slug: "ispm-15-nedir",
    title: "ISPM-15 Nedir? Palet Damgası Nasıl Okunur | MEPAL",
    description: "ISPM-15 nedir, kimler için zorunlu? Palet üzerindeki HT, MB, ülke kodu ve üretici kodu damgası nasıl okunur? Isıl işlem şartları.",
    h1: "ISPM-15 Nedir? Palet Damgası (HT, MB, Ülke ve Üretici Kodu) Nasıl Okunur?",
    answer: "ISPM-15, ahşap ambalaj malzemesindeki zararlı böceklerin ülkeler arasında yayılmasını önlemek için BM Gıda ve Tarım Örgütü (FAO) çatısındaki IPPC’nin yayımladığı uluslararası standarttır. Uluslararası sevkiyatta kullanılan ahşap palet ve sandıkta HT (ısıl işlem) gibi bir işlem kodunu da içeren IPPC damgası bulunmalıdır.",
    keyword: "ispm-15 nedir",
    art: "ispm",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 3,
    related: ["ihracatta-palet-ve-ambalaj-kurallari", "epal-palet-ile-standart-palet-farki", "konteynere-ve-tira-kac-palet-sigar"],
    readMinutes: 5,
    sections: [
      {
        h: "ISPM-15 nedir?",
        p: [
          "ISPM-15, uluslararası ticarette kullanılan ahşap ambalaj malzemelerinin işlenmesine dair standart bir fitosanitar (bitki sağlığı) önlemidir. Adı “International Standard for Phytosanitary Measures No. 15”tir. Ham ahşapta bulunabilecek böcek ve zararlıların bir ülkeden diğerine geçmesini engellemek amacıyla çıkarılmıştır.",
          "Standart; palet, sandık, kasa, makara ve takoz gibi ahşap ambalajı kapsar. Kalınlığı 6 mm’den ince olan işlenmiş ahşap (kontrplak, OSB gibi) ve kartonlu palet gibi malzemeler kapsam dışıdır; sert ahşap yongalı veya sıcak preslenmiş malzemeler de çoğu zaman muaftır.",
        ],
      },
      {
        h: "Kim ISPM-15 damgasına ihtiyaç duyar?",
        p: [
          "Ahşap palet veya sandıkla yurt dışına yük gönderen ihracatçılar bu damgayı arar. Alıcı ülkenin gümrüğü damgasız ahşabı kabul etmeyebilir; yük geri çevrilebilir, zararlı varsa imhaya gidebilir ya da pahalı bir ek işleme tabi tutulabilir.",
          "İç piyasada damga şartı yoktur; ancak aynı paleti sonradan ihracatta kullanma ihtimaliniz varsa baştan damgalı palet almak işinizi kolaylaştırır. Gerekirse HT damgalı palet tedarik edebiliriz.",
        ],
        links: [["İhracat paleti (ISPM-15, HT)", "/urunler/ihracat-paleti/"], ["İhracat ve lojistik sektörü", "/sektorler/ihracat-ve-lojistik/"]],
      },
      {
        h: "ISPM-15 damgası nasıl okunur?",
        p: [
          "Damga, IPPC sembolü (buğday başağı biçimli logo) ile birlikte yan yana veya alt alta şu bilgileri içerir:",
        ],
        table: {
          caption: "ISPM-15 damgasındaki alanlar",
          head: ["Alan", "Anlamı", "Örnek"],
          rows: [
            ["IPPC logosu", "Uluslararası Bitki Koruma Sözleşmesi sembolü", "Başak biçimli logo"],
            ["Ülke kodu", "İki harfli ISO ülke kodu", "TR (Türkiye)"],
            ["Üretici / işlemci kodu", "Ahşabı işleyen ya da işlemden sorumlu firmanın ulusal kayıt numarası", "Bitki sağlığı otoritesince verilen numara"],
            ["İşlem kodu", "Uygulanan fitosanitar işlem", "HT (ısıl işlem), MB (metil bromür), DH (dielektrik ısıtma)"],
          ],
        },
      },
      {
        h: "HT, MB ve DB ne demek?",
        list: [
          "HT (Heat Treatment): Isıl işlem. Ahşabın çekirdeği en az 30 dakika boyunca kesintisiz 56 °C’ye ulaşacak şekilde ısıtılır. Bugün ahşap palette en yaygın ve en çok kabul gören yöntemdir.",
          "MB (Methyl Bromide): Metil bromür ile fümigasyon. Çevresel nedenlerle birçok ülkede kullanımı kısıtlıdır; AB’de ve EPAL paletlerde kabul edilmez. MB damgalı palet birçok alıcı ülkede sorun çıkarabilir.",
          "DH (Dielectric Heating): Mikrodalga gibi dielektrik ısıtma ile yapılan işlem; ISPM-15’e sonradan eklenmiştir.",
          "DB (Debarked): Kabuğu soyulmuş ahşabı belirten eski işaret. Kabuk soyma gerekliliği sürmektedir; ancak bu işaret damganın zorunlu parçası olarak kullanılmaz.",
        ],
      },
      {
        h: "Palet damgası nerede olmalı?",
        p: [
          "Damga, ambalajın görünür yerinde, karşılıklı iki yan yüzünde (genelde iki orta takozda) bulunmalıdır. Silinmez ve okunaklı olmalı, el yazısı ya da etiket olmamalıdır. Damga paletin ya da tek bir tahtanın değil, işlem görmüş ahşabın bütününe aittir; yarım tamirlerde kullanılan parçanın da ISPM-15 şartını taşıması gerekir.",
        ],
      },
      {
        h: "ISPM-15 damgalı palet nasıl tedarik edilir?",
        steps: [
          "Hedef ülkeyi, taşıma türünü (konteyner, tır) ve palet ölçüsünü belirleyin.",
          "HT damgalı, okunur damga şartını teklif talebinde yazın.",
          "Tedarik edilen paletlerde damgayı iki yüzde de kontrol edin.",
          "Tamir edilmiş palet kullanıyorsanız tamir parçasının da ISPM-15 uyumlu olduğunu doğrulayın.",
          "İhracat evrakında istenen fitosanitar belgesi varsa gümrük müşaviri ile netleştirin.",
        ],
        p: [
          "MEPAL ihracat için ISPM-15 uyumlu, HT damgalı palet temini yapar; ısıl işlemin kendi fırınlarında yapıldığını iddia etmez. Isıl işlem tedarikçi tarafından gerçekleştirilir ve damga ürün üzerinde görülür.",
        ],
        links: [["İhracatta palet ve ambalaj kuralları", "/rehber/ihracatta-palet-ve-ambalaj-kurallari/"]],
      },
      {
        h: "ISPM-15 uyumlu palet fiyatı",
        p: [
          "ISPM-15 uyumlu palet, aynı ölçüdeki damgasız palete göre ek işlem gerektirdiği için fiyat farkı oluşturabilir. Güncel rakamlar için ahşap ve Euro palet fiyat sayfalarındaki tabloya bakın, ihracat şartınızı ve adedinizi belirterek teklif alın.",
        ],
        links: [["Ahşap palet fiyatları", "/ahsap-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "ISPM-15 nedir?", a: "Ahşap ambalajın zararlı yayılımını önlemek için ısıl işlem gibi işlemleri zorunlu kılan uluslararası bir standarttır; uyumlu ahşap IPPC damgası taşır." },
      { q: "HT damgası ne anlama gelir?", a: "Isıl işlem (heat treatment). Ahşabın çekirdek sıcaklığı en az 30 dakika boyunca 56 °C’ye ulaştırılmıştır." },
      { q: "MB damgalı palet kullanılabilir mi?", a: "Metil bromür artık birçok yerde kısıtlıdır; AB ve EPAL paletlerde kabul edilmez. İhracat için HT damgası tercih edilir." },
      { q: "İç piyasada ISPM-15 damgası şart mı?", a: "Hayır, ancak paleti ihracatta da kullanacaksanız baştan damgalı almak pratik olur." },
      { q: "Plastik palet için ISPM-15 gerekir mi?", a: "Hayır. ISPM-15 yalnızca ahşap ambalaj için geçerlidir; plastik ve metal palet kapsam dışıdır." },
    ],
  },
  {
    slug: "palet-kac-kg-tasir",
    title: "Palet Kaç Kg Taşır? Euro, 100x120 ve Plastik | MEPAL",
    description: "Palet kaç kg taşır? Euro palet, 100x120 ve plastik palet için statik, dinamik ve raf yükü farkı; taşıma kapasitesini etkileyen faktörler.",
    h1: "Palet Kaç Kg Taşır? Statik, Dinamik ve Raf Yükü",
    answer: "EPAL 1 (80x120 Euro palet) için güvenli çalışma yükü 1.500 kg’dır; istiflemede alttaki paletin taşıyabileceği toplam yük 5.500 kg’ı geçmemelidir. Raf yükü paletin durumuna ve raf sistemine göre çok daha düşüktür; diğer ölçü ve malzemelerde taşıma kapasitesi paletin yapısına göre değişir.",
    keyword: "palet kaç kg taşır",
    art: "big",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 3,
    related: ["euro-palet-olculeri", "palet-raf-sistemleri-ve-raf-yuku", "palet-kalite-siniflari"],
    readMinutes: 5,
    sections: [
      {
        h: "Palet taşıma kapasitesi nedir?",
        p: [
          "Palet kapasitesi tek bir sayı değildir; paletin nasıl kullanıldığına göre üç farklı değer vardır. Yanlış değeri baz almak yük düşmesine, palet kırılmasına ve iş kazasına yol açar.",
        ],
        list: [
          "Dinamik yük: Palet forklift veya transpaletle hareket ederken taşıdığı yük.",
          "Statik yük: Palet yerde ve düz zeminde, hareketsiz dururken taşıdığı yük.",
          "Raf yükü: Palet iki kirişin üzerinde boşta durduğunda taşıdığı yük; kirişler arası mesafeye bağlı olarak en düşük kapasite budur.",
        ],
      },
      {
        h: "Euro palet kaç kg taşır?",
        p: [
          "EPAL 1 paleti için üretici belirtimi 1.500 kg güvenli çalışma yükünü verir. İstifte, düz ve sağlam zeminde alttaki dolu paletin üzerindeki toplam yük 5.500 kg’ı aşmamalıdır. Bu sınır, paletin ağır yük altında kalıcı deformasyona girmesini önlemek için konmuştur.",
          "Rakamlar sağlam, onaylı çivilerle yapılmış, kırıksız ve nemi kontrollü paletler için geçerlidir. Çatlak tahta, gevşek çivi, kırık takoz veya nemli ahşap kapasiteyi ciddi biçimde düşürür.",
        ],
      },
      {
        h: "Palet türlerine göre yaklaşık taşıma kapasitesi",
        table: {
          caption: "Palet tipleri ve nominal taşıma kapasitesi",
          head: ["Palet", "Taban", "Nominal taşıma"],
          rows: [
            ["EPAL 1", "1200 x 800 mm", "1.500 kg (güvenli çalışma yükü)"],
            ["EPAL 2", "1200 x 1000 mm", "1.250 kg"],
            ["EPAL 3", "1000 x 1200 mm", "1.500 kg"],
            ["EPAL 6 (yarım)", "800 x 600 mm", "750 kg"],
            ["100x120 sanayi paleti", "1000 x 1200 mm", "Yapıya ve kaliteye göre değişir; üreticiden teyit edin"],
            ["Plastik palet", "Çoğunlukla 800x1200, 1000x1200", "Modele göre değişir; dinamik, statik ve raf yükü etiketten okunur"],
            ["İkinci el / tamirli palet", "Değişir", "Sınıfa göre düşer; A sınıfı yeniye yakın, C sınıfı düşük yükler için"],
          ],
        },
        links: [["Euro palet ölçüleri", "/rehber/euro-palet-olculeri/"], ["Plastik palet", "/urunler/plastik-palet/"]],
      },
      {
        h: "Taşıma kapasitesini hangi faktörler düşürür?",
        list: [
          "Tahta kalınlığı ve çatlaklar: Üst ve alt tahtalardaki çatlaklar yükü doğrudan etkiler.",
          "Takoz durumu: Kırık ya da gevşek takoz eksen dengesini bozar.",
          "Çivi: Paslı, kafası kopmuş veya sayısı eksik çivi paletin çapraz sertliğini azaltır.",
          "Nem: Islanmış ahşap hem ağırlığı artırır hem dayanımı düşürür.",
          "Yük dağılımı: Yük paletin ortasında toplanırsa kapasite, yayılı yükten daha düşüktür.",
          "Uzun süre statik istif: Ahşap zamanla sünme gösterir; uzun süre istifli kalan palet deforme olabilir.",
        ],
      },
      {
        h: "Yük hesabı nasıl yapılır?",
        steps: [
          "Palet üzerine gelecek ürün ağırlığını ve ambalaj ağırlığını toplayın.",
          "Paletin kendi ağırlığını (yaklaşık 25 kg, EPAL 1) ekleyerek toplam hesaplayın.",
          "Yükün palete eşit yayıldığını, taşma yapmadığını doğrulayın.",
          "İstifleyecekseniz üstte kalan toplam yükü hesaplayıp palet limitinin altında kalın.",
          "Raf kullanıyorsanız raf kirişi mesafesini ve raf üreticisinin palet şartlarını kontrol edin.",
        ],
        p: [
          "Sınır değerlere çok yakın çalışmak yerine güvenlik payı bırakın. Ağır yük için 100x120, CP ya da özel ölçülü palet ve güçlendirilmiş yapı tercih edilebilir.",
        ],
        links: [["100x120 palet", "/urunler/100x120-palet/"], ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"], ["Palet raf sistemleri ve raf yükü", "/rehber/palet-raf-sistemleri-ve-raf-yuku/"]],
      },
      {
        h: "Ağır yük için palet teklifi",
        p: [
          "Taşıyacağınız yükün ağırlığını, ürün ölçüsünü ve depolama biçimini (istif, raf) belirterek teklif alın; size uygun sınıf ve ölçüyü önerelim. Güncel fiyatlar için fiyat sayfalarındaki tabloya bakabilirsiniz. Stok ve araç programına göre çoğunlukla ertesi iş günü teslimat planlanır; net süre teklifte bildirilir.",
        ],
        links: [["Palet fiyatları", "/palet-fiyatlari/"], ["Teklif al", "/teklif-al/"], ["Palet seçici", "/araclar/palet-secici/"]],
      },
    ],
    faq: [
      { q: "Palet kaç kg taşır?", a: "EPAL 1 Euro palet için güvenli çalışma yükü 1.500 kg’dır. Diğer palet tiplerinde kapasite yapıya, ölçüye ve kaliteye göre değişir." },
      { q: "Statik yük ile dinamik yük arasındaki fark nedir?", a: "Dinamik yük paletin hareket halindeki, statik yük yerde dururkenki taşıma kapasitesidir. Raf yükü ise iki kirişin üstünde durduğundaki en düşük değerdir." },
      { q: "İkinci el palet aynı yükü taşır mı?", a: "A sınıfı genellikle yeniye yakındır; B ve C sınıflarında kapasite düşer. Kırık veya çatlak palette yük sınırı güvenilir olmaz." },
      { q: "Plastik palet kaç kg taşır?", a: "Modele bağlıdır; dinamik, statik ve raf yükü değerleri üretici etiketinde yazar. Aynı ölçüdeki iki plastik palet çok farklı kapasiteye sahip olabilir." },
      { q: "Paletleri üst üste kaç kat istiflemeliyim?", a: "Alttaki paletin üzerindeki toplam yük limit içinde olmalı; EPAL 1 için bu limit 5.500 kg’dır. Yükseklik, zemin ve yük sabitleme de dikkate alınmalıdır." },
    ],
  },

  // ───────────────────────── HAFTA 4 ─────────────────────────
  {
    slug: "palet-yuksekligi-kac-cm",
    title: "Palet Yüksekliği Kaç cm? Palet ve Yük Yüksekliği | MEPAL",
    description: "Palet yüksekliği kaç cm? Euro palet 14,4 cm, EPAL 2 16,2 cm. Yüklü palet yüksekliği, araç ve raf sınırları, istif yüksekliği için pratik rehber.",
    h1: "Palet Yüksekliği Kaç cm? Boş Palet ve Yüklü Palet Yüksekliği",
    answer: "Boş EPAL 1 Euro palet 144 mm (14,4 cm) yüksekliğindedir; EPAL 2 ise 162 mm’dir. Yüklü palet yüksekliği paletin 14,4 cm’si ile ürün yüksekliğinin toplamıdır ve genelde araç, raf ve konteyner iç yüksekliğine göre planlanır.",
    keyword: "palet yüksekliği kaç cm",
    art: "euro",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 4,
    related: ["euro-palet-olculeri", "konteynere-ve-tira-kac-palet-sigar", "palet-raf-sistemleri-ve-raf-yuku"],
    readMinutes: 5,
    sections: [
      {
        h: "Boş palet yüksekliği kaç cm?",
        p: [
          "Palet yüksekliği paletin zeminle üst yüzey arasındaki toplam ölçüsüdür. EPAL tipleri arasında en yaygını olan EPAL 1’in yüksekliği 144 mm’dir. Bu ölçü, alt tahta, takoz ve üst tahta kalınlıklarının toplamıdır ve forklift çatalının girebileceği boşluğu da belirler.",
        ],
        table: {
          caption: "Palet tiplerine göre boş palet yüksekliği",
          head: ["Palet", "Taban (mm)", "Boş palet yüksekliği"],
          rows: [
            ["EPAL 1", "1200 x 800", "144 mm (14,4 cm)"],
            ["EPAL 2", "1200 x 1000", "162 mm (16,2 cm)"],
            ["EPAL 3", "1000 x 1200", "144 mm (14,4 cm)"],
            ["EPAL 6 (yarım)", "800 x 600", "144 mm (14,4 cm)"],
            ["CP paletleri", "CP1–CP9", "Tipe göre değişir; çoğunlukla 12–16 cm bandında"],
            ["Plastik palet", "Modele göre", "Genellikle 12–16 cm; modele göre değişir"],
          ],
        },
        links: [["Euro palet ölçüleri", "/rehber/euro-palet-olculeri/"], ["CP paletleri ölçü tablosu", "/rehber/cp-paletleri-olcu-tablosu/"]],
      },
      {
        h: "Yüklü palet yüksekliği nasıl hesaplanır?",
        p: [
          "Yüklü palet yüksekliği, palet yüksekliği ile üzerindeki ürün yüksekliğinin toplamıdır. Üzerine gerginlik filmi ya da kapak koyuyorsanız onu da ekleyin. Örneğin 14,4 cm’lik palete 120 cm’lik yük koyduğunuzda toplam yükseklik 134,4 cm olur.",
          "Planlama yaparken birkaç santimetrelik toleransı mutlaka hesaba katın. Araç kapısında, raf kirişinde ve çatı yapısında bu pay yoksa yükleme sırasında palet takılır ya da ürün hasar görür.",
        ],
      },
      {
        h: "Araçlara ve raflara göre yük yüksekliği sınırları",
        p: [
          "Her kullanım alanında farklı bir yükseklik sınırı vardır. Aşağıdaki değerler tipik aralıklardır; kendi aracınızın, rafınızın veya hattınızın iç ölçüsünü ayrıca doğrulayın.",
        ],
        list: [
          "20 ft ve 40 ft standart konteyner: iç yükseklik yaklaşık 2,39 m; kapıda biraz daha az. Yükseklik üst limiti kapı açıklığına göre belirlenir.",
          "40 ft HC konteyner: iç yükseklik yaklaşık 2,69 m.",
          "13,6 m tenteli tır: iç yükseklik çoğu zaman yaklaşık 2,70 m civarındadır.",
          "Raf sistemi: Kiriş seviyeleri arasındaki net yükseklik ve palet yüksekliği birlikte hesaplanır; forklift çatalının girmesi için üstte boşluk gerekir.",
          "Hava kargo: Havayolunun kurallarına göre çok daha düşük yükseklik sınırları vardır; taşıyıcıdan ayrıca öğrenin.",
        ],
        links: [["Konteynere ve tıra kaç palet sığar?", "/rehber/konteynere-ve-tira-kac-palet-sigar/"]],
      },
      {
        h: "Palet yüksekliği neden önemli?",
        list: [
          "Forklift ve transpalet erişimi: Çatalın girişi için tahtalar arası açıklık gerekir.",
          "Raf sistemi uyumu: Raf kat yüksekliği ve palet yüksekliği toplamı, kirişle ürün arasında yeterli boşluk bırakmalıdır.",
          "Araç kapasitesi: Düşük palet, aynı araçta daha fazla ürün yüksekliği demektir.",
          "İstif kararlılığı: Yük yüksekliği arttıkça devrilme riski artar; istifte yükseklik/taban oranına dikkat edilir.",
          "Gümrük ve taşıma limitleri: Bazı hatlarda yük yüksekliği için üst sınır vardır.",
        ],
      },
      {
        h: "Palet yüksekliğini seçerken pratik öneriler",
        steps: [
          "Kullanacağınız araç ve rafın iç yüksekliğini ölçün.",
          "Palet yüksekliğini ve ürün yüksekliğini toplayın, toleransı ekleyin.",
          "Alçak profilli palet gerekiyorsa plastik ya da özel ölçülü palet seçeneğini sorun.",
          "Yüksek istif yapacaksanız alt paletin yük sınırını kontrol edin.",
          "Ürün paletten taşıyorsa taşan kısmı ve koruma ihtiyacını hesaba katın.",
        ],
        links: [["Özel ölçü palet", "/urunler/ozel-olcu-palet/"], ["Plastik palet", "/urunler/plastik-palet/"]],
      },
      {
        h: "Palet fiyatları ve özel ölçü teklifi",
        p: [
          "Özel yükseklikte ya da ölçüde palet gerekiyorsa ölçü, yük ve adet bilgisiyle teklif alın. Standart paletlerin güncel fiyatlarını ilgili fiyat sayfasındaki tablodan görebilirsiniz. Stok ve araç programına göre çoğunlukla ertesi iş günü sevkiyat planlanır; net süre teklifte bildirilir.",
        ],
        links: [["Palet fiyatları", "/palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Euro palet yüksekliği kaç cm?", a: "EPAL 1 Euro palet 14,4 cm (144 mm) yüksekliğindedir." },
      { q: "EPAL 2 palet kaç cm yüksekliğinde?", a: "EPAL 2’nin yüksekliği 162 mm’dir; yani 16,2 cm." },
      { q: "Yüklü palet en fazla kaç cm olmalı?", a: "Tek bir limit yoktur; araç, raf ve ihracat hattına göre belirlenir. Standart konteynerde iç yükseklik yaklaşık 2,39 m, tırda genellikle 2,70 m civarındadır." },
      { q: "Palet yüksekliği forklift için neden önemli?", a: "Çatalın girmesi için tahtalar arasında yeterli açıklık gerekir. Yükseklik düşük olursa çatal giremez veya palet hasar görür." },
      { q: "Daha alçak profilli palet bulunur mu?", a: "Bazı plastik palet modelleri ve özel ölçülü ahşap paletler daha düşük profille üretilebilir. İhtiyacınızı belirterek teklif alın." },
    ],
  },
  {
    slug: "1-tir-kac-palet-alir",
    title: "1 Tır Kaç Palet Alır? Euro ve 100x120 Palet Sayısı | MEPAL",
    description: "13,6 m standart tıra 33 Euro palet, 26 civarı 100x120 palet yüklenir. Kamyon ve tır tiplerine göre palet adedi, yük sınırı ve yerleşim planı.",
    h1: "1 Tır Kaç Palet Alır? Tır ve Kamyon Palet Kapasitesi",
    answer: "13,6 m uzunluğundaki standart tenteli tır tek kat yüklemede 33 adet Euro palet (80x120) veya yaklaşık 26 adet 100x120 palet alır. Kamyon ve kamyonetlerde adet kasa ölçüsüne bağlıdır; sınırı çoğu zaman palet sayısı değil, aracın azami yük kapasitesi belirler.",
    keyword: "1 tır kaç palet alır",
    art: "truck",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 4,
    related: ["konteynere-ve-tira-kac-palet-sigar", "euro-palet-olculeri", "palet-yuksekligi-kac-cm"],
    readMinutes: 5,
    sections: [
      {
        h: "1 tıra kaç palet sığar?",
        p: [
          "Karayolu taşımacılığında “tır” denince çoğu zaman 13,6 m uzunluğunda, 2,45 m genişliğinde standart tenteli yarı römork akla gelir. Bu römorkun yük alanı yaklaşık 13,6 x 2,45 m’dir ve iç yükseklik çoğunlukla 2,70 m civarındadır.",
          "Bu alana 80x120 paletler uzun kenarı aracın yanına dönük, üç sıra halinde (3 x 0,8 = 2,40 m) dizildiğinde 11 sıra x 3 = 33 palet yerleşir. 100x120 paletlerde ise genişlik (2,45 m) iki sıra yan yana 2,4 m’yi geçmeden kullanılamaz; karışık dizilimle 26 palet civarına ulaşılır.",
        ],
        table: {
          caption: "Tek kat yüklemede yaklaşık palet adedi (13,6 m tenteli tır)",
          head: ["Palet", "Taban", "Palet adedi"],
          rows: [
            ["Euro palet", "80x120 cm", "33"],
            ["Standart sanayi paleti", "100x120 cm", "26"],
            ["Yarım Euro palet (EPAL 6)", "60x80 cm", "Çoğunlukla 60’ın üzerinde; yerleşime göre değişir"],
          ],
        },
        links: [["80x120 Euro palet", "/urunler/80x120-euro-palet/"], ["100x120 palet", "/urunler/100x120-palet/"]],
      },
      {
        h: "Kamyon ve diğer araç tiplerinde palet sayısı",
        p: [
          "Kamyon, kamyonet ve çekicili araçlarda kasa uzunluğu ve genişliği farklıdır. Aşağıdaki sayılar yalnızca fikir vermek içindir; kasa iç ölçüsünü her zaman metre ile doğrulayın.",
        ],
        list: [
          "Kamyonet (panelvan / küçük kasa): Çoğunlukla 2–4 Euro palet.",
          "10 teker kamyon: Kasa uzunluğuna göre yaklaşık 14–18 Euro palet bandı.",
          "Kırkayak / uzun kasalı kamyon: Kasa 8–9 m civarında ise yaklaşık 20–24 Euro palet.",
          "Standart tır (13,6 m): 33 Euro palet.",
          "Mega ve jumbo tır: Yükseklik daha fazladır; taban alanı benzer, ama hacimli ürünlerde avantaj sağlar.",
        ],
      },
      {
        h: "Palet sayısı mı, ağırlık mı belirleyici?",
        p: [
          "Tırın yük kapasitesi yaklaşık 24–26 ton bandındadır (araç ve mevzuata göre değişir). 33 palet için palet başına en fazla yaklaşık 700–800 kg düşer. Ürününüz bundan ağırsa palet sayısı azalır, yani sınırı ağırlık belirler.",
          "Hafif ve hacimli ürünlerde (ambalaj, plastik mamul, koli) sınır genelde yüksekliktir; palet sayısı değil, çift kat istif ve kasa hacmi önem kazanır. Çift kat istif için alttaki paletin taşıma limitini ve üstteki yükün ağırlığını kontrol edin.",
        ],
        links: [["Palet kaç kg taşır?", "/rehber/palet-kac-kg-tasir/"]],
      },
      {
        h: "Yükleme planı nasıl yapılır?",
        steps: [
          "Kullanılacak aracın iç ölçüsünü (uzunluk, genişlik, yükseklik) alın.",
          "Palet ölçüsünü ve yüklü palet yüksekliğini belirleyin.",
          "Yerleşim planını çizin: Euro paletler için 3 sıra, 100x120 için karışık dizilim.",
          "Toplam ağırlığı hesaplayıp aracın azami yük sınırı ile karşılaştırın.",
          "Paletleri düzgün hizalayın, yük sabitleme bandı ile bağlayın; boşluk kalıyorsa dolgu kullanın.",
        ],
        p: [
          "Elle hesap yerine konteyner ve tır palet hesaplama aracımızı kullanarak ürün ve palet ölçünüze göre yerleşim adedini hızla görebilirsiniz.",
        ],
        links: [["Konteyner ve tır palet hesaplama", "/araclar/konteyner-palet-hesaplama/"]],
      },
      {
        h: "Tıra palet yüklerken sık yapılan hatalar",
        list: [
          "Palet ölçüsünü yanlış baz almak: 100x120 palet sayısı Euro paletle aynı sanılır.",
          "Yükseklik payı bırakmamak: Tente ve kapıda sıkışma yaşanır.",
          "Ağırlığı dağıtmamak: Ağır paletler öne yığılırsa aks yükü bozulur.",
          "Damgasız palet kullanmak: İhracat şartlı sevkiyatta ISPM-15 damgası aranır.",
          "Paletleri taşırarak yüklemek: Taşan yük hasar ve sigorta sorunu yaratır.",
        ],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"]],
      },
      {
        h: "Toplu palet tedariki ve teklif",
        p: [
          "Tır dolusu palet alıyorsanız, adet ve ölçü bilgisiyle teklif isteyin. Gebze deposundan Kocaeli ve İstanbul Anadolu yakasındaki fabrikalara toplu palet tedariki yapıyoruz. Güncel fiyatlar için fiyat tablosuna bakın; stok ve araç programına göre çoğunlukla ertesi iş günü sevkiyat planlanır, net süre teklifte bildirilir.",
        ],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"], ["Palet fiyatları", "/palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "1 tıra kaç Euro palet sığar?", a: "13,6 m standart tenteli tıra tek kat 33 adet Euro palet (80x120) yüklenir." },
      { q: "1 tıra kaç tane 100x120 palet sığar?", a: "Yaklaşık 26 adet. Yerleşim planına ve araç iç ölçüsüne göre 24–26 arasında değişebilir." },
      { q: "Tırda iki kat palet yüklenebilir mi?", a: "Yük hafifse ve alttaki paletin taşıma limiti uygunsa yüklenebilir. İç yükseklik ve yük sabitleme de elverişli olmalıdır." },
      { q: "Tırın taşıyabileceği azami ağırlık nedir?", a: "Yaklaşık 24–26 ton bandında; araç tipine ve mevzuata göre değişir. Aracın ruhsatındaki değere bakmak gerekir." },
      { q: "Kamyona kaç palet yüklenir?", a: "Kasa uzunluğuna bağlıdır; 10 teker kamyonda genelde 14–18 Euro palet civarıdır. Kasa iç ölçüsünü metreyle doğrulayın." },
    ],
  },

  // ───────────────────────── HAFTA 5 ─────────────────────────
  {
    slug: "ahsap-palet-mi-plastik-palet-mi",
    title: "Ahşap Palet mi Plastik Palet mi? Karşılaştırma | MEPAL",
    description: "Ahşap palet mi plastik palet mi? Döngü sayısı, ömür boyu maliyet mantığı, hijyen, ihracat ve ağırlık açısından karşılaştırma ve seçim rehberi.",
    h1: "Ahşap Palet mi Plastik Palet mi? Hangisi Daha Ekonomik?",
    answer: "Tek yönlü sevkiyat, ihracat ve düşük başlangıç maliyeti için ahşap palet; geri dönüşlü kapalı döngü, hijyen ve otomasyon için plastik palet çoğunlukla daha uygundur. Karar, palet başına fiyattan çok kullanım başına maliyetle verilir: kaç sefer dönecek, kaybolma riski ne, hasarda ne kadar tamir edilebilir.",
    keyword: "ahşap palet mi plastik palet mi",
    art: "plastic",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 5,
    related: ["palet-cesitleri-ve-secimi", "ispm-15-nedir", "palet-kalite-siniflari"],
    readMinutes: 6,
    sections: [
      {
        h: "Ahşap palet ile plastik palet arasındaki temel farklar",
        p: [
          "İki malzeme farklı şartlar için tasarlanmıştır. Ahşap palet tamir edilebilir, başlangıç maliyeti düşüktür ve her ölçüde üretilebilir. Plastik palet tek parça kalıpla üretilir, ölçüsü sabittir, nem emmez ve yıkanabilir; başlangıç yatırımı ise ahşaba göre yüksektir.",
        ],
        table: {
          caption: "Ahşap ve plastik palet karşılaştırması",
          head: ["Kriter", "Ahşap palet", "Plastik palet"],
          rows: [
            ["Başlangıç maliyeti", "Düşük", "Yüksek"],
            ["Kullanım ömrü", "Orta; kalite ve bakıma bağlı", "Uzun; çok sayıda döngü"],
            ["Tamir", "Tahta/takoz değiştirilebilir", "Genellikle tamir edilemez, sadece geri dönüşüm"],
            ["Hijyen", "Nem ve mantara açık", "Yıkanabilir, gözeneksiz"],
            ["Ağırlık", "Nem ve türe göre değişken", "Sabit ve çoğunlukla daha hafif"],
            ["İhracat şartı", "ISPM-15 damgası gerekir", "ISPM-15 gerekmez"],
            ["Ölçü esnekliği", "Her ölçüde üretilebilir", "Standart kalıp ölçüleri"],
            ["Yangın ve kayma", "Ahşap yanıcı; kayma düşük", "Plastik daha kaygan olabilir"],
          ],
        },
        links: [["Sıfır ahşap palet", "/urunler/sifir-ahsap-palet/"], ["Plastik palet", "/urunler/plastik-palet/"]],
      },
      {
        h: "Palet maliyeti nasıl karşılaştırılır?",
        p: [
          "Satın alma fiyatına bakarak karar vermek yanıltıcıdır. Doğru ölçü, ömür boyu maliyet yani palet başına tek kullanım maliyetidir. Basit mantık şöyledir: Paletin toplam maliyeti (alış, tamir, kayıp) toplam tamamlayacağı sefer sayısına bölünür.",
        ],
        list: [
          "Tek yönlü sevkiyatta palet geri gelmiyorsa, kayıp riski yüksek olduğu için düşük maliyetli ahşap palet çoğu zaman daha ekonomiktir.",
          "Kapalı döngüde palet fabrika-depo-müşteri arasında düzenli geri dönüyorsa, çok sayıda sefer yapabilen plastik palet tek sefer maliyetini düşürebilir.",
          "Ahşap palet tamir edilerek ömrü uzatılabilir; tamir maliyeti palet fiyatına eklenir.",
          "Plastik palet kırılırsa genellikle tamir değil, malzeme geri dönüşümü söz konusudur.",
          "Kaybolan palet maliyeti: Takip yoksa ya da palet müşteri tarafında kalıyorsa kayıp maliyeti hesaba katılmalıdır.",
          "Ağırlık ve nakliye: Palet ağırlığı nakliye maliyetinde küçük ama toplu sevkiyatta fark yaratan bir kalemdir.",
          "Net rakamlar firmanın döngü sayısına, kayıp oranına ve ürün tipine göre değiştiği için bu rehberde sabit rakam vermiyoruz. Güncel fiyatlar için fiyat tablosuna bakıp kendi döngü sayınızla hesap yapabilirsiniz.",
        ],
        links: [["Plastik palet fiyatları", "/plastik-palet-fiyatlari/"], ["Ahşap palet fiyatları", "/ahsap-palet-fiyatlari/"]],
      },
      {
        h: "Hangi durumda ahşap palet tercih edilir?",
        list: [
          "Tek yönlü nakliye veya ihracat (ISPM-15 damgalı palet).",
          "Palet geri dönüşü beklenmiyorsa.",
          "Özel ölçü veya ağır yük için palet gerekiyorsa.",
          "Başlangıç bütçesi sınırlıysa ve tamir ile ömür uzatılabiliyorsa.",
          "Ürün paletin kayganlığını istemiyorsa; ahşap yüzeyde sürtünme daha yüksektir.",
        ],
      },
      {
        h: "Hangi durumda plastik palet tercih edilir?",
        list: [
          "Gıda, ilaç ve kimya gibi hijyen ya da temizlik şartı yüksek sektörler.",
          "Geri dönüşlü, kapalı döngü lojistik (tedarikçi–fabrika–depo arası).",
          "Otomatik depo ve konveyör sistemleri; ölçü hassasiyeti yüksek.",
          "Nemli, soğuk oda ve yıkama gerektiren ortamlar.",
          "Ahşap kırıntısı, çivi ve kıymık riskinin istenmediği üretim hatları.",
        ],
        links: [["Plastik palet çeşitleri", "/rehber/plastik-palet-cesitleri/"], ["Gıda ve içecek sektörü", "/sektorler/gida-ve-icecek/"]],
      },
      {
        h: "İhracatta ahşap mı plastik mi?",
        p: [
          "Ahşap palet ihracatta ISPM-15 damgası ister; damgasız palet gümrükte sorun çıkarabilir. Plastik palet bu kuralın dışındadır, bu da bazı hatlarda avantaj yaratır. Ancak alıcı ülkenin palet değişim sistemi ahşap EPAL paleti şart koşuyorsa plastik kabul edilmeyebilir. Alıcı ile palet şartını önceden netleştirmek en güvenli yoldur.",
        ],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"], ["İhracat paleti", "/urunler/ihracat-paleti/"]],
      },
      {
        h: "Karar vermek için 4 soru",
        steps: [
          "Palet geri dönecek mi, yoksa tek yönlü mü gidecek?",
          "Ortam hijyen veya yıkama şartı koşuyor mu?",
          "Rota yurt dışı mı; alıcı palet cinsini şart koşuyor mu?",
          "Ürün ağırlığı ve depolama şekli (raf, istif) palet seçimini nasıl etkiliyor?",
        ],
        p: [
          "Cevaplara göre palet danışmanımız ya da ekibimiz size uygun seçeneği önerir. Fiyat için ilgili fiyat sayfasına bakın ve adet belirterek teklif alın.",
        ],
        links: [["Palet danışmanı", "/araclar/palet-danismani/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Plastik palet ahşaptan daha mı dayanıklı?", a: "Kapalı döngüde çok sayıda sefer yapabilir, nem ve çürümeden etkilenmez. Ancak ağır darbede kırılabilir ve çoğunlukla tamir edilemez; ahşap ise tamirle ömrü uzatılabilir." },
      { q: "Hangisi daha ekonomik?", a: "Tek yönlü sevkiyatta ahşap, geri dönüşlü kapalı döngüde plastik çoğunlukla daha ekonomiktir. Karar palet başına değil sefer başına maliyetle verilmelidir." },
      { q: "İhracatta plastik palet kullanabilir miyim?", a: "Evet, ISPM-15 şartı plastikte yoktur. Alıcının palet değişim şartını önceden sorun." },
      { q: "Gıda için hangi palet daha uygun?", a: "Hijyen şartı yüksekse yıkanabilir plastik palet tercih edilir. Temiz, kokusuz ve kırıksız ahşap palet de belirli gıda işlerinde kullanılır." },
      { q: "Plastik palet de ikinci el alınabilir mi?", a: "Evet, ancak çatlak ve deformasyon kontrolü gerekir. Taşıma kapasitesi etiketi okunabilir olmalıdır." },
    ],
  },
  {
    slug: "ikinci-el-palet-alirken-dikkat-edilecekler",
    title: "İkinci El Palet Alırken Dikkat Edilecek 7 Şey | MEPAL",
    description: "İkinci el palet alırken dikkat edilecek 7 nokta: sınıf, kırık ve çatlak, çivi, nem-mantar, ölçü, damga ve koku. Kontrol listesi ve satın alma önerileri.",
    h1: "İkinci El Palet Alırken Dikkat Edilecek 7 Şey",
    answer: "İkinci el palet alırken şu yedi şeye bakın: sınıf, tahta ve takoz sağlamlığı, çivi durumu, nem ve mantar, ölçü ve çarpıklık, damga ve koku. Bu kontrol, hurda palete para vermenizi ve yük düşmesi riskini azaltır.",
    keyword: "ikinci el palet alırken dikkat edilecekler",
    art: "used",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 5,
    related: ["palet-kalite-siniflari", "epal-palet-ile-standart-palet-farki", "palet-cesitleri-ve-secimi"],
    readMinutes: 5,
    sections: [
      {
        h: "İkinci el palet alırken nelere bakılır?",
        p: [
          "İkinci el palet, doğru seçildiğinde sıfır palete göre ciddi tasarruf sağlar. Yanlış seçildiğinde ise kırık tahta, çıkmış çivi ve düşen yük yüzünden daha pahalıya gelir. Aşağıdaki yedi madde, yerinde ya da fotoğraf üzerinden yapacağınız temel kontrol listesidir.",
        ],
        steps: [
          "Sınıfı sorun ve yazılı isteyin (A, B, C).",
          "Tahta ve takozları kontrol edin.",
          "Çivi durumuna bakın.",
          "Nem, küf ve mantar var mı bakın.",
          "Ölçüyü ve paletin düzgünlüğünü kontrol edin.",
          "Damgayı okuyun.",
          "Koku ve kimyasal bulaşı kontrol edin.",
        ],
      },
      {
        h: "1. Sınıf: A, B, C ne demek?",
        p: [
          "Palet kalite sınıfı, paletin görünüş ve dayanıklılık düzeyini anlatır. Standart bir kural olmadığı için satıcıdan sınıfın ne anlama geldiğini yazılı alın. Genel mantık: A sınıfı yeniye yakın, birkaç hafif iz taşıyan paletlerdir; B sınıfı küçük hasarlı ama kullanılabilir; C sınıfı daha çok hasarlı, düşük yük ve tek kullanımlık nakliye için uygundur.",
        ],
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"]],
      },
      {
        h: "2. Tahta ve takoz sağlamlığı",
        p: [
          "Üst ve alt tahtalarda uzunlamasına çatlak, kırık uç ve ezik olup olmadığına bakın. Takozlarda kırık, yarık ya da gevşeme varsa palet yük altında dengesizleşir. Tek bir kırık tahta tamir edilebilir; ama aynı palette birden fazla hasar varsa fiyat avantajı kalmaz.",
        ],
      },
      {
        h: "3. Çivi durumu",
        p: [
          "Çıkmış, eğilmiş ya da paslanmış çivi hem yaralanmaya hem de ürüne zarar vermeye yol açar. Çivi kafasının tahtaya gömülü olup olmadığına, çivi sayısının eksik olmadığına bakın. Çivi çıkmış palet tamir edilmeden kullanılmamalıdır.",
        ],
      },
      {
        h: "4. Nem, küf ve mantar",
        p: [
          "Koyu lekeler, tozlu beyaz küf ya da yumuşamış ahşap nemli ve çürümeye başlamış paleti işaret eder. Bu palet gıda, ilaç ve temiz ürün için uygun değildir; ağırlığı da fazla gelir. Kuru ve temiz depolanmış palet tercih edin.",
        ],
      },
      {
        h: "5. Ölçü ve düzgünlük",
        p: [
          "Ölçüyü metreyle doğrulayın; 80x120 olarak satılan paletin 1200 x 800 mm civarında olması gerekir. Paletin yamuk olup olmadığını düz zeminde sallanma ile test edin. Eğik ya da bükülmüş palet, istif ve raf kullanımında sorun yaratır.",
        ],
        links: [["Euro palet ölçüleri", "/rehber/euro-palet-olculeri/"]],
      },
      {
        h: "6. Damga ve 7. Koku",
        list: [
          "Damga: İhracat ya da EPAL şartı varsa damgayı iki orta takozda okuyun. Silinmiş damga, ISPM-15 geçerliliğini şüpheli kılar.",
          "Tamir izi: Onarım çivisi ve tamirli tahta varsa tamirin tarzını sorun.",
          "Koku: Kimyasal, yağ ya da gıda kokusu taşıyan palet ürününüze koku geçirir.",
          "Önceki kullanım: Kimyasal döküntü, boya ya da yağ lekesi olan palet temiz ürün için uygun değildir.",
        ],
        links: [["EPAL ile standart palet farkı", "/rehber/epal-palet-ile-standart-palet-farki/"], ["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"]],
      },
      {
        h: "İkinci el palet nereden alınmalı?",
        p: [
          "Tedarikçinin palet sınıflandırması yaptığı, toplu alımda numune gösterdiği ve fatura kesebildiği bir firmayı tercih edin. Elinizde adet, ölçü ve sınıf yazılı teklif olmalıdır. MEPAL; ikinci el palet alım-satımı, palet tamiri ve hurda palet değerlendirmesi hizmeti verir. Güncel fiyatlar için ikinci el palet fiyat tablosuna bakın, adet ve sınıf belirtip teklif alın.",
        ],
        links: [["İkinci el palet", "/urunler/ikinci-el-palet/"], ["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"], ["Palet alım satım", "/hizmetler/palet-alim-satim/"]],
      },
    ],
    faq: [
      { q: "İkinci el palet kaç kg taşır?", a: "Sınıfa ve kondisyona bağlıdır. A sınıfı yeniye yakın taşır; B ve C sınıfında kapasite düşer, kırıklı palet yük sınırı için güvenilmez." },
      { q: "İkinci el palet gıdada kullanılır mı?", a: "Yalnızca temiz, kokusuz, nemsiz ve kimyasal bulaşısız ise. Hijyen şartı yüksekse yeni ya da plastik palet tercih edin." },
      { q: "İkinci el palet ihracatta kullanılır mı?", a: "ISPM-15 damgası okunuyor ve geçerliyse kullanılabilir. Silinmiş damgalı palet sorun yaratır." },
      { q: "Tamirli palet ile ikinci el palet aynı mı?", a: "Hayır. Tamirli palet kırık parçaları değiştirilmiş palettir; ikinci el palet ise tamir edilmeden de kullanılmış olabilir." },
      { q: "Toplu alımda numune istenebilir mi?", a: "Evet. Büyük partilerde önceden numune görmek ve sınıfı yazılı teyit etmek doğru yöntemdir." },
    ],
  },

  // ───────────────────────── HAFTA 6 ─────────────────────────
  {
    slug: "palet-kalite-siniflari",
    title: "Palet Kalite Sınıfları: A, B, C ve Hurda Palet | MEPAL",
    description: "Palet kalite sınıfları A, B, C ve hurda ne demek? Her sınıfın özellikleri, hangi iş için uygun olduğu ve sınıflandırma kriterleri.",
    h1: "Palet Kalite Sınıfları: A, B, C ve Hurda",
    answer: "Palet sınıfları genelde A (yeniye yakın), B (kullanılabilir, küçük hasarlı), C (düşük yük ve tek kullanım) ve hurda (onarılamaz) olarak ayrılır. Sınıflar sektörde ortak standart olmadığı için satıcıdan kriterleri yazılı almak gerekir.",
    keyword: "palet kalite sınıfları",
    art: "used",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 6,
    related: ["ikinci-el-palet-alirken-dikkat-edilecekler", "epal-palet-ile-standart-palet-farki", "hurda-paletinizi-nasil-degerlendirirsiniz"],
    readMinutes: 5,
    sections: [
      {
        h: "Palet kalite sınıfları nelerdir?",
        p: [
          "Piyasada ikinci el palet A, B, C sınıflarına ve hurda kategorisine ayrılarak satılır. Bu sınıflandırma EPAL gibi resmî bir standartla belirlenmemiştir; firmadan firmaya küçük farklar olabilir. EPAL şartnamesi yalnızca EPAL paletin onarım ve kabul kriterlerini tanımlar. Yani A, B, C etiketi sizin ve tedarikçinizin ortak anladığı şeydir.",
        ],
        table: {
          caption: "Palet kalite sınıfları ve tipik özellikleri",
          head: ["Sınıf", "Durum", "Tipik kullanım"],
          rows: [
            ["A", "Yeniye yakın; kırık yok, hafif aşınma ve ufak izler", "İhracat, raf, gıda dışı hassas ürün, ağır yük"],
            ["B", "Küçük çatlak ya da onarım izi var; yapısı sağlam", "İç depo, genel sevkiyat, orta yük"],
            ["C", "Belirgin hasar, kırık parçalar onarılmış ya da uyumsuz tahtalar", "Tek kullanımlık nakliye, hafif yük"],
            ["Hurda", "Onarılamaz; takoz ya da gövde kırık", "Parçalama, geri dönüşüm, yakacak"],
          ],
        },
        links: [["İkinci el palet", "/urunler/ikinci-el-palet/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"]],
      },
      {
        h: "A sınıfı palet nedir?",
        p: [
          "A sınıfı palet genellikle birkaç kez kullanılmış, kırık ya da büyük onarım gerektirmeyen, ölçüleri düzgün ve temiz paletlerdir. Üst yüzey tahtaları tamdır, takozlar sağlam ve çiviler yerindedir. Raf kullanımı ve ağır yük için ilk tercih edilen sınıftır.",
        ],
      },
      {
        h: "B ve C sınıfı palet nedir?",
        p: [
          "B sınıfı palet kullanılabilir; ancak yüzeyinde küçük çatlaklar, kenar kırılmaları veya onarım izleri vardır. İç depo, orta yük ve hızlı sevkiyat için uygundur. C sınıfı palette ise belirgin hasar bulunur: tamir edilmiş tahtalar, farklı kalınlıkta parçalar, eğilmiş yapı. Hafif yük, kısa mesafe ve tek yönlü sevkiyatta kullanılması mantıklıdır.",
          "Ağır yük, raf ve hassas ürün için C sınıfı önerilmez. Fiyat farkı küçük görünse de yük düşmesi maliyeti büyük olur.",
        ],
      },
      {
        h: "Sınıflandırmada hangi kriterlere bakılır?",
        list: [
          "Tahta ve takoz bütünlüğü: Kırık, yarık ya da eksik parça var mı?",
          "Çivi durumu: Çıkmış, paslı ya da eksik çivi sayısı.",
          "Ölçü ve düzgünlük: Eğrilik, bükülme, ölçü sapması.",
          "Nem ve küf: Nemli, çürümüş ya da küflü ahşap sınıf düşürür.",
          "Temizlik ve bulaşı: Kimyasal, yağ ya da boya lekesi.",
          "Tamir izi: Onarım çivisi, farklı yaşta tahtalar.",
          "Damga durumu: İhracat için damga okunaklı olmalı.",
        ],
      },
      {
        h: "Hurda palet nedir, nasıl değerlendirilir?",
        p: [
          "Hurda palet; tamiri maliyetli ya da mümkün olmayan, takozu veya gövdesi parçalanmış paletlerdir. Bu paletler çöpe gitmek zorunda değildir. Ahşap parçalar ayrıştırılarak tamirde kullanılır, kalan kısım geri dönüşüme verilir ya da yakacak olarak değerlendirilir. Elinizdeki hurda paletlere teklif almak için hurda palet alım hizmetimizi kullanabilirsiniz.",
        ],
        links: [["Hurda paletinizi nasıl değerlendirirsiniz?", "/rehber/hurda-paletinizi-nasil-degerlendirirsiniz/"], ["Palet tamiri", "/hizmetler/palet-tamiri/"]],
      },
      {
        h: "Hangi iş için hangi sınıf?",
        steps: [
          "Ağır yük, raf, ihracat: A sınıfı veya sıfır palet.",
          "İç depo ve genel sevkiyat: B sınıfı.",
          "Hafif, tek yönlü, kısa mesafe nakliye: C sınıfı.",
          "Hiç kullanılamayan palet: Hurda olarak değerlendirin ya da parça için tamire verin.",
        ],
        p: [
          "Sınıf seçimi fiyatı doğrudan etkiler. Güncel rakamlar için ikinci el palet fiyat tablosuna bakın; sınıf, adet ve teslim noktası belirterek teklif alın. Stok ve araç programına göre çoğunlukla ertesi iş günü sevkiyat planlanır; net süre teklifte bildirilir.",
        ],
        links: [["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "A, B, C sınıfı palet standart bir sınıflandırma mı?", a: "Hayır, sektörde ortak bir resmî standart yok. Sınıf kriterlerini tedarikçiden yazılı almak gerekir." },
      { q: "A sınıfı palet sıfır palet demek midir?", a: "Hayır. A sınıfı ikinci el, yeniye yakın paletlerdir; sıfır palet hiç kullanılmamış paletlerdir." },
      { q: "C sınıfı palet raf için kullanılabilir mi?", a: "Önerilmez. Raf kullanımında palet durumu çok önemlidir; A sınıfı veya sıfır palet tercih edilmelidir." },
      { q: "Hurda palet satılabilir mi?", a: "Evet. Hurda palet geri dönüşüm ve parça amaçlı alınır. Alım için adet ve konum bilgisiyle teklif isteyebilirsiniz." },
      { q: "Sınıfı kim belirler?", a: "Satıcı sınıflandırmayı yapar. Büyük alımlarda numune görmek ve kriterleri yazılı almak gerekir." },
    ],
  },
  {
    slug: "cp-paletleri-olcu-tablosu",
    title: "CP Paletleri Ölçü Tablosu: CP1–CP9 | MEPAL",
    description: "CP paletleri nedir? CP1–CP9 ölçüleri tablo halinde: CP1 1000x1200, CP2 800x1200, CP3 1140x1140. Kimya sektörü paletlerinin kullanım alanları.",
    h1: "CP Paletleri Ölçü Tablosu: CP1’den CP9’a",
    answer: "CP paletleri, Avrupa kimya sanayisinin ambalaj ve paletleme için belirlediği CP1’den CP9’a kadar numaralanmış palet tipleridir. En yaygın olanlar CP1 (1000 x 1200 mm), CP2 (800 x 1200 mm) ve CP3 (1140 x 1140 mm) paletleridir.",
    keyword: "cp paletleri ölçü tablosu",
    art: "cp",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 6,
    related: ["palet-cesitleri-ve-secimi", "euro-palet-olculeri", "palet-kac-kg-tasir"],
    readMinutes: 5,
    sections: [
      {
        h: "CP paleti nedir?",
        p: [
          "CP, İngilizce “chemical pallet” (kimya paleti) kısaltmasıdır. Kimya sanayisi; torba, bidon, IBC ve karton ambalajlar gibi çok farklı yükleri paletlediği için dokuz farklı palet tipini tanımlamıştır. Her tipin ölçüsü ve kullanım alanı ayrıdır. Tanım Avrupa kimya sektörü kuruluşları tarafından geliştirilmiştir ve ahşap palet üretiminde referans alınır.",
          "Türkiye’de CP1 ve CP3 en sık karşılaşılan tiplerdir. 114x114 palet olarak bilinen ölçü, CP3’e denk gelir.",
        ],
      },
      {
        h: "CP1–CP9 ölçü tablosu",
        p: [
          "Aşağıdaki ölçüler nominal değerlerdir. Kaynaklar arasında CP4–CP7 için küçük farklar bulunabildiği için, özellikle bu tipleri sipariş etmeden önce ölçüyü ve çizimi netleştirin. Ölçüler mm cinsindendir.",
        ],
        table: {
          caption: "CP palet tipleri: nominal taban ölçüsü ve tipik kullanım",
          head: ["Tip", "Taban (mm)", "Tipik kullanım"],
          rows: [
            ["CP1", "1000 x 1200", "Torba ve koli, genel kimya ambalajı"],
            ["CP2", "800 x 1200", "Koli, bidon ve küçük ambalaj"],
            ["CP3", "1140 x 1140", "Varil, bidon, IBC ve dökme kap"],
            ["CP4", "1100 x 1300", "Torba ve koli"],
            ["CP5", "760 x 1140", "Konteyner, koli ve kutu"],
            ["CP6", "1000 x 1200", "Torba ve dökme mal"],
            ["CP7", "1100 x 1300", "Büyük kap ve IBC"],
            ["CP8", "1140 x 1140", "Alt çıkışlı büyük konteynerler"],
            ["CP9", "1140 x 1140", "Çift katlı yapı, IBC ve ağır kap"],
          ],
        },
        links: [["CP palet ürün sayfası", "/urunler/cp-palet/"], ["114x114 (CP) palet", "/urunler/cp-palet/"]],
      },
      {
        h: "CP1 ile 100x120 palet aynı mı?",
        p: [
          "CP1’in taban ölçüsü 1000 x 1200 mm’dir; yani piyasada 100x120 olarak anılan sanayi paletine ölçü olarak denk gelir. Fark, CP paletlerin kimya sektörünün belirlediği tahta dizilimi, takoz düzeni ve kalite şartlarına göre üretilmesidir. Yani her 100x120 palet CP1 değildir.",
          "CP2 ise 800 x 1200 mm olduğundan Euro paletin tabanıyla örtüşür; ancak yapısal kriterleri farklı olabilir.",
        ],
        links: [["100x120 palet", "/urunler/100x120-palet/"], ["Euro palet ölçüleri", "/rehber/euro-palet-olculeri/"]],
      },
      {
        h: "Hangi CP palet hangi iş için?",
        list: [
          "CP1 ve CP2: Torba, koli ve karton ambalaj. En yaygın CP tipleri.",
          "CP3: Varil, bidon ve IBC taşımada; kare taban istikrar sağlar.",
          "CP4 ve CP7: 1100 x 1300 mm taban; büyük ambalajlar için.",
          "CP5: Küçük kap ve koliler için dar taban.",
          "CP8 ve CP9: Alt çıkışlı konteynerler ve ağır IBC’ler; daha güçlü yapı.",
        ],
      },
      {
        h: "CP palet yük ve ISPM-15",
        p: [
          "CP paletlerde taşıma kapasitesi tipe, tahta kalınlığına ve yapıya göre değişir. Kimya yükleri çoğunlukla ağır olduğu için siparişte ağırlık bilgisi verilmelidir. İhracatta kullanılacak CP palet ahşap ise ISPM-15 uyumlu, HT damgalı olmalıdır.",
        ],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"], ["Palet kaç kg taşır?", "/rehber/palet-kac-kg-tasir/"], ["Kimya ve plastik sektörü", "/sektorler/kimya-ve-plastik/"]],
      },
      {
        h: "CP palet nasıl sipariş edilir?",
        steps: [
          "CP tipini veya ölçüyü (örneğin 1140 x 1140) belirtin.",
          "Yükün cinsini ve ağırlığını bildirin.",
          "Sıfır veya ikinci el, ihracat damgası gerekli mi belirtin.",
          "Adet ve teslim adresini yazın.",
          "Teklif alın; güncel fiyat için fiyat sayfasındaki tabloya bakın.",
        ],
        p: [
          "Gebze deposundan Kocaeli ve İstanbul Anadolu yakasına stok ve araç programına göre çoğunlukla ertesi iş günü teslimat planlanır; net süre teklifte bildirilir.",
        ],
        links: [["Palet fiyatları", "/palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "CP palet ne demek?", a: "Chemical pallet, yani kimya paleti. Kimya sanayisi için tanımlanmış CP1’den CP9’a kadar palet tipleridir." },
      { q: "CP1 paletin ölçüsü nedir?", a: "1000 x 1200 mm. 100x120 sanayi paletiyle taban ölçüsü aynıdır." },
      { q: "114x114 palet hangi CP tipidir?", a: "CP3 (1140 x 1140 mm) 114x114 olarak bilinir; varil, bidon ve IBC için kullanılır." },
      { q: "CP paletler EPAL midir?", a: "Hayır. CP kimya sektörünün palet tipleridir; EPAL ise Euro palet ve diğer EPAL tiplerini kapsayan ayrı bir markadır." },
      { q: "CP4–CP7 ölçüleri neden farklı kaynaklarda değişiyor?", a: "Bu tiplerde yayınlarda küçük farklar görülebilir. Sipariş öncesi çizim ve ölçüyü netleştirmek gerekir." },
    ],
  },
];
