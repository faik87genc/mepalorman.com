# mepalorman.com

Next.js 16 statik site (96 sayfa, tümü önceden üretilir). Yerel çalıştırma: `npm install && npm run dev` → http://localhost:3000

- Firma bilgileri: `lib/site.ts` · Fiyatlar (tek kaynak): `lib/data/prices.ts` (**yer tutucu rakamlar, yayından önce gerçekleriyle değiştirin**)
- İçerik: `lib/data/*.ts` (ürün, hizmet, bölge, sektör, rehber, fiyat sayfaları, kurumsal sayfalar)
- Araçlar: `components/tools/*`, API: `app/api/{teklif,danisman,degerleme}`
- Ortam değişkenleri: `.env.example`
- Eski WordPress yönlendirmeleri: `next.config.ts` (LEGACY_REDIRECTS) — eski sitemap'ten tam liste çıkarılmalı
- İçerik yazım kuralları: `docs/ICERIK-BRIFI.md`

Admin panel (iso27001danismanlik.com örneği) bilinçli olarak son aşamaya bırakıldı.
