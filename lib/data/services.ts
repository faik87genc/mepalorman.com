import type { Service } from "@/lib/types";
import { extraServices } from "./services-extra";

// Hizmet sayfaları (/hizmetler/<slug>/): hurda-palet-alimi, palet-alim-satim, palet-tamiri, toptan-palet
const baseServices: Service[] = [
  {
    slug: "hurda-palet-alimi",
    name: "Hurda Palet Alımı",
    title: "Hurda Palet Alımı ve Ahşap Atık Geri Dönüşümü | MEPAL",
    description: "Kullanılmayan hurda palet ve ahşap atığınızı değerlendiriyoruz. Gebze ve çevresinde yerinden alım, fotoğrafla ön değerleme, hızlı randevu.",
    h1: "Hurda Palet Alımı ve Ahşap Atık Geri Dönüşümü",
    answer:
      "Fabrikanızda biriken kırık, eskimiş veya fazla paletleri Gebze ve çevresinde yerinden alıyoruz. Sağlam kalanlar onarılıp yeniden satılır, kullanılamayanlar ahşap atık olarak geri dönüşüme verilir. Fotoğraf gönderin, ön değerlemeyi hemen yapalım.",
    keyword: "hurda palet alımı",
    art: "scrap",
    blurb: "Hurda ve fazla paletleriniz yerinden alınır; ahşap atık geri dönüşüme kazandırılır.",
    related: ["hasarli-palet-alimi", "kirik-palet-alimi", "yerinde-palet-toplama", "palet-alim-satim", "palet-tamiri", "ikinci-el-palet", "sifir-ahsap-palet", "ahsap-atik-geri-donusumu"],
    guides: ["hasarli-ve-kirik-palet-ne-yapilir", "hurda-paletinizi-nasil-degerlendirirsiniz", "ikinci-el-palet-alirken-dikkat-edilecekler", "palet-kalite-siniflari", "palet-omru-nasil-uzatilir"],
    sections: [
      {
        h: "Ahşap atık geri dönüşümü neden önemli?",
        p: [
          "Üretim ve depolama yapan her işletmede zamanla kırık, çürümüş veya fazla gelen paletler birikir. Bunlar depoda yer kaplar, yangın yükünü artırır ve düzenli toplanmazsa ayrı bir atık maliyeti doğurur.",
          "Ahşap, doğru ayrıştırıldığında değerini koruyan bir malzemedir. Hurda palet alımında amacımız paleti çöpe değil, ikinci bir kullanıma yönlendirmek: sağlam olanlar onarılıp yeniden palet olur, kullanılamayacak durumdakiler ahşap atık olarak geri dönüşüm zincirine verilir.",
          "Elinizdeki parti tamamen kırık değilse iki ayrı sayfamız işinize yarar: tamire elverişli paletler için hasarlı palet alımı, yapısı dağılmış paletler için kırık palet alımı. Hangisine girdiğinden emin değilseniz fotoğraf göndermeniz yeterlidir.",
        ],
        links: [
          ["Hasarlı palet alımı", "/hizmetler/hasarli-palet-alimi/"],
          ["Kırık palet alımı", "/hizmetler/kirik-palet-alimi/"],
          ["Hasarlı ve kırık palet ne yapılır?", "/rehber/hasarli-ve-kirik-palet-ne-yapilir/"],
        ],
      },
      {
        h: "Hurda palet alımı nasıl çalışır?",
        steps: [
          "Palet cinsini, yaklaşık adedini ve bulunduğunuz yeri WhatsApp veya telefonla bildirin. Birkaç fotoğraf göndermeniz yeterlidir.",
          "Fotoğraftan ön değerleme yapılır; isterseniz bunu fotoğrafla palet değerleme aracından da kendiniz başlatabilirsiniz.",
          "Adet ve durum netleştikten sonra alım teklifi iletilir. Gerekirse yerinde kısa bir kontrol planlanır.",
          "Uygun bir gün ve saatte araç gönderilir, paletler tesisinizden yüklenir.",
          "Alım tamamlandığında sağlam paletler ayrılıp onarıma, kalanlar geri dönüşüme yönlendirilir.",
        ],
        links: [["Fotoğraftan palet değerleme", "/araclar/fotograftan-palet-degerleme/"]],
      },
      {
        h: "Ne tür paletler alıyoruz?",
        list: [
          "Euro ölçülü (80x120) ve 100x120 ahşap paletler; sağlam, onarılabilir veya kırık durumda",
          "CP paletler ve 114x114 ölçülü endüstriyel paletler",
          "İkinci el EPAL ölçülü paletler",
          "Özel ölçülü ahşap paletler ve ihracat sandığı artıkları",
          "Çok sayıda kırık veya çürük palet ile ahşap kasa, takoz ve kereste artığı",
        ],
        p: ["Plastik paletler ve çok miktarda yağ ya da kimyasalla kirlenmiş ahşaplar için önce durumunuzu bildirmenizi rica ederiz; bu parçalar her zaman alım kapsamına girmeyebilir."],
      },
      {
        h: "Değerlemeyi hangi nitelikler belirler?",
        p: ["Alım teklifi tek bir rakamdan değil, paletin durumundan oluşur. Fiyatı etkileyen başlıca unsurlar şunlardır:"],
        list: [
          "Sağlam, onarılabilir veya tamamen kırık olması",
          "Ölçü ve tip: standart Euro palet ile özel ölçülü palet aynı değerde olmaz",
          "Tahta ve ayakların durumu; çürük, kırık ya da eksik parça sayısı",
          "Toplam adet ve parti içindeki sağlam palet oranı",
          "Paletlerin temiz, kuru ve ayrıştırılmış olması",
          "Bulunduğunuz konum ve yüklemenin kolaylığı",
        ],
        links: [["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"]],
      },
      {
        h: "Alım için nasıl hazırlanmalısınız?",
        list: [
          "Sağlam ve kırık paletleri mümkünse ayrı istiflerde toplayın.",
          "Paletlerin üzerinde ürün, streç veya çember kalıntısı bırakmayın.",
          "Araç girişi ve istif alanını önceden bildirin; çatallı ekipman varsa belirtin.",
          "Düzenli hurda çıkışınız varsa periyodik alım için görüşün.",
        ],
        p: ["Gebze, Dilovası, Çayırova, Tuzla ve İstanbul Anadolu yakasındaki tesislerden doğrudan; yeterli miktarda ise Türkiye genelinde planlı alım yapıyoruz. Araç programına göre çoğunlukla kısa sürede randevu verilir; net zaman teklifte bildirilir."],
        links: [["Bölge sayfaları: Gebze", "/bolge/gebze-palet/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Hurda paleti ücretsiz mi alıyorsunuz?", a: "Alım teklifi paletin durumuna, adedine ve konumuna göre belirlenir. Sağlam veya onarılabilir palet oranı yüksekse alım bedeli ödenir; kullanılamaz durumdaki partilerde koşullar teklifte açıkça yazılır." },
      { q: "Minimum kaç palet alıyorsunuz?", a: "Yerinden alımın verimli olması için belirli bir adet gerekir. Net alt limit bölgenize göre değişebilir; adedi ve konumu bildirirseniz size uygun olup olmadığını söyleriz." },
      { q: "Kırık paletler ne oluyor?", a: "Onarılabilen parçalar ayrılıp palet tamirinde kullanılır, kullanılamayan ahşap atık geri dönüşüme yönlendirilir." },
      { q: "Fotoğrafla değerleme bağlayıcı mı?", a: "Hayır. Fotoğraf yalnızca ön değerlemedir. Kesin teklif, adet ve durum netleştikten sonra verilir." },
      { q: "Yerinden alım için araç gönderiyor musunuz?", a: "Evet. Gebze, Dilovası, Çayırova, Tuzla ve İstanbul Anadolu yakasında araçla alım yapılır; Türkiye genelinde yeterli miktarda planlı alım mümkündür. Gün ve saat, araç programına göre birlikte belirlenir." },
    ],
  },
  {
    slug: "palet-alim-satim",
    name: "Palet Alım Satım",
    title: "Paletçi: Palet Alım Satım ve Toplu Tedarik | MEPAL",
    description: "Palet alan firmalar ve paletçi arayanlar için: sıfır ve ikinci el palet tedariği, toplu alım, fazla palet satışı. Gebze deposundan Türkiye geneli.",
    h1: "Paletçi: Palet Alım Satım ve Toplu Palet Tedariği",
    answer:
      "MEPAL hem palet satan hem palet alan bir paletçidir: sıfır ve ikinci el ahşap palet, plastik palet ve ikinci el EPAL palet Gebze deposundan toplu tedarik edilir; fazla veya kullanılmayan paletleriniz değerlendirilip satın alınır. Ürün, adet ve konumu bildirin, teklifi çıkaralım.",
    keyword: "palet alım satım",
    art: "service",
    blurb: "Paletçi olarak sıfır ve ikinci el palet tedariği, toplu alım ve fazla palet alımı tek adreste.",
    related: ["hurda-palet-alimi", "toptan-palet", "ikinci-el-palet", "80x120-euro-palet", "epal-palet"],
    guides: ["palet-satin-alma-rehberi", "paletci-nasil-secilir", "ikinci-el-palet-alirken-dikkat-edilecekler", "palet-kalite-siniflari", "palet-cesitleri-ve-secimi", "palet-maliyetini-dusurmenin-yollari", "hurda-palet-nereye-satilir", "palet-alirken-teklif-isterken-hangi-bilgiler-gerekir"],
    sections: [
      {
        h: "Paletçi arıyorsanız: tek adreste tedarik ve alım",
        p: [
          "Palet ihtiyacı işletmeden işletmeye değişir: bir tarafta sevkiyat için sürekli palet arayan üreticiler ve depolar, diğer tarafta depolarında fazla palet biriktirenler vardır. Gebze deposumuz bu iki ihtiyacı birbirine bağlar. Palet tedariği için mi geldiniz, fazla paletleriniz için mi, ikisi de aynı muhatapla çözülür.",
          "Satın alırken ürünü sınıfıyla ve ölçüsüyle net olarak bilirsiniz; satarken ise paletlerinizin durumuna göre alım teklifi alırsınız. Toplu alımlarda teklif adede, palet tipine ve teslimat koşuluna göre kurgulanır.",
        ],
      },
      {
        h: "Palet alan firmalar için: neler tedarik edilir?",
        list: [
          "Euro ölçülü (80x120) sıfır ahşap palet",
          "Euro ölçülü ikinci el palet, 1. ve 2. sınıf",
          "İkinci el EPAL palet alım-satımı",
          "100x120 ve 114x114 (CP) endüstriyel paletler",
          "ISPM-15 uyumlu, HT damgalı ihracat paleti temini",
          "Plastik palet ve özel ölçülü ahşap palet",
        ],
        p: ["Düzenli ve toplu ihtiyacınız varsa aylık veya haftalık tedarik planı yapılabilir. Güncel fiyat için fiyat tablosuna bakın veya teklif alın."],
        links: [["Palet fiyatları", "/palet-fiyatlari/"], ["İkinci el palet", "/urunler/ikinci-el-palet/"], ["Euro palet", "/urunler/80x120-euro-palet/"], ["Toptan palet", "/hizmetler/toptan-palet/"]],
      },
      {
        h: "Palet satmak istediğinizde: alım süreci",
        p: ["Fazla veya kullanılmayan paletlerinizi satmak için süreç birkaç net adımdan oluşur. Sağlam ve sınıflandırılabilir paletler için alım teklifi verilir; kırık ve çürük paletler hurda palet alımı kapsamında ayrıca değerlendirilir."],
        steps: [
          "Palet tipi, ölçü, yaklaşık adet ve konumu bildirin; mümkünse fotoğraf ekleyin.",
          "Fotoğraf ve bilgilere göre ön değerleme yapılır; bu aşama bağlayıcı değildir.",
          "Gerekirse paletler yerinde görülür; sağlam, tamirlik ve hurda diye sınıflanır.",
          "Teklif ve ödeme şekli netleşince yükleme günü belirlenir ve paletler tesisinizden yüklenir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Hasarlı palet alımı", "/hizmetler/hasarli-palet-alimi/"], ["Hurda palet nereye satılır?", "/rehber/hurda-palet-nereye-satilir/"]],
      },
      {
        h: "Alım satımda sıfır mı, ikinci el mi?",
        table: {
          caption: "Sıfır ve ikinci el palet — genel karşılaştırma",
          head: ["Ölçüt", "Sıfır palet", "İkinci el palet"],
          rows: [
            ["Maliyet", "Daha yüksek", "Belirgin biçimde daha düşük"],
            ["Görünüm", "Temiz, standart", "Kullanım izi olabilir; sınıfa göre değişir"],
            ["Ömür", "Uzun, tam kullanım ömrü", "Durumuna ve onarım kalitesine bağlı"],
            ["Uygun kullanım", "Gıda, ihracat, hassas ürün", "Yurt içi sevkiyat, depolama, genel sanayi"],
            ["Tedarik", "Üretimden, stok durumuna göre", "Hazır stoktan daha hızlı olabilir"],
          ],
        },
        p: ["Hangisinin size uygun olduğuna yükünüz, ürününüzün hassasiyeti ve palet dönüş döngünüz karar verir."],
        links: [["Palet seçici aracı", "/araclar/palet-secici/"], ["Sıfır mı ikinci el mi?", "/rehber/sifir-palet-mi-ikinci-el-palet-mi/"]],
      },
      {
        h: "Teklif ve teslimat süreci",
        steps: [
          "Palet tipini, ölçüyü ve adedi WhatsApp'tan veya teklif formundan iletin.",
          "Stok durumuna göre fiyat ve teslim planı bildirilir.",
          "Onaydan sonra paletler hazırlanır; depodan teslim alabilir veya araçla sevk isteyebilirsiniz.",
        ],
        p: ["Teslimat stok ve araç programına göre yapılır; net süre teklifte bildirilir."],
        links: [["Teklif al", "/teklif-al/"], ["Teklif için gerekli bilgiler", "/rehber/palet-alirken-teklif-isterken-hangi-bilgiler-gerekir/"]],
      },
    ],
    faq: [
      { q: "Hem alım hem satım yapıyor musunuz?", a: "Evet. Sıfır ve ikinci el palet satışı yapıyoruz, sağlam ve onarılabilir paletlerinizi de değerlendirme sonrası satın alıyoruz." },
      { q: "Toplu palet tedariği yapıyor musunuz?", a: "Evet. Düzenli veya tek seferlik toplu ihtiyaçlar için tip, ölçü ve adede göre teklif hazırlanır; periyodik tedarik planlanabilir." },
      { q: "İkinci el paletler hangi sınıflarda?", a: "Euro ölçülü ikinci el paletler 1. sınıf (sağlam, onarılmış) ve 2. sınıf (yerli kullanım) olarak ayrılır. Sınıf farkları palet kalite sınıfları rehberinde açıklanmıştır." },
      { q: "EPAL paletleri satıyor musunuz?", a: "İkinci el EPAL palet alım-satımı yapıyoruz. EPAL tescilli bir markadır; yeni palet tarafında EPAL ölçülerinde Euro palet (80x120) tedarik edilir." },
      { q: "Fiyatlar neye göre değişiyor?", a: "Palet tipi, sınıfı, ölçüsü ve sipariş adedi fiyatı belirler. Güncel fiyat tablosuna bakabilir veya adedinizi bildirip teklif alabilirsiniz." },
      { q: "Paletleri kapıma getiriyor musunuz?", a: "Evet, Türkiye genelinde araçla sevkiyat yapılır (Kocaeli ve İstanbul’da en hızlı). İsterseniz Gebze deposundan kendiniz de alabilirsiniz." },
    ],
  },
  {
    slug: "palet-tamiri",
    name: "Palet Tamiri",
    title: "Palet Tamiri ve Onarımı | Gebze | MEPAL",
    description: "Kırık tahta, ayak ve takozları değiştirilen paletler yeniden kullanıma kazandırılır. Toplu palet tamiri ve yerinden onarım için teklif alın.",
    h1: "Palet Tamiri — Kırık Paleti Yeniden Kullanıma Kazandırın",
    answer:
      "Palet tamirinde kırık veya eksik tahtalar, takozlar ve bağlantı parçaları değiştirilerek palet yeniden yük taşıyacak hale getirilir. Sağlam iskeleti olan paletlerde tamir, yeni palet almaktan belirgin biçimde ekonomiktir.",
    keyword: "palet tamiri",
    art: "service",
    blurb: "Kırık tahta ve takozlar değiştirilir; paletleriniz yeniden kullanıma hazırlanır.",
    related: ["hurda-palet-alimi", "palet-alim-satim", "ikinci-el-palet", "80x120-euro-palet"],
    guides: ["palet-omru-nasil-uzatilir", "palet-kalite-siniflari", "ikinci-el-palet-alirken-dikkat-edilecekler", "palet-maliyetini-dusurmenin-yollari"],
    sections: [
      {
        h: "Hangi hasarlar tamir edilebilir?",
        list: [
          "Kırık, çatlak veya eksik üst ve alt tahtalar",
          "Hasar görmüş takozlar ve bağlantı kirişleri",
          "Çivi çıkması nedeniyle gevşeyen bağlantılar",
          "Çatal girişini daraltan ezilmiş köşeler",
        ],
        p: ["Tamir her palet için uygun değildir. Gövdesi çürümüş, kiriş ve takozları geniş ölçüde bozulmuş paletlerde onarım maliyeti yeni paleti aşabilir; bu paletler hurda olarak değerlendirilir."],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Hasarlı palet alımı", "/hizmetler/hasarli-palet-alimi/"], ["Kırık palet alımı", "/hizmetler/kirik-palet-alimi/"]],
      },
      {
        h: "Tamir süreci nasıl işler?",
        steps: [
          "Paletler tek tek incelenir ve onarılabilir, onarılamaz diye ayrılır.",
          "Hasarlı parçalar sökülür; uygun ölçü ve nitelikte ahşap ile değiştirilir.",
          "Bağlantılar çivilenir ve palet yük taşıma açısından gözle kontrol edilir.",
          "Onarılan paletler ölçüsüne ve durumuna göre sınıflandırılıp istiflenir.",
        ],
      },
      {
        h: "Tamir mi, yeni palet mi?",
        table: {
          caption: "Karar için genel çerçeve",
          head: ["Durum", "Öneri"],
          rows: [
            ["Gövde sağlam, birkaç tahta kırık", "Tamir"],
            ["Takozlar ve kirişler sağlam, alt tahtalar eksik", "Tamir"],
            ["Çürüme veya kirişte yaygın çatlak", "Hurda, yenisini alın"],
            ["Gıda veya ihracat gibi hassas kullanım", "Sıfır veya uygun sınıf ikinci el"],
            ["Yurt içi sevkiyat, depolama", "Tamir edilmiş palet yeterli olabilir"],
          ],
        },
        p: ["ISPM-15 damgalı bir paletin tamiri, damganın ve ısıl işlem koşullarının geçerliliğini etkileyebilir. İhracat paletleri için tamir yerine ISPM-15 uyumlu, HT damgalı yeni palet temin edilmesini öneririz."],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"], ["İhracat paleti", "/urunler/ihracat-paleti/"]],
      },
      {
        h: "Kimler için uygun?",
        list: [
          "Her ay çok sayıda palet kıran üretim ve lojistik işletmeleri",
          "Palet havuzunu kendi tesisinde yeniden kazanmak isteyenler",
          "Hurdaya ayırmadan önce paletlerini değerlendirmek isteyenler",
        ],
        p: ["Tamir edilen paletleri geri alabilir veya onarım sonrası bizden ikinci el palet olarak satın alabilirsiniz. Yerinden onarım ve toplu işler için adet ve konumu bildirmeniz yeterlidir."],
        links: [["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Palet tamiri yeni palet almaktan ucuz mu?", a: "Gövdesi sağlam paletlerde evet, çünkü yalnızca hasarlı parçalar değişir. Çürüme veya geniş hasar varsa yeni veya uygun sınıf ikinci el palet daha mantıklıdır." },
      { q: "Tamir edilmiş palet ihracatta kullanılır mı?", a: "İhracat için ISPM-15 uyumlu, HT damgalı palet gerekir. Tamir edilmiş paletlerin damga ve ısıl işlem uygunluğu bozulabileceği için ihracatta yeni HT damgalı palet öneriyoruz." },
      { q: "Paletleri yerinden alıp tamir ediyor musunuz?", a: "Adet ve konuma göre yerinden alım yapılır, paletler depoda onarılır ve isterseniz size geri gönderilir." },
      { q: "Tamir süresi ne kadar?", a: "Süre adede ve hasar durumuna göre değişir. Net plan, paletlerin adedi ve durumu bildirildikten sonra teklifte yer alır." },
      { q: "Onarılan palet kaç kg taşır?", a: "Taşıma kapasitesi paletin tipine, yapısına ve onarım kalitesine bağlıdır. Ağır yükler için palet kapasitesi rehberine bakabilir veya bize danışabilirsiniz." },
    ],
  },
  {
    slug: "toptan-palet",
    name: "Toptan Palet",
    title: "Toptan Palet Tedariki | Kurumsal Palet | MEPAL",
    description: "Fabrika ve depolar için toptan palet tedariki: adet kademeli fiyat, planlı sevkiyat, Gebze deposundan Türkiye geneli teslimat.",
    h1: "Toptan Palet Tedariki — Kurumsal ve Düzenli Sevkiyat",
    answer:
      "Fabrikalar, depolar ve lojistik firmaları için toptan palet tedariki yapıyoruz. Adet arttıkça birim fiyat düşer; düzenli ihtiyaçlar için sevkiyat takvimi birlikte planlanır. Gebze deposundan Türkiye genelinde araçla teslim edilir.",
    keyword: "toptan palet",
    art: "truck",
    blurb: "Adet kademeli fiyat, planlı sevkiyat ve düzenli tedarik için kurumsal çözüm.",
    related: ["palet-alim-satim", "hurda-palet-alimi", "80x120-euro-palet", "ikinci-el-palet", "plastik-palet"],
    guides: ["paletci-nasil-secilir", "palet-maliyetini-dusurmenin-yollari", "1-tir-kac-palet-alir", "palet-cesitleri-ve-secimi", "palet-havuzu-ve-palet-kiralama"],
    sections: [
      {
        h: "Toptan palet kimler için uygun?",
        p: ["Aylık düzenli palet kullanan üretim tesisleri, depolama ve dağıtım merkezleri, ihracatçılar ve e-ticaret depoları toptan alımdan en çok yarar sağlayanlardır. Birkaç yüz paletlik bir alım da, düzenli aylık tedarik de toptan kapsamında değerlendirilir."],
        list: [
          "Sürekli palet tüketen fabrika ve imalatçılar",
          "Lojistik ve dağıtım firmaları",
          "İhracat yapan işletmeler",
          "Palet havuzunu yenilemek isteyen depolar",
        ],
      },
      {
        h: "Adet kademeleri",
        p: ["Birim fiyat sipariş adedine göre belirlenir ve adet arttıkça düşer. Güncel fiyat için WhatsApp'tan yazın."],
        table: {
          head: ["Kademe", "Kimler için", "Not"],
          rows: [
            ["1–50 adet", "Küçük ve deneme siparişleri", "Stoktan hızlı çıkış"],
            ["51–200 adet", "Aylık düzenli kullanım", "Birim fiyat belirgin düşer"],
            ["201+ adet", "Büyük hacim, sözleşmeli tedarik", "Plan ve teklif ile"],
          ],
        },
        links: [["Palet fiyatları", "/palet-fiyatlari/"]],
      },
      {
        h: "Sevkiyat planı",
        steps: [
          "İhtiyacınızı (tip, ölçü, adet, sıklık) bildirin.",
          "Stok ve üretim durumuna göre teklif ve sevkiyat takvimi iletilir.",
          "Tek seferlik veya parça parça sevkiyat seçilir. Büyük işlerde tır dolusu yükleme planlanır.",
          "Araçla teslim yapılır; depodan teslim almak da mümkündür.",
        ],
        p: ["Teslimat, stok ve araç programına göre yapılır; büyük hacimlerde süre üretim planına bağlıdır ve net süre teklifte bildirilir."],
        links: [["1 tırda kaç palet var?", "/rehber/1-tir-kac-palet-alir/"]],
      },
      {
        h: "Kurumsal çalışma: cari ve fatura",
        p: [
          "Kurumsal siparişlerde ödeme ve cari koşulları sipariş büyüklüğüne ve çalışma biçimine göre görüşülerek belirlenir. Faturalar yasal düzenlemelere uygun olarak kesilir ve fiyatlar KDV hariç gösterilir.",
          "Cari hesap açılışı, vade ve belge ihtiyaçları için firma yetkilimizle doğrudan görüşebilirsiniz. Koşullar siparişe göre değişebileceğinden teklifte ayrıca yazılır.",
        ],
        links: [["İletişim", "/iletisim/"], ["Belgeler", "/belgeler/"]],
      },
      {
        h: "Düzenli tedarikte avantajlar",
        list: [
          "Birim maliyet kademeli düşer",
          "Aynı tipten tutarlı ürün, aynı sınıf",
          "Planlı sevkiyat sayesinde depoda yer ve nakit tasarrufu",
          "Hurda ve fazla paletlerin aynı firmaya devri mümkün",
        ],
        links: [["Teklif al", "/teklif-al/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"]],
      },
    ],
    faq: [
      { q: "Toptan fiyat hangi adetten başlıyor?", a: "Fiyat sipariş adedine göre belirlenir; küçük, orta ve büyük partiler için ayrı hesap yapılır. Daha büyük veya düzenli ihtiyaçlarda özel teklif hazırlanır." },
      { q: "Aylık düzenli tedarik yapıyor musunuz?", a: "Evet. İhtiyacınızı ve sıklığı bildirdiğinizde stok ve araç planına göre düzenli sevkiyat takvimi oluşturulur." },
      { q: "Kurumsal fatura kesiyor musunuz?", a: "Evet, sipariş için yasal düzenlemelere uygun fatura düzenlenir. Cari ve vade gibi koşullar görüşülerek belirlenir." },
      { q: "Hangi paletlerde toptan alım yapılabiliyor?", a: "Euro ölçülü, 100x120 ve CP paletler, ikinci el paletler, ISPM-15 uyumlu ihracat paleti ve plastik paletlerde toptan teklif alabilirsiniz." },
      { q: "Teslimat nereye yapılıyor?", a: "Gebze deposundan Türkiye genelindeki tesislere araçla teslim edilir; Kocaeli ve İstanbul’da en hızlıdır. Süre ve nakliye için teklif isteyin." },
    ],
  },
  {
    slug: "yerinde-palet-toplama",
    name: "Yerinde Palet Toplama",
    title: "Yerinde Palet Toplama ve Sahadan Yükleme | MEPAL",
    description: "Tesisinizdeki paletleri araçla yerinde toplama: randevu, yükleme düzeni, saha hazırlığı ve periyodik toplama planı. Teklif için WhatsApp'tan yazın.",
    h1: "Yerinde Palet Toplama — Tesisinizden Planlı Yükleme",
    answer:
      "Yerinde palet toplama, depo veya fabrikanızda biriken paletlerin araçla sahadan yüklenip alınmasıdır. Randevu, araç tipi, istif düzeni ve yükleme ekipmanı önceden netleştirilir; böylece araç bekletmeden tek seferde toplama yapılır. Gebze çevresinde en hızlıdır, Türkiye genelinde planlı sefer mümkündür.",
    keyword: "yerinde palet toplama",
    art: "truck",
    blurb: "Tesisinizdeki paletlerin randevulu, planlı biçimde araçla toplanması.",
    related: ["hurda-palet-alimi", "palet-nakliye-lojistik", "palet-alim-satim", "palet-tamiri", "ahsap-atik-geri-donusumu"],
    guides: ["palet-nasil-istiflenir", "palet-havuzu-ve-palet-kiralama", "palet-omru-nasil-uzatilir"],
    sections: [
      {
        h: "Yerinde toplama ne zaman gerekir?",
        p: [
          "Depoda geri dönmeyen palet istifleri büyüdüğünde sevkiyat alanı daralır, forklift manevrası zorlaşır ve düzensiz yığınlar iş güvenliği riski yaratır. Yerinde toplama, bu birikimi kendi aracınızı ve personelinizi meşgul etmeden eritmenin yoludur.",
          "Tek seferlik temizlik, taşınma, depo kapatma veya mevsimsel yoğunluk sonrası fazla kalan paletler için kullanılır; düzenli çıkışı olan tesislerde ise periyodik toplama planına bağlanır.",
        ],
      },
      {
        h: "Toplama operasyonu adım adım",
        steps: [
          "Palet cinsi, tahmini adet, adres ve istif alanı bilgisini bildirin; birkaç fotoğraf operasyonu planlamayı kolaylaştırır.",
          "Adet, yükleme noktası ve araç erişimi netleştirilir; uygun araç tipi seçilir.",
          "Randevu günü ve saat aralığı birlikte belirlenir; sahada sorumlu kişi ve giriş prosedürü bildirilir.",
          "Araç adresinize gelir, paletler sayılarak yüklenir ve sevk edilir.",
          "Yükleme sonunda adet teyit edilir; kayıt ve irsaliye düzeni sipariş koşullarına göre yapılır.",
        ],
        links: [["Teklif al", "/teklif-al/"]],
      },
      {
        h: "Saha hazırlığı: operasyonu hızlandıran küçük adımlar",
        list: [
          "Paletleri aynı yönde ve düzgün istiflenmiş hâlde toplayın; devrilme riski olan yığınları önceden düzeltin.",
          "Sağlam ve kırık paletleri ayrı yığınlara koyun; yükleme ve değerleme kolaylaşır.",
          "Aracın yanaşacağı rampa veya alan için giriş yüksekliğini ve zemini bildirin.",
          "Forklift veya transpalet mevcutsa belirtin; yükleme ekipmanı sürede belirleyici olur.",
          "Çember, streç ve ürün kalıntılarını temizleyin.",
        ],
        links: [["Palet nasıl istiflenir", "/rehber/palet-nasil-istiflenir/"]],
      },
      {
        h: "Araç ve yükleme düzeni",
        p: [
          "Toplama aracı, palet adedine ve alanın erişimine göre seçilir. Dar sokakta veya düşük tavanlı girişte küçük araç, büyük istiflerde tır veya açık kasa araç uygundur.",
          "Yükleme elle veya çatallı ekipmanla yapılır. Palet sayısı arttıkça sefer tek araçta tamamlanamayabilir; bu durumda sefer planı önceden birlikte çıkarılır.",
        ],
        table: {
          caption: "Toplama operasyonunda planı etkileyen unsurlar",
          head: ["Unsur", "Neden önemli?"],
          rows: [
            ["Toplam adet", "Araç sayısı ve sefer planını belirler"],
            ["Erişim ve rampa", "Araç tipi ve yükleme süresini etkiler"],
            ["Yükleme ekipmanı", "Forklift varsa yükleme hızlanır"],
            ["Palet ayrıştırması", "Sağlam/kırık ayrımı sonrası işlemi kolaylaştırır"],
            ["Randevu saati", "Giriş izni ve vardiya düzenine uyum sağlar"],
          ],
        },
      },
      {
        h: "Hurda alımı ile farkı",
        p: [
          "Hurda palet alımı, paletlerin değerlendirilmesi ve alım teklifi üzerine odaklanır. Yerinde toplama ise toplama operasyonunun kendisidir: randevu, araç, yükleme ve saha düzeni. İki hizmet birlikte de talep edilebilir; paletlerin durumu belirleyicidir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Palet nakliye ve lojistik", "/hizmetler/palet-nakliye-lojistik/"]],
      },
      {
        h: "Hizmet alanı ve planlama",
        p: [
          "Depomuz Gebze'dedir; Gebze, Dilovası, Çayırova, Tuzla ve Anadolu yakasında toplama en hızlı planlanır. Yeterli miktar olduğunda Türkiye genelinde sefer organize edilebilir. Süre araç programına ve adede bağlıdır; net zaman teklifte bildirilir.",
        ],
        links: [["Türkiye geneli palet sevkiyatı", "/turkiye-geneli-palet-sevkiyati/"], ["Gebze palet", "/bolge/gebze-palet/"]],
      },
    ],
    faq: [
      { q: "Yerinde palet toplama için minimum adet var mı?", a: "Toplama operasyonunun verimli olması için belirli bir miktar gerekir. Net limit konuma göre değişebilir; adet ve adresi bildirirseniz size uygun olup olmadığını söyleriz." },
      { q: "Paletleri sizin personeliniz mi yüklüyor?", a: "Yükleme düzeni randevuda netleştirilir. Çatallı ekipmanınız varsa yükleme hızlanır; bunu önceden bildirmeniz planı kolaylaştırır." },
      { q: "Palet cinsi önemli mi?", a: "Evet. Euro, 100x120, CP, özel ölçülü veya karışık paletler için araç ve plan farklı olabilir. Cins ve durum, değerleme ve sefer planında dikkate alınır." },
      { q: "Düzenli periyodik toplama yapılıyor mu?", a: "Evet. Düzenli palet çıkışınız varsa haftalık ya da aylık gibi periyotlarla toplama planı oluşturulabilir." },
      { q: "Toplama ücretli mi?", a: "Koşullar paletin durumuna, adedine ve konumuna göre belirlenir; teklifte açıkça yazılır. Detay için WhatsApp'tan yazın." },
    ],
  },
  {
    slug: "palet-nakliye-lojistik",
    name: "Palet Nakliye ve Lojistik",
    title: "Palet Nakliye ve Lojistik | Türkiye Geneli | MEPAL",
    description: "Gebze deposundan Türkiye geneline palet sevkiyatı: araç tipleri, yükleme düzeni ve nakliye maliyetini etkileyen faktörler. Teklif için arayın.",
    h1: "Palet Nakliye ve Lojistik — Türkiye Geneli Sevkiyat",
    answer:
      "Gebze deposundan Türkiye genelindeki tesislere palet sevkiyatı yapılır. Araç tipi adede ve palet ölçüsüne göre seçilir; yükleme düzeni ve nakliye maliyeti mesafe, adet, istif şekli ve erişim koşullarına bağlıdır. Kocaeli ve İstanbul'da planlama en hızlıdır, net süre ve nakliye bedeli teklifte bildirilir.",
    keyword: "palet nakliye",
    art: "truck",
    blurb: "Gebze'den Türkiye geneline araç tipine göre planlı palet sevkiyatı.",
    related: ["toptan-palet", "yerinde-palet-toplama", "palet-alim-satim", "hurda-palet-alimi"],
    guides: ["1-tir-kac-palet-alir", "konteynere-ve-tira-kac-palet-sigar", "palet-nasil-istiflenir", "palet-maliyetini-dusurmenin-yollari"],
    sections: [
      {
        h: "Palet nakliyesi nasıl yürür?",
        p: [
          "Palet sevkiyatında üç şey belirleyicidir: ne kadar palet gideceği, nereye gideceği ve boşaltma noktasının koşulları. Bu bilgiler netleşince uygun araç ve yükleme planı çıkarılır.",
          "Sipariş edilen paletler Gebze deposunda yüklenir ve adresinize teslim edilir. Teslimde adet kontrolü birlikte yapılır; eksik veya hasarlı palet varsa aynı anda tutanağa geçirilir.",
        ],
      },
      {
        h: "Hangi araç tipleri kullanılır?",
        p: ["Araç seçimi palet adedine, palet ölçüsüne ve yükleme-boşaltma koşullarına göre yapılır."],
        table: {
          caption: "Palet sevkiyatında araç tipleri ve kullanım",
          head: ["Araç tipi", "Ne zaman uygun?"],
          rows: [
            ["Kamyonet / küçük kamyon", "Az adetli, dar erişimli teslimatlar"],
            ["Kamyon (açık veya kapalı kasa)", "Orta adetli bölgesel sevkiyat"],
            ["Tır (13,6 m)", "Büyük adetli, şehirler arası toplu sevkiyat"],
            ["Konteyner", "İhracat ve özel bağlantılı yüklemeler"],
          ],
        },
        links: [["Bir tıra kaç palet sığar", "/rehber/1-tir-kac-palet-alir/"], ["Konteynere ve tıra kaç palet sığar", "/rehber/konteynere-ve-tira-kac-palet-sigar/"]],
      },
      {
        h: "Yükleme ve istif düzeni",
        list: [
          "Paletler aynı ölçüde ve düzgün istiflenmeli; karışık ölçü araç kapasitesini düşürür.",
          "İstif yüksekliği araç yüksekliğini ve yol mevzuatını aşmamalı.",
          "Boşaltma noktasında çatallı ekipman olup olmadığı önceden bildirilmeli.",
          "Yağmur veya nem riski varsa örtü talebi sipariş sırasında belirtilmeli.",
          "Karışık yüklerde (ahşap, plastik, sandık) yükleme sırası dikkatle planlanmalı.",
        ],
        links: [["Palet nasıl istiflenir", "/rehber/palet-nasil-istiflenir/"]],
      },
      {
        h: "Nakliye maliyetini etkileyen faktörler",
        p: ["Nakliye bedeli sabit bir rakam değildir; teklif şu unsurlara göre hazırlanır. Güncel bedel için teklif alın."],
        list: [
          "Mesafe: depodan teslim noktasına yol uzunluğu",
          "Palet adedi ve araç doluluğu; dolu araç birim maliyeti düşürür",
          "Palet ölçüsü ve istif yüksekliği",
          "Araç tipi ve kullanılabilirliği",
          "Boşaltma noktasının erişimi, rampa ve ekipman durumu",
          "Teslim zamanı: acil ve randevulu teslimatlar plan gerektirir",
          "Dönüş yükü veya çoklu teslimat noktası olup olmadığı",
        ],
        links: [["Palet maliyetini düşürmenin yolları", "/rehber/palet-maliyetini-dusurmenin-yollari/"], ["Teklif al", "/teklif-al/"]],
      },
      {
        h: "Türkiye geneli sevkiyat",
        p: [
          "Depomuz Gebze'dedir. Kocaeli ve İstanbul'a planlama en hızlıdır; diğer illere sevkiyat adet, mesafe ve araç programına göre ayrı planlanır. Süre vaadi vermiyoruz; stok ve araç durumuna göre net zaman teklifte yazılır.",
          "Teklifteki rakam palet bedelidir. Nakliyenin dahil olup olmadığı teklifte açıkça belirtilir.",
        ],
        links: [["Türkiye geneli palet sevkiyatı", "/turkiye-geneli-palet-sevkiyati/"], ["Toptan palet", "/hizmetler/toptan-palet/"]],
      },
      {
        h: "Sevkiyat için bilgi listesi",
        steps: [
          "Palet cinsi, ölçüsü ve adedini bildirin.",
          "Teslim adresini, boşaltma noktasının erişimini ve ekipman durumunu yazın.",
          "İstenen teslim aralığını belirtin; mümkünse esnek bir tarih verin.",
          "Teklif ve sevkiyat planı iletilir; onay sonrası araç yüklemeye programlanır.",
        ],
        links: [["Palet fiyatları", "/palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Türkiye'nin her iline sevkiyat yapıyor musunuz?", a: "Depomuz Gebze'dedir; Türkiye genelindeki tesislere adet ve mesafeye göre planlı sevkiyat yapılır. Kocaeli ve İstanbul'da en hızlıdır, diğer illerde süre ve bedel teklifte bildirilir." },
      { q: "Fiyatlara nakliye dahil mi?", a: "Teklifteki rakam palet bedelidir. Nakliyenin dahil olup olmadığı teklifte ayrıca ve açıkça yazılır." },
      { q: "Teslimat ne kadar sürer?", a: "Stok ve araç programına göre çoğunlukla kısa sürede planlanır; ancak mesafe ve adet süreyi değiştirir. Net süre teklifte bildirilir." },
      { q: "Az sayıda palet için de nakliye yapılıyor mu?", a: "Evet; adet azaldıkça birim nakliye maliyeti yükselebilir. Küçük adetler için stok ve araç durumunu WhatsApp'tan sorabilirsiniz." },
      { q: "Teslimat adresinde forklift yoksa ne olur?", a: "Boşaltma yönteminin siparişte önceden netleştirilmesi gerekir. Ekipman yoksa araç tipi ve elle boşaltma planı buna göre belirlenir." },
    ],
  },
];

export const services: Service[] = [...baseServices, ...extraServices];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
