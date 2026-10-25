import type { FAQ, Section } from "@/lib/types";

export type StaticPage = {
  slug: string; // hakkimizda, belgeler, referanslar, kvkk, cerez-politikasi
  title: string;
  description: string;
  h1: string;
  answer?: string;
  sections: Section[];
  faq?: FAQ[];
  updated: string; // yyyy-mm-dd
};

// NOT: kvkk ve cerez-politikasi metinleri hukuki danışmanlık değildir; yayın öncesi hukukçu kontrolü önerilir.
export const staticPages: StaticPage[] = [
  {
    slug: "hakkimizda",
    title: "Hakkımızda | MEPAL Orman Ürünleri",
    description:
      "MEPAL Orman Ürünleri: Gebze deposundan Türkiye genelinde toplu palet tedariki. Firma bilgileri ve çalışma şeklimiz.",
    h1: "MEPAL Orman Ürünleri Hakkında",
    answer:
      "MEPAL Orman Ürünleri Sanayi ve Ticaret Ltd. Şti., Gebze'deki deposundan Türkiye genelindeki fabrika ve depolara toplu palet tedarik eder. Euro palet, ahşap palet, plastik palet ve ikinci el palet satışının yanında palet tamiri ve hurda palet alımı yapar.",
    sections: [
      {
        h: "Kimiz?",
        p: [
          "MEPAL Orman Ürünleri Sanayi ve Ticaret Ltd. Şti., palet sektöründe toplu tedarik ve geri dönüşüm odaklı çalışan bir limited şirkettir. Depomuz Gebze'de, merkez ofisimiz Kadıköy'dedir.",
          "Amacımız basit: üretim ve lojistik tarafında palete ihtiyaç duyan işletmeye doğru ölçüde, doğru kalitede paleti net fiyatla ve olabildiğince kısa sürede ulaştırmak.",
        ],
      },
      {
        h: "Ne tedarik ediyoruz?",
        list: [
          "Euro palet (80x120), ahşap palet, 100x120, 114x114 (CP), 145x145 ve özel ölçülü paletler",
          "ISPM-15 uyumlu, ısıl işlem (HT) damgalı ihracat paleti temini ve ahşap ihracat sandığı",
          "EPAL ölçülerinde Euro palet, ikinci el EPAL palet alım-satımı ve Turpal palet temini",
          "Plastik palet ve ikinci el palet",
        ],
        links: [
          ["Euro palet (80x120)", "/urunler/80x120-euro-palet/"],
          ["İhracat paleti", "/urunler/ihracat-paleti/"],
          ["Plastik palet", "/urunler/plastik-palet/"],
          ["İkinci el palet", "/urunler/ikinci-el-palet/"],
        ],
      },
      {
        h: "Hangi hizmetleri veriyoruz?",
        list: [
          "Palet tamiri ve kullanılabilir paletlerin yeniden değerlendirilmesi",
          "İkinci el palet alım-satımı",
          "Hurda palet ve ahşap atık geri dönüşümü",
          "Sıfır palet üretimi ve özel ölçü üretim",
          "Toplu ve düzenli palet tedariki",
        ],
        links: [
          ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"],
          ["Palet tamiri", "/hizmetler/palet-tamiri/"],
          ["Toptan palet", "/hizmetler/toptan-palet/"],
        ],
      },
      {
        h: "Nasıl çalışıyoruz?",
        steps: [
          "İhtiyacınızı bize iletirsiniz: ölçü, adet, yeni ya da ikinci el tercihi ve teslimat adresi. Telefon, WhatsApp veya teklif sihirbazı yeterlidir.",
          "Güncel stok ve fiyat durumuna göre size net bir teklif hazırlarız. Fiyatı etkileyen unsurlar ölçü, kalite sınıfı, adet ve teslimat noktasıdır.",
          "Teklifi onaylarsanız sevkiyat planlanır. Stok ve araç programına göre teslimat çoğunlukla ertesi iş günü yapılır; net süre teklifte bildirilir.",
          "Teslimat sonrası ihtiyaç duyarsanız hasarlı ve hurda paletlerinizi de geri alırız.",
        ],
        links: [["Teklif al", "/teklif-al/"]],
      },
      {
        h: "Depo ve ofis",
        p: [
          "Palet stoklarımız Gebze'deki depomuzdan sevk edilir. Gebze OSB, Plastikçiler OSB, Balçık, Dilovası OSB, Şekerpınar ve Tuzla OSB bölgesine depodan yaklaşık 5 ile 25 dakika mesafedeyiz. Anadolu yakasındaki işletmelere Kadıköy ofisimizden destek veriyoruz.",
        ],
        list: [
          "Depo / sevkiyat noktası: Pelitli Mah., Maden Sk. No:34, 41400 Gebze / Kocaeli",
          "Merkez ofis: Kozyatağı Mah. Gülbahar Sk. AR Plaza C No:13/3 İç Kapı No:4, 34742 Kadıköy / İstanbul",
          "Telefon ve WhatsApp: 0536 866 83 07",
          "Çalışma saatleri: Pazartesi–Cumartesi 08:30–18:00",
        ],
        links: [["İletişim", "/iletisim/"]],
      },
      {
        h: "Neden güvenilir bir tedarikçiyiz?",
        list: [
          "Şeffaf fiyat: güncel fiyat tablosu sitede yayındadır, teklifte sürpriz kalem yoktur.",
          "ISPM-15 uyumu: ihracat paletlerinde uluslararası ahşap ambalaj standardına uygun, HT damgalı ürün temin ederiz.",
          "Gerçek depo: stoklu çalışırız; paleti görmeden karar vermek zorunda kalmazsınız, depomuzu ziyaret edebilirsiniz.",
          "Marka dürüstlüğü: EPAL ve Turpal tescilli markalardır; bu markalarla ilgili yalnızca doğru ifadeleri kullanırız.",
        ],
        links: [
          ["Güncel palet fiyatları", "/palet-fiyatlari/"],
          ["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"],
          ["Belgeler", "/belgeler/"],
        ],
      },
      {
        h: "Firma bilgileri",
        table: {
          head: ["Bilgi", "Değer"],
          rows: [
            ["Unvan", "MEPAL Orman Ürünleri Sanayi ve Ticaret Ltd. Şti."],
            ["Vergi dairesi / No", "Erenköy V.D. 6150867228"],
            ["MERSİS No", "0615086722800001"],
            ["Ticaret Sicil No", "418424-5"],
            ["E-posta", "cevatsenturk@mepalorman.com"],
          ],
        },
      },
    ],
    faq: [
      {
        q: "Depodan teslim alabilir miyim?",
        a: "Gebze'deki depomuzdan teslim alım için önceden arayıp stok ve hazırlık durumunu teyit etmenizi öneririz.",
      },
      {
        q: "Hangi bölgelere palet gönderiyorsunuz?",
        a: "Türkiye genelinde toplu sevkiyat yapıyoruz. Kocaeli ve İstanbul’da teslimat en hızlıdır; diğer illerde süre ve nakliye maliyeti miktara ve mesafeye göre teklifte bildirilir.",
      },
    ],
    updated: "2026-10-25",
  },
  {
    slug: "belgeler",
    title: "Belgeler ve Standartlar | MEPAL",
    description:
      "Palet sektöründe ISPM-15, EPAL, Turpal ve ISO belgelerinin ne anlama geldiği. Belge kopyaları talep üzerine paylaşılır.",
    h1: "Belgeler ve Standartlar",
    answer:
      "Bu sayfa, palet alırken karşınıza çıkan ISPM-15, EPAL, Turpal ve ISO gibi belge ve standartların ne anlama geldiğini anlatır. Belge kopyalarımızı talep üzerine paylaşırız; sahip olduğumuz belgeler hazırlandıkça bu sayfaya eklenecektir.",
    sections: [
      {
        h: "Belge kopyaları talep üzerine paylaşılır",
        p: [
          "Satın alma ya da tedarikçi onay süreçlerinizde belge isterseniz telefon, WhatsApp veya e-posta ile bize ulaşın. İlgili belgeleri ve ürün için gerekli bilgileri paylaşırız.",
          "Sahip olunan belgeler hazırlandıkça bu sayfaya eklenecektir.",
        ],
        links: [["İletişim", "/iletisim/"]],
      },
      {
        h: "ISPM-15 / IPPC: ihracat paleti damgası",
        p: [
          "ISPM-15, Uluslararası Bitki Koruma Sözleşmesi (IPPC) kapsamında ahşap ambalaj malzemesi için belirlenmiş uluslararası bir standarttır. Amacı, ahşapla zararlı böceklerin ülkeler arasında taşınmasını önlemektir.",
          "Standarda uygun ahşap palet ısıl işlem (HT) veya metil bromür gibi onaylı bir yöntemle işlenir ve üzerinde IPPC işareti, ülke kodu, üretici/işleyici kodu ve işlem kodunu gösteren damga taşır. Ürünün damgalı olması, ihracatta gümrükte sorun yaşamamanızı sağlar.",
          "Biz ISPM-15 uyumlu, HT damgalı ihracat paleti temin ediyoruz.",
        ],
        links: [
          ["ISPM-15 nedir?", "/rehber/ispm-15-nedir/"],
          ["İhracat paleti", "/urunler/ihracat-paleti/"],
        ],
      },
      {
        h: "EPAL: ölçü standardı ve marka",
        p: [
          "EPAL, Avrupa Palet Birliği'nin (European Pallet Association) tescilli markasıdır. EPAL logolu palet, yalnızca EPAL lisansı bulunan üreticiler ve onarımcılar tarafından üretilebilir ve damgalanabilir.",
          "Euro palet ölçüsü (80x120) ise sektörde yaygın kullanılan bir standart ölçüdür. Biz EPAL ölçülerinde Euro palet satıyor, ikinci el EPAL palet alım-satımı yapıyoruz.",
        ],
        links: [
          ["EPAL palet", "/urunler/epal-palet/"],
          ["EPAL ile standart palet farkı", "/rehber/epal-palet-ile-standart-palet-farki/"],
        ],
      },
      {
        h: "Turpal",
        p: [
          "Turpal, palet sektöründe kullanılan tescilli bir markadır. Marka damgası taşıyan ürünler, marka sahibinin belirlediği kurallara göre üretilir ve kontrol edilir.",
          "Turpal palet temini yapıyoruz. Marka kullanımına ilişkin bilgi ve belge için bizimle iletişime geçebilirsiniz.",
        ],
        links: [["Turpal palet", "/urunler/turpal-palet/"]],
      },
      {
        h: "ISO yönetim sistemi belgeleri",
        p: [
          "ISO 9001 (kalite), ISO 14001 (çevre) ve ISO 45001 (iş sağlığı ve güvenliği) gibi belgeler, bir işletmenin süreçlerini bağımsız bir kuruluş tarafından denetlenen bir sistemle yönettiğini gösterir. Bu belgeler ürün kalitesini tek başına garanti etmez, süreçlerin kayıt altında ve tutarlı yürütüldüğünü gösterir.",
          "Tedarikçi seçerken bu belgelerin geçerlilik tarihini ve belgeyi veren kuruluşu mutlaka kontrol edin.",
        ],
      },
      {
        h: "Belge sorarken nelere bakmalısınız?",
        list: [
          "Belgenin firma unvanı ve geçerlilik tarihi",
          "Belgeyi veren kuruluşun yetkili olup olmadığı",
          "İhracat paletinde damga üzerindeki IPPC işareti, ülke kodu ve işlem kodu",
          "EPAL veya Turpal gibi marka damgası iddiası varsa lisansın ilgili kuruluştan doğrulanması",
        ],
        links: [["Palet çeşitleri ve seçimi", "/rehber/palet-cesitleri-ve-secimi/"]],
      },
    ],
    faq: [
      {
        q: "Belgelerinizi nasıl isteyebilirim?",
        a: "Telefon, WhatsApp veya cevatsenturk@mepalorman.com adresine yazarak talep edebilirsiniz; belge kopyaları talep üzerine paylaşılır.",
      },
      {
        q: "İhracat paletinizde damga var mı?",
        a: "ISPM-15 uyumlu, HT damgalı ihracat paleti temin ediyoruz. Sevkiyat öncesi damga bilgisini teklif aşamasında teyit edebilirsiniz.",
      },
    ],
    updated: "2026-10-25",
  },
  {
    slug: "referanslar",
    title: "Referanslar ve Hizmet Alanı | MEPAL",
    description:
      "MEPAL'in palet tedarik ettiği sektörler ve bölgeler. Referans mektubu talep üzerine paylaşılır.",
    h1: "Referanslar ve Hizmet Verdiğimiz Alanlar",
    answer:
      "Gebze deposundan Türkiye genelindeki gıda, otomotiv yan sanayi, beyaz eşya, kimya ve plastik, ihracat ve e-ticaret depolarına palet tedarik ediyoruz. Müşteri adlarını izinsiz yayımlamıyoruz; referans mektubu talep üzerine paylaşılır.",
    sections: [
      {
        h: "Hangi sektörlere palet tedarik ediyoruz?",
        p: [
          "Palet ihtiyacı sektöre göre değişir: gıdada hijyen ve plastik/ısıl işlemli palet, otomotivde ağır yük ve özel ölçü, ihracatta ISPM-15 uyumu öne çıkar. Her sektör için ürün ve ölçü seçimini işletmenizin ihtiyacına göre birlikte belirliyoruz.",
        ],
        list: [
          "Gıda ve içecek",
          "Otomotiv ve yan sanayi",
          "Beyaz eşya",
          "Kimya ve plastik",
          "İhracat ve lojistik",
          "E-ticaret ve depo",
        ],
        links: [
          ["Gıda ve içecek", "/sektorler/gida-ve-icecek/"],
          ["Otomotiv ve yan sanayi", "/sektorler/otomotiv-ve-yan-sanayi/"],
          ["Beyaz eşya", "/sektorler/beyaz-esya/"],
          ["Kimya ve plastik", "/sektorler/kimya-ve-plastik/"],
          ["İhracat ve lojistik", "/sektorler/ihracat-ve-lojistik/"],
          ["E-ticaret ve depo", "/sektorler/e-ticaret-ve-depo/"],
        ],
      },
      {
        h: "Hangi bölgelere hizmet veriyoruz?",
        p: [
          "Depomuz Gebze'dedir. Türkiye genelindeki fabrika ve depolara planlı sevkiyat yapıyoruz; Kocaeli ve İstanbul’da teslimat en hızlıdır.",
        ],
        list: [
          "Kocaeli: Gebze, Dilovası, Çayırova, İzmit, Körfez, Derince, Kartepe",
          "İstanbul Anadolu yakası: Tuzla, Pendik, Darıca, Kartal, Ataşehir-Kadıköy, Ümraniye, Sancaktepe, Sultanbeyli",
          "Şekerpınar ve çevre sanayi bölgeleri",
        ],
        links: [
          ["Gebze", "/bolge/gebze-palet/"],
          ["Dilovası", "/bolge/dilovasi-palet/"],
          ["Tuzla", "/bolge/tuzla-palet/"],
          ["Pendik", "/bolge/pendik-palet/"],
          ["İzmit", "/bolge/izmit-palet/"],
        ],
      },
      {
        h: "Referans mektubu talep üzerine",
        p: [
          "Müşterilerimizin ticari bilgilerine saygı duyuyoruz; bu yüzden müşteri adlarını sitede yayımlamıyoruz. Tedarikçi değerlendirmesi yapıyorsanız referans mektubunu talep üzerine paylaşabiliriz.",
        ],
        links: [["İletişim", "/iletisim/"]],
      },
      {
        h: "Müşteri yorumları",
        p: [
          "Google işletme profilimizdeki müşteri yorumları, kayıtlar hazır olduğunda bu sayfaya eklenecektir.",
        ],
      },
    ],
    faq: [
      {
        q: "Küçük adetli siparişlere de bakıyor musunuz?",
        a: "Ağırlıklı olarak toplu tedarik yapıyoruz. Adet ve ölçüye göre değerlendirmek için teklif isteyebilirsiniz.",
      },
    ],
    updated: "2026-10-25",
  },
  {
    slug: "kvkk",
    title: "KVKK Aydınlatma Metni | MEPAL",
    description:
      "6698 sayılı KVKK kapsamında MEPAL Orman Ürünleri aydınlatma metni: işlenen veriler, amaçlar, aktarım, saklama süresi ve haklarınız.",
    h1: "KVKK Aydınlatma Metni",
    answer:
      "Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 10. maddesi uyarınca kişisel verilerinizin MEPAL Orman Ürünleri tarafından nasıl işlendiğini açıklar. Başvuru ve talepleriniz için cevatsenturk@mepalorman.com adresine yazabilirsiniz.",
    sections: [
      {
        h: "Veri sorumlusu",
        p: [
          "6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında veri sorumlusu, MEPAL Orman Ürünleri Sanayi ve Ticaret Ltd. Şti.'dir (Erenköy V.D. 6150867228, MERSİS 0615086722800001, Ticaret Sicil No 418424-5).",
          "Merkez ofis: Kozyatağı Mah. Gülbahar Sk. AR Plaza C No:13/3 İç Kapı No:4, 34742 Kadıköy / İstanbul. Depo: Pelitli Mah., Maden Sk. No:34, 41400 Gebze / Kocaeli.",
        ],
      },
      {
        h: "Hangi kişisel verilerinizi işliyoruz?",
        list: [
          "İletişim formu: ad soyad, firma adı, telefon, e-posta ve mesaj içeriği",
          "WhatsApp ve telefon: telefon numaranız, profil adınız ve ilettiğiniz mesajlar",
          "Teklif sihirbazı: iletişim bilgileriniz ve talebinize ilişkin ürün, ölçü, adet, teslimat bölgesi gibi bilgiler",
          "Yapay zekâ danışmanı: sohbette yazdığınız mesajlar ve paylaştığınız teknik bilgiler",
          "Fotoğraftan palet değerleme: yüklediğiniz palet fotoğrafı ve ilgili açıklamalar",
          "Web sitesi kullanımı: çerezler aracılığıyla elde edilen cihaz, tarayıcı ve sayfa görüntüleme bilgileri (onayınıza bağlı olarak)",
        ],
      },
      {
        h: "İşleme amaçları",
        list: [
          "Teklif taleplerinizi ve sorularınızı yanıtlamak, fiyat ve sevkiyat bilgisi sunmak",
          "Sipariş, teslimat ve satış sonrası süreçleri yürütmek",
          "Yapay zekâ danışmanı ve değerleme araçlarıyla ürün seçimi ve ön değerlendirme desteği sağlamak",
          "Web sitesinin güvenliğini sağlamak, hataları gidermek ve (onayınızla) kullanımını analiz ederek iyileştirmek",
          "Yasal yükümlülükleri yerine getirmek",
        ],
      },
      {
        h: "Hukuki sebepler",
        p: [
          "Verileriniz KVKK m.5/2 kapsamında şu hukuki sebeplere dayanılarak işlenir:",
        ],
        list: [
          "Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması (teklif ve sipariş süreçleri)",
          "Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması",
          "Temel hak ve özgürlüklerinize zarar vermemek kaydıyla veri sorumlusunun meşru menfaati (iletişim talebinin yanıtlanması, site güvenliği)",
          "Açık rızanız (isteğe bağlı çerezler ve analiz amaçlı ölçümleme)",
        ],
      },
      {
        h: "Verilerin aktarılması",
        p: [
          "Kişisel verileriniz satışa konu hizmetin yürütülmesi için gerekli olduğu ölçüde ve KVKK m.8 ile m.9 hükümlerine uygun olarak aktarılabilir:",
        ],
        list: [
          "E-posta altyapısı: iletişim formu ve teklif talepleriniz, bize ulaşmasını sağlayan e-posta hizmet sağlayıcısı üzerinden iletilir.",
          "Yapay zekâ hizmet sağlayıcısı: yapay zekâ danışmanı ve fotoğraf değerleme araçlarını kullandığınızda ilettiğiniz içerik, yanıt üretilebilmesi için bir yapay zekâ hizmet sağlayıcısına gönderilir. Sağlayıcının sunucuları yurt dışında bulunabilir; bu nedenle bu araçların kullanımı verilerin yurt dışına aktarılması anlamına gelebilir.",
          "Barındırma ve altyapı sağlayıcıları: sitenin çalışması için gerekli teknik altyapı hizmeti verenler.",
          "Yasal olarak yetkili kamu kurum ve kuruluşları: mevzuattan doğan yükümlülükler çerçevesinde.",
        ],
        links: [["Çerez politikası", "/cerez-politikasi/"]],
      },
      {
        h: "Yapay zekâ asistanı ve fotoğraf değerleme",
        p: [
          "Sitedeki yapay zekâ danışmanı ve fotoğraftan palet değerleme araçları isteğe bağlıdır. Bu araçları kullanmadan da telefon, WhatsApp veya teklif sihirbazıyla bize ulaşabilirsiniz.",
        ],
        list: [
          "İletilen veri: sohbette yazdığınız mesajlar ve yüklediğiniz fotoğraflar, yanıt üretmek amacıyla yapay zekâ hizmet sağlayıcısına gönderilir. İletişim formundaki ad, telefon ve e-posta gibi bilgiler bu araçlara otomatik olarak aktarılmaz; sohbette yazdığınız içeriği siz belirlersiniz.",
          "Lütfen sohbete veya açıklamalara kimlik numarası, banka bilgisi gibi gereksiz kişisel veri yazmayın.",
          "Fotoğraflar: yüklenen fotoğrafın EXIF meta verileri (konum bilgisi dahil) sağlayıcıya gönderilmeden önce silinir. Fotoğrafta kişi, araç plakası veya belge gibi unsurların bulunmamasına dikkat edin.",
          "Saklama: sohbet ve fotoğraf içerikleri yanıtın üretilmesi için gereken süre kadar işlenir; sitede kalıcı olarak saklanmaz. Sağlayıcı tarafındaki geçici işleme ve saklama, sağlayıcının kendi gizlilik koşullarına tabidir.",
          "Yapay zekâ çıktıları ön bilgi niteliğindedir; bağlayıcı fiyat veya teknik taahhüt içermez, net teklif ayrıca bildirilir.",
        ],
        links: [
          ["Palet danışmanı", "/araclar/palet-danismani/"],
          ["Fotoğraftan palet değerleme", "/araclar/fotograftan-palet-degerleme/"],
        ],
      },
      {
        h: "Saklama süresi",
        p: [
          "Kişisel verileriniz, işlendikleri amaç için gerekli süre ve ilgili mevzuatta öngörülen yasal saklama süreleri boyunca saklanır; sürenin dolmasının ardından silinir, yok edilir veya anonim hale getirilir. Teklif talepleri ve yazışmalar ticari ilişkinin devamı süresince, ticari defter ve belgeler ise ilgili kanunlarda öngörülen süreler boyunca tutulur.",
        ],
      },
      {
        h: "KVKK m.11 kapsamındaki haklarınız",
        p: ["KVKK'nın 11. maddesi uyarınca veri sorumlusuna başvurarak şunları talep edebilirsiniz:"],
        list: [
          "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
          "İşlenmişse buna ilişkin bilgi talep etme",
          "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme",
          "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme",
          "Eksik veya yanlış işlenmişse düzeltilmesini isteme",
          "Kanunun 7. maddesi kapsamında silinmesini veya yok edilmesini isteme ve bu işlemlerin aktarılan üçüncü kişilere bildirilmesini isteme",
          "İşlenen verilerin otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonuç çıkmasına itiraz etme",
          "Kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme",
        ],
      },
      {
        h: "Başvuru yolu",
        p: [
          "Haklarınıza ilişkin taleplerinizi, kimliğinizi doğrulayabilmemiz için gerekli bilgilerle birlikte cevatsenturk@mepalorman.com adresine e-posta ile veya merkez ofis adresimize yazılı olarak iletebilirsiniz. Başvurunuz, niteliğine göre en geç otuz gün içinde sonuçlandırılır.",
          "Başvurunuzun sonucundan memnun kalmamanız halinde Kişisel Verileri Koruma Kurumu'na şikâyette bulunma hakkınız saklıdır.",
        ],
        links: [["İletişim", "/iletisim/"]],
      },
    ],
    updated: "2026-10-25",
  },
  {
    slug: "cerez-politikasi",
    title: "Çerez Politikası | MEPAL Orman Ürünleri",
    description:
      "MEPAL web sitesinde kullanılan çerez kategorileri, analitik çerezlerin yalnızca onayla yüklenmesi ve çerez tercihlerinizi nasıl yönetebileceğiniz.",
    h1: "Çerez Politikası",
    answer:
      "Sitemizde zorunlu çerezler her zaman çalışır; analitik ve pazarlama çerezleri yalnızca sizin onayınızla yüklenir. Tercihlerinizi sayfa altındaki “Çerez tercihleri” bağlantısından istediğiniz zaman değiştirebilirsiniz.",
    sections: [
      {
        h: "Çerez nedir?",
        p: [
          "Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. Siteyi çalıştırmak, tercihlerinizi hatırlamak ve kullanımı ölçmek için kullanılır.",
        ],
      },
      {
        h: "Kullandığımız çerez kategorileri",
        table: {
          head: ["Kategori", "Amaç", "Onay gerekir mi?"],
          rows: [
            ["Zorunlu", "Sitenin çalışması, güvenlik ve çerez tercihinizin hatırlanması", "Hayır"],
            ["Analitik", "Sayfa görüntüleme ve kullanım istatistikleri; siteyi iyileştirmek", "Evet"],
            ["Pazarlama", "Reklam ve yeniden hedefleme amaçlı ölçümleme", "Evet"],
          ],
        },
      },
      {
        h: "Zorunlu çerezler",
        p: [
          "Bu çerezler sitenin temel işlevleri için gereklidir; onay vermeseniz de çalışır. Örneğin çerez tercihinizin kaydedilmesi bu kategoriye girer. Bu çerezler pazarlama amacıyla kullanılmaz.",
        ],
      },
      {
        h: "Analitik çerezler (Google Analytics 4)",
        p: [
          "Ziyaretçilerin siteyi nasıl kullandığını anlamak için Google Analytics 4 (GA4) kullanırız. GA4 yalnızca analitik çerezlere onay verdiğinizde yüklenir; onay vermezseniz hiçbir analitik veri toplanmaz.",
          "Toplanan veriler sayfa görüntüleme, yaklaşık konum ve cihaz bilgisi gibi istatistiksel niteliktedir ve sizi doğrudan tanımlamak için kullanılmaz.",
        ],
      },
      {
        h: "Pazarlama çerezleri",
        p: [
          "Pazarlama çerezleri, reklam kampanyalarının etkisini ölçmek için kullanılabilir. Bu çerezler de yalnızca onayınızla yüklenir. Reklam çerezi kullanılmadığı sürece bu kategori pasif kalır.",
        ],
      },
      {
        h: "Tercihlerinizi nasıl değiştirirsiniz?",
        steps: [
          "Sayfanın en altındaki “Çerez tercihleri” bağlantısına tıklayın.",
          "Analitik ve pazarlama kategorilerini açın veya kapatın.",
          "Seçiminizi kaydedin; tercihiniz bu cihazdaki tarayıcınızda hatırlanır.",
        ],
        p: ["Onayınızı geri çektiğinizde, geri çekmeden önce yapılan işlemlerin hukuka uygunluğu etkilenmez."],
      },
      {
        h: "Tarayıcıdan çerezleri silme",
        p: [
          "Çerezleri tarayıcınızın ayarlarından silebilir veya engelleyebilirsiniz. Chrome, Safari, Firefox ve Edge’de bu seçenek genellikle gizlilik ve güvenlik ayarları altında bulunur. Zorunlu çerezleri engellerseniz sitenin bazı bölümleri düzgün çalışmayabilir; çerezleri sildiğinizde çerez tercihiniz de silineceği için tercih penceresi yeniden görüntülenebilir.",
        ],
      },
      {
        h: "Kişisel verilerin korunması",
        p: [
          "Çerezler aracılığıyla işlenen kişisel veriler hakkında daha fazla bilgi için KVKK aydınlatma metnimize bakabilirsiniz.",
        ],
        links: [["KVKK aydınlatma metni", "/kvkk/"]],
      },
    ],
    updated: "2026-10-25",
  },
  {
    slug: "turkiye-geneli-palet-sevkiyati",
    title: "Türkiye Geneli Palet Sevkiyatı | MEPAL Orman Ürünleri",
    description: "Gebze deposundan Türkiye’nin her iline toplu palet sevkiyatı: euro, ahşap, plastik ve ikinci el palet. Mesafeye göre nakliye, teklifte net süre.",
    h1: "Türkiye Geneli Palet Sevkiyatı",
    answer:
      "Palet stoklarımız Gebze’deki depomuzdan sevk edilir ve Türkiye’nin her iline toplu olarak gönderilir. Kocaeli ve İstanbul’da teslimat en hızlıdır; diğer illerde süre ve nakliye maliyeti miktara ve mesafeye göre teklifte bildirilir.",
    updated: "2026-10-25",
    sections: [
      {
        h: "Nasıl çalışıyoruz?",
        p: [
          "Depomuz Gebze Pelitli’de, Türkiye’nin en yoğun sanayi koridorlarından birinin üzerinde bulunur. Bu konum, Marmara’nın ve Anadolu’nun büyük bölümüne karayoluyla kolay çıkış sağlar. Tır, kamyon veya kamyonet ile sevkiyat yapılabilir; miktar küçükse taşıyıcı firma ile de gönderim planlanabilir.",
          "Siparişin kapsamı arttıkça birim nakliye maliyeti düşer. Bu yüzden tam tır dolusu veya düzenli sevkiyat planlayan işletmeler için adet kademeli fiyat ve sevkiyat takvimi birlikte hazırlanır.",
        ],
      },
      {
        h: "Sipariş süreci",
        steps: [
          "Ürün, ölçü, adet ve teslimat ilini WhatsApp’tan, telefonla veya teklif sihirbazıyla bildirin.",
          "Aynı gün güncel fiyat, stok durumu ve nakliye bilgisiyle dönelim.",
          "Onaydan sonra paletler hazırlanır; araç programı belirlenir.",
          "Sevkiyat yapılır; teslimatta adet ve kalite kontrolü birlikte yapılır.",
        ],
        links: [["Teklif sihirbazı", "/teklif-al/"], ["Palet fiyatları", "/palet-fiyatlari/"]],
      },
      {
        h: "Yükleme planı ve araç kapasitesi",
        p: [
          "Bir tır veya konteynere kaç palet sığdığını önceden bilmek nakliye maliyetini doğrudan etkiler. Konteyner ve tır hesaplayıcımızla palet ölçünüze göre yerleşimi görebilir, rehber yazımızdan standart araç kapasitelerini öğrenebilirsiniz.",
        ],
        links: [["Konteyner ve tır hesaplayıcı", "/araclar/konteyner-palet-hesaplama/"], ["Konteynere ve tıra kaç palet sığar?", "/rehber/konteynere-ve-tira-kac-palet-sigar/"]],
      },
      {
        h: "İhracat için palet",
        p: [
          "Yurt dışına gidecek yükler için ISPM-15 uyumlu, HT damgalı ahşap palet temin ediyoruz. Ülkenizin gereksinimleri farklı olabileceği için sipariş öncesinde ithalatçı ülkenin kurallarını teyit etmenizi öneririz.",
        ],
        links: [["ISPM-15 ihracat paleti", "/urunler/ihracat-paleti/"], ["İhracatta palet ve ambalaj kuralları", "/rehber/ihracatta-palet-ve-ambalaj-kurallari/"]],
      },
      {
        h: "En hızlı teslimat bölgeleri",
        p: ["Depoya yakın bölgelerde teslimat süresi en kısadır. Bölge sayfalarımızda ilçelere göre bilgi bulabilirsiniz."],
        links: [["Gebze", "/bolge/gebze-palet/"], ["Dilovası", "/bolge/dilovasi-palet/"], ["Tuzla", "/bolge/tuzla-palet/"], ["Tüm bölgeler", "/bolge/"]],
      },
    ],
    faq: [
      { q: "Türkiye’nin her iline palet gönderiyor musunuz?", a: "Evet. Gebze deposundan Türkiye genelinde sevkiyat yapıyoruz. Süre ve nakliye maliyeti miktara ve mesafeye göre teklifte bildirilir." },
      { q: "Nakliye ücreti fiyata dahil mi?", a: "Sitedeki fiyatlar KDV ve nakliye hariçtir. Nakliye teslimat ilinize ve araç tipine göre ayrıca hesaplanır." },
      { q: "Az sayıda palet de gönderebilir misiniz?", a: "Stok durumuna göre evet; ancak toplu siparişlerde birim maliyet daha düşüktür. Küçük miktarlar için taşıyıcı firma ile gönderim planlanabilir." },
      { q: "Depodan kendim alabilir miyim?", a: "Evet. Önce arayıp ürün ve adedi bildirirseniz hazırlığı yapar, Gebze deposunda teslim ederiz." },
    ],
  },
];

export const staticPageBySlug = (slug: string) => staticPages.find((p) => p.slug === slug);
