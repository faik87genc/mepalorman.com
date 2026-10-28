// img/mepalroman_palet (N).jpeg -> public/img/pNN-{480,800,1280}.webp (1280x896 kırpım).
// Çalıştır: node scripts/build-photos.mjs
import sharp from "sharp";
import fs from "node:fs";

const W = 1280, H = 896;
// Ekran görüntüsü arayüzü / siyah bantlar kırpılır. extract: {left, top, width, height} (EXIF sonrası piksel).
const SPECS = {
  13: { extract: { left: 110, top: 210, width: 845, height: 1715 } }, // tarayıcı çubuğu ve ok düğmesi çıkarıldı
  2: { extract: { left: 0, top: 300, width: 720, height: 960 } }, // telefon durum çubuğu/siyah bant
  16: { trim: true, keepFrom: 0.44 }, // üstteki yazı bindirmesi kırpıldı
  18: { trim: true },
  14: { trim: true },
  17: { keepFrom: 0.3 }, // üstteki yazı bindirmesi kırpıldı
};
const pos = { 10: "centre" };

fs.mkdirSync("public/img", { recursive: true });
for (let n = 1; n <= 18; n++) {
  const src = `img/mepalroman_palet (${n}).jpeg`;
  const id = `p${String(n).padStart(2, "0")}`;
  const spec = SPECS[n] ?? {};
  let buf = await sharp(src).rotate().toBuffer();
  if (spec.extract) buf = await sharp(buf).extract(spec.extract).toBuffer();
  if (spec.trim) buf = await sharp(buf).trim({ background: "#000000", threshold: 25 }).toBuffer();
  if (spec.keepFrom) { const m = await sharp(buf).metadata(); const t = Math.round(m.height * spec.keepFrom); buf = await sharp(buf).extract({ left: 0, top: t, width: m.width, height: m.height - t }).toBuffer(); }
  for (const w of [480, 800, 1280]) {
    const h = Math.round((w * H) / W);
    await sharp(buf)
      .resize(w, h, { fit: "cover", position: pos[n] ?? sharp.strategy.attention })
      .webp({ quality: w === 480 ? 74 : 78 })
      .toFile(`public/img/${id}-${w}.webp`);
  }
  console.log(id, "ok");
}

// AVIF: mevcut WebP çıktılarından (veya yukarıdaki JPEG akışından sonra) -{480,800,1280}.avif üretir.
for (let n = 1; n <= 18; n++) {
  const id = `p${String(n).padStart(2, "0")}`;
  for (const w of [480, 800, 1280]) {
    const src = `public/img/${id}-${w}.webp`;
    if (!fs.existsSync(src)) continue;
    await sharp(src).avif({ quality: w === 480 ? 50 : 55, effort: 4 }).toFile(`public/img/${id}-${w}.avif`);
  }
  console.log(id, "avif ok");
}
