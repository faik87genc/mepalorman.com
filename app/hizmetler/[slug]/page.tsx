import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqList, RelatedLinks, SectionsView } from "@/components/Content";
import { ContentLayout, SideCard } from "@/components/ContentLayout";
import { guideBySlug } from "@/lib/data/guides";
import { productBySlug } from "@/lib/data/products";
import { serviceBySlug, services } from "@/lib/data/services";
import { pageMeta, serviceLd } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return pageMeta({ title: s.title, description: s.description, path: `/hizmetler/${s.slug}/` });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();
  const path = `/hizmetler/${s.slug}/`;
  const message = slug === "hurda-palet-alimi" ? "Merhaba, hurda/ikinci el paletlerimi satmak istiyorum. Palet tipi: … Yaklaşık adet: … İl: …" : `Merhaba, ${s.name} hakkında bilgi/fiyat almak istiyorum. İl: …`;
  const rel = s.related.map((r) => productBySlug(r)).filter((x): x is NonNullable<typeof x> => !!x);
  const guideLinks = s.guides.map((g) => guideBySlug(g)).filter((g): g is NonNullable<typeof g> => !!g);
  return (
    <ContentLayout
      crumbs={[["Hizmetler", "/hizmetler/"], [s.name, path]]}
      h1={s.h1}
      answer={s.answer}
      art={s.art}
      message={message}
      ld={[serviceLd({ name: s.name, description: s.description, path })]}
      side={
        <>
          <SideCard title="Diğer hizmetler" links={services.filter((x) => x.slug !== s.slug).map((x) => [x.name, `/hizmetler/${x.slug}/`])} />
          {guideLinks.length > 0 && <SideCard title="İlgili rehberler" links={guideLinks.map((g) => [g.h1, `/rehber/${g.slug}/`])} />}
        </>
      }
    >
      <SectionsView sections={s.sections} cta={{ message }} />
      <FaqList items={s.faq} />
      <RelatedLinks title="İlgili ürünler" links={rel.map((r) => [r.name, `/urunler/${r.slug}/`])} />
    </ContentLayout>
  );
}
