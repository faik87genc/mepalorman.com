import type { ArtKind } from "@/lib/types";

export type PhotoName = "depo" | "forklift" | "euro-damga" | "kullanilmis";

const DIMS: Record<PhotoName, [number, number]> = {
  depo: [1280, 1280],
  forklift: [1280, 896],
  "euro-damga": [1280, 896],
  kullanilmis: [1280, 896],
};

const ALT: Record<PhotoName, string> = {
  depo: "Depoda istiflenmiş ahşap paletler ve forklift",
  forklift: "Forklift ile palet yükleme",
  "euro-damga": "Damgalı euro paletlerin yakın çekimi",
  kullanilmis: "Açık sahada istiflenmiş kullanılmış paletler",
};

/** Maps a page's illustration kind to one of the supplied photographs. */
export function photoFor(kind: ArtKind | string): PhotoName {
  switch (kind) {
    case "euro":
    case "ispm":
    case "cp":
      return "euro-damga";
    case "wood":
    case "big":
    case "custom":
      return "forklift";
    case "used":
    case "scrap":
    case "service":
      return "kullanilmis";
    default:
      return "depo";
  }
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
  const [w, h] = DIMS[name];
  const small = Math.round((640 / w) * h);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={`/img/${name}-1280.webp`}
      srcSet={`/img/${name}-640.webp 640w, /img/${name}-1280.webp 1280w`}
      sizes={sizes}
      width={w}
      height={h}
      alt={alt ?? (alt === "" ? "" : ALT[name])}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      style={position ? { objectPosition: position, aspectRatio: `${w} / ${h}` } : { aspectRatio: `${w} / ${h}` }}
      data-small={small}
    />
  );
}
