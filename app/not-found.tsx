import Link from "next/link";
import { CtaButtons } from "@/components/Content";

export const metadata = { title: "Sayfa bulunamadı | MEPAL Orman Ürünleri", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="wrap notfound">
      <h1>Aradığınız sayfa bulunamadı</h1>
      <p>Adres değişmiş olabilir. Aşağıdaki bağlantılardan devam edin veya doğrudan bize yazın.</p>
      <ul className="chips" style={{ justifyContent: "center" }}>
        <li><Link href="/palet-fiyatlari/">Palet fiyatları</Link></li>
        <li><Link href="/urunler/">Ürünler</Link></li>
        <li><Link href="/hizmetler/hurda-palet-alimi/">Hurda palet alımı</Link></li>
        <li><Link href="/bolge/">Hizmet bölgeleri</Link></li>
        <li><Link href="/iletisim/">İletişim</Link></li>
      </ul>
      <CtaButtons message="Merhaba, sitenizde aradığım sayfayı bulamadım. Palet için bilgi almak istiyorum." source="404" />
    </div>
  );
}
