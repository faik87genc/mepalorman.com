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
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
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
  logo: absoluteUrl("/icon.svg"),
  email: site.email,
  telephone: site.phoneE164,
  taxID: site.taxNo,
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
  priceRange: "₺₺",
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
  areaServed: ["Gebze", "Kocaeli", "İstanbul", "Tuzla", "Pendik", "Kartal", "Dilovası", "Çayırova"].map((n) => ({ "@type": "AdministrativeArea", name: n })),
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

export const productLd = (o: { name: string; description: string; path: string; low?: number; high?: number; updated?: string }): Ld => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: o.name,
  description: o.description,
  url: absoluteUrl(o.path),
  brand: { "@type": "Brand", name: site.short },
  ...(o.low !== undefined && o.high !== undefined
    ? {
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "TRY",
          lowPrice: o.low,
          highPrice: o.high,
          offerCount: 3,
          availability: "https://schema.org/InStock",
          seller: { "@id": `${site.baseUrl}/#depo` },
          ...(o.updated ? { priceValidUntil: o.updated } : {}),
        },
      }
    : {}),
});

export const serviceLd = (o: { name: string; description: string; path: string; area?: string }): Ld => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: o.name,
  description: o.description,
  url: absoluteUrl(o.path),
  provider: { "@id": `${site.baseUrl}/#depo` },
  areaServed: o.area ?? "Kocaeli, İstanbul",
});

export const articleLd = (o: { title: string; description: string; path: string; published: string; updated: string }): Ld => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: o.title,
  description: o.description,
  mainEntityOfPage: absoluteUrl(o.path),
  datePublished: o.published,
  dateModified: o.updated,
  inLanguage: "tr-TR",
  author: { "@type": "Organization", name: site.name, url: site.baseUrl },
  publisher: { "@id": `${site.baseUrl}/#organization` },
});

export { warehouseAddress, officeAddress };
