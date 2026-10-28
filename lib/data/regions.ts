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
    nearby: ["sekerpinar-palet", "gebze-palet", "tuzla-palet", "orhanli-palet", "aydinli-palet"],
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
    nearby: ["cayirova-palet", "tuzla-palet", "gebze-palet", "orhanli-palet", "aydinli-palet"],
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
    nearby: ["sekerpinar-palet", "pendik-palet", "cayirova-palet", "aydinli-palet", "orhanli-palet", "icmeler-palet"],
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
    nearby: ["tuzla-palet", "kartal-palet", "sancaktepe-palet", "aydinli-palet", "icmeler-palet"],
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
    nearby: ["pendik-palet", "atasehir-kadikoy-palet", "sancaktepe-palet", "icmeler-palet"],
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
    nearby: ["korfez-palet", "kartepe-palet", "derince-palet", "golcuk-palet", "basiskele-palet", "karamursel-palet"],
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
    nearby: ["derince-palet", "dilovasi-palet", "izmit-palet", "golcuk-palet", "karamursel-palet"],
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
    nearby: ["korfez-palet", "izmit-palet", "dilovasi-palet", "golcuk-palet", "basiskele-palet"],
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
    nearby: ["izmit-palet", "derince-palet", "korfez-palet", "basiskele-palet"],
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
    description: "Kocaeli genelinde palet tedariği: İzmit, Körfez, Derince, Gölcük, Karamürsel, Kandıra, Dilovası fabrikalarına Gebze depodan palet; hurda palet alımı.",
    h1: "Kocaeli Palet Tedariği",
    keyword: "kocaeli palet",
    art: "region",
    distance: "il geneli · yaklaşık 10–110 km · 15 dk–2 saat",
    blurb: "Gebze deposundan Kocaeli’nin tüm sanayi ilçelerine toplu palet ve hurda palet alımı.",
    answer:
      "MEPAL’in deposu Kocaeli’nin Gebze ilçesindedir ve il genelindeki fabrikalara Euro palet, ahşap palet, ikinci el palet, plastik palet ve HT damgalı ihracat paleti tedarik eder. Hurda ve kırık paletleri yerinden alırız. Mesafeye göre süre değişir; net süre ve miktar eşiği teklifte bildirilir.",
    zones: ["İzmit", "Körfez", "Derince", "Kartepe", "Gölcük", "Karamürsel", "Kandıra", "Dilovası", "Başiskele", "Çayırova", "Darıca"],
    nearby: ["gebze-palet", "izmit-palet", "korfez-palet", "derince-palet", "kartepe-palet", "dilovasi-palet", "golcuk-palet", "karamursel-palet", "basiskele-palet"],
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
    description: "İstanbul’da Anadolu ve Avrupa yakası sanayiye palet tedariği: Euro, ahşap, ikinci el, plastik palet; hurda palet alımı. Gebze depodan toplu sevkiyat.",
    h1: "İstanbul Palet Tedariği",
    keyword: "istanbul palet",
    art: "region",
    distance: "il geneli · yaklaşık 35–120 km · 40 dk–2,5 saat",
    blurb: "Gebze deposundan İstanbul’un Anadolu ve Avrupa yakası sanayi alanlarına toplu palet.",
    answer:
      "MEPAL, Gebze deposundan İstanbul’un Anadolu yakasına en kısa sürede, Avrupa yakasına ise planlı toplu sevkiyatla palet tedarik eder. Euro palet, ahşap palet, ikinci el palet, plastik palet ve HT damgalı ihracat paleti sunar, hurda paletleri yerinden alırız. Net süre trafik ve araç programına göre teklifte bildirilir.",
    zones: ["Tuzla", "Pendik", "Kurtköy", "Kartal", "Maltepe", "Ümraniye", "Çekmeköy", "Sancaktepe", "Sultanbeyli", "Esenyurt", "Hadımköy", "İkitelli", "Başakşehir", "Silivri"],
    nearby: ["tuzla-palet", "pendik-palet", "kartal-palet", "umraniye-palet", "atasehir-kadikoy-palet", "sancaktepe-palet", "esenyurt-palet", "avcilar-palet", "basaksehir-palet", "buyukcekmece-palet", "silivri-palet", "catalca-palet", "esenler-palet", "bayrampasa-palet", "zeytinburnu-palet", "bahcelievler-palet", "gungoren-palet"],
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
    description: "Gebze Plastikçiler OSB tesislerine palet: Euro, ikinci el, plastik ve HT paleti. Pelitli depodan kısa sürede sevkiyat, hurda palet alımı.",
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
          "Gebze Plastikçiler Organize Sanayi Bölgesi, plastik sektörüne yönelik kurulmuş, Gebze’de yer alan bir organize sanayi bölgesidir. Plastik enjeksiyon, ekstrüzyon, şişirme, ambalaj filmi, boru ve profil, geri dönüşüm ve kalıp işleri bölgenin ana faaliyet alanlarıdır.",
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
          "İMES, İstanbul’daki İMES Sanayi Sitesi ile karıştırılabilen ama ondan ayrı bir yapıdır. İMES OSB, Kocaeli’nin Dilovası ilçesindedir ve makine sektörü firmalarının yoğun olduğu bir organize sanayi bölgesi olarak bilinir. Metal işleme, makine imalatı, kalıp, hidrolik ve pnömatik parçalar, ağır ekipman ve yan sanayi bölgenin ana kolları arasındadır.",
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
  {
    slug: "esenyurt-palet",
    name: "Esenyurt",
    wave: 3,
    title: "Esenyurt Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Esenyurt’taki atölye, depo ve küçük sanayi sitelerine palet: Euro, ikinci el, plastik. Gebze depodan planlı toplu sevkiyat, hurda palet alımı, teklif alın.",
    h1: "Esenyurt Palet Satışı ve Hurda Palet Alımı",
    keyword: "esenyurt palet",
    art: "region",
    distance: "yaklaşık 70–85 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Esenyurt’taki imalat atölyeleri ve depolara Gebze’den planlı toplu palet sevkiyatı.",
    answer:
      "Esenyurt, İstanbul’un Avrupa yakasında nüfusu en yüksek ilçelerinden biridir; konut yoğunluğunun yanında atölye, küçük imalat, tekstil ve ticari depo yapıları da barındırır. MEPAL, Gebze deposundan Esenyurt’a planlı toplu sevkiyatla Euro, ikinci el ve plastik palet sağlar, hurda paletleri yerinden alır. Süre ilçeye göre planlanır, net süre teklifte bildirilir.",
    zones: ["Akçaburgaz", "Kıraç", "Yenikent", "Ardıçlı", "Namık Kemal", "Pınar", "Saadetdere", "E-5 ve TEM çevresi depolar"],
    nearby: ["istanbul-palet", "kocaeli-palet", "gebze-palet", "tuzla-palet"],
    sections: [
      {
        h: "Esenyurt’ta palet kullanan işletmeler",
        p: [
          "Esenyurt’un ekonomisi bir yandan ticaret ve hizmete, bir yandan da atölye ölçeğindeki üretime dayanır. Tekstil ve hazır giyim atölyeleri, matbaa ve ambalaj işletmeleri, gıda üretim ve dağıtım depoları, e-ticaret satıcıları ile inşaat malzemesi toptancıları ilçede palet tüketen başlıca gruplardır. Kıraç ve Akçaburgaz yönündeki sanayi ve depo yapıları E-5 ile TEM bağlantısı nedeniyle sevkiyat açısından tercih edilir.",
          "Bu işletmelerin çoğu bir seferde birkaç yüz paletlik ihtiyaç duyar. Böyle talepler için adetleri birleştirip tek araçla planlamak, ilçenin Gebze’ye uzaklığı düşünüldüğünde en verimli yoldur.",
        ],
        links: [["İstanbul sayfası", "/bolge/istanbul-palet/"], ["E-ticaret ve depo", "/sektorler/e-ticaret-ve-depo/"]],
      },
      {
        h: "İhtiyaca göre palet seçimi",
        table: {
          caption: "Esenyurt’ta sık sorulan kullanım ve önerilen palet",
          head: ["Kullanım", "Önerilen palet", "Not"],
          rows: [
            ["Depo ve e-ticaret sevkiyatı", "80x120 Euro palet", "Raf ve tır yüklemesi için standart ölçü"],
            ["Tekstil ve ambalaj atölyesi", "Sınıflandırılmış ikinci el palet", "Bütçeyi koruyan, yaygın seçim"],
            ["Gıda ve hijyen gerektiren iş", "Plastik palet", "Yıkanabilir yüzey"],
            ["Standart dışı ürün", "Özel ölçülü palet", "Ölçüye göre üretim"],
          ],
        },
        links: [
          ["Euro palet", "/urunler/80x120-euro-palet/"],
          ["İkinci el palet", "/urunler/ikinci-el-palet/"],
          ["Plastik palet", "/urunler/plastik-palet/"],
          ["Palet seçici", "/araclar/palet-secici/"],
        ],
      },
      {
        h: "Sevkiyat ve hurda palet",
        p: [
          "Sevkiyat Gebze Pelitli deposundan yapılır; güzergâh araç programına ve trafiğe göre belirlenir. Avrupa yakası teslimatlarında süre ve geçiş masrafı planı etkilediği için “ilçeye göre planlanır, net süre teklifte bildirilir” esasıyla çalışıyoruz. Genel çerçeve için Türkiye geneli sevkiyat sayfasına bakabilirsiniz.",
          "Atölye ve depolarda biriken kırık ve hurda paletleri yerinden alıyoruz. Adet, tür ve adres bilgisini fotoğrafla birlikte yazmanız yeterlidir.",
        ],
        links: [["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Esenyurt’a hangi adetten itibaren palet gönderiyorsunuz?", a: "Mesafe nedeniyle toplu sevkiyat daha uygundur. Küçük adetlerde talepler birleştirilir; koşullar teklifte netleşir." },
      { q: "Esenyurt’taki atölyem için hangi palet yeterli olur?", a: "Yük ağırlığı ve depolama şekline bağlıdır. Çoğu atölyede sınıflandırılmış ikinci el Euro palet yeterli olur; ürününüzü yazarsanız öneri yaparız." },
      { q: "Esenyurt’tan hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adres bilgisiyle talep iletirseniz alım planlanır." },
      { q: "Teslimat süresi nedir?", a: "İlçeye ve araç programına göre planlanır; net süre teklifte bildirilir." },
    ],
  },
  {
    slug: "avcilar-palet",
    name: "Avcılar",
    wave: 3,
    title: "Avcılar Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Avcılar, Ambarlı ve Firüzköy çevresindeki depo ve liman lojistiğine palet: Euro, HT ihracat, ikinci el. Gebze depodan toplu sevkiyat, hurda palet alımı.",
    h1: "Avcılar Palet Satışı ve Hurda Palet Alımı",
    keyword: "avcılar palet",
    art: "region",
    distance: "yaklaşık 65–75 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Avcılar’daki depo ve Ambarlı limanı lojistiğine Gebze’den ihracat ve Euro palet.",
    answer:
      "Avcılar, İstanbul’un Avrupa yakasında E-5 üzerinde yer alır ve Ambarlı limanı çevresindeki lojistik hareketten pay alır. İlçedeki depo, antrepo ve küçük imalat işletmelerine MEPAL, Gebze deposundan Euro palet, HT damgalı ihracat paleti ve ikinci el palet sağlar, hurda paletleri yerinden alır. Süre teklifte bildirilir.",
    zones: ["Ambarlı", "Firüzköy", "Cihangir", "Denizköşkler", "Gümüşpala", "Tahtakale", "Merkez", "E-5 yan yol depoları"],
    nearby: ["istanbul-palet", "kocaeli-palet", "gebze-palet", "pendik-palet", "bahcelievler-palet"],
    sections: [
      {
        h: "Ambarlı çevresi ve ihracat hareketi",
        p: [
          "Ambarlı, Türkiye’nin konteyner trafiğinin önemli bir bölümünü karşılayan liman bölgesidir ve Avcılar sınırında yer alır. Limana yakın depolar, forwarder ve antrepo işletmeleri, yükleme öncesi paletleme yapan firmalar palet için sürekli talep oluşturur. Liman çevresinde ahşap ambalajın ISPM-15 uyumlu olması aranan bir koşuldur.",
          "Avcılar’ın iç kısımlarında ise tekstil, matbaa, gıda ve inşaat malzemesi işletmeleri, E-5 çevresindeki mağaza ve toptan depolar ağırlıktadır. İki grubun ihtiyacı farklıdır; biri ihracat damgası, diğeri bütçe odaklı ikinci el palet arar.",
        ],
        links: [["İhracat paleti", "/urunler/ihracat-paleti/"], ["ISPM-15 nedir", "/rehber/ispm-15-nedir/"], ["İhracat ve lojistik", "/sektorler/ihracat-ve-lojistik/"]],
      },
      {
        h: "Avcılar için palet seçenekleri",
        list: [
          "HT damgalı, ISPM-15 uyumlu palet: Ambarlı üzerinden yapılan deniz ihracatı için.",
          "80x120 Euro palet: depo ve tır yüklemesinde standart birim.",
          "İkinci el Euro palet: iç sevkiyat ve ara depolama.",
          "Özel ölçülü palet ve sandık: standart dışı ya da ağır ürünler.",
        ],
        links: [
          ["Isıl işlemli palet", "/urunler/isil-islemli-palet/"],
          ["Euro palet", "/urunler/80x120-euro-palet/"],
          ["İkinci el Euro palet", "/urunler/ikinci-el-euro-palet/"],
          ["Konteynere kaç palet sığar", "/rehber/konteynere-ve-tira-kac-palet-sigar/"],
        ],
      },
      {
        h: "Teslimat ve hurda alımı",
        p: [
          "Gebze’den Avcılar’a TEM ve E-5 hattı kullanılır; yoğun saatlerde Boğaz geçişi süreyi belirler. Bu yüzden sabah erken ya da gün içi teslim penceresi önerilir. Net süre teklifte bildirilir.",
          "Depolarda biriken kırık paletler için yerinde alım yapıyoruz. Konteyner yükleme sonrası artan paletleri de değerlendirebiliriz.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Palet nakliye", "/hizmetler/palet-nakliye-lojistik/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Ambarlı limanı için hangi palet kullanılmalı?", a: "Deniz ihracatında ahşap ambalajın ISPM-15 uyumlu, HT damgalı olması gerekir. Ayrıntıyı ihracat paleti sayfasında bulabilirsiniz." },
      { q: "Avcılar’a ne kadar sürede teslimat olur?", a: "Süre trafik ve araç programına göre değişir; net süre teklifte bildirilir." },
      { q: "Avcılar’daki depodan hurda palet alıyor musunuz?", a: "Evet. Adet ve adres bilgisini iletirseniz alım planlanır." },
      { q: "Küçük adetli sipariş mümkün mü?", a: "Mesafe nedeniyle talepler birleştirilir. Koşullar teklifte yazılı olarak netleşir." },
    ],
  },
  {
    slug: "beylikduzu-palet",
    name: "Beylikdüzü",
    wave: 3,
    title: "Beylikdüzü Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Beylikdüzü OSB, Yakuplu ve Haramidere çevresine palet: Euro, ikinci el, plastik ve HT. Gebze depodan toplu sevkiyat, hurda palet alımı, hızlı teklif.",
    h1: "Beylikdüzü Palet Satışı ve Hurda Palet Alımı",
    keyword: "beylikdüzü palet",
    art: "region",
    distance: "yaklaşık 70–80 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Beylikdüzü OSB ve Yakuplu çevresindeki üretim ve depolara Gebze’den toplu palet.",
    answer:
      "Beylikdüzü, İstanbul’un Avrupa yakasında E-5 ve TEM otoyolu arasında kalan, organize sanayi bölgesi ve çok sayıda depo barındıran bir ilçedir. MEPAL, Gebze deposundan Beylikdüzü OSB, Yakuplu ve Haramidere çevresindeki işletmelere Euro, ikinci el, plastik ve HT damgalı palet sağlar, hurda palet alır. Süre teklifte bildirilir.",
    zones: ["Beylikdüzü OSB", "Yakuplu", "Haramidere", "Gürpınar", "Kavaklı", "Adnan Kahveci", "E-5 ve TEM çevresi"],
    nearby: ["istanbul-palet", "kocaeli-palet", "gebze-palet", "plastikciler-osb-palet", "silivri-palet"],
    sections: [
      {
        h: "Beylikdüzü’nün sanayi yapısı",
        p: [
          "Beylikdüzü OSB, ilçenin en belirgin üretim alanıdır; tekstil, plastik, ambalaj, gıda ve metal işleme tesisleri bölgede bir arada çalışır. Yakuplu ve Haramidere çevresinde ise sanayi siteleri, ticari depolar ve lojistik yapıları yer alır. Haramidere’nin Avcılar sınırında olması, bölgeyi liman hareketine de yaklaştırır.",
          "Ortak özellik, sevkiyat sıklığıdır. Üretim tesisleri hat bazında palet tüketir; depolar ise gelen ve giden yükte dönüşümlü kullanır. Düzenli ihtiyaç varsa aylık program yapmak sipariş telaşını azaltır.",
        ],
        links: [["İstanbul sayfası", "/bolge/istanbul-palet/"], ["Kimya ve plastik", "/sektorler/kimya-ve-plastik/"]],
      },
      {
        h: "Üretim hattı ve depo için seçenekler",
        table: {
          caption: "Beylikdüzü’nde işletme türüne göre palet",
          head: ["İşletme", "Palet", "Neden"],
          rows: [
            ["OSB üretim tesisi", "Sıfır ya da yüksek sınıf ikinci el Euro palet", "Hat uyumu ve tutarlı ölçü"],
            ["Tekstil ve ambalaj", "İkinci el palet", "Maliyet kontrolü"],
            ["Gıda üretimi", "Plastik palet", "Hijyen ve yıkanabilirlik"],
            ["İhracat hazırlığı", "HT damgalı palet", "ISPM-15 uyumlu ambalaj"],
          ],
        },
        links: [
          ["Sıfır ahşap palet", "/urunler/sifir-ahsap-palet/"],
          ["Plastik palet", "/urunler/plastik-palet/"],
          ["Toptan palet", "/hizmetler/toptan-palet/"],
        ],
      },
      {
        h: "Teslimat, program ve hurda palet",
        p: [
          "Gebze’den Beylikdüzü’ne TEM ve E-5 üzerinden gidilir; Boğaz geçişleri ve yoğun saatler süreyi etkiler. Bu nedenle ilçeye yönelik teslimat “araç programına göre planlanır, net süre teklifte bildirilir” esasıyla yürütülür.",
          "Biriken kırık ve hurda paletleri yerinden alıyoruz. OSB’deki tesislerde düzenli aralıklarla toplama planı yapılabilir.",
        ],
        links: [["Yerinde palet toplama", "/hizmetler/yerinde-palet-toplama/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Beylikdüzü OSB’deki tesise düzenli palet tedariki yapılır mı?", a: "Evet. Ürün, adet ve sıklık belirlenerek program teklifte yazılı hale getirilir." },
      { q: "Yakuplu ve Haramidere’ye de teslimat var mı?", a: "Evet. Beylikdüzü ve çevresi aynı sevkiyat planında değerlendirilir." },
      { q: "Beylikdüzü’nden hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adres bilgisiyle talep iletmeniz yeterlidir." },
      { q: "Teslimat süresi kesin midir?", a: "Hayır. Süre trafik ve araç programına bağlıdır; net süre teklifte bildirilir." },
    ],
  },
  {
    slug: "buyukcekmece-palet",
    name: "Büyükçekmece",
    wave: 3,
    title: "Büyükçekmece Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Büyükçekmece, Mimarsinan ve Kumburgaz çevresindeki sanayi ve depolara palet: Euro, ikinci el, plastik. Gebze depodan toplu sevkiyat, hurda palet alımı.",
    h1: "Büyükçekmece Palet Satışı ve Hurda Palet Alımı",
    keyword: "büyükçekmece palet",
    art: "region",
    distance: "yaklaşık 85–100 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Büyükçekmece ve Mimarsinan çevresindeki üretim ve depolara planlı toplu palet.",
    answer:
      "Büyükçekmece, İstanbul’un Avrupa yakasında D-100, E-5 ve TEM hattı boyunca uzanan, Mimarsinan ve Kumburgaz gibi bölgelerinde depo, gıda ve küçük sanayi işletmeleri bulunan geniş bir ilçedir. MEPAL, Gebze deposundan planlı toplu sevkiyatla Euro, ikinci el ve plastik palet sağlar, hurda palet alır. Net süre teklifte bildirilir.",
    zones: ["Mimarsinan", "Kumburgaz", "Celaliye", "Tepecik", "Güzelce", "Hürriyet", "E-5 ve D-100 yan yol depoları"],
    nearby: ["istanbul-palet", "kocaeli-palet", "gebze-palet", "izmit-palet", "silivri-palet", "catalca-palet"],
    sections: [
      {
        h: "Büyükçekmece’de talep nereden gelir",
        p: [
          "Büyükçekmece geniş bir ilçe olduğu için palet talebi dağınıktır. Mimarsinan çevresinde sanayi ve depo yapıları, Kumburgaz yönünde gıda ve soğuk zincir depoları, ilçe merkezinde ticari işletmeler ve inşaat malzemesi toptancıları öne çıkar. E-5 ve D-100 yan yollarında perakende ve toptan depolar sıralanır.",
          "İlçe, Gebze’ye şehir içi ilçelere kıyasla daha uzaktır. Bu yüzden tek tek küçük siparişler yerine, birkaç günlük ihtiyacı birleştirmek hem planlama hem maliyet açısından daha uygundur.",
        ],
        links: [["İstanbul sayfası", "/bolge/istanbul-palet/"], ["Gıda ve içecek", "/sektorler/gida-ve-icecek/"]],
      },
      {
        h: "Gıda ve depo işletmeleri için palet",
        p: [
          "Gıda depolarında hijyen ve temizlik öne çıkar. Bu durumda yıkanabilir plastik palet ya da temiz, sınıflandırılmış Euro palet tercih edilir. Genel depo ve toptan satışta ise ikinci el Euro palet çoğu zaman yeterlidir.",
        ],
        list: [
          "Plastik palet: gıda ve soğuk zincir işlerinde hijyen.",
          "80x120 Euro palet: depo, raf ve tır yüklemesi.",
          "İkinci el palet: toptan ticaret ve iç sevkiyat.",
          "100x120 palet: ağır ve geniş ambalajlı ürünler.",
        ],
        links: [
          ["Gıda sektörü için palet seçimi", "/rehber/gida-sektoru-icin-palet-secimi/"],
          ["Plastik palet", "/urunler/plastik-palet/"],
          ["100x120 palet", "/urunler/100x120-palet/"],
        ],
      },
      {
        h: "Planlı sevkiyat ve hurda palet",
        p: [
          "Gebze’den Büyükçekmece’ye TEM, E-5 ve D-100 hattı kullanılır. Mesafe nedeniyle ilçeye teslimat birleştirilmiş sevkiyat esasıyla yapılır; kesin süre sözü vermiyoruz, net süre teklifte bildirilir.",
          "Depo ve işletmelerde biriken hurda paletleri yerinden alıyoruz. Miktar uygunsa dönüş seferinde alım yapılarak araç verimli kullanılır.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Büyükçekmece’ye palet teslim ediyor musunuz?", a: "Evet. Gebze deposundan planlı toplu sevkiyatla ilçeye teslimat yapıyoruz. Süre teklifte bildirilir." },
      { q: "Gıda deposu için hangi palet uygundur?", a: "Hijyen önceliyse plastik palet, bütçe önceliyse temiz sınıflandırılmış Euro palet önerilir." },
      { q: "Kumburgaz yönüne de gidiyor musunuz?", a: "Evet, ilçe sınırları içindeki adreslere sevkiyat planlanır. Adres bilgisi teklifte netleşir." },
      { q: "Hurda palet alımı yapıyor musunuz?", a: "Evet. Adet, tür ve adresle yazarsanız alım planlanır." },
    ],
  },
  {
    slug: "basaksehir-palet",
    name: "Başakşehir",
    wave: 3,
    title: "Başakşehir Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Başakşehir ve İkitelli OSB çevresindeki matbaa, metal ve plastik tesislerine palet: Euro, ikinci el, HT. Gebze depodan toplu sevkiyat, hurda palet alımı.",
    h1: "Başakşehir Palet Satışı ve Hurda Palet Alımı",
    keyword: "başakşehir palet",
    art: "region",
    distance: "yaklaşık 65–80 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Başakşehir ve İkitelli OSB çevresine Gebze’den toplu Euro ve ikinci el palet.",
    answer:
      "Başakşehir, İstanbul’un Avrupa yakasında İkitelli Organize Sanayi Bölgesi’ni barındıran ve TEM ile Kuzey Marmara bağlantılarına yakın bir ilçedir. İkitelli’de metal, plastik, matbaa ve mobilya üreticileri yoğundur. MEPAL, Gebze deposundan buradaki işletmelere Euro, ikinci el ve HT damgalı palet sağlar, hurda palet alır; süre teklifte bildirilir.",
    zones: ["İkitelli OSB", "İkitelli sanayi çevresi", "Başak", "Kayabaşı", "Hoşdere", "Şamlar", "Ziya Gökalp"],
    nearby: ["istanbul-palet", "kocaeli-palet", "gebze-palet", "plastikciler-osb-palet"],
    sections: [
      {
        h: "İkitelli OSB ve çevresi",
        p: [
          "İkitelli OSB, İstanbul’un Avrupa yakasındaki en büyük organize sanayi bölgelerinden biridir ve Başakşehir sınırları içindedir. Metal işleme, plastik, matbaa ve ambalaj, elektrik-elektronik, mobilya ve ticari imalat tesisleri bölgede yan yanadır. Çevresindeki sanayi ve ticaret yapıları da dahil edildiğinde palet kullanan işletme sayısı yüksektir.",
          "Bölgenin TEM otoyolu ve Kuzey Marmara bağlantısına yakınlığı, hem Gebze yönündeki hem de Avrupa yakası içindeki sevkiyatı kolaylaştırır. Bu özellik, düzenli teslimat programı yapmak isteyen tesisler için avantajdır.",
        ],
        links: [["İstanbul sayfası", "/bolge/istanbul-palet/"], ["Kimya ve plastik", "/sektorler/kimya-ve-plastik/"]],
      },
      {
        h: "Sektöre göre palet ihtiyacı",
        table: {
          caption: "Başakşehir ve İkitelli’de sektör bazlı öneri",
          head: ["Sektör", "Öne çıkan ihtiyaç", "Uygun palet"],
          rows: [
            ["Matbaa ve ambalaj", "Kâğıt rulo ve koli, ağır yük", "100x120 ve takviyeli palet"],
            ["Metal işleme", "Parça ve ekipman sevkiyatı", "Özel ölçülü palet"],
            ["Plastik üretimi", "Granül çuvalı ve mamul", "Euro palet, plastik palet"],
            ["Mobilya", "Hacimli, hafif ürün", "İkinci el Euro palet"],
          ],
        },
        links: [
          ["100x120 palet", "/urunler/100x120-palet/"],
          ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"],
          ["Palet kaç kg taşır", "/rehber/palet-kac-kg-tasir/"],
        ],
      },
      {
        h: "Düzenli tedarik ve hurda palet",
        p: [
          "Gebze’den İkitelli yönüne TEM ve Kuzey Marmara bağlantısı kullanılır. Süre trafik ve araç programına göre değişir; net süre teklifte bildirilir.",
          "Üretim ve depo atığı olarak biriken kırık paletleri yerinden alıyoruz. Aylık ya da haftalık düzenli tedarik isteyen tesisler için ürün, adet ve sıklık yazılı olarak teklifte belirlenir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Toptan palet", "/hizmetler/toptan-palet/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "İkitelli OSB’ye palet teslim ediyor musunuz?", a: "Evet. Gebze deposundan İkitelli ve Başakşehir çevresine planlı sevkiyat yapıyoruz." },
      { q: "Matbaa için hangi palet uygundur?", a: "Kâğıt rulo ve koli ağırlığına göre 100x120 ya da takviyeli palet önerilir. Yükün ağırlığını ve ölçüsünü yazın." },
      { q: "Düzenli aylık palet tedariki yapılır mı?", a: "Evet. Ürün, adet ve sıklığa göre program teklifte yazılı hale getirilir." },
      { q: "Başakşehir’den hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adres bilgisiyle talep iletmeniz yeterlidir." },
    ],
  },
  {
    slug: "bagcilar-palet",
    name: "Bağcılar",
    wave: 3,
    title: "Bağcılar Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Bağcılar’daki matbaa, tekstil ve ticari depolara palet: Euro, ikinci el, plastik. Gebze depodan toplu sevkiyat, hurda palet alımı, hızlı teklif için yazın.",
    h1: "Bağcılar Palet Satışı ve Hurda Palet Alımı",
    keyword: "bağcılar palet",
    art: "region",
    distance: "yaklaşık 60–70 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Bağcılar’daki matbaa, tekstil ve ticari depo işletmelerine Gebze’den palet.",
    answer:
      "Bağcılar, İstanbul’un Avrupa yakasında yoğun yerleşim ve ticaretle iç içe geçmiş küçük imalat ilçesidir; matbaa, tekstil, ayakkabı ve ticari depo işletmeleri öne çıkar. TEM ve E-5 hattına yakın konumu sevkiyatı kolaylaştırır. MEPAL, Gebze deposundan buraya Euro ve ikinci el palet sağlar, hurda palet alır. Süre teklifte bildirilir.",
    zones: ["Güneşli", "Mahmutbey", "Yenigün", "Demirkapı", "Kirazlı", "Bağcılar Merkez", "Matbaacılar yönü"],
    nearby: ["istanbul-palet", "kocaeli-palet", "gebze-palet", "tuzla-palet", "esenler-palet", "bahcelievler-palet", "gungoren-palet", "zeytinburnu-palet"],
    sections: [
      {
        h: "Bağcılar’da küçük imalat ve ticaret",
        p: [
          "Bağcılar’ın üretim yapısı büyük fabrikalardan çok yoğun kullanılan atölye ve sanayi sitelerine dayanır. Güneşli çevresinde tekstil ve hazır giyim, Mahmutbey yönünde depo ve nakliye, ilçe genelinde matbaa, ayakkabı, plastik ve ambalaj işletmeleri çalışır. Toptan ticaret yapan firmaların depoları da palet kullanan önemli bir gruptur.",
          "Bu işletmelerde alan sınırlıdır. Fazla palet stoklamak yerine sık ve küçük partilerle çalışmak yaygındır; MEPAL tarafında ise mesafe nedeniyle birleştirilmiş sevkiyat daha verimlidir. İkisini dengelemek için önceden planlı sipariş öneriyoruz.",
        ],
        links: [["İstanbul sayfası", "/bolge/istanbul-palet/"], ["Palet nakliye ve lojistik", "/hizmetler/palet-nakliye-lojistik/"]],
      },
      {
        h: "Dar alanda doğru palet",
        list: [
          "İkinci el Euro palet: sık değişen, düşük maliyetli kullanım.",
          "İnce palet: hafif ve hacimli ürünlerde, nakliye ağırlığını azaltmak için.",
          "Plastik palet: gıda ve temizlik gerektiren işlerde, yığılabilir yapıda.",
          "Özel ölçülü palet: koli ya da kolisiz standart dışı ürünler için.",
        ],
        links: [
          ["İnce palet", "/urunler/ince-palet/"],
          ["İkinci el Euro palet", "/urunler/ikinci-el-euro-palet/"],
          ["Palet nasıl istiflenir", "/rehber/palet-nasil-istiflenir/"],
        ],
      },
      {
        h: "Sevkiyat ve hurda palet",
        p: [
          "Gebze’den Bağcılar’a TEM üzerinden gidilir. Şehir içi trafik teslimat süresini belirler; mümkünse sabah erken ya da öğleden sonra teslim penceresi önerilir. “İlçeye göre planlanır, net süre teklifte bildirilir.”",
          "Atölyelerde biriken kırık ve hurda paletleri yerinden alıyoruz. Küçük miktarlar bölgedeki diğer talepler ile birleştirilerek planlanır.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Kırık palet alımı", "/hizmetler/kirik-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Bağcılar’a küçük adetle palet gönderir misiniz?", a: "Mesafe nedeniyle talepler birleştirilerek planlanır. Koşullar teklifte bildirilir." },
      { q: "Matbaa ya da tekstil atölyesi için hangi palet uygundur?", a: "Ürün ağırlığına göre ikinci el Euro ya da ince palet yeterli olabilir. Ürünü yazarsanız seçim yapılır." },
      { q: "Bağcılar’dan hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adres bilgisiyle talep iletirseniz alım planlanır." },
      { q: "Teslimat ne kadar sürer?", a: "Trafik ve araç programına göre değişir; net süre teklifte bildirilir." },
    ],
  },
  {
    slug: "kucukcekmece-palet",
    name: "Küçükçekmece",
    wave: 3,
    title: "Küçükçekmece Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Küçükçekmece, Halkalı ve Sefaköy çevresindeki depo ve imalat işletmelerine palet: Euro, ikinci el, plastik. Gebze depodan sevkiyat, hurda palet alımı.",
    h1: "Küçükçekmece Palet Satışı ve Hurda Palet Alımı",
    keyword: "küçükçekmece palet",
    art: "region",
    distance: "yaklaşık 60–70 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Küçükçekmece, Halkalı ve Sefaköy çevresine Gebze’den planlı palet sevkiyatı.",
    answer:
      "Küçükçekmece, İstanbul’un Avrupa yakasında E-5 ve TEM arasında konumlanan; Halkalı, Sefaköy ve İkitelli sınırında depo, gıda ve küçük imalat işletmeleri barındıran kalabalık bir ilçedir. MEPAL, Gebze deposundan buradaki işletmelere Euro, ikinci el ve plastik palet sağlar, hurda palet alır. Süre ilçeye göre planlanır, net süre teklifte bildirilir.",
    zones: ["Halkalı", "Sefaköy", "Atakent", "Kanarya", "Cennet", "İstasyon", "İkitelli sınırı", "E-5 çevresi depolar"],
    nearby: ["istanbul-palet", "kocaeli-palet", "gebze-palet", "pendik-palet", "bahcelievler-palet", "zeytinburnu-palet", "gungoren-palet"],
    sections: [
      {
        h: "Küçükçekmece’nin ticari ve sanayi dokusu",
        p: [
          "Küçükçekmece, E-5 üzerinde kesintisiz bir ticaret ve depolama hattıdır. Halkalı ve Sefaköy çevresinde gıda toptancıları, dağıtım depoları, kargo ve nakliye firmaları, otomotiv yedek parça işletmeleri ve küçük imalat atölyeleri çalışır. İlçenin kuzeyi İkitelli sanayi çevresiyle sınırdaştır ve oradaki üretim akışından da pay alır.",
          "Gıda ve dağıtım depolarında palet döngüsü hızlıdır; sürekli gelen yük, sık değişim ve kırık palet birikimine yol açar. Bu nedenle satış ve hurda alımını bir arada planlamak depo içi düzene yardımcı olur.",
        ],
        links: [["İstanbul sayfası", "/bolge/istanbul-palet/"], ["Gıda ve içecek", "/sektorler/gida-ve-icecek/"]],
      },
      {
        h: "Depo ve dağıtım için palet çözümleri",
        table: {
          caption: "Küçükçekmece’de depo türüne göre palet",
          head: ["Depo türü", "Palet", "Dikkat"],
          rows: [
            ["Gıda toptan ve dağıtım", "Plastik palet ya da temiz Euro palet", "Temizlik ve hijyen"],
            ["Genel dağıtım merkezi", "80x120 Euro palet", "Raf ve tır uyumu"],
            ["Yedek parça ve otomotiv", "İkinci el palet, özel ölçülü palet", "Ağırlık ve ölçü"],
            ["Kargo ve nakliye", "İkinci el Euro palet", "Sık değişim, düşük maliyet"],
          ],
        },
        links: [
          ["Euro palet", "/urunler/80x120-euro-palet/"],
          ["Palet raf sistemleri", "/rehber/palet-raf-sistemleri-ve-raf-yuku/"],
          ["Otomotiv ve yan sanayi", "/sektorler/otomotiv-ve-yan-sanayi/"],
        ],
      },
      {
        h: "Teslimat ve hurda alımı",
        p: [
          "Gebze’den Küçükçekmece’ye TEM ve E-5 hattı kullanılır. Trafik ve geçiş saatleri teslim süresini etkiler; net süre teklifte bildirilir. Sevkiyat Gebze Pelitli deposundan yapılır.",
          "Depolarda biriken hurda ve kırık paletleri yerinden alıyoruz. Dönüşte alım yapılabilen durumlarda sefer sayısı azalır.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Hasarlı palet alımı", "/hizmetler/hasarli-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Halkalı ve Sefaköy’e teslimat yapıyor musunuz?", a: "Evet. Küçükçekmece sınırlarındaki adreslere planlı sevkiyat yapıyoruz." },
      { q: "Gıda dağıtım deposu için hangi palet uygundur?", a: "Hijyen gereksinimine göre plastik ya da temiz sınıflandırılmış Euro palet önerilir." },
      { q: "Hurda palet alımı yapıyor musunuz?", a: "Evet. Adet, tür ve adres bilgisiyle talep iletirseniz alım planlanır." },
      { q: "Teslimat süresi nedir?", a: "Trafik ve araç programına göre değişir; net süre teklifte bildirilir." },
    ],
  },
  {
    slug: "arnavutkoy-palet",
    name: "Arnavutköy",
    wave: 3,
    title: "Arnavutköy Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Arnavutköy, Hadımköy ve Taşoluk çevresindeki lojistik depolar ve fabrikalara palet: Euro, HT, ikinci el. Gebze depodan toplu sevkiyat, hurda palet alımı.",
    h1: "Arnavutköy Palet Satışı ve Hurda Palet Alımı",
    keyword: "arnavutköy palet",
    art: "region",
    distance: "yaklaşık 80–100 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Arnavutköy ve Hadımköy lojistik ve sanayi alanlarına Gebze’den toplu palet.",
    answer:
      "Arnavutköy, İstanbul’un Avrupa yakasının kuzeyinde, İstanbul Havalimanı ve Kuzey Marmara Otoyolu çevresinde hızla gelişen bir ilçedir. Hadımköy ve Taşoluk gibi bölgelerde büyük depo, lojistik ve fabrika yapıları bulunur. MEPAL, Gebze deposundan buraya toplu sevkiyatla Euro, HT damgalı ve ikinci el palet sağlar, hurda palet alır; süre teklifte bildirilir.",
    zones: ["Hadımköy", "Taşoluk", "Boğazköy", "Bolluca", "Karlıbayır", "Tayakadın", "İstanbul Havalimanı çevresi", "Kuzey Marmara hattı"],
    nearby: ["istanbul-palet", "kocaeli-palet", "gebze-palet", "izmit-palet", "catalca-palet"],
    sections: [
      {
        h: "Arnavutköy’ün lojistik karakteri",
        p: [
          "Arnavutköy, geniş arazi stoku ve otoyol bağlantıları sayesinde son yıllarda büyük depo ve dağıtım merkezlerinin tercih ettiği bir alandır. Hadımköy çevresinde fabrikalar ve geniş depolar, Taşoluk ve Boğazköy yönünde ise lojistik ve toptan ticaret yapıları öne çıkar. İstanbul Havalimanı’na yakınlık, hava kargo ve hızlı sevkiyat zincirini de bölgeye çekmiştir.",
          "Bu ölçekteki işletmeler tek seferde yüzlerce, bazen binlerce palet kullanır. Büyük adetlerde tam araç yükleme yapılabildiği için mesafe, birim sevkiyat maliyetini düşürerek avantaja dönüşebilir.",
        ],
        links: [["İstanbul sayfası", "/bolge/istanbul-palet/"], ["E-ticaret ve depo", "/sektorler/e-ticaret-ve-depo/"], ["1 tır kaç palet alır", "/rehber/1-tir-kac-palet-alir/"]],
      },
      {
        h: "Büyük depo ve fabrikalar için seçenekler",
        list: [
          "80x120 Euro palet: raflı depo ve tır yüklemesi için standart.",
          "HT damgalı palet: hava kargo ve deniz ihracatına giden ürünler.",
          "İkinci el Euro palet: yüksek hacimli iç dağıtımda maliyet kontrolü.",
          "Plastik palet: hijyen gerektiren ve otomasyonlu hatlar.",
          "Özel ölçülü palet: fabrikaya özel ürün ve ambalaj ölçüleri.",
        ],
        links: [
          ["Toptan palet", "/hizmetler/toptan-palet/"],
          ["Isıl işlemli palet", "/urunler/isil-islemli-palet/"],
          ["Konteyner palet hesaplama", "/araclar/konteyner-palet-hesaplama/"],
        ],
      },
      {
        h: "Tam araç sevkiyatı ve hurda palet",
        p: [
          "Gebze’den Arnavutköy’e TEM ve Kuzey Marmara Otoyolu hattı kullanılır; mesafenin uzunluğu nedeniyle sevkiyat tam araç ya da birleştirilmiş yük esasıyla planlanır. Süre araç programına göre belirlenir; net süre teklifte bildirilir.",
          "Lojistik merkezlerde ve fabrikalarda biriken hurda paletleri yerinden alıyoruz. Büyük miktarlarda araç özel planlanır.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Palet nakliye ve lojistik", "/hizmetler/palet-nakliye-lojistik/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Hadımköy’deki depoya palet gönderiyor musunuz?", a: "Evet. Hadımköy ve Arnavutköy genelindeki adreslere toplu sevkiyat planlıyoruz." },
      { q: "Büyük adetlerde teslimat nasıl yapılır?", a: "Adede göre tam araç planlanır. Koşullar ve net süre teklifte yazılı olarak bildirilir." },
      { q: "Havalimanı çevresine sevkiyat yapıyor musunuz?", a: "Adres ve ürün bilgisi teklifte netleşir; ihracat ve hava kargo için HT damgalı palet temin edilir." },
      { q: "Arnavutköy’den hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adresle yazarsanız alım planlanır." },
    ],
  },
  {
    slug: "gaziosmanpasa-palet",
    name: "Gaziosmanpaşa",
    wave: 3,
    title: "Gaziosmanpaşa Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Gaziosmanpaşa’daki atölye, depo ve toptan ticaret işletmelerine palet: Euro, ikinci el, plastik. Gebze depodan toplu sevkiyat, hurda palet alımı.",
    h1: "Gaziosmanpaşa Palet Satışı ve Hurda Palet Alımı",
    keyword: "gaziosmanpaşa palet",
    art: "region",
    distance: "yaklaşık 65–75 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Gaziosmanpaşa’daki atölye ve toptan ticaret depolarına Gebze’den palet.",
    answer:
      "Gaziosmanpaşa, İstanbul’un Avrupa yakasında yoğun yerleşimin içinde atölye, toptan ticaret ve küçük depo işletmelerinin çalıştığı bir ilçedir. Merkezi konumu, TEM ve Kuzey Marmara bağlantılarına erişimi kolaylaştırır. MEPAL, Gebze deposundan buraya Euro ve ikinci el palet sağlar, hurda palet alır; süre teklifte bildirilir.",
    zones: ["Karadeniz", "Sarıgöl", "Bağlarbaşı", "Yıldıztabya", "Karlıtepe", "Küçükköy", "Merkez ticaret hattı"],
    nearby: ["istanbul-palet", "kocaeli-palet", "gebze-palet", "tuzla-palet", "esenler-palet", "bayrampasa-palet"],
    sections: [
      {
        h: "Gaziosmanpaşa’da palet kimin işi",
        p: [
          "Gaziosmanpaşa’da sanayi, geniş fabrika kampüsleri yerine mahalle içine yayılmış atölye ve depolardan oluşur. Metal ve ahşap işleyen atölyeler, gıda toptancıları, inşaat malzemesi satıcıları, ambalaj ve baskı işletmeleri ilçenin palet kullanan çevresidir. Komşu Eyüpsultan, Sultangazi ve Bayrampaşa ile birlikte bu hat bir ticaret koridoru oluşturur.",
          "Depo alanı kısıtlı olduğu için işletmeler genelde sık ve küçük sevkiyat ister. Palet tedarikinde de bu doğrultuda esnek, tek tip ve temiz Euro palet tercih edilir.",
        ],
        links: [["İstanbul sayfası", "/bolge/istanbul-palet/"], ["Palet çeşitleri ve seçimi", "/rehber/palet-cesitleri-ve-secimi/"]],
      },
      {
        h: "Atölye ve toptan depo için seçenekler",
        table: {
          caption: "Gaziosmanpaşa’da kullanım türüne göre palet",
          head: ["Kullanım", "Palet", "Not"],
          rows: [
            ["Toptan ticaret deposu", "İkinci el Euro palet", "Yaygın ve ekonomik"],
            ["Metal ve ahşap atölyesi", "Özel ölçülü ya da takviyeli palet", "Parça ağırlığına göre"],
            ["Gıda toptan", "Plastik palet", "Hijyen ve temizlik"],
            ["İnşaat malzemesi", "100x120 palet", "Ağır ve geniş yük"],
          ],
        },
        links: [
          ["İkinci el palet", "/urunler/ikinci-el-palet/"],
          ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"],
          ["100x120 palet", "/urunler/100x120-palet/"],
        ],
      },
      {
        h: "Teslimat ve hurda palet",
        p: [
          "Gebze’den Gaziosmanpaşa’ya TEM hattı kullanılır. Şehir içi trafik teslim süresini etkiler; sabah ya da öğleden sonra teslim önerilir. Süre ilçeye göre planlanır, net süre teklifte bildirilir.",
          "Atölye ve depolarda biriken kırık, hurda paletleri yerinden alıyoruz. Küçük partiler yakındaki talepler ile birleştirilir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Palet tamiri", "/hizmetler/palet-tamiri/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Gaziosmanpaşa’ya palet teslim ediyor musunuz?", a: "Evet. Gebze deposundan ilçeye planlı sevkiyat yapıyoruz. Süre teklifte bildirilir." },
      { q: "Küçük bir atölye için kaç palet sipariş edebilirim?", a: "Mesafe nedeniyle birleştirilmiş sevkiyat uygundur. Küçük adetlerde koşullar teklifte netleşir." },
      { q: "Gaziosmanpaşa’dan hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adresle yazarsanız alım planlanır." },
      { q: "Paletlerin tamiri yapılıyor mu?", a: "Onarıma uygun paletler için palet tamiri hizmetimiz vardır; fotoğraf ve adetle bilgi alabilirsiniz." },
    ],
  },
  {
    slug: "sultangazi-palet",
    name: "Sultangazi",
    wave: 3,
    title: "Sultangazi Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Sultangazi’deki atölye, küçük sanayi ve depo işletmelerine palet: Euro, ikinci el, plastik. Gebze depodan toplu sevkiyat, hurda palet alımı, hızlı teklif.",
    h1: "Sultangazi Palet Satışı ve Hurda Palet Alımı",
    keyword: "sultangazi palet",
    art: "region",
    distance: "yaklaşık 65–80 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Sultangazi’deki küçük sanayi ve depo işletmelerine Gebze’den planlı palet.",
    answer:
      "Sultangazi, İstanbul’un Avrupa yakasında Gaziosmanpaşa, Eyüpsultan ve Arnavutköy arasında kalan; konut yoğunluğunun yanında atölye, küçük sanayi sitesi ve depo işletmeleri barındıran bir ilçedir. MEPAL, Gebze deposundan buraya Euro ve ikinci el palet sağlar, hurda palet alır. Süre ilçeye göre planlanır, net süre teklifte bildirilir.",
    zones: ["Cebeci", "Habibler", "Esentepe", "Yunus Emre", "Zübeyde Hanım", "Gazi", "75. Yıl", "İsmetpaşa"],
    nearby: ["istanbul-palet", "kocaeli-palet", "gebze-palet", "tuzla-palet", "bayrampasa-palet"],
    sections: [
      {
        h: "Sultangazi’de palet kullanan işletmeler",
        p: [
          "Sultangazi’nin üretim yapısı küçük ölçeklidir: metal ve mobilya atölyeleri, ambalaj ve baskı işletmeleri, gıda üretim ve dağıtım noktaları, inşaat malzemesi satıcıları ve toptan depolar ilçedeki palet tüketicisidir. Arnavutköy ve Gaziosmanpaşa ile sınır komşuluğu, Hadımköy ve Kuzey Marmara bağlantısına erişimi kolaylaştırır.",
          "İşletmelerin çoğu bir seferde onlarca ile birkaç yüz palet arasında ihtiyaç duyar. Bu aralık, birden fazla adresi birleştiren bir sevkiyat planı için uygundur.",
        ],
        links: [["İstanbul sayfası", "/bolge/istanbul-palet/"], ["Palet çeşitleri ve seçimi", "/rehber/palet-cesitleri-ve-secimi/"]],
      },
      {
        h: "İhtiyaca göre seçenekler",
        list: [
          "İkinci el Euro palet: atölye, depo ve iç sevkiyatta yaygın seçim.",
          "Sıfır ahşap palet: temiz ve tutarlı görünüm isteyen işletmeler için.",
          "Plastik palet: gıda ve hijyen gerektiren üretim.",
          "Özel ölçülü palet: mobilya ve metal parça gibi standart dışı ürünler.",
        ],
        links: [
          ["İkinci el palet", "/urunler/ikinci-el-palet/"],
          ["Sıfır ahşap palet", "/urunler/sifir-ahsap-palet/"],
          ["Ahşap palet mi plastik palet mi", "/rehber/ahsap-palet-mi-plastik-palet-mi/"],
        ],
      },
      {
        h: "Sevkiyat ve hurda palet",
        p: [
          "Gebze’den Sultangazi’ye TEM hattı kullanılır; trafik teslim süresini belirleyen en önemli etkendir. Bu yüzden ilçeye teslimatta “ilçeye göre planlanır, net süre teklifte bildirilir” esasıyla çalışırız. Genel sevkiyat çerçevesi için Türkiye geneli sayfasına bakabilirsiniz.",
          "Atölye ve depolarda biriken hurda ve kırık paletleri yerinden alıyoruz. Adet, tür ve fotoğrafı iletmeniz yeterlidir.",
        ],
        links: [["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Sultangazi’ye palet teslim ediyor musunuz?", a: "Evet. Gebze deposundan ilçeye planlı toplu sevkiyat yapıyoruz. Süre teklifte bildirilir." },
      { q: "Mobilya atölyesi için hangi palet uygundur?", a: "Ürünün ölçüsüne göre Euro palet ya da özel ölçülü palet önerilir. Ölçü ve ağırlığı yazın." },
      { q: "Sultangazi’den hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adresle yazarsanız alım planlanır." },
      { q: "Küçük adetli sipariş olur mu?", a: "Mesafe nedeniyle talepler birleştirilerek planlanır. Koşullar teklifte netleşir." },
    ],
  },
  {
    slug: "silivri-palet",
    name: "Silivri",
    wave: 3,
    title: "Silivri Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Silivri’deki gıda, tarım ürünleri ve depo işletmelerine palet: Euro, ikinci el, plastik. Gebze depodan planlı toplu sevkiyat, hurda palet alımı.",
    h1: "Silivri Palet Satışı ve Hurda Palet Alımı",
    keyword: "silivri palet",
    art: "region",
    distance: "yaklaşık 110–125 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Silivri’nin gıda, tarım ve küçük imalat işletmelerine Gebze’den toplu palet sevkiyatı.",
    answer:
      "Silivri, İstanbul’un Avrupa yakasında Marmara kıyısındaki en batı ilçelerinden biridir; gıda üretimi, tarım ürünü işleme, küçük imalat ve depolama burada öne çıkar. MEPAL, Gebze deposundan Silivri’ye Euro, ikinci el ve plastik paleti toplu sevkiyatla gönderir, hurda paletleri yerinden alır. Mesafe uzun olduğundan sevkiyat planlı yapılır; net süre teklifte bildirilir.",
    zones: ["Selimpaşa", "Gümüşyaka", "Mimar Sinan", "Alibey", "Piri Mehmet Paşa", "Çanta", "Büyükçavuşlu", "Değirmenköy", "D-100 çevresi depolar"],
    nearby: ["buyukcekmece-palet", "beylikduzu-palet", "istanbul-palet", "gebze-palet"],
    sections: [
      {
        h: "Silivri’de palet kullanan işletmeler",
        p: [
          "Silivri’nin ekonomik yapısı İstanbul’un diğer Avrupa yakası ilçelerinden farklıdır: geniş tarım arazileri, süt ve yoğurt gibi gıda ürünlerinin işlendiği tesisler, kıyıdaki depolar ve D-100 boyunca dizilen küçük imalat işletmeleri bir arada bulunur. Bu karışım palet ihtiyacını da çeşitlendirir.",
          "Mesafe nedeniyle ilçedeki işletmelerin çoğu sık ve küçük alımdan çok, düzenli aralıklarla toplu alımı tercih eder. Bu da sevkiyatı tek araçta birleştirmeyi mümkün kılar.",
        ],
        list: [
          "Gıda ve süt ürünleri işleyenler: temiz, kokusuz ve yıkanabilir yüzey için plastik veya sınıflandırılmış Euro palet.",
          "Tarım ürünü paketleyenler: nemli ortama dayanıklı, kuru stoktan çıkan palet.",
          "Küçük imalat ve atölyeler: bütçeyi koruyan ikinci el palet.",
          "Depo ve dağıtım: raf uyumlu 80x120 Euro ölçü.",
        ],
      },
      {
        h: "İhtiyaca göre seçenekler",
        table: {
          caption: "Silivri’de sık sorulan kullanım ve palet",
          head: ["Kullanım", "Önerilen palet", "Not"],
          rows: [
            ["Gıda ve soğuk zincir yan işleri", "Plastik palet", "Kıymık ve çivi riski yok, yıkanabilir"],
            ["Genel depo ve dağıtım", "80x120 Euro palet", "Standart raf ve tır ölçüsü"],
            ["Atölye ve iç sevkiyat", "İkinci el palet", "Sınıflandırılmış stoktan seçilir"],
            ["Yurt dışına gidecek yük", "ISPM-15 uyumlu HT paleti", "HT damgalı ihracat paleti temini"],
          ],
        },
        links: [
          ["Plastik palet", "/urunler/plastik-palet/"],
          ["80x120 Euro palet", "/urunler/80x120-euro-palet/"],
          ["İkinci el palet", "/urunler/ikinci-el-palet/"],
          ["İhracat paleti", "/urunler/ihracat-paleti/"],
        ],
      },
      {
        h: "Sevkiyat ve hurda palet",
        p: [
          "Sevkiyat Gebze Pelitli deposundan yapılır. Silivri, depodan en uzak İstanbul ilçelerinden biri olduğu için sipariş tek seferde ve mümkünse toplu planlanır; küçük adetler diğer Avrupa yakası teslimatlarıyla birleştirilebilir. Net süre ve koşullar teklifte bildirilir. Genel çerçeve için Türkiye geneli sevkiyat sayfasına bakabilirsiniz.",
          "Tesislerde biriken kırık ve kullanılmaz paletleri yerinden alıyoruz. Adet, tür ve adres bilgisini fotoğrafla iletmeniz yeterlidir.",
        ],
        links: [["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Silivri’ye en az kaç palet gönderiyorsunuz?", a: "Mesafe uzun olduğu için toplu sevkiyat daha verimlidir. Küçük adetler başka teslimatlarla birleştirilebilir; koşullar teklifte netleşir." },
      { q: "Süt ve gıda işleyen bir tesis için hangi palet uygun?", a: "Hijyen önceliğiyse plastik palet, bütçe ön plandaysa temiz ve sınıflandırılmış Euro palet önerilir. Ürününüzü ve depolama koşulunuzu yazın." },
      { q: "Silivri’den hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adres bilgisiyle talep iletirseniz alım planlanır." },
      { q: "Silivri’ye teslimat süresi nedir?", a: "Araç programına ve trafiğe göre planlanır; net süre teklifte bildirilir." },
    ],
  },
  {
    slug: "catalca-palet",
    name: "Çatalca",
    wave: 3,
    title: "Çatalca Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Çatalca’daki tarım, gıda işleme, çiftlik ve küçük sanayi işletmelerine palet: Euro, ikinci el, plastik. Gebze depodan toplu sevkiyat ve hurda palet alımı.",
    h1: "Çatalca Palet Satışı ve Hurda Palet Alımı",
    keyword: "çatalca palet",
    art: "region",
    distance: "yaklaşık 100–120 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Çatalca’nın tarım, gıda ve küçük sanayi işletmelerine Gebze’den planlı palet.",
    answer:
      "Çatalca, İstanbul’un yüzölçümü en geniş ilçelerinden biridir; ağırlıklı olarak tarım, hayvancılık ve gıda işleme faaliyeti vardır, ilçe merkezi ve çevresinde küçük sanayi ve depo yapıları bulunur. MEPAL, Gebze deposundan Çatalca’ya toplu sevkiyatla Euro, ikinci el ve plastik palet gönderir, hurda paletleri alır. Net süre teklifte bildirilir.",
    zones: ["Ferhatpaşa", "Kaleiçi", "Karacaköy", "Binkılıç", "Nakkaş", "Ormanlı", "İlçe merkezi sanayi alanı"],
    nearby: ["arnavutkoy-palet", "buyukcekmece-palet", "istanbul-palet", "kocaeli-palet"],
    sections: [
      {
        h: "Çatalca’nın üretim yapısı",
        p: [
          "Çatalca’da işletmeler birbirine uzak, geniş alanlara dağılmıştır. Tahıl ve ayçiçeği gibi tarım ürünleri, süt ve et işleyen tesisler, çiftlikler ve paketleme depoları ilçenin palet tüketen başlıca grubudur. İlçe merkezi ve çevresinde ise metal, ambalaj ve inşaat malzemesi alanında küçük işletmeler çalışır.",
          "Bu dağınık yapı, sevkiyatın adres sayısına ve yol uzunluğuna göre planlanmasını gerektirir. Aynı bölgedeki birkaç işletmenin talebi birleştirilince araç dolulukla gider.",
        ],
        links: [["İstanbul sayfası", "/bolge/istanbul-palet/"], ["Gıda ve içecek", "/sektorler/gida-ve-icecek/"]],
      },
      {
        h: "İşletme tipine göre palet",
        list: [
          "Gıda işleme tesisi: plastik palet veya temiz, sınıflandırılmış Euro palet.",
          "Tarım ürünü paketleme: çok sayıda ve düşük maliyetli ikinci el palet.",
          "Çiftlik ve yem deposu: ağır çuval yükü için sağlam, takozlu ya da kalın palet.",
          "Standart dışı ürün: özel ölçülü palet üretimi.",
        ],
        links: [
          ["Takozlu palet", "/urunler/takozlu-palet/"],
          ["İkinci el palet", "/urunler/ikinci-el-palet/"],
          ["Özel ölçülü palet", "/urunler/ozel-olcu-palet/"],
          ["Palet seçici", "/araclar/palet-secici/"],
        ],
      },
      {
        h: "Sevkiyat ve hurda palet",
        p: [
          "Sevkiyat Gebze Pelitli deposundan yapılır. Çatalca’ya yol uzun ve işletme adresleri dağınık olduğundan, adet ve tür bilgisiyle birlikte teslim adresinin tam yazılması planlamayı kolaylaştırır. Süre ve koşullar teklifte bildirilir. Çerçeve için Türkiye geneli sevkiyat sayfasına bakabilirsiniz.",
          "Çiftlik, depo ve işletmelerde birikmiş kırık ve kullanılmaz paletler için yerinde toplama yapılır. Fotoğraf ve adet bilgisi yeterlidir.",
        ],
        links: [["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Çatalca’da köy ve çiftlik adreslerine teslim yapıyor musunuz?", a: "Adres ve araç erişimi uygunsa yapılır. Tam adresi ve erişim koşulunu yazın, teklifte netleştirelim." },
      { q: "Yem ve çuval depolamak için hangi palet uygun?", a: "Ağır ve üst üste istiflenen çuval yükünde sağlam ahşap palet, genellikle takozlu veya güçlendirilmiş tip önerilir." },
      { q: "Çatalca’dan hurda palet alıyor musunuz?", a: "Evet. Adet ve adresle iletirseniz alım planlanır." },
      { q: "Minimum sipariş adedi var mı?", a: "Mesafe nedeniyle toplu sevkiyat tercih edilir; küçük talepler birleştirilerek planlanır. Koşullar teklifte bildirilir." },
    ],
  },
  {
    slug: "esenler-palet",
    name: "Esenler",
    wave: 3,
    title: "Esenler Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Esenler’deki tekstil, konfeksiyon, toptan ticaret ve depo işletmelerine palet: Euro, ikinci el, plastik. Gebze depodan planlı sevkiyat, hurda palet alımı.",
    h1: "Esenler Palet Satışı ve Hurda Palet Alımı",
    keyword: "esenler palet",
    art: "region",
    distance: "yaklaşık 65–80 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Esenler’in tekstil ve toptan ticaret çevresine Gebze’den planlı palet sevkiyatı.",
    answer:
      "Esenler, İstanbul’un Avrupa yakasında yoğun nüfuslu, ticaretin ve hazır giyim üretiminin öne çıktığı bir ilçedir; Oruçreis çevresindeki tekstil ve giyim merkezleri, toptan depolar ve küçük atölyeler palet ihtiyacı doğurur. MEPAL, Gebze deposundan Euro, ikinci el ve plastik paleti planlı sevkiyatla gönderir, hurda palet alır. Net süre teklifte bildirilir.",
    zones: ["Oruçreis", "Davutpaşa", "Tuna", "Menderes", "Çiftehavuzlar", "Havaalanı", "Giyimkent çevresi", "Otogar çevresi depolar"],
    nearby: ["bagcilar-palet", "gaziosmanpasa-palet", "kucukcekmece-palet", "istanbul-palet"],
    sections: [
      {
        h: "Esenler’de palet nerede kullanılır",
        p: [
          "Esenler’de palet daha çok sevkiyat noktalarında kullanılır: hazır giyim ve tekstil firmalarının sevk depoları, toptan gıda ve kuruyemiş satıcıları, kargo ve nakliye aktarma noktaları, inşaat ve hırdavat toptancıları. Üretimden çok dağıtım ve toptan satış ağırlıklıdır.",
          "Bu işletmelerde palet genellikle hızlı devreden, el transpaletiyle taşınan ve çoğu zaman tek yönlü giden bir malzemedir. Bu yüzden maliyeti makul, ölçüsü standart palet öne çıkar.",
        ],
        table: {
          caption: "Esenler’de işletme tipine göre palet",
          head: ["İşletme", "Önerilen palet", "Dikkat"],
          rows: [
            ["Konfeksiyon sevk deposu", "İkinci el Euro palet", "Kuru, temiz yüzey; koli istifi düz olmalı"],
            ["Toptan gıda ve kuruyemiş", "Plastik veya temiz Euro palet", "Koku ve nem etkisi, hijyen"],
            ["Kargo ve aktarma", "Düşük maliyetli ikinci el palet", "Sık el değiştirir, sağlamlık sınıfı yeterli"],
            ["Hırdavat, yapı malzemesi", "Takozlu veya 100x120 palet", "Ağır yük, istif yüksekliği"],
          ],
        },
        links: [["Euro palet", "/urunler/80x120-euro-palet/"], ["İkinci el palet", "/urunler/ikinci-el-palet/"], ["Plastik palet", "/urunler/plastik-palet/"]],
      },
      {
        h: "Sevkiyat ve hurda palet",
        p: [
          "Sevkiyat Gebze Pelitli deposundan yapılır. Esenler’de sevkiyat yoğun trafik alanlarına girdiği için araç boyutu ve boşaltma koşulu planı etkiler; adresinizde araç girişi, rampa veya forklift olup olmadığını yazmanız bu yüzden önemlidir. Net süre teklifte bildirilir. Çerçeve için Türkiye geneli sevkiyat sayfasına bakabilirsiniz.",
          "Depolarda biriken kırık ve kullanılmaz paletleri yerinden alıyoruz. Adet, tür ve adres yeterlidir.",
        ],
        links: [["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Esenler’de dar sokaktaki depoya teslim mümkün mü?", a: "Araç ölçüsüne ve erişime bağlıdır. Adresi ve boşaltma koşulunu yazarsanız uygun araçla planlanır." },
      { q: "Konfeksiyon sevkiyatı için hangi palet yeterli?", a: "Çoğu zaman temiz, sınıflandırılmış ikinci el Euro palet yeterlidir. Müşteri veya ihracat şartı varsa yeni ya da HT damgalı palet gerekebilir." },
      { q: "Esenler’den hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adresle iletirseniz alım planlanır." },
      { q: "Küçük adetli sipariş olur mu?", a: "Talepler diğer Avrupa yakası teslimatlarıyla birleştirilerek planlanır; koşullar teklifte netleşir." },
    ],
  },
  {
    slug: "bayrampasa-palet",
    name: "Bayrampaşa",
    wave: 3,
    title: "Bayrampaşa Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Bayrampaşa’daki hal, toptan gıda, matbaa ve atölye işletmelerine palet: Euro, plastik, ikinci el. Gebze depodan planlı sevkiyat ve hurda palet alımı.",
    h1: "Bayrampaşa Palet Satışı ve Hurda Palet Alımı",
    keyword: "bayrampaşa palet",
    art: "region",
    distance: "yaklaşık 65–80 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Bayrampaşa’daki hal ve toptan gıda işletmelerine Gebze’den planlı palet sevkiyatı.",
    answer:
      "Bayrampaşa, İstanbul’un Avrupa yakasında sebze ve meyve haliyle, çevresindeki toptan gıda, ambalaj ve dağıtım işletmeleriyle öne çıkan bir ilçedir; ayrıca atölye ve küçük sanayi alanları vardır. MEPAL, Gebze deposundan Euro, plastik ve ikinci el paleti planlı sevkiyatla gönderir, hurda palet alır. Net süre teklifte bildirilir.",
    zones: ["İstanbul Hali çevresi", "Kocatepe", "Yıldırım", "Altıntepsi", "Muratpaşa", "Vatan", "Cevatpaşa", "Bayrampaşa sanayi alanları"],
    nearby: ["gaziosmanpasa-palet", "sultangazi-palet", "bagcilar-palet", "istanbul-palet"],
    sections: [
      {
        h: "Hal ve toptan gıdada palet",
        p: [
          "Bayrampaşa’nın palet ihtiyacında belirleyici unsur hal çevresidir. Sebze, meyve ve toptan gıda ticaretinde yük kasa ve koli halinde gelir; kasaların paletli istiflenmesi ve araca paletli yüklenmesi sahada sık görülen bir uygulamadır. Nem, su ve soğuk ortam bu işletmelerde palet seçimini doğrudan etkiler.",
          "Taze ürünün hijyeni açısından yıkanabilir yüzey önemlidir; çok yüksek devirli ve tek yönlü kullanımda ise düşük maliyetli ikinci el ahşap palet tercih edilir.",
        ],
        table: {
          caption: "Bayrampaşa’da kullanım ve palet seçimi",
          head: ["Kullanım", "Palet", "Neden"],
          rows: [
            ["Taze sebze-meyve kasası", "Plastik palet", "Yıkanabilir, nemde bozulmaz"],
            ["Toptan kuru gıda", "80x120 Euro palet", "Raf ve araç yüklemesine uygun"],
            ["Yüksek devirli tek yönlü sevk", "İkinci el palet", "Maliyet kontrolü"],
            ["Matbaa, kâğıt, ambalaj", "Düz yüzeyli Euro palet", "Kâğıt ve karton yükü için temiz yüzey"],
          ],
        },
        links: [["Plastik palet", "/urunler/plastik-palet/"], ["Gıda ve içecek", "/sektorler/gida-ve-icecek/"], ["Gıda için palet seçimi", "/rehber/gida-sektoru-icin-palet-secimi/"]],
      },
      {
        h: "Sevkiyat ve hurda palet",
        p: [
          "Sevkiyat Gebze Pelitli deposundan yapılır. Hal çevresi gibi yoğun alanlarda araç giriş saatleri ve boşaltma düzeni kısıtlı olabileceğinden, adresinize araç girişi ve boşaltma koşulunu yazmanız planı kolaylaştırır. Net süre teklifte bildirilir. Çerçeve için Türkiye geneli sevkiyat sayfasına bakabilirsiniz.",
          "Kırık, ıslanmış ve kullanım dışı kalmış paletleri yerinden alıyoruz. Adet ve adresi yazmanız yeterlidir.",
        ],
        links: [["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Hal için plastik palet mi ahşap palet mi?", a: "Islak ve taze ürün kasasında plastik palet daha uygundur; kuru ve tek yönlü sevkte ikinci el ahşap palet de iş görür." },
      { q: "Sabah erken saatte teslimat yapılır mı?", a: "Boşaltma saatleri adrese göre değişir. İstediğiniz zaman aralığını yazın; araç programına göre teklifte bildirilir." },
      { q: "Bayrampaşa’dan hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adresle iletirseniz alım planlanır." },
      { q: "Küçük adetle sipariş verebilir miyim?", a: "Talepler çevredeki teslimatlarla birleştirilerek planlanır. Koşullar teklifte netleşir." },
    ],
  },
  {
    slug: "zeytinburnu-palet",
    name: "Zeytinburnu",
    wave: 3,
    title: "Zeytinburnu Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Zeytinburnu’ndaki tekstil, deri, atölye ve depo işletmelerine palet: Euro, ikinci el, plastik. Gebze depodan planlı sevkiyat, hurda palet alımı.",
    h1: "Zeytinburnu Palet Satışı ve Hurda Palet Alımı",
    keyword: "zeytinburnu palet",
    art: "region",
    distance: "yaklaşık 55–70 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Zeytinburnu’nun tekstil, atölye ve depo işletmelerine Gebze’den planlı palet.",
    answer:
      "Zeytinburnu, İstanbul’un Avrupa yakasında surların ve Marmara kıyısının arasında, tekstil, deri ve küçük atölye geleneği olan; E-5, Marmaray ve metro bağlantısıyla erişimi güçlü bir ilçedir. MEPAL, Gebze deposundan Euro, ikinci el ve plastik paleti planlı sevkiyatla gönderir, hurda palet alır. Net süre teklifte bildirilir.",
    zones: ["Kazlıçeşme", "Yenidoğan", "Telsiz", "Seyitnizam", "Merkezefendi", "Nuripaşa", "Maltepe", "Beştelsiz", "Veliefendi"],
    nearby: ["bagcilar-palet", "kucukcekmece-palet", "istanbul-palet", "avcilar-palet"],
    sections: [
      {
        h: "Zeytinburnu’nda palet talebi nereden gelir",
        p: [
          "Zeytinburnu’nun üretim yapısı, ilçenin sanayi geçmişiyle şekillenir: Kazlıçeşme çevresinin deri geçmişi, tekstil ve hazır giyim atölyeleri, matbaa ve ambalaj işletmeleri ile mutfak, mobilya ve yapı gereçleri satan dükkânlar. Üretim büyük ölçekli değil, ama işletme sayısı yüksektir.",
          "Bu yoğun ve küçük ölçekli yapıda adet bazında talepler genellikle onlarca ile birkaç yüz palet arasındadır ve çevredeki işletmelerle birleştirilerek planlanır.",
        ],
        list: [
          "Tekstil ve konfeksiyon: koli istifi için temiz, düz yüzeyli ikinci el Euro palet.",
          "Matbaa ve ambalaj: kâğıt rulo ve koli için 80x120 ya da özel ölçülü palet.",
          "Gıda dağıtım ve toptan: plastik palet veya sınıflandırılmış Euro palet.",
          "Metal ve yapı malzemesi: takozlu veya 100x120 palet.",
        ],
        links: [["Palet çeşitleri", "/rehber/palet-cesitleri-ve-secimi/"], ["Takozlu palet", "/urunler/takozlu-palet/"]],
      },
      {
        h: "Sevkiyat ve hurda palet",
        p: [
          "Sevkiyat Gebze Pelitli deposundan yapılır. Zeytinburnu’nda sokak genişliği ve park kısıtı sevkiyatın en çok etkilenen tarafıdır; araç büyüklüğünü adresin erişimine göre seçiyoruz. Adres ve boşaltma koşulunu yazmanız planı hızlandırır. Net süre teklifte bildirilir. Çerçeve için Türkiye geneli sevkiyat sayfasına bakabilirsiniz.",
          "Atölye ve depolarda biriken kırık paletleri yerinden alıyoruz. Adet, tür ve fotoğraf bilgisi yeterlidir.",
        ],
        links: [["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Zeytinburnu’ndaki küçük atölyeme palet gönderilir mi?", a: "Evet. Küçük talepler çevredeki teslimatlarla birleştirilerek planlanır; koşullar teklifte netleşir." },
      { q: "Dar sokaklara araç girebilir mi?", a: "Adrese göre uygun boyutta araç planlanır. Erişim bilgisini yazmanız yeterlidir." },
      { q: "Zeytinburnu’ndan hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adresle iletirseniz alım planlanır." },
      { q: "Deri ve tekstil için hangi palet?", a: "Nem ve koku etkisi nedeniyle kuru stoktan, düz yüzeyli palet seçilir; gerekirse plastik palet önerilir." },
    ],
  },
  {
    slug: "bahcelievler-palet",
    name: "Bahçelievler",
    wave: 3,
    title: "Bahçelievler Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Bahçelievler’deki Yenibosna, Şirinevler ve Soğanlı çevresi depo, ticaret ve atölye işletmelerine palet: Euro, ikinci el, plastik. Teklif alın.",
    h1: "Bahçelievler Palet Satışı ve Hurda Palet Alımı",
    keyword: "bahçelievler palet",
    art: "region",
    distance: "yaklaşık 60–75 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Bahçelievler’in Yenibosna ve çevresindeki depo ve ticaret işletmelerine Gebze’den palet.",
    answer:
      "Bahçelievler, İstanbul’un Avrupa yakasında yoğun yerleşim ve ticaret alanıdır; Yenibosna, Şirinevler ve Soğanlı çevresinde mağaza, toptan, mobilya ve depo işletmeleri yoğunlaşır. MEPAL, Gebze deposundan Euro, ikinci el ve plastik paleti planlı sevkiyatla gönderir, hurda palet alır. Net süre teklifte bildirilir.",
    zones: ["Yenibosna", "Şirinevler", "Soğanlı", "Çobançeşme", "Siyavuşpaşa", "Kocasinan", "Hürriyet", "Zafer"],
    nearby: ["bagcilar-palet", "kucukcekmece-palet", "avcilar-palet", "istanbul-palet"],
    sections: [
      {
        h: "Bahçelievler’de ticaret ve depo yapısı",
        p: [
          "Bahçelievler’de palet kullanımı sanayiden çok ticaret ve dağıtım eksenlidir. Yenibosna’daki mobilya ve beyaz eşya satış-depo yapıları, Şirinevler’in toptan ticareti, mağaza zincirlerinin yakın depoları, e-ticaret satıcıları ve gıda dağıtımcıları ilçenin tipik müşterisidir.",
          "Bu işletmelerde yük genellikle koli, mobilya paketi veya beyaz eşya gibi hacimli üründür; palet ise raf ve araç yüklemesine uygun standart ölçüde olmalıdır.",
        ],
        table: {
          caption: "Bahçelievler’de sık görülen kullanım",
          head: ["İşletme", "Önerilen palet", "Not"],
          rows: [
            ["Mobilya ve beyaz eşya depoları", "80x120 veya 100x120 palet", "Hacimli, orta-ağır yük"],
            ["E-ticaret depoları", "80x120 Euro palet", "Raf düzeni ve el transpaleti uyumu"],
            ["Toptan gıda dağıtımı", "Plastik veya temiz Euro palet", "Hijyen ve istif düzeni"],
            ["Mağaza zinciri iade-sevk", "İkinci el palet", "Sık devir, maliyet kontrolü"],
          ],
        },
        links: [["E-ticaret ve depo", "/sektorler/e-ticaret-ve-depo/"], ["Beyaz eşya", "/sektorler/beyaz-esya/"], ["Euro palet", "/urunler/80x120-euro-palet/"]],
      },
      {
        h: "Sevkiyat ve hurda palet",
        p: [
          "Sevkiyat Gebze Pelitli deposundan yapılır. Bahçelievler’de yoğun trafik ve park düzeni boşaltma planını etkiler; adresinizdeki araç erişimi, rampa ve forklift durumu bu yüzden teklif aşamasında sorulur. Net süre teklifte bildirilir. Çerçeve için Türkiye geneli sevkiyat sayfasına bakabilirsiniz.",
          "Mağaza ve depolarda biriken kırık ya da fazla paletleri yerinden alıyoruz. Adet, tür ve adresle talep iletebilirsiniz.",
        ],
        links: [["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Bahçelievler’de e-ticaret deposu için hangi palet uygun?", a: "Raf ve el transpaleti uyumu için 80x120 Euro palet yaygındır. Yük ağırlığınızı yazarsanız sağlamlık sınıfını öneririz." },
      { q: "Mobilya depom için 100x120 gerekir mi?", a: "Ürünün tabla ölçüsüne bağlıdır. Paket boyutunu yazarsanız 80x120, 100x120 ya da özel ölçü önerilir." },
      { q: "Bahçelievler’den hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adresle iletirseniz alım planlanır." },
      { q: "Teslimat süresi nedir?", a: "Adrese ve araç programına göre planlanır; net süre teklifte bildirilir." },
    ],
  },
  {
    slug: "gungoren-palet",
    name: "Güngören",
    wave: 3,
    title: "Güngören Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Güngören ve Merter çevresindeki tekstil, konfeksiyon, matbaa ve depo işletmelerine palet: Euro, ikinci el, plastik. Gebze depodan sevkiyat, hurda alımı.",
    h1: "Güngören Palet Satışı ve Hurda Palet Alımı",
    keyword: "güngören palet",
    art: "region",
    distance: "yaklaşık 60–75 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Güngören ve Merter’in tekstil ve konfeksiyon işletmelerine Gebze’den planlı palet.",
    answer:
      "Güngören, İstanbul’un Avrupa yakasında yüzölçümü küçük ama işletme yoğunluğu çok yüksek bir ilçedir; Merter çevresi tekstil ve konfeksiyonun, ilçenin sanayi mahalleleri ise küçük atölyelerin merkezidir. MEPAL, Gebze deposundan Euro, ikinci el ve plastik paleti planlı sevkiyatla gönderir, hurda palet alır. Net süre teklifte bildirilir.",
    zones: ["Merter", "Güneştepe", "Tozkoparan", "Haznedar", "Mareşal Çakmak", "Sanayi Mahallesi", "Genç Osman", "Güven"],
    nearby: ["bagcilar-palet", "kucukcekmece-palet", "istanbul-palet", "gaziosmanpasa-palet"],
    sections: [
      {
        h: "Güngören ve Merter’de palet ihtiyacı",
        p: [
          "Güngören’de palet daha çok iki yerde ihtiyaç olur: tekstil ve hazır giyim firmalarının sevkiyat tarafında ve mahalle içindeki küçük imalat atölyelerinde. Konfeksiyon firmaları koli ve askılı ürünü paletle araca verir; metal, plastik enjeksiyon ve matbaa atölyeleri ise hammadde ve mamul için palet kullanır.",
          "İlçe çok yoğun olduğu için tek bir işletmenin ihtiyacı küçük kalabilir; bu durumda aynı bölgedeki sipariş birleştirilir.",
        ],
        list: [
          "Konfeksiyon sevkiyatı: temiz ve düz yüzeyli ikinci el Euro palet; kumaşa kıymık değmemesi için yüzey kontrolü önemlidir.",
          "Askılı ürün ve kutu: kenar korumalı, sağlam 80x120 palet.",
          "Matbaa ve ambalaj atölyesi: kâğıt ağırlığına dayanıklı, düz palet.",
          "Küçük imalat: standart dışı parçalar için özel ölçülü palet.",
        ],
        links: [["İkinci el palet", "/urunler/ikinci-el-palet/"], ["Özel ölçülü palet", "/urunler/ozel-olcu-palet/"], ["İkinci el palet alırken dikkat", "/rehber/ikinci-el-palet-alirken-dikkat-edilecekler/"]],
      },
      {
        h: "Sevkiyat ve hurda palet",
        p: [
          "Sevkiyat Gebze Pelitli deposundan yapılır. Merter ve sanayi mahallelerinde dar sokak, park ve boşaltma düzeni sevkiyatı en çok etkileyen unsurdur; bu nedenle adres, araç erişimi ve boşaltma koşulunu yazmanızı rica ederiz. Net süre teklifte bildirilir. Çerçeve için Türkiye geneli sevkiyat sayfasına bakabilirsiniz.",
          "Atölye ve depolarda biriken kırık paletleri yerinden alıyoruz. Adet, tür ve adresle talep iletebilirsiniz.",
        ],
        links: [["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Güngören’de küçük atölyeye az sayıda palet gönderir misiniz?", a: "Küçük talepler çevredeki teslimatlarla birleştirilir; koşullar teklifte netleşir." },
      { q: "Kumaş ve konfeksiyon için palet seçerken nelere bakmalı?", a: "Yüzeyin düz, kıymıksız ve kuru olması gerekir. Gerekirse plastik palet ya da yüzeyi kontrol edilmiş sınıflandırılmış palet önerilir." },
      { q: "Güngören’den hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adresle iletirseniz alım planlanır." },
      { q: "Teslimat süresi nedir?", a: "Adrese ve araç programına göre planlanır; net süre teklifte bildirilir." },
    ],
  },
  {
    slug: "golcuk-palet",
    name: "Gölcük",
    wave: 3,
    title: "Gölcük Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Gölcük’teki otomotiv, yan sanayi, tersane ve depo işletmelerine palet: Euro, 100x120, ikinci el, plastik. Gebze depodan sevkiyat ve hurda palet alımı.",
    h1: "Gölcük Palet Satışı ve Hurda Palet Alımı",
    keyword: "gölcük palet",
    art: "region",
    distance: "yaklaşık 60–75 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Gölcük’ün otomotiv, yan sanayi ve deniz çevresi işletmelerine Gebze’den palet.",
    answer:
      "Gölcük, Kocaeli’de İzmit Körfezi’nin güney kıyısında; otomotiv üretimi, yan sanayi, denizcilik ve tersane faaliyetleriyle öne çıkan bir ilçedir. MEPAL, Gebze deposundan Gölcük’e Euro, 100x120, ikinci el ve plastik palet sevk eder, hurda paletleri yerinden alır. Net süre teklifte bildirilir.",
    zones: ["Değirmendere", "Ulaşlı", "Yazlık", "Hisareyn", "Halıdere", "Kavaklı", "Gölcük merkez sanayi", "Körfez kıyı şeridi"],
    nearby: ["izmit-palet", "derince-palet", "korfez-palet", "kocaeli-palet"],
    sections: [
      {
        h: "Gölcük’ün üretim yapısı",
        p: [
          "Gölcük’te sanayi iki ana damar üzerinde ilerler. İlki bölgedeki otomotiv üretim tesisi ve ona parça, aparat ve ambalaj sağlayan yan sanayi işletmeleri; ikincisi kıyıdaki denizcilik, tersane ve metal işleme atölyeleridir. Bu iki yapı ağır, istiflenen yüke dayanıklı palet gerektirir.",
          "Yan sanayi tarafında parçalar çoğu zaman standart kasa veya konteyner içinde paletle sevk edildiğinden, palet ölçüsü ve sağlamlığı müşteri talimatında yazılıdır. Bu talimatı teklif aşamasında paylaşmanız doğru ürünü seçmemizi kolaylaştırır.",
        ],
        table: {
          caption: "Gölcük’te kullanım ve palet",
          head: ["Alan", "Palet", "Dikkat"],
          rows: [
            ["Otomotiv yan sanayi", "80x120 / 100x120 sağlam palet", "Müşteri talimatındaki ölçü ve yük sınıfı"],
            ["Metal, levha, tersane", "Takozlu, kalın palet", "Ağır ve sivri yük, istif yüksekliği"],
            ["Plastik ve kauçuk parça", "Plastik veya temiz Euro palet", "Parçaya iz ve kir bulaşmaması"],
            ["Genel depo", "İkinci el Euro palet", "Bütçeyi koruyan seçenek"],
          ],
        },
        links: [["Otomotiv ve yan sanayi", "/sektorler/otomotiv-ve-yan-sanayi/"], ["100x120 palet", "/urunler/100x120-palet/"], ["Takozlu palet", "/urunler/takozlu-palet/"]],
      },
      {
        h: "Sevkiyat ve hurda palet",
        p: [
          "Sevkiyat Gebze Pelitli deposundan yapılır. Gölcük, Kocaeli içinde olduğundan İstanbul ilçelerine göre daha doğrudan bir güzergâhtır; yine de süre araç programına ve yol durumuna bağlıdır, net süre teklifte bildirilir. Genel çerçeve için Türkiye geneli sevkiyat sayfasına bakabilirsiniz.",
          "Fabrika ve atölyelerde biriken kırık, kullanılmaz paletleri yerinden alıyoruz. Düzenli çıkan hurdada periyodik alım da planlanabilir.",
        ],
        links: [["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Otomotiv yan sanayi için hangi palet kullanılır?", a: "Müşterinin talimatına bağlıdır; çoğunlukla 80x120 veya 100x120 sağlam palet istenir. Talimatınızı gönderirseniz ona uygun stok ayırırız." },
      { q: "Gölcük’e Gebze’den nasıl sevkiyat yapılıyor?", a: "Palet Gebze Pelitli deposundan araçla sevk edilir. Süre araç programına göre belirlenir, teklifte bildirilir." },
      { q: "Gölcük’ten hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adresle iletirseniz alım planlanır." },
      { q: "Düzenli aylık palet alımı yapılabilir mi?", a: "Evet. Düzenli ihtiyaçlar için periyodik sevkiyat planı yapılır; ayrıntılar teklifte netleşir." },
    ],
  },
  {
    slug: "karamursel-palet",
    name: "Karamürsel",
    wave: 3,
    title: "Karamürsel Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Karamürsel’deki tarım, gıda, tersane ve küçük sanayi işletmelerine palet: Euro, ikinci el, plastik. Gebze depodan sevkiyat ve hurda palet alımı.",
    h1: "Karamürsel Palet Satışı ve Hurda Palet Alımı",
    keyword: "karamürsel palet",
    art: "region",
    distance: "yaklaşık 75–90 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Karamürsel’in tarım, gıda ve kıyı işletmelerine Gebze’den planlı palet sevkiyatı.",
    answer:
      "Karamürsel, Kocaeli’nin Marmara kıyısındaki ilçelerinden biridir; tarım ve meyve üretimi, gıda işleme, kıyı yapıları ve küçük sanayi işletmeleri ilçenin ekonomisini oluşturur. MEPAL, Gebze deposundan Karamürsel’e Euro, ikinci el ve plastik palet sevk eder, hurda paletleri alır. Net süre teklifte bildirilir.",
    zones: ["Ereğli", "Akçat", "Kayacık", "Ertuğrulgazi", "Yeniköy", "Karamürsel merkez", "Kıyı yolu çevresi"],
    nearby: ["izmit-palet", "korfez-palet", "derince-palet", "kocaeli-palet"],
    sections: [
      {
        h: "Karamürsel’de üretim ve palet",
        p: [
          "Karamürsel Kocaeli’nin görece sakin, tarımla ve kıyıyla öne çıkan ilçelerindendir. Meyve ve sebze üretimi, bunları paketleyen ve işleyen tesisler, balıkçılık ve kıyıdaki küçük imalat atölyeleri palet ihtiyacı doğurur. Sanayi tesisleri Gebze veya Körfez kadar yoğun değildir; talep daha az adetli ve mevsimlik dalgalıdır.",
          "Hasat dönemlerinde kasa ve ambalaj sevkiyatı artar. Bu tür mevsimlik taleplerde sezon öncesi planlama, stok ve araç açısından rahatlık sağlar.",
        ],
        list: [
          "Meyve-sebze paketleme: yıkanabilir plastik palet ya da temiz Euro palet.",
          "Gıda işleme: hijyene uygun, kokusuz palet.",
          "Küçük imalat ve atölye: ikinci el Euro palet.",
          "Deniz ve kıyı ekipmanı: nemden etkilenmeyen plastik palet tercih edilebilir.",
        ],
        links: [["Plastik palet", "/urunler/plastik-palet/"], ["Gıda ve içecek", "/sektorler/gida-ve-icecek/"], ["Ahşap mı plastik mi", "/rehber/ahsap-palet-mi-plastik-palet-mi/"]],
      },
      {
        h: "Sevkiyat ve hurda palet",
        p: [
          "Sevkiyat Gebze Pelitli deposundan yapılır. Karamürsel için güzergâh, sahil yolu ve trafik yoğunluğuna göre değişebilir; mevsimsel yoğunlukta araç programı da etkilenir. Net süre teklifte bildirilir. Çerçeve için Türkiye geneli sevkiyat sayfasına bakabilirsiniz.",
          "Paketleme tesislerinde ve atölyelerde biriken kırık ve kullanılmaz paletleri yerinden alıyoruz. Adet ve adres bilgisi yeterlidir.",
        ],
        links: [["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Karamürsel’de küçük çiftlik veya paketleme tesisine palet gelir mi?", a: "Evet. Adres ve araç erişimi uygunsa sevkiyat planlanır. Adet ve tür bilgisini yazmanız yeterlidir." },
      { q: "Hasat sezonu öncesi stok ayırabilir miyim?", a: "Sezon öncesi talebinizi bildirirseniz stok ve araç programı buna göre planlanır; koşullar teklifte bildirilir." },
      { q: "Karamürsel’den hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adresle iletirseniz alım planlanır." },
      { q: "Meyve kasası için hangi palet uygun?", a: "Kasa boyutuna ve yıkama ihtiyacına göre plastik palet ya da düz yüzeyli Euro palet önerilir." },
    ],
  },
  {
    slug: "basiskele-palet",
    name: "Başiskele",
    wave: 3,
    title: "Başiskele Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Başiskele’deki sanayi, lojistik, depo ve gıda işletmelerine palet: Euro, 100x120, ikinci el, plastik. Gebze depodan sevkiyat ve hurda palet alımı.",
    h1: "Başiskele Palet Satışı ve Hurda Palet Alımı",
    keyword: "başiskele palet",
    art: "region",
    distance: "yaklaşık 55–70 km · süre trafiğe ve güzergâha bağlı",
    blurb: "Başiskele’nin sanayi, depo ve lojistik işletmelerine Gebze’den palet tedariki.",
    answer:
      "Başiskele, Kocaeli’de İzmit Körfezi’nin güney kıyısında, İzmit ve Gölcük arasında yer alan; hızla büyüyen, sanayi, depo, lojistik ve gıda tesislerini barındıran bir ilçedir. MEPAL, Gebze deposundan Başiskele’ye Euro, 100x120, ikinci el ve plastik palet sevk eder, hurda paletleri yerinden alır. Net süre teklifte bildirilir.",
    zones: ["Kullar", "Yuvacık", "Seymen", "Bahçecik", "Yeniköy", "Karşıyaka", "Sepetçi", "Körfez kıyı şeridi sanayi"],
    nearby: ["izmit-palet", "derince-palet", "kartepe-palet", "kocaeli-palet"],
    sections: [
      {
        h: "Başiskele’nin işletme yapısı",
        p: [
          "Başiskele, son yıllarda sanayi ve depo yatırımlarını çeken bir ilçedir. Kıyı şeridinde küçük ve orta ölçekli üretim tesisleri, iç kesimlerde ise lojistik depolar, gıda işleyenler ve inşaat malzemesi üreticileri çalışır. İzmit’e ve çevre yola yakınlığı, sevkiyatı kolaylaştırır.",
          "Orta ölçekli tesisler çoğunlukla düzenli ve tekrarlayan palet ihtiyacı duyar; bu da periyodik sipariş planlamasını uygun kılar.",
        ],
        table: {
          caption: "Başiskele’de işletme tipine göre palet",
          head: ["İşletme", "Önerilen palet", "Not"],
          rows: [
            ["Lojistik ve depo", "80x120 Euro palet", "Raf, forklift ve araç yüklemesine uygun"],
            ["Gıda üretimi", "Plastik veya temiz Euro palet", "Hijyen ve koku kontrolü"],
            ["İnşaat ve yapı malzemesi", "100x120 veya takozlu palet", "Ağır yük ve istif"],
            ["Genel üretim", "İkinci el Euro palet", "Bütçeyi koruyan, tekrar kullanılabilir"],
          ],
        },
        links: [["E-ticaret ve depo", "/sektorler/e-ticaret-ve-depo/"], ["Toptan palet", "/hizmetler/toptan-palet/"], ["Euro palet", "/urunler/80x120-euro-palet/"]],
      },
      {
        h: "Sevkiyat ve hurda palet",
        p: [
          "Sevkiyat Gebze Pelitli deposundan yapılır. Başiskele Kocaeli içinde olduğu için güzergâh İstanbul ilçelerine göre daha sade; süre yine de araç programı ve yol durumuna bağlıdır, net süre teklifte bildirilir. Çerçeve için Türkiye geneli sevkiyat sayfasına bakabilirsiniz.",
          "Depo ve tesislerde biriken kırık paletleri yerinden alıyoruz; düzenli hurda çıkaran işletmelerle periyodik alım planlanabilir.",
        ],
        links: [["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Başiskele’de lojistik depomuz için toplu palet alabilir miyiz?", a: "Evet. Toplu alımlar tek sevkiyatta planlanır; adet ve ölçü bilgisiyle teklif alın." },
      { q: "Düzenli aylık palet ihtiyacı için anlaşma yapılır mı?", a: "Düzenli ihtiyaçlar için periyodik sevkiyat planlanabilir. Koşullar teklifte netleşir." },
      { q: "Başiskele’den hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adresle iletirseniz alım planlanır." },
      { q: "Gıda tesisi için hangi palet?", a: "Hijyen önceliğiyse plastik palet, bütçe ön plandaysa temiz ve sınıflandırılmış Euro palet önerilir." },
    ],
  },
  {
    slug: "aydinli-palet",
    name: "Aydınlı",
    wave: 3,
    title: "Aydınlı (Tuzla) Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Tuzla Aydınlı’daki kimya OSB, tersane ve metal işletmelerine palet: 100x120, plastik, takozlu ve özel ölçülü. Gebze depodan sevkiyat, hurda palet alımı.",
    h1: "Aydınlı (Tuzla) Palet Satışı ve Hurda Palet Alımı",
    keyword: "aydınlı palet",
    art: "region",
    distance: "yaklaşık 20–30 km · Tuzla’nın Gebze’ye yakın kesimi",
    blurb: "Tuzla Aydınlı’nın kimya, tersane ve metal işletmelerine Gebze’den kısa mesafe palet.",
    answer:
      "Aydınlı, Tuzla’nın Gebze sınırına yakın, kimya sanayicileri OSB’si ve tersane bölgesiyle birlikte anılan sanayi mahallesidir. MEPAL, Gebze Pelitli deposundan Aydınlı’daki işletmelere 100x120, plastik, takozlu ve özel ölçülü palet sevk eder, hurda paletleri yerinden alır. Mesafe kısadır; net süre teklifte bildirilir.",
    zones: ["Tuzla Kimya Sanayicileri OSB", "Tuzla Tersaneler Bölgesi", "Aydınlı Mahallesi sanayi", "Aydıntepe çevresi", "Sahil yolu çevresi", "Orhanlı yönü bağlantısı"],
    nearby: ["tuzla-palet", "pendik-palet", "sekerpinar-palet", "cayirova-palet"],
    sections: [
      {
        h: "Aydınlı’daki sanayi ve palet ihtiyacı",
        p: [
          "Aydınlı, Tuzla içinde en çok kimya ve gemi yapımıyla anılan bölgedir. Kimya OSB’sindeki boya, reçine, yağ ve yapıştırıcı üreticileri bidon, IBC ve çuval gibi yükleri paletle taşır; tersane bölgesinde ise levha, boru, kaynak malzemesi ve ekipman ağır palet gerektirir.",
          "Bu iki grup farklı palet ister: kimyada sızıntı, ıslanma ve yıkama ihtiyacı plastik veya kontrol edilmiş ahşap palete işaret eder; tersanede ise yük ağırlığı belirleyicidir.",
        ],
        table: {
          caption: "Aydınlı’da işletme tipine göre palet",
          head: ["İşletme", "Palet", "Dikkat"],
          rows: [
            ["Kimya, boya, yağ", "100x120 ve plastik palet", "Bidon-IBC ağırlığı, sızıntı ve yıkama"],
            ["Tersane, levha, boru", "Takozlu, kalın veya özel ölçülü palet", "Ağır ve uzun yük"],
            ["Metal atölye", "İkinci el Euro palet", "Parça iç sevkiyatı"],
            ["Ambalaj ve etiket", "80x120 Euro palet", "Raf uyumlu standart ölçü"],
          ],
        },
        links: [["Kimya ve plastik", "/sektorler/kimya-ve-plastik/"], ["100x120 palet", "/urunler/100x120-palet/"], ["Palet kaç kg taşır", "/rehber/palet-kac-kg-tasir/"]],
      },
      {
        h: "Sevkiyat ve hurda palet",
        p: [
          "Aydınlı, Gebze deposuna Tuzla içindeki en yakın sanayi noktalarından biridir; bu yüzden acil ve küçük partiler de değerlendirilebilir. Net süre ve koşullar araç programına göre teklifte bildirilir. Genel çerçeve için Türkiye geneli sevkiyat sayfasına bakabilirsiniz.",
          "Kimya ve tersane işletmelerinde biriken kırık paletleri yerinden alıyoruz. Yağ veya kimyasal bulaşmış paletler varsa adres bilgisiyle birlikte belirtiniz.",
        ],
        links: [["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Aydınlı’daki kimya firmamız için hangi palet?", a: "Bidon ve IBC yükünde genellikle 100x120 ya da plastik palet tercih edilir. Ambalaj tipini ve ağırlığı yazarsanız önerelim." },
      { q: "Tersane için ağır yük taşıyan palet var mı?", a: "Takozlu, kalın veya özel ölçülü palet üretimi mümkündür. Yük ağırlığı ve ölçüsünü bildirin." },
      { q: "Yağ veya kimyasal bulaşmış paletleri alıyor musunuz?", a: "Durumu önceden bildirirseniz değerlendiririz. Bulaşma derecesine göre alım koşulu teklifte belirlenir." },
      { q: "Küçük partiyle sipariş verebilir miyim?", a: "Aydınlı depoya görece yakın olduğundan küçük partiler de planlanabilir; koşullar teklifte bildirilir." },
    ],
  },
  {
    slug: "orhanli-palet",
    name: "Orhanlı",
    wave: 3,
    title: "Orhanlı (Tuzla) Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Tuzla Orhanlı’daki Deri OSB, metal ve imalat işletmelerine palet: Euro, plastik, ikinci el, özel ölçü. Gebze depodan sevkiyat, hurda palet alımı.",
    h1: "Orhanlı (Tuzla) Palet Satışı ve Hurda Palet Alımı",
    keyword: "orhanlı palet",
    art: "region",
    distance: "yaklaşık 15–25 km · Gebze’ye komşu Tuzla kesimi",
    blurb: "Tuzla Orhanlı’nın deri, metal ve imalat işletmelerine Gebze’den kısa mesafe palet.",
    answer:
      "Orhanlı, Tuzla’nın Gebze’ye komşu sanayi mahallelerinden biridir; Deri OSB ve çevresindeki metal, plastik ve imalat tesisleri burada yoğunlaşır. MEPAL, Gebze Pelitli deposundan Orhanlı’ya Euro, plastik, ikinci el ve özel ölçülü palet sevk eder, hurda paletleri yerinden alır. Net süre teklifte bildirilir.",
    zones: ["Tuzla Deri OSB", "Orhanlı Mahallesi sanayi", "Orhanlı çevre yolu bağlantısı", "Şekerpınar sınırı", "Orta Mahalle yönü"],
    nearby: ["tuzla-palet", "sekerpinar-palet", "cayirova-palet", "dilovasi-palet"],
    sections: [
      {
        h: "Orhanlı’da palet kullanan işletmeler",
        p: [
          "Orhanlı, Gebze ve Şekerpınar’a komşu konumuyla Tuzla’nın bu yöndeki giriş kapısı gibidir. Deri OSB’de deri işleme, ayakkabı, çanta ve tekstil üreticileri; çevre alanlarda metal işleme, plastik ve ambalaj atölyeleri çalışır.",
          "Deri sektöründe palet nem ve kokuya karşı korumalı olmalıdır; ıslak ya da küflü paletin kuru deri veya kumaş ürüne zarar verme riski vardır. Bu nedenle stoktan kuru ve temiz palet ayırmak önemlidir.",
        ],
        list: [
          "Deri, ayakkabı ve çanta: kuru, temiz ve düz yüzeyli Euro palet; gerekirse plastik palet.",
          "Metal ve makine parçası: sağlam, takozlu ya da 100x120 palet.",
          "Plastik ve ambalaj: hafif yük için ikinci el Euro palet.",
          "Standart dışı mamul: özel ölçülü palet.",
        ],
        links: [["Tuzla sayfası", "/bolge/tuzla-palet/"], ["Özel ölçülü palet", "/urunler/ozel-olcu-palet/"], ["Palet seçici", "/araclar/palet-secici/"]],
      },
      {
        h: "Sevkiyat ve hurda palet",
        p: [
          "Orhanlı, Gebze deposuna Tuzla içinde en yakın sanayi noktalarından biridir; küçük ve düzenli partilere de uygundur. Net süre ve koşullar araç programına göre teklifte bildirilir. Genel çerçeve için Türkiye geneli sevkiyat sayfasına bakabilirsiniz.",
          "Deri ve imalat işletmelerinde biriken kırık, kullanılmaz paletleri yerinden alıyoruz. Adet, tür ve adres bilgisini yazmanız yeterlidir.",
        ],
        links: [["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Deri ürünleri için hangi palet kullanılmalı?", a: "Kuru, temiz ve düz yüzeyli palet gerekir. Nemli ortamda plastik palet daha güvenlidir." },
      { q: "Orhanlı’ya düzenli palet sevkiyatı yapılır mı?", a: "Evet. Düzenli ihtiyaç için periyodik plan yapılabilir; ayrıntılar teklifte netleşir." },
      { q: "Orhanlı’dan hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adresle iletirseniz alım planlanır." },
      { q: "Standart dışı ölçüde palet yapılır mı?", a: "Evet. Ürün ölçüsü ve yük ağırlığıyla özel ölçülü palet üretimi teklif edilir." },
    ],
  },
  {
    slug: "icmeler-palet",
    name: "İçmeler",
    wave: 3,
    title: "İçmeler (Tuzla) Palet Satışı ve Hurda Alımı | MEPAL",
    description: "Tuzla İçmeler’deki tersane, metal, lojistik ve depo işletmelerine palet: Euro, takozlu, plastik, ikinci el. Gebze depodan sevkiyat, hurda palet alımı.",
    h1: "İçmeler (Tuzla) Palet Satışı ve Hurda Palet Alımı",
    keyword: "içmeler palet",
    art: "region",
    distance: "yaklaşık 20–30 km · Tuzla sahil kesimi",
    blurb: "Tuzla İçmeler’in tersane, metal ve depo işletmelerine Gebze’den kısa mesafe palet.",
    answer:
      "İçmeler, Tuzla’nın sahil kesiminde tersaneler bölgesine ve Marmaray hattına yakın bir mahalledir; denizcilik, metal işleme, küçük imalat ve depo işletmeleri burada çalışır. MEPAL, Gebze Pelitli deposundan İçmeler’e Euro, takozlu, plastik ve ikinci el palet sevk eder, hurda paletleri yerinden alır. Net süre teklifte bildirilir.",
    zones: ["İçmeler Mahallesi", "Tuzla Tersaneler Bölgesi", "Sahil yolu çevresi", "Postane Mahallesi sınırı", "İçmeler sanayi ve depo alanları"],
    nearby: ["tuzla-palet", "pendik-palet", "kartal-palet", "sekerpinar-palet"],
    sections: [
      {
        h: "İçmeler’de palet kullanım alanları",
        p: [
          "İçmeler’de palet ihtiyacı büyük ölçüde denizcilik ve metal işlemeden gelir: tersanelere malzeme sağlayan boru, levha, kaynak ve boya tedarikçileri, makine bakım atölyeleri ve ekipman depoları. Bunlara ek olarak sahil yolu çevresinde küçük lojistik ve depo işletmeleri bulunur.",
          "Ağır ve bazen uzun yükler, palet seçiminde yük kapasitesini ve takoz yapısını öne çıkarır. Denize yakın nemli ortam da kuru stoktan seçilmiş veya plastik palet tercihini destekler.",
        ],
        table: {
          caption: "İçmeler’de kullanım ve palet",
          head: ["Alan", "Palet", "Not"],
          rows: [
            ["Tersane malzeme tedariki", "Takozlu, kalın palet", "Ağır boru ve levha yükü"],
            ["Boya, kaynak, sarf malzeme", "100x120 veya Euro palet", "Kutu ve bidon istifi"],
            ["Küçük lojistik depo", "80x120 Euro palet", "Raf ve araç uyumu"],
            ["Nemli kıyı ortamı", "Plastik palet", "Neme ve çürümeye dayanıklı"],
          ],
        },
        links: [["Takozlu palet", "/urunler/takozlu-palet/"], ["Plastik palet", "/urunler/plastik-palet/"], ["Ahşap mı plastik mi", "/rehber/ahsap-palet-mi-plastik-palet-mi/"]],
      },
      {
        h: "Sevkiyat ve hurda palet",
        p: [
          "İçmeler, Gebze deposuna Tuzla’nın uzak ucundaki sahil kesimlerinden daha yakındır; küçük ve tekrarlayan partiler de planlanabilir. Net süre ve koşullar araç programına ve sahil yolu trafiğine göre teklifte bildirilir. Genel çerçeve için Türkiye geneli sevkiyat sayfasına bakabilirsiniz.",
          "Atölye ve depolarda biriken kırık, kullanılmaz paletleri yerinden alıyoruz. Adet, tür ve adres bilgisini yazmanız yeterlidir.",
        ],
        links: [["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Tersane malzemeleri için hangi palet dayanır?", a: "Ağır ve uzun yük için takozlu, kalın ya da özel ölçülü palet gerekir. Yük ağırlığını ve ölçüsünü bildirin." },
      { q: "Kıyıdaki nemli depo için plastik palet mantıklı mı?", a: "Evet. Neme ve çürümeye dayanıklı olduğu için nemli ortamda uzun ömürlü seçimdir." },
      { q: "İçmeler’den hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adresle iletirseniz alım planlanır." },
      { q: "Küçük adetli ve tekrarlayan sipariş olur mu?", a: "Evet. Tekrarlayan ihtiyaçlar için periyodik sevkiyat planlanabilir; koşullar teklifte bildirilir." },
    ],
  },
];

export const regionBySlug = (slug: string) => regions.find((r) => r.slug === slug);
