import type { Metadata } from "next";
import { Breadcrumbs, FaqList, FinalCta, PageHero } from "@/components/Content";
import { pricePages } from "@/lib/data/pricePages";
import { products } from "@/lib/data/products";
import { services } from "@/lib/data/services";
import { pageMeta } from "@/lib/seo";
import type { FAQ } from "@/lib/types";

export const metadata: Metadata = pageMeta({
  title: "Palet Sık Sorulan Sorular (SSS) | MEPAL Orman Ürünleri",
  description: "Palet fiyatları, ölçüler, ihracat paleti, ikinci el ve hurda palet, teslimat ve sipariş hakkında en sık sorulan sorular ve kısa cevapları.",
  path: "/sss/",
});

function uniq(list: FAQ[]): FAQ[] {
  const seen = new Set<string>();
  return list.filter((f) => (seen.has(f.q) ? false : (seen.add(f.q), true)));
}

export default function FaqPage() {
  const groups: [string, FAQ[]][] = [
    ["Fiyat ve sipariş", uniq(pricePages.flatMap((p) => p.faq))],
    ["Ürünler", uniq(products.flatMap((p) => p.faq))],
    ["Hizmetler: alım, tamir, toptan", uniq(services.flatMap((s) => s.faq))],
  ];
  return (
    <>
      <Breadcrumbs items={[["Sık sorulan sorular", "/sss/"]]} />
      <PageHero h1="Palet Hakkında Sık Sorulan Sorular" answer="Fiyat, ölçü, ihracat, ikinci el ve hurda palet, teslimat ve sipariş konularında en çok sorulan soruların kısa cevapları. Aradığınızı bulamazsanız WhatsApp’tan yazın." />
      <div className="wrap prose-narrow">
        {groups.map(([title, items]) => (
          <FaqList key={title} items={items} title={title} schema={false} />
        ))}
      </div>
      <FinalCta message="Merhaba, sorum var: …" />
    </>
  );
}
