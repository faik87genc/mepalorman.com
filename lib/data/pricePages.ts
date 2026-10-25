import type { PricePage } from "./prices";
import type { Section } from "@/lib/types";

// Fiyat sayfaları: /palet-fiyatlari/, /ahsap-palet-fiyatlari/, /ikinci-el-palet-fiyatlari/,
// /euro-palet-fiyatlari/, /plastik-palet-fiyatlari/
// Metinlerde TL rakamı yazılmaz; rakamlar yalnızca prices.ts tablosundan gelir.

const tierSection = (extra: string): Section => ({
  h: "Toptan alım kademeleri",
  p: [
    "Fiyat tablosu üç adet kademesi üzerinden okunur: 1–50, 51–200 ve 201 adet üzeri. Adet arttıkça birim fiyat düşer. " + extra,
  ],
  table: {
    head: ["Kademe", "Tipik kullanım", "Not"],
    rows: [
      ["1–50 adet", "Küçük sipariş, numune, acil ihtiyaç", "Stoktan hızlı çıkış"],
      ["51–200 adet", "Aylık düzenli kullanım", "Birim fiyat belirgin düşer"],
      ["201+ adet", "Büyük hacim, düzenli tedarik", "Sevkiyat planı ve teklif ile"],
    ],
  },
  links: [["Toptan palet hizmeti", "/hizmetler/toptan-palet/"]],
});

const quoteSection = (what: string): Section => ({
  h: "Nasıl teklif alınır?",
  steps: [
    `${what} için tip, ölçü ve yaklaşık adedi WhatsApp'tan (0536 866 83 07) veya teklif formundan iletin.`,
    "Stok durumuna göre net birim fiyat, toplam tutar ve teslim planı bildirilir.",
    "Onaydan sonra paletler hazırlanır; Gebze deposundan teslim alabilir veya Türkiye genelinde araçla sevk isteyebilirsiniz.",
  ],
  p: ["Teslimat stok ve araç programına göre çoğunlukla ertesi iş günü yapılır; net süre teklifte bildirilir."],
  links: [["Teklif al", "/teklif-al/"], ["Palet seçici", "/araclar/palet-secici/"]],
});

