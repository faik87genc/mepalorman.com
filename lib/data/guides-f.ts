import type { Guide } from "@/lib/types";

// Satın alma ve tedarikçi seçimi rehberleri (week: 34-35). Sayısal fiyat ve kesin teslim süresi yok.
export const guidesF: Guide[] = [
  {
    slug: "palet-satin-alma-rehberi",
    title: "Palet Satın Alma Rehberi: Gebze, Kocaeli, İstanbul | MEPAL",
    description: "Palet satın alırken adım adım izlenecek yol: ihtiyacı belirleme, ölçü ve sınıf seçimi, teklif karşılaştırma, kabul kontrolü. Gebze, Kocaeli, İstanbul.",
    h1: "Palet Satın Alma Rehberi: Gebze, Kocaeli ve İstanbul İçin Adım Adım",
    answer:
      "Palet satın almak beş adımda ilerler: ihtiyacı (ölçü, yük, kullanım şekli) netleştirmek, yeni ya da ikinci el kararını vermek, en az iki satıcıdan aynı kapsamda teklif almak, teslimat ve belge koşullarını yazılı doğrulamak ve gelen paletleri kabul sırasında kontrol etmek. Gebze, Kocaeli ve İstanbul'daki işletmeler için bu süreç depo ziyaretiyle de hızlanır.",
    keyword: "palet satın al",
    art: "service",
    published: "2026-10-28",
    updated: "2026-10-28",
    week: 34,
    readMinutes: 8,
    related: ["palet-alirken-teklif-isterken-hangi-bilgiler-gerekir", "palet-fiyatlarini-etkileyen-faktorler", "sifir-palet-mi-ikinci-el-palet-mi", "palet-kalite-siniflari", "paletci-nasil-secilir"],
    sections: [
      {
        h: "Palet satın almadan önce neyi netleştirmelisiniz?",
        p: [
          "Palet alımında en sık yapılan hata, ürünü seçmeden önce fiyat sormaktır. Oysa fiyat; ölçüye, sınıfa, adede ve kullanım biçimine göre değişen bir sonuçtur. Önce şu soruların cevabını yazıya dökün: Paletin üzerinde ne taşınacak ve toplam yük kaç kilogram? Palet raflı sistemde mi, yerde mi istiflenecek? Yurt dışına gidecek mi? Aynı palet işletmenize geri dönecek mi, yoksa müşteriye bırakılacak mı?",
          "Bu soruların cevapları doğrudan ürün seçimini belirler. Müşteriye bırakılan, tek yönlü sevkiyatta kullanılan bir palet için sınıflandırılmış ikinci el palet çoğu zaman mantıklıdır. Aynı paletin işletme içinde yıllarca dolaşması gerekiyorsa sıfır veya sağlam bir sınıf, hijyenin şart olduğu hatlarda ise plastik palet öne çıkar. Kararınızı kâğıda dökmek, satıcıyla konuşurken de sizi güçlü kılar.",
        ],
        links: [["Palet seçici aracı", "/araclar/palet-secici/"], ["Ahşap palet mi plastik palet mi?", "/rehber/ahsap-palet-mi-plastik-palet-mi/"]],
      },
      {
        h: "Adım adım palet satın alma süreci",
        steps: [
          "İhtiyacı yazın: palet ölçüsü, yaklaşık yük, adet, tek seferlik mi düzenli mi alacağınız ve ihracat gereksinimi.",
          "Yeni mi ikinci el mi karar verin; ikinci elde hangi kalite sınıfını kabul edeceğinizi belirleyin.",
          "En az iki satıcıdan, aynı kapsamda (aynı ölçü, sınıf, adet ve teslim şekli) yazılı teklif isteyin.",
          "Tekliflerde nelerin dahil olduğunu karşılaştırın: nakliye, yükleme, fatura ve ödeme koşulu ayrı ayrı yazılmalı.",
          "Mümkünse satıcının deposunu görün ya da örnek palet isteyin; aynı kalitede sevkiyat yapılacağını teyit edin.",
          "Teslimatta paletleri sayın ve gözle kontrol edin; sorunları teslim anında tutanakla bildirin.",
        ],
        p: ["Bu altı adımın hiçbiri uzun sürmez; ama her biri sonradan çıkabilecek bir uyuşmazlığı baştan ortadan kaldırır. Özellikle aynı kapsamda teklif almak, farklı sınıf ve ölçüleri birbirine benzetip yanlış karşılaştırma yapmanızı engeller."],
        links: [["Teklif için gereken bilgiler", "/rehber/palet-alirken-teklif-isterken-hangi-bilgiler-gerekir/"], ["Teklif sihirbazı", "/teklif-al/"]],
      },
      {
        h: "Yeni mi, ikinci el mi, plastik mi?",
        p: [
          "Karar tek bir kritere indirgenemez. Sıfır ahşap palet en öngörülebilir kalitedir; ölçüsü, tahta kalınlığı ve ısıl işlem durumu baştan bellidir. İkinci el palet, bütçeyi koruyan ve çoğu iç sevkiyat için yeterli bir seçenektir; ancak sınıfının açıkça tanımlanması gerekir. Plastik palet ise nem, koku ve temizlik gerektiren işlerde, uzun ömürlü ve kapalı döngülü kullanımda anlamlıdır.",
        ],
        table: {
          caption: "Kullanım amacına göre palet seçimi",
          head: ["Durum", "Genelde uygun seçenek", "Dikkat edilecek nokta"],
          rows: [
            ["Müşteriye bırakılan, tek yönlü sevkiyat", "Sınıflandırılmış ikinci el ahşap palet", "Sınıfı ve tahta durumunu yazılı belirtin"],
            ["Yurt dışı sevkiyat", "ISPM-15 uyumlu, HT damgalı ahşap palet", "Damganın okunaklı ve eksiksiz olması"],
            ["Raflı depolama", "Ölçüsü ve yük kapasitesi uygun sağlam palet", "Raf taşıma kapasitesi ve palet deformasyonu"],
            ["Gıda, ilaç, hijyen hattı", "Plastik veya sıfır, temiz ahşap palet", "Koku, nem ve denetim şartları"],
            ["Kapalı döngü, uzun ömür", "Plastik veya güçlendirilmiş palet", "Alış maliyeti ile ömür dengesi"],
          ],
        },
        links: [["Sıfır palet mi ikinci el mi?", "/rehber/sifir-palet-mi-ikinci-el-palet-mi/"], ["İkinci el palet", "/urunler/ikinci-el-palet/"], ["Plastik palet", "/urunler/plastik-palet/"]],
      },
      {
        h: "Ölçü ve kalite sınıfını doğru seçmek",
        p: [
          "Türkiye'de en yaygın ölçü 80x120 cm'lik Euro ölçülü paletlerdir; kimya ve varil sevkiyatında 100x120 sık görülür. Ölçüyü belirlerken yalnızca ürününüzü değil raf gözünü, konteyner veya tır dizilimini de hesaba katın. Standart dışı bir ölçü gerekiyorsa çizim veya örnek palet göndermek en güvenli yoldur.",
          "Kalite sınıfı ise ikinci el alımda fiyatla birlikte en çok tartışılan konudur. Satıcının sınıf tanımı ile sizin beklentiniz aynı değilse, teslimatta anlaşmazlık çıkar. Bu yüzden “birinci sınıf” gibi etiketlerle yetinmeyin; tahta kırığı, çivi çıkması, nem ve eğrilik gibi kabul edilemez kusurları teklife yazın.",
        ],
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"], ["Euro palet ölçüleri", "/rehber/euro-palet-olculeri/"], ["80x120 Euro palet", "/urunler/80x120-euro-palet/"]],
      },
      {
        h: "Gebze, Kocaeli ve İstanbul'da lokasyon neden önemli?",
        p: [
          "Palet hacimli ve düşük birim değerli bir üründür; bu yüzden nakliye, toplam maliyetin görünür bir parçasıdır. Depoya yakın olmak hem nakliye hesabını sadeleştirir hem de gerektiğinde ürünü yerinde görmeyi mümkün kılar. MEPAL'in deposu Gebze Pelitli'dedir; Gebze, Dilovası, Çayırova ve Kocaeli sanayisine kısa mesafededir. İstanbul'un Anadolu ve Avrupa yakasındaki işletmelere ise planlı toplu sevkiyat yapılır.",
          "Uzak bir şehirden alım yapıyorsanız, nakliyeyi tek sefere sığacak toplu sipariş şeklinde kurgulamak daha verimlidir. Teslim süresi stok ve araç programına göre değiştiği için kesin gün, sipariş onayında yazılı netleştirilmelidir.",
        ],
        links: [["Gebze palet", "/bolge/gebze-palet/"], ["Kocaeli palet", "/bolge/kocaeli-palet/"], ["İstanbul palet", "/bolge/istanbul-palet/"], ["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"]],
      },
      {
        h: "Teklifleri karşılaştırırken bakılacak kalemler",
        list: [
          "Ürün tanımı: ölçü, malzeme, yeni veya ikinci el, sınıf.",
          "Adet ve parti büyüklüğü: teklifin geçerli olduğu aralık.",
          "Teslim şekli: depodan teslim mi, adrese nakliye mi; yükleme ve boşaltmayı kim yapıyor.",
          "KDV durumu: teklif KDV hariç mi dahil mi, açıkça yazılmalı.",
          "Belgeler: fatura ve irsaliye düzenlenmesi, ihracat paletinde HT damgası.",
          "Ödeme koşulu ve teklifin geçerlilik süresi.",
          "Hatalı veya sınıf dışı ürün çıkarsa nasıl bir yol izleneceği.",
        ],
        p: ["Sadece en düşük rakama bakmak, kapsamı farklı iki teklifi karşılaştırmak demektir. Bir teklifte nakliye dahil, diğerinde değilse ya da bir teklifte kırık tahta oranı belirtilmemişse, iki rakam birbirine eşit değildir. Karşılaştırmayı kalem kalem yapın."],
        links: [["Fiyatı etkileyen faktörler", "/rehber/palet-fiyatlarini-etkileyen-faktorler/"], ["Palet fiyatları", "/palet-fiyatlari/"]],
      },
      {
        h: "Teslimatta kabul kontrolü",
        p: [
          "Paletler araçtan indirilirken ya da yüklenirken kontrol yapılmalı; teslimden sonra yapılan itirazlar ispatı zorlaştırır. Önce adedi sayın, ardından rastgele seçtiğiniz paletleri ölçü, tahta durumu ve takoz sağlamlığı açısından inceleyin. İhracat paleti aldıysanız HT damgasının her palette okunaklı olduğuna bakın.",
          "Gözle görülür bir uyumsuzluk varsa teslim anında satıcıya bildirin ve fotoğrafla kayıt altına alın. İyi bir tedarikçi, sınıfı tutmayan ürünü değiştirmeyi veya uyuşmazlığı çözmeyi baştan kabul eder; bunu teklif aşamasında sormak ayrı bir güven göstergesidir.",
        ],
        list: [
          "Adet sayımı ve irsaliye ile karşılaştırma.",
          "Ölçü kontrolü (özellikle özel ölçülü alımlarda).",
          "Kırık tahta, çıkık çivi, eğrilik, aşırı nem ve küf kontrolü.",
          "İhracat paletinde damga okunabilirliği.",
          "Fotoğraf ve tutanak ile kayıt.",
        ],
        links: [["İkinci el palet alırken dikkat edilecekler", "/rehber/ikinci-el-palet-alirken-dikkat-edilecekler/"], ["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"]],
      },
      {
        h: "Eski paletlerinizi de değerlendirin",
        p: [
          "Yeni palet alırken depoda biriken kırık veya kullanılmayan paletleri de gündeme almak mantıklıdır. Bu paletler hurda ya da tamire uygun olarak değerlendirilebilir ve bazı durumlarda alım ile hurda çıkışı tek sevkiyatta planlanabilir. Bu, hem depo alanınızı açar hem de yeni alımın net maliyetini düşürebilir.",
        ],
        links: [["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Palet alım satım", "/hizmetler/palet-alim-satim/"], ["Toptan palet", "/hizmetler/toptan-palet/"]],
      },
    ],
    faq: [
      { q: "Palet satın almak için minimum adet var mı?", a: "Bu ürün ve stok durumuna göre değişir. Adet ve ürün tipini bildirdiğinizde, bu adet için koşullar teklifte yazılı olarak belirtilir." },
      { q: "Depoya gelip paletleri görebilir miyim?", a: "Evet, Gebze Pelitli deposunda çalışma saatleri içinde ürünleri inceleyebilirsiniz. Boşuna yol yapmamanız için önce telefon veya WhatsApp ile ürün ve adedi bildirmeniz önerilir." },
      { q: "Palet fiyatı sitede neden yok?", a: "Fiyat; ölçü, sınıf, adet ve teslim koşuluna göre sürekli değişir. Güncel fiyat WhatsApp üzerinden, kapsamı yazılı olarak verilir." },
      { q: "İstanbul'a veya başka şehre gönderim yapılıyor mu?", a: "Gebze deposundan Türkiye genelinde planlı toplu sevkiyat yapılır. Teslim şekli ve süresi sipariş kapsamına göre teklifte netleştirilir." },
      { q: "İkinci el palet alırken en çok neye dikkat etmeliyim?", a: "Kalite sınıfının yazılı tanımı, kırık tahta ve çivi durumu, nem ve ölçü tutarlılığı en kritik noktalardır. İlgili rehberimizde ayrıntılı kontrol listesi vardır." },
    ],
  },
  {
    slug: "paletci-nasil-secilir",
    title: "Paletçi Nasıl Seçilir? Tedarikçi Seçim Rehberi | MEPAL",
    description: "Güvenilir paletçi nasıl seçilir? Stok, ürün çeşidi, sınıf tanımı, belge, nakliye ve satış sonrası destek kriterleriyle tedarikçi değerlendirme listesi.",
    h1: "Paletçi Nasıl Seçilir? Palet Tedarikçisi Değerlendirme Rehberi",
    answer:
      "Güvenilir bir paletçiyi; ürün çeşidi ve stok görünürlüğü, sınıfları yazılı tanımlaması, teklifte kapsamı açık yazması, gerektiğinde ISPM-15 uyumlu ürün sunabilmesi, nakliye ve yükleme imkânı ve sorunlu parti için net bir çözüm yolu olması belirler. Fiyat bu kriterlerden yalnızca biridir.",
    keyword: "paletçi",
    art: "service",
    published: "2026-10-28",
    updated: "2026-10-28",
    week: 35,
    readMinutes: 7,
    related: ["palet-satin-alma-rehberi", "palet-alirken-teklif-isterken-hangi-bilgiler-gerekir", "palet-kalite-siniflari", "ikinci-el-palet-alirken-dikkat-edilecekler", "hurda-palet-nereye-satilir"],
    sections: [
      {
        h: "Paletçi kimdir, ne iş yapar?",
        p: [
          "Günlük dilde “paletçi”, palet alan, satan, tamir eden ve kullanılmış paleti geri toplayan işletmeler için kullanılır. Bu işletmelerin kimisi yalnızca ikinci el palet satar, kimisi sıfır palet imal eder, kimisi de hurda ve kırık palet toplamaya odaklanır. Bu yüzden aradığınız hizmeti baştan tanımlamak, doğru paletçiyi bulmanın ilk adımıdır.",
          "Çalışmak istediğiniz paletçinin yalnızca satış değil, alım ve geri toplama tarafını da yürütüp yürütmediğine bakmak da faydalıdır. Hem palet alıp hem de kırık palet çıkaran bir işletme için tek muhatapla çalışmak, süreci sadeleştirir.",
        ],
        links: [["Palet alım satım", "/hizmetler/palet-alim-satim/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"]],
      },
      {
        h: "Paletçi seçerken değerlendirilecek kriterler",
        table: {
          caption: "Tedarikçi değerlendirme kontrol listesi",
          head: ["Kriter", "Neye bakılır?", "Neden önemli?"],
          rows: [
            ["Ürün çeşidi", "Euro, 100x120, özel ölçü, ikinci el, plastik, ihracat paleti", "Tek yerden birden fazla ihtiyacı karşılar"],
            ["Sınıf tanımı", "Sınıfların yazılı ve ölçülebilir tarifi", "Teslimatta anlaşmazlığı önler"],
            ["Teklif netliği", "Ölçü, adet, nakliye, KDV ve geçerlilik süresinin yazılı olması", "Karşılaştırmayı mümkün kılar"],
            ["İhracat uygunluğu", "ISPM-15 uyumlu, HT damgalı palet sunabilme", "Gümrükte sorun yaşamamak için"],
            ["Nakliye ve yükleme", "Kendi aracı veya anlaşmalı lojistik, yerinde yükleme", "Toplam maliyeti ve süreyi etkiler"],
            ["Erişilebilirlik", "Telefon, WhatsApp, depo adresi ve çalışma saatleri", "Acil ihtiyaçta hızlı dönüş sağlar"],
            ["Sorun çözümü", "Hatalı parti için yazılı çözüm yolu", "Risk sizde kalmaz"],
          ],
        },
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"], ["İhracat paleti", "/urunler/ihracat-paleti/"]],
      },
      {
        h: "Depoyu görmek neden en güvenilir yöntemdir?",
        p: [
          "Bir paletçinin gerçekten stok tutup tutmadığını, ürün sınıflarının nasıl ayrıldığını ve paletlerin nasıl istiflendiğini anlamanın en kısa yolu depoyu görmektir. Düzenli istiflenmiş, ölçü ve sınıfa göre ayrılmış bir depo, hem stok disiplinini hem de sevkiyatta aynı kaliteyi koruma becerisini gösterir. Karmaşık, karışık yığınlar ise sevkiyatta sürpriz çıkma ihtimalini artırır.",
          "Depo ziyareti mümkün değilse örnek palet fotoğrafı ya da kısa bir video isteyin. Bu, yalnızca ürünü görmek için değil, satıcının şeffaflığını ölçmek için de iyi bir testtir.",
        ],
        list: [
          "Paletler ölçü ve sınıfa göre ayrılmış mı?",
          "İstifler düzgün, yüksekliği güvenli mi?",
          "Ürünler yağıştan ve neminden korunuyor mu?",
          "Yükleme için çatallı ekipman ve alan var mı?",
          "Adres, tabela ve çalışma saatleri gerçek ve ulaşılabilir mi?",
        ],
        links: [["Depo adresi ve iletişim", "/iletisim/"], ["Palet fotoğrafları", "/galeri/"]],
      },
      {
        h: "Kaçınılması gereken işaretler",
        p: [
          "Bazı davranışlar, çalışma düzeninin zayıf olduğunu gösterir. Fiyatı sorduğunuzda ölçü, adet veya sınıf sormadan rakam veren, teklifi yazılı vermeyen ya da kapsamı belirsiz bırakan bir satıcıyla çalışırken ileride sorun çıkma ihtimali yüksektir. Benzer şekilde, ihracat paletinde damga ve ısıl işlem konusunda net cevap veremeyen bir satıcıdan ihracat paleti almak risklidir.",
        ],
        list: [
          "Ölçü ve sınıf sormadan kesin fiyat vermek.",
          "Teklifi yalnızca sözlü bildirmek.",
          "İhracat paleti için damga ve ISPM-15 sorularına net cevap verememek.",
          "Depo, adres ve çalışma saati bilgisini paylaşmamak.",
          "Hatalı parti için çözüm yolunu belirtmemek.",
        ],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"]],
      },
      {
        h: "Bölgesel paletçi mi, ulusal tedarikçi mi?",
        p: [
          "Yakın bir paletçi acil ihtiyaçlarda ve küçük partilerde büyük avantaj sağlar; aracınızla gidip yerinde görmeniz, ertesi gün yeniden çağırmanız mümkündür. Uzak bir tedarikçi ise büyük ve planlı partilerde işe yarayabilir; ancak nakliye maliyeti ve kalite doğrulaması daha zordur.",
          "Gebze, Kocaeli ve İstanbul'daki işletmeler için Gebze'deki bir depo hem mesafe hem de erişim açısından avantaj sunar. Başka şehirlerde bulunan işletmeler için ise toplu ve planlı sevkiyatla çalışmak daha verimlidir. Kararınızı ihtiyacınızın sıklığı ve büyüklüğü belirlemelidir.",
        ],
        links: [["Gebze palet", "/bolge/gebze-palet/"], ["Palet nakliye ve lojistik", "/hizmetler/palet-nakliye-lojistik/"], ["Palet satın alma rehberi", "/rehber/palet-satin-alma-rehberi/"]],
      },
      {
        h: "Fiyatın görünmeyen kalemleri",
        p: [
          "İki paletçinin birim fiyatı aynı görünse bile toplam maliyet aynı olmayabilir. Nakliyenin teklife dahil olup olmadığı, yükleme ve boşaltmanın kime ait olduğu, sınıf dışı çıkan paletlerin nasıl ele alındığı ve ödeme koşulu toplam bedeli doğrudan etkiler. Bu kalemleri yazılı olarak sormayan alıcı, sonradan beklemediği bir ek masrafla karşılaşabilir.",
          "Benzer şekilde, düşük kaliteli bir partinin ayıklanması, kırık paletlerin değiştirilmesi ve hat duruşları da görünmeyen maliyettir. Sınıfı baştan net tanımlanan, kusurlu parti için çözüm yolu yazılı olan bir tedarikçi, ilk bakışta biraz daha pahalı görünse bile çoğu zaman toplamda daha ekonomik çıkar.",
        ],
        list: [
          "Nakliye teklife dahil mi, ayrı mı hesaplanıyor?",
          "Yükleme ve boşaltmayı kim yapıyor, ekipman kimde?",
          "KDV dahil mi, hariç mi?",
          "Sınıf dışı çıkan paletler için ne yapılıyor?",
          "Teklif ne kadar süre geçerli?",
        ],
        links: [["Palet fiyatlarını etkileyen faktörler", "/rehber/palet-fiyatlarini-etkileyen-faktorler/"], ["Palet maliyetini düşürmenin yolları", "/rehber/palet-maliyetini-dusurmenin-yollari/"]],
      },
      {
        h: "İhtiyacınıza göre paletçi seçimi",
        p: [
          "Her işletmenin paletçiden beklentisi farklıdır. Gıda ve ilaç gibi hijyen odaklı sektörlerde temiz, kokusuz ve sağlam palet sağlayabilen bir tedarikçi öne çıkar. İhracat yapan işletmeler için ISPM-15 uyumlu ve HT damgalı palet temini asıl kriterdir. Sürekli kırık palet çıkaran fabrikalar ise alım kadar geri toplama ve hurda değerlendirme konusunda da çalışabilen bir muhatap arar.",
          "E-ticaret ve lojistik depoları gibi yüksek devirli işletmeler, düzenli ve planlı sevkiyat yapabilen, stokunu öngörülebilir tutan bir paletçiyle çalışmaktan daha çok fayda sağlar. Bu nedenle “en iyi paletçi” yoktur; sizin kullanım şeklinize en uygun olan vardır.",
        ],
        table: {
          caption: "Sektöre göre öne çıkan beklentiler",
          head: ["İşletme tipi", "Öne çıkan beklenti", "İlgili sayfa"],
          rows: [
            ["Gıda ve içecek", "Temiz, kokusuz, sağlam palet", "Gıda sektörü için palet seçimi"],
            ["İhracat yapan üretici", "ISPM-15 uyumlu, HT damgalı palet", "İhracat paleti"],
            ["Fabrika (sürekli kırık palet çıkaran)", "Alım ile geri toplamanın tek muhatapta olması", "Hurda palet alımı"],
            ["Depo ve e-ticaret", "Düzenli, planlı ve öngörülebilir sevkiyat", "Toptan palet"],
          ],
        },
        links: [["Gıda sektörü için palet seçimi", "/rehber/gida-sektoru-icin-palet-secimi/"], ["E-ticaret ve depo", "/sektorler/e-ticaret-ve-depo/"]],
      },
      {
        h: "İlk siparişte küçük başlamak",
        p: [
          "Yeni bir paletçiyle ilk kez çalışırken tüm ihtiyacınızı tek seferde sipariş etmek yerine küçük bir partiyle başlamak güvenli bir yoldur. İlk partide ürün kalitesini, teslimat disiplinini, belge düzenini ve iletişim hızını gözlemleyin. Beklentiyi karşılıyorsa düzenli alıma geçebilir, aylık veya haftalık ihtiyacınızı planlı hale getirebilirsiniz.",
          "Düzenli alımlarda stok planı ve ortak çalışma kuralları (sınıf, teslim şekli, ödeme koşulu) baştan yazılırsa süreç her seferinde yeniden pazarlık gerektirmez. Bu, hem sizin hem satıcının işini kolaylaştırır.",
        ],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"], ["Teklif al", "/teklif-al/"]],
      },
    ],
    faq: [
      { q: "Paletçi ile palet üreticisi aynı şey midir?", a: "Hayır. Paletçi genellikle palet alıp satan, tamir eden ve toplayan işletmedir; üretici ise sıfır palet imal eder. Bazı işletmeler her iki işi de yapar." },
      { q: "Paletçiden fatura almak gerekli mi?", a: "Kurumsal alımlarda fatura ve irsaliye düzenlenmesini teklif aşamasında sormak ve yazılı teyit etmek iyi bir uygulamadır." },
      { q: "Kırık paletlerimi aynı paletçiye verebilir miyim?", a: "Birçok paletçi hurda ve kırık palet alımı da yapar. Adet ve durumu bildirerek yerinde değerlendirme talep edebilirsiniz." },
      { q: "İhracat paleti için paletçiden ne istemeliyim?", a: "ISPM-15 uyumlu, HT damgalı palet temin edebildiğini ve damganın her palette okunaklı olacağını yazılı teyit etmesini isteyin." },
      { q: "Teklifleri nasıl karşılaştırmalıyım?", a: "Ürün tanımı, adet, nakliye, KDV, ödeme koşulu ve geçerlilik süresini kalem kalem karşılaştırın; yalnızca toplam rakama bakmayın." },
    ],
  },
];
