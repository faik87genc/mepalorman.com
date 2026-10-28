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
];
