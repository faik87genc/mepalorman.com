import { L, bolge, type RegionContent } from "./regions-build";

// Parti 2: Tuzla çevresi ve İstanbul Anadolu yakası güney-batı hattı.
export const regionContent2: Record<string, RegionContent> = {
  "tuzla-palet": {
    blurb: "Tuzla’nın deri, kimya, tersane ve metal tesislerine ağır yüke uygun palet; hurda palet alımı.",
    answer:
      "Tuzla; deri, kimya, tersane ve metal işleme tesislerinin yoğunlaştığı, İstanbul’un Gebze’ye en yakın sanayi ilçelerinden biridir. Bu işletmelerin ağır, sıvı ya da uzun yüklerine uygun Euro, 100x120, takozlu ve özel ölçülü palet sağlıyor; tesislerde biriken hurda paletleri yerinden alıyoruz.",
    zones: ["Tuzla Deri OSB", "Tuzla Kimya Sanayicileri OSB", "Tuzla Tersaneler Bölgesi", "Aydınlı", "Orhanlı", "İçmeler", "Postane"],
    nearby: ["aydinli-palet", "orhanli-palet", "icmeler-palet", "sekerpinar-palet", "pendik-palet", "cayirova-palet"],
    sections: [
      {
        h: "Tuzla’nın sanayi dokusu",
        p: [
          "Tuzla tek tip bir sanayi ilçesi değildir; üç farklı karakter yan yana durur. Deri OSB’de deri işleme ve ürün üretimi, Kimya Sanayicileri OSB’de kimyasal üretim ve depolama, sahil şeridinde ise tersaneler ve gemi yan sanayisi yer alır. Bunların dışında kalan mahallelerde metal atölyeleri ve depolar sıralanır.",
          "Bu karışım palet ihtiyacını da üçe böler: nemli ve hijyenik ortam isteyen üretim, sıvı ve toz kimyasal yükler ile ağır, uzun ve düzensiz gemi malzemesi. Her biri için palet seçimi farklı gerekçelerle yapılır.",
        ],
        links: [L.gKimya, L.takozlu, L.ozel],
      },
      {
        h: "Alt bölgeye göre palet ihtiyacı",
        table: {
          caption: "Tuzla’da bölgeye göre tipik yük ve palet",
          head: ["Alan", "Tipik yük", "Uygun palet"],
          rows: [
            ["Deri OSB", "Deri balyaları, kimyasal bidonlar, mamul ürün", "Nemden etkilenmeyen plastik ya da kuru ve temiz ahşap palet"],
            ["Kimya OSB", "Bidon, varil, IBC, torba", "100x120 ve plastik palet; yük etiketlerine göre malzeme seçimi"],
            ["Tersane çevresi", "Boru, levha, ekipman, sarf malzeme", "Takozlu, kalın tahtalı ve özel ölçülü palet"],
            ["Metal atölyeleri", "Parça kasaları, profil", "İkinci el Euro ya da özel ölçü"],
          ],
        },
        links: [L.p100, L.plastik, L.rKapasite],
      },
      {
        h: "Sevkiyat ve erişim",
        p: [
          "Tuzla’da teslim noktasının OSB içinde mi, tersane sahasında mı yoksa dağınık sanayi alanında mı olduğu, araç tipi ve izin sürecini belirler. Tersane ve kimya sahalarında genellikle kimlik ve araç bildirimi gerekir; siparişte bu bilgileri vermeniz giriş aşamasında zaman kaybını önler.",
          "Ağır ve uzun paletlerin taşınmasında araç boyu ve boşaltma ekipmanı önemlidir; forklift kapasitesini ve boşaltma alanını bildirmeniz yeterlidir.",
        ],
        steps: [
          "Teslim noktası türünü (OSB, tersane, atölye) ve giriş kuralını belirtin.",
          "Palet tipi, ölçüsü ve adedi ile birlikte yük ağırlığını yazın.",
          "Teklifte araç tipi ve boşaltma koşulları netleşir.",
          "Teslimde sayım yapılır, irsaliye ve fatura düzenlenir.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Kimyasal ve nemli ortamda dikkat",
        list: [
          "Sıvı yükü olan hatta sızıntı ihtimalini düşünün; ahşap palet sıvıyı emer ve temizlenemez, plastik palet silinebilir.",
          "Deri ve nemli ortamda ahşap palet küflenebilir; kuru depolama ve düzenli kontrol gerekir.",
          "Gemi ekipmanında ağırlık palete eşit dağılmıyorsa orta destekli ya da takozlu yapı seçin.",
          "Palet üzerindeki yük etiketleri ve SDS bilgileri depolama yönetmeliğine uygun olmalıdır.",
        ],
        links: [L.rAhsapPlastik, L.rPlastikCesit],
      },
      {
        h: "Tuzla’da kullanılmayan palet",
        p: [
          "Tersane ve metal tesislerinde ağır yükle ezilmiş, yağ ve boya bulaşmış paletler birikir. Kirlilik türü, alım ve geri dönüşüm kararını etkiler; bu yüzden talepte paletin yağ, boya ya da kimyasal bulaşıp bulaşmadığını yazmak gerekir. Temiz ama kırık paletler ise tamir ya da geri dönüşüm için değerlendirilir.",
        ],
        links: [L.hurda, L.hasarli, L.rKirik],
      },
    ],
    faq: [
      { q: "Tersaneye giden ağır yük için hangi palet uygun?", a: "Takozlu ve kalın tahtalı palet, yük ağırlığına göre özel ölçülü yapılabilir. Yükün ağırlığını ve ölçüsünü iletmeniz yeterlidir." },
      { q: "Kimya OSB’de plastik palet mi ahşap palet mi?", a: "Sızıntı ve temizlik açısından plastik palet daha güvenlidir. Ürününüzün güvenlik bilgi formuna göre karar vermenizi öneririz." },
      { q: "Deri OSB’deki nemli depoda ahşap palet kullanılır mı?", a: "Kuru depolandığı sürece kullanılır, ancak nemli ortamda plastik palet daha uzun ömürlüdür." },
      { q: "Tuzla’dan hurda palet alıyor musunuz?", a: "Evet. Kirlilik durumunu belirterek fotoğraf ve adet gönderirseniz değerlendirme yapılır." },
      { q: "Sevkiyat için tesis giriş bilgisi gerekir mi?", a: "OSB ve tersane gibi kontrollü girişlerde plaka ve sürücü bilgisi gerekir. Siparişle birlikte iletmeniz süreci hızlandırır." },
    ],
  },

  "aydinli-palet": {
    blurb: "Tuzla Aydınlı’nın kimya, tersane ve metal işletmelerine 100x120, plastik, takozlu ve özel ölçülü palet.",
    answer:
      "Aydınlı, Tuzla’nın Gebze tarafındaki kesiminde Kimya Sanayicileri OSB ve tersane bölgesine yakın bir mahalledir. Bölgedeki kimya, tersane ve metal işletmelerine 100x120, plastik, takozlu ve özel ölçülü palet sağlıyor; tesislerde biriken hurda paletleri yerinden alıyoruz.",
    zones: ["Tuzla Kimya Sanayicileri OSB", "Tuzla Tersaneler Bölgesi", "Aydınlı Mahallesi"],
    nearby: ["tuzla-palet", "orhanli-palet", "icmeler-palet", "sekerpinar-palet", "pendik-palet"],
    sections: [
      {
        h: "Aydınlı’yı ayıran özellikler",
        p: [
          "Aydınlı, Tuzla’nın diğer mahallelerinden iki açıdan ayrılır: kimya OSB’ye ve tersane şeridine aynı anda komşudur. Bu yüzden aynı sokaktaki iki işletme, biri boya bidonu diğeri gemi boru parçası taşıyor olabilir. Palet ihtiyacı da buna göre keskin biçimde ayrışır.",
          "Kimya tarafında standardize, tekrar edilen yükler ve düzenli sipariş beklenir. Tersane yan sanayisinde ise iş bazlı, her seferinde farklı ölçüde palet gerekir. Bu fark sipariş sıklığını ve teklif yapısını belirler.",
        ],
        links: [bolge("tuzla-palet", "Tuzla"), L.gKimya],
      },
      {
        h: "Kimya OSB işletmeleri için",
        list: [
          "Bidon ve varil yüklerinde 100x120 palet tabanı daha dengeli yük dağılımı sağlar.",
          "IBC tank için tank modeline uygun ölçü teyit edilmelidir.",
          "Sızıntı riski olan hatlarda yıkanabilir plastik palet, temizlik denetimini kolaylaştırır.",
          "İstif yüksekliği artıyorsa alt tahta kalınlığı ve orta destek önem kazanır.",
        ],
        links: [L.p100, L.plastik, L.rKapasite],
      },
      {
        h: "Tersane yan sanayisi için",
        p: [
          "Tersane yan sanayisinde palet çoğu zaman bir ambalaj değil, bir işçilik aracıdır: ağır parçalar palete konup forkliftle gemi bloğuna taşınır. Bu tür kullanımda paletin dayanıklılığı, taşıma ağırlığı ve forklift çatalının girebileceği yükseklik kritik özellikler olur.",
          "Çoğu zaman standart palet yetmez; yük ağırlığına göre daha kalın tahtalı, takozlu, hatta özel ölçüde üretim gerekir. Ölçüyü ve ağırlığı baştan bildirmek, doğru ürünü ilk seferde teslim etmeyi sağlar.",
        ],
        links: [L.takozlu, L.ozel, L.rKg],
      },
      {
        h: "Sipariş ve teslim",
        p: [
          "Aydınlı’ya sevkiyatta tesis giriş kuralı ve araç ölçüsü planlamada öne çıkar. Kimya OSB’de kayıtlı araç ve sürücü bilgisi, tersane sahasında ise çalışma izni ya da kimlik bildirimi istenebilir. Bu bilgilerin sipariş aşamasında verilmesi, teslim günü sorun yaşamamanızı sağlar.",
        ],
        steps: [
          "Palet türü, ölçüsü ve yük ağırlığını bildirin.",
          "Giriş kuralı için gereken kimlik ve plaka bilgisini iletin.",
          "Teklifteki teslim koşullarını onaylayın.",
          "Teslimde sayım ve kontrol birlikte yapılır.",
        ],
        links: [L.surec, L.teklif],
      },
      {
        h: "Hurda ve fazla palet",
        p: [
          "Kimyasal bulaşmış paletler, kimya tesislerinde ayrı bir konudur ve her palet geri dönüşüme uygun olmayabilir. Kimyasal bulaşma yoksa kırık paletler yerinde sınıflandırılıp alınabilir. Talepte bulaşma durumunu belirtin; fotoğraf ve adet bilgisiyle ön değerlendirme yapılır.",
        ],
        links: [L.hurda, L.hasarli],
      },
      {
        h: "Sızıntı havuzu ve palet",
        p: [
          "Kimyasal depolama yönetmelikleri, bidon ve IBC altında sızıntı toplama düzeni ister. Bu düzen çoğu zaman plastik ya da metal sızıntı paletleriyle sağlanır. Ahşap paletin sızıntı havuzuna uygun olup olmadığı, ürünün tehlike sınıfına bağlıdır.",
          "Ürün güvenlik bilgi formunuzu ve yönetmelik gereğini öğrenip palet seçimini buna göre yapmanızı öneririz.",
        ],
        links: [L.plastik, L.rPlastikCesit],
      },
    ],
    faq: [
      { q: "Kimya OSB’deki tesise IBC için hangi palet uygun?", a: "IBC modeline göre ölçü teyit edilir; çoğunlukla 100x120 palet kullanılır. Model bilgisini paylaşırsanız doğrulama yapılır." },
      { q: "Tersane malzemesi için özel ölçü palet üretiliyor mu?", a: "Evet. Ölçü ve ağırlık bilgisiyle özel ölçülü palet teklifi hazırlanır." },
      { q: "OSB girişi için hangi bilgiler gerekir?", a: "Araç plakası ve sürücü bilgisi genellikle yeterlidir. Tesisinizin kendi kuralına göre ek bilgi istenebilir." },
      { q: "Kimyasal kalıntılı paletleri alıyor musunuz?", a: "Kalıntı türüne bağlıdır. Talepte bunu belirtirseniz uygunluk değerlendirilir." },
      { q: "Sızıntı paleti satıyor musunuz?", a: "Plastik palet çeşitlerimizi inceleyebilirsiniz; özel sızıntı havuzu gereksiniminiz için ürün ve yönetmelik bilgisini paylaşın." },
    ],
  },

  "orhanli-palet": {
    blurb: "Tuzla Orhanlı’nın Deri OSB, metal ve imalat işletmelerine Euro, plastik, ikinci el ve özel ölçülü palet.",
    answer:
      "Orhanlı, Tuzla’nın Çayırova ve Şekerpınar tarafına bakan kesiminde, Deri OSB’nin yer aldığı mahalledir. Deri işleme, metal ve imalat işletmelerine Euro, plastik, ikinci el ve özel ölçülü palet sağlıyor; tesislerde biriken hurda paletleri yerinden alıyoruz.",
    zones: ["Tuzla Deri OSB", "Orhanlı Mahallesi", "Şekerpınar sınırı"],
    nearby: ["tuzla-palet", "sekerpinar-palet", "cayirova-palet", "dilovasi-palet"],
    sections: [
      {
        h: "Deri OSB çevresinin palet ihtiyacı",
        p: [
          "Tuzla Deri OSB, deri işleme ve deri ürünleri üretimi için kurulmuş, İstanbul’un merkezindeki deri tesislerinin bir kısmını bir araya toplayan sanayi alanıdır. Deri sektörü yoğun nem, kimyasal ve kokulu ortamlarla çalışır; palet de bu ortamdan doğrudan etkilenir.",
          "Ham ve yarı mamul deri çoğunlukla balyalar ya da yığınlar halinde taşınır; bitmiş ürünler ise koli ve kutuya girer. Bu iki aşamada palet beklentisi de iki farklıdır: biri dayanıklılık, diğeri temizlik ve koku.",
        ],
        links: [bolge("tuzla-palet", "Tuzla"), L.rAhsapPlastik],
      },
      {
        h: "Orhanlı’da tipik eşleştirmeler",
        table: {
          caption: "Orhanlı işletmeleri için palet önerileri",
          head: ["İşletme", "Palet", "Not"],
          rows: [
            ["Deri işleme", "Plastik ya da kuru, temiz ahşap palet", "Nem ve kimyasal temas riski"],
            ["Deri ürünü ve aksesuar üretimi", "Sıfır ya da temiz ikinci el Euro", "Mamul ürüne koku ve leke geçmemeli"],
            ["Metal ve imalat atölyesi", "İkinci el Euro, takozlu", "Parça ağırlığına göre"],
            ["Lojistik ve depo", "Sınıflandırılmış ikinci el Euro", "Raf uyumu"],
          ],
        },
        links: [L.sifir, L.ikinciEuro, L.plastik],
      },
      {
        h: "Koku, nem ve temizlik",
        list: [
          "Boyalı ya da kimyasal kokulu paletler, deri ürünü gibi kokuyu emen ürünler için uygun değildir.",
          "Ahşap palet nem aldığında küflenebilir; kuru ve havadar depolama ömrünü uzatır.",
          "Plastik palet yıkanabildiği için hijyen gerektiren üretim alanlarında tercih edilir.",
          "İkinci el palette kokusu ve lekesi olanlar ayıklanmalıdır.",
        ],
        links: [L.rIkinciEl, L.rSinif],
      },
      {
        h: "Orhanlı sevkiyatı",
        p: [
          "Orhanlı, Şekerpınar ve Çayırova bağlantı yollarına yakın olduğu için sevkiyat planlaması bu çevredeki diğer siparişlerle birlikte yapılabilir. Dar ya da park kısıtı olan sokaklarda araç boyutu önemlidir; siparişte erişim bilgisini yazmanız yeterli.",
        ],
        steps: [
          "Palet ve adet bilgisini, teslim adresini ve erişim koşulunu iletin.",
          "Teklifteki ürün ve teslim koşulunu inceleyin.",
          "Onay sonrası sevkiyat planlanır.",
          "Teslimde sayım yapılarak irsaliye düzenlenir.",
        ],
        links: [L.surec, bolge("sekerpinar-palet", "Şekerpınar")],
      },
      {
        h: "Orhanlı’dan palet alımı",
        p: [
          "Deri ve metal işletmelerinde biriken hurda palet çoğunlukla nemden çürümüş ya da kimyasaldan etkilenmiş olur. Bu paletlerin durumu, alım ve geri dönüşüm kararını doğrudan etkiler. Fotoğraf göndermeniz, kullanılabilir ve kullanılamaz paletleri ayırmamıza yardımcı olur.",
        ],
        links: [L.hurda, L.kirik, L.degerleme],
      },
      {
        h: "Hijyen denetimi ve palet",
        p: [
          "Deri ürünü ve aksesuar üreticileri için müşteri denetimleri, depo hijyenini de kapsar. Paletlerin lekesiz, kokusuz ve düzenli olması beklenir. Denetim öncesi paletleri gözden geçirip uygunsuz olanları ayırmak, denetim riskini azaltır.",
          "Sürekli denetime tabi alanlarda sıfır ya da plastik palet, ikinci el seçeneğe göre daha güvenlidir.",
        ],
        links: [L.sifir, L.hijyenik],
      },
    ],
    faq: [
      { q: "Deri ürünü sevkiyatı için hangi palet daha güvenli?", a: "Koku ve leke geçmemesi için sıfır ya da çok temiz palet ya da plastik palet daha güvenlidir." },
      { q: "Nemli depolarda palet ne kadar dayanır?", a: "Ahşap palet nemli ortamda daha çabuk bozulur; plastik palet nem ve yıkamaya dayanıklıdır." },
      { q: "Orhanlı’ya küçük adetli teslimat mümkün mü?", a: "Evet. Adet ve adres bilgisiyle teklif alabilirsiniz; teslim koşulları teklifte netleşir." },
      { q: "Çürümüş paletleri alıyor musunuz?", a: "Durumuna göre değerlendirilir; fotoğraf göndermeniz yeterlidir." },
      { q: "Müşteri denetiminde palet ne kadar önemli?", a: "Denetimlerde depo düzeni ve palet temizliği sorulabilir. Hijyen kuralı olan alanlarda sıfır ya da plastik palet önerilir." },
    ],
  },

  "icmeler-palet": {
    blurb: "Tuzla İçmeler’in tersane, metal, lojistik ve depo işletmelerine Euro, takozlu, plastik ve ikinci el palet.",
    answer:
      "İçmeler, Tuzla’nın sahil kesiminde tersane yan sanayisi, metal atölyeleri ve küçük depoların bulunduğu bir mahalledir. Bu işletmelere Euro, takozlu, plastik ve ikinci el palet sağlıyor; atölye ve depolarda biriken hurda paletleri yerinden alıyoruz.",
    zones: ["İçmeler Mahallesi", "Tuzla Tersaneler Bölgesi", "Postane"],
    nearby: ["tuzla-palet", "pendik-palet", "kartal-palet", "sekerpinar-palet", "aydinli-palet"],
    sections: [
      {
        h: "Kıyı şeridinde palet kullanımı",
        p: [
          "İçmeler, denizle iç içe bir sanayi bölgesidir. Tersane malzemesi tedarik eden firmalar, boya ve kaynak sarf malzemesi satan depolar, makine bakımı yapan küçük atölyeler ve kargo dağıtım noktaları burada yan yana çalışır. Hava nemi yüksektir, bu da palet ömrünü doğrudan etkiler.",
          "Bu çevrede palet seçerken çürümeye ve paslanmaya karşı dayanıklılık, ilk sırada gelir. Açık havada bekleyen bir ahşap palet birkaç ay içinde bozulur; kapalı alanda ise uzun süre kullanılabilir.",
        ],
        links: [bolge("tuzla-palet", "Tuzla"), L.rOmur],
      },
      {
        h: "İşletme tiplerine göre öneri",
        table: {
          caption: "İçmeler’de tipik kullanım ve palet",
          head: ["Alan", "Palet", "Not"],
          rows: [
            ["Tersane malzeme tedariki", "Takozlu, kalın tahtalı palet", "Ağır boru ve levha yükü"],
            ["Boya, kaynak, sarf malzeme", "100x120 veya Euro palet", "Kutu ve bidon istifi"],
            ["Küçük lojistik depo", "80x120 Euro palet", "Raf ve araç uyumu"],
            ["Nemli kıyı ortamı", "Plastik palet", "Neme ve çürümeye dayanıklı"],
          ],
        },
        links: [L.takozlu, L.plastik, L.euro],
      },
      {
        h: "Depolama ve istif",
        list: [
          "Paletleri doğrudan zemine değil, kuru bir alt tabana koyun.",
          "Dışarıda tutulacaksa örtü ve yan havalandırma gerekir.",
          "Yağ ve boya bulaşmış paletleri temiz paletlerden ayrı istifleyin.",
          "Ağır yüklü paletleri üst üste yığmak yerine tek sıra tutun.",
        ],
        links: [L.rIstif, L.rKapasite],
      },
      {
        h: "Sevkiyat ve erişim",
        p: [
          "İçmeler’de sahil yoluna bağlanan sokaklar dar olabilir; büyük araç girişi her adreste mümkün olmaz. Aracın ulaşabileceği noktayı, mesai saatini ve boşaltma yöntemini siparişte belirtmeniz, ek sefer ihtimalini azaltır. Küçük ve tekrarlayan partiler için periyodik teslimat da planlanabilir.",
        ],
        links: [L.surec, L.turkiye, L.teklif],
      },
      {
        h: "Atölyede biriken paletler",
        p: [
          "Küçük atölye ve depolarda kırık paletler çoğunlukla bahçe kenarında yığılır. Bunlar hem alan hem yangın riski demektir. Yağ ve boya bulaşıp bulaşmadığını belirterek adet ve fotoğraf gönderirseniz, alım için ön değerlendirme yaparız.",
        ],
        links: [L.hurda, L.yerinde],
      },
      {
        h: "Pas, yağ ve palet",
        p: [
          "Tersane ve metal tedarikinde paletler pas, yağ ve boyayla kirlenir. Kirli paletle taşınan yeni ürün de lekelenebilir. Ürün temizliği önemliyse paletler düzenli kontrol edilmeli ve kirli olanlar ayrılmalıdır.",
          "Yağlı ahşap palet, yangın yükü bakımından da dikkat gerektirir.",
        ],
        links: [L.rIkinciEl, L.rSinif],
      },
    ],
    faq: [
      { q: "Tersane malzemeleri için hangi palet dayanır?", a: "Ağır ve uzun yük için takozlu, kalın ya da özel ölçülü palet gerekir. Yük ağırlığını ve ölçüsünü bildirin." },
      { q: "Kıyıdaki nemli depo için plastik palet mantıklı mı?", a: "Evet. Neme ve çürümeye dayanıklı olduğu için nemli ortamda uzun ömürlü seçimdir." },
      { q: "İçmeler’den hurda palet alıyor musunuz?", a: "Evet. Adet, tür ve adresle iletirseniz alım planlanır." },
      { q: "Küçük adetli ve tekrarlayan sipariş olur mu?", a: "Evet. Tekrarlayan ihtiyaçlar için periyodik sevkiyat planlanabilir; koşullar teklifte bildirilir." },
      { q: "Yağlı palet tekrar kullanılabilir mi?", a: "Ürününüz yağ ve lekeye duyarlı değilse kullanılabilir; aksi halde ayrılmalıdır." },
    ],
  },

  "pendik-palet": {
    blurb: "Pendik ve Kurtköy sanayisi ile kargo ve lojistik işletmelerine Euro, ihracat ve plastik palet.",
    answer:
      "Pendik, İstanbul Anadolu yakasının güneydoğusunda sanayi alanları, kargo ve lojistik depoları ile havalimanı çevresi tesisleri barındırır. Bu işletmelere Euro, ikinci el, plastik ve ihracat paleti sağlıyor; depo ve atölyelerde biriken hurda paletleri yerinden alıyoruz.",
    zones: ["Kurtköy", "Yenişehir", "Çınardere", "Dolayoba", "Ahmet Yesevi", "Kaynarca"],
    nearby: ["kurtkoy-palet", "tuzla-palet", "kartal-palet", "sancaktepe-palet", "aydinli-palet", "icmeler-palet"],
    sections: [
      {
        h: "Pendik’te çok katmanlı ekonomi",
        p: [
          "Pendik; bir yanda küçük ve orta ölçekli sanayi siteleri, diğer yanda Kurtköy çevresinde kargo, lojistik ve havalimanı ile bağlantılı depo işletmeleriyle şekillenir. Metal, mobilya, yapı malzemesi ve gıda üretimi yapan firmalar da ilçenin farklı mahallelerine yayılmıştır.",
          "Bu yayılım, palet siparişlerinde tek bir kalıp oluşmasını engeller: bazı işletmeler tek bir büyük partiyle gelir, bazıları ise haftalık küçük partilerle çalışır. Esnek teslim planı bu yüzden önemlidir.",
        ],
        links: [bolge("kurtkoy-palet", "Kurtköy"), L.gEticaret],
      },
      {
        h: "Hangi işletmeye hangi palet",
        list: [
          "Kargo ve lojistik depoları: sınıflandırılmış ikinci el Euro palet ve düzenli yenileme.",
          "İhracat sevkiyatı yapan üreticiler: ISPM-15 damgalı palet; hedef ülke kurallarını önceden öğrenin.",
          "Mobilya ve yapı malzemesi: levha ve uzun ürün için özel ölçülü ya da takozlu palet.",
          "Gıda üretimi: sıfır ya da hijyenik plastik palet.",
        ],
        links: [L.ikinciEuro, L.ihracat, L.ozel, L.hijyenik],
      },
      {
        h: "Havalimanı ve kargo hattı",
        p: [
          "Havalimanı çevresindeki kargo ve ihracat depolarında palet beklentileri sıkıdır: ölçü toleransı, ağırlık ve belge uygunluğu denetime tabidir. Havayolu kargosunda kullanılan paletlerin ölçü ve ağırlık sınırları havayoluna ve ürüne göre değişir; bu konuda ilgili kargo firmasının gerekliliklerini teyit etmeniz gerekir.",
          "Biz yer taşımacılığı ve depolama için palet tedarik ediyoruz; hava kargo birimi (ULD) gibi özel ekipman satmıyoruz. Siparişte nereye gideceğini belirtirseniz uygun ürünü birlikte değerlendiririz.",
        ],
        links: [L.rIhracat, L.gIhracat],
      },
      {
        h: "Pendik’e sevkiyat",
        p: [
          "Pendik, geniş bir ilçe olduğu için teslim adresine göre planlama farklılaşır. Sanayi sitesi içinde ya da cadde üstü depoda teslimat, kimi zaman günün belirli saatlerine bağlı olabilir. Bu tür kısıtları baştan bildirirseniz araç ve sürücü buna göre yönlendirilir.",
        ],
        steps: [
          "Mahalle, site/cadde bilgisi ve boşaltma koşulunu bildirin.",
          "Palet tipi ve adedi ile teklifi alın.",
          "Onaydan sonra sevkiyat takvimi paylaşılır.",
          "Teslimde sayım ve irsaliye ile kayıt altına alınır.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Biriken ve kırık paletler",
        p: [
          "Lojistik işletmelerinde palet havuzu hızla yıpranır ve kullanılamaz hale gelen paletler kapı önünde birikir. Bunların hepsi çöp değildir; bir kısmı onarılarak havuza geri dönebilir. Türüne ve durumuna göre değerlendirme için fotoğraf gönderebilirsiniz.",
        ],
        links: [L.hurda, L.tamir, L.rTamir],
      },
      {
        h: "Lojistik palet havuzunu yönetmek",
        p: [
          "Lojistik işletmelerinde palet havuzu bir kez kurulur ve zamanla erir. Kırılan, kaybolan ve karışan paletler havuzu küçültür. Düzenli sayım, hasarlı paletin ayrılması ve belirli aralıklarla yenileme ile havuz kontrol altında tutulur.",
          "Havuzun yenilenmesi gerektiğinde ikinci el sınıflandırılmış palet çoğu zaman ekonomik çözümdür.",
        ],
        links: [L.rMaliyet, L.rSinif],
      },
    ],
    faq: [
      { q: "Havalimanı çevresindeki depoya palet sağlıyor musunuz?", a: "Evet, yer taşımacılığı ve depolama için palet sağlıyoruz. Havayolu kargosunun kendi ekipman kuralı varsa ilgili firmadan teyit edin." },
      { q: "İhracat paleti için hangi belge verilir?", a: "Isıl işlem damgalı palet temin edilir. Belge ihtiyacınızı sipariş sırasında belirtin." },
      { q: "Haftalık küçük partilerle çalışılabilir mi?", a: "Evet. Periyodik teslim için ürün ve adet çerçevesi teklifte belirlenir." },
      { q: "Mobilya için hangi palet uygun?", a: "Ürün ölçüsüne göre özel ölçülü ya da takozlu palet gerekebilir. Ölçü ve ağırlık bilgisi yeterlidir." },
      { q: "Palet havuzunu nasıl yenilemeliyim?", a: "Düzenli sayım yapıp hasarlı olanları ayırın, eksilen kısmı sınıflandırılmış ikinci el palet ile tamamlayın." },
    ],
  },

  "kurtkoy-palet": {
    blurb: "Pendik Kurtköy’deki üretim, kargo ve lojistik tesislerine Euro, ihracat ve ikinci el palet.",
    answer:
      "Kurtköy, Pendik’in havalimanına komşu mahallesidir ve sanayi, kargo ile lojistik tesislerinin yoğun olduğu bir çevreye sahiptir. Bu tesislere Euro, ikinci el, plastik ve ihracat paleti sağlıyor; depo ve üretim sahalarında biriken hurda paletleri yerinden alıyoruz.",
    zones: ["Kurtköy sanayi", "Sabiha Gökçen Havalimanı çevresi", "Yenişehir", "Çınardere"],
    nearby: ["pendik-palet", "tuzla-palet", "sancaktepe-palet", "sultanbeyli-palet"],
    sections: [
      {
        h: "Kurtköy’ün kendine özgü yapısı",
        p: [
          "Kurtköy, hızlı büyüyen bir ticaret ve sanayi koridorudur. Havalimanına komşu olması, kargo firmalarını, ihracat depolarını ve hava yolu ile ürün gönderen e-ticaret işletmelerini buraya çeker. Aynı çevrede makine, plastik ve tekstil üretimi yapan tesisler de bulunur.",
          "Palet talebi iki hızla ilerler: lojistik tarafında yüksek devirli, çabuk yıpranan palet; üretim tarafında ise daha seyrek ama daha spesifik palet ihtiyacı.",
        ],
        links: [bolge("pendik-palet", "Pendik"), L.gEticaret],
      },
      {
        h: "Lojistik ve ihracat depoları",
        list: [
          "Yüksek devirli depo: sınıflandırılmış ikinci el Euro palet, düzenli yenilemeyle maliyeti dengeler.",
          "İhracata giden yük: ISPM-15 damgalı palet, hedef ülke kuralına göre.",
          "Raflı sistem: ölçü toleransı sabit, alt tahtası sağlam palet.",
          "Konteynere yükleme: palet adedini önceden hesaplamak sevkiyat planını netleştirir.",
        ],
        links: [L.ikinciEuro, L.ihracat, L.konteyner, L.rRaf],
      },
      {
        h: "Üretim tesisleri için",
        p: [
          "Kurtköy’deki üretim tesisleri çoğunlukla kendi sevkiyat paletini kendisi belirler: makine üreticisi özel ölçü, plastik işleyen tesis Euro, tekstil üreticisi ise hafif ve temiz palet ister. Tekstil gibi temiz ürün taşıyan sektörlerde ahşap palet kıymık ve leke riski taşır; bu durumda sıfır ya da plastik palet tercih edilir.",
        ],
        links: [L.sifir, L.plastik, L.ozel],
      },
      {
        h: "Sevkiyat ve planlama",
        p: [
          "Kurtköy’de yoğun saatlerde trafik artabileceği için teslim saatini mümkünse sabah erken ya da trafik dışı bir pencereye almak planı kolaylaştırır. Teslim penceresi, depo vardiyası ve boşaltma yöntemi siparişte belirtilirse araç buna göre yönlendirilir.",
        ],
        links: [L.surec, L.toptan, L.nakliye],
      },
      {
        h: "Depo sonrası kalan paletler",
        p: [
          "Lojistik depolarda yenilenen palet havuzundan çıkan eski paletler çoğunlukla toplu halde bekler. Bunların durumu sınıflandırılarak onarılabilirler ayrılır, kalanı geri dönüşüme verilir. Adet ve fotoğraf bilgisi, ön değerlendirmeyi mümkün kılar.",
        ],
        links: [L.hurda, L.yerinde, L.rHurda],
      },
      {
        h: "Kargo ve havalimanı kaynaklı kısıtlar",
        p: [
          "Havalimanı bağlantılı sevkiyatlarda palet ölçüsü ve ağırlığı, taşıyıcının ve havayolunun kurallarına göre belirlenir. Bu kurallar firmadan firmaya değiştiğinden, palet satın almadan önce ilgili firmadan sınırları öğrenmek gerekir.",
          "Biz yer taşımacılığı ve depolama için palet sağlıyoruz; özel havacılık ekipmanı satmıyoruz.",
        ],
        links: [L.gIhracat, L.rIhracat],
      },
    ],
    faq: [
      { q: "E-ticaret deposu için hangi palet?", a: "Rafa uyan, sağlam alt tahtalı sınıflandırılmış ikinci el Euro palet çoğu depoda yeterlidir. Hijyen veya özel ürünlerde plastik palet düşünülebilir." },
      { q: "Konteynere kaç palet sığar?", a: "Palet ölçüsüne ve yüke göre değişir. Konteyner palet hesaplama aracından yaklaşık değer alabilirsiniz." },
      { q: "Sipariş sonrası teslim saatini seçebilir miyim?", a: "İstek olarak iletebilirsiniz; araç programına göre uygun pencere teklifte netleşir." },
      { q: "Depodaki eski paletleri alıyor musunuz?", a: "Evet. Fotoğraf ve adet bilgisiyle değerlendirme yapılır." },
      { q: "Havayolu kargosu için hangi palet?", a: "Havayolunun kendi kuralı vardır; önce firmadan öğrenin. Yer taşımacılığı ve depolama için palet sağlıyoruz." },
    ],
  },

  "kartal-palet": {
    blurb: "Kartal’ın ticaret, depo ve küçük üretim işletmelerine İstanbul Anadolu yakası palet teslimatı.",
    answer:
      "Kartal, İstanbul Anadolu yakasının güneydoğusunda yer alan, ticaret ağırlıklı bir ilçedir; küçük sanayi atölyeleri ve ticari depolar ilçenin çeşitli mahallelerinde dağılmıştır. Bu işletmelere Euro, ikinci el ve plastik palet sağlıyor; hurda ve kırık paletleri yerinden alıyoruz.",
    zones: ["Soğanlık", "Yakacık", "Cevizli", "Uğur Mumcu", "Karlıktepe", "Orhantepe", "Hürriyet"],
    nearby: ["pendik-palet", "maltepe-palet", "atasehir-kadikoy-palet", "sancaktepe-palet", "icmeler-palet"],
    sections: [
      {
        h: "Kartal’ın ticari yapısı",
        p: [
          "Kartal, ağır sanayiden çok ticaret, depolama ve küçük üretimle öne çıkan bir ilçedir. Mağazaların depolarını, toptan ticaret yapan firmaları, restoran ve gıda tedarikçilerini, yapı malzemesi satıcılarını ve dağıtım hizmeti veren işletmeleri görürsünüz.",
          "Bu işletmeler büyük OSB tesisleri kadar çok palet almaz, ama palet ihtiyaçları süreklidir. Bu nedenle esnek adet, basit teklif ve kolay teslim, Kartal siparişlerinin en önemli üç özelliğidir.",
        ],
        links: [L.gGida, L.gEticaret],
      },
      {
        h: "Ticari işletmeler için palet seçimi",
        table: {
          caption: "Kartal’da tipik işletme ve palet",
          head: ["İşletme", "Palet", "Not"],
          rows: [
            ["Toptan ticaret, mağaza deposu", "İkinci el Euro palet", "Raf ve araç yüklemesinde yeterli ve ekonomik"],
            ["Gıda tedarikçisi, restoran", "Sıfır ya da plastik palet", "Hijyen ve temizlik"],
            ["Yapı malzemesi satıcısı", "Takozlu ya da kalın palet", "Ağır ve kuru yük"],
            ["Küçük atölye", "İnce palet, yarım palet", "Hafif yük ve dar alan"],
          ],
        },
        links: [L.ikinciEuro, L.plastik, L.takozlu, L.ince],
      },
      {
        h: "Dar sokak ve site depoları",
        p: [
          "Kartal’ın birçok mahallesinde ticari depolar konut alanlarının içindedir. Büyük araç girişi zor olabilir, boşaltma için forklift bulunmayabilir ve teslim yalnızca belirli saatlerde yapılabilir. Bunlar önceden bildirilirse küçük araç, el transpaleti ya da elle indirme gibi seçenekler planlanır.",
          "Birkaç paletlik ihtiyaçlarda yükleme depomuzdan yapılabilir; büyük adetlerde ise adrese sevkiyat teklifle belirlenir.",
        ],
        steps: [
          "Adres, erişim koşulu ve boşaltma yöntemini yazın.",
          "Palet türü ve adedine göre teklif hazırlanır.",
          "Teslim penceresi konusunda uzlaşılır.",
          "Teslimde sayım yapılarak fatura düzenlenir.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Kartal’daki işletmeler için ipuçları",
        list: [
          "Sürekli alım yerine üç-dört aylık ihtiyacı bir arada almak, çoğu zaman daha esnek teslim sağlar.",
          "Ürün ağırlığı hafifse ince palet yeterlidir; gereğinden ağır palet maliyeti yükseltir.",
          "Açık alanda bekletilecek paletler için ahşap yerine plastik düşünülebilir.",
        ],
        links: [L.rMaliyet, L.secici],
      },
      {
        h: "Kartal’dan hurda palet",
        p: [
          "Ticari depolarda boşalan ve eski paletler çoğu zaman yığılıp kalır. Palet türünü, durumunu ve yaklaşık adedini paylaştığınızda, alım için ön değerlendirme yapılır.",
        ],
        links: [L.hurda, L.rNereye],
      },
      {
        h: "Mağaza deposunda palet rotasyonu",
        p: [
          "Mağaza deposu gibi alanı kısıtlı yerlerde paletler dolu ve boş döngüsünde dolaşır. Boş paletleri rastgele bir köşeye bırakmak, bir süre sonra yangın yükü ve güvenlik sorunu haline gelir. Boş paletleri belirli bir alanda, makul yükseklikte istiflemek ve periyodik olarak çıkarmak düzen sağlar.",
          "Boş palet fazlasını ayrı bir yazışmayla değerlendirebilirsiniz.",
        ],
        links: [L.rIstif, L.hurda],
      },
    ],
    faq: [
      { q: "Mağaza deposu için az sayıda palet alabilir miyim?", a: "Evet. Küçük adetli ihtiyaçlar için depodan yükleme ya da adrese teslim seçenekleri sunulur." },
      { q: "Boşaltmada forklift yoksa ne olur?", a: "Önceden bildirirseniz el transpaleti ya da elle indirme için uygun araç ve personel planlanır." },
      { q: "Restoran ve gıda tedarikçileri hangi paleti seçmeli?", a: "Hijyen için sıfır ya da plastik palet önerilir." },
      { q: "Hurda palet toplama ücretli mi?", a: "Koşullar palet türü, miktarı ve konuma göre değişir; teklifte netleşir." },
      { q: "Boş paletler nasıl istiflenir?", a: "Düz ve kararlı biçimde, makul yükseklikte ve yürüme yolunu kapatmadan istiflenmelidir." },
    ],
  },

  "maltepe-palet": {
    blurb: "Maltepe’deki depo, atölye ve küçük üretim tesislerine Euro, ikinci el ve plastik palet.",
    answer:
      "Maltepe, İstanbul Anadolu yakasında yoğun yerleşimli bir ilçedir; atölyeler, ticari depolar ve küçük üretim tesisleri konut alanlarının yanında yer alır. Bu işletmelere Euro, ikinci el ve plastik palet sağlıyor; atölye ve depolardaki hurda paletleri yerinden alıyoruz.",
    zones: ["Başıbüyük", "Cevizli", "Gülsuyu", "Zümrütevler", "Bağlarbaşı", "Esenkent"],
    nearby: ["kartal-palet", "atasehir-kadikoy-palet", "umraniye-palet", "sancaktepe-palet"],
    sections: [
      {
        h: "Maltepe’de palet kullanan işletmeler",
        p: [
          "Maltepe’de palet kullanımı genellikle küçük ve orta ölçekli işletmelerde görülür: mutfak ve gıda üreticileri, yapı ve tadilat malzemesi satıcıları, otomotiv yedek parça depoları, dağıtım noktaları ve atölyeler. Büyük sanayi sitelerinden farklı olarak, bu işletmelerde palet çoğu zaman bir iç lojistik aracı olarak kullanılır.",
          "Bu yüzden Maltepe taleplerinde çoğunlukla adet küçüktür ama ihtiyaç süreklidir. Esnek ve tekrarlanabilir bir sipariş düzeni, her seferinde sıfırdan teklif almaktan daha verimlidir.",
        ],
        links: [L.gGida, L.gOtomotiv],
      },
      {
        h: "Palet türünü işe göre seçmek",
        list: [
          "Yedek parça deposu: kutu ve koli ağırlığı orta düzeydedir; ikinci el Euro palet yeterlidir.",
          "Gıda üreticisi: ürün doğrudan palete temas ediyorsa sıfır ya da plastik palet düşünülmelidir.",
          "Tadilat ve yapı malzemesi: çimento, seramik gibi ağır yüklerde takozlu veya kalın tahtalı palet gerekir.",
          "Hafif yüklü küçük depo: ince palet ya da yarım palet alan açar.",
        ],
        links: [L.ikinciEuro, L.sifir, L.takozlu, L.ince],
      },
      {
        h: "Maltepe adreslerinde teslimat",
        p: [
          "Maltepe’nin bazı mahalleleri eğimli ve dar sokaklara sahiptir. Teslimat öncesinde sokak genişliği, park yeri ve boşaltma alanı konuşulmalıdır. Tır girişi mümkün değilse daha küçük araçla birden fazla sefer gerekebilir; bu bilgi teklifi ve teslim planını doğrudan etkiler.",
        ],
        steps: [
          "Adres ve erişim notlarını iletin (sokak genişliği, rampa, forklift).",
          "Teklif ve teslim koşulunu onaylayın.",
          "Araç ve personel planlanır.",
          "Sayım ve teslimle süreç tamamlanır.",
        ],
        links: [L.surec, L.nakliye, L.teklif],
      },
      {
        h: "Birikmiş paletlerde yol haritası",
        p: [
          "Bir işletme küçülünce, taşınınca ya da ürün değiştirince elinde kullanım dışı kalan palet yığınları oluşur. Bu paletler sadece yer kaplamaz; yangın ve çürüme açısından da sorun çıkarır. Önce fotoğraf, adet ve palet türüne göre ön değerlendirme alın; uygun olanlar alınır ya da onarılır.",
        ],
        links: [L.hurda, L.tamir, L.degerleme],
      },
      {
        h: "Teklif için hazırlık",
        p: [
          "Teklifi hızlandırmanın en kolay yolu, WhatsApp mesajına şu bilgileri koymaktır: palet türü, ölçü, adet, teslim adresi ve boşaltma yöntemi. Birkaç fotoğraf eklerseniz özellikle özel ölçülü ya da ikinci el taleplerde süre kısalır.",
          "Eksik bilgi kalırsa soru sorarız; hazırlıksız başlamanız sorun değil.",
        ],
        links: [L.rTeklif, L.teklif],
      },
    ],
    faq: [
      { q: "Maltepe’ye az sayıda palet teslim ediyor musunuz?", a: "Adet ve adrese göre teslim planlanır; küçük adetler için depodan alım da mümkündür." },
      { q: "Tadilat işi için hangi palet uygun?", a: "Ağır malzemeler için takozlu veya kalın tahtalı palet tercih edilir." },
      { q: "Taşınma sonrası paletlerimi alır mısınız?", a: "Evet. Tür, durum ve adedi paylaşın; değerlendirme sonrası yükleme planlanır." },
      { q: "Siparişte nelere dikkat etmeliyim?", a: "Ölçü, adet, teslim adresi ve boşaltma koşulunu yazın; eksik olan bilgiyi birlikte tamamlarız." },
      { q: "Teklif için hangi bilgiler gerekli?", a: "Palet türü, ölçü, adet, adres ve boşaltma yöntemi yeterlidir." },
    ],
  },
};
