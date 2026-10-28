import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icons";
import MobileNav from "@/components/MobileNav";
import { footerGroups, mainNav } from "@/lib/data/nav";
import { site, telHref, waLink, warehouseAddress, officeAddress } from "@/lib/site";

export function SiteHeader() {
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-in">
          <a href={telHref} data-evt="tel_click" data-src="topbar">
            <Icon name="phone" size={14} /> {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="topbar-mail">
            <Icon name="mail" size={14} /> {site.email}
          </a>
          <a href={waLink()} className="topbar-wa" data-evt="whatsapp_click" data-src="topbar" rel="noopener" target="_blank">
            <Icon name="chat" size={14} /> WhatsApp’tan yazın
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="wrap bar">
          <Link prefetch={false} href="/" className="brand">
            <Logo />
          </Link>
          <nav className="nav-desktop" aria-label="Ana menü">
            {mainNav.map(([label, href]) => (
              <Link prefetch={false} key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <Link prefetch={false} href="/teklif-al/" className="btn btn-green btn-sm bar-cta">
            Teklif Al
          </Link>
          <MobileNav>
            <nav aria-label="Mobil menü">
              {mainNav.map(([label, href]) => (
                <Link prefetch={false} key={href} href={href}>
                  {label}
                </Link>
              ))}
              <div className="nav-mobile-actions">
                <a className="btn btn-dark" href={telHref} data-evt="tel_click" data-src="menu">
                  <Icon name="phone" size={18} /> Ara
                </a>
                <a className="btn btn-green" href={waLink()} data-evt="whatsapp_click" data-src="menu" rel="noopener" target="_blank">
                  <Icon name="chat" size={18} /> WhatsApp
                </a>
                <Link prefetch={false} href="/teklif-al/" className="btn btn-gold">
                  Teklif Al
                </Link>
              </div>
            </nav>
          </MobileNav>
        </div>
      </header>
    </>
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
                    <Link prefetch={false} href={href}>{label}</Link>
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

/** Fixed bottom bar on phones (call / WhatsApp) and a round WhatsApp button on desktop. */
export function MobileBar() {
  const msg = "Merhaba, palet için fiyat almak istiyorum. Ürün: … Adet: … İl: …";
  return (
    <>
      <div className="mobile-bar" role="group" aria-label="Hızlı iletişim">
        <a href={telHref} className="mb-call" data-evt="tel_click" data-src="mobile-bar">
          Ara
        </a>
        <a href={waLink(msg)} className="mb-wa" data-evt="whatsapp_click" data-src="mobile-bar" rel="noopener" target="_blank">
          WhatsApp
        </a>
      </div>
      <a href={waLink(msg)} className="wa-float" aria-label="WhatsApp ile yazın (yeni sekmede açılır)" data-evt="whatsapp_click" data-src="float" rel="noopener" target="_blank">
        <Icon name="chat" size={26} />
      </a>
    </>
  );
}
