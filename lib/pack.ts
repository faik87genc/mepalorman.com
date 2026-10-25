// Container / truck loading: guillotine-cut packing of rectangular pallets on a
// floor plan, solved exactly on a 5 cm grid (fast enough for the browser).

export type Vehicle = { key: string; name: string; length: number; width: number; height: number; payload: number };

// Internal dimensions in cm (typical values) and approximate max payload in kg.
export const VEHICLES: Vehicle[] = [
  { key: "20", name: "20' konteyner", length: 589, width: 235, height: 239, payload: 28000 },
  { key: "40", name: "40' konteyner", length: 1203, width: 235, height: 239, payload: 26500 },
  { key: "40hc", name: "40' HC konteyner", length: 1203, width: 235, height: 269, payload: 26300 },
  { key: "tir", name: "13,6 m tır (standart)", length: 1360, width: 245, height: 270, payload: 24000 },
];

export type Placement = { x: number; y: number; w: number; l: number };

const U = 5;

export function packFloor(widthCm: number, lengthCm: number, a: number, b: number): { count: number; placements: Placement[] } {
  const W = Math.floor(widthCm / U);
  const L = Math.floor(lengthCm / U);
  const pa = Math.ceil(a / U);
  const pb = Math.ceil(b / U);
  if (W <= 0 || L <= 0 || pa <= 0 || pb <= 0) return { count: 0, placements: [] };
  const f: Uint16Array[] = Array.from({ length: W + 1 }, () => new Uint16Array(L + 1));
  // choice: 0 none, 1 pallet (pa across, pb along), 2 pallet rotated, 3 vertical split (i), 4 horizontal split (j)
  const kind: Uint8Array[] = Array.from({ length: W + 1 }, () => new Uint8Array(L + 1));
  const cut: Uint16Array[] = Array.from({ length: W + 1 }, () => new Uint16Array(L + 1));
  for (let x = 1; x <= W; x++) {
    for (let y = 1; y <= L; y++) {
      let best = 0;
      let k = 0;
      let c = 0;
      if (x >= pa && y >= pb) {
        best = 1;
        k = 1;
      }
      if (best === 0 && x >= pb && y >= pa) {
        best = 1;
        k = 2;
      }
      for (let i = 1; i <= x >> 1; i++) {
        const v = f[i][y] + f[x - i][y];
        if (v > best) {
          best = v;
          k = 3;
          c = i;
        }
      }
      for (let j = 1; j <= y >> 1; j++) {
        const v = f[x][j] + f[x][y - j];
        if (v > best) {
          best = v;
          k = 4;
          c = j;
        }
      }
      f[x][y] = best;
      kind[x][y] = k;
      cut[x][y] = c;
    }
  }
  const out: Placement[] = [];
  const walk = (x0: number, y0: number, x: number, y: number) => {
    const k = kind[x][y];
    if (!k) return;
    if (k === 1) out.push({ x: x0 * U, y: y0 * U, w: a, l: b });
    else if (k === 2) out.push({ x: x0 * U, y: y0 * U, w: b, l: a });
    else if (k === 3) {
      const i = cut[x][y];
      walk(x0, y0, i, y);
      walk(x0 + i, y0, x - i, y);
    } else {
      const j = cut[x][y];
      walk(x0, y0, x, j);
      walk(x0, y0 + j, x, y - j);
    }
  };
  walk(0, 0, W, L);
  return { count: f[W][L], placements: out };
}
