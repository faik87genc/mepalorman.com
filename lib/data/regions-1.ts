import { L, bolge, type RegionContent } from "./regions-build";

// Parti 1: Gebze çekirdeği (depo çevresi) ve komşu sanayi bölgeleri.
export const regionContent1: Record<string, RegionContent> = {
  "gebze-palet": {
    distance: "Depomuz Gebze Pelitli’de",
    blurb: "Depomuz Pelitli’de: Gebze’nin karma sanayisine Euro, ikinci el, plastik ve ihracat paleti; fabrikadaki hurda paletin alımı.",
    answer:
      "MEPAL’in stok ve yükleme deposu Gebze Pelitli Mahallesi’ndedir. Gebze’deki fabrika ve depolara Euro palet, ikinci el palet, plastik palet ve ihracat paleti sağlıyor, tesislerde biriken kırık ve fazla paletleri yerinden alıyoruz. Teslim zamanı stok ve araç programına göre teklifte netleşir.",
    zones: ["Pelitli", "Balçık", "Gebze Organize Sanayi Bölgesi (GOSB)", "Gebze Plastikçiler OSB", "Mollafenari", "Hacıhalil", "Osmangazi", "Beylikbağı"],
    nearby: ["balcik-palet", "gebze-osb-palet", "plastikciler-osb-palet", "dilovasi-palet", "cayirova-palet", "darica-palet", "imes-palet"],
    sections: [
      {
        h: "Depo adresi ve çalışma düzeni",
        p: [
          "Depo ve sevkiyat noktamız Pelitli Mah., Maden Sk. No:34, 41400 Gebze/Kocaeli adresindedir. Bu aynı zamanda Gebze’deki müşterilerimizin palet teslim aldığı ve kendi araçlarıyla yükleme yaptığı yerdir. Çalışma saatleri Pazartesi–Cumartesi 08:30–18:00’dır.",
          "Depoya gelmeden önce telefon ya da WhatsApp ile ürün ve adedi bildirmeniz yeterli: aradığınız palet türünün o gün hazır olup olmadığını söyler, gereksiz yolculuğu önleriz. Fatura için unvan ve vergi bilgilerinizi yanınızda getirmeniz işlemi kısaltır.",
        ],
        links: [L.iletisim, L.teklif],
      },
      {
        h: "Gebze sanayisi ve palet ihtiyacı",
        p: [
          "Gebze, Türkiye’nin en yoğun sanayi bölgelerinden biridir ve tek bir sektöre yaslanmaz. Otomotiv yan sanayi, kimya ve boya, plastik enjeksiyon, metal işleme, gıda, elektrik-elektronik ve lojistik firmaları aynı ilçenin içinde çalışır. Bu çeşitlilik palet talebine de yansır; bir fabrika raf sistemi için standart ölçü ararken komşusu ağır parça için özel ölçü isteyebilir.",
        ],
        table: {
          caption: "Gebze’de işletme tipine göre tipik palet tercihi",
          head: ["İşletme tipi", "Sık tercih edilen palet", "Seçim gerekçesi"],
          rows: [
            ["Otomotiv yan sanayi", "İkinci el Euro palet, özel ölçülü palet", "Parça kasaları ve tekrar kullanım döngüsü"],
            ["Kimya ve boya", "100x120 palet, plastik palet", "Bidon ve IBC taban genişliği, silinebilir yüzey"],
            ["Gıda ve ambalaj", "Sıfır Euro palet, hijyenik plastik palet", "Temizlik ve denetim gereksinimleri"],
            ["Metal ve makine", "Takozlu palet, özel ölçü", "Ağır ve uzun parçalar"],
            ["İhracat yapan tesis", "ISPM-15 damgalı palet", "Gümrükte ve limanda bitki sağlığı kuralları"],
          ],
        },
        links: [L.euro, L.ikinci, L.p100, L.ihracat, L.fiyat],
      },
      {
        h: "Sipariş ve sevkiyat nasıl işler",
        p: [
          "Gebze’de iki yol vardır: depodan kendi aracınızla yüklemek ya da adresinize sevkiyat istemek. Adrese sevkiyatta boşaltmanın nasıl yapılacağı en önemli ayrıntıdır; forklift, rampa ya da el ile indirme seçeneklerinden hangisinin olduğunu önceden bilirsek araç ve personel buna göre planlanır.",
        ],
        steps: [
          "Palet türü, ölçü, adet ve teslim şeklini (depodan alım ya da adrese) bildirin.",
          "Stok ve araç programına göre hazırlanan teklifi inceleyin.",
          "Onaydan sonra paletler hazırlanır; yükleme ya da sevkiyat teklifte yazılı koşullarla yapılır.",
          "Teslimde sayım yapılır, irsaliye ve fatura düzenlenir.",
        ],
        links: [L.surec, L.toptan, L.nakliye],
      },
      {
        h: "Gebze’de palet seçerken dikkat edilecekler",
        list: [
          "Raf kullanıyorsanız ölçü toleransına bakın; aynı ölçüde olduğu söylenen paletler arasında tahta kalınlığı ve takoz yapısı farklı olabilir.",
          "İkinci el palette sınıflandırma önemlidir; kırık, çivisi çıkık ya da kokulu paletlerin ayıklanmış olması gerekir.",
          "İhracat sevkiyatı olacaksa damga ve belgelendirme alım aşamasında istenmelidir, sonradan değil.",
          "Aynı ürünü düzenli alıyorsanız ilk partide numune istemek, sonraki siparişlerde kalite beklentisini sabitler.",
        ],
        links: [L.rSecim, L.rSinif, L.rIspm],
      },
      {
        h: "Fabrikada biriken paletler",
        p: [
          "Gebze’deki tesislerde kırık, standart dışı ya da fazla stok olarak bekleyen paletler depolama alanını doldurur. Kullanılabilir olanlar tamire ya da ikinci el stoğa ayrılır, kullanılamayanlar ahşap atık olarak geri dönüşüme gider. Değerlendirme paletin türüne, durumuna ve miktarına göre yapılır; metinde rakam yer almaz, fotoğraf ve adet bilgisiyle ön değerlendirme yapılır.",
        ],
        links: [L.hurda, L.yerinde, L.degerleme, L.rHurda],
      },
      {
        h: "Gebze’de sık yapılan hatalar",
        p: [
          "Gebze’deki tedarikçilerle konuşurken en sık görülen sorun, ölçü ve sınıf bilgisinin eksik verilmesidir. “Euro palet” demek yetmez; yeni mi, ikinci el mi, damgalı mı, hangi kalınlıkta olduğu belirtilmelidir. Aksi halde teklif karşılaştırması elma ile armut karşılaştırması olur.",
          "İkinci hata, palet ihtiyacını sevkiyat gününe bırakmaktır. Fabrikada yük hazır olduğunda palet yoksa üretim değil lojistik durur. Düzenli sevkiyat yapan tesislerin birkaç haftalık palet ihtiyacını önceden planlaması hem stok hem teslimat açısından rahatlık sağlar.",
        ],
        links: [L.rTeklif, L.rSatinAlma, L.rMaliyet],
      },
    ],
    faq: [
      { q: "Depoya gelip palet seçebilir miyim?", a: "Evet. Pelitli’deki deponuzu ziyaret edip ürünü yerinde görebilirsiniz. Gelmeden önce ürün ve adedi bildirirseniz aradığınız palet hazır tutulur." },
      { q: "Gebze içinde adrese teslimat yapıyor musunuz?", a: "Yapıyoruz. Boşaltma yöntemi (forklift, rampa vb.) ve adres bilgisini iletmeniz yeterli; teslim zamanı teklifte netleşir." },
      { q: "Fabrikamızdaki kırık paletleri alıyor musunuz?", a: "Evet. Palet türü, durumu ve miktarına göre fabrikanızdan yükleme yapılır. Fotoğraf ve adet göndermeniz ön değerlendirme için yeterlidir." },
      { q: "Küçük adetle de çalışıyor musunuz?", a: "Evet. Birkaç paletlik ihtiyaçlar için depodan alım mümkündür. Büyük hacimler için ise teklifle planlama yapılır." },
      { q: "Fiyat bilgisini nereden alabilirim?", a: "Fiyat stok, ölçü ve adede göre değiştiği için bu sayfada yazmıyoruz. WhatsApp ya da teklif formundan talebinizi iletmeniz yeterlidir." },
    ],
  },

  "balcik-palet": {
    description: "Gebze Balçık’taki fabrika ve depolara palet: Euro, ikinci el, plastik ve HT damgalı palet. Pelitli depodan sevkiyat, hurda palet alımı, teklif için yazın.",
    distance: "Pelitli deposuna komşu sanayi",
    blurb: "Pelitli deposuna komşu Balçık sanayisine Euro, ikinci el, plastik ve ihracat paleti; tesisten hurda palet alımı.",
    answer:
      "Balçık, Gebze’de Pelitli’ye komşu bir sanayi mahallesidir ve depomuza yakın konumdaki işletmeler çoğunlukla ihtiyaç anında tek telefonla palet temin eder. Euro palet, ikinci el palet, plastik palet ve HT damgalı palet sağlıyor, fabrikalarda biriken kırık paletleri yerinden alıyoruz.",
    zones: ["Balçık Mahallesi", "Pelitli", "Mollafenari", "Hacıhalil", "Gebze Plastikçiler OSB çevresi"],
    nearby: ["gebze-palet", "plastikciler-osb-palet", "gebze-osb-palet", "dilovasi-palet"],
    sections: [
      {
        h: "Balçık’ın sanayi yapısı",
        p: [
          "Balçık, Gebze’nin batısında, Pelitli ve Plastikçiler OSB çevresiyle iç içe gelişen bir sanayi mahallesidir. Burada büyük kampüs fabrikaların yanında kendi sitesinde çalışan orta ölçekli üreticiler, boru-profil ve plastik işleyen atölyeler ile depo kiralayan dağıtım firmaları birlikte yer alır.",
          "Komşu işletmelerin palet davranışı birbirine benzer: yoğun sevkiyat dönemlerinde palet tükenir, düşük dönemlerde de köşede kırık palet birikir. İki yöndeki ihtiyaç da depomuzun yakınlığı sayesinde kısa yazışmayla yönetilebilir.",
        ],
        links: [bolge("plastikciler-osb-palet", "Plastikçiler OSB palet"), bolge("gebze-palet", "Gebze palet")],
      },
      {
        h: "Balçık işletmelerinde palet seçimi",
        list: [
          "Plastik ve kauçuk ürün üreten atölyeler: torba, çuval ve kutu yüklerinde Euro ölçülü ikinci el palet uygun bir başlangıçtır.",
          "Boru, profil ve levha işleyenler: uzun yük için takozlu ya da özel ölçülü palet gerekir; tahta kalınlığı yük ağırlığına göre seçilmelidir.",
          "Gıda ambalajı ve etiket gibi temiz ortam isteyen işler: sıfır ya da hijyenik plastik palet, kıymık ve koku riskini ortadan kaldırır.",
          "Dış pazara sevk eden tesisler: ısıl işlem damgalı ihracat paleti, sonradan değil siparişle birlikte istenmelidir.",
        ],
        links: [L.takozlu, L.ozel, L.hijyenik, L.ihracat],
      },
      {
        h: "Kısa mesafenin pratik faydası",
        p: [
          "Balçık’ta çalışıyorsanız yükleme için depoya kendi aracınızla uğramak da, adresinize sevkiyat istemek de mümkündür. Küçük partilerde araç çıkarmak yerine depoda yüklemeyi tercih eden işletmeler, ürünü kendi gözleriyle görme avantajını da kullanır. Adrese teslimde ise forklift durumu, kapı ve rampa yüksekliği gibi bilgileri önceden aldığımızda boşaltma sorunsuz geçer.",
          "Sipariş akışı tüm bölgelerle aynıdır: talep, teklif, onay, teslim. Ayrıntıları süreç sayfasında bulabilirsiniz.",
        ],
        links: [L.surec, L.teklif],
      },
      {
        h: "Birikmiş palet için ikinci yol",
        p: [
          "Balçık’taki işletmelerde palet atıl kaldığında genellikle iki sorun yaşanır: yer kaplar ve yangın yükünü artırır. Elinizdeki paletlerin bir kısmı hâlâ kullanılabilir durumdaysa tamir edilip yeniden dolaşıma girebilir. Hangi paletin hangi yolu izleyeceği, yerinde yapılan sınıflandırmayla belirlenir.",
        ],
        links: [L.hurda, L.tamir, L.rKirik],
      },
      {
        h: "Balçık’ta teklif isterken verilecek bilgiler",
        p: [
          "Teklifin ilk turda netleşmesi için dört bilgi yeterlidir: palet türü ve ölçüsü, yaklaşık adet, teslim biçimi (depodan alım ya da adrese) ve yükün cinsi. Yükün cinsi, taban ve tahta kalınlığı seçiminde belirleyicidir; çünkü iki ton torba ile iki ton metal aynı palette aynı davranmaz.",
          "Fotoğraf göndermek, özellikle özel ölçü ve yarı kırık palet değerlendirmelerinde konuşmayı kısaltır. WhatsApp’tan tek bir mesajla başlayıp ayrıntıları yazışmada tamamlayabilirsiniz.",
        ],
        links: [L.rTeklif, L.secici],
      },
    ],
    faq: [
      { q: "Balçık’tan depoya kendi aracımla gelip yükleyebilir miyim?", a: "Evet. Depo yükleme noktası Pelitli’dedir. Gelmeden önce ürün ve adedi bildirirseniz hazır tutulur." },
      { q: "Plastik işleyen bir atölye için hangi palet uygun?", a: "Yükün tipine bağlıdır. Torba ve koli için Euro ölçülü ikinci el palet, hijyen aranan yerlerde plastik palet daha uygundur." },
      { q: "Acil palet ihtiyacında ne yapmalıyım?", a: "WhatsApp’tan ürün, ölçü ve adedi yazın. Stok ve araç durumuna göre en uygun teslim şekli o yazışmada netleşir." },
      { q: "Tesisimizdeki kırık paletleri alıyor musunuz?", a: "Evet. Fotoğraf ve yaklaşık adet gönderilir, ön değerlendirme sonrası yükleme planlanır." },
    ],
  },

  "gebze-osb-palet": {
    description: "Gebze Organize Sanayi Bölgesi fabrikalarına palet tedariği: Euro, ikinci el, plastik, HT damgalı palet; hurda alımı. Pelitli depodan toplu sevkiyat.",
    distance: "Gebze OSB için toplu sevkiyat",
    blurb: "Gebze OSB fabrikalarına düzenli ve toplu palet tedariki; kapı giriş kuralları dikkate alınarak sevkiyat planı.",
    answer:
      "Gebze Organize Sanayi Bölgesi (GOSB), Türkiye’nin büyük sanayi parsellerinin bulunduğu bir OSB’dir. Pelitli deposundan GOSB fabrikalarına Euro palet, ikinci el palet, plastik palet ve HT damgalı ihracat paleti sağlıyor, üretim hattı çevresinde biriken hurda paletleri yerinden alıyoruz.",
    zones: ["Gebze OSB (GOSB)", "Mollafenari", "Pelitli", "Hacıhalil"],
    nearby: ["gebze-palet", "cayirova-palet", "dilovasi-palet", "darica-palet"],
    sections: [
      {
        h: "OSB içinde palet tedariğinin farkı",
        p: [
          "Organize sanayi bölgelerinde fabrikaların girişi kontrollüdür. Araç plakası, sürücü bilgisi ve çoğu zaman teslim edilecek malın cinsi güvenlik birimine önceden bildirilmelidir. Bu yüzden OSB içine yapılan palet teslimatında, siparişle birlikte sürücü kimliği, araç plakası ve şantiye/fabrika yetkilisi bilgisi istenir.",
          "Bir diğer fark ölçektir. GOSB’deki fabrikaların depolama alanı geniştir, palet tüketimi de aylık düzende bir plana oturur. Tek seferlik büyük parti yerine düzenli aralıklı sevkiyat bu yüzden daha çok tercih edilir.",
        ],
        links: [L.toptan, L.nakliye],
      },
      {
        h: "OSB’deki üretim tiplerine göre palet",
        table: {
          caption: "Gebze OSB üretim tipine göre palet seçimi",
          head: ["Üretim tipi", "Palet", "Dikkat edilecek nokta"],
          rows: [
            ["Beyaz eşya ve elektronik", "Büyük ebatlı özel ölçü, CP", "Ürün ağırlığı ve istif yüksekliği"],
            ["Otomotiv parça", "İkinci el Euro palet, özel ölçü", "Kasa ile palet taban uyumu"],
            ["Kimya ve boya", "100x120 ve plastik palet", "Bidon ve IBC yük dağılımı"],
            ["Gıda ve içecek", "Sıfır Euro, hijyenik plastik", "Temizlik ve denetim"],
            ["Makine ve metal", "Takozlu, kalın tahtalı palet", "Statik ve dinamik yük"],
          ],
        },
        links: [L.cp, L.takozlu, L.hijyenik, L.rKapasite],
      },
      {
        h: "Düzenli tedarik planı nasıl kurulur",
        p: [
          "Aylık palet ihtiyacını tahmin edebilen fabrikalar için en rahat yöntem; ürün ve adet bazında bir çerçeve belirleyip, her sevkiyatı küçük bir yazışma ile onaylamaktır. Böylece depoda sürekli büyük stok tutmak zorunda kalmazsınız ve ihtiyaç doğduğunda tekrar teklif döngüsüne girmezsiniz.",
        ],
        steps: [
          "Kullandığınız palet türü, ölçüsü ve yaklaşık dönemlik adedi bildirin.",
          "Teklifte stok, sevkiyat sıklığı ve teslim koşulları yazılı hale getirilir.",
          "Her sevkiyat öncesi araç ve sürücü bilgisi paylaşılır, kapı girişi için hazırlık yapılır.",
          "Teslimde sayım ve irsaliye ile kayıt altına alınır.",
        ],
        links: [L.surec, L.rTeklif],
      },
      {
        h: "Üretim sahası ve atık palet",
        p: [
          "Büyük tesislerde kırık ve standart dışı paletler çoğunlukla bir köşede biriktirilir. Yangın yönetmeliği açısından bu birikimlerin düzenli aralıklarla tesisten çıkarılması gerekir. Biz kırık paletlerden kullanılabilir olanları ayırıyor, kalanını ahşap atık olarak değerlendirmeye yönlendiriyoruz. Tesisinize gelecek araç için yine OSB giriş kurallarına uygun bilgiler istenir.",
        ],
        links: [L.hurda, L.yerinde, L.rGeriDonusum],
      },
      {
        h: "OSB fabrikalarında kalite beklentisi",
        p: [
          "Büyük OSB fabrikalarında satın alma ve kalite birimleri palet için de ölçüt belirler: tahta kalınlığı, nem düzeyi, çivi tipi ve kırık oranı gibi. Bu ölçütlerin bir şartnameye bağlanması hem sipariş sürecini kolaylaştırır hem de teslimat sırasında tartışmayı önler.",
          "Elinizde yazılı bir palet şartnamesi varsa teklif aşamasında paylaşın. Yoksa kalite sınıfları rehberimizi referans alıp en azından kabul edilebilir sınıfı ve kırık oranı sınırını yazılı hale getirebilirsiniz.",
        ],
        links: [L.rSinif, L.rOlcu, L.rIstif],
      },
    ],
    faq: [
      { q: "OSB içine teslimat için hangi bilgiler gerekir?", a: "Araç plakası, sürücü adı ve çoğu zaman tesis yetkilisi iletişimi gerekir. Bunları siparişle birlikte paylaşırsanız giriş sorunsuz olur." },
      { q: "Aylık düzenli sevkiyat planı yapılabilir mi?", a: "Evet. Ürün, adet ve sıklık çerçevesi teklifte belirtilir; her sevkiyat bu çerçeveye göre onaylanır." },
      { q: "İhracat için HT damgalı palet tedarik ediyor musunuz?", a: "Evet. Isıl işlem damgalı ihracat paleti temin ediyoruz. Sipariş aşamasında bunu özellikle belirtmeniz gerekir." },
      { q: "OSB’deki fabrikamızdan kırık palet alabilir misiniz?", a: "Alabiliriz. Palet türü ve miktarı bilgisiyle ön değerlendirme yapılır, yükleme tesis kurallarına göre planlanır." },
      { q: "Teslimat öncesi numune görebilir miyim?", a: "Evet. Büyük partiler için depoda numune inceleyebilir ya da ilk sevkiyatta kaliteyi kontrol edebilirsiniz." },
    ],
  },

  "plastikciler-osb-palet": {
    description: "Gebze Plastikçiler OSB tesislerine palet: Euro, ikinci el, plastik ve HT damgalı palet. Pelitli depodan sevkiyat, hurda palet alımı, WhatsApp’tan teklif.",
    distance: "Plastik sanayisine yönelik sevkiyat",
    blurb: "Plastik sanayicilerinin OSB’sinde torba, granül ve mamul sevkiyatına uygun palet; hurda palet alımı.",
    answer:
      "Gebze Plastikçiler OSB, plastik enjeksiyon, ekstrüzyon ve ambalaj üreticilerinin bir arada çalıştığı bir bölgedir. Hammadde torbaları, mamul koliler ve kalıp-makine parçaları için Euro, ikinci el ve plastik palet sağlıyor, üretim hatlarından çıkan kırık paletleri yerinden alıyoruz.",
    zones: ["Gebze Plastikçiler OSB (GEPOSB)", "Pelitli", "Balçık", "Mollafenari"],
    nearby: ["gebze-palet", "balcik-palet", "gebze-osb-palet", "dilovasi-palet"],
    sections: [
      {
        h: "Plastik sanayisinin palet alışkanlığı",
        p: [
          "Plastik üretiminde malzeme akışı iki yönlüdür: hammadde torba ya da big-bag olarak gelir, mamul koli ve çuvalla çıkar. Hammadde tarafında düz, sağlam ve yıkanmış yüzeyli palet, torbaların yırtılmasını önler. Mamul tarafında ise müşterinin istediği ölçüye uygun, istiflenebilir palet gerekir.",
          "Bu tür tesislerde palet çoğu zaman tek yönlü gönderilir ve geri dönmez. Bu nedenle bölgedeki üreticiler, tek sefer kullanılacak ekonomik palet ile tekrar tekrar dolaşacak dayanıklı palet arasında ayrım yapar.",
        ],
        links: [L.gKimya, L.rAhsapPlastik],
      },
      {
        h: "Hangi hat için hangi palet",
        list: [
          "Granül ve reçine torbaları: düzgün tabanlı Euro palet; istifte kayma olmaması için streç sarım önerilir.",
          "Big-bag taşıma: daha geniş tabanlı 100x120 ya da özel ölçülü palet.",
          "Hijyenik ambalaj ve gıda teması olan mamul: yıkanabilir plastik palet tercih edilir.",
          "Kalıp ve makine parçası: takozlu ve kalın tahtalı, yüksek yük taşıyan palet.",
          "Müşteriye gönderilen koli: ikinci el sınıflandırılmış palet, maliyeti makul tutar.",
        ],
        links: [L.euro, L.p100, L.plastik, L.takozlu, L.ikinci],
      },
      {
        h: "Çevredeki Gebze OSB ve Balçık ile ilişki",
        p: [
          "Plastikçiler OSB, Balçık ve Gebze OSB’ye çok yakın bir konumda yer aldığı için birden fazla tesise aynı sevkiyat planı içinde palet gidebilir. Ancak OSB içindeki giriş düzeni bölgeden bölgeye değiştiğinden, sürücü ve plaka bilgisinin önceden verilmesi gerekir. Sipariş ayrıntıları için süreç sayfamıza bakabilirsiniz.",
        ],
        links: [L.surec, bolge("balcik-palet", "Balçık"), bolge("gebze-osb-palet", "Gebze OSB")],
      },
      {
        h: "Atık palet ve geri dönüşüm",
        p: [
          "Plastik fabrikalarında deformasyona uğrayan, ezilmiş ya da tabanı kopmuş paletler ürün çıkışı sırasında sorun yaratır. Ahşap paletler tamir edilebilir veya geri dönüşüme verilir; plastik palet ise kırık haliyle de değer taşır. Elinizde ne varsa türü, durumu ve adedi ile bildirin, uygun değerlendirme yolu birlikte belirlenir.",
        ],
        links: [L.hurda, L.kirik, L.rPlastikCesit],
      },
      {
        h: "Plastik sanayi için seçim ipuçları",
        list: [
          "Statik yükte (rafta uzun süre bekleyen) plastik palet eğilebilir; raf kullanımı için taşıma kapasitesi bilgisini mutlaka sorun.",
          "Ahşap paletin nem düzeyi, ambalajı etkiler; torba ve karton ambalajda kuru palet kullanın.",
          "Kullanılan paletin kokusu hammadde ve gıda temaslı ürünlerde sorun yaratabilir; koku ve kalıntı şikâyetine karşı sıfır ya da yıkanmış palet seçin.",
          "Hat otomasyonu varsa (palet sarma, robotik istif) paletlerin ölçü toleransı birbirine yakın olmalıdır.",
        ],
        links: [L.rKapasite, L.rKg, L.rPlastikCesit],
      },
    ],
    faq: [
      { q: "Hammadde torbaları için hangi palet uygundur?", a: "Torbalar düzgün ve geniş taban ister; Euro ya da 100x120 palet, streçle birlikte genelde yeterlidir. Ağır torbalarda tahta kalınlığına dikkat edin." },
      { q: "Plastik palet mi ahşap palet mi almalıyım?", a: "Hijyen, yıkanabilirlik ve uzun ömür istiyorsanız plastik; maliyet ve tek yön kullanım için ahşap daha uygundur. Rehberimizde karşılaştırma var." },
      { q: "OSB’ye teslimat için araç bilgisi gerekir mi?", a: "Evet. OSB giriş kurallarına göre plaka ve sürücü bilgisi önceden bildirilir." },
      { q: "Kırık plastik paletleri de alıyor musunuz?", a: "Plastik palet durumuna göre değerlendirilir. Fotoğraf ve adet bildirmeniz yeterlidir." },
    ],
  },

  "dilovasi-palet": {
    description: "Dilovası OSB ve Kimya İhtisas OSB tesislerine palet satışı: 100x120, Euro, plastik palet ve ihracat paleti; hurda palet alımı için Gebze depodan teklif.",
    distance: "Gebze deposundan sevkiyat · süre teklifte netleşir",
    blurb: "Dilovası’nın kimya, metal ve liman bağlantılı tesislerine 100x120, Euro, plastik ve ihracat paleti.",
    answer:
      "Dilovası, Gebze’nin doğusunda kimya, metal ve lojistik tesislerinin yoğun olduğu bir sanayi ilçesidir. Bu tesislerin bidon, varil, IBC ve torba yüklerine uygun 100x120, Euro ve plastik palet sağlıyor, üretim ve depo alanlarında biriken hurda paletleri yerinden alıyoruz.",
    zones: ["Dilovası OSB", "Kimya İhtisas OSB", "Diliskelesi", "Tavşancıl", "Çerkeşli", "Demirciler"],
    nearby: ["gebze-palet", "imes-palet", "derince-palet", "korfez-palet"],
    sections: [
      {
        h: "Dilovası’nda palet neden önemli bir güvenlik konusu",
        p: [
          "Dilovası’nın sanayi kimliği boya, solvent, plastik hammadde, metal ve kimyasal ürün üretimine dayanır. Bu tesislerde sevkiyat birimi çoğunlukla bidon, varil, torba ya da IBC tankıdır. Sıvı ağırlığı yüksek olduğu için palet, yalnızca taşıyıcı değil aynı zamanda yükün dengede durmasını sağlayan kritik bir parçadır.",
          "Kimyasal sızıntı ihtimali olan alanlarda ahşap palet emici yapısı nedeniyle risk taşıyabilir; bu tür hatlarda plastik palet ve sızıntı havuzlu istif düzeni tercih edilir. Hangi malzemenin sizin üründe doğru olduğuna ürün güvenlik bilgi formunuz (SDS) ile karar vermeniz gerekir.",
        ],
        links: [L.gKimya, L.rAhsapPlastik],
      },
      {
        h: "Dilovası işletmelerinin sık istediği ürünler",
        list: [
          "100x120 palet: bidon, varil ve IBC’de geniş taban sağlar.",
          "80x120 Euro palet: torba ve koli sevkiyatında standart seçim.",
          "Plastik palet: temizlik gerektiren ve sızıntı riski bulunan hatlar.",
          "Özel ölçülü palet: standart dışı makine parçası ve profil yükleri.",
          "HT damgalı ihracat paleti: Diliskelesi çevresi liman bağlantılı sevkiyatlar.",
        ],
        links: [L.p100, L.euro, L.plastik, L.ozel, L.ihracat],
      },
      {
        h: "Sevkiyat planlaması",
        p: [
          "Dilovası’na sevkiyatta kritik nokta, teslimat adresinin OSB içinde mi yoksa dağınık sanayi alanında mı olduğudur. OSB içinde giriş kuralları, dağınık alanda ise dar yol ve araç manevrası belirleyici olur. Siparişte bunları belirtirseniz doğru araç tipi seçilir.",
        ],
        steps: [
          "Palet türü, ölçü ve adedi iletin; yükünüzün cinsi (sıvı, torba, metal) kısaca belirtin.",
          "Hazırlanan teklifte ürün, adet, teslim koşulu ve varsa damga bilgisi yer alır.",
          "Araç ve sürücü bilgisi tesisin giriş kuralına göre paylaşılır.",
          "Teslimde palet sayısı birlikte kontrol edilir.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Tesiste biriken paletler",
        p: [
          "Kimya tesislerinde yağ, boya ya da kimyasal bulaşmış paletler özel bir durumdur. Böyle paletler her zaman geri dönüşüme uygun olmayabilir; bulaşma türü talepte belirtilmeli, değerlendirme buna göre yapılmalıdır. Bulaşıksız kırık ve fazla paletler ise yerinde sınıflanır ve alınır.",
        ],
        links: [L.hurda, L.hasarli, bolge("imes-palet", "İMES OSB")],
      },
      {
        h: "İlçedeki sektör çeşitliliği ve ihracat",
        p: [
          "Dilovası’nın bir yanında kimya ve metal üretimi, diğer yanında liman ve gümrük bağlantılı lojistik faaliyetler vardır. İhracat yapan firmaların birçoğu ürününü Gebze ve Dilovası’ndaki liman ve depolar üzerinden dışarıya sevk eder; bu akışta palet, ihracat kuralına uygun olmalıdır.",
          "Gümrük ve taşıma belgeleri ile ilgili sorular için ilgili hizmet sağlayıcınıza danışın; bizim işimiz paletin kuralına uygun olmasıdır. Isıl işlem damgası ve belge talebi için ayrıca bilgi almak isterseniz ilgili rehber ve hizmet sayfalarına bakabilirsiniz.",
        ],
        links: [L.rIhracat, L.ispm, L.gIhracat],
      },
    ],
    faq: [
      { q: "IBC tank için hangi palet ölçüsü gerekir?", a: "IBC tanklar genellikle 100x120 ölçüsünde yerleşir. Tank modeline göre doğrulama yapıp teklif almak en güvenlisidir." },
      { q: "Kimyasal bulaşmış paletleri alıyor musunuz?", a: "Bulaşma türüne bağlıdır. Talepte bunu açıkça belirtin; uygunsa değerlendirilir, uygun değilse bilgi verilir." },
      { q: "Liman bağlantılı ihracat için ne tür palet gerekir?", a: "Hedef ülke kuralına göre ISPM-15 ısıl işlem damgalı palet gerekir. Damgalı palet ihtiyacınızı sipariş sırasında belirtin." },
      { q: "OSB içindeki fabrikaya teslimat yapılıyor mu?", a: "Evet. OSB giriş kurallarına göre plaka ve sürücü bilgisi önceden paylaşılır." },
    ],
  },

  "imes-palet": {
    description: "Dilovası İMES OSB makine ve metal sanayisine palet: Euro, özel ölçü, ikinci el ve HT damgalı palet, ahşap sandık. Gebze depodan sevkiyat, hurda alımı.",
    distance: "Gebze deposundan sevkiyat · süre teklifte netleşir",
    blurb: "İMES OSB’de makine, kalıp ve metal parça üreticileri için takozlu, özel ölçülü palet ve sandık.",
    answer:
      "İMES OSB, Dilovası’nda makine imalatı, kalıp ve metal işleme atölyelerinin yoğun olduğu bir sanayi sitesidir. Ağır, uzun ve düzensiz parçalar için takozlu palet, özel ölçülü palet ve ahşap sandık sağlıyor, atölyelerde biriken hurda paletleri yerinden alıyoruz.",
    zones: ["İMES OSB", "Dilovası OSB çevresi", "Tavşancıl"],
    nearby: ["dilovasi-palet", "gebze-palet", "cayirova-palet", "derince-palet"],
    sections: [
      {
        h: "Makine ve metal atölyesi palet beklentisi",
        p: [
          "İMES gibi makine ve kalıp sanayisi odaklı sitelerde ürünün kendisi ağır, biçimi düzensiz ve çoğu zaman tek parçadır. Standart Euro paletin yetmediği durumlar sık yaşanır: bir şanzıman gövdesi, uzun bir mil, ya da yan yana dizilmiş kalıp plakaları.",
          "Bu yüzden İMES’teki müşterilerin siparişlerinde ölçü, ağırlık ve yük dağılımı ön plandadır. Paletin tahta kalınlığı, takoz sayısı ve orta destek yapısı bu bilgilere göre belirlenir.",
        ],
        links: [L.takozlu, L.ozel, L.rKg],
      },
      {
        h: "Hangi parça için hangi ambalaj çözümü",
        table: {
          caption: "İMES’te tipik yükler ve palet-ambalaj seçimi",
          head: ["Yük", "Önerilen çözüm", "Not"],
          rows: [
            ["Ağır dökme parça, gövde", "Takozlu, kalın tahtalı palet", "Yükü ahşaba sabitlemek için bağlama noktaları"],
            ["Uzun mil, profil, boru", "Özel ölçülü uzun palet", "Taşma yüzdesi taşıma kurallarına göre sınırlanmalı"],
            ["Hassas işlenmiş parça", "Ahşap sandık", "Darbe ve neme karşı kapalı koruma"],
            ["İhracat makinesi", "ISPM-15 damgalı palet ve sandık", "Hedef ülkenin bitki sağlığı kuralı"],
            ["Küçük parça kasası", "İkinci el Euro palet", "Dahili kullanım ya da yurt içi sevk"],
          ],
        },
        links: [L.sandik, L.ihracat, L.rIhracat],
      },
      {
        h: "Özel ölçü sipariş nasıl verilir",
        p: [
          "Özel ölçüde en önemli konu, ölçünün net verilmesidir. Uzunluk, genişlik, yükseklik ve yük ağırlığını bildirmeniz yeterli; çizim ya da fotoğraf eklerseniz hata payı düşer. Aynı ölçüde tekrar sipariş verecekseniz ilk partiden bir numuneyi saklayıp referans almanız ileride işi kolaylaştırır.",
        ],
        steps: [
          "Yükün ölçüsü, ağırlığı ve varsa fotoğrafı iletilir.",
          "Palet yapısı (takoz, tahta kalınlığı, taban) teklifte belirtilir.",
          "Üretim ya da hazırlık sonrası teslim planı yapılır.",
          "İlk parti teslimde ölçü ve kalite birlikte kontrol edilir.",
        ],
        links: [L.surec, L.rTeklif],
      },
      {
        h: "Metal atölyesinde atık palet",
        p: [
          "Talaş, yağ ve metal tozuyla kirlenen paletler bir süre sonra kullanım dışı kalır. Yağ bulaşmamış, yalnızca kırılmış paletler ise tamir edilebilir veya geri dönüşüme verilebilir. Yağlı palet olup olmadığını talepte açıkça yazmanız değerlendirme sürecini hızlandırır.",
        ],
        links: [L.hurda, L.tamir, bolge("dilovasi-palet", "Dilovası")],
      },
      {
        h: "Sandık mı palet mi",
        p: [
          "Makinenin değeri paletin maliyetinin çok üzerinde olduğunda, sandık tercihi maliyet değil risk yönetimidir. Açık palet üzerinde streç ve çembersiz sevk edilen bir kalıp, yağmur, darbe ya da başka yükle temas riski taşır. Kapalı ahşap sandık bu riskleri azaltır ancak ağırlığı ve hacmi artırır.",
          "Hangi çözümün uygun olduğu, yolculuğun uzunluğu, yük değeri ve alıcının beklentisine bağlıdır. Sevkiyat şeklini bildirirseniz, palet ve sandık seçeneklerini birlikte değerlendirebiliriz.",
        ],
        links: [L.sandik, L.rKapasite],
      },
    ],
    faq: [
      { q: "Ağır makine parçası için hangi palet uygun?", a: "Takozlu ve kalın tahtalı palet tercih edilir. Parçanın ağırlığı ve dayanma noktaları belirlenerek özel ölçü yapılabilir." },
      { q: "İhracat için makineyi ahşap sandığa koymak gerekir mi?", a: "Hedef ülke ve ürünün hassasiyetine bağlıdır. Taşıma sırasında korunması gereken makineler için kapalı sandık sık tercih edilir." },
      { q: "Özel ölçü palet için minimum adet var mı?", a: "Adet ve ölçüye göre değişir; talebinizi iletirseniz teklifte netleşir." },
      { q: "Kırık paletleri atölyeden alıyor musunuz?", a: "Evet. Yağ bulaşıp bulaşmadığını belirterek fotoğraf ve adet göndermeniz yeterli." },
    ],
  },

  "cayirova-palet": {
    description: "Çayırova’daki fabrika ve depolara Euro, ikinci el ve plastik palet satışı, hurda palet alımı. Gebze deposuna komşu bölge, WhatsApp’tan teklif alın.",
    distance: "Gebze deposuna komşu bölge",
    blurb: "Gebze’ye komşu Çayırova sanayi ve depolarına Euro, ikinci el palet; hurda palet alımı.",
    answer:
      "Çayırova, Gebze’ye komşu bir ilçedir ve sanayi siteleri, lojistik depolar ile ana yollara yakın üretim tesisleri barındırır. Bu işletmelere Euro palet, ikinci el palet, plastik palet ve ihracat paleti sağlıyor, fazla ve kırık paletleri yerinden alıyoruz.",
    zones: ["Şekerpınar", "Akse", "Cumhuriyet", "Atatürk", "Emek", "İnönü", "Özgürlük"],
    nearby: ["sekerpinar-palet", "gebze-palet", "gebze-osb-palet", "tuzla-palet", "orhanli-palet", "aydinli-palet"],
    sections: [
      {
        h: "Çayırova’nın depo ve üretim karışımı",
        p: [
          "Çayırova, Gebze ile Tuzla arasında yer alan ve ana ulaşım koridorlarına yakın bir ilçedir. Bu konum, hem üretim yapan küçük-orta fabrikaları hem de ülke genelinde dağıtım yapan depo ve lojistik firmalarını bölgeye çeker.",
          "Dolayısıyla Çayırova’da palet talebi iki gruba ayrılır: üretim hattının palet çevrimi ve depo-dağıtım tarafının sürekli palet ihtiyacı. İkinci grupta palet çok sayıda el değiştirir, hasar oranı da yüksektir.",
        ],
        links: [L.gEticaret, bolge("sekerpinar-palet", "Şekerpınar")],
      },
      {
        h: "Depo ve dağıtım merkezleri için",
        list: [
          "Raf sistemi kullanıyorsanız ölçü ve kalınlık toleransı sabit olmalı; EPAL ve sınıflandırılmış ikinci el Euro palet yaygındır.",
          "Çapraz sevkiyatta (cross-dock) hızlı dönen paletler için dayanıklı ikinci el palet maliyeti dengeler.",
          "Soğuk zincirde plastik palet, nem ve yıkama dayanımı sağlar.",
          "Konteynere yüklenen mallar için konteynere kaç palet sığdığını önceden hesaplamak, yanlış ölçü almayı önler.",
        ],
        links: [L.epal, L.ikinciEuro, L.plastik, L.konteyner],
      },
      {
        h: "Çayırova’da sipariş akışı",
        p: [
          "Çayırova’daki işletmeler talepte genellikle ürün, adet ve boşaltma biçimini bildirir. Boşaltma noktasında forklift ya da rampa bulunup bulunmadığı, aracın girebileceği kapı genişliği gibi ayrıntılar teslimat planlamasını doğrudan etkiler. Bunları baştan yazmanız hem zaman kazandırır hem de ek araç hareketini önler.",
          "Düzenli palet kullanan işletmeler için periyodik teslim planı yapılabilir; koşullar ve sıklık teklifte belirlenir.",
        ],
        links: [L.surec, L.toptan, L.teklif],
      },
      {
        h: "Depo ve atölye kenarında biriken paletler",
        p: [
          "Depo işletmelerinde dönen palet havuzundan çıkan hasarlı paletler genellikle kapının yanında yığılır. Bu yığın, iş güvenliği riski olduğu kadar kaybedilen bir kaynaktır; bir kısmı onarılarak yeniden kullanılabilir. Palet türüne ve durumuna göre değerlendirmeyi yerinde yapar, yükleme için araç göndeririz.",
        ],
        links: [L.hurda, L.yerinde, L.tamir],
      },
      {
        h: "Çayırova’da stok yönetimi",
        p: [
          "Depo işi yapan firmaların ortak sorunu, palet stokunun sürekli azalıp artması ve kayıpların izlenememesidir. Giden paletlerin geri dönüp dönmediğini takip etmek, kaybolan paletleri azaltır. Geri dönmeyecek sevkiyatlar için ekonomik ikinci el palet, dönecek sevkiyatlar için daha dayanıklı palet planlamak maliyeti düşürür.",
        ],
        links: [L.rMaliyet, L.rOmur, L.alimSatim],
      },
      {
        h: "Raf ve forklift uyum kontrolü",
        p: [
          "Depo işletmeciliğinde en pahalı hatalardan biri, rafa uymayan palet almaktır. Alımdan önce rafın kiriş açıklığını, forklift çatalının genişliğini ve palet ölçüsünü karşılaştırın. İkinci el palette, tahta aralığı ve alt tahtaların durumu da kontrol edilmelidir.",
          "Teklif aşamasında bu bilgileri paylaşırsanız yanlış ürün riskini baştan eleriz.",
        ],
        links: [L.rRaf, L.rOlcu],
      },
    ],
    faq: [
      { q: "Çayırova’da küçük depolar için de hizmet veriyor musunuz?", a: "Evet. Küçük adetli siparişler için hem depodan yükleme hem de adrese teslimat seçeneği vardır." },
      { q: "Raf sistemi için hangi palet güvenlidir?", a: "Raf kirişine oturan standart ölçü ve sağlam alt tahta aranır. EPAL ya da iyi sınıflandırılmış Euro palet tercih edilir." },
      { q: "Periyodik teslimat planı yapılır mı?", a: "Evet. Haftalık ya da aylık ihtiyacınızı bildirirseniz teklifte planlı sevkiyat çerçevesi yazılır." },
      { q: "Depo içi hurda palet yığınını alıyor musunuz?", a: "Evet. Fotoğraf ve yaklaşık adet gönderirseniz değerlendirme ve yükleme planlanır." },
      { q: "Rafa uymayan palet alırsam ne olur?", a: "Palet rafta dengesiz durur ya da forklift çatalı giremez. Ölçü uyumunu alımdan önce doğrulayın." },
    ],
  },

  "sekerpinar-palet": {
    description: "Şekerpınar sanayi ve depo bölgesine palet satışı: Euro, ikinci el, plastik palet; hurda palet alımı. Gebze depodan sevkiyat, WhatsApp’tan teklif alın.",
    distance: "Gebze deposundan sevkiyat · süre teklifte netleşir",
    blurb: "Şekerpınar’ın metal, plastik ve depo işletmelerine Euro, ikinci el ve plastik palet; tesisten hurda palet alımı.",
    answer:
      "Şekerpınar, Çayırova’ya bağlı, D-100 ve TEM bağlantılarına yakın bir sanayi ve depo mahallesidir. Burada çalışan metal, plastik, ambalaj ve dağıtım işletmelerine Euro palet, ikinci el palet ve plastik palet sağlıyor, kırık ve fazla paletleri yerinden alıyoruz.",
    zones: ["Şekerpınar Mahallesi", "Akse", "TEM ve D-100 çevresi depo alanları"],
    nearby: ["cayirova-palet", "tuzla-palet", "gebze-palet", "orhanli-palet", "aydinli-palet"],
    sections: [
      {
        h: "Şekerpınar’da işletme tipleri",
        p: [
          "Şekerpınar’da büyük parsel fabrikalar kadar, kiralık depo ve atölye bloklarında çalışan küçük firmalar da yer alır. Metal sac ve profil işleyen atölyeler, ambalaj ve plastik ürün üreticileri, e-ticaret ve toptan dağıtım depoları bu çevrenin tanıdık işletmeleridir.",
          "Küçük işletmelerin ortak sorunu, palet alımını sürekli yapmak yerine ihtiyaç doğdukça çözmek zorunda kalmalarıdır. Bu durum fiyatı sürekli değişken tutar; ilk siparişte ihtiyacı birkaç ay öne yaymak çoğu zaman daha verimlidir.",
        ],
        links: [L.gEticaret, L.rMaliyet],
      },
      {
        h: "Atölye ve depo için palet önerileri",
        table: {
          caption: "Şekerpınar işletmeleri için palet eşleştirmesi",
          head: ["İşletme", "Palet", "Neden"],
          rows: [
            ["Sac ve profil atölyesi", "Takozlu veya özel ölçülü palet", "Uzun ve ağır yük için güçlü taban"],
            ["Plastik/ambalaj üreticisi", "İkinci el Euro, 100x120", "Koli ve çuval istifine yeterli, maliyeti dengeli"],
            ["E-ticaret ve dağıtım deposu", "Sınıflandırılmış ikinci el Euro", "Hızlı döner, rafa uyar"],
            ["Küçük hacimli atölye", "İnce palet, yarım palet", "Düşük ağırlıkta pratik çözüm"],
          ],
        },
        links: [L.takozlu, L.ikinciEuro, L.ince],
      },
      {
        h: "Teslimat için bilinmesi gerekenler",
        p: [
          "Şekerpınar’daki bazı sanayi siteleri dar sokaklı ve park yeri kısıtlıdır. Büyük tır yerine daha küçük araçla sevkiyat gerekebilir; bu da seferde taşınabilecek palet sayısını belirler. Aracın adrese girip giremeyeceğini, mesai saati kısıtı olup olmadığını teklif aşamasında yazarsanız ek sefer riski kalmaz.",
        ],
        steps: [
          "Adres ve araç erişimi (kapı, sokak genişliği) bildirilir.",
          "Palet türü, adet ve teslim penceresi teklifte netleşir.",
          "Boşaltma yöntemi (forklift, rampa, el) onaylanır.",
          "Teslim sayımla yapılır, irsaliye ve fatura kesilir.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Kullanılmayan paletler",
        p: [
          "Şekerpınar’daki kiralık depo ve atölyelerde taşınma, sözleşme bitişi ya da üretim değişikliği sonrası arta kalan paletler yaygındır. Bunları çöpe vermek yerine değerlendirmek hem yer açar hem de maliyetin bir kısmını geri getirebilir. Hurda ve kırık paletler için hizmet sayfasından bilgi alabilirsiniz.",
        ],
        links: [L.hurda, L.kirik, L.rNereye],
      },
      {
        h: "Şekerpınar’da maliyet dengesi",
        p: [
          "Tek kullanımlık bir sevkiyat için sıfır palet almak çoğu zaman gereksizdir; öte yandan ihracat ya da hijyen gereken yerde ikinci el palet yetersiz kalır. Seçim; yükün değeri, paletin dönüp dönmeyeceği ve alıcının beklentisi üzerinden yapılmalıdır.",
          "Ürün yelpazesini karşılaştırmak ve kendi işinize uygun olanı bulmak için palet seçici aracını kullanabilirsiniz.",
        ],
        links: [L.secici, L.sifir, L.ikinci, L.rMaliyet],
      },
    ],
    faq: [
      { q: "Küçük atölye için az sayıda palet mümkün mü?", a: "Evet. Küçük adetler için depodan alım yapılabilir; adrese teslimat ise teklifte netleşir." },
      { q: "Dar sokaklı sanayi sitesine araç girebilir mi?", a: "Adresin erişimine göre araç seçilir. Sokak ve kapı genişliğini bildirmeniz, doğru araçla gelmemizi sağlar." },
      { q: "Taşınma sonrası kalan paletleri alıyor musunuz?", a: "Evet. Tür, durum ve adedi ile yazarsanız ön değerlendirme yapılır." },
      { q: "İkinci el Euro palet güvenilir mi?", a: "Sınıflandırılmış ve kırık tahtası ayıklanmış ikinci el palet birçok depo işi için uygundur. Rehberimizde alırken nelere bakılacağı anlatılıyor." },
    ],
  },

  "darica-palet": {
    description: "Darıca’daki sanayi, liman ve depo işletmelerine palet satışı: ikinci el Euro, plastik ve ihracat paleti; hurda palet alımı. Gebze depodan teklif alın.",
    distance: "Gebze’ye komşu kıyı ilçesi",
    blurb: "Gebze’ye komşu Darıca’da liman bağlantılı depo, küçük sanayi ve ticaret işletmelerine palet.",
    answer:
      "Darıca, Gebze’ye komşu bir sahil ilçesidir ve konut yapısına rağmen liman çevresinde, depo ve küçük sanayi alanlarında palet kullanan birçok işletme barındırır. Bu işletmelere ikinci el Euro palet, plastik palet ve ihracat paleti sağlıyor, tesislerdeki kırık paletleri yerinden alıyoruz.",
    zones: ["Bayramoğlu", "Osmangazi", "Fevzi Çakmak", "Piri Reis", "Nenehatun", "Sırasöğütler"],
    nearby: ["gebze-palet", "dilovasi-palet", "cayirova-palet", "balcik-palet"],
    sections: [
      {
        h: "Darıca’da palet kullanan işletmeler",
        p: [
          "Darıca, büyük OSB’lerden ziyade dağınık küçük sanayi, gıda dağıtım, yapı malzemesi ve liman hizmetleri üzerine kurulu bir ekonomiye sahiptir. Konut mahalleleri arasında ticari depolar, tamirhane-atölye sıraları ve lojistik hizmet firmaları bulunur.",
          "Bu işletmeler çoğunlukla düzenli büyük hacimlerden çok, ihtiyaç doğdukça orta ölçekli partiler alır. Bu nedenle esnek sipariş miktarı ve basit teslimat tercih edilir.",
        ],
        links: [L.gGida, L.gIhracat],
      },
      {
        h: "Kıyı ve liman çevresinde palet seçimi",
        list: [
          "Neme yakın depolarda ahşap palet daha çabuk bozulur; plastik palet nem ve tuzlu havaya karşı dayanıklıdır.",
          "Gıda ve içecek dağıtımında temiz yüzey ve koku olmaması için sıfır ya da hijyenik plastik palet tercih edilir.",
          "Limana giden yükte hedef ülke kuralı gereği ISPM-15 damgalı palet zorunlu olabilir; taleplerde bunu en başta bildirin.",
          "Yapı malzemesi ve ağır kuru yük için takozlu, daha kalın tahtalı palet gerekir.",
        ],
        links: [L.plastik, L.hijyenik, L.ihracat, L.takozlu],
      },
      {
        h: "Teslimat ve yükleme",
        p: [
          "Darıca’daki bazı adresler dar ve eğimli sokaklarda bulunur. Teslimat öncesi araç boyutu, sokak kısıtı ve boşaltma yöntemi konuşulmalıdır. Depodan kendi aracınızla yükleme yapmak isterseniz Pelitli deposu bu iş için hazırdır; ürün ve adedi önceden bildirmeniz yeterli.",
          "Aylık düzenli palet kullanıyorsanız her ay ayrı teklif beklemek yerine çerçeve anlaşma yapmak teslimat sürecini sadeleştirir.",
        ],
        links: [L.surec, L.toptan, L.teklif],
      },
      {
        h: "Biriken ve kullanılmayan paletler",
        p: [
          "Darıca’daki küçük depolarda palet çoğunlukla dışarıda, kapı önünde ya da bahçede bekler; yağmur ve nem paletleri hızla çürütür. Yeniden kullanılabilir durumda olanlar tamir edilip dolaşıma girebilir, çürümüş olanlar ise geri dönüşüme gider. Elinizdekilerin fotoğrafı üzerinden ön değerlendirme yapılır.",
        ],
        links: [L.hurda, L.degerleme, L.rOmur],
      },
      {
        h: "Darıca için pratik öneriler",
        list: [
          "Küçük hacimlerde palet depolamak yer kaplar; sipariş sıklığını artırıp parti büyüklüğünü küçültmek depo alanını rahatlatır.",
          "Açık havada saklanan ahşap palet güneş ve yağmurdan korunmalıdır; kapalı alanda istif ömrünü uzatır.",
          "Birden fazla palet türü kullanıyorsanız ayrı ayrı istiflemek karışıklığı önler.",
          "Teslimat saati için mesai kısıtını (market, site yönetimi vb.) önceden bildirin.",
        ],
        links: [L.rIstif, L.rOmur],
      },
      {
        h: "Küçük partilerde lojistik",
        p: [
          "Darıca gibi komşu ilçelere küçük partilerle sevkiyat yaparken en önemli kalem, aracın boş dönmesidir. Bu yüzden kendi aracınızla gelip yüklemeniz ya da komşu işletmelerle sipariş birleştirmeniz maliyet avantajı sağlar.",
          "Teslim ihtiyacı varsa güzergâh üzerindeki diğer siparişlerle birleştirme seçeneği teklifte belirtilir.",
        ],
        links: [L.nakliye, L.toptan],
      },
    ],
    faq: [
      { q: "Nemli depoda hangi palet daha uzun ömürlü olur?", a: "Plastik palet neme ve çürümeye karşı dayanıklıdır; ahşap palet ise kuru ortamda daha ekonomik kalır." },
      { q: "Limana gidecek yük için hangi palet gerekir?", a: "Hedef ülkeye göre ISPM-15 damgalı palet zorunlu olabilir. Gümrük ve nakliyeci ile teyit etmeniz yerinde olur." },
      { q: "Küçük adetli alımlarda depodan yükleme yapılıyor mu?", a: "Evet. Pelitli deposundan yüklemek mümkündür; gelmeden önce ürün ve adedi bildirmeniz yeterli." },
      { q: "Kapı önünde bekleyen çürük paletleri alıyor musunuz?", a: "Durumuna göre değerlendirilir. Fotoğraf göndermeniz, uygun olanların alınması için yeterlidir." },
      { q: "Kendi aracımla yükleme yapabilir miyim?", a: "Evet. Pelitli deposundan yükleme mümkündür; gelmeden önce ürün ve adedi bildirin." },
    ],
  },
};
