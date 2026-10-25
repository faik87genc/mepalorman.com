import type { Sector } from "@/lib/types";

// Sektör sayfaları (/sektorler/<slug>/)
export const sectors: Sector[] = [
  {
    slug: "gida-ve-icecek",
    name: "Gıda ve İçecek",
    title: "Gıda ve İçecek Sektörü İçin Palet | MEPAL Gebze",
    description: "Gıda ve içecek sevkiyatı için temiz, kuru, standart Euro palet ve plastik palet. Hijyen kuralları, seçim ipuçları ve Gebze depodan toplu teslim.",
    h1: "Gıda ve İçecek Sektörü İçin Palet",
    answer:
      "Gıda ve içecekte palet temiz, kuru, kokusuz ve standart ölçülü olmalıdır. Çoğu üretici sıfır Euro palet ya da yıkanabilir plastik palet tercih eder. Gebze deposundan Türkiye genelinde toplu teslim yapıyoruz.",
    keyword: "gıda sektörü palet",
    art: "euro",
    blurb: "Hijyen odaklı sevkiyat için temiz sıfır Euro palet ve plastik palet seçenekleri.",
    products: ["80x120-euro-palet", "plastik-palet", "sifir-ahsap-palet", "ihracat-paleti"],
    sections: [
      {
        h: "Gıdada palet neden önemlidir?",
        p: [
          "Palet, ürünle doğrudan temas etmese de koli ve ambalajın altında durur; nem, koku, küf veya kırık tahta riskleri ürüne geçebilir. Bu yüzden gıda ve içecekte palet seçimi kalite ve denetim kurallarının parçasıdır.",
          "Müşteri denetimleri çoğu zaman paletin temizliğini, kokusuz olmasını, kırık ve çıkık çivi içermemesini ve ahşapta küf bulunmamasını arar.",
        ],
      },
      {
        h: "Gıda sektöründe palet gereksinimleri",
        list: [
          "Temizlik ve kuruluk: nemli veya küflü ahşap kullanılmamalıdır",
          "Kokusuz olma: koku emen, kimyasal kokulu paletlerden kaçının",
          "Sağlam yapı: çıkıntı yapan çivi, kırık tahta ve kıymık olmamalıdır",
          "Standart ölçü: raf ve soğuk oda sistemlerine uyumlu 80x120 en yaygın seçimdir",
          "Yük kapasitesi: içecek paletleri ağır olduğundan palet yüküne uygun seçilmelidir",
          "Soğuk zincirde plastik palet nem emmediği için avantajlıdır",
          "İhracatta ahşap palet için ISPM-15 uyumlu, HT damgalı olması gerekir",
        ],
        links: [["Gıda sektörü için palet seçimi", "/rehber/gida-sektoru-icin-palet-secimi/"], ["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"]],
      },
      {
        h: "Ahşap mı plastik mi?",
        table: {
          head: ["Ölçüt", "Sıfır Euro palet", "Plastik palet"],
          rows: [
            ["Hijyen", "Temiz ve kuru olmalı", "Yıkanabilir, nem emmez"],
            ["Maliyet", "Daha düşük ilk maliyet", "Daha yüksek ilk maliyet, uzun ömür"],
            ["Soğuk oda", "Nemden etkilenebilir", "Uygun"],
            ["Kapalı devre kullanım", "Orta", "Çok uygun"],
            ["Tek yön sevkiyat", "Ekonomik", "Pahalı kalabilir"],
          ],
        },
        links: [["Ahşap mı plastik mi?", "/rehber/ahsap-palet-mi-plastik-palet-mi/"], ["Plastik palet fiyatları", "/plastik-palet-fiyatlari/"]],
      },
      {
        h: "Önerdiğimiz çözümler",
        list: [
          "Tek yönlü sevkiyat için sıfır Euro ölçülü ahşap palet",
          "Tekrar kullanılan, yıkanan devrelerde plastik palet",
          "İhracat sevkiyatı için ISPM-15 uyumlu, HT damgalı palet",
        ],
        p: ["Hangi palet için ne kadar yük geleceğini bildirirseniz öneri hazırlarız. Fiyat için güncel tablo ve teklif seçeneğini kullanabilirsiniz. Gebze, Dilovası, Çayırova ve Tuzla'daki tesislere ertesi iş günü teslim çoğunlukla mümkündür; net süre teklifte bildirilir."],
        links: [["Euro palet fiyatları", "/euro-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Gıda için ikinci el palet kullanılır mı?", a: "Genellikle önerilmez. Gıda sevkiyatında temiz, kokusuz ve standart yapı gerektiği için sıfır palet daha güvenlidir. Bazı işletmeler kendi denetim kurallarına göre 1. sınıf ikinci el kabul edebilir." },
      { q: "Gıda sektöründe en yaygın palet hangisi?", a: "Raf ve araç yüklemesine uyumu nedeniyle 800 × 1200 mm Euro ölçülü palet en yaygın seçimdir." },
      { q: "Plastik palet gıdada neden tercih ediliyor?", a: "Nem emmediği, yıkanabildiği ve küflenmediği için hijyen ve soğuk zincir uygulamalarında avantajlıdır." },
      { q: "İhracatta gıda paleti nasıl olmalı?", a: "Ahşap palet ISPM-15 uyumlu, HT damgalı olmalıdır. Plastik palet bu kuralın kapsamı dışındadır." },
      { q: "Toplu palet teklifi alabilir miyim?", a: "Evet. Tip, ölçü ve adedi bildirmeniz yeterlidir; adet kademesine göre teklif hazırlanır." },
    ],
  },
  {
    slug: "otomotiv-ve-yan-sanayi",
    name: "Otomotiv ve Yan Sanayi",
    title: "Otomotiv ve Yan Sanayi İçin Palet | MEPAL Gebze",
    description: "Otomotiv ve yan sanayi için ağır yüke dayanıklı, özel ölçülü ve ısıl işlemli palet. Gebze, Dilovası ve Çayırova tesislerine toplu tedarik.",
    h1: "Otomotiv ve Yan Sanayi İçin Palet",
    answer:
      "Otomotiv ve yan sanayide paletler ağır parçaları taşır, çoğu zaman özel ölçülü olur ve bazen ihracat için ısıl işlem gerektirir. Özel ölçülü ahşap palet, 100x120 ve CP paletleri yük ve ölçüye göre tedarik ediyoruz.",
    keyword: "otomotiv palet",
    art: "custom",
    blurb: "Ağır parça, özel ölçü ve ihracat için dayanıklı palet çözümleri.",
    products: ["ozel-olcu-palet", "100x120-palet", "cp-palet", "ihracat-paleti", "ahsap-sandik"],
    sections: [
      {
        h: "Otomotivde palet neden farklıdır?",
        p: [
          "Yan sanayi parçaları ağır, keskin kenarlı ve çoğu zaman düzensiz biçimlidir. Standart bir Euro palet her parça için yeterli olmayabilir.",
          "Kocaeli'nin otomotiv yan sanayi bölgelerinde fabrikalar ana üreticiye JIT esaslı sevkiyat yapar; paletin dayanıklı ve ölçüsünün tutarlı olması hat durmasını önler.",
        ],
      },
      {
        h: "Otomotiv ve yan sanayi için palet gereksinimleri",
        list: [
          "Yük kapasitesi: ağır parçalar için güçlendirilmiş yapı ve uygun tahta kalınlığı",
          "Ölçü: 100x120, 114x114 (CP) veya parçaya özel ölçü",
          "Sağlam kirişler ve takozlar; sık forklift kullanımına dayanıklılık",
          "Tutarlı ölçü: otomatik veya yarı otomatik hatlarda sapma sorun yaratır",
          "İhracat sevkiyatı: ISPM-15 uyumlu, HT damgalı palet",
          "Metal parçalar için nemden korunma: kuru ve temiz palet",
          "Karmaşık parçalar için sandık veya özel ambalaj",
        ],
        links: [["100x120 ile 80x120 farkı", "/rehber/100x120-ile-80x120-palet-farki/"], ["Palet kaç kg taşır?", "/rehber/palet-kac-kg-tasir/"]],
      },
      {
        h: "Önerdiğimiz çözümler",
        table: {
          head: ["İhtiyaç", "Çözüm"],
          rows: [
            ["Orta ve ağır parçalar", "100x120 endüstriyel palet"],
            ["Kimyasal ve yağlı parça", "CP (114x114) palet"],
            ["Parçaya özgü ölçü", "Özel ölçülü ahşap palet"],
            ["Ağır veya kırılgan ihracat", "Ahşap sandık, ISPM-15 uyumlu"],
            ["Yurt dışı sevkiyat", "ISPM-15 uyumlu, HT damgalı ihracat paleti"],
          ],
        },
        links: [["Özel ölçü palet", "/urunler/ozel-olcu-palet/"], ["Ahşap sandık", "/urunler/ahsap-sandik/"]],
      },
      {
        h: "Tedarik ve konum",
        p: ["Gebze depomuz Gebze OSB, Dilovası OSB, Plastikçiler OSB ve Çayırova'daki fabrikalara 5–25 dakika uzaklıktadır. Düzenli tedarik için sevkiyat takvimi birlikte planlanır; teslimat stok ve araç programına göre çoğunlukla ertesi iş günüdür."],
        links: [["Dilovası palet", "/bolge/dilovasi-palet/"], ["Toptan palet", "/hizmetler/toptan-palet/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Özel ölçülü palet yaptırabilir miyim?", a: "Evet. Ölçü, yük ve adedi bildirdiğinizde tasarım ve teklif hazırlanır. Fiyat ölçüye ve yüke göre belirlenir." },
      { q: "Ağır parçalar için hangi palet?", a: "Genellikle 100x120 veya 114x114 endüstriyel palet ya da yüke göre tasarlanmış özel ölçülü palet önerilir." },
      { q: "İhracat paletinde ne gerekir?", a: "Ahşap ambalaj için ISPM-15 uyumlu, HT damgalı olması ve ithalatçı ülkenin kurallarına uygunluk gerekir." },
      { q: "Düzenli aylık tedarik mümkün mü?", a: "Evet. Ölçü ve adet bildirildikten sonra sevkiyat takvimi birlikte hazırlanır." },
      { q: "Kırık ve kullanılmış paletleri alıyor musunuz?", a: "Evet. Hurda ve fazla paletleriniz değerlendirilir; hurda palet alımı hizmetimize bakabilirsiniz." },
    ],
  },
  {
    slug: "beyaz-esya",
    name: "Beyaz Eşya",
    title: "Beyaz Eşya Sektörü İçin Palet | MEPAL Gebze",
    description: "Beyaz eşya üretici ve dağıtıcıları için büyük ölçülü, dayanıklı palet. 100x120, 145x145 ve özel ölçülü ahşap palet, Gebze depodan toplu teslim.",
    h1: "Beyaz Eşya Sektörü İçin Palet",
    answer:
      "Beyaz eşya büyük, ağır ve darbeye hassas olduğundan paletin geniş tabanlı, sağlam ve ürün ölçüsüne uyumlu olması gerekir. 100x120, 145x145 ve özel ölçülü ahşap paletleri Gebze deposundan toplu tedarik ediyoruz.",
    keyword: "beyaz eşya palet",
    art: "big",
    blurb: "Büyük ve ağır ürünler için geniş tabanlı, özel ölçülü palet çözümleri.",
    products: ["100x120-palet", "145x145-palet", "ozel-olcu-palet", "ahsap-sandik", "ihracat-paleti"],
    sections: [
      {
        h: "Beyaz eşyada palet seçimi",
        p: [
          "Buzdolabı, çamaşır makinesi ve fırın gibi ürünler yüksek, ağır ve devrilmeye yatkındır. Palet, ürünün tabanını tam taşımalı ve istiflendiğinde alttaki ürünü ezmemelidir.",
          "Üretici hatlarında palet boyutu sabittir; dağıtımda ise ürün tipine göre farklı paletler birlikte çalışır. Bu nedenle tek bir ölçü yerine ürün grubuna göre seçim yapılır.",
        ],
      },
      {
        h: "Beyaz eşya için palet gereksinimleri",
        list: [
          "Geniş taban: ürün tabanının tamamını taşımalı, kenarlardan sarkmamalıdır",
          "Yük kapasitesi: ağır ürünler ve üst üste istif için güçlendirilmiş yapı",
          "Ölçü: 100x120, 145x145 gibi büyük tabanlar veya ürüne özel ölçü",
          "Düz yüzey: tahta aralıkları ürün tabanını bozmamalıdır",
          "Kenar koruyucu ve streç ile sabitleme: nakliye sırasında devrilmeyi önler",
          "Çivi çıkıntısı, kıymık ve kırık tahta olmaması: ambalaj ve ürün çizilmesini önler",
          "İhracat sevkiyatında ISPM-15 uyumlu, HT damgalı palet",
        ],
        links: [["Palet nasıl istiflenir?", "/rehber/palet-nasil-istiflenir/"], ["Palet yüksekliği", "/rehber/palet-yuksekligi-kac-cm/"]],
      },
      {
        h: "Önerdiğimiz çözümler",
        table: {
          head: ["Ürün tipi", "Palet"],
          rows: [
            ["Küçük beyaz eşya, ev aletleri", "80x120 Euro palet"],
            ["Çamaşır, bulaşık makinesi", "100x120 endüstriyel palet"],
            ["Çok geniş ürün, çoklu istif", "145x145 palet"],
            ["Standart dışı ürün", "Özel ölçülü ahşap palet"],
            ["İhracat", "ISPM-15 uyumlu, HT damgalı palet"],
          ],
        },
        links: [["145x145 palet", "/urunler/145x145-palet/"], ["100x120 palet", "/urunler/100x120-palet/"]],
      },
      {
        h: "Tedarik",
        p: ["Gebze depodan Türkiye genelindeki fabrika ve dağıtım merkezlerine toplu teslim yapılır (Kocaeli ve İstanbul’da en hızlı). Büyük ölçülü paletlerde stok durumuna göre süre değişebilir; net teslim planı teklifte bildirilir."],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Beyaz eşya için hangi palet ölçüsü uygun?", a: "Ürüne bağlıdır. Küçük cihazlarda 80x120, daha büyük ürünlerde 100x120 veya 145x145 kullanılır; standart dışı ürünler için özel ölçü yapılır." },
      { q: "145x145 palet nerede kullanılır?", a: "Çok geniş tabanlı ürünlerde ve çoklu istif gerektiren yüklerde tercih edilir. Fiyatı için teklif alınır." },
      { q: "Özel ölçülü palet yaptırabilir miyim?", a: "Evet. Ürün ölçüsünü ve ağırlığını bildirin, uygun palet tasarımı ve teklif hazırlanır." },
      { q: "Palet ürüne zarar verir mi?", a: "Kıymık, çivi çıkıntısı veya kırık tahta ambalaja zarar verebilir. Bu yüzden sağlam, düz yüzeyli ve kontrollü paletler tercih edilmelidir." },
      { q: "İhracat için ne gerekir?", a: "Ahşap palet ISPM-15 uyumlu ve HT damgalı olmalıdır; ithalatçı ülkenin ek şartlarını da kontrol etmek gerekir." },
    ],
  },
  {
    slug: "kimya-ve-plastik",
    name: "Kimya ve Plastik",
    title: "Kimya ve Plastik Sektörü İçin Palet | MEPAL Gebze",
    description: "Kimya ve plastik sektörü için CP palet, plastik palet ve sağlam ahşap palet. Kimyasala dayanım, yük kapasitesi ve Gebze depodan toplu tedarik.",
    h1: "Kimya ve Plastik Sektörü İçin Palet",
    answer:
      "Kimya ve plastik sektöründe palet; ağır yüke, nem ve kimyasal buharına dayanmalı, çoğu kez CP standardında (114x114) olmalıdır. Ahşap CP palet ve kimyasala dirençli plastik palet seçeneklerimizi Gebze deposundan tedarik ediyoruz.",
    keyword: "kimya sektörü palet",
    art: "cp",
    blurb: "CP standardı ve kimyasala dayanıklı plastik palet ile güvenli sevkiyat.",
    products: ["cp-palet", "plastik-palet", "100x120-palet", "ihracat-paleti"],
    sections: [
      {
        h: "Kimya ve plastikte paletin rolü",
        p: [
          "Kimya sektöründe palet; bidon, IBC, torba ve varil gibi ağır yükleri taşır. Bir kırılma yalnızca ürünü değil çevreyi ve iş güvenliğini de ilgilendirir.",
          "Plastik hammadde ve granül üreticilerinde de torba ve big-bag yükleri yüksek ağırlığa ulaşır. Bu nedenle palet kapasitesi, taban ölçüsü ve yüzey düzgünlüğü seçim kriteridir.",
        ],
      },
      {
        h: "Kimya ve plastik için palet gereksinimleri",
        list: [
          "CP standardı: kimya sektöründe CP1–CP9 serisi tanımlıdır; CP3 ölçüsü 1140 × 1140 mm'dir",
          "Yük kapasitesi: bidon, IBC ve torba yükü için güçlendirilmiş yapı",
          "Kimyasal dayanım: plastik palet çoğu kimyasalı emmez; ahşap emebilir",
          "Nem ve sızıntı: ıslak veya kirlenmiş ahşap paletlerde güvenlik riski artar",
          "Tehlikeli madde sevkiyatında ilgili yönetmelik ve müşteri kuralları kontrol edilmelidir",
          "Plastik palette üst yüzey: kapalı yüzey sızıntıyı tutmaya yardımcı olur",
          "İhracat sevkiyatında ahşap için ISPM-15 uyumlu, HT damgalı palet",
        ],
        links: [["CP paletleri ölçü tablosu", "/rehber/cp-paletleri-olcu-tablosu/"], ["Palet kaç kg taşır?", "/rehber/palet-kac-kg-tasir/"]],
      },
      {
        h: "CP palet ve plastik palet karşılaştırması",
        table: {
          head: ["Ölçüt", "CP ahşap palet (114x114)", "Plastik palet"],
          rows: [
            ["Kimyasal dayanım", "Sınırlı, emebilir", "Genellikle yüksek"],
            ["Yük taşıma", "Yüksek", "Ağır hizmet sınıfında yüksek"],
            ["Maliyet", "Daha düşük", "Daha yüksek, uzun ömür"],
            ["Tamir", "Tahta değişimiyle", "Zor"],
            ["Kapalı devre", "Orta", "Çok uygun"],
          ],
        },
        links: [["CP palet", "/urunler/cp-palet/"], ["Plastik palet", "/urunler/plastik-palet/"]],
      },
      {
        h: "Tedarik ve konum",
        p: ["Plastikçiler OSB, Gebze OSB, Dilovası ve Tuzla'daki tesislere depomuzdan 5–25 dakikada ulaşılır. Düzenli ihtiyaçlar için toptan teklif hazırlanır; teslimat stok ve araç programına göre belirlenir."],
        links: [["Plastik palet fiyatları", "/plastik-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "CP palet nedir?", a: "Kimya sektörü için tanımlanmış standart palet ölçülerinden oluşan seridir. CP3, 1140 × 1140 mm ölçüsüyle yaygın olandır." },
      { q: "Kimyasal ürünlerde plastik palet mi ahşap mı?", a: "Kimyasalı emmemesi nedeniyle genellikle plastik palet avantajlıdır. Ürün tehlikeli madde sınıfındaysa ilgili mevzuata ve müşteri kurallarına bakılmalıdır." },
      { q: "Bidon ve IBC için palet kapasitesi yeterli mi?", a: "Yük ağırlığını ve istif yüksekliğini bildirin; statik, dinamik ve raf yükü ayrı değerlendirilir." },
      { q: "İhracatta ahşap palet ne gerektirir?", a: "ISPM-15 uyumlu, HT damgalı olmalıdır. Plastik palet bu işlemden muaftır." },
      { q: "Toplu CP palet teklifi alabilir miyim?", a: "Evet. Ölçü ve adedi bildirmeniz yeterlidir; adet kademesine göre teklif hazırlanır." },
    ],
  },
  {
    slug: "ihracat-ve-lojistik",
    name: "İhracat ve Lojistik",
    title: "İhracat ve Lojistik İçin Palet | ISPM-15 | MEPAL",
    description: "İhracat ve lojistik için ISPM-15 uyumlu, HT damgalı palet, ahşap sandık ve konteyner uyumlu ölçüler. Gebze depodan hızlı tedarik.",
    h1: "İhracat ve Lojistik İçin Palet",
    answer:
      "İhracatta ahşap palet ISPM-15 uyumlu olmalı ve HT damgası taşımalıdır; aksi halde gümrükte reddedilebilir. ISPM-15 uyumlu, HT damgalı ihracat paleti ve ahşap sandığı Gebze deposundan temin ediyoruz.",
    keyword: "ihracat paleti sektör",
    art: "ispm",
    blurb: "ISPM-15 uyumlu palet ve sandık ile gümrük sorunsuz ihracat sevkiyatı.",
    products: ["ihracat-paleti", "80x120-euro-palet", "ahsap-sandik", "plastik-palet", "100x120-palet"],
    sections: [
      {
        h: "İhracatta palet kuralları",
        p: [
          "ISPM-15, ahşap ambalaj malzemesinin zararlı böceklerle yayılmasını önlemek için IPPC tarafından hazırlanmış uluslararası standarttır. Standart; ahşap palet, sandık ve takozları kapsar.",
          "Uygun işlem gören ahşap, işlemi ve üretici bilgisini gösteren damga ile işaretlenir. Isıl işlemde (HT) ahşabın merkezi en az 56 °C'ye ulaşıp en az 30 dakika bu sıcaklıkta tutulmalıdır. Damgasız palet gümrükte sorun çıkarabilir.",
        ],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"], ["İhracatta palet ve ambalaj kuralları", "/rehber/ihracatta-palet-ve-ambalaj-kurallari/"]],
      },
      {
        h: "İhracat ve lojistik için palet gereksinimleri",
        list: [
          "Ahşap paletlerde ISPM-15 uyumu ve okunabilir HT damgası",
          "Ölçü: konteyner ve tır doluluğunu etkileyen 80x120, 100x120 veya özel ölçü",
          "Yük kapasitesi ve istif: uzun yolculukta alt paletin yükü taşıması",
          "Plastik palet: ISPM-15 kapsamı dışındadır, tek kullanımlık ihracatta maliyeti yüksek olabilir",
          "Ağır veya hassas ürünler için ahşap sandık",
          "Ürün ve ithalatçı ülke kuralları: varış ülkesinin ek şartları kontrol edilmelidir",
        ],
        links: [["Konteynere kaç palet sığar?", "/rehber/konteynere-ve-tira-kac-palet-sigar/"], ["Konteyner palet hesaplama", "/araclar/konteyner-palet-hesaplama/"]],
      },
      {
        h: "Önerdiğimiz çözümler",
        table: {
          head: ["İhtiyaç", "Çözüm"],
          rows: [
            ["Standart ihracat", "ISPM-15 uyumlu, HT damgalı ihracat paleti"],
            ["Ağır ve hassas yük", "Ahşap sandık (ISPM-15 uyumlu)"],
            ["Euro ölçüsünde yükleme", "80x120 HT damgalı palet"],
            ["Standart dışı ürün", "Özel ölçülü palet"],
            ["Kapalı devre", "Plastik palet"],
          ],
        },
        p: ["ISPM-15 uyumlu, HT damgalı ihracat paleti temin ediyoruz; ısıl işlem tedarikçi tarafından yapılır."],
        links: [["İhracat paleti", "/urunler/ihracat-paleti/"], ["Ahşap sandık", "/urunler/ahsap-sandik/"]],
      },
      {
        h: "Tedarik",
        p: ["İhracat sevkiyatları çoğu zaman zamana duyarlıdır. Gebze deposundan stok ve araç programına göre çoğunlukla ertesi iş günü teslimat planlanır; net süre teklifte bildirilir."],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "İhracat paleti ISPM-15 olmak zorunda mı?", a: "Ahşap ambalaj kullanan çoğu ülke ISPM-15 uyumunu ve damgayı arar. Damgasız ahşap palet gümrükte bekletilebilir veya reddedilebilir." },
      { q: "HT damgası ne anlama gelir?", a: "HT, heat treatment yani ısıl işlem demektir. Damga işlemin yapıldığını ve ahşabın izlenebilirliğini gösterir." },
      { q: "Plastik palet ihracatta daha mı kolay?", a: "ISPM-15 plastik paleti kapsamaz. Ancak plastik palet daha pahalıdır, geri dönüşü olmayan sevkiyatta maliyet artabilir." },
      { q: "Ahşap sandık ne zaman gerekir?", a: "Ağır, kırılgan veya düzensiz biçimli ürünlerde sandık daha güvenli koruma sağlar." },
      { q: "Konteynere kaç palet sığar?", a: "Palet ölçüsü ve istif biçimine bağlıdır. Hesaplama aracı ve rehber sayfası ile tahmin yapabilirsiniz." },
    ],
  },
  {
    slug: "e-ticaret-ve-depo",
    name: "E-ticaret ve Depo",
    title: "E-ticaret ve Depo İçin Palet | MEPAL Gebze",
    description: "E-ticaret depoları ve lojistik merkezleri için raf uyumlu palet, plastik palet ve ikinci el seçenekler. Düzenli tedarik, Gebze depodan sevkiyat.",
    h1: "E-ticaret ve Depo İçin Palet",
    answer:
      "E-ticaret ve depolarda palet raf sistemine uyumlu, tutarlı ölçülü ve çok kez kullanıma dayanıklı olmalıdır. Euro ölçülü ahşap, plastik ve ikinci el palet seçeneklerini adet kademeli fiyatla Gebze deposundan tedarik ediyoruz.",
    keyword: "depo paleti",
    art: "container",
    blurb: "Raf uyumlu ve düzenli tedarik edilebilen palet çözümleri.",
    products: ["80x120-euro-palet", "plastik-palet", "ikinci-el-palet", "epal-palet", "100x120-palet"],
    sections: [
      {
        h: "Depo ve e-ticarette palet seçimi",
        p: [
          "E-ticaret depolarında palet hem depolama hem de sevkiyat birimidir. Yoğun sezonlarda palet ihtiyacı birkaç günde katlanabilir; bu yüzden tedarik hızı ve tutarlı ölçü önemlidir.",
          "Raf sistemlerinde palet kirişlere oturur. Kırık ya da eğilmiş palet yalnızca ürünü değil raf güvenliğini de tehdit eder.",
        ],
      },
      {
        h: "Depo için palet gereksinimleri",
        list: [
          "Raf uyumu: palet kirişlere tam oturmalı, raf yükünü taşıyacak yapıda olmalıdır",
          "Ölçü tutarlılığı: otomatik depolama ve sınıflandırma hatlarında zorunlu olabilir",
          "Standart ölçü: 80x120 Euro palet yaygın; yarım Euro palet (60x80) küçük ürünler için kullanılır",
          "Statik, dinamik ve raf yükü ayrı kapasitelerdir; üretici değerlerine bakılmalıdır",
          "Dayanıklılık: sık forklift ve transpalet kullanımına dayanıklı yapı",
          "Maliyet dengesi: ikinci el palet iç depolamada ekonomik seçenektir",
          "Yıkanabilir yüzey gereken alanlarda plastik palet",
        ],
        links: [["Palet raf sistemleri ve raf yükü", "/rehber/palet-raf-sistemleri-ve-raf-yuku/"], ["Yarım Euro palet 60x80", "/rehber/yarim-euro-palet-60x80/"]],
      },
      {
        h: "Önerdiğimiz çözümler",
        table: {
          head: ["Kullanım", "Palet"],
          rows: [
            ["Genel depolama, raf", "Sıfır veya 1. sınıf ikinci el Euro palet"],
            ["Yoğun sezon, geçici ihtiyaç", "İkinci el palet"],
            ["Yüksek raf, ağır yük", "Ağır hizmet plastik palet"],
            ["Kapalı devre sevkiyat", "Plastik palet"],
            ["Standart dışı ürün", "Özel ölçülü palet"],
          ],
        },
        links: [["İkinci el palet", "/urunler/ikinci-el-palet/"], ["Palet seçici", "/araclar/palet-secici/"]],
      },
      {
        h: "Düzenli tedarik ve palet havuzu",
        p: ["Düzenli palet ihtiyacınız varsa aylık tedarik takvimi oluşturulabilir. Kullanılmayan veya kırık paletlerinizi de alıyoruz."],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Palet havuzu ve kiralama", "/rehber/palet-havuzu-ve-palet-kiralama/"]],
      },
    ],
    faq: [
      { q: "Depo için hangi palet daha uygun?", a: "Raf kullanımında Euro ölçülü sağlam palet, ağır yüklerde takviyeli plastik palet uygundur. Hesap yük ve raf tipine bağlıdır." },
      { q: "İkinci el palet raf sisteminde kullanılabilir mi?", a: "1. sınıf, kırıksız ve düz paletler çoğu depoda kullanılabilir. Üst raflar ve ağır yükler için sıfır veya takviyeli palet önerilir." },
      { q: "Yarım Euro palet nedir?", a: "600 × 800 mm ölçülü, küçük ürün ve sergileme paletidir." },
      { q: "Yoğun sezonlarda hızlı palet bulabilir miyim?", a: "Stok durumuna göre çoğunlukla ertesi iş günü teslim mümkündür; net süre teklifte bildirilir." },
      { q: "Fazla paletleri size satabilir miyim?", a: "Evet. Adedi ve durumu bildirin; alım teklifi hazırlanır." },
    ],
  },
];

export const sectorBySlug = (slug: string) => sectors.find((s) => s.slug === slug);
