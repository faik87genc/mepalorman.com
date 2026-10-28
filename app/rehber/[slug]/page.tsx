import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqList, RelatedLinks, SectionsView } from "@/components/Content";
import { ContentLayout, SideCard } from "@/components/ContentLayout";
import { guideBySlug, guides } from "@/lib/data/guides";
import { slugify, trDate } from "@/lib/format";
import { photoFor } from "@/components/Photo";
import { articleLd, pageMeta, wordCountOf } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => guides.map((g) => ({ slug: g.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) return {};
  return pageMeta({ title: g.title, description: g.description, path: `/rehber/${g.slug}/`, type: "article" });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) notFound();
  const path = `/rehber/${g.slug}/`;
  const rel = g.related.map((s) => guideBySlug(s)).filter((x): x is NonNullable<typeof x> => !!x);
  const message = `Merhaba, "${g.h1}" yazınızı okudum. Palet için fiyat almak istiyorum. Ürün: … Adet: … İl: …`;
  return (
    <ContentLayout
      crumbs={[["Rehber", "/rehber/"], [g.h1, path]]}
      h1={g.h1}
      answer={g.answer}
      art={g.art}
      message={message}
      meta={`${g.readMinutes} dk okuma · Yayın: ${trDate(g.published)} · Güncelleme: ${trDate(g.updated)}`}
      ld={[articleLd({ title: g.h1, description: g.description, path, published: g.published, updated: g.updated, image: `/img/${photoFor(g.art, g.slug)}-1280.webp`, wordCount: wordCountOf(g.sections), keywords: g.keyword })]}
      finalTitle="Bu bilgiyle palet ihtiyacınız için teklif alın"
      side={
        <>
          <SideCard title="Bu yazıdaki başlıklar" links={g.sections.map((s) => [s.h, `#${slugify(s.h)}`])} />
          <SideCard title="Araçlar" links={[["Konteynere kaç palet sığar?", "/araclar/konteyner-palet-hesaplama/"], ["Palet seçici", "/araclar/palet-secici/"], ["Palet danışmanı", "/araclar/palet-danismani/"]]} />
        </>
      }
    >
      <SectionsView sections={g.sections} cta={{ message, after: 1 }} />
      <FaqList items={g.faq} />
      <RelatedLinks title="İlgili rehberler" links={rel.map((r) => [r.h1, `/rehber/${r.slug}/`])} />
      <section className="block">
        <p className="meta">Yazan: MEPAL Orman Ürünleri, Gebze. Bilgiler genel rehber niteliğindedir; kesin teknik gereksinimler için ilgili standart ve alıcı gerekliliklerini kontrol edin.</p>
      </section>
    </ContentLayout>
  );
}
