import type { NextConfig } from "next";

// Security headers. Full CSP is enforced. Nonce/strict-dynamic needs dynamic rendering
// (Next docs: content-security-policy), which would drop static/ISR caching, and SRI hashing is
// experimental; so script/style keep 'unsafe-inline' (Next inline bootstrap, inlineCss, JSON-LD)
// while everything else (origins, frames, objects, forms, base) is locked down.
// GA4 (googletagmanager) is loaded only after cookie consent.
const isDev = process.env.NODE_ENV === "development";

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com",
  "font-src 'self' data:",
  `connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com${isDev ? " ws: wss:" : ""}`,
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=(), interest-cohort=(), serial=(), bluetooth=(), midi=(), display-capture=()" },
];

// Old WordPress URLs (mepalorman.com) → new pages. Fill the exact list from the
// old sitemap / Search Console before launch (see docs/YAYIN-LISTESI.md).
const LEGACY_REDIRECTS: [string, string][] = [
  ["ahsap-palet", "/ahsap-palet-fiyatlari/"],
  ["epal-palet", "/urunler/epal-palet/"],
  ["turpal-palet", "/urunler/turpal-palet/"],
  ["euro-palet", "/urunler/80x120-euro-palet/"],
  ["plastik-palet", "/urunler/plastik-palet/"],
  ["2-el-palet", "/urunler/ikinci-el-palet/"],
  ["ikinci-el-palet", "/urunler/ikinci-el-palet/"],
  ["blog", "/rehber/"],
  ["hakkimizda-2", "/hakkimizda/"],
  ["iletisim-2", "/iletisim/"],
  ["contact", "/iletisim/"],
  ["about", "/hakkimizda/"],
  ["about-us", "/hakkimizda/"],
  ["kurumsal", "/hakkimizda/"],
  ["urunlerimiz", "/urunler/"],
  ["products", "/urunler/"],
  ["hizmetlerimiz", "/hizmetler/"],
  ["services", "/hizmetler/"],
  ["referanslar-2", "/referanslar/"],
  ["fiyat-listesi", "/palet-fiyatlari/"],
  ["fiyatlar", "/palet-fiyatlari/"],
  ["palet-fiyat", "/palet-fiyatlari/"],
  ["teklif", "/teklif-al/"],
  ["teklif-iste", "/teklif-al/"],
  ["sss-2", "/sss/"],
  ["galeri-2", "/galeri/"],
  ["blog/:path*", "/rehber/"],
  ["category/:path*", "/rehber/"],
  ["tag/:path*", "/rehber/"],
  ["urun-kategori/:path*", "/urunler/"],
  ["product-category/:path*", "/urunler/"],
  ["product/:path*", "/urunler/"],
  ["urun/:path*", "/urunler/"],
  ["author/:path*", "/rehber/"],
  ["page/:path*", "/"],
  ["feed", "/rehber/"],
  ["comments/feed", "/rehber/"],
  ["wp-login.php", "/"],
  ["wp-admin", "/"],
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  trailingSlash: true,
  experimental: { inlineCss: true },
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/api/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }, { key: "Cache-Control", value: "no-store" }] },
      { source: "/img/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }] },
      { source: "/:all*(svg|png|jpg|jpeg|webp|avif|woff2|ico)", headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }] },
    ];
  },
  async redirects() {
    return LEGACY_REDIRECTS.flatMap(([from, to]) =>
      from.includes(":path*")
        ? [{ source: `/${from}`, destination: to, permanent: true }]
        : [
            { source: `/${from}`, destination: to, permanent: true },
            { source: `/${from}/`, destination: to, permanent: true },
          ],
    );
  },
};

export default nextConfig;
