"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PRICE_ROWS, PRICES_UPDATED_LABEL, TIERS, tl } from "@/lib/data/prices";

type Cond = "all" | "Sıfır" | "İkinci el";

const KEYS = PRICE_ROWS.map((r) => ({ key: r.key, label: r.name, spec: r.spec, tiers: r.tiers, condition: r.condition }));
const STEPS = 5;

function tierIndex(q: number) {
  return q <= 50 ? 0 : q <= 200 ? 1 : 2;
}

export default function Wizard() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [cond, setCond] = useState<Cond>("all");
  const [rowKey, setRowKey] = useState("");
  const [qty, setQty] = useState("");
  const [city, setCity] = useState("");
  const [ht, setHt] = useState<"yes" | "no" | "">("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [hp, setHp] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const base = KEYS.find((k) => k.key === rowKey);
  const effective = ht === "yes" && base?.condition === "Sıfır" && base.key.startsWith("ahsap") ? KEYS.find((k) => k.key === "ihracat-ispm15") ?? base : base;
  const n = Number(qty) || 0;
  const unit = effective?.tiers && n > 0 ? effective.tiers[tierIndex(n)] : undefined;
  const list = KEYS.filter((k) => cond === "all" || k.condition === cond);
  const productLabel = effective ? `${effective.label} (${effective.spec})` : "";
  const message = `Merhaba, ${productLabel} için fiyat almak istiyorum. Adet: ${n || "…"}. İl: ${city || "…"}.${unit ? ` (Sitedeki yaklaşık birim fiyat: ${tl(unit)} + KDV)` : ""}`;

  function next() {
    setError("");
    if (step === 0 && !rowKey) return setError("Lütfen bir ürün seçin.");
    if (step === 1 && !(n > 0)) return setError("Lütfen adedi girin.");
    if (step === 2 && city.trim().length < 2) return setError("Lütfen teslimat ilini/ilçesini yazın.");
    setStep(step + 1);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim() || phone.replace(/\D/g, "").length < 10) return setError("Lütfen adınızı ve geçerli bir telefon numarası girin.");
    if (!consent) return setError("Devam etmek için KVKK onayı gereklidir.");
    setBusy(true);
    try {
      const res = await fetch("/api/teklif/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: productLabel, quantity: n, city, name, phone, consent: true, website: hp, source: "wizard", note: ht === "yes" ? "Isıl işlem (ISPM-15) gerekli" : "", estimate: unit ? `${unit} TL/adet + KDV` : "" }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || "Gönderilemedi");
      router.push("/tesekkurler/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gönderilemedi, lütfen WhatsApp’tan yazın.");
      setBusy(false);
    }
  }

  return (
    <div className="panel">
      <div className="wiz-progress" aria-hidden="true">
        <span style={{ width: `${(step / STEPS) * 100}%` }} />
      </div>
      {step === 0 && (
        <>
          <h2 style={{ fontSize: "1.3rem" }}>1/{STEPS} · Hangi paleti arıyorsunuz?</h2>
          <div className="cta-row" role="group" aria-label="Durum">
            {(["all", "Sıfır", "İkinci el"] as Cond[]).map((c) => (
              <button key={c} type="button" className="btn btn-sm btn-ghost" aria-pressed={cond === c} onClick={() => setCond(c)}>
                {c === "all" ? "Tümü" : c}
              </button>
            ))}
          </div>
          <div className="opts">
            {list.map((k) => (
              <button key={k.key} type="button" className="opt" aria-pressed={rowKey === k.key} onClick={() => setRowKey(k.key)}>
                {k.label}
                <small>{k.spec}</small>
              </button>
            ))}
          </div>
        </>
      )}
      {step === 1 && (
        <>
          <h2 style={{ fontSize: "1.3rem" }}>2/{STEPS} · Kaç adet?</h2>
          <label className="f">
            Adet
            <input type="number" inputMode="numeric" min={1} value={qty} onChange={(e) => setQty(e.target.value)} placeholder="ör. 200" autoFocus />
            <small>Adet kademeleri: {TIERS.join(" · ")}</small>
          </label>
        </>
      )}
      {step === 2 && (
        <>
          <h2 style={{ fontSize: "1.3rem" }}>3/{STEPS} · Teslimat yeri</h2>
          <label className="f">
            İl / ilçe
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="ör. Gebze, Tuzla, Kartal" autoComplete="address-level2" autoFocus />
          </label>
        </>
      )}
      {step === 3 && (
        <>
          <h2 style={{ fontSize: "1.3rem" }}>4/{STEPS} · Isıl işlem (ihracat damgası) gerekli mi?</h2>
          <div className="opts">
            <button type="button" className="opt" aria-pressed={ht === "yes"} onClick={() => setHt("yes")}>
              Evet, yurt dışına gidecek
              <small>ISPM-15 / HT damgalı palet</small>
            </button>
            <button type="button" className="opt" aria-pressed={ht === "no"} onClick={() => setHt("no")}>
              Hayır, yurt içi
            </button>
          </div>
        </>
      )}
      {step === 4 && (
        <form onSubmit={submit} className="form" noValidate>
          <h2 style={{ fontSize: "1.3rem" }}>5/{STEPS} · Talebiniz hazır</h2>
          <div className="result" aria-live="polite">
            <strong>{productLabel}</strong>
            <br />
            {n} adet · {city}
            {unit ? (
              <>
                <div className="big">≈ {tl(unit)} / adet</div>
                <p style={{ margin: 0 }}>
                  KDV hariç, nakliye hariç, yaklaşık birim fiyat ({PRICES_UPDATED_LABEL} tarihli liste). Toplam yaklaşık <strong>{tl(unit * n)}</strong>. Net fiyat ve teslim süresi teklifte bildirilir.
                </p>
              </>
            ) : (
              <p style={{ margin: ".5rem 0 0" }}>Güncel fiyatı en kısa sürede veriyoruz; bilgilerinizi bırakın veya WhatsApp&apos;tan yazın, size dönelim.</p>
            )}
          </div>
          <div className="form-row">
            <label className="f">
              Adınız
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
            </label>
            <label className="f">
              Telefon
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" inputMode="tel" placeholder="05xx xxx xx xx" required />
            </label>
          </div>
          <label className="hp" aria-hidden="true">
            Web sitesi
            <input type="text" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
          </label>
          <label className="check">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
            <span>
              <a href="/kvkk/" target="_blank" rel="noopener">KVKK aydınlatma metnini</a> okudum; bilgilerimin teklif amacıyla işlenmesini kabul ediyorum.
            </span>
          </label>
          {error && (
            <p className="err" role="alert">
              {error}
            </p>
          )}
          <div className="tool-actions">
            <button type="submit" className="btn btn-gold" disabled={busy} data-evt="wizard_complete" data-src="wizard">
              {busy ? "Gönderiliyor…" : "Teklif Talebini Gönder"}
            </button>
            <a className="btn btn-wa" href={`https://wa.me/905368668307?text=${encodeURIComponent(message)}`} data-evt="whatsapp_click" data-src="wizard" rel="noopener" target="_blank">
              WhatsApp’tan Gönder
            </a>
          </div>
        </form>
      )}
      {step < 4 && error && (
        <p className="err" role="alert">
          {error}
        </p>
      )}
      <div className="tool-actions">
        {step > 0 && (
          <button type="button" className="btn btn-ghost" onClick={() => { setError(""); setStep(step - 1); }}>
            ← Geri
          </button>
        )}
        {step < 3 && (
          <button type="button" className="btn btn-gold" onClick={next}>
            Devam
          </button>
        )}
        {step === 3 && (
          <button type="button" className="btn btn-gold" onClick={() => (ht ? setStep(4) : setError("Lütfen bir seçim yapın."))}>
            Fiyatı Göster
          </button>
        )}
      </div>
    </div>
  );
}
