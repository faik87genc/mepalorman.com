"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";

// The chat code is not downloaded until the visitor clicks "Başlat".
const Chat = dynamic(() => import("./AdvisorChat"), { ssr: false, loading: () => <p>Yükleniyor…</p> });

export default function Advisor() {
  const [started, setStarted] = useState(false);
  if (!started)
    return (
      <div className="panel">
        <p>Yükünüzü ve kullanım yerini yazın; uygun paleti, gerekçesini ve fiyat bilgisini söyleyelim. Yapay zekâ destekli asistan yalnızca palet konusunda yanıt verir ve fiyat için sizi WhatsApp&apos;a yönlendirir.</p>
        <button type="button" className="btn btn-gold" data-evt="ai_chat_start" data-src="advisor" onClick={() => setStarted(true)}>
          Palet Danışmanını Başlat
        </button>
        <p className="disclaimer">Mesajlarınız yanıt üretmek için yapay zekâ hizmet sağlayıcısına iletilir; kişisel bilgi (TC, kart, şifre) yazmayın. <Link href="/kvkk/">KVKK metni</Link>.</p>
      </div>
    );
  return <Chat />;
}
