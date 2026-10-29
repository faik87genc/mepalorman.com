import type { FAQ, Section } from "@/lib/types";

// Ürün sayfalarına eklenen derinlik içeriği. products.ts içinde, sayfanın son
// bölümünden (sipariş/teslimat) hemen önce birleştirilir. Fiyat rakamı, kesin teslim
// süresi, stok adedi ve müşteri adı yazılmaz.
export type Depth = { sections: Section[]; faq: FAQ[] };

export const productDepth: Record<string, Depth> = {
  "80x120-euro-palet": {
    sections: [
      {
        h: "Ölçü standardı: 800 × 1200 mm neden bu kadar yerleşik?",
        p: [
          "800 × 1200 mm, ISO 6780'de tanımlanan ana palet ölçülerinden biridir ve Avrupa'da Euro paletin taban ölçüsüdür. Üretim ve kalite ayrıntıları ise EPAL gibi sistemlerin şartnamelerinde ve EN 13698-1 gibi standartlarda anlatılır. Bu yüzden “80x120” yalnızca bir ölçü, “Euro palet” ise ölçüye ek olarak belirli bir yapıyı (dokuz blok, dört yönlü giriş) anlatır.",
          "Pratikte ölçü standardı size iki şey kazandırır: alıcınızın rafı ve rampası büyük olasılıkla bu palete göre kurulmuştur, ayrıca tır ve konteyner doluluğu hesabı bilinen bir ölçü üzerinden yapılır.",
        ],
        links: [["Euro palet ölçüleri rehberi", "/rehber/euro-palet-olculeri/"], ["Palet yüksekliği kaç cm?", "/rehber/palet-yuksekligi-kac-cm/"]],
      },
      {
        h: "Yük değerlerini doğru okumak",
        p: [
          "Palet için verilen kapasite tek bir sayı değildir. Aynı palet, kullanım biçimine göre farklı yükleri güvenle taşır; bu değerleri birbirinin yerine kullanmak hasarın en sık görülen nedenlerinden biridir.",
          "İkinci el ve onarılmış paletlerde bu değerler sıfır palet kadar güvenilir kabul edilmemelidir; ağır ve raflı işlerde yükü sıfır veya 1. sınıf palete göre planlamak daha güvenlidir.",
        ],
        table: {
          caption: "Yük türlerinin anlamı",
          head: ["Yük türü", "Ne anlama gelir", "Dikkat edilecek nokta"],
          rows: [
            ["Dinamik yük", "Forklift veya transpaletle hareket halindeki yük", "Euro ölçülü palette yaklaşık 1.500 kg olarak anılır"],
            ["Statik yük", "Yerde, üst üste dururken taşınan yük", "Alttaki paletin durumuna ve istif yüksekliğine bağlıdır"],
            ["Raf yükü", "İki kiriş üzerinde duran palet yükü", "Kiriş aralığı ve palet yapısı belirleyicidir; raf üreticisi verisine bakılmalı"],
          ],
        },
        links: [["Palet kaç kg taşır?", "/rehber/palet-kac-kg-tasir/"], ["Palet raf sistemleri ve raf yükü", "/rehber/palet-raf-sistemleri-ve-raf-yuku/"]],
      },
      {
        h: "Sektöre göre seçim",
        table: {
          head: ["Sektör", "Öne çıkan ihtiyaç", "Uygun tercih"],
          rows: [
            ["Gıda ve içecek", "Temizlik, koku olmaması, tutarlı yapı", "Sıfır veya sıkı kontrollü 1. sınıf Euro ölçülü palet"],
            ["Otomotiv yan sanayi", "Kasa ve küçük parça, tekrarlı kullanım", "Sıfır veya onarılmış ikinci el; sevkiyatta sıfır"],
            ["Beyaz eşya", "Yüksek istif, dengeli taban", "Sağlam blok ve düz yüzeyli Euro palet"],
            ["E-ticaret ve depo", "Raf adresleme, yüksek devir", "Aynı sınıftan, boyutu tutarlı palet"],
            ["İhracat", "Alıcı ülke kuralları", "ISPM-15 uyumlu, HT damgalı palet"],
          ],
        },
        links: [["Beyaz eşya sektörü", "/sektorler/beyaz-esya/"], ["Otomotiv ve yan sanayi", "/sektorler/otomotiv-ve-yan-sanayi/"], ["İhracat ve lojistik", "/sektorler/ihracat-ve-lojistik/"]],
      },
      {
        h: "Sıfır, ikinci el ve plastik arasında karar",
        p: [
          "Karar çoğu zaman paletin kaç kez döneceğine bağlıdır. Alıcıda kalan tek yön sevkiyatta ikinci el veya sıfır ahşap yeterlidir. Aynı palet fabrikanız ile depolarınız arasında yıllarca dönecekse plastik alternatifi de hesaba katılmalıdır; ilk yatırım yüksek, kullanım başına maliyet ise döngü sayısıyla düşer.",
          "Ahşap ve plastik karşılaştırması, ISPM-15 yükümlülüğü ve onarım imkânı gibi başlıklar rehberde ayrıntılıdır.",
        ],
        links: [["Ahşap mı plastik mi?", "/rehber/ahsap-palet-mi-plastik-palet-mi/"], ["Plastik Euro palet", "/urunler/plastik-euro-palet/"], ["İkinci el Euro palet", "/urunler/ikinci-el-euro-palet/"]],
      },
    ],
    faq: [
      { q: "Euro palet ile 80x120 plastik palet birbirinin yerine kullanılabilir mi?", a: "Taban ölçüsü aynı olduğu için rafa ve tıra uyar. Ancak ağırlık, kayma davranışı ve kapasite farklıdır; otomatik hat veya raf kullanıyorsanız plastik modelin yük değerlerini üreticiden doğrulayın." },
      { q: "Palet yüksekliği neden önemli?", a: "Çatal girişi, transpalet ve raf gözü yüksekliği paletin toplam yüksekliğiyle uyumlu olmalıdır. Tır ve konteynerde üst üste yükleme yapıyorsanız yük yüksekliği de buna eklenir." },
      { q: "Bir palette birden fazla ölçü karışık gelirse ne yapılır?", a: "Karışık ölçülü parti istifte ve rafta sorun çıkarır. Siparişte ölçüyü ve yapıyı netleştirmek, teslimatta da bir kısmını ölçü ve sayı açısından kontrol etmek yerinde olur." },
    ],
  },

  "epal-palet": {
    sections: [
      {
        h: "Damgalı palet ne zaman şarttır, ne zaman şart değildir?",
        p: [
          "Damga gereksinimi teknik bir zorunluluktan çok sözleşme konusudur. Palet takası yapılan, palet havuzuna katılan veya alıcının EPAL damgalı palet istediği işlerde damga aranır. Fabrikanın kendi depoları arasında dönen ya da alıcıda kalan paletlerde ise ölçü doğru ve yapı sağlam olduğu sürece damga aranmaz.",
          "Bu ayrımı sipariş öncesinde alıcı ile netleştirmek, hem fazladan ödeme yapmayı hem de teslimde reddedilen partiyle karşılaşmayı önler.",
        ],
        links: [["EPAL ile standart palet farkı", "/rehber/epal-palet-ile-standart-palet-farki/"], ["Palet havuzu ve kiralama", "/rehber/palet-havuzu-ve-palet-kiralama/"]],
      },
      {
        h: "Damga ve onarım kontrolü için sahada bakılacaklar",
        list: [
          "Logo yan bloklarda okunur olmalı; silinmiş, kazınmış veya sonradan boyanmış damga güven vermez.",
          "Onarılmış tahtalar yerindeki orijinal tahtalarla kalınlık ve çivi düzeni bakımından uyumlu görünmelidir.",
          "Bloklarda çatlama, ezilme veya kopma olmamalı; dokuz bloğun tamamı yerinde bulunmalıdır.",
          "Aynı partide damgalı ve damgasız paletler karışmışsa bu teklifte açıkça yazılmalıdır.",
          "İhracat yapılacaksa EPAL damgası ISPM-15 ısıl işlem damgasının yerine geçmez; ikisi ayrı ayrı kontrol edilir.",
        ],
        p: ["Damga okunabilirliği tartışmalıysa partiden fotoğraf ya da depoda inceleme istemek makul bir yoldur."],
        links: [["İkinci el palet alırken dikkat edilecekler", "/rehber/ikinci-el-palet-alirken-dikkat-edilecekler/"], ["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"]],
      },
      {
        h: "EPAL, Turpal ve damgasız palet: hangisi hangi iş için?",
        table: {
          head: ["İhtiyaç", "Uygun seçenek", "Not"],
          rows: [
            ["Avrupa'ya palet takaslı sevkiyat", "Damgalı EPAL", "Alıcı şartnamesi esas alınır"],
            ["Yurt içi zincir mağaza tedariki", "Alıcının istediği sistem (Turpal veya EPAL olabilir)", "Şartnameyi önceden isteyin"],
            ["Tek yönlü yurt içi sevkiyat", "Aynı ölçüde damgasız, sağlam palet", "Maliyet avantajı sağlar"],
            ["Fabrika içi dolaşım", "Onarılmış ikinci el Euro ölçülü palet", "Damga gerekmez"],
          ],
        },
        links: [["Turpal palet", "/urunler/turpal-palet/"], ["Çakma EPAL palet", "/urunler/cakma-epal-palet/"], ["Euro palet fiyatları", "/euro-palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "EPAL damgalı palet ile ikinci el EPAL palet fiyatı aynı mıdır?", a: "Hayır. Sınıf, damga durumu, onarım geçmişi ve adet fiyatı birlikte belirler. Güncel durumu WhatsApp'tan sorabilir, fiyat tablosuna bakabilirsiniz." },
      { q: "Damgası eksik bir EPAL palet nasıl değerlendirilir?", a: "Okunmayan veya silinmiş damga, paletin takasta kabul edilmesini engelleyebilir. Böyle paletler EPAL olarak sunulmaz; kondisyonuna göre normal ikinci el palet olarak değerlendirilir." },
    ],
  },

  "100x120-palet": {
    sections: [
      {
        h: "Taban alanı, yük ve istif ilişkisi",
        p: [
          "1000 × 1200 mm de ISO 6780 kapsamındaki ana palet ölçülerindendir. Taban alanı 1,20 m² olduğundan aynı palete daha fazla ambalaj dizilir, ancak bu avantaj yalnızca ürün koli düzeni bu tabana uygun olduğunda gerçekleşir. Koli ölçüsü 80x120 tabana tam oturuyorsa 100x120 tercih etmek boş yer yaratır ve tır doluluğunu azaltır.",
          "Bidon, torba ve varil gibi yuvarlak ya da düzensiz tabanlı ambalajlarda ise geniş taban ürünün dengede durmasını sağlar. Kare tabanlı 114x114 (CP3) ile arasındaki farkı CP sayfasında bulabilirsiniz.",
        ],
        links: [["CP palet serisi", "/urunler/cp-palet/"], ["CP3 palet", "/urunler/cp3-palet/"]],
      },
      {
        h: "Ambalaja göre palet düzeni",
        table: {
          head: ["Ambalaj", "Palet üstü düzen", "Dikkat"],
          rows: [
            ["Torba (25 kg gibi)", "Çapraz bağlantılı katlar", "Torba kenardan taşmamalı, streç sıkı sarılmalı"],
            ["Bidon ve kova", "Katlar arası ara levha ile", "Alt katın ezilmemesi için istif sınırı konmalı"],
            ["Koli (iri ebat)", "Taban yüzeyi dolduracak şekilde", "Boşluk kalırsa kayma riski artar"],
            ["Metal profil ve parça", "Takviyeli, kızaklı veya blok yapı", "Ağırlık merkezi ortada olmalı"],
          ],
        },
        p: ["Hangi düzenin güvenli olduğu ürün ağırlığına ve ambalaj dayanımına göre değişir; kritik işlerde ambalaj üreticisinin istif önerisini esas alın."],
        links: [["Palet nasıl istiflenir?", "/rehber/palet-nasil-istiflenir/"], ["1 tır kaç palet alır?", "/rehber/1-tir-kac-palet-alir/"]],
      },
      {
        h: "İhracat ve kimya sevkiyatında dikkat edilecekler",
        p: [
          "İhracata giden 100x120 palette ahşabın ISPM-15 şartına uygun ısıl işlem görmüş ve damgalı olması gerekir. Kimya ve boya gibi ürünlerde ayrıca palet yüzeyinin kuru, temiz ve çıkıntısız olması önemlidir; çivi uçları ambalajı delebilir.",
          "Tehlikeli madde sevkiyatında palet seçimi, taşıma mevzuatı ve alıcının şartnamesine de bağlıdır. Böyle bir sevkiyat yapıyorsanız palet beklentilerinizi sipariş aşamasında yazılı olarak bildirin.",
        ],
        links: [["İhracat paleti", "/urunler/ihracat-paleti/"], ["Kimya ve plastik sektörü", "/sektorler/kimya-ve-plastik/"]],
      },
    ],
    faq: [
      { q: "100x120 palet raflı depoda kullanılabilir mi?", a: "Raf gözü ve kiriş aralığı bu ölçüye göre kurulmuşsa kullanılır. 80x120'ye göre planlanmış raflarda uyum sorunu çıkar; raf ölçüsünü sipariş öncesi kontrol edin." },
      { q: "100x120 ile 114x114 palet aynı kullanım için mi?", a: "İkisi de kimya ve sanayide yaygındır ancak tabanları farklıdır. Ambalajınızın tabana nasıl oturduğu ve konteyner yerleşimi hangisinin uygun olduğunu belirler." },
    ],
  },

  "cp-palet": {
    sections: [
      {
        h: "CP numaralarını seçerken hangi sorular sorulmalı?",
        p: [
          "CP serisinin amacı kimya sektöründeki ambalaj ve palet ölçülerini birbirine uyumlu hâle getirmektir. Bu nedenle doğru CP tipi, ürünün ambalaj ölçüsünden ve paletin gideceği yerden çıkar: aynı ürün hem iç piyasaya hem Avrupa'ya hem Uzak Doğu'ya gidiyorsa her hat için farklı CP gerekebilir.",
          "Sipariş vermeden önce üç şeyi netleştirin: ambalaj tabanı (çap veya en-boy), palet başına planlanan kat sayısı ve alıcının belirttiği CP tipi. Alıcı CP numarasını belirtiyorsa teklif aşamasında aynen yazın.",
        ],
        links: [["CP paletleri ölçü tablosu", "/rehber/cp-paletleri-olcu-tablosu/"]],
      },
      {
        h: "Malzeme: ahşap mı plastik mi?",
        table: {
          head: ["Ölçüt", "Ahşap CP", "Plastik CP"],
          rows: [
            ["İlk maliyet", "Daha düşük", "Daha yüksek"],
            ["Sızıntı ve temizlik", "Sızan ürünü emebilir", "Silinebilir, yıkanabilir"],
            ["İhracat", "ISPM-15 damgası gerekir", "ISPM-15 kapsamı dışında"],
            ["Tekrar kullanım", "Onarımla uzar", "Uzun ömürlü, onarımı zor"],
          ],
        },
        p: ["Kimyasal sızıntı riski olan işlerde ahşap palet bulaşma nedeniyle atığa dönüşebilir; bu durumu palet seçiminde maliyete katmak gerekir."],
        links: [["Plastik palet", "/urunler/plastik-palet/"], ["100x120 plastik palet", "/urunler/100x120-plastik-palet/"]],
      },
      {
        h: "Teslim alırken yapılacak kısa kontrol",
        steps: [
          "Ölçüyü şerit metreyle kontrol edin; 1140 × 1140 mm kare ve 1000 × 1200 mm dikdörtgen tabanı karıştırmak yaygın hatadır.",
          "Bloklarda ve kızaklarda çatlak, tahtalarda çıkık çivi arayın.",
          "İhracat paleti ise IPPC damgasının okunur ve HT ibaresinin görünür olduğunu doğrulayın.",
          "Örnek paletlerde ambalaj dizilimini deneyin; yük taşıyorsa bir sonraki partiden önce uyarı verin.",
        ],
        links: [["İhracatta palet ve ambalaj kuralları", "/rehber/ihracatta-palet-ve-ambalaj-kurallari/"]],
      },
    ],
    faq: [
      { q: "CP palet ile 100x120 palet arasındaki fark nedir?", a: "CP1 ölçüsü 1000 × 1200 mm olduğundan 100x120 ile aynı tabana sahiptir. Fark isimlendirmededir; CP bir seri adıdır, 100x120 ise yalnızca ölçüyü anlatır." },
      { q: "CP palet siparişinde teknik çizim gerekir mi?", a: "Standart CP ölçüleri için gerekmez. Ölçü ve adet yeterlidir; standart dışı yükleme veya takviye isteniyorsa yük bilgisi ve fotoğraf teklifi hızlandırır." },
    ],
  },

  "ikinci-el-palet": {
    sections: [
      {
        h: "İkinci el paletin ömrü neye bağlıdır?",
        p: [
          "Ahşap palet çürüme, çatlama ve çivi gevşemesi ile yıpranır. Kuru ve kapalı alanda kullanılmış, düzgün istiflenmiş palet yıllarca dolaşabilirken, yağmura maruz kalmış veya forklift çatalıyla sık zorlanmış palet kısa sürede kullanılamaz hâle gelir.",
          "Bu yüzden iki aynı görünümlü palet arasında bile ömür farkı olabilir. Satın alırken kısa bir örnek testi (düz zeminde sallanma, tahta oynaması, blok sağlamlığı) bu farkı hızlıca gösterir.",
        ],
        links: [["Palet ömrü nasıl uzatılır?", "/rehber/palet-omru-nasil-uzatilir/"], ["İkinci el palet güvenli mi?", "/rehber/ikinci-el-palet-guvenli-mi/"]],
      },
      {
        h: "Sınıfa göre kullanım rehberi",
        table: {
          head: ["Kullanım", "1. sınıf", "2. sınıf", "Sıfır palet"],
          rows: [
            ["Zeminde depolama", "Uygun", "Hafif yüklerde uygun", "Uygun"],
            ["Yurt içi sevkiyat", "Uygun", "Alıcı kabul ederse", "Uygun"],
            ["Raflı depo", "Sınırlı, kontrole bağlı", "Önerilmez", "Uygun"],
            ["Gıda teması olan alan", "Önerilmez", "Önerilmez", "Uygun"],
            ["İhracat", "Damga ve durum yetersizse uygun değil", "Uygun değil", "HT damgalı seçenek"],
          ],
        },
        p: ["Tablodaki öneriler genel çerçevedir; alıcınızın şartnamesi her zaman önceliklidir."],
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"], ["Sıfır mı ikinci el mi?", "/rehber/sifir-palet-mi-ikinci-el-palet-mi/"]],
      },
      {
        h: "Parti büyüklüğü ve karışık sınıf riski",
        p: [
          "Büyük partilerde sınıf dağılımını önceden yazılı hâle getirmek en sağlıklı yoldur. Örneğin “yalnızca 1. sınıf” istendiğinde teklif ve teslimat bu şartla yürür; belirtilmediğinde sınıflar karışabilir. Karışık parti bazı işletmeler için bilinçli bir tercihtir, ancak bunun fiyat ve kalite beklentisiyle birlikte konuşulması gerekir.",
          "Elinizde fazlalık veya hasarlı palet varsa bunları hurda ya da kırık palet alımı hizmetiyle değerlendirmek, yeni ikinci el alımının net maliyetini düşürebilir.",
        ],
        links: [["Kırık palet alımı", "/hizmetler/kirik-palet-alimi/"], ["Palet tamiri", "/hizmetler/palet-tamiri/"], ["Toptan palet", "/hizmetler/toptan-palet/"]],
      },
    ],
    faq: [
      { q: "İkinci el palette tamir ne kadar yapılır?", a: "Kırık tahta ve zayıf bloklar değiştirilir, çıkık çiviler düzeltilir. Yapısı bozulmuş palet onarılmaz; hurda grubuna ayrılır." },
      { q: "Karışık ölçülü ikinci el palet alınabilir mi?", a: "Alınabilir ama otomasyon, raf ve istifte sorun çıkarır. Aynı ölçü ve sınıf isteniyorsa siparişte yazılmalıdır." },
    ],
  },

  "sifir-ahsap-palet": {
    sections: [
      {
        h: "Yük sınıfına göre sıfır palet nasıl seçilir?",
        p: [
          "Sıfır palette en sık yapılan hata, paleti yalnızca ölçüsüne göre seçmektir. Aynı 800 × 1200 mm tabanda hafif hizmet standart palet de, dokuz bloklu Euro ölçülü palet de, güçlendirilmiş palet de bulunur. Aralarındaki fark tahta kalınlığı, tahta sayısı ve blok ya da kızak yapısından gelir.",
          "Yükünüzün ağırlığı, palet üzerindeki dizilimi ve paletin kaç kez kullanılacağı bilindiğinde uygun yapı hızla çıkar.",
        ],
      },
      {
        h: "Yapı ve kullanım karşılaştırması",
        table: {
          head: ["Yapı", "Tipik yük", "Kullanım"],
          rows: [
            ["Hafif hizmet standart", "Hafif koli ve ambalajlı ürün", "Tek yönlü sevkiyat, kısa süreli kullanım"],
            ["Euro ölçülü (9 blok)", "Orta ve ağır yük", "Raf, tekrarlı kullanım, genel lojistik"],
            ["100x120 sıfır", "Torba, bidon, geniş taban", "Kimya, sanayi, ihracat"],
            ["Takviyeli / özel ölçü", "Ağır veya standart dışı yük", "Makine, ekipman, uzun ürün"],
          ],
        },
        links: [["Takozlu palet", "/urunler/takozlu-palet/"], ["İnce palet", "/urunler/ince-palet/"], ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"]],
      },
      {
        h: "Kereste kuruluğu ve çivi: sessiz kalite farkları",
        list: [
          "Kuru kereste paletin ağırlığını ve boyutunu sabit tutar; yaş kereste çarpılır ve çivi tutuşu zayıflar.",
          "Halkalı veya spiral çivi, düz çiviye göre tahtayı yerinde daha iyi tutar.",
          "Tahtaların kenarlarının düzgün kesilmiş olması paketli ürünü yırtmaz.",
          "Blokların hizalı olması forklift girişini ve istif kararlılığını belirler.",
          "Gıda veya ilaçla temas eden alanlarda kokusuz ve temiz kereste önemlidir.",
        ],
        p: ["Bu ayrıntılar fiyat tablosunda görünmez; bu nedenle teklif isterken tahta kalınlığı ve nem beklentinizi yazmak iyi bir alışkanlıktır."],
        links: [["Ahşap palet nedir?", "/rehber/ahsap-palet-nedir/"], ["Ahşap palet fiyatları", "/ahsap-palet-fiyatlari/"]],
      },
    ],
    faq: [
      { q: "Sıfır ahşap palette tahta sayısı neden önemli?", a: "Tahta sayısı yükün tabana yayılmasını belirler. Seyrek tahtalı palet hafif koliler için yeterliyken, sık tahtalı palet ince tabanlı veya küçük ambalajlarda daha dengeli taşır." },
      { q: "Sıfır paleti hangi sıklıkla yenilemek gerekir?", a: "Sabit bir süre yoktur. Kullanım yoğunluğu, nem ve forklift darbesi belirleyicidir; kırık tahta veya gevşek blok görülen palet ayıklanmalıdır." },
    ],
  },

  "plastik-palet": {
    sections: [
      {
        h: "Plastik paletin toplam maliyet mantığı",
        p: [
          "Plastik paletin ilk alım fiyatı ahşaptan yüksektir; maliyet avantajı döngü sayısıyla ortaya çıkar. Aynı palet alıcıdan fabrikaya geri dönüyorsa, kırılma ve çürüme olmadığı için kullanım başına maliyet düşer. Palet bir kez gidip dönmüyorsa hesap ahşap lehine çalışır.",
          "Bu yüzden karar verirken şu soruyu sorun: paletin sistemde kaç kez dolaşması bekleniyor ve kaybolma, hasar ve iade yönetimini işletmeniz üstlenebilir mi?",
        ],
        links: [["Plastik palet fiyatları", "/plastik-palet-fiyatlari/"], ["Palet maliyetini düşürmenin yolları", "/rehber/palet-maliyetini-dusurmenin-yollari/"]],
      },
      {
        h: "Model seçerken bakılacak teknik başlıklar",
        table: {
          head: ["Başlık", "Ne sorulmalı", "Neden önemli"],
          rows: [
            ["Dinamik yük", "Üreticinin verdiği değer", "Forklift ile hareket halindeki güvenli yük"],
            ["Statik yük", "Yerde istif edilen yük", "Üst üste istifte alt palet dayanımı"],
            ["Raf yükü", "Hangi kiriş aralığı için verildi", "Rafta bükülme riskini belirler"],
            ["Üst yüzey", "Kapalı veya ızgara", "Hijyen mi, drenaj ve havalandırma mı öncelik"],
            ["Kayma", "Yüzey dokusu veya kaydırmaz kenar", "Streçli yükün palet üstünde durması"],
            ["Ölçü", "800 × 1200 veya 1000 × 1200 mm", "Raf, tır ve hat uyumu"],
          ],
        },
        p: ["Plastik palet verileri üreticiye ve modele göre değiştiği için kesin sayıları yalnızca ilgili ürün belgesinde aramak gerekir."],
        links: [["Plastik palet çeşitleri", "/rehber/plastik-palet-cesitleri/"], ["Hijyenik plastik palet", "/urunler/hijyenik-plastik-palet/"], ["İkinci el plastik palet", "/urunler/ikinci-el-plastik-palet/"]],
      },
      {
        h: "Hangi sektörlerde öne çıkar?",
        list: [
          "Gıda ve içecek: yıkanabilir yüzey ve kıymık riskinin olmaması",
          "Kimya: sızıntıya karşı silinebilir yüzey",
          "Otomatik depolar: sabit ağırlık ve ölçü toleransı",
          "Kapalı döngü tedarik zincirleri: aynı paletin düzenli geri dönmesi",
        ],
        links: [["Gıda ve içecek sektörü", "/sektorler/gida-ve-icecek/"], ["Kimya ve plastik sektörü", "/sektorler/kimya-ve-plastik/"]],
      },
    ],
    faq: [
      { q: "Plastik palet kırılırsa onarılır mı?", a: "Genellikle onarılamaz. Çatlayan veya kırılan palet kullanımdan çıkarılır; malzeme geri dönüşüme verilebilir. Bu nedenle çarpma ve forklift kullanımı açısından doğru model seçilmelidir." },
      { q: "Plastik palet kaymaz mı?", a: "Yüzey dokusuna bağlıdır. Kaymaya karşı tasarlanmış modeller vardır; streç sarım ve yükün düzgün dizilmesi her durumda ayrıca önemlidir." },
    ],
  },

  "145x145-palet": {
    sections: [
      {
        h: "Büyük kare paletin tasarım kararları",
        p: [
          "145x145 palet standart bir tablodan seçilmez; yüke göre kurgulanır. Kare tabanda blok dizilimi, kızak sayısı ve tahta kalınlığı, yükün ağırlık merkezi ve taşıma yöntemine göre belirlenir. Tek bir ağır makine ile çok sayıda hafif panel aynı tabanda tamamen farklı yapılar gerektirir.",
          "Bu yüzden sipariş öncesi en değerli bilgi, yükün tabanının fotoğrafı ve kg cinsinden ağırlığıdır.",
        ],
      },
      {
        h: "Ürün tipine göre öneri",
        table: {
          head: ["Yük", "Önemli nokta", "Palet yapısı"],
          rows: [
            ["Cam ve mermer levha", "Dik taşıma, destek", "Kenar desteği ve yan korumalı yapı"],
            ["Makine ve ekipman", "Noktasal ağırlık", "Kalın kızak ve çapraz takviye"],
            ["Panel ve kapı", "Geniş yüzey, düşük ağırlık", "Hafif ama düzgün yüzeyli taban"],
            ["Büyük ambalajlı mamul", "İstif yüksekliği", "Blok yapı, dört yönlü giriş"],
          ],
        },
        p: ["Yük çok ağır, hassas veya değerliyse palet yerine ahşap sandık da seçenek olabilir."],
        links: [["Ahşap sandık", "/urunler/ahsap-sandik/"], ["Özel ölçü palet fiyatları", "/ozel-olcu-palet-fiyatlari/"]],
      },
      {
        h: "Forklift ve istif planı",
        p: [
          "1450 mm kenar uzunluğu, standart çatal boyunun paletin tamamını taşımasını güçleştirebilir. Çatal uzunluğu yetmezse yük ucundan sarkar ve denge bozulur. Tesisinizdeki forklift veya transpalet çatal boyunu sipariş sırasında bildirin.",
          "Üst üste istif planlanıyorsa alttaki paletin dayanımı ve zeminin düzgünlüğü de değerlendirilmelidir.",
        ],
        links: [["Palet nasıl istiflenir?", "/rehber/palet-nasil-istiflenir/"], ["Palet kaç kg taşır?", "/rehber/palet-kac-kg-tasir/"]],
      },
    ],
    faq: [
      { q: "145x145 palet için hangi bilgiler teklifi hızlandırır?", a: "Yükün ölçüsü, ağırlığı, çatal veya vinçle taşınıp taşınmadığı, istif planı ve ihracat gereksinimi. Fotoğraf ve varsa çizim eklemek tasarımı kısaltır." },
      { q: "145x145 palet raflı sistemde kullanılır mı?", a: "Standart raf gözleri bu ölçüye göre kurulmadığı için genellikle zeminde veya özel raflarda kullanılır. Raf ölçüsünü doğrulamadan sipariş vermeyin." },
    ],
  },

  "turpal-palet": {
    sections: [
      {
        h: "Turpal şartı olan bir işte nasıl ilerlenir?",
        p: [
          "Alıcınız sözleşmede Turpal damgalı palet istiyorsa önce şartnamenin ayrıntısını isteyin: yalnızca damgalı yeni palet mi, onarılmış damgalı palet de mi kabul ediliyor, ölçü 800 × 1200 mi yoksa başka bir tip mi? Bu üç bilgi tedarik yolunu belirler.",
          "MEPAL lisanslı üretici olmadığı için damgalı palet şartında doğru yol, lisanslı üretici ya da onarımcıyla çalışmak veya stokta damgalı palet varsa onun durumunu birlikte teyit etmektir. Damgayı olmayan paleti damgalıymış gibi sunmayız.",
        ],
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"], ["Palet havuzu ve palet kiralama", "/rehber/palet-havuzu-ve-palet-kiralama/"]],
      },
      {
        h: "Alternatif yollar",
        table: {
          head: ["Durum", "Yol", "Not"],
          rows: [
            ["Turpal damgası zorunlu", "Lisanslı üreticiden temin", "Lisans kodu ve belge kontrol edilir"],
            ["Yalnızca ölçü ve kalite önemli", "Euro ölçülü sıfır veya 1. sınıf palet", "Damgasız olarak tanıtılır"],
            ["Yurt dışı alıcı EPAL istiyor", "EPAL damgalı palet", "Turpal yerine geçmez"],
            ["Sadece iç dolaşım", "Onarılmış ikinci el", "Maliyeti düşürür"],
          ],
        },
        links: [["EPAL palet", "/urunler/epal-palet/"], ["80x120 Euro palet", "/urunler/80x120-euro-palet/"], ["İkinci el Euro palet", "/urunler/ikinci-el-euro-palet/"]],
      },
    ],
    faq: [
      { q: "Turpal damgalı ikinci el palet alınabilir mi?", a: "Damga okunur, lisans kodu geçerli ve palet kondisyonu şartnameye uygunsa mümkündür. Doğrulama için kod dernek listesinde kontrol edilmelidir." },
      { q: "Turpal şartı olmayan sevkiyatta damgalı palet gerekli mi?", a: "Hayır. Yasal bir zorunluluk yoktur; şart sözleşme veya alıcı talebinden gelir. Şart yoksa sağlam, aynı ölçülü palet çoğu işe yeterlidir." },
    ],
  },

  "ozel-olcu-palet": {
    sections: [
      {
        h: "Palet ölçüsü ile ambalaj ölçüsü arasındaki oran",
        p: [
          "Özel ölçüde en sık yapılan hata, paleti ürünün tam ölçüsüne eşitlemektir. Ürün tabanının her kenardan küçük bir pay bırakması, çatal girişlerinin açık kalmasını ve streç sarımın ürünü paleti birlikte saramasını sağlar. Aksine, aşırı büyük palet hem malzemeyi hem de tır alanını boşa harcar.",
          "Ölçüyü seçerken standart konteyner ve tır iç genişliğini de düşünmek gerekir; ölçüyü kolay istiflenecek biçimde belirlemek yükleme sayısını artırabilir.",
        ],
        links: [["Konteynere ve tıra kaç palet sığar?", "/rehber/konteynere-ve-tira-kac-palet-sigar/"], ["Konteyner palet hesaplama", "/araclar/konteyner-palet-hesaplama/"]],
      },
      {
        h: "Özel palet yerine standart ölçüyü ne zaman seçmeli?",
        list: [
          "Yük 80x120, 100x120 veya 114x114 tabana makul ölçüde oturuyorsa",
          "Alıcının rafı ve hattı standart ölçüye göre kuruluysa",
          "Küçük adetli tek seferlik sevkiyatta özel üretim maliyeti ürüne yük oluyorsa",
          "Zaman çok kısıtlıysa ve stoktan çıkış gerekiyorsa",
        ],
        p: ["Aksine, aynı özel ölçüyü düzenli olarak kullanıyorsanız özel üretim hem ürüne tam oturur hem de zamanla birim maliyeti dengeler."],
        links: [["Palet seçici", "/araclar/palet-secici/"], ["Palet danışmanı", "/araclar/palet-danismani/"], ["Özel ölçü palet fiyatları", "/ozel-olcu-palet-fiyatlari/"]],
      },
      {
        h: "Sandık mı palet mi?",
        p: [
          "Ürün hassas, çok ağır veya kenarlarından korunması gerekiyorsa palet yeterli olmayabilir. Ahşap sandık yükü her yönden sarar; özellikle ihracatta darbe ve nem koruması istenen makine ve ekipman için tercih edilir. Sandık da ham ahşap olduğundan ISPM-15 şartlarına tabidir.",
        ],
        links: [["Ahşap sandık", "/urunler/ahsap-sandik/"], ["Ambalaj paleti", "/urunler/ambalaj-paleti/"]],
      },
    ],
    faq: [
      { q: "Özel ölçülü paletin yük kapasitesi nasıl belirlenir?", a: "Yükün ağırlığı ve dağılımı, istif yüksekliği ve taşıma yöntemi bildirildiğinde tahta kalınlığı ve takviye buna göre planlanır. Kapasite yük bilgisi olmadan sözle verilmez." },
      { q: "Daha önce kullandığım özel ölçülü paleti aynen yaptırabilir miyim?", a: "Evet. Eski paletin fotoğrafı, ölçüsü ve mümkünse bir numunesi, aynı yapıda üretim için yeterli referanstır." },
    ],
  },

  "ihracat-paleti": {
    sections: [
      {
        h: "Damganın bileşenleri ve ne anlama geldiği",
        p: [
          "ISPM-15 damgası rastgele bir işaret değildir; belirli unsurları içerir. IPPC logosu uluslararası bitki sağlığı sözleşmesine atıf yapar, ülke kodu işlemin yapıldığı ülkeyi (Türkiye için TR), üretici kodu işlemi yapan işletmeyi, işlem kısaltması ise uygulanan yöntemi (ısıl işlem için HT) gösterir.",
          "Gümrük veya karantina yetkilisinin damgayı okuyabilmesi şarttır. Kirlenmiş, boyanmış veya yırtılmış damga okunmayabilir; bu da yükün bekletilmesine neden olabilir.",
        ],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"], ["Isıl işlemli palet", "/urunler/isil-islemli-palet/"]],
      },
      {
        h: "İhracat öncesi palet için kontrol sırası",
        steps: [
          "Alıcı ülkenin ahşap ambalaj kuralını ve varsa ek belge isteğini öğrenin.",
          "Paletin damgasının her palette, görünür ve okunur olduğunu kontrol edin.",
          "Tahtalarda kabuk, böcek deliği ve küf bulunmadığını gözleyin.",
          "Palet ölçüsünü konteyner veya tır planına göre doğrulayın.",
          "Yükleme sonrası fotoğraf almak, olası bir uyuşmazlıkta işinize yarar.",
        ],
        links: [["İhracatta palet ve ambalaj kuralları", "/rehber/ihracatta-palet-ve-ambalaj-kurallari/"], ["Konteyner palet hesaplama", "/araclar/konteyner-palet-hesaplama/"]],
      },
      {
        h: "Ahşap, plastik ve diğer malzemeler",
        table: {
          head: ["Malzeme", "ISPM-15 durumu", "Not"],
          rows: [
            ["Ham ahşap palet", "Kapsamında; HT damgası gerekir", "En yaygın ihracat paleti"],
            ["Ham ahşap sandık", "Kapsamında", "Aynı damga kuralları"],
            ["Plastik palet", "Kapsam dışı", "Alıcının ek şartı olabilir"],
            ["İşlenmiş ahşap ürünler (kontrplak, OSB)", "Genellikle kapsam dışı", "Alıcı ülke şartını doğrulayın"],
          ],
        },
        links: [["Plastik palet", "/urunler/plastik-palet/"], ["Ahşap sandık", "/urunler/ahsap-sandik/"]],
      },
    ],
    faq: [
      { q: "ISPM-15 damgası her palete ayrı mı basılır?", a: "Evet, damga her ahşap ambalaj parçasının üzerinde görünür olmalıdır. Partinin bir kısmında eksik damga gümrükte sorun çıkarabilir." },
      { q: "İkinci el palet ihracatta kullanılabilir mi?", a: "Damga okunaklı ve işlem kayıtları uygunsa teknik olarak mümkündür; ancak durum kontrolü zordur. Güvenli yol yeni, HT damgalı palettir." },
    ],
  },

  "ikinci-el-euro-palet": {
    sections: [
      {
        h: "İkinci el Euro paletin iç lojistikte yeri",
        p: [
          "Fabrika içinde ürün hatları arasında dolaşan palet, çoğu zaman sevkiyata hiç çıkmaz. Böyle bir kullanımda her palet için sıfır malzeme almak gereksiz maliyet yaratır; onarılmış ikinci el Euro palet aynı ölçü ve çatal girişini çok daha düşük maliyetle sağlar.",
          "Aynı palet tır yüklemesine girecekse bu kez sınıf ve görünüm devreye girer: alıcıya giden palette 1. sınıf, hat içi dolaşımda 2. sınıf daha makul bir ayrımdır.",
        ],
        links: [["İkinci el palet", "/urunler/ikinci-el-palet/"], ["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"]],
      },
      {
        h: "Kullanım alanına göre sınıf seçimi",
        table: {
          head: ["Kullanım alanı", "Önerilen sınıf", "Neden"],
          rows: [
            ["Üretim hattı içi dolaşım", "2. sınıf", "Aşınma izi sorun olmaz"],
            ["Zeminde depolama", "1. veya 2. sınıf", "Yükün ağırlığına göre"],
            ["Yurt içi müşteri sevkiyatı", "1. sınıf", "Görünüm ve sağlamlık"],
            ["Raflı depo", "Duruma bağlı 1. sınıf", "Rafta güvenlik kontrolü gerekir"],
          ],
        },
        p: ["Raf kullanımı için palet bloklarının ve alt tahtalarının sağlamlığı ayrıca doğrulanmalıdır."],
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"], ["Palet raf sistemleri ve raf yükü", "/rehber/palet-raf-sistemleri-ve-raf-yuku/"]],
      },
      {
        h: "Düzenli ihtiyaç ve geri alım",
        p: [
          "Her ay benzer adette palete ihtiyaç duyan işletmeler için düzenli tedarik planı yapılabilir. Bunun yanında kullanım sonrası fazla kalan veya hasar görmüş paletler hurda ya da kırık palet alımı hizmetiyle değerlendirilebilir; böylece alım ve satım aynı iş akışında toparlanır.",
        ],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Talepten teslimata süreç", "/surec/"]],
      },
    ],
    faq: [
      { q: "İkinci el Euro palette çivi çıkıntısı olur mu?", a: "Onarım sırasında çıkık çiviler düzeltilir. Yine de teslimde örnek paletlere bakın; yükü yırtabilecek çıkıntı varsa ayıklanması gerekir." },
      { q: "Aynı partide 1. ve 2. sınıf birlikte alınabilir mi?", a: "Alınabilir; sınıf oranı teklifte yazılmalıdır. Hat içi ve sevkiyat için ayrı ayrı sınıf seçmek maliyeti dengelemenin pratik bir yoludur." },
    ],
  },

  "isil-islemli-palet": {
    sections: [
      {
        h: "HT, MB ve diğer işlem kodları",
        p: [
          "ISPM-15 iki ana işlemi kabul eder: ısıl işlem (HT) ve metil bromür ile fumigasyon (MB). Sektörde ısıl işlem yaygın olarak tercih edilir; metil bromür kullanımı birçok ülkede kısıtlanmıştır. Bu nedenle ihracat paletinde HT damgası beklenmesi olağan bir yaklaşımdır.",
          "Alıcının sözleşmesinde HT dışında bir işlem kodu istenmediyse ısıl işlemli palet pratikte güvenli yoldur.",
        ],
        links: [["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"]],
      },
      {
        h: "Isıl işlem sonrası sevkiyata kadar nelere dikkat edilir?",
        list: [
          "Palet nemden ve yağmurdan korunarak depolanmalı; ıslanan ahşap yeniden küflenebilir.",
          "Damgalı yüzey, istif sırasında ezilmemeli veya boyanmamalı.",
          "Başka bir ahşap parça (takoz, dayanak) palete eklenecekse onun da işlemli ve damgalı olması gerekir.",
          "Tamir edilen palet damgasını koruyor olsa da, sonradan eklenen tahtalar kuralı bozabilir; bu durumda yeniden uygunluk teyit edilmelidir.",
        ],
        links: [["Palet tamiri", "/hizmetler/palet-tamiri/"], ["İhracat paleti", "/urunler/ihracat-paleti/"]],
      },
      {
        h: "Isıl işlemli palet ile ihracat sandığı farkı",
        table: {
          head: ["Ürün", "Koruma düzeyi", "Kullanım"],
          rows: [
            ["Isıl işlemli palet", "Taban desteği", "Ambalajlı ve sağlam yükler"],
            ["Ahşap sandık", "Yük her yönden sarılır", "Hassas, ağır, yüksek değerli ekipman"],
            ["Plastik palet", "Taban desteği, ISPM-15 kapsamı dışı", "Alıcı kabul ediyorsa ve hijyen önemliyse"],
          ],
        },
        links: [["Ahşap sandık", "/urunler/ahsap-sandik/"], ["İhracat ve lojistik sektörü", "/sektorler/ihracat-ve-lojistik/"]],
      },
    ],
    faq: [
      { q: "Isıl işlemli palet normal palete göre neden farklı fiyatlanır?", a: "İşlem süreci, damgalama ve belgelendirme ek maliyet getirir. Güncel durum için fiyat tablosuna bakabilir veya adedi yazarak teklif alabilirsiniz." },
      { q: "Isıl işlemli palet yeniden kullanılabilir mi?", a: "Sağlam ve damgası okunur olduğu sürece tekrar sevkiyatta kullanılabilir. Onarımda eklenen yeni tahtaların da kurala uygun olması gerekir." },
    ],
  },

  "ince-palet": {
    sections: [
      {
        h: "Yükseklik avantajı ve çatal uyumu",
        p: [
          "İnce paletin en somut kazancı, yüksekliğin azalmasıyla tır ve konteynerde ürüne ayrılan hacmin artmasıdır. Palet yüksekliği her katta birkaç santimetre kazandırır; üst üste yüklemede bu fark ek koliye yer açabilir. Öte yandan çok alçak palet, bazı transpalet ve forkliftlerin çatalına girmeyebilir.",
          "Kullanacağınız ekipmanın çatal kalınlığını ve alt kenar boşluğunu paleti seçmeden önce kontrol edin.",
        ],
        links: [["Palet yüksekliği kaç cm?", "/rehber/palet-yuksekligi-kac-cm/"], ["1 tır kaç palet alır?", "/rehber/1-tir-kac-palet-alir/"]],
      },
      {
        h: "İnce, standart ve takviyeli palet karşılaştırması",
        table: {
          head: ["Ölçüt", "İnce palet", "Standart / Euro", "Takviyeli"],
          rows: [
            ["Hedef yük", "Hafif", "Orta ve ağır", "Ağır ve düzensiz"],
            ["Kullanım sayısı", "Tek yönlü", "Tekrarlı", "Tekrarlı ve zorlu"],
            ["Raf kullanımı", "Önerilmez", "Uygun", "Yapıya bağlı"],
            ["Maliyet", "En düşük", "Orta", "Daha yüksek"],
          ],
        },
        links: [["80x120 Euro palet", "/urunler/80x120-euro-palet/"], ["Sıfır ahşap palet", "/urunler/sifir-ahsap-palet/"]],
      },
      {
        h: "Hata payını düşüren üç alışkanlık",
        list: [
          "Yükün gerçek ağırlığını tartın; tahmin etmek yerine kayıt tutun.",
          "İlk partiyi küçük adette deneyin; kırılma ve tahta oynaması varsa yapıyı değiştirin.",
          "Nem ve yağmura açık alanda istifleme yapmayın; ince tahta hızla yumuşar.",
        ],
        links: [["Palet maliyetini düşürmenin yolları", "/rehber/palet-maliyetini-dusurmenin-yollari/"]],
      },
    ],
    faq: [
      { q: "İnce palet e-ticaret sevkiyatında uygun mu?", a: "Hafif ve tek yönlü çıkışlarda uygundur. Ürün ağırlığı yüksekse veya palet geri dönecekse standart palet daha güvenli olur." },
      { q: "İnce palet ısıl işlemli olarak istenebilir mi?", a: "Evet. İhracat şartı varsa palet HT damgalı ve ISPM-15 uyumlu olarak talep edilebilir." },
    ],
  },

  "cakma-epal-palet": {
    sections: [
      {
        h: "Alıcıyla yazılı netleştirilmesi gerekenler",
        p: [
          "Çakma EPAL tercih ediyorsanız, alıcıya paletin EPAL damgalı olmadığını önceden bildirmek en güvenli yoldur. Sözleşmede “EPAL ölçülü” yazıyorsa sorun yoktur; “EPAL” yazıyorsa damgasız palet teslim edilmesi uyuşmazlık yaratabilir.",
          "Bu nedenle sipariş vermeden önce alıcının tam olarak neyi şart koştuğunu mail veya WhatsApp yazışmasıyla teyit edin ve teklifimizde ürünün damgasız olduğunu açıkça görün.",
        ],
        links: [["EPAL palet", "/urunler/epal-palet/"], ["Çakma EPAL nedir?", "/rehber/cakma-epal-nedir/"]],
      },
      {
        h: "Karar tablosu",
        table: {
          head: ["Durum", "Çakma EPAL", "Damgalı EPAL"],
          rows: [
            ["Palet alıcıda kalıyor", "Çoğunlukla yeterli", "Gereksiz maliyet olabilir"],
            ["Palet takası var", "Kabul edilmez", "Gerekli"],
            ["Alıcı sözleşmesinde EPAL şartı", "Uygun değil", "Uygun"],
            ["Fabrika içi dolaşım", "Uygun", "Gereksiz maliyet"],
          ],
        },
        links: [["Orta palet", "/urunler/orta-palet/"], ["İkinci el Euro palet", "/urunler/ikinci-el-euro-palet/"]],
      },
    ],
    faq: [
      { q: "Çakma EPAL paletin üzerinde nasıl bir işaret olur?", a: "EPAL logosu ve lisans kodu bulunmaz. Palette bazen üreticinin kendi işareti veya ISPM-15 damgası görülebilir; bunlar EPAL damgası yerine geçmez." },
      { q: "Çakma EPAL palet teslimde reddedilir mi?", a: "Alıcı sözleşmesinde EPAL damgası şartı varsa reddedilebilir. Şart yoksa ölçü ve sağlamlık esas alınır; bu nedenle alıcının şartını sipariş öncesinde yazılı teyit edin." },
    ],
  },
};
