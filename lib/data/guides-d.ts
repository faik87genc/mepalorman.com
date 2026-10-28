import type { Guide } from "@/lib/types";

// Palet terimleri ve karar rehberleri (week: 25-29)
export const guidesD: Guide[] = [
  {
    slug: "cakma-epal-nedir",
    title: "Çakma EPAL Ne Demek? Damga Nasıl Okunur | MEPAL",
    description: "Çakma EPAL ne demek, EPAL damgası nasıl okunur, sahte ile EPAL ölçülü palet nasıl ayırt edilir? Riskler ve doğru tercih için rehber.",
    h1: "Çakma EPAL Nedir? EPAL Damgası Nasıl Okunur?",
    answer:
      "“Çakma EPAL” piyasada, 80x120 Euro ölçüsünde olup EPAL lisansı ve damgası bulunmayan paletler için kullanılan günlük bir ifadedir; bazen de damgası taklit edilmiş paletleri anlatır. Gerçek EPAL paleti damga düzeninden, tahta ve takoz yapısından anlaşılır. Her iş için gerçek EPAL gerekmez; ama ne aldığınızı bilmek şarttır.",
    keyword: "çakma epal nedir",
    art: "euro",
    published: "2026-10-28",
    updated: "2026-10-28",
    week: 25,
    readMinutes: 7,
    related: ["epal-palet-ile-standart-palet-farki", "euro-palet-olculeri", "palet-kalite-siniflari", "eur-palet-nedir", "orta-palet-ve-kalin-orta-palet-farki"],
    sections: [
      {
        h: "Çakma EPAL ne demek?",
        p: [
          "Palet alım-satımında “çakma epal” ifadesi tek bir resmî tanıma sahip değildir; satıcıdan satıcıya anlamı biraz değişir. En sık iki durum için kullanılır. Birincisi, ölçüsü ve görünümü Euro palete benzeyen ama EPAL sistemine bağlı üretilmemiş, damgasız ya da farklı damgalı 80x120 paletlerdir. İkincisi ise gerçek bir EPAL damgasını taklit eden, yani kasıtlı olarak yanıltıcı olan paletlerdir.",
          "İki durum arasında büyük fark var. Birincisi çoğu zaman dürüstçe satılan, iç piyasada işini gören bir üründür. İkincisi ise bir damga sahteciliğidir ve kimseye tavsiye edilmez. Bu rehberde ikisini birbirinden ayırmayı anlatıyoruz.",
          "Bir hatırlatma: EPAL tescilli bir markadır. MEPAL olarak EPAL ölçülerinde Euro palet temin eder ve ikinci el EPAL palet alım-satımı yaparız; lisanslı EPAL üretimi yaptığımızı iddia etmeyiz.",
        ],
      },
      {
        h: "Gerçek EPAL paleti nasıl bir palettir?",
        p: [
          "EPAL paleti, Euro palet standardı olan 800 x 1200 mm taban ölçüsüne ve yaklaşık 144 mm yüksekliğe sahiptir. Dokuz bloktan (takoz) oluşur, dört yönden çatal alır ve belirli tahta sayısı ile kalınlığı kurallara bağlanmıştır. Üretim ve onarım, EPAL tarafından yetkilendirilmiş tesislerde, belirli kalite denetimiyle yapılır.",
          "Bu yüzden EPAL paleti diğer Euro ölçülü paletlerden yalnızca ölçüyle değil, üretim disipliniyle ayrılır. Ölçü aynı olabilir; ancak kereste kalitesi, çivi tipi ve tahta kalınlığı garanti altında değildir.",
        ],
        links: [["EPAL palet", "/urunler/epal-palet/"], ["Euro palet ölçüleri", "/rehber/euro-palet-olculeri/"]],
      },
      {
        h: "EPAL damgası nasıl okunur?",
        p: ["Gerçek EPAL paletinde damgalar belirli bloklarda yer alır. Aşağıdaki tablo genel düzeni özetler; ayrıntılar için her zaman EPAL'in yayımladığı güncel kuralları esas alın."],
        table: {
          caption: "EPAL palette damga bölgeleri (genel düzen)",
          head: ["Bölge", "Beklenen işaret", "Ne anlatır?"],
          rows: [
            ["Uzun kenarın bir yan bloğu", "EPAL logosu", "Palet EPAL sistemine aittir"],
            ["Karşı yan blok", "EUR işareti", "Euro palet standardı"],
            ["Orta blok", "Üretici veya onarım tesisi kodu, yıl bilgisi", "İzlenebilirlik sağlar"],
            ["Isıl işlem damgası (varsa)", "IPPC/ISPM-15 işareti", "İhracatta kabul edilen işlem kodu"],
          ],
        },
      },
      {
        h: "Sahte veya çakma paleti nasıl ayırt edersiniz?",
        p: ["Tek bir işarete bakmak yetmez; birkaç ipucunu birlikte değerlendirin:", "Şüpheniz kalırsa, damgalı palet fotoğrafını satıcıdan yazılı olarak “EPAL mi, EPAL ölçülü mü” sorusuyla birlikte istemek yeterli bir ilk filtredir."],
        list: [
          "Damga bulanık, silik, eğri veya her blokta farklı tarzda basılmışsa şüphelenin.",
          "Damga yazı karakterleri ve oval çerçevesi resmî örneğe benzemiyorsa dikkat edin.",
          "Orta blokta üretici veya onarım kodu hiç yoksa ya da anlamsızsa tek başına delil değildir ama uyarı sayılır.",
          "Tahtalar ince, farklı kalınlıkta veya kereste kalitesiz görünüyorsa palet standart dışıdır.",
          "Blok sayısı veya tahta düzeni Euro paletin yapısına uymuyorsa damga ne olursa olsun palet standart değildir.",
          "Palet ölçüsü 800x1200 mm'den belirgin sapıyorsa Euro palet değildir.",
          "Fiyat piyasa aralığından belirgin düşükse nedenini sorun.",
        ],
        links: [["EPAL ile standart palet farkı", "/rehber/epal-palet-ile-standart-palet-farki/"]],
      },
      {
        h: "Çakma EPAL'in riskleri",
        list: [
          "İhracatta ret: EPAL şartı koyan alıcılar damgasını taklit eden paleti kabul etmeyebilir, sevkiyat geri dönebilir.",
          "Taşıma güvenliği: ince veya zayıf kerestelerden yapılmış palet, raf yükünde ya da istifte kırılabilir.",
          "Palet havuzu uyumsuzluğu: gerçek EPAL paletleri takas sisteminde dolaşır; damgasız palet bu sisteme giremez.",
          "Hukuki risk: tescilli bir damganın taklit edilmesi marka ihlalidir; sahte damgalı palet kullanan taraf da zor durumda kalabilir.",
          "Yanlış fiyat algısı: gerçek EPAL fiyatı ödeyip standart dışı palet almak, aradaki farkı kaybetmek demektir.",
        ],
      },
      {
        h: "Ne zaman çakma EPAL (damgasız Euro ölçülü palet) tercih edilebilir?",
        p: [
          "Damgasız ama dürüstçe satılan 80x120 palet, her işte kötü bir tercih değildir. Kapalı devre çalışan, paleti müşteriden geri almayan veya paleti tek kullanımlık görünen işletmeler için maliyet açısından mantıklı olabilir. Bu durumda satıcının paleti “EPAL değil, Euro ölçülü” diye açıkça sunması gerekir.",
          "Buna karşın EPAL belgesi şart koşulan sevkiyatlarda, palet havuzu ya da takas anlaşmalarında veya yüksek raf yükünde gerçek EPAL tercih edilmelidir. İhracat paletleri için ayrıca ISPM-15 uyumlu, HT damgalı palet temini gerekir.",
        ],
        table: {
          caption: "Hangi durumda hangi palet?",
          head: ["Kullanım", "Önerilen palet", "Not"],
          rows: [
            ["Fabrika içi kapalı devre taşıma", "Damgasız Euro ölçülü veya ikinci el palet", "Maliyet öne çıkar"],
            ["Müşteriye bırakılan tek yönlü sevkiyat", "Euro ölçülü palet", "Tahta kalınlığına dikkat"],
            ["EPAL şartı olan alıcı veya palet takası", "Gerçek EPAL veya ikinci el EPAL", "Damgayı kontrol edin"],
            ["Yurt dışı ihracat", "ISPM-15 uyumlu, HT damgalı palet", "EPAL şartı varsa ayrıca sorun"],
            ["Ağır raf yükü", "EPAL veya kalın tahtalı palet", "Kapasiteyi yazılı alın"],
          ],
        },
        links: [["Çakma EPAL palet ürün sayfası", "/urunler/cakma-epal-palet/"], ["İhracat paleti", "/urunler/ihracat-paleti/"]],
      },
      {
        h: "Terimleri karıştırmayın: çakma EPAL, EPAL ölçülü, ikinci el EPAL",
        p: [
          "Satış görüşmelerinde dört ifade sık birbirine karışır. Karışıklık size fiyat farkı olarak geri döner; çünkü aynı ölçüdeki paletlerin değeri damgaya ve kondisyona göre belirgin biçimde ayrışır.",
        ],
        table: {
          caption: "Palet terimleri ve EPAL takasındaki durumları",
          head: ["İfade", "Ne anlatır?", "EPAL takasına girer mi?"],
          rows: [
            ["Gerçek (sıfır) EPAL", "Lisanslı tesiste üretilmiş, damgalı palet", "Evet"],
            ["İkinci el EPAL", "Gerçek EPAL damgalı, kullanılmış ve gerekirse onarılmış palet", "Damga ve kondisyon şartı sağlanıyorsa evet"],
            ["EPAL ölçülü / damgasız palet", "80x120 ölçüde ama damgasız palet; piyasada çoğunlukla “çakma EPAL” denir", "Hayır"],
            ["Taklit damgalı palet", "Damgası sonradan basılmış ya da benzetilmiş palet", "Hayır; hukuki risk taşır"],
          ],
        },
        links: [["İkinci el EPAL ve EPAL ölçülü palet", "/urunler/epal-palet/"], ["İkinci el Euro palet", "/urunler/ikinci-el-euro-palet/"]],
      },
      {
        h: "Siparişte ve şartnamede neyi yazılı hale getirmelisiniz?",
        p: [
          "Dürüst bir tedarikçi damgasız paleti damgasız olarak tanıtır; “EPAL” kelimesini yalnızca damgası doğrulanabilen palet için kullanır. Yine de uyuşmazlığı baştan önlemek sizin elinizdedir.",
        ],
        list: [
          "Satın alma siparişine “EPAL damgalı” ya da “80x120 ölçülü, damga şartı yok” ifadelerinden hangisi geçerliyse onu aynen yazın.",
          "Kabul kriterlerini belirleyin: damga okunabilirliği, tahta ve blok durumu, sınıf (sıfır, 1. sınıf, 2. sınıf).",
          "Teslimatta partiden rastgele birkaç paleti damga ve yapı yönünden inceleyin; tek bir iyi örnek tüm partiyi temsil etmez.",
          "Uygunsuz çıkan palet için iade veya değişim koşulunu önceden yazılı hale getirin.",
          "İhracat varsa ISPM-15 HT damgasını EPAL şartından bağımsız olarak ayrıca kontrol edin.",
        ],
        links: [["EUR palet nedir?", "/rehber/eur-palet-nedir/"]],
      },
      {
        h: "Satın alırken ne sormalısınız?",
        steps: [
          "Palet gerçek EPAL mi, yoksa EPAL ölçülü mü? Yazılı olarak teyit isteyin.",
          "Damga fotoğrafını ve orta blok kodunu isteyin.",
          "Tahta kalınlığı ve blok yapısı hakkında bilgi alın.",
          "Palet sınıfını (1. sınıf, 2. sınıf, sıfır) sorun.",
          "Kullanım amacınızı (iç piyasa, ihracat, raf) satıcıya söyleyin.",
        ],
        p: ["Güncel fiyatlar için palet fiyatları sayfamıza bakabilir veya teklif alabilirsiniz."],
        links: [["Euro palet fiyatları", "/euro-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Çakma EPAL yasa dışı mı?", a: "Damgasız ve EPAL olduğu iddia edilmeden satılan Euro ölçülü palet yasa dışı değildir. Sahte EPAL damgası basılması ise marka ihlalidir." },
      { q: "Çakma EPAL ile ikinci el EPAL aynı şey mi?", a: "Hayır. İkinci el EPAL, gerçek bir EPAL paletidir ve kullanılmıştır. Çakma EPAL ise EPAL sistemine bağlı olmayan paletlere denir." },
      { q: "Çakma EPAL ihracatta kullanılabilir mi?", a: "Alıcı EPAL şartı koymuyorsa ve palet ISPM-15 uyumlu, HT damgalıysa kullanılabilir. EPAL şartı varsa kullanılamaz." },
      { q: "Damga olmadan gerçek EPAL anlaşılır mı?", a: "Damgasız bir paletin gerçek EPAL olduğunu söylemek mümkün değildir. EPAL paleti damgalarıyla tanınır." },
    ],
  },
  {
    slug: "orta-palet-ve-kalin-orta-palet-farki",
    title: "Orta Palet ve Kalın Orta Palet Farkı | MEPAL",
    description: "Orta palet ve kalın orta palet nedir, farkları nelerdir, hangi yük ve işte hangisi seçilmeli? Tahta kalınlığı, dayanım ve kullanım rehberi.",
    h1: "Orta Palet ve Kalın Orta Palet Arasındaki Fark",
    answer:
      "Orta palet ve kalın orta palet, ikinci el palet piyasasında kullanılan günlük sınıflardır; resmî bir standart değildir. Genel olarak orta palet ortalama kalınlıkta tahtalara, kalın orta palet ise daha kalın ve dayanıklı tahtalara sahip paletleri anlatır. Sınıf adı satıcıdan satıcıya değiştiği için tahta kalınlığını ve durumu yerinde kontrol etmek gerekir.",
    keyword: "orta palet kalın orta palet farkı",
    art: "used",
    published: "2026-10-28",
    updated: "2026-10-28",
    week: 26,
    readMinutes: 5,
    related: ["palet-kalite-siniflari", "ikinci-el-palet-alirken-dikkat-edilecekler", "palet-kac-kg-tasir", "cakma-epal-nedir", "palet-cesitleri-ve-secimi"],
    sections: [
      {
        h: "Orta palet nedir?",
        p: [
          "Palet alım-satımında “orta palet” ifadesi, tahtaları çok ince olmayan ama gerçek bir Euro palet kadar kalın da olmayan, genellikle 80x120 ölçülü ikinci el paletleri anlatmak için kullanılır. Bir standart adı değildir; sektör içinde yerleşmiş bir sınıflamadır.",
          "Bu sınıfın amacı alıcıya kabaca bir fikir vermektir: ince palet hafif ve ekonomik yükler için, orta palet günlük sevkiyat için, kalın orta palet ise daha ağır veya daha çok kullanılacak işler için düşünülür.",
        ],
        links: [["Orta palet ürün sayfası", "/urunler/orta-palet/"], ["İkinci el palet", "/urunler/ikinci-el-palet/"]],
      },
      {
        h: "Kalın orta palet nedir?",
        p: [
          "Kalın orta palet, orta paletle aynı genel ölçülerde ama daha kalın tahtalara sahip paletlere denir. Daha kalın tahta, aynı yük altında daha az sehim yapar ve darbeye karşı daha dayanıklıdır. Bu da daha ağır yükleri veya daha sık kullanımı mümkün kılar.",
          "Kalınlığın kesin ölçüsü satıcıdan satıcıya değiştiği için bu isim tek başına bir teknik garanti değildir. Alırken mutlaka tahta kalınlığını gözle ve metreyle kontrol edin.",
        ],
        links: [["Kalın orta palet ürün sayfası", "/urunler/kalin-orta-palet/"]],
      },
      {
        h: "Aradaki farklar",
        p: ["Aşağıdaki tablo, iki sınıfı genel eğilimler üzerinden karşılaştırır. Bu sınıflar resmî olmadığı için değerler yaklaşık okunmalıdır."],
        table: {
          caption: "Orta palet ve kalın orta palet karşılaştırması",
          head: ["Özellik", "Orta palet", "Kalın orta palet"],
          rows: [
            ["Tahta kalınlığı", "Orta kalınlıkta", "Daha kalın"],
            ["Genel ölçü", "Çoğunlukla 80x120", "Çoğunlukla 80x120"],
            ["Yük kapasitesi eğilimi", "Hafif-orta yükler", "Orta-ağır yükler"],
            ["Darbe dayanımı", "Orta", "Daha yüksek"],
            ["Kendi ağırlığı", "Daha hafif", "Daha ağır"],
            ["Tekrar kullanım ömrü", "Kısa-orta", "Orta-uzun"],
            ["Maliyet eğilimi", "Daha düşük", "Daha yüksek"],
            ["Tipik kullanım", "Tek yönlü sevkiyat, hafif ürün", "Tekrar kullanım, daha ağır ürün"],
          ],
        },
      },
      {
        h: "Hangisi hangi işe uygun?",
        list: [
          "Hafif koli, plastik ürün ve tekstil gibi yükler: orta palet çoğu zaman yeterlidir.",
          "Gıda ambalajı, şişe veya konserve gibi daha ağır yükler: kalın orta palet daha güvenlidir.",
          "Müşteriye bırakılan tek yönlü sevkiyat: maliyeti düşük tutmak için orta palet.",
          "Fabrika içinde sürekli dolaşan palet: kalın orta palet daha uzun ömürlüdür.",
          "Raf sistemi: bu tür paletler için raf yükü kapasitesi ayrıca doğrulanmalıdır; gerekirse gerçek Euro palet veya takviyeli palet seçin.",
          "İhracat: palet ISPM-15 uyumlu, HT damgalı olmalıdır; orta/kalın orta sınıf bunu kendiliğinden sağlamaz.",
        ],
        links: [["Palet kaç kg taşır?", "/rehber/palet-kac-kg-tasir/"], ["Palet raf sistemleri", "/rehber/palet-raf-sistemleri-ve-raf-yuku/"]],
      },
      {
        h: "Sahada tahta kalınlığı nasıl kontrol edilir?",
        p: [
          "Sınıf adı yerine ölçüme güvenin. Üst yüzey tahtasının kalınlığını kumpas veya cetvelle, her palette aynı noktadan ölçün ve aynı partiden birkaç paleti ayrıca deneyin. Ölçtüğünüz değeri sipariş yazısına geçirmek, sonradan “bu orta değildi” tartışmasını bitirir.",
          "Kalınlığın yanında tahtaların yük altında nasıl davrandığına da bakın: elle bastırdığınızda ya da yük konduğunda gözle görülür biçimde sarkan tahta, o palet için yetersiz bir işarettir. Ayrıca paletin takozlu mu kızaklı mı olduğunu, takozların sağlam çivilenip çivilenmediğini kontrol edin.",
        ],
        list: [
          "Üst ve alt tahtaların kalınlığı partide tutarlı mı?",
          "Tahtalar arasındaki boşluk yükünüzün ambalajı için uygun mu?",
          "Takoz veya kızaklar yerinde, çatlaksız ve sağlam çivili mi?",
          "Palet düz zeminde sallanmıyor, bir köşesi yukarıda kalmıyor mu?",
        ],
      },
      {
        h: "Maliyeti palet başına değil, kullanım başına düşünün",
        p: [
          "Orta palet çoğu zaman kalın orta paletten daha ucuz alınır; ama palet kırılıp sevkiyat aksarsa ya da sık sık yenisini almak zorunda kalırsanız bu fark kapanır. Palet tek yönlü gidecekse düşük maliyetli sınıf, aynı paletin fabrika içinde defalarca dolaşacağı bir akış varsa daha kalın seçenek çoğu zaman daha ekonomiktir.",
          "Kararı verirken paletin kaç kez kullanılacağını, üst üste kaç palet istifleneceğini ve yükün ağırlığını yazıya dökün. Bu üç bilgi, hangi sınıfın size uygun olduğunu çoğu zaman tek başına gösterir.",
        ],
        links: [["Palet maliyetini düşürmenin yolları", "/rehber/palet-maliyetini-dusurmenin-yollari/"]],
      },
      {
        h: "Satın alırken nelere bakmalısınız?",
        steps: [
          "Yükünüzün ağırlığını ve bir seferde kaç palet üst üste istif edeceğinizi belirleyin.",
          "Tahta kalınlığını fiziksel olarak ölçün; ismine güvenmeyin.",
          "Kırık, çatlak veya eksik tahta ile gevşek çivi olup olmadığına bakın.",
          "Takozlarda çürüme veya çatlak olmadığını kontrol edin.",
          "Aynı partideki paletlerin tek tip olup olmadığını inceleyin; karışık partiler dengesiz istif yapar.",
          "Kullanım amacınızı söyleyip satıcının önerisini yazılı alın.",
        ],
        links: [["İkinci el palet alırken dikkat edilecekler", "/rehber/ikinci-el-palet-alirken-dikkat-edilecekler/"]],
      },
      {
        h: "Euro palet ve EPAL ile karıştırmayın",
        p: [
          "Orta ve kalın orta palet, EPAL veya standart Euro palet anlamına gelmez. Bunlar sınıflama adlarıdır; EPAL ise tescilli bir markadır ve EPAL damgasıyla bilinir. Ölçü aynı olsa da kereste kalitesi ve tahta kalınlığı garantisi yoktur.",
          "Alıcınız özellikle EPAL ya da Euro palet şartı koyuyorsa orta palet yerine ilgili sınıfı seçin. Terim farkı için çakma EPAL rehberine de göz atabilirsiniz.",
        ],
        links: [["Çakma EPAL nedir?", "/rehber/cakma-epal-nedir/"], ["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"]],
      },
      {
        h: "Fiyatı ne belirler?",
        p: ["Orta ve kalın orta palet fiyatları tahta kalınlığına, palet durumuna, partideki adede ve stok durumuna göre değişir. Güncel durum için fiyat tablosuna bakın veya adedinizi bildirip teklif alın."],
        links: [["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Orta palet ile Euro palet aynı mı?", a: "Hayır. Euro palet 800x1200 mm ölçülü, belirli standarda göre yapılan paletlerdir. Orta palet ise piyasada kullanılan bir ikinci el sınıfıdır ve standart bir ürün adı değildir." },
      { q: "Kalın orta palet ne kadar yük taşır?", a: "Tek bir değer vermek doğru olmaz; kapasite tahta kalınlığına, takozlara ve yükün dağılımına bağlıdır. Yükünüzü bildirirseniz uygun paleti birlikte seçeriz." },
      { q: "Orta palet ihracatta kullanılabilir mi?", a: "Ancak ISPM-15 uyumlu, HT damgalıysa kullanılabilir. Sınıf adı tek başına bu şartı sağlamaz." },
      { q: "Orta palet raf sisteminde kullanılır mı?", a: "Önerilmez. Raf yükü için palet kapasitesini yazılı doğrulatmak gerekir; çoğu durumda daha sağlam palet tercih edilir." },
    ],
  },
  {
    slug: "ambalaj-paleti-nedir",
    title: "Ambalaj Paleti Nedir? Çeşitleri ve Seçimi | MEPAL",
    description: "Ambalaj paleti nedir, hangi türleri vardır, nasıl seçilir? İhracat ambalajı için palet, ISPM-15 ve doğru ölçü seçimi hakkında pratik rehber.",
    h1: "Ambalaj Paleti Nedir? Çeşitleri, Seçimi ve İhracat Ambalajı",
    answer:
      "Ambalaj paleti, ürünün üretimden teslimata kadar paketlenmiş halde taşındığı ve çoğu zaman alıcıya bırakılan paletlerdir. Ahşap, plastik veya karton olabilir; ağırlığına, ölçüsüne ve sevkiyat tipine göre seçilir. İhracatta ahşap ambalaj paleti ISPM-15 uyumlu ve HT damgalı olmalıdır.",
    keyword: "ambalaj paleti nedir",
    art: "crate",
    published: "2026-10-28",
    updated: "2026-10-28",
    week: 27,
    readMinutes: 5,
    related: ["ihracatta-palet-ve-ambalaj-kurallari", "ispm-15-nedir", "palet-cesitleri-ve-secimi", "ahsap-palet-mi-plastik-palet-mi", "palet-maliyetini-dusurmenin-yollari"],
    sections: [
      {
        h: "Ambalaj paleti nedir?",
        p: [
          "Ambalaj paleti, taşıma işlevi gören paletin ürünün ambalajının bir parçası olarak düşünüldüğü kullanımdır. Yani ürün paletin üzerinde streçlenir, çemberlenir, gerekirse köşebentle sabitlenir ve bu paket halinde müşteriye gider. Palet çoğu zaman geri dönmez; bu yüzden maliyeti ürüne yansır.",
          "Aynı palet ürün satıcısından ayrı fiyatlanmaz, ama seçimi doğrudan sevkiyat güvenliğini, hasar oranını ve nakliye hacmini etkiler. Yanlış palet, hem ürünü hem de araç doluluğunu bozar.",
        ],
        links: [["Ambalaj paleti ürün sayfası", "/urunler/ambalaj-paleti/"]],
      },
      {
        h: "Ambalaj paleti çeşitleri",
        p: ["Malzemeye ve kullanım amacına göre başlıca ambalaj paleti türleri:"],
        table: {
          caption: "Ambalaj paleti türleri ve kullanım alanları",
          head: ["Tür", "Güçlü yanı", "Dikkat edilecek nokta"],
          rows: [
            ["Ahşap palet (Euro ölçülü, 100x120, özel ölçü)", "Dayanıklı, onarılabilir, yaygın", "İhracatta ISPM-15 şartı"],
            ["Orta ve ince ahşap palet", "Tek yönlü sevkiyat için ekonomik", "Ağır yükte yetersiz kalabilir"],
            ["Plastik palet", "Hijyenik, nem dayanımlı, ISPM-15 şartı yok", "İlk maliyeti ve geri dönüş ihtiyacı"],
            ["Ahşap sandık ve kasa", "Kırılgan veya ağır ürünü tam sarar", "Hacim ve ağırlığı artırır"],
            ["Özel ölçülü palet", "Ürüne tam uyar", "Üretim süresi ve miktar gerekliliği"],
          ],
        },
        links: [["Ahşap palet mi, plastik palet mi?", "/rehber/ahsap-palet-mi-plastik-palet-mi/"], ["Ahşap sandık", "/urunler/ahsap-sandik/"]],
      },
      {
        h: "Sevkiyat tipine göre hızlı seçim tablosu",
        p: ["Ayrıntıya girmeden önce aşağıdaki tablo size hangi yönde aramanız gerektiğini gösterir. Ardından yükün ağırlığı ve alıcı şartı seçimi netleştirir."],
        table: {
          caption: "Sevkiyat tipine göre ambalaj paleti yönelimi",
          head: ["Sevkiyat tipi", "Genel yönelim", "Dikkat"],
          rows: [
            ["Yurt içi, tek yönlü", "Orta veya ince ahşap palet", "Yük hafif-orta olmalı; palet geri dönmez"],
            ["Yurt içi, geri dönüşlü", "Sağlam ikinci el 1. sınıf, kalın ahşap veya plastik", "İade ve sayım düzeni kurulmalı"],
            ["İhracat (ahşap)", "ISPM-15 uyumlu, HT damgalı ahşap palet", "Damga okunaklı olmalı; alıcı ülke şartını doğrulayın"],
            ["İhracat (ahşapsız)", "Plastik veya karton palet", "Taşıma kapasitesi ve alıcı onayı"],
            ["Gıda ve hijyenik ürün", "Sıfır ahşap veya plastik palet", "Koku, küf ve kalıntı olmamalı"],
            ["Ağır veya standart dışı yük", "Özel ölçülü palet ya da ahşap sandık", "Ağırlık merkezi ve forklift çatal boyu"],
          ],
        },
        links: [["Özel ölçü palet", "/urunler/ozel-olcu-palet/"], ["Orta palet", "/urunler/orta-palet/"]],
      },
      {
        h: "Palet üstü yükseklik ve taşma neden önemli?",
        p: [
          "Ambalaj paletinde en sık göz ardı edilen konu, yükün palet üzerinde nasıl durduğudur. Kolilerin kenardan taşması istif sırasında alt katmandaki kolileri ezer, streç filmin tutunmasını bozar ve nakliyede köşe hasarına yol açar. Palet seçerken ürün ambalajının taban ölçüsünü ve istif düzenini önceden çizmek, bu sorunların çoğunu daha ilk adımda çözer.",
          "Yükseklik de aynı ölçüde önemlidir: palet üstüne dizilen toplam yükseklik araç veya konteyner iç yüksekliğini aşmamalı, ayrıca yük sabitlemeye (streç, çember, köşebent) yer bırakmalıdır. Üst üste istif planlıyorsanız alttaki paletin ve ambalajın ağırlığı taşıyıp taşımadığını da hesaba katın.",
        ],
        links: [["Palet yüksekliği kaç cm?", "/rehber/palet-yuksekligi-kac-cm/"], ["Palet nasıl istiflenir?", "/rehber/palet-nasil-istiflenir/"]],
      },
      {
        h: "Ambalaj paleti nasıl seçilir?",
        steps: [
          "Ürünün ağırlığını, boyutlarını ve koli düzenini netleştirin.",
          "Palet ölçüsünü, kolilerin taşma yapmayacağı şekilde belirleyin; çıkıntı yapan koli en çok hasar alan koli olur.",
          "Sevkiyatın iç piyasa mı, ihracat mı olduğunu belirleyin; ihracatta palet kuralları farklıdır.",
          "Paletin geri dönüp dönmeyeceğine bakın; dönmüyorsa ekonomik sınıf yeterli olabilir.",
          "İstif yüksekliğini ve araç/konteyner içi yerleşimi hesaplayın.",
          "Alıcı palet şartı koyuyorsa (EPAL, plastik, ISPM-15) bunu yazılı olarak alın.",
        ],
        links: [["Konteyner palet hesaplama", "/araclar/konteyner-palet-hesaplama/"], ["Palet seçici", "/araclar/palet-secici/"]],
      },
      {
        h: "İhracat ambalajı ve ISPM-15",
        p: [
          "Ahşap ambalaj malzemesi, yurt dışında zararlı taşıma riski nedeniyle ISPM-15 standardına bağlıdır. Standart, ahşabın ısıl işlemden geçirildiğini ve ilgili IPPC işareti ile damgalandığını şart koşar. Isıl işlem görmüş ahşap paletler HT damgası taşır. Kereste ayrıca kabuksuz olmalıdır.",
          "MEPAL olarak ISPM-15 uyumlu, HT damgalı ihracat paleti temini yaparız; ısıl işlemi kendi tesisimizde yaptığımızı iddia etmeyiz. Bazı ülkelerin ek şartları olabilir; alıcınızdan ya da gümrük müşavirinizden teyit almak en doğrusudur.",
          "Plastik palet ve kontrplak gibi işlenmiş ahşap ürünlerde ISPM-15 gerekmediği bilinse de, varış ülkesi kuralını yine kontrol etmelisiniz.",
        ],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"], ["İhracatta palet ve ambalaj kuralları", "/rehber/ihracatta-palet-ve-ambalaj-kurallari/"], ["İhracat paleti", "/urunler/ihracat-paleti/"]],
      },
      {
        h: "Ambalajlı palette sık yapılan hatalar",
        list: [
          "Kolilerin palet dışına taşması; üst katmandaki baskı alt kolileri ezer.",
          "Çok ince veya yıpranmış palet kullanmak; palet yük altında sehim yapar.",
          "Yetersiz streçleme veya çemberleme; yük hareket eder.",
          "İhracat paletinde damga ve işlem belgesini eksik bırakmak.",
          "Palet ölçüsünü konteyner iç ölçülerine göre hesaplamamak; araç doluluğu düşer.",
          "Geri dönmeyecek paleti gereğinden pahalı seçmek.",
        ],
        links: [["Konteynere ve TIR'a kaç palet sığar?", "/rehber/konteynere-ve-tira-kac-palet-sigar/"]],
      },
      {
        h: "Ambalaj paleti maliyeti nasıl düşer?",
        p: [
          "Maliyeti düşürmenin yolu en ucuz paleti almak değil, yüke tam uyan paleti seçmektir. Gereğinden kalın palet ağırlığı ve maliyeti artırır; gereğinden ince palet ise hasar ve iade bedeli doğurur. Düzenli ve toplu alımlarda tek tip palet standardı belirlemek de teklif sürecini kolaylaştırır.",
          "Güncel fiyatlar için palet fiyatları sayfasına bakabilir veya adedinizi ve ölçünüzü bildirerek teklif alabilirsiniz.",
        ],
        links: [["Palet fiyatları", "/palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Ambalaj paleti ile normal palet arasında fark var mı?", a: "Fiziksel olarak aynı ürünlerdir. Fark kullanım amacındadır: ambalaj paleti ürünle birlikte alıcıya gider ve çoğu zaman geri dönmez." },
      { q: "İhracat ambalajında plastik palet daha mı iyi?", a: "Plastik palet için ISPM-15 gerekmez ve hijyeniktir, ancak maliyeti yüksektir ve geri dönmeyecekse ekonomik olmayabilir. Seçim yüke ve alıcı şartına bağlıdır." },
      { q: "Ambalaj paleti özel ölçüde yapılabilir mi?", a: "Evet. Ürüne tam uyacak özel ölçülü ahşap palet ve sandık üretimi mümkündür; ölçü ve adet bilgisini bildirmeniz yeterli." },
      { q: "Her ahşap ambalaj paleti ISPM-15 gerektirir mi?", a: "Yurt dışına gidecek ham ahşap ambalaj malzemesi için genellikle evet. İç piyasa sevkiyatında zorunlu değildir." },
    ],
  },
  {
    slug: "eur-palet-nedir",
    title: "EUR Palet Nedir? EUR Damgası ve Ölçüsü | MEPAL",
    description: "EUR palet nedir, EUR damgası neyi gösterir, EUR ile EPAL ve euro palet terimleri nasıl ayrılır? 80x120 ölçü ve damga okuma rehberi.",
    h1: "EUR Palet Nedir? Damga, Ölçü ve Terim Farkları",
    answer:
      "EUR palet, 800 x 1200 mm taban ölçülü, standart yapıdaki Euro paletin üzerinde taşıdığı “EUR” damgasıyla anılır. Euro palet bu ölçü ve yapıdaki palet türünün genel adı, EPAL ise bu paletlerin kalite sistemini yöneten tescilli markadır. EUR damgası paletin Euro palet standardında olduğunu, EPAL damgası ise EPAL sistemine ait olduğunu gösterir.",
    keyword: "eur palet",
    art: "euro",
    published: "2026-10-28",
    updated: "2026-10-28",
    week: 28,
    readMinutes: 5,
    related: ["epal-palet-ile-standart-palet-farki", "euro-palet-olculeri", "cakma-epal-nedir", "palet-kalite-siniflari", "ikinci-el-palet-alirken-dikkat-edilecekler"],
    sections: [
      {
        h: "EUR palet ne demektir?",
        p: [
          "EUR palet ifadesi, paletin yan bloklarından birinde yer alan “EUR” işaretinden gelir. Bu işaret, paletin Avrupa'da yaygınlaşan ve demiryolu taşımacılığından doğan Euro palet standardına uygun olduğunu belirtir. Günlük dilde EUR palet, Euro palet, europalet veya 80x120 palet çoğu zaman aynı ürünü anlatır.",
          "Ancak aynı ürünü anlatmaları, aynı şeyi garanti ettikleri anlamına gelmez. Aşağıda bu terimlerin neyi kapsadığını ayrı ayrı açıklıyoruz.",
        ],
        links: [["80x120 Euro palet", "/urunler/80x120-euro-palet/"]],
      },
      {
        h: "EUR, EPAL ve Euro palet terimleri",
        table: {
          caption: "Terimlerin kısa karşılaştırması",
          head: ["Terim", "Anlamı", "Kime ait?"],
          rows: [
            ["Euro palet", "800x1200 mm ölçülü standart palet türü", "Genel ad"],
            ["EUR", "Paletin Euro palet standardında olduğunu gösteren işaret", "Damga"],
            ["EPAL", "Euro palet üretim ve onarımını denetleyen kalite sistemi ve marka", "Tescilli marka"],
            ["80x120 palet", "Yalnızca ölçüyü belirtir", "Ölçü adı"],
          ],
        },
        p: [
          "Kısaca: her EPAL paleti bir Euro palettir, ama her Euro ölçülü palet EPAL değildir. EUR damgası paletin hangi standartta olduğunu anlatır; hangi kalite sisteminin güvencesi altında üretildiğini EPAL damgası ve orta blok kodları gösterir.",
          "Bu farkın ayrıntısı için EPAL ile standart palet farkı rehberimize bakabilirsiniz; burada yalnızca terim düzeyinde kalıyoruz.",
        ],
        links: [["EPAL ile standart palet farkı", "/rehber/epal-palet-ile-standart-palet-farki/"], ["EPAL palet", "/urunler/epal-palet/"]],
      },
      {
        h: "EUR paletin ölçüsü ve yapısı",
        list: [
          "Taban ölçüsü: 800 x 1200 mm (80x120 cm).",
          "Yükseklik: yaklaşık 144 mm.",
          "Dokuz blok (takoz) üzerinde durur.",
          "Dört yönden çatal veya transpalet girişi sağlar.",
          "Üst yüzeyde ve altta belirli sayıda tahta ile ara tahtalar bulunur.",
        ],
        p: ["Bu ölçüler raf sistemlerinin, kamyon kasalarının ve konteynerlerin planlanmasında temel alınır. Ölçü kuralları için Euro palet ölçüleri rehberine bakın."],
        links: [["Euro palet ölçüleri", "/rehber/euro-palet-olculeri/"], ["Konteynere kaç palet sığar?", "/rehber/konteynere-ve-tira-kac-palet-sigar/"]],
      },
      {
        h: "EUR damgası nasıl okunur?",
        steps: [
          "Paletin uzun kenarındaki blokların üzerine bakın; EUR işareti genellikle bir yan blokta yer alır.",
          "Diğer yan blokta EPAL işareti olup olmadığını kontrol edin.",
          "Orta blokta üretici veya onarım tesisi kodu ve yıl bilgisi olup olmadığına bakın.",
          "Damganın net, düzgün ve eşit basılmış olduğundan emin olun.",
          "İhracat içinse ayrıca IPPC/ISPM-15 ısıl işlem damgasını arayın.",
        ],
        p: ["Yalnızca EUR damgası, paletin EPAL olduğu anlamına gelmez. EUR damgalı ama EPAL damgasız bir palet standart dışı olabilir. Bu fark kafa karıştırıyorsa çakma EPAL rehberi damga kontrol yöntemlerini anlatır."],
        links: [["Çakma EPAL nedir?", "/rehber/cakma-epal-nedir/"]],
      },
      {
        h: "EUR palet ailesi: yalnızca 80x120 değil",
        p: [
          "EUR işareti taşıyan tek palet 80x120 değildir. Euro palet standardı birkaç ölçüyü kapsar ve her birine bir numara verilir. Günlük konuşmada “EUR palet” denince çoğunlukla ilk sıradaki, yani 80x120 ölçülü palet kastedilir; ama sipariş verirken numarayı ve ölçüyü yan yana yazmak yanlış anlaşılmayı önler. Tablodaki ölçüler genel çerçevedir; her tipin yapı şartnamesi için EPAL'in güncel yayınlarına bakın.",
        ],
        table: {
          caption: "EUR palet numaraları ve taban ölçüleri (genel çerçeve)",
          head: ["Tip", "Taban ölçüsü", "Günlük ad"],
          rows: [
            ["EUR (EUR 1)", "800 × 1200 mm", "80x120 palet, Euro palet"],
            ["EUR 2", "1200 × 1000 mm", "Büyük endüstriyel ölçü (100x120 sınıfı)"],
            ["EUR 3", "1000 × 1200 mm", "100x120 palet"],
            ["EUR 6", "800 × 600 mm", "Yarım Euro palet (60x80)"],
          ],
        },
        links: [["100x120 ile 80x120 palet farkı", "/rehber/100x120-ile-80x120-palet-farki/"], ["Yarım Euro palet 60x80", "/rehber/yarim-euro-palet-60x80/"], ["100x120 palet", "/urunler/100x120-palet/"]],
      },
      {
        h: "EUR palet ne kadar yük taşır, rafa girer mi?",
        p: [
          "Standart Euro paletin dinamik taşıma değeri yaklaşık 1.500 kg olarak anılır; raf üzerinde güvenli yük ise genellikle bunun altında, yaklaşık 1.000 kg civarında tutulur. Bu değerler EPAL standardına uygun, sağlam ve kuru bir palet için geçerlidir. Damgasız, ikinci el ya da onarılmış paletlerde gerçek kapasite kondisyona göre düşebilir; raf sistemi kullanıyorsanız palet ve raf üreticisinin yazılı verisini esas alın.",
          "Raflı depoda ayrıca paletin kiriş aralığına uyumu önemlidir. Aynı 80x120 ölçüsündeki iki palet, tahta kalınlığı ve blok düzeni farklıysa rafta farklı davranabilir.",
        ],
        links: [["Palet kaç kg taşır?", "/rehber/palet-kac-kg-tasir/"], ["Palet raf sistemleri ve raf yükü", "/rehber/palet-raf-sistemleri-ve-raf-yuku/"]],
      },
      {
        h: "EUR palet satın alırken ne bilmelisiniz?",
        list: [
          "Satıcıdan paletin “EPAL” mi yoksa “EUR ölçülü” mü olduğunu yazılı olarak isteyin.",
          "Sıfır, 1. sınıf veya 2. sınıf ikinci el durumunu net sorun.",
          "İhracatta ISPM-15 ve HT damgası şartını unutmayın.",
          "Palet takası ya da havuz sistemi kullanıyorsanız damgalı palet isteyin.",
          "Fiyatı karşılaştırırken sınıfı eşitleyin.",
        ],
        p: ["MEPAL olarak EPAL ölçülerinde Euro palet temin eder, ikinci el EPAL palet alım-satımı yaparız. Güncel fiyat için euro palet fiyatları sayfasına bakabilir veya teklif alabilirsiniz."],
        links: [["Euro palet fiyatları", "/euro-palet-fiyatlari/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "EUR palet ile Euro palet aynı mı?", a: "Günlük kullanımda evet. EUR palet, Euro paletin üzerindeki damgadan gelen adlandırmadır." },
      { q: "EUR palet ile EPAL palet aynı mı?", a: "Hayır. EUR damgası paletin Euro standardında olduğunu gösterir, EPAL ise tescilli bir kalite sistemidir. EPAL palette her ikisi de bulunur." },
      { q: "EUR palet kaç cm?", a: "Taban ölçüsü 80x120 cm, yüksekliği yaklaşık 14,4 cm'dir." },
      { q: "Damgasız 80x120 palet EUR palet midir?", a: "Ölçüsü uyuyorsa Euro ölçülü sayılır, ancak damgasız olduğu için EUR veya EPAL olduğu doğrulanamaz." },
    ],
  },
  {
    slug: "hasarli-ve-kirik-palet-ne-yapilir",
    title: "Hasarlı ve Kırık Palet Ne Yapılır? | MEPAL",
    description: "Elinizdeki hasarlı veya kırık paletleri tamir mi, satış mı, geri dönüşüm mü? Karar tablosu ve hizmet seçenekleri ile adım adım yol haritası.",
    h1: "Hasarlı ve Kırık Paletlerle Ne Yapılır? Tamir, Satış veya Geri Dönüşüm",
    answer:
      "Hasarlı palet küçük onarımla yeniden kullanılabiliyorsa tamir veya satış, yapısı dağıldıysa geri dönüşüm doğru yoldur. Karar; hasarın türüne, palet ölçüsüne, adede ve tamir maliyetine bağlıdır. Önce paletleri sağlam, hasarlı ve kırık diye üçe ayırmak en kısa yoldur.",
    keyword: "hasarlı kırık palet",
    art: "scrap",
    published: "2026-10-28",
    updated: "2026-10-28",
    week: 29,
    readMinutes: 5,
    related: ["hurda-paletinizi-nasil-degerlendirirsiniz", "palet-omru-nasil-uzatilir", "ahsap-palet-geri-donusum", "palet-kalite-siniflari", "palet-maliyetini-dusurmenin-yollari"],
    sections: [
      {
        h: "Hasarlı palet ve kırık palet aynı şey değil",
        p: [
          "Depoda biriken eski paletler genelde tek kategoride düşünülür, oysa durumları farklıdır. Bir ya da iki tahtası kırılmış, ayağı sağlam palet hasarlıdır ve çoğu zaman tamir edilebilir. Takozları dağılmış, kirişi kırık ya da ahşabı çürümüş palet ise kırıktır ve yeniden palet yapmak ekonomik değildir.",
          "Ayrımı yapmadan toplu bir şekilde atmak ya da toplu bir şekilde saklamak her iki durumda da kayıptır. İlkinde onarılabilir stoğu çöpe atarsınız, ikincisinde işe yaramaz paletler depo alanınızı işgal eder.",
        ],
      },
      {
        h: "Önce sınıflayın",
        steps: [
          "Paletleri tipe göre ayırın: Euro ölçülü, 100x120, CP, özel ölçü.",
          "Her tipte sağlam, hasarlı ve kırık diye üç grup yapın.",
          "Hasarlıları hasar türüne göre not edin: tahta, takoz, çivi, eğilme.",
          "Yağ, kimyasal, küf veya ıslaklık olan paletleri ayrı bir yerde toplayın.",
          "Her grup için bir fotoğraf ve yaklaşık adet çıkarın.",
        ],
        links: [["Hurda paletinizi nasıl değerlendirirsiniz?", "/rehber/hurda-paletinizi-nasil-degerlendirirsiniz/"], ["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"]],
      },
      {
        h: "Karar tablosu: tamir, satış veya geri dönüşüm",
        table: {
          caption: "Duruma göre önerilen yol",
          head: ["Durum", "Tamir", "Satış", "Geri dönüşüm"],
          rows: [
            ["Tek tahta kırık, takozlar sağlam", "Uygun", "Tamir sonrası veya olduğu gibi", "Gerekmez"],
            ["Çatlak takoz, yüzeysel", "Uygun", "Tamir sonrası", "Gerekmez"],
            ["Birkaç tahta ve bir takoz hasarlı", "Adede göre değerlendirilir", "Hasarlı palet alımı", "Tamir ekonomik değilse"],
            ["Standart ölçülü, çok adetli hasarlı parti", "Toplu tamir mantıklı", "Hasarlı palet alımı", "Kırık kısımlar için"],
            ["Takozlar çürümüş, yapısı dağılmış", "Uygun değil", "Parça kaynağı olarak", "Önerilen"],
            ["Yağ veya kimyasal bulaşmış", "Genelde uygun değil", "Kapsam durumu bildirilir", "Koşullu"],
            ["Kullanılmayacak özel ölçülü palet", "Nadiren", "Yeniden satış zor", "Ahşap atık olarak"],
          ],
        },
      },
      {
        h: "Tamir seçeneği ne zaman mantıklı?",
        p: [
          "Kendi paletlerinizi yeniden kullanacaksanız ve hasar hafifse tamir en ekonomik yoldur. Yeni palet yerine onarılmış palet kullanmak maliyeti düşürür ve ahşap tüketimini azaltır. Tamirin mantıklı olması için paletin standart ölçüde ve taşıyıcı yapısının sağlam olması gerekir.",
          "Küçük miktarlar için kendi bakım ekibiniz tahta değişimi yapabilir. Çok adetli partilerde ise profesyonel tamir hem daha hızlı hem de kalite açısından daha güvenlidir.",
        ],
        links: [["Palet tamiri", "/hizmetler/palet-tamiri/"], ["Palet ömrü nasıl uzatılır?", "/rehber/palet-omru-nasil-uzatilir/"]],
      },
      {
        h: "Satış seçeneği ne zaman mantıklı?",
        p: [
          "Paletleri kendiniz kullanmayacaksanız ve parti yeterli adetteyse tamire elverişli olanları satmak en iyi nakit dönüşü sağlar. Standart Euro ve 100x120 ölçülü paletler daha kolay alıcı bulur. Satışta partinin sağlam-hasarlı-kırık oranı teklifi doğrudan etkiler; bu yüzden önceden ayrıştırmak teklifinizi iyileştirir.",
        ],
        links: [["Hasarlı palet alımı", "/hizmetler/hasarli-palet-alimi/"], ["Palet alım satım", "/hizmetler/palet-alim-satim/"]],
      },
      {
        h: "Geri dönüşüm seçeneği ne zaman mantıklı?",
        p: [
          "Yapısı bozulmuş, çürümüş veya parçalanmış paletlerin tamiri anlamlı değildir. Bu paletleri depoda bekletmek yer işgal eder ve yangın yükünü artırır. Toplu halde kırık palet alımı ile ahşabın geri dönüşüm zincirine verilmesi hem depo alanınızı açar hem de ahşabı yeniden değerlendirir.",
          "Karışık partilerde sağlam, hasarlı ve kırık paletleri tek seferde yerinde ayrıştırmak da mümkündür; böylece tek bir görüşmeyle üç yolu da kapatabilirsiniz.",
        ],
        links: [["Kırık palet alımı", "/hizmetler/kirik-palet-alimi/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Ahşap palet geri dönüşümü", "/rehber/ahsap-palet-geri-donusum/"]],
      },
      {
        h: "Parti kaydı: ayrıştırırken neleri not etmelisiniz?",
        p: [
          "Satışa, tamire ya da geri dönüşüme gidecek paletleri ayrıştırırken kayıt tutmak hem teklifi netleştirir hem de sonradan çıkabilecek farkları önler. Kayıt için fazla bir şey gerekmez; bir tablo ya da telefondan çekilmiş fotoğraflar yeterlidir.",
        ],
        list: [
          "Her grubun palet tipi ve ölçüsü (Euro, 100x120, CP, özel ölçü).",
          "Gruptaki yaklaşık adet; tam sayım gerekmez, istif sayısı çarpılarak kabaca bulunabilir.",
          "Hasar türü: kırık tahta, çatlak takoz, gevşek çivi, eğilme ya da çürüme.",
          "Yağ, kimyasal, nem veya küf gibi ek durumlar.",
          "Paletlerin bulunduğu yer, araç girişi ve çatallı ekipman olup olmadığı.",
        ],
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"]],
      },
      {
        h: "Bekleyen hasarlı paletler depoda ne risk yaratır?",
        p: [
          "Karar vermeden biriktirilen paletler görünenden pahalıya mal olur. Ahşap yanıcı bir malzemedir; yığılmış kırık paletler yangın yükünü artırır ve yangın sigortası ya da iş güvenliği denetimlerinde dikkat çeker. Isı ve nem alan paletlerde küf yayılır, sağlam paletlerin de kullanılabilirliği düşer. Ayrıca depoda yer kapladığı için gerçek ürün stokuna ayrılacak alanı daraltır.",
          "Bu yüzden ayrıştırmayı ve çıkışı mümkünse düzenli bir takvime bağlayın. Atık niteliğindeki ahşabın elden çıkarılmasında yürürlükteki atık mevzuatı ve işletmenizin kendi atık yönetim prosedürü esas alınır; ayrıntı için çevre sorumlunuza danışın.",
        ],
      },
      {
        h: "Karar verirken sık yapılan hatalar",
        list: [
          "Tüm paletleri aynı kategoride değerlendirip hepsini hurdaya çıkarmak.",
          "Tamir maliyetini hesaplamadan hasarlı palet biriktirmek.",
          "Islak ve küflü paletleri sağlam paletlerin yanına istiflemek; küf yayılır.",
          "Yağlı veya kimyasal bulaşmış paletleri bildirmeden teslim etmek.",
          "Düzenli çıkış olduğu halde her seferinde tek seferlik çözüm aramak.",
        ],
        p: ["Elinizdeki paletlerin fotoğraflarını gönderin, hangi grubun hangi yola gideceğini birlikte belirleyelim. Teklifler partinin durumuna göre verilir."],
        links: [["Fotoğraftan palet değerleme", "/araclar/fotograftan-palet-degerleme/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Hasarlı paleti kendim tamir edebilir miyim?", a: "Küçük tahta değişimlerini yapabilirsiniz. Taşıyıcı takoz ve kiriş hasarlarında profesyonel tamir ya da yeni palet daha güvenlidir." },
      { q: "Kırık palet satılır mı?", a: "Tamiri mümkün olmayan kırık paletler genellikle ahşap atık olarak değerlendirilir. Teklif; adet, ahşap durumu ve yükleme koşullarına göre verilir." },
      { q: "Karışık bir partiyi tek seferde verebilir miyim?", a: "Evet. Sağlam, hasarlı ve kırık paletler aynı partide olabilir; yerinde ayrıştırılır." },
      { q: "Hangi paletler hasarlı sayılır?", a: "Yapısı bütün olan, ancak bir veya birkaç tahtası ya da çivisi hasar görmüş paletlerdir." },
      { q: "Tamir mi yoksa satış mı daha kârlı?", a: "Kendi kullanımınız varsa tamir, kullanmayacaksanız ve parti yeterliyse satış genellikle daha mantıklıdır. Her ikisini karşılaştırmak için fotoğraf göndermeniz yeterlidir." },
    ],
  },
];
