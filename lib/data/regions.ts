import type { Region } from "@/lib/types";

// Bölge sayfaları (/bolge/<slug>/), slug biçimi: gebze-palet, tuzla-palet ...
// Fiyat yazılmaz; fiyatlar lib/data/prices.ts tablosundan gelir.
export const regions: Region[] = [
  // ───────────────────────── WAVE 1 ─────────────────────────
  {
    slug: "gebze-palet",
    name: "Gebze",
    wave: 1,
    title: "Gebze Palet Satışı ve Hurda Palet Alımı | MEPAL",
    description: "Gebze’de Pelitli depodan palet satışı ve hurda palet alımı: Euro palet, ikinci el, plastik palet. Depo adresi, yol tarifi, teklif için WhatsApp.",
    h1: "Gebze Palet Satışı ve Hurda Palet Alımı",
    keyword: "gebze palet",
    art: "region",
    distance: "depomuz Gebze’de · yaklaşık 3–20 km · 5–25 dk",
    blurb: "Depomuz Pelitli’de: Gebze OSB, Plastikçiler OSB ve Balçık fabrikalarına kısa mesafe, hızlı çıkış planı.",
    answer:
      "MEPAL’in deposu Gebze Pelitli Mahallesi’nde, Maden Sokak No:34’tedir. Gebze’deki fabrikalara Euro palet, ikinci el palet ve plastik palet satıyor; fabrikada biriken hurda ve kırık paletleri yerinden alıyoruz. Stoğa göre teslim edilir, net süre teklifte bildirilir.",
    zones: ["Pelitli", "Balçık", "Gebze Organize Sanayi Bölgesi (GOSB)", "Gebze Plastikçiler OSB", "Mollafenari", "Hacıhalil", "Osmangazi", "Beylikbağı", "Gebze Güzeller Sanayi", "Çayırova sınırı sanayisi"],
    nearby: ["dilovasi-palet", "cayirova-palet", "darica-palet"],
    sections: [
      {
        h: "Depo adresi ve çalışma saatleri",
        p: [
          "MEPAL Orman Ürünleri’nin stok ve yükleme deposu Pelitli Mah., Maden Sk. No:34, 41400 Gebze/Kocaeli adresindedir. Gebze ilçe merkezine, Gebze OSB ve Balçık çevresindeki sanayi sitelerine kısa mesafede, TEM ve D-100 bağlantı yollarına yakın bir noktadır.",
          "Depo Pazartesi–Cumartesi 08:30–18:00 arasında açıktır. Aracınızla kendiniz yüklemek isterseniz önce telefonla ya da WhatsApp’tan arayın; aradığınız ürün ve adedin o gün hazır olup olmadığını söyleyelim, boşuna yol yapmayın.",
        ],
        links: [["İletişim ve yol tarifi", "/iletisim/"], ["Teklif al", "/teklif-al/"]],
      },
      {
        h: "Pelitli ve Balçık çevresinden gelenler için",
        p: [
          "Pelitli’de ve komşu Balçık’taki fabrikalarda palet ihtiyacı çoğunlukla aynı günün içinde doğar: bir sevkiyat öne çekilir, bir tır beklenenden erken gelir, stoktaki paletlerin yarısı kırık çıkar. Bu tür acil taleplerde en büyük avantaj mesafedir; depodan fabrikanıza dakikalar içinde araç çıkarabiliriz.",
          "Küçük partilerde, yani birkaç yüz adede kadar, kendi aracınızla gelip yüklemeniz de mümkün. Yükleme öncesi paletleri birlikte kontrol eder, istiflenme düzenini ve kalite sınıfını yerinde görmenizi sağlarız.",
        ],
        list: [
          "Önce ürün ve adedi telefonla bildirin, depoda hazır tutalım.",
          "Çatallı istif makinesi veya forklift ile yükleme depomuzda yapılır.",
          "Fatura bilgilerinizi (vergi numarası, unvan) yanınızda getirmeniz işlemi hızlandırır.",
        ],
      },
      {
        h: "Gebze’de en çok istenen palet türleri",
        p: [
          "Gebze’nin sanayi yapısı karma olduğu için talep tek bir ürüne yığılmaz. Otomotiv yan sanayi, kimya, metal işleme, plastik enjeksiyon, gıda ve elektrik-elektronik tesisleri bir arada çalışır. Bu yüzden sipariş listemiz geniş bir aralığa yayılır.",
        ],
        table: {
          caption: "Gebze’de sık sorulan ürünler",
          head: ["Ürün", "Tipik kullanıcı", "Not"],
          rows: [
            ["80x120 Euro palet", "Gıda, kimya, genel depolama", "Raf ve tır yüklemesine uygun standart ölçü"],
            ["Ikinci el palet", "Metal, otomotiv yan sanayi", "Bütçeyi koruyan, sınıflandırılmış stok"],
            ["100x120 palet", "Kimya, boya, sıvı ambalajı", "Varil ve IBC sevkiyatında yaygın"],
            ["Plastik palet", "Gıda, ilaç yan sanayi, hijyen gerektiren hatlar", "Yıkanabilir, çivi ve kıymık riski yok"],
            ["ISPM-15 uyumlu HT paleti", "İhracat yapan tesisler", "HT damgalı ihracat paleti temini"],
          ],
        },
        links: [
          ["80x120 Euro palet", "/urunler/80x120-euro-palet/"],
          ["İkinci el palet", "/urunler/ikinci-el-palet/"],
          ["100x120 palet", "/urunler/100x120-palet/"],
          ["İhracat paleti", "/urunler/ihracat-paleti/"],
          ["Fiyat al", "/palet-fiyatlari/"],
        ],
      },
      {
        h: "Hurda palet alımı: fabrikanızdan yerinde",
        p: [
          "Gebze sanayisinde ayda yüzlerce paleti kırık, çatlak ya da standart dışı hâle gelen birçok tesis var. Bu paletler alan işgal eder, yangın yükünü artırır ve çoğunlukla yanlış yere gider. Biz kullanılabilir olanları ayırıp tamire ya da ikinci el stoğa yönlendiriyor, geri kalanı ahşap atık olarak geri dönüşüme veriyoruz.",
          "Alım fiyatı paletin türüne, hâline, miktara ve yükleme koşuluna göre belirlenir; metinde rakam vermiyoruz. Fotoğraf ya da miktar bilgisiyle WhatsApp’tan yazarsanız ön değerlendirme yapabiliriz.",
        ],
        links: [
          ["Hurda palet alımı hizmeti", "/hizmetler/hurda-palet-alimi/"],
          ["Paletinizi nasıl değerlendirirsiniz", "/rehber/hurda-paletinizi-nasil-degerlendirirsiniz/"],
          ["Fotoğraftan palet değerleme", "/araclar/fotograftan-palet-degerleme/"],
        ],
      },
      {
        h: "Teslimat ve yükleme pratikleri",
        p: [
          "Gebze’de teslimat çoğunlukla kendi aracımızla ya da anlaşmalı nakliye ile yapılır. Boşaltma için fabrikanızda forklift olup olmadığını önceden bilmemiz gerekir; aksi hâlde araç beklemek zorunda kalır, bu da sizin maliyetinize yansır.",
        ],
        steps: [
          "Ürün, ölçü, adet ve teslim adresini bildirin.",
          "Teklifi ve stok durumunu alın; net teslim saati teklifte yazılır.",
          "Araç adresinize gelir, paletler sayılarak indirilir.",
          "İrsaliye ve fatura düzenlenir.",
        ],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"], ["Palet alım-satım", "/hizmetler/palet-alim-satim/"]],
      },
      {
        h: "Depoyu ziyaret edip paletleri yerinde görmek",
        p: [
          "Düzenli ve büyük hacimli bir alımı bağlamadan önce depoyu görmek isteyenleri bekleriz. Numune palet üzerinde ölçü, ağırlık ve kalite farkını yerinde karşılaştırabilirsiniz. Sınıflandırma mantığımızı merak ediyorsanız rehber sayfamız da var.",
        ],
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"], ["Hakkımızda", "/hakkimizda/"]],
      },
    ],
    faq: [
      { q: "Gebze’de depo adresiniz nerede, kapıya kadar mı gelmem gerekir?", a: "Depomuz Pelitli Mah., Maden Sk. No:34, Gebze/Kocaeli adresindedir. Gelmek zorunda değilsiniz; Gebze içi adreslere teslimat da yapıyoruz. Ziyaret için önceden telefonla haber vermeniz yeterli." },
      { q: "Gebze OSB ve Plastikçiler OSB’ye ne kadar sürede ulaşılır?", a: "Depodan OSB’lere trafiğe göre yaklaşık 5–25 dakikalık yol vardır. Teslim saati stok ve araç programına göre netleşir, teklifte bildirilir." },
      { q: "Fabrikamızdaki kırık paletleri yerinde alıyor musunuz?", a: "Evet. Miktar, palet türü ve durumuna göre Gebze’deki tesislerden hurda ve kırık palet alıyoruz. Fotoğraf ya da adet bilgisiyle ön değerlendirme yapılır." },
      { q: "Küçük adetle (örneğin 50 palet) alışveriş mümkün mü?", a: "Mümkün. Depodan kendi aracınızla yükleyebilir ya da adrese teslim isteyebilirsiniz. Güncel koşullar için teklif alın." },
      { q: "Palet fiyatını nereden öğrenebilirim?", a: "Güncel fiyatı WhatsApp'tan alabilirsiniz; stok, adet ve ölçüye göre değiştiği için kesin tutarı teklifte netleştiririz." },
    ],
  },
  {
    slug: "dilovasi-palet",
    name: "Dilovası",
    wave: 1,
    title: "Dilovası Palet Satışı ve Hurda Palet Alımı | MEPAL",
    description: "Dilovası OSB ve Kimya İhtisas OSB’deki tesisler için palet satışı, kimya sevkiyatına uygun palet ve hurda palet alımı. Gebze depodan hızlı çıkış.",
    h1: "Dilovası Palet Satışı ve Hurda Palet Alımı",
    keyword: "dilovası palet",
    art: "region",
    distance: "yaklaşık 18 km · 25 dk",
    blurb: "Dilovası OSB ve kimya ağırlıklı tesisler için 100x120 ve Euro palet, hurda palet alımı.",
    answer:
      "Dilovası, Gebze’nin hemen doğusunda kimya, metal ve lojistik tesislerinin yoğunlaştığı bir sanayi ilçesidir. Gebze Pelitli deposundan yaklaşık 18 km uzaklıktaki Dilovası’na Euro palet, 100x120 palet ve plastik palet teslim eder, tesislerde biriken hurda paletleri alırız.",
    zones: ["Dilovası Organize Sanayi Bölgesi", "Kimya İhtisas OSB", "Diliskelesi", "Çerkeşli", "Tavşancıl", "Mimar Sinan", "Orhangazi", "Demirciler sanayi çevresi"],
    nearby: ["gebze-palet", "derince-palet", "korfez-palet"],
    sections: [
      {
        h: "Dilovası sanayisi neden farklı bir palet ihtiyacı doğurur",
        p: [
          "Dilovası’nda Gebze’nin genel karma yapısından farklı olarak boya, solvent, plastik hammadde, metal döküm ve kimyasal ürün üreten tesisler öne çıkar. Bu tesislerde sevkiyat birimi çoğunlukla torba, bidon, varil ya da IBC konteynerdir. Dolayısıyla palet sadece taşıyıcı değil, yükün stabilitesi için de belirleyicidir.",
          "Diliskelesi ve çevresindeki liman faaliyetleri, ihracat odaklı üreticileri de bu bölgeye çeker; bu nedenle ISPM-15 uyumlu, HT damgalı paletlere talep Dilovası’nda yıl boyu sürer.",
        ],
      },
      {
        h: "Dilovası’nda en çok istenen ürünler",
        list: [
          "100x120 palet: bidon, varil ve IBC sevkiyatında daha geniş taban sağlar.",
          "80x120 Euro palet: torba ve koli yüklemelerinde standart tercih.",
          "Plastik palet: kimyasal sızıntıya karşı yıkanabilir yüzey isteyen hatlar için.",
          "Özel ölçülü palet: makine parçası ve metal profil gibi standart dışı yükler için.",
          "HT damgalı ihracat paleti: gümrüğe giden sevkiyatlar için.",
        ],
        links: [
          ["100x120 palet", "/urunler/100x120-palet/"],
          ["Plastik palet", "/urunler/plastik-palet/"],
          ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"],
          ["Kimya ve plastik sektörü", "/sektorler/kimya-ve-plastik/"],
        ],
      },
      {
        h: "Kimyasal yükte palet seçerken dikkat edilecekler",
        p: [
          "Bidon ve IBC taşıyan sistemlerde paletin alt yüzeyindeki tahta aralığı, yükün çatalda kaymasını etkiler. Sızıntı riski olan hatlarda ahşap yerine plastik palet düşünülebilir; ahşap sıvıyı emer ve ileride temizlik sorunu çıkarabilir. Çok ağır yüklerde ise paletin taşıma kapasitesine ve çatal girişine dikkat etmek gerekir.",
        ],
        links: [["Palet kaç kg taşır", "/rehber/palet-kac-kg-tasir/"], ["Ahşap mı plastik mi", "/rehber/ahsap-palet-mi-plastik-palet-mi/"]],
      },
      {
        h: "Hurda palet ve ahşap atık",
        p: [
          "Dilovası tesislerinde zamanla yağlanmış, kimyasal bulaşmış ya da ezilmiş paletler birikir. Hangi paletin geri dönüşüme uygun olduğunu yerinde bakarak ayırırız. Kimyasalla yoğun temas etmiş paletler için önceden bilgi vermeniz gerekir; her palet alınamayabilir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Palet tamiri", "/hizmetler/palet-tamiri/"]],
      },
      {
        h: "Teslimat",
        p: [
          "Gebze deposundan Dilovası’na tek araçla gidilir. Kapı girişlerinde araç boyu ve yükleme rampası kısıtı olan tesislerde aracımızı buna göre planlarız. Net süre teklifte bildirilir; stok ve araç programına göre en kısa süre hedeflenir.",
        ],
        links: [["Teklif al", "/teklif-al/"], ["Fiyat al", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Dilovası OSB’deki tesislere teslimat yapıyor musunuz?", a: "Evet, Gebze deposundan Dilovası OSB ve Kimya İhtisas OSB çevresine teslimat yapıyoruz. Süre, stok ve araç programına göre teklifte netleşir." },
      { q: "Varil ve IBC için hangi palet daha uygundur?", a: "Çoğu durumda 100x120 palet daha geniş taban verdiği için tercih edilir. Yükün ağırlığını ve istif yüksekliğini bildirirseniz doğru ölçüyü öneririz." },
      { q: "Kimyasal bulaşmış paletleri alır mısınız?", a: "Bulaşmanın türüne göre değişir. Önce fotoğraf ve bilgi paylaşın; geri dönüşüme uygun olanları yerinde belirleriz." },
      { q: "İhracat için hangi palet gerekir?", a: "Hedef ülkeye göre ISPM-15 uyumlu, HT damgalı palet gerekebilir. Biz bu tür paletlerin temin edilmesini sağlıyoruz." },
    ],
  },
  {
    slug: "cayirova-palet",
    name: "Çayırova",
    wave: 1,
    title: "Çayırova Palet Satışı ve Hurda Palet Alımı | MEPAL",
    description: "Çayırova fabrikalarına Gebze depodan palet satışı, ikinci el ve Euro palet, hurda palet alımı. Kısa mesafe, esnek yükleme, WhatsApp’tan teklif.",
    h1: "Çayırova Palet Satışı ve Hurda Palet Alımı",
    keyword: "çayırova palet",
    art: "region",
    distance: "yaklaşık 15 km · 20 dk",
    blurb: "Gebze depoya komşu Çayırova sanayisine kısa sürede Euro ve ikinci el palet.",
    answer:
      "Çayırova, Gebze’nin batısında lojistik depoları ve orta ölçekli üretim tesisleriyle öne çıkan bir ilçedir. Gebze Pelitli deposundan yaklaşık 15 km uzaktaki Çayırova’ya Euro palet, ikinci el palet ve plastik palet teslim eder, kırık paletleri yerinden toplarız.",
    zones: ["Akse", "Cumhuriyet", "Atatürk", "Emek", "İnönü", "Özgürlük", "Şekerpınar sınırı", "TEM bağlantısı çevresi depoları"],
    nearby: ["sekerpinar-palet", "gebze-palet", "tuzla-palet"],
    sections: [
      {
        h: "Çayırova’nın palet profili",
        p: [
          "Çayırova, Gebze ile İstanbul arasında kalan konumu nedeniyle üretimden çok depolama, dağıtım ve ara üretim yapan firmaları çeker. Bu tesisler palet tüketicisi olmaktan öte palet döngüsü yöneten işletmelerdir: mal gelir, boşaltılır, paletler birikir, yeni sevkiyat için ihtiyaç doğar.",
          "Bu döngüde en büyük maliyet kalemi çoğu zaman yeni palet alımı değildir; stokta bekleyen ya da kırılan paletlerin değerlendirilememesidir. Çayırova’da çalışırken önce mevcut stoğunuza bakıp satın alma ile tamir ve ikinci el alternatiflerini karşılaştırmanızı öneriyoruz.",
        ],
        links: [["Palet tamiri", "/hizmetler/palet-tamiri/"], ["Palet maliyetini düşürmenin yolları", "/rehber/palet-maliyetini-dusurmenin-yollari/"]],
      },
      {
        h: "En çok sorulan ürünler",
        list: [
          "İkinci el palet: dağıtım depolarında tek seferlik veya kısa dönemli kullanım için.",
          "80x120 Euro palet: perakende zincirlerine sevkiyat yapan depolar için.",
          "Plastik palet: e-ticaret ve hijyen gerektiren depolarda tekrar kullanımda.",
          "Özel ölçülü palet: ambalaj ölçüsü standart dışı olan üreticiler.",
        ],
        links: [
          ["İkinci el palet", "/urunler/ikinci-el-palet/"],
          ["Euro palet", "/urunler/80x120-euro-palet/"],
          ["E-ticaret ve depo sektörü", "/sektorler/e-ticaret-ve-depo/"],
        ],
      },
      {
        h: "Hurda palet alımı ve palet takası",
        p: [
          "Depo ağırlıklı işletmelerde hurda palet miktarı sürekli değişir. Düzenli alım için haftalık ya da iki haftalık bir program kurabiliriz; böylece depo alanınız palet yığınları ile dolmaz. Alınan paletlerden kullanılabilir olanlar tamire, diğerleri ahşap geri dönüşüme yönlendirilir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Palet alım-satım", "/hizmetler/palet-alim-satim/"]],
      },
      {
        h: "Teslimat ve yükleme",
        p: [
          "Çayırova’ya giden araç, Gebze’den TEM ya da D-100 ile ulaşır. Yoğun saatlerde süre uzayabilir. Rampa yüksekliği, forklift durumu ve teslim saati aralığını önceden bildirirseniz araç planı bunlara göre yapılır.",
        ],
        steps: [
          "Ürün ve adedi bildirin.",
          "Teklif ile stok durumunu alın.",
          "Boşaltma noktası, saat aralığı ve forklift bilgisini paylaşın.",
          "Araç adresinize gelir, sayım ve teslim yapılır.",
        ],
        links: [["Teklif al", "/teklif-al/"], ["Fiyat al", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Çayırova’ya teslimat mümkün mü, ek ücret var mı?", a: "Evet. Nakliye bedeli adede ve araç tipine bağlıdır; teklifte açıkça yazılır." },
      { q: "Depo için düzenli palet alımı yapar mısınız?", a: "Evet, haftalık ya da aylık düzenli alım programı kurulabilir. Koşullar teklifte belirlenir." },
      { q: "İkinci el palet kalitesi nasıl belirlenir?", a: "Kalite sınıfı çatlak, kırık, tahta sayısı ve ölçü durumuna göre belirlenir. Sınıf bilgisini siparişte netleştiririz." },
      { q: "Çayırova’dan hurda palet teslim almak için ne gerekir?", a: "Yaklaşık adet, palet türü ve yükleme noktası bilgisi yeterlidir. Fotoğraf göndermeniz süreci hızlandırır." },
    ],
  },
  {
    slug: "sekerpinar-palet",
    name: "Şekerpınar",
    wave: 1,
    title: "Şekerpınar Palet Satışı ve Hurda Palet Alımı | MEPAL",
    description: "Şekerpınar sanayi ve depo bölgesine palet satışı: Euro, ikinci el, plastik palet. Gebze depodan kısa mesafe, hurda palet alımı, hızlı teklif.",
    h1: "Şekerpınar Palet Satışı ve Hurda Palet Alımı",
    keyword: "şekerpınar palet",
    art: "region",
    distance: "yaklaşık 18 km · 25 dk",
    blurb: "Şekerpınar’ın metal, plastik ve depo işletmelerine Gebze’den hızlı palet tedariki.",
    answer:
      "Şekerpınar, Çayırova’nın İstanbul sınırına yakın, D-100 ve TEM üzerinde yer alan yoğun bir sanayi ve depo bölgesidir. Gebze deposundan yaklaşık 18 km uzakta; Euro palet, ikinci el palet ve özel ölçülü palet teslimatı ile hurda palet alımı yapıyoruz.",
    zones: ["Şekerpınar Mah. sanayi alanı", "D-100 kenarı depoları", "TEM bağlantı yolları", "Akse sınırı", "Pendik sınırındaki küçük sanayi siteleri"],
    nearby: ["cayirova-palet", "tuzla-palet", "gebze-palet"],
    sections: [
      {
        h: "Şekerpınar: konum avantajı ve palet talebi",
        p: [
          "Şekerpınar’ın en belirgin özelliği konumudur: İstanbul’a girişin hemen öncesinde olduğu için çoğu işletme hem Kocaeli hem de İstanbul müşterilerine malı bu noktadan sevk eder. Dolayısıyla burada palet, bir üretim malzemesinden çok bir sevkiyat gereğidir.",
          "Şekerpınar’da metal işleme, plastik, ambalaj, mutfak ve ev gereçleri, küçük makine üretimi ve çok sayıda dağıtım deposu birlikte çalışır. Bu yoğunluk, farklı ölçü ve kalitede palet talebini aynı anda doğurur.",
        ],
      },
      {
        h: "Hangi sektörler ne tür palet ister",
        table: {
          head: ["Sektör", "Sık kullanılan palet", "Gerekçe"],
          rows: [
            ["Metal işleme", "Özel ölçülü veya ikinci el palet", "Ağır, uzun veya düzensiz parçalar"],
            ["Plastik ürün", "80x120 Euro palet, plastik palet", "Hafif ama hacimli, tekrar kullanıma açık"],
            ["Dağıtım depoları", "İkinci el Euro palet", "Çok sayıda, kısa devirli kullanım"],
            ["İhracat hazırlayanlar", "HT damgalı palet, sandık", "Hedef ülke bitki sağlığı kuralları"],
          ],
        },
        links: [["Özel ölçü palet", "/urunler/ozel-olcu-palet/"], ["Ahşap sandık", "/urunler/ahsap-sandik/"], ["İhracat ve lojistik", "/sektorler/ihracat-ve-lojistik/"]],
      },
      {
        h: "Dar zamanlı siparişler",
        p: [
          "Şekerpınar’daki işletmelerin önemli bir kısmı sipariş alıp aynı gün sevk etmek zorunda. Sabah haber verilen palet ihtiyacını stoğa ve araç programına göre en kısa sürede karşılamaya çalışıyoruz; net süre teklifte yazılır. Taahhüt edilen saat dışında bir söz vermiyoruz, çünkü trafik ve yükleme sırası bunu etkiler.",
        ],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"], ["Teklif al", "/teklif-al/"]],
      },
      {
        h: "Hurda palet alımı",
        p: [
          "Küçük ve orta ölçekli tesislerde hurda palet çoğu zaman bahçe kenarında ya da arka sokakta birikir. Alım için tek şart, paletlerin araca yükleme yapılabilecek bir noktada olmasıdır. Tamire uygun olanları ayrı değerlendirir, ahşap atığı geri dönüşüme veririz.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Palet tamiri", "/hizmetler/palet-tamiri/"], ["Fiyat tablosu", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Şekerpınar’a hızlı palet teslimatı yapılır mı?", a: "Stok ve araç programı uygunsa mümkün olabilir; garanti vermiyoruz. Mümkün olan en kısa süre hedeflenir, net süre teklifte bildirilir." },
      { q: "Küçük bir atölye için kaç paletten itibaren satış yapıyorsunuz?", a: "Belirli bir alt sınır koymuyoruz; adet küçükse depodan alım ya da toplu sevkiyata ekleme tercih edilebilir." },
      { q: "Standart dışı ölçüde palet üretir misiniz?", a: "Evet, özel ölçülü sıfır palet üretimi yapıyoruz. Ürün ölçüsü ve ağırlığını bildirmeniz yeterlidir." },
      { q: "Hurda paletler için bir ücret ödeyecek miyim?", a: "Paletin durumuna ve miktara göre değişir. Değerlendirme sonrası net koşul teklifte netleşir." },
    ],
  },
  {
    slug: "tuzla-palet",
    name: "Tuzla",
    wave: 1,
    title: "Tuzla Palet Satışı ve Hurda Palet Alımı | MEPAL",
    description: "Tuzla Deri OSB, Kimya OSB, tersaneler ve Aydınlı çevresine palet satışı. Ağır yük için özel ölçülü palet, hurda palet alımı, Gebze depodan teslimat.",
    h1: "Tuzla Palet Satışı ve Hurda Palet Alımı",
    keyword: "tuzla palet",
    art: "region",
    distance: "yaklaşık 25 km · 30 dk",
    blurb: "Tuzla’nın deri, kimya, gemi ve metal sanayisine ağır yüke uygun palet.",
    answer:
      "Tuzla, İstanbul’un Anadolu yakasındaki deri, kimya, tersane ve metal sanayisinin yoğun olduğu ilçedir. Gebze Pelitli deposundan yaklaşık 25 km uzaklıkta; ağır yüke uygun ahşap palet, 100x120 ve özel ölçülü palet teslim eder, hurda paletleri alırız.",
    zones: ["Tuzla Deri OSB", "Tuzla Kimya Sanayicileri OSB", "Tuzla Tersaneler Bölgesi", "Aydınlı", "Orhanlı", "Orta Mahalle sanayi", "İçmeler", "Postane"],
    nearby: ["sekerpinar-palet", "pendik-palet", "cayirova-palet"],
    sections: [
      {
        h: "Tuzla’nın sanayi mozaiği",
        p: [
          "Tuzla’da üç ayrı sanayi omurgası vardır. Birincisi deri, ayakkabı ve tekstil üreticilerinin Deri OSB çevresinde toplanması; ikincisi kimya OSB ve çevresindeki boya, reçine ve ambalaj üreticileri; üçüncüsü ise tersaneler bölgesinde gemi yapımı ve onarımına hizmet veren metal ve makine atölyeleridir.",
          "Üç grubun palet ihtiyacı birbirinden çok farklıdır. Tersane çevresinde parça, levha ve ekipman ağırlığı palet seçimini belirlerken, deri sektöründe nem ve kokuya karşı temiz, düz yüzeyli palet öne çıkar.",
        ],
      },
      {
        h: "Sektöre göre palet önerisi",
        table: {
          caption: "Tuzla’da tipik kullanım",
          head: ["Alan", "Öne çıkan palet", "Dikkat edilecek nokta"],
          rows: [
            ["Deri ve ayakkabı", "80x120 Euro, plastik palet", "Nemde küf riski, kuru stok"],
            ["Kimya OSB", "100x120 ve plastik palet", "Bidon ve IBC taşıma, sızıntı"],
            ["Tersane ve metal", "Özel ölçülü, takviyeli palet", "Ağır parça, çatal altı kırılma"],
            ["Mobilya ve ambalaj", "İkinci el Euro palet", "Hafif ürün, hızlı devir"],
          ],
        },
        links: [
          ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"],
          ["Plastik palet", "/urunler/plastik-palet/"],
          ["100x120 palet", "/urunler/100x120-palet/"],
        ],
      },
      {
        h: "Ağır parça için özel ölçülü palet",
        p: [
          "Gemi ekipmanı, makine parçası ve metal profil sevkiyatında standart Euro palet çoğu zaman yetersiz kalır. Bu yükler için tahta kalınlığı, bağlantı blokları ve alt taşıyıcılar ihtiyaca göre planlanır. Ölçü ve ağırlığı bildirirseniz uygun yapıyı birlikte belirleyelim.",
        ],
        links: [["Palet kaç kg taşır", "/rehber/palet-kac-kg-tasir/"], ["Ahşap sandık", "/urunler/ahsap-sandik/"]],
      },
      {
        h: "Hurda palet ve ahşap atık",
        p: [
          "Tersane ve metal atölyelerinde paletler çoğu zaman ağır yük altında çatlar. Yağ ve boya bulaşmış olanlar ayrı değerlendirilir. Fotoğraf ve adet bilgisiyle bize ulaşın; hangi paletlerin alınabileceğini yerinde belirleriz.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Fotoğraftan değerleme", "/araclar/fotograftan-palet-degerleme/"]],
      },
      {
        h: "Teslimat notları",
        p: [
          "Gebze’den Tuzla’ya araç yolu uzun değildir ancak sabah ve akşam saatlerinde trafik süreyi değiştirebilir. Tersane ve OSB girişlerinde araç kaydı ve kimlik kontrolü gerekebilir; bunun için gelecek araç bilgisini paylaşırız. Net süre teklifle birlikte bildirilir.",
        ],
        links: [["Teklif al", "/teklif-al/"], ["Fiyat tablosu", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Tuzla Deri OSB’ye teslimat yapıyor musunuz?", a: "Evet. OSB giriş kuralları için araç bilgisini önceden paylaşırız. Süre teklifte bildirilir." },
      { q: "Ağır makine parçaları için hangi palet uygundur?", a: "Standart Euro palet yetmeyebilir. Yük ağırlığına göre takviyeli ya da özel ölçülü palet önerilir." },
      { q: "Tersane çevresindeki atölyelere de palet satıyor musunuz?", a: "Evet, Tuzla Tersaneler Bölgesi çevresine de teslimat planlıyoruz. Yükleme noktası ve forklift bilgisi önemlidir." },
      { q: "Yağlı veya boyalı paletleri alır mısınız?", a: "Bulaşmanın ölçüsüne bağlı. Önce fotoğraf paylaşın, uygun olanları yerinde ayırırız." },
    ],
  },

  // ───────────────────────── WAVE 2 ─────────────────────────
  {
    slug: "pendik-palet",
    name: "Pendik",
    wave: 2,
    title: "Pendik Palet Satışı ve Hurda Palet Alımı | MEPAL",
    description: "Pendik, Kurtköy ve Yenişehir sanayisine palet satışı: Euro, ikinci el, plastik palet. Havalimanı kargo ve ihracat sevkiyatı için HT damgalı palet temini.",
    h1: "Pendik Palet Satışı ve Hurda Palet Alımı",
    keyword: "pendik palet",
    art: "region",
    distance: "yaklaşık 35 km · 40 dk",
    blurb: "Pendik ve Kurtköy sanayi ile kargo-lojistik işletmeleri için palet tedariki.",
    answer:
      "Pendik, Kurtköy çevresindeki sanayi, Sabiha Gökçen Havalimanı’na yakın lojistik ve kargo tesisleri ile Pendik Limanı çevresindeki depolama faaliyetleriyle palet talebi yüksek bir ilçedir. Gebze deposundan yaklaşık 35 km uzakta; Euro palet, ikinci el palet ve ihracat paleti temin ediyoruz.",
    zones: ["Kurtköy", "Yenişehir", "Çınardere", "Dolayoba", "Ahmet Yesevi", "Pendik sanayi", "Havalimanı yolu lojistik depoları", "Kaynarca"],
    nearby: ["tuzla-palet", "kartal-palet", "sancaktepe-palet"],
    sections: [
      {
        h: "Pendik’te palet ihtiyacı nereden doğar",
        p: [
          "Pendik’in yapısı bir sanayi ilçesinden çok, sanayi, depolama ve havalimanı lojistiğinin kesiştiği bir geçiş noktasıdır. Kurtköy’deki üretim ve montaj tesisleri, havalimanı yakınındaki kargo ve ambalajlama depoları, limana yakın depolama alanları aynı ilçede bulunur.",
          "Bu karışık yapı, palet talebini ikiye böler: üretici tesisler standart Euro ve ikinci el palet alırken, lojistik ve ihracat odaklı işletmeler hedef ülke kurallarına uygun palet arar.",
        ],
      },
      {
        h: "Kargo ve ihracat sevkiyatı için paletler",
        p: [
          "Hava kargosunda hafif ve temiz palet önemlidir; ağırlık maliyetidir. Deniz ve karayolu ihracatında ise ISPM-15 uyumlu, HT damgalı palet gerekir. Hedef ülke ve müşteri şartnamesi değişebildiği için siparişte nereye gönderildiğini belirtmeniz işimizi kolaylaştırır.",
        ],
        links: [["ISPM-15 nedir", "/rehber/ispm-15-nedir/"], ["İhracat paleti", "/urunler/ihracat-paleti/"], ["İhracatta palet ve ambalaj kuralları", "/rehber/ihracatta-palet-ve-ambalaj-kurallari/"]],
      },
      {
        h: "Sık sorulan ürünler",
        list: [
          "Plastik palet: hafif, temiz ve yıkanabilir olduğu için kargo ve gıda hatlarında.",
          "HT damgalı ihracat paleti: dış ticarete yönelik sevkiyatlarda.",
          "İkinci el Euro palet: iç sevkiyatta maliyet kontrolü için.",
          "Ahşap sandık: hassas makine veya cihazın ihracat ambalajında.",
        ],
        links: [["Plastik palet", "/urunler/plastik-palet/"], ["İkinci el palet", "/urunler/ikinci-el-palet/"], ["Ahşap sandık", "/urunler/ahsap-sandik/"]],
      },
      {
        h: "Hurda palet alımı ve teslimat",
        p: [
          "Pendik’teki işletmelerden hurda palet alımında en önemli konu erişimdir: araç giriş saati, yükleme rampası ve park imkânı. Bunları bildirirseniz aracı buna göre planlarız. Kurtköy ve çevresine genellikle Gebze’den TEM üzerinden gidilir; süre trafiğe göre değişir ve net bilgi teklifte yer alır.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"], ["Fiyat al", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Kurtköy’deki tesislere teslimat yapıyor musunuz?", a: "Evet. Gebze’den TEM ile ulaşıyoruz. Süre trafik ve araç programına göre değişir, teklifte bildirilir." },
      { q: "Havalimanı kargo işlemleri için hangi palet uygun?", a: "Hafif ve temiz yapısı nedeniyle plastik palet sık tercih edilir. Kargo firmanızın şartnamesini kontrol etmenizi öneririz." },
      { q: "İhracat paleti için HT damgası şart mı?", a: "Ahşap ambalaj kullanan ihracatta genellikle ISPM-15 uyumlu, HT damgalı ahşap istenir. Hedef ülkenin kuralını doğrulayın." },
      { q: "Pendik’ten hurda palet nasıl satarım?", a: "Adet, tür ve fotoğraf bilgisi ile WhatsApp’tan yazın; değerlendirme sonrası alım planlanır." },
    ],
  },
  {
    slug: "darica-palet",
    name: "Darıca",
    wave: 2,
    title: "Darıca Palet Satışı ve Hurda Palet Alımı | MEPAL",
    description: "Darıca’daki sanayi, liman ve depo işletmelerine palet satışı, ikinci el Euro palet ve hurda palet alımı. Gebze deposuna 12 km, hızlı teklif.",
    h1: "Darıca Palet Satışı ve Hurda Palet Alımı",
    keyword: "darıca palet",
    art: "region",
    distance: "yaklaşık 12 km · 20 dk",
    blurb: "Gebze’ye çok yakın Darıca’da küçük sanayi, liman ve ticaret işletmelerine palet.",
    answer:
      "Darıca, Gebze’nin güneyinde körfez kıyısında, küçük ve orta ölçekli sanayi, liman faaliyetleri ve yoğun ticaret alanıyla bilinen bir ilçedir. Gebze Pelitli deposundan yaklaşık 12 km uzaktadır; ikinci el ve Euro palet teslimatı ile hurda palet alımı yapıyoruz.",
    zones: ["Bayramoğlu", "Osmangazi", "Fevzi Çakmak", "Piri Reis", "Nenehatun", "Sırasöğütler", "Bağlarbaşı", "Darıca liman çevresi"],
    nearby: ["gebze-palet", "dilovasi-palet", "cayirova-palet"],
    sections: [
      {
        h: "Darıca’nın küçük ölçekli, hızlı çalışan yapısı",
        p: [
          "Darıca’da büyük OSB yoktur; onun yerine küçük sanayi siteleri, atölyeler, depolar ve liman çevresindeki lojistik işletmeler yaygındır. Bu da palet siparişlerinin çoğunlukla küçük ve orta adetlerde, ama sık sık geldiği anlamına gelir.",
          "Darıca körfez kıyısında bir yarımadaya yakın olduğu için ilçe içi yollarda yoğun saatlerde beklemeler olur. Biz bu nedenle çıkış saatini yoğunluğa göre ayarlar, mümkünse sabah erken ya da öğleden sonra teslimat planlarız.",
        ],
      },
      {
        h: "Darıca’da yaygın talepler",
        list: [
          "İkinci el Euro palet: küçük depolar ve toptancılar için maliyet dostu çözüm.",
          "Plastik palet: gıda ve su ürünleri soğuk zincirinde yıkanabilir yüzey için.",
          "Palet tamiri: sürekli kullanılan paletlerin ömrünü uzatmak için.",
          "Hurda palet alımı: küçük işletmelerde biriken kırık paletler için.",
        ],
        links: [
          ["İkinci el palet", "/urunler/ikinci-el-palet/"],
          ["Palet tamiri", "/hizmetler/palet-tamiri/"],
          ["Palet ömrü nasıl uzatılır", "/rehber/palet-omru-nasil-uzatilir/"],
        ],
      },
      {
        h: "Liman ve ticaret çevresi",
        p: [
          "Darıca’daki liman faaliyetleri ve çevresindeki gıda, tekstil ve dayanıklı tüketim malları ticareti, ambalaj ve palet devrini hızlandırır. Konteynere yükleme yapıyorsanız paletin ölçüsünün konteyner içine kaç adet sığacağını önceden hesaplamak sevkiyat maliyetini düşürür.",
        ],
        links: [["Konteyner palet hesaplama", "/araclar/konteyner-palet-hesaplama/"], ["Konteynere kaç palet sığar", "/rehber/konteynere-ve-tira-kac-palet-sigar/"]],
      },
      {
        h: "Teslimat ve alım",
        p: [
          "Gebze’den Darıca’ya kısa bir yol vardır; bu nedenle küçük partilerde bile teslimat planlanabilir. Aracınızla depoya gelmek isterseniz de Pelitli’deki depomuz Darıca’dan oldukça yakındır. Net süre teklifte bildirilir.",
        ],
        links: [["İletişim", "/iletisim/"], ["Teklif al", "/teklif-al/"], ["Fiyat tablosu", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Darıca’ya küçük adetle teslimat yapıyor musunuz?", a: "Evet, mesafe kısa olduğu için küçük partiler de planlanabilir. Nakliye koşulları teklifte yazılır." },
      { q: "Depoya kendi aracımla gelebilir miyim?", a: "Evet. Pelitli deposu Darıca’ya yakındır. Gelmeden önce ürün ve adedi bildirin." },
      { q: "Gıda soğuk zincirinde hangi palet önerilir?", a: "Yıkanabilir yüzeyi nedeniyle plastik palet sık seçilir. Ağırlık ve hat uyumuna göre danışabilirsiniz." },
      { q: "Tamir edilebilir paletleri atmadan önce size gösterebilir miyim?", a: "Elbette. Fotoğraf gönderin; tamir mi, hurda mı olduğunu birlikte değerlendirelim." },
    ],
  },
  {
    slug: "kartal-palet",
    name: "Kartal",
    wave: 2,
    title: "Kartal Palet Satışı ve Hurda Palet Alımı | MEPAL",
    description: "Kartal Soğanlık, Yakacık ve çevresi için palet satışı, ikinci el Euro palet, plastik palet ve hurda palet alımı. Gebze depodan teslimat, teklif alın.",
    h1: "Kartal Palet Satışı ve Hurda Palet Alımı",
    keyword: "kartal palet",
    art: "region",
    distance: "yaklaşık 45 km · 55 dk",
    blurb: "Kartal’ın ticaret, depo ve küçük üretim işletmelerine İstanbul Anadolu yakası palet teslimatı.",
    answer:
      "Kartal, İstanbul Anadolu yakasında ticaret, depolama ve küçük sanayi işletmelerinin bir arada bulunduğu bir ilçedir. Gebze deposundan yaklaşık 45 km uzakta; toplu siparişlerde Euro palet, ikinci el palet ve plastik palet teslim eder, hurda palet alırız.",
    zones: ["Soğanlık", "Yakacık", "Cevizli", "Uğur Mumcu", "Karlıktepe", "Orhantepe", "Hürriyet", "D-100 kenarı ticaret depoları"],
    nearby: ["pendik-palet", "atasehir-kadikoy-palet", "sancaktepe-palet"],
    sections: [
      {
        h: "Kartal’ın palet kullanıcıları",
        p: [
          "Kartal, Gebze veya Tuzla gibi tek bir sanayi omurgasına sahip değildir. Palet kullanan taraf ağırlıklı olarak toptancılar, gıda dağıtıcıları, mağaza arka depoları, küçük metal ve plastik atölyeleri ile inşaat malzemesi satıcılarıdır. Her birinin ihtiyacı farklıdır.",
          "Bu yapı, uzaktan sipariş verip malı kapıda görmek isteyen bir müşteri profili üretir. Onun için siparişi vermeden önce fotoğraf, ölçü ve kalite sınıfı bilgisini göndererek beklentiyi netleştiriyoruz.",
        ],
      },
      {
        h: "Kartal’da öne çıkan ürünler",
        table: {
          head: ["Kullanıcı", "Ürün", "Neden"],
          rows: [
            ["Gıda dağıtıcıları", "Euro palet, plastik palet", "Raf ve soğuk hat uyumu"],
            ["Mağaza arka depoları", "İkinci el Euro palet", "Hızlı devir, bütçe kontrolü"],
            ["İnşaat malzemesi", "Sağlam ikinci el, özel ölçülü palet", "Ağır ve düzensiz yük"],
            ["E-ticaret satıcıları", "Plastik palet, yarım Euro palet", "Küçük hacim, temizlik"],
          ],
        },
        links: [
          ["Euro palet", "/urunler/80x120-euro-palet/"],
          ["Yarım Euro palet 60x80", "/rehber/yarim-euro-palet-60x80/"],
          ["E-ticaret ve depo", "/sektorler/e-ticaret-ve-depo/"],
        ],
      },
      {
        h: "Anadolu yakasına toplu teslimat",
        p: [
          "Gebze’den Kartal’a gidiş genellikle TEM ya da D-100 ile yapılır. Bu hat gün içinde yoğun olabildiği için çıkış saatini aracın yüklenmesine ve trafiğe göre ayarlıyoruz. Mümkün olduğunda İstanbul içindeki birkaç adresi tek turda birleştirmek nakliye maliyetini düşürür; bu şekilde komşu işletmelerle birlikte sipariş vermenizi öneririz.",
        ],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"], ["Teklif al", "/teklif-al/"]],
      },
      {
        h: "Hurda palet alımı",
        p: [
          "İstanbul içindeki depolarda yer pahalıdır; biriken kırık palet hem yer kaplar hem de çevreye şikâyet yaratabilir. Hurda palet alımı için adet bilgisi ve yükleme noktası yeterlidir. Kaç araçla alınacağı miktara göre belirlenir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Fiyat al", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Kartal’a minimum kaç palet gönderiyorsunuz?", a: "Sabit bir alt sınır yazmıyoruz; adet küçükse başka siparişlerle birleştirme mümkün olabilir. Teklifte netleşir." },
      { q: "Ürünü görmeden sipariş vermek riskli mi?", a: "Fotoğraf ve kalite sınıfı bilgisi paylaşıyoruz. İsterseniz önce küçük bir numune partiyle başlayabilirsiniz." },
      { q: "Kartal’dan hurda palet alıyor musunuz?", a: "Evet, miktarına göre. Adet ve türü bildirin, yükleme planını birlikte yapalım." },
      { q: "Teslimat saati verebilir misiniz?", a: "Trafik yüzünden kesin saat taahhüdü vermiyoruz; planlanan aralık teklifte bildirilir." },
    ],
  },
  {
    slug: "atasehir-kadikoy-palet",
    name: "Ataşehir ve Kadıköy",
    wave: 2,
    title: "Ataşehir Kadıköy Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Ataşehir ve Kadıköy’deki mağaza, ofis, restoran ve depo işletmeleri için palet satışı ve hurda palet alımı. Ofisimiz Kozyatağı’nda, depo Gebze’de.",
    h1: "Ataşehir ve Kadıköy Palet Satışı ve Hurda Palet Alımı",
    keyword: "ataşehir kadıköy palet",
    art: "region",
    distance: "yaklaşık 55–60 km · 70–90 dk",
    blurb: "Ofisimiz Kozyatağı’nda; Ataşehir ve Kadıköy işletmelerine Gebze deposundan palet.",
    answer:
      "Ataşehir ve Kadıköy’de büyük fabrika yerine mağaza, restoran, ofis, etkinlik ve küçük depo işletmeleri öne çıkar. Ofisimiz Kozyatağı’ndadır; ürünler Gebze deposundan yaklaşık 55–60 km mesafeden gelir. Sevkiyat trafik koşullarına göre planlanır, net süre teklifte bildirilir.",
    zones: ["Kozyatağı", "Göztepe", "Bostancı", "Fikirtepe", "Ataşehir Atatürk Mah.", "İçerenköy", "Küçükbakkalköy", "Barbaros", "Kayışdağı"],
    nearby: ["umraniye-palet", "kartal-palet", "sancaktepe-palet"],
    sections: [
      {
        h: "Bu iki ilçede palet kimler için gündeme gelir",
        p: [
          "Ataşehir ve Kadıköy, palet açısından tipik bir üretim bölgesi değildir. Burada palet ihtiyacı çoğunlukla mağazaların arka depolarından, restoran ve kafe zincirlerinin merkez mutfaklarından, etkinlik ve fuar standı kuran firmalardan, e-ticaret satıcılarının küçük depolarından ve şehir içi dağıtım yapan işletmelerden doğar.",
          "Bazı müşteriler paleti taşıma değil, dekorasyon ya da depo rafı yerine kullanım için ister. Bu tür taleplerde palet kalite sınıfı ve görünümü ön plandadır; temiz, zımparalı ya da düzgün sınıflandırılmış palet istiyorsanız talebinize bunu yazın.",
        ],
      },
      {
        h: "Kozyatağı ofisi ve Gebze deposu: nasıl çalışıyoruz",
        p: [
          "Kozyatağı’ndaki ofisimiz görüşme, teklif ve evrak işleri içindir. Paletler Gebze Pelitli’deki depoda tutulur ve oradan araçla çıkar. Bu yüzden palet numunesi görmek istiyorsanız Gebze deposuna gelmeniz, ya da fotoğraf ve ölçü bilgisi talep etmeniz gerekir.",
        ],
        list: [
          "Teklif ve evrak: ofis ya da WhatsApp üzerinden.",
          "Stok kontrolü ve yükleme: Gebze depo.",
          "Teslimat: adresinize, araç programına göre.",
        ],
        links: [["Hakkımızda", "/hakkimizda/"], ["İletişim", "/iletisim/"]],
      },
      {
        h: "En sık istenen ürünler",
        list: [
          "İkinci el palet: küçük depo ve mağaza stoklama için.",
          "Yarım Euro palet (60x80): küçük hacimli ve perakende sevkiyat için.",
          "Plastik palet: temiz, hafif ve kolay yıkanır olduğu için.",
          "80x120 Euro palet: standart yüklemeler için.",
        ],
        links: [
          ["Yarım Euro palet", "/rehber/yarim-euro-palet-60x80/"],
          ["İkinci el palet", "/urunler/ikinci-el-palet/"],
          ["Plastik palet", "/urunler/plastik-palet/"],
          ["Euro palet", "/urunler/80x120-euro-palet/"],
        ],
      },
      {
        h: "Şehir içi teslimatın pratikleri",
        p: [
          "Ataşehir ve Kadıköy’de büyük araçla girmek zor olabilir; dar sokaklar, tonaj kısıtı ve park sorunu teslimat planını etkiler. Sipariş sırasında boşaltma noktasının sokak genişliği, araç giriş izni ve varsa forklift durumunu bildirmeniz gerekir. Böylece uygun araç seçilir.",
          "Hurda palet alımı için aynı kural geçerli: paletlerin araca kolayca yüklenebileceği bir noktada olması süreci hızlandırır.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"], ["Fiyat tablosu", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Kozyatağı ofisinden palet alabilir miyim?", a: "Ofis görüşme ve evrak içindir; paletler Gebze deposunda bulunur ve adrese gönderilir veya depodan alınır." },
      { q: "Ataşehir’e küçük bir teslimat mümkün mü?", a: "Mümkündür. Araç tipi, adet ve boşaltma koşulları teklifte netleşir." },
      { q: "Dekorasyon için temiz palet bulabilir miyim?", a: "Sınıflandırılmış ve temiz stoktan ürün seçebilirsiniz. Talebinizi ve kullanım amacını yazın." },
      { q: "Trafik yüzünden teslim saati kaçırılır mı?", a: "Şehir içi trafik değişkendir; bu yüzden kesin saat yerine zaman aralığı veririz." },
    ],
  },
  {
    slug: "sancaktepe-palet",
    name: "Sancaktepe",
    wave: 2,
    title: "Sancaktepe Palet Satışı ve Hurda Palet Alımı | MEPAL",
    description: "Sancaktepe, Samandıra ve Sarıgazi sanayi ve depolarına palet satışı, ikinci el Euro palet ve hurda palet alımı. TEM bağlantılı teslimat, teklif alın.",
    h1: "Sancaktepe Palet Satışı ve Hurda Palet Alımı",
    keyword: "sancaktepe palet",
    art: "region",
    distance: "yaklaşık 55 km · 60 dk",
    blurb: "Sancaktepe’nin Samandıra ve Sarıgazi sanayi sitelerine TEM üzerinden palet teslimatı.",
    answer:
      "Sancaktepe, Samandıra ve Sarıgazi çevresindeki sanayi siteleri, atölyeler ve lojistik depolarıyla büyüyen bir ilçedir. Gebze deposundan TEM ile yaklaşık 55 km uzakta; ikinci el palet, Euro palet ve özel ölçülü palet temini ile hurda palet alımı yapıyoruz.",
    zones: ["Samandıra", "Sarıgazi", "Yenidoğan", "Meclis", "Safa", "Veysel Karani", "Abdurrahmangazi", "Osmangazi", "Sancaktepe sanayi siteleri"],
    nearby: ["sultanbeyli-palet", "umraniye-palet", "pendik-palet"],
    sections: [
      {
        h: "Sancaktepe sanayisinin doğası",
        p: [
          "Sancaktepe, Gebze ya da Dilovası gibi kurumsal OSB yapılarından ziyade, küçük ve orta ölçekli atölyelerden oluşan bir üretim bölgesidir. Mobilya, ahşap işleme, plastik, metal doğrama, gıda ve inşaat malzemeleri gibi alanlarda faaliyet gösteren pek çok işletme Samandıra ve Sarıgazi çevresine dağılmıştır.",
          "Bu yapıda palet satın alma kararı çoğunlukla işletme sahibinin kendisi tarafından, hızlı ve esnek biçimde verilir. Bu nedenle sipariş süreci basit olmalı: ürün, adet, adres, teklif.",
        ],
      },
      {
        h: "Sancaktepe’de ihtiyaç duyulan paletler",
        table: {
          head: ["İşletme tipi", "Palet", "Gerekçe"],
          rows: [
            ["Mobilya ve ahşap atölyeleri", "Özel ölçülü palet, ikinci el palet", "Büyük hacimli, düzensiz ürünler"],
            ["Gıda ve içecek üreticisi", "Euro palet, plastik palet", "Hijyen ve raf uyumu"],
            ["İnşaat malzemesi satıcısı", "Sağlam ikinci el palet", "Ağır yük"],
            ["Küçük lojistik depo", "İkinci el Euro palet", "Bütçe ve hızlı devir"],
          ],
        },
        links: [["Özel ölçü palet", "/urunler/ozel-olcu-palet/"], ["İkinci el palet", "/urunler/ikinci-el-palet/"], ["Gıda ve içecek sektörü", "/sektorler/gida-ve-icecek/"]],
      },
      {
        h: "Ahşap atıkla çalışan atölyeler için fırsat",
        p: [
          "Ahşap işleyen atölyelerde kırpıntı ve fire doğal olarak oluşur. Bunlardan farklı olarak hurda palet bizim alanımızdır: kırık ya da çatlak palet, ahşap atık olarak geri dönüşüme verilir. Palet tahtası ve takozlarının kullanılabilir olanları ise tamir stokuna alınır. Fire ve palet atığının birbirinden ayrılması, alım sürecinde işimizi kolaylaştırır.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Palet tamiri", "/hizmetler/palet-tamiri/"]],
      },
      {
        h: "Teslimat",
        p: [
          "Gebze’den Sancaktepe’ye TEM üzerinden gidilir. Samandıra çevresinde sanayi siteleri içi yollar dar olabilir. Araç boyu ve boşaltma noktası bilgisi gelirse aracı ona göre seçeriz. Net süre teklifte yazılır.",
        ],
        links: [["Teklif al", "/teklif-al/"], ["Fiyat al", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Samandıra’ya palet teslimatı yapıyor musunuz?", a: "Evet, TEM üzerinden planlıyoruz. Teslim saati stok ve araç programına göre teklifte bildirilir." },
      { q: "Mobilya atölyesi için hangi ölçü uygun?", a: "Ürün boyutuna göre özel ölçülü palet gerekebilir. Ölçüyü bildirirseniz öneri sunarız." },
      { q: "Atölyemdeki ahşap fireyi de alır mısınız?", a: "Odağımız palet ve palet atığıdır. Başka ahşap fire için önce bilgi verin, değerlendirelim." },
      { q: "Küçük işletmeye teslimat yapar mısınız?", a: "Evet. Adet küçükse nakliye koşulları teklifte netleştirilir." },
    ],
  },

  // ───────────────────────── WAVE 3 ─────────────────────────
  {
    slug: "izmit-palet",
    name: "İzmit",
    wave: 3,
    title: "İzmit Palet Satışı ve Hurda Palet Alımı | MEPAL",
    description: "İzmit, Alikahya ve çevresi sanayisine palet satışı: Euro, ikinci el, plastik ve HT paleti. Gebze depodan toplu sevkiyat, hurda palet alımı, hızlı teklif.",
    h1: "İzmit Palet Satışı ve Hurda Palet Alımı",
    keyword: "izmit palet",
    art: "region",
    distance: "yaklaşık 50 km · 45 dk",
    blurb: "İzmit ve Alikahya sanayisine Gebze’den toplu palet sevkiyatı.",
    answer:
      "İzmit, Kocaeli’nin merkezi olarak otomotiv yan sanayi, lastik, kâğıt, metal ve gıda üretimi yapan tesisleri barındırır. Gebze deposundan yaklaşık 50 km uzakta; toplu siparişlerde Euro palet, ikinci el palet ve HT damgalı ihracat paleti teslim eder, hurda palet alırız.",
    zones: ["Alikahya", "Kullar", "Yahyakaptan", "Köseköy sınırı", "Yenişehir", "Sanayi Mahallesi", "Kabaoğlu", "Bekirdere", "İzmit D-130 sanayi hattı"],
    nearby: ["korfez-palet", "kartepe-palet", "derince-palet"],
    sections: [
      {
        h: "İzmit’te palet talebinin ölçeği",
        p: [
          "İzmit, Gebze’nin doğusunda yer aldığı için ihtiyacın yönü değişir: burada büyük üretici tesisler, otomotiv yan sanayi ve kâğıt ürünleri öne çıkar. Siparişler tek tek on-yirmi paletlik değil, tır dolusu ve düzenli olma eğilimindedir. Bu da fiyat ve lojistik planlamasını farklı bir yere taşır.",
          "Mesafe 50 km civarında olduğu için tek tek küçük teslimat yerine birkaç günlük ihtiyacı birleştirip toplu sevkiyat yapmayı öneriyoruz.",
        ],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"], ["Otomotiv ve yan sanayi", "/sektorler/otomotiv-ve-yan-sanayi/"]],
      },
      {
        h: "Alikahya ve çevresi",
        p: [
          "Alikahya, İzmit’in sanayi üretimi bakımından aktif mahallelerinden biridir; metal işleme, otomotiv parçası, plastik ve lojistik firmaları çevrede toplanmıştır. Alikahya’daki tesislerin palet talebi üretim hattına bağlıdır: hat durursa tesisin maliyeti artar. Bu nedenle mümkün olduğunda yedek palet stokunu önceden planlamanızı öneririz.",
        ],
      },
      {
        h: "İzmit’te yaygın ürünler",
        list: [
          "Euro palet: otomotiv yan sanayinin standart sevkiyat birimi.",
          "100x120 ve 114x114 palet: ölçüsü ürüne göre özelleşmiş sevkiyatlar için.",
          "ISPM-15 uyumlu, HT damgalı ihracat paleti: ihracat yapan tesisler için.",
          "İkinci el palet: iç sevkiyat ve depo içi kullanım için.",
        ],
        links: [
          ["100x120 palet", "/urunler/100x120-palet/"],
          ["CP palet", "/urunler/cp-palet/"],
          ["İhracat paleti", "/urunler/ihracat-paleti/"],
          ["İkinci el palet", "/urunler/ikinci-el-palet/"],
        ],
      },
      {
        h: "Hurda palet alımı ve düzenli program",
        p: [
          "Üretici tesislerde hurda palet miktarı düzenlidir. Haftalık alım planı kurarsak depo alanınız temiz kalır, paletler dışarıda yığılıp yağmurdan zarar görmez. Büyük hacimli alımlarda araç sayısı ve yükleme süresi önceden planlanır.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Palet alım-satım", "/hizmetler/palet-alim-satim/"]],
      },
      {
        h: "Teslimat",
        p: [
          "Gebze’den İzmit’e D-100 ya da otoyol üzerinden gidilir. İzmit içi trafik özellikle mesai çıkışlarında yavaşlayabilir. Net süre teklifle birlikte bildirilir.",
        ],
        links: [["Teklif al", "/teklif-al/"], ["Fiyat al", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "İzmit’e teslimat yapıyor musunuz?", a: "Evet, Gebze deposundan İzmit ve Alikahya çevresine toplu teslimat planlıyoruz. Süre teklifte bildirilir." },
      { q: "Tır dolusu palet siparişi verebilir miyim?", a: "Evet. Adet, ölçü ve teslim tarihine göre stok durumu kontrol edilir." },
      { q: "Düzenli aylık palet alımı için sözleşme yapılır mı?", a: "Düzenli ihtiyaçlar için program ve koşullar teklifte netleştirilir." },
      { q: "İzmit’ten hurda palet nasıl satılır?", a: "Adet, tür ve yükleme noktası bilgisiyle yazın; değerlendirme sonrası alım planlanır." },
    ],
  },
  {
    slug: "korfez-palet",
    name: "Körfez",
    wave: 3,
    title: "Körfez Palet Satışı ve Hurda Palet Alımı | MEPAL",
    description: "Körfez, Hereke ve Yarımca sanayisine palet satışı: kimya, petrokimya ve tekstil sevkiyatı için Euro, 100x120, plastik palet; hurda palet alımı.",
    h1: "Körfez Palet Satışı ve Hurda Palet Alımı",
    keyword: "körfez palet",
    art: "region",
    distance: "yaklaşık 40 km · 40 dk",
    blurb: "Körfez’in kimya, rafineri çevresi ve halı-tekstil tesislerine palet tedariki.",
    answer:
      "Körfez, Kocaeli’de petrokimya, rafineri çevresi, gübre, kimya ve Hereke’nin halı-tekstil geleneğiyle öne çıkan bir sanayi ilçesidir. Gebze deposundan yaklaşık 40 km uzakta; 100x120, Euro ve plastik palet teslim eder, hurda palet alırız.",
    zones: ["Yarımca", "Hereke", "Tütünçiftlik", "Kirazlıyalı", "Ilıcak", "Şirinyalı", "Körfez sanayi bölgesi", "Kömürcüler"],
    nearby: ["derince-palet", "dilovasi-palet", "izmit-palet"],
    sections: [
      {
        h: "Körfez’in sanayi yapısı",
        p: [
          "Körfez, kıyıdaki liman ve rafineri çevresindeki ağır sanayi ile iç kısımlardaki tekstil ve halı üretiminin buluştuğu bir ilçedir. Yarımca çevresinde kimya ve gübre ile ilgili tesisler yoğunlaşırken, Hereke’de halı ve dokuma üretimi dikkat çeker.",
          "İki grup arasında palet talebi çok farklıdır: kimya tarafında dayanıklılık ve sızıntı güvenliği, tekstil tarafında temizlik ve ürün sarma düzeni öne çıkar.",
        ],
      },
      {
        h: "Kimya ve gübre tarafı",
        p: [
          "Torba gübre, hammadde ve boyar maddeler genellikle ağır ve tozlu sevkiyatlardır. Bu yüklerde palet taşıma kapasitesi, istif yüksekliği ve nem dayanımı kritiktir. 100x120 palet ve gerektiğinde takviyeli yapı tercih edilebilir; plastik palet ise nemden etkilenmeyen yüzeyiyle öne çıkar.",
        ],
        links: [["Kimya ve plastik sektörü", "/sektorler/kimya-ve-plastik/"], ["Palet nasıl istiflenir", "/rehber/palet-nasil-istiflenir/"], ["100x120 palet", "/urunler/100x120-palet/"]],
      },
      {
        h: "Hereke ve tekstil tarafı",
        p: [
          "Halı rulosu, kumaş ve iplik sevkiyatında palet yüzeyindeki çivi, kıymık ya da pürüz ürüne zarar verebilir. Bu yüzden düz, temiz ve sağlam palet seçimi önemlidir. Uzun ruloların ise standart Euro palet üzerinde taşınması güç olabilir; özel ölçülü palet ya da sandık değerlendirilebilir.",
        ],
        links: [["Özel ölçü palet", "/urunler/ozel-olcu-palet/"], ["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"]],
      },
      {
        h: "Hurda palet alımı",
        p: [
          "Ağır sanayide kullanılan paletler yük altında hızlı yıpranır. Kırık paletleri ayırıp bize bildirirseniz tamire uygun olanları ayırırız. Kimyasal veya yağ bulaşmış paletler için önce bilgi vermenizi rica ederiz.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Palet tamiri", "/hizmetler/palet-tamiri/"]],
      },
      {
        h: "Teslimat",
        p: [
          "Körfez’e yol Gebze’den Dilovası ve Derince üzerinden geçer. Ağır sanayi bölgelerinde araç girişi güvenlik prosedürüne bağlı olabilir; bunun için araç bilgisini önceden paylaşıyoruz. Net süre teklifte bildirilir.",
        ],
        links: [["Teklif al", "/teklif-al/"], ["Fiyat tablosu", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Körfez’e teslimat var mı?", a: "Evet. Gebze deposundan Yarımca, Hereke ve çevresine planlıyoruz. Süre teklifte bildirilir." },
      { q: "Gübre ve hammadde torbası için hangi palet?", a: "Ağırlığa ve nem koşullarına göre 100x120 ya da plastik palet düşünülebilir. Yük bilgisini paylaşın." },
      { q: "Halı rulosu için özel çözüm var mı?", a: "Uzun yükler için özel ölçülü palet ya da sandık değerlendirilir." },
      { q: "Kimyasal bulaşmış paletleri alıyor musunuz?", a: "Duruma göre. Önce fotoğraf ve bilgi paylaşın." },
    ],
  },
  {
    slug: "derince-palet",
    name: "Derince",
    wave: 3,
    title: "Derince Palet Satışı ve Hurda Palet Alımı | MEPAL",
    description: "Derince Limanı çevresi ve sanayisi için ihracat paleti, HT damgalı palet, Euro palet ve hurda palet alımı. Gebze depodan limana yakın teslimat.",
    h1: "Derince Palet Satışı ve Hurda Palet Alımı",
    keyword: "derince palet",
    art: "region",
    distance: "yaklaşık 35 km · 35 dk",
    blurb: "Derince Limanı çevresindeki depo ve ihracat hazırlayan işletmelere HT damgalı palet.",
    answer:
      "Derince, Kocaeli’nin önemli liman ve demiryolu bağlantılı ilçelerinden biridir. Gebze deposundan yaklaşık 35 km uzakta; ihracat için ISPM-15 uyumlu HT damgalı palet, Euro palet ve plastik palet temin eder, liman çevresindeki depolardan hurda palet alırız.",
    zones: ["Derince Limanı çevresi", "Çenedağ", "Sırrıpaşa", "Yenikent", "Çavuşlu", "Fevzi Çakmak", "Derince sanayi", "Liman bağlantı depoları"],
    nearby: ["korfez-palet", "izmit-palet", "dilovasi-palet"],
    sections: [
      {
        h: "Derince ve liman lojistiği",
        p: [
          "Derince, liman ve demiryolu bağlantısı nedeniyle sanayi malzemesinin gelip gittiği bir geçiş noktasıdır. Burada palet, üretimden çok sevkiyatın parçası olarak karşımıza çıkar: gelen mal paletlenir, depolanır, yeniden yüklenir ve gönderilir.",
          "Bu tür çalışmada hem paletin kalitesi hem de ihracat kurallarına uygunluğu önemlidir; gümrükte sorun çıkarmaması için doğru işaretli ve uygun bir palet gerekir.",
        ],
      },
      {
        h: "İhracat paleti ve ISPM-15",
        p: [
          "Ahşap ambalaj malzemesi ihraç ederken birçok ülke ISPM-15 standardına uygun işlem görmüş ve damgalı ahşap ister. Biz ISPM-15 uyumlu, HT damgalı ihracat paleti temin ediyoruz. Damga, ısıl işlemin yapıldığına dair uluslararası işarettir; hedef ülke şartlarını gönderen firmanın doğrulaması gerekir.",
        ],
        links: [["ISPM-15 nedir", "/rehber/ispm-15-nedir/"], ["İhracat paleti", "/urunler/ihracat-paleti/"], ["İhracatta palet ve ambalaj kuralları", "/rehber/ihracatta-palet-ve-ambalaj-kurallari/"]],
      },
      {
        h: "Konteyner ve tır yüklemesi",
        p: [
          "Liman çevresinde en sık sorulan soru, bir konteynere ya da tıra kaç palet sığacağıdır. Cevap paletin ölçüsüne ve yerleşim düzenine bağlıdır. Hesaplama aracımızla ön hesap yapabilirsiniz.",
        ],
        links: [["Konteyner palet hesaplama", "/araclar/konteyner-palet-hesaplama/"], ["Konteynere ve tıra kaç palet sığar", "/rehber/konteynere-ve-tira-kac-palet-sigar/"], ["1 tır kaç palet alır", "/rehber/1-tir-kac-palet-alir/"]],
      },
      {
        h: "Hurda palet ve yükleme pratikleri",
        p: [
          "Liman çevresi depolarında alan değerlidir. Boşaltılan mallardan arta kalan paletlerin hızlı toplanması gerekir. Araç giriş izinleri ve yükleme saatlerini önceden paylaşırsanız aracı ona göre planlarız. Net süre teklifte bildirilir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["İhracat ve lojistik", "/sektorler/ihracat-ve-lojistik/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Derince Limanı çevresine palet teslim ediyor musunuz?", a: "Evet, Gebze deposundan Derince’ye teslimat planlıyoruz. Giriş kuralları için bilgi paylaşırız." },
      { q: "HT damgalı palet nedir?", a: "ISPM-15 gereği ısıl işlem görmüş ahşabı gösteren damgalı palettir. İhracatta çoğu ülke bunu ister." },
      { q: "Kendi fırınınızda ısıl işlem yapıyor musunuz?", a: "Hayır. Biz ISPM-15 uyumlu, HT damgalı ihracat paleti temin ediyoruz." },
      { q: "Hurda paletleri limandan alır mısınız?", a: "Miktara ve yükleme koşullarına göre alırız. Adet ve fotoğrafla yazın." },
    ],
  },
  {
    slug: "umraniye-palet",
    name: "Ümraniye",
    wave: 3,
    title: "Ümraniye Palet Satışı ve Hurda Palet Alımı | MEPAL",
    description: "Ümraniye Dudullu OSB, İMES ve çevresi sanayisine palet satışı: Euro, ikinci el, plastik ve özel ölçülü palet; hurda palet alımı. Gebze depodan teklif.",
    h1: "Ümraniye Palet Satışı ve Hurda Palet Alımı",
    keyword: "ümraniye palet",
    art: "region",
    distance: "yaklaşık 55 km · 65 dk",
    blurb: "Dudullu OSB ve İMES sanayisine Gebze’den toplu palet teslimatı.",
    answer:
      "Ümraniye, Dudullu Organize Sanayi Bölgesi ve İMES sanayi sitesiyle Anadolu yakasının en büyük üretim merkezlerinden biridir. Gebze deposundan yaklaşık 55 km uzakta; Euro, ikinci el, plastik ve özel ölçülü palet teslimatı ile hurda palet alımı yapıyoruz.",
    zones: ["Dudullu OSB", "İMES Sanayi Sitesi", "Alemdağ", "Çakmak", "Esenevler", "Ihlamurkuyu", "Kazım Karabekir", "Yukarı Dudullu"],
    nearby: ["atasehir-kadikoy-palet", "sancaktepe-palet", "sultanbeyli-palet"],
    sections: [
      {
        h: "Dudullu OSB ve İMES: iki ayrı tüketici",
        p: [
          "Dudullu OSB, orta ve büyük ölçekli üreticilerin bulunduğu organize bir sanayi bölgesidir; elektrik-elektronik, makine, mobilya, plastik, gıda ve savunma yan sanayi gibi birçok alan burada faaliyet gösterir. İMES Sanayi Sitesi ise yüzlerce küçük atölyenin yoğun olduğu, çok çeşitli ürünün çıktığı bir sitedir.",
          "OSB tarafında talep daha büyük hacimli ve planlıdır; İMES tarafında ise sık, küçük ve acil siparişler baskındır. İki gruba farklı teslimat modeli sunuyoruz.",
        ],
      },
      {
        h: "Dudullu’da elektrik-elektronik ve makine",
        p: [
          "Elektronik cihaz ve panel sevkiyatında paletin düzgünlüğü, yüzeyin temizliği ve ürüne zarar veren çivi ya da kıymığın olmaması önemlidir. Bu yüzden temiz Euro palet ya da plastik palet tercih edilir. Makine parçası sevkiyatında ise paletin taşıma kapasitesi öne çıkar.",
        ],
        links: [["Palet kaç kg taşır", "/rehber/palet-kac-kg-tasir/"], ["Palet çeşitleri ve seçimi", "/rehber/palet-cesitleri-ve-secimi/"], ["Plastik palet", "/urunler/plastik-palet/"]],
      },
      {
        h: "İMES’te küçük partiler",
        p: [
          "Küçük atölyelerin palet ihtiyacı çoğu zaman bir günde belirir ve ertesi gün karşılanmasını bekler. Bu nedenle stoktaki ikinci el ve Euro paletlerden küçük adetlerle sipariş alıyoruz. Komşu atölyeler birlikte sipariş verirse tek araçta birleştirip nakliye maliyetini paylaşabilirsiniz.",
        ],
        links: [["İkinci el palet", "/urunler/ikinci-el-palet/"], ["Euro palet", "/urunler/80x120-euro-palet/"], ["Toptan palet", "/hizmetler/toptan-palet/"]],
      },
      {
        h: "Hurda palet alımı ve teslimat",
        p: [
          "Ümraniye’de sanayi alanı yoğun olduğundan araç girişleri sınırlı olabilir. Boşaltma noktası, saat aralığı ve araç boyu bilgilerini önceden bildirin. Hurda palet alımında paletlerin yükleme noktasına toplanmış olması süreci hızlandırır. Net süre teklifte bildirilir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"], ["Fiyat tablosu", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Dudullu OSB’ye teslimat yapıyor musunuz?", a: "Evet. Gebze deposundan Ümraniye’ye planlıyoruz. OSB giriş kuralları için araç bilgisi paylaşırız." },
      { q: "İMES’teki küçük atölyeye palet satar mısınız?", a: "Evet. Küçük adetli siparişler de değerlendirilir; koşullar teklifte netleşir." },
      { q: "Elektronik ürün için hangi palet?", a: "Temiz, düzgün Euro palet ya da plastik palet uygun olur. Ürün ağırlığını bildirin." },
      { q: "Ümraniye’den hurda palet alır mısınız?", a: "Evet, miktara göre. Adet ve fotoğrafla yazın." },
    ],
  },
  {
    slug: "sultanbeyli-palet",
    name: "Sultanbeyli",
    wave: 3,
    title: "Sultanbeyli Palet Satışı ve Hurda Palet Alımı | MEPAL",
    description: "Sultanbeyli’deki atölye, tekstil, mobilya ve depo işletmelerine ikinci el ve Euro palet satışı, hurda palet alımı. Gebze depodan teslimat için teklif alın.",
    h1: "Sultanbeyli Palet Satışı ve Hurda Palet Alımı",
    keyword: "sultanbeyli palet",
    art: "region",
    distance: "yaklaşık 45 km · 50 dk",
    blurb: "Sultanbeyli’nin atölye ve küçük üretim işletmelerine esnek adetli palet tedariki.",
    answer:
      "Sultanbeyli, yoğun yerleşimin içinde tekstil, mobilya, plastik ve metal atölyeleriyle küçük ölçekli üretimin sürdüğü bir ilçedir. Gebze deposundan yaklaşık 45 km uzakta; ikinci el Euro palet, özel ölçülü palet ve plastik palet teslimatı ile hurda palet alımı yapıyoruz.",
    zones: ["Sultanbeyli sanayi alanı", "Battalgazi", "Mehmet Akif", "Abdurrahmangazi", "Hasanpaşa", "Turgut Reis", "Ahmet Yesevi", "Mimar Sinan"],
    nearby: ["sancaktepe-palet", "umraniye-palet", "pendik-palet"],
    sections: [
      {
        h: "Sultanbeyli’de üretimin yapısı",
        p: [
          "Sultanbeyli, tek bir büyük sanayi bölgesinden çok yerleşim içine dağılmış üretim atölyeleriyle tanınır. Burada tekstil ve konfeksiyon yan sanayisi, mobilya ve ahşap işleme, plastik ürün imalatı, metal doğrama ve gıda üretimi gibi birçok işkolu iç içe çalışır.",
          "Bu dağınık yapı palet satışında iki sonuç doğurur. Birincisi, sipariş adetleri küçüktür. İkincisi, atölyelerin depo alanı kısıtlıdır; çok miktarda palet saklamak yerine, ihtiyaç anında az miktar almak tercih edilir.",
        ],
      },
      {
        h: "Küçük adetlerde ne öneriyoruz",
        list: [
          "İkinci el Euro palet: düşük bütçeli, sık devirli ihtiyaçlar için.",
          "Yarım Euro palet: küçük hacimli ürün sevkiyatı için.",
          "Özel ölçülü palet: kumaş topu, mobilya parçası gibi standart dışı yükler için.",
          "Palet tamiri: elinizdeki az hasarlı paletleri yeniden kullanıma kazandırmak için.",
        ],
        links: [
          ["İkinci el palet", "/urunler/ikinci-el-palet/"],
          ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"],
          ["Palet tamiri", "/hizmetler/palet-tamiri/"],
        ],
      },
      {
        h: "Ortak sipariş ve nakliye",
        p: [
          "Sultanbeyli’ye giden araç, Sancaktepe ve Ümraniye hattıyla aynı yönde olduğundan komşu işletmelerle birlikte sipariş vermek mantıklıdır. Ortak sevkiyatta nakliye masrafı paylaşıldığı için birim maliyet düşer. Birkaç işletme aynı anda yazarsa tek turda birleştirmeyi öneririz.",
        ],
        links: [["Palet maliyetini düşürmenin yolları", "/rehber/palet-maliyetini-dusurmenin-yollari/"], ["Teklif al", "/teklif-al/"]],
      },
      {
        h: "Hurda palet alımı",
        p: [
          "Atölyelerde kırık palet genellikle kapı önünde biriktiği için sokak düzenini bozar. Küçük atölyelerin birikmiş hurda paletlerini topluca almak istiyoruz; yeter ki erişim imkânı olsun. Dar sokaklarda büyük araç giremeyebileceğinden, araç tipi önceden planlanır.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Fiyat al", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Sultanbeyli’ye küçük adetli teslimat yapıyor musunuz?", a: "Evet, komşu işletmelerle birleştirilen sevkiyatlarda küçük adetler de mümkündür. Teklifte netleşir." },
      { q: "Atölyem küçük, büyük araç giremez; ne olur?", a: "Araç tipini sokak genişliğine göre seçeriz. Adres ve erişim bilgisini paylaşın." },
      { q: "Az hasarlı paletleri tamir ettirebilir miyim?", a: "Evet. Palet tamiri hizmetimizle kullanılabilir hâle getirilebilir; fotoğraf göndermeniz yeterli." },
      { q: "Hurda paletlerimi nasıl satarım?", a: "Adet, tür ve fotoğrafla yazın; değerlendirme sonrası alım planlanır." },
    ],
  },
  {
    slug: "kartepe-palet",
    name: "Kartepe",
    wave: 3,
    title: "Kartepe Palet Satışı ve Hurda Palet Alımı | MEPAL",
    description: "Kartepe, Köseköy ve çevresindeki sanayi, tarım ve turizm işletmelerine palet satışı, ikinci el Euro palet ve hurda palet alımı. Gebze depodan teklif.",
    h1: "Kartepe Palet Satışı ve Hurda Palet Alımı",
    keyword: "kartepe palet",
    art: "region",
    distance: "yaklaşık 70 km · 60 dk",
    blurb: "Kartepe’nin Köseköy sanayisi, tarım ve turizm işletmelerine planlı palet teslimatı.",
    answer:
      "Kartepe, Köseköy çevresindeki sanayi tesisleri, tarımsal üretim ve dağ turizmi işletmeleriyle karışık bir yapıya sahiptir. Gebze deposundan yaklaşık 70 km uzakta olduğu için siparişleri planlı sevkiyatla getiriyoruz; ikinci el ve Euro palet teslimatı ile hurda palet alımı yapıyoruz.",
    zones: ["Köseköy", "Arslanbey", "Uzunçiftlik", "Suadiye", "Ataevler", "Sarımeşe", "Maşukiye", "Kartepe sanayi çevresi"],
    nearby: ["izmit-palet", "derince-palet", "korfez-palet"],
    sections: [
      {
        h: "Kartepe’de üç farklı palet kullanıcısı",
        p: [
          "Kartepe, tek tipte bir sanayi ilçesi değildir. Köseköy çevresinde üretim ve lojistik tesisleri vardır. Arslanbey ve Uzunçiftlik gibi kırsal ağırlıklı mahallelerde tarımsal ürünler yetiştirilir. Maşukiye ve çevresi ise turizm odaklı otel, restoran ve tesislerden oluşur.",
          "Üç kullanıcı grubu paleti tamamen farklı amaçlarla ister: sanayi sevkiyat için, çiftçi ürün toplama ve depolama için, turizm işletmeleri ise çoğu zaman depo ve dekorasyon için.",
        ],
      },
      {
        h: "Köseköy sanayisi için",
        p: [
          "Köseköy çevresindeki üretici tesisler, İzmit ve Gebze arasındaki konumları nedeniyle iki yönde sevkiyat yapar. Palet talebi düzenli ve nispeten büyüktür. Bu nedenle haftalık ya da iki haftalık planlı teslimat modelini öneriyoruz; araç sayısı ve gün önceden belirlenir.",
        ],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"], ["İzmit bölgesi", "/bolge/izmit-palet/"]],
      },
      {
        h: "Tarım ve gıda üreticileri",
        p: [
          "Meyve, sebze ve işlenmiş gıda sevkiyatında palet hijyeni önemlidir. Temiz, kokusuz ve kimyasal bulaşmamış palet seçilmelidir. Ürünü doğrudan toprağa yakın taşıyan çiftçiler için yıkanabilir plastik palet ya da sağlam ikinci el palet uygun olabilir. Gıda ile temas eden uygulamalarda palet seçiminde müşterinizin şartnamesini kontrol edin.",
        ],
        links: [["Gıda ve içecek sektörü", "/sektorler/gida-ve-icecek/"], ["Gıda sektörü için palet seçimi", "/rehber/gida-sektoru-icin-palet-secimi/"], ["Plastik palet", "/urunler/plastik-palet/"]],
      },
      {
        h: "Teslimat planlaması ve hurda palet",
        p: [
          "Gebze’den Kartepe’ye mesafe uzun olduğu için küçük tek seferlik teslimatlar yerine toplu sevkiyat daha ekonomiktir. Hurda palet alımında da aynı mantık geçerlidir: yeterli miktar birikmişse araç gönderilir. Net süre ve miktar eşiği teklifte bildirilir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"], ["Fiyat tablosu", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Kartepe’ye küçük adetle teslimat yapılır mı?", a: "Mesafe nedeniyle toplu sevkiyat daha uygun olur. Küçük adetler için koşullar teklifte netleşir." },
      { q: "Çiftçi olarak ürün toplama için palet alabilir miyim?", a: "Evet. Kullanım amacını bildirirseniz uygun palet türünü öneririz." },
      { q: "Turizm tesisimiz dekorasyon için palet kullanmak istiyor.", a: "Temiz, sınıflandırılmış ikinci el paletler bu iş için sorulabilir. Talebinizi yazın." },
      { q: "Hurda palet için araç gönderir misiniz?", a: "Yeterli miktar varsa evet. Adet ve fotoğrafla yazın." },
    ],
  },
  // ───────────────────────── YENİ BÖLGE SAYFALARI (rakip analizi turu) ─────────────────────────
  {
    slug: "kocaeli-palet",
    name: "Kocaeli",
    wave: 1,
    title: "Kocaeli Palet Tedariği: Euro, Ahşap, Plastik | MEPAL",
    description: "Kocaeli genelinde palet tedariği: İzmit, Körfez, Derince, Gölcük, Karamürsel, Kandıra ve Dilovası fabrikalarına Gebze depodan toplu palet, hurda palet alımı.",
    h1: "Kocaeli Palet Tedariği",
    keyword: "kocaeli palet",
    art: "region",
    distance: "il geneli · yaklaşık 10–110 km · 15 dk–2 saat",
    blurb: "Gebze deposundan Kocaeli’nin tüm sanayi ilçelerine toplu palet ve hurda palet alımı.",
    answer:
      "MEPAL’in deposu Kocaeli’nin Gebze ilçesindedir ve il genelindeki fabrikalara Euro palet, ahşap palet, ikinci el palet, plastik palet ve HT damgalı ihracat paleti tedarik eder. Hurda ve kırık paletleri yerinden alırız. Mesafeye göre süre değişir; net süre ve miktar eşiği teklifte bildirilir.",
    zones: ["İzmit", "Körfez", "Derince", "Kartepe", "Gölcük", "Karamürsel", "Kandıra", "Dilovası", "Başiskele", "Çayırova", "Darıca"],
    nearby: ["gebze-palet", "izmit-palet", "korfez-palet", "derince-palet", "kartepe-palet", "dilovasi-palet"],
    sections: [
      {
        h: "Kocaeli neden palet tüketen bir il",
        p: [
          "Kocaeli, Türkiye’nin sanayi üretiminde en yüksek paya sahip illerinden biridir. Otomotiv ve yan sanayi, petrokimya, kimya, lastik, kâğıt, metal işleme, makine ve gıda tesisleri il sınırları içinde yan yana çalışır. Üretimin kendisi kadar, üretilenin sevk edilmesi de palet tüketir: her mamul, her ara ürün bir paletin üstünde yola çıkar.",
          "Bu yoğunluk, palet tedariğinde iki şeyi öne çıkarır. Birincisi düzenlilik: haftalık ya da aylık ihtiyaçlar önceden planlanabilir. İkincisi ölçü çeşitliliği: aynı ilde 80x120 Euro palet, 100x120 kimya paleti, 114x114 CP paleti ve özel ölçülü paletler birlikte talep edilir.",
        ],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"], ["Euro palet 80x120", "/urunler/80x120-euro-palet/"]],
      },
      {
        h: "Depodan ilçelere yaklaşık mesafeler",
        p: [
          "Depomuz Gebze Pelitli’dedir. Aşağıdaki mesafe ve süreler yaklaşık değerlerdir; trafik, araç programı ve yükleme noktasına göre değişir.",
        ],
        table: {
          caption: "Gebze Pelitli depodan Kocaeli ilçelerine yaklaşık değerler",
          head: ["Bölge", "Yaklaşık mesafe", "Yaklaşık süre", "Sayfa"],
          rows: [
            ["Gebze, Dilovası, Çayırova, Darıca", "5–25 km", "10–30 dk", "Gebze ve komşu ilçe sayfaları"],
            ["Körfez, Derince", "35–45 km", "40–50 dk", "Körfez ve Derince sayfaları"],
            ["İzmit, Kartepe", "45–60 km", "45–70 dk", "İzmit ve Kartepe sayfaları"],
            ["Gölcük, Karamürsel", "65–90 km", "1–1,5 saat", "Bu sayfa"],
            ["Kandıra", "100 km ve üzeri", "1,5–2 saat", "Bu sayfa"],
          ],
        },
        links: [
          ["Gebze", "/bolge/gebze-palet/"],
          ["İzmit", "/bolge/izmit-palet/"],
          ["Körfez", "/bolge/korfez-palet/"],
          ["Derince", "/bolge/derince-palet/"],
          ["Kartepe", "/bolge/kartepe-palet/"],
          ["Dilovası", "/bolge/dilovasi-palet/"],
        ],
      },
      {
        h: "Gölcük, Karamürsel ve Kandıra",
        p: [
          "Gölcük ve Karamürsel körfezin güney kıyısındadır. Gölcük’te otomotiv ve tersane çevresi iş kolları, Karamürsel’de ise küçük ve orta ölçekli üretim ile gıda ve tarım ürünleri öne çıkar. Bu ilçelerde palet talebi genellikle tek seferde birkaç yüz ile birkaç bin arasında değişen partiler halinde gelir.",
          "Kandıra Karadeniz kıyısındaki geniş, ormanlık ve tarım ağırlıklı bir ilçedir. Orman ürünleri, tarım ve küçük işletmeler palet ihtiyacı duyar. Mesafe uzun olduğu için burada birkaç talebi birleştirerek toplu sevkiyat planlamak daha verimlidir.",
        ],
      },
      {
        h: "Hurda palet ve düzenli program",
        p: [
          "Üretici tesislerde kırık, çürük ya da kullanım ömrünü doldurmuş palet düzenli olarak birikir. Yerinden alım için adet, tür ve yükleme noktasını bildirmeniz yeterlidir. Miktar yeterliyse araç planlanır; küçük partilerde iki üç talep birleştirilebilir.",
          "Düzenli ihtiyacı olan tesisler için hem satış hem hurda alımını tek programda toplamak mümkündür: yeni ya da onarılmış paletler gelir, kullanılamaz paletler aynı araçla geri döner.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Palet alım-satım", "/hizmetler/palet-alim-satim/"], ["Fiyat al", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Kocaeli’nin hangi ilçelerine palet teslim ediyorsunuz?", a: "Gebze, Dilovası, Çayırova, Darıca, Körfez, Derince, İzmit, Kartepe, Gölcük, Karamürsel ve Kandıra dahil il genelini kapsıyoruz. Süre mesafeye göre teklifte bildirilir." },
      { q: "Kocaeli dışına da sevkiyat yapıyor musunuz?", a: "Evet, hizmet alanımız Türkiye geneli; Kocaeli ve İstanbul depodan en hızlı ulaşılan bölgelerdir." },
      { q: "Uzak ilçeler için asgari miktar var mı?", a: "Mesafe arttıkça toplu sevkiyat daha uygun olur. Miktar eşiği ürün ve ilçeye göre teklifte netleşir." },
      { q: "Hurda paletimi nasıl satarım?", a: "Adet, tür ve yükleme noktasını WhatsApp’tan yazın; değerlendirme sonrası alım planlanır." },
      { q: "Düzenli aylık palet ihtiyacı için program yapılır mı?", a: "Evet. Ürün, adet ve sıklık belirlenerek program ve koşullar teklifte yazılı hale getirilir." },
    ],
  },
  {
    slug: "istanbul-palet",
    name: "İstanbul",
    wave: 2,
    title: "İstanbul Palet Tedariği: Anadolu ve Avrupa | MEPAL",
    description: "İstanbul’da Anadolu ve Avrupa yakası sanayi alanlarına palet tedariği: Euro, ahşap, ikinci el ve plastik palet; hurda palet alımı. Gebze depodan toplu sevkiyat.",
    h1: "İstanbul Palet Tedariği",
    keyword: "istanbul palet",
    art: "region",
    distance: "il geneli · yaklaşık 35–120 km · 40 dk–2,5 saat",
    blurb: "Gebze deposundan İstanbul’un Anadolu ve Avrupa yakası sanayi alanlarına toplu palet.",
    answer:
      "MEPAL, Gebze deposundan İstanbul’un Anadolu yakasına en kısa sürede, Avrupa yakasına ise planlı toplu sevkiyatla palet tedarik eder. Euro palet, ahşap palet, ikinci el palet, plastik palet ve HT damgalı ihracat paleti sunar, hurda paletleri yerinden alırız. Net süre trafik ve araç programına göre teklifte bildirilir.",
    zones: ["Tuzla", "Pendik", "Kurtköy", "Kartal", "Maltepe", "Ümraniye", "Çekmeköy", "Sancaktepe", "Sultanbeyli", "Esenyurt", "Hadımköy", "İkitelli", "Başakşehir", "Silivri"],
    nearby: ["tuzla-palet", "pendik-palet", "kartal-palet", "umraniye-palet", "atasehir-kadikoy-palet", "sancaktepe-palet"],
    sections: [
      {
        h: "Anadolu yakası: depoya en yakın bölge",
        p: [
          "İstanbul’un Anadolu yakası, Gebze deposuna Kocaeli sınırından hemen sonra başlar. Tuzla’daki tersane ve kimya tesisleri ile organize sanayi bölgeleri, Pendik ve Kurtköy’deki lojistik ve üretim alanları, Kartal, Maltepe, Ümraniye, Çekmeköy, Sancaktepe ve Sultanbeyli’deki küçük ve orta ölçekli atölyeler palet tüketicisidir.",
          "Bu yakada TEM ve D-100 ile hızlı bağlantı sayesinde depodan çıkış kısa sürede planlanabilir. Süre hat boyunca trafik yoğunluğuna bağlıdır; sabah ve akşam saatlerinden kaçınan yükleme düzeni tavsiye ederiz.",
        ],
        links: [
          ["Tuzla", "/bolge/tuzla-palet/"],
          ["Pendik", "/bolge/pendik-palet/"],
          ["Kartal", "/bolge/kartal-palet/"],
          ["Ümraniye", "/bolge/umraniye-palet/"],
          ["Sancaktepe", "/bolge/sancaktepe-palet/"],
          ["Sultanbeyli", "/bolge/sultanbeyli-palet/"],
        ],
      },
      {
        h: "Avrupa yakası sanayi alanları",
        p: [
          "Avrupa yakasında palet talebi birkaç büyük kümede toplanır. İkitelli ve Başakşehir çevresi matbaa, metal, plastik ve ticaret ağırlıklıdır; Esenyurt, Beylikdüzü ve Hadımköy tarafında üretim ve depolama tesisleri yoğundur; Silivri ve Çatalca’da daha geniş araziler ve gıda ile lojistik depoları bulunur.",
          "Köprü ve otoyol geçişleri nedeniyle Avrupa yakası sevkiyatlarında süre ve geçiş masrafı planı etkiler. Bu nedenle tek tek küçük teslimat yerine bir ya da birkaç günlük ihtiyacı birleştirmenizi öneririz; net koşullar teklifte yazılır.",
        ],
      },
      {
        h: "İstanbul’da hangi paletler öne çıkar",
        list: [
          "Euro palet (80x120): perakende, gıda ve lojistik depolarında standart birim.",
          "İkinci el palet: iç sevkiyat, depo içi hareket ve bütçeyi koruyan alımlar.",
          "Plastik palet: hijyen gerektiren gıda, ilaç ve kozmetik hatları.",
          "HT damgalı, ISPM-15 uyumlu ihracat paleti: liman ve ihracat sevkiyatları.",
          "Özel ölçülü palet ve sandık: makine, parça ve ağır yük sevkiyatları.",
        ],
        links: [
          ["Euro palet", "/urunler/80x120-euro-palet/"],
          ["Plastik palet", "/urunler/plastik-palet/"],
          ["İhracat paleti", "/urunler/ihracat-paleti/"],
          ["İkinci el palet", "/urunler/ikinci-el-palet/"],
          ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"],
        ],
      },
      {
        h: "Hurda palet alımı ve ofis",
        p: [
          "İstanbul’daki depo ve fabrikalarda biriken hurda paletler için yerinden alım yapıyoruz. Miktar ve adres bilgisiyle yazarsanız araç planlanır. Ofisimiz Anadolu yakasında, Kozyatağı’ndadır; ürün stoğu ve yükleme ise Gebze deposundan yapılır, bu yüzden stok ve ürün kontrolü için önce arayın.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"], ["İletişim", "/iletisim/"]],
      },
    ],
    faq: [
      { q: "İstanbul’un hangi bölgelerine teslim ediyorsunuz?", a: "Anadolu yakasına öncelikli, Avrupa yakasına planlı toplu sevkiyatla teslimat yapıyoruz. Süre ilçeye ve trafiğe göre teklifte bildirilir." },
      { q: "Avrupa yakasına küçük adetle palet gönderir misiniz?", a: "Mesafe ve geçiş masrafı nedeniyle toplu sevkiyat daha uygun olur. Küçük adetlerde koşullar teklifte netleşir." },
      { q: "Ürünü depodan kendi aracımla alabilir miyim?", a: "Evet. Gebze Pelitli deposundan yükleme yapılır; gelmeden önce stok ve adedi telefonla teyit edin." },
      { q: "İstanbul’dan hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adres bilgisi ile talebi iletirseniz alım planlanır." },
      { q: "İhracat için hangi palet kullanılmalı?", a: "Ahşap ambalajda ISPM-15 uyumlu, HT damgalı palet gerekir; ayrıntı için ihracat paleti sayfasına bakın." },
    ],
  },
  {
    slug: "balcik-palet",
    name: "Balçık",
    wave: 1,
    title: "Balçık Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Gebze Balçık’taki fabrikalara dakikalar içinde palet: Euro, ikinci el, plastik ve HT paleti. Pelitli depodan hızlı çıkış, hurda palet alımı, hızlı teklif.",
    h1: "Balçık Palet Satışı ve Hurda Palet Alımı",
    keyword: "balçık palet",
    art: "region",
    distance: "yaklaşık 5–8 km · 10–15 dk",
    blurb: "Pelitli deposundan Balçık fabrikalarına dakikalar içinde palet çıkışı.",
    answer:
      "Balçık, Gebze’nin sanayi mahallelerinden biridir ve MEPAL’in Pelitli deposuna yaklaşık 5–8 km uzaklıktadır. Buradaki fabrikalara Euro palet, ikinci el palet, plastik palet ve HT damgalı ihracat paleti sağlar, hurda paletleri yerinden alırız. Stoğa göre kısa sürede, acil işlerde daha kısa sürede teslim planlanır.",
    zones: ["Balçık Mahallesi", "Balçık sanayi siteleri", "Gebze Plastikçiler OSB çevresi", "Pelitli", "Mollafenari", "Hacıhalil", "Gebze Güzeller yönü"],
    nearby: ["gebze-palet", "dilovasi-palet", "cayirova-palet", "darica-palet"],
    sections: [
      {
        h: "Balçık sanayisi",
        p: [
          "Balçık, Gebze’nin güney-batı tarafında, Pelitli ve Gebze OSB hattının yakınında yer alan yoğun bir sanayi bölgesidir. Mahalle içinde ve çevresinde metal işleme, plastik enjeksiyon, kimya ve boya, makine imalatı, ambalaj ve küçük ölçekli yan sanayi tesisleri birlikte çalışır. Büyük OSB parsellerinin yanında, kiralık depo ve atölye yapıları da çok sayıdadır.",
          "Bu karma yapı, palet talebini de çeşitli kılar: aynı caddede bir tesis günde onlarca palet tüketirken komşusu ayda birkaç yüz palet alır. Çoğu zaman ihtiyaç plansız doğar, bu yüzden depoya yakınlık en büyük avantajdır.",
        ],
        links: [["Gebze sayfası", "/bolge/gebze-palet/"], ["Kimya ve plastik sektörü", "/sektorler/kimya-ve-plastik/"]],
      },
      {
        h: "Hızlı çıkış ve acil ihtiyaç",
        p: [
          "Sevkiyatın öne çekildiği, bir tırın beklenenden erken geldiği ya da paletlerin yarısının kırık çıktığı anlar Balçık’ta sık yaşanır. Mesafe kısa olduğundan stoğumuzda bulunan ürün için hızlı çıkış mümkün olabilir; bunun için sabah saatlerinde ürün ve adet bilgisini bildirmeniz işleri hızlandırır.",
          "Kendi aracınızla gelmek isterseniz yol 10–15 dakikayı bulmaz. Önce telefonla arayın, ürün hazır tutulsun.",
        ],
        list: [
          "Ürün türü, ölçü ve adedi birlikte yazın.",
          "Yükleme ya da boşaltma yapılacak kapı ve araç tipini belirtin.",
          "Fatura bilgilerinizi hazır bulundurun.",
        ],
      },
      {
        h: "Balçık’ta çok sorulan ürünler",
        table: {
          caption: "Balçık fabrikalarının sık talep ettiği ürünler",
          head: ["Ürün", "Kullanım", "Not"],
          rows: [
            ["80x120 Euro palet", "Genel depolama ve sevkiyat", "Raf ve tır yüklemesine uygun"],
            ["İkinci el palet", "İç sevkiyat, depo içi hareket", "Sınıflandırılmış stok"],
            ["100x120 palet", "Kimya, boya, IBC ve varil", "Ağır ve sıvı ambalajlar için"],
            ["Plastik palet", "Hijyen gerektiren hatlar", "Yıkanabilir, kıymıksız"],
            ["HT damgalı ihracat paleti", "İhracat yapan tesisler", "ISPM-15 uyumlu temin"],
          ],
        },
        links: [
          ["Euro palet", "/urunler/80x120-euro-palet/"],
          ["100x120 palet", "/urunler/100x120-palet/"],
          ["Plastik palet", "/urunler/plastik-palet/"],
          ["İhracat paleti", "/urunler/ihracat-paleti/"],
        ],
      },
      {
        h: "Hurda ve kırık palet",
        p: [
          "Balçık’taki tesislerde kırık palet hızla birikir ve depoda yer kaplar. Adet, tür ve yükleme noktasını yazarsanız hurda ve onarılabilir paletleri yerinden alırız. Onarıma uygun olanlar tamir edilerek yeniden değerlendirilir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Palet tamiri", "/hizmetler/palet-tamiri/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Balçık’a teslimat ne kadar sürer?", a: "Depo yakın olduğu için stoktaki ürünlerde kısa sürede, acil işlerde öncelikle çıkış planlanır. Net süre teklifte bildirilir." },
      { q: "Depodan kendim yükleme yapabilir miyim?", a: "Evet. Pelitli deposu Pazartesi–Cumartesi 08:30–18:00 arasında açıktır; gelmeden önce stok teyidi alın." },
      { q: "Küçük adetli sipariş alıyor musunuz?", a: "Evet. Birkaç adetten tır dolusuna kadar talepler değerlendirilir; koşullar teklifte bildirilir." },
      { q: "Hurda palet için araç gönderir misiniz?", a: "Miktar yeterliyse evet. Adet ve fotoğrafla WhatsApp’tan yazın." },
    ],
  },
  {
    slug: "gebze-osb-palet",
    name: "Gebze OSB",
    wave: 1,
    title: "Gebze OSB Palet Tedariği | MEPAL",
    description: "Gebze Organize Sanayi Bölgesi fabrikalarına palet tedariği: Euro, ikinci el, plastik ve HT paleti; hurda palet alımı. Pelitli depodan hızlı toplu sevkiyat.",
    h1: "Gebze OSB Palet Tedariği",
    keyword: "gebze osb palet",
    art: "region",
    distance: "yaklaşık 8–12 km · 15–20 dk",
    blurb: "Gebze OSB fabrikalarına Pelitli depodan düzenli, toplu palet tedariği.",
    answer:
      "Gebze Organize Sanayi Bölgesi (GOSB) MEPAL’in Pelitli deposundan yaklaşık 8–12 km uzaklıktadır. OSB’deki tesislere Euro palet, ikinci el palet, plastik palet ve HT damgalı ihracat paleti tedarik eder, hurda paletleri yerinden alırız. Düzenli ihtiyaçlar için program yapılabilir; net süre teklifte bildirilir.",
    zones: ["Gebze OSB (GOSB)", "GOSB kapı girişleri", "Çayırova sınırı", "Mollafenari", "Pelitli", "Hacıhalil"],
    nearby: ["gebze-palet", "cayirova-palet", "dilovasi-palet", "darica-palet"],
    sections: [
      {
        h: "Gebze OSB’nin yapısı",
        p: [
          "Gebze Organize Sanayi Bölgesi, Gebze ile Çayırova sınırında, TEM otoyoluna yakın kurulmuş büyük bir üretim alanıdır. Bölgede otomotiv ve yan sanayi, makine, metal, kimya, elektrik-elektronik ve savunma ile ilgili üretim yapan tesisler yer alır. Parseller geniştir; birçok tesis hem üretim hem lojistik depo olarak çalışır.",
          "Bu ölçek palet talebini düzenli ve yüksek hacimli kılar. OSB içindeki bir tesis için palet, yan malzeme değil üretim akışının parçasıdır: eksik ya da uygunsuz palet yükleme hattını durdurur.",
        ],
        links: [["Otomotiv ve yan sanayi", "/sektorler/otomotiv-ve-yan-sanayi/"], ["Toptan palet", "/hizmetler/toptan-palet/"]],
      },
      {
        h: "OSB tesislerinin palet beklentileri",
        p: [
          "OSB’deki büyük tesisler genellikle ölçü ve kalite şartnamesi ile çalışır. Müşterinin ya da tedarik zincirinin belirlediği ölçü (80x120, 100x120, 114x114 ya da özel ölçü), alt tabla yapısı ve nem düzeyi önceden tanımlıdır. Biz sipariş öncesi şartname ya da örnek palet üzerinden ölçü ve sınıf teyidi yapmanızı öneririz.",
        ],
        list: [
          "Euro palet (80x120): standart sevkiyat ve raf yüklemesi.",
          "100x120 ve 114x114 (CP) palet: kimya ve proses sanayi ambalajı.",
          "Özel ölçülü palet: makine, parça ve büyük hacimli ürünler.",
          "HT damgalı ihracat paleti: ISPM-15 uyumlu temin.",
          "İkinci el palet: iç sevkiyat ve ara depolama.",
        ],
        links: [
          ["CP palet", "/urunler/cp-palet/"],
          ["100x120 palet", "/urunler/100x120-palet/"],
          ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"],
          ["İhracat paleti", "/urunler/ihracat-paleti/"],
        ],
      },
      {
        h: "Düzenli program ve hurda palet",
        p: [
          "Tesisler için en verimli düzen, haftalık ya da iki haftalık sabit sevkiyat programıdır: ihtiyaç duyulan palet gelir, kullanılamaz hale gelen palet aynı araçla geri alınır. Böylece depo alanı yığılmadan temiz kalır. Hacim büyüdüğünde ürün, kalite sınıfı ve teslim penceresi yazılı olarak teklifte netleştirilir.",
          "Hurda ve onarılabilir paletleri yerinden alıyoruz; onarıma uygun olanlar tamir edilerek tekrar sevkiyata verilir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Palet tamiri", "/hizmetler/palet-tamiri/"], ["Fiyat al", "/palet-fiyatlari/"]],
      },
      {
        h: "Giriş ve teslimat koordinasyonu",
        p: [
          "OSB tesislerine araç girişinde kapı kontrolü ve randevu saatleri uygulanabilir. Teslimat öncesi araç plakası, şoför bilgisi ve kapı numarasını bize iletmeniz sevkiyatın sorunsuz geçmesini sağlar.",
        ],
        links: [["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Gebze OSB’ye teslimat yapıyor musunuz?", a: "Evet. Pelitli deposundan OSB’deki tesislere toplu ve düzenli sevkiyat yapıyoruz. Süre teklifte bildirilir." },
      { q: "Şartnameye uygun ölçü ve kalite sağlanabilir mi?", a: "Şartname ya da örnek palet gönderirseniz uygun ürünü teklifte önerir, ölçü ve sınıf teyidi yaparız." },
      { q: "Düzenli aylık palet tedariği yapılır mı?", a: "Evet. Ürün, adet ve sıklık belirlenerek program ve koşullar teklifte yazılı hale getirilir." },
      { q: "OSB içinden hurda palet alıyor musunuz?", a: "Evet. Adet ve yükleme noktasıyla yazarsanız yerinden alım planlanır." },
      { q: "İhracat için HT damgalı palet temin edilebilir mi?", a: "Evet. ISPM-15 uyumlu, HT damgalı ihracat paleti temin ediyoruz; adet ve ölçüyle teklif isteyin." },
    ],
  },
  {
    slug: "plastikciler-osb-palet",
    name: "Plastikçiler OSB",
    wave: 1,
    title: "Plastikçiler OSB Palet Tedariği | MEPAL",
    description: "Gebze Plastikçiler OSB tesislerine palet: Euro, ikinci el, plastik ve HT paleti. Pelitli depodan dakikalar içinde sevkiyat, hurda palet alımı, hızlı teklif.",
    h1: "Plastikçiler OSB Palet Tedariği",
    keyword: "plastikçiler osb palet",
    art: "region",
    distance: "yaklaşık 4–7 km · 8–15 dk",
    blurb: "Plastik sanayicilerinin OSB’sine Pelitli depodan dakikalar içinde palet.",
    answer:
      "Gebze Plastikçiler OSB, plastik ve polimer ürün üretimine odaklı bir organize sanayi bölgesidir ve MEPAL’in Pelitli deposundan yaklaşık 4–7 km uzaktadır. Buradaki tesislere Euro palet, ikinci el palet, plastik palet ve HT damgalı ihracat paleti sağlıyor, hurda paletleri yerinden alıyoruz.",
    zones: ["Gebze Plastikçiler OSB (GEPOSB)", "Pelitli", "Balçık", "Mollafenari", "Gebze OSB yönü"],
    nearby: ["gebze-palet", "dilovasi-palet", "cayirova-palet", "darica-palet"],
    sections: [
      {
        h: "Plastikçiler OSB nedir",
        p: [
          "Gebze Plastikçiler Organize Sanayi Bölgesi, 2000’li yılların başında plastik sektörüne yönelik kurulmuş, yaklaşık 140 hektarlık bir alanda yüz kırkın üzerinde sanayi parseline sahip bir bölgedir. Plastik enjeksiyon, ekstrüzyon, şişirme, ambalaj filmi, boru ve profil, geri dönüşüm ve kalıp işleri bölgenin ana faaliyet alanlarıdır.",
          "Plastik üretimi hacimli ama hafif bir yük üretir. Mamul çoğunlukla koli, çuval, bigbag, kasa ya da rulo halinde paletlenir; bu da paletin yük taşıma kapasitesinden çok boyutlarına ve istiflenebilirliğine önem kazandırır.",
        ],
        links: [["Kimya ve plastik", "/sektorler/kimya-ve-plastik/"], ["Gebze sayfası", "/bolge/gebze-palet/"]],
      },
      {
        h: "Plastik sektöründe palet seçimi",
        p: [
          "Plastik sanayicilerinde iki kullanım tipi öne çıkar. Hammadde (granül, reçine) ağır çuvallar halinde gelir ve sağlam, düzgün yüzeyli bir palet ister. Mamul ise koli ya da hacimli kasalarla çıkar; burada paletin ölçüsü, ürünü paletin dışına taşırmadan taşıyabilmesi ve istif yükünü kaldırabilmesi önemlidir.",
          "Üretim hattında hijyen ve temizlik öncelikliyse plastik palet iyi bir seçimdir; yıkanabilir, çivisiz ve kıymıksızdır. Sevkiyat maliyetini düşük tutmak istiyorsanız ikinci el Euro palet işinizi görür.",
        ],
        list: [
          "Çuvalda hammadde için: sağlam, düzgün ağızlı ahşap ya da plastik palet.",
          "Hijyen gerektiren hatlar için: yıkanabilir plastik palet.",
          "Koli ve kasa sevkiyatı için: 80x120 Euro palet.",
          "İhracat için: HT damgalı, ISPM-15 uyumlu palet.",
        ],
        links: [
          ["Plastik palet", "/urunler/plastik-palet/"],
          ["Ahşap mı plastik mi", "/rehber/ahsap-palet-mi-plastik-palet-mi/"],
          ["Euro palet", "/urunler/80x120-euro-palet/"],
          ["İhracat paleti", "/urunler/ihracat-paleti/"],
        ],
      },
      {
        h: "Hızlı çıkış ve düzenli tedarik",
        p: [
          "Mesafe kısa olduğu için stoktaki ürünlerde kısa sürede çıkış planlanabilir. Düzenli hammadde girişi ve mamul çıkışı olan tesisler için haftalık program tavsiye ederiz. Net süre ve koşullar teklifte bildirilir.",
          "Üretim sırasında hasar gören ya da kullanım ömrü biten paletleri yerinden alıyoruz. Aynı araçla yeni palet getirip kullanılmış paleti geri almak mümkündür.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"], ["Fiyat tablosu", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Plastikçiler OSB’ye ne kadar sürede teslim edersiniz?", a: "Depo yakın olduğu için stoktaki ürünlerde kısa sürede çıkış planlanır. Net süre teklifte bildirilir." },
      { q: "Granül çuvalları için hangi palet uygundur?", a: "Çuvalın yüzey ve ağırlığına göre sağlam, düzgün yüzeyli bir ahşap ya da plastik palet önerilir. Ürün ve adedi yazın, uygun seçimi birlikte belirleyelim." },
      { q: "Plastik palet mi ahşap palet mi tercih etmeliyim?", a: "Hijyen ve yıkanabilirlik öncelikliyse plastik, maliyet ve esneklik öncelikliyse ahşap palet uygundur." },
      { q: "Hurda ve kırık palet alıyor musunuz?", a: "Evet. Adet, tür ve yükleme noktasını bildirmeniz yeterlidir." },
      { q: "Toplu alımda koşullar nasıl belirlenir?", a: "Ürün, adet ve teslim sıklığına göre teklifte yazılı olarak netleştirilir." },
    ],
  },
  {
    slug: "imes-palet",
    name: "İMES OSB",
    wave: 2,
    title: "İMES OSB Palet Tedariği Dilovası | MEPAL",
    description: "İMES OSB (Dilovası) makine ve metal sanayisine palet: Euro, özel ölçü, ikinci el ve HT paleti. Gebze depodan hızlı sevkiyat, hurda palet alımı.",
    h1: "İMES OSB Palet Tedariği",
    keyword: "imes palet",
    art: "region",
    distance: "yaklaşık 18–25 km · 25–35 dk",
    blurb: "Dilovası’ndaki İMES OSB makine ve metal tesislerine Gebze’den palet ve sandık.",
    answer:
      "İMES OSB, Kocaeli’nin Dilovası ilçesinde yer alan makine ve metal imalat ağırlıklı bir organize sanayi bölgesidir. MEPAL’in Gebze deposundan yaklaşık 18–25 km uzaktadır; tesislere Euro palet, özel ölçülü palet, ikinci el palet ve HT damgalı ihracat paleti sağlıyor, hurda paletleri yerinden alıyoruz.",
    zones: ["İMES OSB", "Dilovası sanayi hattı", "Diliskelesi yönü", "Dilovası OSB çevresi", "Tavşancıl yönü"],
    nearby: ["dilovasi-palet", "gebze-palet", "cayirova-palet", "derince-palet"],
    sections: [
      {
        h: "İMES OSB nerede, ne üretir",
        p: [
          "İMES, İstanbul’daki İMES Sanayi Sitesi ile karıştırılabilen ama ondan ayrı bir yapıdır. İMES OSB, Kocaeli’nin Dilovası ilçesindedir ve makine sektörü firmalarının yoğun olduğu, üç yüzün üzerinde firmanın ve on binlerce çalışanın yer aldığı bir organize sanayi bölgesi olarak bilinir. Metal işleme, makine imalatı, kalıp, hidrolik ve pnömatik parçalar, ağır ekipman ve yan sanayi bölgenin ana kolları arasındadır.",
          "Makine sanayisinin palet ihtiyacı diğer sektörlerden farklıdır: ürünler ağır, köşeli ve çoğu zaman standart dışı ölçülüdür. Bu nedenle sıradan bir Euro palet her zaman yeterli olmaz.",
        ],
        links: [["Dilovası sayfası", "/bolge/dilovasi-palet/"], ["Otomotiv ve yan sanayi", "/sektorler/otomotiv-ve-yan-sanayi/"]],
      },
      {
        h: "Ağır ve standart dışı yük için palet",
        p: [
          "Makine parçaları, kalıplar ve metal mamuller için paletin taşıma kapasitesi, alt tabla yapısı ve ölçüsü belirleyicidir. Yük paletten taşıyorsa ya da ağırlık tek noktada toplanıyorsa özel ölçülü, takviyeli palet veya ahşap sandık gerekebilir. Ürünün en, boy, yükseklik ve ağırlık bilgisini paylaşırsanız uygun çözümü öneririz.",
        ],
        list: [
          "Özel ölçülü palet: makine ve parça ölçüsüne göre üretim.",
          "Ahşap sandık: hassas ya da ağır ürünlerin ihracatı ve nakli.",
          "100x120 ve 114x114 palet: orta ve ağır yükler için yaygın ölçüler.",
          "HT damgalı palet ve sandık: ISPM-15 uyumlu ihracat ambalajı.",
          "İkinci el palet: iç sevkiyat ve ara depolama.",
        ],
        links: [
          ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"],
          ["Ahşap sandık", "/urunler/ahsap-sandik/"],
          ["İhracat paleti", "/urunler/ihracat-paleti/"],
          ["Palet kaç kg taşır", "/rehber/palet-kac-kg-tasir/"],
        ],
      },
      {
        h: "Teslimat ve hurda alımı",
        p: [
          "Gebze’den İMES OSB’ye TEM otoyolu üzerinden gidilir; yaklaşık 25–35 dakikalık yoldur. Özel ölçülü üretim gerektiren siparişlerde süre ürüne ve yoğunluğa bağlıdır; net süre teklifte bildirilir.",
          "Hurda ve onarıma uygun paletleri yerinden alıyoruz. Kalıp ve ağır yük taşıyan paletler yıpranmaya yatkındır; düzenli tamir ve yenileme programı hem maliyeti hem iş güvenliğini olumlu etkiler.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Palet tamiri", "/hizmetler/palet-tamiri/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "İMES OSB Sultanbeyli ya da Tuzla’da mı?", a: "Hayır. İMES OSB Kocaeli’nin Dilovası ilçesindedir; İstanbul’daki İMES Sanayi Sitesi ile karıştırılmamalıdır." },
      { q: "Makine parçaları için hangi palet uygundur?", a: "Ağırlık ve ölçüye göre takviyeli ya da özel ölçülü palet, gerekirse ahşap sandık önerilir. Ölçü ve ağırlık bilgisini iletin." },
      { q: "Özel ölçülü palet ne kadar sürede hazırlanır?", a: "Süre ölçü, adet ve üretim yoğunluğuna bağlıdır; net süre teklifte bildirilir." },
      { q: "İhracat için sandık ve palet temin ediyor musunuz?", a: "Evet. ISPM-15 uyumlu, HT damgalı palet ve sandık temin ediyoruz." },
    ],
  },
  {
    slug: "kurtkoy-palet",
    name: "Kurtköy",
    wave: 2,
    title: "Kurtköy Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Pendik Kurtköy sanayi ve lojistik alanlarına palet: Euro, ikinci el, plastik ve HT paleti. Gebze depodan toplu sevkiyat, hurda palet alımı, hızlı teklif.",
    h1: "Kurtköy Palet Satışı ve Hurda Palet Alımı",
    keyword: "kurtköy palet",
    art: "region",
    distance: "yaklaşık 35 km · 35–50 dk",
    blurb: "Pendik Kurtköy’deki üretim ve lojistik tesislerine Gebze’den toplu palet.",
    answer:
      "Kurtköy, İstanbul’un Pendik ilçesinde, Sabiha Gökçen Havalimanı ve TEM otoyolu çevresinde yoğun bir sanayi ve lojistik alanıdır. MEPAL’in Gebze deposundan yaklaşık 35 km uzaktadır; buradaki tesislere Euro palet, ikinci el palet, plastik palet ve HT damgalı ihracat paleti sağlar, hurda paletleri yerinden alırız.",
    zones: ["Kurtköy sanayi", "Sabiha Gökçen havalimanı çevresi", "Pendik Kurtköy lojistik alanları", "Yenişehir", "Çınardere yönü"],
    nearby: ["pendik-palet", "tuzla-palet", "sancaktepe-palet", "sultanbeyli-palet"],
    sections: [
      {
        h: "Kurtköy’ün sanayi ve lojistik karakteri",
        p: [
          "Kurtköy, Sabiha Gökçen Havalimanı ve TEM otoyolu bağlantısı sayesinde İstanbul’un Anadolu yakasında kritik bir lojistik düğümdür. Bölgede depolama ve dağıtım merkezleri, kargo ve havacılık hizmetleri, ambalaj, metal işleme, mobilya ve küçük-orta ölçekli imalat tesisleri bir arada çalışır.",
          "Lojistik ağırlığı palet talebini düzenli kılar: giden ve gelen mallar sürekli paletlenir, sık palet değişimi ve kırık palet birikimi yaşanır. Bu nedenle satış ve hurda alımını bir arada planlamak depo verimliliğini artırır.",
        ],
        links: [["Pendik sayfası", "/bolge/pendik-palet/"], ["E-ticaret ve depo", "/sektorler/e-ticaret-ve-depo/"]],
      },
      {
        h: "Depo ve dağıtım merkezleri için palet",
        p: [
          "Dağıtım merkezlerinde en yaygın birim 80x120 Euro paletidir. Raf sistemleri ve tır yüklemesi bu ölçüye göre düzenlendiği için ölçü ve kalite tutarlılığı önemlidir. Raflı sistemlerde özellikle alt tabla ve ayak yapısının sağlamlığına dikkat edilmelidir.",
          "Bütçeyi korumak isteyen tesisler için sınıflandırılmış ikinci el Euro palet, hijyen gerektiren ürünler için plastik palet, havayolu ve deniz ihracatı için HT damgalı palet sağlanır.",
        ],
        list: [
          "80x120 Euro palet: raflı depo ve tır yüklemesi.",
          "İkinci el palet: iç sevkiyat ve bütçe odaklı alımlar.",
          "Plastik palet: gıda, ilaç ve kozmetik depoları.",
          "HT damgalı palet: ihracat ve hava kargo.",
        ],
        links: [
          ["Euro palet", "/urunler/80x120-euro-palet/"],
          ["Palet raf sistemleri", "/rehber/palet-raf-sistemleri-ve-raf-yuku/"],
          ["Plastik palet", "/urunler/plastik-palet/"],
          ["İhracat paleti", "/urunler/ihracat-paleti/"],
        ],
      },
      {
        h: "Teslimat ve hurda palet",
        p: [
          "Gebze’den Kurtköy’e TEM otoyolu üzerinden gidilir. Yoğun saatlerde süre artabilir; sabah erken ya da öğleden sonra yüklemelerde akış genellikle daha rahattır. Net süre teklifte bildirilir.",
          "Lojistik tesislerde biriken kırık ve hurda paletleri yerinden alırız. Miktar yeterliyse araç planlanır; ürün getiren araç dönüşte hurda palet alarak sefer sayısını azaltabilir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"], ["Fiyat tablosu", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Kurtköy’e teslimat yapıyor musunuz?", a: "Evet. Gebze deposundan Kurtköy ve çevresine toplu sevkiyat planlıyoruz. Süre teklifte bildirilir." },
      { q: "Raflı depo için hangi palet uygundur?", a: "Çoğu raflı sistemde 80x120 Euro palet kullanılır. Raf üreticisinin yük bilgisine göre uygun sınıf seçilir." },
      { q: "Küçük adetle sipariş verebilir miyim?", a: "Mesafe nedeniyle toplu sevkiyat daha uygundur. Küçük adetlerde koşullar teklifte netleşir." },
      { q: "Kurtköy’den hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adres bilgisiyle yazarsanız alım planlanır." },
    ],
  },
  {
    slug: "maltepe-palet",
    name: "Maltepe",
    wave: 2,
    title: "Maltepe Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Maltepe’deki atölye, depo ve küçük üretim tesislerine palet: Euro, ikinci el, plastik. Gebze depodan sevkiyat, hurda palet alımı, hızlı teklif için yazın.",
    h1: "Maltepe Palet Satışı ve Hurda Palet Alımı",
    keyword: "maltepe palet",
    art: "region",
    distance: "yaklaşık 45–50 km · 50–70 dk",
    blurb: "Maltepe’deki depo, atölye ve küçük üretim tesislerine Gebze’den palet.",
    answer:
      "Maltepe, İstanbul’un Anadolu yakasında büyük ölçüde yerleşim ve ticaret ağırlıklı bir ilçedir; sanayi tesisleri sınırlı ve küçük-orta ölçeklidir. MEPAL, Gebze deposundan (yaklaşık 45–50 km) Maltepe’deki depo, atölye ve üretim tesislerine Euro palet, ikinci el palet ve plastik palet sağlar, hurda palet alır.",
    zones: ["Maltepe sanayi alanları", "Başıbüyük", "Cevizli", "Gülsuyu", "Zümrütevler", "Bağlarbaşı", "Esenkent yönü"],
    nearby: ["kartal-palet", "atasehir-kadikoy-palet", "umraniye-palet", "sancaktepe-palet"],
    sections: [
      {
        h: "Maltepe’de palet kimlere lazım",
        p: [
          "Maltepe’nin ekonomik yapısı sanayiden çok hizmet ve ticarete dayanır. Buna rağmen ilçede küçük üretim atölyeleri, tekstil ve gıda işletmeleri, inşaat malzemesi ve ticari depolar, mobilya ve dekorasyon atölyeleri, perakende zincirlerinin yerel depoları palet kullanır. Başıbüyük ve çevresinde atölye ve depo yapıları özellikle yoğundur.",
          "Talep çoğunlukla düşük ya da orta hacimlidir; bir seferde on paletten birkaç yüz palete kadar değişir. Bu tür siparişlerde adetler birleştirilip planlı sevkiyat yapılırsa hem süre hem maliyet açısından en verimli sonuç alınır.",
        ],
        links: [["Kartal sayfası", "/bolge/kartal-palet/"], ["Ataşehir ve Kadıköy", "/bolge/atasehir-kadikoy-palet/"]],
      },
      {
        h: "Küçük işletmeler için seçenekler",
        p: [
          "Küçük işletmeler için en ekonomik çözüm genellikle sınıflandırılmış ikinci el Euro paletidir. Daha sık palet değiştiren ya da temiz görünüm isteyen işletmeler sıfır ahşap palet veya plastik palete yönelir. Mobilya, dekorasyon ve mağaza düzenlemeleri için de temiz, uygun görünümlü paletler sağlanabilir.",
        ],
        list: [
          "İkinci el Euro palet: bütçeyi koruyan, yaygın seçim.",
          "Sıfır ahşap palet: tertipli, temiz sevkiyat.",
          "Plastik palet: gıda ve hijyen gerektiren işler.",
          "Özel ölçülü palet: standart dışı ürünler için.",
        ],
        links: [
          ["İkinci el palet", "/urunler/ikinci-el-palet/"],
          ["Sıfır ahşap palet", "/urunler/sifir-ahsap-palet/"],
          ["Plastik palet", "/urunler/plastik-palet/"],
          ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"],
        ],
      },
      {
        h: "Teslimat ve hurda palet",
        p: [
          "Gebze’den Maltepe’ye TEM, D-100 ve Anadolu yakası bağlantı yolları kullanılır. Trafik yoğunluğu süreyi belirgin biçimde etkiler; bu nedenle teslimat saatleri sabah erken ya da trafik azaldığında planlanır. Net süre teklifte bildirilir.",
          "Biriken kırık ve hurda paletleri yerinden alıyoruz. Küçük miktarlar için bölgeden diğer talepler birleştirilir; adet ve fotoğrafla yazmanız yeterlidir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"], ["Fiyat al", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Maltepe’ye küçük adetle palet gönderir misiniz?", a: "Evet, ancak mesafe nedeniyle talepler birleştirilerek planlanır. Koşullar teklifte bildirilir." },
      { q: "Mağaza ya da atölye için temiz palet bulunur mu?", a: "Evet. Temiz, sınıflandırılmış ikinci el ya da sıfır palet seçenekleri sunulur." },
      { q: "Maltepe’den hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adresle yazarsanız yerinden alım planlanır." },
      { q: "Teslimat ne kadar sürer?", a: "Stok ve araç programına göre planlanır, kısa sürede; net süre teklifte bildirilir." },
    ],
  },
  {
    slug: "cekmekoy-palet",
    name: "Çekmeköy",
    wave: 2,
    title: "Çekmeköy Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Çekmeköy’deki imalat, depo ve inşaat işletmelerine palet: Euro, ikinci el, plastik ve özel ölçü. Gebze depodan sevkiyat, hurda palet alımı, hızlı teklif.",
    h1: "Çekmeköy Palet Satışı ve Hurda Palet Alımı",
    keyword: "çekmeköy palet",
    art: "region",
    distance: "yaklaşık 50–55 km · 60–80 dk",
    blurb: "Çekmeköy’deki küçük üretim ve depo işletmelerine Gebze’den planlı palet sevkiyatı.",
    answer:
      "Çekmeköy, İstanbul’un Anadolu yakasında hızlı büyüyen, yeşil alanları geniş bir ilçedir; sanayi tesisleri sınırlıdır, atölye, depo ve inşaat sektörü ağırlıktadır. MEPAL, Gebze deposundan (yaklaşık 50–55 km) Çekmeköy’e Euro palet, ikinci el palet, plastik palet ve özel ölçülü palet sağlar, hurda palet alır.",
    zones: ["Çekmeköy sanayi alanları", "Alemdağ", "Taşdelen", "Çamlık", "Mehmet Akif", "Ömerli yönü", "Sultançiftliği yönü"],
    nearby: ["sancaktepe-palet", "umraniye-palet", "sultanbeyli-palet", "atasehir-kadikoy-palet"],
    sections: [
      {
        h: "Çekmeköy’de palet talebinin kaynağı",
        p: [
          "Çekmeköy, son yıllarda konut ve ticaretle büyümüş bir ilçe olmakla birlikte Alemdağ Caddesi ve çevresinde atölye, küçük imalat ve depo yapıları barındırır. İnşaat malzemesi toptancıları, mobilya ve dekorasyon atölyeleri, gıda üretim ve dağıtım işletmeleri, metal ve kaynak atölyeleri ilçenin palet kullanan başlıca işletmeleridir.",
          "Komşu Sancaktepe, Ümraniye ve Sultanbeyli ile birlikte bu hat Anadolu yakasının üretim koridorlarından birini oluşturur. Sevkiyatlar çoğunlukla birbirine yakın birkaç işletmeye aynı güzergâhta yapılabildiği için talepleri birleştirmek mümkündür.",
        ],
        links: [["Sancaktepe sayfası", "/bolge/sancaktepe-palet/"], ["Ümraniye sayfası", "/bolge/umraniye-palet/"], ["Sultanbeyli sayfası", "/bolge/sultanbeyli-palet/"]],
      },
      {
        h: "İnşaat ve atölye işletmeleri için palet",
        p: [
          "İnşaat malzemesi, seramik, boya ve yapı kimyasalları paletle gelir ve çoğu zaman 100x120 ya da 80x120 ölçüsünde olur. Atölyelerde ise palet hem sevkiyat hem de depolama ve üretim ekipmanı olarak kullanılır. Bu işler için sağlam, sınıflandırılmış ikinci el palet genellikle yeterlidir.",
        ],
        list: [
          "İkinci el palet: inşaat ve atölye kullanımında yaygın seçim.",
          "100x120 palet: boya, yapı kimyasalı ve ağır ambalaj.",
          "Plastik palet: gıda ve hijyen gerektiren işler.",
          "Özel ölçülü palet: standart dışı ürünler için üretim.",
        ],
        links: [
          ["İkinci el palet", "/urunler/ikinci-el-palet/"],
          ["100x120 palet", "/urunler/100x120-palet/"],
          ["Plastik palet", "/urunler/plastik-palet/"],
          ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"],
        ],
      },
      {
        h: "Teslimat ve hurda palet",
        p: [
          "Gebze’den Çekmeköy’e TEM otoyolu ve Anadolu yakası bağlantı yolları üzerinden gidilir. Yoğun trafik saatlerinde süre belirgin biçimde uzayabilir. Mümkünse sabah erken ya da öğleden sonra teslimat penceresi seçmenizi öneririz. Net süre teklifte bildirilir.",
          "Biriken kırık ve hurda paletleri yerinden alıyoruz. Küçük partilerde yakındaki diğer taleplerle birleştirme yapılır; adet, tür ve fotoğrafla yazmanız yeterlidir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"], ["Fiyat al", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Çekmeköy’e palet teslim ediyor musunuz?", a: "Evet. Gebze deposundan Çekmeköy ve çevresine planlı sevkiyat yapıyoruz. Süre teklifte bildirilir." },
      { q: "İnşaat şantiyesi için palet alabilir miyim?", a: "Evet. Kullanım amacını ve adedi bildirirseniz uygun palet türü ve miktarı önerilir." },
      { q: "Küçük adetli sipariş olur mu?", a: "Mesafe nedeniyle talepler birleştirilerek planlanır. Koşullar teklifte netleşir." },
      { q: "Çekmeköy’den hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adresle yazarsanız alım planlanır." },
    ],
  },
];

export const regionBySlug = (slug: string) => regions.find((r) => r.slug === slug);
