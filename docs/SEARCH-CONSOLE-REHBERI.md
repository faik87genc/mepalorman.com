# Search Console kurulum rehberi (mepalorman.com)

1. https://search.google.com/search-console adresine Google hesabınla gir.
2. **Mülk ekle → Alan adı** seç, `mepalorman.com` yaz. (Alan adı mülkü www, http ve https dahil her şeyi kapsar.)
3. Google'ın verdiği **TXT kaydını** alan adı sağlayıcının DNS paneline ekle (Ana bilgisayar: `@`). Birkaç dakika–saat sonra **Doğrula**'ya bas.
4. Sol menü **Site haritaları** → `https://mepalorman.com/sitemap.xml` yaz → **Gönder**. Durum "Başarılı" olmalı.
5. **URL denetimi**: ana sayfa, `/palet-fiyatlari/`, `/urunler/epal-palet/` adreslerini tek tek yapıştırıp **Dizine eklenmesini iste**.
6. Sol menü **Sayfalar** raporunu 1–2 hafta sonra kontrol et: "Dizine eklenmedi" nedenlerini (Taranan - şu anda dizine eklenmemiş, Kopya vb.) bana ilet.
7. **Performans** raporu: 2–4 haftada sorgu/sayfa verisi dolar. 80x120 ile euro palet, ihracat sandığı ile ahşap sandık sayfaları aynı sorguda görünüyorsa bana söyle (kanibalizasyon kontrolü).
8. Eski WordPress adresleri için **Sayfalar → 404 / Bulunamadı** listesini dışa aktarıp bana ver; yönlendirme listesine ekleyeyim.
9. İsteğe bağlı: Bing Webmaster Tools'a Search Console'dan içe aktar.

Google İşletme Profili açılınca: profil bağlantısı ve sosyal profil URL'lerini `lib/site.ts` içindeki `sameAs` alanına ekle (ayrıntı o dosyada işaretli).
