// Single source of truth for company facts (NAP). Every page, JSON-LD block and
// footer reads from here so name, address and phone never drift apart.
export const site = {
  name: "MEPAL Orman Ürünleri",
  short: "MEPAL",
  legalName: "MEPAL Orman Ürünleri Sanayi ve Ticaret Ltd. Şti.",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mepalorman.com",
  tagline: "Ahşap ve plastik palette hızlı fiyat, Gebze depodan sevkiyat.",
  description:
    "Gebze deposundan Türkiye genelinde toplu palet tedariki ve sevkiyatı: euro palet, ahşap palet, plastik palet, ikinci el palet ve hurda palet alımı. Güncel fiyat, hızlı teklif.",
  phone: "0536 866 83 07",
  phoneE164: "+905368668307",
  wa: "905368668307",
  email: "cevatsenturk@mepalorman.com",
  contactPerson: "Cevat Şentürk",
  taxOffice: "Erenköy V.D.",
  taxNo: "6150867228",
  mersis: "0615086722800001",
  sicil: "418424-5",
  mapsUrl: "https://maps.app.goo.gl/oeEPz6PD5pBxGvQJ8",
  hours: "Pazartesi–Cumartesi 08:30–18:00",
  hoursSchema: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:30", closes: "18:00" },
  warehouse: {
    label: "Depo / sevkiyat noktası",
    street: "Pelitli Mah., Maden Sk. No:34",
    postalCode: "41400",
    district: "Gebze",
    city: "Kocaeli",
  },
  office: {
    label: "Merkez ofis",
    street: "Kozyatağı Mah. Gülbahar Sk. AR Plaza C No:13/3 İç Kapı No:4",
    postalCode: "34742",
    district: "Kadıköy",
    city: "İstanbul",
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// GOOGLE İŞLETME PROFİLİ SONRASI DOLDURULACAK ALANLAR (şema bunları otomatik kullanır).
// Boş bırakılırsa JSON-LD'ye hiçbir şey eklenmez.
// ─────────────────────────────────────────────────────────────────────────────
/** Doğrulanmış profiller (Google İşletme Profili, LinkedIn, Instagram, Facebook...). Tam URL yazın. */
export const sameAs: string[] = [
  // "https://www.google.com/maps/place/...",
  // "https://www.linkedin.com/company/...",
];
/** Depo konumunun TAM pini (Google Haritalar'dan alınan enlem/boylam). null ise şemaya geo eklenmez. */
export const warehousePin: { lat: number; lng: number } | null = null;
// Örnek: export const warehousePin = { lat: 40.12345, lng: 29.12345 };

export const warehouseAddress = `${site.warehouse.street}, ${site.warehouse.postalCode} ${site.warehouse.district} / ${site.warehouse.city}`;
export const officeAddress = `${site.office.street}, ${site.office.postalCode} ${site.office.district} / ${site.office.city}`;

export const telHref = `tel:${site.phoneE164}`;

export function waLink(message?: string): string {
  const base = `https://wa.me/${site.wa}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function absoluteUrl(path: string): string {
  return `${site.baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
