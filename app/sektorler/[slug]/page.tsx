import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqList, RelatedLinks, SectionsView } from "@/components/Content";
import { ContentLayout, SideCard } from "@/components/ContentLayout";
import { productBySlug } from "@/lib/data/products";
import { sectorBySlug, sectors } from "@/lib/data/sectors";
import { pageMeta, serviceLd } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => sectors.map((s) => ({ slug: s.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = sectorBySlug(slug);
  if (!s) return {};
  return pageMeta({ title: s.title, description: s.description, path: `/sektorler/${s.slug}/` });
}

export default async function SectorPage({ params }: Props) {
  const { slug } = await params;
  const s = sectorBySlug(slug);
  if (!s) notFound();
  const path = `/sektorler/${s.slug}/`;
  const message = `Merhaba, ${s.name} sektörü için palet fiyatı almak istiyorum. Ürün: … Adet: … İl: …`;
  const prods = s.products.map((p) => productBySlug(p)).filter((x): x is NonNullable<typeof x> => !!x);
  return (
    <ContentLayout
      crumbs={[["Sektörler", "/sektorler/"], [s.name, path]]}
      h1={s.h1}
      answer={s.answer}
      art={s.art}
      message={message}
      ld={[serviceLd({ name: `${s.name} için palet tedariki`, description: s.description, path })]}
      side={<SideCard title="Diğer sektörler" links={sectors.filter((x) => x.slug !== s.slug).map((x) => [x.name, `/sektorler/${x.slug}/`])} />}
    >
      <SectionsView sections={s.sections} cta={{ message }} />
      <RelatedLinks title="Bu sektörde önerilen paletler" links={prods.map((p) => [p.name, `/urunler/${p.slug}/`])} />
      <FaqList items={s.faq} />
    </ContentLayout>
  );
}