export const pricePages: PricePage[] = [
  {
    slug: "palet-fiyatlari",
    title: "Palet Fiyatları | Güncel Liste | MEPAL Gebze",
    description: "Güncel palet fiyatları: Euro, 100x120, CP, ISPM-15 ihracat ve plastik palet. Adet kademeli liste, Gebze depodan teslim. Teklif için WhatsApp.",
    h1: "Palet Fiyatları — Güncel Liste",
    answer:
      "Aşağıdaki tabloda sıfır ve ikinci el ahşap palet ile plastik palet fiyatları adet kademesine göre listelenir. Fiyatlar KDV hariç ve adet başınadır; büyük adetler ve özel ölçüler için teklif alın.",
    keyword: "palet fiyatları",
    art: "big",
    rowKeys: [
      "euro-ikinci-el-1", "euro-ikinci-el-2", "euro-sifir", "ahsap-sifir-standart", "ahsap-sifir-100x120",
      "ahsap-ikinci-el-100x120", "cp-114x114", "ihracat-ispm15", "plastik-hafif", "plastik-agir",
      "plastik-100x120", "ozel-olcu", "145x145",
    ],
    sections: [
      {
        h: "Palet fiyatını etkileyen faktörler",
        list: [
          "Malzeme: ahşap mı plastik mi; plastikte hafif mi ağır hizmet mi",
          "Durum: sıfır mı, ikinci el mi; ikinci elde 1. veya 2. sınıf",
          "Ölçü: 80x120 en yaygın ölçüdür; 100x120, 114x114 ve özel ölçüler farklı fiyatlanır",
          "Taşıma kapasitesi: ayak sayısı, tahta kalınlığı ve takviye",
          "İhracat uyumu: ISPM-15 uyumlu, HT damgalı palet standart palete göre farklı fiyatlanır",
          "Sipariş adedi: kademe arttıkça birim fiyat düşer",
          "Ham madde (kereste) piyasası ve mevsim: ahşap fiyatı zaman içinde değişebilir",
          "Teslimat: depodan teslim mi, adrese sevkiyat mı",
        ],
      },
      tierSection("Tablodaki her satır için üç kademenin fiyatı yan yana verilir."),
      {
        h: "Sıfır ve ikinci el palet karşılaştırması",
        table: {
          head: ["Ölçüt", "Sıfır palet", "İkinci el palet"],
          rows: [
            ["Birim maliyet", "Daha yüksek", "Belirgin biçimde daha düşük"],
            ["Standartlık", "Aynı ölçü ve yapı, tutarlı görünüm", "Sınıfa göre değişen durum"],
            ["Kullanım ömrü", "Tam ömür", "Sınıfa ve onarıma bağlı"],
            ["Uygun alan", "Gıda, ihracat, otomatik hat", "Yurt içi sevkiyat, depolama"],
            ["Plastik karşılaştırma", "Ahşaptan yüksek ilk maliyet, uzun ömür", "Plastik genelde sıfır satılır"],
          ],
        },
        links: [["Ahşap palet mi plastik mi?", "/rehber/ahsap-palet-mi-plastik-palet-mi/"]],
      },
      quoteSection("Palet fiyat teklifi"),
    ],
    faq: [
      { q: "Palet fiyatları ne sıklıkla güncelleniyor?", a: "Tablodaki fiyatlar tarih ile birlikte yayımlanır. Kereste ve ham madde piyasasına göre değişebildiği için büyük siparişlerde güncel teklif alınması gerekir." },
      { q: "Fiyatlara KDV dahil mi?", a: "Hayır. Tablodaki fiyatlar KDV hariç, TL cinsinden ve adet başınadır." },
      { q: "En ucuz palet hangisi?", a: "Genel olarak ikinci el ahşap palet en düşük maliyetli seçenektir. Ancak gıda, ihracat veya otomatik hat gibi hassas kullanımlarda sıfır veya uygun palet gerekir; sadece fiyata bakmak yanıltabilir." },
      { q: "Fiyatı tabloda olmayan palet için teklif alabilir miyim?", a: "Evet. Özel ölçülü paletler ve 145x145 gibi ölçüler tabloda “teklif alın” olarak yer alır, ölçü ve yüke göre hesaplanır." },
      { q: "Toplu alımda indirim var mı?", a: "Evet. Fiyat adet kademesine göre düşer; çok büyük veya düzenli alımlarda ayrıca teklif hazırlanır." },
      { q: "Nakliye fiyata dahil mi?", a: "Tablo palet fiyatını gösterir. Nakliye adrese, adede ve araç planına göre teklifte ayrıca bildirilir." },
    ],
    related: ["ahsap-palet-fiyatlari", "ikinci-el-palet-fiyatlari", "euro-palet-fiyatlari", "plastik-palet-fiyatlari", "80x120-euro-palet", "ikinci-el-palet", "plastik-palet", "ihracat-paleti"],
    guides: ["palet-maliyetini-dusurmenin-yollari", "ahsap-palet-mi-plastik-palet-mi", "palet-kalite-siniflari", "palet-cesitleri-ve-secimi"],
  },
  {
    slug: "ahsap-palet-fiyatlari",
    title: "Ahşap Palet Fiyatları | Sıfır ve İkinci El | MEPAL",
    description: "Ahşap palet fiyatları: sıfır Euro, 100x120, CP, ISPM-15 ihracat ve özel ölçü. Adet kademeli güncel liste, Gebze depodan hızlı teslim.",
    h1: "Ahşap Palet Fiyatları — Sıfır ve İkinci El",
    answer:
      "Ahşap palet fiyatı ölçüye, sınıfa ve adede göre değişir. Tabloda sıfır ve ikinci el ahşap paletler üç adet kademesiyle listelenir; fiyatlar KDV hariç, adet başınadır. Özel ölçüler için teklif alın.",
    keyword: "ahşap palet fiyatları",
    art: "wood",
    rowKeys: [
      "euro-sifir", "ahsap-sifir-standart", "ahsap-sifir-100x120", "ahsap-ikinci-el-100x120",
      "euro-ikinci-el-1", "euro-ikinci-el-2", "cp-114x114", "ihracat-ispm15", "ozel-olcu", "145x145",
    ],
    sections: [
      {
        h: "Ahşap palet fiyatını etkileyen faktörler",
        list: [
          "Ölçü: 80x120, 100x120, 114x114 (CP) ve 145x145 farklı kereste miktarı gerektirir",
          "Yapı: 9 ayaklı Euro yapı, hafif hizmet standart palet ve yüksek yük için güçlendirilmiş palet",
          "Kereste kalitesi, kuruluk ve tahta kalınlığı",
          "Isıl işlem: ISPM-15 uyumlu, HT damgalı palet standart paletten daha yüksek fiyatlanır",
          "Sıfır veya ikinci el olması, ikinci elde sınıfı",
          "Sipariş adedi ve sevkiyat noktası",
          "Kereste piyasasındaki dalgalanmalar",
        ],
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"]],
      },
      tierSection("Ahşap palette 51 adet ve üzeri alımlarda fark özellikle hissedilir."),
      {
        h: "Sıfır ahşap ile ikinci el ahşap karşılaştırması",
        table: {
          head: ["Ölçüt", "Sıfır ahşap", "İkinci el ahşap"],
          rows: [
            ["Maliyet", "Yüksek", "Daha düşük"],
            ["Temizlik ve görünüm", "Temiz, kokusuz", "Kullanım izi olabilir"],
            ["Gıda ve hassas ürün", "Uygun", "Genellikle önerilmez"],
            ["İhracat", "ISPM-15 uyumlu HT damgalı seçenek var", "Damga ve durum kontrol edilmeli"],
            ["Yurt içi sevkiyat", "Uygun", "Çoğu durumda yeterli"],
          ],
        },
        links: [["Sıfır ahşap palet", "/urunler/sifir-ahsap-palet/"], ["100x120 palet", "/urunler/100x120-palet/"]],
      },
      quoteSection("Ahşap palet teklifi"),
    ],
    faq: [
      { q: "Ahşap palet fiyatı neden değişiyor?", a: "Başlıca neden kereste maliyetidir. Ölçü, kalite, ısıl işlem ve sipariş adedi de birim fiyatı doğrudan etkiler." },
      { q: "Ahşap palet fiyatlarına KDV dahil mi?", a: "Hayır. Tablo KDV hariç, adet başı TL fiyatını gösterir." },
      { q: "ISPM-15 damgalı palet neden daha pahalı?", a: "HT damgalı palet, ısıl işlem uygulanmış ve uluslararası kurala uygun işaretlenmiş ahşaptan yapılır. Bu ek süreç maliyete yansır. Biz ISPM-15 uyumlu, HT damgalı ihracat paleti temin ediyoruz." },
      { q: "Özel ölçülü ahşap palet fiyatı nasıl belirlenir?", a: "Ölçü, taşıyacağı yük ve adet bilindiğinde kereste ihtiyacı hesaplanıp teklif verilir. Bu nedenle tabloda “teklif alın” görünür." },
      { q: "100x120 ahşap palet fiyatı Euro paletten farklı mı?", a: "Evet. Daha büyük taban daha fazla kereste kullanır ve farklı bir fiyat grubunda yer alır. Güncel farkı tabloda görebilirsiniz." },
    ],
    related: ["palet-fiyatlari", "ikinci-el-palet-fiyatlari", "euro-palet-fiyatlari", "plastik-palet-fiyatlari", "sifir-ahsap-palet", "100x120-palet", "cp-palet", "ozel-olcu-palet"],
    guides: ["palet-cesitleri-ve-secimi", "palet-kalite-siniflari", "100x120-ile-80x120-palet-farki", "cp-paletleri-olcu-tablosu"],
  },
  {
    slug: "ikinci-el-palet-fiyatlari",
    title: "İkinci El Palet Fiyatları | 1. ve 2. Sınıf | MEPAL",
    description: "İkinci el palet fiyatları: Euro ölçülü 1. ve 2. sınıf, 100x120 ikinci el. Adet kademeli güncel liste, Gebze depodan teslim, WhatsApp'tan teklif.",
    h1: "İkinci El Palet Fiyatları — 1. ve 2. Sınıf",
    answer:
      "İkinci el palet fiyatı, paletin sınıfına ve adedine göre belirlenir. Tabloda Euro ölçülü 1. ve 2. sınıf ile 100x120 ikinci el paletler adet kademesiyle listelenir; sıfır palet karşılaştırma için eklenmiştir.",
    keyword: "ikinci el palet fiyatları",
    art: "used",
    rowKeys: ["euro-ikinci-el-1", "euro-ikinci-el-2", "ahsap-ikinci-el-100x120", "euro-sifir"],
    sections: [
      {
        h: "İkinci el palet fiyatını etkileyen faktörler",
        list: [
          "Sınıf: 1. sınıf paletler sağlam ve onarılmıştır, 2. sınıf yerli kullanımdan çıkan paletlerdir",
          "Ölçü ve tip: Euro ölçülü ya da 100x120",
          "Tahta ve ayakların durumu; kırık, çatlak ve eksik parça sayısı",
          "Temizlik, kuruluk ve kokunun olmaması",
          "Sipariş adedi: büyük partilerde birim fiyat düşer",
          "Stok durumu ve sevkiyat noktası",
        ],
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"], ["İkinci el palet alırken dikkat", "/rehber/ikinci-el-palet-alirken-dikkat-edilecekler/"]],
      },
      tierSection("İkinci el palette parti büyüklüğü fiyatı sınıf kadar etkiler."),
      {
        h: "Sıfır ve ikinci el karşılaştırması",
        table: {
          head: ["Ölçüt", "İkinci el 1. sınıf", "İkinci el 2. sınıf", "Sıfır"],
          rows: [
            ["Durum", "Sağlam, onarılmış", "Kullanım izli, yerli kullanım", "Yeni, tutarlı"],
            ["Maliyet", "Orta", "En düşük", "En yüksek"],
            ["Uygun kullanım", "Yurt içi sevkiyat, depo", "Hafif iç depolama, kısa kullanım", "Gıda, ihracat, hassas ürün"],
            ["Ömür", "İyi", "Sınırlı", "Tam ömür"],
          ],
        },
        links: [["İkinci el palet", "/urunler/ikinci-el-palet/"], ["İkinci el EPAL palet", "/urunler/epal-palet/"]],
      },
      quoteSection("İkinci el palet teklifi"),
      {
        h: "Paletlerinizi satmak isterseniz",
        p: ["Fazla ikinci el paletlerinizi de değerlendiriyoruz. Adedi ve durumu bildirdiğinizde alım teklifi verilir."],
        links: [["Palet alım satım", "/hizmetler/palet-alim-satim/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"]],
      },
    ],
    faq: [
      { q: "İkinci el palet 1. sınıf ile 2. sınıf arasındaki fark nedir?", a: "1. sınıf paletler sağlam ve onarılmış, daha tutarlı görünümlüdür. 2. sınıf paletler yerli kullanımdan gelir ve daha çok hafif iç kullanıma uygundur." },
      { q: "İkinci el palet gıda sevkiyatında kullanılır mı?", a: "Genellikle önerilmez. Temiz, kokusuz ve standart yapı gerektiğinde sıfır palet daha güvenlidir." },
      { q: "İkinci el EPAL palet var mı?", a: "İkinci el EPAL palet alım-satımı yapıyoruz. Stok durumu ve sınıf için teklif isteyin." },
      { q: "İkinci el palet ihracatta kullanılabilir mi?", a: "İhracatta ISPM-15 uyumlu, HT damgalı palet gerekir. İkinci el palette damganın varlığı ve durumu kontrol edilmelidir; güvenli çözüm yeni HT damgalı paletdir." },
      { q: "Fiyatlara KDV dahil mi?", a: "Hayır. Tablodaki fiyatlar KDV hariç, adet başınadır." },
      { q: "Sipariş ettiğim sınıfın aynısı gelecek mi?", a: "Teklifte sınıf ve adet netleştirilir. Büyük partilerde örnek fotoğraf veya yerinde inceleme talep edebilirsiniz." },
    ],
    related: ["palet-fiyatlari", "ahsap-palet-fiyatlari", "euro-palet-fiyatlari", "plastik-palet-fiyatlari", "ikinci-el-palet", "epal-palet", "80x120-euro-palet", "100x120-palet"],
    guides: ["ikinci-el-palet-alirken-dikkat-edilecekler", "palet-kalite-siniflari", "palet-omru-nasil-uzatilir", "hurda-paletinizi-nasil-degerlendirirsiniz"],
  },
  {
    slug: "euro-palet-fiyatlari",
    title: "Euro Palet Fiyatları | 80x120 Güncel Liste | MEPAL",
    description: "Euro palet (80x120) fiyatları: sıfır, ikinci el 1. ve 2. sınıf ve ISPM-15 ihracat paleti. Adet kademeli güncel liste, Gebze depodan teslim.",
    h1: "Euro Palet Fiyatları — 80x120",
    answer:
      "Euro palet (80x120) fiyatı; sıfır mı ikinci el mi olduğuna, sınıfa ve ısıl işleme göre değişir. Tabloda sıfır, ikinci el 1. ve 2. sınıf ve ISPM-15 uyumlu ihracat paleti adet kademesiyle verilir. Fiyatlar KDV hariç, adet başınadır.",
    keyword: "euro palet fiyatları",
    art: "euro",
    rowKeys: ["euro-sifir", "euro-ikinci-el-1", "euro-ikinci-el-2", "ihracat-ispm15"],
    sections: [
      {
        h: "Euro palet fiyatını etkileyen faktörler",
        list: [
          "Sıfır veya ikinci el olması; ikinci elde 1. veya 2. sınıf",
          "800 × 1200 mm ölçüsünün 9 ayaklı yapıya uyması ve tahta kalitesi",
          "Isıl işlem: ISPM-15 uyumlu, HT damgalı ihracat paleti",
          "Sipariş adedi ve düzenli tedarik",
          "Kereste piyasası",
          "Teslimat noktası",
        ],
        p: ["EPAL tescilli bir markadır. Biz EPAL ölçülerinde Euro palet (80x120) tedarik ediyoruz ve ikinci el EPAL palet alım-satımı yapıyoruz."],
        links: [["EPAL ile standart palet farkı", "/rehber/epal-palet-ile-standart-palet-farki/"]],
      },
      tierSection("Euro palet en çok talep gören tip olduğundan hazır stoktan hızlı çıkış mümkündür."),
      {
        h: "Sıfır ve ikinci el Euro palet karşılaştırması",
        table: {
          head: ["Ölçüt", "Sıfır Euro palet", "İkinci el 1. sınıf", "İkinci el 2. sınıf"],
          rows: [
            ["Durum", "Yeni, temiz", "Sağlam, onarılmış", "Yerli kullanım"],
            ["Maliyet", "En yüksek", "Orta", "En düşük"],
            ["Gıda, ihracat", "Uygun", "Sınırlı", "Önerilmez"],
            ["Raf ve otomasyon", "Uygun", "Duruma bağlı", "Önerilmez"],
          ],
        },
        links: [["80x120 Euro palet", "/urunler/80x120-euro-palet/"], ["İhracat paleti", "/urunler/ihracat-paleti/"]],
      },
      quoteSection("Euro palet teklifi"),
    ],
    faq: [
      { q: "Euro palet ölçüsü nedir?", a: "800 × 1200 mm'dir. Yaklaşık 144 mm yüksekliğinde, 9 ayaklı ve dört yönden çatallanabilen standart palettir." },
      { q: "Euro palet fiyatı hangi tip için geçerli?", a: "Tablo sıfır, ikinci el 1. sınıf, ikinci el 2. sınıf ve ISPM-15 uyumlu ihracat paleti satırlarını ayrı ayrı gösterir." },
      { q: "EPAL palet satıyor musunuz?", a: "EPAL tescilli bir markadır; biz EPAL ölçülerinde Euro palet temin ediyoruz ve ikinci el EPAL palet alım-satımı yapıyoruz." },
      { q: "İhracat için hangi Euro palet?", a: "ISPM-15 uyumlu, HT damgalı Euro ölçülü palet gerekir. Tablonun ihracat satırı bu pakete aittir." },
      { q: "Toplu alımda fiyat düşer mi?", a: "Evet. 51 adet ve 201 adet üzeri kademelerde birim fiyat düşer." },
    ],
    related: ["palet-fiyatlari", "ahsap-palet-fiyatlari", "ikinci-el-palet-fiyatlari", "plastik-palet-fiyatlari", "80x120-euro-palet", "epal-palet", "ihracat-paleti", "ikinci-el-palet"],
    guides: ["euro-palet-olculeri", "epal-palet-ile-standart-palet-farki", "palet-kac-kg-tasir", "ispm-15-nedir"],
  },
  {
    slug: "plastik-palet-fiyatlari",
    title: "Plastik Palet Fiyatları | Hafif ve Ağır | MEPAL",
    description: "Plastik palet fiyatları: hafif hizmet, ağır hizmet (raf uyumlu) ve 100x120. Adet kademeli güncel liste, ahşap ile karşılaştırma, hızlı teklif.",
    h1: "Plastik Palet Fiyatları — Hafif ve Ağır Hizmet",
    answer:
      "Plastik palet fiyatı hizmet sınıfına, ölçüye ve adede göre değişir. Tabloda hafif hizmet, çelik takviyeli ağır hizmet ve 100x120 plastik paletler adet kademesiyle listelenir. Fiyatlar KDV hariç, adet başınadır.",
    keyword: "plastik palet fiyatları",
    art: "plastic",
    rowKeys: ["plastik-hafif", "plastik-agir", "plastik-100x120", "euro-sifir"],
    sections: [
      {
        h: "Plastik palet fiyatını etkileyen faktörler",
        list: [
          "Hizmet sınıfı: hafif hizmet ile çelik takviyeli ağır hizmet farklı fiyat gruplarındadır",
          "Ölçü: 800 × 1200 mm veya 1000 × 1200 mm",
          "Taşıma kapasitesi ve raf uyumu; statik, dinamik ve raf yükü ayrı değerlerdir",
          "Üst yüzey: kapalı veya ızgara",
          "Hammadde: ilk kullanım mı geri dönüşümlü plastik mi",
          "Sipariş adedi ve ihtiyaç duyulan sevkiyat",
        ],
        links: [["Plastik palet çeşitleri", "/rehber/plastik-palet-cesitleri/"], ["Palet raf yükü", "/rehber/palet-raf-sistemleri-ve-raf-yuku/"]],
      },
      tierSection("Plastik palet ilk maliyeti yüksek, kullanım ömrü uzun olduğundan birim maliyeti adet ve kullanım sayısı ile birlikte düşünmek gerekir."),
      {
        h: "Plastik ile ahşap karşılaştırması",
        table: {
          head: ["Ölçüt", "Plastik palet", "Sıfır ahşap palet"],
          rows: [
            ["İlk maliyet", "Daha yüksek", "Daha düşük"],
            ["Kullanım ömrü", "Uzun", "Daha kısa"],
            ["Hijyen", "Nem emmez, yıkanabilir", "Nem alır, temizlik sınırlı"],
            ["Ağırlık", "Hafif", "Daha ağır"],
            ["İhracat", "Ahşap işlemi gerekmez, ISPM-15 kapsamı dışı", "ISPM-15 uyumlu HT damga gerekir"],
            ["Tamir", "Genellikle onarılamaz", "Tahta değişimiyle onarılabilir"],
          ],
        },
        links: [["Plastik palet", "/urunler/plastik-palet/"], ["Ahşap mı plastik mi?", "/rehber/ahsap-palet-mi-plastik-palet-mi/"]],
      },
      quoteSection("Plastik palet teklifi"),
    ],
    faq: [
      { q: "Plastik palet ahşaptan daha mı pahalı?", a: "İlk alımda evet. Ancak plastik palet daha uzun ömürlü olduğundan, çok sayıda dönüşlü kapalı devre kullanımlarda birim kullanım maliyeti düşebilir." },
      { q: "Hafif ve ağır hizmet plastik palet farkı nedir?", a: "Ağır hizmet paletlerde çelik takviye bulunur, raf yüküne ve yüksek kapasiteye uygundur. Hafif hizmet paletler zeminde veya hafif yüklerde kullanılır." },
      { q: "Plastik palet ISPM-15 gerektirir mi?", a: "Hayır. ISPM-15 ahşap ambalaj malzemesi için geçerlidir; plastik palet kapsam dışındadır." },
      { q: "Plastik palet gıda ve ilaçta uygun mu?", a: "Nem emmediği ve yıkanabildiği için hijyen gerektiren sektörlerde sık tercih edilir. Üretici belgeleri ve kullanım koşulları için teklifte bilgi talep edin." },
      { q: "Fiyatlara KDV dahil mi?", a: "Hayır. Tablo KDV hariç, adet başı TL fiyatını gösterir." },
    ],
    related: ["palet-fiyatlari", "ahsap-palet-fiyatlari", "ikinci-el-palet-fiyatlari", "euro-palet-fiyatlari", "plastik-palet", "80x120-euro-palet", "ihracat-paleti"],
    guides: ["plastik-palet-cesitleri", "ahsap-palet-mi-plastik-palet-mi", "palet-raf-sistemleri-ve-raf-yuku", "gida-sektoru-icin-palet-secimi"],
  },
];

export const pricePageBySlug = (slug: string) => pricePages.find((p) => p.slug === slug);
