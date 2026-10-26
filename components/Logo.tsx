import Image from "next/image";

// MEPAL logo: nested gold arches with the wordmark inside (public/assets/logo-mark.png,
// transparent background so it sits on both the cream header and the dark footer).
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo${light ? " logo-light" : ""}`}>
      <Image src={light ? "/assets/logo-light.png" : "/assets/logo-mark.png"} alt="MEPAL" width={570} height={444} className="logo-img" priority={!light} />
      <span className="logo-text">
        <span className="logo-sub">Orman Ürünleri</span>
      </span>
    </span>
  );
}
