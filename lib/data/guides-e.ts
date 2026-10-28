import type { Guide } from "@/lib/types";

// Satıcı ve alıcı karar rehberleri (week: 30-33)
export const guidesE: Guide[] = [
  {
    slug: "hurda-palet-nereye-satilir",
    title: "Hurda Palet Nereye Satılır? Adım Adım Süreç | MEPAL",
    description: "Hurda palet nereye satılır, kim alır, satmadan önce ne hazırlanır? Ayrıştırma, fotoğraf, yerinde değerlendirme ve yükleme sürecinin tamamı.",
    h1: "Hurda Palet Nereye Satılır? Satıcı İçin Adım Adım Süreç",
    answer:
      "Hurda palet; palet alım-satımı yapan firmalara, ahşap atık geri dönüşümü yapan işletmelere ve ahşap hammadde kullanan tesislere satılır. En iyi sonuç için paletleri önce sağlam, tamirlik ve gerçek hurda diye ayırın, fotoğraf ve adetle teklif isteyin, yükleme koşullarını baştan netleştirin.",
    keyword: "hurda palet nereye satılır",
    art: "scrap",
    published: "2026-10-28",
    updated: "2026-10-28",
    week: 30,
    readMinutes: 7,
    related: ["hurda-paletinizi-nasil-degerlendirirsiniz", "ahsap-palet-geri-donusum", "hasarli-ve-kirik-palet-ne-yapilir", "palet-kalite-siniflari", "palet-tamiri-ne-zaman-yapilir"],
    sections: [
      {
        h: "Hurda palet kimlere satılır?",
        p: [
          "Depoda biriken kırık ve çürük paletler için temelde üç tür alıcı vardır. Birincisi palet alım-satımı yapan firmalardır; bunlar yığın içindeki sağlam ve tamirlik paletleri ayırıp yeniden dolaşıma sokar, kalanını geri dönüşüme verir. İkincisi ahşap atığı toplayıp işleyen geri dönüşüm işletmeleridir. Üçüncüsü ise talaş, yonga ve kereste artığı gibi ahşap hammaddeyi kullanan üretim tesisleridir.",
          "Sıradan bir hurdacıya veya tek seferlik bir alıcıya satış mümkündür; ama parti karışıksa (içinde sağlam palet de varsa) paletin gerçek değerini ancak sınıflama yapabilen bir palet firması fiyata yansıtabilir. Bu yüzden önce kime sattığınızdan çok, partinizin içinde ne olduğunu bilmeniz önemlidir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Palet alım satım", "/hizmetler/palet-alim-satim/"]],
      },
      {
        h: "Satmadan önce paletleri üç gruba ayırın",
        table: {
          caption: "Palet durumuna göre satış yolu",
          head: ["Grup", "Palet durumu", "Genel satış yolu"],
          rows: [
            ["Sağlam", "Tahta ve takozlar eksiksiz, düz duruyor", "İkinci el palet olarak satılır; ölçü ve sınıfa göre değerlenir"],
            ["Tamirlik", "Birkaç tahta kırık, takozlar ve kirişler sağlam", "Onarılıp yeniden satılmak üzere alınır"],
            ["Hurda", "Parçalanmış, çürük, kirişi kırık", "Ahşap atık olarak geri dönüşüme gider"],
          ],
        },
        p: [
          "Aynı yığının içinde farklı değerde üç grup bulunur. Ayırmak, hem teklifi yükseltir hem de pazarlığı netleştirir.",
          "Bu üç grubu fiilen ayıramıyorsanız bile yığının yaklaşık oranını tahmin etmeniz yeterlidir. “Yarısına yakını sağlam” ile “tamamı kırık” iki çok farklı teklif demektir.",
        ],
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"], ["Hasarlı ve kırık palet ne yapılır?", "/rehber/hasarli-ve-kirik-palet-ne-yapilir/"]],
      },
      {
        h: "Satış süreci: fotoğraftan yüklemeye",
        steps: [
          "Paletleri mümkünse gruplara ayırıp ayrı istiflere koyun.",
          "Streç, çember, karton ve ürün artıklarını temizleyin; yağ veya kimyasal bulaşmış paletleri ayrı not edin.",
          "Yaklaşık adedi, palet ölçüsünü ve istifin genelinden ve yakından birkaç fotoğrafı hazırlayın.",
          "Fotoğraf ve adetle alıcıdan ön teklif isteyin; teklifin hangi koşullara bağlı olduğunu sorun.",
          "Gerekirse alıcı yerinde partiyi görsün; sınıflama bu aşamada kesinleşir.",
          "Yükleme günü, araç girişi, rampa ve çatallı ekipman durumunu birlikte planlayın.",
          "Yükleme sonrası adet ve gruplamayı karşılıklı teyit edin; ödeme şekli ve zamanı teklifte yazılı olduğu gibi uygulansın.",
        ],
        p: ["Ön teklif bağlayıcı olmak zorunda değildir; son rakam partinin yerinde görülmesiyle kesinleşir. Önemli olan, neye göre değişebileceğinin baştan söylenmesidir."],
        links: [["Fotoğraftan palet değerleme", "/araclar/fotograftan-palet-degerleme/"], ["Yerinde palet toplama", "/hizmetler/yerinde-palet-toplama/"]],
      },
      {
        h: "Satış değerini ne belirler?",
        p: ["Hurda ve ikinci el palette sabit bir değer yoktur. Teklifi şu unsurlar şekillendirir:"],
        list: [
          "Toplam adet ve tek seferde yüklenebilirlik: büyük ve tek noktadaki partide araç verimi artar.",
          "Sağlam ve tamirlik palet oranı: bu oran yükseldikçe parti hurdadan çok palet gibi değerlenir.",
          "Palet ölçüsü ve tipi: standart Euro ölçülü paletler özel ölçülülere göre daha kolay yeniden satılır.",
          "Ahşabın nemi, çürüme ve küf durumu.",
          "Kirlilik: yağ, kimyasal, plastik ve metal artıklar ayrıştırma işi çıkarır.",
          "Yükleme koşulları: araç erişimi, rampa, çatallı ekipman, istifin dağınıklığı.",
          "Düzenli çıkış: periyodik alım planlanabiliyorsa koşullar değişebilir.",
        ],
        links: [["Hurda palet fiyatları", "/hurda-palet-fiyatlari/"]],
      },
      {
        h: "Satışta sık yapılan hatalar",
        list: [
          "Sağlam paletleri hurda yığınına karıştırmak: bu paletlerin değeri kaybolur.",
          "Fotoğrafsız ve adetsiz teklif beklemek: alıcı tahmin yürütür ve temkinli davranır.",
          "Yağlı veya kimyasal bulaşmış paletleri bildirmemek: yerinde yükleme sırasında teklif değişir.",
          "Yükleme koşullarını söylememek: dar giriş veya rampa eksikliği aracın sahaya girmesini engelleyebilir.",
          "Küçük partiyi tek tek satmaya çalışmak: biriktirip tek seferde çıkarmak çoğu zaman daha verimlidir.",
          "Sözlü kararlaştırılan koşulları yazıya dökmemek: kapsam, ödeme ve yükleme tarihi teklifte yer almalı.",
        ],
        p: ["Sürekli palet çıkaran bir işletmeyseniz tek seferlik satış yerine düzenli alım düzeni kurmak depodaki birikimi baştan önler."],
        links: [["Palet maliyetini düşürmenin yolları", "/rehber/palet-maliyetini-dusurmenin-yollari/"]],
      },
      {
        h: "MEPAL’e nasıl satabilirsiniz?",
        p: [
          "Gebze deposundan çalışıyoruz; Gebze, Dilovası, Çayırova, Tuzla ve İstanbul Anadolu yakasındaki tesislerden araç programına göre kısa sürede alım planlanır, yeterli miktarda partiler için Türkiye genelinde de çalışılır. Adedi, palet türünü ve konumu bildirmeniz, fotoğraf eklemeniz yeterlidir; teklif ve yükleme günü birlikte netleştirilir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Kırık palet alımı", "/hizmetler/kirik-palet-alimi/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Hurda palet ücretsiz alınır mı, para ödenir mi?", a: "Partinin adedine, sağlam palet oranına, ahşabın durumuna ve yükleme koşullarına göre değişir. Bazı partilerde alım bedeli ödenir, bazılarında yalnızca ücretsiz toplama yapılır. Koşullar teklifte açıkça yazılmalıdır." },
      { q: "Az sayıda hurda paleti nereye verebilirim?", a: "Küçük partiler için araç göndermek çoğu zaman verimli olmaz. Paletleri biriktirip tek seferde çıkarmak ya da yakın bir noktada diğer partilerle birleştirmek daha uygun olur." },
      { q: "Yağlı veya kimyasal bulaşmış paletler satılabilir mi?", a: "Her alıcı kabul etmez ve bu paletler normal ahşap atıkla karıştırılmamalıdır. Durumu baştan bildirin; kapsam ve koşullar teklifte netleştirilir." },
      { q: "Satıştan önce paletleri ayırmak şart mı?", a: "Şart değildir ama teklifi ve süreci olumlu etkiler. Ayırmadıysanız alıcı yerinde sınıflar; yaklaşık oranı önceden söylemeniz yeterlidir." },
      { q: "Yükleme için ekipman gerekli mi?", a: "Çatallı ekipmanınız varsa yükleme hızlanır. Yoksa durumu önceden bildirin, yükleme planı buna göre yapılır." },
    ],
  },
  {
    slug: "palet-tamiri-ne-zaman-yapilir",
    title: "Palet Tamiri Ne Zaman Yapılır, Ne Zaman Yenilenir | MEPAL",
    description: "Hasarlı palet onarılır mı, yenisi mi alınır? Tahta, takoz ve kiriş hasarında tamir sınırı, tamir edilmemesi gereken paletler ve karar tablosu.",
    h1: "Palet Tamiri Ne Zaman Yapılır? Tamir mi, Yenisi mi?",
    answer:
      "Taşıyıcı yapısı (takozlar ve kirişler) sağlam, yalnızca yüzey tahtası kırık veya gevşek olan palet tamire uygundur. Birden fazla çürük takoz, kırık kiriş veya bükülmüş gövde varsa tamir güvenli değildir. Karar; hasarın yeri, tamir maliyeti ve paletin nerede kullanılacağına göre verilir.",
    keyword: "palet tamiri ne zaman yapılır",
    art: "wood",
    published: "2026-10-28",
    updated: "2026-10-28",
    week: 31,
    readMinutes: 7,
    related: ["palet-omru-nasil-uzatilir", "hasarli-ve-kirik-palet-ne-yapilir", "palet-kalite-siniflari", "palet-maliyetini-dusurmenin-yollari", "epal-palet-ile-standart-palet-farki"],
    sections: [
      {
        h: "Tamir kararının temel kuralı",
        p: [
          "Bir paleti onarmak mantıklı mıdır sorusunun cevabı, hasarın paletin neresinde olduğuna bağlıdır. Palet üç ana parçadan oluşur: yükü karşılayan yüzey tahtaları, aralarında boşluk bırakan takozlar (bloklar) ve takozları birbirine bağlayan kirişler. Yüzey tahtaları değiştirilebilir sarf parçasıdır; takozlar ve kirişler ise paletin iskeletidir.",
          "Pratik kural şudur: hasar sarf parçadaysa tamir, iskeletteyse çoğunlukla değiştirme ya da parça kaynağı olarak değerlendirme gündeme gelir. Yük taşıma güvenliği tartışmalı bir paleti sırf ucuz diye onarıp kullanmak, düşen yük ve hasarlı ürün riskiyle daha pahalıya gelir.",
        ],
        links: [["Palet tamiri", "/hizmetler/palet-tamiri/"]],
      },
      {
        h: "Hasar tipine göre karar tablosu",
        table: {
          caption: "Hasar tipi ve genel değerlendirme",
          head: ["Hasar", "Durum", "Genel karar"],
          rows: [
            ["Kırık veya çatlak yüzey tahtası", "Takozlar sağlam", "Tamir: tahta değişimi"],
            ["Gevşemiş veya çıkmış çivi", "Ahşap sağlam", "Tamir: yeniden çakım"],
            ["Yüzeysel çatlaklı takoz", "Çivi tutuyor, parçalanma yok", "Tamir veya takoz değişimi"],
            ["Hafif eğilmiş tahta", "Palet düz duruyor", "Tamir: düzeltme veya tahta değişimi"],
            ["Birden fazla çürük veya parçalanmış takoz", "İskelet zayıf", "Genellikle tamire uygun değil"],
            ["Kırık kiriş, bükülmüş gövde", "Taşıma güvenliği tehlikede", "Parça kaynağı veya geri dönüşüm"],
            ["Küflü, yağ veya kimyasal bulaşmış ahşap", "Hijyen ve güvenlik sorunu", "Kullanım amacına göre elenir"],
          ],
        },
        links: [["Hasarlı palet alımı", "/hizmetler/hasarli-palet-alimi/"]],
      },
      {
        h: "Tamir ne zaman ekonomik olur?",
        p: [
          "Teknik olarak onarılabilen her palet ekonomik olarak onarılmaya değmez. Tamir maliyeti; değişecek tahta ve takoz sayısı, işçilik ve sevk-toplama işinden oluşur. Bunun yeni veya benzer bir ikinci el palet alım maliyetine oranı karar noktasıdır. Tamir maliyeti bu alternatiflerin makul bir bölümünün altında kalıyorsa onarım, aksi halde yenisini almak veya sağlam ikinci el palet tercih etmek akıllıca olur.",
          "Adet de belirleyicidir. Yüzlerce paletlik bir partide tahta değişimi seri yapılabildiği için birim maliyet düşer; birkaç paletlik işte ise hazırlık ve nakliye payı ağır basar.",
        ],
        links: [["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"], ["Palet maliyetini düşürmenin yolları", "/rehber/palet-maliyetini-dusurmenin-yollari/"]],
      },
      {
        h: "Tamir edilmemesi gereken durumlar",
        list: [
          "Birden fazla takozu çürümüş veya içten çatlamış paletler: çivi tutmaz, yük altında dağılır.",
          "Kirişi kırılmış, gövdesi bükülmüş paletler: raf ve istif güvenliği bozulur.",
          "Kimyasal, yağ veya gıda artığı bulaşmış paletler: ürün kontaminasyonu riski vardır.",
          "İhracat paleti olarak kullanılacaksa: ISPM-15 damgalı paletin onarımı damga ve uyumluluk açısından sorun yaratabilir; ihracat için uyumlu, HT damgalı palet temin edilmesi daha güvenli yoldur.",
          "EPAL damgalı paletler: onarım EPAL kurallarına göre yetkili tamirci tarafından yapılır; sıradan onarımla damgalı palet EPAL diye satılamaz.",
        ],
        p: ["Bu durumlarda paleti zorla onarmak yerine kullanılabilir tahtaları söküp parça olarak değerlendirmek, kalanını geri dönüşüme vermek daha doğrudur."],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"], ["EPAL ile standart palet farkı", "/rehber/epal-palet-ile-standart-palet-farki/"]],
      },
      {
        h: "Tamir sonrası palet ne için uygundur?",
        p: [
          "Düzgün onarılmış ahşap palet yurt içi sevkiyat, depolama ve genel sanayi kullanımı için uygundur. Titizlik isteyen kullanımlar (gıda teması, hassas ürün, ihracat) için ise ya sıfır palet ya da kayıtlı, temiz ve sınıfı belli paletler tercih edilmelidir.",
          "Onarılan paletleri ikinci el sınıf kriterlerine göre yeniden sınıflamak gerekir. Tamir görmüş palet ile hiç hasar görmemiş palet aynı sınıfta satılmamalıdır; alıcıya ne aldığı açıkça söylenmelidir.",
        ],
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"], ["Palet ömrü nasıl uzatılır?", "/rehber/palet-omru-nasil-uzatilir/"]],
      },
      {
        h: "Kendi depoda mı, hizmet alarak mı?",
        p: [
          "Küçük çaplı tahta değişimini kendi bakım ekibi yapabilir; ancak düzgün çakım, doğru çivi, tahta kalınlığı ve ölçü tutarlılığı önemlidir. Çok sayıda palet için hizmet almak genellikle daha tutarlı sonuç verir. Yığınınızı gruplara ayırıp fotoğrafla bildirirseniz, hangisinin tamire gireceği, hangisinin parça veya geri dönüşüm olacağı birlikte ayrılır.",
        ],
        links: [["Teklif al", "/teklif-al/"], ["Hurda paletinizi nasıl değerlendirirsiniz?", "/rehber/hurda-paletinizi-nasil-degerlendirirsiniz/"]],
      },
    ],
    faq: [
      { q: "Takozu çatlak palet tamir edilir mi?", a: "Çatlak yüzeyselse, çivi tutuyor ve takoz parçalanmıyorsa takoz değişimi veya takviyeyle tamir mümkündür. Birden fazla takoz bozulmuşsa tamir önerilmez." },
      { q: "Tamir edilmiş palet kaç yük taşır?", a: "Düzgün onarılmış ve iskeleti sağlam palet standart ölçülü bir paletin yük kapasitesine yakın kullanılabilir; ancak onarılmış paleti raf sisteminde kullanmadan önce raf şartlarını ayrıca teyit etmek gerekir." },
      { q: "Onarılmış palet ihracatta kullanılabilir mi?", a: "Önerilmez. İhracatta ISPM-15 uyumlu, HT damgalı ve okunur damgalı palet gerekir; bu amaçla uyumlu palet temin edilmesi daha güvenlidir." },
      { q: "Tamir mi yeni palet mi daha ekonomik?", a: "Tamir maliyeti yeni ya da benzer ikinci el palet maliyetinin makul bir bölümünün altındaysa tamir ekonomiktir. Hasar iskelette ise ekonomik olsa da güvenlik nedeniyle tercih edilmez." },
      { q: "Tamir edilen paletler size geri mi gelir?", a: "İsteğe göre değişir: kendi paletlerinizin tamiri yapılabilir ya da hasarlı paletler satın alınıp onarılıp yeniden satışa verilir. Kapsam teklifte netleştirilir." },
    ],
  },
  {
    slug: "palet-secimi-yuk-kapasitesi-rehberi",
    title: "Palet Seçimi: Yük Kapasitesine Göre Doğru Palet | MEPAL",
    description: "Palet yük kapasitesi nasıl seçilir? Dinamik, statik ve raf yükü farkı, gereğinden yüksek kapasiteye para vermeden doğru palet ve toplam maliyet.",
    h1: "Palet Seçimi: Yük Kapasitesine Göre Doğru Paleti Belirleme",
    answer:
      "Doğru palet, yükünüzü güvenle taşıyan ama ihtiyacınızdan fazla kapasiteye para ödemediğiniz palettir. Önce yükün ağırlığını ve nasıl taşınıp depolanacağını (yerde, istifte, rafta) belirleyin; sonra ahşap ve plastik seçeneklerini yalnızca alış fiyatına değil, kullanım ömrü ve toplam maliyete göre karşılaştırın.",
    keyword: "palet yük kapasitesine göre seçim",
    art: "big",
    published: "2026-10-28",
    updated: "2026-10-28",
    week: 32,
    readMinutes: 8,
    related: ["palet-kac-kg-tasir", "ahsap-palet-mi-plastik-palet-mi", "palet-raf-sistemleri-ve-raf-yuku", "palet-maliyetini-dusurmenin-yollari", "palet-cesitleri-ve-secimi"],
    sections: [
      {
        h: "Önce yükü ve kullanım biçimini tanımlayın",
        p: [
          "Palet seçerken çoğu işletme ilk olarak ölçüye ve fiyata bakar; oysa yük kapasitesi bu ikisi kadar belirleyicidir. Kapasite tek bir sayı değildir; paletin nasıl kullanıldığına göre üç ayrı değer kastedilir.",
          "Euro ölçülü standart palet için güvenli çalışma yükü 1.500 kg, istifte alttaki paletin taşıyabileceği toplam yük ise 5.500 kg’dır; raf yükü ise çok daha düşüktür ve palete, rafa ve yük dağılımına göre değişir. Diğer ölçü ve malzemelerde bu değerleri paletin üreticisi veya satıcısı bildirir.",
        ],
        table: {
          caption: "Yük kapasitesinin üç türü",
          head: ["Tür", "Ne anlama gelir?", "Seçimde neden önemli?"],
          rows: [
            ["Dinamik yük", "Palet forklift veya transpaletle hareket ederken taşıyabileceği yük", "Günlük sevkiyatın ana ölçütüdür"],
            ["Statik yük", "Palet yerde duruyorken veya istifte alttayken taşıyabileceği yük", "Palet üstüne palet koyuyorsanız belirleyicidir"],
            ["Raf yükü", "Palet raf kirişleri üzerinde, altı boşken taşıyabileceği yük", "En düşük değerdir; raf kullanıyorsanız en kritik değerdir"],
          ],
        },
        links: [["Palet kaç kg taşır?", "/rehber/palet-kac-kg-tasir/"], ["Raf sistemleri ve raf yükü", "/rehber/palet-raf-sistemleri-ve-raf-yuku/"]],
      },
      {
        h: "Gereğinden yüksek kapasiteye para ödememek",
        p: [
          "Kapasite arttıkça palet genellikle daha ağır ve daha pahalı hale gelir. İhtiyacınız yaklaşık yarım ton olan bir ürün için çok yüksek taşıma değerine göre üretilmiş ağır bir palet almak, her sevkiyatta hem palet hem de nakliye ağırlığı için fazladan ödeme demektir.",
          "Bu hatayı önlemek için ürün ağırlığını palet üzerinde gerçekte dizilecek şekliyle hesaplayın; ambalaj ve palet kendi ağırlığını da ekleyin. En ağır yük koşulunuzu (ör. dolu sipariş) esas alın, ortalamayı değil. Bu değerin üzerine makul bir güvenlik payı bırakmak yeterlidir; payı gereğinden büyük tutmak ise alış maliyetini sürekli yükseltir.",
          "Karar ayrıca yükün dağılımına bağlıdır. Aynı toplam ağırlık palet yüzeyine eşit yayıldığında kolay taşınır; tek noktada toplanırsa aynı palet yetersiz kalabilir. Ürününüz sivri, ağır veya tek noktada yoğunlaşıyorsa bu durumu satıcıya baştan söyleyin.",
        ],
        list: [
          "Yüklü paletin gerçek ağırlığını tartın veya hesaplayın (ürün + ambalaj + palet).",
          "En ağır sipariş koşulunu esas alın.",
          "Yükün palet yüzeyine dağılımını kontrol edin; taşma ve tek noktada yığılma olmasın.",
          "Palet istiflenecek mi, rafa mı girecek? İlgili yük değerini ona göre seçin.",
          "Makul güvenlik payı bırakın, ancak ihtiyaç dışı kapasiteye gitmeyin.",
        ],
      },
      {
        h: "Kullanım yerine göre seçim",
        p: [
          "Yerde taşınan ve fazla istiflenmeyen hafif-orta yüklerde standart Euro ölçülü ahşap palet çoğu iş için yeterlidir. Ağır sanayi ürünlerinde 100x120 gibi daha geniş tabanlı paletler veya yüksek kapasiteli modeller düşünülür. Ürün hassas veya gıda ile temas ediyorsa sıfır ahşap ya da plastik palet öne çıkar.",
          "Raf kullanıyorsanız paletin ölçüsü, raf kirişi açıklığı ve paletin durumu birlikte değerlendirilir. Hasarlı veya eğilmiş paletin raf yükü, sağlam paletin değerinin altına düşer; rafa giren paletlerin düzenli kontrolü bu yüzden önemlidir. Bu konuda üreticinin ve raf sağlayıcısının değerlerini esas alın.",
        ],
        links: [["Euro palet", "/urunler/80x120-euro-palet/"], ["100x120 palet", "/urunler/100x120-palet/"], ["Palet seçici aracı", "/araclar/palet-secici/"]],
      },
      {
        h: "Plastik mi ahşap mı: toplam maliyet karşılaştırması",
        p: [
          "Plastik palet alış fiyatı bakımından genellikle ahşaptan yüksektir; bu yüzden ilk bakışta pahalı görünür. Ancak karşılaştırmayı tek bir alış fiyatıyla değil, paletin kullanım ömrü boyunca yaptığı toplam iş üzerinden yapmak gerekir.",
          "Pratik hesap şöyledir: paletin alış fiyatını, sizin işletmenizde yapabileceği ortalama sevkiyat (tur) sayısına bölün; bunun üzerine tamir, temizlik, depolama ve kayıp maliyetini ekleyin. Palet kapalı bir dolaşımda (kendi tesisleriniz arasında) dönüyorsa plastik palet çoğu zaman avantaj sağlar; tek yönlü sevkiyatta ve müşteride kalacaksa ucuz ahşap palet daha mantıklıdır. Gerçek tur sayısı ve kayıp oranını kendi verinizle hesaplamanız gerekir; genel bir rakam her işletme için doğru olmaz.",
        ],
        table: {
          caption: "Toplam maliyeti etkileyen kalemler",
          head: ["Kalem", "Ahşap palet", "Plastik palet"],
          rows: [
            ["Alış fiyatı", "Genellikle daha düşük", "Genellikle daha yüksek"],
            ["Tur sayısı (kaç sevkiyat taşır)", "Durumuna ve bakımına bağlı; onarılabilir", "Uzun ömürlü olabilir; model ve kullanım koşuluna bağlı"],
            ["Tamir", "Kolay, tahta ve takoz değişir", "Çoğunlukla zordur veya mümkün değildir"],
            ["Hijyen ve temizlik", "Nem ve kalıntı tutabilir", "Yıkanabilir, düz yüzeyli"],
            ["İhracat şartı", "ISPM-15 uyumlu, HT damgalı olmalı", "Ahşap işlem şartı aranmaz"],
            ["Ağırlık", "Nem ve ahşaba göre değişir", "Modele göre değişir"],
            ["Kayıp ve iade döngüsü", "Düşük alış fiyatı kaybı kolaylaştırır", "Yüksek alış fiyatı geri dönüş takibi gerektirir"],
          ],
        },
        links: [["Ahşap palet mi plastik palet mi?", "/rehber/ahsap-palet-mi-plastik-palet-mi/"], ["Plastik palet", "/urunler/plastik-palet/"], ["Plastik palet fiyatları", "/plastik-palet-fiyatlari/"]],
      },
      {
        h: "Seçim kontrol listesi",
        steps: [
          "Yüklü paletin en ağır halini belirleyin.",
          "Taşıma türünü seçin: yerde, istifte veya rafta.",
          "Ölçüyü ürün, araç ve raf düzenine göre belirleyin.",
          "Gıda teması, hijyen veya ihracat gereksinimi var mı kontrol edin.",
          "Ahşap ve plastik için toplam maliyeti tur sayısı üzerinden hesaplayın.",
          "Aday paletin yük değerlerini satıcıdan yazılı olarak isteyin.",
          "Küçük bir deneme partisiyle gerçek kullanımda test edin.",
        ],
        links: [["Teklif al", "/teklif-al/"], ["Palet danışmanı", "/araclar/palet-danismani/"]],
      },
    ],
    faq: [
      { q: "Palet kapasitesini nasıl öğrenirim?", a: "Palet tipine ve üreticiye göre değişir. Euro ölçülü standart palet için güvenli çalışma yükü 1.500 kg’dır; diğer paletlerde dinamik, statik ve raf yükü değerlerini satıcıdan veya üretici etiketinden isteyin." },
      { q: "Daha yüksek kapasiteli palet her zaman daha güvenli mi?", a: "Daha yüksek kapasite yalnızca ihtiyaç varsa anlamlıdır. Hafif yük için ağır palet almak maliyeti ve nakliye ağırlığını gereksiz yere artırır. Doğru olan, en ağır yükünüze makul pay ekleyip seçmektir." },
      { q: "Rafta kullanacağım paletin kapasitesi neden daha düşük?", a: "Rafta palet yalnızca kenarlarından desteklenir ve altı boştur; bu yüzden aynı palet yerde taşıyacağından daha az yükü güvenle taşır. Raf yükü değeri palet ve raf sistemine göre ayrıca teyit edilmelidir." },
      { q: "Plastik palet ahşaptan daha mı ekonomik?", a: "Alış fiyatı genellikle daha yüksektir; ama uzun ömrü ve temizlenebilirliği nedeniyle kapalı dolaşımda toplam maliyeti düşük olabilir. Tek yönlü sevkiyatta ahşap genellikle daha ekonomiktir. Karar işletmenizin tur sayısı ve kayıp oranına bağlıdır." },
      { q: "Hangi palet uygun, nasıl karar vereyim?", a: "Palet seçici ve palet danışmanı araçları ya da WhatsApp üzerinden yükünüzü ve kullanım biçimini bildirebilirsiniz; uygun tip ve ölçü birlikte belirlenir." },
    ],
  },
  {
    slug: "palet-alirken-teklif-isterken-hangi-bilgiler-gerekir",
    title: "Palet Teklifi İsterken Hangi Bilgiler Gerekir? | MEPAL",
    description: "Palet teklifi alırken satıcıya hangi bilgileri vermelisiniz? Ölçü, adet, sınıf, ihracat, teslimat ve ödeme dahil eksiksiz kontrol listesi.",
    h1: "Palet Alırken Teklif İsterken Hangi Bilgiler Gerekir?",
    answer:
      "Hızlı ve net bir palet teklifi için palet tipi ve ölçüsü, adet, yeni veya ikinci el tercihi, ihracat gereksinimi, teslim adresi ve araç erişimi, istenen teslim zamanı ve tek seferlik mi düzenli mi alacağınızı bildirmeniz yeterlidir. Eksik bilgi teklifi geciktirir veya sonradan değiştirir.",
    keyword: "palet teklifi için gerekli bilgiler",
    art: "service",
    published: "2026-10-28",
    updated: "2026-10-28",
    week: 33,
    readMinutes: 7,
    related: ["palet-fiyatlarini-etkileyen-faktorler", "euro-palet-olculeri", "ihracatta-palet-ve-ambalaj-kurallari", "sifir-palet-mi-ikinci-el-palet-mi", "palet-kalite-siniflari"],
    sections: [
      {
        h: "Neden bilgi eksiksiz olmalı?",
        p: [
          "Palet fiyatı tek bir etiketle verilebilecek bir değer değildir; ölçü, sınıf, adet, ihracat şartı ve teslimat koşulu birlikte fiyatı belirler. Eksik bilgiyle gelen talep ya birkaç tur geri dönüşle uzar ya da yanlış varsayıma dayalı bir teklifle sonuçlanır. Baştan doğru bilgi vermek hem sizin hem satıcının zamanını kazandırır.",
          "Aşağıdaki liste, talebinizi tek mesajda eksiksiz yazmanız için hazırlanmıştır. Bilmediğiniz maddeyi boş bırakabilirsiniz; satıcı eksik bilgiyi sorar. Önemli olan, bildiklerinizin doğru olmasıdır.",
        ],
        links: [["Palet fiyatlarını etkileyen faktörler", "/rehber/palet-fiyatlarini-etkileyen-faktorler/"]],
      },
      {
        h: "Teklif için gereken bilgiler",
        table: {
          caption: "Teklif talebi kontrol listesi",
          head: ["Bilgi", "Neden gerekli?", "Örnek ifade"],
          rows: [
            ["Palet tipi ve ölçüsü", "Fiyat ve stok ölçüye göre belirlenir", "Euro ölçülü (80x120), 100x120, özel ölçü"],
            ["Malzeme", "Ahşap ve plastik farklı fiyatlanır", "Ahşap, plastik, fark etmez"],
            ["Adet", "Toplu alımda teklif değişir", "Yaklaşık adet ve aylık ihtiyaç"],
            ["Yeni mi ikinci el mi, hangi sınıf", "Fiyatı ve kullanım alanını belirler", "Sıfır, 1. sınıf ikinci el"],
            ["İhracat şartı", "ISPM-15 uyumlu, HT damgalı palet gerekebilir", "İhracatta kullanılacak / yurt içi"],
            ["Taşıyacağı yük", "Kapasite seçimi için", "Yaklaşık ağırlık, raf kullanımı"],
            ["Teslim adresi ve araç erişimi", "Nakliye planı ve maliyet için", "İlçe/şehir; TIR girişi, rampa"],
            ["İstenen teslim zamanı", "Stok ve araç programı için", "Bu hafta / belirli bir tarih"],
            ["Tek seferlik mi düzenli mi", "Düzenli alımda koşullar değişebilir", "Aylık düzenli alım"],
          ],
        },
        links: [["Euro palet ölçüleri", "/rehber/euro-palet-olculeri/"], ["Teklif sihirbazı", "/teklif-al/"]],
      },
      {
        h: "Ölçü, tip ve adedi doğru belirtmek",
        p: [
          "Palet ölçüsünü yazarken uzunluk ve genişlik sırasını netleştirin; 80x120 ile 120x80 günlük dilde aynı ölçüyü anlatsa da yönü önemli olan işlerde (raf, konteyner dizilimi) yazılı açıklama gerekir. Euro ölçülü paletlerde tahta sayısı ve kalınlığı, ikinci el palette sınıf bilgisi de teklifi etkiler.",
          "Adedi yaklaşık olarak verebilirsiniz ama işin türünü belirtin: tek seferlik bir ihtiyaç mı, aylık düzenli bir tüketim mi? Düzenli ihtiyaçta stok planı yapılabilir ve koşullar farklı kurgulanabilir. Standart dışı ölçü veya özel tahta kalınlığı gerekiyorsa çizim, fotoğraf veya örnek palet bildirmek en güvenli yoldur.",
        ],
        links: [["Özel ölçü palet", "/urunler/ozel-olcu-palet/"], ["Konteynere ve tıra kaç palet sığar?", "/rehber/konteynere-ve-tira-kac-palet-sigar/"]],
      },
      {
        h: "İhracat ve özel şartları baştan söyleyin",
        p: [
          "Palet yurt dışına gidecekse bunu mutlaka belirtin. İhracatta ahşap paletin ISPM-15 şartına uygun olması ve HT (ısıl işlem) damgası taşıması gerekir; bu, standart paletten farklı bir üründür. MEPAL ihracat için ISPM-15 uyumlu, HT damgalı palet temini yapar. Hedef ülkenin ek şartı varsa (ör. belirli ölçü veya boya/işaret) onu da bildirin.",
          "Gıda, ilaç veya hassas ürün taşınacaksa temizlik ve koku şartını yazın. Böyle durumlarda sıfır ahşap veya plastik palet önerilebilir. Müşterinizin belirli bir palet tipi veya kalite sınıfı şart koştuğunu biliyorsanız, bunu da talebe ekleyin.",
        ],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"], ["İhracat paleti", "/urunler/ihracat-paleti/"]],
      },
      {
        h: "Teslimat ve ödeme koşulları",
        list: [
          "Teslim adresi: şehir, ilçe ve mümkünse sanayi bölgesi.",
          "Araç erişimi: TIR veya kamyon girebiliyor mu, rampa var mı.",
          "Boşaltma: çatallı ekipman var mı, boşaltmayı kim yapacak.",
          "Depodan teslim alma tercihi: Gebze deposundan kendi aracınızla alıyorsanız belirtin.",
          "İstenen teslim zamanı: net tarih mi yoksa esnek mi.",
          "Ödeme şekli ve zamanı: peşin mi, anlaşmalı mı; teklifte yazılı olmalı.",
        ],
        p: ["Teslim süresi stok ve araç programına göre belirlenir; çoğunlukla ertesi iş günü planlanabilir, net süre teklifte bildirilir. Teklifi onaylamadan önce kapsamın (adet, tip, sınıf, nakliye dahil mi) yazılı olduğundan emin olun."],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"], ["Palet nakliye ve lojistik", "/hizmetler/palet-nakliye-lojistik/"]],
      },
      {
        h: "Örnek bir talep mesajı",
        p: [
          "Eksiksiz bir mesaj şu şekilde olabilir: “Euro ölçülü, 1. sınıf ikinci el palet arıyoruz. Aylık düzenli alım, her seferinde yaklaşık yüz adet. Yurt içi sevkiyat, raf kullanılmıyor. Teslim adresi Gebze OSB; TIR girişi ve rampa var. Teslimat ilk hafta içinde. Ödeme koşullarını da teklifte görmek isteriz.”",
          "Bu kadar bilgiyle teklif çoğu zaman tek turda netleşir. WhatsApp’tan yazarken fotoğraf (örnek palet veya çizim) eklemek de işi hızlandırır.",
        ],
        links: [["Teklif al", "/teklif-al/"], ["Palet fiyatları", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Palet teklifi için en az hangi bilgiyi vermeliyim?", a: "Palet tipi ve ölçüsü, yaklaşık adet ve teslim adresi en az gereken bilgilerdir. İhracat veya sınıf tercihi varsa onu da ekleyin." },
      { q: "Fiyatı neden hemen tek rakam olarak söylemiyorsunuz?", a: "Fiyat; ölçü, sınıf, adet, ihracat şartı ve teslimat koşuluna göre değişir. Güncel fiyat tablosuna bakabilir veya adedinizi bildirip teklif alabilirsiniz." },
      { q: "Numune palet görebilir miyim?", a: "Stok ve ürün tipine göre depoda inceleme veya örnek talebi görüşülebilir. Ürün tipini ve adedini bildirmeniz yeterlidir." },
      { q: "Teslim süresi ne kadar?", a: "Stok ve araç programına göre belirlenir; çoğunlukla ertesi iş günü planlanabilir, net süre teklifte bildirilir." },
      { q: "Düzenli alımda farklı koşul olur mu?", a: "Evet. Aylık veya haftalık düzenli ihtiyaç bildirildiğinde stok ve sevkiyat planı yapılabilir; koşullar teklifte ayrıca belirtilir." },
    ],
  },
];
