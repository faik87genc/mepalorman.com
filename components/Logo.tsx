// MEPAL "M" mark: nested fine-line arches in gold, drawn as inline SVG (a few
// hundred bytes of path data instead of an image request).
const N = 12;
const f = (n: number) => n.toFixed(1);

function archPath(i: number): string {
  const xl = 14 + i * 4.6;
  const xr = 386 - xl;
  const vy = 196 - i * 8.5;
  const ax = xl + 46;
  const ay = vy - (200 - ax) * 0.92;
  const bx = 400 - ax;
  return `M${f(xl)} 300V${f(ay + 48)}Q${f(xl)} ${f(ay)} ${f(ax)} ${f(ay)}L200 ${f(vy)}L${f(bx)} ${f(ay)}Q${f(xr)} ${f(ay)} ${f(xr)} ${f(ay + 48)}V300`;
}

const paths = Array.from({ length: N }, (_, i) => archPath(i)).join("");

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 400 320" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={paths} />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo${light ? " logo-light" : ""}`}>
      <span className="logo-tile">
        <LogoMark size={30} />
      </span>
      <span className="logo-text">
        <span className="logo-name">MEPAL</span>
        <span className="logo-sub">Orman Ürünleri</span>
      </span>
    </span>
  );
}
