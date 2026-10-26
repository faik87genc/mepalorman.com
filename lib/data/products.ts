import type { Product } from "@/lib/types";

// Ürün sayfaları (/urunler/<slug>/). Fiyatlar burada YAZILMAZ: priceRow ile
// lib/data/prices.ts içindeki satıra bağlanır.
export const products: Product[] = [
  // ───────────────────────── 1. 80x120 Euro palet
  {
    slug: "80x120-euro-palet",
    name: "80x120 Euro Palet",
    title: "80x120 Euro Palet | Ölçü, Kapasite, Fiyat | MEPAL",
    description:
      "80x120 Euro palet: 800×1200 mm ölçü, 9 ayaklı yapı, taşıma kapasitesi ve güncel fiyat. Gebze depodan hızlı teslimat, WhatsApp'tan teklif.",
    h1: "80x120 Euro Palet — Gebze Depodan Toplu Teslimat",
    answer:
      "80x120 Euro palet, 800 × 1200 mm ölçülü, 9 ayaklı ve dört yönden çatallanabilen standart ahşap paletdir. Avrupa'da en yaygın kullanılan ölçüdür; gıda, otomotiv ve beyaz eşya sevkiyatında raf ve tır yüklemesine uyumludur. Sıfır ve ikinci el seçenekleri Gebze deposundan toplu verilir.",
    keyword: "euro palet",
    art: "euro",
    blurb: "800×1200 mm, 9 ayaklı, dört yönden çatallanabilir standart palet.",
    priceRow: "euro-sifir",
    specs: [
      ["Ölçü", "800 × 1200 mm"],
      ["Yükseklik", "yaklaşık 144 mm"],
      ["Ağırlık", "yaklaşık 20–25 kg (nem oranına göre)"],
      ["Ayak (blok) sayısı", "9"],
      ["Çatal girişi", "4 yönden"],
      ["Dinamik taşıma", "yaklaşık 1.500 kg"],
      ["Raf yükü", "genellikle 1.000 kg'a kadar"],
      ["Malzeme", "Ahşap, çivili"],
    ],
    uses: ["Gıda ve içecek sevkiyatı", "Otomotiv yan sanayi", "Beyaz eşya", "Raflı depo sistemleri", "E-ticaret ve dağıtım depoları"],
    related: ["epal-palet", "ikinci-el-palet", "ihracat-paleti"],
    guides: ["euro-palet-olculeri", "konteynere-ve-tira-kac-palet-sigar", "palet-kac-kg-tasir"],
    sections: [
      {
        h: "80x120 Euro palet nedir?",
        p: [
          "80x120 Euro palet, 800 × 1200 mm taban ölçüsüne sahip, üst ve alt tahtaları dokuz adet blok (ayak) üzerinde taşıyan ahşap yük platformudur. Dört kenarından da transpalet veya forklift çatalı girebildiği için depoda yön değiştirmeden çalışılır.",
          "Ölçü, Avrupa'daki depo rafı, kamyon kasası ve konteyner düzenlerinin büyük kısmı bu palete göre planlandığı için fiilen sektör standardı hâline gelmiştir. Yük sahibi ile alıcının aynı ölçüyü kullanması, aktarma sırasında yeniden paletleme masrafını ortadan kaldırır.",
        ],
      },
      {
        h: "Teknik özellikler",
        p: ["Aşağıdaki değerler tipik bir Euro ölçülü palet içindir; tahta kalınlığı ve ağaç cinsine göre küçük sapmalar olabilir."],
        table: {
          caption: "80x120 Euro palet teknik tablo",
          head: ["Özellik", "Değer"],
          rows: [
            ["Taban ölçüsü", "800 × 1200 mm"],
            ["Toplam yükseklik", "yaklaşık 144 mm"],
            ["Blok sayısı", "9"],
            ["Çatal girişi", "4 yönlü"],
            ["Ortalama ağırlık", "yaklaşık 20–25 kg"],
            ["Dinamik yük", "yaklaşık 1.500 kg"],
          ],
        },
      },
      {
        h: "Hangi sektörlerde kullanılır?",
        list: [
          "Gıda ve içecek: koli ve şişe paletleme, soğuk oda depolama",
          "Otomotiv yan sanayi: küçük parça ve kasa sevkiyatı",
          "Beyaz eşya: yedek parça ve küçük cihaz paketleri",
          "E-ticaret ve dağıtım merkezleri: standart raf adresleme",
        ],
        links: [
          ["Gıda ve içecek sektörü", "/sektorler/gida-ve-icecek/"],
          ["E-ticaret ve depo", "/sektorler/e-ticaret-ve-depo/"],
        ],
      },
      {
        h: "Sıfır mı ikinci el mi seçmeli?",
        p: [
          "Gıdayla temas eden depolarda, ihracatta ve raf yükü yüksek işlerde sıfır palet mantıklıdır. Fabrika içi dolaşım ve iç lojistikte ise onarılmış ikinci el Euro ölçülü palet maliyeti belirgin biçimde düşürür.",
          "Sıfır palet güncel fiyatı kademeli adetlere göre değişir. Hacim arttıkça birim maliyet düşer; en doğru rakam için güncel fiyat tablosuna bakın veya teklif alın.",
        ],
        links: [
          ["Euro palet fiyatları", "/euro-palet-fiyatlari/"],
          ["Palet fiyatları", "/palet-fiyatlari/"],
          ["İkinci el Euro palet", "/urunler/ikinci-el-palet/"],
        ],
      },
      {
        h: "Alırken nelere bakılmalı?",
        list: [
          "Tahtalarda çatlak, kırık ya da çıkık çivi olmamalı.",
          "Dokuz bloğun hepsi sağlam ve aynı hizada olmalı.",
          "Nem fazlaysa palet ağırlaşır ve küflenir; kuru malzeme tercih edin.",
          "İhracat yapacaksanız paletin ısıl işlem (HT) damgalı olması gerekir.",
        ],
        links: [["İhracat paleti", "/urunler/ihracat-paleti/"]],
      },
      {
        h: "Sipariş ve teslimat",
        steps: [
          "Adet, sıfır/ikinci el tercihi ve teslim adresini WhatsApp veya teklif formuyla iletin.",
          "Stok ve araç programına göre teklif ve teslim zamanı bildirilir; çoğunlukla ertesi iş günü çıkış mümkündür, net süre teklifte yazılır.",
          "Palet Gebze deposundan araçla adresinize gelir; boşaltma sırasında adet kontrolü yapılır.",
        ],
        links: [["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "80x120 Euro palet kaç kg taşır?", a: "Dinamik taşıma kapasitesi yaklaşık 1.500 kg'dır. Raf üzerinde kullanımda güvenli yük genellikle 1.000 kg civarında tutulur; üreticinin ve raf sisteminin verisine bakılmalıdır." },
      { q: "Euro palet ile EPAL palet aynı şey mi?", a: "Ölçü olarak aynıdır (800×1200 mm). EPAL ise tescilli bir markadır ve lisans/damga gerektirir. MEPAL, EPAL ölçülerinde Euro palet temin eder ve ikinci el EPAL palet alım satımı yapar; EPAL lisanslı üretici değildir." },
      { q: "Bir tıra kaç adet 80x120 palet sığar?", a: "13,6 m'lik standart tırda tek katta yaklaşık 33 adet yerleşir. Üst üste yükleme mümkünse bu rakam yük yüksekliğine göre artar." },
      { q: "Minimum sipariş adedi var mı?", a: "Toplu tedarik ağırlıklıdır; küçük adetler için stok durumuna göre WhatsApp'tan sorabilirsiniz." },
      { q: "Paletin ağırlığı neden değişiyor?", a: "Ahşabın nem oranı ağırlığı doğrudan etkiler. Taze kereste ağır, kurutulmuş kereste hafiftir; bu fark yaklaşık birkaç kilogramdır." },
      { q: "Fiyat nasıl öğrenilir?", a: "Fiyatlar adet kademesine göre değişir. Güncel fiyat tablosuna bakın ya da WhatsApp'tan teklif isteyin." },
    ],
  },

  // ───────────────────────── 2. EPAL palet
  {
    slug: "epal-palet",
    name: "EPAL Ölçülü / İkinci El EPAL Palet",
    title: "EPAL Palet Alım Satım | Gebze | MEPAL",
    description:
      "EPAL ölçülerinde Euro palet ve ikinci el EPAL palet alım satımı. EPAL tescilli markadır; damga, kalite ve doğru ürün seçimi. Gebze'den teslimat.",
    h1: "EPAL Palet — Ölçü, Damga ve İkinci El EPAL Alım Satımı",
    answer:
      "EPAL, Avrupa Palet Birliği'nin tescilli markasıdır; yalnızca lisanslı üreticiler ve onarımcılar damgalı EPAL palet üretebilir. MEPAL, EPAL ölçülerinde (800×1200 mm) Euro palet temin eder ve ikinci el EPAL palet alım satımı yapar; EPAL palet üreticisi değildir.",
    keyword: "epal palet",
    art: "used",
    blurb: "EPAL ölçülü Euro palet ve ikinci el EPAL palet alım satımı.",
    priceRow: "euro-ikinci-el-1",
    specs: [
      ["Ölçü", "800 × 1200 × 144 mm"],
      ["Yapı", "11 tahta, 9 blok, 78 çivi (EPAL spesifikasyonu)"],
      ["Ağırlık", "yaklaşık 25 kg"],
      ["Dinamik taşıma", "1.500 kg"],
      ["Damga", "EPAL oval logosu, lisans kodu"],
      ["Statüsü", "Tescilli marka, lisansa bağlı"],
      ["MEPAL hizmeti", "İkinci el EPAL alım satımı, EPAL ölçülü palet"],
    ],
    uses: ["Palet havuzu ve takas sistemleri", "Avrupa'ya ihracat sevkiyatı", "Gıda ve ilaç lojistiği", "Perakende zincirleri"],
    related: ["80x120-euro-palet", "ikinci-el-palet", "turpal-palet"],
    guides: ["epal-palet-ile-standart-palet-farki", "euro-palet-olculeri", "ikinci-el-palet-alirken-dikkat-edilecekler"],
    sections: [
      {
        h: "EPAL nedir, neden damga önemlidir?",
        p: [
          "EPAL (European Pallet Association), Euro paletin kalite güvence sistemini yöneten kuruluştur. EPAL logosu, yalnızca spesifikasyona uygun üretilen ve düzenli denetlenen paletlerin üzerine konabilir. Logo bir ölçü değil, bir kalite ve lisans işaretidir.",
          "Bu yüzden her 80x120 palet EPAL değildir. Aynı ölçüde, ama damgasız ya da kalitesi farklı çok sayıda palet vardır. Palet havuzuna girecek ya da müşterinizin EPAL takasını isteyeceği işlerde damga mutlaka kontrol edilmelidir.",
        ],
      },
      {
        h: "MEPAL burada ne yapar?",
        p: [
          "MEPAL, EPAL lisanslı üretici değildir. Biz iki alanda çalışırız: EPAL ölçülerinde Euro palet temini ve ikinci el EPAL palet alım satımı. Damgalı ikinci el paletler, kondisyonuna göre sınıflandırılır ve yeniden satışa sunulur.",
          "EPAL damgası bulunmayan paletleri EPAL olarak satmayız. İhtiyacınız tescilli EPAL şartıysa bunu teklif aşamasında belirtin, stoktaki damgalı partiyi birlikte kontrol ederiz.",
        ],
      },
      {
        h: "EPAL ile standart Euro ölçülü palet karşılaştırması",
        table: {
          head: ["Kriter", "Damgalı EPAL", "EPAL ölçülü palet"],
          rows: [
            ["Ölçü", "800 × 1200 mm", "800 × 1200 mm"],
            ["Logo ve lisans", "Var, kontrol edilir", "Yok"],
            ["Palet takası", "Kabul edilir", "Genelde kabul edilmez"],
            ["Maliyet", "Daha yüksek", "Daha uygun"],
            ["Uygun kullanım", "Havuz, ihracat, perakende", "Fabrika içi, tek yön sevkiyat"],
          ],
        },
        links: [["EPAL ile standart palet farkı", "/rehber/epal-palet-ile-standart-palet-farki/"]],
      },
      {
        h: "İkinci el EPAL alırken kontrol listesi",
        list: [
          "EPAL logosu iki yan bloğunda okunuyor mu, sonradan boyanmış mı?",
          "Onarılan tahtalar spesifikasyona uygun mu (tahta kalınlığı, çivi sayısı)?",
          "Bloklarda çatlak ya da ezilme var mı?",
          "Küf, yağ veya kimyasal bulaşma var mı?",
          "Sınıf (1. sınıf / 2. sınıf) net olarak yazılı mı?",
        ],
        links: [
          ["İkinci el palet alırken dikkat edilecekler", "/rehber/ikinci-el-palet-alirken-dikkat-edilecekler/"],
          ["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"],
        ],
      },
      {
        h: "Sipariş süreci",
        steps: [
          "İstediğiniz adedi ve damga şartını (EPAL zorunlu mu, EPAL ölçülü yeterli mi) belirtin.",
          "Stoktaki partiden numune fotoğrafı veya depoda inceleme için randevu alın.",
          "Teklif onayından sonra palet, araç programına göre Gebze deposundan sevk edilir; net süre teklifte bildirilir.",
        ],
        links: [["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "MEPAL EPAL palet üretiyor mu?", a: "Hayır. EPAL tescilli bir markadır ve lisans gerektirir. MEPAL EPAL ölçülerinde Euro palet temin eder ve ikinci el EPAL palet alım satımı yapar." },
      { q: "EPAL paletin ölçüsü nedir?", a: "EPAL 1 (Euro palet) 800 × 1200 × 144 mm'dir, dört yönden çatallanır." },
      { q: "EPAL damgasız Euro palet ihracatta kullanılır mı?", a: "Kullanılabilir; fakat alıcı EPAL takası şart koşuyorsa kabul etmez. Ayrıca ihracat paleti için ISPM-15 ısıl işlem damgası gerekir." },
      { q: "İkinci el EPAL palet güvenli mi?", a: "Kondisyonu uygunsa evet. Sağlam bloklar, eksiksiz tahta ve okunur damga aranır; sınıflandırma bu yüzden önemlidir." },
      { q: "EPAL palet kaç kg taşır?", a: "Dinamik olarak yaklaşık 1.500 kg. Raf üzerinde güvenli yük sistemin kendi sınırına göre belirlenir." },
      { q: "Fiyat nasıl öğrenilir?", a: "Güncel ikinci el fiyat tablosuna bakın ya da adedi yazarak WhatsApp'tan teklif isteyin." },
    ],
  },

  // ───────────────────────── 3. 100x120
  {
    slug: "100x120-palet",
    name: "100x120 Palet",
    title: "100x120 Palet | 1000×1200 mm Ahşap Palet | MEPAL",
    description:
      "100x120 palet: 1000×1200 mm ölçü, kapasite, kullanım alanları ve sıfır/ikinci el seçenekleri. Kimya, ağır sanayi ve ihracat için Gebze'den teslimat.",
    h1: "100x120 Palet — 1000×1200 mm Endüstriyel Ahşap Palet",
    answer:
      "100x120 palet, 1000 × 1200 mm ölçülü, Euro paletten daha geniş ve yüksek yük taşıyan endüstriyel ahşap paletdir. Kimya, boya, ağır sanayi ve ihracat gibi, ürünün 80x120 palete sığmadığı veya daha fazla yük alınmak istendiği işlerde tercih edilir.",
    keyword: "100x120 palet",
    art: "wood",
    blurb: "1000×1200 mm, geniş taban, daha yüksek yük.",
    priceRow: "ahsap-sifir-100x120",
    specs: [
      ["Ölçü", "1000 × 1200 mm"],
      ["Yükseklik", "yaklaşık 144–150 mm"],
      ["Ağırlık", "yaklaşık 25–35 kg"],
      ["Çatal girişi", "4 yönden (blok) veya 2 yönden (kızaklı)"],
      ["Dinamik taşıma", "yaklaşık 1.500 kg ve üzeri, tasarıma göre"],
      ["Malzeme", "Ahşap, çivili"],
      ["Yaygın ad", "UK / sanayi paleti, kimya paleti ölçüsü"],
    ],
    uses: ["Kimya ve boya fabrikaları", "Ağır sanayi ve metal ürünler", "İhracat sevkiyatı", "Torbalı ve çuvallı ürünler"],
    related: ["80x120-euro-palet", "cp-palet", "ihracat-paleti"],
    guides: ["100x120-ile-80x120-palet-farki", "konteynere-ve-tira-kac-palet-sigar", "palet-kac-kg-tasir"],
    sections: [
      {
        h: "100x120 palet nedir?",
        p: [
          "100x120 palet, 1000 mm genişlik ve 1200 mm uzunluk ölçüsüyle Euro paletten yaklaşık yüzde 25 daha geniş bir taban sunar. Torba, bidon, IBC alt gruplar ve ağır koli yüklerinde taşıma yüzeyi artar; ürün palet kenarından taşmaz.",
          "Birçok işletmede 100x120, 80x120'ye göre daha sağlam tahta ve daha kalın blokla üretildiği için dayanıklı olarak bilinir. Yine de her 100x120 palet aynı kalitede değildir; yük, taşıma yöntemi ve istif şekli palet seçimini belirler.",
        ],
      },
      {
        h: "80x120 ile 100x120 karşılaştırması",
        table: {
          head: ["Kriter", "80x120 Euro", "100x120"],
          rows: [
            ["Taban alanı", "0,96 m²", "1,20 m²"],
            ["Tır (13,6 m) tek kat adet", "yaklaşık 33", "yaklaşık 26"],
            ["Ağırlık", "yaklaşık 20–25 kg", "yaklaşık 25–35 kg"],
            ["Tipik kullanım", "Gıda, genel lojistik", "Kimya, ağır sanayi, torba"],
            ["Raf uyumu", "Çok yaygın", "Raf ölçüsüne bağlı"],
          ],
        },
        links: [["100x120 ile 80x120 farkı", "/rehber/100x120-ile-80x120-palet-farki/"]],
      },
      {
        h: "Kullanım alanları",
        list: [
          "Kimya ve boya: bidon ve variller için geniş taban",
          "Ağır sanayi: metal profil, ekipman, otomotiv yedek parça",
          "İhracat: ISPM-15 ısıl işlemli üretimle sevkiyat",
          "Çimento, yem, gübre gibi torbalı ürünler",
        ],
        links: [
          ["Kimya ve plastik sektörü", "/sektorler/kimya-ve-plastik/"],
          ["Otomotiv ve yan sanayi", "/sektorler/otomotiv-ve-yan-sanayi/"],
        ],
      },
      {
        h: "Seçim kriterleri",
        p: ["Palet seçerken sıfır mı ikinci el mi sorusundan önce şu üç noktaya bakın: yük ağırlığı, depolama yöntemi (zemin mi raf mı) ve sevkiyatın yurt içi mi ihracat mı olduğu."],
        list: [
          "Raflı sistemde alt tahta ve kiriş aralığını raf üreticisinin değerlerine göre doğrulayın.",
          "İhracatta ısıl işlem damgası ve kuru malzeme şarttır.",
          "Yalnızca fabrika içinde dolaşacaksa onarılmış ikinci el 100x120 yeterli olabilir.",
        ],
        links: [
          ["Ahşap palet fiyatları", "/ahsap-palet-fiyatlari/"],
          ["Palet seçici aracı", "/araclar/palet-secici/"],
        ],
      },
      {
        h: "Teslimat ve sipariş",
        p: [
          "Gebze deposundaki stok ve araç programına göre sipariş çoğunlukla ertesi iş günü sevk edilir; net süre teklifte bildirilir. Sıfır ve ikinci el seçeneklerin güncel fiyatı adet kademesine göre değişir: güncel fiyat tablosuna bakın veya teklif alın.",
        ],
        links: [["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "100x120 palet kaç kg taşır?", a: "Tasarıma göre değişir; standart yapı genellikle 1.500 kg ve üzerini dinamik olarak taşır. Raf yükü için raf sistemi verisi esas alınmalıdır." },
      { q: "100x120 palet Euro palet midir?", a: "Hayır. Euro palet 80x120'dir. 100x120 ise ayrı bir endüstriyel ölçüdür." },
      { q: "Bir tıra kaç adet 100x120 palet girer?", a: "Standart 13,6 m tırda tek katta yaklaşık 26 adet yerleşir (iki sıra)." },
      { q: "İhracatta 100x120 kullanılır mı?", a: "Evet; ISPM-15 uyumlu, HT damgalı olması gerekir." },
      { q: "Sıfır mı ikinci el mi almalıyım?", a: "Gıda ve ihracatta sıfır, iç lojistik ve depoda onarılmış ikinci el uygun olur." },
      { q: "Fiyat nasıl öğrenilir?", a: "Güncel ahşap palet fiyat tablosuna bakın, ya da WhatsApp'tan adet yazarak teklif alın." },
    ],
  },

  // ───────────────────────── 4. CP palet
  {
    slug: "cp-palet",
    name: "CP Palet (114x114)",
    title: "CP Palet 114x114 | Kimya Paleti Ölçüleri | MEPAL",
    description:
      "CP palet (CP1–CP3) ölçüleri: 114x114 cm CP3, 100x120 CP1, 80x120 CP2. Kimya sektörü için kapasite, seçim ve Gebze'den teslimat.",
    h1: "CP Palet — 114x114 ve Kimya Sektörü Paletleri",
    answer:
      "CP paletler, Avrupa kimya endüstrisinde kullanılan ve CP1'den CP9'a numaralandırılan standart ahşap palet serisidir. En çok sorulan CP3, 1140 × 1140 mm ölçülüdür; CP1 1000×1200 mm, CP2 800×1200 mm'dir. Kimyasal ambalajlar için tasarlanmıştır.",
    keyword: "cp palet",
    art: "cp",
    blurb: "Kimya sektörü paletleri: CP3 1140×1140 mm, CP1 1000×1200 mm.",
    priceRow: "cp-114x114",
    specs: [
      ["CP3 ölçüsü", "1140 × 1140 mm"],
      ["CP1 ölçüsü", "1000 × 1200 mm"],
      ["CP2 ölçüsü", "800 × 1200 mm"],
      ["Yükseklik", "yaklaşık 144–150 mm"],
      ["Çatal girişi", "4 yönden"],
      ["Malzeme", "Ahşap, çivili"],
      ["Yaygın kullanım", "Bidon, torba, IBC alt grupları, kimyasal ambalaj"],
    ],
    uses: ["Kimya ve boya üretimi", "Plastik hammadde torbaları", "Bidon ve kova paletleme", "İhracat sevkiyatı"],
    related: ["100x120-palet", "80x120-euro-palet", "ihracat-paleti"],
    guides: ["cp-paletleri-olcu-tablosu", "100x120-ile-80x120-palet-farki", "ihracatta-palet-ve-ambalaj-kurallari"],
    sections: [
      {
        h: "CP palet nedir?",
        p: [
          "CP, kimya sektöründe geliştirilen standart palet sınıfları için kullanılan ortak addır. Seri CP1, CP2, CP3 diye devam eder; her numara farklı bir taban ölçüsüne ve yük profiline karşılık gelir.",
          "114x114 olarak bilinen CP3, kare tabanı sayesinde paletli yükün dört yönde de aynı dengeyle taşınmasını sağlar. Bidon ve torba dizilimine uygun olduğu için kimya fabrikalarında yaygındır.",
        ],
      },
      {
        h: "CP palet ölçü tablosu",
        table: {
          caption: "En sık kullanılan CP ölçüleri",
          head: ["Tip", "Ölçü (mm)", "Tipik kullanım"],
          rows: [
            ["CP1", "1000 × 1200", "Boya, bidon, torba"],
            ["CP2", "800 × 1200", "Euro ölçüsüyle uyumlu kimya ambalajı"],
            ["CP3", "1140 × 1140", "Kare taban; bidon ve torba"],
          ],
        },
        p: ["CP4 ve üzeri tipler farklı ölçülere sahiptir; ihtiyacınız oradaysa ölçüyü yazarak teklif isteyin."],
        links: [["CP paletleri ölçü tablosu", "/rehber/cp-paletleri-olcu-tablosu/"]],
      },
      {
        h: "Kimya sektöründe palet seçimi",
        list: [
          "Sızıntı riski olan ürünlerde tahta yüzeyi kuru ve düzgün olmalı.",
          "Üst üste istifte bloklar alt-üst hizalı olmalı.",
          "Gıda ve ilaç ham maddesi içeren işlerde sıfır palet tercih edilir.",
          "İhracatta HT damgalı üretim gerekir.",
        ],
        links: [["Kimya ve plastik sektörü", "/sektorler/kimya-ve-plastik/"]],
      },
      {
        h: "Konteyner ve tır yerleşimi",
        p: [
          "1140 × 1140 mm kare taban, 20 ft konteyner genişliğine (yaklaşık 2,35 m) yan yana iki palet sığdırır; uzunlukta beş sıra oturur. Bu da tek katta yaklaşık 10 palet demektir. Gerçek adet yükleme yüksekliği ve konteyner tipine göre değişir; kesin sayıyı hesaplama aracıyla doğrulayın.",
        ],
        links: [["Konteyner palet hesaplama", "/araclar/konteyner-palet-hesaplama/"]],
      },
      {
        h: "Sipariş ve teslimat",
        p: ["Gebze deposundan Dilovası, Gebze OSB ve çevresindeki kimya tesislerine kısa sürede sevk edilir. Stok ve araç programına göre çoğunlukla ertesi iş günü; net süre teklifte bildirilir. Güncel fiyat için fiyat tablosuna bakın."],
        links: [["Palet fiyatları", "/palet-fiyatlari/"], ["Dilovası palet", "/bolge/dilovasi-palet/"]],
      },
    ],
    faq: [
      { q: "CP palet ne demek?", a: "Kimya endüstrisi için tanımlanmış standart palet sınıflarının genel adıdır; CP1, CP2, CP3 gibi numaralanır." },
      { q: "114x114 palet hangi CP'dir?", a: "CP3'tür, ölçüsü 1140 × 1140 mm'dir." },
      { q: "CP1 ile 100x120 aynı mı?", a: "Evet, CP1 ölçüsü 1000 × 1200 mm'dir; 100x120 paletle aynı taban ölçüsüne sahiptir." },
      { q: "CP palet ihracatta kullanılır mı?", a: "Kullanılır; HT damgalı, ISPM-15 uyumlu üretim istenir." },
      { q: "Raflı depoda CP3 olur mu?", a: "Raf kiriş aralığına bağlıdır. Kare tabanda raf uyumu önceden kontrol edilmelidir." },
      { q: "Sipariş vermek için ne gerekir?", a: "CP tipi, adet, sıfır/ikinci el tercihi ve teslim adresi yeterlidir." },
    ],
  },

  // ───────────────────────── 5. İkinci el palet
  {
    slug: "ikinci-el-palet",
    name: "İkinci El Palet",
    title: "İkinci El Palet | Sınıflı, Onarılmış | MEPAL Gebze",
    description:
      "İkinci el palet: 1. ve 2. sınıf Euro ölçülü, 100x120 ve karışık palet. Sınıflandırma, kontrol listesi ve Gebze'den hızlı teslimat.",
    h1: "İkinci El Palet — Sınıflı ve Onarılmış Stok",
    answer:
      "İkinci el palet, daha önce kullanılmış, ayıklanıp onarılmış ve sınıflandırılmış ahşap palettir. Sıfır paletten belirgin biçimde ucuzdur; fabrika içi lojistik, depolama ve kısa mesafe sevkiyatta uygun maliyetli çözümdür. İhracat ve gıda için sıfır palet önerilir.",
    keyword: "ikinci el palet",
    art: "used",
    blurb: "Onarılmış, sınıflandırılmış ikinci el Euro ve 100x120 paletler.",
    priceRow: "euro-ikinci-el-1",
    specs: [
      ["Ölçüler", "800×1200, 1000×1200 mm ve diğer"],
      ["1. sınıf", "Sağlam, onarılmış, tam tahtalı"],
      ["2. sınıf", "Yerli kullanım, görünür aşınma olabilir"],
      ["Çatal girişi", "4 yönlü (Euro tip)"],
      ["Onarım", "Kırık tahta ve blok değişimi"],
      ["Kullanım", "İç lojistik, depo, kısa sevkiyat"],
    ],
    uses: ["Fabrika içi taşıma", "Depolama ve raf alanı", "Tek yön yurt içi sevkiyat", "Maliyet hassas işler"],
    related: ["80x120-euro-palet", "epal-palet", "sifir-ahsap-palet"],
    guides: ["ikinci-el-palet-alirken-dikkat-edilecekler", "palet-kalite-siniflari", "hurda-paletinizi-nasil-degerlendirirsiniz"],
    sections: [
      {
        h: "İkinci el palet nedir?",
        p: [
          "İkinci el palet, bir kez ya da birden çok kez kullanılmış, sonra toplanıp ayıklanan paletlerdir. Kırık tahtalar değiştirilir, çıkık çiviler düzeltilir, bloklar kontrol edilir; ardından kondisyonuna göre sınıflara ayrılır.",
          "Aynı ölçü ve aynı paletin sıfırdan farkı yalnızca görüntü değil, taşıma güvenliğidir. Bu yüzden satın almadan önce sınıfın net tanımlanması gerekir.",
        ],
      },
      {
        h: "Sınıflandırma ve karşılaştırma",
        table: {
          head: ["Kriter", "1. sınıf", "2. sınıf"],
          rows: [
            ["Durum", "Sağlam, onarılmış", "Aşınmış, işlevsel"],
            ["Tahtalar", "Eksiksiz, düzgün", "Farklı kalınlıklar olabilir"],
            ["Raf kullanımı", "Çoğunlukla uygun", "Önerilmez"],
            ["Kullanım", "Depo, sevkiyat", "Yerli, fabrika içi"],
            ["Maliyet", "Orta", "En düşük"],
          ],
        },
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"]],
      },
      {
        h: "Kimlere uygundur?",
        list: [
          "Fabrika içinde ürün taşıyan üretim tesisleri",
          "Raflı olmayan zemin depolama",
          "Yurt içi tek yön sevkiyat yapan firmalar",
          "Palet maliyetini düşürmek isteyen toptancılar",
        ],
        links: [["Palet maliyetini düşürmenin yolları", "/rehber/palet-maliyetini-dusurmenin-yollari/"]],
      },
      {
        h: "Satın almadan önce kontrol",
        list: [
          "Her palette bloklar sağlam ve çatlaksız olmalı.",
          "Tahtalar çürük, küflü veya yağlı olmamalı.",
          "Çiviler tahta yüzeyinden çıkıntı yapmamalı.",
          "İhracat yapacaksanız ikinci el yerine HT damgalı sıfır palet düşünün.",
        ],
        links: [["İkinci el palet alırken dikkat edilecekler", "/rehber/ikinci-el-palet-alirken-dikkat-edilecekler/"]],
      },
      {
        h: "Alım satım, hurda ve takas",
        p: [
          "MEPAL ikinci el paletleri hem satar hem de işletmelerin elindeki kullanılmış paletleri değerlendirir. Elinizde fazla ya da hasarlı palet varsa hurda palet alımı hizmetiyle birlikte stoklarınızı toparlayabilirsiniz. Güncel fiyat için ikinci el fiyat tablosuna bakın.",
        ],
        links: [
          ["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"],
          ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"],
          ["Palet alım satım", "/hizmetler/palet-alim-satim/"],
        ],
      },
    ],
    faq: [
      { q: "İkinci el palet güvenli mi?", a: "Kondisyonu uygunsa evet. Bloklar, tahtalar ve çiviler kontrol edilmiş olmalı; raf kullanımında yalnızca 1. sınıf düşünülmelidir." },
      { q: "1. sınıf ve 2. sınıf arasındaki fark nedir?", a: "1. sınıf daha sağlam ve düzgündür, 2. sınıf yerli kullanım içindir ve görünür aşınma içerebilir." },
      { q: "İkinci el palet ihracatta kullanılır mı?", a: "Önerilmez; ihracatta HT damgalı ISPM-15 uyumlu palet gerekir." },
      { q: "Elimdeki paletleri satabilir miyim?", a: "Evet; adet ve kondisyonu iletirseniz alım için değerlendiririz." },
      { q: "Paletler onarılıyor mu?", a: "Evet; kırık tahta ve blok değişimi yapılır, ardından sınıflandırılır." },
      { q: "Teslimat ne kadar sürer?", a: "Stok ve araç programına göre çoğunlukla ertesi iş günü; net süre teklifte bildirilir." },
    ],
  },

  // ───────────────────────── 6. Sıfır ahşap palet
  {
    slug: "sifir-ahsap-palet",
    name: "Sıfır Ahşap Palet",
    title: "Sıfır Ahşap Palet | Üretim, Ölçü | MEPAL Gebze",
    description:
      "Sıfır ahşap palet: standart, Euro ölçülü, 100x120 ve özel ölçü. Yeni kereste, tahta kalınlığı, kapasite ve teklif. Gebze deposundan teslimat.",
    h1: "Sıfır Ahşap Palet — Yeni Kerestelerden, Gebze'den Teslim",
    answer:
      "Sıfır ahşap palet, hiç kullanılmamış kerestelerden çivilenmiş yeni paletdir. Hafif hizmet standart paletten Euro ölçülü, 100x120 ve özel ölçüye kadar seçenek vardır. Gıda, ihracat ve raf yükü yüksek işlerde ilk tercih sıfır palettir.",
    keyword: "sıfır palet",
    art: "wood",
    blurb: "Yeni kereste, standart ve Euro ölçülü sıfır ahşap paletler.",
    priceRow: "ahsap-sifir-standart",
    specs: [
      ["Standart ölçü", "800 × 1200 mm (hafif hizmet)"],
      ["Diğer ölçüler", "1000×1200, 1140×1140, özel"],
      ["Malzeme", "Çam ve benzeri iğne yapraklı kereste"],
      ["Birleştirme", "Çivili (halkalı veya spiral çivi)"],
      ["Çatal girişi", "2 veya 4 yönlü, modele göre"],
      ["Ağırlık", "yaklaşık 15–30 kg, modele göre"],
      ["Opsiyonel", "Isıl işlem (HT) damgası"],
    ],
    uses: ["Gıda ve ilaç", "İhracat paketleme", "Raflı depo", "Hafif ve orta yük sevkiyatı"],
    related: ["80x120-euro-palet", "ozel-olcu-palet", "ihracat-paleti"],
    guides: ["palet-cesitleri-ve-secimi", "palet-kac-kg-tasir", "ahsap-palet-mi-plastik-palet-mi"],
    sections: [
      {
        h: "Sıfır ahşap palet nedir?",
        p: [
          "Sıfır palet, daha önce kullanılmamış yeni kerestelerden kesilip çivilenen palettir. Tahta kalınlığı, blok sayısı ve çivi türü hedef yüke göre belirlenir. Yüzey temiz ve düz olduğu için paketli ürüne zarar vermez.",
          "Standart hafif hizmet ve Euro ölçülü sıfır palet MEPAL stoğunda bulunur. Standart dışı ölçü ve yük için özel ölçü üretimi mümkündür.",
        ],
      },
      {
        h: "Standart ve Euro ölçülü sıfır palet karşılaştırması",
        table: {
          head: ["Özellik", "Standart sıfır", "Euro ölçülü sıfır"],
          rows: [
            ["Ölçü", "800 × 1200 mm", "800 × 1200 mm"],
            ["Yapı", "Hafif hizmet", "9 bloklu, 4 yönlü"],
            ["Yük", "Hafif–orta", "Orta–ağır"],
            ["Raf kullanımı", "Sınırlı", "Uygun"],
            ["Maliyet", "Daha düşük", "Orta"],
          ],
        },
        links: [["Euro palet", "/urunler/80x120-euro-palet/"]],
      },
      {
        h: "Ne zaman sıfır palet almalı?",
        list: [
          "Gıda ve ilaçla temas eden depolarda",
          "İhracat sevkiyatında (alıcı ülke şartları)",
          "Raflı depolamada",
          "Marka imajının önemli olduğu perakende sevkiyatında",
        ],
        links: [["Gıda sektörü için palet seçimi", "/rehber/gida-sektoru-icin-palet-secimi/"]],
      },
      {
        h: "Kalite ve malzeme",
        p: [
          "Kereste kuru olmalı. Fazla nemli malzeme paletin ağırlaşmasına, çarpılmaya ve küflenmeye neden olur. Çivi cinsi de önemlidir: halkalı veya spiral çivi tahtanın yerinde kalmasını artırır.",
          "İhracat için ısıl işlem damgası gerekiyorsa teklif aşamasında belirtin. MEPAL ISPM-15 uyumlu, HT damgalı palet temin eder.",
        ],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"]],
      },
      {
        h: "Sipariş ve teslimat",
        steps: [
          "Ölçü, adet ve yük bilgisini iletin.",
          "Teklif gelir; güncel fiyat adet kademesine göre değişir, fiyat tablosuna bakabilirsiniz.",
          "Stok ve araç programına göre sevk edilir; çoğunlukla ertesi iş günü, net süre teklifte bildirilir.",
        ],
        links: [["Ahşap palet fiyatları", "/ahsap-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Sıfır palet ile ikinci el arasında ne fark var?", a: "Sıfır palet yeni kereste, tam kapasite ve temiz yüzey sunar. İkinci el ise onarılmış ve daha uygun maliyetlidir." },
      { q: "Sıfır paletler kaç kg taşır?", a: "Modele göre değişir; Euro tipi yaklaşık 1.500 kg dinamik yük taşır, hafif hizmet standart palet daha azını." },
      { q: "Özel ölçü sıfır palet yaptırabilir miyim?", a: "Evet; ölçü ve yük bilgisiyle özel ölçü üretim teklifi alabilirsiniz." },
      { q: "İhracat için uygun mu?", a: "HT damgalı, ISPM-15 uyumlu olarak istenirse uygundur." },
      { q: "Paletler kuru mu teslim edilir?", a: "Kuru kereste hedeflenir; nem şartı varsa teklifte belirtin." },
      { q: "Fiyat nasıl öğrenilir?", a: "Güncel fiyat tablosuna bakın veya WhatsApp'tan teklif isteyin." },
    ],
  },

  // ───────────────────────── 7. Plastik palet
  {
    slug: "plastik-palet",
    name: "Plastik Palet",
    title: "Plastik Palet | Hafif ve Ağır Hizmet | MEPAL",
    description:
      "Plastik palet: hafif ve ağır hizmet, 800×1200 ve 1000×1200 mm. Hijyen, raf uyumu ve ahşapla karşılaştırma. Gebze deposundan teklif.",
    h1: "Plastik Palet — Hijyenik, Uzun Ömürlü, Raf Uyumlu",
    answer:
      "Plastik palet, geri dönüştürülebilir polietilen veya polipropilen malzemeden enjeksiyonla üretilen, çivi ve kıymık içermeyen palettir. Hijyen gereken gıda, ilaç ve kimya işlerinde, yıkanabilir ve uzun ömürlü olduğu için tercih edilir. Ahşaptan başlangıç maliyeti yüksektir.",
    keyword: "plastik palet",
    art: "plastic",
    blurb: "Hafif ve ağır hizmet, 800×1200 ve 1000×1200 mm plastik paletler.",
    priceRow: "plastik-hafif",
    specs: [
      ["Ölçüler", "800×1200 ve 1000×1200 mm"],
      ["Malzeme", "HDPE / PP (geri dönüşümlü olabilir)"],
      ["Hafif hizmet", "Kapalı veya ızgara üst, yaklaşık 5–10 kg"],
      ["Ağır hizmet", "Çelik takviyeli, raf uyumlu"],
      ["Dinamik taşıma", "Modele göre yaklaşık 1.000–2.000 kg"],
      ["Raf yükü", "Modele göre; üretici verisine bakılmalı"],
      ["Çatal girişi", "4 yönlü"],
    ],
    uses: ["Gıda ve içecek", "İlaç ve kozmetik", "Kimya (yıkanabilir yüzey)", "Otomatik depo sistemleri", "Kapalı döngü lojistik"],
    related: ["80x120-euro-palet", "ihracat-paleti", "sifir-ahsap-palet"],
    guides: ["plastik-palet-cesitleri", "ahsap-palet-mi-plastik-palet-mi", "palet-raf-sistemleri-ve-raf-yuku"],
    sections: [
      {
        h: "Plastik palet nedir?",
        p: [
          "Plastik palet, ahşapla aynı işi yapan ama enjeksiyonla kalıplanmış tek parça veya birleştirilmiş yük platformudur. Boyutları standarttır, ağırlığı sabittir ve nemle çürümez. Bu özellikleri otomatik depo ve konveyör sistemlerinde avantaj sağlar.",
          "Hafif hizmet modeller genellikle zemin istifi ve sevkiyat içindir. Ağır hizmet, çelik takviyeli modeller ise raf yükü gerektiren işler için üretilir.",
        ],
      },
      {
        h: "Ahşap ve plastik palet karşılaştırması",
        table: {
          head: ["Kriter", "Ahşap", "Plastik"],
          rows: [
            ["Başlangıç maliyeti", "Düşük", "Yüksek"],
            ["Ömür", "Orta, onarılabilir", "Uzun, onarım zor"],
            ["Hijyen", "Kıymık ve nem sorunu", "Yıkanabilir, emici değil"],
            ["Ağırlık", "Nemle değişir", "Sabit"],
            ["İhracat", "ISPM-15 damga gerekir", "ISPM-15 gerekmez"],
            ["Geri dönüşüm", "Onarım, yakacak", "Malzeme olarak dönüşür"],
          ],
        },
        links: [["Ahşap palet mi plastik palet mi?", "/rehber/ahsap-palet-mi-plastik-palet-mi/"]],
      },
      {
        h: "Hangi modeli seçmeli?",
        list: [
          "Zeminde istif ve sevkiyat için hafif hizmet yeterlidir.",
          "Rafta duracaksa çelik takviyeli ağır hizmet modeli seçin.",
          "Üst yüzey: kapalı üst sızıntı ve hijyen, ızgara üst havalandırma ve drenaj içindir.",
          "Kapalı döngüde (iade edilen) kullanım ömür boyu maliyeti düşürür.",
        ],
        links: [["Plastik palet çeşitleri", "/rehber/plastik-palet-cesitleri/"], ["Palet seçici", "/araclar/palet-secici/"]],
      },
      {
        h: "Ne zaman plastik, ne zaman ahşap?",
        p: [
          "Tek yön sevkiyatta ahşap genelde daha ekonomiktir; palet alıcıda kalır. Plastik, geri dönüşlü ve tekrar kullanılan kapalı döngüde, ayrıca yıkama şartı olan işlerde kendini amorti eder. Ürününüzün raf yükünü üretici tablosundan doğrulayın; ağır hizmet modelde bile raf kiriş aralığına bağlıdır.",
        ],
        links: [["Plastik palet fiyatları", "/plastik-palet-fiyatlari/"]],
      },
      {
        h: "Sipariş ve teslimat",
        p: ["Model, ölçü ve adet bilgisiyle teklif isteyin. Plastik paletler Gebze deposundan stok ve araç programına göre sevk edilir; net süre teklifte bildirilir. Güncel fiyat tablosuna bakın."],
        links: [["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Plastik palet kaç kg taşır?", a: "Modele göre değişir; hafif hizmet modeller daha düşük, çelik takviyeli ağır hizmet modeller 1.000–2.000 kg dinamik yükü taşıyabilir. Üretici verisine bakılmalıdır." },
      { q: "İhracatta ISPM-15 gerekir mi?", a: "Plastik palet ahşap olmadığı için ISPM-15 kapsamında değildir." },
      { q: "Plastik palet raf için uygun mu?", a: "Ağır hizmet çelik takviyeli modeller uygundur; hafif hizmet modeller rafta bükülebilir." },
      { q: "Neden bu kadar pahalı?", a: "Kalıp ve hammadde maliyeti yüksektir; ömrü uzun olduğu için çok kullanımda maliyeti düşer." },
      { q: "Plastik palet yıkanabilir mi?", a: "Evet; emici olmadığı için basınçlı su ile yıkanır." },
      { q: "Hangi ölçüler var?", a: "En yaygını 800×1200 ve 1000×1200 mm'dir." },
    ],
  },

  // ───────────────────────── 8. 145x145
  {
    slug: "145x145-palet",
    name: "145x145 Palet",
    title: "145x145 Palet | Büyük Ölçü Ahşap Palet | MEPAL",
    description:
      "145x145 cm büyük kare palet: ağır makine, cam, mermer ve ekipman sevkiyatı. Yapı, kapasite, konteyner-tır yerleşimi ve özel üretim teklifi.",
    h1: "145x145 Palet — Büyük Kare Ahşap Palet Üretimi",
    answer:
      "145x145 palet, 1450 × 1450 mm ölçülü büyük kare ahşap paletdir. Standart Euro palete sığmayan geniş ve ağır yüklerde (makine parçası, cam, mermer, ekipman, büyük ambalajlar) kullanılır. Genellikle stokta hazır bulunmaz, ihtiyaca göre üretilir.",
    keyword: "145x145 palet",
    art: "big",
    blurb: "1450×1450 mm büyük kare palet; ağır ve geniş yükler için.",
    priceRow: "145x145",
    specs: [
      ["Ölçü", "1450 × 1450 mm"],
      ["Taban alanı", "yaklaşık 2,1 m²"],
      ["Yapı", "Blok veya kızaklı; yüke göre tasarım"],
      ["Çatal girişi", "4 yönlü (blok) veya 2 yönlü (kızaklı)"],
      ["Kapasite", "Tasarıma göre; yük bilgisiyle belirlenir"],
      ["Malzeme", "Kalın kereste, takviyeli tahta"],
      ["Üretim", "Sipariş üzerine, standart dışı ölçü"],
      ["Tır yerleşimi", "tek katta yaklaşık 9 adet (13,6 m tır)"],
    ],
    uses: ["Ağır makine ve ekipman", "Cam ve mermer levha", "Büyük hacimli ambalaj", "Panel, kapı ve plaka malzeme", "Yedek parça ve sanayi sevkiyatı"],
    related: ["ozel-olcu-palet", "100x120-palet", "ahsap-sandik"],
    guides: ["palet-cesitleri-ve-secimi", "konteynere-ve-tira-kac-palet-sigar", "palet-kac-kg-tasir"],
    sections: [
      {
        h: "145x145 palet nedir?",
        p: [
          "145x145 palet, her kenarı 1450 mm olan kare tabanlı ahşap palettir. Standart Euro palet (800 × 1200 mm) yaklaşık 0,96 m² yüzey sunarken 145x145 yaklaşık 2,1 m² yüzey sağlar; yani Euro paletin iki katından fazla alan demektir.",
          "Kare taban, yükün her yönden eşit desteklenmesini ve dört yönden forklift girişi yapılmasını sağlar. Ancak ölçü standart bir Avrupa havuz paleti değildir; üretimi genellikle siparişe göre yapılır ve yükün özelliğine göre tasarlanır.",
        ],
      },
      {
        h: "Neden Euro palet yetmez?",
        p: [
          "Taban alanı büyük ama ağırlığı çok yüksek olmayan ürünlerde (örneğin geniş panel, cam, büyük cihaz kabinleri) Euro palet taşınan yükü kenardan taşırır ve hasar riski doğurur. Taşan yük çatalda ve istifte eğilir. 145x145 bu tür yükleri tek palette toplar.",
          "Ağır makine ve ekipman için ise taban kadar tahta kalınlığı, kızak/blok düzeni ve çivi sıklığı belirleyicidir. Bu nedenle ürünün ağırlığı ve ağırlık merkezi bilinmeden kapasite sözü verilmez.",
        ],
      },
      {
        h: "Euro, 100x120 ve 145x145 karşılaştırması",
        table: {
          head: ["Kriter", "80x120 Euro", "100x120", "145x145"],
          rows: [
            ["Ölçü (mm)", "800 × 1200", "1000 × 1200", "1450 × 1450"],
            ["Taban alanı", "0,96 m²", "1,20 m²", "yaklaşık 2,1 m²"],
            ["Tır (13,6 m) tek kat", "yaklaşık 33", "yaklaşık 26", "yaklaşık 9"],
            ["20 ft konteyner tek kat", "yaklaşık 10–11", "yaklaşık 10", "yaklaşık 4"],
            ["Stok durumu", "Hazır stok", "Hazır stok", "Genelde sipariş üzerine"],
          ],
        },
        p: ["Adetler yaklaşık değerdir; yük yüksekliği, konteyner tipi ve istif şekli sonucu değiştirir. Kesin yerleşim için hesaplama aracını kullanın."],
        links: [["Konteyner palet hesaplama", "/araclar/konteyner-palet-hesaplama/"], ["1 tır kaç palet alır?", "/rehber/1-tir-kac-palet-alir/"]],
      },
      {
        h: "Yerleşim ve taşıma uyarıları",
        list: [
          "Tırın iç genişliği yaklaşık 2,45–2,48 m olduğundan 145x145 palet yan yana iki sıra yapamaz; tek sıra yerleşir ve yan boşluk kalır.",
          "20 ft konteynerde iç genişlik yaklaşık 2,35 m olduğundan palet tek sıra dizilir; uzunlukta yaklaşık 4 palet sığar.",
          "Çatal uzunluğu 1,45 m paleti tam taşımayabilir; forklift çatal boyu ve kapasitesini kontrol edin.",
          "Yük palet kenarından taşmamalı, çeperden sıkı bantlanmalıdır.",
        ],
        links: [["Palet nasıl istiflenir?", "/rehber/palet-nasil-istiflenir/"]],
      },
      {
        h: "Üretim ve sipariş süreci",
        steps: [
          "Yükün ölçüsünü, ağırlığını ve nasıl taşınacağını (forklift, transpalet, vinç) bildirin.",
          "Gerekirse fotoğraf veya çizim iletin; palet tasarımı (blok/kızak, tahta kalınlığı) buna göre belirlenir.",
          "Teklif ve üretim planı iletilir; stok ve üretim programına göre teslim zamanı teklifte yazılır.",
          "Teslimat Gebze deposundan araçla yapılır.",
        ],
        p: ["Fiyat yükün özelliğine ve adede göre değişir; güncel fiyat için teklif alın."],
        links: [["Özel ölçü palet", "/urunler/ozel-olcu-palet/"], ["Teklif al", "/teklif-al/"]],
      },
      {
        h: "Yaygın hatalar",
        list: [
          "Kapasiteyi sormadan sadece ölçüye göre sipariş vermek.",
          "Ağırlık merkezini ve forklift çatal boyunu hesaba katmamak.",
          "Konteyner iç genişliğini kontrol etmeden büyük kare palet planlamak.",
          "Ağır yük için hafif hizmet tasarımı seçmek.",
        ],
      },
    ],
    faq: [
      { q: "145x145 palet kaç kg taşır?", a: "Tek bir sabit değer yoktur; tahta kalınlığı, blok/kızak düzeni ve çiviye göre değişir. Yük ağırlığınızı bildirirseniz ona göre tasarlanır." },
      { q: "145x145 palet stokta var mı?", a: "Genellikle siparişe göre üretilir. Güncel durum için WhatsApp'tan sorabilirsiniz." },
      { q: "Bir tıra kaç adet 145x145 palet sığar?", a: "13,6 m tırda tek katta yaklaşık 9 adet. Yan yana iki sıra mümkün değildir." },
      { q: "Konteynere sığar mı?", a: "Sığar; 20 ft konteynerde tek katta yaklaşık 4, 40 ft konteynerde yaklaşık 8 adet yerleşir. Kesin sayı için hesaplama aracına bakın." },
      { q: "İhracatta kullanılır mı?", a: "Evet; HT damgalı, ISPM-15 uyumlu olarak istenirse kullanılır." },
      { q: "Neden Euro palet iki kat değil?", a: "Çünkü tek palet daha geniştir; bu, tek hamlede daha fazla yük taşır ama yerleşim ve forklift kapasitesi şartları getirir." },
    ],
  },

  // ───────────────────────── 9. Turpal
  {
    slug: "turpal-palet",
    name: "Turpal Palet",
    title: "Turpal Palet Nedir? Lisans, Ölçü, Temin | MEPAL",
    description:
      "Turpal palet nedir? Standart Palet Derneği'nin garanti markası, lisans yapısı, ölçüler ve doğru palet seçimi. MEPAL lisanslı üretici değildir.",
    h1: "Turpal Palet — Nedir, Kim Üretebilir, Nasıl Seçilir?",
    answer:
      "Turpal, Standart Palet Derneği'nin Türk Patent ve Marka Kurumu'nda garanti markası olarak tescil ettirdiği palet kalite sistemidir. Yalnızca lisans alan üretici ve tadilatçılar Turpal damgalı palet üretebilir. MEPAL Turpal lisanslı üretici değildir; Turpal ölçülerine uygun palet ihtiyacınızı birlikte değerlendirir.",
    keyword: "turpal palet",
    art: "euro",
    blurb: "Turpal garanti markası, lisans yapısı ve doğru palet seçimi.",
    specs: [
      ["Statüsü", "Tescilli garanti markası (Standart Palet Derneği)"],
      ["Lisans", "Üreticiye özel lisans kodu; dernek denetimi"],
      ["Yaygın ölçüler", "600×800 ve 800×1200 mm"],
      ["Yapı", "Standart blok palet düzeni (lisans şartnamesine göre)"],
      ["Damga", "Turpal logosu ve lisans kodu"],
      ["Yurt içi kullanım", "Palet havuzu, takas, perakende zincirleri"],
      ["MEPAL durumu", "Lisanslı üretici değil; ikinci el alım satım ve yönlendirme"],
    ],
    uses: ["Yurt içi palet havuzu ve takas", "Perakende ve market zincirleri", "Büyük gıda üreticilerinin sevkiyatı", "Kalite şartı koşan alıcılar"],
    related: ["epal-palet", "80x120-euro-palet", "ikinci-el-palet"],
    guides: ["epal-palet-ile-standart-palet-farki", "palet-kalite-siniflari", "palet-havuzu-ve-palet-kiralama"],
    sections: [
      {
        h: "Turpal nedir?",
        p: [
          "Turpal, Türkiye'de palet üretimi ve satışında standart oluşturmak amacıyla Standart Palet Derneği tarafından yürütülen bir kalite ve lisans sistemidir. Dernek, Turpal adını Türk Patent ve Marka Kurumu'nda garanti markası olarak tescil ettirmiştir. Yani Turpal bir ölçü adı değil, bir marka ve belgelendirme sistemidir.",
          "Sistemde lisans alan üreticiler ve tadilatçılar, dernekçe belirlenen şartnameye uygun palet üretir ve onarır; her işletmeye ayrı bir lisans kodu tahsis edilir. Dernek lisanslı imalatçı ve tadilatçı listelerini güncel tutar.",
        ],
      },
      {
        h: "Markalı ve lisanslı: ne anlama gelir?",
        p: [
          "Turpal markasını ve damgasını kullanabilmek için lisans gerekir. Lisansı olmayan bir firma Turpal damgalı palet üretemez veya satamaz. Aynı şekilde EPAL de tescilli bir markadır; ancak EPAL Avrupa çapında, Turpal ise Türkiye odaklı bir sistemdir. İki sistem birbirinin yerine geçmez.",
          "MEPAL Turpal lisanslı üretici değildir ve bu markayı kullanarak palet üretmez. Ürün sayfamızda anlattığımız, Turpal sistemini tanıtmak ve alıcıyı doğru ürüne yönlendirmektir. Müşterinizin Turpal damgalı palet şartı varsa, bunu teklif aşamasında belirtin; damgalı stok varsa ona göre, yoksa lisanslı üreticiye yönlendirme ya da uygun alternatif sunarız.",
        ],
        links: [["EPAL ve standart palet farkı", "/rehber/epal-palet-ile-standart-palet-farki/"]],
      },
      {
        h: "Turpal, EPAL ve standart paletin karşılaştırması",
        table: {
          head: ["Kriter", "Turpal", "EPAL", "Damgasız standart palet"],
          rows: [
            ["Kuruluş", "Standart Palet Derneği (Türkiye)", "EPAL (Avrupa)", "Yok"],
            ["Marka durumu", "Tescilli garanti markası", "Tescilli marka", "Yok"],
            ["Lisans", "Üreticiye özel kod", "Üreticiye özel lisans", "Yok"],
            ["Coğrafya", "Yurt içi ağırlıklı", "Avrupa, ihracat", "Her yer"],
            ["Takas/havuz", "Turpal ağında", "EPAL ağında", "Yok"],
            ["Maliyet", "Orta", "Orta–yüksek", "En düşük"],
          ],
        },
      },
      {
        h: "Turpal damgalı palet ne zaman gerekir?",
        list: [
          "Alıcı, sözleşmede Turpal veya muadili kalite şartı koyduysa",
          "Palet takası ve havuzlama yapan yurt içi zincirlerde",
          "Büyük perakendeci ve market tedarikinde",
          "Tek tip kalite beklenen, tekrar eden sevkiyatlarda",
        ],
        p: ["Şart yoksa, aynı ölçüde onarılmış veya sıfır standart palet çoğu iç lojistik işi için yeterlidir ve maliyeti düşürür."],
        links: [["Palet havuzu ve palet kiralama", "/rehber/palet-havuzu-ve-palet-kiralama/"]],
      },
      {
        h: "Damga ve lisans nasıl doğrulanır?",
        steps: [
          "Paletin üzerindeki Turpal logosunu ve lisans kodunu okuyun.",
          "Kodun, Standart Palet Derneği'nin güncel lisanslı imalatçı/tadilatçı listesinde olup olmadığını dernekten sorgulayın.",
          "Damgalar eksikse, silinmişse veya sonradan boyanmışsa partiyi damgalı kabul etmeyin.",
          "Tedarikçiden lisans belgesinin kopyasını isteyin.",
        ],
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"]],
      },
      {
        h: "Sipariş ve teslimat",
        p: [
          "Turpal ölçülerinde ya da benzer standartta palete ihtiyacınız varsa adet ve şartnameyi WhatsApp'tan iletin. Stok durumuna göre ikinci el ve sıfır alternatifleri sunarız. Fiyat Turpal damgası şartına göre değişir; güncel fiyat tablosuna bakın veya teklif alın.",
        ],
        links: [["Palet fiyatları", "/palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Turpal nedir?", a: "Standart Palet Derneği'nin Türk Patent ve Marka Kurumu'nda garanti markası olarak tescil ettirdiği palet kalite ve lisans sistemidir." },
      { q: "MEPAL Turpal palet üretiyor mu?", a: "Hayır. MEPAL Turpal lisanslı üretici değildir. Turpal şartlı işlerde damgalı stok ya da uygun alternatifi birlikte değerlendiririz." },
      { q: "Turpal ile EPAL aynı mı?", a: "Hayır. EPAL Avrupa Palet Birliği'nin, Turpal ise Standart Palet Derneği'nin markasıdır. İkisi de lisansa bağlıdır." },
      { q: "Turpal paletin ölçüsü nedir?", a: "Kaynaklarda en sık 600×800 ve 800×1200 mm geçer. Kesin şartname için Standart Palet Derneği'ne başvurulmalıdır." },
      { q: "Turpal damgalı palet ihracatta kullanılır mı?", a: "İhracatta asıl şart ISPM-15 ısıl işlem damgasıdır; alıcı ayrıca EPAL ya da başka şart koyabilir." },
      { q: "Turpal palet zorunlu mu?", a: "Yasal bir zorunluluk değildir; sözleşme veya alıcı şartı varsa gerekir." },
    ],
  },

  // ───────────────────────── 10. Özel ölçü
  {
    slug: "ozel-olcu-palet",
    name: "Özel Ölçü Palet",
    title: "Özel Ölçü Palet Üretimi | Ahşap Palet | MEPAL",
    description:
      "Özel ölçü palet üretimi: ürününüze göre ölçü, yük ve tasarım. Ahşap, takviyeli, kızaklı veya bloklu yapı. Gebze'den teklif ve teslimat.",
    h1: "Özel Ölçü Palet Üretimi — Ürününüze Göre Tasarım",
    answer:
      "Özel ölçü palet, standart ölçülere uymayan ürünler için siparişe göre ölçülendirilen ahşap paletdir. Ürün ölçüsü, ağırlığı, taşıma yöntemi ve istif şekline göre tahta kalınlığı, blok/kızak düzeni ve takviye belirlenir. Teklif için ölçü ve ağırlık bilgisi yeterlidir.",
    keyword: "özel ölçü palet",
    art: "custom",
    blurb: "Standart dışı ürünler için siparişe özel ölçü ve yük tasarımı.",
    priceRow: "ozel-olcu",
    specs: [
      ["Ölçü", "Ürüne göre, talebe özel"],
      ["Yapı", "Blok veya kızaklı"],
      ["Takviye", "Ek tahta, çapraz, kalın kereste"],
      ["Malzeme", "Kereste; talebe göre HT damgalı"],
      ["Çatal girişi", "2 veya 4 yönlü"],
      ["Gerekli bilgi", "Ürün ölçüsü, ağırlık, taşıma yöntemi"],
      ["Üretim", "Siparişe göre, stok dışı"],
    ],
    uses: ["Standart dışı ürün ölçüleri", "Makine, ekipman, cam", "Uzun profil ve boru", "Özel ambalajlı ihracat ürünleri"],
    related: ["145x145-palet", "ahsap-sandik", "ihracat-paleti"],
    guides: ["palet-cesitleri-ve-secimi", "palet-kac-kg-tasir", "palet-yuksekligi-kac-cm"],
    sections: [
      {
        h: "Özel ölçü palet ne zaman gerekir?",
        p: [
          "Ürününüz Euro (800 × 1200 mm) ya da 100x120 paletin üzerinde taşıyorsa, yan kenardan çıkıyorsa veya palet üzerinde fazla boşluk kalıyorsa özel ölçü düşünülmelidir. Doğru ölçülü palet, hem hasarı azaltır hem tır ve konteynerde alanı verimli kullanır.",
          "Ölçüyü belirlerken ürün tabanı ile palet tabanı arasındaki oran önemlidir: ürün paletten taşmamalı, ancak palet de ürüne göre gereksiz büyük olmamalıdır.",
        ],
      },
      {
        h: "Tasarımı etkileyen parametreler",
        table: {
          head: ["Parametre", "Neden önemli"],
          rows: [
            ["Ürün ağırlığı", "Tahta kalınlığı ve blok sayısını belirler"],
            ["Ağırlık dağılımı", "Tekil noktasal yük ek takviye gerektirir"],
            ["Taşıma yöntemi", "Forklift, transpalet, vinç: çatal girişi tasarımı"],
            ["İstif yüksekliği", "Üst üste yükte alt palet dayanımı"],
            ["Depolama", "Zemin mi raf mı: raf kiriş aralığı"],
            ["İhracat", "ISPM-15 damga ve konteyner iç ölçüsü"],
          ],
        },
        links: [["Palet çeşitleri ve seçimi", "/rehber/palet-cesitleri-ve-secimi/"]],
      },
      {
        h: "Blok mu kızak mı?",
        list: [
          "Blok tip: dört yönden çatal girişi, daha çok yönlü kullanım",
          "Kızaklı tip: iki yönden giriş, basit yapı, genelde tek yön sevkiyat",
          "Ağır tekil yüklerde kalın kızak veya takviye çapraz",
          "Uzun ürünlerde yük boyunca uzanan destek hatları",
        ],
      },
      {
        h: "Sipariş süreci",
        steps: [
          "Ürün ölçülerini (en, boy, yükseklik) ve ağırlığını iletin.",
          "Taşıma ve depolama yöntemini (forklift, raf, ihracat) belirtin.",
          "Gerekirse fotoğraf veya çizim gönderin.",
          "Tasarım onayı ve teklif sonrası üretim yapılır; teslim zamanı teklifte yazılır.",
        ],
        p: ["Özel ölçü palet fiyatı tek bir tabloya bağlı değildir; ölçüye, adede ve yüke göre teklif verilir. Güncel fiyat için teklif alın."],
        links: [["Teklif al", "/teklif-al/"], ["Palet danışmanı", "/araclar/palet-danismani/"]],
      },
      {
        h: "Sık yapılan hatalar",
        list: [
          "Ağırlığı bildirmeden sadece ölçü vermek",
          "İstif yüksekliği ve alt palet dayanımını hesaba katmamak",
          "Konteyner iç ölçüsünü kontrol etmeden ölçü belirlemek",
          "İhracat için gereken HT damgasını sonradan hatırlamak",
        ],
        links: [["Konteynere ve tıra kaç palet sığar?", "/rehber/konteynere-ve-tira-kac-palet-sigar/"]],
      },
    ],
    faq: [
      { q: "Minimum sipariş adedi nedir?", a: "Ölçüye ve tasarıma göre değişir; adet bilgisiyle teklif isteyin." },
      { q: "Ölçü verirken hangi bilgileri iletmeliyim?", a: "Ürün ölçüsü, ağırlık, taşıma yöntemi (forklift, transpalet), istif yüksekliği ve ihracat olup olmadığı." },
      { q: "Üretim ne kadar sürer?", a: "Ölçü ve adede göre değişir; teklifte üretim ve teslim zamanı yazılır." },
      { q: "Özel ölçü paletler ihracatta kullanılabilir mi?", a: "Evet; HT damgalı, ISPM-15 uyumlu olarak istenebilir." },
      { q: "Çizim olmadan sipariş verilir mi?", a: "Evet; ölçü ve ağırlık yeterlidir, fotoğraf ise işi hızlandırır." },
      { q: "Fiyat nasıl belirlenir?", a: "Ölçü, tahta kalınlığı, adet ve takviyeye göre teklif hazırlanır." },
    ],
  },

  // ───────────────────────── 11. İhracat paleti
  {
    slug: "ihracat-paleti",
    name: "İhracat Paleti (ISPM-15)",
    title: "İhracat Paleti | ISPM-15 HT Damgalı | MEPAL",
    description:
      "ISPM-15 uyumlu, HT damgalı ihracat paleti temini: damga şartları, ısıl işlem, kontrol listesi ve Gebze'den teslimat. Ücretsiz teklif alın.",
    h1: "İhracat Paleti — ISPM-15 Uyumlu, HT Damgalı Palet",
    answer:
      "İhracat paleti, ISPM-15 standardına uygun olarak ısıl işlem (HT) görmüş ve üzerinde IPPC damgası bulunan ahşap paletdir. Ahşap ambalaj kullanan çoğu ülke bu damgayı arar. MEPAL, ISPM-15 uyumlu, HT damgalı ihracat paleti temin eder.",
    keyword: "ihracat paleti",
    art: "ispm",
    blurb: "ISPM-15 uyumlu, HT damgalı ihracat paleti temini.",
    priceRow: "ihracat-ispm15",
    specs: [
      ["Standart", "ISPM-15 (IPPC)"],
      ["İşlem", "Isıl işlem (HT): çekirdekte en az 56 °C, en az 30 dk"],
      ["Damga", "IPPC logosu, ülke kodu, üretici kodu, HT"],
      ["Yaygın ölçü", "800×1200 mm (diğer ölçüler talebe göre)"],
      ["Malzeme", "Ahşap, kabuk şartlarına uygun"],
      ["Alternatif", "Plastik palet (ISPM-15 kapsamı dışı)"],
      ["MEPAL durumu", "Uyumlu, damgalı palet temini; kendi fırını yok"],
    ],
    uses: ["Avrupa, ABD, Orta Doğu ihracatı", "Konteyner sevkiyatı", "Ağır sanayi ürünleri", "Gıda ve tekstil ihracatı"],
    related: ["80x120-euro-palet", "ahsap-sandik", "plastik-palet"],
    guides: ["ispm-15-nedir", "ihracatta-palet-ve-ambalaj-kurallari", "konteynere-ve-tira-kac-palet-sigar"],
    sections: [
      {
        h: "ISPM-15 nedir?",
        p: [
          "ISPM-15, Uluslararası Bitki Koruma Sözleşmesi'nin (IPPC) ahşap ambalaj malzemesi için belirlediği uluslararası standarttır. Amaç, ahşapla birlikte zararlı böceklerin ülkeler arasında taşınmasını önlemektir. Palet, sandık, takoz gibi ham ahşap ambalajlar kapsama girer.",
          "Standardın kabul ettiği temel işlem ısıl işlemdir (HT): ahşabın çekirdek sıcaklığı en az 56 °C'ye ulaşıp en az 30 dakika korunur. Metil bromür ile fumigasyon da standartta yer alır, ancak birçok ülke ve işletme ısıl işlemi tercih eder.",
        ],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"]],
      },
      {
        h: "Damgada ne yazar?",
        p: ["Uyumlu palette görünür, kalıcı bir damga bulunur ve şu öğeleri içerir:"],
        list: [
          "IPPC logosu (başak sembolü)",
          "Ülke kodu (Türkiye için TR)",
          "İşlemi yapan firmanın kayıt kodu",
          "İşlem türü: HT (ısıl işlem)",
        ],
      },
      {
        h: "MEPAL ihracat paletinde ne yapar?",
        p: [
          "MEPAL kendi fırınında ısıl işlem yapmaz. Biz ISPM-15 uyumlu, HT damgalı paleti temin ederiz ve sevkiyata hazır hâle getiririz. Damga ve işlem sorumluluğu belgeli işlem yapan firmaya aittir; alıcının talep ettiği belge ya da damga bilgisini teklif aşamasında iletmenizi isteriz.",
        ],
      },
      {
        h: "İhracat öncesi kontrol listesi",
        list: [
          "Damga net okunuyor mu, her palette var mı?",
          "Kereste kuru mu, kabuk kalıntısı alıcı ülke şartına uygun mu?",
          "Palet ölçüsü konteyner ve tır düzenine uygun mu?",
          "Alıcı EPAL ya da başka ek şart koştu mu?",
          "Ahşap yerine plastik palet kabul ediliyorsa ISPM-15 gerekmez; bunu alıcıyla netleştirin.",
        ],
        links: [["İhracatta palet ve ambalaj kuralları", "/rehber/ihracatta-palet-ve-ambalaj-kurallari/"], ["Konteyner palet hesaplama", "/araclar/konteyner-palet-hesaplama/"]],
      },
      {
        h: "Sipariş ve teslimat",
        steps: [
          "Palet ölçüsü, adet ve hedef ülkeyi iletin.",
          "Teklif gelir; güncel fiyat için ihracat paleti satırına bakabilirsiniz.",
          "Stok ve araç programına göre Gebze deposundan sevk edilir; net süre teklifte bildirilir.",
        ],
        links: [["Palet fiyatları", "/palet-fiyatlari/"], ["İhracat ve lojistik sektörü", "/sektorler/ihracat-ve-lojistik/"]],
      },
    ],
    faq: [
      { q: "ISPM-15 nedir?", a: "Ahşap ambalaj malzemesinin zararlı taşımasını önlemek için IPPC'nin belirlediği uluslararası standarttır; ısıl işlem veya fumigasyon gerektirir." },
      { q: "MEPAL ısıl işlemi kendisi mi yapıyor?", a: "Hayır. MEPAL ISPM-15 uyumlu, HT damgalı palet temin eder; ısıl işlem belgeli işlem yapan firmada gerçekleşir." },
      { q: "Damgasız palet ihracatta gider mi?", a: "Ahşap ambalaj kabul eden ülkelerin çoğunda gümrükte sorun çıkabilir. Damgasız gönderim önerilmez." },
      { q: "Plastik palet için ISPM-15 gerekir mi?", a: "Hayır; ISPM-15 yalnızca ham ahşap ambalajı kapsar." },
      { q: "Hangi ölçüler mevcut?", a: "Yaygın olan 800×1200 mm; diğer ölçüler talebe göre." },
      { q: "Teslimat süresi nedir?", a: "Stok ve araç programına göre değişir; net süre teklifte bildirilir." },
    ],
  },

  // ───────────────────────── 12. Ahşap sandık
  {
    slug: "ahsap-sandik",
    name: "Ahşap Sandık",
    title: "Ahşap Sandık | İhracat ve Makine Sandığı | MEPAL",
    description:
      "Ahşap sandık: makine, ekipman ve ihracat için kapalı veya kafes sandık. ISPM-15 uyumlu, ölçüye özel. Gebze'den teklif ve teslimat.",
    h1: "Ahşap Sandık — Makine ve İhracat Ambalajı",
    answer:
      "Ahşap sandık, ürünün darbe, nem ve istif hasarına karşı korunduğu ahşap ambalajdır. Makine, ekipman, cam ve değerli ürünlerin yurt içi ve ihracat sevkiyatında kullanılır. Ölçüye özel yapılır; ihracat için ISPM-15 uyumlu, HT damgalı olarak istenebilir.",
    keyword: "ahşap sandık",
    art: "crate",
    blurb: "Makine ve ihracat için ölçüye özel kapalı veya kafes sandık.",
    specs: [
      ["Tip", "Kapalı sandık, kafes (çerçeveli) sandık"],
      ["Taban", "Palet veya kızaklı taban"],
      ["Ölçü", "Ürüne özel"],
      ["Malzeme", "Kereste, kontrplak veya OSB panel"],
      ["Takviye", "Köşe ve çapraz destekler"],
      ["İhracat", "ISPM-15 uyumlu, HT damgalı kereste"],
      ["Opsiyonel", "Su geçirmez örtü, nem alıcı, iç ped"],
    ],
    uses: ["Makine ve ekipman sevkiyatı", "İhracat ürünleri", "Cam, seramik, kırılgan eşya", "Değerli veya hassas cihazlar"],
    related: ["ihracat-paleti", "ozel-olcu-palet", "145x145-palet"],
    guides: ["ihracatta-palet-ve-ambalaj-kurallari", "ispm-15-nedir", "palet-cesitleri-ve-secimi"],
    sections: [
      {
        h: "Ahşap sandık nedir?",
        p: [
          "Ahşap sandık, bir palet tabanı üzerine kurulmuş, yan ve üst yüzeyleri tahta, kontrplak veya OSB ile kapatılmış ambalajdır. Paletin yalnızca taşıma işlevini sandığın koruma işleviyle birleştirir. Bu nedenle özellikle makine ve ekipman gibi tek parçalı, hasara duyarlı ürünlerde yaygın kullanılır.",
        ],
      },
      {
        h: "Sandık tipleri",
        table: {
          head: ["Tip", "Yapı", "Ne zaman"],
          rows: [
            ["Kapalı sandık", "Tüm yüzler kaplı", "Nem, toz ve darbe koruması gereken ürünler"],
            ["Kafes sandık", "Çerçeve ve aralıklı tahta", "Ağır ve büyük ürünler, havalandırma gereken yük"],
            ["Çerçeve (iskelet)", "Köşe ve üst çerçeve", "Palete oturan ürünü sabitleme"],
            ["Katlanır kutu", "Yeniden kullanılabilir", "Dönüşlü lojistik"],
          ],
        },
      },
      {
        h: "İhracatta ahşap sandık",
        p: [
          "Ham kerestelerden yapılan sandıklar, paletler gibi ISPM-15 kapsamındadır; ısıl işlem (HT) görmüş ve damgalı olmaları gerekir. Kontrplak ve OSB gibi işlenmiş ahşap paneller ise genellikle bu kapsamın dışındadır. Alıcı ülkenin şartını önceden kontrol edin.",
          "MEPAL kendi fırınında ısıl işlem yapmaz; ISPM-15 uyumlu, HT damgalı kereste ile sandık temin eder.",
        ],
        links: [["İhracat paleti", "/urunler/ihracat-paleti/"], ["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"]],
      },
      {
        h: "Doğru sandık için bilgiler",
        list: [
          "Ürünün ölçüsü (en, boy, yükseklik) ve ağırlığı",
          "Ağırlık merkezi ve taşıma noktaları",
          "Nakliye şekli: karayolu, deniz, hava",
          "Nem ve darbe koruma ihtiyacı",
          "Hedef ülke ve ISPM-15 şartı",
        ],
        links: [["Özel ölçü palet", "/urunler/ozel-olcu-palet/"]],
      },
      {
        h: "Sipariş ve teslimat",
        steps: [
          "Ürün ölçüsü, ağırlığı ve sevkiyat şeklini iletin.",
          "Sandık tipi ve malzeme önerisi ile teklif hazırlanır.",
          "Üretim sonrası Gebze deposundan teslim edilir; süre ölçü ve adede göre teklifte yazılır.",
        ],
        p: ["Sandık fiyatı ölçüye, malzemeye ve adede göre değişir; sabit bir liste yoktur. Teklif alın."],
        links: [["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Ahşap sandık ölçüye özel mi yapılır?", a: "Evet; ürüne göre ölçülendirilir." },
      { q: "İhracat sandığı için ISPM-15 gerekir mi?", a: "Ham kereste kullanılıyorsa evet; HT damgalı olması gerekir. Kontrplak ve OSB ise genelde kapsam dışıdır." },
      { q: "Kapalı sandık mı kafes mi?", a: "Nem ve toz koruması gerekiyorsa kapalı, ağır ve büyük ürünlerde kafes sandık daha uygundur." },
      { q: "Sandık palet yerine geçer mi?", a: "Sandık bir palet tabanı üzerinde kurulur; koruma işlevi paletten fazladır." },
      { q: "Su geçirmezlik sağlanır mı?", a: "Evet; örtü ve nem alıcı gibi ek önlemler talebe göre eklenir." },
      { q: "Fiyat nasıl öğrenilir?", a: "Ölçü ve adet bilgisiyle WhatsApp'tan teklif isteyin." },
    ],
  },

  // ───────────────────────── 13. Takozlu palet
  {
    slug: "takozlu-palet",
    name: "Takozlu Palet",
    title: "Takozlu Palet Nedir, Nerede Kullanılır | MEPAL",
    description:
      "Takozlu palet: blok (takoz) ayaklı yapı, dört yönden çatal girişi, taşıma kapasitesi ve ayaklı paletten farkı. Gebze depodan toplu temin için teklif alın.",
    h1: "Takozlu Palet — Dört Yönden Çatallanabilen Blok Ayaklı Palet",
    answer:
      "Takozlu palet, alt ve üst tahtaları kare veya dikdörtgen ahşap bloklar (takozlar) üzerinde taşıyan paletdir. Dört yönden transpalet ve forklift girişine izin verir; yük dağılımı, kenar dayanımı ve istif kararlılığı bakımından ayaklı (kızaklı) paletlerden daha dengelidir. Ölçüye ve yüke göre Gebze deposundan temin edilir.",
    keyword: "takozlu palet",
    art: "wood",
    blurb: "Blok (takoz) ayaklı, dört yönden çatallanabilen ahşap palet.",
    specs: [
      ["Yapı", "Üst ve alt tahta, aralarında ahşap takozlar (bloklar)"],
      ["Çatal girişi", "4 yönden"],
      ["Takoz sayısı", "Tipik olarak 9 (bazı tiplerde 6 veya 12)"],
      ["Yaygın ölçüler", "800 × 1200, 1000 × 1200, özel ölçü"],
      ["Malzeme", "Ahşap (çam/kayın ağırlıklı); çivili"],
      ["Taşıma kapasitesi", "Tahta kalınlığına ve takoz düzenine göre değişir"],
      ["İhracat uyumu", "HT damgalı ısıl işlemli seçenek istenebilir"],
    ],
    uses: ["Forklift ve transpaletle yoğun depo hareketi", "Raflı depolama sistemleri", "Ağır ve dengesiz yükler", "Otomatik istif ve konveyör hatları"],
    related: ["80x120-euro-palet", "100x120-palet", "ozel-olcu-palet", "isil-islemli-palet"],
    guides: ["palet-cesitleri-ve-secimi", "euro-palet-olculeri", "palet-kalite-siniflari"],
    sections: [
      {
        h: "Takozlu palet nedir?",
        p: [
          "Takozlu palet, iki tahta katman arasına yerleştirilen ahşap bloklarla (takozlarla) ayakta duran palet türüdür. Bloklar arasında kalan boşluklar iki yönde de açık olduğu için çatal palete her kenardan girebilir.",
          "Euro ölçülü palet de takoz üzerine kurulu bir palettir; ancak takozlu palet daha geniş bir kavramdır. Euro palet tek bir ölçü ve spesifikasyon iken takozlu palet, farklı ölçü ve tahta kalınlığında üretilebilir.",
        ],
      },
      {
        h: "Takozlu palet ile ayaklı (kızaklı) palet farkı",
        p: ["Seçim yaparken iki yapı arasındaki temel fark şudur; yükünüze ve depo ekipmanınıza göre karar verin."],
        table: {
          caption: "Takozlu ve kızaklı palet karşılaştırması",
          head: ["Özellik", "Takozlu palet", "Kızaklı (ayaklı) palet"],
          rows: [
            ["Çatal girişi", "4 yönden", "Çoğunlukla 2 yönden"],
            ["Yük dağılımı", "Daha dengeli", "Kızak hattına bağlı"],
            ["İstif kararlılığı", "Yüksek", "Orta"],
            ["Maliyet", "Genellikle biraz yüksek", "Genellikle daha düşük"],
            ["Tipik kullanım", "Depo, raf, ağır yük", "Tek yönlü sevkiyat, hafif yük"],
          ],
        },
      },
      {
        h: "Kimler için uygun?",
        list: [
          "Sık forklift ve transpalet hareketi olan depolar",
          "Raf sistemine giren ve çıkan yükler",
          "Üst üste istiflenen ağır koliler, kasalar ve makine parçaları",
          "Ölçüsü standart dışı ürün gönderen üreticiler",
        ],
        links: [
          ["80x120 Euro palet", "/urunler/80x120-euro-palet/"],
          ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"],
        ],
      },
      {
        h: "Takozlu palet alırken nelere bakılır?",
        list: [
          "Takozlar tahtaya sağlam çivilenmiş, çatlamamış ve hizalı olmalı.",
          "Tahta kalınlığı yüke uygun olmalı; ince tahta ağır yükte esner.",
          "Palet düz oturmalı, bir köşesi sallanmamalı.",
          "Nem yüksekse ağırlık artar ve küf riski doğar; kuru malzeme tercih edin.",
          "İhracat yapıyorsanız HT damgalı ısıl işlemli ürün isteyin.",
        ],
        links: [["Isıl işlemli palet", "/urunler/isil-islemli-palet/"]],
      },
      {
        h: "Fiyatı ne belirler?",
        p: [
          "Takozlu palet fiyatı ölçüye, tahta kalınlığına, takoz sayısına, ahşap cinsine ve adede göre değişir. Sıfır ya da ikinci el olması da etkiler. Sabit bir liste yerine ölçünüze göre teklif hazırlanır.",
          "Standart ölçülerdeki güncel kademeli rakamlar için fiyat tablosuna bakabilirsiniz; farklı ölçü için teklif alın.",
        ],
        links: [["Palet fiyatları", "/palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
      {
        h: "Sipariş nasıl verilir?",
        steps: [
          "Ölçü, yük ağırlığı, adet ve kullanım şeklini WhatsApp veya teklif formuyla bildirin.",
          "Stok durumuna ve araç programına göre teklif hazırlanır; net süre teklifte yazılır.",
          "Palet Gebze deposundan araçla teslim edilir; Türkiye genelinde sevkiyat planlanabilir.",
        ],
      },
    ],
    faq: [
      { q: "Takozlu palet ile Euro palet aynı mı?", a: "Euro ölçülü palet de takozlu yapıdadır; ancak takozlu palet daha geniş bir gruptur. Euro palet 800×1200 mm ölçü ve belirli spesifikasyonla anılır, takozlu palet ise farklı ölçülerde yapılabilir." },
      { q: "Takozlu palet kaç kg taşır?", a: "Kapasite tahta kalınlığına, takoz düzenine ve ahşabın kalitesine göre değişir. Yükünüzün ağırlığını bildirirseniz uygun yapıyı öneririz." },
      { q: "Takozlu palet raf sisteminde kullanılır mı?", a: "Evet; dört yönlü giriş ve dengeli yük dağılımı sayesinde raflı depolamada yaygın tercih edilir. Raf yükü sınırını raf üreticisinin verisinden kontrol edin." },
      { q: "İkinci el takozlu palet bulunur mu?", a: "Euro ölçülü ikinci el palet stoklarımızda bulunur. Diğer ölçülerde stok durumuna göre WhatsApp'tan sorabilirsiniz." },
      { q: "İhracat için kullanılabilir mi?", a: "Ham ahşap ambalaj olduğu için ISPM-15 uyumlu, HT damgalı olması gerekir. HT damgalı palet temini için ihracat paleti sayfamıza bakın." },
    ],
  },

  // ───────────────────────── 14. İnce palet
  {
    slug: "ince-palet",
    name: "İnce Palet (Hafif Hizmet)",
    title: "İnce Palet | Hafif Yük, Tek Kullanımlık | MEPAL",
    description:
      "İnce palet: hafif yük ve tek yönlü sevkiyat için düşük yükseklikli, ekonomik ahşap palet. Kullanım alanları, sınırları ve doğru seçim. Teklif alın.",
    h1: "İnce Palet — Hafif Yükler İçin Ekonomik Çözüm",
    answer:
      "İnce palet, daha ince tahta ve düşük yükseklikle yapılan, hafif yükler ve tek yönlü sevkiyat için tasarlanmış ekonomik ahşap paletdir. Geri dönüşü beklenmeyen gönderilerde maliyeti düşürür; ağır ve raflı kullanımda ise yeterli olmayabilir. Ölçü ve yüke göre Gebze deposundan temin edilir.",
    keyword: "ince palet",
    art: "wood",
    blurb: "Hafif yük ve tek yönlü sevkiyat için ince tahtalı ekonomik palet.",
    specs: [
      ["Yapı", "İnce tahta, düşük yükseklikli kızak veya takoz"],
      ["Kullanım tipi", "Tek yönlü (geri dönüşsüz) sevkiyat"],
      ["Yük sınıfı", "Hafif hizmet"],
      ["Yaygın ölçüler", "800 × 1200, 1000 × 1200, özel ölçü"],
      ["Ağırlık", "Standart paletten hafif"],
      ["Raf kullanımı", "Genellikle önerilmez"],
      ["Malzeme", "Ahşap; çivili"],
    ],
    uses: ["Hafif koli ve ambalajlı ürün sevkiyatı", "Tek seferlik ihracat ve dağıtım gönderileri", "E-ticaret depo çıkışları", "Konteynerde yer kazanmak isteyen yüklemeler"],
    related: ["sifir-ahsap-palet", "80x120-euro-palet", "ozel-olcu-palet", "ihracat-paleti"],
    guides: ["palet-cesitleri-ve-secimi", "palet-yuksekligi-kac-cm", "palet-maliyetini-dusurmenin-yollari"],
    sections: [
      {
        h: "İnce palet nedir?",
        p: [
          "İnce palet, standart bir palete göre daha ince tahtalarla ve daha az ahşapla üretilen hafif hizmet paletidir. Amaç, düşük yüklü gönderilerde palet maliyetini ve nakliye ağırlığını azaltmaktır.",
          "Bu paletler çoğunlukla tek seferlik kullanılır: ürün alıcıya ulaşır ve palet geri gönderilmez. Bu yüzden dayanıklılıktan çok ekonomi öne çıkar.",
        ],
      },
      {
        h: "Hangi durumlarda tercih edilir?",
        list: [
          "Yük ağırlığı düşük ve sevkiyat tek yönlü olduğunda",
          "Palet geri dönüşünün planlanmadığı bayi ve müşteri gönderilerinde",
          "Konteyner veya tırda yüksekliği kısıtlı yüklemelerde",
          "Büyük adetlerde birim palet maliyetini düşürmek istendiğinde",
        ],
        links: [["Konteynere ve tıra kaç palet sığar", "/rehber/konteynere-ve-tira-kac-palet-sigar/"]],
      },
      {
        h: "İnce palet ne zaman uygun değildir?",
        p: ["Her işe uygun değildir. Aşağıdaki durumlarda standart ya da takviyeli palet seçmek daha güvenlidir."],
        list: [
          "Ağır makine, metal, sıvı veya yoğun yüklerde",
          "Raflı depolamada (raf yükü kapasitesi yetersiz kalabilir)",
          "Üst üste istif ve uzun süreli bekletmede",
          "Palet tekrar tekrar kullanılacaksa (döngüsel kullanım)",
        ],
        links: [["Sıfır ahşap palet", "/urunler/sifir-ahsap-palet/"], ["80x120 Euro palet", "/urunler/80x120-euro-palet/"]],
      },
      {
        h: "Ölçü, yük ve yükseklik nasıl belirlenir?",
        p: [
          "Önce ürününüzün ağırlığını, kutu ölçüsünü ve istif yüksekliğini belirleyin. Palet taban ölçüsü, yük taşmayacak şekilde seçilmelidir; taşan koliler hasar riskini artırır.",
          "Yükseklik, transpalet ve çatal girişine uyumlu olmalıdır. Çok alçak paletler her ekipmanla çalışmayabilir; kullanacağınız ekipmanı bize bildirin.",
        ],
        links: [["Palet yüksekliği kaç cm", "/rehber/palet-yuksekligi-kac-cm/"]],
      },
      {
        h: "İhracatta ince palet kullanılır mı?",
        p: [
          "Ham ahşap palet yurt dışına gidecekse ISPM-15 uyumlu ve HT damgalı olmalıdır; paletin ince veya kalın olması bu şartı değiştirmez. İhracat için damgalı palet temini ayrı bir üründür.",
        ],
        links: [["Isıl işlemli palet", "/urunler/isil-islemli-palet/"], ["İhracat paleti", "/urunler/ihracat-paleti/"]],
      },
      {
        h: "Fiyat ve teslimat",
        steps: [
          "Ölçü, yük ağırlığı ve adedi WhatsApp veya teklif formuyla bildirin.",
          "Fiyat ölçüye, tahta kalınlığına ve adede göre belirlenir; sabit liste yoktur, teklif alın.",
          "Stok ve araç programına göre teslim zamanı teklifte yazılır; Gebze deposundan Türkiye geneli sevkiyat planlanabilir.",
        ],
        links: [["Teklif al", "/teklif-al/"], ["Palet fiyatları", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "İnce palet kaç kg taşır?", a: "Kapasite tahta kalınlığına ve yapıya göre değişir; genel olarak hafif yükler içindir. Yükünüzün ağırlığını bildirirseniz uygun olup olmadığını söyleriz." },
      { q: "İnce palet ile standart palet arasındaki fark nedir?", a: "İnce palette tahta daha ince, yükseklik daha düşüktür ve tek kullanım hedeflenir. Standart palet daha dayanıklıdır ve tekrar tekrar kullanılabilir." },
      { q: "İnce palet raflı depoda kullanılabilir mi?", a: "Genellikle önerilmez; raf yükü altında esneme ve kırılma riski vardır. Raflı sistem için Euro ölçülü ya da takviyeli palet seçin." },
      { q: "Hafif ve ince palet ihracat için yeterli mi?", a: "Taşıma kapasitesi yeterliyse kullanılabilir; ancak ham ahşap olduğundan ISPM-15 uyumlu, HT damgalı olması gerekir." },
      { q: "Toplu alımda indirim var mı?", a: "Fiyatlar adet kademesine göre değişir; büyük partilerde özel teklif hazırlanır. Teklif formunu doldurabilirsiniz." },
    ],
  },

  // ───────────────────────── 15. İkinci el Euro palet
  {
    slug: "ikinci-el-euro-palet",
    name: "İkinci El Euro Palet",
    title: "İkinci El Euro Palet 80x120 Temini | MEPAL",
    description:
      "İkinci el Euro ölçülü palet (80x120): 1. ve 2. sınıf seçenekler, kontrol kriterleri ve kullanım alanları. Gebze depodan toplu satış, teklif alın.",
    h1: "İkinci El Euro Palet (80x120) — Sınıflı ve Kontrollü Temin",
    answer:
      "İkinci el Euro palet, 800 × 1200 mm ölçülü ve daha önce kullanılmış, kontrol edilip gerektiğinde onarılmış ahşap paletdir. Fabrika içi dolaşım, iç lojistik ve ihracat dışı sevkiyatta maliyeti düşürür. MEPAL, 1. ve 2. sınıf seçeneklerle Gebze deposundan toplu temin eder.",
    keyword: "ikinci el euro palet",
    art: "used",
    blurb: "800×1200 mm ikinci el Euro ölçülü palet; sınıflı, kontrollü, toplu satış.",
    priceRow: "euro-ikinci-el-1",
    specs: [
      ["Ölçü", "800 × 1200 mm"],
      ["Sınıf", "1. sınıf (sağlam, onarılmış) ve 2. sınıf (yerli kullanım)"],
      ["Çatal girişi", "4 yönden"],
      ["Durum", "Kontrol edilmiş; gerektiğinde onarılmış"],
      ["Ağırlık", "Nem oranına göre değişir"],
      ["Kullanım yeri", "İç lojistik, depo, yurt içi sevkiyat"],
      ["Satış şekli", "Toplu, adet kademeli"],
    ],
    uses: ["Fabrika içi ve depo içi taşıma", "Yurt içi dağıtım sevkiyatı", "Geri dönüşü olan palet döngüsü", "Maliyet odaklı toplu tedarik"],
    related: ["80x120-euro-palet", "ikinci-el-palet", "epal-palet", "ihracat-paleti"],
    guides: ["ikinci-el-palet-alirken-dikkat-edilecekler", "palet-kalite-siniflari", "ahsap-palet-mi-plastik-palet-mi"],
    sections: [
      {
        h: "İkinci el Euro palet nedir?",
        p: [
          "İkinci el Euro palet, 80x120 ölçüsünde olup bir kez veya birkaç kez kullanılmış paletlerin ayrıştırılıp kontrol edilmesiyle satışa sunulan üründür. Kırık tahta ve zayıf bloklar değiştirilir, kullanılabilir durumda olanlar sınıflandırılır.",
          "Yeni palete göre daha uygun maliyetlidir; iç lojistikte bu fark hacim arttıkça belirginleşir.",
        ],
        links: [["İkinci el palet ürünü", "/urunler/ikinci-el-palet/"]],
      },
      {
        h: "1. sınıf ve 2. sınıf nasıl ayrılır?",
        table: {
          caption: "İkinci el Euro palet sınıf farkları",
          head: ["Kriter", "1. sınıf", "2. sınıf"],
          rows: [
            ["Genel durum", "Sağlam, onarılmış, düzgün", "Yerli kullanım, daha fazla aşınma"],
            ["Tahta/blok", "Eksiksiz ve sağlam", "Küçük kusurlar olabilir"],
            ["Önerilen kullanım", "Sevkiyat, raf dışı depo, müşteriye teslim", "Fabrika içi, kısa mesafe, tek seferlik"],
            ["Görünüm", "Daha temiz", "Aşınma izleri belirgin"],
          ],
        },
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"]],
      },
      {
        h: "Kimler için uygundur?",
        list: [
          "Fabrika içi ve depo içi taşımada maliyeti düşürmek isteyen işletmeler",
          "Yurt içi dağıtımda palet geri dönüşü yapan firmalar",
          "Geçici veya sezonluk palet ihtiyacı olanlar",
          "Büyük adetle düzenli palet alımı planlayanlar",
        ],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"]],
      },
      {
        h: "Satın almadan önce kontrol listesi",
        list: [
          "Üst ve alt tahtalarda kırık veya yırtık olmamalı.",
          "Dokuz bloğun hepsi yerinde ve sağlam olmalı.",
          "Çıkık çivi bulunmamalı; çivi uçları yükü yırtabilir.",
          "Palet düz zeminde sallanmamalı.",
          "Koku, küf veya yağ lekesi gibi kirlilik işaretlerine bakın; gıda teması varsa özellikle önemlidir.",
        ],
        links: [["İkinci el palet alırken dikkat edilecekler", "/rehber/ikinci-el-palet-alirken-dikkat-edilecekler/"]],
      },
      {
        h: "İhracat ve gıda için uygun mu?",
        p: [
          "İhracatta ham ahşap ambalajın ISPM-15 uyumlu ve HT damgalı olması gerekir; ikinci el paletin damgası eksik veya okunaksızsa kabul edilmeyebilir. Bu iş için damgalı palet temini daha güvenlidir.",
          "Gıdayla doğrudan temas eden depolarda ve hijyen şartı yüksek işlerde sıfır palet veya sıkı kontrollü 1. sınıf tercih edilmelidir.",
        ],
        links: [["İhracat paleti", "/urunler/ihracat-paleti/"], ["Gıda sektörü", "/sektorler/gida-ve-icecek/"]],
      },
      {
        h: "Fiyat ve teslimat",
        p: [
          "Fiyat sınıfa ve adet kademesine göre belirlenir. Güncel rakamlar fiyat tablosunda yer alır; büyük partiler için teklif alın.",
        ],
        steps: [
          "Sınıf tercihini, adedi ve teslim adresini bildirin.",
          "Stok ve araç programına göre teklif ve teslim zamanı iletilir; net süre teklifte yazılır.",
          "Palet Gebze deposundan araçla teslim edilir; Türkiye genelinde sevkiyat planlanabilir.",
        ],
        links: [["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "İkinci el Euro palet güvenli mi?", a: "Kontrol edilmiş ve gerekirse onarılmış paletler iç lojistikte güvenle kullanılır. Ağır yük, raf ve gıda temaslı işlerde 1. sınıf ya da sıfır palet daha uygundur." },
      { q: "İkinci el Euro palet ile ikinci el EPAL palet aynı mı?", a: "Ölçü aynıdır (800×1200 mm). EPAL tescilli bir markadır ve damgalı paletlerin statüsü ayrıdır; MEPAL EPAL üreticisi değildir, ikinci el EPAL alım satımı yapar." },
      { q: "Kaç adetten alım yapabiliyorsunuz?", a: "Toplu tedarik ağırlıklıdır; küçük adetler için stok durumuna göre WhatsApp'tan sorabilirsiniz." },
      { q: "İkinci el palet ihracata gidebilir mi?", a: "ISPM-15 uyumlu ve HT damgalıysa gidebilir; damgasız ya da okunmayan paletler kabul edilmez. İhracat için damgalı palet temin ediyoruz." },
      { q: "Paletleri geri alıyor musunuz?", a: "Fazla veya hurda paletlerinizi yerinden alabiliriz; hurda palet alımı sayfamıza bakın." },
    ],
  },

  // ───────────────────────── 16. Isıl işlemli palet
  {
    slug: "isil-islemli-palet",
    name: "Isıl İşlemli Palet (HT)",
    title: "Isıl İşlemli Palet HT Damgalı Temini | MEPAL",
    description:
      "ISPM-15 uyumlu, HT damgalı ısıl işlemli palet temini: işlem şartı, damga bilgisi ve ihracat öncesi kontrol. Gebze'den teslim, teklif için arayın.",
    h1: "Isıl İşlemli Palet — ISPM-15 Uyumlu, HT Damgalı Temin",
    answer:
      "Isıl işlemli palet, ISPM-15 standardına göre ahşabın çekirdeğine ulaşan ısıl işlem (HT) görmüş ve üzerinde IPPC damgası taşıyan paletdir. MEPAL ısıl işlemi kendi tesisinde yapmaz; ISPM-15 uyumlu, HT damgalı palet temin eder. Damga ve evrak, sevkiyat öncesi kontrol edilmelidir.",
    keyword: "ısıl işlemli palet",
    art: "ispm",
    blurb: "ISPM-15 uyumlu, HT damgalı ısıl işlemli palet temini.",
    priceRow: "ihracat-ispm15",
    specs: [
      ["Standart", "ISPM-15 (IPPC)"],
      ["İşlem", "Isıl işlem (HT): ahşap çekirdeğinde en az 56 °C, en az 30 dk"],
      ["Damga", "IPPC logosu, ülke kodu, üretici kodu, HT"],
      ["Ölçü", "800 × 1200 mm ve diğer ölçüler (talebe göre)"],
      ["Malzeme", "Ahşap; kabuksuz (debarked) olmalı"],
      ["MEPAL rolü", "Uyumlu, damgalı palet temini (işlemi yapan MEPAL değildir)"],
      ["Kontrol", "Damga okunaklılığı ve ülke/işletme kodu"],
    ],
    uses: ["Avrupa ve Orta Doğu ihracat sevkiyatları", "Gümrükte ahşap ambalaj kontrolü olan gönderiler", "Konteyner ile yurt dışı yüklemeleri", "Ahşap ambalajda karantina şartı olan ülkeler"],
    related: ["ihracat-paleti", "80x120-euro-palet", "ahsap-sandik", "takozlu-palet"],
    guides: ["ispm-15-nedir", "ihracatta-palet-ve-ambalaj-kurallari", "konteynere-ve-tira-kac-palet-sigar"],
    sections: [
      {
        h: "Isıl işlemli palet nedir?",
        p: [
          "Isıl işlemli palet, ahşabın içindeki zararlıların başka ülkelere taşınmasını önlemek için uygulanan ısıl işlemden geçmiş paletdir. İşlemden sonra palete IPPC logosu, ülke kodu, üretici kodu ve işlem kısaltması (HT) içeren damga basılır.",
          "Damga, paletin ISPM-15 şartına uygun olduğunu gösterir. Birçok ülke ahşap ambalajda bu damgayı arar; damgasız veya okunamayan palet gümrükte sorun çıkarabilir.",
        ],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"]],
      },
      {
        h: "MEPAL ne yapar, ne yapmaz?",
        p: [
          "MEPAL, ısıl işlemi kendi tesisinde yapmaz. ISPM-15 uyumlu, HT damgalı palet temin eder ve siparişte ölçü, adet ve damga bilgisini birlikte netleştirir.",
          "Isıl işlem ve damgalama yetkili işletmelerce yapılır; biz bu paletlerin teslimini ve sevkiyatını planlarız. İhracat dosyanızda gereken evrak için alıcınızın ve gümrük müşavirinizin talebini baz alın.",
        ],
        links: [["İhracat paleti", "/urunler/ihracat-paleti/"]],
      },
      {
        h: "ISPM-15 şartı özetle",
        list: [
          "Ahşap, çekirdeğinde en az 56 °C sıcaklığa ulaşacak şekilde en az 30 dakika ısıl işlem görmelidir.",
          "Ahşap kabuksuz olmalıdır.",
          "Damga okunaklı olmalı ve palette görünür yerde bulunmalıdır.",
          "Kontrplak, OSB gibi işlenmiş ahşap ürünleri genellikle kapsam dışıdır.",
          "Kural ve istisnalar ülkeye göre farklılaşabilir; alıcı ülkenin güncel şartını doğrulayın.",
        ],
        links: [["İhracatta palet ve ambalaj kuralları", "/rehber/ihracatta-palet-ve-ambalaj-kurallari/"]],
      },
      {
        h: "Sevkiyat öncesi kontrol listesi",
        steps: [
          "Palet üzerindeki IPPC damgasının net okunduğunu ve HT ibaresinin bulunduğunu kontrol edin.",
          "Ülke kodu ve işletme kodunun dolu olduğunu doğrulayın.",
          "Tahtalarda böcek deliği, kabuk kalıntısı ve küf olmadığını gözleyin.",
          "Paletin ölçüsünün konteynere veya tıra uygun olduğunu teyit edin.",
          "Alıcı ülkenin ek şartı varsa siparişten önce bildirin.",
        ],
        links: [["Konteynere kaç palet sığar", "/rehber/konteynere-ve-tira-kac-palet-sigar/"]],
      },
      {
        h: "Isıl işlemli palet ile sandık ilişkisi",
        p: [
          "Ağır veya hassas ürünlerde palet tek başına yeterli olmayabilir; bu durumda ahşap sandık gerekir. Ham ahşap sandık da aynı ISPM-15 şartlarına tabidir.",
        ],
        links: [["Ahşap sandık", "/urunler/ahsap-sandik/"], ["İhracat ve lojistik sektörü", "/sektorler/ihracat-ve-lojistik/"]],
      },
      {
        h: "Fiyat ve teslimat",
        p: [
          "Fiyat ölçüye, adede ve damga şartına göre belirlenir. Güncel kademeli rakamlar fiyat tablosunda yer alır; özel ölçü veya büyük parti için teklif alın.",
        ],
        links: [["Palet fiyatları", "/palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Isıl işlemli palet ile ihracat paleti aynı mı?", a: "Pratikte aynı kategoridir: ISPM-15 uyumlu, HT damgalı ahşap palet. İhracat paleti sayfası ürünü genel çerçevesiyle, bu sayfa ısıl işlem ve damga bilgisiyle anlatır." },
      { q: "Isıl işlemi kendiniz mi yapıyorsunuz?", a: "Hayır. MEPAL ISPM-15 uyumlu, HT damgalı palet temin eder; ısıl işlem ve damgalama yetkili işletmelerce yapılır." },
      { q: "HT damgası ne anlama gelir?", a: "HT, ısıl işlem (heat treatment) kısaltmasıdır. Damgada IPPC logosu, ülke kodu ve üretici kodu ile birlikte yer alır." },
      { q: "Her ülke ısıl işlemli palet ister mi?", a: "ISPM-15 birçok ülkede uygulanır, ancak ek şartlar ve istisnalar ülkeye göre değişir. Alıcı ülkenin güncel kuralını sevkiyattan önce doğrulayın." },
      { q: "Damgasız palet ihracatta kullanılabilir mi?", a: "Ham ahşap palette damga yoksa gümrükte sorun çıkabilir, yük geri çevrilebilir. İhracatta mutlaka damgalı palet kullanın." },
    ],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
