import { L, bolge, type RegionContent } from "./regions-build";

// Parti 4: Kocaeli doğu ve körfez hattı (İzmit, Körfez, Derince, Kartepe, Başiskele, Gölcük, Karamürsel).
export const regionContent4: Record<string, RegionContent> = {
  "izmit-palet": {
    blurb: "İzmit ve Alikahya sanayisine Euro, ikinci el, plastik ve ihracat paleti; toplu sevkiyat ve hurda palet alımı.",
    answer:
      "İzmit, Kocaeli’nin il merkezidir; Alikahya ve D-130 hattı boyunca otomotiv yan sanayisi, makine, gıda ve lojistik tesisleri yer alır. Bu işletmelere Euro, ikinci el, plastik ve ihracat paleti sağlıyor; tesislerde biriken hurda paletleri yerinden alıyoruz.",
    zones: ["Alikahya", "Yahyakaptan", "Yenişehir", "İzmit sanayi hattı"],
    nearby: ["korfez-palet", "kartepe-palet", "derince-palet", "golcuk-palet", "basiskele-palet", "karamursel-palet"],
    sections: [
      {
        h: "İzmit’in sanayi dokusu",
        p: [
          "İzmit, hem il merkezi hem de Marmara sanayisinin kilit düğümlerinden biridir. Otomotiv yan sanayisi, makine ve ekipman üretimi, kâğıt ve ambalaj, gıda ile lojistik firmaları ilçenin farklı bölgelerine yayılmıştır. Alikahya çevresi, kentin özellikle sanayi ve depo kullanımıyla bilinen kesimidir.",
          "Yan sanayi, ana sanayiye bağlı çalıştığından sipariş ritmi onun üretim takvimine göre şekillenir. Palet ihtiyacı da ani artıp azalabilir; bu yüzden stok güvencesi olan bir tedarikçi tercih edilir.",
        ],
        links: [L.gOtomotiv, L.gEticaret],
      },
      {
        h: "Yan sanayi tedarik döngüsünde palet",
        p: [
          "Otomotiv yan sanayisinde palet, çoğu zaman ana üreticinin şartnamesine bağlıdır. Parça türüne göre özel kasa, plastik palet ya da belli bir ahşap palet ölçüsü talep edilebilir. Bu şartların siparişte açıkça yazılması gerekir; sonradan düzeltmek hem maliyetli hem zaman alıcıdır.",
        ],
        list: [
          "Müşterinin ambalaj talimatını (ölçü, malzeme, damga) siparişle birlikte paylaşın.",
          "Tekrar eden parça sevkiyatlarında döngüsel kullanım için dayanıklı palet planlayın.",
          "Tek yön sevkiyatta ekonomik ikinci el palet yeterli olabilir.",
          "İhracat parçalarında damga ve belge uyumu için ISPM-15 palet isteyin.",
        ],
        links: [L.ozel, L.plastik, L.ikinciEuro, L.ispm],
      },
      {
        h: "İzmit’e sevkiyat",
        p: [
          "İzmit’e sevkiyat, il içi güzergâhlardan biri olarak planlanır. Alikahya ve sanayi hattı adreslerinde tır erişimi genelde mümkündür; şehir merkezine yakın adreslerde ise trafik ve park kısıtı devreye girer. Teslim saati, boşaltma ekipmanı ve kapı kuralı baştan yazılırsa araç doğru seçilir.",
        ],
        steps: [
          "Teslim noktasını ve araç erişimini belirtin.",
          "Palet türü, ölçüsü, adedi ve şartname bilgisini iletin.",
          "Teklifteki ürün ve teslim koşulunu onaylayın.",
          "Teslimde sayım ve kayıt yapılır.",
        ],
        links: [L.surec, L.nakliye, bolge("kocaeli-palet", "Kocaeli geneli")],
      },
      {
        h: "Fazla ve kullanılmayan palet",
        p: [
          "Üretim değişikliği, sözleşme bitişi ya da müşteri değişimi sonrası depoda kalan özel ölçülü paletler çoğunlukla başka işletmeye uymaz ama ahşap olarak değer taşır. Bu tür paletler ve kırıklar yerinde değerlendirilir; adet ve fotoğraf yeterlidir.",
        ],
        links: [L.hurda, L.yerinde, L.rHurda],
      },
      {
        h: "Şartname numunesi",
        p: [
          "Yan sanayide ana üreticinin şartnamesi bazen yalnızca ölçüyle sınırlı kalmaz; tahta kalınlığı, çivi tipi, hatta ağaç türü bile belirtilir. Bu durumlarda ilk parti öncesi bir numune hazırlayıp onay almak, yanlış ürün riskini ortadan kaldırır.",
          "Şartnameyi PDF ya da fotoğraf olarak bize iletebilirsiniz.",
        ],
        links: [L.rSinif, L.ozel],
      },
    ],
    faq: [
      { q: "Ana sanayi şartnamesine uygun palet sağlanıyor mu?", a: "Şartnamedeki ölçü ve malzeme bilgisini paylaşırsanız ona uygun teklif hazırlanır." },
      { q: "Alikahya’ya tır ile teslimat yapılabilir mi?", a: "Adresin erişimine bağlıdır. Teslim noktasının bilgisini paylaşırsanız araç tipi buna göre seçilir." },
      { q: "Özel ölçülü paletler geri alınır mı?", a: "Durumuna göre ahşap olarak değerlendirilir. Ölçü, adet ve fotoğrafı iletmeniz yeterli." },
      { q: "Düzenli palet tedariki için sözleşme gerekir mi?", a: "Zorunlu değildir. Planlı tedarik için teklifte çerçeve belirlenir." },
      { q: "Ana sanayi şartnamesini nasıl paylaşırım?", a: "PDF ya da fotoğraf olarak WhatsApp’tan iletebilirsiniz." },
    ],
  },

  "korfez-palet": {
    blurb: "Körfez’in kimya, petrokimya, liman ve halı-tekstil tesislerine 100x120, Euro, plastik ve ihracat paleti.",
    answer:
      "Körfez; Yarımca çevresindeki kimya ve petrokimya tesisleri, liman faaliyetleri ve Hereke’nin halı ve tekstil üretimiyle bilinen bir sanayi ilçesidir. Bu işletmelere 100x120, Euro, plastik ve ihracat paleti sağlıyor; tesislerde biriken hurda paletleri yerinden alıyoruz.",
    zones: ["Yarımca", "Hereke", "Tütünçiftlik", "Kirazlıyalı", "Körfez sanayi bölgesi"],
    nearby: ["derince-palet", "dilovasi-palet", "izmit-palet", "golcuk-palet", "karamursel-palet"],
    sections: [
      {
        h: "Körfez’in iki yüzü: ağır sanayi ve el sanatı geleneği",
        p: [
          "Körfez’in kıyı şeridi, Marmara’nın önemli kimya ve petrokimya tesislerine ev sahipliği yapar. Yarımca çevresi bu sanayinin yoğun olduğu bölgedir; liman ve yükleme tesisleri de aynı şeritte yer alır. Öte yandan Hereke, uzun yıllardır halı ve ipek dokumacılığıyla tanınır ve tekstil üretimi hâlâ ilçe ekonomisinin bir parçasıdır.",
          "Bu iki yüz, palet tarafında da iki ayrı ihtiyaç doğurur: sıvı ve torba kimyasalda sağlam ve temizlenebilir palet; halı ve tekstilde ise leke, kıymık ve nem riski olmayan temiz palet.",
        ],
        links: [L.gKimya, bolge("dilovasi-palet", "Dilovası")],
      },
      {
        h: "Sektöre göre palet seçimi",
        table: {
          caption: "Körfez’de sektör ve palet eşleşmesi",
          head: ["Sektör", "Palet", "Dikkat"],
          rows: [
            ["Kimya, petrokimya", "100x120, plastik palet", "Sızıntı ve temizlik; ürün güvenlik bilgi formu"],
            ["Liman ve ihracat", "ISPM-15 damgalı palet", "Hedef ülke ve gümrük kuralı"],
            ["Halı, tekstil", "Sıfır ahşap ya da plastik palet", "Kıymık, leke, koku riski"],
            ["Genel depolama", "İkinci el Euro", "Raf uyumu"],
          ],
        },
        links: [L.p100, L.plastik, L.sifir, L.ihracat],
      },
      {
        h: "Tekstil ve halı için dikkat",
        list: [
          "Halı ve kumaş rulolarında paletin kenarlarında kıymık ya da çıkık çivi olmamalıdır.",
          "Nemli ortamda kalan ahşap palet küf ve koku bırakabilir; ürüne geçmemesi için kuru palet kullanın.",
          "Hassas ve değerli ürünlerde palet üzerine koruyucu katman ya da streç sarım uygulayın.",
          "Palet kenar çıkıntısı rulo istifinde ezilmeye neden olabilir; ölçü uyumuna bakın.",
        ],
        links: [L.rKapasite, L.rIstif],
      },
      {
        h: "Körfez sevkiyatı",
        p: [
          "Körfez’e sevkiyatta tesis giriş kuralları ve liman bağlantılı sahalarda ek izin süreçleri söz konusu olabilir. Plaka ve sürücü bilgisi ile tesis yetkilisi iletişimi siparişle birlikte iletilmelidir.",
        ],
        steps: [
          "Teslim noktasını ve giriş kuralını belirtin.",
          "Palet türü, ölçü ve adetle teklif alın.",
          "Araç ve sürücü bilgisini paylaşın.",
          "Teslimde sayımla kayıt altına alın.",
        ],
        links: [L.surec, L.turkiye],
      },
      {
        h: "Kimyasal bulaşmış ve kırık paletler",
        p: [
          "Kimya tesislerinde bulaşmış paletler özel durumdur; bulaşma türü ve miktarı alım kararını etkiler. Temiz ama kırık paletler ise ahşap atık olarak değerlendirilir. Talepte kalıntı durumunu belirtmeniz gerekir.",
        ],
        links: [L.hurda, L.hasarli],
      },
      {
        h: "Kıyı iklimi ve ağır sanayi birlikte",
        p: [
          "Körfez’in kıyı şeridinde hem nem hem de endüstriyel kirlilik paletleri etkiler. Havadaki tuz ve kimyasal kalıntılar ahşabı ve metal çiviyi aşındırabilir. Bu bölgede uzun süre depolanacak paletler için kapalı alan, hatta plastik palet daha dayanıklı bir tercihtir.",
          "Kısa süreli kullanımlarda ise ikinci el ahşap palet ekonomik kalır.",
        ],
        links: [L.rAhsapPlastik, L.rOmur],
      },
    ],
    faq: [
      { q: "Halı ve tekstil için hangi palet güvenli?", a: "Sıfır ya da plastik palet; kıymık ve leke riskini ortadan kaldırır." },
      { q: "Kimyasal torbalar için hangi palet?", a: "Genelde Euro ya da 100x120 palet kullanılır; sızıntı riski varsa plastik tercih edilir." },
      { q: "Limana yüklenecek palet damgalı olmalı mı?", a: "Hedef ülkenin kuralına bağlıdır. Çoğu ihracat sevkiyatında ISPM-15 damgası gerekir." },
      { q: "Kirli paletler alınır mı?", a: "Kirlilik türüne göre değerlendirilir. Fotoğraf ve bilgi paylaşın." },
      { q: "Kıyıda palet ömrü kısalır mı?", a: "Nem ve havadaki tuz ahşabı etkiler; kapalı depolama ve plastik palet ömrü uzatır." },
    ],
  },

  "derince-palet": {
    blurb: "Derince Limanı çevresindeki depo ve ihracat hazırlayan işletmelere HT damgalı, Euro ve plastik palet.",
    answer:
      "Derince, Kocaeli’nin liman ilçesidir; Derince Limanı çevresinde depo, lojistik ve ihracat hazırlığı yapan işletmeler yoğunlaşmıştır. Bu işletmelere ISPM-15 damgalı ihracat paleti, Euro palet ve plastik palet sağlıyor; depolarda biriken hurda paletleri yerinden alıyoruz.",
    zones: ["Derince Limanı çevresi", "Çenedağ", "Sırrıpaşa", "Yenikent"],
    nearby: ["korfez-palet", "izmit-palet", "dilovasi-palet", "golcuk-palet", "basiskele-palet"],
    sections: [
      {
        h: "Liman çevresinde palet ne iş görür",
        p: [
          "Liman bölgesinde palet, yükün gemiye ve konteynere doğru yolculuğunun bir parçasıdır. Fabrikadan çıkan mal burada depolanır, sınıflanır, bazen yeniden paketlenir ve konteynere yüklenir. Her adım palete ek bir beklenti getirir: ölçü uyumu, damga, temizlik, istiflenebilirlik.",
          "Liman çevresindeki depo işletmeleri, kendi müşterileri adına çalıştığından palet talebi genellikle müşterinin yük tanımından çıkar. Bu yüzden siparişte yükün cinsi ve hedefi bilgisi kritik hale gelir.",
        ],
        links: [L.gIhracat, L.rIhracat],
      },
      {
        h: "İhracat paleti: ne zaman, neden",
        list: [
          "Birçok ülke ahşap ambalajda böcek ve zararlı yayılımına karşı ISPM-15 uyumlu, ısıl işlem damgalı palet ister.",
          "Damga olmayan palet, varış limanında geri çevrilebilir ya da yeniden işleme tabi tutulabilir.",
          "Damga okunaklı ve palet üzerinde doğru yerde olmalıdır.",
          "Aynı sevkiyatta damgalı ve damgasız paletleri karıştırmak sorun çıkarır.",
        ],
        links: [L.rIspm, L.ihracat, L.ispm],
      },
      {
        h: "Konteyner yüklemesi için ölçü planlaması",
        p: [
          "Konteynere yüklenecek palet sayısı, palet ölçüsü ve yük yüksekliğine göre değişir. Standart ölçü Euro paletle 20 ve 40 ayaklık konteynerlerde verimli yerleşim sağlanabilir; farklı ölçülerde boşluk oluşabilir. Planlama için konteyner palet hesaplama aracını kullanabilirsiniz.",
        ],
        links: [L.konteyner, L.rTir, L.rOlcu],
      },
      {
        h: "Derince’ye sevkiyat",
        p: [
          "Liman çevresinde araç trafiği yoğun olabilir ve bazı sahalara giriş izne bağlıdır. Teslim noktasını (depo, antrepo, saha) ve giriş kuralını siparişte belirtmeniz yeterli.",
        ],
        steps: [
          "Teslim noktasını, giriş kuralını ve istenen palet türünü bildirin.",
          "Teklifte damga ve belge bilgisini kontrol edin.",
          "Araç ve sürücü bilgisini paylaşın.",
          "Teslimde sayım ve damga kontrolüyle teslim alın.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Depodaki hasarlı paletler",
        p: [
          "Liman depolarında palet sürekli forklift hareketi ve istifleme yükü altındadır; kırık ve çatlak palet oranı yüksek olur. Bunları ayıklayıp çıkarmak iş güvenliği açısından gereklidir. Kırık palet yığınınızı değerlendirmemiz için adet ve fotoğraf yeterlidir.",
        ],
        links: [L.hurda, L.kirik],
      },
      {
        h: "Konteyner içinde sabitleme",
        p: [
          "Konteynere yüklenen palet, yolculukta sarsıntıya maruz kalır. Yük bağlama, streç ve aralık doldurma yapılmazsa palet kayabilir. Bu yüzden konteyner yüklemesinde paletin ölçüsü kadar yük sabitleme düzeni de önem taşır.",
          "Palet yüzü düz ve çivileri çıkık olmayan paletler, sabitleme malzemesinin tutunmasını kolaylaştırır.",
        ],
        links: [L.konteyner, L.rTir],
      },
    ],
    faq: [
      { q: "İhracat paleti için damga şart mı?", a: "Çoğu ülke için evet. Hedef ülke kuralını nakliyeci ya da gümrük müşaviri ile teyit edin." },
      { q: "Limana gidecek yükte palet ölçüsü önemli mi?", a: "Evet. Konteyner yerleşimi ve istif yüksekliği ölçüye bağlıdır." },
      { q: "Liman depolarına teslimat yapılıyor mu?", a: "Evet. Giriş kuralı ve teslim koşulunu belirtmeniz yeterlidir." },
      { q: "Kırık paletleri depodan alıyor musunuz?", a: "Evet. Palet türü, adet ve durumunu iletin." },
      { q: "Konteyner içinde palet nasıl sabitlenir?", a: "Streç, bağlama bandı ve boşluk doldurucu kullanılır. Ayrıntı için nakliyeciniz ya da yükleme sorumlunuza danışın." },
    ],
  },

  "kartepe-palet": {
    blurb: "Kartepe’nin Köseköy sanayisi, tarım ve turizm işletmelerine Euro, ikinci el ve plastik palet.",
    answer:
      "Kartepe, Kocaeli’nin iç kesiminde Köseköy çevresindeki sanayi, tarım ve gıda üretimi ile Maşukiye ve Kartepe dağ turizmi bölgelerini bir arada barındıran bir ilçedir. Bu işletmelere Euro, ikinci el ve plastik palet sağlıyor; tesislerdeki hurda paletleri yerinden alıyoruz.",
    zones: ["Köseköy", "Arslanbey", "Uzunçiftlik", "Suadiye", "Maşukiye"],
    nearby: ["izmit-palet", "basiskele-palet", "korfez-palet", "derince-palet"],
    sections: [
      {
        h: "Kartepe’de çeşitli ekonomi",
        p: [
          "Kartepe’nin bir yanında Köseköy gibi ulaşım ağlarına yakın sanayi ve depo alanları, diğer yanında tarım ve gıda üretimi yapan köyler ve dağ turizmine hizmet eden otel, restoran ve tesisler bulunur. Bu karışım, palet talebini de çeşitlendirir.",
          "Sanayi tarafında üretim ve lojistik palet kullanımı sürekli iken, tarım ve turizm tarafında palet kullanımı mevsimseldir. Mevsimsel işletmeler için esnek adet ve zamanlama önem kazanır.",
        ],
        links: [L.gGida, bolge("izmit-palet", "İzmit")],
      },
      {
        h: "Sektöre göre palet",
        list: [
          "Sanayi ve depo: sınıflandırılmış ikinci el Euro palet ve raf uyumu.",
          "Gıda işleme: hijyen için plastik ya da sıfır palet.",
          "Tarım ürünleri ve hasat dönemi: kasa ve çuval için hafif ve ekonomik ikinci el palet.",
          "Turizm tesisleri: ekipman ve malzeme ikmalinde ince ya da yarım palet.",
        ],
        links: [L.ikinciEuro, L.hijyenik, L.ince],
      },
      {
        h: "Mevsimsel talep ve zamanlama",
        p: [
          "Hasat ve turizm sezonu öncesinde palet talebi artar, sezon dışında düşer. Bu dalgalanmayı bilen işletmeler, sezon öncesi ihtiyacını erken bildirerek hem seçenekleri genişletir hem de teslim planını rahat yapar. Son dakika alımlarda ürün çeşidi azalabilir.",
        ],
        steps: [
          "Sezon ihtiyacını tahmini adetle önceden bildirin.",
          "Teklif ve teslim penceresi netleşsin.",
          "Teslim noktasındaki erişim ve boşaltma notunu paylaşın.",
          "Teslimde sayım ve fatura ile tamamlanır.",
        ],
        links: [L.surec, L.rMaliyet],
      },
      {
        h: "Köy ve dağ yolları",
        p: [
          "Kartepe’nin bazı bölgeleri dağ ve orman yoluyla ulaşılır; bu adreslere büyük araçla çıkmak mümkün olmayabilir. Teslim adresi şehir merkezinden uzaksa, araç boyutu, yol durumu ve mevsim koşulları teslim planını etkiler. Adres bilgisini ve yol durumunu paylaşın.",
        ],
        links: [L.turkiye, L.nakliye],
      },
      {
        h: "Atıl ve kırık paletler",
        p: [
          "Tarım ve turizm işletmelerinde atıl paletler çoğunlukla açık havada beklediği için çürür. Çürümeden önce değerlendirmek daha verimlidir. Fotoğraf ve adet bilgisi yeterlidir.",
        ],
        links: [L.hurda, L.yerinde],
      },
      {
        h: "Kış koşulları ve palet",
        p: [
          "Kartepe’nin iç ve yüksek kesimlerinde kış, kar ve buzlanma sevkiyatı etkiler. Teslim günü yol koşullarına göre değişebilir; planlı tedarikte kış öncesi ihtiyacı erkenden almak daha güvenlidir. Karla kaplı açık alanda bekleyen ahşap palet nemden zarar görür.",
          "Kapalı depo yoksa paletleri örtüyle kaplayıp yerden yüksekte tutun.",
        ],
        links: [L.turkiye, L.rOmur],
      },
    ],
    faq: [
      { q: "Hasat dönemi için palet ne zaman sipariş vermeliyim?", a: "Mümkünse sezondan önce. Son dakika taleplerinde ürün seçenekleri azalabilir." },
      { q: "Dağ yoluna araç çıkabilir mi?", a: "Yol durumuna göre değişir. Adres ve yol bilgisini paylaşırsanız uygun araç planlanır." },
      { q: "Gıda işleme için hangi palet?", a: "Hijyen için plastik ya da sıfır palet tercih edilir." },
      { q: "Çürüyen paletleri alıyor musunuz?", a: "Durumuna göre değerlendirilir. Fotoğraf göndermeniz yeterlidir." },
      { q: "Kışın teslimat aksar mı?", a: "Yol koşulları teslim zamanını etkileyebilir. Kış öncesi planlı sipariş daha güvenlidir." },
    ],
  },

  "basiskele-palet": {
    blurb: "Başiskele’nin sanayi, lojistik, depo ve gıda işletmelerine Euro, 100x120, ikinci el ve plastik palet.",
    answer:
      "Başiskele, Körfez kıyısı boyunca ve iç kesimde sanayi, lojistik ve depo işletmelerini barındıran, hızla büyüyen bir ilçedir. Bu işletmelere Euro, 100x120, ikinci el ve plastik palet sağlıyor; tesislerdeki hurda paletleri yerinden alıyoruz.",
    zones: ["Kullar", "Yuvacık", "Seymen", "Bahçecik", "Karşıyaka", "Yeniköy"],
    nearby: ["izmit-palet", "derince-palet", "kartepe-palet", "korfez-palet"],
    sections: [
      {
        h: "Başiskele’nin büyüyen sanayi ve lojistik alanı",
        p: [
          "Başiskele, İzmit’in karşı yakasında, liman ve ana yol bağlantılarına yakın bir konumdadır. Bu konum, depo ve lojistik yatırımlarını çekmiş; üretim yapan küçük ve orta ölçekli tesislerle birlikte gıda işleyenler de ilçeye yerleşmiştir. İlçenin bazı kısımlarında hâlâ tarım ve yazlık yerleşim ağırlıklıdır.",
          "Yeni kurulan tesislerin palet ihtiyacı başlangıçta yüksektir: depo açılışı, yeni raf sistemi ve ilk sevkiyatlar için hızlı bir palet temini gerekir.",
        ],
        links: [L.gEticaret, bolge("izmit-palet", "İzmit")],
      },
      {
        h: "Yeni depo ve tesis kurarken",
        list: [
          "Raf ölçüsünü ve taşıma kapasitesini önceden belirleyin; palet ölçüsünü buna göre seçin.",
          "İlk sipariş için numune alıp raf ve forkliftle deneme yapın.",
          "Farklı ürün gruplarına farklı palet türleri gerekebilir; tek tip palet baştan sınırlama getirir.",
          "Düzenli alım için stok ve teslimat planı yapın.",
        ],
        links: [L.rRaf, L.rKapasite, L.euro, L.p100],
      },
      {
        h: "Sektöre göre öneri",
        table: {
          caption: "Başiskele’de örnek işletmeler ve palet",
          head: ["İşletme", "Palet", "Not"],
          rows: [
            ["Lojistik ve depo", "Sınıflandırılmış ikinci el Euro", "Hızlı devir, rafa uyum"],
            ["Gıda işleme", "Plastik, sıfır palet", "Hijyen"],
            ["Küçük imalat", "Euro, özel ölçü", "Ürün ölçüsüne göre"],
            ["Tarım ürünleri", "Hafif ikinci el palet", "Kasa ve çuval"],
          ],
        },
        links: [L.ikinciEuro, L.plastik, L.ozel],
      },
      {
        h: "Teslimat",
        p: [
          "Başiskele’de teslimat için adres, araç erişimi ve boşaltma yöntemi yeterlidir. İlçe boyunca uzanan kıyı yolu ve iç yol bağlantıları farklı teslim noktalarına ulaşımı kolaylaştırır; yine de bazı yeni yerleşim alanlarında altyapı kısıtları görülebilir.",
        ],
        steps: [
          "Adres ve araç erişimi bilgisini iletin.",
          "Palet türü ve adedine göre teklif alın.",
          "Teslim penceresini onaylayın.",
          "Teslimde sayım yapılır.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Kullanılmayan paletler",
        p: [
          "Depo taşıması ya da tesis yenilemesi sonrası arta kalan paletler, yer kazanmak için çıkarılmalıdır. Palet türü ve adedini bildirerek ön değerlendirme isteyebilirsiniz.",
        ],
        links: [L.hurda, L.yerinde],
      },
      {
        h: "Yeni yatırım için stok planı",
        p: [
          "Yeni depo ya da üretim hattı kuran işletmeler ilk dönemde ihtiyacı olduğundan az ya da çok tahmin edebilir. Başlangıçta küçük bir partiyle çalışıp ilk ayın verisine göre ikinci siparişi büyütmek, güvenli yöntemdir.",
          "Başlangıç dönemi için numune ve esnek adet teklifi isteyebilirsiniz.",
        ],
        links: [L.rMaliyet, L.teklif],
      },
    ],
    faq: [
      { q: "Yeni açılan depomuz için palet seçmeye yardımcı olur musunuz?", a: "Evet. Raf ve ürün bilgisini paylaşırsanız ölçü ve palet türü için öneri sunulur." },
      { q: "Numune alabilir miyim?", a: "Büyük partiler öncesinde numune ile deneme yapılabilir; koşullar teklifte netleşir." },
      { q: "Tarım ürünleri için hangi palet?", a: "Hafif ve ekonomik ikinci el palet çoğu kasa ve çuval için yeterlidir." },
      { q: "Eski paletleri alıyor musunuz?", a: "Evet. Tür, durum ve adet bilgisiyle değerlendirilir." },
      { q: "Yeni depo için ilk sipariş ne kadar olmalı?", a: "İlk ayın gerçek kullanımı belli olana kadar küçük bir partiyle başlamak ve sonra büyütmek güvenlidir." },
    ],
  },

  "golcuk-palet": {
    blurb: "Gölcük’ün otomotiv, yan sanayi, tersane ve depo işletmelerine Euro, 100x120, ikinci el ve plastik palet.",
    answer:
      "Gölcük, Kocaeli’nin Körfez kıyısındaki sanayi ilçelerinden biridir; otomotiv ve yan sanayi, deniz çevresi işletmeleri ve ticari depolar bulunur. Bu işletmelere Euro, 100x120, ikinci el ve plastik palet sağlıyor; tesislerdeki hurda paletleri yerinden alıyoruz.",
    zones: ["Değirmendere", "Ulaşlı", "Hisareyn", "Halıdere", "Gölcük merkez sanayi"],
    nearby: ["izmit-palet", "derince-palet", "korfez-palet", "karamursel-palet"],
    sections: [
      {
        h: "Gölcük’ün sanayi karakteri",
        p: [
          "Gölcük, deniz ve sanayiyle iç içe bir ilçedir. Otomotiv üretimi ve ona bağlı yan sanayi, deniz ve tersane çevresindeki ekipman ve bakım işleri, ilçenin ekonomik omurgasını oluşturur. Bunlara ek olarak toptan ticaret ve depolama faaliyetleri yürütülür.",
          "Otomotiv yan sanayisi tedarikçileri, ana üreticinin ambalaj kuralına bağlı çalıştığı için palet seçimi çoğu zaman şartnameyle belirlenir. Deniz çevresi işletmeleri ise ağır ve düzensiz yüklerle uğraşır.",
        ],
        links: [L.gOtomotiv, bolge("izmit-palet", "İzmit")],
      },
      {
        h: "İş tipine göre palet",
        list: [
          "Otomotiv yan sanayi: şartnameye uygun ölçü ve malzeme; tekrar kullanımda dayanıklı palet.",
          "Deniz ekipmanı ve tersane işleri: takozlu, kalın tahtalı ya da özel ölçülü palet.",
          "Toptan ticaret: standart ikinci el Euro palet.",
          "Nemli kıyı depoları: plastik palet çürümeye karşı dayanıklıdır.",
        ],
        links: [L.takozlu, L.ozel, L.ikinciEuro, L.plastik],
      },
      {
        h: "Şartnameli palet siparişi",
        p: [
          "Otomotiv ana sanayi tedarik zincirinde yer alan işletmelerin çoğu için ambalaj şartnamesi vardır. Bu şartname paletin ölçüsünü, tahta kalınlığını, malzemesini, bazen de renk ve etiket yerini belirler. Şartnameyi teklif aşamasında paylaşırsanız, aynı sınıfta ürün ve kalite kontrol önerilebilir.",
        ],
        steps: [
          "Şartnameyi ya da ölçü bilgisini iletin.",
          "Numune ya da ilk parti kontrolü planlayın.",
          "Teklifteki teslim koşulunu onaylayın.",
          "Teslimde şartname uyumunu birlikte kontrol edin.",
        ],
        links: [L.surec, L.rSinif],
      },
      {
        h: "Sevkiyat",
        p: [
          "Gölcük’e sevkiyatta sanayi tesislerinin giriş kuralları ve araç erişimi esas alınır. Ayrıca bazı adresler kıyı yoluna bağlı dar sokaklarda yer alır. Teslim noktası bilgisini paylaşın.",
        ],
        links: [L.nakliye, bolge("kocaeli-palet", "Kocaeli geneli")],
      },
      {
        h: "Hurda palet",
        p: [
          "Yan sanayide özel ölçülü palet stokları, proje değişimi sonrası atıl kalabilir. Bu paletler tamir, ayrıştırma ve geri dönüşüm yoluyla değerlendirilir. Adet ve fotoğraf yeterlidir.",
        ],
        links: [L.hurda, L.tamir],
      },
      {
        h: "Numune onayı nasıl işler",
        p: [
          "Şartnameli işlerde ilk partiden önce numune palet onaylamak yaygın bir uygulamadır. Numune, ölçü, tahta kalınlığı, damga ve genel görünüm açısından şartnameyle karşılaştırılır; onaydan sonra tüm parti aynı kalitede hazırlanır.",
          "Numune süreci için zaman payı bırakmanız, onaysız partiden doğacak yeniden iş riskini azaltır.",
        ],
        links: [L.rSinif, L.surec],
      },
    ],
    faq: [
      { q: "Otomotiv şartnamesine uygun palet bulunabilir mi?", a: "Şartnameyi paylaşırsanız ona uygun ürün ve ölçü önerilir." },
      { q: "Tersane işleri için hangi palet?", a: "Ağır ve düzensiz yük için takozlu ya da özel ölçülü palet gerekir." },
      { q: "Nemli depolarda hangi palet?", a: "Plastik palet neme dayanıklıdır." },
      { q: "Proje bitiminde kalan paletler alınır mı?", a: "Evet. Tür, ölçü ve adet bilgisiyle değerlendirilir." },
      { q: "Numune palet alabilir miyim?", a: "Büyük ve şartnameli işlerde numune ile onay almak mümkündür; koşullar teklifte belirtilir." },
    ],
  },

  "karamursel-palet": {
    blurb: "Karamürsel’in tarım, gıda, tersane ve kıyı işletmelerine Euro, ikinci el ve plastik palet.",
    answer:
      "Karamürsel, Kocaeli’nin Körfez’in güney kıyısında yer alan, tarım ve gıda üretimi ile tersane ve küçük sanayiyi bir arada barındıran ilçesidir. Bu işletmelere Euro, ikinci el ve plastik palet sağlıyor; tesislerdeki hurda paletleri yerinden alıyoruz.",
    zones: ["Karamürsel merkez", "Karamürsel sanayi sitesi", "Kıyı yolu çevresi"],
    nearby: ["golcuk-palet", "izmit-palet", "korfez-palet", "derince-palet"],
    sections: [
      {
        h: "Karamürsel’in üretim yapısı",
        p: [
          "Karamürsel, Kocaeli’nin diğer sanayi ilçelerine kıyasla daha küçük ölçekli bir ekonomiye sahiptir. Tarım ürünleri, gıda işleme, küçük imalat atölyeleri ve kıyıdaki tersane ve bakım tesisleri ilçenin işletmelerini oluşturur. Yalova ile komşu olması, bölgeyi iki il arasındaki dağıtım güzergâhında önemli kılar.",
          "Sanayi alanı sınırlı olduğu için palet talepleri genellikle orta ve küçük adetlidir. Tarım ürünlerinde sezonluk dalgalanmalar, talebin zamanlamasını belirler.",
        ],
        links: [L.gGida, bolge("golcuk-palet", "Gölcük")],
      },
      {
        h: "Tarım ve gıda için palet",
        list: [
          "Taze ürün sevkiyatı: kasa ve çuval için hafif ikinci el palet.",
          "Gıda işleme: hijyen için plastik ya da sıfır palet.",
          "Soğuk depolama: nem nedeniyle plastik palet tercih edilir.",
          "Paketlenmiş ürün dağıtımı: standart Euro ölçülü palet raf ve araç uyumu sağlar.",
        ],
        links: [L.ikinci, L.hijyenik, L.plastik, L.rGida],
      },
      {
        h: "Kıyı işletmeleri",
        p: [
          "Kıyı şeridinde çalışan tersane ve bakım tesisleri, ağır ve uzun malzemeyle çalışır. Bu işlerde takozlu ve kalın tahtalı paletler gerekir. Tuzlu ve nemli hava, ahşap paletin ömrünü kısaltır; kapalı alan depolama ya da plastik palet düşünülebilir.",
        ],
        links: [L.takozlu, L.ozel, L.rOmur],
      },
      {
        h: "Sevkiyat planı",
        p: [
          "Karamürsel, kıyı yolu üzerinde bulunduğundan teslimat planında yol durumu ve araç tipi önem taşır. Adres bilgisi, erişim ve boşaltma yönteminin siparişle birlikte iletilmesi, planlamayı rahatlatır. Küçük adetlerde diğer ilçelerden gelen siparişlerle birleştirilmiş sevkiyat da söz konusu olabilir.",
        ],
        steps: [
          "Adres, erişim ve boşaltma yöntemini yazın.",
          "Palet türü ve adedine göre teklif alın.",
          "Teslim penceresini onaylayın.",
          "Sayım ve irsaliye ile teslim tamamlanır.",
        ],
        links: [L.surec, L.turkiye],
      },
      {
        h: "Çürüyen ve kırık paletler",
        p: [
          "Tarım işletmelerinde palet çoğunlukla açıkta bırakılır ve çürür. Kullanılabilir olanlar onarılır, kullanılamayanlar geri dönüşüme gider. Fotoğraf ve adet gönderin.",
        ],
        links: [L.hurda, L.tamir],
      },
      {
        h: "Kıyı iklimi ve palet ömrü",
        p: [
          "Karamürsel’de kıyıya yakın depoların havası nemli ve tuzludur. Bu ortamda açıkta bekleyen ahşap palet ömrünü hızla kaybeder; metal çiviler paslanabilir. Paletleri kapalı alanda ve zeminden yüksekte saklamak en basit korumadır.",
          "Sürekli nemli ortamlarda plastik palet düşünebilirsiniz.",
        ],
        links: [L.rOmur, L.plastik],
      },
    ],
    faq: [
      { q: "Tarım ürünleri için hangi palet uygun?", a: "Hafif ikinci el palet çoğu kasa ve çuval için yeterlidir." },
      { q: "Soğuk depoda ahşap palet kullanılır mı?", a: "Nem nedeniyle plastik palet daha uygundur." },
      { q: "Küçük adetli teslimat yapılıyor mu?", a: "Evet. Adet ve adres bilgisiyle teklif alabilirsiniz." },
      { q: "Çürük paletleri alıyor musunuz?", a: "Durumuna göre değerlendirilir. Fotoğraf göndermeniz yeterli." },
      { q: "Metal çiviler paslanır mı?", a: "Nemli ve tuzlu ortamda evet, zamanla paslanabilir. Kapalı depolama bunu yavaşlatır." },
    ],
  },
};
