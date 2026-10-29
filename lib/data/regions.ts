import type { Region } from "@/lib/types";
import { GENERIC_DISTANCE, type RegionContent } from "./regions-build";
import { regionMeta } from "./regions-meta";
import { regionContent1 } from "./regions-1";
import { regionContent2 } from "./regions-2";
import { regionContent3 } from "./regions-3";
import { regionContent4 } from "./regions-4";
import { regionContent5 } from "./regions-5";
import { regionContent6 } from "./regions-6";

// Bölge sayfaları (/bolge/<slug>/), slug biçimi: gebze-palet, tuzla-palet ...
// Fiyat yazılmaz; fiyatlar lib/data/prices.ts tablosundan gelir.
const content: Record<string, RegionContent> = {
  ...regionContent1,
  ...regionContent2,
  ...regionContent3,
  ...regionContent4,
  ...regionContent5,
  ...regionContent6,
};

export const regions: Region[] = regionMeta.map((m) => {
  const c = content[m.slug];
  if (!c) throw new Error(`Bölge içeriği yok: ${m.slug}`);
  return {
    slug: m.slug,
    name: m.name,
    wave: m.wave,
    title: m.title,
    description: c.description ?? m.description,
    h1: m.h1,
    keyword: m.keyword,
    art: "region",
    distance: c.distance ?? GENERIC_DISTANCE,
    blurb: c.blurb,
    answer: c.answer,
    zones: c.zones,
    nearby: c.nearby,
    sections: c.sections,
    faq: c.faq,
  };
});

export const regionBySlug = (slug: string) => regions.find((r) => r.slug === slug);
