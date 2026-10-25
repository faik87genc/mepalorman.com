import type { ArtKind } from "@/lib/types";

// Original vector illustrations (no stock or third-party photos). Real depot
// photographs replace these as the owner supplies them.

const WOOD = "#C9A877";
const WOOD_D = "#A98756";
const PLASTIC = "#47566A";
const PLASTIC_D = "#2F3B4A";
const INK = "#26272B";

type Tone = "wood" | "plastic" | "old";

function Pallet({ x, y, w = 120, tone = "wood" }: { x: number; y: number; w?: number; tone?: Tone }) {
  const c = tone === "plastic" ? PLASTIC : tone === "old" ? "#B8956A" : WOOD;
  const d = tone === "plastic" ? PLASTIC_D : tone === "old" ? "#8F7048" : WOOD_D;
  const h = w * 0.22;
  const b = h * 0.28;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="0" y="0" width={w} height={b} rx="1.5" fill={c} stroke={d} strokeWidth="1" />
      {[0.04, 0.44, 0.84].map((p) => (
        <rect key={p} x={w * p} y={b} width={w * 0.12} height={h - 2 * b} fill={d} />
      ))}
      <rect x="0" y={h - b} width={w} height={b} rx="1.5" fill={c} stroke={d} strokeWidth="1" />
      {[0.22, 0.5, 0.78].map((p) => (
        <line key={p} x1={w * p} y1="0" x2={w * p} y2={b} stroke={d} strokeWidth="0.8" />
      ))}
    </g>
  );
}

function PalletStack({ n = 4, x = 140, y = 190, w = 130, tone = "wood" as Tone }) {
  const h = w * 0.22;
  return (
    <g>
      <rect x={x - 20} y={y + h - 2} width={w + 40} height="6" rx="3" fill={INK} opacity="0.08" />
      {Array.from({ length: n }, (_, i) => (
        <Pallet key={i} x={x} y={y - i * (h + 1)} w={w} tone={tone} />
      ))}
    </g>
  );
}

function Crate({ x = 130, y = 80, w = 150, h = 120 }) {
  const slats = 5;
  return (
    <g stroke={WOOD_D} strokeWidth="1.2">
      <rect x={x} y={y} width={w} height={h} fill={WOOD} />
      {Array.from({ length: slats }, (_, i) => (
        <rect key={i} x={x + 8} y={y + 8 + i * ((h - 16) / slats)} width={w - 16} height={(h - 16) / slats - 4} fill="#D9BE90" />
      ))}
      <rect x={x} y={y} width="14" height={h} fill={WOOD_D} />
      <rect x={x + w - 14} y={y} width="14" height={h} fill={WOOD_D} />
      <rect x={x} y={y + h} width={w} height="12" fill={WOOD_D} />
    </g>
  );
}

function Pin() {
  return (
    <g>
      <circle cx="200" cy="150" r="70" fill="#B49A74" opacity="0.15" />
      <circle cx="200" cy="150" r="42" fill="#B49A74" opacity="0.18" />
      <path d="M200 70c-24 0-42 18-42 42 0 32 42 78 42 78s42-46 42-78c0-24-18-42-42-42z" fill={INK} />
      <circle cx="200" cy="112" r="15" fill="#B49A74" />
      <path d="M80 215h240" stroke="#B49A74" strokeWidth="2" strokeDasharray="3 8" strokeLinecap="round" />
    </g>
  );
}

function Truck() {
  return (
    <g>
      <rect x="40" y="90" width="230" height="110" rx="4" fill="#F8F3E8" stroke={INK} strokeWidth="2" />
      {[0, 1, 2, 3, 4].map((i) => (
        <Pallet key={i} x={52 + i * 43} y={170} w={40} />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <Pallet key={`b${i}`} x={52 + i * 43} y={134} w={40} />
      ))}
      <path d="M270 120h50l32 38v42h-82z" fill="#B49A74" stroke={INK} strokeWidth="2" />
      <path d="M284 130h28l20 24h-48z" fill="#EEF3F6" stroke={INK} strokeWidth="1.5" />
      <circle cx="95" cy="208" r="16" fill={INK} />
      <circle cx="95" cy="208" r="6" fill="#B49A74" />
      <circle cx="225" cy="208" r="16" fill={INK} />
      <circle cx="225" cy="208" r="6" fill="#B49A74" />
      <circle cx="320" cy="208" r="16" fill={INK} />
      <circle cx="320" cy="208" r="6" fill="#B49A74" />
      <line x1="30" y1="226" x2="370" y2="226" stroke={INK} strokeWidth="1.5" opacity="0.25" />
    </g>
  );
}

