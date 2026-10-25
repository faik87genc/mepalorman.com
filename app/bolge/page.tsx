import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, FinalCta, PageHero } from "@/components/Content";
import { regions } from "@/lib/data/regions";
import { pageMeta } from "@/lib/seo";
import { site, warehouseAddress } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Palet Hizmet Bölgeleri: Gebze, Kocaeli, İstanbul | MEPAL",
  description: "Gebze Pelitli deposundan Dilovası, Tuzla, Pendik, Kartal, İzmit ve Anadolu yakası sanayi bölgelerine palet teslimatı. Bölgenizi seçin.",
  path: "/bolge/",
});

const WAVES: [1 | 2 | 3, string][] = [
  [1, "Depoya en yakın bölgeler"],
  [2, "İstanbul Anadolu yakası ve çevresi"],
  [3, "İzmit ve geniş hizmet alanı"],
];

export default function RegionsIndex() {
  return (
    <>
      <Breadcrumbs items={[["Hizmet bölgeleri", "/bolge/"]]} />
      <PageHero h1="Palet Hizmet Bölgeleri" answer={`Deponuz ${warehouseAddress} adresinde. Buradan Kocaeli ve İstanbul Anadolu yakasındaki sanayi bölgelerine toplu palet teslimatı yapıyoruz; ofisimiz Kadıköy Kozyatağı'ndadır.`}>
        <p>
          <a className="btn btn-ghost" href={site.mapsUrl} rel="noopener" target="_blank">
            Depo için yol tarifi al
          </a>
        </p>
      </PageHero>
      <div className="wrap">
        {WAVES.map(([wave, title]) => {
          const list = regions.filter((r) => r.wave === wave);
          if (!list.length) return null;
          return (
            <section key={wave} className="block">
              <h2>{title}</h2>
              <div className="grid">
                {list.map((r) => (
                  <article key={r.slug} className="card">
                    <div className="card-body">
                      <h3>
                        <Link href={`/bolge/${r.slug}/`}>{r.name}</Link>
                      </h3>
                      <p>{r.blurb}</p>
                      <span className="from">{r.distance}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
      <FinalCta message="Merhaba, palet teslimatı için fiyat almak istiyorum. Teslimat ili/ilçesi: …" />
    </>
  );
}
