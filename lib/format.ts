import { PRICE_ROWS, tl, type PriceRow } from "@/lib/data/prices";

const tiersOf = (r: PriceRow): number[] => r.tiers ?? [];

/** "690 ₺'den" style label: lowest tier price among rows linked to a product. Undefined while prices are not published. */
export function fromPriceLabel(productSlug: string): string | undefined {
  const vals = PRICE_ROWS.filter((r) => r.product === productSlug).flatMap(tiersOf);
  if (!vals.length) return undefined;
  return `${tl(Math.min(...vals))}’den başlayan fiyatlar · KDV hariç`;
}

export function priceRange(rowKeys: string[]): { low: number; high: number } | undefined {
  const vals = PRICE_ROWS.filter((r) => rowKeys.includes(r.key)).flatMap(tiersOf);
  if (!vals.length) return undefined;
  return { low: Math.min(...vals), high: Math.max(...vals) };
}

export const trDate = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

export const slugify = (s: string) =>
  s
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
