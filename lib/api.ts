import { site } from "@/lib/site";

// Minimal in-memory rate limiter (per server instance). Good enough as a first
// line of defence; put a shared store (Upstash/Redis) behind it for production scale.
const hits = new Map<string, number[]>();

export function rateLimited(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const arr = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (arr.length >= max) {
    hits.set(key, arr);
    return true;
  }
  arr.push(now);
  hits.set(key, arr);
  if (hits.size > 5000) for (const k of hits.keys()) if (!(hits.get(k) ?? []).some((t) => now - t < windowMs)) hits.delete(k);
  return false;
}

export function clientIp(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
}

/** Same-origin check for browser POSTs (blocks cross-site form posts). */
export function originOk(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true; // non-browser clients; rate limit still applies
  try {
    const host = new URL(origin).host;
    const own = new URL(site.baseUrl).host;
    return host === own || host === `www.${own}` || /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host);
  } catch {
    return false;
  }
}

/** Rejects oversized bodies early using Content-Length (browsers always send it). */
export function tooLarge(req: Request, maxBytes: number): boolean {
  const n = Number(req.headers.get("content-length"));
  return !Number.isFinite(n) || n > maxBytes;
}

export const clean = (v: unknown, max = 200): string => (typeof v === "string" ? v.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max) : "");

export const anthropicKey = () => process.env.ANTHROPIC_API_KEY;
export const anthropicModel = () => process.env.ANTHROPIC_MODEL || "claude-haiku-5-5";

export async function callClaude(body: Record<string, unknown>): Promise<{ text: string } | null> {
  const key = anthropicKey();
  if (!key) return null;
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
    body: JSON.stringify({ model: anthropicModel(), ...body }),
    signal: AbortSignal.timeout(25000),
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { content?: { type: string; text?: string }[] };
  const text = data.content?.filter((c) => c.type === "text").map((c) => c.text ?? "").join("\n") ?? "";
  return { text };
}
