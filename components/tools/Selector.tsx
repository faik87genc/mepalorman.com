"use client";

import Link from "next/link";
import { useState } from "react";

type Q = { id: string; title: string; opts: [string, string][] };

const QUESTIONS: Q[] = [
  {
    id: "load",
    title: "Taşıyacağınız yük hangisine yakın?",
    opts: [
      ["food", "Gıda / içecek / ilaç (hijyen önemli)"],
      ["chem", "Kimyasal / boya / bidon"],
      ["heavy", "Ağır sanayi ürünü / makine parçası"],
      ["light", "Hafif koli / e-ticaret"],
      ["white", "Beyaz eşya / büyük ebat"],
    ],
  },
  {
    id: "weight",
    title: "Palet başı yaklaşık yük ağırlığı?",
    opts: [
      ["lt500", "500 kg'a kadar"],
      ["500-1000", "500–1.000 kg"],
      ["gt1000", "1.000 kg üzeri"],
    ],
  },
  {
    id: "use",
    title: "Palet nerede ve nasıl kullanılacak?",
    opts: [
      ["export", "İhracat (yurt dışı sevkiyat)"],
      ["rack", "Raflı depo sistemi"],
      ["domestic", "Yurt içi tek yönlü sevkiyat"],
      ["reuse", "Tekrar tekrar döngüde kullanım"],
    ],
  },
];

type Rec = { name: string; href: string; why: string };

export function recommend(a: Record<string, string>): Rec[] {
  const out: Rec[] = [];
  if (a.use === "export") out.push({ name: "ISPM-15 ısıl işlemli ihracat paleti", href: "/urunler/ihracat-paleti/", why: "Yurt dışı sevkiyatta çoğu ülke ısıl işlem damgası (HT) arar; damgasız ahşap palet gümrükte sorun çıkarabilir." });
  if (a.load === "food" && a.use !== "export") out.push({ name: "Plastik palet", href: "/urunler/plastik-palet/", why: "Yıkanabilir, kokusuz ve kırıntı bırakmaz; hijyenin öncelikli olduğu gıda ve ilaç depoları için uygundur." });
  if (a.load === "chem") out.push({ name: "CP / 114×114 palet", href: "/urunler/cp-palet/", why: "Kimya sektöründe bidon ve IBC yükleri için yaygın kullanılan ölçüdür." });
  if (a.load === "white") out.push({ name: "100×120 veya 145×145 palet", href: "/urunler/100x120-palet/", why: "Geniş taban, büyük ebat ve ağır ürünlerde daha dengeli bir taşıma yüzeyi sağlar." });
  if (a.weight === "gt1000" || a.load === "heavy") out.push({ name: "100×120 endüstriyel palet", href: "/urunler/100x120-palet/", why: "1 tonun üzerindeki yüklerde daha geniş ve güçlü yapı gerekir; yük için özel ölçülü palet de tasarlanabilir.", });
  if (a.use === "rack") out.push({ name: "80x120 Euro palet (veya ağır hizmet plastik)", href: "/urunler/80x120-euro-palet/", why: "Raf sistemleri standart ölçü ve sağlam alt kirişe göre kurulur; raf yükü için tablolardaki değerlere bakın." });
  if (a.use === "reuse") out.push({ name: "Plastik palet", href: "/urunler/plastik-palet/", why: "Çok sayıda döngüde ahşaba göre uzun ömürlüdür; ilk maliyeti yüksek ama döngü başına maliyet düşebilir." });
  if (a.use === "domestic" && a.weight !== "gt1000") out.push({ name: "İkinci el euro palet veya sıfır standart palet", href: "/urunler/ikinci-el-palet/", why: "Tek yönlü yurt içi sevkiyatta ikinci el sağlam palet maliyeti düşürür." });
  if (!out.length) out.push({ name: "80x120 Euro palet", href: "/urunler/80x120-euro-palet/", why: "En yaygın standart ölçü; çoğu sektör ve araç için uygundur." });
  return out.filter((r, i, arr) => arr.findIndex((x) => x.href === r.href) === i).slice(0, 3);
}

export default function Selector() {
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<Record<string, string>>({});
  const done = step >= QUESTIONS.length;
  const q = QUESTIONS[step];
  return (
    <div className="panel">
      <div className="wiz-progress" aria-hidden="true">
        <span style={{ width: `${(Math.min(step, QUESTIONS.length) / QUESTIONS.length) * 100}%` }} />
      </div>
      {!done ? (
        <>
          <h2 style={{ fontSize: "1.3rem" }}>
            {step + 1}/{QUESTIONS.length} · {q.title}
          </h2>
          <div className="opts">
            {q.opts.map(([v, label]) => (
              <button
                key={v}
                type="button"
                className="opt"
                aria-pressed={ans[q.id] === v}
                onClick={() => {
                  setAns({ ...ans, [q.id]: v });
                  setStep(step + 1);
                }}
              >
                {label}
              </button>
            ))}
          </div>
          {step > 0 && (
            <button type="button" className="btn btn-sm btn-ghost" onClick={() => setStep(step - 1)}>
              ← Geri
            </button>
          )}
        </>
      ) : (
        <div aria-live="polite">
          <h2 style={{ fontSize: "1.3rem" }}>Size önerdiğimiz paletler</h2>
          {recommend(ans).map((r) => (
            <div key={r.href} className="result">
              <h3 style={{ marginBottom: ".3rem" }}>
                <Link prefetch={false} href={r.href}>{r.name}</Link>
              </h3>
              <p style={{ margin: 0 }}>{r.why}</p>
            </div>
          ))}
          <div className="tool-actions">
            <Link prefetch={false} className="btn btn-gold" href="/teklif-al/" data-evt="selector_complete">
              Bu palet için teklif al
            </Link>
            <button type="button" className="btn btn-ghost" onClick={() => { setStep(0); setAns({}); }}>
              Yeniden başla
            </button>
          </div>
          <p className="disclaimer">Öneri genel bilgiye dayanır; özel yükler için bize danışın.</p>
        </div>
      )}
    </div>
  );
}
