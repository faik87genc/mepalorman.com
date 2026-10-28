import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, FinalCta, JsonLd, PageHero } from "@/components/Content";
import { PHOTOS, PHOTO_IDS, Photo, type PhotoName } from "@/components/Photo";
import { absoluteUrl } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Palet Fotoğrafları: Depo ve Stok Görüntüleri | MEPAL",
  description: "Gebze deposundan euro palet, ahşap palet, ikinci el palet, ısıl işlemli palet ve ambalaj paleti fotoğrafları. Gerçek stok görüntüleri.",
  path: "/galeri/",
});

const LINKS: Partial<Record<PhotoName, [string, string]>> = {
  p03: ["Isıl işlemli palet", "/urunler/isil-islemli-palet/"],
  p02: ["Ambalaj paleti", "/urunler/ambalaj-paleti/"],
  p04: ["80x120 euro palet", "/urunler/80x120-euro-palet/"],
  p10: ["Çakma EPAL palet", "/urunler/cakma-epal-palet/"],
  p13: ["EPAL palet", "/urunler/epal-palet/"],
  p14: ["Orta palet", "/urunler/orta-palet/"],
  p15: ["İkinci el palet", "/urunler/ikinci-el-palet/"],
  p16: ["İkinci el euro palet", "/urunler/ikinci-el-euro-palet/"],
  p17: ["Sıfır ahşap palet", "/urunler/sifir-ahsap-palet/"],
  p18: ["Hurda palet alımı", "/hizmetler/hurda-palet-alimi/"],
  p09: ["Kalın orta palet", "/urunler/kalin-orta-palet/"],
  p01: ["Hasarlı palet alımı", "/hizmetler/hasarli-palet-alimi/"],
};

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[["Palet fotoğrafları", "/galeri/"]]} />
      <PageHero
        h1="Palet Fotoğrafları"
        answer="Euro palet, ahşap palet, ikinci el palet, ısıl işlemli palet ve ambalaj paleti stoklarımızdan gerçek görüntüler. Beğendiğiniz ürün için fotoğrafla birlikte WhatsApp’tan fiyat isteyebilirsiniz."
        photo="p08"
      />
      <div className="wrap">
        <div className="gallery-grid">
          {PHOTO_IDS.map((id) => (
            <figure key={id}>
              <Photo name={id} sizes="(min-width: 900px) 300px, 100vw" />
              <figcaption>
                {PHOTOS[id]}
                {LINKS[id] && (
                  <>
                    {" "}
                    · <Link prefetch={false} href={LINKS[id]![1]}>{LINKS[id]![0]}</Link>
                  </>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <FinalCta message="Merhaba, galerideki paletler için fiyat almak istiyorum. Ürün: … Adet: … İl: …" />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "MEPAL palet fotoğrafları",
            url: absoluteUrl("/galeri/"),
            image: PHOTO_IDS.map((id) => ({ "@type": "ImageObject", contentUrl: absoluteUrl(`/img/${id}-1280.webp`), caption: PHOTOS[id] })),
          },
        ]}
      />
    </>
  );
}
