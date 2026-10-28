import type { Service } from "@/lib/types";

// Ek hizmet sayfaları (/hizmetler/<slug>/): hasarli-palet-alimi, kirik-palet-alimi
export const extraServices: Service[] = [
  {
    slug: "hasarli-palet-alimi",
    name: "Hasarlı Palet Alımı",
    title: "Hasarlı Palet Alımı ve Tamire Uygun Palet | MEPAL",
    description: "Kısmen hasarlı, tamire elverişli paletlerinizi sınıflayıp satın alıyoruz. Kırık tahta, çatlak takoz, eğilmiş palet için fotoğrafla ön değerleme.",
    h1: "Hasarlı Palet Alımı: Tamire Elverişli Paletlerinizi Değerlendirin",
    answer:
      "Hasarlı palet, kırık bir tahtası, çatlak bir takozu veya eğilmiş parçası olan ama büyük kısmı sağlam kalan paletlerdir. Bu paletleri sınıflayıp tamire elverişli olanları satın alıyor, onarıp yeniden satışa hazırlıyoruz. Fotoğraf gönderin, hangi paletin tamir, hangisinin geri dönüşüm olduğunu birlikte ayıralım.",
    keyword: "hasarlı palet alımı",
    art: "used",
    blurb: "Kısmen hasarlı, tamire elverişli paletler sınıflanır, onarılır ve yeniden satışa verilir.",
    related: ["hurda-palet-alimi", "palet-tamiri", "palet-alim-satim", "ikinci-el-palet"],
    guides: ["hasarli-ve-kirik-palet-ne-yapilir", "palet-kalite-siniflari", "palet-omru-nasil-uzatilir", "hurda-paletinizi-nasil-degerlendirirsiniz", "ikinci-el-palet-alirken-dikkat-edilecekler"],
    sections: [
      {
        h: "Hasarlı palet ne demektir?",
        p: [
          "Her çatlak ya da kırık paleti hurdaya çıkarmak gerekmez. Üst yüzeyde tek bir tahtası kırılmış, bir ayağı gevşemiş veya forklift darbesiyle hafif eğilmiş bir palet çoğu zaman birkaç parça değişimiyle yeniden sevkiyata girebilir. Biz bu grubu “hasarlı palet” olarak ayırıyoruz.",
          "Yapısı bütünüyle dağılmış, birden fazla takozu çürümüş veya ana kirişi ikiye ayrılmış paletler ise bu grubun dışındadır; onlar kırık palet ve ahşap atık olarak ayrı değerlendirilir.",
        ],
        links: [["Kırık palet alımı", "/hizmetler/kirik-palet-alimi/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"]],
      },
      {
        h: "Hangi hasarlar tamire elverişlidir?",
        p: ["Aşağıdaki tablo, sahada en sık karşılaştığımız hasar tiplerini ve genel değerlendirme eğilimini gösterir. Son karar paletin elimize alınmasıyla verilir."],
        table: {
          caption: "Hasar tipine göre tamir değerlendirmesi",
          head: ["Hasar tipi", "Genel durum", "Olağan sonuç"],
          rows: [
            ["Üst veya alt yüzeyde kırık tahta", "Taşıyıcı yapı sağlam", "Tahta değişimiyle tamir"],
            ["Çatlak takoz (ayak)", "Çatlak yüzeysel ve çivi tutuyorsa", "Takoz değişimi veya takviye"],
            ["Eğilmiş tahta, hafif çarpma izi", "Palet düz duruyor", "Düzeltme veya tahta değişimi"],
            ["Çivi çıkmış, gevşeyen birleşim", "Ahşap sağlam", "Yeniden çakım"],
            ["Birden fazla çürük takoz", "Taşıyıcı yapı zayıf", "Genelde tamire uygun değil"],
            ["Kiriş kırığı veya palet bükülmesi", "Yük taşıma güvenliği tehlikede", "Parça kaynağı veya geri dönüşüm"],
          ],
        },
      },
      {
        h: "Sınıflama, tamir ve yeniden satış mantığı",
        p: [
          "Aldığımız hasarlı paletler önce ölçü ve tipine göre ayrılır, ardından hasar derecesine göre gruplanır. Tamir maliyeti, paletin yeniden satış değerinin makul bir bölümünde kalıyorsa palet onarıma gönderilir; değilse parça kaynağı olarak kullanılır veya geri dönüşüme yönlendirilir.",
          "Onarılan paletler ikinci el sınıf kriterlerine göre yeniden sınıflanır ve alım-satım dolaşımına girer. Böylece sizin için atıl bir kalem olan palet, başka bir işletme için kullanılabilir stok olur.",
        ],
        steps: [
          "Ölçü ve tipe göre ayrıştırma (Euro, 100x120, CP, özel ölçü).",
          "Hasar derecesine göre gruplama: hafif, orta, ağır.",
          "Hafif ve orta hasarlı paletlerin tamire alınması.",
          "Ağır hasarlı paletlerin parça kaynağı veya geri dönüşüm olarak ayrılması.",
          "Onarılan paletlerin sınıflanıp satışa hazırlanması.",
        ],
        links: [["Palet tamiri", "/hizmetler/palet-tamiri/"], ["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"]],
      },
      {
        h: "Teklifi hangi unsurlar etkiler?",
        p: ["Hasarlı palet alım teklifi tek bir birim değerden değil, partinin bileşiminden çıkar. Etkili olan başlıca unsurlar:"],
        list: [
          "Partideki tamire elverişli palet oranı",
          "Palet tipi ve ölçüsü; standart Euro ölçülü paletler özel ölçüye göre daha kolay yeniden satılır",
          "Hasarın türü ve gerekecek tahta, takoz sayısı",
          "Ahşabın kuruluğu, çürüme ve küf durumu",
          "Toplam adet ve yükleme kolaylığı",
          "Paletlerde yağ, kimyasal veya ürün kalıntısı bulunup bulunmadığı",
        ],
        links: [["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
      {
        h: "Alım öncesi nasıl hazırlanmalısınız?",
        list: [
          "Sağlam, hasarlı ve tamamen kırık paletleri mümkünse ayrı istiflere ayırın.",
          "Üzerlerindeki streç, çember ve ürün artıklarını temizleyin.",
          "Palet tiplerini ve yaklaşık adetlerini not edin.",
          "Her gruptan ve toplu istifin genelinden birkaç fotoğraf çekin.",
          "Araç girişi, yükleme alanı ve çatallı ekipman durumunu bildirin.",
        ],
        p: ["Fotoğraflarınızı palet değerleme aracına yükleyerek ön değerleme başlatabilir veya WhatsApp üzerinden gönderebilirsiniz. Ön değerleme bağlayıcı değildir."],
        links: [["Fotoğraftan palet değerleme", "/araclar/fotograftan-palet-degerleme/"]],
      },
      {
        h: "Hizmet alanı ve randevu",
        p: ["Depomuz Gebze'dedir; Gebze, Dilovası, Çayırova, Tuzla ve İstanbul Anadolu yakasındaki tesislerden araç programına göre kısa sürede alım planlanır. Yeterli miktarda partiler için Türkiye genelinde de çalışılır. Net gün ve saat teklifte birlikte belirlenir."],
        links: [["Gebze palet", "/bolge/gebze-palet/"], ["Yerinde palet toplama", "/hizmetler/yerinde-palet-toplama/"]],
      },
    ],
    faq: [
      { q: "Hasarlı palet ile hurda palet arasındaki fark nedir?", a: "Hasarlı palet küçük onarımla yeniden kullanılabilen paletlerdir. Hurda veya kırık palet ise yapısı bozulmuş, tamiri ekonomik olmayan paletlerdir ve ahşap atık olarak değerlendirilir." },
      { q: "Karışık bir partiyi tek seferde verebilir miyim?", a: "Evet. Sağlam, hasarlı ve kırık paletler aynı partide olabilir; biz yerinde ayrıştırırız. Önceden ayırmanız değerlendirmeyi hızlandırır ve teklifi netleştirir." },
      { q: "Hangi hasarlı paletleri almıyorsunuz?", a: "Yoğun yağ veya kimyasal bulaşmış, küflenmiş ya da yapısı tamamen dağılmış paletler her zaman alım kapsamına girmeyebilir. Durumu önceden bildirirseniz size uygun yolu söyleriz." },
      { q: "Teklif nasıl belirleniyor?", a: "Palet tipi, hasar türü, tamire elverişli palet oranı, adet ve konum birlikte değerlendirilir. Güncel fiyat için teklif alın; rakamlar partinin durumuna göre değişir." },
      { q: "Tamir ettiğiniz paletler ihracatta kullanılabilir mi?", a: "Onarılmış ikinci el paletler iç piyasa için uygundur. İhracat için ISPM-15 uyumlu, HT damgalı palet temini ayrıca yapılır; tamir edilmiş paletler bu amaçla önerilmez." },
    ],
  },
  {
    slug: "kirik-palet-alimi",
    name: "Kırık Palet Alımı",
    title: "Kırık Palet Alımı ve Toplu Yerinde Yükleme | MEPAL",
    description: "Kullanılamaz durumdaki kırık ve parçalanmış paletleri toplu olarak yerinizden alıyoruz. Ahşap atık geri dönüşümü, fiyat faktörleri, hazırlık adımları.",
    h1: "Kırık Palet Alımı: Parçalanmış Paletler İçin Toplu Alım",
    answer:
      "Tamiri mümkün olmayan, parçalanmış veya çürümüş kırık paletleri toplu halde ve tesisinizden yükleyerek alıyoruz. Alınan ahşap, geri dönüşüm zincirine yönlendirilir. Teklif; adet, ahşap durumu, kirlilik ve yükleme kolaylığına göre verilir.",
    keyword: "kırık palet alımı",
    art: "scrap",
    blurb: "Kullanılamaz durumdaki kırık paletler toplu alınır; ahşap atık geri dönüşüme verilir.",
    related: ["hurda-palet-alimi", "yerinde-palet-toplama", "palet-alim-satim", "toptan-palet"],
    guides: ["hasarli-ve-kirik-palet-ne-yapilir", "hurda-paletinizi-nasil-degerlendirirsiniz", "ahsap-palet-geri-donusum", "palet-kalite-siniflari", "palet-maliyetini-dusurmenin-yollari"],
    sections: [
      {
        h: "Kırık palet ne zaman “kırık” sayılır?",
        p: [
          "Bir palet tek tahtası kırıldı diye kırık sayılmaz. Taşıyıcı kirişleri ve takozları dağılmış, yüzeyindeki tahtaların çoğu kopmuş veya ahşabı çürümüş paletler kullanılamaz kabul edilir. Bu paletleri yeniden palet yapmak yerine ahşap hammadde olarak değerlendirmek daha doğrudur.",
          "Sınır belirsizse paletinizi önce hasarlı palet grubunda değerlendirebiliriz; tamire elverişli olanlar ayrılır, kalanlar bu hizmetin kapsamına girer.",
        ],
        links: [["Hasarlı palet alımı", "/hizmetler/hasarli-palet-alimi/"]],
      },
      {
        h: "Kırık paletlerden ne yapılır?",
        list: [
          "Kullanılabilir tahta ve takozlar söküp ayrılarak tamir stokuna katılır.",
          "Temiz ahşap, geri dönüşüm tesislerine ve ahşap hammadde kullanan işletmelere yönlendirilir.",
          "Çürük, küflü veya kirlenmiş parçalar atık mevzuatına uygun şekilde ayrı değerlendirilir.",
          "Çivi ve metal aksam ayrıştırılır.",
        ],
        p: ["Amaç, depolarda yer kaplayan kırık paletleri tek seferde ve düzenli biçimde tesisinizden çıkarmaktır."],
        links: [["Ahşap palet geri dönüşümü", "/rehber/ahsap-palet-geri-donusum/"]],
      },
      {
        h: "Toplu alım ve yerinde yükleme",
        p: [
          "Kırık palet alımında hacim önemlidir: birkaç palet için araç göndermek verimli olmaz. Bu yüzden hizmet, belirli bir miktarın üzerindeki partiler veya düzenli çıkış yapan işletmeler için tasarlanmıştır.",
          "Araç tesisinize gelir, paletler sizin gösterdiğiniz alandan yüklenir. İsterseniz periyodik alım planlanır; böylece kırık paletler depoda birikmez. Yeterli miktar olduğunda Türkiye genelinde planlı alım da yapılır.",
        ],
        links: [["Yerinde palet toplama", "/hizmetler/yerinde-palet-toplama/"], ["Palet nakliye ve lojistik", "/hizmetler/palet-nakliye-lojistik/"]],
      },
      {
        h: "Kırık palet alımı nasıl fiyatlanır?",
        p: ["Teklifte tek bir birim değer yoktur; parti şu faktörlere göre değerlendirilir ve rakam teklifte yazılır:"],
        table: {
          caption: "Teklifi etkileyen faktörler",
          head: ["Faktör", "Neden önemli?"],
          rows: [
            ["Toplam adet ve hacim", "Büyük partilerde araç ve yükleme verimi artar"],
            ["Ahşabın durumu", "Kuru ve temiz ahşap geri dönüşümde daha değerlidir"],
            ["Kirlilik ve yabancı madde", "Yağ, kimyasal, plastik ve metal artıkları ayrıştırma maliyeti getirir"],
            ["Sökülebilir parça oranı", "Kullanılabilir tahta ve takoz çıkıyorsa teklif lehine olur"],
            ["Palet ölçüsü ve cinsi", "Standart ölçülü paletlerden daha çok parça kazanılır"],
            ["Konum ve yükleme koşulları", "Araç erişimi, rampa ve çatallı ekipman süreyi belirler"],
            ["Düzenli çıkış", "Periyodik alım planlanabilir"],
          ],
        },
        links: [["Hurda palet fiyatları", "/hurda-palet-fiyatlari/"]],
      },
      {
        h: "Hazırlık adımları",
        steps: [
          "Kırık paletleri sağlam olanlardan ayırın ve ayrı bir alana toplayın.",
          "Streç, çember, kağıt ve ürün artıklarını temizleyin.",
          "Yağlı veya kimyasal bulaşmış paletleri ayrıca not edin.",
          "Yaklaşık adedi ve istifin geneli ile yakından birkaç fotoğraf çekin.",
          "Araç giriş yolunu, yükleme alanını ve ekipman durumunu bildirin.",
          "Teklifi onayladıktan sonra yükleme gün ve saatini birlikte belirleyin.",
        ],
        links: [["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Kırık paleti ücretsiz mi alıyorsunuz?", a: "Koşullar partinin adedine, ahşap durumuna ve yükleme şartlarına göre değişir. Bazı partilerde alım bedeli ödenir, bazılarında yalnızca ücretsiz toplama yapılır; her durum teklifte açıkça yazılır." },
      { q: "En az kaç palet için araç gönderiyorsunuz?", a: "Net bir alt limit bölgeye ve araç programına göre değişir. Adedi ve konumu bildirirseniz size uygun olup olmadığını söyleriz." },
      { q: "Yükleme için personel veya ekipman gerekli mi?", a: "Çatallı ekipmanınız varsa yüklemeyi hızlandırır. Yoksa durumu önceden bildirin, yükleme planı buna göre yapılır." },
      { q: "Yağlı veya kimyasal bulaşmış kırık paletleri alıyor musunuz?", a: "Her zaman değil. Bu paletler için önce durumu bildirmenizi rica ederiz; kapsam ve koşullar teklifte netleştirilir." },
      { q: "Düzenli kırık palet çıkışımız var, periyodik alım mümkün mü?", a: "Evet. Aylık veya haftalık çıkış yapan işletmeler için periyodik alım planlanabilir; sıklık ve koşullar görüşmede belirlenir." },
    ],
  },
];
