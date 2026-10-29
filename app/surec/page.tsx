import type { Metadata } from "next";
import { Breadcrumbs, FaqList, FinalCta, PageHero, RelatedLinks, SectionsView } from "@/components/Content";
import { pageMeta } from "@/lib/seo";
import type { FAQ, Section } from "@/lib/types";

export const metadata: Metadata = pageMeta({
  title: "Talepten Teslimata Palet Sipariş Süreci | MEPAL",
  description: "Palet siparişi nasıl ilerler? Talep, teklif, onay ve teslimat dört adımda. Gerekli bilgiler, hurda palet satışı süreci ve sık sorulan sorular.",
  path: "/surec/",
});

const sections: Section[] = [
  {
    h: "Dört adımda talepten teslimata",
    p: ["Palet alırken de satarken de süreç aynı mantıkla ilerler: ne istediğinizi bildirirsiniz, teklif hazırlanır, koşulları onaylarsınız ve teslimat ya da yükleme planlanır."],
    steps: [
      "Talep: Palet türünü, ölçüyü, adedi ve konumunuzu WhatsApp, telefon veya teklif formundan iletin. Fotoğraf eklemek işi hızlandırır.",
      "Teklif: Talebinizi inceleyip stok ve araç programına göre teklifimizi hazırlıyoruz. Teklifte ürün, adet, fiyat ve teslim koşulları yazılı olur.",
      "Onay: Teklifi onaylarsınız; ürün, adet ve ödeme şekli teyit edilir. Gerekirse numune veya depoda inceleme planlanır.",
      "Teslimat veya yükleme: Paletler depodan teslim alınır ya da araçla adresinize sevk edilir. Palet satıyorsanız araç tesisinize gelip yüklemeyi yapar.",
    ],
    links: [["Teklif al", "/teklif-al/"], ["Palet araçları", "/araclar/"]],
  },
  {
    h: "Talep ederken hangi bilgiler hızlandırır?",
    p: ["Teklifin tek turda netleşmesi için şu bilgiler yeterlidir. Bilmediğiniz maddeyi boş bırakabilirsiniz; eksik olanı birlikte tamamlarız."],
    list: [
      "Palet tipi ve ölçüsü (Euro ölçülü, 100x120, plastik, özel ölçü)",
      "Yaklaşık adet ve tek seferlik mi düzenli mi olduğu",
      "Yeni mi ikinci el mi; ihracat gereksinimi olup olmadığı",
      "Teslim adresi, araç erişimi ve istenen teslim zamanı",
    ],
    links: [["Teklif için gerekli bilgiler", "/rehber/palet-alirken-teklif-isterken-hangi-bilgiler-gerekir/"]],
  },
  {
    h: "Teslimat nasıl planlanır?",
    p: [
      "Depomuz Gebze’dedir. Kocaeli ve İstanbul’da teslimat en hızlı planlanır; Türkiye genelinde de araçla sevkiyat yapılır. Teslimat stok ve araç programına göre belirlenir; net süre teklifte bildirilir.",
      "İsterseniz paletleri Gebze deposundan kendi aracınızla da teslim alabilirsiniz.",
    ],
    links: [["Türkiye geneli palet sevkiyatı", "/turkiye-geneli-palet-sevkiyati/"], ["Palet nakliye ve lojistik", "/hizmetler/palet-nakliye-lojistik/"]],
  },
  {
    h: "Paletinizi satmak istiyorsanız",
    p: ["Fazla, hasarlı veya kırık paletleriniz için süreç benzerdir: adet ve fotoğrafla bildirim, ön değerleme, gerekirse yerinde sınıflama, teklif onayı ve tesisinizden yükleme."],
    links: [["Palet alım satım", "/hizmetler/palet-alim-satim/"], ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"], ["Hurda palet nereye satılır?", "/rehber/hurda-palet-nereye-satilir/"]],
  },
];

const faq: FAQ[] = [
  { q: "Siparişten teslimata kaç gün sürer?", a: "Stok ve araç programına göre değişir; net süre teklifte bildirilir." },
  { q: "Teklif almak ücretli mi?", a: "Hayır. Palet tipi, adet ve konumu bildirdiğinizde teklif hazırlanır; teklif almak bir yükümlülük getirmez." },
  { q: "Teklif nasıl iletilir, fiyat ne zaman netleşir?", a: "WhatsApp, telefon veya teklif formundan ulaşabilirsiniz. Güncel fiyat tablosuna bakabilir ya da adedinizi bildirip teklif alabilirsiniz; son rakam ürün, adet ve teslimat koşuluna göre netleşir." },
  { q: "Paletleri depodan kendim alabilir miyim?", a: "Evet. Gebze deposundan teslim alma mümkündür; zamanı önceden birlikte planlarız." },
  { q: "Düzenli ihtiyaç için sipariş planı yapılır mı?", a: "Evet. Aylık veya haftalık düzenli tedarik için stok ve sevkiyat planı yapılabilir; koşullar teklifte belirtilir." },
];

export default function ProcessPage() {
  return (
    <>
      <Breadcrumbs items={[["Talepten teslimata", "/surec/"]]} />
      <PageHero h1="Talepten Teslimata: Palet Sipariş Süreci" answer="Talebinizi iletirsiniz, stok ve araç programına göre teklif hazırlarız, koşulları birlikte onaylarız ve teslimat ya da yükleme planlanır. Net teslim süresi teklifte bildirilir." />
      <div className="wrap prose-narrow">
        <SectionsView sections={sections} />
        <FaqList items={faq} />
        <RelatedLinks
          title="İlgili sayfalar"
          links={[
            ["Palet fiyatları", "/palet-fiyatlari/"],
            ["Toptan palet", "/hizmetler/toptan-palet/"],
            ["Sık sorulan sorular", "/sss/"],
            ["Hakkımızda", "/hakkimizda/"],
          ]}
        />
      </div>
      <FinalCta message="Merhaba, palet siparişi için bilgi almak istiyorum." />
    </>
  );
}
