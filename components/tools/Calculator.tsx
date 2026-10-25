"use client";

import { useMemo, useState } from "react";
import { VEHICLES, packFloor } from "@/lib/pack";

const SIZES: [string, number, number][] = [
  ["80×120 (Euro)", 80, 120],
  ["100×120", 100, 120],
  ["114×114 (CP)", 114, 114],
  ["120×120", 120, 120],
  ["60×80 (yarım euro)", 60, 80],
  ["145×145", 145, 145],
];

export default function Calculator() {
  const [vehicle, setVehicle] = useState("40");
  const [size, setSize] = useState(0);
  const [customA, setCustomA] = useState(80);
  const [customB, setCustomB] = useState(120);
  const [loadH, setLoadH] = useState(120);
  const [perWeight, setPerWeight] = useState(600);
  const [stacked, setStacked] = useState(false);

  const v = VEHICLES.find((x) => x.key === vehicle)!;
  const isCustom = size === SIZES.length;
  const a = isCustom ? customA : SIZES[size][1];
  const b = isCustom ? customB : SIZES[size][2];

  const r = useMemo(() => packFloor(v.width, v.length, a, b), [v, a, b]);
  const layers = Math.max(1, Math.min(stacked ? Math.floor(v.height / Math.max(loadH, 1)) : 1, 3));
  const total = r.count * layers;
  const weight = total * perWeight;
  const overweight = weight > v.payload;
  const maxByWeight = perWeight > 0 ? Math.floor(v.payload / perWeight) : total;

  const scale = 600 / v.length;
  const svgH = v.width * scale;

  return (
    <div className="panel">
      <div className="form-row">
        <label className="f">
          Araç
          <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
            {VEHICLES.map((x) => (
              <option key={x.key} value={x.key}>
                {x.name}
              </option>
            ))}
          </select>
        </label>
        <label className="f">
          Palet ölçüsü (cm)
          <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
            {SIZES.map(([n], i) => (
              <option key={n} value={i}>
                {n}
              </option>
            ))}
            <option value={SIZES.length}>Özel ölçü…</option>
          </select>
        </label>
        {isCustom && (
          <>
            <label className="f">
              Genişlik (cm)
              <input type="number" min={20} max={230} value={customA} onChange={(e) => setCustomA(Number(e.target.value))} />
            </label>
            <label className="f">
              Uzunluk (cm)
              <input type="number" min={20} max={230} value={customB} onChange={(e) => setCustomB(Number(e.target.value))} />
            </label>
          </>
        )}
      </div>
      <div className="form-row">
        <label className="f">
          Palet başı toplam ağırlık (kg)
          <input type="number" min={0} value={perWeight} onChange={(e) => setPerWeight(Number(e.target.value))} />
        </label>
        <label className="f">
          Palet + yük yüksekliği (cm)
          <input type="number" min={20} value={loadH} onChange={(e) => setLoadH(Number(e.target.value))} />
        </label>
        <label className="check" style={{ alignSelf: "end" }}>
          <input type="checkbox" checked={stacked} onChange={(e) => setStacked(e.target.checked)} />
          <span>Üst üste istiflenebilir (çift kat)</span>
        </label>
      </div>

      <div className="result" aria-live="polite">
        <div className="big" data-testid="total">
          {total} palet
        </div>
        <p>
          {v.name}: zemin planına tek katta <strong>{r.count}</strong> palet sığar{layers > 1 ? `; ${layers} katta toplam ${total}` : ""}. Toplam yük yaklaşık <strong>{weight.toLocaleString("tr-TR")} kg</strong> (araç sınırı yaklaşık {v.payload.toLocaleString("tr-TR")} kg).
        </p>
        {overweight && (
          <p className="err" role="alert">
            Ağırlık sınırı aşılıyor: bu palet ağırlığıyla en fazla yaklaşık {maxByWeight} palet taşınabilir.
          </p>
        )}
        <svg className="cmp-svg" viewBox={`0 0 ${v.length * scale + 8} ${svgH + 8}`} role="img" aria-label={`${v.name} zemin planında ${r.count} palet yerleşimi`}>
          <rect x="4" y="4" width={v.length * scale} height={svgH} fill="#faf7f0" stroke="#26272b" strokeWidth="2" />
          {r.placements.map((p, i) => (
            <rect key={i} x={4 + p.y * scale} y={4 + p.x * scale} width={p.l * scale - 1} height={p.w * scale - 1} fill="#c9a877" stroke="#8f7048" strokeWidth="0.8" />
          ))}
        </svg>
        <p className="disclaimer">Üstten görünüm. Kapı tarafı sağda. Değerler tipik iç ölçülere göre yaklaşık hesaplanır; gerçek yükleme palet türüne, yük taşmasına ve yükleme şekline göre değişir. Kesin planlama için bize danışın.</p>
      </div>
      <div className="tool-actions">
        <a
          className="btn btn-wa"
          data-evt="calculator_use"
          data-src="calculator"
          rel="noopener"
          target="_blank"
          href={`https://wa.me/905368668307?text=${encodeURIComponent(`Merhaba, ${v.name} için ${SIZES[isCustom ? 0 : size][0]} palet fiyatı almak istiyorum. Yaklaşık ${total} palet. İl: …`)}`}
        >
          Bu miktar için fiyat al
        </a>
      </div>
    </div>
  );
}
