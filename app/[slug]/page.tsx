import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaqList, PriceTable, RelatedLinks, SectionsView } from "@/components/Content";
import { ContentLayout, SideCard } from "@/components/ContentLayout";
import { PRICES_UPDATED } from "@/lib/data/prices";
import { pricePageBySlug, pricePages } from "@/lib/data/pricePages";
import { staticPageBySlug, staticPages } from "@/lib/data/pages";
import { products } from "@/lib/data/products";
import { guideBySlug } from "@/lib/data/guides";
import { priceRange, trDate } from "@/lib/format";
import { pageMeta, productLd } from "@/lib/seo";

// Root-level pages: the five price pages and the corporate/legal pages.
export const dynamicParams = false;
export const generateStaticParams = () => [...pricePages.map((p) => ({ slug: p.slug })), ...staticPages.map((p) => ({ slug: p.slug }))];

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pp = pricePageBySlug(slug);
  if (pp) return pageMeta({ title: pp.title, description: pp.description, path: `/${pp.slug}/` });
  const sp = staticPageBySlug(slug);
  if (sp) return pageMeta({ title: sp.title, description: sp.description, path: `/${sp.slug}/` });
  return {};
}

export default async function RootPage({ params }: Props) {
  const { slug } = await params;
  const pp = pricePageBySlug(slug);
  if (pp) {
    const path = `/${pp.slug}/`;
    const message = `Merhaba, ${pp.keyword} için güncel fiyat almak istiyorum. Adet: … İl: …`;
    const range = priceRange(pp.rowKeys);
    const guideLinks = pp.guides.map((g) => guideBySlug(g)).filter((g): g is NonNullable<typeof g> => !!g);
    const others = pricePages.filter((x) => x.slug !== pp.slug);
    const relProducts = pp.related.map((s) => products.find((p) => p.slug === s)).filter((x): x is NonNullable<typeof x> => !!x);
    return (
      <ContentLayout
        crumbs={[["Palet fiyatları", "/palet-fiyatlari/"], ...(pp.slug === "palet-fiyatlari" ? [] : ([[pp.h1, path]] as [string, string][]))]}
        h1={pp.h1}
        answer={pp.answer}
        art={pp.art}
        message={message}
        meta="Güncel fiyat için WhatsApp · KDV hariç"
        ld={[productLd({ name: pp.h1, description: pp.description, path, low: range?.low, high: range?.high, updated: PRICES_UPDATED })]}
        side={
          <>
            <SideCard title="Diğer fiyat sayfaları" links={others.map((o) => [o.h1, `/${o.slug}/`])} />
            {guideLinks.length > 0 && <SideCard title="İlgili rehberler" links={guideLinks.map((g) => [g.h1, `/rehber/${g.slug}/`])} />}
          </>
        }
      >
        {pp.rowKeys.length > 0 && (
          <section className="block">
            <h2>Fiyat al</h2>
            <PriceTable rowKeys={pp.rowKeys} />
          </section>
        )}
        <SectionsView sections={pp.sections} cta={{ message, after: 0 }} />
        <FaqList items={pp.faq} />
        <RelatedLinks title="İlgili ürünler" links={relProducts.map((r) => [r.name, `/urunler/${r.slug}/`])} />
      </ContentLayout>
    );
  }
  const sp = staticPageBySlug(slug);
  if (!sp) notFound();
  const path = `/${sp.slug}/`;
  return (
    <ContentLayout
      crumbs={[[sp.h1, path]]}
      h1={sp.h1}
      answer={sp.answer}
      message="Merhaba, bilgi almak istiyorum."
      meta={`Son güncelleme: ${trDate(sp.updated)}`}
      side={<SideCard title="Hızlı bağlantılar" links={[["Palet fiyatları", "/palet-fiyatlari/"], ["Ürünler", "/urunler/"], ["İletişim", "/iletisim/"], ["KVKK", "/kvkk/"]]} />}
    >
      <SectionsView sections={sp.sections} />
      {sp.faq && <FaqList items={sp.faq} />}
    </ContentLayout>
  );
}
