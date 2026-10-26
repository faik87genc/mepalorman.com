import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import "./theme.css";
import { site } from "@/lib/site";
import { SiteHeader, SiteFooter, MobileBar } from "@/components/SiteChrome";
import CookieConsent from "@/components/CookieConsent";
import { JsonLd } from "@/components/Content";
import { localBusinessLd, orgLd, websiteLd } from "@/lib/seo";

const archivo = Archivo({ subsets: ["latin", "latin-ext"], display: "swap", variable: "--font-archivo", preload: true });

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: { default: `${site.name} | Palet Satışı Gebze – Kocaeli – İstanbul`, template: "%s" },
  description: site.description,
  applicationName: site.name,
  openGraph: { type: "website", locale: "tr_TR", siteName: site.name },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#1b4a2f", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={archivo.variable}>
      <body>
        <a className="skip" href="#icerik">
          İçeriğe geç
        </a>
        <SiteHeader />
        <main id="icerik" className="main">
          {children}
        </main>
        <SiteFooter />
        <MobileBar />
        <CookieConsent />
        <JsonLd data={[orgLd(), localBusinessLd(), websiteLd()]} />
      </body>
    </html>
  );
}
