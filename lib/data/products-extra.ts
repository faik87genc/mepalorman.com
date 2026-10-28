import type { Product } from "@/lib/types";

// Anahtar kelime odaklı ek ürün sayfaları (/urunler/<slug>/). Fiyat rakamı yazılmaz;
// priceRow yalnızca lib/data/prices.ts içinde gerçek karşılığı olan satırlar için verilir.
export const extraProducts: Product[] = [
  // ───────────────────────── 1. Çakma EPAL palet
  {
    slug: "cakma-epal-palet",
    name: "Çakma EPAL Palet (EPAL Ölçülü, Damgasız)",
    title: "Çakma EPAL Palet Nedir? Farkı ve Kullanımı | MEPAL",
    description:
      "Çakma EPAL palet: 80x120 ölçüde ama EPAL damgasız palet. Gerçek EPAL'den farkı, ne zaman uygun olduğu ve ihracatta neden kullanılamadığı.",
    h1: "Çakma EPAL Palet: EPAL Ölçülü, Damgasız Palet Ne Zaman Uygundur?",
    answer:
      "Piyasada “çakma EPAL” denen palet, 800 × 1200 mm EPAL ölçüsünde üretilmiş ama EPAL lisansı ve damgası taşımayan palettir. Sertifikalı EPAL değildir; EPAL takasında ve EPAL şartı koşan ihracatta kullanılamaz. İç piyasada ve tek kullanımlık sevkiyatta maliyet avantajı sağlayabilir.",
    keyword: "çakma epal palet",
    art: "euro",
    blurb: "EPAL ölçülü ama damgasız palet: nedir, nerede kullanılır, nerede kullanılmaz.",
    specs: [
      ["Ölçü", "800 × 1200 mm (EPAL ölçüsünde)"],
      ["EPAL damgası / lisansı", "Yok"],
      ["Kullanım", "İç piyasa, tek kullanımlık veya sınırlı tur sevkiyat"],
      ["EPAL takası", "Kabul edilmez"],
      ["Kalite", "Üreticiye göre değişir, standart denetim yok"],
      ["Çatal girişi", "Genellikle 4 yönlü"],
      ["Satış şekli", "Teklif üzerinden"],
    ],
    uses: ["İç piyasa sevkiyatı", "Tek kullanımlık palet ihtiyacı", "Fabrika içi dolaşım", "EPAL şartı olmayan depolama", "Maliyet hassas toplu sevkiyat"],
    related: ["epal-palet", "80x120-euro-palet", "ikinci-el-euro-palet", "orta-palet"],
    guides: ["cakma-epal-nedir", "epal-palet-ile-standart-palet-farki", "euro-palet-olculeri"],
    sections: [
      {
        h: "Çakma EPAL palet ne demek?",
        p: [
          "“Çakma EPAL” resmî bir ürün sınıfı değil, piyasada kullanılan bir halk tabiridir. Genellikle 800 × 1200 mm ölçüsünde, Euro palete benzer görünen ama EPAL logosu, lisans kodu ve denetimi bulunmayan paletler için söylenir.",
          "Bu paletin ölçüsü doğrudur; eksik olan, kalitenin bağımsız biçimde güvence altına alınmasıdır. Tahta kalınlığı, çivi sayısı, blok yapısı ve ahşap kurutma düzeyi üreticiden üreticiye değişebilir.",
        ],
      },
      {
        h: "Dürüst çerçeve: sertifikalı EPAL değildir",
        p: [
          "EPAL tescilli bir markadır ve damga yalnızca lisanslı üretici ya da onarımcılar tarafından vurulabilir. MEPAL EPAL lisanslı üretici değildir; damgasız bir paleti EPAL olarak sunmayız.",
          "Çakma EPAL almaya karar veriyorsanız bunu bilerek ve ihtiyacınıza uygun olduğu için almalısınız. Alıcınız EPAL paleti şart koşuyorsa bu ürün yanlış tercihtir.",
        ],
        links: [
          ["EPAL palet alım satımı", "/urunler/epal-palet/"],
          ["Çakma EPAL nedir? (rehber)", "/rehber/cakma-epal-nedir/"],
        ],
      },
      {
        h: "EPAL ile çakma EPAL arasındaki farklar",
        table: {
          caption: "Gerçek EPAL ve çakma EPAL karşılaştırması",
          head: ["Özellik", "Gerçek EPAL", "Çakma EPAL"],
          rows: [
            ["Taban ölçüsü", "800 × 1200 mm", "Genellikle aynı ölçü"],
            ["Damga ve lisans kodu", "Var, denetime bağlı", "Yok"],
            ["Yapı spesifikasyonu", "Standartta tanımlı", "Üreticiye göre değişir"],
            ["EPAL takası", "Yapılabilir", "Yapılamaz"],
            ["İhracatta EPAL şartı", "Karşılar", "Karşılamaz"],
            ["Maliyet", "Genellikle daha yüksek", "Genellikle daha düşük"],
            ["Tekrar kullanım ömrü", "Onarım sistemi var", "Kondisyona bağlı, belirsiz"],
          ],
        },
        p: ["Her iki palette de ihracat yapılacaksa ayrıca ISPM-15 ısıl işlem (HT) damgası gerekir; bu damga EPAL damgasının yerine geçmez."],
      },
      {
        h: "Ne zaman uygundur?",
        list: [
          "Yurt içinde, alıcının palet takası istemediği sevkiyatlarda",
          "Paletin alıcıda kaldığı, geri dönüşü beklenmeyen tek yönlü gönderilerde",
          "Hafif ve orta ağırlıklı, rafa girmeyen yüklerde",
          "Fabrika içi taşıma ve geçici stoklamada",
          "Bütçenin sıkı olduğu, palet maliyetinin birim ürüne yük olduğu işlerde",
        ],
      },
      {
        h: "Ne zaman uygun değildir?",
        list: [
          "Müşteri sözleşmesinde “EPAL damgalı palet” şartı varsa",
          "Palet havuzu ya da EPAL takas sistemine girecekse",
          "Avrupa'ya ihracatta, alıcı EPAL palet istiyorsa",
          "Yüksek raf sistemlerinde ve ağır yüklerde, ölçü toleransı kritikse",
          "Gıda, ilaç gibi hijyen denetimi olan zincirlerde",
        ],
        links: [
          ["İhracat paleti (ISPM-15)", "/urunler/ihracat-paleti/"],
          ["80x120 Euro palet", "/urunler/80x120-euro-palet/"],
        ],
      },
      {
        h: "Alternatifler ve doğru seçim",
        p: [
          "Damga şartı yoksa ama kalite istiyorsanız onarılmış ikinci el Euro ölçülü palet de değerlendirilebilir. Sağlamlık için orta sınıf ya da kalın tahtalı seçenekleri karşılaştırın.",
          "Tek tek paletin durumunu görmek için fotoğrafla değerlendirme aracını kullanabilir, stoktaki partiyi WhatsApp'tan sorabilirsiniz. Güncel fiyat için teklif alın; metinde fiyat verilmez.",
        ],
        links: [
          ["İkinci el Euro palet", "/urunler/ikinci-el-euro-palet/"],
          ["Palet seçici", "/araclar/palet-secici/"],
          ["Teklif al", "/teklif-al/"],
        ],
      },
    ],
    faq: [
      { q: "Çakma EPAL palet ile EPAL palet aynı mı?", a: "Hayır. Ölçüleri aynı olabilir ama çakma EPAL'de EPAL logosu, lisans kodu ve bağımsız denetim yoktur. Yalnızca lisanslı üreticilerin damgalı paleti EPAL sayılır." },
      { q: "Çakma EPAL palet ihracatta kullanılabilir mi?", a: "EPAL damgası şart koşuluyorsa hayır. Bunun dışında, ihracatta ahşap ambalaj için ISPM-15 ısıl işlem (HT) damgası ayrıca gerekir; alıcınızın şartnamesini mutlaka kontrol edin." },
      { q: "Çakma EPAL ile EPAL takası yapılabilir mi?", a: "Yapılamaz. EPAL takas sistemleri yalnızca damgalı ve kalite şartını sağlayan paletleri kabul eder." },
      { q: "MEPAL damgasız paleti EPAL diye satar mı?", a: "Satmaz. Damgasız palet açıkça damgasız olarak tanıtılır. MEPAL EPAL ölçülerinde palet temin eder ve ikinci el EPAL alım satımı yapar; EPAL lisanslı üretici değildir." },
      { q: "Çakma EPAL palet güvenli midir?", a: "Kalite üreticiye göre değişir. Kırık tahta, gevşek çivi, eğik blok gibi kusurları teslimatta kontrol edin; ağır ve raflı yüklerde damgalı ya da kalın tahtalı seçenekleri tercih edin." },
    ],
  },

  // ───────────────────────── 2. Orta palet
  {
    slug: "orta-palet",
    name: "Orta Palet (Orta Sınıf Ahşap Palet)",
    title: "Orta Palet: Sınıfı, Kapasitesi, Kullanım Yeri | MEPAL",
    description:
      "Orta palet nedir? İkinci el ve sıfır arası orta sınıf ahşap palet; tahta kalınlığına göre sınıflama, kapasite aralıkları ve kullanım yerleri.",
    h1: "Orta Palet: İkinci El ile Sıfır Arasındaki Orta Sınıf Ahşap Palet",
    answer:
      "Orta palet, piyasada genellikle ikinci el ile sıfır palet arasında konumlanan, standart dışı ya da karma ahşaptan yapılmış orta sınıf paleti anlatır. Tanım sektörde net bir standarda bağlı değildir; sınıf çoğunlukla tahta kalınlığı ve genel kondisyona göre belirlenir. Fabrika içi ve iç piyasa sevkiyatında fiyat/performans dengesi sunar.",
    keyword: "orta palet",
    art: "wood",
    blurb: "İkinci el ve sıfır arası, tahta kalınlığına göre sınıflanan orta sınıf palet.",
    specs: [
      ["Sınıf", "Orta (piyasa tabiri, resmî standart yok)"],
      ["Tipik ölçüler", "80x120, 100x120 ve benzeri"],
      ["Tahta", "Genellikle sıfır paletten ince, hafif paletten kalın"],
      ["Yapı", "Karma veya standart dışı ahşap olabilir"],
      ["Taşıma kapasitesi", "Yapıya göre değişir; yükünüzü bildirerek teyit edin"],
      ["Çatal girişi", "Genellikle 2 veya 4 yönlü"],
      ["Satış şekli", "Teklif üzerinden"],
    ],
    uses: ["Fabrika içi dolaşım", "İç piyasa sevkiyatı", "Orta ağırlıklı ürün depolama", "Tek veya birkaç sefer kullanım", "Depo geçici stok alanları"],
    related: ["kalin-orta-palet", "ikinci-el-palet", "sifir-ahsap-palet", "ince-palet"],
    guides: ["orta-palet-ve-kalin-orta-palet-farki", "palet-kalite-siniflari", "sifir-palet-mi-ikinci-el-palet-mi"],
    sections: [
      {
        h: "Orta palet ne demektir?",
        p: [
          "“Orta palet” standartlarda tanımlı bir ürün değil, piyasada alıcı ve satıcıların kullandığı bir sınıf ifadesidir. Genellikle iki uç arasında kalan paleti anlatır: bir yanda yeni, kalın tahtalı ve tam spesifikasyonlu sıfır palet, öbür yanda ince tahtalı ya da çok kullanılmış hafif palet.",
          "Satıcıdan satıcıya anlamı biraz değişebildiği için sipariş verirken “orta” kelimesiyle yetinmeyin; tahta kalınlığı, ölçü ve istediğiniz kondisyonu birlikte netleştirin.",
        ],
      },
      {
        h: "Sınıflama: tahta kalınlığına göre",
        p: ["Aşağıdaki tablo piyasadaki genel yaklaşımı özetler. Rakamlar yaklaşıktır; her partide ölçü alınarak teyit edilmelidir."],
        table: {
          caption: "Palet sınıfları ve genel nitelikleri",
          head: ["Sınıf", "Tahta yapısı", "Kondisyon", "Genel kullanım"],
          rows: [
            ["Hafif / ince", "İnce tahtalı", "Kullanılmış veya düşük maliyetli", "Hafif ve tek seferlik yük"],
            ["Orta", "Orta kalınlıkta, karma olabilir", "İkinci el ile sıfır arası, onarılmış olabilir", "Orta ağırlık, iç piyasa, fabrika içi"],
            ["Kalın orta", "Daha kalın tahta, takozlu olabilir", "Sağlam, güçlendirilmiş", "Ağır ve tekrarlı kullanım"],
            ["Sıfır", "Spesifikasyona uygun tahta", "Yeni", "Raf, ihracat, hijyenik işler"],
          ],
        },
      },
      {
        h: "Taşıma kapasitesi aralıkları",
        p: [
          "Orta palet için tek bir kapasite değeri vermek doğru olmaz; yapı, tahta kalınlığı ve yükün dağılımı belirleyicidir. Genel olarak düz zeminde, yükün paletin tamamına yayıldığı kullanımda hafif ile orta yük sınıfı düşünülür; kesin değer için yükünüzün ağırlığını ve istif şeklini bildirin.",
          "Raf sistemlerinde kapasite çok daha düşük olabilir; çünkü palet iki kirişe oturur ve ortası boşta kalır. Raf kullanımı planlıyorsanız orta palet yerine standart ya da kalın seçeneklere bakın.",
        ],
        links: [
          ["Palet kaç kg taşır?", "/rehber/palet-kac-kg-tasir/"],
          ["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"],
        ],
      },
      {
        h: "Kullanım yerleri",
        list: [
          "Üretim hattı ile depo arasında yarı mamul taşıma",
          "İç piyasada alıcıya bırakılan, geri dönüşü beklenmeyen sevkiyat",
          "Koli, torba ve orta ağırlıklı paket depolama",
          "Geçici sahalarda ve şantiye depolarında malzeme koyma",
          "İkinci el paletin yetmediği ama sıfırın gereksiz kaldığı işler",
        ],
      },
      {
        h: "Orta palet mi, ikinci el mi, sıfır mı?",
        p: [
          "Yükünüz ağırsa, raflı sistem kullanıyorsanız ya da ihracat yapacaksanız sıfır veya ISPM-15 uyumlu palet gerekir. Fabrika içinde ve iç piyasada kısa ömürlü kullanım için orta palet çoğu zaman ikinci el ile sıfır arasındaki en mantıklı dengedir.",
          "Daha ağır yük için bir üst sınıf olan kalın orta palete bakabilirsiniz. İkisinin farkı rehberde ayrıntılı anlatılır.",
        ],
        links: [
          ["Kalın orta palet", "/urunler/kalin-orta-palet/"],
          ["Orta ve kalın orta palet farkı", "/rehber/orta-palet-ve-kalin-orta-palet-farki/"],
          ["İkinci el palet", "/urunler/ikinci-el-palet/"],
          ["Sıfır ahşap palet", "/urunler/sifir-ahsap-palet/"],
        ],
      },
      {
        h: "Sipariş ve teklif",
        steps: [
          "İhtiyacınız olan ölçü, adet ve yük cinsini yazın.",
          "Tahta kalınlığı ve kondisyon beklentinizi belirtin; mümkünse mevcut paletinizin fotoğrafını gönderin.",
          "Stok ve araç programına göre teklif ve teslim zamanı bildirilir; net süre teklifte yazılır.",
        ],
        links: [["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Orta palet ne demek?", a: "Piyasada ikinci el ile sıfır arasındaki, tahta kalınlığı ve kondisyonu orta düzeydeki ahşap palet için kullanılan bir sınıf ifadesidir. Resmî bir standart değildir; sipariş verirken tahta kalınlığı ve ölçü ayrıca belirtilmelidir." },
      { q: "Orta palet kaç kg taşır?", a: "Standart bir değeri yoktur; yapıya, tahta kalınlığına ve yükün dağılımına göre değişir. Düz zeminde hafif ve orta yük için düşünülür, raf kullanımında kapasite düşer. Yükünüzü bildirirseniz uygunluğunu söyleriz." },
      { q: "Orta palet ihracatta kullanılabilir mi?", a: "İhracatta ahşap palet için ISPM-15 uyumlu, HT damgalı olması gerekir. Orta sınıf palet damgalıysa kullanılabilir; damgasız paletle ihracat yapılmamalıdır." },
      { q: "Orta palet ile ikinci el palet aynı mı?", a: "Her zaman değil. İkinci el, paletin daha önce kullanılmış olmasını anlatır; orta ise sınıfı ve tahta yapısını. Bazı orta paletler onarılmış ikinci el olabilir." },
      { q: "Fiyatı nasıl öğrenirim?", a: "Fiyat; ölçü, tahta kalınlığı, adet ve stok durumuna göre değişir. Güncel fiyat için WhatsApp'tan ya da teklif formundan talep gönderin." },
    ],
  },

  // ───────────────────────── 3. Kalın orta palet
  {
    slug: "kalin-orta-palet",
    name: "Kalın Orta Palet (Kalın Tahtalı / Takozlu Orta Sınıf)",
    title: "Kalın Orta Palet: Ağır Yük İçin Tahta Seçimi | MEPAL",
    description:
      "Kalın orta palet: daha kalın tahtalı, takozlu, ağır yük taşıyan orta sınıf palet. Orta palet ve Euro palet ile karşılaştırma tablosu.",
    h1: "Kalın Orta Palet: Ağır Yük İçin Kalın Tahtalı, Takozlu Orta Sınıf Palet",
    answer:
      "Kalın orta palet, piyasada genellikle orta paletten daha kalın tahtalı ve çoğunlukla takozlu yapıda, ağır yükleri tekrar tekrar taşımak için tercih edilen orta sınıf paleti anlatır. Standart bir tanım yoktur; tahta kalınlığı ve takoz yapısı ile birlikte değerlendirilmelidir.",
    keyword: "kalın orta palet",
    art: "big",
    blurb: "Orta paletten daha kalın tahtalı, takozlu ve ağır yüke yönelik palet.",
    specs: [
      ["Sınıf", "Kalın orta (piyasa tabiri, resmî standart yok)"],
      ["Tahta", "Orta paletten belirgin biçimde kalın"],
      ["Yapı", "Genellikle takozlu veya blok destekli"],
      ["Tipik ölçüler", "80x120, 100x120, istenirse özel ölçü"],
      ["Taşıma kapasitesi", "Orta paletten yüksek; kesin değer yapıya göre teyit edilir"],
      ["Çatal girişi", "2 veya 4 yönlü"],
      ["Satış şekli", "Teklif üzerinden"],
    ],
    uses: ["Ağır koli ve çuval yükleri", "Makine parçası ve metal ürün sevkiyatı", "Tekrarlı iç lojistik", "Üst üste istifleme", "Fabrika ve depo ara stoku"],
    related: ["orta-palet", "takozlu-palet", "80x120-euro-palet", "100x120-palet"],
    guides: ["orta-palet-ve-kalin-orta-palet-farki", "palet-kac-kg-tasir", "palet-kalite-siniflari"],
    sections: [
      {
        h: "Kalın orta palet nedir?",
        p: [
          "Kalın orta palet, orta sınıf paletin güçlendirilmiş hâlidir. Tahtalar daha kalındır, yük taşıyan yüzeyler ve ayaklar çoğunlukla takozla desteklenir. Amaç sıfır palet fiyatına çıkmadan, ince tahtalı paletin kaldıramayacağı yükü güvenle taşıyabilmektir.",
          "Bu adlandırma da piyasa tabiridir. Bir satıcının “kalın orta” dediği palet başka bir satıcıda farklı olabilir; bu yüzden tahta kalınlığını ve takoz yapısını sipariş öncesi yazılı olarak netleştirin.",
        ],
      },
      {
        h: "Orta palet, kalın orta palet ve Euro palet karşılaştırması",
        p: ["Tablo genel yaklaşımı gösterir; değerler yaklaşıktır ve partiye göre değişir."],
        table: {
          caption: "Palet türleri karşılaştırması",
          head: ["Özellik", "Orta palet", "Kalın orta palet", "Euro palet (80x120)"],
          rows: [
            ["Tahta kalınlığı", "Orta", "Orta paletten kalın", "Spesifikasyona uygun"],
            ["Takoz / blok", "Değişken", "Genellikle takozlu", "9 blok"],
            ["Standart", "Yok", "Yok", "Ölçü ve yapı standardı var"],
            ["Yük kapasitesi", "Daha düşük aralık", "Orta paletten yüksek", "Yaklaşık 1.500 kg dinamik"],
            ["Raf kullanımı", "Önerilmez", "Dikkatle, yük teyidiyle", "Uygun (yük sınırı dahilinde)"],
            ["Maliyet", "Daha düşük", "Orta", "Genellikle daha yüksek"],
            ["Tipik kullanım", "Orta yük, iç piyasa", "Ağır yük, tekrarlı kullanım", "Standart lojistik, ihracat"],
          ],
        },
      },
      {
        h: "Takoz ve tahta kalınlığı neden önemli?",
        p: [
          "Palet yükü tahtalar üzerinde eğilmeden taşıyabilmelidir. Tahta inceldikçe üst yüzey ağırlık altında sarkar, çivi bağlantıları gevşer ve paletin ömrü kısalır. Takoz ise yükü zemine aktaran ve çatalın girdiği boşluğu oluşturan taşıyıcıdır; sağlam takoz, paletin forklift darbelerine dayanmasını sağlar.",
          "Takozlu paletlerin yapısı ve kullanımı ayrı bir sayfada anlatılmıştır.",
        ],
        links: [["Takozlu palet", "/urunler/takozlu-palet/"]],
      },
      {
        h: "Hangi işler için uygundur?",
        list: [
          "Seramik, karo, fayans gibi ağır ve kırılgan ürünlerin sevkiyatı",
          "Çuval, bidon ve metal parça gibi yoğun yükler",
          "Fabrika içinde sürekli dolaşan palet havuzları",
          "Üst üste istiflenen, ancak yükün raf dışında kaldığı depolar",
        ],
        links: [
          ["Otomotiv ve yan sanayi", "/sektorler/otomotiv-ve-yan-sanayi/"],
          ["Beyaz eşya", "/sektorler/beyaz-esya/"],
        ],
      },
      {
        h: "Ne zaman başka palete bakmalı?",
        p: [
          "İhracat, EPAL şartı veya raf yükü varsa kalın orta palet yetmeyebilir. Bu durumlarda ISPM-15 uyumlu ihracat paleti ya da standart Euro ölçülü palet gerekir.",
          "Çok ağır veya olağan dışı ölçülü yüklerde özel ölçü üretim daha doğru çözümdür.",
        ],
        links: [
          ["80x120 Euro palet", "/urunler/80x120-euro-palet/"],
          ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"],
          ["İhracat paleti", "/urunler/ihracat-paleti/"],
        ],
      },
      {
        h: "Teklif alırken ne belirtmeli?",
        steps: [
          "Ölçüyü (ör. 80x120 ya da 100x120) ve adedi yazın.",
          "Taşıyacağınız yükün yaklaşık ağırlığını ve istif yüksekliğini belirtin.",
          "Takozlu mu olsun, çatal girişi 2 mi 4 yönlü mü olsun, söyleyin.",
          "Stok ve araç programına göre teklif ve teslim zamanı bildirilir; net süre teklifte yazılır.",
        ],
        links: [["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Kalın orta palet ne demektir?", a: "Piyasada orta paletten daha kalın tahtalı ve genellikle takozlu, ağır yük için kullanılan orta sınıf palet için söylenen bir tabirdir. Resmî bir standardı yoktur, sipariş sırasında ölçü ve tahta kalınlığı netleştirilmelidir." },
      { q: "Kalın orta palet ne kadar yük taşır?", a: "Yapıya bağlıdır; orta paletten daha yüksek yük için düşünülür. Kesin değer için tahta kalınlığı, takoz yapısı ve kullanım şekli (zemin ya da raf) birlikte değerlendirilmelidir." },
      { q: "Kalın orta palet ile Euro palet arasındaki fark nedir?", a: "Euro palet ölçü ve yapı standardına sahiptir, 9 bloklu yapıdadır ve EPAL gibi sistemlerle uyumludur. Kalın orta paletin standardı yoktur, ancak çoğu zaman daha uygun maliyetle ağır yük için tercih edilir." },
      { q: "Raf sisteminde kullanılabilir mi?", a: "Önerilmez. Rafta palet iki kirişe oturur ve eğilme yükü artar. Raf kullanımı için standart Euro ölçülü ya da raf onaylı palet seçin." },
      { q: "Orta palet ile kalın orta palet nasıl ayrılır?", a: "Tahta kalınlığına, takoz yapısına ve taşıma kapasitesine bakılır. Ayrıntılı karşılaştırma rehber sayfamızda yer alır." },
    ],
  },

  // ───────────────────────── 4. Ambalaj paleti
  {
    slug: "ambalaj-paleti",
    name: "Ambalaj Paleti",
    title: "Ambalaj Paleti: Seçim, Streç, Çember, ISPM-15 | MEPAL",
    description:
      "Ambalaj paleti nedir, nasıl seçilir? Ahşap, plastik, karton seçenekleri, boyut, streç ve çember, tek/çok kullanımlık fark, ISPM-15 kuralı.",
    h1: "Ambalaj Paleti: Ürünü Sevkiyata Hazırlamak İçin Doğru Palet Seçimi",
    answer:
      "Ambalaj paleti, ürünü depolama ve sevkiyata hazır yük birimi hâline getiren paletin ambalaj amaçlı kullanımıdır. Ahşap, plastik ve karton seçenekleri vardır; boyut, yük ve tek veya çok kullanımlık ihtiyaç seçimi belirler. Ahşap palet ihracatta ISPM-15 ısıl işlem damgası taşımalıdır.",
    keyword: "ambalaj paleti",
    art: "crate",
    blurb: "Ürünü sevkiyata hazırlayan palet: malzeme, boyut, streç ve çember ile doğru ambalajlama.",
    specs: [
      ["Görev", "Yükü birleştirmek, taşınabilir ve istiflenebilir hâle getirmek"],
      ["Malzeme seçenekleri", "Ahşap, plastik, karton/kağıt"],
      ["Yaygın ölçüler", "80x120, 100x120, 114x114, özel ölçü"],
      ["Sabitleme", "Streç film, çember, köşebent, kaymaz altlık"],
      ["Kullanım tipi", "Tek kullanımlık veya çok kullanımlık"],
      ["İhracat", "Ahşapta ISPM-15 ısıl işlem (HT) damgası"],
      ["Satış şekli", "Teklif üzerinden"],
    ],
    uses: ["Gıda ve içecek sevkiyatı", "E-ticaret ve depo çıkışları", "Kimya ve plastik ürünler", "İhracat yükleri", "Beyaz eşya ve otomotiv parçaları"],
    related: ["80x120-euro-palet", "ihracat-paleti", "isil-islemli-palet", "plastik-palet", "ozel-olcu-palet"],
    guides: ["ambalaj-paleti-nedir", "ihracatta-palet-ve-ambalaj-kurallari", "palet-nasil-istiflenir"],
    sections: [
      {
        h: "Ambalaj paleti ne iş görür?",
        p: [
          "Koli, çuval ya da kasa tek tek taşınırsa zaman kaybedilir ve hasar riski artar. Ürünler palete dizilip sabitlendiğinde tek bir yük birimi oluşur; transpalet ya da forklift bir seferde alır, kamyon ve konteynere düzenli yerleşir.",
          "Dolayısıyla ambalaj paleti yalnızca altlık değildir; ürünün korunması, istiflenmesi ve izlenmesinin parçasıdır.",
        ],
      },
      {
        h: "Malzemeye göre seçim: ahşap, plastik, karton",
        table: {
          caption: "Ambalaj paleti malzeme karşılaştırması",
          head: ["Malzeme", "Avantaj", "Dikkat edilecek nokta", "Uygun kullanım"],
          rows: [
            ["Ahşap", "Dayanıklı, onarılabilir, yaygın", "İhracatta ISPM-15 damgası gerekir; nem ve ağırlık", "Genel lojistik, ağır yük, ihracat"],
            ["Plastik", "Hijyenik, yıkanabilir, her palet aynı", "Maliyeti daha yüksek, kayma riski", "Gıda, ilaç, çok kullanımlık döngü"],
            ["Karton / kağıt", "Hafif, tek kullanımlık, ISPM-15 kapsamı dışında", "Nemden etkilenir, taşıma kapasitesi sınırlı", "Hafif ürün, hava kargo, tek yönlü gönderi"],
          ],
        },
        links: [
          ["Ahşap mı plastik mi?", "/rehber/ahsap-palet-mi-plastik-palet-mi/"],
          ["Plastik palet", "/urunler/plastik-palet/"],
        ],
      },
      {
        h: "Boyut seçimi",
        p: [
          "Paletin ölçüsü, ürünün ambalaj boyutuna ve taşıma aracına göre seçilir. Ürün palet kenarından taşmamalı; taşan koli hem hasar görür hem istif kapasitesini düşürür.",
        ],
        list: [
          "80x120: en yaygın Avrupa ölçüsü, raf ve tır düzeni için uygun",
          "100x120: endüstriyel, büyük hacimli ürünler",
          "114x114: kimya sektörü, bidon ve varil",
          "Özel ölçü: standart ölçüye sığmayan ürünler, makine ve uzun parçalar",
        ],
        links: [
          ["Konteynere ve tıra kaç palet sığar?", "/rehber/konteynere-ve-tira-kac-palet-sigar/"],
          ["Konteyner palet hesaplama", "/araclar/konteyner-palet-hesaplama/"],
          ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"],
        ],
      },
      {
        h: "Streç, çember ve köşebent",
        p: ["Ambalaj paleti ancak yük sabitlenirse işini yapar. Genellikle şu araçlar birlikte kullanılır:"],
        list: [
          "Streç film: yükü paletle birlikte sarar, toz ve nemden korur",
          "Çember (PP veya çelik): ağır yükü paletin üzerinde sıkıca bağlar",
          "Köşebent (kenar koruyucu): çember altında kolinin ezilmesini önler ve köşelere sertlik katar",
          "Kaymaz altlık veya ara karton: katlar arası kaymayı azaltır",
        ],
        links: [["Palet nasıl istiflenir?", "/rehber/palet-nasil-istiflenir/"]],
      },
      {
        h: "Tek kullanımlık mı, çok kullanımlık mı?",
        p: [
          "Tek yönlü giden, geri dönüşü olmayan sevkiyatlarda tek kullanımlık ya da düşük maliyetli palet mantıklıdır. Aynı yolu tekrar tekrar kat eden, havuzda dönen iç lojistikte ise çok kullanımlık sağlam palet toplam maliyeti düşürür.",
          "Karar verirken paletin iade edilip edilmeyeceğini, tekrar kullanım sayısını ve alıcının palet takası isteyip istemediğini hesaba katın.",
        ],
        links: [
          ["Palet maliyetini düşürmenin yolları", "/rehber/palet-maliyetini-dusurmenin-yollari/"],
          ["İkinci el palet", "/urunler/ikinci-el-palet/"],
        ],
      },
      {
        h: "İhracat ambalajında ISPM-15",
        p: [
          "Ahşap ambalaj malzemesinin uluslararası sevkiyatında ISPM-15 standardı uygulanır: ahşap, ısıl işlem (HT) gibi onaylı bir işlemden geçmeli ve damga taşımalıdır. Karton ve plastik palet bu kuralın kapsamı dışındadır.",
          "MEPAL, ISPM-15 uyumlu, HT damgalı ihracat paleti temin eder; ısıl işlemi kendi tesisinde yapmaz. Varış ülkesinin ek şartlarını mutlaka kontrol edin.",
        ],
        links: [
          ["İhracat paleti", "/urunler/ihracat-paleti/"],
          ["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"],
          ["İhracatta palet ve ambalaj kuralları", "/rehber/ihracatta-palet-ve-ambalaj-kurallari/"],
        ],
      },
    ],
    faq: [
      { q: "Ambalaj paleti nedir?", a: "Ürünün depolanması ve sevkiyatı için üzerine dizilip streç veya çemberle sabitlendiği paletin ambalaj amacıyla kullanımıdır. Ahşap, plastik veya karton olabilir." },
      { q: "Ambalaj paleti için hangi boyut seçilmeli?", a: "Ürün koli ve istif düzenine göre seçilir. En yaygın ölçü 80x120'dir; geniş ve ağır ürünlerde 100x120, kimyasal bidonlarda 114x114 ya da özel ölçü tercih edilir." },
      { q: "Ahşap palet ihracatta nasıl kullanılır?", a: "Ahşap ambalaj ISPM-15 gereği ısıl işlem (HT) görmüş ve damgalı olmalıdır. Damgasız ahşap palet gümrükte sorun çıkarabilir." },
      { q: "Streç ile çember birlikte kullanılır mı?", a: "Evet. Streç yükü toz ve nemden korur, çember ağır veya yüksek yükü sıkıca bağlar. Köşebent çember altındaki koliyi korur." },
      { q: "Tek kullanımlık palet ne zaman mantıklı?", a: "Palet geri dönmeyecekse ve alıcı takas istemiyorsa düşük maliyetli, hafif palet yeterli olabilir. Tekrar dönecek yüklerde sağlam, çok kullanımlık palet toplamda daha ekonomiktir." },
    ],
  },

  // ───────────────────────── 5. CP3 palet
  {
    slug: "cp3-palet",
    name: "CP3 Palet (1140 × 1140 mm Kimya Paleti)",
    title: "CP3 Palet 1140x1140: Ölçü ve Kullanım Yeri | MEPAL",
    description:
      "CP3 palet 1140x1140 mm kimya paletidir. 4 yönlü yapı, boya, yağ, IBC ve varil sektörü kullanımı; CP serisinden farkı. Gebze'den teklif.",
    h1: "CP3 Palet: 1140 × 1140 mm Kimya Sektörü Paleti",
    answer:
      "CP3 palet, 1140 × 1140 mm kare tabanlı ve dört yönden çatallanabilen kimya paletidir. Kare taban IBC tank, varil ve bidon gruplarını dengeli taşır; ahşap ve plastik (HDPE) versiyonları bulunur. Ahşap CP3 ihracatta ISPM-15 HT damgası taşımalıdır.",
    keyword: "cp3 palet",
    art: "cp",
    blurb: "1140×1140 mm kimya paleti: IBC, varil ve bidon sevkiyatı için 4 yönlü CP3.",
    priceRow: "cp-114x114",
    specs: [
      ["Ölçü", "1140 × 1140 mm"],
      ["Seri", "CP (Chemical Pallet) – CP3"],
      ["Çatal girişi", "4 yönlü"],
      ["Malzeme", "Ahşap veya plastik (HDPE)"],
      ["Kullanım", "Boya, yağ, kimyasal, IBC, varil, bidon"],
      ["Yükseklik", "Üreticiye ve malzemeye göre değişir"],
      ["İhracat", "Ahşapta ISPM-15 HT damgası gerekir"],
    ],
    uses: ["Boya ve vernik sevkiyatı", "Madeni yağ ve yağlayıcı bidonları", "IBC tank taşıma", "Varil ve bidon istifi", "Plastik hammadde ve kimya çuvalı"],
    related: ["cp-palet", "plastik-palet", "ihracat-paleti", "100x120-palet"],
    guides: ["cp-paletleri-olcu-tablosu", "ispm-15-nedir", "palet-kac-kg-tasir"],
    sections: [
      {
        h: "CP3 palet nedir?",
        p: [
          "CP, kimya endüstrisinde kullanılan palet serisini anlatan kısaltmadır (Chemical Pallet). CP3 bu serinin 1140 × 1140 mm kare ölçülü üyesidir; serinin diğer tipleri için CP palet sayfasına bakın.",
          "Kare ölçü, IBC tanklar ve varil gruplarının palet üzerine düzgün oturmasını sağlar. Ayrıca palet her yönden aynı davrandığı için istifte ve konteyner yerleşiminde esneklik verir. Bu bilgiler tedarikçi teknik föylerinde yaygın olarak yer alsa da, tam yapı ve yükseklik üreticiye göre değişebilir.",
        ],
      },
      {
        h: "CP3 teknik özellikleri",
        p: ["Aşağıdaki tablo ahşap ve plastik CP3 için genel çerçeveyi gösterir; kesin değerler ürün föyünden teyit edilmelidir."],
        table: {
          caption: "CP3 palet teknik özet",
          head: ["Özellik", "Ahşap CP3", "Plastik CP3"],
          rows: [
            ["Taban ölçüsü", "1140 × 1140 mm", "1140 × 1140 mm"],
            ["Çatal girişi", "4 yönlü", "4 yönlü"],
            ["Yapı", "Üst ve alt tahtalar, çapraz parçalar ve bloklar", "Tek parça, kızaklı veya ayaklı (modele göre)"],
            ["Hijyen", "Gözenekli, nem alabilir", "Yıkanabilir, nem almaz"],
            ["İhracat", "ISPM-15 HT damgası gerekir", "ISPM-15 kapsamı dışında"],
            ["Maliyet", "Genellikle daha düşük", "Genellikle daha yüksek"],
          ],
        },
      },
      {
        h: "CP3'ün sektörleri: boya, yağ, IBC, varil",
        list: [
          "Boya ve vernik: bidon ve kovalar kare paletin köşelerine kadar dizilebilir",
          "Madeni yağ: varil ve 20 litrelik bidon istifi",
          "IBC tank: 1000 litrelik tankın kare tabanı bu palete oturur",
          "Plastik hammadde, çuvallı kimyasallar ve katkı maddeleri",
        ],
        links: [["Kimya ve plastik sektörü", "/sektorler/kimya-ve-plastik/"]],
      },
      {
        h: "Mevcut CP palet sayfasından farkı",
        p: [
          "CP palet sayfamız CP serisini bütün olarak ele alır; bu sayfa ise yalnızca CP3 ölçüsüne ve CP3'ün hangi işte doğru seçim olduğuna odaklanır.",
          "Daha geniş CP ölçü tablosunu ve seri karşılaştırmasını rehberde görebilirsiniz.",
        ],
        links: [
          ["CP palet serisi (CP1, CP2, CP3)", "/urunler/cp-palet/"],
          ["CP paletleri ölçü tablosu", "/rehber/cp-paletleri-olcu-tablosu/"],
        ],
      },
      {
        h: "Ahşap mı plastik mi CP3?",
        p: [
          "Ahşap CP3 daha uygun maliyetlidir ve onarılabilir; tek yönlü ya da kısa döngülü sevkiyatlarda yaygındır. Plastik CP3 yıkanabilir, boya ve yağ sızıntısına karşı daha rahat temizlenir; hijyen önemliyse ya da kapalı döngüde dönecekse daha uygundur.",
          "İhracatta ahşap CP3 ISPM-15 ısıl işlem damgası taşımalıdır. MEPAL, ISPM-15 uyumlu HT damgalı palet temin eder; ısıl işlemi kendi tesisinde yapmaz.",
        ],
        links: [
          ["Plastik palet", "/urunler/plastik-palet/"],
          ["İhracat paleti", "/urunler/ihracat-paleti/"],
        ],
      },
      {
        h: "Teklif ve teslimat",
        steps: [
          "Ahşap mı plastik mi olduğunu, adedi ve yük cinsini (IBC, varil, bidon) belirtin.",
          "İhracat yapılacaksa ISPM-15 gerekliliğini yazın.",
          "Stok ve araç programına göre teklif ve teslim zamanı bildirilir; net süre teklifte yazılır.",
        ],
        links: [
          ["CP palet fiyatları", "/palet-fiyatlari/"],
          ["Teklif al", "/teklif-al/"],
        ],
      },
    ],
    faq: [
      { q: "CP3 palet ölçüsü nedir?", a: "CP3 palet 1140 × 1140 mm ölçülü, dört yönden çatallanabilen kare kimya paletidir. Yükseklik üreticiye ve malzemeye göre değişir." },
      { q: "CP3 palet kimyasal dışında kullanılır mı?", a: "Evet. Kare ölçüsü sayesinde IBC, varil ve bidon dışında farklı ürünlerin sevkiyatında da kullanılır, ancak ağırlıklı pazarı kimya sektörüdür." },
      { q: "CP3 ile CP1 farkı nedir?", a: "CP serisinin üyeleri farklı taban ölçülerine sahiptir. Hangi ölçünün hangi seriye ait olduğu için rehberdeki CP ölçü tablosuna bakabilirsiniz." },
      { q: "CP3 palet ihracatta kullanılabilir mi?", a: "Ahşap CP3 ISPM-15 ısıl işlem damgası taşıyorsa kullanılabilir. Plastik CP3 bu kuralın kapsamında değildir." },
      { q: "Fiyatı nasıl öğrenirim?", a: "Güncel fiyat tablosuna bakabilir ya da adet ve malzeme tercihinizi belirterek teklif alabilirsiniz." },
    ],
  },

  // ───────────────────────── Plastik palet kümesi
  {
    slug: "80x120-plastik-palet",
    name: "80x120 Plastik Palet",
    title: "80x120 Plastik Palet: Ölçü, Yük, Raf Seçimi | MEPAL",
    description:
      "80x120 plastik palet: 800×1200 mm ölçü, hafif ve ağır hizmet, statik-dinamik-raf yükü farkı ve seçim ipuçları. Gebze deposundan teklif.",
    h1: "80x120 Plastik Palet: Ölçü, Yük ve Raf Uyumu",
    answer:
      "80x120 plastik palet, 800 × 1200 mm taban ölçüsünde enjeksiyonla üretilen, nem emmeyen ve yıkanabilen palettir. Yük kapasitesi modele göre değişir; zeminde, istifte ve rafta taşıma değerleri ayrı olduğundan üretici verisine göre seçilmelidir. Güncel fiyat için teklif alın.",
    keyword: "80x120 plastik palet",
    art: "plastic",
    blurb: "800×1200 mm plastik palet: hafif ve ağır hizmet, rafa uygun modeller.",
    priceRow: "plastik-hafif",
    specs: [
      ["Taban ölçüsü", "800 × 1200 mm"],
      ["Yükseklik", "Modele göre yaklaşık 140–170 mm"],
      ["Ağırlık", "Hafif hizmette yaklaşık 5–10 kg, ağır hizmette daha fazla"],
      ["Dinamik yük", "Modele göre yaklaşık 1.000–1.500 kg"],
      ["Statik yük (zeminde)", "Modele göre birkaç ton düzeyine kadar"],
      ["Raf yükü", "Modele ve kiriş aralığına göre; üretici verisine bakılmalı"],
      ["Üst yüzey", "Kapalı veya ızgara"],
      ["Çatal girişi", "4 yönlü"],
    ],
    uses: ["Gıda ve içecek depoları", "İlaç ve kozmetik", "Otomatik hat ve konveyör", "Kapalı döngü iç lojistik", "Yıkama gerektiren üretim alanları"],
    related: ["plastik-palet", "plastik-euro-palet", "hijyenik-plastik-palet", "100x120-plastik-palet", "80x120-euro-palet"],
    guides: ["plastik-palet-cesitleri", "palet-raf-sistemleri-ve-raf-yuku", "ahsap-palet-mi-plastik-palet-mi", "euro-palet-olculeri"],
    sections: [
      {
        h: "80x120 plastik palet kimler için uygun?",
        p: [
          "800 × 1200 mm, raf gözleri ve konveyör hatlarının en çok kullandığı ölçüdür. Bu ölçüde plastik palet, ahşabın değişken ağırlığı ve kıymık riski sorun olduğunda tercih edilir: ağırlığı sabittir, çivi içermez ve basınçlı suyla yıkanabilir.",
          "Tek yönlü sevkiyatta palet alıcıda kalacaksa ahşap genelde daha ekonomiktir. Plastik, aynı paletin onlarca kez döndüğü kapalı döngülerde ve hijyen şartı olan işlerde anlam kazanır.",
        ],
        links: [["Ahşap palet mi plastik palet mi?", "/rehber/ahsap-palet-mi-plastik-palet-mi/"]],
      },
      {
        h: "Üç farklı yük değeri: statik, dinamik, raf",
        table: {
          caption: "Plastik palette yük türleri (yaklaşık, modele göre değişir)",
          head: ["Yük türü", "Anlamı", "Dikkat"],
          rows: [
            ["Dinamik", "Forklift veya transpaletle hareket halindeki yük", "Günlük kullanımda esas alınan değer"],
            ["Statik", "Zeminde, hareketsiz istif yükü", "Dinamik değerden yüksektir"],
            ["Raf yükü", "İki kiriş üzerinde duran palet yükü", "En düşük değerdir; kiriş aralığına çok duyarlıdır"],
          ],
        },
        p: ["Üretici katalogları üç değeri ayrı verir. Raf için çelik takviyeli ağır hizmet model gerekir; hafif hizmet palet rafta zamanla sarkar. Kesin kapasiteyi teklif aşamasında modelin teknik föyünden doğrulayın."],
        links: [["Palet raf sistemleri ve raf yükü", "/rehber/palet-raf-sistemleri-ve-raf-yuku/"]],
      },
      {
        h: "Model seçerken kontrol listesi",
        list: [
          "Taşıyacağınız yükün gerçek ağırlığı ve istif yüksekliği",
          "Raf kullanılacak mı, kiriş aralığı ne kadar",
          "Kapalı üst (sızıntı, hijyen) mi ızgara üst (drenaj, havalandırma) mi",
          "Otomatik hat veya konveyör varsa taban yapısı ve kenar kayma önleyicileri",
          "Çevre sıcaklığı: aşırı soğukta ve sıcakta malzeme davranışı modele göre farklıdır",
          "Yıkama ve kimyasal temas ihtiyacı",
        ],
        links: [["Palet seçici", "/araclar/palet-secici/"]],
      },
      {
        h: "Sipariş ve teslimat",
        steps: [
          "Kullanım yerini, yükü, raf durumunu ve adedi iletin.",
          "Stoktaki uygun model ve net birim fiyat teklifle bildirilir.",
          "Gebze deposundan teslim alabilir veya Türkiye genelinde araçla sevk isteyebilirsiniz; süre stok ve araç programına göre teklifte yazılır.",
        ],
        p: ["Güncel fiyat için plastik palet fiyat tablosuna bakın; model ve adet için teklif alın."],
        links: [["Plastik palet fiyatları", "/plastik-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "80x120 plastik palet kaç kg taşır?", a: "Modele göre değişir. Dinamik taşıma çoğunlukla yaklaşık 1.000–1.500 kg aralığındadır; statik değer daha yüksek, raf değeri daha düşüktür. Kesin değer üretici verisinden doğrulanmalıdır." },
      { q: "80x120 plastik palet rafa girer mi?", a: "Çelik takviyeli ağır hizmet modeller uygundur. Hafif hizmet paletler zeminde veya hafif yüklerde kullanılmalıdır." },
      { q: "Kapalı üst mü ızgara üst mü?", a: "Sızıntı ve hijyen önemliyse kapalı, drenaj ve havalandırma gerekiyorsa ızgara üst uygundur." },
      { q: "Plastik palet ihracatta ISPM-15 ister mi?", a: "Hayır. ISPM-15 ahşap ambalaj içindir; plastik palet kapsam dışındadır. Yine de alıcı ülkenin ek şartı olup olmadığını kontrol edin." },
    ],
  },

  {
    slug: "100x120-plastik-palet",
    name: "100x120 Plastik Palet",
    title: "100x120 Plastik Palet: Ağır Yük ve Raf | MEPAL",
    description:
      "100x120 plastik palet: 1000×1200 mm, endüstriyel ve ağır yük kullanımı, raf seçimi, ahşap 100x120 ile farkı. Gebze deposundan teklif alın.",
    h1: "100x120 Plastik Palet: Ağır Yük ve Raf Seçimi",
    answer:
      "100x120 plastik palet, 1000 × 1200 mm ölçüsünde, endüstriyel ve ağır yüklere yönelik plastik palettir. Kimya, otomotiv ve ağır sanayide tercih edilir; statik, dinamik ve raf yükü modele göre farklıdır. Güncel fiyat için teklif alın.",
    keyword: "100x120 plastik palet",
    art: "plastic",
    blurb: "1000×1200 mm endüstriyel plastik palet: ağır yük ve raf kullanımı.",
    priceRow: "plastik-100x120",
    specs: [
      ["Taban ölçüsü", "1000 × 1200 mm"],
      ["Yükseklik", "Modele göre yaklaşık 150–170 mm"],
      ["Ağırlık", "Modele göre yaklaşık 15–30 kg"],
      ["Dinamik yük", "Modele göre yaklaşık 1.000–2.000 kg"],
      ["Raf yükü", "Takviyeye ve kiriş aralığına göre; üretici verisine bakılmalı"],
      ["Takviye", "Çelik profilli veya katmanlı ağır hizmet modeller"],
      ["Çatal girişi", "4 yönlü (modele göre)"],
    ],
    uses: ["Kimya ve plastik sanayi", "Otomotiv yan sanayi", "Ağır makine parçaları", "Raf ve yığın depolama", "Kapalı döngü fabrika içi taşıma"],
    related: ["100x120-palet", "80x120-plastik-palet", "plastik-palet", "cp3-palet", "plastik-euro-palet"],
    guides: ["100x120-ile-80x120-palet-farki", "plastik-palet-cesitleri", "palet-raf-sistemleri-ve-raf-yuku", "palet-kac-kg-tasir"],
    sections: [
      {
        h: "100x120 plastik palet nedir, ne zaman seçilir?",
        p: [
          "100x120 ölçüsü, 80x120'ye göre yaklaşık yüzde 25 fazla taban alanı sağlar. Büyük kolilerin, torbaların ve fıçı gibi yüklerin kenardan taşmadan oturması gerektiğinde bu ölçü seçilir.",
          "Plastik 100x120, ahşap eşdeğerine göre sabit ağırlık, yıkanabilirlik ve uzun ömür getirir. Bedeli ilk alım maliyetidir; döngülü kullanımda bu fark zamanla kapanır.",
        ],
        links: [["100x120 ile 80x120 farkı", "/rehber/100x120-ile-80x120-palet-farki/"], ["Ahşap 100x120 palet", "/urunler/100x120-palet/"]],
      },
      {
        h: "Ahşap ve plastik 100x120 karşılaştırması",
        table: {
          head: ["Kriter", "Ahşap 100x120", "Plastik 100x120"],
          rows: [
            ["İlk maliyet", "Daha düşük", "Daha yüksek"],
            ["Ömür", "Onarımla uzar", "Uzun, onarım sınırlı"],
            ["Ağırlık", "Nemle değişir", "Sabit"],
            ["Hijyen", "Nem ve kıymık riski", "Yıkanabilir, emici değil"],
            ["İhracat", "ISPM-15 HT damga gerekir", "ISPM-15 kapsamı dışında"],
            ["Raf kullanımı", "Tahta ve çivi durumuna bağlı", "Takviyeli modellerde tutarlı"],
          ],
        },
        links: [["Plastik palet fiyatları", "/plastik-palet-fiyatlari/"]],
      },
      {
        h: "Raf ve ağır yük için dikkat",
        list: [
          "Raf kullanımında yalnızca takviyeli ağır hizmet modeller düşünülmeli",
          "Kiriş aralığı arttıkça raf yükü düşer; üretici tablosunda kiriş aralığı belirtilir",
          "Yük palet kenarından taşmamalı, ağırlık merkezi ortada olmalı",
          "Yığın istifte alttaki paletin statik yükü hesaba katılmalı",
          "Sıcak ve soğuk ortamlarda malzeme sınıfı kontrol edilmeli",
        ],
        p: ["Yük değerleri üreticiye ve modele göre değişir; kritik uygulamalarda teknik föyü teklifle birlikte isteyin."],
      },
      {
        h: "Sipariş ve teslimat",
        steps: [
          "Yükü, raf durumunu ve adedi iletin.",
          "Uygun model ve net birim fiyat teklifle bildirilir.",
          "Gebze deposundan teslim veya Türkiye geneli sevkiyat; süre stok ve araç programına göre teklifte yazılır.",
        ],
        links: [["Teklif al", "/teklif-al/"], ["Palet seçici", "/araclar/palet-secici/"]],
      },
    ],
    faq: [
      { q: "100x120 plastik palet kaç kg taşır?", a: "Modele göre yaklaşık 1.000–2.000 kg dinamik yük aralığında değişir. Statik ve raf değerleri ayrıdır; kesin kapasite için üretici verisine bakılmalıdır." },
      { q: "100x120 plastik palet rafta kullanılır mı?", a: "Çelik veya katmanlı takviyesi olan ağır hizmet modeller uygundur; kiriş aralığına göre raf yükü hesaplanmalıdır." },
      { q: "100x120 plastik palet kimyasal dayanımı nasıl?", a: "Polietilen ve polipropilen birçok kimyasala dayanıklıdır, ancak dayanım maddeye ve sıcaklığa göre değişir. Özel kimyasal temasında teknik föyü kontrol edin." },
      { q: "CP3 ile karıştırılır mı?", a: "Evet, çünkü ikisi de kimya sektöründe kullanılır. 100x120 dikdörtgen, CP3 ise 1140 × 1140 mm karedir." },
    ],
  },

  {
    slug: "hijyenik-plastik-palet",
    name: "Hijyenik Plastik Palet (Beyaz)",
    title: "Hijyenik Plastik Palet: Beyaz, Gıda ve İlaç | MEPAL",
    description:
      "Hijyenik beyaz plastik palet: kapalı yüzey, kolay yıkama, gıda ve ilaç depoları için seçim ölçütleri ve belge notları. Gebze'den teklif.",
    h1: "Hijyenik Plastik Palet (Beyaz): Gıda ve İlaç İçin",
    answer:
      "Hijyenik plastik palet, düz kapalı üst yüzeyli, çoğunlukla açık veya beyaz renkli, kolay yıkanan plastik palettir. Gıda, içecek, ilaç ve kozmetik depolarında kontaminasyon riskini azaltmak için kullanılır. Gıda temasına uygunluk belgesi modele göre üreticiden talep edilmelidir.",
    keyword: "hijyenik plastik palet",
    art: "plastic",
    blurb: "Beyaz, kapalı yüzeyli yıkanabilir plastik palet: gıda ve ilaç depoları için.",
    priceRow: "plastik-hijyenik",
    specs: [
      ["Ölçü", "Yaygın olarak 800 × 1200 mm; 1000 × 1200 mm modele göre"],
      ["Renk", "Beyaz veya açık renk"],
      ["Üst yüzey", "Düz, kapalı; ızgara delikleri yok veya küçük"],
      ["Malzeme", "HDPE veya PP"],
      ["Yük kapasitesi", "Modele göre; dinamik yaklaşık 1.000–1.500 kg"],
      ["Temizlik", "Basınçlı su ve uygun deterjanla yıkanabilir"],
      ["Belge", "Gıda temasına uygunluk bilgisi üreticiden istenir"],
    ],
    uses: ["Gıda ve içecek depoları", "İlaç ve kozmetik", "Süt ve et ürünleri", "Temiz oda ve hijyen bölgeleri", "Ambalajlı gıda lojistiği"],
    related: ["plastik-palet", "80x120-plastik-palet", "plastik-euro-palet", "ikinci-el-plastik-palet"],
    guides: ["gida-sektoru-icin-palet-secimi", "plastik-palet-cesitleri", "ahsap-palet-mi-plastik-palet-mi"],
    sections: [
      {
        h: "Hijyenik palet neden ayrı bir ürün?",
        p: [
          "Ahşap palet nemi tutar, kıymık ve çivi riski taşır, temizliği sınırlıdır. Gıda ve ilaçta bu üç özellik, denetim ve kontaminasyon açısından sorun yaratabilir. Hijyenik plastik palet düz ve kapalı yüzeyi, nem emmeyen gövdesi ve yıkanabilir yapısıyla bu riski azaltır.",
          "Beyaz veya açık renk, kir ve kalıntıyı gözle görünür kılar; temizlik denetiminde kolaylık sağlar.",
        ],
        links: [["Gıda sektörü için palet seçimi", "/rehber/gida-sektoru-icin-palet-secimi/"], ["Gıda ve içecek sektörü", "/sektorler/gida-ve-icecek/"]],
      },
      {
        h: "Hijyenik palette aranacak özellikler",
        table: {
          head: ["Özellik", "Neden önemli"],
          rows: [
            ["Düz kapalı üst yüzey", "Sızıntı ve kalıntı birikmez, temizlik kolaylaşır"],
            ["Kenarlı (rimli) tasarım", "Yüklerin kaymasını azaltır"],
            ["Açık renk", "Kirlenme belli olur"],
            ["Çivi ve kıymık yok", "Ambalaja zarar vermez, yabancı madde riski olmaz"],
            ["Nem emmeme", "Küf ve koku oluşumunu azaltır"],
            ["Belge ve ürün bilgisi", "Denetim ve müşteri şartları için gerekir"],
          ],
        },
      },
      {
        h: "Temizlik ve kullanım notları",
        list: [
          "Yıkama sıcaklığı ve deterjan türü üreticinin önerisine göre seçilmeli",
          "Kapalı yüzeyde su birikmemesi için eğimli kurutma ya da dik istif tercih edilmeli",
          "Çatlak veya derin çizik oluşan palet hijyen bölgesinde kullanılmamalı",
          "Raf kullanımında yalnızca takviyeli model seçilmeli",
        ],
        p: ["Gıda temasına uygunluk beyanı model ve üreticiye göre değişir; denetim şartınız varsa belgeyi siparişten önce talep edin. Doğrudan gıda teması yerine çoğunlukla ambalajlı ürün taşıma söz konusudur."],
        links: [["Belgeler", "/belgeler/"]],
      },
      {
        h: "Sipariş ve teslimat",
        steps: [
          "Sektörünüzü, istenen ölçüyü, yükü ve adedi iletin.",
          "Stoktaki uygun model, belge durumu ve net birim fiyat teklifle bildirilir.",
          "Gebze deposundan teslim veya Türkiye geneli sevkiyat; süre stok ve araç programına göre teklifte yazılır.",
        ],
        links: [["Plastik palet fiyatları", "/plastik-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Hijyenik plastik palet gıdada kullanılabilir mi?", a: "Ambalajlı gıdanın taşınması ve depolanmasında yaygın kullanılır. Belge ve uygunluk şartı modele göre değişir; denetim gereksinimlerinizi teklifte belirtin." },
      { q: "Beyaz palet neden tercih edilir?", a: "Açık renk, kir ve kalıntıyı belli eder; temizlik denetimini kolaylaştırır." },
      { q: "Hijyenik palet rafa girer mi?", a: "Takviyeli, raf uyumlu model seçilirse girer. Hafif hizmet hijyenik paletler zeminde kullanım içindir." },
      { q: "Ahşap palete göre ne zaman tercih edilmeli?", a: "Yıkama şartı, nem ve kıymık riski veya kapalı döngü kullanım varsa. Tek yönlü sevkiyatta ahşap genelde daha ekonomiktir." },
    ],
  },

  {
    slug: "plastik-euro-palet",
    name: "Plastik Euro Palet",
    title: "Plastik Euro Palet: Ahşap Euro'dan Farkı | MEPAL",
    description:
      "Plastik euro palet: 800×1200 mm ölçüde plastik karşılığı, ahşap euro palete göre ağırlık, ömür, hijyen farkları ve ne zaman tercih edilir.",
    h1: "Plastik Euro Palet: Ahşap Euro'dan Farkı ve Kullanımı",
    answer:
      "Plastik euro palet, 800 × 1200 mm Euro ölçüsünde üretilen plastik palettir; ölçüsü ahşap Euro palete denktir ama yapısı, ağırlığı ve ömrü farklıdır. Raf, otomatik hat ve hijyen gerektiren işlerde tercih edilir. EPAL damgalı ahşap palet yerine geçmez.",
    keyword: "plastik euro palet",
    art: "plastic",
    blurb: "Euro ölçüsünde (800×1200 mm) plastik palet: ahşaptan farkı ve kullanımı.",
    priceRow: "plastik-hafif",
    specs: [
      ["Ölçü", "800 × 1200 mm (Euro ölçüsü)"],
      ["Malzeme", "HDPE veya PP, geri dönüşümlü olabilir"],
      ["Yükseklik", "Modele göre yaklaşık 140–170 mm"],
      ["Ağırlık", "Ahşaptan genelde hafif ve sabit"],
      ["Yük", "Dinamik yaklaşık 1.000–1.500 kg; modele göre"],
      ["EPAL damgası", "Yok; plastik palet EPAL sisteminin parçası değildir"],
      ["ISPM-15", "Kapsam dışı"],
    ],
    uses: ["Otomatik depo ve konveyör hatları", "Gıda ve ilaç lojistiği", "Kapalı döngü tedarik zinciri", "Yıkama gerektiren üretim", "Ahşap işlemi istenmeyen ihracat"],
    related: ["80x120-plastik-palet", "plastik-palet", "hijyenik-plastik-palet", "80x120-euro-palet", "epal-palet"],
    guides: ["epal-palet-ile-standart-palet-farki", "euro-palet-olculeri", "ahsap-palet-mi-plastik-palet-mi", "plastik-palet-cesitleri"],
    sections: [
      {
        h: "Plastik Euro palet nedir?",
        p: [
          "“Euro palet” asıl olarak 800 × 1200 mm ölçülü, 9 takozlu ahşap paleti anlatır. Plastik euro palet ise aynı taban ölçüsüne sahip plastik paletin piyasadaki adıdır. Ölçü aynı olduğu için raf ve hatlarda ahşap Euro ile birlikte çalışabilir; yapı ve malzeme farklıdır.",
          "EPAL tescilli bir markadır ve EPAL damgası yalnızca lisanslı ahşap paletlere vurulur. Plastik euro palet EPAL değildir; EPAL takas sistemine girmez.",
        ],
        links: [["EPAL ile standart palet farkı", "/rehber/epal-palet-ile-standart-palet-farki/"], ["Euro palet ölçüleri", "/rehber/euro-palet-olculeri/"]],
      },
      {
        h: "Ahşap Euro ile plastik euro karşılaştırması",
        table: {
          head: ["Kriter", "Ahşap Euro palet", "Plastik euro palet"],
          rows: [
            ["Taban ölçüsü", "800 × 1200 mm", "800 × 1200 mm"],
            ["Yapı", "9 takozlu, çivili", "Enjeksiyon, tek parça veya birleşik"],
            ["Ağırlık", "Nemle değişir", "Sabit"],
            ["Hijyen", "Sınırlı", "Yıkanabilir"],
            ["Onarım", "Tahta değişimiyle mümkün", "Sınırlı"],
            ["EPAL takası", "Damgalıysa mümkün", "Yok"],
            ["İlk maliyet", "Daha düşük", "Daha yüksek"],
          ],
        },
        links: [["80x120 Euro palet", "/urunler/80x120-euro-palet/"], ["EPAL ölçülü palet", "/urunler/epal-palet/"]],
      },
      {
        h: "Ne zaman plastik euro palet?",
        list: [
          "Otomatik sistemlerde sabit ağırlık ve ölçü toleransı gerektiğinde",
          "Hijyen ve yıkama şartı olduğunda",
          "Palet aynı hatta tekrar tekrar dönecekse",
          "Ahşap ambalaj kuralları (ISPM-15) ile uğraşmak istemediğinizde",
        ],
        p: ["Palet alıcıda kalıyorsa veya EPAL takası gerekiyorsa ahşap Euro palet daha uygundur."],
      },
      {
        h: "Teklif ve teslimat",
        steps: [
          "Kullanım yerini, yükü ve adedi iletin.",
          "Stoktaki uygun model ve fiyat teklifle bildirilir.",
          "Gebze'den teslim veya Türkiye geneli sevkiyat; süre stok ve araç programına göre teklifte yazılır.",
        ],
        links: [["Plastik palet fiyatları", "/plastik-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Plastik euro palet ile EPAL palet aynı mı?", a: "Hayır. EPAL, lisanslı ahşap paletlerin tescilli markasıdır. Plastik euro palet yalnızca aynı taban ölçüsüne sahiptir." },
      { q: "Plastik euro palet ahşap Euro paletin yerine geçer mi?", a: "Ölçü uyumlu olduğu için raf ve hatlarda geçer. Ancak EPAL takası ve damga şartı olan işlerde ahşap EPAL gerekir." },
      { q: "Plastik euro palet kaç kg taşır?", a: "Modele göre değişir; dinamik yük yaklaşık 1.000–1.500 kg aralığında olabilir. Raf ve statik değerler ayrıdır, üretici verisine bakılmalıdır." },
      { q: "İhracatta kullanılır mı?", a: "Plastik palet ISPM-15 kapsamında olmadığından ahşap işlemi gerekmez. Alıcının palet şartını yine de kontrol edin." },
    ],
  },

  {
    slug: "ikinci-el-plastik-palet",
    name: "İkinci El Plastik Palet",
    title: "İkinci El Plastik Palet: Durum Sınıfları | MEPAL",
    description:
      "İkinci el plastik palet: durum sınıfları, nelere bakılır (çatlak, takviye, kontaminasyon), hangi işe uygun. Gebze deposundan teklif alın.",
    h1: "İkinci El Plastik Palet: Durum Sınıfları ve Kontrol",
    answer:
      "İkinci el plastik palet, daha önce kullanılmış ama sağlam kalan plastik paletlerdir. Yeni palete göre daha düşük maliyetlidir; çatlak, kırık ayak, takviye ve kimyasal kontaminasyon kontrolü gerekir. Gıda ve ilaç gibi hassas alanlarda genellikle önerilmez.",
    keyword: "ikinci el plastik palet",
    art: "plastic",
    blurb: "Kullanılmış plastik palet: durum sınıfı, kontrol noktaları ve uygun kullanım.",
    priceRow: "plastik-ikinci-el",
    specs: [
      ["Ölçüler", "800 × 1200 ve 1000 × 1200 mm ağırlıklı"],
      ["Durum", "Kullanılmış; sınıfa göre görünüm ve ömür değişir"],
      ["Stok", "Parti bazlı, model ve renk partiye göre değişir"],
      ["Kontrol", "Çatlak, kırık ayak, takviye, deformasyon, kirlilik"],
      ["Uygun kullanım", "Fabrika içi taşıma, yurt içi sevkiyat, depolama"],
      ["Önerilmeyen", "Gıda teması, ilaç, hijyen denetimli alanlar"],
      ["Satış şekli", "Teklif üzerinden"],
    ],
    uses: ["Fabrika içi taşıma", "Zemin depolama", "Yurt içi tek yönlü sevkiyat", "Maliyet hassas kapalı döngü", "Geçici stoklama"],
    related: ["plastik-palet", "80x120-plastik-palet", "100x120-plastik-palet", "ikinci-el-palet", "ikinci-el-euro-palet"],
    guides: ["ikinci-el-palet-alirken-dikkat-edilecekler", "plastik-palet-cesitleri", "palet-kalite-siniflari", "ikinci-el-palet-guvenli-mi"],
    sections: [
      {
        h: "İkinci el plastik palet kimin işine yarar?",
        p: [
          "Plastik palet çok uzun ömürlü olduğundan, bir kullanım döngüsünü bitirmiş palet çoğu zaman hâlâ iş görür. Bütçeyi sıfır plastiğin ilk maliyetinden korumak isteyen işletmeler için ikinci el plastik palet bir ara yoldur.",
          "Stok, parti bazlı olduğu için model ve renk her seferinde aynı olmayabilir. Aynı tip ve renkte büyük adet gerekiyorsa sıfır plastik palet daha uygundur.",
        ],
        links: [["Plastik palet", "/urunler/plastik-palet/"]],
      },
      {
        h: "Durum sınıfları",
        table: {
          head: ["Sınıf", "Genel durum", "Uygun kullanım"],
          rows: [
            ["Sağlam / iyi", "Çatlaksız, ayakları tam, hafif çizik", "Fabrika içi, yurt içi sevkiyat, zemin depolama"],
            ["Orta", "Görünür aşınma, küçük kenar hasarı", "Hafif yük, geçici kullanım"],
            ["Hasarlı", "Çatlak, kırık ayak, deformasyon", "Yük taşımaya uygun değil; geri dönüşüme gider"],
          ],
        },
        p: ["Sınıf tanımları parti ve stok durumuna göre teklifte netleştirilir."],
      },
      {
        h: "Almadan önce kontrol listesi",
        list: [
          "Üst yüzey ve kenarlarda çatlak var mı",
          "Ayaklar ve kızaklar tam mı, kırık veya aşınma var mı",
          "Çelik takviyeli modellerde takviye yerinde mi",
          "Palet çarpılmış veya deformasyona uğramış mı (düz zeminde sallanma)",
          "Kimyasal, yağ veya boya kontaminasyonu izi var mı",
          "Raf kullanılacaksa model ve kapasite doğrulanabiliyor mu",
        ],
        links: [["İkinci el palet alırken dikkat edilecekler", "/rehber/ikinci-el-palet-alirken-dikkat-edilecekler/"]],
      },
      {
        h: "Teklif ve teslimat",
        steps: [
          "Tip, ölçü, adet ve kullanım amacını iletin; varsa fotoğraf gönderin.",
          "Stoktaki parti, sınıf ve net fiyat teklifle bildirilir.",
          "Gebze deposundan teslim veya Türkiye geneli sevkiyat; süre stok ve araç programına göre teklifte yazılır.",
        ],
        p: ["Elinizde satılacak plastik palet varsa alım için de iletişime geçebilirsiniz."],
        links: [["Palet alım satım", "/hizmetler/palet-alim-satim/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "İkinci el plastik palet güvenli mi?", a: "Çatlak ve takviye kontrolü yapılmış sağlam paletler yurt içi sevkiyat ve depolamada güvenle kullanılır. Rafta yüksek yük taşımak için model kapasitesi doğrulanmalıdır." },
      { q: "Gıdada ikinci el plastik palet kullanılır mı?", a: "Önceki kullanımı bilinmediği için genellikle önerilmez. Gıda ve ilaç için sıfır hijyenik plastik palet daha uygundur." },
      { q: "Her model ve renk bulunur mu?", a: "Stok parti bazlıdır; model ve renk partiye göre değişir. İstediğiniz tipi teklif aşamasında yazın." },
      { q: "Plastik palet satın alır mısınız?", a: "Kullanılmış plastik palet alımı için durum ve adet bilgisiyle teklif isteyebilirsiniz; alım koşulları parti incelemesinden sonra netleşir." },
    ],
  },

  {
    slug: "plastik-palet-kasa",
    name: "Plastik Palet Kasa",
    title: "Plastik Palet Kasa: Palet Tabanlı Kasalar | MEPAL",
    description:
      "Plastik palet kasa: palet tabanlı büyük hacimli plastik kasa, ölçüler, katlanır modeller, yük kapasitesi ve kullanım alanları. Teklif için yazın.",
    h1: "Plastik Palet Kasa: Palet Tabanlı Büyük Hacimli Kasa",
    answer:
      "Plastik palet kasa, palet tabanı üzerine oturan, yan duvarlı büyük hacimli plastik taşıma kasasıdır. Genellikle 800 × 1200 veya 1000 × 1200 mm taban ölçüsünde olur; dökme ve parça ürün taşımada kullanılır. Model ve kapasite üreticiye göre değişir, teklifle teyit edilir.",
    keyword: "plastik palet kasa",
    art: "plastic",
    blurb: "Palet tabanlı büyük hacimli plastik kasa: parça ve dökme ürün taşıma için.",
    priceRow: "plastik-palet-kasa",
    specs: [
      ["Tanım", "Palet tabanlı, yan duvarlı büyük hacimli plastik kasa"],
      ["Taban ölçüsü", "800 × 1200 veya 1000 × 1200 mm ağırlıklı"],
      ["Yükseklik", "Yaklaşık 500–900 mm; modele göre"],
      ["İç hacim", "Yaklaşık birkaç yüz litre; modele göre"],
      ["Yük", "Modele göre yaklaşık 500–1.000 kg"],
      ["Tip", "Sabit veya katlanır duvarlı"],
      ["Çatal girişi", "4 yönlü veya 2 yönlü (modele göre)"],
    ],
    uses: ["Otomotiv yan sanayi parça lojistiği", "Dökme ürün ve ham madde taşıma", "Plastik ve enjeksiyon atölyeleri", "Gıda ve tarım ürünleri (uygun modelde)", "Kapalı döngü tedarik zinciri"],
    related: ["plastik-palet", "80x120-plastik-palet", "100x120-plastik-palet", "ahsap-sandik", "tahta-kasa"],
    guides: ["plastik-palet-cesitleri", "ahsap-palet-mi-plastik-palet-mi", "palet-cesitleri-ve-secimi"],
    sections: [
      {
        h: "Plastik palet kasa nedir?",
        p: [
          "Piyasada “plastik palet kasa” adı iki farklı ürün için kullanılır. Birincisi, tabanı palet olan ve yanları kapalı büyük bir kasadır; forklift ve transpaletle taşınır. İkincisi, küçük ölçülü istiflenebilir plastik kasalardır ve palet üzerinde taşınır. Bu sayfa birincisini, yani palet tabanlı büyük hacimli kasayı anlatır.",
          "Katlanır duvarlı modeller boşken az yer kaplar; döngülü taşımada dönüş maliyetini düşürür.",
        ],
      },
      {
        h: "Palet kasa, palet ve ahşap sandık farkı",
        table: {
          head: ["Ürün", "Yapı", "Ne için"],
          rows: [
            ["Plastik palet", "Düz yük platformu", "Kolileri ve yükleri üstüne istiflemek"],
            ["Plastik palet kasa", "Palet tabanı + yan duvarlar", "Dökme, küçük parça ve kırık dökülen yükler"],
            ["Ahşap sandık", "Ahşap taban ve kapalı gövde", "Makine ve ihracat ambalajı"],
          ],
        },
        links: [["Ahşap sandık", "/urunler/ahsap-sandik/"], ["Tahta kasa", "/urunler/tahta-kasa/"]],
      },
      {
        h: "Seçim ölçütleri",
        list: [
          "Taşınacak ürünün cinsi, boyutu ve toplam ağırlığı",
          "Sabit mi katlanır mı: boş dönüş yeri sınırlıysa katlanır",
          "Duvar yapısı: kapalı (dökme ürün) veya delikli (havalandırma, drenaj)",
          "Kapak ihtiyacı ve istif sayısı",
          "Gıda veya hassas ürün için yıkanabilirlik ve belge",
          "Forklift giriş yönü ve raf kullanımı",
        ],
        p: ["Model, boyut ve yük kapasitesi üreticiye göre değişir; stok durumu ve uygun model teklifle teyit edilir."],
      },
      {
        h: "Teklif ve teslimat",
        steps: [
          "Taşınacak ürünü, aranan hacmi ve adedi iletin.",
          "Uygun model, stok durumu ve net fiyat teklifle bildirilir.",
          "Gebze'den teslim veya Türkiye geneli sevkiyat; süre stok ve araç programına göre teklifte yazılır.",
        ],
        links: [["Plastik palet fiyatları", "/plastik-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Plastik palet kasa ile plastik palet aynı mı?", a: "Hayır. Plastik palet düz bir yük platformudur; palet kasa ise palet tabanı üzerinde yan duvarlı, dökme ve küçük parça taşımaya uygun kasadır." },
      { q: "Katlanır plastik palet kasa var mı?", a: "Evet, modele göre katlanır duvarlı palet kasalar bulunur. Boşken az yer kaplar; stok ve model teklifte teyit edilir." },
      { q: "Plastik palet kasa kaç kg taşır?", a: "Modele göre yaklaşık 500–1.000 kg aralığında değişir. Kesin değer üreticinin teknik föyünden doğrulanmalıdır." },
      { q: "Ahşap kasa yerine plastik kasa ne zaman?", a: "Döngülü kullanım, yıkama ve sabit ağırlık gerektiğinde plastik; tek yönlü ve ölçüye özel işlerde ahşap daha ekonomiktir." },
    ],
  },

  // ───────────────────────── Ahşap: ikinci el ahşap palet
  {
    slug: "ikinci-el-ahsap-palet",
    name: "İkinci El Ahşap Palet",
    title: "İkinci El Ahşap Palet: Sınıf ve Kontrol | MEPAL",
    description:
      "İkinci el ahşap palet: sınıflar, onarım, nelere bakılır (tahta, takoz, çivi, nem, damga) ve hangi işe uygun. Gebze deposundan teklif alın.",
    h1: "İkinci El Ahşap Palet: Sınıflar ve Kontrol Noktaları",
    answer:
      "İkinci el ahşap palet, daha önce kullanılmış ve gerekirse onarılmış ahşap paletlerdir. Yeni palete göre belirgin biçimde daha düşük maliyetlidir; sınıfı, tahta ve takoz durumu, nem ve damga okunaklılığı kontrol edilmelidir. Gıda ve ihracatta sıfır veya uygun damgalı palet gerekir.",
    keyword: "ikinci el ahşap palet",
    art: "used",
    blurb: "Kullanılmış ve onarılmış ahşap paletler: sınıf, kontrol ve uygun kullanım.",
    priceRow: "euro-ikinci-el-1",
    specs: [
      ["Ölçüler", "800 × 1200, 1000 × 1200, 1140 × 1140 mm ve diğerleri"],
      ["Sınıf", "1. sınıf (sağlam, onarılmış), 2. sınıf (yerli kullanım)"],
      ["Yapı", "Tahta, takoz, kızak; kırık parçalar değiştirilebilir"],
      ["Nem", "Kuru, küf ve koku yok olmalı"],
      ["Damga", "Varsa okunaklı olmalı; yoksa ihracat uygun değil"],
      ["Uygun kullanım", "Yurt içi sevkiyat, depolama"],
      ["Satış şekli", "Teklif üzerinden"],
    ],
    uses: ["Yurt içi sevkiyat", "Depolama ve geçici stoklama", "Fabrika içi taşıma", "Tek yönlü ve maliyet hassas gönderiler", "Perakende dağıtım"],
    related: ["ikinci-el-palet", "ikinci-el-euro-palet", "sifir-ahsap-palet", "100x120-palet", "epal-palet"],
    guides: ["ikinci-el-palet-alirken-dikkat-edilecekler", "palet-kalite-siniflari", "sifir-palet-mi-ikinci-el-palet-mi", "palet-omru-nasil-uzatilir"],
    sections: [
      {
        h: "İkinci el ahşap palet ne zaman mantıklı?",
        p: [
          "Palet, tek yönlü sevkiyatta çoğunlukla alıcıda kalır; bu durumda sıfır palet ödemek maliyeti gereksiz artırır. Yurt içi sevkiyat ve depolamada onarılmış, sağlam ikinci el ahşap palet çoğu zaman yeterlidir.",
          "Gıda, ilaç, otomatik hat ve damga şartı olan ihracatta ise sıfır palet veya şartları karşılayan paletle çalışmak gerekir.",
        ],
        links: [["Sıfır mı ikinci el mi?", "/rehber/sifir-palet-mi-ikinci-el-palet-mi/"], ["İkinci el palet", "/urunler/ikinci-el-palet/"]],
      },
      {
        h: "Sınıflara göre karşılaştırma",
        table: {
          head: ["Ölçüt", "1. sınıf", "2. sınıf"],
          rows: [
            ["Durum", "Sağlam, tahta ve takoz onarılmış", "Yerli kullanım, görünür aşınma"],
            ["Görünüm", "Daha düzgün", "Kullanım izi belirgin"],
            ["Uygun kullanım", "Yurt içi sevkiyat, raf dışı depolama", "Fabrika içi, geçici kullanım"],
            ["Raf ve hat", "Duruma bağlı", "Önerilmez"],
            ["Maliyet", "Orta", "En düşük"],
          ],
        },
        p: ["Sınıf tanımı piyasada sabit bir standart değildir; sınıf kriterleri teklifte yazılı olarak teyit edilmelidir."],
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"]],
      },
      {
        h: "Teslim alırken kontrol listesi",
        list: [
          "Üst ve alt tahtalarda kırık veya çatlak var mı",
          "Takozlar ve kızaklar çürük, ezik veya gevşek mi",
          "Çivi çıkıntısı ve batma tehlikesi var mı",
          "Nem, küf ve koku var mı; ürün ve ambalaj için risk yaratır mı",
          "Yağ, kimyasal veya boya lekesi var mı",
          "İhracat gerekiyorsa HT damgası okunaklı mı",
        ],
        links: [["İkinci el palet güvenli mi?", "/rehber/ikinci-el-palet-guvenli-mi/"]],
      },
      {
        h: "Teklif ve teslimat",
        steps: [
          "Ölçü, sınıf, adet ve kullanım amacını iletin; varsa fotoğraf gönderin.",
          "Stoktaki parti ve net fiyat teklifle bildirilir.",
          "Gebze deposundan teslim veya Türkiye geneli sevkiyat; süre stok ve araç programına göre teklifte yazılır.",
        ],
        links: [["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "İkinci el ahşap palet ihracatta kullanılabilir mi?", a: "Okunaklı ISPM-15 HT damgası taşıyorsa ve alıcı şartı kabul ediyorsa kullanılabilir. Damgası silinmiş veya yenileme gerektiren palet ihracata uygun değildir." },
      { q: "İkinci el ahşap palet gıda için uygun mu?", a: "Genellikle önerilmez; nem, koku ve önceki kullanım riski vardır. Gıda ve hassas ürünlerde sıfır palet tercih edin." },
      { q: "Onarılmış palet güvenli mi?", a: "Kırık tahta ve takozu değiştirilmiş, çivileri sağlam palet normal yüklerde güvenle kullanılır. Ağır yük ve raf için kapasiteyi ayrıca doğrulayın." },
      { q: "Hurda ahşap palet alıyor musunuz?", a: "Evet, kullanılmış ve hasarlı palet alımı yapıyoruz. Durum ve adet bilgisiyle teklif isteyebilirsiniz." },
    ],
  },

  // ───────────────────────── Kasa ailesi
  {
    slug: "tahta-kasa",
    name: "Tahta Kasa",
    title: "Tahta Kasa: Endüstriyel ve Depolama Kasası | MEPAL",
    description:
      "Tahta kasa: parça, ürün ve ekipman taşıma ve depolama için ölçüye özel ahşap kasa. Açık üst, kafes ve kapaklı modeller. Gebze'den teklif.",
    h1: "Tahta Kasa: Endüstriyel Taşıma ve Depolama Kasası",
    answer:
      "Tahta kasa, parça, ürün ve ekipmanın taşınması ve depolanması için kereste veya ahşap panelden yapılan kasadır. Açık üst, kafes veya kapaklı olabilir; ölçü ve yük ürüne göre belirlenir. Makine ve ihracat ambalajı için ahşap sandık sayfasına da bakın.",
    keyword: "tahta kasa",
    art: "crate",
    blurb: "Parça ve ürün taşıma için ölçüye özel açık üst, kafes veya kapaklı tahta kasa.",
    specs: [
      ["Tip", "Açık üst, kafes (aralıklı), kapaklı kasa"],
      ["Taban", "Palet veya kızaklı taban"],
      ["Ölçü", "Ürüne ve istif planına göre özel"],
      ["Malzeme", "Kereste, kontrplak veya OSB panel"],
      ["Yük", "Tahta kalınlığına ve takviyeye göre belirlenir"],
      ["İstiflenebilirlik", "Tasarıma göre köşe takozlu, üst üste istiflenir"],
      ["İhracat", "Ham keresteyse ISPM-15 HT damga gerekir"],
    ],
    uses: ["Endüstriyel parça taşıma", "Depolama ve stoklama", "Ekipman ve yedek parça", "Yurt içi sevkiyat", "Üretim hattı içi malzeme akışı"],
    related: ["ahsap-sandik", "ihracat-sandigi-kasasi", "ozel-olcu-palet", "plastik-palet-kasa", "ambalaj-paleti"],
    guides: ["palet-cesitleri-ve-secimi", "ambalaj-paleti-nedir", "ihracatta-palet-ve-ambalaj-kurallari", "ispm-15-nedir"],
    sections: [
      {
        h: "Tahta kasa nedir, kimler kullanır?",
        p: [
          "Tahta kasa, bir palet tabanı üzerine kurulmuş veya kızaklı tabanlı, yan duvarları tahtadan yapılmış kasadır. Ürünü yan yüzeylerden korur, üst üste istiflenebilir ve ürüne göre ölçülendirilir.",
          "Üretim ve depo işletmeleri parça, yedek malzeme ve yarı mamul taşımada; ağır ve sert ürünler için tahta kasayı tercih eder. Plastik kasaya göre ölçüye özel yapılabilmesi ve ağır yüke dayanması avantajıdır.",
        ],
        links: [["Ahşap sandık", "/urunler/ahsap-sandik/"], ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"]],
      },
      {
        h: "Kasa tipleri",
        table: {
          head: ["Tip", "Yapı", "Ne zaman"],
          rows: [
            ["Açık üst kasa", "Yan duvarlı, üstü açık", "Sık erişilen parça, dolum ve boşaltma kolaylığı"],
            ["Kafes kasa", "Aralıklı tahta gövde", "Havalandırma gereken veya ağır, hacimli yük"],
            ["Kapaklı kasa", "Kapak veya üst tahta ile kapalı", "Toz ve darbeden koruma, istif"],
            ["Kapalı kasa", "Tam kaplı gövde", "Hassas ve kırılgan ürün; makine ambalajı için sandık sayfasına bakın"],
          ],
        },
      },
      {
        h: "Doğru kasa için bilgiler",
        list: [
          "Ürünün boyutları ve toplam ağırlığı",
          "Kasa başına parça adedi ve istif yüksekliği",
          "Forklift mi transpalet mi; çatal giriş yönü",
          "İç mekân mı dış mekân mı, nem koruması gerekli mi",
          "Yurt içi mi ihracat mı (ISPM-15 gerekliliği)",
          "Tek kullanımlık mı döngülü mü",
        ],
        p: ["Kasa ölçüleri ürüne göre yapıldığından sabit bir liste yoktur; ölçü ve adetle teklif alın."],
        links: [["Ambalaj paleti", "/urunler/ambalaj-paleti/"]],
      },
      {
        h: "Sipariş ve teslimat",
        steps: [
          "Ürün ölçüsünü, ağırlığını ve adedi iletin.",
          "Kasa tipi, malzeme ve net fiyat teklifle bildirilir.",
          "Üretim sonrası Gebze deposundan teslim veya Türkiye geneli sevkiyat; süre ölçü ve adede göre teklifte yazılır.",
        ],
        links: [["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Tahta kasa ile ahşap sandık aynı mı?", a: "Benzer ürünlerdir. Ahşap sandık daha çok makine ve ihracat için kapalı ambalajı anlatır; tahta kasa ise parça ve ürün taşıma ve depolama amaçlı kasaları kapsar." },
      { q: "Tahta kasa ölçüye özel yapılır mı?", a: "Evet; ürün boyutu ve yüke göre ölçülendirilir ve takviyelenir." },
      { q: "Tahta kasa ihracatta kullanılır mı?", a: "Ham kereste kullanılıyorsa ISPM-15 uyumlu HT damgalı kereste gerekir. Kontrplak ve OSB genelde kapsam dışındadır; alıcı şartını kontrol edin." },
      { q: "Üst üste istiflenebilir mi?", a: "Köşe takozlu ve takviyeli tasarımda evet. İstif yüksekliği ve alt kasanın taşıyabileceği yük hesaba katılmalıdır." },
    ],
  },

  {
    slug: "ihracat-sandigi-kasasi",
    name: "İhracat Kasası",
    title: "İhracat Kasası: ISPM-15 Uyumlu Ahşap Kasa | MEPAL",
    description:
      "İhracat kasası: ISPM-15 uyumlu HT damgalı ahşap kasa, konteyner ölçüsüne göre tasarım, kapalı ve kafes tipler. Gebze'den ölçüye özel teklif.",
    h1: "İhracat Kasası: ISPM-15 Uyumlu Ahşap Kasa",
    answer:
      "İhracat kasası, yurt dışına gönderilecek ürünün taşıma sırasında korunması için ISPM-15 kurallarına uygun HT damgalı ahşaptan yapılan kasadır. Konteyner veya tır iç ölçüsüne, ürün ağırlığına ve hedef ülkenin şartlarına göre tasarlanır. Isıl işlem MEPAL tesisinde yapılmaz.",
    keyword: "ihracat kasası",
    art: "crate",
    blurb: "ISPM-15 uyumlu HT damgalı ahşap ihracat kasası: konteynere göre ölçüye özel.",
    specs: [
      ["Tip", "Kapalı kasa, kafes veya çerçeveli kasa"],
      ["Malzeme", "ISPM-15 uyumlu HT damgalı kereste; kontrplak veya OSB panel"],
      ["Isıl işlem", "Çekirdek sıcaklığı en az 56 °C, en az 30 dakika (HT)"],
      ["Damga", "IPPC işareti, ülke kodu (TR), üretici numarası, HT"],
      ["Ölçü", "Ürüne ve konteyner/tır iç ölçüsüne göre özel"],
      ["Konteyner iç ölçüsü (yaklaşık)", "20 ft: yaklaşık 5,9 × 2,35 × 2,39 m; 40 ft: yaklaşık 12,0 × 2,35 × 2,39 m"],
      ["Opsiyonel", "Su geçirmez örtü, nem alıcı, iç destek"],
    ],
    uses: ["Makine ve ekipman ihracatı", "Konteyner ve tır ile yurt dışı sevkiyat", "Kırılgan ve değerli ürün", "Fuar ve proje malzemesi", "Deniz ve karayolu ihracatı"],
    related: ["ahsap-sandik", "ihracat-paleti", "tahta-kasa", "ozel-olcu-palet", "isil-islemli-palet"],
    guides: ["ihracatta-palet-ve-ambalaj-kurallari", "ispm-15-nedir", "konteynere-ve-tira-kac-palet-sigar", "1-tir-kac-palet-alir"],
    sections: [
      {
        h: "İhracat kasası ne işe yarar?",
        p: [
          "Yurt dışına giden ürün, kamyon, depo, liman ve konteyner boyunca birçok kez yük değiştirir. İhracat kasası ürünü darbe, nem ve istif basıncına karşı korurken, alıcı ülkenin ahşap ambalaj kurallarını da karşılar.",
          "Kasa ve palet aynı ihracat paketinin parçalarıdır: kasanın tabanı palet veya kızak olur; ISPM-15 koşulu hepsini kapsar.",
        ],
        links: [["İhracat paleti", "/urunler/ihracat-paleti/"], ["Ahşap sandık", "/urunler/ahsap-sandik/"]],
      },
      {
        h: "ISPM-15 kuralları kısaca",
        table: {
          head: ["Konu", "Kural (özet)"],
          rows: [
            ["Kapsam", "Ham kereste ahşap ambalaj; kasa, palet, takoz, destek"],
            ["Isıl işlem (HT)", "Çekirdek sıcaklığı en az 56 °C, en az 30 dakika"],
            ["Damga", "IPPC işareti, ülke kodu, üretici numarası, işlem kodu (HT)"],
            ["Kapsam dışı", "Kontrplak, OSB gibi işlenmiş paneller; yaklaşık 6 mm ve altı ince ahşap"],
            ["Risk", "Damgasız veya uyumsuz ambalaj sınırda reddedilebilir, geri çevrilebilir"],
          ],
        },
        p: [
          "MEPAL kendi fırınında ısıl işlem yapmaz; ISPM-15 uyumlu, HT damgalı kereste ile kasa temin eder. Hedef ülkenin ek şartı olabileceğinden önceden kontrol edin.",
        ],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"], ["İhracatta palet ve ambalaj kuralları", "/rehber/ihracatta-palet-ve-ambalaj-kurallari/"]],
      },
      {
        h: "Tasarımda dikkat edilecekler",
        list: [
          "Kasa dış ölçüsü, konteyner kapı ve iç boyutuna uygun olmalı",
          "Ağırlık merkezi ve forklift çatal girişi önceden belirlenmeli",
          "Ürün kasanın içinde sabitlenmeli; kayma ve titreşim önlenmeli",
          "Deniz yolculuğunda nem ve terleme için örtü ve nem alıcı düşünülmeli",
          "Kasa, istiflenecekse alt kasanın yükü hesaplanmalı",
          "Gerekli damga ve işaretler dışarıdan okunaklı olmalı",
        ],
        links: [["Konteyner palet hesaplama", "/araclar/konteyner-palet-hesaplama/"]],
      },
      {
        h: "İhracat kasası ile ahşap sandık farkı",
        p: [
          "İki ürün büyük ölçüde örtüşür. Ahşap sandık sayfası kapalı ve kafes sandık yapısını ve genel kullanımı anlatır; bu sayfa ise yurt dışına sevk eden işletmelerin ISPM-15 uyumu, konteyner planı ve gümrük odaklı ihtiyaçlarına yöneliktir.",
        ],
        links: [["Ahşap sandık", "/urunler/ahsap-sandik/"], ["Tahta kasa", "/urunler/tahta-kasa/"]],
      },
      {
        h: "Sipariş ve teslimat",
        steps: [
          "Ürün ölçüsünü, ağırlığını, hedef ülkeyi ve sevkiyat şeklini (konteyner, tır) iletin.",
          "Kasa tipi, malzeme, damga durumu ve net fiyat teklifle bildirilir.",
          "Üretim sonrası Gebze deposundan teslim veya Türkiye geneli sevkiyat; süre ölçü ve adede göre teklifte yazılır.",
        ],
        links: [["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "İhracat kasası için ISPM-15 zorunlu mu?", a: "Ham kereste kasa ve palet için çoğu ülkede zorunludur. Kontrplak ve OSB gibi işlenmiş paneller genellikle kapsam dışıdır; alıcı ülkenin şartını önceden kontrol edin." },
      { q: "Isıl işlemi siz mi yapıyorsunuz?", a: "Hayır. MEPAL ısıl işlemi kendi tesisinde yapmaz; ISPM-15 uyumlu, HT damgalı kereste ile kasa temin eder." },
      { q: "Kasa ölçüsü konteynere göre mi belirlenir?", a: "Evet. Ürün ve kasa ölçüsü, konteyner veya tır iç boyutuna ve yükleme planına göre belirlenir." },
      { q: "İhracat kasası ile ihracat paleti arasındaki fark nedir?", a: "Palet yük platformudur; kasa ürünü çepeçevre koruyan, palet veya kızak üzerine kurulu ambalajdır." },
    ],
  },
];
