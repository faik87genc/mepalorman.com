import { L, bolge, type RegionContent } from "./regions-build";

// Parti 5: İstanbul Avrupa yakası batı ve kuzey hattı.
export const regionContent5: Record<string, RegionContent> = {
  "esenyurt-palet": {
    blurb: "Esenyurt’taki imalat atölyeleri ve depolara Euro, ikinci el ve plastik palet; planlı toplu sevkiyat.",
    answer:
      "Esenyurt, İstanbul Avrupa yakasında Kıraç ve Akçaburgaz çevresinde imalat atölyeleri, depolar ve dağıtım merkezleri barındıran yoğun bir ilçedir. Bu işletmelere Euro, ikinci el ve plastik palet sağlıyor; atölye ve depolarda biriken hurda paletleri yerinden alıyoruz.",
    zones: ["Akçaburgaz", "Kıraç", "Yenikent", "Ardıçlı", "Namık Kemal", "Pınar", "Saadetdere"],
    nearby: ["beylikduzu-palet", "avcilar-palet", "buyukcekmece-palet", "istanbul-palet", "kocaeli-palet"],
    sections: [
      {
        h: "Esenyurt’un yoğun atölye dokusu",
        p: [
          "Esenyurt, hızlı nüfus artışına paralel olarak büyüyen bir üretim ve dağıtım merkezidir. Konfeksiyon, mobilya, gıda, plastik ve metal atölyeleri; e-ticaret ve kargo dağıtım depoları; ayrıca yapı malzemesi ve hırdavat toptancıları ilçenin farklı bölgelerine yayılmıştır.",
          "Akçaburgaz ve Kıraç tarafı daha çok sanayi ve depo kullanımına ayrılmış durumdadır. Bu alanlarda büyük hacimli sevkiyat yapan işletmelerin yanı sıra, tek katlı küçük atölyeler de bulunur.",
        ],
        links: [L.gEticaret, bolge("beylikduzu-palet", "Beylikdüzü")],
      },
      {
        h: "Esenyurt’ta işletme tipine göre palet",
        table: {
          caption: "Esenyurt işletmeleri için örnek eşleştirme",
          head: ["İşletme", "Palet", "Gerekçe"],
          rows: [
            ["Konfeksiyon ve hazır giyim", "Temiz ikinci el Euro, sıfır palet", "Kıymık ve leke riski olmayan taban"],
            ["Mobilya", "Özel ölçülü, geniş tabanlı palet", "Büyük ve hafif ürünler"],
            ["Dağıtım ve kargo deposu", "Sınıflandırılmış ikinci el Euro", "Hızlı devir"],
            ["Gıda üretimi", "Plastik, sıfır palet", "Hijyen"],
            ["Yapı malzemesi", "Takozlu, kalın palet", "Ağır yük"],
          ],
        },
        links: [L.ikinciEuro, L.sifir, L.ozel, L.plastik, L.takozlu],
      },
      {
        h: "Planlı sevkiyat: neden önemli",
        p: [
          "Esenyurt’a sevkiyat, kuzeydeki ve batıdaki komşu ilçelerle birlikte planlandığında daha verimlidir. Aynı güzergâhta birden fazla teslimat noktası olan siparişler tek araçla birleştirilebilir. Bu yüzden komşu işletmelerle ortak sipariş vermek ya da teslim penceresini esnek tutmak, maliyeti düşüren yollardır.",
          "Siparişle birlikte boşaltma imkânı, araç erişimi ve iş saatlerini belirtmeniz, ek sefer riskini ortadan kaldırır.",
        ],
        steps: [
          "Mahalle, adres ve boşaltma koşulunu bildirin.",
          "Palet türü, ölçü ve adetle teklif alın.",
          "Teslim penceresini ve esnekliğini belirtin.",
          "Teslimde sayım yapılır ve fatura düzenlenir.",
        ],
        links: [L.surec, L.nakliye, L.turkiye],
      },
      {
        h: "Atölyelerde palet israfı",
        p: [
          "Çok sayıda küçük atölyenin bulunduğu bölgelerde, her işletmede küçük palet yığınları birikir. Tek tek çıkarmak verimsizdir; komşu işletmelerle toplu çıkış planlamak daha pratiktir. Palet türü ve durumunu bildirerek ön değerlendirme alabilirsiniz.",
        ],
        links: [L.hurda, L.yerinde, L.kirik],
      },
      {
        h: "Dönemsel üretimde palet yönetimi",
        p: [
          "Konfeksiyon ve mobilya atölyelerinde üretim yıl içinde dalgalanır. Yoğun dönemde palet sıkıntısı, durgun dönemde ise depolama sorunu yaşanır. Yoğun dönem öncesi bir miktar fazla almak ve durgun dönemde fazlaları geri satmak mümkündür.",
          "Alım ve satım yönünü birlikte planlamak maliyeti dengeler.",
        ],
        links: [L.alimSatim, L.rMaliyet],
      },
    ],
    faq: [
      { q: "Konfeksiyon atölyem için hangi palet uygun?", a: "Kıymık ve leke riski taşımayan temiz ikinci el ya da sıfır palet uygundur." },
      { q: "Komşularla ortak sipariş verebilir miyiz?", a: "Evet. Aynı güzergâhtaki siparişler birleştirilerek sevkiyat planlanabilir." },
      { q: "Kıraç’taki depoya tır girebilir mi?", a: "Adrese ve kapı ölçüsüne bağlıdır. Erişim bilgisini bildirirseniz uygun araç seçilir." },
      { q: "Fazla paletlerimi satabilir miyim?", a: "Tür ve duruma göre değerlendirilir. Fotoğraf ve adet bildirmeniz yeterli." },
      { q: "Fazla aldığım paletleri geri satabilir miyim?", a: "Türüne ve durumuna göre değerlendirilir. Fotoğraf ve adet bilgisi yeterlidir." },
    ],
  },

  "avcilar-palet": {
    blurb: "Avcılar’daki depo ve Ambarlı liman lojistiğine ihracat, Euro ve ikinci el palet.",
    answer:
      "Avcılar, Marmara kıyısında Ambarlı Limanı’na komşu bir ilçedir; depo, lojistik ve ihracat hazırlığı yapan işletmeler bu çevrede yoğundur. Bu işletmelere ISPM-15 damgalı ihracat paleti, Euro ve ikinci el palet sağlıyor; depolarda biriken hurda paletleri yerinden alıyoruz.",
    zones: ["Ambarlı", "Firüzköy", "Cihangir", "Denizköşkler", "Gümüşpala", "Tahtakale"],
    nearby: ["buyukcekmece-palet", "beylikduzu-palet", "bahcelievler-palet", "esenyurt-palet", "istanbul-palet"],
    sections: [
      {
        h: "Ambarlı çevresi: limanla bağlantılı ticaret",
        p: [
          "Ambarlı, Türkiye’nin konteyner trafiği açısından önemli liman bölgelerinden biridir. Çevresinde gümrük müşavirlikleri, antrepolar, konteyner depoları, nakliye firmaları ve ihracat paketleme atölyeleri yer alır. Avcılar’ın diğer mahalleleri ise ticaret ve konut ağırlıklıdır.",
          "Liman bağlantılı işletmelerin palet beklentisi nettir: hedef ülke kurallarına uygun, damgalı, sağlam ve ölçüsü konteynere uyumlu palet. Bu işte en kritik şey, paletin uygunluk belgesinde tereddüt bırakmamasıdır.",
        ],
        links: [L.gIhracat, L.rIhracat],
      },
      {
        h: "İhracat için palet kontrol listesi",
        list: [
          "Damga: ısıl işlem (HT) damgası okunaklı ve doğru yerde olmalı.",
          "Ölçü: konteyner yerleşimini bozmayacak, tutarlı ölçü kullanın.",
          "Kırık oranı: yükleme sırasında kırılacak palet yük kaybı yaratır.",
          "Tahta ve çivi durumu: çıkık çivi ürüne zarar verir.",
          "Belge talebi: alıcı ülke özel belge istiyorsa sipariş aşamasında bildirin.",
        ],
        links: [L.rIspm, L.ihracat, L.konteyner],
      },
      {
        h: "Avcılar’ın diğer işletmeleri",
        p: [
          "Liman dışındaki işletmeler, yani mağaza depoları, gıda dağıtıcıları, yapı malzemesi ve kırtasiye toptancıları, ihracat damgasına ihtiyaç duymaz. Bu işletmeler için sınıflandırılmış ikinci el Euro palet çoğu zaman hem yeterli hem ekonomiktir.",
        ],
        links: [L.ikinciEuro, L.gGida],
      },
      {
        h: "Sevkiyat ve liman trafiği",
        p: [
          "Liman çevresinde ağır araç trafiği yoğundur; teslim saatinin planlanması önem taşır. Avcılar’ın E-5 yan yol ve iç mahalle adreslerinde araç boyutu ve park kısıtı değerlendirilmelidir. Sipariş sırasında teslim penceresini, kapı kuralını ve boşaltma yöntemini yazmanız yeterli.",
        ],
        steps: [
          "Teslim noktasını (liman çevresi depo, mahalle adresi) belirtin.",
          "İhracat damgası gerekip gerekmediğini bildirin.",
          "Teklifteki teslim koşulunu onaylayın.",
          "Teslimde sayım ve damga kontrolü yapın.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Depodaki kırık paletler",
        p: [
          "Antrepo ve liman depolarında kırılan paletler sürekli çıkar ve düzenli temizlenmezse alan daralır. Düzenli aralıklarla kırık paletlerin çıkarılması için adet ve fotoğraf göndermeniz yeterlidir.",
        ],
        links: [L.hurda, L.kirik],
      },
      {
        h: "Damga okunaklılığı ve izlenebilirlik",
        p: [
          "İhracat paletinde damganın okunaklı olması, gümrük kontrolünde kritik bir ayrıntıdır. Silik, boyayla kapanmış ya da yanlış yerde damga, kontrolde sorun çıkarır. Teslimde damgalı yüzü kontrol etmek, sonradan düzeltme ihtiyacını azaltır.",
          "Aynı sevkiyatta kullanılacak tüm paletlerin damgasının aynı standartta olması beklenir.",
        ],
        links: [L.rIspm, L.ispm],
      },
    ],
    faq: [
      { q: "Ambarlı’ya gidecek yük için palet damgalı olmalı mı?", a: "Hedef ülkeye bağlıdır; birçok ülke ISPM-15 damgası ister. Nakliyeci veya gümrük müşaviri ile teyit edin." },
      { q: "Damgasız palet kullanırsam ne olur?", a: "Varış ülkesinde yük bekletilebilir, geri çevrilebilir ya da ek işleme tabi tutulabilir." },
      { q: "Liman dışındaki depolar için de teslimat var mı?", a: "Evet. Avcılar’ın iç mahalle ve yan yol adreslerine de teslimat planlanır." },
      { q: "Kırık paletleri depodan alıyor musunuz?", a: "Evet. Fotoğraf ve adet bildirmeniz yeterlidir." },
      { q: "Damga silikse ne olur?", a: "Gümrük kontrolünde sorun çıkabilir. Teslimde damgayı kontrol etmenizi öneririz." },
    ],
  },

  "beylikduzu-palet": {
    blurb: "Beylikdüzü OSB ve Yakuplu çevresindeki üretim ve depolara Euro, ikinci el, plastik ve HT damgalı palet.",
    answer:
      "Beylikdüzü, İstanbul Avrupa yakasının batısında Beylikdüzü OSB, Yakuplu ve Haramidere çevresinde üretim ve depo tesislerini barındırır. Bu işletmelere Euro, ikinci el, plastik ve HT damgalı palet sağlıyor; tesislerde biriken hurda paletleri yerinden alıyoruz.",
    zones: ["Beylikdüzü OSB", "Yakuplu", "Haramidere", "Gürpınar", "Kavaklı", "Adnan Kahveci"],
    nearby: ["esenyurt-palet", "avcilar-palet", "buyukcekmece-palet", "silivri-palet", "istanbul-palet"],
    sections: [
      {
        h: "Beylikdüzü OSB ve çevresi",
        p: [
          "Beylikdüzü OSB, ilçenin planlı sanayi alanıdır; çevresindeki Yakuplu ve Haramidere ise karışık sanayi, lojistik ve ticaret fonksiyonlarını bir arada barındırır. Matbaa, gıda, plastik, mobilya aksesuarı ve metal gibi çeşitli sektörlerin küçük ve orta ölçekli üreticileri burada yer alır.",
          "Beylikdüzü’nün bir diğer özelliği, TEM ve E-5 bağlantılarına yakın olması nedeniyle dağıtım ve cross-dock depolarının sayıca fazla olmasıdır. Bu depolarda palet çok hızlı el değiştirir.",
        ],
        links: [L.gEticaret, bolge("esenyurt-palet", "Esenyurt")],
      },
      {
        h: "Cross-dock ve dağıtım depoları için",
        list: [
          "Çok el değiştiren paletlerde sağlamlık ve standart ölçü öncelikli olmalıdır.",
          "Kırık oranı yüksek iç dönüşüm için ikinci el palet maliyetin kontrolünü sağlar.",
          "Raf sistemine giren paletlerde ölçü toleransı sıkı olmalıdır.",
          "Aynı depoda birden fazla palet türü varsa ayrı istif alanı belirleyin.",
        ],
        links: [L.ikinciEuro, L.epal, L.rRaf],
      },
      {
        h: "OSB üreticileri için",
        table: {
          caption: "Beylikdüzü OSB üreticileri için palet eşleştirmesi",
          head: ["Üretim", "Palet", "Not"],
          rows: [
            ["Matbaa ve ambalaj", "Düz tabanlı Euro, ince palet", "Kâğıt ve karton ağırlığı, nem hassasiyeti"],
            ["Gıda üretimi", "Plastik, sıfır palet", "Hijyen"],
            ["Plastik ve kauçuk ürün", "İkinci el Euro, 100x120", "Torba ve koli"],
            ["Metal parça", "Takozlu, özel ölçü", "Ağır parça"],
          ],
        },
        links: [L.ince, L.plastik, L.p100, L.takozlu],
      },
      {
        h: "Beylikdüzü’ne sevkiyat",
        p: [
          "OSB içine sevkiyatta giriş kuralı ve plaka bildirimi, OSB dışı depolarda ise araç manevra alanı ve park durumu öne çıkar. E-5 ve TEM üzerindeki yoğun saatler teslim penceresini daraltabilir. Teslim saati tercihini siparişte bildirmeniz yeterli.",
        ],
        steps: [
          "OSB mi, dış depo mu olduğunu ve giriş kuralını yazın.",
          "Palet türü ve adedi ile teklif alın.",
          "Teslim saati penceresini onaylayın.",
          "Teslimde sayım yapılır, irsaliye ve fatura düzenlenir.",
        ],
        links: [L.surec, L.toptan],
      },
      {
        h: "Çıkarılacak paletler",
        p: [
          "Dağıtım depolarında kırık palet birikimi, alan kaybı demektir. Toplu çıkış için palet türü ve miktarını bildirin; kullanılabilir olanlar ayrılır, kalanı geri dönüşüme gider.",
        ],
        links: [L.hurda, L.yerinde],
      },
      {
        h: "Çok el değiştiren paletleri işaretlemek",
        p: [
          "Dağıtım depolarında palet çok sayıda el değiştirir ve karışır. Kendi paletlerinizi renk bandı, boya ya da etiketle işaretlemek, kayıpları izlemeyi kolaylaştırır. Ayrıca kalite sınıflarını ayrı renklerle ayırmak, sağlam ve kırık ayırımını hızlandırır.",
          "Düzenli sayım yapan işletmelerde palet kaybı belirgin biçimde düşer.",
        ],
        links: [L.rSinif, L.rOmur],
      },
    ],
    faq: [
      { q: "Matbaa için hangi palet daha uygun?", a: "Düz tabanlı ve kuru palet; kâğıt ve karton nemden etkilendiği için nem düzeyi önemlidir." },
      { q: "Cross-dock deposunda hangi palet?", a: "Standart ölçülü, sağlam ve ekonomik ikinci el Euro palet çoğu kez yeterlidir." },
      { q: "OSB girişinde ne gerekli?", a: "OSB kuralına göre plaka ve sürücü bilgisi gerekir." },
      { q: "Kırık paletleri depodan alır mısınız?", a: "Evet. Tür ve adet bilgisiyle değerlendirilir." },
      { q: "Paletleri nasıl işaretlemeliyim?", a: "Renk bandı ya da boyayla kendi işaretinizi koyun. Kalite sınıflarını farklı renklerle ayırmak da işi kolaylaştırır." },
    ],
  },

  "buyukcekmece-palet": {
    blurb: "Büyükçekmece ve Mimarsinan çevresindeki üretim ve depolara Euro, ikinci el ve plastik palet.",
    answer:
      "Büyükçekmece, İstanbul Avrupa yakasında göl ve deniz kıyısı arasında yer alan; Mimarsinan, Kumburgaz ve Celaliye çevresinde üretim, depo ve ticaret tesislerini barındıran geniş bir ilçedir. Bu işletmelere Euro, ikinci el ve plastik palet sağlıyor; hurda paletleri yerinden alıyoruz.",
    zones: ["Mimarsinan", "Kumburgaz", "Celaliye", "Tepecik", "Güzelce", "Hürriyet"],
    nearby: ["beylikduzu-palet", "silivri-palet", "catalca-palet", "avcilar-palet", "istanbul-palet"],
    sections: [
      {
        h: "Geniş ve parçalı bir ilçe",
        p: [
          "Büyükçekmece, doğuda Beylikdüzü’ne, batıda Silivri’ye uzanan geniş bir sahile ve iç kesimlerde sanayi ile depo alanlarına sahiptir. Mimarsinan çevresi daha çok ticari ve sanayi kullanımına ayrılmış, Kumburgaz ve Celaliye ise yazlık ve konut ağırlıklı yerleşimlerden oluşur.",
          "Bu yayılım, teslimat planını belirleyici hale getirir: ilçe içinde bir adresten diğerine geçmek bile ciddi bir yol demektir. Bu yüzden teslim noktasını mahalle düzeyinde belirtmek önemlidir.",
        ],
        links: [bolge("beylikduzu-palet", "Beylikdüzü"), bolge("silivri-palet", "Silivri")],
      },
      {
        h: "İşletme tiplerine göre palet",
        list: [
          "Mimarsinan sanayi ve depo alanı: ikinci el Euro palet ve sınıflandırılmış palet stokları.",
          "Gıda ve tarım ürünleri: hijyen için plastik, sıfır palet; tarım ürünlerinde hafif palet.",
          "Yazlık yerleşimlere hizmet veren işletmeler: sezonluk, küçük adetli palet ihtiyacı.",
          "Yapı malzemesi ve inşaat: takozlu ve kalın tahtalı palet.",
        ],
        links: [L.ikinciEuro, L.plastik, L.takozlu],
      },
      {
        h: "Sezonluk talep",
        p: [
          "Kumburgaz gibi yazlık bölgelerde yaz sezonunda hizmet veren işletmeler (restoran, tedarik, inşaat) palet ihtiyacını sezon öncesinde planlar. Son dakika taleplerinde teslim zamanı daralır. Sezon öncesi planlama bu yüzden daha rahat bir çözümdür.",
        ],
        steps: [
          "Sezon ihtiyacını tahmini adetle bildirin.",
          "Teslim noktasını ve erişimi yazın.",
          "Teklifi onaylayıp teslim penceresini kesinleştirin.",
          "Teslimde sayım yapılır.",
        ],
        links: [L.surec, L.rMaliyet],
      },
      {
        h: "Teslimat ve atık palet",
        p: [
          "Büyükçekmece’de teslimat için araç erişimi ve boşaltma yöntemi belirtilirse plan netleşir. Kullanılmayan paletler için de aynı yazışmada fotoğraf ve adet bildirmek yeterlidir.",
        ],
        links: [L.nakliye, L.hurda],
      },
      {
        h: "Kıyı ve göl iklimi paletleri nasıl etkiler",
        p: [
          "Büyükçekmece’de deniz ve göl kenarına yakın depoların nem düzeyi, iç bölgelere göre yüksektir. Ahşap palet bu ortamda hızla nem çeker, küflenir ve dayanımını kaybeder. Kapalı ve havadar depolama, ahşabın ömrünü uzatır.",
          "Sürekli nemli alanlarda plastik palet daha mantıklı bir yatırımdır; kuru alanlarda ise ikinci el ahşap yeterlidir.",
        ],
        links: [L.rAhsapPlastik, L.rOmur],
      },
    ],
    faq: [
      { q: "Yazlık bölgede sezonluk palet teslim edilir mi?", a: "Evet. Sezon öncesi planlanırsa teslim daha rahat yapılır." },
      { q: "Mimarsinan’daki depoya tır girer mi?", a: "Adrese göre değişir. Kapı ve sokak bilgisini bildirirseniz uygun araç planlanır." },
      { q: "Gıda işletmesi için hangi palet?", a: "Plastik ya da sıfır palet tercih edilir." },
      { q: "Atıl paletleri alıyor musunuz?", a: "Evet. Tür ve adet bilgisiyle değerlendirilir." },
      { q: "Nemli depoda ahşap palet kaç ay dayanır?", a: "Ortamın nemine ve havalandırmaya göre değişir; kesin süre vermek mümkün değil. Nemli alanlarda plastik palet daha güvenli seçimdir." },
    ],
  },

  "basaksehir-palet": {
    blurb: "Başakşehir ve İkitelli OSB çevresindeki matbaa, metal ve plastik tesislerine Euro, ikinci el ve HT damgalı palet.",
    answer:
      "Başakşehir, İkitelli OSB ve çevresindeki sanayi sitelerinde matbaa, metal, plastik, mobilya ve gıda üretimi yapan çok sayıda işletmeyi barındırır. Bu işletmelere Euro, ikinci el ve HT damgalı palet sağlıyor; tesislerde biriken hurda paletleri yerinden alıyoruz.",
    zones: ["İkitelli OSB", "Başak", "Kayabaşı", "Hoşdere", "Şamlar", "Ziya Gökalp"],
    nearby: ["kucukcekmece-palet", "arnavutkoy-palet", "bagcilar-palet", "istanbul-palet", "plastikciler-osb-palet"],
    sections: [
      {
        h: "İkitelli: İstanbul’un yoğun sanayi sitesi kümesi",
        p: [
          "İkitelli OSB, birçok sanayi sitesi ve modül bloğuyla çevrili, İstanbul’un en yoğun küçük sanayi kümelerinden biridir. Metal işleme, plastik enjeksiyon, matbaa, ambalaj, mobilya aksesuarı ve elektrik-elektronik gibi çeşitli sektörlerin atölye ve fabrikaları burada iç içe çalışır.",
          "Bu yoğunluk palet tarafında da hareketlilik yaratır: küçük adetli ama çok sayıda sipariş, düzenli yenileme ve atıl palet çıkışı birlikte yürür.",
        ],
        links: [L.gKimya, bolge("kucukcekmece-palet", "Küçükçekmece")],
      },
      {
        h: "Sektör ve palet eşleşmesi",
        table: {
          caption: "İkitelli çevresinde tipik palet kullanımı",
          head: ["Sektör", "Palet", "Not"],
          rows: [
            ["Matbaa ve ambalaj", "Düz, kuru Euro palet", "Kâğıt ve karton nemden etkilenir"],
            ["Plastik enjeksiyon", "İkinci el Euro, plastik", "Ürün ve hammadde torbaları"],
            ["Metal işleme", "Takozlu, özel ölçü", "Parça ağırlığı"],
            ["Elektrik-elektronik", "Sıfır ya da temiz ikinci el", "Leke ve toz"],
            ["İhracat yapan firmalar", "HT damgalı palet", "Hedef ülke kuralı"],
          ],
        },
        links: [L.ikinciEuro, L.plastik, L.takozlu, L.ihracat],
      },
      {
        h: "Yoğun sanayi sitelerinde lojistik",
        p: [
          "Sanayi sitelerinin iç yolları dar, kamyon trafiği yoğun olabilir. Büyük araçla girmek zorlaşır, bekleme süresi uzar. Mümkünse teslim saati, yoğun mesai dışına alınır. Siparişte site adı, blok bilgisi ve boşaltma yöntemini yazın.",
        ],
        steps: [
          "Site adı, blok ve kapı bilgisini yazın.",
          "Palet türü ve adedi ile teklif alın.",
          "Teslim penceresini mesai dışına çekmek mümkünse bildirin.",
          "Teslimde sayım yapılarak irsaliye düzenlenir.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Yer sıkıntısı ve atıl palet",
        p: [
          "İkitelli tipi sitelerde depo alanı kısıtlıdır; atıl paletler koridoru kapatır, iş güvenliği riski doğurur. Düzenli çıkış planı yapmak, hem alan hem güvenlik açısından fayda sağlar. Palet türü ve adedi ile bize yazın.",
        ],
        links: [L.hurda, L.yerinde, L.rIstif],
      },
    ],
    faq: [
      { q: "Matbaa için palet nemi önemli mi?", a: "Evet. Kâğıt ve karton nem alır; kuru palet kullanın." },
      { q: "Sanayi sitesinin kapısı dar, araç nasıl girer?", a: "Kapı ölçüsünü bildirirseniz uygun araç belirlenir." },
      { q: "İhracat için damga alabilir miyiz?", a: "Evet. HT damgalı palet temin edilir; sipariş sırasında belirtin." },
      { q: "Az sayıda palet alabilir miyim?", a: "Evet. Küçük adetli talepler de kabul edilir." },
    ],
  },

  "kucukcekmece-palet": {
    blurb: "Küçükçekmece, Halkalı ve Sefaköy çevresindeki depo ve imalat işletmelerine Euro, ikinci el ve plastik palet.",
    answer:
      "Küçükçekmece, Halkalı, Sefaköy ve İkitelli sınırında ticaret, depolama ve küçük imalat işletmelerinin yoğun olduğu bir ilçedir. Bu işletmelere Euro, ikinci el ve plastik palet sağlıyor; depo ve atölyelerdeki hurda paletleri yerinden alıyoruz.",
    zones: ["Halkalı", "Sefaköy", "Atakent", "Kanarya", "Cennet", "İstasyon"],
    nearby: ["basaksehir-palet", "bahcelievler-palet", "zeytinburnu-palet", "gungoren-palet", "avcilar-palet", "istanbul-palet"],
    sections: [
      {
        h: "Küçükçekmece’nin ticari dokusu",
        p: [
          "Küçükçekmece, kentin hem iç kesimlerine hem de kıyıya uzanan, ticaret ve konut ağırlıklı bir ilçedir. Halkalı ve Sefaköy çevresinde lojistik depolar, kargo dağıtım noktaları, yapı malzemesi satıcıları ve mutfak malzemesi tedarikçileri bulunur. İkitelli sınırı ise sanayi kümesine komşudur.",
          "Bu yapı, orta hacimli ama düzenli palet kullanımı doğurur. İşletmeler genellikle büyük OSB tesisleri gibi kendi stoklarını tutmaz; ihtiyaç doğdukça sipariş verir.",
        ],
        links: [L.gEticaret, bolge("basaksehir-palet", "Başakşehir")],
      },
      {
        h: "Palet seçimi: pratik öneriler",
        list: [
          "Kargo ve dağıtım: sağlam, standart ölçülü ikinci el Euro palet.",
          "Yapı malzemesi satıcıları: ağır yüke uygun takozlu ya da kalın palet.",
          "Mutfak ve gıda tedariği: temiz yüzey için plastik veya sıfır palet.",
          "Küçük imalat: işine uygun özel ölçü veya yarım palet.",
        ],
        links: [L.ikinciEuro, L.takozlu, L.plastik, L.ince],
      },
      {
        h: "Teslimat deneyimi",
        p: [
          "Küçükçekmece’nin yoğun trafiği ve park sıkıntısı olan caddelerinde teslimat için doğru zaman seçimi önemlidir. Mümkünse sabah erken ya da öğleden sonra teslim penceresi belirleyin. Aracın park edebileceği yer, boşaltma noktasına uzaklığı ve elle taşıma gerekip gerekmediği önceden belirtilirse süre kısalır.",
        ],
        steps: [
          "Mahalle ve cadde bilgisini, park ve boşaltma durumunu yazın.",
          "Palet türü ve adedine göre teklif alın.",
          "Teslim saati aralığını kesinleştirin.",
          "Teslimde sayım ve fatura ile tamamlanır.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Fazla ve kırık palet",
        p: [
          "Depo işletmelerinde palet yığınları kısa sürede büyür. Küçük miktarlar bile alan kaplar. Fotoğraf ve adet göndererek ön değerlendirme alabilirsiniz.",
        ],
        links: [L.hurda, L.degerleme],
      },
      {
        h: "Rafa uyum kontrol listesi",
        p: [
          "Kiralık depo ve raf kullanan işletmelerde palet ölçüsü, rafın ışığına uymalıdır. Palet raf kirişine oturmalı, kenarlardan taşmamalı ve alt tahtaları forklift çatalının girmesine izin vermelidir. Aksi halde palet kirişte dengesiz durur.",
          "Rafınızın kiriş açıklığını ve taşıma kapasitesini bildirirseniz, uygun palet için öneri sunabiliriz.",
        ],
        links: [L.rRaf, L.epal],
      },
    ],
    faq: [
      { q: "Yapı malzemesi için hangi palet uygun?", a: "Ağır yüklerde takozlu veya kalın tahtalı palet tercih edilir." },
      { q: "Park sorunu olan caddeye teslimat yapılır mı?", a: "Evet, ancak teslim penceresi ve boşaltma yöntemi önceden planlanmalıdır." },
      { q: "Az sayıda palet sipariş edebilir miyim?", a: "Evet. Küçük adetli talepler için de teklif hazırlanır." },
      { q: "Eski paletlerimi alır mısınız?", a: "Evet. Fotoğraf ve adetle değerlendirme yapılır." },
      { q: "Raf sistemi için hangi paletleri kullanmalıyım?", a: "Raf kirişine oturan standart ölçülü, alt tahtası sağlam palet gerekir. Kiriş açıklığınızı bildirirseniz uygun ürün önerilir." },
    ],
  },

  "arnavutkoy-palet": {
    blurb: "Arnavutköy, Hadımköy ve Taşoluk çevresindeki lojistik depolar ve fabrikalara Euro, HT damgalı ve ikinci el palet.",
    answer:
      "Arnavutköy, İstanbul Havalimanı’nın bulunduğu ilçedir; Hadımköy ve çevresinde sanayi, lojistik merkezleri ve büyük depolar yer alır. Bu işletmelere Euro, HT damgalı ve ikinci el palet sağlıyor; tesislerde biriken hurda paletleri yerinden alıyoruz.",
    zones: ["Hadımköy", "Taşoluk", "Boğazköy", "Bolluca", "Karlıbayır", "Tayakadın", "İstanbul Havalimanı çevresi"],
    nearby: ["basaksehir-palet", "catalca-palet", "sultangazi-palet", "istanbul-palet", "kocaeli-palet"],
    sections: [
      {
        h: "Arnavutköy: yeni lojistik ekseni",
        p: [
          "Arnavutköy, son yıllarda Kuzey Marmara Otoyolu ve havalimanı bağlantısıyla lojistik yatırımların yöneldiği bir ilçedir. Hadımköy’deki sanayi alanı ve çevresindeki geniş depolar, üretici firmaların ve dağıtım şirketlerinin merkezlerini barındırır. Taşoluk gibi yerleşimlerde ise konut ve küçük ticaret ağırlıklıdır.",
          "Büyük depo alanları, palet kullanımının da büyük hacimli olmasına yol açar. Raf sistemleri ve otomasyon kullanan depolarda palet kalitesi ve ölçü tutarlılığı ön plandadır.",
        ],
        links: [L.gEticaret, L.gIhracat],
      },
      {
        h: "Büyük depolarda palet kalitesi",
        list: [
          "Raflı depolarda ölçü ve tahta kalınlığı toleransı tutarlı olmalıdır; farklı kalitedeki paletleri karıştırmak raf güvenliğini azaltır.",
          "Otomatik sistemlerde (konveyör, palet sarma) kenar ve alt tahtaların düzgünlüğü önem taşır.",
          "Yüksek devirde dayanıklı paletle düzenli yenileme dengesi kurulmalıdır.",
          "İhracat çıkışı olan depolarda HT damgalı ve damgasız paletleri ayrı tutun.",
        ],
        links: [L.epal, L.ikinciEuro, L.ihracat, L.rRaf],
      },
      {
        h: "Hadımköy sanayisi için",
        table: {
          caption: "Hadımköy çevresi örnek eşleştirme",
          head: ["Faaliyet", "Palet", "Not"],
          rows: [
            ["Lojistik ve dağıtım deposu", "Sınıflandırılmış ikinci el Euro", "Raf uyumu, düzenli yenileme"],
            ["Beyaz eşya ve elektronik", "CP, özel ölçü", "Ürün ağırlığı ve istif yüksekliği"],
            ["Plastik ve ambalaj", "Euro, 100x120", "Torba ve koli"],
            ["İhracat sevkiyatı", "HT damgalı palet", "Hedef ülke kuralı"],
          ],
        },
        links: [L.cp, L.p100, L.ozel],
      },
      {
        h: "Sevkiyat",
        p: [
          "Arnavutköy’ün geniş yüzölçümü nedeniyle teslimat noktasının doğru tanımlanması önemlidir. Sanayi sitesi adı, cadde ve numara, mümkünse kapı numarası ile birlikte yazılmalıdır. Büyük depolara tır erişimi genellikle uygundur; yine de kapı yüksekliği ve rampa durumunu bildirin.",
        ],
        steps: [
          "Tam adres ve rampa durumunu bildirin.",
          "Palet türü ve adedi ile teklif alın.",
          "Büyük hacimde teslim planı (parti sıklığı) belirleyin.",
          "Teslimde sayım ve irsaliye ile kayıt altına alın.",
        ],
        links: [L.surec, L.toptan, L.nakliye],
      },
      {
        h: "Depodan çıkacak paletler",
        p: [
          "Büyük depolarda yenileme sonrası eski paletler toplu halde bekler. Bu paletler sınıflandırılarak onarılabilirler ve geri dönüşüme gidecekler ayrılır. Toplu çıkış için adet ve fotoğraf yeterlidir.",
        ],
        links: [L.hurda, L.yerinde, L.tamir],
      },
      {
        h: "Raflı sistem denemesi",
        p: [
          "Büyük depolarda yeni bir palet türüne geçmeden önce küçük bir deneme yapmak iyi bir uygulamadır. Birkaç paleti raf, forklift ve konveyörde deneyerek ölçü ve dayanım uyumunu görebilirsiniz.",
          "Deneme sonrası toplu geçiş, riski azaltır.",
        ],
        links: [L.rRaf, L.epal],
      },
    ],
    faq: [
      { q: "Raflı depo için hangi palet?", a: "Ölçü ve kalınlık toleransı tutarlı, alt tahtası sağlam palet. Sınıflandırılmış Euro ya da EPAL tercih edilir." },
      { q: "Otomasyon hattında hangi palet?", a: "Düzgün kenar ve alt tahta gerekir. Ayrıntı için ölçü ve kalite şartnamesini paylaşın." },
      { q: "Büyük partilere teslimat planlanır mı?", a: "Evet. Parti sıklığı ve adet çerçevesi teklifte belirlenir." },
      { q: "Depo yenilemesinden kalan paletler alınır mı?", a: "Evet. Tür, durum ve adet bilgisiyle değerlendirilir." },
      { q: "Yeni palet türüne geçmeden test yapılır mı?", a: "Evet. Büyük partiden önce küçük bir deneme partisi önerilir." },
    ],
  },
};