function Container() {
  return (
    <g>
      <rect x="50" y="60" width="300" height="140" rx="3" fill="#F8F3E8" stroke={INK} strokeWidth="2" />
      {Array.from({ length: 12 }, (_, i) => (
        <line key={i} x1={62 + i * 24} y1="68" x2={62 + i * 24} y2="192" stroke="#B49A74" strokeWidth="2" opacity="0.5" />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Pallet key={i} x={62 + i * 48} y={168} w={44} />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Pallet key={`u${i}`} x={62 + i * 48} y={126} w={44} />
      ))}
      <rect x="50" y="200" width="300" height="10" fill={INK} opacity="0.85" />
    </g>
  );
}

function Recycle() {
  return (
    <g fill="none" stroke="#B49A74" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
      <path d="M150 112l30-46 30 46" />
      <path d="M236 140l28 46h-52" />
      <path d="M168 190h-52l28-46" />
    </g>
  );
}

export function Art({ kind, className = "" }: { kind: ArtKind; className?: string }) {
  let body: React.ReactNode;
  switch (kind) {
    case "plastic":
      body = <PalletStack tone="plastic" n={5} />;
      break;
    case "used":
      body = <PalletStack tone="old" n={5} />;
      break;
    case "scrap":
      body = (
        <g>
          <PalletStack tone="old" n={3} x={70} w={110} />
          <g transform="rotate(-12 280 190)">
            <Pallet x={230} y={188} w={110} tone="old" />
          </g>
          <g transform="rotate(8 270 150)">
            <Pallet x={236} y={140} w={100} tone="old" />
          </g>
        </g>
      );
      break;
    case "big":
      body = <PalletStack n={3} x={100} y={170} w={200} />;
      break;
    case "crate":
      body = <Crate />;
      break;
    case "truck":
      body = <Truck />;
      break;
    case "container":
      body = <Container />;
      break;
    case "region":
      body = <Pin />;
      break;
    case "service":
      body = (
        <g>
          <Recycle />
          <PalletStack n={2} x={140} y={200} w={120} />
        </g>
      );
      break;
    case "ispm":
      body = (
        <g>
          <PalletStack n={4} x={110} />
          <g transform="translate(290 80)">
            <rect width="64" height="46" rx="4" fill="#fff" stroke={INK} strokeWidth="2" />
            <text x="32" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill={INK} fontFamily="Arial,sans-serif">IPPC</text>
            <text x="32" y="37" textAnchor="middle" fontSize="12" fontWeight="700" fill={INK} fontFamily="Arial,sans-serif">HT</text>
          </g>
        </g>
      );
      break;
    case "cp":
      body = <PalletStack n={3} x={110} y={175} w={180} />;
      break;
    case "custom":
      body = (
        <g>
          <PalletStack n={3} x={150} w={130} />
          <path d="M104 60v130M94 70l10-10 10 10M94 180l10 10 10-10" stroke="#B49A74" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M150 48h130M160 38l-10 10 10 10M270 38l10 10-10 10" stroke="#B49A74" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      );
      break;
    case "wood":
    case "euro":
    default:
      body = <PalletStack n={4} />;
  }
  return (
    <svg className={`art ${className}`} viewBox="0 0 400 260" aria-hidden="true" focusable="false">
      <rect width="400" height="260" rx="14" fill="#F1E9DA" />
      <circle cx="330" cy="50" r="90" fill="#B49A74" opacity="0.10" />
      <circle cx="40" cy="240" r="70" fill="#B49A74" opacity="0.10" />
      {body}
    </svg>
  );
}
