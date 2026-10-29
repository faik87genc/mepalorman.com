import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Search/preview/social bots and real browsers are never blocked (checked first).
const ALLOW = /googlebot|google-inspectiontool|googleother|adsbot-google|mediapartners-google|storebot-google|bingbot|bingpreview|msnbot|duckduckbot|yandex|baiduspider|applebot|slurp|facebookexternalhit|meta-externalagent|twitterbot|linkedinbot|whatsapp|telegrambot|slackbot|discordbot|pinterest|oai-searchbot|chatgpt-user|perplexity|claude-user|claude-searchbot|lighthouse|pagespeed|uptimerobot|pingdom/i;

// Generic bulk-scraping / site-copying tools. Deliberately excludes curl, Go-http-client
// and headless Chrome (monitors, Lighthouse and the owner's own tests use them).
const BLOCK = /httrack|webcopier|webzip|teleport ?pro|sitesnagger|offline ?explorer|website ?extractor|webstripper|scrapy|python-requests|python-httpx|python-urllib|aiohttp|httpie|libwww-perl|wget|mj12bot|dataforseobot|node-fetch|colly|java\/\d|apache-httpclient|okhttp|go-resty|scrapingbot|zgrab|masscan|nikto|sqlmap/i;

export function proxy(req: NextRequest) {
  const ua = req.headers.get("user-agent") ?? "";
  const p = req.nextUrl.pathname;
  if (p === "/robots.txt" || p === "/sitemap.xml" || p === "/llms.txt") return NextResponse.next();
  if (ua && !ALLOW.test(ua) && BLOCK.test(ua)) {
    return new NextResponse("Forbidden", { status: 403, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|img/).*)"],
};
