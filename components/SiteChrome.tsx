import Link from "next/link";
import { Logo } from "@/components/Logo";
import { footerGroups, mainNav } from "@/lib/data/nav";
import { site, telHref, waLink, warehouseAddress, officeAddress } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link href="/" className="brand" aria-label={`${site.name} ana sayfa`}>
          <Logo />
        </Link>
        <nav className="nav-desktop" aria-label="Ana menü">
          {mainNav.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <a className="head-phone" href={telHref} data-evt="tel_click" data-src="header">
          <span className="head-phone-label">Hemen ara</span>
          <strong>{site.phone}</strong>
        </a>
        <details className="nav-mobile">
          <summary aria-label="Menüyü aç">
            <span className="burger" aria-hidden="true" />
          </summary>
          <nav aria-label="Mobil menü">
            {mainNav.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
            <Link href="/teklif-al/" className="btn btn-gold">
              Teklif Al
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Logo light />
            <p>{site.tagline}</p>
            <p className="foot-contact">
              <a href={telHref} data-evt="tel_click" data-src="footer">{site.phone}</a>
              <br />
              <a href={waLink()} data-evt="whatsapp_click" data-src="footer" rel="noopener" target="_blank">WhatsApp ile yazın</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          {footerGroups.map((g) => (
            <nav key={g.title} aria-label={g.title}>
              <h2>{g.title}</h2>
              <ul>
                {g.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="foot-addr">
          <p>
            <strong>{site.warehouse.label}:</strong> {warehouseAddress} · <a href={site.mapsUrl} rel="noopener" target="_blank">Yol tarifi al</a>
          </p>
          <p>
            <strong>{site.office.label}:</strong> {officeAddress}
          </p>
          <p>Çalışma saatleri: {site.hours}</p>
        </div>
        <div className="foot-legal">
          <p>
            © {new Date().getFullYear()} {site.legalName} · {site.taxOffice} V.D. {site.taxNo} · MERSİS {site.mersis} · Ticaret Sicil No {site.sicil}
          </p>
          <p>
            <button type="button" className="linklike" data-cookie-open>
              Çerez tercihleri
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}

/** Fixed bottom bar on phones: one tap to call or WhatsApp. */
export function MobileBar() {
  return (
    <div className="mobile-bar" role="group" aria-label="Hızlı iletişim">
      <a href={telHref} className="mb-call" data-evt="tel_click" data-src="mobile-bar">
        Ara
      </a>
      <a href={waLink("Merhaba, palet için fiyat almak istiyorum. Ürün: … Adet: … İl: …")} className="mb-wa" data-evt="whatsapp_click" data-src="mobile-bar" rel="noopener" target="_blank">
        WhatsApp
      </a>
    </div>
  );
}
