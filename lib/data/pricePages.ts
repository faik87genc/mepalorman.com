import type { PricePage } from "./prices";
import type { Section } from "@/lib/types";

// Fiyat sayfaları: /palet-fiyatlari/, /ahsap-palet-fiyatlari/, /ikinci-el-palet-fiyatlari/,
// /euro-palet-fiyatlari/, /plastik-palet-fiyatlari/
// Metinlerde TL rakamı yazılmaz; rakamlar yalnızca prices.ts tablosundan gelir.

const tierSection = (extra: string): Section => ({
  h: "Toptan alım kademeleri",
  p: [
    "Net birim fiyat ürüne, sipariş adedine ve teslim noktasına göre belirlenir; adet arttıkça birim fiyat düşer. " + extra,
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
    description: "Güncel palet fiyatları: Euro, 100x120, CP, ISPM-15 ihracat ve plastik palet. WhatsApp'tan güncel fiyat, Gebze depodan teslim. Teklif için WhatsApp.",
    h1: "Palet Fiyatları — Güncel Liste",
    answer:
      "Aşağıdaki tabloda sıfır ve ikinci el ahşap palet ile plastik palet çeşitleri listelenir. Fiyatlar kereste ve ham madde piyasasına göre değiştiği için güncel fiyatı WhatsApp'tan hızla veriyoruz; büyük adetler ve özel ölçüler için de aynı yolla teklif alın.",
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
      tierSection("Fiyat için ürünü ve adedi WhatsApp'tan yazmanız yeterli."),
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
      { q: "Palet fiyatları ne sıklıkla güncelleniyor?", a: "Kereste ve ham madde piyasasına göre değişebildiği için büyük siparişlerde güncel teklif alınması gerekir." },
      { q: "Fiyatlara KDV dahil mi?", a: "Fiyatlar KDV hariç verilir; KDV ve nakliye teklifte ayrıca belirtilir." },
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
    description: "Ahşap palet fiyatları: sıfır Euro, 100x120, CP, ISPM-15 ihracat ve özel ölçü. WhatsApp'tan güncel fiyat, Gebze depodan hızlı teslim.",
    h1: "Ahşap Palet Fiyatları — Sıfır ve İkinci El",
    answer:
      "Ahşap palet fiyatı ölçüye, sınıfa ve adede göre değişir. Tabloda sıfır ve ikinci el ahşap paletler listelenir; güncel fiyat için WhatsApp'tan yazın. Özel ölçüler için teklif alın.",
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
      { q: "Ahşap palet fiyatlarına KDV dahil mi?", a: "Fiyatlar KDV hariç verilir; KDV ve nakliye teklifte ayrıca belirtilir." },
      { q: "ISPM-15 damgalı palet neden daha pahalı?", a: "HT damgalı palet, ısıl işlem uygulanmış ve uluslararası kurala uygun işaretlenmiş ahşaptan yapılır. Bu ek süreç maliyete yansır. Biz ISPM-15 uyumlu, HT damgalı ihracat paleti temin ediyoruz." },
      { q: "Özel ölçülü ahşap palet fiyatı nasıl belirlenir?", a: "Ölçü, taşıyacağı yük ve adet bilindiğinde kereste ihtiyacı hesaplanıp teklif verilir. Bu nedenle tabloda “teklif alın” görünür." },
      { q: "100x120 ahşap palet fiyatı Euro paletten farklı mı?", a: "Evet. Daha büyük taban daha fazla kereste kullanır ve farklı bir fiyat grubunda yer alır. Güncel farkı WhatsApp'tan öğrenebilirsiniz." },
    ],
    related: ["palet-fiyatlari", "ikinci-el-palet-fiyatlari", "euro-palet-fiyatlari", "plastik-palet-fiyatlari", "sifir-ahsap-palet", "100x120-palet", "cp-palet", "ozel-olcu-palet"],
    guides: ["palet-cesitleri-ve-secimi", "palet-kalite-siniflari", "100x120-ile-80x120-palet-farki", "cp-paletleri-olcu-tablosu"],
  },
  {
    slug: "ikinci-el-palet-fiyatlari",
    title: "İkinci El Palet Fiyatları | 1. ve 2. Sınıf | MEPAL",
    description: "İkinci el palet fiyatları: Euro ölçülü 1. ve 2. sınıf, 100x120 ikinci el. WhatsApp'tan güncel fiyat, Gebze depodan teslim, WhatsApp'tan teklif.",
    h1: "İkinci El Palet Fiyatları — 1. ve 2. Sınıf",
    answer:
      "İkinci el palet fiyatı, paletin sınıfına ve adedine göre belirlenir. Tabloda Euro ölçülü 1. ve 2. sınıf ile 100x120 ikinci el paletler listelenir; sıfır palet karşılaştırma için eklenmiştir.",
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
      { q: "Fiyatlara KDV dahil mi?", a: "Fiyatlar KDV hariç verilir; KDV ve nakliye teklifte ayrıca belirtilir." },
      { q: "Sipariş ettiğim sınıfın aynısı gelecek mi?", a: "Teklifte sınıf ve adet netleştirilir. Büyük partilerde örnek fotoğraf veya yerinde inceleme talep edebilirsiniz." },
    ],
    related: ["palet-fiyatlari", "ahsap-palet-fiyatlari", "euro-palet-fiyatlari", "plastik-palet-fiyatlari", "ikinci-el-palet", "epal-palet", "80x120-euro-palet", "100x120-palet"],
    guides: ["ikinci-el-palet-alirken-dikkat-edilecekler", "palet-kalite-siniflari", "palet-omru-nasil-uzatilir", "hurda-paletinizi-nasil-degerlendirirsiniz"],
  },
  {
    slug: "euro-palet-fiyatlari",
    title: "Euro Palet Fiyatları | 80x120 Güncel Liste | MEPAL",
    description: "Euro palet (80x120) fiyatları: sıfır, ikinci el 1. ve 2. sınıf ve ISPM-15 ihracat paleti. WhatsApp'tan güncel fiyat, Gebze depodan teslim.",
    h1: "Euro Palet Fiyatları — 80x120",
    answer:
      "Euro palet (80x120) fiyatı; sıfır mı ikinci el mi olduğuna, sınıfa ve ısıl işleme göre değişir. Tabloda sıfır, ikinci el 1. ve 2. sınıf ve ISPM-15 uyumlu ihracat paleti listelenir; güncel fiyat için WhatsApp'tan yazın.",
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
      { q: "Toplu alımda fiyat düşer mi?", a: "Evet. Adet arttıkça birim fiyat düşer; adedi yazın, size özel fiyat verelim." },
    ],
    related: ["palet-fiyatlari", "ahsap-palet-fiyatlari", "ikinci-el-palet-fiyatlari", "plastik-palet-fiyatlari", "80x120-euro-palet", "epal-palet", "ihracat-paleti", "ikinci-el-palet"],
    guides: ["euro-palet-olculeri", "epal-palet-ile-standart-palet-farki", "palet-kac-kg-tasir", "ispm-15-nedir"],
  },
  {
    slug: "plastik-palet-fiyatlari",
    title: "Plastik Palet Fiyatları | Hafif ve Ağır | MEPAL",
    description: "Plastik palet fiyatları: hafif hizmet, ağır hizmet (raf uyumlu) ve 100x120. WhatsApp'tan güncel fiyat, ahşap ile karşılaştırma, hızlı teklif.",
    h1: "Plastik Palet Fiyatları — Hafif ve Ağır Hizmet",
    answer:
      "Plastik palet fiyatı hizmet sınıfına, ölçüye ve adede göre değişir. Tabloda hafif hizmet, çelik takviyeli ağır hizmet ve 100x120 plastik paletler listelenir; güncel fiyat için WhatsApp'tan yazın.",
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
      { q: "Fiyatlara KDV dahil mi?", a: "Fiyatlar KDV hariç verilir; KDV ve nakliye teklifte ayrıca belirtilir." },
    ],
    related: ["palet-fiyatlari", "ahsap-palet-fiyatlari", "ikinci-el-palet-fiyatlari", "euro-palet-fiyatlari", "plastik-palet", "80x120-euro-palet", "ihracat-paleti"],
    guides: ["plastik-palet-cesitleri", "ahsap-palet-mi-plastik-palet-mi", "palet-raf-sistemleri-ve-raf-yuku", "gida-sektoru-icin-palet-secimi"],
  },
  {
    slug: "hurda-palet-fiyatlari",
    title: "Hurda Palet Fiyatları ve Değerleme | MEPAL",
    description: "Hurda palet fiyatı neye göre belirlenir? Kalite sınıfı, adet, ölçü ve nem etkisi; fotoğrafla ön değerleme ve teklif süreci.",
    h1: "Hurda Palet Fiyatları ve Değerleme",
    answer:
      "Hurda ve kullanılmış palet alım değeri sabit bir liste fiyatı değildir; partinin sağlam palet oranı, ölçü ve tipi, adedi, nem ve kirlilik durumu ile yükleme koşullarına göre belirlenir. Bu nedenle bu sayfada rakam değil, değerlemenin nasıl yapıldığı anlatılır. Fotoğraf göndererek ön değerleme alabilirsiniz.",
    keyword: "hurda palet fiyatları",
    art: "scrap",
    rowKeys: [],
    sections: [
      {
        h: "Hurda palet için neden sabit fiyat verilmez?",
        p: [
          "Hurda palet yığını tek tip bir mal değildir. Aynı depodaki iki parti; sağlam palet oranı, ölçü dağılımı ve kuruluk bakımından çok farklı olabilir. Bu yüzden alım değeri, partiyi görmeden veya fotoğrafını incelemeden doğru verilemez. Sabit bir rakam açıklayan her liste, ya partiyi aşırı basitleştirir ya da gerçek değeri yansıtmaz.",
          "Bu sayfa fiyat tablosu içermez; değerlemeyi hangi unsurların belirlediğini ve süreci net biçimde gösterir. Hurda alımı hizmetinin kapsamı için ilgili hizmet sayfasına bakabilirsiniz.",
        ],
        links: [["Hurda palet alımı hizmeti", "/hizmetler/hurda-palet-alimi/"]],
      },
      {
        h: "Alım değerini belirleyen faktörler",
        list: [
          "Sağlam palet oranı: partinin ne kadarı doğrudan yeniden kullanılabilir veya küçük onarımla kurtarılabilir",
          "Ölçü ve tip: 80x120 Euro ölçülü ve 100x120 gibi yaygın ölçüler daha çok talep görür; özel ölçülerde alıcı bulmak zordur",
          "Adet ve parti büyüklüğü: büyük ve düzenli partiler lojistik açıdan daha verimlidir",
          "Nem ve kirlilik: ıslanmış, küflü, yağlı veya boyalı palet değeri düşürür",
          "Ayrıştırılmışlık: ölçü ve duruma göre önceden ayrılmış parti daha hızlı değerlenir",
          "Yükleme koşulları: forklift, rampa, araç erişimi ve çalışma saatleri",
          "Konum: yerinden alım için sevkiyat planı ve mesafe",
          "Piyasa koşulları: ikinci el palet talebi ve ahşap atık piyasası zamanla değişir",
        ],
      },
      {
        h: "Kalite sınıfına göre değerleme (niteliksel)",
        p: ["Aşağıdaki tablo rakam vermez; palet durumunun alım değerini nasıl etkilediğini karşılaştırmalı gösterir."],
        table: {
          caption: "Palet sınıfı ve değerleme etkisi",
          head: ["Sınıf", "Tipik durum", "Değerleme eğilimi", "Olası yol"],
          rows: [
            ["Sağlam (1. sınıf)", "Bloklar ve kızaklar bütün, en fazla 1–2 yüzey tahtası aşınmış", "En yüksek değerlenir", "İkinci el palet olarak yeniden satış"],
            ["Sağlam (2. sınıf)", "Yerli kullanıma uygun, görünümü düşük", "Orta düzey", "İkinci el palet, yerli kullanım"],
            ["Tamirlik", "Birkaç tahta kırık, blok sağlam", "Onarım maliyeti düşülerek değerlenir", "Tamir edilip dolaşıma girer"],
            ["Hurda", "Blok parçalanmış, çürüme ve küf var", "Ahşap atık değeri; çok düşük", "Ahşap atık olarak geri dönüşüm"],
            ["Bulaşmış / riskli", "Kimyasal, yağ veya gıda kalıntısı", "Alıma uygun olmayabilir", "Mevzuata uygun bertaraf; ayrıca bildirin"],
          ],
        },
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"]],
      },
      {
        h: "Değerleme nasıl yapılır?",
        steps: [
          "Paletleri mümkünse ölçü ve duruma göre kabaca ayırın: sağlam, tamirlik, hurda.",
          "Partinin fotoğrafını çekin; yığının genel görüntüsünü ve birkaç palet yakın planını ekleyin.",
          "Ölçü, yaklaşık adet, konum ve yükleme koşulunu (forklift, rampa) belirtin.",
          "Fotoğraf ve bilgilerle ön değerleme alın; gerekirse yerinde görülerek değerleme netleştirilir.",
          "Onay sonrası araç planlanır, yükleme yapılır ve ödeme koşulları teklifte belirtildiği gibi tamamlanır.",
        ],
        links: [["Fotoğraftan palet değerleme", "/araclar/fotograftan-palet-degerleme/"], ["Teklif al", "/teklif-al/"]],
      },
      {
        h: "Değeri artırmak için yapılabilecekler",
        list: [
          "Paletleri yağmurdan koruyun; kuru parti her zaman daha iyi değerlenir",
          "Sağlam ve hurdayı karıştırmayın; tek yığın hâlinde bırakmak değeri düşürür",
          "Ölçülere göre ayırın; en çok talep gören ölçüleri ayrı istifleyin",
          "Kimyasal veya yağ bulaşmış paletleri ayrı tutun",
          "Düzenli çıkıyorsa periyodik alım planı isteyin",
        ],
        links: [["Hurda paletinizi nasıl değerlendirirsiniz?", "/rehber/hurda-paletinizi-nasil-degerlendirirsiniz/"], ["Ahşap palet geri dönüşüm", "/rehber/ahsap-palet-geri-donusum/"]],
      },
      {
        h: "Sağlam paletleriniz için güncel satış fiyatları",
        p: [
          "Hurda değerleme alım tarafıdır. Eğer ikinci el palet satın almak istiyorsanız, ölçü ve sınıfa göre güncel birim fiyatlar ikinci el palet fiyat sayfasından WhatsApp ile öğrenebilirsiniz.",
        ],
        links: [["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"], ["Palet alım satım", "/hizmetler/palet-alim-satim/"]],
      },
    ],
    faq: [
      { q: "Hurda palet ton bazında mı alınır?", a: "Alım değeri adet, ölçü ve sağlam palet oranına göre belirlenir. Partinin içeriğine göre değerleme yöntemi teklifte netleştirilir." },
      { q: "Hurda palet için rakam verebilir misiniz?", a: "Partiyi görmeden veya fotoğrafını incelemeden doğru rakam vermek mümkün değildir. Fotoğraf ve adet bilgisiyle ön değerleme alabilirsiniz." },
      { q: "Kırık palet de alınır mı?", a: "Evet. Tamirlik ve hurda paletler de değerlenir; kırık oranı ve blok durumu alım değerini etkiler." },
      { q: "Yerinden alım yapıyor musunuz?", a: "Evet, adet ve konuma göre yerinden alım planlanır. Hizmet alanımız Türkiye geneli olup depomuz Gebze'dedir; Kocaeli ve İstanbul'da planlama en hızlıdır." },
      { q: "Yağlı veya kimyasal bulaşmış palet alınır mı?", a: "Bulaşmış paletler normal alıma uygun olmayabilir. Durumu önceden bildirin; mevzuata uygun değerlendirme yolu birlikte belirlenir." },
      { q: "Ödeme ve yükleme nasıl yapılır?", a: "Değerleme onaylandıktan sonra araç planlanır ve yükleme yapılır. Ödeme koşulları teklifte açıkça belirtilir." },
    ],
    related: ["ikinci-el-palet-fiyatlari", "palet-fiyatlari", "ahsap-palet-fiyatlari", "ikinci-el-palet", "ahsap-sandik"],
    guides: ["hurda-paletinizi-nasil-degerlendirirsiniz", "palet-kalite-siniflari", "ahsap-palet-geri-donusum", "palet-omru-nasil-uzatilir"],
  },
  {
    slug: "ozel-olcu-palet-fiyatlari",
    title: "Özel Ölçü Palet Fiyatları ve Teklif | MEPAL",
    description: "Özel ölçülü palet fiyatı nasıl belirlenir? Ölçü, yük, adet etkisi, teknik bilgi nasıl verilir. 145x145 dahil, hızlı teklif için WhatsApp.",
    h1: "Özel Ölçü Palet Fiyatları",
    answer:
      "Özel ölçülü palet fiyatı sabit bir liste değildir; ölçüye, taşınacak yüke, kereste ve tahta kalınlığına, adede ve ihracat gereksinimine göre hesaplanır. Ölçü ve yük bilgisini paylaştığınızda stok durumuna göre net teklif verilir. 145x145 gibi standart dışı ölçüler de aynı mantıkla fiyatlanır.",
    keyword: "özel ölçü palet fiyatları",
    art: "custom",
    rowKeys: ["ozel-olcu", "145x145"],
    sections: [
      {
        h: "Özel ölçü palet fiyatı nasıl belirlenir?",
        p: [
          "Standart ölçülü paletler hazır stoktan çıkar ve fiyatları tabloda görünür. Özel ölçülü palet ise yüke göre tasarlanır ve üretilir; bu yüzden fiyat, ölçü ve yük bilgisi belli olmadan hesaplanamaz. Aşağıdaki tabloda özel ölçülü ve 145x145 satırları “teklif alın” olarak görünür; sebebi budur.",
          "Teklifin doğru olması için hangi bilgilerin gerektiğini bilmek, süreci hızlandırır.",
        ],
        links: [["Özel ölçülü palet", "/urunler/ozel-olcu-palet/"], ["145x145 palet", "/urunler/145x145-palet/"]],
      },
      {
        h: "Fiyatı etkileyen faktörler",
        list: [
          "Ölçü: boy ve en; standart ölçülere yakınsa kesim ve tasarım maliyeti düşer",
          "Taşıma kapasitesi: statik, dinamik ve raf yükü; yük arttıkça tahta kalınlığı ve takviye artar",
          "Yapı: bloklu mu kızaklı mı, çatal girişi iki yönlü mü dört yönlü mü",
          "Kereste cinsi ve tahta kalınlığı",
          "İhracat gereksinimi: ISPM-15 uyumlu, HT damgalı palet farklı fiyatlanır",
          "Adet: tasarım ve kalıp maliyeti adede yayıldığı için büyük adetlerde birim fiyat düşer",
          "Sipariş sıklığı: düzenli tekrar eden siparişlerde teklif avantajlı olabilir",
          "Teslimat: adrese sevkiyat, mesafe ve araç planı",
        ],
      },
      {
        h: "Standart ve özel ölçü karşılaştırması",
        table: {
          caption: "Standart ve özel ölçülü palet",
          head: ["Ölçüt", "Standart ölçü (ör. 80x120)", "Özel ölçü"],
          rows: [
            ["Fiyat", "Tabloda açıkça listelenir", "Ölçü ve yüke göre teklifle belirlenir"],
            ["Tedarik", "Stoktan hızlı çıkış", "Üretim planı gerekir"],
            ["Adet", "Küçük adet de uygundur", "Adet arttıkça birim maliyet avantajı artar"],
            ["Uyum", "Raf ve araçlarla hazır uyumlu", "Yüke tam uyumlu, israf az"],
            ["Ne zaman?", "Genel sevkiyat", "Büyük, uzun, ağır veya düzensiz yük"],
          ],
        },
        links: [["Euro palet fiyatları", "/euro-palet-fiyatlari/"], ["Palet seçici", "/araclar/palet-secici/"]],
      },
      {
        h: "Ölçü ve teknik bilgi nasıl verilir?",
        p: ["Teklif için teknik çizim zorunlu değildir; aşağıdaki bilgiler çoğu zaman yeterlidir. Çizim, taslak veya yük fotoğrafı varsa eklemek hatayı azaltır."],
        steps: [
          "Palet ölçüsü: boy x en (mm olarak), varsa yükseklik sınırı.",
          "Yük bilgisi: ürünün ağırlığı, ambalajı ve palet üzerinde nasıl dizildiği.",
          "Kullanım yeri: raf, kamyon, konteyner veya otomatik hat; çatalın hangi yönden gireceği.",
          "İhracat olup olmadığı ve ISPM-15 gereksinimi.",
          "Yaklaşık adet ve tekrar sıklığı; teslim adresi.",
          "Varsa eski palet numunesi, fotoğraf veya teknik çizim.",
        ],
        links: [["Teklif al", "/teklif-al/"], ["Palet kaç kg taşır?", "/rehber/palet-kac-kg-tasir/"]],
      },
      {
        h: "Minimum sipariş ve teslimat",
        p: [
          "Özel ölçülü üretimde genellikle belirli bir adetten itibaren birim fiyat belirgin biçimde iyileşir. Bu, katı bir alt sınır değil, ekonomik bir eşiktir; tek veya birkaç adetlik ihtiyaçlar için de teklif alınabilir. Net adet mantığı ve üretim süresi, ölçüye ve stok durumuna göre teklifte bildirilir.",
          "Teslimat stok ve araç programına göre planlanır; net süre teklifte belirtilir. Hizmet alanımız Türkiye geneli olup depomuz Gebze'dedir.",
        ],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"]],
      },
      {
        h: "Özel ölçü yerine standart ölçü yetebilir mi?",
        p: [
          "Her standart dışı yük özel palet gerektirmez. Yük 80x120, 100x120 veya 114x114 ölçülerinden birine makul ölçüde uyuyorsa standart palet hem daha ekonomik hem de daha hızlı tedarik edilir. Paletin yükü her yönden aşırı taşımaması ve istif güvenliğini bozmaması yeterlidir. Emin değilseniz ölçüleri paylaşın, hangi seçeneğin mantıklı olduğunu birlikte değerlendirelim.",
        ],
        links: [["Palet çeşitleri ve seçimi", "/rehber/palet-cesitleri-ve-secimi/"], ["100x120 palet", "/urunler/100x120-palet/"]],
      },
    ],
    faq: [
      { q: "Özel ölçü palet fiyatı neden tabloda yazmıyor?", a: "Çünkü fiyat ölçüye, yüke, tahta kalınlığına ve adede göre ayrı hesaplanır. Bilgi paylaşıldığında net teklif verilir." },
      { q: "Teknik çizim şart mı?", a: "Hayır. Ölçü, yük bilgisi ve kullanım yeri çoğu zaman yeterlidir. Çizim, fotoğraf veya numune varsa teklif daha hızlı ve doğru hazırlanır." },
      { q: "Minimum sipariş adedi var mı?", a: "Katı bir alt sınır konmaz; ancak adet arttıkça birim fiyat avantajı artar. Küçük adetler için de teklif alabilirsiniz." },
      { q: "145x145 palet özel ölçü sayılır mı?", a: "145x145 yaygın bir endüstriyel ölçüdür ancak standart tabloda olmadığı için ölçü ve yüke göre teklifle fiyatlanır." },
      { q: "Özel ölçülü palet ihracat için olabilir mi?", a: "Evet. ISPM-15 uyumlu ve HT damgalı ihracat paleti temin edilebilir; ihracat gereksinimini teklifte belirtin." },
      { q: "Teslimat ne kadar sürer?", a: "Ölçüye, adede ve stok durumuna göre değişir. Net süre teklifte bildirilir." },
    ],
    related: ["palet-fiyatlari", "ahsap-palet-fiyatlari", "euro-palet-fiyatlari", "ozel-olcu-palet", "145x145-palet", "ihracat-paleti"],
    guides: ["palet-cesitleri-ve-secimi", "palet-kac-kg-tasir", "ispm-15-nedir", "palet-maliyetini-dusurmenin-yollari"],
  },
];

export const pricePageBySlug = (slug: string) => pricePages.find((p) => p.slug === slug);
