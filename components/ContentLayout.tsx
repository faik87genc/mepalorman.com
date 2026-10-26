import Link from "next/link";
import type { ReactNode } from "react";
import type { ArtKind } from "@/lib/types";
import { Photo, photoFor } from "@/components/Photo";
import { Breadcrumbs, FinalCta, JsonLd, PageHero, CtaButtons } from "@/components/Content";
import { site, telHref, waLink } from "@/lib/site";

export function SideCard({ title, links }: { title: string; links: [string, string][] }) {
  if (!links.length) return null;
  return (
    <section className="side-card">
      <h2>{title}</h2>
      <ul>
        {links.map(([label, href]) => (
          <li key={href}>
            <Link prefetch={false} href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ContactCard({ message }: { message: string }) {
  return (
    <section className="side-card">
      <h2>Hızlı teklif</h2>
      <p>Ürün, adet ve il yazın; güncel fiyatla dönelim.</p>
      <a className="btn btn-wa" href={waLink(message)} data-evt="whatsapp_click" data-src="sidebar" rel="noopener" target="_blank">
        WhatsApp ile Fiyat Al
      </a>
      <a className="btn btn-dark" href={telHref} data-evt="tel_click" data-src="sidebar">
        {site.phone}
      </a>
      <Link prefetch={false} className="btn btn-ghost" href="/teklif-al/">
        Teklif sihirbazı
      </Link>
    </section>
  );
}

/** Shared shell for product / service / region / sector / guide / price pages. */
export function ContentLayout({
  crumbs,
  h1,
  answer,
  art,
  message,
  ld,
  heroExtra,
  children,
  side,
  finalTitle,
  meta,
}: {
  crumbs: [string, string][];
  h1: string;
  answer?: string;
  art?: ArtKind;
  message: string;
  ld?: object[];
  heroExtra?: ReactNode;
  children: ReactNode;
  side?: ReactNode;
  finalTitle?: string;
  meta?: string;
}) {
  return (
    <>
      <PageHero h1={h1} answer={answer} kicker={crumbs[0]?.[0]} photo={art ? photoFor(art) : undefined}>
        {meta && <p className="meta">{meta}</p>}
        <CtaButtons message={message} source="hero" />
        {heroExtra}
      </PageHero>
      <Breadcrumbs items={crumbs} />
      <div className="wrap content-grid">
        <div className="content-main">{children}</div>
        <aside className="sidebar" aria-label="Yardımcı bilgiler">
          <ContactCard message={message} />
          {side}
        </aside>
      </div>
      <FinalCta message={message} title={finalTitle} />
      {ld && <JsonLd data={ld} />}
    </>
  );
}

const POS = ["50% 50%", "30% 60%", "70% 40%", "50% 20%", "20% 50%", "80% 70%"];

export function CardGrid({ items }: { items: { href: string; title: string; blurb: string; art: ArtKind; foot?: string }[] }) {
  return (
    <div className="grid">
      {items.map((it, i) => (
        <article key={it.href} className="card">
          <div className="card-photo">
            <Photo name={photoFor(it.art)} sizes="(min-width: 900px) 360px, 100vw" position={POS[i % POS.length]} alt="" />
          </div>
          <div className="card-body">
            <h3>
              <Link prefetch={false} href={it.href}>{it.title}</Link>
            </h3>
            <p>{it.blurb}</p>
            {it.foot && <span className="from">{it.foot}</span>}
          </div>
        </article>
      ))}
    </div>
  );
}
