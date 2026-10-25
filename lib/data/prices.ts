import type { Section, FAQ, ArtKind } from "@/lib/types";

// ───────────────────────────────────────────────────────────────────────────
// FİYAT VERİSİ — tek kaynak. Sitedeki tüm fiyat tabloları, teklif sihirbazı ve
// yapısal veri (Product/AggregateOffer) buradan okunur; yapay zekâ fiyat uydurmaz.
//
// DİKKAT: Aşağıdaki rakamlar YER TUTUCU piyasa aralıklarıdır (Ekim 2026).
// Yayından önce firma sahibi gerçek fiyatları buraya girmeli ve PRICES_UPDATED
// tarihini güncellemelidir. Fiyatlar TL, KDV hariç, adet başıdır.
// ───────────────────────────────────────────────────────────────────────────

export const PRICES_UPDATED = "2026-10-25";
export const PRICES_UPDATED_LABEL = "25 Ekim 2026";
export const VAT_NOTE = "Fiyatlar KDV hariçtir, TL ve adet başınadır.";

export const TIERS = ["1–50 adet", "51–200 adet", "201+ adet"] as const;

export type PriceRow = {
  key: string;
  name: string;
  /** e.g. "800 × 1200 mm · 1. sınıf" */
  spec: string;
  /** TL per unit for each tier; null = "teklif alın". */
  tiers: [number, number, number] | null;
  condition: "Sıfır" | "İkinci el";
  product: string; // slug in lib/data/products.ts
};

export const PRICE_ROWS: PriceRow[] = [
  { key: "euro-ikinci-el-1", name: "Euro ölçülü ikinci el palet — 1. sınıf", spec: "800 × 1200 mm · sağlam, onarılmış", tiers: [330, 310, 290], condition: "İkinci el", product: "ikinci-el-palet" },
  { key: "euro-ikinci-el-2", name: "Euro ölçülü ikinci el palet — 2. sınıf", spec: "800 × 1200 mm · yerli kullanım", tiers: [250, 235, 220], condition: "İkinci el", product: "ikinci-el-palet" },
  { key: "euro-sifir", name: "Euro ölçülü sıfır ahşap palet", spec: "800 × 1200 mm · 9 ayaklı, yeni", tiers: [690, 660, 630], condition: "Sıfır", product: "80x120-euro-palet" },
  { key: "ahsap-sifir-standart", name: "Standart sıfır ahşap palet", spec: "800 × 1200 mm · hafif hizmet", tiers: [520, 495, 470], condition: "Sıfır", product: "sifir-ahsap-palet" },
  { key: "ahsap-sifir-100x120", name: "100×120 sıfır ahşap palet", spec: "1000 × 1200 mm · endüstriyel", tiers: [600, 570, 540], condition: "Sıfır", product: "100x120-palet" },
  { key: "ahsap-ikinci-el-100x120", name: "100×120 ikinci el ahşap palet", spec: "1000 × 1200 mm", tiers: [300, 280, 260], condition: "İkinci el", product: "100x120-palet" },
  { key: "cp-114x114", name: "CP / 114×114 sıfır palet", spec: "1140 × 1140 mm · kimya sektörü", tiers: [780, 740, 700], condition: "Sıfır", product: "cp-palet" },
  { key: "ihracat-ispm15", name: "ISPM-15 ısıl işlemli ihracat paleti", spec: "800 × 1200 mm · HT damgalı", tiers: [780, 740, 700], condition: "Sıfır", product: "ihracat-paleti" },
  { key: "plastik-hafif", name: "Plastik palet — hafif hizmet", spec: "800 × 1200 mm · kapalı/ızgara üst", tiers: [640, 610, 580], condition: "Sıfır", product: "plastik-palet" },
  { key: "plastik-agir", name: "Plastik palet — ağır hizmet (raf uyumlu)", spec: "800 × 1200 mm · çelik takviyeli", tiers: [1250, 1180, 1100], condition: "Sıfır", product: "plastik-palet" },
  { key: "plastik-100x120", name: "Plastik palet — 100×120", spec: "1000 × 1200 mm", tiers: [1450, 1380, 1300], condition: "Sıfır", product: "plastik-palet" },
  { key: "ozel-olcu", name: "Özel ölçülü ahşap palet", spec: "Ölçüye ve yüke göre tasarım", tiers: null, condition: "Sıfır", product: "ozel-olcu-palet" },
  { key: "145x145", name: "145×145 ahşap palet", spec: "1450 × 1450 mm", tiers: null, condition: "Sıfır", product: "145x145-palet" },
];

export const rowByKey = (key: string) => PRICE_ROWS.find((r) => r.key === key);

export const tl = (n: number) => `${n.toLocaleString("tr-TR")} ₺`;

export type PricePage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  keyword: string;
  art: ArtKind;
  rowKeys: string[];
  sections: Section[];
  faq: FAQ[];
  related: string[]; // other price page slugs / product slugs (hrefs resolved by template)
  guides: string[];
};
