import { PRICE_ROWS, tl } from "@/lib/data/prices";

/** "690 ₺'den" style label: lowest tier price among rows linked to a product. */
export function fromPriceLabel(productSlug: string): string | undefined {
  const rows = PRICE_ROWS.filter((r) => r.product === productSlug && r.tiers);
  if (!rows.length) return undefined;
  const min = Math.min(...rows.map((r) => Math.min(...r.tiers!)));
  return `${tl(min)}’den başlayan fiyatlar · KDV hariç`;
}

export function priceRange(rowKeys: string[]): { low: number; high: number } | undefined {
  const vals = PRICE_ROWS.filter((r) => rowKeys.includes(r.key) && r.tiers).flatMap((r) => r.tiers!);
  if (!vals.length) return undefined;
  return { low: Math.min(...vals), high: Math.max(...vals) };
}

export const trDate = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

export const slugify = (s: string) =>
  s
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
