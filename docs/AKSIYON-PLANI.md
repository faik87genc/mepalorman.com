# MEPAL — Birleşik aksiyon planı (iç belge, 2026-10-28)

Kaynaklar: docs/RAKIP-ANALIZI.md, RAKIP-ANALIZI-2.md, docs/rakip/tur1-derin.md, tur2-derin.md, kendi-site-envanteri.md.

## Rakip özeti (neden kazanabiliriz)
- Rakiplerin çoğu şablon sayfa, yerel veri yok, çift H1, kırık link, tablo/ölçü yok. Hiçbirinde araç/hesaplayıcı yok.
- Bizde: ölçü tabloları, SSS, 34 rehber, 4 araç. Eksik olan kapsam (Avrupa yakası, plastik kümesi, kasa ailesi, fiyat sayfaları) ve teknik SEO ayrıntıları.
- Düzeltme: Tur Kaz (gebzeahsappalet.com) tarihli TL aralıklı tablo veriyor; "kimsede fiyat yok" demek yanlış. Paletglobal bilgi içeriğinde en güçlü rakip.

## Faz 1 — Teknik SEO (hemen)
1. İç sayfalarda og:image / twitter:image (pageMeta).
2. areaServed varsayılanı Türkiye geneli (bölge sayfalarında ilçe korunur).
3. llms.txt: fiyat listesini ve eksik bölümleri otomatik üret.
4. Product şemasına image; Article şemasına image; hub sayfalarına CollectionPage/ItemList.
5. sitemap lastmod: sabit tarih yerine içerik tarihi.

## Faz 2 — İçerik (yeni sayfalar)
1. 10 Avrupa yakası ilçe sayfası (Esenyurt, Avcılar, Beylikdüzü, Büyükçekmece, Başakşehir, Bağcılar, Küçükçekmece, Arnavutköy, Gaziosmanpaşa, Sultangazi). Yerel veri doğrulanmış olanla sınırlı, "Türkiye geneli sevkiyat" çerçevesi, kesin teslim süresi yok.
2. Fiyat sayfaları: tahta-palet-fiyatlari, 80x120-palet-fiyatlari (euro ile çakışma ayrıştırılır: euro = EPAL/standart, 80x120 = ölçü odaklı).
3. Plastik kümesi: 80x120, 100x120, hijyenik beyaz, plastik euro, ikinci el plastik, plastik palet kasa (görsel: Art çizimi).
4. Kasa ailesi: tahta kasa, ihracat sandığı/kasası, palet sandık.
5. İkinci el ahşap palet.
6. Rehberler: hurda palet nereye satılır, palet tamiri/ömür (mevcut), ISPM 15 (mevcut, genişlet).

## Faz 3 — Müşteri onayı gerektirenler (YAPILMADI)
- Sayısal fiyat aralığı yayını.
- Avrupa yakası teslim süresi/nakliye politikası.
- Niş tipler (arası sık, kapalı ihracat, kadranlı, izgara/press): ürün gerçekten tedarik ediliyor mu.
- Gerçek plastik palet fotoğrafı.
- Marka adlı sayfalar (şişecam, della).
- Hurda KDV/fatura rehberi (mali müşavir onayı).
- Google İşletme Profili, sameAs sosyal profiller, tam konum pini.

## Faz 4 — Ölçüm
- Search Console bağla; kanibalizasyon (80x120 vs euro fiyat) kontrolü.
- Lighthouse + erişilebilirlik taraması.
- Eski WordPress URL yönlendirmeleri Search Console listesiyle genişlet.
