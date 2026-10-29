import type { FAQ, Section } from "@/lib/types";

// Fiyat sayfalarına eklenen derinlik içeriği. pricePages.ts içinde, sayfanın son
// bölümünden (teklif adımları) hemen önce birleştirilir. Hiçbir yerde TL rakamı yazılmaz.
export type PriceDepth = { sections: Section[]; faq: FAQ[] };

export const priceDepth: Record<string, PriceDepth> = {
  "palet-fiyatlari": {
    sections: [
      {
        h: "Fiyat listesini okurken ölçü, malzeme ve sınıfı ayırın",
        p: [
          "Palet fiyatı karşılaştırması çoğu zaman elmayı armutla kıyaslamaya döner. 80x120 ikinci el 2. sınıf palet ile ISPM-15 uyumlu sıfır palet aynı kalemde değildir. Fiyat tablosuna bakarken üç şeyi ayrı ayrı okuyun: taban ölçüsü, malzeme ve durum (sıfır, 1. sınıf, 2. sınıf).",
          "Bir tedarikçiden gelen düşük fiyatın nedeni sıklıkla farklı sınıfta palet teklif etmesidir. Teklifte sınıfın, ölçünün ve damga durumunun yazılı olması karşılaştırmayı gerçek kılar.",
        ],
        links: [["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"], ["Palet fiyatlarını etkileyen faktörler", "/rehber/palet-fiyatlarini-etkileyen-faktorler/"]],
      },
      {
        h: "Hangi sektör hangi palet grubuna bakmalı?",
        table: {
          head: ["Sektör", "Öncelikli ihtiyaç", "Fiyat sayfasında bakılacak grup"],
          rows: [
            ["Gıda ve içecek", "Temiz, kokusuz, tutarlı yapı", "Sıfır Euro ölçülü ahşap veya plastik"],
            ["Otomotiv yan sanayi", "Kasa ve parça sevkiyatı, tekrarlı kullanım", "Euro ölçülü ve 100x120 ahşap"],
            ["Kimya ve plastik", "Geniş taban, ağır ambalaj", "100x120 ve CP serisi"],
            ["İhracat ve lojistik", "Alıcı ülke kuralları", "ISPM-15 uyumlu HT damgalı palet"],
            ["E-ticaret ve depo", "Yüksek devir, raf uyumu", "Aynı sınıftan Euro ölçülü palet"],
          ],
        },
        links: [["Gıda ve içecek", "/sektorler/gida-ve-icecek/"], ["Kimya ve plastik", "/sektorler/kimya-ve-plastik/"], ["E-ticaret ve depo", "/sektorler/e-ticaret-ve-depo/"]],
      },
      {
        h: "Toplam maliyeti düşünmek: palet fiyatı tek kalem değildir",
        p: [
          "Birim palet fiyatı yanında nakliye, istifleme kaybı, kırılan palet oranı ve geri alım değeri de toplam maliyeti oluşturur. Daha ucuz bir palet sık kırılıyorsa, ürün hasarı ve yeniden paletleme masrafı farkı kapatabilir.",
          "Elinizde kullanılmayan palet varsa onları alım satım hizmetiyle değerlendirmek net maliyeti düşürür. Düzenli ihtiyaçta ise aylık plan yaptırmak sipariş sıklığını azaltır.",
        ],
        links: [["Palet maliyetini düşürmenin yolları", "/rehber/palet-maliyetini-dusurmenin-yollari/"], ["Palet alım satım", "/hizmetler/palet-alim-satim/"], ["Talepten teslimata süreç", "/surec/"]],
      },
    ],
    faq: [
      { q: "Fiyat karşılaştırırken nelere dikkat etmeliyim?", a: "Ölçü, sıfır veya ikinci el olması, sınıf, ısıl işlem damgası ve KDV ile nakliyenin dahil olup olmadığı aynı olmalıdır. Aksi hâlde iki teklif birbirine denk değildir." },
      { q: "Fiyat sayfasında olmayan bir ürün için teklif alabilir miyim?", a: "Evet. Özel ölçü, farklı sınıf veya beklenmedik adet için ölçü, yük ve adedi bildirin; teklif ayrıca hazırlanır." },
    ],
  },

  "ahsap-palet-fiyatlari": {
    sections: [
      {
        h: "Ahşap palette maliyetin asıl kalemi: kereste",
        p: [
          "Ahşap paletin maliyeti büyük oranda kereste hacminden gelir. Aynı ölçüde iki palet, tahta kalınlığı ve tahta sayısı farklıysa farklı miktarda ahşap taşır. Bu yüzden ince tahtalı hafif palet ile kalın tahtalı güçlendirilmiş palet aynı fiyat grubunda yer almaz.",
          "Kerestenin kuruluk düzeyi de fiyatı ve kaliteyi etkiler. Kuru kereste palet ağırlığını sabit tutar ve çivi tutuşunu iyileştirir; yaş kereste başlangıçta ucuz görünse de çarpılma ve gevşeme getirir.",
        ],
        links: [["Ahşap palet nedir?", "/rehber/ahsap-palet-nedir/"], ["Tahta palet fiyatları", "/tahta-palet-fiyatlari/"]],
      },
      {
        h: "Ahşap palet türlerine göre karşılaştırma",
        table: {
          head: ["Tür", "Yapı", "Tipik yük", "Fiyat yönü"],
          rows: [
            ["Hafif hizmet standart", "Standart tahta, hafif yapı", "Hafif koli", "En düşük grup"],
            ["Euro ölçülü (9 blok)", "Dört yönlü, dengeli blok yapı", "Orta ve ağır", "Orta grup"],
            ["100x120", "Geniş taban", "Torba, bidon, sanayi", "Daha fazla kereste, ayrı grup"],
            ["CP (114x114)", "Kare taban", "Kimya ambalajı", "Ayrı grup"],
            ["ISPM-15 HT damgalı", "Isıl işlem ve damga", "İhracat", "İşlem nedeniyle ayrı grup"],
            ["Özel ölçü", "Yüke göre tasarım", "Standart dışı", "Teklif ile"],
          ],
        },
        links: [["100x120 palet", "/urunler/100x120-palet/"], ["CP palet", "/urunler/cp-palet/"], ["İhracat paleti", "/urunler/ihracat-paleti/"]],
      },
      {
        h: "Aynı bütçeyle daha sağlıklı seçim",
        list: [
          "Yurt içi tek yön sevkiyatta onarılmış ikinci el palet çoğu zaman yeterlidir.",
          "Gıda, ihracat ve raf yükünde sıfır palet aramak maliyeti değil riski düşürür.",
          "Orta palet gibi piyasa sınıfları bütçeyi dengelemek için değerlendirilebilir; ancak bunlar resmî sınıf değildir.",
          "Düzenli ve büyük adetlerde kademeli fiyat avantajını kullanın.",
        ],
        links: [["Orta palet", "/urunler/orta-palet/"], ["Sıfır ahşap palet", "/urunler/sifir-ahsap-palet/"], ["Orta palet ve kalın orta palet farkı", "/rehber/orta-palet-ve-kalin-orta-palet-farki/"]],
      },
    ],
    faq: [
      { q: "Ahşap palet tahta sayısı arttıkça daha mı pahalı olur?", a: "Genellikle evet, çünkü daha fazla kereste kullanılır. Ama yükünüz seyrek tahtalı palette dengeli duruyorsa gereksiz tahta ödemek yerine yapıyı yüke göre seçmek doğrudur." },
      { q: "Ahşap palet fiyatı mevsime göre değişir mi?", a: "Kereste arzı ve talep zaman zaman değiştiği için güncel fiyatlar değişebilir. Büyük siparişlerde en güncel durumu teklifle öğrenin." },
    ],
  },

  "ikinci-el-palet-fiyatlari": {
    sections: [
      {
        h: "İkinci el palet fiyatı sınıf ve tarihçeyle belirlenir",
        p: [
          "İkinci el palet fiyatı çoğu zaman sınıfa ve partinin kalitesine bağlı olarak dalgalanır. Sıkı ayıklanmış, düzgün onarılmış ve görünümü temiz bir 1. sınıf parti, karışık bir partiden daha yüksek fiyat grubunda yer alır.",
          "Fiyat sorarken yalnızca “ikinci el” demek yerine ölçüyü, sınıfı ve kullanım amacını yazın; böylece size uygun grup teklif edilir ve gereksiz kaliteye para ödemezsiniz.",
        ],
        links: [["Sıfır palet mi ikinci el palet mi?", "/rehber/sifir-palet-mi-ikinci-el-palet-mi/"], ["İkinci el palet güvenli mi?", "/rehber/ikinci-el-palet-guvenli-mi/"]],
      },
      {
        h: "Kullanım amacına göre doğru sınıf",
        table: {
          head: ["Amaç", "Önerilen grup", "Kaçınılacak durum"],
          rows: [
            ["Fabrika içi dolaşım", "2. sınıf", "Raflı depoda kullanmak"],
            ["Yurt içi müşteriye sevkiyat", "1. sınıf", "Kırık tahtalı paleti göndermek"],
            ["Zeminde depolama", "1. veya 2. sınıf", "Nemli alanda uzun süre bekletmek"],
            ["İhracat", "Sıfır, HT damgalı", "Damgasız veya okunmayan paleti kullanmak"],
            ["Gıda teması olan alan", "Sıfır veya çok temiz 1. sınıf", "Koku, küf veya yağ lekeli palet"],
          ],
        },
        links: [["Kalın orta palet", "/urunler/kalin-orta-palet/"], ["İkinci el Euro palet", "/urunler/ikinci-el-euro-palet/"]],
      },
      {
        h: "Satın almadan önce ve teslimde ne kontrol edilir?",
        steps: [
          "Teklifte sınıfı, ölçüyü ve adedi yazılı hâle getirin.",
          "Mümkünse partiden birkaç örnek palet fotoğrafı veya depoda inceleme isteyin.",
          "Teslimde rastgele paletlerde blok, tahta ve çivi durumunu kontrol edin.",
          "Sınıf uyuşmazlığı varsa tutanak ve fotoğrafla aynı gün bildirin.",
        ],
        p: ["Elinizde kullanılmayan palet varsa, alım satım hizmeti hem alım hem satımı bir arada ele alır."],
        links: [["Palet alım satım", "/hizmetler/palet-alim-satim/"], ["Palet tamiri", "/hizmetler/palet-tamiri/"]],
      },
    ],
    faq: [
      { q: "İkinci el paletin fiyatı neden partiden partiye değişir?", a: "Sınıf dağılımı, ölçü, onarım ihtiyacı ve adet partiden partiye farklıdır. Bu nedenle genel bir etiket yerine güncel partiye göre teklif alınır." },
      { q: "İkinci el paletin fotoğrafını önceden görebilir miyim?", a: "Evet. Büyük partilerde örnek fotoğraf veya depoda inceleme talep edebilirsiniz; bu, sınıf beklentisini netleştirir." },
    ],
  },

  "euro-palet-fiyatlari": {
    sections: [
      {
        h: "Euro palet fiyatlarının ardındaki yapı",
        p: [
          "Euro ölçülü palet 800 × 1200 mm tabanda, dokuz bloklu ve dört yönlü girişlidir. Yapı standartlaştığı için fiyat farkını asıl belirleyen şey durumdur: sıfır, onarılmış 1. sınıf veya yerli kullanımdan gelen 2. sınıf.",
          "EPAL ölçülü palet ile EPAL damgalı palet aynı fiyat grubunda değildir. EPAL tescilli bir markadır; biz EPAL ölçülerinde Euro palet temin eder ve ikinci el EPAL palet alım satımı yaparız. Damga şartınız varsa teklifte açıkça yazın.",
        ],
        links: [["EPAL palet", "/urunler/epal-palet/"], ["Euro palet ölçüleri", "/rehber/euro-palet-olculeri/"]],
      },
      {
        h: "Euro palet seçiminde karar akışı",
        table: {
          head: ["Soru", "Evet ise", "Hayır ise"],
          rows: [
            ["Palet gıda veya ilaçla temas edecek mi?", "Sıfır palet", "Sınıfa bakılır"],
            ["Yurt dışına gidecek mi?", "HT damgalı, ISPM-15 uyumlu palet", "Yurt içi sınıflar yeterli olabilir"],
            ["Palet alıcıdan geri dönecek mi?", "1. sınıf veya sıfır", "Ekonomik sınıf yeterli olabilir"],
            ["Raflı sistemde mi duracak?", "Sıfır veya sıkı kontrollü 1. sınıf", "Zemin depolamada 2. sınıf de olabilir"],
            ["Alıcı EPAL damgası şart koşuyor mu?", "Damgalı EPAL", "Damgasız Euro ölçülü palet"],
          ],
        },
        links: [["Çakma EPAL palet", "/urunler/cakma-epal-palet/"], ["İhracat paleti", "/urunler/ihracat-paleti/"]],
      },
      {
        h: "Toplu alımda Euro palet planı",
        p: [
          "Euro palet en çok tüketilen tip olduğu için düzenli alımlarda sipariş planı yapmak maliyeti ve stok dalgalanmasını yönetmeyi kolaylaştırır. Haftalık ya da aylık kullanım adedinizi bildirirseniz tedarik planı teklifle birlikte çıkarılır.",
          "Tır ve konteyner doluluğu için 13,6 m'lik tırda tek katta yaklaşık 33 Euro palet sığar; kesin sayı yükleme yüksekliğine göre değişir. Sevkiyat planı yaparken palet fiyatıyla birlikte nakliye maliyetini de değerlendirin.",
        ],
        links: [["Toptan palet", "/hizmetler/toptan-palet/"], ["Konteynere ve tıra kaç palet sığar?", "/rehber/konteynere-ve-tira-kac-palet-sigar/"]],
      },
    ],
    faq: [
      { q: "Euro palet ile EPAL palet fiyatı aynı mı?", a: "Hayır. Damgalı EPAL ile damgasız EPAL ölçülü palet farklı fiyat gruplarındadır. Damga, sınıf ve onarım durumu fiyatı etkiler." },
      { q: "Tek seferlik sevkiyat için hangi Euro palet uygun?", a: "Palet alıcıda kalacaksa ekonomik bir sınıf yeterli olabilir. Alıcı kalite veya damga şartı koyuyorsa buna göre seçilmelidir." },
      { q: "Euro palet fiyatı neden tabloda tek bir rakam değil?", a: "Çünkü sıfır, ikinci el sınıfları ve ihracat paleti ayrı satırlardadır. Hangi satırın sizin işinize uyduğunu kullanım amacınız belirler." },
    ],
  },

  "plastik-palet-fiyatlari": {
    sections: [
      {
        h: "Plastik palet fiyatını belirleyen teknik ayrıntılar",
        p: [
          "Plastik paletin fiyatı ahşapta olduğu gibi kereste hacminden değil; hammadde cinsi, kalıp, çelik takviye ve üretim yöntemi gibi unsurlardan oluşur. Takviyeli ağır hizmet bir palet ile hafif hizmet bir palet aynı ölçüde olsa bile farklı fiyat gruplarındadır.",
          "Geri dönüşümlü hammaddeyle üretilen palet ile ilk kullanım hammaddeli palet arasında da fark olabilir. Gıda ve ilaç gibi hassas alanlarda üretici belgeleri ve kullanım şartları ayrıca incelenmelidir.",
        ],
        links: [["Plastik palet çeşitleri", "/rehber/plastik-palet-cesitleri/"], ["Hijyenik plastik palet", "/urunler/hijyenik-plastik-palet/"]],
      },
      {
        h: "Plastik paletin kendini amorti edeceği senaryolar",
        list: [
          "Palet kapalı döngüde, yani üretici ile müşteri arasında düzenli dönüyorsa",
          "Yıkama ve hijyen şartı olan gıda, ilaç ve kimya işlerinde",
          "Otomatik depo ve konveyör hatlarında ağırlık ve ölçü toleransı önemliyse",
          "İhracat paletinde ISPM-15 işlemi ve damgası maliyetinden kaçınılmak isteniyorsa ve alıcı plastiği kabul ediyorsa",
        ],
        p: ["Tek yönlü sevkiyatta, palet alıcıda kalacağı için ahşap genellikle daha ekonomiktir."],
        links: [["Ahşap mı plastik mi?", "/rehber/ahsap-palet-mi-plastik-palet-mi/"], ["80x120 plastik palet", "/urunler/80x120-plastik-palet/"], ["100x120 plastik palet", "/urunler/100x120-plastik-palet/"]],
      },
      {
        h: "Yeni ve ikinci el plastik palet",
        table: {
          head: ["Ölçüt", "Yeni plastik palet", "İkinci el plastik palet"],
          rows: [
            ["Durum", "Hasarsız, tutarlı", "Çizik ve aşınma olabilir"],
            ["Yük değerleri", "Üretici verisiyle doğrulanabilir", "Çatlak ve deformasyon açısından kontrol gerekir"],
            ["Uygun alan", "Hijyen, raf, otomasyon", "Fabrika içi dolaşım, hafif kullanım"],
            ["Maliyet", "Daha yüksek", "Daha düşük"],
          ],
        },
        links: [["İkinci el plastik palet", "/urunler/ikinci-el-plastik-palet/"], ["Plastik palet kasa", "/urunler/plastik-palet-kasa/"]],
      },
    ],
    faq: [
      { q: "Plastik palet UV ve sıcaklıktan etkilenir mi?", a: "Hammadde ve üretime göre değişir. Açık havada veya uç sıcaklıklarda kullanım planlıyorsanız üreticinin çalışma sıcaklığı bilgisini isteyin." },
      { q: "Plastik palet neden tek tek farklı fiyatlanır?", a: "Hafif ve ağır hizmet, kapalı veya ızgara yüzey, takviye ve hammadde farklı maliyet doğurur. Aynı ölçüde bile modeller farklıdır." },
      { q: "Plastik palet tıra ve konteynere farklı mı yerleşir?", a: "Taban ölçüsü aynıysa ahşap paletle aynı yerleşim hesabı geçerlidir. Yükseklik ve ağırlık farkı yükleme yüksekliğini ve ağırlık sınırını değiştirebilir." },
    ],
  },

  "tahta-palet-fiyatlari": {
    sections: [
      {
        h: "Tahta palet alırken fiyat dışında bakılacaklar",
        list: [
          "Tahta yüzeyleri düz ve kenarları temiz kesilmiş olmalı; sivri çıkıntılar ambalajı yırtar.",
          "Çiviler yerine tam oturmalı, tahta yüzeyinden taşmamalı.",
          "Takozlar (bloklar) aynı hizada ve çatlaksız olmalı.",
          "Ahşap rengi ve kokusu hakkında belirgin küf veya nem izi olmamalı.",
          "Palet düz zeminde sallanmamalı; sallanan palet yükü dengesiz taşır.",
        ],
        p: ["Bu kontroller fiyat tablosunun yerine geçmez ama aynı fiyata iki farklı kalitede ürün gelmesini önler."],
        links: [["İkinci el palet alırken dikkat edilecekler", "/rehber/ikinci-el-palet-alirken-dikkat-edilecekler/"], ["Takozlu palet", "/urunler/takozlu-palet/"]],
      },
      {
        h: "Kullanım amacına göre tahta palet türü",
        table: {
          head: ["Amaç", "Tür", "Not"],
          rows: [
            ["Hafif ürün, tek yönlü sevkiyat", "İnce tahtalı veya standart", "Maliyeti düşürür"],
            ["Genel sanayi ve depolama", "Euro ölçülü, 9 takozlu", "En yaygın kullanım"],
            ["Ağır ve tekrarlı yük", "Kalın tahtalı veya güçlendirilmiş", "Daha fazla kereste kullanır"],
            ["İhracat", "ISPM-15 uyumlu HT damgalı", "Alıcı ülke kurallarına bağlıdır"],
            ["Standart dışı ölçü", "Özel ölçü", "Teklifle fiyatlanır"],
          ],
        },
        links: [["Özel ölçü palet", "/urunler/ozel-olcu-palet/"], ["Orta palet", "/urunler/orta-palet/"]],
      },
      {
        h: "Tahta palet ömrünü uzatmak",
        p: [
          "Palet ömrünün en büyük düşmanı nemdir. Paletleri zeminden kaldırılmış, yağmurdan korunmuş ve havalanan bir alanda istiflemek ömrü belirgin biçimde uzatır. Forklift çatalının tahtaya vurmaması, paletin kenarlarından sürüklenmemesi ve aşırı yüklenmemesi de kırılma oranını düşürür.",
          "Hasar gören tahtaların zamanında değiştirilmesi, tüm paletin çöpe gitmesini önler. Onarım ihtiyacını palet tamiri hizmetiyle karşılayabilirsiniz.",
        ],
        links: [["Palet ömrü nasıl uzatılır?", "/rehber/palet-omru-nasil-uzatilir/"], ["Palet tamiri", "/hizmetler/palet-tamiri/"]],
      },
    ],
    faq: [
      { q: "Tahta palet yağmura dayanıklı mı?", a: "Ahşap nemi emer; sürekli ıslanan palet çürür ve ağırlaşır. Açık alanda kullanılacaksa kısa süreli ve korumalı kullanım tercih edilmeli, uzun süreli dışarıda bekletme planlanıyorsa plastik değerlendirilmelidir." },
      { q: "Tahta palette takoz sayısı önemli mi?", a: "Evet. Takoz sayısı ve dizilimi paletin taşıma kapasitesini ve çatal girişini etkiler. Euro tipi dokuz takozlu, dört yönlü girişli yapıdır." },
    ],
  },

  "80x120-palet-fiyatlari": {
    sections: [
      {
        h: "80x120 palette hangi detay fiyatı değiştirir?",
        p: [
          "Taban ölçüsü sabit olduğunda fiyat farkı yapıdan gelir: tahta sayısı, kalınlık, blok yapısı ve kullanılan malzeme. 80x120 ölçüsünde hafif hizmet standart ahşap palet, dokuz bloklu Euro ölçülü palet ve çelik takviyeli plastik palet birbirinden belirgin biçimde farklıdır.",
          "Üzerinde damga bulunması, paletin kuru ve temiz olması ve onarım geçmişi de fiyat grubunu belirler. Bu yüzden “80x120 palet kaç para” sorusunun cevabı, hangi yapıyı kastettiğinize bağlıdır.",
        ],
        links: [["80x120 Euro palet", "/urunler/80x120-euro-palet/"], ["Euro palet fiyatları", "/euro-palet-fiyatlari/"]],
      },
      {
        h: "80x120 ve yarım palet 60x80 farkı",
        table: {
          head: ["Ölçüt", "80x120", "Yarım Euro palet (60x80)"],
          rows: [
            ["Taban ölçüsü", "800 × 1200 mm", "600 × 800 mm"],
            ["Tipik kullanım", "Genel lojistik, raf, tır", "Perakende, mağaza raf içi, küçük ambalaj"],
            ["Yük kapasitesi", "Daha yüksek", "Daha düşük"],
            ["Tır yerleşimi", "Standart palet düzeni", "Daha çok palet, daha küçük yük"],
          ],
        },
        p: ["Perakende dağıtımında yarım paletin neden kullanıldığı ve hangi raf düzenine uyduğu rehberde ayrıntılı anlatılmıştır."],
        links: [["Yarım Euro palet 60x80", "/rehber/yarim-euro-palet-60x80/"], ["Palet çeşitleri ve seçimi", "/rehber/palet-cesitleri-ve-secimi/"]],
      },
      {
        h: "Sipariş vermeden önce kendinize sorun",
        list: [
          "Yük 80x120 tabana tam oturuyor mu, yoksa 100x120 daha az boşluk bırakır mı?",
          "Palet rafta mı duracak, yerde mi?",
          "Palet alıcıda mı kalacak, geri mi dönecek?",
          "İhracat veya gıda gibi damga ve hijyen şartı var mı?",
          "Tek seferlik mi, düzenli mi alım yapılacak?",
        ],
        p: ["Bu beş sorunun cevabı, tablonun hangi satırına bakacağınızı büyük oranda belirler."],
        links: [["100x120 palet", "/urunler/100x120-palet/"], ["Palet seçici", "/araclar/palet-secici/"], ["80x120 plastik palet", "/urunler/80x120-plastik-palet/"]],
      },
    ],
    faq: [
      { q: "80x120 palet ile 100x120 palet arasında hangisi daha ekonomik?", a: "Ürününüz hangi tabana daha iyi oturuyorsa ve tır doluluğunu hangisi artırıyorsa o daha ekonomiktir. Yalnızca palet fiyatına bakmak yanıltıcı olabilir." },
      { q: "80x120 palet 60x80 yarım palete dönüştürülebilir mi?", a: "Hayır, farklı üretim ölçüleridir. Yarım palet ayrı ürün olarak yapılır ve farklı yük kapasitesine sahiptir." },
    ],
  },
};
