import { L, bolge, type RegionContent } from "./regions-build";

// Parti 6: İstanbul Avrupa yakası şehir içi ticaret kümeleri ve batı ucu.
export const regionContent6: Record<string, RegionContent> = {
  "bagcilar-palet": {
    blurb: "Bağcılar’daki matbaa, tekstil ve ticari depo işletmelerine Euro, ikinci el ve plastik palet.",
    answer:
      "Bağcılar; Güneşli, Mahmutbey ve Yenigün çevresindeki matbaa, tekstil, hazır giyim ve ticari depo işletmeleriyle şehir içi üretim ve ticaretin yoğun olduğu bir ilçedir. Bu işletmelere Euro, ikinci el ve plastik palet sağlıyor; hurda paletleri yerinden alıyoruz.",
    zones: ["Güneşli", "Mahmutbey", "Yenigün", "Demirkapı", "Kirazlı"],
    nearby: ["esenler-palet", "gungoren-palet", "bahcelievler-palet", "basaksehir-palet", "gaziosmanpasa-palet", "istanbul-palet"],
    sections: [
      {
        h: "Bağcılar: matbaa ve tekstil kenti",
        p: [
          "Bağcılar’ın ekonomik kimliği, birbirine geçmiş matbaa siteleri, tekstil ve konfeksiyon atölyeleri ile ticari depolardan oluşur. Güneşli ve çevresinde kâğıt, ambalaj, tekstil ham maddesi ve mamul ürün sevkiyatı yoğun biçimde yapılır.",
          "Şehrin tam ortasında yer alan bu yoğunluk, her metrekarenin değerli olduğu anlamına gelir. Palet yönetimi de bu yüzden alan verimliliği ile iç içedir: az stok, hızlı devir, düzenli çıkış.",
        ],
        links: [L.gEticaret, bolge("esenler-palet", "Esenler")],
      },
      {
        h: "Matbaa ve ambalaj için",
        list: [
          "Kâğıt ve karton ruloları ya da paketleri nemden etkilenir; kuru, düz tabanlı palet kullanın.",
          "Kâğıt ağırlığı yüksektir; tahta kalınlığı ve orta destek yapısına dikkat edin.",
          "Palet kenarları ürün köşesine ezilme yapabilir; ölçü uyumunu kontrol edin.",
          "Baskılı ürünlerde palet yüzeyinde leke ve yağ olmamalıdır.",
        ],
        links: [L.ince, L.euro, L.rKg],
      },
      {
        h: "Tekstil ve konfeksiyon için",
        table: {
          caption: "Bağcılar’da tekstil sevkiyatı ve palet",
          head: ["Yük", "Palet", "Not"],
          rows: [
            ["Kumaş topları", "Temiz ikinci el Euro", "Kıymık ve leke riski"],
            ["Hazır giyim kolisi", "İkinci el Euro, ince palet", "Hafif yük, hızlı devir"],
            ["Aksesuar ve malzeme", "İnce ya da yarım palet", "Küçük koli ve kutular"],
            ["İhracat yükü", "HT damgalı palet", "Hedef ülke kuralı"],
          ],
        },
        links: [L.ikinciEuro, L.ince, L.ihracat],
      },
      {
        h: "Şehir içi teslimat",
        p: [
          "Bağcılar’da dar sokaklar, çift taraflı park ve yoğun trafik teslimatın önündeki temel engellerdir. Mümkünse teslim saati sabah erken ya da öğleden sonraya alınmalı, aracın duracağı nokta önceden belirlenmelidir. Boşaltma için kat, asansör ya da rampa durumunu bildirin.",
        ],
        steps: [
          "Mahalle, cadde ve bina bilgisini, boşaltma koşulunu yazın.",
          "Palet türü ve adedine göre teklif alın.",
          "Teslim penceresini kesinleştirin.",
          "Teslimde sayım yapılır.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Atıl palet",
        p: [
          "Matbaa ve tekstil atölyelerinde palet yığınları koridoru daraltır. Küçük miktarlarda bile çıkış planlamak mümkündür. Palet türü ve fotoğrafı yeterli.",
        ],
        links: [L.hurda, L.yerinde],
      },
      {
        h: "Kâğıt yükünde ağırlık hesabı",
        p: [
          "Kâğıt ve karton, hacmine göre çok ağırdır. Bir palet kâğıt, aynı palet kolilenmiş hafif ürüne göre kat kat fazla yük taşır. Bu yüzden matbaa ve ambalaj işletmelerinde palet seçerken brüt ağırlığı hesaba katmak gerekir.",
          "Palet taşıma kapasitesi aşıldığında tahtalar çatlar, tüm yük ezilir.",
        ],
        links: [L.rKg, L.rKapasite],
      },
    ],
    faq: [
      { q: "Matbaam için hangi palet?", a: "Kuru, düz ve temiz palet. Kâğıt ağırlığı yüksekse tahta kalınlığına dikkat edin." },
      { q: "Tekstil için palet kokusu önemli mi?", a: "Evet. Kokulu ya da lekeli palet kumaşa geçebilir; temiz palet kullanın." },
      { q: "Dar sokağa araç girer mi?", a: "Adresin erişimine göre uygun araç seçilir. Bilgi paylaşmanız yeterli." },
      { q: "Az sayıda palet teslimi mümkün mü?", a: "Evet. Küçük adetli talepler kabul edilir." },
      { q: "Matbaa için kaç kilo taşıyan palet gerekir?", a: "Kâğıt yükü ağırdır; brüt ağırlığı bildirirseniz uygun taşıma kapasitesi önerilir." },
    ],
  },

  "gaziosmanpasa-palet": {
    blurb: "Gaziosmanpaşa’daki atölye ve toptan ticaret depolarına Euro, ikinci el ve plastik palet.",
    answer:
      "Gaziosmanpaşa, İstanbul Avrupa yakasında yoğun konut dokusunun içinde atölye, toptan ticaret ve depo işletmelerini barındıran bir ilçedir. Bu işletmelere Euro, ikinci el ve plastik palet sağlıyor; atölye ve depolardaki hurda paletleri yerinden alıyoruz.",
    zones: ["Karadeniz", "Sarıgöl", "Bağlarbaşı", "Yıldıztabya", "Karlıtepe", "Küçükköy"],
    nearby: ["bayrampasa-palet", "esenler-palet", "sultangazi-palet", "bagcilar-palet", "arnavutkoy-palet", "istanbul-palet"],
    sections: [
      {
        h: "Konut içinde üretim ve ticaret",
        p: [
          "Gaziosmanpaşa’da sanayi ayrı bir bölgeye toplanmış değildir; atölyeler ve depolar konut sokaklarının zemin katlarında, küçük sitelerde ya da cadde üzerindeki işyerlerinde bulunur. Metal işleme, tekstil, gıda ve yapı malzemesi gibi pek çok iş, ilçe içinde dağınık biçimde yürütülür.",
          "Bu dağınıklık palet ihtiyacını küçük ve sık hale getirir. İşletmeler büyük miktarda palet saklayamaz; bu yüzden siparişler genellikle az adetli, ama sürekli olur.",
        ],
        links: [L.gGida, bolge("bayrampasa-palet", "Bayrampaşa")],
      },
      {
        h: "Küçük işletme için doğru palet",
        list: [
          "Hafif yüklerde ince ya da yarım palet alan açar ve elle taşımayı kolaylaştırır.",
          "Standart koli sevkiyatı için ikinci el Euro palet yeterlidir.",
          "Gıda ile temas eden işletmelerde plastik ya da sıfır palet tercih edilir.",
          "Ağır metal parçada takozlu palet kullanın; zayıf palet kaza riski doğurur.",
        ],
        links: [L.ince, L.ikinciEuro, L.plastik, L.takozlu],
      },
      {
        h: "Dar sokak teslimatı",
        p: [
          "Gaziosmanpaşa’nın bazı mahallelerinde sokaklar dardır ve araç manevrası zordur. Büyük aracın giremediği yerlerde küçük araçla birkaç seferde teslimat gerekebilir. Boşaltma için zemin kat, rampa ya da merdiven durumunu önceden bildirmeniz süreci kısaltır.",
        ],
        steps: [
          "Mahalle, sokak ve bina bilgisini yazın.",
          "Boşaltma koşulunu (zemin, rampa, merdiven) belirtin.",
          "Palet türü ve adedi ile teklif alın.",
          "Teslimde sayım yapılarak fatura kesilir.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Kullanılmayan paletlerin çıkışı",
        p: [
          "Küçük işletmelerde birkaç yığın bile ciddi yer kaplar. Palet türü, durumu ve adedi ile yazarsanız ön değerlendirme alabilirsiniz.",
        ],
        links: [L.hurda, L.degerleme],
      },
      {
        h: "Küçük işletmede stok mantığı",
        p: [
          "Birkaç yığın palet tutan bir atölyede en önemli soru, ne kadar stok tutulacağıdır. Çok az tutarsanız her ihtiyaçta acele edersiniz; çok tutarsanız yer kaybedersiniz. Pratik yol, bir ayda kullandığınız palet sayısını izleyip bunun biraz üstünde bir tampon belirlemektir.",
          "Aylık kullanımı bildirdiğinizde, düzenli teslim aralığını birlikte planlayabiliriz.",
        ],
        links: [L.rMaliyet, L.alimSatim],
      },
    ],
    faq: [
      { q: "Zemin katta atölyemiz var, palet nasıl indirilir?", a: "Boşaltma yöntemini bildirirseniz elle ya da transpaletle indirme planlanır." },
      { q: "Az sayıda palet alabilir miyim?", a: "Evet. Küçük adetli siparişler de kabul edilir." },
      { q: "Metal parçalarım için hangi palet?", a: "Takozlu ve kalın palet; parça ağırlığını bildirin." },
      { q: "Eski paletlerimi alır mısınız?", a: "Evet. Fotoğraf ve adet bilgisiyle değerlendirilir." },
      { q: "Ne kadar palet stoklamalıyım?", a: "Aylık kullanımınızın biraz üstünde bir tampon çoğu küçük işletme için yeterlidir. Aylık adedinizi bildirirseniz teslim aralığı birlikte belirlenir." },
    ],
  },

  "sultangazi-palet": {
    blurb: "Sultangazi’deki küçük sanayi ve depo işletmelerine Euro, ikinci el ve plastik palet.",
    answer:
      "Sultangazi, İstanbul Avrupa yakasının kuzeyinde, küçük sanayi siteleri, atölyeler ve ticari depoların yoğun olduğu bir ilçedir. Bu işletmelere Euro, ikinci el ve plastik palet sağlıyor; atölye ve depolardaki hurda paletleri yerinden alıyoruz.",
    zones: ["Cebeci", "Habibler", "Esentepe", "Yunus Emre", "Zübeyde Hanım", "Gazi"],
    nearby: ["gaziosmanpasa-palet", "bayrampasa-palet", "arnavutkoy-palet", "basaksehir-palet", "istanbul-palet"],
    sections: [
      {
        h: "Sultangazi’nin atölye ve depo yapısı",
        p: [
          "Sultangazi, kuzeye doğru genişleyen ve Arnavutköy ile Başakşehir’e komşu olan bir ilçedir. Mobilya, plastik, metal ve gıda üreten atölyeler; yapı malzemesi, hırdavat ve temizlik ürünleri dağıtan depolar ilçenin ekonomik hayatını oluşturur.",
          "İlçe yerleşiminin hızlı büyümesi nedeniyle bazı sanayi alanları konut bölgeleriyle iç içe geçmiştir. Bu durum teslimatta kısıt (araç tonaj sınırı, saat sınırı) doğurabilir.",
        ],
        links: [bolge("arnavutkoy-palet", "Arnavutköy"), bolge("basaksehir-palet", "Başakşehir")],
      },
      {
        h: "İşletme tipine göre palet",
        table: {
          caption: "Sultangazi’de tipik palet kullanımı",
          head: ["İşletme", "Palet", "Not"],
          rows: [
            ["Mobilya atölyesi", "Özel ölçülü, geniş tabanlı", "Büyük ve hafif ürün"],
            ["Plastik ürün üreticisi", "İkinci el Euro, 100x120", "Torba ve koli"],
            ["Hırdavat ve yapı malzemesi deposu", "Takozlu, kalın tahtalı", "Ağır yük"],
            ["Gıda atölyesi", "Plastik, sıfır palet", "Hijyen"],
          ],
        },
        links: [L.ozel, L.ikinciEuro, L.takozlu, L.plastik],
      },
      {
        h: "Araç tonaj ve saat sınırı",
        p: [
          "Bazı mahallelerde ağır araç giriş saatleri sınırlandırılabilir. Bu yüzden teslim penceresi belirlenirken yerel kural göz önünde bulundurulmalıdır. Kısıt varsa baştan bildirin; daha küçük araçla ya da farklı saatte teslim planlanır.",
        ],
        steps: [
          "Adres ve varsa araç/saat kısıtını yazın.",
          "Palet türü ve adedine göre teklif alın.",
          "Teslim penceresini kesinleştirin.",
          "Teslimde sayım yapılarak fatura kesilir.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Atıl paletler",
        p: [
          "Atölye ve depolarda birikmiş palet yığınlarının fotoğrafını göndererek değerlendirme isteyebilirsiniz; uygun olanlar alınır, onarılabilirler ayrılır.",
        ],
        links: [L.hurda, L.tamir],
      },
      {
        h: "Yükü doğru tarttırmak: tahta kalınlığı kararı",
        p: [
          "Sultangazi’deki atölyelerde palet seçimi çoğu zaman “eskisi ne ise o” mantığıyla yapılır. Oysa yük ağırlığı değiştiyse, palet de değişmelidir. Brüt ağırlığı bilmeden alınan palet ya gereksiz pahalıdır ya da yük altında çatlar.",
          "Ağırlığı bilmiyorsanız en ağır dolu paleti tartıp bildirmeniz yeterli. Palet kapasitesi, statik (yerde duran) ve dinamik (forkliftle taşınan) olmak üzere farklı değerlerle anılır; ikisini de sorun.",
        ],
        links: [L.rKg, L.rKapasite],
      },
    ],
    faq: [
      { q: "Ağır araç giriş saati sınırlıysa ne olur?", a: "Kısıtı bildirirseniz teslim farklı saate ya da küçük araca göre planlanır." },
      { q: "Mobilya ürünü için özel ölçü olur mu?", a: "Evet. Ürün ölçüsü ve ağırlığı ile teklif alabilirsiniz." },
      { q: "Küçük adetli alım mümkün mü?", a: "Evet." },
      { q: "Eski paletleri alıyor musunuz?", a: "Evet. Tür ve adet bilgisiyle değerlendirilir." },
      { q: "Palet kaç kilo taşır, nasıl öğrenirim?", a: "Dolu paletin brüt ağırlığını tartın ve bildirin. Statik ve dinamik taşıma değerlerine göre uygun yapı önerilir." },
    ],
  },

  "silivri-palet": {
    blurb: "Silivri’nin gıda, tarım ve küçük imalat işletmelerine Euro, ikinci el ve plastik palet; planlı toplu sevkiyat.",
    answer:
      "Silivri, İstanbul’un Avrupa yakasında en batıdaki ilçelerinden biridir; tarım ürünleri, gıda işleme, hayvancılık ve küçük imalat işletmeleri öne çıkar. Bu işletmelere Euro, ikinci el ve plastik palet sağlıyor; planlı toplu sevkiyat yapıyor, hurda paletleri yerinden alıyoruz.",
    zones: ["Selimpaşa", "Gümüşyaka", "Mimar Sinan", "Alibey", "Piri Mehmet Paşa", "Çanta", "Büyükçavuşlu", "Değirmenköy"],
    nearby: ["buyukcekmece-palet", "beylikduzu-palet", "catalca-palet", "istanbul-palet"],
    sections: [
      {
        h: "Silivri: tarım, gıda ve küçük imalat",
        p: [
          "Silivri, kentin batı ucunda geniş tarım arazileri ve kırsal dokusuyla öne çıkar. Süt ve et ürünleri, tahıl, sebze, ayçiçeği işleme gibi tarım-gıda faaliyetlerinin yanı sıra çiftlik ve hayvan yemi tedarikçileri de burada bulunur. Kıyı bölgesinde ise küçük imalat, depolama ve ticaret yapan işletmeler yer alır.",
          "Tarım ve gıda işletmeleri palet ihtiyacını mevsimsel olarak yaşar; hasat dönemlerinde sevkiyat artar, bunun dışında dengeli bir tüketim sürer.",
        ],
        links: [L.gGida, L.rGida],
      },
      {
        h: "Gıda ve tarım için palet",
        list: [
          "Gıda ile temas edebilecek yerde plastik ya da sıfır palet kullanın.",
          "Taze ürün sevkiyatı: kasa ve çuvallar için hafif, ekonomik palet.",
          "Yem ve tahıl çuvalı: ağır yük nedeniyle sağlam, kalın tahtalı palet.",
          "Soğuk oda: nemden etkilenmeyen plastik palet.",
        ],
        links: [L.plastik, L.sifir, L.ikinci, L.takozlu],
      },
      {
        h: "Uzak ilçe için planlı sevkiyat",
        p: [
          "Silivri şehrin batı ucunda olduğu için küçük ve tek tek sevkiyatlar yerine birkaç siparişi birleştiren planlı sevkiyat daha verimlidir. Aynı yöndeki işletmelerle ortak sipariş ya da belirli günlere toplanan teslimat, hem araç doluluğunu hem de maliyeti dengeler. Hasat döneminden önce ihtiyacı bildirmek, seçenekleri artırır.",
        ],
        steps: [
          "Mahalle ve köy adı ile erişim bilgisini yazın.",
          "Palet türü, adet ve teslim aralığı esnekliğini bildirin.",
          "Teklifi onaylayıp teslim gününü kesinleştirin.",
          "Teslimde sayım yapılır.",
        ],
        links: [L.surec, L.turkiye, L.rMaliyet],
      },
      {
        h: "Çiftlik ve tesis çıkışı paletler",
        p: [
          "Açık havada bekleyen paletler yağmur ve nemle çürür; kırık palet yığını da kemirgen ve yangın riski oluşturur. Palet durumunu fotoğrafla bildirirseniz ön değerlendirme alabilirsiniz.",
        ],
        links: [L.hurda, L.yerinde],
      },
      {
        h: "Gıda güvenliği denetimleri ve palet",
        p: [
          "Gıda işleyen işletmelerde denetimlerde paletin temizliği, kokusu ve kırık durumu sorulabilir. Yıkanamayan, kokulu ya da kırık palet uygunsuzluk sebebi olabilir. Bu yüzden denetime tabi alanlarda paletin türü ve bakım düzeni önceden planlanmalıdır.",
          "Ürün güvenliği kuralı ve müşteri şartnameniz hangi palet türünü gerektiriyorsa, siparişte bunu açıkça belirtin.",
        ],
        links: [L.hijyenik, L.rGida],
      },
    ],
    faq: [
      { q: "Hasat için palet ne zaman sipariş vermeliyim?", a: "Sezondan önce. Son dakika taleplerinde seçenekler azalabilir." },
      { q: "Yem çuvalı için hangi palet?", a: "Ağır yük için sağlam ve kalın tahtalı palet uygundur." },
      { q: "Köy adresine teslimat yapılıyor mu?", a: "Evet. Yol durumuna göre uygun araçla planlanır." },
      { q: "Çürümüş paletleri alıyor musunuz?", a: "Durumuna göre değerlendirilir. Fotoğraf yeterli." },
      { q: "Gıda denetiminde palet sorulur mu?", a: "Çoğu denetimde depo ve palet temizliği de değerlendirilir. Kuralınıza uygun palet türünü sipariş sırasında belirtmenizi öneririz." },
    ],
  },

  "catalca-palet": {
    blurb: "Çatalca’nın tarım, gıda işleme, çiftlik ve küçük sanayi işletmelerine Euro, ikinci el ve plastik palet.",
    answer:
      "Çatalca, İstanbul’un kuzeybatısında, tarım arazileri, çiftlikler ve küçük sanayi tesisleriyle öne çıkan bir ilçedir. Bu işletmelere Euro, ikinci el ve plastik palet sağlıyor; planlı sevkiyat yapıyor, hurda paletleri yerinden alıyoruz.",
    zones: ["Ferhatpaşa", "Kaleiçi", "Karacaköy", "Binkılıç", "Nakkaş", "Ormanlı"],
    nearby: ["arnavutkoy-palet", "buyukcekmece-palet", "istanbul-palet", "kocaeli-palet"],
    sections: [
      {
        h: "Çatalca’nın kırsal ve sanayi karışımı",
        p: [
          "Çatalca, geniş ova ve köylerinden oluşan bir yapıya sahiptir. Süt, et ve tahıl üreten çiftlikler, bunları işleyen gıda tesisleri, yem fabrikaları ve küçük imalat atölyeleri ilçenin işletmeleridir. İlçe merkezinde ise küçük bir sanayi alanı ve ticaret hattı vardır.",
          "Kırsal işletmelerin palet ihtiyacı küçük, ama düzenli tedarik gerektirir. Yakın tedarikçi bulamadıkları için uzak sevkiyat planına dayanırlar.",
        ],
        links: [L.gGida, bolge("silivri-palet", "Silivri")],
      },
      {
        h: "Çiftlik ve gıda işleme için",
        list: [
          "Süt ve et ürünleri: soğuk zincir ve hijyen gereği plastik palet.",
          "Tahıl ve yem çuvalı: ağır yük için kalın tahtalı, sağlam palet.",
          "Sebze ve meyve kasası: hafif ve ekonomik ikinci el palet.",
          "Paketli gıda: raf ve araç uyumu için standart Euro ölçü.",
        ],
        links: [L.plastik, L.ikinciEuro, L.euro],
      },
      {
        h: "Uzak adres için sipariş stratejisi",
        p: [
          "Çatalca gibi şehir merkezine uzak adreslerde sık küçük teslimat yerine, birkaç ayın ihtiyacını bir araya toplayan bir sipariş daha mantıklıdır. Yerinde yeterli depolama alanınız varsa bu yol hem maliyeti hem sevkiyat sayısını azaltır. Nem ve çürüme riskini azaltmak için paletleri kapalı alanda saklayın.",
        ],
        steps: [
          "Köy/mahalle adı ve yol durumunu yazın.",
          "Dönemlik ihtiyaç adedini ve depolama imkânınızı bildirin.",
          "Teklifteki teslim koşulunu onaylayın.",
          "Teslimde sayım yapılarak fatura kesilir.",
        ],
        links: [L.surec, L.rOmur, L.turkiye],
      },
      {
        h: "Çiftlikteki atıl paletler",
        p: [
          "Çiftlik ve gıda tesislerinde kullanılmayan paletler genellikle açıkta bırakılır. Çürümeden önce değerlendirme yapılması, geri dönüşüm değerini korur. Fotoğraf ve adet gönderin.",
        ],
        links: [L.hurda, L.rGeriDonusum],
      },
      {
        h: "Yem ve tahıl ambalajında yük hesabı",
        p: [
          "Çuvallı yem ve tahıl, aynı hacimdeki kolilerden çok daha ağırdır. Bu yüzden Çatalca’daki yem ve tahıl işletmelerinin palet kararında yük kapasitesi, ilk sırada gelir. Çuvalların palet dışına taşması hem istifi hem de taşımayı güvensiz kılar.",
          "Çuval ölçüsünü ve palet başına çuval sayısını bildirirseniz, uygun ölçü ve tahta kalınlığı önerilir.",
        ],
        links: [L.rKapasite, L.p100],
      },
    ],
    faq: [
      { q: "Köye teslimat yapılıyor mu?", a: "Evet. Yol durumuna göre uygun araçla planlanır." },
      { q: "Süt ürünleri için hangi palet?", a: "Hijyen ve yıkanabilirlik için plastik palet uygundur." },
      { q: "Dönemlik alımda indirim olur mu?", a: "Koşullar adede göre teklifte belirlenir." },
      { q: "Palet saklama için öneriniz?", a: "Kapalı, kuru ve havadar alanda saklayın; zeminle temas ettirmeyin." },
      { q: "Çuvallar palet dışına taşarsa ne olur?", a: "İstif dengesi bozulur, alt çuvallar ezilir. Çuval ölçüsüne uygun palet ölçüsü seçmek bu sorunu önler." },
    ],
  },

  "esenler-palet": {
    blurb: "Esenler’in tekstil, konfeksiyon, toptan ticaret ve otogar çevresi depolarına Euro, ikinci el ve plastik palet.",
    answer:
      "Esenler, İstanbul Avrupa yakasında Giyimkent, otogar çevresi ve Oruçreis hattında tekstil, konfeksiyon ve toptan ticaretin yoğun olduğu bir ilçedir. Bu işletmelere Euro, ikinci el ve plastik palet sağlıyor; depolardaki hurda paletleri yerinden alıyoruz.",
    zones: ["Oruçreis", "Davutpaşa", "Tuna", "Menderes", "Çiftehavuzlar", "Giyimkent çevresi", "Otogar çevresi"],
    nearby: ["bagcilar-palet", "bayrampasa-palet", "gaziosmanpasa-palet", "gungoren-palet", "istanbul-palet"],
    sections: [
      {
        h: "Giyimkent ve toptan ticaret",
        p: [
          "Esenler, Türkiye’nin hazır giyim toptan ticaretinde önemli bir merkez olan Giyimkent’i ve çevresindeki atölye ile depo hattını barındırır. Oruçreis ve Davutpaşa mahalleleri de tekstil ve konfeksiyon atölyeleri, aksesuar ve ambalaj tedarikçileri ile doludur. Otogar çevresindeki kargo ve nakliye firmaları ilçenin lojistik yüzünü oluşturur.",
          "Bu çevrede mal akışı çok hızlıdır: sabah gelen yük öğlen çıkar. Palet hızlı el değiştirir ve çoğu sevkiyatta geri dönmez.",
        ],
        links: [L.gEticaret, bolge("bagcilar-palet", "Bağcılar")],
      },
      {
        h: "Tek yön sevkiyatta ekonomik çözüm",
        list: [
          "Geri dönmeyecek sevkiyatlarda sıfır palet yerine temiz ikinci el palet maliyeti dengeler.",
          "Kolilerin hafif olduğu durumlarda ince palet yeterlidir.",
          "Askılı sevkiyat veya hassas kumaşta temiz, kıymıksız palet gerekir.",
          "Kargo firmalarına teslimde palet ölçüsü ve yükseklik sınırını kontrol edin.",
        ],
        links: [L.ikinciEuro, L.ince, L.rYukseklik, L.rMaliyet],
      },
      {
        h: "Sektöre göre seçim",
        table: {
          caption: "Esenler’de tipik yükler ve palet",
          head: ["Yük", "Palet", "Not"],
          rows: [
            ["Hazır giyim kolisi", "İkinci el Euro, ince palet", "Hafif ve hızlı devir"],
            ["Kumaş topu", "Temiz Euro, sıfır palet", "Leke ve kıymık riski"],
            ["Aksesuar ve ambalaj", "İnce ya da yarım palet", "Küçük koli"],
            ["Kargo konsolidasyonu", "Standart ikinci el Euro", "Araç uyumu"],
          ],
        },
        links: [L.sifir, L.euro],
      },
      {
        h: "Yoğun saat ve erişim",
        p: [
          "Esenler’de sabah ve akşam saatleri trafik yoğundur; Giyimkent çevresinde yükleme saatleri sınırlı olabilir. Teslimat penceresini yoğunluğun dışına planlamak maliyetli beklemeleri önler. Teslim noktasının yükleme rampası ya da cadde üstü olduğunu bildirin.",
        ],
        steps: [
          "Teslim noktasını ve yükleme saatini belirtin.",
          "Palet türü ve adedine göre teklif alın.",
          "Teslim penceresini kesinleştirin.",
          "Sayım ve irsaliyeyle teslim edilir.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Birikmiş paletler",
        p: [
          "Tek yön gönderilen paletler alıcıda birikir, bazen gönderen tarafta kalır. Her iki taraf için de atıl palet bir yük olur. Palet türü ve adedini bildirerek değerlendirme alın.",
        ],
        links: [L.hurda, L.yerinde],
      },
      {
        h: "Kargo ve nakliyeci beklentisi",
        p: [
          "Kargo ve nakliye firmaları palet yüksekliği, ağırlığı ve ölçüsü için kendi sınırlarını belirler. Sınırı aşan palet kabul edilmeyebilir ya da ek ücret gerektirebilir. Esenler’de gönderi yapan işletmeler, paletlerini taşıyıcının kuralını öğrenmeden hazırlamamalıdır.",
          "Taşıyıcınızın kurallarını teyit edip bize bildirin; uygun ölçü ve yükseklik için palet seçimi yaparız.",
        ],
        links: [L.rYukseklik, L.rTir],
      },
    ],
    faq: [
      { q: "Hazır giyim kolisi için hangi palet?", a: "Hafif yük için ikinci el Euro ya da ince palet yeterlidir." },
      { q: "Kumaş topu için palet temizliği önemli mi?", a: "Evet. Leke ve kıymık riski olmayan temiz palet seçin." },
      { q: "Yoğun saatlerde teslimat nasıl yapılır?", a: "Teslim penceresi yoğunluk dışına alınır; talebinizi bildirmeniz yeterli." },
      { q: "Birikmiş paletleri alıyor musunuz?", a: "Evet. Fotoğraf ve adetle değerlendirilir." },
      { q: "Kargo firması palet yüksekliğini sınırlar mı?", a: "Çoğu taşıyıcı yükseklik ve ağırlık sınırı koyar. Firmanızın kuralını öğrenin ve siparişte bildirin." },
    ],
  },

  "bayrampasa-palet": {
    blurb: "Bayrampaşa’daki hal, toptan gıda, matbaa ve atölye işletmelerine plastik, Euro ve ikinci el palet.",
    answer:
      "Bayrampaşa, İstanbul Hali’nin bulunduğu ilçedir; hal, toptan gıda, matbaa ve atölye işletmeleri ilçenin ticari omurgasını oluşturur. Bu işletmelere plastik, Euro ve ikinci el palet sağlıyor; hurda paletleri yerinden alıyoruz.",
    zones: ["İstanbul Hali çevresi", "Kocatepe", "Yıldırım", "Altıntepsi", "Muratpaşa", "Vatan", "Cevatpaşa"],
    nearby: ["gaziosmanpasa-palet", "sultangazi-palet", "esenler-palet", "zeytinburnu-palet", "istanbul-palet"],
    sections: [
      {
        h: "Hal ve toptan gıda",
        p: [
          "İstanbul Hali, kentin sebze ve meyve ticaretinin merkezidir. Hal çevresinde komisyoncular, toptan gıda dağıtıcıları, soğuk depolar ve kasa-ambalaj tedarikçileri yoğun biçimde çalışır. Bunlara ek olarak ilçede matbaa, metal ve ambalaj atölyeleri de yer alır.",
          "Hal çevresinde palet, taze ürünle teması nedeniyle hijyen standardı gerektirir. Ayrıca yoğun sevkiyat sonrası paletler hızla kirlenir, nemlenir ve yıpranır.",
        ],
        links: [L.gGida, L.rGida],
      },
      {
        h: "Taze gıda için palet kriterleri",
        list: [
          "Taze ürünle doğrudan temas varsa yıkanabilir plastik palet en güvenli seçimdir.",
          "Kasa altındaki palet yüzeyi temiz, kuru ve kıymıksız olmalıdır.",
          "Soğuk odada ahşap palet nem alır; plastik palet daha dayanıklıdır.",
          "Kullanılmış palet kokulu ya da lekeli ise gıda sevkiyatında kullanılmamalıdır.",
        ],
        links: [L.hijyenik, L.plastik, L.rPlastikCesit],
      },
      {
        h: "Matbaa ve atölyeler",
        p: [
          "Hal dışındaki işletmelerde ihtiyaç farklıdır: matbaalarda kuru ve düz tabanlı palet, metal atölyelerde ağır yük için takozlu palet, ambalaj tedarikçilerinde ise standart ikinci el Euro palet yeterlidir.",
        ],
        links: [L.euro, L.takozlu, L.ikinciEuro],
      },
      {
        h: "Hal çevresinde teslimat",
        p: [
          "Hal bölgesinde araç trafiği sabah erken saatlerde yoğunlaşır; bu saatlerde yükleme ve boşaltma işleri yarışır. Öğleden sonraki saatler teslimat için daha rahat olabilir. Teslim noktasının hal içinde mi dışında mı olduğunu, giriş kuralını siparişte yazın.",
        ],
        steps: [
          "Teslim noktasını ve saat tercihini bildirin.",
          "Palet türü ve adedi ile teklif alın.",
          "Teslim penceresini onaylayın.",
          "Sayımla teslim edilir.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Çabuk yıpranan paletler",
        p: [
          "Hal bölgesinde kullanılan paletler hızla yıpranır. Ayrı bir toplama düzeni kurmak, hem temizliği hem güvenliği artırır. Fotoğraf ve adet göndererek değerlendirme alın.",
        ],
        links: [L.hurda, L.kirik],
      },
      {
        h: "Kasa ölçüsü ve palet uyumu",
        p: [
          "Hal kasaları, standart palete tam oturmayabilir. Kasa ölçüsüyle palet ölçüsü örtüşmezse boşluk kalır ya da kasa taşar. Bu durumda palet üzerindeki kasa dizilimi dengesizleşir ve devrilme riski doğar.",
          "Yarım palet (60x80) gibi alternatifler küçük kasalarda daha iyi uyum sağlayabilir; kasa ölçünüzü bildirin.",
        ],
        links: [["Yarım Euro palet 60x80", "/rehber/yarim-euro-palet-60x80/"], L.rOlcu],
      },
    ],
    faq: [
      { q: "Sebze ve meyve için hangi palet?", a: "Yıkanabilir plastik palet hijyen açısından en güvenli seçimdir." },
      { q: "Hal çevresine sabah teslimat yapılır mı?", a: "Trafik yoğunluğu nedeniyle saat penceresi birlikte planlanır." },
      { q: "Kullanılmış palet gıdada kullanılır mı?", a: "Temiz ve kokusuz olmak koşuluyla dolaylı temasta kullanılabilir; doğrudan temasta plastik ya da sıfır tercih edilmeli." },
      { q: "Yıpranmış paletleri alıyor musunuz?", a: "Durumuna göre değerlendirilir." },
      { q: "Hal kasaları için hangi palet ölçüsü?", a: "Kasa ölçüsüne göre değişir; 80x120 Euro ya da yarım palet kullanılabilir. Kasa ölçünüzü bildirirseniz uygun ölçü önerilir." },
    ],
  },

  "zeytinburnu-palet": {
    blurb: "Zeytinburnu’nun tekstil, deri, atölye ve depo işletmelerine Euro, ikinci el ve plastik palet.",
    answer:
      "Zeytinburnu, İstanbul Avrupa yakasında Marmara kıyısına yakın, tekstil, deri, atölye ve depo işletmelerinin yoğun olduğu bir ilçedir. Bu işletmelere Euro, ikinci el ve plastik palet sağlıyor; atölye ve depolardaki hurda paletleri yerinden alıyoruz.",
    zones: ["Kazlıçeşme", "Yenidoğan", "Telsiz", "Seyitnizam", "Merkezefendi", "Nuripaşa", "Beştelsiz", "Veliefendi"],
    nearby: ["bagcilar-palet", "bahcelievler-palet", "kucukcekmece-palet", "avcilar-palet", "istanbul-palet"],
    sections: [
      {
        h: "Zeytinburnu’nun üretim geleneği",
        p: [
          "Zeytinburnu, uzun yıllardır tekstil, deri ve atölye üretiminin sürdüğü bir ilçedir. Kazlıçeşme gibi tarihsel olarak deri işleme ile anılan bölgelerde zamanla dönüşüm yaşansa da, ilçenin ticari ve üretim kimliği sürmektedir. Hazır giyim, tekstil malzemesi ve çeşitli atölyeler hâlâ ilçenin farklı mahallelerinde çalışır.",
          "Zeytinburnu’nun konumu, onu hem Avrupa yakasının diğer ilçelerine hem de limanlara bağlayan ulaşım aksları üzerine yerleştirmiştir. Bu yüzden depo ve dağıtım faaliyetleri de yoğundur.",
        ],
        links: [bolge("bahcelievler-palet", "Bahçelievler"), bolge("bagcilar-palet", "Bağcılar")],
      },
      {
        h: "Tekstil ve deri sevkiyatı için dikkat",
        list: [
          "Deri ve tekstil ürünleri koku ve leke emer; paletin temiz ve kuru olması önemlidir.",
          "Nemli depoda ahşap palet küflenebilir; plastik ya da çok kuru palet kullanın.",
          "Palet kenarlarındaki çıkıntı ve çıkık çivi, ürün ambalajını yırtabilir.",
          "Ağır deri balyalarında palet taşıma kapasitesini kontrol edin.",
        ],
        links: [L.sifir, L.plastik, L.rKapasite],
      },
      {
        h: "İşletme tipine göre palet",
        table: {
          caption: "Zeytinburnu için örnek palet seçimi",
          head: ["İşletme", "Palet", "Not"],
          rows: [
            ["Hazır giyim atölyesi", "İkinci el Euro, ince palet", "Hafif koli"],
            ["Tekstil malzeme deposu", "Temiz Euro, sıfır", "Leke ve kıymık riski"],
            ["Deri işleme ve ürün", "Plastik ya da kuru temiz palet", "Nem ve koku"],
            ["Genel depo", "İkinci el Euro", "Raf uyumu"],
          ],
        },
        links: [L.ikinciEuro, L.ince, L.euro],
      },
      {
        h: "Teslimat",
        p: [
          "Zeytinburnu’nda sokaklar dar, trafik yoğun ve bazı bölgelerde yük araçlarına zaman kısıtı vardır. Teslimat için adres, boşaltma yöntemi ve saat tercihi önceden paylaşılırsa süre kısalır.",
        ],
        steps: [
          "Mahalle, cadde ve boşaltma koşulunu yazın.",
          "Palet türü ve adedine göre teklif alın.",
          "Saat kısıtı varsa teslim penceresini belirleyin.",
          "Teslimde sayım yapılır.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Atıl palet",
        p: [
          "Yoğun atölye bölgelerinde palet yığınları sokağa taşabilir. Palet türü ve adedi ile bize yazın, ön değerlendirme alın.",
        ],
        links: [L.hurda, L.yerinde],
      },
      {
        h: "Nemli mevsimde depo yönetimi",
        p: [
          "Zeytinburnu gibi kıyıya yakın ve sıkışık yapılı bölgelerde depolar çoğu zaman az havalanır. Bu durum paletlerin nem alıp küflenmesine yol açar. Paletleri duvardan açık tutmak, zeminle temasını kesmek ve düzenli havalandırma yapmak ömrü uzatır.",
          "Küflü paletler gıda, tekstil ve deri ürününe koku bulaştırabilir; bu paletleri sevkiyatta kullanmayın.",
        ],
        links: [L.rOmur, L.rIkinciEl],
      },
    ],
    faq: [
      { q: "Deri ürünleri için hangi palet?", a: "Temiz, kuru ve kokusuz palet; nemli ortamda plastik tercih edilir." },
      { q: "Tekstil atölyesi için ince palet uygun mu?", a: "Hafif koli için uygundur; ağırlığı bildirin." },
      { q: "Dar sokağa teslimat yapılır mı?", a: "Evet, uygun araçla planlanır." },
      { q: "Atıl paletleri alıyor musunuz?", a: "Evet. Fotoğraf ve adetle değerlendirilir." },
      { q: "Küflü palet kullanılabilir mi?", a: "Koku ve spor riski nedeniyle özellikle tekstil, deri ve gıdada önerilmez. Bu paletler ayrılmalıdır." },
    ],
  },

  "bahcelievler-palet": {
    blurb: "Bahçelievler’de Yenibosna, Şirinevler ve Soğanlı çevresindeki depo ve ticaret işletmelerine palet.",
    answer:
      "Bahçelievler, İstanbul Avrupa yakasında Yenibosna, Şirinevler ve Soğanlı çevresindeki depo, ticaret ve küçük atölye işletmeleriyle yoğun bir ilçedir. Bu işletmelere Euro, ikinci el ve plastik palet sağlıyor; hurda paletleri yerinden alıyoruz.",
    zones: ["Yenibosna", "Şirinevler", "Soğanlı", "Çobançeşme", "Siyavuşpaşa", "Kocasinan"],
    nearby: ["bagcilar-palet", "kucukcekmece-palet", "avcilar-palet", "zeytinburnu-palet", "gungoren-palet", "istanbul-palet"],
    sections: [
      {
        h: "Yenibosna: fuar, mobilya ve depo",
        p: [
          "Bahçelievler’in Yenibosna çevresi, mobilya mağazaları, fuar alanı, otomotiv servisleri ve çok sayıda depo ile tanınır. Şirinevler ise ticaret ve küçük atölye yoğunluğuyla öne çıkar. Soğanlı gibi mahallelerde mutfak malzemeleri ve gıda dağıtımı yapan işletmeler vardır.",
          "Bu çeşitlilik, palet kullanımında geniş bir yelpaze oluşturur: mobilya sevkiyatında hacimli hafif ürün, gıda dağıtımında standart koli, atölyelerde ise ağır parça.",
        ],
        links: [L.gEticaret, L.gGida],
      },
      {
        h: "Mobilya ve hacimli ürün",
        list: [
          "Mobilya parçaları büyük, ama hafif olabilir; geniş tabanlı özel ölçülü palet kullanın.",
          "Cam ve ayna gibi kırılgan ürünlerde sandık veya özel koruma düşünülmelidir.",
          "Yüksek istifte devrilme riski için streç ve köşe koruyucu kullanın.",
          "Showroom ve fuar için kısa süreli palet ihtiyacında ikinci el palet ekonomik olur.",
        ],
        links: [L.ozel, L.sandik, L.ikinci],
      },
      {
        h: "Sektöre göre palet",
        table: {
          caption: "Bahçelievler’de tipik kullanım",
          head: ["İşletme", "Palet", "Not"],
          rows: [
            ["Mobilya ve dekorasyon", "Özel ölçülü, geniş tabanlı", "Hacimli ürün"],
            ["Gıda dağıtımı", "Plastik, sıfır palet", "Hijyen"],
            ["Otomotiv servis, yedek parça", "İkinci el Euro, takozlu", "Parça ağırlığı"],
            ["Genel depo", "İkinci el Euro", "Raf uyumu"],
          ],
        },
        links: [L.plastik, L.takozlu, L.ikinciEuro],
      },
      {
        h: "Sevkiyat",
        p: [
          "Bahçelievler’de yoğun trafik ve sınırlı park yeri teslimatı zorlaştırır. Sabah erken saatler ya da öğleden sonrası daha rahat olabilir. Adres, bina yükleme düzeni ve boşaltma yöntemini siparişte yazın.",
        ],
        steps: [
          "Mahalle, cadde ve bina bilgisini yazın.",
          "Palet türü ve adedine göre teklif alın.",
          "Saat aralığını kesinleştirin.",
          "Teslimde sayım yapılır.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Kullanılmayan paletler",
        p: [
          "Fuar ve mağaza döneminden kalan paletler hızla atıl hale gelir. Fotoğraf ve adetle yazarsanız ön değerlendirme alırsınız.",
        ],
        links: [L.hurda, L.degerleme],
      },
      {
        h: "Streç ve istif düzeni",
        p: [
          "Mobilya ve gıda dağıtımında palet kadar yükün palete bağlanması da önemlidir. Streç sarım yetersizse yük kayar, fazla sarım ise gereksiz maliyet çıkarır. Kutuların palet kenarını aşması istif dayanımını düşürür; ölçü uyumu için paletin ölçüsünü kutu boyutuna göre seçin.",
          "Yüksek istifte köşe koruyucu ve çapraz yerleşim, devrilme riskini azaltır.",
        ],
        links: [L.rIstif, L.rYukseklik],
      },
    ],
    faq: [
      { q: "Mobilya için hangi palet?", a: "Geniş tabanlı özel ölçülü palet; ürün ölçüsünü bildirin." },
      { q: "Kırılgan ürünlerde ne yapmalıyım?", a: "Sandık ya da özel koruma düşünün." },
      { q: "Küçük adetli alım yapılır mı?", a: "Evet." },
      { q: "Eski paletlerimi alır mısınız?", a: "Evet. Fotoğraf ve adetle değerlendirilir." },
      { q: "Palet üzerine ne kadar yükseklikte yük konur?", a: "Yük cinsine, aracın ve rafın izin verdiği yüksekliğe göre değişir. Palet yüksekliği rehberimizde genel çerçeve anlatılıyor." },
    ],
  },

  "gungoren-palet": {
    blurb: "Güngören ve Merter’in tekstil, konfeksiyon, matbaa ve depo işletmelerine Euro, ikinci el ve plastik palet.",
    answer:
      "Güngören ve Merter, İstanbul Avrupa yakasında tekstil, konfeksiyon, matbaa ve depo işletmelerinin yoğun olduğu bir üretim ve ticaret bölgesidir. Bu işletmelere Euro, ikinci el ve plastik palet sağlıyor; atölye ve depolardaki hurda paletleri yerinden alıyoruz.",
    zones: ["Merter", "Güneştepe", "Tozkoparan", "Haznedar", "Mareşal Çakmak", "Genç Osman"],
    nearby: ["bagcilar-palet", "bahcelievler-palet", "zeytinburnu-palet", "kucukcekmece-palet", "istanbul-palet", "esenler-palet"],
    sections: [
      {
        h: "Merter: tekstil ve ticaret merkezi",
        p: [
          "Merter, Türkiye’nin tekstil ve hazır giyim ticaretinde kilit adreslerden biridir. Merter ve Güngören’de iç içe geçmiş fabrikalar, atölyeler, showroomlar ve depolar; kumaş, aksesuar ve mamul ürün akışının merkezidir. Matbaa ve ambalaj işletmeleri de bölgede yoğun şekilde çalışır.",
          "Tekstilde sevkiyat sık, parti küçük ve sezonluk dalgalıdır: koleksiyon dönemlerinde hacim artar, sezon arasında düşer.",
        ],
        links: [L.gEticaret, bolge("esenler-palet", "Esenler")],
      },
      {
        h: "Koleksiyon dönemi: palet planlaması",
        list: [
          "Sezon öncesi (koleksiyon çıkış dönemi) sevkiyat hacmi yükselir; paleti önceden stoklamak son dakika sıkışıklığını önler.",
          "Hazır giyim kolisi hafif olduğundan ince ya da yarım palet yeterlidir.",
          "Askılı taşıma gerektiren ürünlerde palet yerine özel çözümler gerekebilir.",
          "Sezon arası dönemde birikmiş paletleri çıkarmak depo alanını rahatlatır.",
        ],
        links: [L.ince, L.ikinciEuro, L.rMaliyet],
      },
      {
        h: "Matbaa ve diğer işletmeler",
        table: {
          caption: "Güngören ve Merter’de palet eşleşmesi",
          head: ["İşletme", "Palet", "Not"],
          rows: [
            ["Hazır giyim", "İnce, ikinci el Euro", "Hafif koli"],
            ["Kumaş deposu", "Temiz Euro, sıfır", "Leke ve kıymık"],
            ["Matbaa", "Kuru, düz tabanlı Euro", "Kâğıt ağırlığı ve nem"],
            ["Genel depo", "İkinci el Euro", "Raf uyumu"],
          ],
        },
        links: [L.euro, L.sifir],
      },
      {
        h: "Sevkiyat",
        p: [
          "Merter ve Güngören’de dar sokaklar, yoğun yaya ve araç trafiği teslimatı etkiler. İş yoğunluğunun az olduğu saat dilimi teslim için daha uygundur. Adres, bina yükleme durumu ve boşaltma yöntemini siparişte yazın.",
        ],
        steps: [
          "Mahalle, cadde ve bina bilgisini yazın.",
          "Palet türü ve adedine göre teklif alın.",
          "Teslim penceresini seçin.",
          "Teslimde sayım yapılır.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Sezon sonu palet",
        p: [
          "Koleksiyon sevkiyatı bittiğinde depoda kalan boş paletler alan işgal eder. Palet türü ve adedini bildirerek değerlendirme alabilirsiniz.",
        ],
        links: [L.hurda, L.yerinde],
      },
      {
        h: "Askılı ve katlı ürün için ambalaj",
        p: [
          "Hazır giyimde ürünler her zaman koli ile taşınmaz; askılı sevkiyat da yaygındır. Askılı taşıma için palet yerine askı arabaları veya özel kasalar kullanılır. Palet yalnızca koli ve rulo gibi katlı ürünlerde devreye girer.",
          "Hangi yük türünde palet kullanılacağını netleştirmek, gereksiz palet alımını önler.",
        ],
        links: [L.secici],
      },
    ],
    faq: [
      { q: "Hazır giyim kolisi için hangi palet?", a: "İnce ya da ikinci el Euro palet yeterlidir." },
      { q: "Sezon öncesi stok yapılabilir mi?", a: "Evet. Dönemlik adet çerçevesiyle teklif alabilirsiniz." },
      { q: "Dar sokağa araç girer mi?", a: "Adres erişimine göre uygun araç planlanır." },
      { q: "Sezon sonrası kalan paletleri alıyor musunuz?", a: "Evet." },
      { q: "Askılı ürünler için palet gerekir mi?", a: "Genelde hayır; askılı taşıma özel ekipman gerektirir. Palet, koli ve rulo gibi katlı ürünler için uygundur." },
    ],
  },
};
