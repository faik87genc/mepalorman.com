import type { Guide } from "@/lib/types";

// Rehber yazıları, 7.–12. hafta (12 yazı)
export const guidesB: Guide[] = [
  {
    slug: "hurda-paletinizi-nasil-degerlendirirsiniz",
    title: "Hurda Palet Nasıl Değerlendirilir? | MEPAL",
    description: "Depoda biriken hurda ve kırık paletleri nasıl ayıracağınızı, tamir, satış ve geri dönüşüm seçeneklerini adım adım öğrenin.",
    h1: "Hurda Paletinizi Nasıl Değerlendirirsiniz?",
    answer:
      "Hurda palet yığını çoğu zaman çöp değil, ayrıştırıldığında nakit getiren bir stoktur. Paletleri sağlam, tamir edilebilir ve gerçekten hurda olarak üçe ayırın; sağlamları satın, tamire uygun olanları onartın, kalanı ahşap atık olarak geri dönüşüme verin. Fotoğraf göndererek ön değerlendirme alabilirsiniz.",
    keyword: "hurda palet değerlendirme",
    art: "scrap",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 7,
    readMinutes: 5,
    related: ["ikinci-el-palet-alirken-dikkat-edilecekler", "palet-omru-nasil-uzatilir", "palet-maliyetini-dusurmenin-yollari"],
    sections: [
      {
        h: "Hurda palet gerçekte nedir?",
        p: [
          "Fabrika ve depolarda biriken paletlerin hepsi hurda değildir. Üzerinde birkaç kırık tahta olan bir palet, tamir sonrası yeniden sevkiyatta kullanılabilir. Gerçek hurda, taşıyıcı elemanları (blok veya kızak) çatlamış, çürümüş ya da parçalanmış, tamirin yeni palet maliyetine yaklaştığı paletlerdir.",
          "Bu ayrımı yapmak önemlidir, çünkü hurda diye toptan verdiğiniz paletlerin bir kısmı aslında ikinci el piyasasında daha yüksek değerde alıcı bulur. Tersine, sağlam sandığınız bir kısmı da yük altında kırılıp ürün hasarına yol açabilir.",
        ],
      },
      {
        h: "Üç gruba ayırma: sağlam, tamirlik, hurda",
        p: ["Yığını tek tek kontrol etmek zaman alır; ama üç basit soruyla paletleri hızla ayırabilirsiniz."],
        table: {
          caption: "Palet durumuna göre karar tablosu",
          head: ["Durum", "Belirti", "Önerilen yol"],
          rows: [
            ["Sağlam", "Bloklar ve kızaklar bütün, en fazla 1–2 yüzey tahtası aşınmış", "İkinci el olarak satış veya iç kullanım"],
            ["Tamirlik", "Bir veya iki tahta kırık, bir kızak çatlak ama blok sağlam", "Tamir edip yeniden kullanın veya tamirli satın"],
            ["Hurda", "Blok parçalanmış, çürüme ve küf var, çoklu kırık", "Ahşap atık olarak geri dönüşüm"],
            ["Riskli", "Kimyasal, yağ veya gıda bulaşmış", "Kullanmayın; atık mevzuatına uygun bertaraf"],
          ],
        },
      },
      {
        h: "Satmak mı, tamir etmek mi?",
        p: [
          "Tamir kararında basit bir kural işe yarar: tamir için gereken malzeme ve işçilik, aynı ölçüdeki ikinci el paletin değerine yaklaşıyorsa tamir etmeyin. Euro palet gibi standart ölçülü ve yüksek talep gören paletlerde tamir çoğu zaman mantıklıdır; özel ölçülü ve tek seferlik paletlerde alıcı bulmak zordur.",
          "Kendi tesisinizde tamir kapasitesi yoksa tamirlik grubu da hurda ile birlikte alıcıya devredebilirsiniz; alıcı bunu kendi ayrıştırmasından geçirir. Bu durumda fiyat, ayrıştırma sonrası sağlam adet oranına göre belirlenir.",
        ],
        links: [
          ["Hurda palet alımı hizmeti", "/hizmetler/hurda-palet-alimi/"],
          ["Palet tamiri hizmeti", "/hizmetler/palet-tamiri/"],
        ],
      },
      {
        h: "Fiyatı belirleyen unsurlar",
        p: ["Hurda ve ikinci el palet alımında teklif tek bir rakama indirilemez. Teklifi şu nitelikler şekillendirir:"],
        list: [
          "Adet ve parti büyüklüğü: Toplu ve düzenli parti, tek seferlik küçük partiden daha avantajlıdır.",
          "Ölçü ve tip: 80x120 ve 100x120 gibi yaygın ölçüler daha çok talep görür.",
          "Sağlam oranı: Partinin ne kadarının doğrudan yeniden kullanılabildiği.",
          "Nem ve kirlilik: Islanmış, küflü veya yağlı paletler değeri düşürür.",
          "Yükleme koşulları: Forklift, rampa ve araç erişimi lojistik maliyeti etkiler.",
        ],
        links: [
          ["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"],
          ["İkinci el palet ürünü", "/urunler/ikinci-el-palet/"],
        ],
      },
      {
        h: "Fotoğrafla ön değerlendirme",
        p: [
          "Yığının fotoğrafını çekip göndermek, saha ziyareti öncesi ön fikir almanın en hızlı yoludur. Fotoğraf çekerken paletlerin üstten ve yandan göründüğü açıları seçin, yığının yüksekliğini ve tahmini adedini not edin.",
        ],
        steps: [
          "Paletleri ölçüye göre kabaca ayırın (80x120, 100x120, diğer).",
          "Yığının genel görüntüsünü ve birkaç yakın plan kırık örneği fotoğraflayın.",
          "Tahmini adedi ve paletlerin kapalı mı açık alanda mı durduğunu not edin.",
          "Araç erişimi ve yükleme yöntemini belirtin.",
          "Fotoğrafları araçla yükleyin veya WhatsApp'tan gönderin; ön değerlendirmeyi alın.",
        ],
        links: [["Fotoğraftan palet değerleme aracı", "/araclar/fotograftan-palet-degerleme/"]],
      },
      {
        h: "Geri dönüşüm: kırık paletler nereye gider?",
        p: [
          "Hurda ayrılan ahşap paletler çöpe gitmek zorunda değildir. Temiz ahşap atıklar parçalanarak yonga, pelet veya levha sanayiinde hammadde olarak, bir kısmı da enerji amaçlı kullanılır. Çivi ve metaller ayrıştırılır.",
          "Bu yüzden hurdayı ahşap atık olarak teslim ederken kimyasal bulaşmış paletleri sağlamlardan ayrı tutun. Karışık parti, geri dönüşüm kabulünü zorlaştırır. Hurda palet alımı ve ahşap atık geri dönüşümü hizmetimizde ayrıştırma ve yükleme birlikte planlanabilir.",
        ],
      },
      {
        h: "Depoda düzen: hurdanın birikmesini önleme",
        p: ["Hurda yığınlarının büyümesi genellikle bir süreç sorunudur. Küçük alışkanlıklar yığını yarıya indirir."],
        list: [
          "Kırık paleti hemen ayrı bir alana çekin; sağlam stokla karıştırmayın.",
          "Paletleri açık havada ıslanacak şekilde bırakmayın; nem ömrü hızla düşürür.",
          "Aylık bir sayım yapın; hangi tip paletin daha hızlı hasar gördüğünü izleyin.",
          "Düzenli bir alıcıyla periyodik teslim planı yapın.",
        ],
      },
    ],
    faq: [
      { q: "Kırık palet hurdaya mı gider?", a: "Her zaman değil. Blokları sağlam, yalnızca yüzey tahtaları kırık paletler tamir edilebilir. Taşıyıcı bloğu veya kızağı parçalanmış paletler hurda sayılır." },
      { q: "Hurda palet için ücret alınır mı, ödeme mi yapılır?", a: "Partinin niteliğine bağlıdır. Sağlam oranı yüksek partilerde alım yapılır; çok düşük kaliteli partilerde yalnızca ücretsiz toplama söz konusu olabilir. Net durum fotoğraf ve adetle teklifte netleşir." },
      { q: "Küflü veya yağlı paletleri alıyor musunuz?", a: "Kimyasal veya yağ bulaşmış paletler yeniden kullanıma uygun değildir; bunların kabulü atık niteliğine göre değerlendirilir. Teklif sırasında durumu belirtin." },
      { q: "Minimum adet var mı?", a: "Adet eşiği, bölge ve araç planına göre değişir. Gebze ve çevresi için net bilgi teklif aşamasında verilir." },
      { q: "Ahşap atık geri dönüşüme nasıl dönüşür?", a: "Temiz ahşap, parçalanıp yonga veya pelet gibi ürünlere hammadde olabilir. Çivi ve metaller ayrıştırılarak ayrıca geri kazanılır." },
    ],
  },
  {
    slug: "palet-nasil-istiflenir",
    title: "Palet Nasıl İstiflenir? Güvenli İstif | MEPAL",
    description: "Boş ve dolu paletlerin güvenli istiflenmesi: yükseklik, ağırlık sınırı, çapraz istif kuralları ve depo güvenliği için kontrol listesi.",
    h1: "Palet Nasıl İstiflenir? Güvenli İstif Kuralları",
    answer:
      "Güvenli istifin temeli düz zemin, aynı ölçülü paletler ve yükü paletin dışına taşırmamaktır. Boş ahşap paletlerde pratik sınır genellikle 10–15 adet, dolu paletlerde ise paletin ve ürünün istif dayanımı belirleyicidir. Kesin değerleri üretici ve depo güvenlik prosedürünüz belirler.",
    keyword: "palet istifleme",
    art: "wood",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 7,
    readMinutes: 5,
    related: ["palet-kac-kg-tasir", "palet-yuksekligi-kac-cm", "palet-raf-sistemleri-ve-raf-yuku"],
    sections: [
      {
        h: "İstifin neden önemli olduğu",
        p: [
          "Yanlış istiflenmiş paletler depodaki en yaygın iş kazası kaynaklarından biridir. Devrilen bir palet kolonu hem çalışanlar hem de ürünler için ciddi risk oluşturur. İstif aynı zamanda alan verimini de belirler: aynı metrekareye daha düzenli ve daha yüksek istif, depolama maliyetini düşürür.",
          "Bu yazıdaki sınırlar genel uygulama özetidir. Kendi tesisiniz için bağlayıcı olan değerler paletin teknik şartnamesi, ürün ambalajının istif dayanımı ve iş sağlığı güvenliği değerlendirmenizdir.",
        ],
      },
      {
        h: "Boş paletlerin istifi",
        p: ["Boş paletler depoda alan kaplar; düzgün istif burada en büyük kazancı sağlar."],
        list: [
          "Aynı ölçü ve aynı tipteki paletleri birlikte istifleyin; farklı ölçüler kolonu dengesiz yapar.",
          "Zemin düz, sert ve kuru olmalı; eğimli veya çamurlu zeminde istif yapmayın.",
          "Paletleri hizalayın; kolon dik olmalı, kaymaya bırakmayın.",
          "Kırık veya eğik paletleri istife koymayın; üstteki yük alttakini ezebilir.",
          "Kolon yüksekliği için pratikte 10–15 palet ve forklift veya operatör gözünü kapamayacak bir yükseklik makuldür.",
        ],
      },
      {
        h: "Dolu paletlerin üst üste istifi",
        p: [
          "Dolu paletleri üst üste koymak iki şeye bağlıdır: alttaki paletin istif (statik) yük kapasitesi ve alttaki ürünün ambalaj dayanımı. Palet 1.000 kg'ı taşısa bile, alttaki karton kutular ezilebilir.",
          "Sıkıştırılmış, stretch film ile sarılmış ve kenar koruyuculu yükler daha dengelidir. Üst palet, alt paletin ayak izi üzerinde tam oturmalı; dışarı taşan yük kayma ve devrilme riskini artırır.",
        ],
        table: {
          caption: "İstif için kontrol noktaları",
          head: ["Kontrol", "Neye bakılır"],
          rows: [
            ["Zemin", "Düz, sağlam, kaygan değil"],
            ["Palet durumu", "Çatlak blok, kırık tahta, sarkan çivi yok"],
            ["Yük dağılımı", "Ağırlık merkezi ortada, ağır ürün altta"],
            ["Ambalaj", "Alttaki kutular üst yükü taşıyabilir"],
            ["Sabitleme", "Streç film, çember veya köşe koruyucu"],
            ["Yükseklik", "Hedef yükseklik, tesis prosedürünü aşmıyor"],
          ],
        },
      },
      {
        h: "Çapraz istif ve sarma",
        p: [
          "Ürünlerin paletin üzerine çapraz örgüyle dizilmesi, kolon yapısına göre daha dengeli bir blok oluşturur. Tuğla düzeni denen bu dizilimde her kat bir öncekine göre döndürülür. Ardından streç filmi alttan başlayıp paletin kendisini de saracak şekilde uygulayın; bu, yükün paletten ayrılmasını önler.",
        ],
      },
      {
        h: "Yükseklik ve ağırlık sınırları",
        p: [
          "Yaygın bir pratik, yüklü palet yüksekliğini paletle birlikte yaklaşık 1,2–2,0 m aralığında tutmaktır; ancak bu tamamen kullanılan rafa, araç tavanına ve ürüne göre değişir. Kamyon ve tır yüklemelerinde bir diğer sınır araç yüksekliğidir.",
          "Ağırlıkta ise statik, dinamik ve raf yükü birbirinden farklıdır: statik yük palet yerde hareketsiz dururken, dinamik yük taşınırken, raf yükü ise iki kirişe oturtulmuşken taşınabilir ağırlığı ifade eder. Raf yükü çoğunlukla bu üçünün en düşüğüdür.",
        ],
        links: [
          ["Palet kaç kg taşır?", "/rehber/palet-kac-kg-tasir/"],
          ["Palet yüksekliği kaç cm?", "/rehber/palet-yuksekligi-kac-cm/"],
        ],
      },
      {
        h: "Forklift ile istifte dikkat edilecekler",
        steps: [
          "Çatalları palet girişine tam hizalı ve düz sokun.",
          "Çatalları paletin sonuna kadar ilerletin; tek ucundan kaldırmayın.",
          "Yükü kaldırırken direği hafif geriye eğin, yavaş hareket edin.",
          "İstif yaparken yüksekte hız yapmayın; ani fren ve dönüşten kaçının.",
          "Yükü yerleştirdikten sonra çatalı paletten dikkatlice çekin; palet ve alttaki yükü sürüklemeyin.",
        ],
      },
      {
        h: "Depo alanında güvenlik alışkanlıkları",
        list: [
          "Yürüme yollarını ve acil çıkışları istifle kapatmayın.",
          "İstif alanına işaretleme yapın: maksimum yükseklik ve ölçü etiketi.",
          "Islanan veya çürüyen paletleri hemen ayırın; zayıflamış palet güvenlik riskidir.",
          "Palet kolonlarına tırmanmayın; yüksek istiflerde uygun ekipman kullanın.",
          "Çalışanlara düzenli istif eğitimi verin ve olay kayıtlarını izleyin.",
        ],
        links: [
          ["Palet çeşitleri ve seçimi", "/rehber/palet-cesitleri-ve-secimi/"],
          ["Ahşap palet fiyatları", "/ahsap-palet-fiyatlari/"],
          ["Palet fiyatları", "/palet-fiyatlari/"],
          ["Palet seçici aracı", "/araclar/palet-secici/"],
        ],
      },
    ],
    faq: [
      { q: "Boş paletler en fazla kaç adet üst üste konur?", a: "Genel uygulamada 10–15 adet makul kabul edilir; ancak zemin, palet durumu ve forklift görüşü bunu aşağı çeker. Tesisinizin güvenlik prosedürü belirleyicidir." },
      { q: "Dolu paletleri üst üste koyabilir miyim?", a: "Yalnızca alttaki palet statik yükü ve alttaki ürün ambalajı üst yükü taşıyorsa. Her ürün için istif dayanımını kontrol edin." },
      { q: "Farklı ölçülü paletleri istifleyebilir miyim?", a: "Önerilmez. Farklı ölçüler kolonu dengesiz yapar ve devrilme riskini artırır; ölçüye göre ayrı istif yapın." },
      { q: "Plastik paletler nasıl istiflenir?", a: "Birçok plastik palet iç içe geçer veya düz istiflenir. Üretici yönergesine bakın; dolu istifte plastiğin yük altında sehim yapıp yapmadığını da göz önüne alın." },
      { q: "Yanlış istif sigorta veya iş güvenliği sorununa yol açar mı?", a: "Evet, kazalarda istif düzeni de incelenir. İş sağlığı ve güvenliği prosedürünüzde istif kurallarını yazılı hale getirmeniz önerilir." },
    ],
  },
  {
    slug: "100x120-ile-80x120-palet-farki",
    title: "100x120 ile 80x120 Palet Farkı | MEPAL",
    description: "100x120 ve 80x120 (Euro) palet arasındaki ölçü, kapasite ve kullanım farkları; hangi paletin hangi yük ve araç için uygun olduğu.",
    h1: "100x120 ile 80x120 Palet Farkı Nedir?",
    answer:
      "80x120 Euro palet Avrupa'da yaygın standarttır; 100x120 palet ise daha geniş taban alanı sunan, sanayi ve ihracatta sık kullanılan ölçüdür. 100x120 yaklaşık yüzde 25 daha fazla taban alanı sağlar. Doğru seçim; ürün boyutu, raf, araç ve konteyner düzenine göre yapılır.",
    keyword: "100x120 palet 80x120 palet farkı",
    art: "euro",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 8,
    readMinutes: 5,
    related: ["euro-palet-olculeri", "palet-cesitleri-ve-secimi", "konteynere-ve-tira-kac-palet-sigar"],
    sections: [
      {
        h: "İki ölçü, iki farklı mantık",
        p: [
          "80x120 cm (800 x 1.200 mm) Euro palet, Avrupa demiryolu ve taşıma sistemleri için standartlaştırılmış, perakende ve FMCG zincirinde en yaygın ölçüdür. 100x120 cm (1.000 x 1.200 mm) ise ISO 6780 kapsamındaki ölçülerden biridir ve özellikle sanayi, kimya, içecek ve ihracat tarafında karşımıza çıkar.",
          "İkisi arasında “hangisi daha iyi” sorusunun tek cevabı yok. Fark, taban alanı ve bunun doğurduğu sonuçlardadır: daha fazla yük, farklı raf ve araç düzeni, farklı maliyet.",
        ],
      },
      {
        h: "Ölçü ve taban alanı karşılaştırması",
        table: {
          caption: "80x120 ve 100x120 palet genel karşılaştırması",
          head: ["Özellik", "80x120 (Euro)", "100x120"],
          rows: [
            ["Ölçü", "800 x 1.200 mm", "1.000 x 1.200 mm"],
            ["Taban alanı", "yaklaşık 0,96 m²", "yaklaşık 1,20 m²"],
            ["Yaygın kullanım", "Perakende, FMCG, genel dağıtım", "Sanayi, kimya, içecek, ihracat"],
            ["Standart ilişkisi", "Euro palet / EPAL ölçüsü", "ISO 6780 ölçüsü"],
            ["Ağırlık (ahşap, tipik)", "daha hafif", "daha ağır, daha çok malzeme"],
            ["Çeşitlilik", "Çok yaygın, bol stok", "Yaygın, üretimle de karşılanır"],
          ],
        },
        links: [
          ["80x120 Euro palet", "/urunler/80x120-euro-palet/"],
          ["100x120 palet", "/urunler/100x120-palet/"],
        ],
      },
      {
        h: "Taşıma kapasitesi farkı",
        p: [
          "Taşıma kapasitesi ölçüden çok yapıya (blok sayısı, kalas kalınlığı, çivi düzeni) bağlıdır. Standart bir Euro paletin dinamik taşıma kapasitesi genellikle 1.500 kg olarak anılır. 100x120 paletlerin kapasitesi ise üretime göre değişir; geniş taban sayesinde ağırlığı daha iyi dağıtır ama kirişlerin açıklığı arttığı için aynı kalınlıkta sehim riski doğar.",
          "Bu yüzden sıradan bir ahşap palet için kapasiteyi belgeye veya üreticiye sorun; yalnızca ölçüye bakarak yorum yapmayın.",
        ],
        links: [["Palet kaç kg taşır?", "/rehber/palet-kac-kg-tasir/"]],
      },
      {
        h: "Konteyner ve tır doluluğu",
        p: [
          "Palet ölçüsü, araç içi doluluk verimini doğrudan etkiler. Standart tır dorsesinde 80x120 paletlerle genellikle 33 palet, 100x120 paletlerle ise yaklaşık 26 palet gibi sayılar anılır; gerçek sayı yükleme düzeni ve yük yüksekliğine göre değişir. Konteynerde de benzer şekilde ölçü, iç genişlik ve uzunlukla uyumlu olmalıdır.",
          "Önemli olan, palet taban alanının araç alanını boşa harcamamasıdır. Ürün kolisi 100x120'ye tam oturuyorsa ve 80x120 kullanırsanız yükü taşırır ya da fazla palet kullanırsınız; tersi de geçerlidir.",
        ],
        links: [
          ["Konteynere ve tıra kaç palet sığar?", "/rehber/konteynere-ve-tira-kac-palet-sigar/"],
          ["Konteyner palet hesaplama aracı", "/araclar/konteyner-palet-hesaplama/"],
        ],
      },
      {
        h: "Hangisini ne zaman seçmeli?",
        list: [
          "Ürününüz koli ve düzenli boyda ise ve perakende zincire gidiyorsa: 80x120.",
          "Yük taban alanı geniş, hacimli veya düzensiz ise: 100x120.",
          "Avrupa'ya palet değişimi (havuz) yapılıyorsa: genelde 80x120.",
          "Raf sisteminiz belirli bir ölçüye göre kurulduysa: rafın ölçüsüne uyan palet.",
          "İçecek, boya, kimyasal gibi yoğun ürünlerde 100x120 daha dengeli olabilir.",
        ],
        p: ["Seçimi ürüne göre sistematik yapmak için palet seçici aracını da kullanabilirsiniz."],
        links: [["Palet seçici", "/araclar/palet-secici/"]],
      },
      {
        h: "Maliyet ve tedarik tarafı",
        p: [
          "100x120 palet daha çok ahşap kullandığından birim maliyeti genellikle 80x120'ye göre daha yüksektir; fakat bir palete daha çok ürün sığdırdığınız için palet başına nakliye ve elleçleme maliyeti düşebilir. Doğru karşılaştırma, birim palet fiyatı değil, taşınan ürün başına toplam maliyettir.",
          "Güncel fiyatlar için fiyat tablolarına bakın veya ihtiyacınızı belirterek teklif alın. İkinci el seçenekler de iki ölçüde bulunur.",
        ],
        links: [
          ["Euro palet fiyatları", "/euro-palet-fiyatlari/"],
          ["Palet fiyatları", "/palet-fiyatlari/"],
        ],
      },
    ],
    faq: [
      { q: "100x120 palet Euro palet midir?", a: "Hayır. Euro palet 80x120 cm ölçüsündedir. 100x120 ayrı bir ölçüdür ve ISO 6780 kapsamında yer alır." },
      { q: "80x120 palet 100x120 raflarda kullanılır mı?", a: "Fiziksel olarak oturabilir ancak kiriş açıklığına göre güvenli olmayabilir. Rafın taşıma şartnamesine ve kiriş konumuna bakmak gerekir." },
      { q: "Hangi palet ihracat için daha uygundur?", a: "Varış ülkesinin ve alıcının standardına bağlıdır. Avrupa için 80x120 yaygın; Asya ve ABD çizgisinde 100x120 veya 114x114 gibi ölçüler de görülür." },
      { q: "Palet ölçüsünü değiştirmek ne kazandırır?", a: "Araç ve konteyner dolulukta artış ya da raf uyumu sağlayabilir. Hesaplama aracıyla farklı ölçüleri denemek faydalıdır." },
      { q: "Özel ölçülü palet gerekli mi?", a: "Ürün standart ölçülere oturmuyorsa özel ölçü palet ekonomik olabilir. Bu durumda üretim adedi ve ölçü teklifte belirlenir." },
    ],
  },
  {
    slug: "gida-sektoru-icin-palet-secimi",
    title: "Gıda Sektörü İçin Palet Seçimi | MEPAL",
    description: "Gıda üretimi ve depolamada ahşap veya plastik palet seçimi: hijyen, koku, ISPM-15, nem ve denetim gereklilikleri.",
    h1: "Gıda Sektörü İçin Palet Seçimi",
    answer:
      "Gıdada palet ürünle doğrudan temas etmese de hijyen zincirinin parçasıdır. Temiz, kuru, kokusuz ve yapısal olarak sağlam palet şarttır. Plastik palet yıkanabilir olduğu için hijyen kritik alanlarda öne çıkar; ahşap palet ise doğru işlem ve kurulukla gıda lojistiğinde yaygın olarak kullanılmaktadır.",
    keyword: "gıda sektörü palet seçimi",
    art: "euro",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 8,
    readMinutes: 6,
    related: ["ahsap-palet-mi-plastik-palet-mi", "ispm-15-nedir", "plastik-palet-cesitleri"],
    sections: [
      {
        h: "Gıdada palet neden ayrı bir konu?",
        p: [
          "Gıda üretim ve depolama tesisleri BRC, IFS, FSSC 22000 gibi standartlar ya da müşteri denetimleri nedeniyle çapraz bulaşma risklerini yönetmek zorundadır. Palet, ürünle doğrudan temas etmese de tesisin içinde dolaşır, zeminle ve ortamla temas eder; kirli, nemli veya kokulu bir palet kaynağa dönüşebilir.",
          "Bu yazı genel bir yönlendirmedir. Hangi palet türünün kabul edileceği, firmanızın gıda güvenliği sistemi ve müşterinizin spesifikasyonu ile belirlenir.",
        ],
      },
      {
        h: "Ahşap palet gıda için uygun mu?",
        p: [
          "Ahşap palet gıda sektöründe yaygın biçimde kullanılır. Önemli olan paletin temiz, kuru, küf ve koku içermeyen, yüzeyi çıkıntısız ve kimyasal işlem görmemiş olmasıdır. Isıl işlem (HT) ahşabı böceklerden arındırır; kimyasal işlem uygulanmadığı için gıda ortamlarında tercih edilen bir yöntemdir.",
          "Ahşabın dezavantajı nem emmesi ve gözenekli yapısıdır. Islandığında küflenebilir, uzun süre depoda kötü koşulda bekleyen paletlerde mikrobiyal yük artabilir. Bu nedenle kapalı ve kuru depolama, kırık tahtaların ayıklanması ve düzenli kontrol şarttır.",
        ],
      },
      {
        h: "Plastik palet: yıkanabilir ve gözeneksiz",
        p: [
          "Plastik paletler (HDPE veya PP) nem emmez, yıkanabilir ve dezenfekte edilebilir. Çivi, kıymık ve tahta kırığı riski yoktur. Bu nedenle süt ürünleri, et, hazır yemek, ilaç-gıda arası hijyen alanları gibi temizliğin kritik olduğu bölgelerde tercih edilir.",
          "Bununla birlikte plastik palet ahşaba göre pahalıdır, kaygan olabilir ve yük altında sehim yapabilir. Gıda ile temas edebilecek bölgede kullanılacaksa malzemenin gıda uyumluluğu için üreticiden belge istenmelidir.",
        ],
        links: [
          ["Plastik palet ürünü", "/urunler/plastik-palet/"],
          ["Plastik palet fiyatları", "/plastik-palet-fiyatlari/"],
        ],
      },
      {
        h: "Karşılaştırma tablosu",
        table: {
          caption: "Gıda lojistiğinde ahşap ve plastik palet",
          head: ["Kriter", "Ahşap palet", "Plastik palet"],
          rows: [
            ["Hijyen", "Temiz ve kuru ise yeterli; gözenekli yapı", "Yıkanabilir, gözeneksiz"],
            ["Nem", "Emer; küf riski", "Emmez"],
            ["Koku", "Doğal koku; kimyasal koku olmamalı", "Genelde kokusuz"],
            ["Çivi ve kıymık", "Olabilir; kontrol gerekir", "Yok"],
            ["Maliyet", "Daha düşük", "Daha yüksek"],
            ["Tamir", "Tamir edilebilir", "Genelde değişim"],
            ["İhracat", "ISPM-15 gerektirir", "ISPM-15 gerekmez"],
          ],
        },
      },
      {
        h: "İhracatta ISPM-15 ve ahşap",
        p: [
          "Gıda ürünlerini ihraç ediyorsanız ahşap palet ISPM-15 kurallarına uygun olmalıdır: ısıl işlem (HT) görmüş ve üzerinde uluslararası damga bulunan palet. Plastik palette bu şart yoktur; bu da bazı ihracatçılar için sadeleştirici bir avantajdır.",
          "İthalatçı ülke veya alıcı ek şartlar da isteyebilir (ör. kimyasal işlem yapılmamış kanıtı, belirli ağırlık, hijyen belgeleri). Bu şartları sipariş öncesinde yazılı olarak teyit edin.",
        ],
        links: [
          ["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"],
          ["İhracat paleti", "/urunler/ihracat-paleti/"],
        ],
      },
      {
        h: "Seçim için kontrol listesi",
        list: [
          "Müşteri veya denetim standardınız hangi palet türünü zorunlu kılıyor?",
          "Palet ürünle ya da açık ambalajla temas edecek mi?",
          "Tesiste yıkama veya dezenfeksiyon süreci var mı?",
          "Dış mekânda depolanan palet iç alana giriyor mu? Böyleyse bir ayırma kuralı ekleyin.",
          "İhracat var mı? Evetse ISPM-15 damgasını kontrol edin.",
          "Palet kokusunu veya koku taşıyabilecek kimyasal kalıntıyı kontrol edin.",
        ],
      },
      {
        h: "Satın alırken ve kullanırken",
        p: [
          "Tedarikçiden, paletlerin ısıl işlemli olup olmadığını, nem düzeyini ve kimyasal işlem uygulanıp uygulanmadığını sorun. Teslim aldığınızda paletleri sevkiyat öncesi gözle kontrol edin; yağ, küf, böcek izi veya kötü koku varsa ayırın.",
          "Gıda sektöründe düzenli sipariş verecekseniz palet kalite sınıfını sabit tutmak, denetim sürekliliği için de faydalıdır. Sektör çözümleri ve ihtiyacınıza uygun palet için teklif isteyebilirsiniz.",
        ],
        links: [
          ["Gıda ve içecek sektörü", "/sektorler/gida-ve-icecek/"],
          ["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"],
          ["Teklif al", "/teklif-al/"],
        ],
      },
    ],
    faq: [
      { q: "Gıdada ahşap palet kullanılabilir mi?", a: "Evet, temiz ve kuru ise yaygın olarak kullanılır. Müşteri veya denetim standardınız farklı bir şart koyuyorsa ona uyun." },
      { q: "ISPM-15 gıda ihracatında zorunlu mu?", a: "Ahşap ambalaj malzemesi (palet dâhil) ihracatta birçok ülke tarafından ISPM-15 uyumlu olmayı gerektirir. Plastik palet kapsam dışındadır." },
      { q: "Plastik palet her zaman daha hijyenik midir?", a: "Yıkanabilir olduğu için hijyen yönetimi kolaydır, ancak temizlenmediği sürece hijyenik değildir. Uygun temizlik prosedürüyle birlikte değerlendirilmelidir." },
      { q: "Paletlerde koku gıdayı etkiler mi?", a: "Evet, özellikle kimyasal veya küf kokusu ambalajsız ya da hassas ürünlerde risk oluşturabilir. Kokusuz ve kuru palet tercih edilmelidir." },
      { q: "Boyalı veya kimyasal işlemli palet kullanılır mı?", a: "Gıda alanında genelde kaçınılır. Palete uygulanan işlemin türünü tedarikçiden yazılı alın." },
    ],
  },
  {
    slug: "ihracatta-palet-ve-ambalaj-kurallari",
    title: "İhracatta Palet ve Ambalaj Kuralları | MEPAL",
    description: "İhracatta ahşap palet ve ambalaj kuralları: ISPM-15 damgası, AB, ABD, Kanada, Çin, Avustralya gereklilikleri ve kontrol listesi.",
    h1: "İhracatta Palet ve Ambalaj Kuralları",
    answer:
      "Ahşap palet ve sandık ihracatında dünya genelinde esas standart ISPM-15'tir: ahşabın ısıl işlem (HT) görmesi ve üzerinde uluslararası IPPC damgası taşıması gerekir. AB, ABD, Kanada, Çin ve Avustralya bu standardı uygular; bazı ülkeler ek şart ister. Kesin kural için ithalatçı ülke otoritesine danışın.",
    keyword: "ihracat palet kuralları",
    art: "ispm",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 9,
    readMinutes: 6,
    related: ["ispm-15-nedir", "gida-sektoru-icin-palet-secimi", "konteynere-ve-tira-kac-palet-sigar"],
    sections: [
      {
        h: "Temel kural: ISPM-15",
        p: [
          "ISPM-15 (Uluslararası Bitki Sağlığı Önlemleri Standardı No. 15), uluslararası ticarette kullanılan ahşap ambalaj malzemesinin zararlı taşımasını önlemek için hazırlanmış IPPC standardıdır. Palet, sandık, kasa, takoz ve istif ağaçları kapsama girer. Standarda göre ahşap onaylı bir işlemden geçirilir ve kalıcı bir damgayla işaretlenir.",
          "Türkiye'den yapılan ihracatta en yaygın yöntem ısıl işlemdir (HT): ahşabın merkezinde en az 56 °C sıcaklığa ulaşılıp bu sıcaklık en az 30 dakika korunur. Damgada IPPC işareti, ülke kodu (TR), üretici/işleme firma kodu ve işlem kodu (HT) bulunur.",
        ],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"]],
      },
      {
        h: "Hangi ürünler kapsam dışı?",
        p: [
          "İşlenmiş ahşap ürünleri (kontrplak, OSB, lif levha gibi), kalınlığı 6 mm veya altında olan ince ahşap, şarap-viski fıçıları ve hediye kutuları gibi bazı ürünler ISPM-15 kapsamı dışındadır. Plastik ve metal paletler de kapsam dışıdır. Yine de bazı ülkeler ek belge isteyebilir.",
        ],
      },
      {
        h: "Ülkelere göre genel görünüm",
        table: {
          caption: "Başlıca hedeflerde ahşap ambalaj şartları (genel özet)",
          head: ["Hedef", "ISPM-15 uygulaması", "Dikkat edilecek noktalar"],
          rows: [
            ["Avrupa Birliği", "Zorunlu; HT damgalı ahşap kabul edilir", "Kimyasal (MB) uygulamasına karşı katı yaklaşım; HT tercih edilir"],
            ["ABD", "Zorunlu", "Damganın okunaklı ve kalıcı olması; ihlalde mal iade veya imha edilebilir"],
            ["Kanada", "Zorunlu", "Damga denetimi ve kısmen sıkı sınır kontrolü"],
            ["Çin", "Zorunlu", "Damganın doğru ve silinmemiş olması; tekrar kullanılmış ahşapta risk"],
            ["Avustralya", "Zorunlu", "Ek şartlar uygulanır; kabuksuz, temiz ve zararlısız olması beklenir"],
            ["Yeni Zelanda", "Zorunlu", "Biyogüvenlik odaklı, katı denetim"],
            ["Orta Doğu ve diğer ülkeler", "Çoğunda zorunlu", "Ülkeye göre farklı olabilir; alıcıdan teyit alın"],
          ],
        },
        links: [["İhracat paleti ürünü", "/urunler/ihracat-paleti/"]],
      },
      {
        h: "Damgada nelere bakılır?",
        list: [
          "IPPC işareti (başak sembolü) ve ülke kodu: Türkiye için TR.",
          "Yetkili işleme firmasının/üreticinin tescil numarası.",
          "İşlem kodu: HT (ısıl işlem); bazı ülkeler HT dışı işlemleri kabul etmeyebilir.",
          "Damga net, tam ve silinmemiş olmalı; mümkünse iki karşılıklı yüzde bulunmalıdır.",
          "Paletin tüm bileşenlerinde uyumsuz parça olmamalı; tamir edilmiş palette yeni parçalar da işlem görmüş olmalıdır.",
        ],
        p: ["MEPAL, ISPM-15 uyumlu, HT damgalı ihracat paleti temini yapar; damga ve işlem belgeleri sipariş sırasında teyit edilmelidir."],
      },
      {
        h: "Ambalaj tarafında dikkat edilecekler",
        p: [
          "Sadece palet değil, ambalaj sisteminin tamamı sevkiyat güvenliğini belirler. Ahşap sandıklarda ve takozlarda da ISPM-15 aranır. Yük palet üstünde çıkıntı yapmamalı, streç film ve çemberle sabitlenmeli, nemli iklim geçişi için gerekirse nem emici veya bariyer film kullanılmalıdır.",
          "Konteyner içi doluluk için palet ölçüsünü yük ölçüsüne göre belirlemek navlun maliyetini doğrudan etkiler. Hesaplama aracı farklı ölçülerle denemenizi sağlar.",
        ],
        links: [
          ["Konteyner palet hesaplama", "/araclar/konteyner-palet-hesaplama/"],
          ["Ahşap sandık", "/urunler/ahsap-sandik/"],
        ],
      },
      {
        h: "Sorun olursa ne olur?",
        p: [
          "Damgasız veya kuralsız ahşap ambalaj limanda tespit edildiğinde gönderi bekletilebilir, ahşap imha edilebilir, mal geri gönderilebilir veya yeniden ambalajlama istenebilir. Bu, hem gecikme hem ek maliyet demektir. Sorunu önlemenin en ucuz yolu, siparişte ihracat paleti istediğinizi net belirtmektir.",
        ],
      },
      {
        h: "İhracat öncesi kontrol listesi",
        steps: [
          "Hedef ülkenin güncel ahşap ambalaj şartlarını ithalatçıdan ve ülkenin bitki sağlığı otoritesinden teyit edin.",
          "Palet ve sandıklarda ISPM-15 HT damgasının net ve okunur olduğunu kontrol edin.",
          "Kabuk, böcek izi, küf ve nem yönünden gözle denetleyin.",
          "Palet ölçüsünü yük ve konteyner düzenine göre belirleyin.",
          "Yükü sabitleyin; gerekirse nem ve darbe koruması ekleyin.",
          "Belge ve fatura bilgilerinin palet bilgileriyle tutarlı olduğundan emin olun.",
        ],
        links: [
          ["Teklif al", "/teklif-al/"],
          ["İhracat ve lojistik sektörü", "/sektorler/ihracat-ve-lojistik/"],
          ["Ahşap palet fiyatları", "/ahsap-palet-fiyatlari/"],
        ],
      },
      {
        h: "Önemli uyarı",
        p: [
          "Ülke kuralları değişebilir ve bazı ülkeler ek koşullar uygular. Bu yazı genel bir özettir; kesin kural için ithalatçı ülke otoritesine danışın ve gönderi öncesi güncel şartı yazılı doğrulayın.",
        ],
      },
    ],
    faq: [
      { q: "ISPM-15 damgası olmadan ihracat yapılabilir mi?", a: "Ahşap palet ve ambalajda hedef ülkelerin çoğu damga şart koşar. Damgasız ahşap gümrükte sorun çıkarır; plastik veya metal palet seçeneği değerlendirilebilir." },
      { q: "HT mi MB mi kullanılmalı?", a: "Isıl işlem (HT) çevre dostudur ve AB dâhil birçok yerde sorunsuz kabul edilir. Metil bromür (MB) kısıtlanmıştır; güncel ihracatta HT tercih edilir." },
      { q: "Kontrplak palet ISPM-15 gerektirir mi?", a: "İşlenmiş ahşap malzeme (kontrplak, OSB vb.) kapsam dışıdır. Yine de kullanılan masif parçalar varsa onlar için gereklidir." },
      { q: "Daha önce kullanılmış palet ihraç edilebilir mi?", a: "Damgası sağlam ve palet hasarsızsa mümkündür; ancak tamir edilmiş parçalar işlem görmemişse sorun çıkarır. Bu nedenle ihracatta yeni veya doğrulanmış HT palet tercih edilir." },
      { q: "Avustralya için ek bir şey gerekiyor mu?", a: "Avustralya, kabuksuz ve zararlısız ahşap beklentisi nedeniyle daha katıdır. Gönderi öncesi ithalatçıdan güncel şartı alın." },
    ],
  },
  {
    slug: "palet-raf-sistemleri-ve-raf-yuku",
    title: "Palet Raf Sistemleri ve Raf Yükü | MEPAL",
    description: "Palet raf sistemleri çeşitleri, raf yükü ile dinamik ve statik yük farkı, palet seçimi ve raflarda güvenli kullanım rehberi.",
    h1: "Palet Raf Sistemleri ve Raf Yükü",
    answer:
      "Palet rafında paletin taşıma kapasitesi, rafa iki kiriş üzerinde oturduğu için statik veya dinamik yükten çok daha düşüktür; buna raf yükü denir. Doğru palet seçimi için rafın kiriş açıklığını, palet yapısını ve ürün ağırlığını birlikte değerlendirmek gerekir.",
    keyword: "palet raf yükü",
    art: "big",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 9,
    readMinutes: 6,
    related: ["palet-kac-kg-tasir", "palet-nasil-istiflenir", "palet-yuksekligi-kac-cm"],
    sections: [
      {
        h: "Palet rafı nedir?",
        p: [
          "Palet raf sistemi, yüklü paletlerin yatay kirişler üzerine yerleştirilerek çok katlı depolandığı metal yapıdır. Forklift ya da istif makinesi paleti kirişlere bırakır; palet iki kiriş arasında köprü gibi durur. Bu nedenle palet altı ve yan kısım yük altında farklı gerilmeler yaşar.",
          "Zemine yerleştirilen paletle rafa yerleştirilen palet aynı yükü taşıyamaz. Raf kullanımında kapasite, çoğu zaman üreticinin verdiği en düşük değerdir.",
        ],
      },
      {
        h: "Statik, dinamik ve raf yükü",
        table: {
          caption: "Üç yük tipinin karşılaştırması",
          head: ["Yük tipi", "Tanım", "Etkisi"],
          rows: [
            ["Statik yük", "Palet düz zeminde hareketsiz dururken taşıdığı yük", "Genellikle en yüksek değer"],
            ["Dinamik yük", "Palet forklift veya transpalet ile hareket halindeyken taşıdığı yük", "Statik değerden düşük"],
            ["Raf yükü", "Palet iki kirişe oturmuş haldeyken taşıyabileceği yük", "Çoğunlukla en düşük değer"],
          ],
        },
        p: ["Örneğin bir Euro palette dinamik yük kapasitesi yaklaşık 1.500 kg olarak verilirken raf yükü çok daha az, yaklaşık 1.000 kg mertebesindedir. Kesin değerler paletin tipine ve standartına göre değişir."],
        links: [["Palet kaç kg taşır?", "/rehber/palet-kac-kg-tasir/"]],
      },
      {
        h: "Raf sistemi çeşitleri",
        list: [
          "Seçmeli raf: Her palete doğrudan erişim; en yaygın sistem.",
          "Drive-in / drive-through: Forklift raf içine girer, yoğun depolama sağlar, FIFO/LIFO yapısı vardır.",
          "Push-back ve palet akış rafları: Eğimli raylar üzerinde paletler ilerler; yüksek yoğunluk ve düzen.",
          "Konsol raf: Uzun yükler (boru, profil) için; palet yerine dış tabla kullanılır.",
          "Mobil raf: Raylar üzerinde kayarak koridor sayısını azaltır.",
        ],
      },
      {
        h: "Palet seçimi raf için nasıl yapılır?",
        p: [
          "Raflarda kullanılacak palet, kiriş doğrultusuna dikkat edilerek seçilir. Euro paletin uzun kenarı kirişlere dayanıyorsa, kısa kenar yönünde yükleme yapıldığında sehim ve kırılma riski artar. Rafın kiriş açıklığına göre palet alt kirişleri (kızak) kirişle teması yeterli genişlikte olmalıdır.",
          "Ahşap paletlerde rafta kullanım için sağlam bloklu, çatlaksız ve dengeli yapı gerekir. Hasarlı veya tamir görmüş palet, yük altında raf kirişleri arasında kayabilir ve çökebilir. Plastik rafa özel (çelik takviyeli) paletler de bulunur.",
        ],
        links: [
          ["80x120 Euro palet", "/urunler/80x120-euro-palet/"],
          ["Plastik palet", "/urunler/plastik-palet/"],
        ],
      },
      {
        h: "Güvenli raf kullanımı",
        steps: [
          "Raf kapasite etiketini kontrol edin; her katın maksimum yükü yazılı olmalıdır.",
          "Palet ağırlığını ve ürün ağırlığını toplayın; raf yükünün üzerine çıkmayın.",
          "Yük paletin içinde kalmalı; çıkıntı varsa kirişe veya yan eleman çarpabilir.",
          "Paletleri kirişlere ortalı yerleştirin; bir yana kayık bırakmayın.",
          "Kırık, çürük, eğik paletleri rafa koymayın.",
          "Forklift sürücüsü eğitimli olsun; rafa çarpma ve yapısal hasarı hemen bildirsin.",
          "Raf ve palet kontrolünü periyodik hale getirin.",
        ],
      },
      {
        h: "Raf paleti seçerken maliyet dengesi",
        p: [
          "Raf için daha sağlam palet seçmek, palet maliyetini artırır. Ama rafta çöken tek bir palet, ürün kaybından iş güvenliği olayına kadar çok daha pahalıya gelir. Ağır ve değerli yükler için kalite sınıfını yüksek tutmak, tek kullanımlık ihracat yükleri için ise ekonomik sınıfı seçmek makuldür.",
          "Ürün ağırlığınız ve raf tipinizi belirterek palet danışmanından öneri alabilirsiniz.",
        ],
        links: [
          ["Palet danışmanı", "/araclar/palet-danismani/"],
          ["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"],
          ["Euro palet fiyatları", "/euro-palet-fiyatlari/"],
        ],
      },
    ],
    faq: [
      { q: "Raf yükü ile dinamik yük aynı mı?", a: "Hayır. Dinamik yük hareket halinde, raf yükü ise iki kirişe oturmuşken taşınabilen yüktür. Raf yükü genelde daha düşüktür." },
      { q: "Her palet rafa uygun mudur?", a: "Hayır. Rafta kullanılacak palet raf yükü bakımından yeterli, kırıksız ve dengeli olmalıdır. Hasarlı veya zayıf paletler rafta kullanılmamalıdır." },
      { q: "Euro paletin raf yükü kaç kg?", a: "Genel kabul olarak yaklaşık 1.000 kg mertebesindedir; kesin değer palet tipi ve standardına bağlıdır. Üreticiden teyit alın." },
      { q: "Plastik palet rafa uygun mu?", a: "Rafa özel tasarlanmış, çelik takviyeli plastik paletler uygundur. Standart plastik paletler yük altında sehim yapabilir." },
      { q: "Raf kapasitesini kim belirler?", a: "Raf üreticisi, kiriş ve dikme özelliklerine göre kat başına kapasiteyi belirler. Etiketteki değer aşılmamalıdır." },
    ],
  },
  {
    slug: "yarim-euro-palet-60x80",
    title: "Yarım Euro Palet 60x80 Nerede Kullanılır? | MEPAL",
    description: "60x80 yarım Euro palet ölçüsü, taşıma kapasitesi ve perakende, gıda ile ürün sergileme gibi kullanım alanları; ne zaman tercih edilmeli.",
    h1: "Yarım Euro Palet (60x80): Nerede Kullanılır?",
    answer:
      "Yarım Euro palet, 60x80 cm ölçüsüyle tam Euro paletin tam yarısı kadar taban alanına sahiptir. Perakende reyonları, ürün sergileme, küçük hacimli sevkiyat ve dar alanlarda tercih edilir. Tam palet gerektirmeyen düşük hacimli yüklerde alan ve nakliye tasarrufu sağlar.",
    keyword: "yarım euro palet 60x80",
    art: "euro",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 10,
    readMinutes: 5,
    related: ["euro-palet-olculeri", "palet-cesitleri-ve-secimi", "100x120-ile-80x120-palet-farki"],
    sections: [
      {
        h: "Yarım Euro palet nedir?",
        p: [
          "Yarım Euro palet, 600 x 800 mm ölçüsünde, tam boy Euro paletin (800 x 1.200 mm) taban alanının yarısı büyüklüğünde yük platformudur. Avrupa'da perakende zincirleri, “half pallet” veya “Düsseldorf palet” olarak bilinen bu ölçüyü reyon ve sergi paleti olarak yaygın kullanır.",
          "Aynı ölçü ailesinde olduğu için tam Euro paletle yan yana yerleştirilebilir; iki yarım palet bir Euro paletin yerini tutar. Bu, dağıtım ve araç yüklemede esneklik sağlar.",
        ],
      },
      {
        h: "Ölçü ve teknik özellikler",
        table: {
          caption: "Yarım Euro palet ve Euro palet karşılaştırması",
          head: ["Özellik", "Yarım Euro (60x80)", "Euro (80x120)"],
          rows: [
            ["Ölçü", "600 x 800 mm", "800 x 1.200 mm"],
            ["Taban alanı", "yaklaşık 0,48 m²", "yaklaşık 0,96 m²"],
            ["Yükseklik", "yaklaşık 14–16 cm (üretime göre)", "yaklaşık 14,4 cm (standart)"],
            ["Kapasite", "Daha düşük; dinamik yük genelde ~300–500 kg mertebesinde (tipe göre)", "Dinamik yük ~1.500 kg (standart)"],
            ["Ağırlık", "Hafif", "Daha ağır"],
          ],
        },
        p: ["Yukarıdaki kapasite değerleri tipik aralıklardır; her üretici farklı olabilir, kesin bilgi için palet teknik föyüne bakın."],
        links: [["Euro palet ölçüleri", "/rehber/euro-palet-olculeri/"]],
      },
      {
        h: "Nerelerde kullanılır?",
        list: [
          "Perakende reyonları: Ürünler paletle doğrudan mağazaya girer; kolay yerleştirme sağlar.",
          "Sergileme ve kampanya standları: İçecek, gıda, kozmetik ve bakım ürünlerinde.",
          "Küçük hacimli sevkiyatlar: Tam palet dolmayan siparişlerde.",
          "E-ticaret ve depo operasyonu: Hafif ve orta hacimli ürünlerde toplama noktaları.",
          "Dar koridorlu veya sınırlı alanlı depolar: Yer tasarrufu için.",
          "Ürün hassasiyeti: Ağır paletin gereksiz olduğu hafif ürünlerde.",
        ],
      },
      {
        h: "Avantajları ve sınırları",
        p: [
          "Yarım palet küçük yüklerde tam palet maliyetinden kaçınmanızı sağlar. Hafif olduğu için manuel taşıma ve elleçleme daha kolaydır. Reyon sergisinde müşterinin göreceği ürünü hazır sunmak için idealdir.",
          "Sınırı ise kapasitedir; ağır ve yoğun ürünler için uygun değildir. Ayrıca her depo bu ölçüye göre kurulmadığı için raf düzenine uyum kontrol edilmelidir. Yüksek istifte kolon dengesizliği riski de tam palete göre fazladır.",
        ],
      },
      {
        h: "Araç ve konteyner doluluğunda yeri",
        p: [
          "Yarım paletler araç içinde uzunlamasına veya enlemesine yerleştirilerek boş kalacak alanı değerlendirir. Tam Euro paletlerle karışık yükleme yapıldığında dorsenin kullanılabilir alanı daha verimli dolar. Hangi kombinasyonun kaç palet ettiğini hesaplama aracıyla deneyebilirsiniz.",
        ],
        links: [
          ["Konteyner palet hesaplama", "/araclar/konteyner-palet-hesaplama/"],
          ["Konteynere ve tıra kaç palet sığar?", "/rehber/konteynere-ve-tira-kac-palet-sigar/"],
        ],
      },
      {
        h: "Ahşap mı, plastik mi?",
        p: [
          "60x80 ölçüde hem ahşap hem plastik seçenek bulunur. Ahşap, ekonomik ve tamir edilebilir bir çözümdür. Plastik, özellikle perakende reyon ve gıda gibi hijyen ve düzenli görüntünün önemli olduğu yerlerde, yıkanabilir yapısıyla tercih edilir. Ayrıca plastik hafif ve ISPM-15 gerektirmediği için ihracatta pratiktir.",
          "Stok durumu ve ölçü seçenekleri değişebilir. Aradığınız yarım palet için talebinizi iletin; gerekirse özel ölçü üretim de planlanabilir.",
        ],
        links: [
          ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"],
          ["Euro palet fiyatları", "/euro-palet-fiyatlari/"],
          ["Plastik palet fiyatları", "/plastik-palet-fiyatlari/"],
        ],
      },
    ],
    faq: [
      { q: "Yarım Euro palet kaç cm?", a: "600 x 800 mm, yani 60x80 cm'dir. Tam Euro paletin 80x120 cm ölçüsünün yarısı kadar taban alanına sahiptir." },
      { q: "Yarım palet kaç kg taşır?", a: "Üretim ve tipe göre değişir; genelde tam Euro paletten belirgin biçimde düşüktür. Kesin değeri üreticinin teknik föyünden doğrulayın." },
      { q: "Yarım palet EPAL damgalı mıdır?", a: "EPAL kapsamında yarım palet standardı vardır ancak damgalı palet resmi lisansa bağlıdır. MEPAL EPAL palet üretimi yapmaz; ölçüye uygun alternatifler sunar." },
      { q: "İki yarım palet bir Euro palet yerine geçer mi?", a: "Taban alanı olarak evet; yan yana yerleştirildiğinde bir Euro palet alanını kaplar. Ancak ağırlık ve stabilite için ayrı değerlendirme gerekir." },
      { q: "Özel adette yarım palet temin edilir mi?", a: "Stok ve üretim durumuna göre değişir. Adet ve ölçüyü belirterek teklif alabilirsiniz." },
    ],
  },
  {
    slug: "palet-havuzu-ve-palet-kiralama",
    title: "Palet Havuzu ve Palet Kiralama | MEPAL",
    description: "Palet havuzu ve kiralama sistemi nasıl çalışır; satın almaya göre avantajları, riskleri ve hangi işletmeler için uygun olduğu.",
    h1: "Palet Havuzu ve Palet Kiralama Nedir?",
    answer:
      "Palet havuzu, paletlerin satın alınmak yerine bir sağlayıcıdan kiralandığı ve kullanım sonrası iade edildiği sistemdir. Yüksek hacimli ve düzenli dönüşlü tedarik zincirlerinde sermaye ve yönetim yükünü azaltır. Tek yönlü ve düşük hacimli kullanımlarda ise satın alma çoğu zaman daha mantıklıdır.",
    keyword: "palet havuzu palet kiralama",
    art: "service",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 10,
    readMinutes: 6,
    related: ["palet-maliyetini-dusurmenin-yollari", "epal-palet-ile-standart-palet-farki", "ikinci-el-palet-alirken-dikkat-edilecekler"],
    sections: [
      {
        h: "Palet havuzu nasıl çalışır?",
        p: [
          "Palet havuzunda (pooling) bir sağlayıcı standart paletleri üreticilerden, perakendecilerden ve lojistik firmalarından oluşan ağa kiralar. Kullanıcı paleti teslim alır, yükler, müşteriye gönderir; palet sağlayıcının ağındaki toplama noktalarından geri alınır. Sağlayıcı paletleri kontrol eder, tamir eder ve yeniden dağıtıma sokar.",
          "Avrupa'da EPAL ve benzeri sistemler, değiştirilebilir (exchange) palet mantığıyla çalışır; kiralama sistemlerinde ise palet sağlayıcıya aittir ve kullanım süresi için ücret ödenir.",
        ],
      },
      {
        h: "Üç temel model",
        table: {
          caption: "Palet tedarik modelleri",
          head: ["Model", "Nasıl işler", "Uygun olduğu durum"],
          rows: [
            ["Satın alma", "Palet işletmenin olur; satış, kullanım ve atma size aittir", "Tek yönlü sevkiyat, düşük hacim, ihracat"],
            ["Değişim (exchange)", "Aynı tip dolu palet teslim, boş palet geri alınır", "Kapalı döngü, güvenilir ortaklar"],
            ["Kiralama / havuz", "Palet sağlayıcıya aittir; kullanım süresi için ödeme yapılır", "Yüksek hacim, düzenli dönüş, çok noktalı dağıtım"],
          ],
        },
      },
      {
        h: "Kiralamanın avantajları",
        list: [
          "Yatırım yok: Palet stoklamak için sermaye bağlamazsınız.",
          "Standart kalite: Palet türü ve durumu sabit ve kontrollüdür.",
          "Yönetim yükü azalır: Tamir, ayıklama ve depolama sağlayıcıya aittir.",
          "Ölçeklenebilirlik: Mevsimsel zirvelerde esnek miktar.",
          "Hijyen ve standart: Özellikle gıda ve FMCG zincirinde tutarlı kalite.",
        ],
      },
      {
        h: "Riskler ve sınırlar",
        p: [
          "Kiralama, paletin geri dönüşüne dayanır. Alıcı paleti iade etmezse ya da kaybederse ücret ve kayıp sizde kalır; takip süreci gerekir. İhracatta ise palet yurt dışında kalabileceğinden, tek yönlü sevkiyatlarda kiralama genelde uygun değildir.",
          "Ayrıca sözleşmedeki günlük/aylık ücret, hasar, kayıp ve minimum süre şartları net okunmalıdır. Kiralık palete ihtiyaç duyulan her ürün grubu için sağlayıcının ağı bölgenizi kapsamayabilir.",
        ],
      },
      {
        h: "Satın almak ne zaman daha mantıklı?",
        p: [
          "Tek yönlü gönderilen, geri dönmeyen yüklerde (ihracat, proje, tek seferlik teslimat) satın alma açıkça daha uygundur. Ayrıca düşük hacimde ve yerel dağıtımda, ikinci el palet ya da tamirli palet kullanmak maliyet açısından çoğu zaman en dengeli seçenektir.",
          "Karar verirken toplam sahip olma maliyetini hesaplayın: satın alma bedeli, depolama, kayıp, tamir ve elden çıkarma maliyetleri ile kiralama bedelini karşılaştırın.",
        ],
        links: [
          ["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"],
          ["Palet fiyatları", "/palet-fiyatlari/"],
          ["Palet alım satım hizmeti", "/hizmetler/palet-alim-satim/"],
        ],
      },
      {
        h: "Karar için pratik sorular",
        steps: [
          "Paletler size geri dönüyor mu, yoksa alıcıda mı kalıyor?",
          "Yıllık palet adediniz ve dalgalanma aralığınız nedir?",
          "Palet kaybı ve hasar takibini yönetebilecek süreç var mı?",
          "Alıcılarınız değişim paletini kabul ediyor mu?",
          "Satın alma, tamir ve geri dönüşüm toplam maliyetini hesapladınız mı?",
        ],
      },
      {
        h: "MEPAL ne sunar?",
        p: [
          "MEPAL bir palet havuzu operatörü değildir; Gebze deposundan palet satışı, ikinci el alım-satım, tamir ve hurda geri alım hizmeti sunar. Döngüsel bir düzen için pratik yol, kullanılmış paletleri yeniden satın alıp onarılabilenleri tekrar piyasaya sokmaktır.",
          "Düzenli ve yüksek adetli ihtiyaçlarınız için toptan tedarik ve geri alım koşulları teklifle netleşir.",
        ],
        links: [
          ["Toptan palet hizmeti", "/hizmetler/toptan-palet/"],
          ["Teklif al", "/teklif-al/"],
        ],
      },
    ],
    faq: [
      { q: "Palet kiralama Türkiye'de yaygın mı?", a: "Perakende ve FMCG zincirlerinde ve uluslararası sistemlerde kullanılır; ancak yerel sanayide satın alma ve ikinci el hâlâ yaygındır." },
      { q: "Kiralık palet ihracatta kullanılır mı?", a: "Palet geri dönmeyeceği için genellikle uygun değildir. İhracatta ISPM-15 uyumlu, satın alınan tek yönlü palet tercih edilir." },
      { q: "Palet değişimi (exchange) ile kiralama aynı mı?", a: "Hayır. Değişimde aynı tip paleti karşılıklı verirsiniz; kiralamada palet sağlayıcıya aittir ve kullanım için ücret ödenir." },
      { q: "MEPAL palet kiralıyor mu?", a: "MEPAL kiralama havuzu işletmez; satış, ikinci el alım-satım, tamir ve geri alım hizmeti verir." },
      { q: "Kiralamada kaybolan palet kime yazılır?", a: "Sözleşmeye göre değişir; genelde kullanıcı kayıp ve hasardan sorumludur. Sözleşme şartlarını önceden okuyun." },
    ],
  },
  {
    slug: "palet-omru-nasil-uzatilir",
    title: "Palet Ömrü Nasıl Uzatılır? | MEPAL",
    description: "Ahşap ve plastik paletlerin ömrünü uzatmanın yolları: doğru depolama, forklift kullanımı, nem kontrolü ve zamanında tamir.",
    h1: "Palet Ömrü Nasıl Uzatılır?",
    answer:
      "Palet ömrünü en çok nem, forklift hasarı ve aşırı yükleme kısaltır. Paletleri kuru ve düz zeminde saklamak, çatalı doğru yerleştirmek, kapasiteyi aşmamak ve küçük hasarları zamanında onartmak ömrü belirgin biçimde uzatır. Düzenli bakım yeni palet alımını geciktirir.",
    keyword: "palet ömrü uzatma",
    art: "service",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 11,
    readMinutes: 5,
    related: ["palet-maliyetini-dusurmenin-yollari", "palet-kalite-siniflari", "hurda-paletinizi-nasil-degerlendirirsiniz"],
    sections: [
      {
        h: "Palet neden erken ömrünü tamamlar?",
        p: [
          "Çoğu palet normal aşınmadan değil, kötü kullanım ve saklama koşullarından dolayı erken biter. Forklift çatalı tahtayı kırar, bir yağmur paleti ıslatır, aşırı yükleme kızağı çatlatır. Bunların hepsi önlenebilir.",
          "Palet ömrünü uzatmak, yeni alım maliyetini düşürmenin en doğrudan ve düşük riskli yoludur: elinizdeki paletten yıllarca daha fazla verim alırsınız.",
        ],
      },
      {
        h: "Ömrü etkileyen başlıca faktörler",
        table: {
          caption: "Palet ömrünü kısaltan nedenler ve çözümler",
          head: ["Sebep", "Etkisi", "Çözüm"],
          rows: [
            ["Nem ve yağmur", "Çürüme, küf, çivi korozyonu", "Kapalı ve kuru depolama, zemin ayrımı"],
            ["Forklift çatalı hasarı", "Kırık tahta ve blok", "Eğitim, çatalı tam ve düz sokmak"],
            ["Aşırı yükleme", "Çatlak kızak, sehim", "Kapasiteyi aşmamak"],
            ["Yanlış istif", "Alt palet ezilmesi", "İstif kurallarına uyum"],
            ["Kirli ve ıslak zemin", "Hızlı yıpranma", "Düz, temiz zemin"],
            ["Ertelenmiş tamir", "Küçük hasarın büyümesi", "Zamanında onarım"],
          ],
        },
      },
      {
        h: "Depolama ve nem kontrolü",
        list: [
          "Paletleri kapalı alanda veya üstü örtülü yerde saklayın.",
          "Doğrudan zemine koymayın; ızgara veya tahta ile zeminden ayırın.",
          "Dış mekânda bekleyecekse örtü kullanın ve altından hava dolaşımı bırakın.",
          "Islanan paletleri istife koymadan önce kurutun.",
          "Küf ve çürümenin ilk işaretlerinde paleti ayırın.",
        ],
        p: ["Plastik paletler nemden etkilenmez; ancak güneş ışığında uzun süre kalırsa UV nedeniyle gevrekleşebilir."],
      },
      {
        h: "Forklift ve elleçleme alışkanlıkları",
        steps: [
          "Çatalları paletin girişlerine düz ve tam hizalı sokun.",
          "Paleti çatalla sürüklemeyin ve yana vurmayın.",
          "Boş paletleri atmayın; kaldırın ve bırakın.",
          "Yükü kaldırırken ağırlığın çatallara dengeli oturduğundan emin olun.",
          "Sürücüleri düzenli eğitimle bilgilendirin; palet hasarını işe dahil ölçün.",
        ],
        links: [["Palet nasıl istiflenir?", "/rehber/palet-nasil-istiflenir/"]],
      },
      {
        h: "Zamanında tamir ve bakım",
        p: [
          "Tek tahtası kırılan bir palet birkaç kuruşluk onarımla yeniden hizmete girer; ertelenirse blok hasarı ve toplam kayıp doğar. Düzenli ayıklama yapın: sağlam, tamirlik ve hurda gruplarını ayırın. Tamirlik paletleri biriktirip toplu onartmak ekonomik olur.",
          "Tamir sırasında kullanılan tahta ve çivi, orijinal palet kalitesine uygun olmalıdır. İhracat paletinde yeni parçalar ISPM-15 uygunluğunu da taşımalıdır.",
        ],
        links: [
          ["Palet tamiri hizmeti", "/hizmetler/palet-tamiri/"],
          ["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"],
        ],
      },
      {
        h: "Doğru paleti doğru yerde kullanın",
        p: [
          "Her palet her iş için tasarlanmamıştır. Tek kullanımlık ekonomik palet ağır raf yükü için, raf paleti de tek yönlü ihracat için gereksiz pahalıdır. Kullanım amacına uygun kalite sınıfı seçmek ömrü uzatır ve maliyeti dengeler.",
          "Yeniden kullanıma uygun, yüksek devir yapan operasyonlarda sağlam yapılı veya plastik palet toplamda daha ekonomik olabilir.",
        ],
        links: [
          ["Sıfır ahşap palet", "/urunler/sifir-ahsap-palet/"],
          ["Ahşap palet fiyatları", "/ahsap-palet-fiyatlari/"],
          ["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"],
        ],
      },
      {
        h: "Ömrü sonlanan palet ne olur?",
        p: [
          "Tamir edilemeyecek hale gelen palet hurdaya ayrılır. Hurda paletler ahşap atık olarak geri dönüşüme verilir; bu hem atık maliyetini düşürür hem döngüsel ekonomiye katkı sağlar. Ayrıştırma ve toplu teslim için hurda palet hizmetine başvurabilirsiniz.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"]],
      },
    ],
    faq: [
      { q: "Ahşap palet ortalama kaç yıl kullanılır?", a: "Süre kullanım yoğunluğuna, yüke ve saklama koşullarına göre çok değişir. Bu nedenle tek bir sayı vermek doğru olmaz; bakımlı paletler belirgin biçimde daha uzun hizmet verir." },
      { q: "Palet yağmurda kalırsa ne olur?", a: "Islanan ahşap zamanla çürüyebilir, küflenebilir, çiviler paslanabilir. Kuruması beklenmeli ve zayıflayanlar ayrılmalıdır." },
      { q: "Tamir edilen palet aynı taşıma gücünü korur mu?", a: "Doğru malzeme ve işçilikle onarılan palet büyük oranda aynı işlevi görür; ancak ağır yük ve raf kullanımında durumu kontrol etmek gerekir." },
      { q: "Plastik palet ömrü ahşaptan uzun mudur?", a: "Genelde evet; ancak yük, sıcaklık ve UV maruziyetine bağlıdır. İlk maliyeti daha yüksektir." },
      { q: "Palet bakımını kim yapmalı?", a: "Kendi imkânınız yoksa tamir hizmeti verenlerle düzenli bir tamir ve ayıklama planı kurmak pratik olur." },
    ],
  },
  {
    slug: "plastik-palet-cesitleri",
    title: "Plastik Palet Çeşitleri ve Seçimi | MEPAL",
    description: "Kızaklı, ızgara, kapalı, iç içe geçen ve rafa uygun plastik palet çeşitleri; kullanım alanları, avantajları ve seçim ölçütleri.",
    h1: "Plastik Palet Çeşitleri: Hangi Tip Ne İçin?",
    answer:
      "Plastik paletler tabana ve üst yüzeye göre kızaklı, ayaklı, ızgaralı, kapalı yüzeyli, iç içe geçen (nestable) ve raf için çelik takviyeli gibi tiplere ayrılır. Doğru tip; yük ağırlığı, raf kullanımı, hijyen ihtiyacı ve istif şekline göre seçilir.",
    keyword: "plastik palet çeşitleri",
    art: "plastic",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 11,
    readMinutes: 6,
    related: ["ahsap-palet-mi-plastik-palet-mi", "gida-sektoru-icin-palet-secimi", "palet-raf-sistemleri-ve-raf-yuku"],
    sections: [
      {
        h: "Plastik palet neden tercih edilir?",
        p: [
          "Plastik paletler genellikle HDPE (yüksek yoğunluklu polietilen) veya PP (polipropilen) ile üretilir. Nem emmez, çürümez, çivi ve kıymık içermez, yıkanabilir ve ISPM-15 gerektirmez. Bu özellikler özellikle gıda, ilaç, kimya ve ihracat süreçlerinde avantaj sağlar.",
          "Karşılığında ilk maliyet ahşaba göre yüksektir ve tamir edilemez. Bu yüzden tip seçimi önemlidir: yanlış tipte plastik palet hem pahalıya gelir hem de yük altında sorun çıkarır.",
        ],
        links: [["Plastik palet ürünü", "/urunler/plastik-palet/"]],
      },
      {
        h: "Alt yapıya göre çeşitler",
        table: {
          caption: "Plastik palet alt yapı tipleri",
          head: ["Tip", "Özellik", "Uygun kullanım"],
          rows: [
            ["Kızaklı (runner)", "Alt tarafta 2–3 kızak; transpalet ve raf için sağlam taban", "Genel depolama, raf, ağır yük"],
            ["Ayaklı (9 ayak)", "Dokuz ayak üzerinde; dört yönden girişli", "Hafif ve orta yük, dağıtım"],
            ["Tam taban / kapalı alt", "Alt yüzey kapalı", "Konveyör hatlar ve otomasyon"],
            ["İç içe geçen (nestable)", "Boşken birbirinin içine geçer", "Boş dönüşte yer tasarrufu, kapalı döngü"],
          ],
        },
      },
      {
        h: "Üst yüzeye göre çeşitler",
        list: [
          "Izgaralı (açık) üst: Sıvı ve toz akışına izin verir, hafif yapı, yıkama ve havalandırma kolaydır.",
          "Kapalı (düz) üst: Küçük ürünlerin altına düşmesini ve sızıntıyı engeller, hijyenik yüzey sağlar.",
          "Kaymaz yüzeyli: Üstüne ısıl kaymazlık deseni; dar ürün ve düşük sürtünmeli ambalaj için.",
          "Kenar çıtalı (lip): Yükün kaymasını önleyen yükseltilmiş kenar.",
        ],
      },
      {
        h: "Özel amaçlı tipler",
        list: [
          "Çelik takviyeli: Raf yükü gereken ağır uygulamalar için içinde çelik profil olan paletler.",
          "Hijyenik / gıda sınıfı: Düz, kapalı ve kolay temizlenir yüzeyli; gıda ve ilaç alanlarında.",
          "Tek kullanımlık (ihracat) plastik palet: Hafif yapılı, tek seferlik, ISPM-15 gerektirmez.",
          "Katlanır ve demonte sistemler: Parçalı veya katlanır yapıları bazı uygulamalarda yer tasarrufu için kullanılır.",
          "Yarım ve çeyrek palet: Perakende ve reyon kullanımına uygun küçük ölçüler.",
        ],
        p: ["Bu tiplerin hepsi tüm ölçü ve yüklerde bulunmaz; stok ve üretim durumuna göre seçenekler değişir."],
      },
      {
        h: "Yük kapasitesi ve raf kullanımı",
        p: [
          "Plastik paletin üç yük değeri ahşapta olduğu gibi birbirinden farklıdır: statik, dinamik ve raf yükü. Hafif ızgaralı bir palet dinamik yükte yeterli olabilir ama rafta kirişler arasında sehim yapar. Rafa gidecek paletlerde üreticinin raf yükü değerine ve çelik takviye olup olmadığına bakın.",
          "Sıcaklık da kapasiteyi etkiler; yüksek ısıda plastik yumuşar, çok düşük ısıda ise gevrekleşir. Soğuk hava depolarında kullanılacaksa o sıcaklığa uygun malzeme seçin.",
        ],
        links: [["Palet raf sistemleri ve raf yükü", "/rehber/palet-raf-sistemleri-ve-raf-yuku/"]],
      },
      {
        h: "Seçim kontrol listesi",
        steps: [
          "Yükün ağırlığını ve ambalaj tipini belirleyin.",
          "Rafta mı, zeminde mi, konveyörde mi kullanılacak karar verin.",
          "Hijyen ihtiyacı (gıda, ilaç) varsa kapalı ve kolay temizlenen yüzey seçin.",
          "Boş paletleri geri mi göndereceksiniz? Evetse iç içe geçen tipi değerlendirin.",
          "Sıcaklık ve UV maruziyetini göz önünde bulundurun.",
          "Ölçüyü araç, konteyner ve rafa göre kontrol edin.",
        ],
        links: [["Palet seçici aracı", "/araclar/palet-secici/"]],
      },
      {
        h: "Maliyet ve tedarik",
        p: [
          "Plastik palet fiyatı tip, ağırlık, malzeme (yeni veya geri dönüştürülmüş) ve adede göre değişir. Güncel fiyatları fiyat tablosundan inceleyebilir, ihtiyacınızı belirterek teklif alabilirsiniz. Karşılaştırma yaparken palet başına değil, kullanım ömrü boyunca toplam maliyete bakın.",
        ],
        links: [
          ["Plastik palet fiyatları", "/plastik-palet-fiyatlari/"],
          ["Palet fiyatları", "/palet-fiyatlari/"],
          ["Teklif al", "/teklif-al/"],
        ],
      },
    ],
    faq: [
      { q: "Plastik palet ISPM-15 gerektirir mi?", a: "Hayır. ISPM-15 yalnızca ahşap ambalaj malzemesini kapsar; plastik palet kapsam dışıdır." },
      { q: "Kızaklı palet mi, ayaklı palet mi?", a: "Kızaklı paletler genelde daha sağlam taban ve raf uyumu sağlar; ayaklı paletler daha hafif ve ekonomiktir. Kullanım ve yüke göre seçin." },
      { q: "Plastik palet rafa uygun mu?", a: "Çelik takviyeli ve raf yükü belirtilen tipler uygundur. Standart hafif paletler rafta sehim yapabilir." },
      { q: "Plastik palet tamir edilebilir mi?", a: "Genellikle kolay tamir edilemez; hasar durumunda yenilenir veya geri dönüşüme verilir." },
      { q: "Geri dönüştürülmüş plastik palet kalitesi nasıldır?", a: "Geri dönüştürülmüş malzemeden üretilen paletler ekonomik olabilir; ancak mekanik özellikleri üreticiye göre değişir, yük değerlerini teyit edin." },
    ],
  },
  {
    slug: "palet-maliyetini-dusurmenin-yollari",
    title: "Palet Maliyetini Düşürmenin 10 Yolu | MEPAL",
    description: "Palet giderlerini azaltmanın 10 pratik yolu: doğru ölçü, ikinci el, tamir, toptan alım, geri alım ve hasar kontrolü.",
    h1: "Palet Maliyetini Düşürmenin 10 Yolu",
    answer:
      "Palet maliyeti yalnızca birim alım bedeli değildir; nakliye, hasar, kayıp ve elden çıkarma da içindedir. Doğru ölçü ve kalite sınıfı, ikinci el ve tamirli palet, toptan alım, geri alım ve hasar kontrolü birlikte uygulandığında toplam gider belirgin şekilde düşer.",
    keyword: "palet maliyeti düşürme",
    art: "service",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 12,
    readMinutes: 5,
    related: ["palet-omru-nasil-uzatilir", "palet-havuzu-ve-palet-kiralama", "palet-kalite-siniflari"],
    sections: [
      {
        h: "Maliyet nerelerden oluşur?",
        p: [
          "Palet gideri birçok kalemin toplamıdır: alım bedeli, depolama alanı, taşıma, hasar nedeniyle yenileme, kayıp ve atık. Sadece alım fiyatını düşürmeye odaklanmak, diğer kalemlerde kaybettirebilir. Aşağıdaki yöntemlerin çoğu bu kalemlerin birden fazlasını aynı anda azaltır.",
          "Bu yazıda rakam verilmez; güncel fiyatlar için fiyat tablolarına bakın veya teklif alın.",
        ],
        links: [["Palet fiyatları", "/palet-fiyatlari/"]],
      },
      {
        h: "10 yol",
        steps: [
          "Doğru ölçüyü seçin: Ürüne uymayan ölçü araç ve konteynerde boşluk demektir. Hesaplama aracıyla deneyin.",
          "Kalite sınıfını kullanıma göre belirleyin: Tek yönlü sevkiyata en üst sınıf, raf paletine en düşük sınıf gerekmez.",
          "İkinci el ve tamirli palet kullanın: İç sevkiyat ve dağıtımda yeni paletin yerine uygun maliyetli çözümdür.",
          "Toptan ve düzenli alın: Parti büyüdükçe birim maliyet ve nakliye payı genelde düşer.",
          "Hasarı azaltın: Forklift eğitimi, istif kuralları ve nem kontrolü palet tüketimini düşürür.",
          "Tamiri geciktirmeyin: Küçük hasar büyümeden onarın.",
          "Boş paletleri geri alın: Alıcılarla geri dönüş veya değişim anlaşması yapın.",
          "Hurdayı değerlendirin: Hurda ve fazla paletleri satarak veya geri dönüşüme vererek gelir sağlayın.",
          "İhracatta gereksiz ısıl işlem maliyetinden kaçının: Yalnızca ihracat yüklerinde ISPM-15 HT palet kullanın; yurtiçinde gerek yok.",
          "Alternatifleri karşılaştırın: Yüksek devirli kapalı döngüde plastik palet, kullanım ömrü boyunca daha ekonomik olabilir.",
        ],
        links: [["Konteyner palet hesaplama", "/araclar/konteyner-palet-hesaplama/"]],
      },
      {
        h: "Hangi yöntem ne kadar etkili?",
        table: {
          caption: "Yöntemlerin genel etkisi",
          head: ["Yöntem", "Etki alanı", "Uygulama kolaylığı"],
          rows: [
            ["Doğru ölçü", "Nakliye ve alan", "Orta"],
            ["Kalite sınıfı seçimi", "Alım bedeli", "Kolay"],
            ["İkinci el / tamirli", "Alım bedeli", "Kolay"],
            ["Toptan alım", "Birim ve nakliye", "Kolay"],
            ["Hasar azaltma", "Tüketim", "Orta"],
            ["Geri alım ve hurda satışı", "Gelir ve atık", "Orta"],
            ["Plastik palet (kapalı döngü)", "Uzun vadeli toplam maliyet", "Orta"],
          ],
        },
      },
      {
        h: "İkinci el ve tamir ile tasarruf",
        p: [
          "İkinci el palet, yurt içi sevkiyat ve dağıtımda yeni palete göre belirgin tasarruf sağlayabilir. Önemli olan kalite sınıfını netleştirmek ve sevkiyat tipine uygun palet seçmektir. Tamir hizmeti ise sahadaki paletlerin hizmet ömrünü uzatır.",
        ],
        links: [
          ["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"],
          ["Palet tamiri", "/hizmetler/palet-tamiri/"],
          ["İkinci el palet ürünü", "/urunler/ikinci-el-palet/"],
        ],
      },
      {
        h: "Toptan alım ve geri alım düzeni",
        p: [
          "Düzenli ve yüksek adetli ihtiyaçta tek seferlik pazarlık yerine periyodik bir tedarik ve geri alım anlaşması kurmak daha avantajlıdır. Hem yeni palet temini hem kullanılmış paletlerin geri alınması aynı tedarikçiyle planlanırsa, nakliye de birleştirilebilir.",
        ],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"]],
      },
      {
        h: "Maliyeti yanıltan hatalar",
        list: [
          "Yalnızca en düşük birim fiyata bakıp hasar oranını görmemek.",
          "Her sevkiyata aynı yüksek kalite paleti kullanmak.",
          "Palet kayıplarını izlememek.",
          "Hurdayı biriktirip değerini düşürmek.",
          "Ölçü seçimini araç doluluğuna göre test etmeden yapmak.",
        ],
      },
    ],
    faq: [
      { q: "Palet maliyetini en hızlı ne düşürür?", a: "Kalite sınıfını kullanıma göre ayarlamak ve ikinci el/tamirli palete geçmek genellikle en hızlı etkiyi verir." },
      { q: "İkinci el palet güvenli mi?", a: "Sağlam yapıda, kırıksız ve temiz paletler yurt içi sevkiyatta güvenle kullanılır. Ağır raf yükü için durumunu kontrol edin." },
      { q: "Toptan alımda indirim olur mu?", a: "Parti büyüdükçe birim ve nakliye payı genelde düşer; net koşul teklifte belirtilir." },
      { q: "Plastik palet daha ucuz mu?", a: "İlk alımda pahalıdır; yüksek devirli kapalı döngüde ömrü boyunca ekonomik olabilir." },
      { q: "Hurda paletten gelir elde edilir mi?", a: "Sağlam oranı yüksek partilerde evet; partinin durumuna bağlıdır." },
    ],
  },
  {
    slug: "palet-sozlugu",
    title: "Palet Sözlüğü: A–Z Palet Terimleri | MEPAL",
    description: "Palet sektörü terimleri sözlüğü: EPAL, ISPM-15, HT, CP, dinamik ve statik yük, raf yükü, kızak, lamel, blok palet ve daha fazlası.",
    h1: "Palet Sözlüğü: A–Z Palet Terimleri",
    answer:
      "Bu sözlük, palet sektöründe sık karşılaşılan 40 terimi alfabetik olarak açıklar: EPAL, ISPM-15, HT, CP, dinamik/statik/raf yükü, kızak, lamel, blok palet ve daha fazlası. Tedarikçiyle konuşurken veya teklif okurken hızlı başvuru kaynağı olarak kullanabilirsiniz.",
    keyword: "palet sözlüğü",
    art: "euro",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 12,
    readMinutes: 7,
    related: ["palet-cesitleri-ve-secimi", "ispm-15-nedir", "palet-kac-kg-tasir"],
    sections: [
      {
        h: "Sözlük nasıl kullanılır?",
        p: [
          "Terimler alfabetik sıradadır ve üç tabloya bölünmüştür. Ölçüler ve değerler genel kabul gören tanımlardır; kesin teknik değerler için ürün föyüne ve ilgili standarda bakın.",
        ],
      },
      {
        h: "A–D terimleri",
        table: {
          head: ["Terim", "Anlamı"],
          rows: [
            ["Alt tahta (alt lama)", "Paletin zemine bakan tarafındaki tahtalar."],
            ["Blok palet", "Taşıyıcı olarak bloklar (takozlar) kullanılan, dört yönden girişli palet; Euro palet bu tiptir."],
            ["Çapraz istif", "Ürünlerin her katta döndürülerek tuğla düzeninde dizilmesi."],
            ["Çember", "Yükü palete sabitlemek için kullanılan plastik veya çelik bant."],
            ["CP palet", "Kimya endüstrisinde kullanılan, CP1–CP9 sınıflarını tanımlayan standart palet ailesi; 114x114 (CP) gibi ölçüler içerir."],
            ["Çivi", "Palet elemanlarını birleştiren bağlantı elemanı; bazen yivli (halkalı) çivi kullanılır."],
            ["Dinamik yük", "Palet taşınırken (forklift, transpalet) taşıyabileceği en yüksek yük."],
            ["Dorse / tır", "Palet taşıyan ağır nakliye aracı; standart dorsede yaklaşık 33 Euro palet sığar."],
            ["Düsseldorf palet", "60x80 cm yarım Euro palet için kullanılan ad."],
            ["Düz palet (flat pallet)", "Üstü düz, kenarlarında yan duvar bulunmayan palet."],
          ],
        },
      },
      {
        h: "E–K terimleri",
        table: {
          head: ["Terim", "Anlamı"],
          rows: [
            ["EPAL", "Avrupa Palet Birliği; EPAL damgalı standart paletlerin tescilli markası."],
            ["Euro palet (EUR)", "800 x 1.200 mm ölçülü standart palet."],
            ["FIFO / LIFO", "İlk giren ilk çıkar / son giren ilk çıkar stok yönetimi."],
            ["Forklift", "Çatalıyla palet kaldıran ve taşıyan istif makinesi."],
            ["Gıda sınıfı palet", "Hijyen ihtiyacı için kolay temizlenen, kokusuz, kimyasalsız palet."],
            ["HT (Heat Treatment)", "Isıl işlem; ISPM-15 uyumlu ahşap işlem yöntemi, merkez sıcaklığı en az 56 °C, en az 30 dakika."],
            ["IPPC", "Uluslararası Bitki Koruma Sözleşmesi; ISPM-15 damgasının çıkış kaynağı."],
            ["ISPM-15", "Ahşap ambalaj malzemesinin uluslararası taşımada zararlı yayılımını önleme standardı."],
            ["İstif dayanımı", "Ürün veya palete üst üste yüklenebilecek ağırlık sınırı."],
            ["İki yönlü / dört yönlü palet", "Çatalın iki veya dört yönden girebildiği palet türü."],
            ["Izgara palet (plastik)", "Üst yüzeyi açık ızgara desenli plastik palet."],
            ["Kızak", "Palet altındaki uzun taşıyıcı eleman; kızaklı palette forklift çatalı bu aralıklara girer."],
            ["Kızaklı palet", "Alt tarafında uzun kızaklar bulunan palet."],
            ["Koli", "Ürünün palet üzerine dizildiği ambalaj birimi."],
            ["Konteyner (20'/40')", "Denizyolu yük taşıma birimi; palet doluluğu iç ölçülerine bağlıdır."],
          ],
        },
      },
      {
        h: "L–Z terimleri",
        table: {
          head: ["Terim", "Anlamı"],
          rows: [
            ["Lamel (tahta)", "Paletin üst ve alt yüzeyini oluşturan tahta."],
            ["Nestable palet", "Boşken iç içe geçen plastik palet."],
            ["Özel ölçü palet", "Standart dışı ölçüde, ürüne göre üretilen palet."],
            ["Palet havuzu (pooling)", "Paletlerin ortak ağda kiralanıp paylaşıldığı sistem."],
            ["Palet etiketi", "Yük bilgisi (ürün, adet, ağırlık) için paletin üzerindeki etiket."],
            ["Raf yükü", "Palet iki kirişe oturmuşken taşıyabildiği yük; çoğunlukla en düşük değerdir."],
            ["Statik yük", "Palet düz zeminde hareketsizken taşıyabildiği yük."],
            ["Streç film", "Yükü palete saran plastik sarma filmi."],
            ["Takoz", "Palet üst ve alt tahtalarını ayıran blok (bazen blok ile eş anlamlı)."],
            ["Tek kullanımlık palet", "Tek sevkiyat için üretilen hafif yapılı, genelde ihracat paleti."],
            ["Tamir paleti", "Hasarlı elemanları onarılmış palet."],
            ["Transpalet", "El veya elektrikli, palet kaldıran ve taşıyan yer seviyesi araç."],
            ["Turpal", "Tescilli bir palet markası; Turpal damgalı palet marka sahibinin kurallarına bağlıdır."],
            ["Üst tahta (üst lama)", "Yükün oturduğu üstteki tahtalar."],
            ["Yarım palet", "60x80 cm ölçülü, yarım Euro palet."],
            ["Yük ağırlık merkezi", "Yükün dengeli durduğu ağırlık noktası."],
            ["Zemin yükü", "Palet yerde dururken istiflenebilecek yük sınırı; statik yükle ilgilidir."],
          ],
        },
        links: [
          ["Palet çeşitleri ve seçimi", "/rehber/palet-cesitleri-ve-secimi/"],
          ["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"],
          ["Euro palet ürünü", "/urunler/80x120-euro-palet/"],
          ["Palet fiyatları", "/palet-fiyatlari/"],
          ["Palet seçici aracı", "/araclar/palet-secici/"],
        ],
      },
      {
        h: "Yanlış anlaşılan üç terim",
        list: [
          "EPAL ile Euro palet aynı şey değildir: Euro palet ölçü adıdır, EPAL damgalı palet tescilli markadır.",
          "HT ile ISPM-15 aynı değildir: HT işlem yöntemi, ISPM-15 ise standarttır.",
          "Dinamik, statik ve raf yükü aynı değildir: üçü farklı kullanım durumunu anlatır.",
        ],
      },
    ],
    faq: [
      { q: "Euro palet ile EPAL palet aynı mı?", a: "Euro palet 80x120 ölçüsüdür. EPAL damgalı palet ise EPAL'ın lisanslı ve tescilli ürünüdür." },
      { q: "CP palet nedir?", a: "Kimya sektörünün tanımladığı CP1–CP9 sınıfı palet ailesi; 114x114 gibi ölçüler içerir." },
      { q: "HT damgası ne anlama gelir?", a: "Ahşabın ısıl işlemden geçtiğini ve ISPM-15 uyumunu gösterir." },
      { q: "Statik ve dinamik yük farkı nedir?", a: "Statik yük hareketsizken, dinamik yük taşınırken taşınabilen yüktür. Raf yükü ise rafta kirişlere oturmuşken taşınabilen yüktür." },
      { q: "Sözlükte olmayan bir terim sorabilir miyim?", a: "Evet, iletişim sayfasından veya WhatsApp'tan sorabilirsiniz." },
    ],
  },
];
