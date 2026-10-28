import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { products } from "@/lib/data/products";
import { services } from "@/lib/data/services";
import { regions } from "@/lib/data/regions";
import { sectors } from "@/lib/data/sectors";
import { guides } from "@/lib/data/guides";
import { pricePages } from "@/lib/data/pricePages";
import { staticPages } from "@/lib/data/pages";
import { PRICES_UPDATED } from "@/lib/data/prices";

export default function sitemap(): MetadataRoute.Sitemap {
  const d = (s: string) => new Date(`${s}T12:00:00Z`);
  const at = (path: string, date: string, priority: number) => ({ url: absoluteUrl(path), lastModified: d(date), priority });
  return [
    at("/", PRICES_UPDATED, 1),
    ...["/urunler/", "/hizmetler/", "/bolge/", "/sektorler/", "/rehber/", "/araclar/", "/teklif-al/", "/iletisim/", "/sss/", "/galeri/"].map((p) => at(p, PRICES_UPDATED, 0.7)),
    ...["/araclar/konteyner-palet-hesaplama/", "/araclar/palet-secici/", "/araclar/palet-danismani/", "/araclar/fotograftan-palet-degerleme/"].map((p) => at(p, PRICES_UPDATED, 0.7)),
    ...pricePages.map((p) => at(`/${p.slug}/`, PRICES_UPDATED, 0.95)),
    ...products.map((p) => at(`/urunler/${p.slug}/`, PRICES_UPDATED, 0.9)),
    ...services.map((p) => at(`/hizmetler/${p.slug}/`, PRICES_UPDATED, 0.8)),
    ...regions.map((p) => at(`/bolge/${p.slug}/`, PRICES_UPDATED, 0.8)),
    ...sectors.map((p) => at(`/sektorler/${p.slug}/`, PRICES_UPDATED, 0.6)),
    ...guides.map((p) => at(`/rehber/${p.slug}/`, p.updated, 0.6)),
    ...staticPages.map((p) => at(`/${p.slug}/`, p.updated, 0.4)),
  ];
}
