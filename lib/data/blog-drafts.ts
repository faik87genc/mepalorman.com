import type { PostInput } from "@/lib/posts";

/** Panelden tek tıkla içe aktarılan hazır yazılar. Sıra = yayın sırası (günde bir). Kapak görselleri panelden eklenir. */
export type Draft = Omit<PostInput, "published" | "coverImageUrl" | "publishAt"> & { imagePrompt: string };

const CTA = "Ürün, ölçü, adet ve teslim ilçesini hazır edip **0536 866 83 07** numarasını arayabilir, WhatsApp’tan yazabilir ya da [teklif formunu](/teklif-al/) doldurabilirsiniz.";

export const blogDrafts: Draft[] = [
  {
    slug: "toptan-palet-siparisi-nasil-verilir",
    title: "Toptan palet siparişi nasıl verilir?",
    focusKeyword: "toptan palet siparişi",
    metaTitle: "Toptan Palet Siparişi Nasıl Verilir? | MEPAL",
    metaDescription: "Toptan palet siparişi vermeden önce ölçü, yük, adet, kalite sınıfı ve teslim adresini netleştirin. Gebze’den teklif almak için kontrol listesi.",
    excerpt: "Toptan palet siparişinde doğru teklif için ölçü, yük, adet, kalite sınıfı ve teslim adresi baştan belli olmalıdır. Aşağıdaki liste görüşmeyi kısaltır.",
    imagePrompt: "Depoda düzenli istiflenmiş yüzlerce yeni ahşap palet, arka planda forklift, doğal ışık, gerçekçi fotoğraf, yazı ve logo yok",
    content: `Toptan palet siparişi verirken en sık yaşanan sorun eksik bilgidir. “500 palet lazım” demek yeterli olmaz; ölçü, taşınacak yük ve kullanım şekli bilinmeden verilen teklif ya pahalıya ya da yanlış ürüne yol açar. Bu yazı, aramadan önce hazırlamanız gerekenleri sırayla anlatır.

## Siparişten önce netleştirilecek bilgiler

- **Taban ölçüsü:** 80x120, 100x120, 114x114 veya özel ölçü. Emin değilseniz mevcut paletinizi metreyle ölçün.
- **Yük:** Palet başına kaç kilogram, yük tek noktaya mı biniyor, yayılı mı?
- **Kullanım:** Tek yön sevkiyat, depo içi döngü ya da rafta bekletme.
- **Adet ve sıklık:** Tek seferlik alım mı, haftalık veya aylık düzenli ihtiyaç mı?
- **İhracat:** Yurt dışına gidecekse ISPM-15 uyumlu, HT damgalı palet gerekir.
- **Teslim adresi:** İlçe, boşaltma alanı ve forklift olup olmadığı.

## Sıfır mı, ikinci el mi?

Tek yönlü sevkiyatta ve iç depoda [ikinci el palet](/urunler/ikinci-el-palet/) çoğu zaman yeterlidir. Gıda, ilaç veya görünümün önemli olduğu sevkiyatlarda [sıfır ahşap palet](/urunler/sifir-ahsap-palet/) daha uygundur. İkinci el alırken kalite sınıfını ve kabul edilecek kusurları yazılı olarak belirtmek, teslimatta anlaşmazlığı önler.

## Teklifleri nasıl karşılaştırmalı?

Yalnızca birim fiyata bakmak yanıltıcıdır. İki teklifi yan yana koyarken şunları kontrol edin:

| Kontrol noktası | Neden önemli |
|---|---|
| Tahta kalınlığı ve takoz yapısı | Taşıma kapasitesini belirler |
| Kalite sınıfı tanımı | İkinci elde ne teslim edileceğini gösterir |
| Nakliye dahil mi | Toplam maliyeti değiştirir |
| KDV durumu | Fiyatlar çoğunlukla KDV hariç verilir |
| Teslim planı | Tek seferde mi, parti parti mi |

## Teslimat ve boşaltma

Kamyon ya da tır gelmeden önce boşaltma alanını boşaltın ve forklift operatörünü hazır tutun. Büyük adetlerde teslimatı birkaç partiye bölmek depo alanınızı rahatlatır. Teslim süresi stok ve araç programına bağlıdır; net süre teklifte bildirilir.

## Gebze’den toptan palet

MEPAL’in deposu Gebze Pelitli’dedir. Gebze, Dilovası, Tuzla ve çevresindeki sanayi bölgelerine sevkiyat için [toptan palet hizmeti](/hizmetler/toptan-palet/) sayfasına bakabilirsiniz. ${CTA}

## Örnek bir teklif mesajı

İlk mesajınız ne kadar net olursa yanıt o kadar hızlı gelir. Şu kalıbı kendi bilginizle doldurabilirsiniz:

“80x120 ikinci el palet arıyoruz. Palet başına yaklaşık 600 kg koli yükü var, tek yön sevkiyatta kullanılacak. İlk teslimat için 300 adet, sonrasında aylık benzer miktar gerekiyor. Teslim yeri Dilovası, sahada forklift var. İhracat yok.”

Bu kadar bilgi, ürün sınıfı ve araç planı için yeterli bir başlangıçtır.

## Siparişi yazılı onaylayın

Telefonda anlaşılan ayrıntılar sonradan farklı hatırlanabilir. Onaydan önce şu maddelerin yazılı olmasını isteyin:

1. Ölçü ve yapı: taban ölçüsü, giriş yönü, takozlu ya da kirişli.
2. Kalite tanımı: sıfır mı ikinci el mi, ikinci elde hangi onarımlar kabul.
3. Adet ve teslim planı.
4. Nakliye ve boşaltma sorumluluğu.
5. Ödeme koşulu ve KDV bilgisi.

## En sık yapılan hatalar

- Mevcut paleti ölçmeden “standart” demek. Standart denince farklı ölçüler anlaşılabilir.
- Yükü söylememek. Hafif koli için uygun palet, metal parça için yetersiz kalır.
- Depo alanını hesaplamadan tek seferde çok adet istemek.
- İhracat şartını teslimattan sonra hatırlamak.

Ölçüler arasında kararsızsanız [palet çeşitleri ve seçimi](/rehber/palet-cesitleri-ve-secimi/) yazısı iyi bir başlangıçtır.

## İlk siparişten sonra

İlk teslimat bir deneme gibi düşünülmelidir. Paletler hatta ve araçta kullanıldıktan sonra birkaç not alın: ölçü yüke tam oturdu mu, kırılan oldu mu, forklift rahat girdi mi, istif dengeli kaldı mı? Bu notları tedarikçiyle paylaşırsanız ikinci siparişte yapı ya da kalite tanımı netleştirilir.

Düzenli alım yapacaksanız şu bilgileri bir dosyada tutun:

- Onayladığınız ölçü ve yapı tarifi.
- Kabul edilen kalite sınıfı ve örnek fotoğraflar.
- Her siparişin tarihi ve adedi.
- Teslimatta görülen sorunlar.
- Boşaltma için sahada aranacak kişi.

Satın alma sorumlusu değiştiğinde bu dosya, işin aynı standartla sürmesini sağlar. Sipariş verirken “geçen seferki gibi” demek yerine yazılı tarife atıf yapmak da yanlış ürün gelme ihtimalini azaltır. Fiyatı etkileyen etkenleri merak ediyorsanız [palet fiyatlarını etkileyen faktörler](/rehber/palet-fiyatlarini-etkileyen-faktorler/) yazısı teklifleri okumanıza yardımcı olur.

## Sık sorulan sorular

**En az kaç adet sipariş verilebilir?** Adet, ürüne ve teslim adresine göre değerlendirilir; ihtiyacınızı söyleyin, uygun sevkiyat seçeneği bildirilsin.

**Numune görülebilir mi?** Büyük alımlardan önce depoda ürünü görmek en sağlıklı yoldur. Gelmeden önce arayıp zaman belirleyin.`,
  },
  {
    slug: "acil-palet-tedariki",
    title: "Acil palet tedariki: ne yapmalı?",
    focusKeyword: "acil palet tedariki",
    metaTitle: "Acil Palet Tedariki: Hızlı Çözüm Adımları | MEPAL",
    metaDescription: "Acil palet tedariki gerektiğinde doğru bilgileri vermek süreyi kısaltır. Stoktan ürün, alternatif ölçü ve teslimat için yapılacaklar.",
    excerpt: "Acil palet tedariki gerektiğinde en çok zaman kaybettiren şey belirsizliktir. Ölçü, adet ve adres hazırsa stoktaki seçenekler hızla netleşir.",
    imagePrompt: "Yükleme rampasında kamyona forklift ile ahşap palet yüklenmesi, hareketli iş ortamı, gerçekçi fotoğraf, yazı yok",
    content: `Acil palet tedariki çoğu işletmede aynı şekilde başlar: sevkiyat günü yaklaşmış, stok sayımı tutmamış ya da beklenmedik bir sipariş gelmiştir. Panik halinde yapılan alım yanlış ölçüyle sonuçlanabilir. Birkaç dakikalık hazırlık hem süreyi hem maliyeti azaltır.

## Aramadan önce hazırlanacak dört bilgi

1. Taban ölçüsü (örneğin 80x120 veya 100x120).
2. Bugün gereken adet ve sonrasında gerekecek adet.
3. Palet başına yaklaşık yük.
4. Teslim ilçesi ve boşaltma saati.

Mevcut paletinizin üstten ve yandan iki fotoğrafını WhatsApp’tan göndermek, tarif etmekten daha hızlıdır.

## Stoktan ürün neden daha hızlıdır?

Yaygın ölçülerdeki [80x120 Euro palet](/urunler/80x120-euro-palet/) ve [100x120 palet](/urunler/100x120-palet/) özel üretime göre daha kısa sürede temin edilebilir. Özel ölçü üretim, kereste hazırlığı ve imalat gerektirdiği için zaman alır. Acil durumda standart bir ölçüyle yükünüzü güvenle taşıyıp taşıyamayacağınızı sorun.

## Alternatif seçenekler

- **İkinci el palet:** Tek yönlü sevkiyatta hızlı bir çözümdür.
- **Parti parti teslim:** İlk ihtiyacı karşılayıp kalanı sonraya planlayın.
- **Depodan kendi aracınızla alım:** Aracınız hazırsa sevkiyat sırasını beklemeyebilirsiniz.

## Acil alımda atlanmaması gerekenler

İhracat yüküyse HT damgası mutlaka istenmelidir; damgasız ahşap palet sınırda sorun çıkarabilir. Ayrıntı için [ISPM-15 nedir](/rehber/ispm-15-nedir/) yazısını okuyun. Ağır yükte ise ince tahtalı paletten kaçının.

## Bir daha acil duruma düşmemek için

Aylık tüketiminizi yazın, bir güvenlik stoğu belirleyin ve stok bu seviyeye indiğinde sipariş verin. Düzenli alım yapan işletmeler için sevkiyat planı önceden konuşulabilir.

## Gebze ve çevresine sevkiyat

Gebze Pelitli depomuz sanayi bölgelerine yakındır. Çoğu durumda stok ve araç programına göre ertesi iş günü planlanabilir; kesin süre teklif sırasında söylenir. [Nakliye ve lojistik](/hizmetler/palet-nakliye-lojistik/) sayfasında sevkiyat seçeneklerini görebilirsiniz. ${CTA}

## Telefonda sorulacak sorular

Süre baskısı altında bile şu dört soruyu sorun:

1. Bu ölçüden şu an stokta kaç adet var?
2. Sıfır mı, ikinci el mi; ikinci else durumu nasıl?
3. Nakliye ne zaman planlanabilir?
4. Eksik kalan adet ne zaman tamamlanır?

Yanıtları not edin ve sevkiyat saatinizi buna göre ayarlayın.

## Sahayı hazırlayın

Palet yola çıktığında bekleme sizin tarafınızda olmamalıdır. Boşaltma rampasını açın, forklift operatörünü bilgilendirin ve kapı girişinde istenecek evrak ya da kayıt varsa sürücünün bilgilerini önceden isteyin. Sanayi sitelerinde araç giriş saatleri sınırlı olabilir; bunu sipariş sırasında söyleyin.

## Ölçü değiştirmek güvenli mi?

İstediğiniz ölçü stokta yoksa yakın bir ölçü önerilebilir. Kabul etmeden önce şunlara bakın:

| Kontrol | Soru |
|---|---|
| Taşma | Koli palet kenarından taşıyor mu? |
| Araç dizimi | Aynı sayıda palet araca sığıyor mu? |
| Alıcı şartı | Müşteriniz belirli bir ölçü istiyor mu? |
| Raf | Palet raf gözüne oturuyor mu? |

Bu soruların birine yanıtınız olumsuzsa ölçü değiştirmek yerine parti parti teslimat düşünün. Araç dizilimini [konteyner palet hesaplama](/araclar/konteyner-palet-hesaplama/) aracıyla hızlıca kontrol edebilirsiniz.

## Acil alımın maliyeti

Son anda yapılan alımda seçenek azalır ve ayrı bir araç gerekebilir. Aynı durum yılda birkaç kez tekrarlanıyorsa küçük bir güvenlik stoğu tutmak çoğunlukla daha mantıklıdır. Hesabı birlikte yapmak isterseniz aylık tüketiminizi paylaşın.

## Teslimattan sonra beş dakika

Acele edilse de gelen paleti kontrol etmeden yüklemeye geçmeyin. Birkaç paletin ölçüsüne, üst tahtalarına, takozlarına ve nem durumuna bakın. Hasarlı palet yükle birlikte yola çıkarsa sorun müşteride ortaya çıkar ve acil alımdan çok daha pahalıya gelir.

Olay geçtikten sonra nedenini de yazın:

- Sayım mı yanlıştı?
- Beklenmedik bir sipariş mi geldi?
- Geri dönmesi beklenen paletler dönmedi mi?
- Sipariş zamanında verilmedi mi?
- Hasarlı palet oranı mı arttı?

Her neden farklı bir önlem ister. Sayım hatasında haftalık kontrol, ani siparişte güvenlik stoğu, geri dönüş eksikliğinde takip listesi işe yarar. Ayrıntılı hesap için [palet maliyetini düşürme yolları](/rehber/palet-maliyetini-dusurmenin-yollari/) yazısına da bakabilirsiniz. Acil durumda aranacak tedarikçinin numarasını ve standart ölçü tarifinizi vardiya sorumlusunun kolayca ulaşacağı bir yere not etmek, bir sonraki sefer dakikalar kazandırır.

## Sık sorulan sorular

**Mesai dışında yazabilir miyim?** WhatsApp mesajı bırakabilirsiniz. Çalışma saatleri Pazartesi–Cumartesi 08:30–18:00’dir.

**Aynı gün teslim olur mu?** Stok, araç ve mesafeye bağlıdır. Telefonda sorun; söz verilemeyecek bir süre verilmez.

**Fotoğraf göndermek şart mı?** Şart değildir; ancak ölçüsünden emin olmadığınız paletlerde bir fotoğraf yanlış ürün gelmesini önler ve soru cevap süresini belirgin biçimde kısaltır. Fotoğrafa şerit metre de girerse ölçü daha kolay anlaşılır.`,
  },
  {
    slug: "bos-paletleri-satmadan-once-yapilacaklar",
    title: "Boş palet satmak: depoyu açmadan önce 5 adım",
    focusKeyword: "boş palet satmak",
    metaTitle: "Boş Palet Satmak İsteyenler İçin 5 Adım | MEPAL",
    metaDescription: "Boş palet satmak için ayırma, sayım ve fotoğraf yeterlidir. Sağlam ve hasarlı paletleri ayırarak daha doğru bir alım teklifi alın.",
    excerpt: "Boş palet satmak isteyen işletmeler paletleri sağlam, tamirlik ve hurda diye ayırdığında daha hızlı ve doğru teklif alır.",
    imagePrompt: "Fabrika bahçesinde karışık yığılmış kullanılmış ahşap paletler ve yanında düzgün istiflenmiş sağlam paletler, gerçekçi fotoğraf",
    content: `Boş palet satmak, depoda yer açmanın ve atıl duran malzemeyi değerlendirmenin en kolay yoludur. Hammadde ya da yarı mamulle gelen paletler zamanla bahçede birikir; yağmurda bekledikçe değer kaybeder. Satışa çıkarmadan önce şu beş adımı uygulayın.

## 1. Paletleri üç gruba ayırın

- **Sağlam:** Tahtaları ve takozları tam, doğrudan kullanılabilir.
- **Tamirlik:** Bir iki tahtası kırık, onarılabilir.
- **Hurda:** Takozu parçalanmış, çürük ya da ağır kirli.

Karışık yığın için teklif vermek zordur; ayrılmış gruplar daha net değerlendirilir.

## 2. Ölçüye göre sayın

80x120, 100x120 ve diğer ölçüleri ayrı ayrı yazın. Tek tek saymak zorsa bir istifteki adedi sayıp istif sayısıyla çarpın.

## 3. Damga ve markaları kontrol edin

Paletin takozlarında ölçü veya marka damgası, ihracattan gelen paletlerde HT işareti bulunabilir. Bunların fotoğrafı değerlendirmeyi kolaylaştırır.

## 4. Fotoğraf çekin

Genel yığından bir, her gruptan birer yakın fotoğraf yeterlidir. Gün ışığında çekin.

## 5. Yükleme koşullarını bildirin

Forklift var mı, araç yanaşabiliyor mu, hangi saatlerde yükleme yapılabilir? Bu bilgiler toplama planını belirler.

## Hasarlı ve kırık paletler de değerlenir mi?

Evet, onarılabilen paletler tamirle yeniden kullanıma girer; onarılamayanlar geri dönüşüme yönlendirilebilir. Seçenekleri [hurda palet alımı](/hizmetler/hurda-palet-alimi/) ve [hasarlı palet alımı](/hizmetler/hasarli-palet-alimi/) sayfalarında bulabilirsiniz.

## Teklifi neler etkiler?

Ölçü, sağlamlık oranı, adet, temizlik durumu ve toplama adresi teklifi etkiler. Güncel durum için [hurda palet fiyatları](/hurda-palet-fiyatlari/) sayfasına bakın ya da doğrudan sorun.

## Bekletmenin zararı

Açıkta bekleyen ahşap nem alır, küflenir ve çiviler paslanır. Yer kaplamasının yanında yangın yükü de oluşturur. Birikmeyi beklemeden düzenli toplama planlamak daha verimlidir. Bunun için [yerinde palet toplama](/hizmetler/yerinde-palet-toplama/) seçeneğini sorabilirsiniz.

Fotoğraflarınızı ve yaklaşık adedi gönderin: **0536 866 83 07** numarasını arayabilir, WhatsApp’tan yazabilir ya da [teklif formunu](/teklif-al/) doldurabilirsiniz.

## Teklif için örnek mesaj

“Gebze’deki depomuzda yaklaşık 150 adet 80x120 sağlam, 40 adet tamirlik palet var. Bir miktar da kırık parça bulunuyor. Forklift mevcut, hafta içi 09:00–17:00 arası yükleme yapılabilir. Fotoğraflar ektedir.”

Böyle bir mesaj, karşılıklı soru trafiğini azaltır ve toplama için hangi aracın gerektiğini anlamaya yardımcı olur.

## İstiflerken güvenliği unutmayın

Boş paletler hafif görünse de yüksek istif devrilebilir. Düz zeminde, aynı ölçüleri üst üste koyun; eğilmiş istifleri düzeltin. Kırık tahtalardan çıkan çiviler için eldiven ve sağlam ayakkabı kullanın. Yangın çıkışlarının ve elektrik panolarının önünü boş bırakın.

## Satmak mı, tamir ettirip kullanmak mı?

Kendiniz de sevkiyat yapıyorsanız her paleti satmak doğru olmayabilir. Şöyle düşünün:

- İşinize uyan ölçüdeki sağlam paletleri stoka ayırın.
- Tek tahtası kırık olanlar için tamir seçeneğini sorun.
- Kullanmadığınız ölçüleri ve fazlayı satışa çıkarın.
- Onarılamayanları geri dönüşüme yönlendirin.

Karar için [hurda paletinizi nasıl değerlendirirsiniz](/rehber/hurda-paletinizi-nasil-degerlendirirsiniz/) yazısına bakabilirsiniz.

## Düzenli satış planı

Sürekli palet biriken işletmelerde belirli aralıklarla toplama konuşmak sahayı temiz tutar. Her seferinde yeniden anlatmak gerekmesin diye ölçü dağılımınızı ve yükleme koşullarını bir kez yazılı paylaşın.

## Satışı zorlaştıran durumlar

Bazı paletler değerlendirme sırasında ayrıca konuşulmalıdır. Üzerine kimyasal ya da yağ dökülmüş, gıda artığıyla kirlenmiş veya yoğun küflenmiş paletleri diğerlerinden ayırın ve durumu baştan söyleyin. Tehlikeli madde bulaşmış ahşap sıradan atık gibi işlem görmeyebilir; işletmenizin çevre sorumlusuna danışın.

Yığının içinde metal parça, plastik streç ya da karton kalıntısı bırakmamak da yüklemeyi hızlandırır. Kısa bir temizlik, toplama sırasında zaman kaybını önler.

Toplama günü için hazırlık listesi:

- Aracın yanaşacağı alanı boşaltın.
- Forklift ve operatörü ayarlayın.
- Güvenlik kapısına araç bilgisini bildirin.
- Sayımı yapacak kişiyi belirleyin.
- Satışa ayrılmayan paletleri işaretleyin.

Sayım iki tarafın birlikte yapıldığında sonradan tartışma çıkmaz. Fatura ya da irsaliye için gereken firma bilgilerinizi de önceden hazır tutun. Hurdaya ayrılacak parçaların nereye gideceğini merak ediyorsanız [ahşap atık geri dönüşümü](/hizmetler/ahsap-atik-geri-donusumu/) sayfasını inceleyin.

## Sık sorulan sorular

**Az sayıda paletim var, alınır mı?** Adet ve adres birlikte değerlendirilir; sorarak öğrenmek en doğrusudur.

**Ayırmaya vaktim yoksa?** Yığının fotoğrafını gönderin; yaklaşık dağılım üzerinden konuşulabilir.

**Farklı ölçüler karışık olabilir mi?** Olabilir; yine de her ölçüden yaklaşık kaç adet bulunduğunu yazmanız değerlendirmeyi kolaylaştırır. Hiç sayamadıysanız yığının farklı açılardan çekilmiş birkaç fotoğrafını gönderin, kapladığı alanı da kabaca belirtin. Yanına bir referans nesne koymak boyutu anlamaya yardımcı olur.`,
  },
  {
    slug: "dort-yonlu-palet-nedir",
    title: "Dört yönlü palet nedir, ne zaman gerekir?",
    focusKeyword: "dört yönlü palet",
    metaTitle: "Dört Yönlü Palet Nedir? İki Yönlüden Farkı | MEPAL",
    metaDescription: "Dört yönlü palet, forklift çatalının her kenardan girmesine izin verir. İki yönlü paletle farkı ve hangi depoda gerektiği.",
    excerpt: "Dört yönlü palet, forklift veya transpaletin dört kenardan da girebildiği paletdir. Dar koridorlu depolarda ve yan yüklemede işi hızlandırır.",
    imagePrompt: "Bir forkliftin çatalı ahşap paletin yan kenarından girerken yakın çekim, depo zemini, gerçekçi fotoğraf",
    content: `Dört yönlü palet, forklift çatalının dört kenarın hepsinden girebildiği palet tipidir. İki yönlü palette çatal yalnızca karşılıklı iki kenardan girer. Fark küçük görünür ama depodaki hareket düzenini doğrudan etkiler.

## İki yönlü ve dört yönlü karşılaştırması

| Özellik | İki yönlü | Dört yönlü |
|---|---|---|
| Çatal girişi | Karşılıklı iki kenar | Dört kenar |
| Alt yapı | Boydan kirişli | Takozlu |
| Araca dizme | Yön sınırlı | Esnek |
| Dar alanda manevra | Zor | Kolay |

## Ne zaman dört yönlü gerekir?

- Araca ya da konteynere paletleri hem enine hem boyuna dizecekseniz.
- Depo koridorları dar ve forklift her yönden yaklaşamıyorsa.
- Raf sisteminiz paleti belirli bir yönde istiyorsa.
- Alıcınız teslim şartında dört yönlü palet istiyorsa.

## Ne zaman iki yönlü yeterlidir?

Paletler hep aynı yönden alınıyorsa, tek yönlü sevkiyat yapılıyorsa ve yük sabit bir hat üzerinde ilerliyorsa iki yönlü yapı işinizi görebilir.

## Transpaletle dikkat edilecek nokta

Transpaletin tekerlekleri alt tahtalara denk gelebilir. Elektrikli ya da manuel transpalet kullanıyorsanız alt tahta düzenini mutlaka kontrol edin. Takozlu yapı hakkında bilgi için [takozlu palet](/urunler/takozlu-palet/) sayfasına bakabilirsiniz.

## Raf kullanımı

Rafta yük, paletin iki kenarından desteklenir ve orta kısım boşta kalır. Bu yüzden rafa girecek paletin yönü, tahta kalınlığı ve yük dağılımı birlikte düşünülmelidir. Ayrıntı için [palet raf sistemleri](/rehber/palet-raf-sistemleri-ve-raf-yuku/) yazısını okuyun.

## Sipariş verirken nasıl belirtilir?

“Dört yönlü, takozlu, 80x120” gibi giriş yönünü ve ölçüyü birlikte söyleyin. Yük ağırlığını ve rafta kullanılıp kullanılmayacağını ekleyin. Elinizde örnek palet varsa fotoğrafı yeterlidir.

Standart ölçüler için [80x120 Euro palet](/urunler/80x120-euro-palet/), farklı ihtiyaçlar için [özel ölçü palet](/urunler/ozel-olcu-palet/) sayfalarını inceleyin. ${CTA}

## Takozlu ve kirişli yapı

Giriş yönünü belirleyen asıl unsur alt yapıdır. Takozlu palette üst tahtalar ile alt tahtalar arasında blok halinde takozlar bulunur; aradaki boşluklar her yönde açıktır. Kirişli palette ise boydan boya uzanan parçalar iki kenarı kapatır. Bazı kirişli paletlerde kirişlere açılan çentiklerle sınırlı bir dört yön girişi sağlanabilir; bu durumda transpalet kullanımı ayrıca denenmelidir.

## Depo düzenine etkisi

Dört yönlü yapı, paleti raftan ya da zeminden alırken operatöre seçenek verir. Bu da şu durumlarda zaman kazandırır:

- Yükleme rampasında paletlerin araca farklı yönde dizilmesi gerektiğinde.
- Koridor sonunda dönüş alanı dar olduğunda.
- Aynı depoda hem uzun hem kısa kenardan alım yapıldığında.
- Karışık ürünlerin ortak alanda toplandığı sevkiyat bölümlerinde.

## Satın almadan önce deneme

Elinizdeki ekipmanla uyumu en kolay denemeyle anlaşılır. Büyük sipariş öncesi bir numune palet üzerinde forklift ve transpaleti her yönden deneyin. Çatal boyunun palet derinliğine uygun olmasına, çatalın alt tahtaya zarar vermemesine bakın.

## Bakım ve hasar

Takozlar forklift darbesine en açık parçalardır. Dönmüş, çatlamış ya da parçalanmış takozu olan palet yük altında dengesini kaybedebilir. Bu paletleri ayırıp [palet tamiri](/hizmetler/palet-tamiri/) için değerlendirin; operatörlere çatalı tam hizalayarak girmelerini hatırlatın.

## Kısa karar rehberi

Yükünüz farklı yönlerden alınacaksa dört yönlü, sabit hat üzerinde tek yönden gidiyorsa iki yönlü yapı yeterli olabilir. Kararsızsanız taşıma ekipmanınızı ve depo planınızı anlatın.

## Araca dizim örneği

Dört yönlü paletin en görünür yararı yüklemede ortaya çıkar. Araç kasasında bazı sıralar paletin kısa kenarı, bazıları uzun kenarı kapıya bakacak şekilde dizilebilir. Bu düzen boşluğu azaltır; ancak operatörün her paleti hangi kenardan alacağını bilmesi gerekir. Yükleme planını kağıda çizip rampada göstermek karışıklığı önler.

Boşaltacak tarafın ekipmanını da düşünün. Sizde forklift varken alıcıda yalnızca transpalet olabilir. Bu durumda alt tahta düzeni belirleyici hale gelir. Sevkiyat öncesi alıcıya şunları sorun:

- Boşaltmayı hangi ekipmanla yapacaksınız?
- Palet rafa mı girecek, zeminde mi kalacak?
- Belirli bir giriş yönü şartınız var mı?
- Rampa ya da yan boşaltma mı kullanılacak?

Yanıtlar, hangi yapının sipariş edileceğini netleştirir. Konteyner ya da tıra kaç palet sığacağını görmek için [1 tır kaç palet alır](/rehber/1-tir-kac-palet-alir/) yazısından yararlanabilirsiniz.

## Sık sorulan sorular

**80x120 Euro palet dört yönlü müdür?** Takozlu yapıdaki Euro palete forklift dört yönden girebilir; transpaletle giriş alt tahtalar nedeniyle yöne bağlı olabilir.

**Dört yönlü palet daha mı sağlam?** Dayanım yön sayısından çok kereste kalınlığına, takoz kalitesine ve çivilemeye bağlıdır.`,
  },
  {
    slug: "palet-kuflenmesi-nasil-onlenir",
    title: "Palet küflenmesi neden olur, nasıl önlenir?",
    focusKeyword: "palet küflenmesi",
    metaTitle: "Palet Küflenmesi Neden Olur, Nasıl Önlenir? | MEPAL",
    metaDescription: "Palet küflenmesi nem ve havasız istiften doğar. Depolama, sevkiyat ve mal kabulde alınacak önlemlerle küf riskini azaltın.",
    excerpt: "Palet küflenmesi çoğunlukla nemli kereste ve havasız depolamadan kaynaklanır. Doğru istif ve mal kabul kontrolü riski büyük ölçüde azaltır.",
    imagePrompt: "Ahşap palet yüzeyinde nem lekesi ve hafif küf, yakın çekim makro fotoğraf, doğal ışık",
    content: `Palet küflenmesi, ahşabın nemli kaldığı ve hava almadığı her yerde görülebilir. Küflü palet yalnızca kötü görünmez; üzerindeki koliye leke ve koku geçirebilir, alıcının malı geri çevirmesine neden olabilir.

## Küf neden oluşur?

- Taze kesilmiş, yeterince kurumamış kereste.
- Açık alanda yağmur ve çiy altında bekletme.
- Zeminle doğrudan temas.
- Üst üste sıkı istif ve havasız konteyner.
- Sıcak ve soğuk farkıyla oluşan yoğuşma.

Ahşabın nem oranı kabaca yüzde 20’nin üzerine çıktığında küf riski belirgin biçimde artar.

## Isıl işlem küfü engeller mi?

Hayır. [ISPM-15](/rehber/ispm-15-nedir/) ısıl işlemi ahşaptaki zararlıları hedefler; kalıcı bir küf koruması sağlamaz. Isıl işlem görmüş palet de ıslak kalırsa küflenebilir.

## Depoda alınacak önlemler

1. Paletleri kapalı ya da üstü örtülü alanda tutun.
2. Zeminden takoz ya da boş bir paletle yükseltin.
3. İstifler arasında hava boşluğu bırakın.
4. Önce giren palet önce çıksın.
5. Islanan paletleri ayırıp kurutun.

## Sevkiyatta alınacak önlemler

Deniz yolunda konteyner içindeki sıcaklık değişimi yoğuşma yapar. Kuru palet kullanın, ürünü uygun şekilde ambalajlayın ve gerekirse nem tutucu kullanımını alıcınızla konuşun. İhracat yükleri için [ihracat paleti](/urunler/ihracat-paleti/) sayfasına bakın.

## Küflü palet kullanılır mı?

Gıda, ilaç ve kozmetik gibi hassas ürünlerde kullanılmamalıdır. Yüzeysel leke olan paletin başka bir işte kullanılıp kullanılamayacağı ürüne göre değerlendirilir. Derin çürüme varsa palet taşıma gücünü de kaybetmiş olabilir.

## Plastik palet alternatifi

Nemli ortam, yıkama ihtiyacı ya da hijyen şartı varsa [plastik palet](/urunler/plastik-palet/) daha uygun olabilir. İki malzemeyi [karşılaştırma yazımızda](/rehber/ahsap-palet-mi-plastik-palet-mi/) bulabilirsiniz.

## Sipariş verirken

Ürününüz neme duyarlıysa bunu teklif aşamasında söyleyin; palet seçimi ve teslim planı buna göre konuşulsun. ${CTA}

## Mal kabulde nem kontrolü

Küfle mücadele palet depoya girerken başlar. İndirme sırasında koyu lekelere, küf kokusuna ve dokununca ıslak hissedilen yüzeylere dikkat edin. Düzenli büyük alım yapıyorsanız ahşap nem ölçer kullanmak tahmine göre daha güvenilir sonuç verir. Kabul edeceğiniz nem seviyesini sipariş sırasında konuşun.

## Mevsime göre dikkat

| Dönem | Risk | Önlem |
|---|---|---|
| Sonbahar ve kış | Yağmur, çiy, düşük kuruma | Kapalı depolama |
| İlkbahar | Gece gündüz sıcaklık farkı | Havalandırma |
| Yaz | Kapalı alanda sıcak ve nem | İstif aralığı |
| Deniz sevkiyatı | Konteynerde yoğuşma | Kuru palet, nem önlemi |

## Islak paletle yüklemenin sonuçları

Nem, palet üstündeki karton koliye geçer; koli yumuşar ve alt sıralar ezilebilir. Streç filmle sıkıca sarılan yükte nem içeride kalır ve yol boyunca küf gelişebilir. Bu yüzden ıslak paleti sarmadan önce değiştirmek, sonradan iade ile uğraşmaktan kolaydır.

## Küflü palet fark ettiğinizde

1. Paleti diğerlerinden ayırın.
2. Üzerindeki ürünü ve ambalajı kontrol edin.
3. Fotoğraf çekip parti bilgisini not edin.
4. Yeni teslim edildiyse tedarikçiye aynı gün bildirin.
5. Depoda nem kaynağını bulun: çatı, zemin ya da havasız köşe.

Depo düzeninde önce giren ilk çıkar kuralı uygulanmazsa arka sıradaki paletler aylarca bekleyebilir. Sayım yaparken bu sıraları da kontrol edin. İstif önerileri için [palet nasıl istiflenir](/rehber/palet-nasil-istiflenir/) yazısına bakın.

## Sorumluluğu belirleyin

Küf çoğunlukla tek bir hatadan değil, küçük ihmallerin birikmesinden doğar. Depoda bu işi bir kişinin görevine yazmak etkili olur. Haftalık kısa bir turda şunlar kontrol edilebilir:

- Çatıda ya da duvarda su sızıntısı var mı?
- Açıkta bırakılmış istif kalmış mı?
- Zeminde su birikiyor mu?
- Brandaların altında nem hapsolmuş mu?
- Uzun süredir hareket etmeyen istif var mı?

Brandayla tamamen sarıp yere kadar kapatmak sanıldığı kadar yararlı değildir; altta biriken nem dışarı çıkamaz. Üstü örtülü, yanları hava alan bir düzen daha uygundur.

Stok miktarı da riski etkiler. İhtiyaçtan çok fazla palet alırsanız bir kısmı mevsim boyunca bekler. Parti parti teslimat planlamak hem alan kazandırır hem de bekleme süresini kısaltır. Palet ömrünü uzatmaya yönelik diğer adımlar [palet ömrü nasıl uzatılır](/rehber/palet-omru-nasil-uzatilir/) yazısında anlatılır.

## Sık sorulan sorular

**Küfü silmek yeterli mi?** Yüzey temizlense bile nem sürerse küf geri gelir. Önce kurutmak gerekir.

**Yazın küf olur mu?** Olabilir; kapalı ve havasız ortamda nem sıcakta da birikir.

**Streç film küfe yol açar mı?** Film tek başına küf üretmez; ancak nemli paletin ya da ürünün üzerine sıkıca sarılırsa nem içeride kalır ve küf için uygun ortam oluşur.`,
  },
  {
    slug: "ht-damgali-palet-damga-okuma",
    title: "HT damgalı palet: damga nasıl okunur?",
    focusKeyword: "HT damgalı palet",
    metaTitle: "HT Damgalı Palet: Damga Nasıl Okunur? | MEPAL",
    metaDescription: "HT damgalı palet üzerindeki IPPC işareti, ülke kodu, üretici numarası ve HT kısaltması ne anlatır? İhracat öncesi kontrol rehberi.",
    excerpt: "HT damgalı palet üzerindeki işaret; ülke kodunu, işlemi yapan kayıtlı işletmeyi ve ısıl işlem uygulandığını gösterir.",
    imagePrompt: "Ahşap palet takozu üzerinde ısıl işlem damgası alanı yakın çekim, damga metni bulanık ve genel, gerçekçi fotoğraf",
    content: `HT damgalı palet, ISPM-15 kurallarına uygun biçimde ısıl işlem gördüğü işaretlenmiş ahşap palettir. İhracatta alıcı ülke gümrüğü ahşap ambalajdaki bu işarete bakar. Damganın ne anlattığını bilmek, yüklemeden önce hatayı yakalamanızı sağlar.

## Damgada neler bulunur?

| Bölüm | Anlamı |
|---|---|
| IPPC sembolü | Uluslararası bitki sağlığı işareti |
| TR gibi iki harf | Ülke kodu |
| Numara | Yetkili kurumun işletmeye verdiği kayıt numarası |
| HT | Isıl işlem uygulandığını gösteren kod |

HT, İngilizce “heat treatment” ifadesinin kısaltmasıdır. Isıl işlemde ahşabın çekirdeği en az 30 dakika kesintisiz 56 °C’ye ulaştırılır.

## Damga nerede ve nasıl olmalı?

İşaret okunaklı, kalıcı ve görünür olmalıdır; genellikle karşılıklı en az iki yüzde bulunur. Elle yazılmış, silik ya da sonradan etiket olarak yapıştırılmış işaret kabul görmeyebilir.

## Sık görülen hatalar

- Damgasız tahtayla tamir edilmiş palet.
- Okunamayacak kadar silinmiş işaret.
- Damgalı paletlerin arasına karışmış damgasız ürün.
- Ek takoz ya da dolgu ahşabının işaretsiz olması.

Yükte kullanılan destek ve sıkıştırma ahşapları da kurallara tabidir.

## İhracattan önce kontrol listesi

1. Her palette damga var mı?
2. İşaret iki yüzde okunuyor mu?
3. Onarılmış palet var mı?
4. Alıcı ülkenin ek bir şartı var mı?

Ülke şartları değişebildiği için güncel kuralı alıcınızdan ya da gümrük danışmanınızdan teyit edin.

## Kontrplak palet için damga gerekir mi?

Kontrplak ve OSB gibi işlenmiş ahşap malzemeler genellikle ISPM-15 kapsamı dışındadır. Yine de paletin takozları ya da kirişleri masif ahşapsa durum değişebilir.

## HT paleti nereden temin edilir?

MEPAL, ISPM-15 uyumlu ve HT damgalı ihracat paleti temin eder. Ürün için [ısıl işlemli palet](/urunler/isil-islemli-palet/), kuralların tamamı için [ISPM-15 nedir](/rehber/ispm-15-nedir/) ve [ihracat kuralları](/rehber/ihracatta-palet-ve-ambalaj-kurallari/) sayfalarını okuyun. Yükleme tarihinizi ve adedi önceden bildirin. ${CTA}

## HT damgası neyi göstermez?

Damga yalnızca ahşabın ISPM-15’e uygun işlem gördüğünü gösterir. Şunlar hakkında bilgi vermez:

- Paletin taşıma kapasitesi.
- Kerestenin nem oranı ya da küf durumu.
- Paletin sıfır mı ikinci el mi olduğu.
- Gıdaya uygunluk.

Bu şartlarınız varsa siparişte ayrıca belirtin. Yük kapasitesi için [palet kaç kg taşır](/rehber/palet-kac-kg-tasir/) yazısına bakın.

## HT ile MB farkı

Eski ya da farklı kaynaklı paletlerde MB kısaltmasına rastlanabilir; bu, metil bromür ile gazlama anlamına gelir. Birçok ülkede bu yöntem kısıtlanmış ya da yasaklanmıştır. Gıda ile temas ihtimali olan işlerde ve ihracatta HT damgalı paleti tercih edin; şüpheli işaretli paleti kullanmayın.

## Damgalı paletleri depolama

HT damgalı paletleri damgasız stoktan ayrı tutun. Karışık istifte yükleme sırasında yanlış paletin araya girmesi kolaydır. Basit bir alan çizgisi ve tabela çoğu hatayı önler.

1. İhracat paletleri için ayrı bölüm belirleyin.
2. Teslim alırken her partiyi damga yönünden kontrol edin.
3. Hasarlı olanı tamir etmeden önce damga kurallarını sorun.
4. Yükleme öncesi son bir kez gözle kontrol yapın.
5. Gerekirse yüklenen paletlerin fotoğrafını saklayın.

## Yükleme planı

Alıcı ülke ve gümrük süreci için evrak ihtiyacınız olabilir. Neyin gerektiğini yüklemeden günler önce netleştirin. Palet adedini ve yükleme tarihini erken bildirmek temin planını kolaylaştırır.

## Alıcıdan gelen şartı yazılı alın

Bazı alıcılar HT damgasının yanında ek şartlar koyar: yeni palet, belirli ölçü, kabuksuz ahşap ya da nem sınırı gibi. Bu istekler sözlü kalırsa yükleme gününde sorun çıkar. Sipariş vermeden önce alıcınızdan şartname ya da kısa bir yazı isteyin ve tedarikçiye aynen iletin.

Yükleme gününden önce kendinize şu soruları sorun:

- Palet adedi, yük sayısıyla uyumlu mu?
- Yedek palet ayrıldı mı?
- Destek ahşapları da işaretli mi?
- Paletler yağmur altında beklemedi mi?
- Konteyner içi yerleşim planlandı mı?

Yedek ayırmak önemlidir: yükleme sırasında forklift darbesiyle kırılan bir paletin yerine damgasız bir palet koymak, tüm sevkiyatı riske atar. Konteynere yerleşim hesabı için [konteynere ve tıra kaç palet sığar](/rehber/konteynere-ve-tira-kac-palet-sigar/) yazısı ve [konteyner palet hesaplama](/araclar/konteyner-palet-hesaplama/) aracı kullanılabilir.

## Sık sorulan sorular

**Damganın süresi dolar mı?** ISPM-15 işareti için standart bir son kullanma tarihi yoktur; onarım ya da yeniden üretim ise yeni değerlendirme gerektirir.

**Yurt içi sevkiyatta HT gerekir mi?** Genellikle gerekmez; alıcınız özel olarak istiyorsa belirtin.`,
  },
  {
    slug: "palet-mal-kabul-kontrol-listesi",
    title: "Palet mal kabul kontrolü: teslim alırken bakılacaklar",
    focusKeyword: "palet mal kabul kontrolü",
    metaTitle: "Palet Mal Kabul Kontrolü: 8 Maddelik Liste | MEPAL",
    metaDescription: "Palet mal kabul kontrolü için ölçü, tahta, takoz, çivi, nem ve adet kontrolü. Teslimatta sorun yaşamamak için kısa liste.",
    excerpt: "Palet mal kabul kontrolü araç boşalırken yapılır. Ölçü, tahta, takoz, çivi, nem ve adet kontrolü sonradan çıkacak sorunları önler.",
    imagePrompt: "Depo görevlisi elinde kontrol listesi ve şerit metre ile ahşap paleti ölçüyor, yüz görünmüyor, gerçekçi fotoğraf",
    content: `Palet mal kabul kontrolü birkaç dakika sürer ama sonradan yaşanacak iade, hasarlı yük ve tartışmayı önler. Kontrolü araç henüz sahadayken yapmak en sağlıklısıdır.

## Sekiz maddelik kontrol listesi

1. **Adet:** İrsaliyedeki sayı ile indirilen sayı aynı mı?
2. **Ölçü:** Birkaç paletin eni, boyu ve yüksekliği siparişe uyuyor mu?
3. **Üst tahtalar:** Eksik, kırık ya da gevşek tahta var mı?
4. **Takozlar:** Çatlak, parçalanmış ya da dönmüş takoz var mı?
5. **Çiviler:** Yüzeyden çıkan çivi ürününüze zarar verebilir.
6. **Nem ve küf:** Islaklık, koyu leke ya da koku var mı?
7. **Temizlik:** Yağ, kimyasal ya da gıda artığı var mı?
8. **Damga:** İhracat için HT işareti okunuyor mu?

## Kaç palet kontrol edilmeli?

Küçük teslimatta hepsine göz atın. Büyük partilerde farklı istiflerden rastgele örnek seçin; sorun çıkarsa örnek sayısını artırın.

## Kabul ölçütünü baştan yazın

“İyi palet” herkese göre değişir. İkinci elde onarım görmüş tahtanın kabul edilip edilmeyeceği, renk farkı ve küçük çatlakların durumu sipariş sırasında yazılmalıdır. Sınıflar için [palet kalite sınıfları](/rehber/palet-kalite-siniflari/) yazısı yol gösterir.

## Sorun bulursanız

- Hatalı paletleri ayrı bir yere alın.
- Fotoğraf çekin.
- İrsaliyeye not düşün.
- Aynı gün tedarikçiye bildirin.

## Teslim sonrası depolama

Kontrolden geçen paletleri üstü kapalı ve zeminden yüksek bir alanda istifleyin. İstif düzeni için [palet nasıl istiflenir](/rehber/palet-nasil-istiflenir/) yazısını okuyun. Hasar gören paletlerin bir kısmı [palet tamiri](/hizmetler/palet-tamiri/) ile yeniden kullanılabilir.

## Düzenli tedarikte kazanç

Aynı ölçütle ve aynı tedarikçiyle çalışmak mal kabulü hızlandırır. Beklentinizi bir kez netleştirmek, her teslimatta yeniden konuşmaktan iyidir. İhtiyacınızı ve kabul şartlarınızı paylaşın. ${CTA}

## Basit bir kayıt formu

Her teslimatta aynı bilgileri yazmak, tedarik kalitesini zaman içinde görmenizi sağlar.

| Alan | Not |
|---|---|
| Tarih ve irsaliye numarası | Teslimatı bulmak için |
| Sipariş edilen ve gelen adet | Eksik takibi |
| Kontrol edilen örnek sayısı | Yöntemin tutarlılığı |
| Uygunsuz palet sayısı | Kalite eğilimi |
| Uygunsuzluk türü | Tahta, takoz, çivi, nem |
| Fotoğraf | Bildirim için kanıt |

## Ölçü kontrolü nasıl yapılır?

Şerit metreyle eni ve boyu paletin üst yüzeyinden, yüksekliği ise zeminden üst yüzeye kadar ölçün. İki köşegen uzunluğunu karşılaştırmak paletin çarpılıp çarpılmadığını gösterir. Otomatik istif ya da konveyör kullanıyorsanız küçük sapmalar bile sorun çıkarabilir; toleransınızı yazılı verin.

## Operatöre kısa talimat

- Paletleri indirirken fırlatmayın, çatalla itmeyin.
- Yamuk istifleri hemen düzeltin.
- Kırık paleti sağlamların arasına koymayın.
- Gördüğünüz sorunu sürücü ayrılmadan bildirin.

Bazı hasarlar tedarikten değil, sahadaki taşımadan doğar. Boşaltma sırasında dikkat edilirse sonradan yapılan itirazların nedeni daha net anlaşılır.

## Uygunsuz ürün için ne istenebilir?

Değişim, tamamlama ya da iade seçeneklerini sipariş sırasında konuşun. Kuralın baştan belli olması iki taraf için de kolaylık sağlar. Beklentinizi yazmakta zorlanıyorsanız kabul ettiğiniz ve etmediğiniz birer palet fotoğrafı iyi bir referanstır.

## Kontrol süresini kısaltmanın yolları

Her paleti tek tek ölçmek büyük partilerde mümkün olmayabilir. Zamanı doğru yere ayırmak için önce gözle genel bir tur atın: yamuk istif, belirgin renk koyulaşması ya da dışarı sarkan tahta hemen fark edilir. Ardından farklı sıralardan örnek seçip ayrıntılı bakın. Yalnızca en üstteki paletlere bakmak yanıltabilir; alt sıralardan da örnek alın.

İşe yarayan küçük araçlar:

- Boyu önceden işaretlenmiş bir ölçü çıtası.
- Telefonla çekilen tarihli fotoğraflar.
- Uygunsuz palet için renkli etiket.
- Tek sayfalık kontrol formu.

Kontrolü yapan kişi değiştiğinde sonuç da değişiyorsa ölçüt yeterince açık değildir. Kabul ve ret örneklerinin fotoğraflarını mal kabul alanına asmak, yorumu ortaklaştırır. İkinci el alımlarda nelere bakılacağını [ikinci el palet alırken dikkat edilecekler](/rehber/ikinci-el-palet-alirken-dikkat-edilecekler/) yazısı ayrıntılı anlatır.

## Sık sorulan sorular

**Renk farkı kusur mudur?** Ahşap doğal bir malzemedir; renk farkı tek başına dayanımı göstermez. Görünüm şartınız varsa sipariş sırasında belirtin.

**Kontrolü sürücü varken mi yapmalıyım?** Evet, adet ve görünür hasar için en uygun zaman budur.

**Teslimat yağmurda gelirse ne yapmalıyım?** Paletleri hemen üstü kapalı alana alın, ıslanma durumunu irsaliyeye yazın ve fotoğraf çekin. Neme duyarlı ürün yükleyecekseniz kurumadan kullanmayın ve durumu aynı gün tedarikçiye iletin. Islak paletleri kuru stokla karıştırmayın.`,
  },
  {
    slug: "agir-yuk-icin-palet-secimi",
    title: "Ağır yük paleti nasıl seçilir?",
    focusKeyword: "ağır yük paleti",
    metaTitle: "Ağır Yük Paleti Nasıl Seçilir? Makine, Döküm | MEPAL",
    metaDescription: "Ağır yük paleti seçerken ağırlık, yük dağılımı, tahta kalınlığı, takoz sayısı ve taşıma şekli birlikte değerlendirilir.",
    excerpt: "Ağır yük paleti seçiminde yalnızca toplam kilo yetmez. Yükün nereye bastığı, nasıl kaldırıldığı ve nerede bekleyeceği de hesaba katılır.",
    imagePrompt: "Kalın kereste ahşap palet üzerinde çemberlenmiş ağır sanayi makine parçası, fabrika ortamı, gerçekçi fotoğraf",
    content: `Ağır yük paleti, makine parçası, döküm, metal rulo ya da dolu varil gibi yükleri güvenle taşımak için daha güçlü yapılır. Yanlış seçim paletin ortadan sarkmasına, takozun kırılmasına ve ürünün devrilmesine yol açabilir.

## Seçimden önce sorulacak sorular

- Toplam ağırlık kaç kilogram?
- Yük tabana yayılıyor mu, yoksa birkaç ayaktan mı basıyor?
- Forklift mi, transpalet mi, vinç mi kullanılacak?
- Rafta bekleyecek mi?
- Üst üste istif yapılacak mı?

## Yük dağılımı neden önemli?

Aynı ağırlık, yayılı yüklendiğinde sorun çıkarmazken dört küçük ayaktan bastığında tahtayı delebilir. Noktasal yükte ayakların kirişe ya da takoza denk gelmesi, gerekirse üst yüzeyin güçlendirilmesi gerekir.

## Paletin güçlü yanını belirleyen unsurlar

| Unsur | Etkisi |
|---|---|
| Kereste kalınlığı | Eğilmeye karşı direnç |
| Takoz ve kiriş yapısı | Yükü zemine aktarma |
| Tahta aralığı | Küçük ayaklı yükte destek |
| Çivileme | Parçaların birlikte çalışması |

## Statik, dinamik ve raf yükü

Zeminde duran paletin taşıyabildiği yük, forkliftle hareket ederkenkinden yüksektir. Rafta, orta kısım desteksiz kaldığı için sınır daha da düşer. Kapasiteyi sorarken kullanım şeklini mutlaka belirtin. Ayrıntılar [palet kaç kg taşır](/rehber/palet-kac-kg-tasir/) yazısında.

## Özel ölçü ne zaman gerekir?

Yük palet kenarından taşıyorsa ya da ayak aralığı standart yapıya uymuyorsa [özel ölçü palet](/urunler/ozel-olcu-palet/) daha güvenlidir. Hassas veya uzun yola gidecek makineler için [ahşap sandık](/urunler/ahsap-sandik/) da düşünülebilir.

## Teklif için gönderilecekler

1. Yükün fotoğrafı ve dış ölçüsü.
2. Toplam ağırlık.
3. Ayak ya da temas noktalarının yeri.
4. Taşıma ve depolama şekli.
5. İhracat yapılacak ülke.

Bu bilgilerle uygun yapı konuşulabilir. Kritik yüklerde yük sabitleme (çember, bağlantı) yöntemini de planlayın. ${CTA}

## Yükü sabitlemek de tasarımın parçasıdır

Sağlam bir palet, üzerindeki yük kayıyorsa tek başına güvenlik sağlamaz. Ağır parçalarda sabitleme yöntemi baştan düşünülmelidir:

- Çelik ya da polyester çember.
- Parçayı taban üzerinden bağlayan cıvata ya da köşebent.
- Kaymayı önleyen takoz ve destek ahşapları.
- Hassas yüzeyler için ara malzeme.

İhracata gidecek yükte destek ahşaplarının da ISPM-15 şartlarına uyması gerekir. Ayrıntı için [ISPM-15 nedir](/rehber/ispm-15-nedir/) yazısına bakın.

## Ağırlık merkezi

Yüksek ve dar parçalar forklift dönüşünde devrilme riski taşır. Ağırlık merkezi bir tarafa kayıksa bunu paletin üzerine işaretleyin ve operatöre söyleyin. Gerekirse tabanı yükten daha geniş seçmek dengeyi artırır; bu durumda araç içi yerleşimi yeniden hesaplayın.

## Vinçle kaldırma

Vinç ve sapanla kaldırılacak yüklerde palet bunun için ayrıca tasarlanmalıdır. Sıradan bir paletin tahtalarından sapan geçirip kaldırmak tehlikelidir. Kaldırma noktalarını ve yöntemi teklif aşamasında mutlaka bildirin.

## Kullanım sırasında izleme

1. Her kullanımdan önce kirişlerde çatlak kontrolü yapın.
2. Eğilmiş ya da ezilmiş paleti ağır yükte kullanmayın.
3. Islak depolanmış ahşabın durumunu yeniden değerlendirin.
4. Çatal boyunun yükün ağırlık merkezini karşıladığından emin olun.

Kritik ve pahalı ekipman taşıyorsanız yük bilgisini bir teknik sorumluyla birlikte değerlendirmeniz doğru olur.

## Zemin ve depolama koşulu

Palet ne kadar güçlü olursa olsun bozuk zeminde yük dengesiz dağılır. Ağır yükü düz ve sağlam bir yüzeye bırakın; tek köşesi boşta kalan palet zamanla burulur. Uzun süre bekleyecek yüklerde ahşabın yavaş yavaş sehim yapabileceğini de hesaba katın.

Açık sahada bekleyecek yüklerde yağmur ve güneş ahşabı etkiler. Üstü örtülü bir alan seçin ve sevkiyat öncesi paleti yeniden gözden geçirin.

Teklif isterken şu ek bilgiler de yararlı olur:

- Yükün sahada kaç gün ya da ay bekleyeceği.
- Kaç kez yükleme ve boşaltma yapılacağı.
- Nakliye yolu: kara, deniz ya da hava.
- Alıcının palet için bir şartı olup olmadığı.

Çok sayıda aktarma yapılacak sevkiyatlarda darbe ihtimali artar; yapı buna göre seçilmelidir. Palet yapısına göre kapasite farklarını [yük kapasitesine göre palet seçimi](/rehber/palet-secimi-yuk-kapasitesi-rehberi/) rehberinde bulabilirsiniz.

## Sık sorulan sorular

**İki paleti üst üste koymak kapasiteyi artırır mı?** Güvenilir bir yöntem değildir; yüke uygun tek palet tercih edilmelidir.

**İkinci el palet ağır yükte kullanılır mı?** Hasar ve yorulma gözden kaçabileceği için ağır ve kritik yüklerde dikkatli olunmalıdır.

**Tahta kalınlığını nasıl belirtmeliyim?** Kalınlığı siz hesaplamak zorunda değilsiniz. Yükün ağırlığını, temas noktalarını ve kullanım şeklini anlatın; uygun yapı bu bilgilerle konuşulur ve siparişte yazılı hale getirilir.`,
  },
  {
    slug: "palet-ihtiyaci-planlama",
    title: "Palet ihtiyacı planlama: ne zaman, kaç adet?",
    focusKeyword: "palet ihtiyacı planlama",
    metaTitle: "Palet İhtiyacı Planlama: Kaç Adet, Ne Zaman? | MEPAL",
    metaDescription: "Palet ihtiyacı planlama için tüketim, geri dönüş oranı, güvenlik stoğu ve sipariş noktası. Basit bir hesapla stoksuz kalmayın.",
    excerpt: "Palet ihtiyacı planlama basit bir hesaptır: tüketimi, geri dönen paleti, tedarik süresini ve güvenlik stoğunu birlikte takip edin.",
    imagePrompt: "Masada stok takip tablosu ve arka planda istiflenmiş ahşap paletler, ofis ve depo birleşimi, gerçekçi fotoğraf, okunur yazı yok",
    content: `Palet ihtiyacı planlama yapılmadığında iki sorun çıkar: ya sevkiyat günü palet kalmaz ya da bahçe gereksiz stokla dolar. Birkaç sayıyı düzenli not etmek ikisini de önler.

## Takip edilecek dört sayı

- **Haftalık tüketim:** Sevkiyatla dışarı çıkan palet.
- **Geri dönen adet:** Müşteriden ya da hammaddeyle gelen palet.
- **Tedarik süresi:** Siparişten teslimata geçen gün.
- **Güvenlik stoğu:** Beklenmedik sipariş için ayrılan pay.

## Sipariş noktası nasıl hesaplanır?

Net haftalık tüketim, dışarı çıkan paletten geri dönen sağlam paletin çıkarılmasıyla bulunur. Sipariş noktası ise tedarik süresindeki tüketim ile güvenlik stoğunun toplamıdır.

| Kalem | Örnek |
|---|---|
| Haftalık çıkan | 200 |
| Haftalık geri dönen | 50 |
| Net tüketim | 150 |
| Tedarik süresi | 1 hafta |
| Güvenlik stoğu | 75 |
| Sipariş noktası | 225 |

Örnek sayılar yalnızca hesabı göstermek içindir. Stok 225’e indiğinde sipariş verirsiniz.

## Yoğun dönemleri unutmayın

Bayram öncesi, yıl sonu ve kampanya dönemlerinde tüketim artar. Geçen yılın sevkiyat kayıtlarına bakıp güvenlik stoğunu önceden yükseltin.

## Depo alanını hesaba katın

Fazla stok yer kaplar ve açıkta kalırsa değer kaybeder. Alanınız darsa büyük siparişi parti parti teslim almak daha uygundur.

## Geri dönen paleti yönetin

Gelen paletleri ayırın: sağlam olanlar stoka, tamirlikler [palet tamirine](/hizmetler/palet-tamiri/), fazlalıklar ve hurdalar [alım satıma](/hizmetler/palet-alim-satim/) gitsin. Böylece yeni alım miktarı düşer. Maliyet tarafı için [palet maliyetini düşürme yolları](/rehber/palet-maliyetini-dusurmenin-yollari/) yazısına bakın.

## Tedarikçiyle plan

Aylık tahmini adedi paylaşmak, sevkiyatın önceden planlanmasına yardımcı olur. Ölçü ve kalite şartını bir kez netleştirin, sonraki siparişlerde yalnızca adet ve tarih konuşulsun. Gebze ve çevresinde düzenli alım için ihtiyacınızı anlatın. ${CTA}

## Ölçüleri ayrı ayrı takip edin

Toplam palet sayısı yeterli görünürken belirli bir ölçü bitmiş olabilir. Tabloyu her ölçü için ayrı tutun: 80x120, 100x120 ve ihracat paleti farklı satırlarda olsun. HT damgalı stok ayrıca sayılmalıdır, çünkü yurt içi paletle yer değiştiremez.

## Haftalık sayım nasıl kolaylaşır?

- İstifleri sabit adetle yapın; istif sayısını saymak yeterli olsun.
- Sağlam, tamirlik ve hurda alanlarını ayırın.
- Sayım gününü ve sorumlusunu belirleyin.
- Sipariş noktasını zemine ya da duvara görsel olarak işaretleyin.

## Fire payı

Kullanım sırasında kırılan, müşteride kalan ve kaybolan paletler tüketimi artırır. Üç ay boyunca çıkan, dönen ve hurdaya ayrılan adedi yazarsanız gerçek ihtiyacınızı görürsünüz. Fire yüksekse nedenini araştırın: forklift kullanımı, açıkta depolama ya da yüke uygun olmayan palet seçimi.

## Plan ne zaman gözden geçirilmeli?

| Durum | Yapılacak |
|---|---|
| Yeni büyük müşteri | Tüketim tahminini yenileyin |
| Ürün ambalajı değişti | Ölçü uyumunu kontrol edin |
| Tedarik süresi uzadı | Güvenlik stoğunu artırın |
| Depo alanı daraldı | Parti teslimata geçin |

## Satın alma ve sevkiyat ekibi birlikte çalışsın

Satış ekibinin aldığı büyük sipariş depoya geç bildirilirse plan işlemez. Haftalık kısa bir bilgi paylaşımı, acil alım sayısını azaltır. Sevkiyat takvimini bir hafta önceden bilmek çoğu işletme için yeterli bir başlangıçtır.

## Basit bir tabloyla başlayın

Özel bir yazılım şart değildir. Tek sayfalık bir tabloda tarih, ölçü, giren, çıkan, hurdaya ayrılan ve kalan sütunları yeterlidir. Her hareketi aynı gün işlemek, ay sonunda hatırlamaya çalışmaktan daha doğru sonuç verir.

Tabloyu birkaç hafta tuttuktan sonra şunlar görünür hale gelir:

- Hangi günlerde tüketim yükseliyor?
- Hangi müşteriden palet geri dönmüyor?
- Hurda oranı artıyor mu?
- Hangi ölçü beklenenden hızlı bitiyor?

Geri dönmeyen palet önemli bir maliyet kalemiyse müşterilerle teslim ve iade kuralını konuşun; irsaliyeye palet adedini yazmak takibi kolaylaştırır. Hurda oranı yükseliyorsa forklift kullanımını ve depolama koşullarını gözden geçirin.

Planlama ilk ay kusursuz olmaz. Tahmin ile gerçekleşen arasındaki farkı not edip güvenlik stoğunu ona göre ayarlayın. Kiralama ve havuz sistemlerini de merak ediyorsanız [palet havuzu ve palet kiralama](/rehber/palet-havuzu-ve-palet-kiralama/) yazısı seçenekleri anlatır.

## Sık sorulan sorular

**Güvenlik stoğu ne kadar olmalı?** Tedarik süreniz ve talep dalgalanmanız belirler. Başlangıçta yarım haftalık tüketim ayırıp sonuçlara göre ayarlayabilirsiniz.

**Hesabı hangi sıklıkta güncellemeliyim?** Ayda bir kontrol etmek çoğu işletme için yeterlidir.

**Mevsimlik iş yapıyorsam ne olur?** Yıllık ortalama yerine sezon bazında hesap yapın. Yoğun dönem başlamadan birkaç hafta önce ihtiyacı bildirmek ve teslimatı partilere bölmek, hem stok alanını hem sevkiyat planını rahatlatır.`,
  },
  {
    slug: "ozel-olcu-palet-siparisi-olcu-alma",
    title: "Özel ölçü palet siparişi: ölçü nasıl alınır?",
    focusKeyword: "özel ölçü palet siparişi",
    metaTitle: "Özel Ölçü Palet Siparişi: Ölçü Alma Rehberi | MEPAL",
    metaDescription: "Özel ölçü palet siparişi için yük boyutu, taşma payı, yükseklik, araç ve raf ölçüsü nasıl belirlenir? Adım adım anlatım.",
    excerpt: "Özel ölçü palet siparişi doğru ölçüyle başlar. Yük, araç, raf ve forklift birlikte düşünülürse üretilen palet ilk seferde uyar.",
    imagePrompt: "Ahşap atölyede şerit metre ile kereste ölçen eller, yanında farklı boyutlarda paletler, gerçekçi fotoğraf",
    content: `Özel ölçü palet siparişi, standart paletin ürününüze uymadığı durumda en doğru çözümdür. Taşan koli kenardan ezilir, fazla büyük palet ise araçta ve depoda yer kaybettirir. Ölçüyü doğru almak her ikisini önler.

## Adım adım ölçü alma

1. Ürünün ya da koli diziliminin enini ve boyunu ölçün.
2. Çember, streç ve köşebent için pay ekleyin.
3. Forklift çatalının aralığını ve boyunu not edin.
4. Raf varsa göz genişliği ve derinliğini ölçün.
5. Araç ya da konteyner iç ölçüsüne dizilimi kontrol edin.

## Yazmanız gereken bilgiler

| Bilgi | Örnek ifade |
|---|---|
| Taban ölçüsü | en x boy, santimetre |
| Yük | palet başına kilogram |
| Giriş yönü | iki ya da dört yönlü |
| Alt yapı | takozlu ya da kirişli |
| İhracat | HT damgası gerekli mi |
| Adet | tek sefer ve aylık |

## Konteyner ve tıra uyum

Birkaç santimetrelik fark, bir sırada kaç palet sığacağını değiştirebilir. Ölçüyü kesinleştirmeden [konteyner palet hesaplama](/araclar/konteyner-palet-hesaplama/) aracıyla dizilimi deneyin.

## Standart ölçü işinizi görür mü?

Yükünüz 80x120 ya da 100x120 tabana uyuyorsa standart palet daha hızlı temin edilir ve çoğu zaman daha ekonomiktir. Karşılaştırma için [100x120 ile 80x120 farkı](/rehber/100x120-ile-80x120-palet-farki/) yazısına bakın.

## Numune ve onay

Büyük adetlerden önce bir numune üzerinde yükü denemek hatayı erken gösterir. Onayladığınız ölçüyü, kereste kalınlığını ve tahta dizilimini yazılı hale getirin; sonraki siparişlerde aynı tarif kullanılır.

## Süre

Özel üretim, kereste hazırlığı ve imalat gerektirir. Süre adede ve yapıya göre değişir; sevkiyat tarihinizi baştan bildirin. Güncel durum için [özel ölçü palet fiyatları](/ozel-olcu-palet-fiyatlari/) sayfasına bakabilirsiniz.

Çiziminiz olmasa da olur: ürün fotoğrafı ve ölçüler yeterlidir. **0536 866 83 07** numarasını arayabilir, WhatsApp’tan yazabilir ya da [teklif formunu](/teklif-al/) doldurabilirsiniz.

## Taşma payı mı, içeride kalma mı?

Kolinin paletten taşması alt sıralarda ezilmeye yol açar. Palet yükten çok büyükse de araçta boşluk oluşur ve yük kayabilir. Genel hedef, yükün taban üzerine tam oturması ve çember ile streç için küçük bir pay kalmasıdır. Payın ne kadar olacağı ambalaj yönteminize bağlıdır.

## Yükseklik sınırını unutmayın

Palet yüksekliği yüke eklenir. Konteyner kapısı, tır kasası ve raf gözü için toplam yüksekliği hesaplayın:

1. Ürünün istif yüksekliği.
2. Paletin kendi yüksekliği.
3. Forkliftin kaldırma için ihtiyaç duyduğu üst boşluk.
4. Kapı ya da raf açıklığı.

Yaygın palet yükseklikleri için [palet yüksekliği kaç cm](/rehber/palet-yuksekligi-kac-cm/) yazısına bakın.

## Basit bir çizim yeterli

Kağıda üstten görünüşü çizin: en, boy ve ayak ya da temas noktaları. Yandan görünüşte yüksekliği ve çatal boşluğunu gösterin. Fotoğrafını göndermeniz yeterlidir; teknik çizim programı gerekmez. Ölçüleri milimetre ya da santimetre olarak yazdığınızı mutlaka belirtin.

## Sık karşılaşılan hatalar

- Ürünün dış ambalajı yerine çıplak ölçüsünü vermek.
- En ile boyu karıştırmak.
- Forklift çatal boşluğunu söylememek.
- İhracat şartını sonradan eklemek.
- Araç dizilimini denemeden ölçü kesinleştirmek.

## Tekrar siparişler

Onaylanan ölçüye bir isim ya da kod verin ve dosyalayın. Sonraki siparişte yalnızca kodu ve adedi söylemek hatayı azaltır. Ürününüz değiştiğinde ölçüyü yeniden kontrol edin.

## Numuneyi gerçek koşulda deneyin

Numune geldiğinde yalnızca ölçmekle yetinmeyin. Üzerine gerçek ürünü yükleyin, çemberleyin ve normal taşıma hattınızda gezdirin. Forklift çatalının rahat girip girmediğine, yükün ortada sehim yapıp yapmadığına ve araç kapısından geçip geçmediğine bakın.

Deneme sırasında şu notları alın:

- Taban yüke tam oturdu mu?
- Çember ve streç için yeterli pay kaldı mı?
- Tahta aralığı küçük kolileri destekliyor mu?
- Raf gözünde güvenli oturuyor mu?
- Boş palet rahat istifleniyor mu?

Değişiklik gerekiyorsa seri üretimden önce yazılı olarak bildirin. “Biraz daha sağlam olsun” gibi bir ifade yerine sorunu tarif edin: orta kısım esniyor, köşeden koli sarkıyor ya da çatal alt tahtaya çarpıyor. Böylece yapılacak düzeltme netleşir. Farklı yapıların ne işe yaradığını görmek için [özel ölçü palet](/urunler/ozel-olcu-palet/) sayfasını inceleyebilirsiniz.

## Sık sorulan sorular

**Az adet özel üretim yapılır mı?** Adet ve ölçüye göre değerlendirilir; bilgileri iletin.

**Ölçüde ne kadar sapma olur?** Ahşap doğal bir malzemedir; kritik ölçünüz varsa kabul edilebilir toleransı sipariş sırasında belirtin.

**Eski paletimi örnek olarak gönderebilir miyim?** Elinizde işinizi gören bir palet varsa iyi bir referanstır. Önce fotoğrafını ve ölçülerini paylaşın; örneğin getirilmesine ya da incelenmesine gerek olup olmadığı buna göre konuşulur.`,
  },
];
