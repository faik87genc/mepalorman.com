// Derleme sonrası denetim: meta uzunlukları, yinelenen başlık, ince içerik, kırık iç linkler.
// Çalıştır: npx next build && node scripts/audit-build.mjs
import fs from "node:fs";
import path from "node:path";

const root = ".next/server/app";
const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (p.endsWith(".html")) files.push(p);
  }
})(root);

const rel = (f) => "/" + path.relative(root, f).split(path.sep).join("/").replace(/\.html$/, "");
const routes = new Set(files.map((f) => rel(f).replace(/^\/index$/, "")));
routes.add("");
const dec = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"');

const meta = [];
const thin = [];
const bad = new Map();
const titles = new Map();
for (const f of files) {
  const r = rel(f);
  if (/not-found|\/_/.test(r)) continue;
  const h = fs.readFileSync(f, "utf8");
  const t = dec((h.match(/<title>([^<]*)<\/title>/) || [])[1] || "");
  const d = dec((h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "");
  if (t.length > 60) meta.push(`title ${t.length}: ${r}`);
  if (d.length > 155) meta.push(`desc ${d.length}: ${r}`);
  if (titles.has(t)) meta.push(`yinelenen title: ${r} = ${titles.get(t)}`);
  titles.set(t, r);
  const words = h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  if (/\/(rehber|urunler|hizmetler)\//.test(r) && words < 800) thin.push(`${r}: ${words} kelime`);
  for (const m of h.matchAll(/href="(\/[^"#?]*)"/g)) {
    const l = m[1].replace(/\/$/, "");
    if (/^\/(img|assets|_next|api)/.test(l) || /\.(webp|png|svg|ico|txt|xml)$/.test(l)) continue;
    if (!routes.has(l)) bad.set(l, (bad.get(l) || []).concat(r).slice(0, 2));
  }
}
console.log("sayfa:", files.length);
console.log("meta sorunları:", meta.length ? meta : "yok");
console.log("ince içerik (<800 kelime):", thin.length ? thin : "yok");
console.log("kırık iç link:", bad.size ? [...bad] : "yok");
