import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Pure training-data crawlers are disallowed. Search/citation bots (OAI-SearchBot,
// ChatGPT-User, PerplexityBot, Claude-SearchBot, Claude-User, Googlebot, Bingbot) stay allowed
// so the site can still be cited in AI answers (see /llms.txt).
const TRAINING_BOTS = ["GPTBot", "CCBot", "Bytespider", "anthropic-ai", "ClaudeBot", "Google-Extended", "cohere-ai", "Omgilibot", "Diffbot", "ImagesiftBot", "Applebot-Extended", "meta-externalagent", "FacebookBot", "PetalBot", "Amazonbot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: TRAINING_BOTS, disallow: "/" },
      { userAgent: "*", allow: "/", disallow: ["/api/", "/tesekkurler/"] },
    ],
    sitemap: `${site.baseUrl}/sitemap.xml`,
  };
}
