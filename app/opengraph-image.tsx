import { ImageResponse } from "next/og";

export const alt = "MEPAL Orman Ürünleri — Palet Satışı Gebze";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 90, background: "#faf7f0", color: "#26272b" }}>
        <div style={{ fontSize: 34, letterSpacing: 10, color: "#7a6342" }}>MEPAL ORMAN ÜRÜNLERİ</div>
        <div style={{ fontSize: 76, marginTop: 28, lineHeight: 1.1, fontWeight: 700 }}>Palet Satışı ve Hurda Palet Alımı</div>
        <div style={{ fontSize: 36, marginTop: 30, color: "#5a5b61" }}>Gebze · Kocaeli · İstanbul — 0536 866 83 07</div>
      </div>
    ),
    size,
  );
}
