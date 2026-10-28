import type { Metadata } from "next";
import { site, absoluteUrl, warehouseAddress, officeAddress } from "@/lib/site";
import type { FAQ } from "@/lib/types";

export function pageMeta(opts: { title: string; description: string; path: string; noindex?: boolean; type?: "website" | "article" }): Metadata {
  const url = absoluteUrl(opts.path);
  return {
    title: { absolute: opts.title },
    description: opts.description,
    alternates: { canonical: url },
    robots: opts.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: opts.type ?? "website",
      locale: "tr_TR",
      siteName: site.name,
      title: opts.title,
      description: opts.description,
      url,
      images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description, images: [absoluteUrl("/opengraph-image")] },
  };
}

type Ld = Record<string, unknown>;

export const orgLd = (): Ld => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.baseUrl}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.baseUrl,
  logo: absoluteUrl("/assets/logo-mark.png"),
  email: site.email,
  telephone: site.phoneE164,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: site.phoneE164,
      email: site.email,
      availableLanguage: ["tr"],
      areaServed: "TR",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.office.street,
    postalCode: site.office.postalCode,
    addressLocality: site.office.district,
    addressRegion: site.office.city,
    addressCountry: "TR",
  },
});

export const localBusinessLd = (): Ld => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.baseUrl}/#depo`,
  name: site.name,
  legalName: site.legalName,
  description: site.description,
  url: site.baseUrl,
  image: absoluteUrl("/opengraph-image"),
  telephone: site.phoneE164,
  email: site.email,
  parentOrganization: { "@id": `${site.baseUrl}/#organization` },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.warehouse.street,
    postalCode: site.warehouse.postalCode,
    addressLocality: site.warehouse.district,
    addressRegion: site.warehouse.city,
    addressCountry: "TR",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.warehouse.lat, longitude: site.warehouse.lng },
  hasMap: site.mapsUrl,
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: site.hoursSchema.days, opens: site.hoursSchema.opens, closes: site.hoursSchema.closes },
  ],
  areaServed: [{ "@type": "Country", name: "Türkiye" }, ...["Gebze", "Kocaeli", "İstanbul", "Tuzla", "Pendik", "Kartal", "Dilovası", "Çayırova"].map((n) => ({ "@type": "AdministrativeArea", name: n }))],
});

export const websiteLd = (): Ld => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.baseUrl}/#website`,
  name: site.name,
  alternateName: site.short,
  url: site.baseUrl,
  inLanguage: "tr-TR",
  publisher: { "@id": `${site.baseUrl}/#organization` },
});

export const breadcrumbLd = (items: [string, string][]): Ld => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: absoluteUrl(path) })),
});

export const faqLd = (faq: FAQ[]): Ld => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

/** Fiyat yayınlanmadığı için offers/aggregateRating/review YOK; yalnızca anlamlandırma alanları. */
export const productLd = (o: { name: string; description: string; path: string; image?: string; sku?: string; category?: string; specs?: [string, string][] }): Ld => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: o.name,
  description: o.description,
  url: absoluteUrl(o.path),
  brand: { "@type": "Brand", name: site.short },
  ...(o.image ? { image: absoluteUrl(o.image) } : {}),
  ...(o.sku ? { sku: o.sku } : {}),
  ...(o.category ? { category: o.category } : {}),
  ...(o.specs && o.specs.length
    ? { additionalProperty: o.specs.map(([name, value]) => ({ "@type": "PropertyValue", name, value })) }
    : {}),
});

export const serviceLd = (o: { name: string; description: string; path: string; area?: string }): Ld => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: o.name,
  description: o.description,
  url: absoluteUrl(o.path),
  provider: { "@id": `${site.baseUrl}/#depo` },
  areaServed: o.area ?? { "@type": "Country", name: "Türkiye" },
});

export const articleLd = (o: { title: string; description: string; path: string; published: string; updated: string; image?: string; wordCount?: number; keywords?: string }): Ld => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: o.title,
  description: o.description,
  mainEntityOfPage: absoluteUrl(o.path),
  datePublished: o.published,
  dateModified: o.updated,
  inLanguage: "tr-TR",
  ...(o.image ? { image: [absoluteUrl(o.image)] } : {}),
  ...(o.wordCount ? { wordCount: o.wordCount } : {}),
  ...(o.keywords ? { keywords: o.keywords } : {}),
  author: { "@type": "Organization", name: site.name, url: site.baseUrl },
  publisher: { "@id": `${site.baseUrl}/#organization` },
});

/** Hub (liste) sayfaları: CollectionPage + ItemList. */
export const collectionLd = (o: { name: string; description: string; path: string; items: [string, string][] }): Ld => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: o.name,
  description: o.description,
  url: absoluteUrl(o.path),
  inLanguage: "tr-TR",
  isPartOf: { "@id": `${site.baseUrl}/#website` },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: o.items.length,
    itemListElement: o.items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, url: absoluteUrl(path) })),
  },
});

/** Bölüm metinlerinden yaklaşık kelime sayısı. */
export const wordCountOf = (sections: { h: string; p?: string[]; list?: string[]; steps?: string[] }[]): number =>
  sections
    .map((s) => [s.h, ...(s.p ?? []), ...(s.list ?? []), ...(s.steps ?? [])].join(" "))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

/** Veri kaydında tarih olmayan sayfalar için tek merkezî son-değişiklik tarihi (sitemap lastmod). */
export const SITE_UPDATED = "2026-10-28";

export { warehouseAddress, officeAddress };
