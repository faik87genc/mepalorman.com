# Admin paneli: Vercel kurulumu ve kullanım

Adres: `https://www.mepalorman.com/admin/`

## 1. Veritabanı (zorunlu)
Vercel → proje → **Storage** → **Neon (Postgres)** ekleyin ve projeye bağlayın. `DATABASE_URL` kendiliğinden tanımlanır. Yazı tablosu ilk kullanımda otomatik kurulur.

## 2. Görsel depolama (görsel yüklemek için)
Vercel → **Storage** → **Blob** → yeni store, erişim **Public**. `BLOB_READ_WRITE_TOKEN` tanımlanır.

## 3. Şifre ve oturum anahtarı (zorunlu)
Bilgisayarda, proje klasöründe:

```bash
npm run hash-password
```

Çıkan `ADMIN_PASSWORD_HASH` ve `SESSION_SECRET` değerlerini Vercel → **Settings** → **Environment Variables** (Production) bölümüne ekleyin. Şifreyi ve bu değerleri depoya yazmayın.

## 4. Yeniden dağıtın
Vercel → **Deployments** → son dağıtım → **Redeploy**. Değişkenler ancak yeni dağıtımda geçerli olur. Eksik bir şey varsa giriş ekranı hangisi olduğunu yazar.

## Yazı yazma
- **Yeni yazı** → başlık, kısa özet, içerik (Markdown: `## Ara başlık`, `**kalın**`, `- madde`, `[bağlantı](/teklif-al/)`).
- **Taslak kaydet** yalnız panelde kalır; **Yayınla** yazıyı `/rehber/adres/` altında açar, rehber listesine ve sitemap'e ekler.
- Sağdaki SEO kontrol listesi yol göstericidir, yayınlamayı engellemez.
- Yayındaki yazının adresini (slug) değiştirmeyin; eski bağlantı kırılır.
- Fiyat rakamı yazmayın (site kararı: fiyat WhatsApp'tan verilir).

Şifreyi değiştirmek için 3. adımı tekrarlayın; tüm oturumları kapatmak için `SESSION_VERSION` değerini değiştirin.
