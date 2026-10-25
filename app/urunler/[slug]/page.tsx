import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqList, PriceTable, RelatedLinks, SectionsView, SpecTable } from "@/components/Content";
import { ContentLayout, SideCard } from "@/components/ContentLayout";
import { PRICE_ROWS, PRICES_UPDATED } from "@/lib/data/prices";
import { productBySlug, products } from "@/lib/data/products";
import { guideBySlug } from "@/lib/data/guides";
import { priceRange } from "@/lib/format";
import { pageMeta, productLd } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) return {};
  return pageMeta({ title: p.title, description: p.description, path: `/urunler/${p.slug}/` });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) notFound();
  const path = `/urunler/${p.slug}/`;
  const rowKeys = PRICE_ROWS.filter((r) => r.product === p.slug).map((r) => r.key);
  const range = priceRange(rowKeys);
  const [first, ...rest] = p.sections;
  const relatedProducts = p.related.map((s) => productBySlug(s)).filter((x): x is NonNullable<typeof x> => !!x);
  const guideLinks = p.guides.map((s) => guideBySlug(s)).filter((g): g is NonNullable<typeof g> => !!g);
  return (
    <ContentLayout
      crumbs={[["Ürünler", "/urunler/"], [p.name, path]]}
      h1={p.h1}
      answer={p.answer}
      art={p.art}
      message={`Merhaba, ${p.name} için fiyat almak istiyorum. Adet: … İl: …`}
      ld={[productLd({ name: p.name, description: p.description, path, low: range?.low, high: range?.high, updated: PRICES_UPDATED })]}
      side={
        <>
          <SideCard title="Fiyat sayfaları" links={[["Tüm palet fiyatları", "/palet-fiyatlari/"], ["Euro palet fiyatları", "/euro-palet-fiyatlari/"], ["İkinci el palet fiyatları", "/ikinci-el-palet-fiyatlari/"]]} />
          {guideLinks.length > 0 && <SideCard title="İlgili rehberler" links={guideLinks.map((g) => [g.h1, `/rehber/${g.slug}/`])} />}
        </>
      }
    >
      {rowKeys.length > 0 && (
        <section className="block">
          <h2>{p.name} fiyatları</h2>
          <PriceTable rowKeys={rowKeys} compact />
        </section>
      )}
      <section className="block">
        <h2>Teknik özellikler</h2>
        <SpecTable specs={p.specs} />
      </section>
      <SectionsView sections={first ? [first] : []} cta={{ message: `Merhaba, ${p.name} için fiyat almak istiyorum. Adet: … İl: …` }} />
      <SectionsView sections={rest} />
      <section className="block">
        <h2>Kullanım alanları</h2>
        <ul>
          {p.uses.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
      </section>
      <FaqList items={p.faq} />
      <RelatedLinks title="İlgili ürünler" links={relatedProducts.map((r) => [r.name, `/urunler/${r.slug}/`])} />
    </ContentLayout>
  );
}
