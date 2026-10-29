import { L, bolge, type RegionContent } from "./regions-build";

// Parti 3: Anadolu yakası iç kesimi ve il geneli sayfaları (Kocaeli, İstanbul).
export const regionContent3: Record<string, RegionContent> = {
  "atasehir-kadikoy-palet": {
    blurb: "Merkez ofisimiz Kozyatağı’nda; Ataşehir ve Kadıköy işletmelerine mağaza, restoran ve depo ihtiyacına göre palet.",
    answer:
      "Ataşehir ve Kadıköy, sanayiden çok mağaza, restoran, ofis ve küçük ticari depo yoğunluklu ilçelerdir. Merkez ofisimiz Kozyatağı’ndadır; stok ve yükleme deposu ise Gebze Pelitli’dedir. Bu ilçelerdeki işletmelere Euro, ikinci el ve plastik palet sağlıyor, kullanılmayan paletleri alıyoruz.",
    zones: ["Kozyatağı", "Göztepe", "Bostancı", "Fikirtepe", "İçerenköy", "Küçükbakkalköy", "Barbaros", "Kayışdağı"],
    nearby: ["umraniye-palet", "maltepe-palet", "kartal-palet", "sancaktepe-palet"],
    sections: [
      {
        h: "Merkez ofis ve depo ayrımı",
        p: [
          "MEPAL’in merkez ofisi Kozyatağı Mah. Gülbahar Sk. AR Plaza adresindedir; telefonla ya da WhatsApp ile ulaşılabilen idari merkez burasıdır. Paletlerin stoklandığı ve yüklendiği yer ise Gebze Pelitli’deki depodur. Ofis, teklif ve evrak işlemleri; depo, ürün hazırlığı ve yükleme içindir.",
          "Yani Ataşehir ya da Kadıköy’de bir işletmeyseniz, yüz yüze görüşme isterseniz ofisle iletişime geçebilirsiniz; ürünü yerinde görmek ya da kendi aracınızla yüklemek isterseniz Gebze deposu doğru adrestir.",
        ],
        links: [L.iletisim, L.teklif],
      },
      {
        h: "Bu ilçelerde palet kim kullanır",
        p: [
          "Ataşehir ve Kadıköy’de büyük fabrika yoktur, ancak palet kullanımı beklenenden yaygındır. Mağazaların depoları, zincir restoranların merkezi mutfakları ve depoları, ofis taşıma firmaları, etkinlik ve fuar malzemesi taşıyan işletmeler, elektronik ve moda perakendecileri palet kullanır.",
          "Bu işletmelerin ortak noktası, paleti ürün değil bir araç olarak görmeleridir. Ucuz ama sağlam, temiz ve pratik çözüm ararlar. Genellikle düzenli sipariş yerine ihtiyaç doğdukça alım yaparlar.",
        ],
        links: [L.gGida, L.gEticaret],
      },
      {
        h: "İşletme tipine göre öneri",
        table: {
          caption: "Ataşehir ve Kadıköy işletmeleri için palet",
          head: ["İşletme", "Palet", "Not"],
          rows: [
            ["Mağaza ve perakende deposu", "İkinci el Euro palet", "Raf ve koli istifi için ekonomik"],
            ["Restoran ve mutfak deposu", "Plastik palet, sıfır palet", "Hijyen ve yıkama kolaylığı"],
            ["Etkinlik ve fuar malzemesi", "İnce palet, özel ölçü", "Dekor ve ekipman taşımada pratik"],
            ["Ofis ve arşiv taşıma", "Euro palet", "Kolilerin standart istifi"],
          ],
        },
        links: [L.ikinciEuro, L.plastik, L.sifir, L.ince],
      },
      {
        h: "Şehir içi teslimat",
        p: [
          "Ataşehir ve Kadıköy’de teslimatta en kritik konu erişimdir: iş merkezlerinin yükleme rampası saatleri, site yönetiminin araç kuralları, sokak kısıtları ve bina asansörü. Bazı adreslerde palet ancak belirli saat aralığında indirilebilir. Bu kuralları siparişle birlikte iletirseniz teslim günü sorun yaşanmaz.",
          "Birkaç paletlik ihtiyaçlarda depodan yükleme ya da adres teslimi arasında maliyet-zaman dengesi kurmak gerekir; teklifte iki seçenek de yazılabilir.",
        ],
        steps: [
          "Adres, bina yükleme kuralları ve teslim saati aralığını bildirin.",
          "Palet türü ve adedi ile teklifi alın.",
          "Onay sonrası araç ve teslim zamanı kesinleşir.",
          "Teslimde sayım ve fatura ile süreç kapanır.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Etkinlik sonrası ve taşınma sonrası paletler",
        p: [
          "Fuar, etkinlik ya da ofis taşıması sonrasında elde kalan paletler hem yer kaplar hem de dağınık görüntü oluşturur. Palet türü, adedi ve durumuna göre kısa bir ön değerlendirme sonrası alım planlanabilir; fotoğraf göndermek süreci hızlandırır.",
        ],
        links: [L.hurda, L.degerleme],
      },
    ],
    faq: [
      { q: "Ofisinizde palet satın alabilir miyim?", a: "Hayır, ofis idari merkezdir. Ürün ve yükleme Gebze Pelitli deposundadır; ofis teklif ve evrak konularında yardımcı olur." },
      { q: "Kadıköy’deki restoranım için hangi palet?", a: "Hijyen için plastik ya da sıfır palet önerilir. Gıda ile doğrudan temasta ahşap palet tavsiye edilmez." },
      { q: "Site içine teslimat yapılabilir mi?", a: "Site yönetiminin kuralları dahilinde yapılabilir. Araç girişi ve saat kısıtını önceden bildirmeniz gerekir." },
      { q: "Az sayıda palet için de teklif verir misiniz?", a: "Evet. Küçük adetli talepler için de teklif hazırlanır." },
    ],
  },

  "sancaktepe-palet": {
    blurb: "Sancaktepe’nin Samandıra ve Sarıgazi sanayi sitelerine Euro, ikinci el, plastik ve özel ölçülü palet.",
    answer:
      "Sancaktepe, Anadolu yakasında sanayi siteleri ve küçük üretim atölyelerinin yoğun olduğu bir ilçedir; Samandıra ve Sarıgazi çevresi bunların başında gelir. Bu işletmelere Euro, ikinci el, plastik ve özel ölçülü palet sağlıyor; atölye ve depolardaki hurda paletleri yerinden alıyoruz.",
    zones: ["Samandıra", "Sarıgazi", "Yenidoğan", "Abdurrahmangazi", "Osmangazi", "Sancaktepe sanayi siteleri"],
    nearby: ["sultanbeyli-palet", "umraniye-palet", "pendik-palet", "cekmekoy-palet"],
    sections: [
      {
        h: "Sancaktepe’nin atölye ekonomisi",
        p: [
          "Sancaktepe’de sanayi, tek bir büyük OSB’den çok, çok sayıda küçük sanayi sitesi ve bağımsız atölye olarak yayılır. Mobilya ve ahşap işleme, metal ve kaynak, plastik ürün, gıda üretimi, otomotiv tamir ve yedek parça gibi işkolları yan yana bulunur.",
          "Bu yapı palet siparişlerinde de kendini gösterir: tek tek az sayıda palet, ama çok sayıda işletmeden gelen talep. Teslimat planı bu yüzden rota bazlı, bölgedeki birkaç siparişi birleştirecek şekilde yapılabilir.",
        ],
        links: [L.gOtomotiv, L.gKimya],
      },
      {
        h: "Atölye tipine göre palet",
        list: [
          "Mobilya ve ahşap işleme: ürün ölçüsü büyük ve düzensiz olabilir; özel ölçülü ya da orta destekli palet gerekir.",
          "Metal ve kaynak atölyeleri: ağır parça için takozlu, kalın tahtalı palet.",
          "Plastik ürün ve ambalaj: Euro ölçülü ikinci el palet çoğu zaman yeterlidir.",
          "Gıda üretimi: hijyen için plastik ya da sıfır palet.",
        ],
        links: [L.ozel, L.takozlu, L.ikinciEuro, L.hijyenik],
      },
      {
        h: "Sevkiyat, kapı ve erişim",
        p: [
          "Küçük sanayi sitelerinde araç girişi, site kapısının yüksekliği ve manevra alanıyla sınırlıdır. Tırın giremeyeceği sitelerde daha küçük araçlarla parçalı teslimat gerekebilir. Bu bilgiyi siparişte yazarsanız ek sefer hesaplanır ve süreç şaşırtmaz.",
          "Aynı sitede birden fazla işletme palet ihtiyacı duyuyorsa ortak sipariş vermek mümkündür; böylece sevkiyat tek seferde toplanır.",
        ],
        steps: [
          "Site adı, kapı ölçüsü ve boşaltma yöntemini yazın.",
          "Palet türü ve adedine göre teklif hazırlanır.",
          "Onay sonrası teslim planlanır.",
          "Teslimde sayım ve irsaliye yapılır.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Çok sayıda küçük işletme için düzen",
        p: [
          "Sancaktepe gibi çok işletmeli bölgelerde palet alım-satımında karşılıklı denge önemlidir. Bir atölyenin fazla paleti, komşusunun ihtiyacı olabilir; biz bu dengeyi alım ve satış yoluyla yönetebiliyoruz. Elinizde fazla palet varsa ya da yeni palet arıyorsanız, aynı yazışmada iki konuyu birlikte konuşabilirsiniz.",
        ],
        links: [L.alimSatim, L.hurda, L.rNereye],
      },
      {
        h: "Rota birleştirme ve ortak sipariş",
        p: [
          "Aynı sanayi sitesindeki ya da yakın sitelerdeki birkaç işletme aynı dönemde palet alacaksa, siparişleri birleştirmek mümkündür. Böylece araç tek seferde birden fazla adrese uğrar. Birleştirmenin kuralı, her işletmenin ürün ve adetini ayrı yazması ve teslim noktalarının güzergâh üzerinde olmasıdır.",
          "Komşularınızla koordine olup bize tek mesajda iletmeniz süreci kolaylaştırır.",
        ],
        links: [L.surec, L.teklif],
      },
    ],
    faq: [
      { q: "Sancaktepe’de küçük atölyeyim, kaç palet alabilirim?", a: "Küçük adetli siparişler de kabul edilir. Adres ve ihtiyaç bilgisiyle teklif hazırlanır." },
      { q: "Site kapısı dar ise araç nasıl girer?", a: "Kapı ölçüsünü bildirirseniz uygun araç seçilir; gerekirse küçük araçla parçalı teslim planlanır." },
      { q: "Mobilya ürünlerim için özel ölçü palet yapılır mı?", a: "Evet. Ürün ölçüsü ve ağırlığıyla teklif alabilirsiniz." },
      { q: "Fazla paletimi satabilir miyim?", a: "Türüne ve durumuna göre değerlendirilir. Fotoğraf ve adet bilgisi yeterlidir." },
      { q: "Ortak sipariş nasıl verilir?", a: "Her işletmenin ürün, adet ve adresini tek mesajda yazın. Teslim güzergâhı buna göre planlanır." },
    ],
  },

  "umraniye-palet": {
    blurb: "Dudullu OSB ve İMES Sanayi Sitesi dahil Ümraniye sanayisine Euro, ikinci el, plastik ve özel ölçülü palet.",
    answer:
      "Ümraniye, Anadolu yakasının en köklü sanayi ilçelerinden biridir; Dudullu OSB ve İMES Sanayi Sitesi çevresinde çok sayıda üretim ve depo işletmesi bulunur. Bu işletmelere Euro, ikinci el, plastik ve özel ölçülü palet sağlıyor; tesislerde biriken hurda paletleri yerinden alıyoruz.",
    zones: ["Dudullu OSB", "İMES Sanayi Sitesi", "Alemdağ", "Esenevler", "Yukarı Dudullu"],
    nearby: ["atasehir-kadikoy-palet", "sancaktepe-palet", "sultanbeyli-palet", "cekmekoy-palet"],
    sections: [
      {
        h: "Dudullu ve İMES’te üretim çeşitliliği",
        p: [
          "Dudullu OSB, İstanbul’un şehir içindeki sınırlı sayıda OSB’sinden biri olarak plastik, metal, ambalaj, elektrik-elektronik ve gıda gibi çok sayıda işkolunu barındırır. İMES Sanayi Sitesi ise atölye ölçeğindeki üreticilerin yoğun olduğu, makine ve metal ağırlıklı bir yapıya sahiptir.",
          "Şehre yakınlık, bu tesislerin müşterilerine hızlı ulaşmasını sağlar ama aynı zamanda alan sıkıntısı doğurur. Dar depo alanlarında palet yönetimi, istif düzeni ve fazla paletlerin çıkışı belirleyici hale gelir.",
        ],
        links: [L.gKimya, L.rIstif],
      },
      {
        h: "Alan kısıtı olan tesislerde palet düzeni",
        list: [
          "Fazla palet stoku tutmak yerine sık ve küçük partilerle çalışmak depo alanını rahatlatır.",
          "Boş palet istif yüksekliği iş güvenliği kurallarına uygun olmalı; fazla yığılmış palet devrilme riski taşır.",
          "Kırık paletleri sağlam paletlerden ayrı tutmak, karışıklığı önler.",
          "Palet türlerini işaretlemek (ör. renk bandı) sınıflandırmayı kolaylaştırır.",
        ],
        links: [L.rIstif, L.rOmur],
      },
      {
        h: "Sektöre göre palet",
        table: {
          caption: "Ümraniye’de sık görülen işkolları ve palet",
          head: ["İşkolu", "Palet", "Not"],
          rows: [
            ["Plastik ve ambalaj", "İkinci el Euro, 100x120", "Torba ve koli istifi"],
            ["Elektrik-elektronik", "Sıfır ya da temiz ikinci el", "Statik, toz ve leke riski"],
            ["Metal ve makine", "Takozlu, özel ölçü", "Ağır ve düzensiz parçalar"],
            ["Gıda", "Plastik, sıfır palet", "Hijyen kuralları"],
          ],
        },
        links: [L.ikinciEuro, L.p100, L.hijyenik, L.ozel],
      },
      {
        h: "Ümraniye’ye sevkiyat",
        p: [
          "Ümraniye’de trafik yoğunluğu, teslim saatini önemli ölçüde etkiler. Dudullu OSB girişinde araç kayıt kuralları, İMES’te ise sitenin dar sokakları göz önünde bulundurulmalıdır. Teslim penceresi, kapı ve rampa durumunu baştan yazmanız planlamayı kolaylaştırır.",
        ],
        steps: [
          "Teslim noktasını (OSB, site, cadde) ve giriş kuralını belirtin.",
          "Palet türü, ölçü ve adetle teklif alın.",
          "Onay sonrası araç ve teslim penceresi netleşir.",
          "Teslimde sayım yapılarak fatura kesilir.",
        ],
        links: [L.surec, L.toptan],
      },
      {
        h: "Hurda ve fazla palet",
        p: [
          "Dudullu ve İMES gibi alanı kısıtlı bölgelerde atıl paletler en pahalı yüklerden biri haline gelir; çünkü üretim alanını işgal eder. Bu paletlerin sınıflandırılarak ayrılması ve düzenli aralıklarla tesisten çıkarılması iş güvenliği ve düzen açısından fayda sağlar.",
        ],
        links: [L.hurda, L.yerinde, L.kirik],
      },
      {
        h: "Dar alanda palet iş güvenliği",
        p: [
          "Dudullu ve İMES gibi sıkışık sanayi alanlarında palet istifi, yürüyüş yolu ve yangın çıkışlarıyla çakışabilir. Boş palet yığınlarının yüksekliği sınırlı tutulmalı ve çıkış yolları açık bırakılmalıdır. Kırık paletin forkliftle taşınması da kaza riski taşır.",
          "Kırık paletleri sağlam paletlerden ayrı bir alanda biriktirmek ve düzenli aralıklarla çıkarmak güvenliği artırır.",
        ],
        links: [L.rIstif, L.hurda],
      },
    ],
    faq: [
      { q: "Dudullu OSB’ye teslimat için ne gerekir?", a: "OSB giriş kuralına göre araç plakası ve sürücü bilgisi gerekir. Bunları sipariş sırasında paylaşmanız yeterlidir." },
      { q: "İMES Sanayi Sitesi’ne büyük araç girebilir mi?", a: "Sokak genişliğine göre araç belirlenir. Adres ve erişim bilgisini yazın, uygun araç planlanır." },
      { q: "Elektronik ürünler için hangi palet uygun?", a: "Leke ve toz riskini azaltmak için sıfır ya da çok temiz ikinci el palet tercih edilir." },
      { q: "Fazla paletleri tesisten çıkarır mısınız?", a: "Evet. Palet türü, durum ve adet bilgisiyle ön değerlendirme yapılır." },
      { q: "Boş palet yığını ne kadar yüksek olabilir?", a: "İş güvenliği uzmanınızın belirlediği sınırı aşmamalı; devrilme riski doğuran yığınlardan kaçının." },
    ],
  },

  "sultanbeyli-palet": {
    blurb: "Sultanbeyli’nin atölye ve küçük üretim işletmelerine esnek adetli ikinci el, Euro ve plastik palet.",
    answer:
      "Sultanbeyli, Anadolu yakasında mobilya, tekstil, metal ve gıda atölyelerinin yoğun olduğu, küçük ölçekli üretimle öne çıkan bir ilçedir. Bu işletmelere esnek adetle ikinci el Euro, plastik ve özel ölçülü palet sağlıyor; atölyelerde biriken hurda paletleri yerinden alıyoruz.",
    zones: ["Battalgazi", "Mehmet Akif", "Abdurrahmangazi", "Hasanpaşa", "Turgut Reis", "Ahmet Yesevi", "Mimar Sinan"],
    nearby: ["sancaktepe-palet", "umraniye-palet", "pendik-palet", "cekmekoy-palet"],
    sections: [
      {
        h: "Sultanbeyli’de küçük ölçekli üretim",
        p: [
          "Sultanbeyli’de üretim ağırlıklı olarak atölye ölçeğindedir: mobilya ve döşeme, tekstil ve hazır giyim, metal işleme, gıda üretimi ve ambalaj gibi işkolları mahalle aralarında yer alır. Bu işletmelerin pek çoğu geniş depolara sahip değildir; palet de sipariş edilince hızlı kullanılır.",
          "Küçük ölçekli işletmelerin palet kararı çoğunlukla fiyat ve esneklik üzerine kurulur. Bu yüzden ikinci el, sınıflandırılmış ve küçük adette alınabilen palet bu bölgede öne çıkar.",
        ],
        links: [L.ikinci, L.rIkinciEl],
      },
      {
        h: "Atölye için palet seçimi",
        list: [
          "Mobilya: ürün büyük ama hafifse geniş tabanlı ince palet veya özel ölçülü palet.",
          "Tekstil: kıymık ve çivi riskini azaltmak için temiz, sınıflandırılmış ya da plastik palet.",
          "Metal: yük ağırlığına göre takozlu ve kalın tahtalı palet.",
          "Gıda: hijyen gereği sıfır ya da plastik palet.",
        ],
        links: [L.ince, L.ozel, L.takozlu, L.plastik],
      },
      {
        h: "Esnek adet ve teslim planı",
        p: [
          "Sultanbeyli’deki küçük işletmelerin çoğu için sürekli büyük adet almak mümkün değildir. Bu nedenle birkaç paletle başlayıp ihtiyaca göre büyümek, mantıklı yoldur. Komşu işletmelerle ortak sipariş vermek de teslimat maliyetini paylaşmanın bir yoludur.",
        ],
        steps: [
          "Palet türü, ölçüsü ve yaklaşık adedi iletin.",
          "Adres, erişim ve boşaltma notunu ekleyin.",
          "Teklifi inceleyin ve onaylayın.",
          "Teslimde sayım yapılarak irsaliye düzenlenir.",
        ],
        links: [L.surec, L.teklif, L.rMaliyet],
      },
      {
        h: "Atölyeden palet çıkışı",
        p: [
          "Kırık, ıslanmış ya da kullanılmayan paletleri atölye önünde bekletmek hem yer hem güvenlik sorunu yaratır. Elinizdeki paletlerin fotoğrafını göndererek değerlendirme isteyebilirsiniz; uygun olanlar alınır, onarılabilirler ayrılır.",
        ],
        links: [L.hurda, L.tamir],
      },
      {
        h: "Küçük işletmenin ilk palet siparişi",
        p: [
          "İlk kez palet alıyorsanız birkaç bilgi hazırlamanız yeterlidir: ürününüzün ölçüsü ve ağırlığı, günlük ya da haftalık sevkiyat sayısı, paletin dönüp dönmeyeceği ve teslim şekli. Bu dört bilgiyle ilk teklif kısa sürede çıkar.",
          "Emin olmadığınız bir konu varsa fotoğraf göndermeniz yeterli; birlikte netleştiririz.",
        ],
        links: [L.rTeklif, L.secici],
      },
    ],
    faq: [
      { q: "Çok az sayıda palet alabilir miyim?", a: "Evet. Küçük adetli talepler için de teklif hazırlanır; depodan alım da mümkündür." },
      { q: "Mobilya için hangi palet daha uygun?", a: "Ürün ölçüsü ve ağırlığına göre geniş tabanlı ince palet ya da özel ölçülü palet düşünülür." },
      { q: "Ortak sipariş verebilir miyiz?", a: "Evet. Komşu işletmelerle toplu sipariş, teslimatı tek seferde birleştirmeye yardımcı olur." },
      { q: "Islanmış paletleri alıyor musunuz?", a: "Durumuna göre değerlendirilir. Fotoğraf ve adet bildirmeniz yeterlidir." },
      { q: "İlk siparişte nelere dikkat etmeliyim?", a: "Ürün ölçüsü ve ağırlığı, adet, paletin dönüp dönmeyeceği ve teslim şeklini netleştirin. Gerisini birlikte tamamlarız." },
    ],
  },

  "cekmekoy-palet": {
    blurb: "Çekmeköy’deki imalat, depo ve inşaat işletmelerine Euro, ikinci el, plastik ve özel ölçülü palet.",
    answer:
      "Çekmeköy, Anadolu yakasında konut ve yeşil alanların yanında küçük üretim, depolama ve inşaat malzemesi işletmelerini barındıran bir ilçedir. Bu işletmelere Euro, ikinci el, plastik ve özel ölçülü palet sağlıyor; atölye ve depolardaki hurda paletleri yerinden alıyoruz.",
    zones: ["Alemdağ", "Taşdelen", "Çamlık", "Mehmet Akif", "Ömerli", "Sultançiftliği"],
    nearby: ["sancaktepe-palet", "umraniye-palet", "sultanbeyli-palet", "atasehir-kadikoy-palet"],
    sections: [
      {
        h: "Çekmeköy’de palet kullanan işletmeler",
        p: [
          "Çekmeköy, sanayiden çok konut ve hizmet ağırlıklı bir ilçe olsa da Alemdağ ve çevresinde atölyeler, inşaat malzemesi depoları ve küçük imalat tesisleri çalışır. Ayrıca Sultançiftliği ve Taşdelen tarafında mobilya, ambalaj ve gıda işleyen işletmeler bulunur.",
          "İlçenin sanayi dokusu dağınık olduğundan palet talepleri tek bir noktada toplanmaz; farklı mahallelerden, farklı büyüklükte siparişler gelir.",
        ],
        links: [L.gEticaret, bolge("umraniye-palet", "Ümraniye")],
      },
      {
        h: "İnşaat ve yapı malzemesi için",
        p: [
          "İnşaat malzemesi ve yapı kimyasalları taşıyan işletmeler, çimento torbası, seramik, boya ve izolasyon malzemesi gibi ağır ve yoğun yükle çalışır. Bu yüklerde palet taşıma kapasitesi ve alt tahta kalınlığı kritik olur; zayıf bir palet, istifte çökmeye ya da forkliftle taşırken kırılmaya neden olabilir.",
        ],
        list: [
          "Ağır kuru yük için takozlu ya da kalın tahtalı palet tercih edin.",
          "Paletin dinamik ve statik yük kapasitesini ayrı ayrı sorun.",
          "Dışarıda bekleyen yükte palet nem alır; plastik palet daha dayanıklıdır.",
        ],
        links: [L.takozlu, L.rKapasite, L.rKg],
      },
      {
        h: "Gıda ve ambalaj işletmeleri",
        p: [
          "Küçük gıda işleyenler ve ambalaj üreticileri, hijyen ve ölçü uyumu bakımından hassastır. Ürünle doğrudan temas etmeyen koli sevkiyatında sınıflandırılmış palet yeterli olabilir; açık ya da hassas gıdada plastik veya sıfır palet tercih edilmelidir.",
        ],
        links: [L.hijyenik, L.sifir, L.rGida],
      },
      {
        h: "Sevkiyat ve erişim",
        p: [
          "Çekmeköy’de bazı adresler eğimli ve dar yollarla ulaşılır. Araç tipi, sokak kısıtı ve teslim saati teklif aşamasında netleştirilir. Ayrıca yakın ilçelerden gelen siparişlerle birleştirilerek teslimat planı yapılabilir.",
        ],
        steps: [
          "Mahalle, sokak ve boşaltma koşulunu yazın.",
          "Palet türü ve adedi ile teklifi alın.",
          "Onay sonrası teslim planı paylaşılır.",
          "Teslimde sayım yapılarak fatura düzenlenir.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Kullanılmayan paletler",
        p: [
          "İnşaat ve imalat işletmelerinde şantiye bitişi, proje sonu ya da depo yenileme sonrasında geriye çok sayıda palet kalır. Bunları toplu halde değerlendirmek daha pratiktir. Palet türü, durumu ve adedi ile bize yazın.",
        ],
        links: [L.hurda, L.yerinde, L.rNereye],
      },
      {
        h: "Yük ağırlığı ve forklift kapasitesi",
        p: [
          "Şantiye ve depoda palet seçimi, yalnızca paletin değil forkliftin kapasitesine de bağlıdır. Forklift çatalının ağırlık sınırı ve çatal uzunluğu, taşınabilecek paletin ölçüsünü sınırlar. Çok ağır yükte palet yeterli olsa bile forklift sınırı belirleyici olabilir.",
          "Forklift bilginizi de paylaşırsanız tavsiye daha isabetli olur.",
        ],
        links: [L.rKapasite, L.rKg],
      },
    ],
    faq: [
      { q: "Çimento ve seramik gibi ağır yük için hangi palet?", a: "Takozlu ya da kalın tahtalı palet uygundur. Yük ağırlığını bildirirseniz uygun yapı önerilir." },
      { q: "Şantiye bitiminde kalan paletleri alıyor musunuz?", a: "Evet. Tür, durum ve adet bilgisiyle ön değerlendirme yapılır." },
      { q: "Dar yola araç girebilir mi?", a: "Adres erişimine göre araç belirlenir. Sokak durumunu bildirmeniz yeterli." },
      { q: "Küçük adetli alım mümkün mü?", a: "Evet. Küçük adetli talepler için de teklif hazırlanır." },
      { q: "Forklift sınırı palet seçimini etkiler mi?", a: "Evet. Çatal uzunluğu ve kapasite sınırı, kullanılabilecek palet ve yük ağırlığını sınırlar." },
    ],
  },

  "kocaeli-palet": {
    blurb: "Gebze deposundan Kocaeli’nin sanayi ilçelerine toplu palet ve hurda palet alımı.",
    answer:
      "Kocaeli, Türkiye’nin en yoğun sanayi illerinden biridir ve depomuz Gebze’de, il sınırları içindedir. İzmit, Körfez, Derince, Gölcük, Dilovası ve çevre ilçelerdeki fabrika ve depolara Euro, ikinci el, plastik ve ihracat paleti sağlıyor; tesislerdeki hurda paletleri yerinden alıyoruz.",
    zones: ["Gebze", "Dilovası", "Çayırova", "Darıca", "Körfez", "Derince", "İzmit", "Kartepe", "Başiskele", "Gölcük", "Karamürsel"],
    nearby: ["gebze-palet", "izmit-palet", "korfez-palet", "derince-palet", "kartepe-palet", "dilovasi-palet", "golcuk-palet", "karamursel-palet", "basiskele-palet"],
    sections: [
      {
        h: "Kocaeli’nin sanayi coğrafyası",
        p: [
          "Kocaeli sanayisi Marmara’nın kuzey kıyısı boyunca, doğu-batı ekseninde uzanır. Batı ucunda Gebze ve Dilovası’nda kimya, plastik, otomotiv ve metal; ortada Körfez ve Derince’de petrokimya, liman ve ağır sanayi; doğuda İzmit ve çevresinde otomotiv, makine ve gıda işlenir. Her bölgenin palet ihtiyacı kendi sektör karakterine göre şekillenir.",
          "Bu çeşitlilik, il genelinde tek bir ürün listesi yerine, bölgeye göre farklılaşan bir sipariş düzeni gerektirir. Aşağıdaki bölge sayfalarında her ilçeye özgü ayrıntılar yer alır.",
        ],
        links: [bolge("gebze-palet", "Gebze"), bolge("izmit-palet", "İzmit"), bolge("korfez-palet", "Körfez")],
      },
      {
        h: "İlçelere göre baskın sektörler",
        table: {
          caption: "Kocaeli ilçeleri ve genel sektör karakteri",
          head: ["Bölge", "Genel sanayi karakteri", "Öne çıkan palet ihtiyacı"],
          rows: [
            ["Gebze, Dilovası, Çayırova", "Karma sanayi: kimya, plastik, otomotiv, metal", "Euro, 100x120, plastik, özel ölçü"],
            ["Körfez, Derince", "Petrokimya, liman ve ağır sanayi çevresi", "İhracat paleti, plastik, takozlu"],
            ["İzmit, Kartepe, Başiskele", "Otomotiv, makine, gıda, lojistik", "Euro, ikinci el, plastik"],
            ["Gölcük, Karamürsel", "Yan sanayi, tarım ve gıda, kıyı işletmeleri", "İkinci el Euro, plastik"],
          ],
        },
        links: [L.p100, L.plastik, L.ihracat, L.ozel],
      },
      {
        h: "Kocaeli genelinde sipariş nasıl işler",
        p: [
          "İlçe farkı gözetmeksizin sipariş akışı aynıdır: ihtiyaç bildirilir, teklif hazırlanır, onay alınır, teslim ya da yükleme yapılır. İlçe değiştikçe değişen şey, teslim noktasının koşulları (OSB giriş kuralı, liman bağlantısı, dar sokak) ve araç planıdır. Teslim süresi mesafeye değil, araç programı ve stok durumuna göre teklifte netleşir.",
          "Aynı güzergâh üzerindeki birkaç işletme beraber sipariş verirse sevkiyat birleştirilebilir.",
        ],
        steps: [
          "İlçeyi, teslim noktası türünü ve giriş kuralını belirtin.",
          "Palet türü, ölçüsü ve adedini iletin.",
          "Teklifteki ürün ve teslim koşullarını onaylayın.",
          "Teslimde sayım yapılır; irsaliye ve fatura düzenlenir.",
        ],
        links: [L.surec, L.toptan, L.nakliye],
      },
      {
        h: "Düzenli tedarik ve palet yönetimi",
        p: [
          "Kocaeli’deki büyük fabrikalar için palet tedariki genellikle düzenli bir iştir. Aylık ya da haftalık sevkiyat planı yapılırsa, her sipariş için ayrı pazarlık gerekmez. Teklif, ürün sınıfı, adet çerçevesi ve teslim sıklığını içerebilir.",
        ],
        links: [L.rMaliyet, L.rTeklif, L.alimSatim],
      },
      {
        h: "Hurda palet ve geri dönüşüm",
        p: [
          "İl genelinde sanayi tesislerinde biriken kırık ve kullanılmayan paletler hem yer işgal eder hem de yangın yükü yaratır. Palet türü ve durumu doğrultusunda ahşap atık olarak geri dönüşüme, onarılabilirler ise yeniden kullanıma yönlendirilir. Ön değerlendirme için adet ve fotoğraf yeterlidir.",
        ],
        links: [L.hurda, L.yerinde, L.rGeriDonusum],
      },
    ],
    faq: [
      { q: "Kocaeli’nin hangi ilçelerine palet teslim ediyorsunuz?", a: "Gebze başta olmak üzere Dilovası, Körfez, Derince, İzmit, Gölcük, Karamürsel, Başiskele ve Kartepe dahil il genelindeki tesislere teslimat planlanır." },
      { q: "Teslim süresi nasıl belirlenir?", a: "Stok durumu, araç programı ve teslim noktasına göre belirlenir; net bilgi teklifte yazılır." },
      { q: "İlçelere göre ürün farkı var mı?", a: "Ürün yelpazesi aynıdır; bölgenin sektörüne göre hangi ürünün öne çıktığı değişir. İlçe sayfalarında ayrıntı bulabilirsiniz." },
      { q: "Düzenli aylık sevkiyat yapılır mı?", a: "Evet. Ürün, adet ve sıklık çerçevesi teklifte belirlenerek planlı tedarik yapılabilir." },
      { q: "Hurda paletlerimizi tesisten alıyor musunuz?", a: "Evet. Palet türü, durum ve adedine göre il genelinde değerlendirme yapılır." },
    ],
  },

  "istanbul-palet": {
    blurb: "Gebze deposundan İstanbul’un Anadolu ve Avrupa yakası sanayi, depo ve ticaret alanlarına toplu palet.",
    answer:
      "İstanbul’da palet ihtiyacı sanayi bölgelerinin yanı sıra ticaret, hal, tekstil ve lojistik depolarında da yaygındır. Gebze Pelitli deposundan Anadolu ve Avrupa yakasındaki işletmelere Euro, ikinci el, plastik ve ihracat paleti sağlıyor; kullanılmayan paletleri yerinden alıyoruz.",
    zones: ["Tuzla", "Pendik", "Kartal", "Maltepe", "Ümraniye", "Sancaktepe", "Esenyurt", "Başakşehir", "Bağcılar", "Silivri"],
    nearby: ["tuzla-palet", "pendik-palet", "kartal-palet", "umraniye-palet", "atasehir-kadikoy-palet", "sancaktepe-palet", "esenyurt-palet", "avcilar-palet", "basaksehir-palet", "buyukcekmece-palet", "silivri-palet", "catalca-palet", "esenler-palet", "bayrampasa-palet", "zeytinburnu-palet", "bahcelievler-palet", "gungoren-palet"],
    sections: [
      {
        h: "İstanbul’da palet pazarının yapısı",
        p: [
          "İstanbul’da palet kullanıcıları üç ana gruba ayrılır. Birincisi OSB ve sanayi sitelerindeki üreticilerdir (Tuzla, Dudullu, İkitelli, Beylikdüzü gibi). İkincisi hal, toptan ticaret, tekstil ve matbaa gibi şehir içi ticaret kümeleridir (Bayrampaşa, Bağcılar, Güngören, Zeytinburnu gibi). Üçüncüsü ise lojistik ve e-ticaret depolarıdır (Arnavutköy, Kurtköy, Esenyurt gibi).",
          "Her grup farklı palet ister: üreticiler sektörüne göre özel ya da standart ölçü, ticaret kümeleri ekonomik ve hızlı ikinci el palet, lojistik depolar ise rafa uyan, sürekli yenilenen palet.",
        ],
        links: [bolge("tuzla-palet", "Tuzla"), bolge("bagcilar-palet", "Bağcılar"), bolge("arnavutkoy-palet", "Arnavutköy")],
      },
      {
        h: "Anadolu ve Avrupa yakası ayrımı",
        table: {
          caption: "İstanbul’da yakalara göre genel palet ihtiyacı",
          head: ["Bölge", "Öne çıkan işletmeler", "Tipik palet"],
          rows: [
            ["Anadolu yakası güneydoğu (Tuzla, Pendik, Kartal)", "Kimya, tersane, deri, lojistik", "100x120, takozlu, plastik, ihracat"],
            ["Anadolu yakası iç (Ümraniye, Sancaktepe, Sultanbeyli)", "Atölye, plastik, metal, mobilya", "İkinci el Euro, özel ölçü"],
            ["Avrupa yakası kuzey (Başakşehir, Arnavutköy)", "Matbaa, plastik, lojistik", "Euro, ihracat, ikinci el"],
            ["Avrupa yakası şehir içi (Bağcılar, Esenler, Güngören)", "Tekstil, toptan ticaret, hal", "İkinci el Euro, plastik"],
            ["Avrupa yakası batı (Esenyurt, Beylikdüzü, Silivri)", "İmalat, gıda, depo", "Euro, ikinci el, plastik"],
          ],
        },
        links: [L.p100, L.ikinciEuro, L.plastik, L.ihracat],
      },
      {
        h: "Şehir içi teslimatın zorlukları",
        list: [
          "Trafik: teslim saatini yoğun saatlerin dışına almak planı kolaylaştırır.",
          "Park ve kapı: iş merkezi, site ya da pazar yerlerinde araç giriş ve yükleme saatleri sınırlı olabilir.",
          "Boşaltma: forklift bulunmayan adreslerde el transpaleti ya da elle indirme için ek personel gerekebilir.",
          "Kapalı alanlar: bina içi depolarda palet yüksekliği asansör ya da rampa ölçüsüne uymalıdır.",
        ],
        links: [L.surec, L.nakliye],
      },
      {
        h: "Sipariş vermeden önce",
        p: [
          "İstanbul’da talep ilçeye göre değiştiği için en kısa yol, kendi ilçenizin sayfasını okumaktır. Ayrıca iç linklerdeki palet çeşitleri ve fiyat sayfaları, doğru ürünü seçmenize yardımcı olur. Teklif aşamasında ilçe, mahalle ve teslim koşulunu yazarsanız eksiksiz bir teklif alırsınız.",
        ],
        links: [L.fiyat, L.secici, L.rTeklif],
      },
      {
        h: "İstanbul’daki atıl paletler",
        p: [
          "Şehir içinde alan pahalı olduğu için atıl palet daha da maliyetlidir. Kullanılmayan, kırık ve fazla paletlerinizi düzenli aralıklarla çıkarmak, depo kullanımını iyileştirir. Fotoğraf ve adet bilgisi ile ön değerlendirme alın.",
        ],
        links: [L.hurda, L.yerinde, L.rNereye],
      },
      {
        h: "Hangi ilçe için nereden başlamalı",
        p: [
          "İstanbul’da ilk soru çoğunlukla “benim ilçem için ne farklı?” olur. Genel kural şudur: sanayi bölgelerinde sektöre, şehir içi ticaret kümelerinde taşıma ve park koşullarına, kıyı ilçelerinde ise neme dikkat edilir. İlçe sayfaları bu farkları ayrı ayrı anlatır.",
          "İlçeniz listede yoksa komşu ilçenin sayfasını okuyup talebinizi yine bize iletebilirsiniz.",
        ],
        links: [L.teklif, L.turkiye],
      },
    ],
    faq: [
      { q: "İstanbul’un her ilçesine teslim ediyor musunuz?", a: "Anadolu ve Avrupa yakasındaki sanayi, ticaret ve depo adreslerine teslimat planlanır. Adres bilgisiyle teklif alabilirsiniz." },
      { q: "Şehir içinde küçük adetli sipariş mümkün mü?", a: "Evet. Küçük adetler için depodan yükleme ya da adrese teslim seçeneği sunulur." },
      { q: "Hangi ilçe sayfasını okumalıyım?", a: "Teslimat adresinizin bulunduğu ilçenin sayfasını okuyun; yakın bölgeler bölümünden komşu ilçelere de ulaşabilirsiniz." },
      { q: "Ofisiniz nerede, depo nerede?", a: "Merkez ofisimiz Kozyatağı’nda, stok ve yükleme deposu Gebze Pelitli’dedir." },
      { q: "İlçem listede yok, yine de teslim alır mıyım?", a: "Adresinizi bildirirseniz teslimat imkânı değerlendirilir ve teklifte netleşir." },
    ],
  },
};
