import type { FAQ, Section } from "@/lib/types";

/** Bir bölge sayfasının içeriği; künye (başlık, H1, açıklama) regions-meta.ts'den gelir. */
export type RegionContent = {
  /** Verilirse künyedeki açıklamanın yerine geçer (120–158 karakter). */
  description?: string;
  /** Kısa kart metni. */
  blurb: string;
  /** Sayfa başındaki 2–3 cümlelik doğrudan yanıt. */
  answer: string;
  /** Yan kartta listelenen, bilinen mahalle ve OSB adları. */
  zones: string[];
  nearby: string[];
  sections: Section[];
  faq: FAQ[];
  /** Kart ve üst bilgi satırı; verilmezse genel sevkiyat ifadesi kullanılır. */
  distance?: string;
};

export const GENERIC_DISTANCE = "Gebze deposundan sevkiyat · süre teklifte netleşir";

type Link = [string, string];
/** Sık kullanılan iç linkler; hepsi var olan sayfalara gider. */
export const L = {
  euro: ["80x120 Euro palet", "/urunler/80x120-euro-palet/"] as Link,
  epal: ["EPAL palet", "/urunler/epal-palet/"] as Link,
  p100: ["100x120 palet", "/urunler/100x120-palet/"] as Link,
  ikinci: ["İkinci el palet", "/urunler/ikinci-el-palet/"] as Link,
  ikinciEuro: ["İkinci el Euro palet", "/urunler/ikinci-el-euro-palet/"] as Link,
  sifir: ["Sıfır ahşap palet", "/urunler/sifir-ahsap-palet/"] as Link,
  plastik: ["Plastik palet", "/urunler/plastik-palet/"] as Link,
  hijyenik: ["Hijyenik plastik palet", "/urunler/hijyenik-plastik-palet/"] as Link,
  ozel: ["Özel ölçü palet", "/urunler/ozel-olcu-palet/"] as Link,
  ihracat: ["İhracat paleti", "/urunler/ihracat-paleti/"] as Link,
  sandik: ["Ahşap sandık", "/urunler/ahsap-sandik/"] as Link,
  takozlu: ["Takozlu palet", "/urunler/takozlu-palet/"] as Link,
  ince: ["İnce palet", "/urunler/ince-palet/"] as Link,
  isil: ["Isıl işlemli palet", "/urunler/isil-islemli-palet/"] as Link,
  cp: ["CP palet", "/urunler/cp-palet/"] as Link,
  hurda: ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"] as Link,
  yerinde: ["Yerinde palet toplama", "/hizmetler/yerinde-palet-toplama/"] as Link,
  tamir: ["Palet tamiri", "/hizmetler/palet-tamiri/"] as Link,
  toptan: ["Toptan palet", "/hizmetler/toptan-palet/"] as Link,
  alimSatim: ["Palet alım-satım", "/hizmetler/palet-alim-satim/"] as Link,
  nakliye: ["Palet nakliye ve lojistik", "/hizmetler/palet-nakliye-lojistik/"] as Link,
  kirik: ["Kırık palet alımı", "/hizmetler/kirik-palet-alimi/"] as Link,
  hasarli: ["Hasarlı palet alımı", "/hizmetler/hasarli-palet-alimi/"] as Link,
  ispm: ["ISPM-15 uyumlu palet", "/hizmetler/isil-islem-ispm-15-uyumlu-palet/"] as Link,
  surec: ["Sipariş süreci", "/surec/"] as Link,
  teklif: ["Teklif al", "/teklif-al/"] as Link,
  iletisim: ["İletişim", "/iletisim/"] as Link,
  turkiye: ["Türkiye geneli sevkiyat", "/turkiye-geneli-palet-sevkiyati/"] as Link,
  fiyat: ["Palet fiyatları", "/palet-fiyatlari/"] as Link,
  degerleme: ["Fotoğraftan palet değerleme", "/araclar/fotograftan-palet-degerleme/"] as Link,
  secici: ["Palet seçici", "/araclar/palet-secici/"] as Link,
  konteyner: ["Konteyner palet hesaplama", "/araclar/konteyner-palet-hesaplama/"] as Link,
  gGida: ["Gıda ve içecek sektörü", "/sektorler/gida-ve-icecek/"] as Link,
  gOtomotiv: ["Otomotiv ve yan sanayi", "/sektorler/otomotiv-ve-yan-sanayi/"] as Link,
  gBeyaz: ["Beyaz eşya sektörü", "/sektorler/beyaz-esya/"] as Link,
  gKimya: ["Kimya ve plastik sektörü", "/sektorler/kimya-ve-plastik/"] as Link,
  gIhracat: ["İhracat ve lojistik sektörü", "/sektorler/ihracat-ve-lojistik/"] as Link,
  gEticaret: ["E-ticaret ve depo sektörü", "/sektorler/e-ticaret-ve-depo/"] as Link,
  rOlcu: ["Euro palet ölçüleri", "/rehber/euro-palet-olculeri/"] as Link,
  rSecim: ["Palet çeşitleri ve seçimi", "/rehber/palet-cesitleri-ve-secimi/"] as Link,
  rIspm: ["ISPM-15 nedir", "/rehber/ispm-15-nedir/"] as Link,
  rKg: ["Palet kaç kg taşır", "/rehber/palet-kac-kg-tasir/"] as Link,
  rKapasite: ["Yük kapasitesine göre palet seçimi", "/rehber/palet-secimi-yuk-kapasitesi-rehberi/"] as Link,
  rAhsapPlastik: ["Ahşap mı plastik mı", "/rehber/ahsap-palet-mi-plastik-palet-mi/"] as Link,
  rIkinciEl: ["İkinci el palet alırken dikkat", "/rehber/ikinci-el-palet-alirken-dikkat-edilecekler/"] as Link,
  rSinif: ["Palet kalite sınıfları", "/rehber/palet-kalite-siniflari/"] as Link,
  rHurda: ["Hurda paletinizi nasıl değerlendirirsiniz", "/rehber/hurda-paletinizi-nasil-degerlendirirsiniz/"] as Link,
  rNereye: ["Hurda palet nereye satılır", "/rehber/hurda-palet-nereye-satilir/"] as Link,
  rIstif: ["Palet nasıl istiflenir", "/rehber/palet-nasil-istiflenir/"] as Link,
  rTeklif: ["Teklif için gerekli bilgiler", "/rehber/palet-alirken-teklif-isterken-hangi-bilgiler-gerekir/"] as Link,
  rTir: ["1 tır kaç palet alır", "/rehber/1-tir-kac-palet-alir/"] as Link,
  rIhracat: ["İhracatta palet ve ambalaj kuralları", "/rehber/ihracatta-palet-ve-ambalaj-kurallari/"] as Link,
  rGida: ["Gıda sektörü için palet seçimi", "/rehber/gida-sektoru-icin-palet-secimi/"] as Link,
  rRaf: ["Palet raf sistemleri ve raf yükü", "/rehber/palet-raf-sistemleri-ve-raf-yuku/"] as Link,
  rPlastikCesit: ["Plastik palet çeşitleri", "/rehber/plastik-palet-cesitleri/"] as Link,
  rOmur: ["Palet ömrü nasıl uzatılır", "/rehber/palet-omru-nasil-uzatilir/"] as Link,
  rMaliyet: ["Palet maliyetini düşürmenin yolları", "/rehber/palet-maliyetini-dusurmenin-yollari/"] as Link,
  rGeriDonusum: ["Ahşap palet geri dönüşümü", "/rehber/ahsap-palet-geri-donusum/"] as Link,
  rKirik: ["Hasarlı ve kırık palet ne yapılır", "/rehber/hasarli-ve-kirik-palet-ne-yapilir/"] as Link,
  rSatinAlma: ["Palet satın alma rehberi", "/rehber/palet-satin-alma-rehberi/"] as Link,
  rYukseklik: ["Palet yüksekliği kaç cm", "/rehber/palet-yuksekligi-kac-cm/"] as Link,
  rTamir: ["Palet tamiri ne zaman yapılır", "/rehber/palet-tamiri-ne-zaman-yapilir/"] as Link,
};
export const bolge = (slug: string, name: string): Link => [name, `/bolge/${slug}/`];
