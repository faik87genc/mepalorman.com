import type { ArtKind } from "@/lib/types";

/** Gerçek depo fotoğrafları (img/mepalroman_palet (N).jpeg → public/img/pNN-*.webp, scripts/build-photos.mjs). */
export const PHOTOS = {
  p01: "Açık sahada yan yana ve üst üste istiflenmiş ahşap paletler",
  p02: "Çemberlenmiş ahşap paketleri ve palet malzemesi istifi",
  p03: "Isıl işlem odasına dizilmiş ahşap paletler",
  p04: "Depoda sıra sıra dizilmiş damgalı euro palet istifleri",
  p05: "Palet deposunda yan yana duran uzun istifler",
  p06: "Mavi gökyüzü altında yüksek ahşap palet istifleri",
  p07: "Kapalı depoda forklift ile taşınmaya hazır palet istifi",
  p08: "İki yönlü yüksek ahşap palet kuleleri",
  p09: "Yandan görünümüyle takozlu ahşap palet istifi",
  p10: "Tek bir 80x120 ahşap paletin üstten görünümü",
  p11: "Palet deposunun açık sahasında sıralı palet istifleri",
  p12: "Beton zeminde dikey istiflenmiş sıfır ahşap paletler",
  p13: "EPAL damgalı euro paletlerden oluşan istif",
  p14: "Kırmızı zemin üzerinde iki katlı ahşap palet istifi",
  p15: "Açık sahada üst üste dizilmiş ikinci el paletler",
  p16: "İkinci el A sınıfı temiz EPAL ve Turpal paletler",
  p17: "Sıfır üretim ahşap paletlerin yakın çekimi",
  p18: "Güneşli havada sıralanmış ahşap palet yığınları",
} as const;

export type PhotoName = keyof typeof PHOTOS;
export const PHOTO_IDS = Object.keys(PHOTOS) as PhotoName[];

const W = 1280;
const H = 896;

const POOLS: Record<string, PhotoName[]> = {
  euro: ["p13", "p04", "p16", "p12"],
  ispm: ["p03", "p05", "p08", "p06"],
  cp: ["p09", "p12", "p17", "p07"],
  wood: ["p17", "p12", "p09", "p07", "p14"],
  big: ["p09", "p07", "p17", "p12"],
  custom: ["p07", "p09", "p17", "p10"],
  used: ["p15", "p11", "p14", "p01", "p16", "p18"],
  scrap: ["p18", "p15", "p01", "p11", "p10"],
  service: ["p11", "p15", "p18", "p14", "p01"],
  crate: ["p02", "p07", "p09"],
  truck: ["p03", "p08", "p05", "p06"],
  container: ["p03", "p05", "p08"],
  plastic: ["p05", "p08", "p06"],
};
const FALLBACK: PhotoName[] = ["p11", "p06", "p05", "p08", "p04", "p14", "p01", "p18", "p15"];

/** Belirli sayfalar için konuya birebir uyan fotoğraf (slug → foto). */
const BY_SLUG: Record<string, PhotoName> = {
  "epal-palet": "p13",
  "80x120-euro-palet": "p04",
  "turpal-palet": "p16",
  "ikinci-el-euro-palet": "p16",
  "ikinci-el-palet": "p15",
  "sifir-ahsap-palet": "p17",
  "isil-islemli-palet": "p03",
  "ihracat-paleti": "p03",
  "ambalaj-paleti": "p02",
  "ahsap-sandik": "p02",
  "tahta-kasa": "p02",
  "ihracat-sandigi-kasasi": "p03",
  "ikinci-el-ahsap-palet": "p15",
  "cakma-epal-palet": "p10",
  "orta-palet": "p14",
  "kalin-orta-palet": "p09",
  "hurda-palet-alimi": "p18",
  "hasarli-palet-alimi": "p01",
  "kirik-palet-alimi": "p10",
  "palet-tamiri": "p07",
};

const hash = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};

/** Sayfa türüne (art) ve bir tohuma (slug/href/başlık) göre gerçek fotoğraf seçer; aynı tohum hep aynı fotoğrafı verir. */
export function photoFor(kind: ArtKind | string, seed = "", shift = 0): PhotoName {
  const slug = seed.split("/").filter(Boolean).pop() ?? "";
  if (shift === 0 && BY_SLUG[slug]) return BY_SLUG[slug];
  const pool = POOLS[kind] ?? FALLBACK;
  return pool[(hash(seed || kind) + shift) % pool.length];
}

export function Photo({
  name,
  sizes = "(min-width: 900px) 600px, 100vw",
  priority = false,
  className,
  alt,
  position,
}: {
  name: PhotoName;
  sizes?: string;
  priority?: boolean;
  className?: string;
  alt?: string;
  position?: string;
}) {
  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`/img/${name}-480.avif 480w, /img/${name}-800.avif 800w, /img/${name}-1280.avif 1280w`}
        sizes={sizes}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={className}
        src={`/img/${name}-1280.webp`}
        srcSet={`/img/${name}-480.webp 480w, /img/${name}-800.webp 800w, /img/${name}-1280.webp 1280w`}
        sizes={sizes}
        width={W}
        height={H}
        alt={alt ?? PHOTOS[name]}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        style={position ? { objectPosition: position, aspectRatio: `${W} / ${H}` } : { aspectRatio: `${W} / ${H}` }}
      />
    </picture>
  );
}
