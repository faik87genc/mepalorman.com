import type { Guide } from "@/lib/types";

// Rakip analizi turunda eklenen rehber yazıları (week: 13)
export const guidesC: Guide[] = [
  {
    slug: "ahsap-palet-nedir",
    title: "Ahşap Palet Nedir? Yapısı, Türleri | MEPAL",
    description: "Ahşap palet nedir, nasıl yapılır, hangi türleri var? Yapı, ölçü, taşıma kapasitesi ve doğru palet seçimi için kısa, net rehber.",
    h1: "Ahşap Palet Nedir?",
    answer:
      "Ahşap palet, yükün forklift veya transpalet ile kaldırılıp taşınabilmesi için yük altına konan, kereste parçalarından oluşan taşıma platformudur. Üst yüzey tahtaları, bloklar veya kızaklar ve alt tahtalardan oluşur. Ölçü, yapı ve durumuna göre türlere ayrılır; en yaygını 80x120 Euro ölçülü palettir.",
    keyword: "ahşap palet nedir",
    art: "wood",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 13,
    readMinutes: 5,
    related: ["palet-cesitleri-ve-secimi", "euro-palet-olculeri", "palet-kac-kg-tasir", "ahsap-palet-mi-plastik-palet-mi"],
    sections: [
      {
        h: "Ahşap palet neyi çözer?",
        p: [
          "Depoda ya da fabrikada yüklerin tek tek elle taşınması hem yavaştır hem de hasara açıktır. Ahşap palet, kolileri, çuvalları veya parçaları tek bir yük birimi hâline getirir. Forklifti paletin altına sokarsınız, bütün yük bir hamlede kalkar. Böylece yükleme, boşaltma ve depolama süresi kısalır, ürün zemine değmediği için nemden ve kirden de korunur.",
          "Ahşap, palet malzemeleri arasında en yaygın olanıdır. Sebebi basit: kereste kolay bulunur, işlenmesi kolaydır, hasar gören tahta değiştirilerek palet onarılabilir ve ömrünü tamamlayan palet geri dönüşüme verilebilir.",
        ],
      },
      {
        h: "Bir ahşap paletin parçaları",
        p: ["Standart bir ahşap palet birkaç temel parçadan oluşur. Parçaların kalınlığı ve sayısı taşıma kapasitesini doğrudan etkiler."],
        table: {
          caption: "Ahşap palet parçaları ve görevleri",
          head: ["Parça", "Görevi", "Dikkat edilecek nokta"],
          rows: [
            ["Üst yüzey tahtaları", "Yükü doğrudan taşır", "Tahta aralığı ve kalınlığı yükün cinsine uygun olmalı"],
            ["Bloklar (ayaklar) veya kızaklar", "Üst ve alt katmanı birbirine bağlar, çatal girişini sağlar", "Çatlak veya çürük blok paleti yük altında güvensiz kılar"],
            ["Alt tahtalar", "Yükü zemine yayar, transpalet tekerlerinin geçişini sağlar", "Kırık alt tahta transpalet kullanımını zorlaştırır"],
            ["Çiviler", "Parçaları bir arada tutar", "Çakılmış, dışarı taşmayan ve paslanmamış olmalı"],
          ],
        },
      },
      {
        h: "Ahşap palet türleri",
        p: ["Ahşap paletler birkaç ölçüte göre sınıflandırılır. Alıcının işine yarayan ayrımlar şunlardır:"],
        list: [
          "Ölçüye göre: Euro ölçülü 80x120, endüstriyel 100x120, kimya sektöründe yaygın 114x114 (CP) ve büyük hacimli yükler için 145x145 gibi standart ölçüler; bunların dışında özel ölçülü paletler",
          "Durumuna göre: sıfır, ikinci el 1. sınıf, ikinci el 2. sınıf",
          "Girişe göre: iki yönden veya dört yönden çatal girişli",
          "Kullanım amacına göre: iç piyasa paleti ve ISPM-15 uyumlu, HT damgalı ihracat paleti",
          "Yapıya göre: bloklu (ayaklı) ve kızaklı palet",
        ],
        links: [
          ["Euro palet (80x120)", "/urunler/80x120-euro-palet/"],
          ["Palet çeşitleri ve seçimi", "/rehber/palet-cesitleri-ve-secimi/"],
        ],
      },
      {
        h: "Euro palet standardı neden bu kadar yaygın?",
        p: [
          "Euro ölçülü palet 800 x 1200 mm taban ölçüsüne ve yaklaşık 144 mm yüksekliğe sahiptir. Dört yönden çatallanabilir, raf sistemleri ve kamyon kasaları bu ölçüye göre planlanmıştır. Bu yüzden aynı palet farklı firmalar arasında dolaşabilir ve ikinci el piyasasında hızlı alıcı bulur.",
          "EPAL tescilli bir markadır. MEPAL olarak EPAL ölçülerinde Euro palet temin eder ve ikinci el EPAL palet alım-satımı yaparız; lisanslı EPAL üretimi iddiamız yoktur.",
        ],
        links: [["Euro palet ölçüleri rehberi", "/rehber/euro-palet-olculeri/"], ["EPAL palet", "/urunler/epal-palet/"]],
      },
      {
        h: "Taşıma kapasitesi ve ömür",
        p: [
          "Bir paletin kaç kilo taşıyacağı tek bir sabit değildir. Kapasite; tahta kalınlığına, blok sayısına, kerestenin kalitesine ve yükün paleti nasıl yüklediğine bağlıdır. Statik (yerde duran), dinamik (hareket hâlindeki) ve raf yükü ayrı değerlerdir ve ayrı hesaplanır. Raf sistemlerinde palet iki kirişin üzerine oturduğu için orta bölgesi daha çok zorlanır.",
          "Ömür ise kullanım koşullarına bağlıdır. Doğru istiflenen, yağmurdan korunan ve forklift darbesi görmeyen palet uzun süre görev yapar. Kırık tahta zamanında değiştirilirse palet yeniden sevkiyat dolaşımına girebilir.",
        ],
        links: [["Palet kaç kg taşır?", "/rehber/palet-kac-kg-tasir/"], ["Palet tamiri", "/hizmetler/palet-tamiri/"]],
      },
      {
        h: "Sıfır mı, ikinci el mi?",
        p: [
          "Sıfır palet tutarlı görünüm ve tam ömür sunar; gıda, otomatik hat ve ihracat gibi hassas kullanımlarda tercih edilir. İkinci el palet ise birim maliyeti belirgin biçimde düşürür ve yurt içi sevkiyat, depolama gibi işlerde yeterlidir. Seçim, yükün değerine, müşterinin paleti geri verip vermeyeceğine ve ürünün gideceği yere bağlıdır.",
          "Güncel birim fiyat için ölçü ve adet bilgisiyle WhatsApp'tan teklif isteyebilirsiniz.",
        ],
        links: [["Ahşap palet fiyatları", "/ahsap-palet-fiyatlari/"], ["Sıfır ahşap palet", "/urunler/sifir-ahsap-palet/"], ["Teklif al", "/teklif-al/"]],
      },
      {
        h: "Doğru ahşap paleti seçmek için kontrol listesi",
        steps: [
          "Yükün ölçüsünü ve ağırlığını belirleyin; palet yükün dışına taşmamalı.",
          "Kullanılacağı ortamı düşünün: raf, kamyon, konteyner veya otomatik hat.",
          "İhracat yapacaksanız ISPM-15 uyumlu, HT damgalı palet isteyin.",
          "Sıfır veya ikinci el kararını verin; ikinci elde sınıfı sorun.",
          "Adedi ve düzenli ihtiyacı belirtin; toplu alımda fiyat kademesi değişir.",
        ],
        links: [["Palet seçici aracı", "/araclar/palet-secici/"], ["İkinci el palet", "/urunler/ikinci-el-palet/"]],
      },
    ],
    faq: [
      { q: "Ahşap palet ile Euro palet aynı şey mi?", a: "Hayır. Euro palet, ahşap paletlerin belirli bir ölçüsüdür (80x120). Her ahşap palet Euro palet değildir; 100x120, 114x114 ve özel ölçülü ahşap paletler de vardır." },
      { q: "Ahşap palet kaç yıl dayanır?", a: "Sabit bir yıl söylemek doğru olmaz. Ömür; kullanım yoğunluğuna, yüke, depolama koşullarına ve onarıma bağlıdır. Düzenli bakım ve kırık tahta değişimi ömrü belirgin biçimde uzatır." },
      { q: "Ahşap palet ihracatta kullanılabilir mi?", a: "Evet, ancak ISPM-15 uyumlu ve HT damgalı olması gerekir. Biz ISPM-15 uyumlu, HT damgalı ihracat paleti temin ediyoruz." },
      { q: "Ahşap palet geri dönüştürülebilir mi?", a: "Evet. Sağlam olanlar yeniden kullanılır, onarılabilenler tamir edilir, hurdaya çıkanlar ahşap atık olarak geri dönüşüme verilir." },
      { q: "Ahşap palet mi plastik palet mi almalıyım?", a: "Kısa ve orta vadeli genel sevkiyatta ahşap daha düşük ilk maliyetlidir. Hijyen ve kapalı devre kullanımda plastik avantaj sağlayabilir. Ayrıntılar için ilgili karşılaştırma rehberine bakabilirsiniz." },
    ],
  },
  {
    slug: "sifir-palet-mi-ikinci-el-palet-mi",
    title: "Sıfır Palet mi İkinci El Palet mi? | MEPAL",
    description: "Sıfır palet mi ikinci el palet mi? Maliyet, ömür, güvenlik ve kullanım alanına göre karşılaştırma ve karar rehberi.",
    h1: "Sıfır Palet mi, İkinci El Palet mi?",
    answer:
      "İç piyasada sevkiyat ve depolama için çoğu işletmede iyi durumdaki ikinci el palet yeterlidir ve maliyeti belirgin biçimde düşürür. Gıda, ihracat, otomatik hat ve müşterinin palet kalitesini denetlediği işlerde sıfır palet daha doğru seçimdir. Karar yükün değerine ve paletin geri dönüp dönmeyeceğine bağlıdır.",
    keyword: "sıfır palet mi ikinci el palet mi",
    art: "used",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 13,
    readMinutes: 5,
    related: ["ikinci-el-palet-alirken-dikkat-edilecekler", "palet-kalite-siniflari", "palet-maliyetini-dusurmenin-yollari", "ahsap-palet-mi-plastik-palet-mi"],
    sections: [
      {
        h: "Karar neden önemli?",
        p: [
          "Palet, ürününüzün etiketinde görünmeyen ama maliyetine giren bir kalemdir. Yüksek adetli sevkiyat yapan bir işletmede sıfır ile ikinci el arasındaki fark yıl sonunda ciddi bir bütçe farkına dönüşür. Öte yandan yanlış seçilmiş ikinci el palet, yük altında kırılıp ürün hasarına ve müşteri şikâyetine yol açabilir.",
          "Doğru karar, her iş için tek bir cevap vermez. Aşağıdaki ölçütlere göre kendi durumunuzu tartın.",
        ],
      },
      {
        h: "Karşılaştırma tablosu",
        table: {
          caption: "Sıfır ve ikinci el ahşap palet",
          head: ["Ölçüt", "Sıfır palet", "İkinci el palet"],
          rows: [
            ["Birim maliyet", "Daha yüksek", "Belirgin biçimde daha düşük"],
            ["Görünüm ve standartlık", "Aynı ölçü ve yapı, tutarlı", "Sınıfa göre değişir"],
            ["Kalan ömür", "Tam ömür", "Sınıfa ve onarım durumuna bağlı"],
            ["Taşıma güvenliği", "Yük altında öngörülebilir", "Sınıf ve kontrole bağlı"],
            ["Koku, nem, leke", "Genellikle sorun yok", "Kontrol edilmeli"],
            ["Otomatik hat uyumu", "Uygun", "Tahta ve çivi durumuna göre sorunlu olabilir"],
            ["Geri dönüş değeri", "İkinci el olarak satılabilir", "Düşük; hurda veya tamire gidebilir"],
          ],
        },
      },
      {
        h: "Sıfır palet ne zaman daha mantıklı?",
        list: [
          "Gıda, ilaç ve temas hassasiyeti olan ürünlerde; koku, leke ve kalıntı riski istenmiyorsa",
          "İhracatta; ISPM-15 uyumlu, HT damgalı ve düzgün görünümlü palet beklentisi varsa",
          "Otomatik depo ve hat sistemlerinde; ölçü toleransı ve düz yüzey gerekiyorsa",
          "Ağır veya değerli yüklerde; palet kırılma riskinin yük maliyetine göre kabul edilemediği durumlarda",
          "Müşterinin palet kalitesini şartname ile belirlediği tedarik zincirlerinde",
        ],
        links: [["Sıfır ahşap palet", "/urunler/sifir-ahsap-palet/"], ["İhracat paleti", "/urunler/ihracat-paleti/"]],
      },
      {
        h: "İkinci el palet ne zaman yeterli?",
        p: [
          "Yurt içi sevkiyatta, fabrika içi depolamada ve paletin müşteride kalacağı ya da geri dönmeyeceği işlerde ikinci el palet çoğunlukla yeterlidir. Paleti müşteriden geri alıp tekrar kullanabilen işletmelerde de ikinci el palet kendini hızla amorti eder.",
          "Ancak ikinci el kavramı tek tip değildir. Sağlam, onarılmış 1. sınıf palet ile yerli kullanım için uygun 2. sınıf palet arasında hem görünüm hem dayanım farkı vardır. Satın alırken sınıfı açıkça belirttirin.",
        ],
        links: [["İkinci el palet", "/urunler/ikinci-el-palet/"], ["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"]],
      },
      {
        h: "Gerçek maliyeti nasıl hesaplarsınız?",
        p: ["Yalnızca etiket fiyatına bakmak yanıltıcıdır. Karşılaştırmada şu kalemleri birlikte düşünün:"],
        steps: [
          "Birim satın alma fiyatı: ilgili ürün için WhatsApp'tan güncel fiyat alın.",
          "Paletin kaç sevkiyat dönmesini bekliyorsunuz? Dönmeyen paletin maliyeti her sevkiyata tam yazılır.",
          "Hasar ve iade riski: kırılan palet nedeniyle zarar gören ürünün maliyeti.",
          "Onarım ve ayıklama emeği: ikinci elde depoya girişte kontrol gerekir.",
          "Elde kalan değer: kullanım sonunda paletin satılabilirliği veya hurda değeri.",
        ],
        links: [["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"], ["Ahşap palet fiyatları", "/ahsap-palet-fiyatlari/"]],
      },
      {
        h: "Karma strateji: ikisini birlikte kullanmak",
        p: [
          "Birçok işletme tek tip seçmek yerine karma çalışır. İhracat ve hassas müşteriler için sıfır palet, iç sevkiyat ve depo içi hareket için ikinci el palet kullanır. Bu yaklaşım hem kalite şartını karşılar hem de toplam palet bütçesini düşürür.",
          "Ayrıca elinizde biriken, tamirle kurtarılabilecek paletleri onartıp tekrar dolaşıma sokmak da üçüncü bir maliyet düşürme yoludur.",
        ],
        links: [["Palet tamiri", "/hizmetler/palet-tamiri/"], ["Palet maliyetini düşürmenin yolları", "/rehber/palet-maliyetini-dusurmenin-yollari/"]],
      },
      {
        h: "Teklif alırken ne belirtmelisiniz?",
        p: [
          "Net teklif için ölçü, sıfır veya ikinci el tercihi (ikinci elde sınıf), yaklaşık adet, teslim adresi ve ihracat kullanımı olup olmadığı yeterlidir. WhatsApp veya teklif formu üzerinden bilgi göndermeniz yeterlidir; stok durumuna göre net fiyat ve teslim planı iletilir.",
        ],
        links: [["Teklif al", "/teklif-al/"], ["Palet seçici", "/araclar/palet-secici/"]],
      },
    ],
    faq: [
      { q: "İkinci el palet sıfırdan ne kadar ucuz?", a: "Fark ölçüye, sınıfa ve adede göre değişir; kesin oran söylemek yerine aynı ölçünün sıfır ve ikinci el fiyatını WhatsApp'tan birlikte istemenizi öneririz." },
      { q: "İkinci el palet ihracatta kullanılabilir mi?", a: "Kullanılabilmesi için ISPM-15 uyumlu ve HT damgalı olması, ayrıca varış ülkesi ve alıcı şartlarına uygun görünümde olması gerekir. Emin değilseniz sıfır ihracat paleti daha güvenli bir tercihtir." },
      { q: "İkinci el paletin kalitesini nasıl anlarım?", a: "Blok ve kızakların bütünlüğüne, kırık veya çatlak tahtalara, çürük, küf ve kokuya, dışarı taşan çivilere bakın. Sınıf bilgisini satıcıdan yazılı isteyin." },
      { q: "Karışık sipariş verebilir miyim?", a: "Evet. Sıfır ve ikinci el paletleri aynı teklifte isteyebilirsiniz; ölçü ve adetleri belirtmeniz yeterlidir." },
      { q: "Elimdeki ikinci el paletleri size satabilir miyim?", a: "Evet. Sağlam ve onarılabilir paletlerin alımını yapıyoruz. Fotoğraf göndererek ön değerlendirme alabilirsiniz." },
    ],
  },
  {
    slug: "palet-fiyatlarini-etkileyen-faktorler",
    title: "Palet Fiyatlarını Etkileyen Faktörler | MEPAL",
    description: "Palet fiyatını ölçü, malzeme, sınıf, adet, ISPM-15 ve kereste piyasası nasıl etkiler? Teklifi doğru karşılaştırmanın yolları.",
    h1: "Palet Fiyatlarını Etkileyen Faktörler",
    answer:
      "Palet fiyatı tek bir sebeple belirlenmez; malzeme, ölçü, sıfır veya ikinci el durumu, sınıf, taşıma kapasitesi, ISPM-15 gereksinimi, sipariş adedi, kereste piyasası ve teslimat şekli birlikte etkili olur. İki teklifi karşılaştırmadan önce bu kalemlerin aynı olduğundan emin olmak gerekir.",
    keyword: "palet fiyatlarını etkileyen faktörler",
    art: "big",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 13,
    readMinutes: 6,
    related: ["palet-maliyetini-dusurmenin-yollari", "palet-kalite-siniflari", "ahsap-palet-mi-plastik-palet-mi", "ispm-15-nedir"],
    sections: [
      {
        h: "Aynı görünen iki palet neden farklı fiyatlanır?",
        p: [
          "Piyasada iki teklif alıp farklı fiyatlarla karşılaşmak olağandır. Bunun nedeni çoğu zaman firmaların keyfî davranması değil, paletlerin aynı olmamasıdır. Aynı 80x120 ölçüsündeki iki palet; tahta kalınlığı, kereste kalitesi, bloğun yapısı, sınıfı ve ısıl işlem durumu bakımından birbirinden çok farklı olabilir.",
          "Bu yazıda fiyatı belirleyen unsurları sırayla ele alıyoruz. Güncel fiyat için WhatsApp'tan yazabilirsiniz; burada rakam değil mantık anlatılır.",
        ],
      },
      {
        h: "Fiyatı etkileyen ana faktörler",
        table: {
          caption: "Faktör ve etkisi",
          head: ["Faktör", "Fiyatı nasıl etkiler?", "Alıcı ne sormalı?"],
          rows: [
            ["Malzeme", "Plastik palet ilk alımda ahşaptan yüksektir; plastikte hafif ve ağır hizmet ayrı gruptur", "Kullanım ömrü ve dönüş sayısı"],
            ["Ölçü", "80x120 yaygın ve hazır bulunur; 100x120, 114x114, 145x145 ve özel ölçüler ayrı fiyatlanır", "Standart ölçü yeterli mi?"],
            ["Durum ve sınıf", "Sıfır en yüksek, ikinci el 1. sınıf ve 2. sınıf kademeli düşer", "Sınıf yazılı belirtilmiş mi?"],
            ["Taşıma kapasitesi", "Tahta kalınlığı, blok sayısı ve takviye maliyeti artırır", "Gerçek yük ve raf koşulu ne?"],
            ["ISPM-15 / HT", "Isıl işlemli, damgalı palet standart palete göre farklı fiyatlanır", "İhracat için gerekli mi?"],
            ["Sipariş adedi", "Adet arttıkça birim fiyat düşer", "Düzenli ihtiyaç var mı?"],
            ["Kereste piyasası", "Hammadde fiyatı zamanla değişir, palet fiyatına yansır", "Teklif ne kadar süre geçerli?"],
            ["Teslimat", "Depodan teslim mi, adrese sevkiyat mı; mesafe ve araç planı", "Nakliye teklife dahil mi?"],
          ],
        },
      },
      {
        h: "Ölçü ve yapı: standart ölçü neden avantajlıdır?",
        p: [
          "Euro ölçülü 80x120 palet piyasada çok bulunduğu için tedariki kolay, stok devri hızlıdır. Bu da fiyatı sabit tutar. Özel ölçülü palette ise kesim, tasarım ve çoğu zaman minimum parti mantığı devreye girer; bu yüzden fiyat ölçüye, yüke ve adede göre ayrıca hesaplanır.",
          "Ölçüyü seçerken yükün palet dışına taşmaması, raf ve araç kasasındaki yerleşimin verimli olması gerekir. Gereksiz büyük veya küçük seçilen ölçü, palet fiyatından çok nakliye ve depolama maliyetine yansır.",
        ],
        links: [["Euro palet fiyatları", "/euro-palet-fiyatlari/"], ["Özel ölçülü palet", "/urunler/ozel-olcu-palet/"]],
      },
      {
        h: "Sınıf ve durum: ikinci elde en büyük fark",
        p: [
          "Sıfır palet tek bir kalite çizgisindedir. İkinci elde ise fiyat; sağlam ve onarılmış 1. sınıf ile yalnızca yerli kullanıma uygun 2. sınıf arasında belirgin biçimde değişir. Sınıfı yazılı olarak sormak, düşük fiyatlı teklifin ardında düşük kalite olup olmadığını anlamanın en kolay yoludur.",
        ],
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"], ["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"]],
      },
      {
        h: "ISPM-15 ve ihracat gereksinimi",
        p: [
          "İhracatta ahşap ambalaj malzemesinin ISPM-15 standardına uygun işlem görmüş ve damgalı olması gerekir. Bu işlem ve belgelendirme palete ek maliyet getirir. İhracat yapmıyorsanız bu özelliği taşıyan palete ödeme yapmanıza gerek yoktur; ihracat yapıyorsanız standart paletle yola çıkmak ise gümrükte ciddi sorun doğurabilir.",
        ],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"], ["İhracat paleti", "/urunler/ihracat-paleti/"]],
      },
      {
        h: "Adet, düzenli alım ve teslimat",
        p: [
          "Fiyat; küçük, orta ve büyük sipariş adedine göre değişir. Adet arttıkça birim fiyat düşer; düzenli ve planlı alımlarda ayrıca teklif hazırlanabilir. Teslimatta ise depodan kendi aracınızla alım ile adrese sevkiyat arasında fark vardır. Nakliye, adrese, adede ve araç planına göre teklifte ayrıca bildirilir.",
          "Hizmet alanımız Türkiye geneli olup depomuz Gebze'dedir; Kocaeli ve İstanbul'a teslimat en hızlı yapılan bölgelerdir.",
        ],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"], ["Palet fiyatları", "/palet-fiyatlari/"]],
      },
      {
        h: "Teklifleri karşılaştırma kontrol listesi",
        steps: [
          "Ölçü ve tip aynı mı (ör. 80x120 Euro ölçülü, 9 ayaklı)?",
          "Sıfır mı, ikinci el mi; ikinci elde sınıf yazılı mı?",
          "ISPM-15 / HT damga gerekli ve teklifte var mı?",
          "Fiyat KDV hariç mi dahil mi, adet kademesi nedir?",
          "Nakliye dahil mi, teslim yeri ve tarihi nedir?",
          "Teklif geçerlilik süresi ne kadar?",
        ],
        links: [["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Palet fiyatları neden sürekli değişiyor?", a: "Ağırlıklı olarak kereste ve ham madde piyasasındaki değişim, mevsim ve talep yoğunluğu fiyata yansır. Bu yüzden büyük siparişte güncel teklif almak gerekir." },
      { q: "Fiyatlara nakliye dahil mi?", a: "Palet fiyatı ile nakliye ayrı hesaplanır. Nakliye, adrese, adede ve araç planına göre teklifte ayrıca bildirilir." },
      { q: "Toplu alımda indirim alabilir miyim?", a: "Evet. Birim fiyat adet kademesine göre düşer; çok büyük veya düzenli alımlar için ayrıca teklif hazırlanır." },
      { q: "Özel ölçülü paletin fiyatı neden hazır değil?", a: "Çünkü ölçü, yük ve adede göre ayrı hesaplanır. Ölçü ve yük bilgisini paylaştığınızda teklif verilir." },
      { q: "En düşük fiyatlı teklifi seçmek doğru mu?", a: "Teklifler aynı ölçü, sınıf ve özelliklerde ise doğrudur. Sınıf veya tahta kalınlığı farklıysa düşük fiyat çoğu zaman düşük dayanıma işaret eder." },
    ],
  },
  {
    slug: "ikinci-el-palet-guvenli-mi",
    title: "İkinci El Palet Güvenli mi? | MEPAL",
    description: "İkinci el palet güvenli mi? Yük taşıma, hijyen ve ihracat açısından riskler, kontrol noktaları ve ne zaman sıfır palet gerektiği.",
    h1: "İkinci El Palet Güvenli mi?",
    answer:
      "Doğru sınıflandırılmış, kontrol edilmiş ve gerekirse onarılmış ikinci el palet yurt içi sevkiyat ve depolama için güvenle kullanılabilir. Güvenliği paletin ikinci el olması değil, durumu belirler: çatlak blok, kırık tahta, çürüme ve kalıntı varsa palet kullanılmamalıdır. Gıda ve ihracatta ek dikkat gerekir.",
    keyword: "ikinci el palet güvenli mi",
    art: "used",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 13,
    readMinutes: 5,
    related: ["ikinci-el-palet-alirken-dikkat-edilecekler", "palet-kalite-siniflari", "gida-sektoru-icin-palet-secimi", "ispm-15-nedir"],
    sections: [
      {
        h: "Güvenlik neyle ölçülür?",
        p: [
          "İkinci el palet kendi başına riskli ya da güvenli değildir. Güvenlik üç şeye bağlıdır: yapısal sağlamlık, hijyen durumu ve kullanım amacına uygunluk. Yapısı sağlam, temiz ve işin gerektirdiği özellikleri taşıyan bir ikinci el palet, kötü seçilmiş bir sıfır paletten daha güvenli olabilir.",
          "Asıl risk, sınıflandırılmamış, kontrolsüz ve nereden geldiği belli olmayan paletlerin toplu alınmasıdır. Bu nedenle güvenlik sorusunun cevabı, satın alma sürecinde ne kadar kontrol yaptığınızla ilgilidir.",
        ],
      },
      {
        h: "Yapısal güvenlik kontrol noktaları",
        table: {
          caption: "İkinci el palette yapısal kontrol",
          head: ["Kontrol noktası", "Kabul edilebilir", "Reddedilmeli"],
          rows: [
            ["Bloklar / kızaklar", "Bütün, sağlam bağlı", "Çatlak, parçalanmış, gevşek"],
            ["Üst yüzey tahtaları", "Küçük aşınma, yerinde", "Kırık, eksik veya yırtılmış tahta"],
            ["Alt tahtalar", "Sağlam, transpalet geçişi rahat", "Kırık veya içeri sarkan"],
            ["Çiviler", "Gömülü, paslanmamış", "Dışarı taşan, gevşek çivi"],
            ["Çürüme ve küf", "Yok", "Elle bastırınca yumuşayan alanlar, küf"],
            ["Eğilme", "Düz oturuyor", "Orta bölgede belirgin çökme"],
          ],
        },
        links: [["İkinci el palet alırken dikkat edilecekler", "/rehber/ikinci-el-palet-alirken-dikkat-edilecekler/"]],
      },
      {
        h: "Hijyen ve gıda sektörü",
        p: [
          "Gıda ve ilaç gibi hassas sektörlerde asıl risk yapıdan çok kalıntıdır. Daha önce kimyasal, yağ veya gıda ürünüyle temas etmiş bir palet koku ve lekeyle yeni yükü kirletebilir. Bu sektörlerde çoğunlukla sıfır ahşap veya yıkanabilir plastik palet tercih edilir; ikinci el kullanılacaksa kaynağının, geçmiş kullanımının ve temizliğinin bilinmesi gerekir.",
          "Yağ, kimyasal veya gıda bulaşmış palet ise hiçbir koşulda kullanılmamalı; atık mevzuatına uygun biçimde bertaraf edilmelidir.",
        ],
        links: [["Gıda sektörü için palet seçimi", "/rehber/gida-sektoru-icin-palet-secimi/"], ["Plastik palet", "/urunler/plastik-palet/"]],
      },
      {
        h: "İhracatta ikinci el palet",
        p: [
          "Ahşap ambalaj malzemesiyle yapılan ihracatta ISPM-15 kuralları geçerlidir. Paletin uygun ısıl işlem görmüş ve damgalı olması gerekir; damgası okunmayan, silinmiş veya şüpheli palet gümrükte sorun çıkarabilir. Alıcı firmalar ayrıca palet görünümü ve kalitesi konusunda ek şart koyabilir.",
          "Bu nedenle ihracat sevkiyatlarında genellikle sıfır, ISPM-15 uyumlu ve HT damgalı palet tercih edilir.",
        ],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"], ["İhracat paleti", "/urunler/ihracat-paleti/"]],
      },
      {
        h: "Güvenli ikinci el palet alma adımları",
        steps: [
          "Sınıfı yazılı sorun: 1. sınıf mı, 2. sınıf mı?",
          "Ölçü ve tipi netleştirin; yük ve raf için uygun olduğundan emin olun.",
          "Partiden rastgele örnek paletleri tek tek kontrol edin.",
          "Koku, leke ve nem belirtilerine bakın.",
          "Gerekirse onarılmış palet isteyin; tamirin kim tarafından yapıldığını öğrenin.",
          "İhracat veya hassas kullanımsa sıfır paleti değerlendirin.",
        ],
        links: [["İkinci el palet", "/urunler/ikinci-el-palet/"], ["Palet tamiri", "/hizmetler/palet-tamiri/"]],
      },
      {
        h: "Fiyat avantajı güvenlikten ödün vermek demek değil",
        p: [
          "İkinci el palet tercihinin amacı, kalite düşürmek değil birim maliyeti düşürmektir. Sınıflandırılmış ve kontrol edilmiş partide fiyat avantajı güvenlikle çelişmez. Kriter net: paleti yükünüzle birlikte emniyetle taşıyabiliyorsa kullanın, taşıyamıyorsa fiyatı ne olursa olsun kullanmayın.",
          "Güncel fiyatları ikinci el palet fiyat sayfasında bulabilir, ölçü ve adet bilgisiyle teklif isteyebilirsiniz.",
        ],
        links: [["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "İkinci el palet yük altında kırılır mı?", a: "Sağlam blok ve tahtalara sahip, sınıfı doğru belirlenmiş palet sorun çıkarmaz. Çatlak blok, kırık tahta veya çürüme varsa kırılma riski artar; bu paletler kullanılmamalıdır." },
      { q: "İkinci el palet gıdada kullanılabilir mi?", a: "Temas riski ve kalıntı nedeniyle çoğu gıda işletmesi sıfır ahşap veya plastik palet tercih eder. İkinci el kullanılacaksa kaynağı ve temizliği net olmalıdır." },
      { q: "İkinci el paletin ISPM-15 damgası olmak zorunda mı?", a: "İhracatta evet. Yurt içi sevkiyatta zorunlu değildir ancak uyumlu ve damgası okunur palet ihracata hazır olması açısından avantajdır." },
      { q: "Onarılmış palet güvenli mi?", a: "Kırık tahtası yenisiyle değiştirilmiş, bloğu sağlam palet güvenle kullanılabilir. Blok veya kızağı hasarlı palet onarılsa da tercih edilmemelidir." },
      { q: "Kaç sınıf var, hangisini almalıyım?", a: "Genellikle 1. ve 2. sınıf ayrımı yapılır. Daha titiz kullanımlarda 1. sınıf, yerli ve basit sevkiyatta 2. sınıf yeterli olabilir. Ayrıntı için kalite sınıfları rehberine bakın." },
    ],
  },
  {
    slug: "ahsap-palet-geri-donusum",
    title: "Ahşap Palet Geri Dönüşüm Yolları | MEPAL",
    description: "Ahşap palet geri dönüşümü nasıl yapılır? Yeniden kullanım, tamir, ikinci el satış ve hurda değerlendirme seçenekleri, adım adım.",
    h1: "Ahşap Palet Geri Dönüşümü: Seçenekler ve Süreç",
    answer:
      "Ahşap palet ömrünü tamamladığında çöpe gitmek zorunda değildir. Önce yeniden kullanım, sonra tamir, sonra ikinci el satış, en son hurda olarak ahşap atık geri dönüşümü sıralaması izlenir. Böylece hem atık azalır hem de palet stokundan değer elde edilir.",
    keyword: "ahşap palet geri dönüşüm",
    art: "scrap",
    published: "2026-10-25",
    updated: "2026-10-25",
    week: 13,
    readMinutes: 5,
    related: ["hurda-paletinizi-nasil-degerlendirirsiniz", "palet-omru-nasil-uzatilir", "palet-maliyetini-dusurmenin-yollari", "ikinci-el-palet-alirken-dikkat-edilecekler"],
    sections: [
      {
        h: "Geri dönüşümün sırası: önce ömrü uzatın",
        p: [
          "Ahşap palet geri dönüşümü denince akla çoğunlukla paletin parçalanıp yakıt veya levha hammaddesi olması gelir. Oysa bu, sıranın son adımıdır. Palet ekonomisinin temel kuralı, paletin mümkün olan en uzun süre palet olarak kullanılmasıdır. Çünkü bir paleti yeniden kullanmak, onu parçalayıp başka ürüne dönüştürmekten hem daha az enerji hem de daha fazla değer sağlar.",
          "Bu yüzden elinizdeki palet yığınına bakarken ilk soru geri dönüşüm değil, paletin hâlâ palet olarak işe yarayıp yaramayacağıdır.",
        ],
      },
      {
        h: "Dört aşamalı değerlendirme",
        table: {
          caption: "Palet durumuna göre değerlendirme yolu",
          head: ["Aşama", "Palet durumu", "Ne yapılır?"],
          rows: [
            ["1. Yeniden kullanım", "Sağlam, hasarsız", "Aynı işte kullanılır veya ikinci el olarak satılır"],
            ["2. Tamir", "Birkaç tahta kırık, blok sağlam", "Kırık parçalar değiştirilir, palet dolaşıma döner"],
            ["3. Parça geri kazanımı", "Kısmen hasarlı", "Sağlam tahta ve bloklar sökülüp tamirde kullanılır"],
            ["4. Hurda / atık", "Parçalanmış, çürük, kullanılamaz", "Ahşap atık olarak geri dönüşüme verilir"],
          ],
        },
        links: [["Palet tamiri", "/hizmetler/palet-tamiri/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"]],
      },
      {
        h: "Hurda ahşap palet nereye gider?",
        p: [
          "Gerçekten kullanılamayan palet ahşap atık olarak toplanır. Bu atığın değerlendirildiği alanlar genellikle şunlardır: talaş ve yonga olarak levha ve panel üretimi, enerji amaçlı kullanım ve bazı durumlarda hayvan altlığı gibi ikincil ürünler. Hangi yolun seçileceği; ahşabın temizliğine, boyalı veya kimyasal bulaşmış olup olmadığına ve alıcının tesisine bağlıdır.",
          "Yağ, boya veya kimyasal bulaşmış ahşap, normal ahşap atıkla karıştırılmamalı; mevzuata uygun şekilde ayrı değerlendirilmelidir. Bu ayrım hem çevre hem de alıcının işleyebilmesi açısından önemlidir.",
        ],
      },
      {
        h: "İşletmeniz için pratik süreç",
        steps: [
          "Depodaki paletleri sağlam, tamirlik ve hurda olarak üçe ayırın.",
          "Sağlamları ölçü ve sınıfa göre gruplandırın; ikinci el olarak satışa hazırlayın.",
          "Tamirliği ayırın; kendi tamirinizi yapıyorsanız onarın, yoksa tamir hizmeti alın.",
          "Hurdayı temiz (kimyasal, yağ bulaşmamış) ve bulaşmış olarak ayırın.",
          "Fotoğraf gönderip ön değerlendirme isteyin; adet ve yükleme koşullarını belirtin.",
          "Alıcı, paletleri yerinde görüp yükleme yapar; kalan atığın akıbeti netleşir.",
        ],
        links: [["Fotoğraftan palet değerleme", "/araclar/fotograftan-palet-degerleme/"], ["Hurda paletinizi nasıl değerlendirirsiniz?", "/rehber/hurda-paletinizi-nasil-degerlendirirsiniz/"]],
      },
      {
        h: "Geri dönüşümün işletmeye faydası",
        list: [
          "Depo alanı açılır; biriken hurda palet yığını yangın ve düzensizlik riski yaratır",
          "Sağlam paletler ikinci el olarak satılarak gelir sağlar",
          "Tamir edilen paletler yeni palet alım ihtiyacını azaltır",
          "Atık yönetimi ve sürdürülebilirlik hedeflerine katkı sağlar",
          "Düzenli toplama anlaşmasıyla palet akışı planlı hâle gelir",
        ],
        links: [["Palet maliyetini düşürmenin yolları", "/rehber/palet-maliyetini-dusurmenin-yollari/"]],
      },
      {
        h: "Hurdanın değerini ne belirler?",
        p: [
          "Hurda ve ikinci el palet alımında tek bir sabit değer yoktur. Değeri parti büyüklüğü, ölçü ve tip, sağlam palet oranı, nem ve kirlilik durumu, ayrıştırılmışlık ve yükleme koşulları birlikte belirler. Paletleri önceden ayırmış, kuru ve erişimi kolay bir parti her zaman daha iyi değerlendirilir.",
          "Düzenli palet çıkaran işletmeler için periyodik alım planı yapılabilir.",
        ],
        links: [["Hurda palet fiyatları", "/hurda-palet-fiyatlari/"], ["Palet alım satım", "/hizmetler/palet-alim-satim/"]],
      },
      {
        h: "Palet ömrünü uzatarak atığı azaltmak",
        p: [
          "En iyi geri dönüşüm, hiç atık oluşturmamaktır. Paletleri yağmurdan koruyun, doğru istifleyin, forklift çatalını doğru açıyla sokun ve kırık tahtayı geciktirmeden değiştirin. Bu basit alışkanlıklar palet ömrünü belirgin biçimde uzatır ve hem alım hem atık maliyetini düşürür.",
        ],
        links: [["Palet ömrü nasıl uzatılır?", "/rehber/palet-omru-nasil-uzatilir/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Ahşap palet yakılabilir mi?", a: "Ahşap atığın yakılması çevre mevzuatına tabidir ve her yer uygun değildir. Hurda paletleri yetkili alıcıya vermek veya geri dönüşüme yönlendirmek daha doğrudur." },
      { q: "Hurda palet için ödeme alır mıyım?", a: "Partiye bağlıdır. Sağlam veya onarılabilir palet oranı yüksek, temiz ve ayrıştırılmış partilerde değer oluşur. Fotoğraf göndererek ön değerlendirme alabilirsiniz." },
      { q: "Kimyasal bulaşmış palet geri dönüştürülebilir mi?", a: "Normal ahşap atıkla karıştırılmamalıdır. Bu paletler mevzuata uygun şekilde ayrı bertaraf edilmelidir; alıcıya durumu önceden bildirin." },
      { q: "Paletleri sizin yerinizden toplamanız mümkün mü?", a: "Evet, adet ve konuma göre yerinden alım planlanabilir. Hizmet alanımız Türkiye geneli olup depomuz Gebze'dedir; Kocaeli ve İstanbul'da planlama en hızlıdır." },
      { q: "Kırık paleti atmak yerine tamir etmek mantıklı mı?", a: "Blok ve kızaklar sağlamsa, kırık tahtaları değiştirmek genellikle yeni palet almaktan daha ekonomiktir. Özel ve tek seferlik ölçülerde alıcı bulmak zor olduğundan değerlendirme gerekir." },
    ],
  },
];
