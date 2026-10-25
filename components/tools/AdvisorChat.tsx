"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const STARTERS = ["Gıda ürünü sevk ediyorum, palet başı 900 kg, Almanya’ya ihracat", "Raflı depoda kullanacağım palet önerir misiniz?", "Hurda paletlerimi satmak istiyorum"];

/** Turns "/urunler/x/" style paths in a reply into links. */
function Linkified({ text }: { text: string }) {
  const parts = text.split(/(\/(?:urunler|hizmetler|araclar|rehber|bolge)\/[a-z0-9-]+\/|\/[a-z0-9-]+-fiyatlari\/)/g);
  return (
    <>
      {parts.map((p, i) => (/^\/[a-z0-9-/]+\/$/.test(p) ? <a key={i} href={p}>{p}</a> : <span key={i}>{p}</span>))}
    </>
  );
}

export default function AdvisorChat() {
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "assistant", content: "Merhaba! Ne taşıyacaksınız, palet başı ağırlık ve kullanım yeri (yurt içi / ihracat / raf) nedir?" }]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [wa, setWa] = useState("https://wa.me/905368668307");
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => {
    end.current?.scrollIntoView({ block: "nearest" });
  }, [msgs, busy]);

  async function send(text: string) {
    const t = text.trim();
    if (!t || busy) return;
    const next = [...msgs, { role: "user" as const, content: t }];
    setMsgs(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/danisman/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next.slice(1) }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Hata");
      setMsgs([...next, { role: "assistant", content: data.reply }]);
      if (data.whatsapp) setWa(data.whatsapp);
    } catch (e) {
      setMsgs([...next, { role: "assistant", content: e instanceof Error ? e.message : "Şu anda yanıt veremiyorum. Lütfen WhatsApp’tan yazın." }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <div className="chat">
        <div className="chat-log" role="log" aria-live="polite">
          {msgs.map((m, i) => (
            <div key={i} className={`msg ${m.role === "user" ? "user" : "bot"}`}>
              <Linkified text={m.content} />
            </div>
          ))}
          {busy && <div className="msg bot">Yazıyor…</div>}
          <div ref={end} />
        </div>
        <form
          className="chat-form"
          onSubmit={(e) => {
            e.preventDefault();
            void send(input);
          }}
        >
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Sorunuzu yazın…" maxLength={600} aria-label="Mesajınız" />
          <button type="submit" className="btn btn-gold" disabled={busy}>
            Gönder
          </button>
        </form>
      </div>
      {msgs.length === 1 && (
        <ul className="chips" style={{ marginTop: ".8rem" }}>
          {STARTERS.map((s) => (
            <li key={s}>
              <button type="button" className="linklike" onClick={() => void send(s)}>
                {s}
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="tool-actions">
        <a className="btn btn-wa" href={wa} data-evt="whatsapp_click" data-src="advisor" rel="noopener" target="_blank">
          WhatsApp’tan teklif iste
        </a>
      </div>
      <p className="disclaimer">Yanıtlar bilgilendirme amaçlıdır; kesin fiyat ve teslim süresi teklifte bildirilir.</p>
    </div>
  );
}
