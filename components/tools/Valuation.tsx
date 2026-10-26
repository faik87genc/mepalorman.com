"use client";

import { useState } from "react";

type Result = { type: string; count: number | null; grade: string; reason: string; confidence: string };

/** Resizes to <=1280px JPEG via canvas: smaller upload and EXIF (incl. GPS) is dropped. */
async function shrink(file: File): Promise<string> {
  const bmp = await createImageBitmap(file);
  const k = Math.min(1, 1280 / Math.max(bmp.width, bmp.height));
  const c = document.createElement("canvas");
  c.width = Math.round(bmp.width * k);
  c.height = Math.round(bmp.height * k);
  c.getContext("2d")!.drawImage(bmp, 0, 0, c.width, c.height);
  return c.toDataURL("image/jpeg", 0.8);
}

export default function Valuation() {
  const [preview, setPreview] = useState("");
  const [city, setCity] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [unavailable, setUnavailable] = useState(false);
  const [wa, setWa] = useState("https://wa.me/905368668307");

  async function onFile(f: File | undefined) {
    setError("");
    setResult(null);
    setUnavailable(false);
    if (!f) return;
    if (!/^image\/(jpeg|png|webp)$/.test(f.type) || f.size > 15_000_000) return setError("JPG, PNG veya WebP biçiminde, 15 MB’tan küçük bir fotoğraf seçin.");
    try {
      setPreview(await shrink(f));
    } catch {
      setError("Fotoğraf okunamadı.");
    }
  }

  async function run() {
    if (!preview) return setError("Önce bir fotoğraf seçin.");
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/degerleme/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ image: preview, city }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Hata");
      if (data.whatsapp) setWa(data.whatsapp);
      if (data.available === false) setUnavailable(true);
      else if (data.error) setError(data.error);
      else setResult(data.result);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Değerleme yapılamadı.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="panel">
      <label className="f">
        Palet yığınının fotoğrafı
        <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => void onFile(e.target.files?.[0])} />
        <small>Fotoğraf yeniden boyutlandırılır ve konum bilgisi (EXIF) silinerek gönderilir.</small>
      </label>
      {preview && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={preview} alt="Seçilen palet fotoğrafı önizlemesi" style={{ maxHeight: 260, borderRadius: 12, margin: "1rem 0" }} />
      )}
      <label className="f">
        Konum (il / ilçe)
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="ör. Gebze" autoComplete="address-level2" />
      </label>
      {error && (
        <p className="err" role="alert">
          {error}
        </p>
      )}
      <div className="tool-actions">
        <button type="button" className="btn btn-gold" onClick={run} disabled={busy || !preview} data-evt="valuation_use" data-src="valuation">
          {busy ? "İnceleniyor…" : "Ön Değerlemeyi Başlat"}
        </button>
      </div>
      {result && (
        <div className="result" aria-live="polite">
          <div className="big">Kalite sınıfı: {result.grade}</div>
          <p>
            <strong>Palet tipi:</strong> {result.type}
            {result.count ? <> · <strong>Yaklaşık adet:</strong> {result.count}</> : null} · <strong>Güven:</strong> {result.confidence}
          </p>
          <p>{result.reason}</p>
          <p className="disclaimer">Bu bir ön değerlemedir. Kesin fiyat, yerinde kontrolle verilir.</p>
        </div>
      )}
      {unavailable && (
        <div className="result">
          <p>Otomatik ön değerleme şu anda devre dışı. Fotoğrafı WhatsApp’tan gönderin, en kısa sürede size dönelim.</p>
        </div>
      )}
      {(result || unavailable) && (
        <div className="tool-actions">
          <a className="btn btn-wa" href={wa} data-evt="whatsapp_click" data-src="valuation" rel="noopener" target="_blank">
            WhatsApp’tan fotoğrafı gönder
          </a>
        </div>
      )}
    </div>
  );
}
