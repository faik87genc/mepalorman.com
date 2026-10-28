import type { Guide } from "@/lib/types";
import { guidesA } from "./guides-a";
import { guidesB } from "./guides-b";
import { guidesC } from "./guides-c";
import { guidesD } from "./guides-d";
import { guidesE } from "./guides-e";

// Yeni rehberlere (guides-d) geri bağlantılar: mevcut rehberlerin related listesine eklenir.
// Yalnızca var olan rehber slug'ları kullanılır.
const extraRelated: Record<string, string[]> = {
  "epal-palet-ile-standart-palet-farki": ["cakma-epal-nedir", "eur-palet-nedir"],
  "euro-palet-olculeri": ["eur-palet-nedir"],
  "ikinci-el-palet-alirken-dikkat-edilecekler": ["orta-palet-ve-kalin-orta-palet-farki", "hasarli-ve-kirik-palet-ne-yapilir"],
  "palet-kalite-siniflari": ["orta-palet-ve-kalin-orta-palet-farki"],
  "hurda-paletinizi-nasil-degerlendirirsiniz": ["hasarli-ve-kirik-palet-ne-yapilir", "hurda-palet-nereye-satilir"],
  "ihracatta-palet-ve-ambalaj-kurallari": ["ambalaj-paleti-nedir"],
  "palet-cesitleri-ve-secimi": ["ambalaj-paleti-nedir", "palet-secimi-yuk-kapasitesi-rehberi"],
  "palet-omru-nasil-uzatilir": ["palet-tamiri-ne-zaman-yapilir"],
  "ahsap-palet-geri-donusum": ["hurda-palet-nereye-satilir"],
  "palet-kac-kg-tasir": ["palet-secimi-yuk-kapasitesi-rehberi"],
  "palet-fiyatlarini-etkileyen-faktorler": ["palet-alirken-teklif-isterken-hangi-bilgiler-gerekir"],
};

const withExtraRelated = (g: Guide): Guide => {
  const extra = extraRelated[g.slug];
  if (!extra) return g;
  return { ...g, related: [...g.related, ...extra.filter((s) => !g.related.includes(s))] };
};

export const guides: Guide[] = [...guidesA, ...guidesB, ...guidesC, ...guidesD, ...guidesE]
  .map(withExtraRelated)
  .sort((a, b) => a.week - b.week);

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
