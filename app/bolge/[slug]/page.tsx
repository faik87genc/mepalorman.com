import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqList, RelatedLinks, SectionsView } from "@/components/Content";
import { ContentLayout } from "@/components/ContentLayout";
import { productBySlug } from "@/lib/data/products";
import { regionBySlug, regions } from "@/lib/data/regions";
import { pageMeta, serviceLd } from "@/lib/seo";
import { site, warehouseAddress } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => regions.map((r) => ({ slug: r.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const r = regionBySlug(slug);
  if (!r) return {};
  return pageMeta({ title: r.title, description: r.description, path: `/bolge/${r.slug}/` });
}

const POPULAR = ["80x120-euro-palet", "ikinci-el-palet", "sifir-ahsap-palet", "plastik-palet"];

export default async function RegionPage({ params }: Props) {
  const { slug } = await params;
  const r = regionBySlug(slug);
  if (!r) notFound();
  const path = `/bolge/${r.slug}/`;
  const nearby = r.nearby.map((s) => regionBySlug(s)).filter((x): x is NonNullable<typeof x> => !!x);
  const popular = POPULAR.map((s) => productBySlug(s)).filter((x): x is NonNullable<typeof x> => !!x);
  const message = `Merhaba, ${r.name} için palet fiyatı almak istiyorum. Ürün: … Adet: …`;
  return (
    <ContentLayout
      crumbs={[["Hizmet bölgeleri", "/bolge/"], [r.name, path]]}
      h1={r.h1}
      answer={r.answer}
      art="region"
      message={message}
      ld={[serviceLd({ name: `${r.name} palet satışı ve hurda palet alımı`, description: r.description, path, area: r.name })]}
      meta={r.distance}
      side={
        <>
          <section className="side-card">
            <h2>Depomuz</h2>
            <p>{warehouseAddress}</p>
            <a href={site.mapsUrl} rel="noopener" target="_blank">
              Yol tarifi al →
            </a>
          </section>
          {r.zones.length > 0 && (
            <section className="side-card">
              <h2>Hizmet verdiğimiz alanlar</h2>
              <ul>
                {r.zones.map((z) => (
                  <li key={z}>{z}</li>
                ))}
              </ul>
            </section>
          )}
        </>
      }
    >
      <SectionsView sections={r.sections} cta={{ message }} />
      <FaqList items={r.faq} title={`${r.name} palet hakkında sık sorulanlar`} />
      <RelatedLinks title={`${r.name} için en çok istenen ürünler`} links={popular.map((p) => [p.name, `/urunler/${p.slug}/`])} />
      <RelatedLinks title="Yakın bölgeler" links={nearby.map((n) => [n.name, `/bolge/${n.slug}/`])} />
    </ContentLayout>
  );
}
