import type { Service } from "@/lib/types";

// Hizmet sayfaları (/hizmetler/<slug>/): hurda-palet-alimi, palet-alim-satim, palet-tamiri, toptan-palet
export const services: Service[] = [
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
    related: ["palet-alim-satim", "palet-tamiri", "ikinci-el-palet", "sifir-ahsap-palet"],
    guides: ["hurda-paletinizi-nasil-degerlendirirsiniz", "ikinci-el-palet-alirken-dikkat-edilecekler", "palet-kalite-siniflari", "palet-omru-nasil-uzatilir"],
    sections: [
      {
        h: "Ahşap atık geri dönüşümü neden önemli?",
        p: [
          "Üretim ve depolama yapan her işletmede zamanla kırık, çürümüş veya fazla gelen paletler birikir. Bunlar depoda yer kaplar, yangın yükünü artırır ve düzenli toplanmazsa ayrı bir atık maliyeti doğurur.",
          "Ahşap, doğru ayrıştırıldığında değerini koruyan bir malzemedir. Hurda palet alımında amacımız paleti çöpe değil, ikinci bir kullanıma yönlendirmek: sağlam olanlar onarılıp yeniden palet olur, kullanılamayacak durumdakiler ahşap atık olarak geri dönüşüm zincirine verilir.",
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
        p: ["Gebze, Dilovası, Çayırova, Tuzla ve İstanbul Anadolu yakasındaki tesislerden alım yapıyoruz. Araç programına göre çoğunlukla kısa sürede randevu verilir; net zaman teklifte bildirilir."],
        links: [["Bölge sayfaları: Gebze", "/bolge/gebze-palet/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Hurda paleti ücretsiz mi alıyorsunuz?", a: "Alım teklifi paletin durumuna, adedine ve konumuna göre belirlenir. Sağlam veya onarılabilir palet oranı yüksekse alım bedeli ödenir; kullanılamaz durumdaki partilerde koşullar teklifte açıkça yazılır." },
      { q: "Minimum kaç palet alıyorsunuz?", a: "Yerinden alımın verimli olması için belirli bir adet gerekir. Net alt limit bölgenize göre değişebilir; adedi ve konumu bildirirseniz size uygun olup olmadığını söyleriz." },
      { q: "Kırık paletler ne oluyor?", a: "Onarılabilen parçalar ayrılıp palet tamirinde kullanılır, kullanılamayan ahşap atık geri dönüşüme yönlendirilir." },
      { q: "Fotoğrafla değerleme bağlayıcı mı?", a: "Hayır. Fotoğraf yalnızca ön değerlemedir. Kesin teklif, adet ve durum netleştikten sonra verilir." },
      { q: "Yerinden alım için araç gönderiyor musunuz?", a: "Evet. Gebze, Dilovası, Çayırova, Tuzla ve İstanbul Anadolu yakasındaki işletmelerden araçla alım yapılır. Gün ve saat, araç programına göre birlikte belirlenir." },
    ],
  },
  {
    slug: "palet-alim-satim",
    name: "Palet Alım Satım",
    title: "Palet Alım Satım | İkinci El ve Sıfır Palet | MEPAL",
    description: "İkinci el ve sıfır palet alım satımı: Euro ölçülü, 100x120 ve özel ölçülü paletleri Gebze deposundan alın, fazla paletinizi bize satın.",
    h1: "Palet Alım Satım — Alın, Satın, Değiştirin",
    answer:
      "Hem palet satın alabilir hem de elinizdeki fazla paletleri bize satabilirsiniz. Sıfır ve ikinci el ahşap palet, plastik palet ve ikinci el EPAL ölçülü palet Gebze deposundan temin edilir. Güncel fiyatlar için fiyat tablosuna bakın veya teklif alın.",
    keyword: "palet alım satım",
    art: "service",
    blurb: "Sıfır ve ikinci el palet temini; fazla paletlerinizin alımı tek adreste.",
    related: ["hurda-palet-alimi", "toptan-palet", "ikinci-el-palet", "80x120-euro-palet", "epal-palet"],
    guides: ["ikinci-el-palet-alirken-dikkat-edilecekler", "palet-kalite-siniflari", "palet-cesitleri-ve-secimi", "palet-maliyetini-dusurmenin-yollari"],
    sections: [
      {
        h: "Tek adreste hem alım hem satım",
        p: [
          "Palet ihtiyacı işletmeden işletmeye değişir: bir tarafta sevkiyat için sürekli palet arayan üreticiler, diğer tarafta depolarında fazla palet biriktirenler vardır. Gebze deposumuz bu iki ihtiyacı birbirine bağlar.",
          "Satın alırken ürünü sınıfıyla ve ölçüsüyle net olarak bilirsiniz; satarken ise paletlerinizin durumuna göre makul bir alım teklifi alırsınız.",
        ],
      },
      {
        h: "Satın alabileceğiniz paletler",
        list: [
          "Euro ölçülü (80x120) sıfır ahşap palet",
          "Euro ölçülü ikinci el palet, 1. ve 2. sınıf",
          "İkinci el EPAL palet alım-satımı",
          "100x120 ve 114x114 (CP) endüstriyel paletler",
          "ISPM-15 uyumlu, HT damgalı ihracat paleti temini",
          "Plastik palet ve özel ölçülü ahşap palet",
        ],
        links: [["Palet fiyatları", "/palet-fiyatlari/"], ["İkinci el palet", "/urunler/ikinci-el-palet/"], ["Euro palet", "/urunler/80x120-euro-palet/"]],
      },
      {
        h: "Palet satmak istediğinizde",
        p: ["Fazla veya kullanılmayan paletlerinizi satmak için adedi, ölçüyü ve genel durumu bildirmeniz yeterlidir. Sağlam ve sınıflandırılabilir paletler için alım teklifi verilir; kırık ve çürük paletler hurda palet alımı kapsamında ayrıca değerlendirilir."],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"]],
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
        links: [["Palet seçici aracı", "/araclar/palet-secici/"]],
      },
      {
        h: "Teklif ve teslimat süreci",
        steps: [
          "Palet tipini, ölçüyü ve adedi WhatsApp'tan veya teklif formundan iletin.",
          "Stok durumuna göre fiyat ve teslim planı bildirilir.",
          "Onaydan sonra paletler hazırlanır; depodan teslim alabilir veya araçla sevk isteyebilirsiniz.",
        ],
        p: ["Teslimat stok ve araç programına göre çoğunlukla ertesi iş günü yapılır; net süre teklifte bildirilir."],
        links: [["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Hem alım hem satım yapıyor musunuz?", a: "Evet. Sıfır ve ikinci el palet satışı yapıyoruz, sağlam ve onarılabilir paletlerinizi de değerlendirme sonrası satın alıyoruz." },
      { q: "İkinci el paletler hangi sınıflarda?", a: "Euro ölçülü ikinci el paletler 1. sınıf (sağlam, onarılmış) ve 2. sınıf (yerli kullanım) olarak ayrılır. Sınıf farkları palet kalite sınıfları rehberinde açıklanmıştır." },
      { q: "EPAL paletleri satıyor musunuz?", a: "İkinci el EPAL palet alım-satımı yapıyoruz. EPAL tescilli bir markadır; yeni palet tarafında EPAL ölçülerinde Euro palet (80x120) tedarik edilir." },
      { q: "Fiyatlar neye göre değişiyor?", a: "Palet tipi, sınıfı, ölçüsü ve sipariş adedi fiyatı belirler. Güncel fiyat tablosu sitede yayındadır; büyük adetlerde teklif alınması önerilir." },
      { q: "Paletleri kapıma getiriyor musunuz?", a: "Evet, Kocaeli ve İstanbul Anadolu yakasına araçla sevkiyat yapılır. İsterseniz Gebze deposundan kendiniz de alabilirsiniz." },
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
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"]],
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
    description: "Fabrika ve depolar için toptan palet tedariki: adet kademeli fiyat, planlı sevkiyat, Gebze deposundan Kocaeli ve İstanbul Anadolu yakasına teslimat.",
    h1: "Toptan Palet Tedariki — Kurumsal ve Düzenli Sevkiyat",
    answer:
      "Fabrikalar, depolar ve lojistik firmaları için toptan palet tedariki yapıyoruz. Adet arttıkça birim fiyat düşer; düzenli ihtiyaçlar için sevkiyat takvimi birlikte planlanır. Gebze deposundan Kocaeli ve İstanbul Anadolu yakasına araçla teslim edilir.",
    keyword: "toptan palet",
    art: "truck",
    blurb: "Adet kademeli fiyat, planlı sevkiyat ve düzenli tedarik için kurumsal çözüm.",
    related: ["palet-alim-satim", "hurda-palet-alimi", "80x120-euro-palet", "ikinci-el-palet", "plastik-palet"],
    guides: ["palet-maliyetini-dusurmenin-yollari", "1-tir-kac-palet-alir", "palet-cesitleri-ve-secimi", "palet-havuzu-ve-palet-kiralama"],
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
        p: ["Fiyat tablolarımız üç kademe üzerinden çalışır. Her kademede birim fiyat, adet arttıkça düşer. Güncel rakamlar için fiyat tablosuna bakın."],
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
        p: ["Teslimat, stok ve araç programına göre çoğunlukla ertesi iş günü yapılır; büyük hacimlerde süre üretim planına bağlıdır ve net süre teklifte bildirilir."],
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
      { q: "Toptan fiyat hangi adetten başlıyor?", a: "Fiyatlar üç kademeye göre yayımlanır: 1–50, 51–200 ve 201 adet üzeri. Daha büyük veya düzenli ihtiyaçlarda özel teklif hazırlanır." },
      { q: "Aylık düzenli tedarik yapıyor musunuz?", a: "Evet. İhtiyacınızı ve sıklığı bildirdiğinizde stok ve araç planına göre düzenli sevkiyat takvimi oluşturulur." },
      { q: "Kurumsal fatura kesiyor musunuz?", a: "Evet, sipariş için yasal düzenlemelere uygun fatura düzenlenir. Cari ve vade gibi koşullar görüşülerek belirlenir." },
      { q: "Hangi paletlerde toptan alım yapılabiliyor?", a: "Euro ölçülü, 100x120 ve CP paletler, ikinci el paletler, ISPM-15 uyumlu ihracat paleti ve plastik paletlerde toptan teklif alabilirsiniz." },
      { q: "Teslimat nereye yapılıyor?", a: "Gebze deposundan Kocaeli ve İstanbul Anadolu yakasındaki tesislere araçla teslim edilir. Diğer bölgeler için teklif isteyin." },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
