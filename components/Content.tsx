import Link from "next/link";
import type { ReactNode } from "react";
import type { FAQ, Section, Table } from "@/lib/types";
import { PRICES_UPDATED_LABEL, PRICE_ROWS, TIERS, VAT_NOTE, rowByKey, tl } from "@/lib/data/prices";
import { waLink, telHref, site } from "@/lib/site";
import { breadcrumbLd, faqLd } from "@/lib/seo";
import { slugify } from "@/lib/format";

export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }} />
      ))}
    </>
  );
}

export function Breadcrumbs({ items }: { items: [string, string][] }) {
  const all: [string, string][] = [["Ana sayfa", "/"], ...items];
  return (
    <>
      <nav className="crumbs" aria-label="Sayfa yolu">
        <ol>
          {all.map(([label, href], i) => (
            <li key={href}>{i === all.length - 1 ? <span aria-current="page">{label}</span> : <Link href={href}>{label}</Link>}</li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbLd(all)} />
    </>
  );
}

export function CtaButtons({ message, source }: { message: string; source?: string }) {
  return (
    <div className="cta-row">
      <a className="btn btn-wa" href={waLink(message)} data-evt="whatsapp_click" data-src={source} rel="noopener" target="_blank">
        WhatsApp ile Fiyat Al
      </a>
      <a className="btn btn-dark" href={telHref} data-evt="tel_click" data-src={source}>
        Hemen Ara · {site.phone}
      </a>
    </div>
  );
}

export function PageHero({ h1, answer, children, aside }: { h1: string; answer?: string; children?: ReactNode; aside?: ReactNode }) {
  return (
    <header className="page-hero">
      <div className="wrap hero-grid">
        <div>
          <h1>{h1}</h1>
          {answer && <p className="answer">{answer}</p>}
          {children}
        </div>
        {aside && <div className="hero-aside">{aside}</div>}
      </div>
    </header>
  );
}

export function DataTable({ table }: { table: Table }) {
  return (
    <div className="table-wrap">
      <table>
        {table.caption && <caption>{table.caption}</caption>}
        <thead>
          <tr>
            {table.head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}>{c}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SectionsView({ sections, cta }: { sections: Section[]; cta?: { message: string; after?: number } }) {
  return (
    <>
      {sections.map((s, i) => (
        <section key={s.h} id={slugify(s.h)} className="block">
          <h2>{s.h}</h2>
          {s.p?.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
          {s.list && (
            <ul>
              {s.list.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          )}
          {s.steps && (
            <ol>
              {s.steps.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ol>
          )}
          {s.table && <DataTable table={s.table} />}
          {s.links && (
            <p className="inline-links">
              {s.links.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label} →
                </Link>
              ))}
            </p>
          )}
          {cta && i === (cta.after ?? 0) && (
            <aside className="cta-box">
              <p>
                <strong>Güncel fiyat ve stok için 30 saniyede teklif alın.</strong> Aynı gün dönüş yapıyoruz.
              </p>
              <CtaButtons message={cta.message} source="inline" />
            </aside>
          )}
        </section>
      ))}
    </>
  );
}

export function FaqList({ items, title = "Sık sorulan sorular" }: { items: FAQ[]; title?: string }) {
  if (!items.length) return null;
  return (
    <section className="block faq">
      <h2>{title}</h2>
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
      <JsonLd data={faqLd(items)} />
    </section>
  );
}

export function PriceTable({ rowKeys, compact = false }: { rowKeys?: string[]; compact?: boolean }) {
  const rows = rowKeys ? rowKeys.map((k) => rowByKey(k)).filter((r): r is NonNullable<typeof r> => !!r) : PRICE_ROWS;
  return (
    <div className="price-block">
      <div className="table-wrap">
        <table className="price-table">
          <caption>
            Son güncelleme: {PRICES_UPDATED_LABEL} · {VAT_NOTE}
          </caption>
          <thead>
            <tr>
              <th scope="col">Ürün</th>
              {!compact && <th scope="col">Durum</th>}
              {TIERS.map((t) => (
                <th key={t} scope="col" className="num">
                  {t}
                </th>
              ))}
              <th scope="col">
                <span className="sr">Teklif</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.key}>
                <th scope="row">
                  {r.name}
                  <small>{r.spec}</small>
                </th>
                {!compact && <td>{r.condition}</td>}
                {r.tiers ? (
                  r.tiers.map((v, i) => (
                    <td key={i} className="num">
                      {tl(v)}
                    </td>
                  ))
                ) : (
                  <td className="num quote" colSpan={3}>
                    Ölçü ve adede göre teklif
                  </td>
                )}
                <td>
                  <a className="btn btn-sm btn-wa" href={waLink(`Merhaba, ${r.name} (${r.spec}) için fiyat almak istiyorum. Adet: … İl: …`)} data-evt="whatsapp_click" data-src="price-table" rel="noopener" target="_blank">
                    Fiyat Al
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="note">Adet kademeleri aynı sevkiyattaki toplam adede göredir. Nakliye ve KDV ayrıca hesaplanır; net fiyat için teklif alın.</p>
    </div>
  );
}

export function SpecTable({ specs }: { specs: [string, string][] }) {
  return (
    <div className="table-wrap">
      <table className="spec-table">
        <tbody>
          {specs.map(([k, v]) => (
            <tr key={k}>
              <th scope="row">{k}</th>
              <td>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function RelatedLinks({ title, links }: { title: string; links: [string, string][] }) {
  if (!links.length) return null;
  return (
    <section className="block related">
      <h2>{title}</h2>
      <ul className="chips">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function FinalCta({ message, title = "Palet ihtiyacınız için bugün teklif alın" }: { message: string; title?: string }) {
  return (
    <section className="final-cta">
      <div className="wrap">
        <h2>{title}</h2>
        <p>Ürün, adet ve teslimat ilini yazın; aynı gün güncel fiyatla dönüş yapalım. Mesai dışında sabah 08:30’da arıyoruz.</p>
        <CtaButtons message={message} source="final" />
        <p className="quiet">
          Ya da <Link href="/teklif-al/">teklif sihirbazını</Link> kullanın — 30 saniye sürer.
        </p>
      </div>
    </section>
  );
}
