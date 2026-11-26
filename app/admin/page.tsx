import Link from "next/link";
import { requireAdmin } from "@/lib/guard";
import { isDatabaseConfigured, listAllPosts, type Post } from "@/lib/posts";
import { trDate, trDay } from "@/lib/format";
import { importDrafts, logout } from "./actions";
import { blogDrafts } from "@/lib/data/blog-drafts";

export default async function AdminHome() {
  await requireAdmin();
  const configured = isDatabaseConfigured();
  let posts: Post[] = [];
  let failed = false;
  if (configured) {
    try {
      posts = await listAllPosts();
    } catch (e) {
      console.error("admin: yazılar okunamadı", e);
      failed = true;
    }
  }
  const today = trDay(0);
  const waiting = blogDrafts.filter((d) => !posts.some((p) => p.slug === d.slug));
  return (
    <>
      <div className="admin-bar">
        <h1>Blog yazıları</h1>
        <nav aria-label="Panel">
          <Link href="/admin/yazi/" className="btn btn-sm btn-gold">Yeni yazı</Link>
          <Link href="/rehber/" className="btn btn-sm btn-ghost">Siteyi gör</Link>
          <form action={logout}>
            <button className="btn btn-sm btn-ghost">Çıkış</button>
          </form>
        </nav>
      </div>
      {!configured && <p className="admin-note">Veritabanı bağlı değil. Vercel’de Neon Postgres ekleyip <code>DATABASE_URL</code> tanımlayın; tablo kendiliğinden kurulur.</p>}
      {failed && <p className="admin-note is-error" role="alert">Veritabanına ulaşılamadı. Birkaç saniye sonra sayfayı yenileyin.</p>}
      {configured && !failed && !posts.length && <p className="admin-note">Henüz yazı yok. “Yeni yazı” ile başlayın.</p>}
      {configured && !failed && waiting.length > 0 && (
        <form action={importDrafts} className="admin-note">
          <p>{waiting.length} hazır yazı bekliyor. Başlangıç gününden itibaren günde bir tane, 09:00’da yayınlanacak şekilde planlanır.</p>
          <div className="admin-tools">
            <input type="date" name="start" defaultValue={trDay(1)} min={today} required aria-label="Başlangıç günü" />
            <button className="btn btn-sm btn-dark">Hazır yazıları planla</button>
          </div>
        </form>
      )}
      <ul className="admin-list">
        {posts.map((p) => (
          <li key={p.id}>
            <div>
              <Link href={`/admin/yazi/${p.id}/`}>{p.title}</Link>
              <small>{!p.published ? `Taslak · ${trDate(p.updatedAt)}` : p.publishedAt > today ? `Planlandı · ${trDate(p.publishedAt)}` : `Yayında · ${trDate(p.publishedAt)}`}{p.coverImageUrl ? "" : " · görsel yok"} · /rehber/{p.slug}/</small>
            </div>
            {p.published && p.publishedAt <= today && <Link href={`/rehber/${p.slug}/`} className="btn btn-sm btn-ghost">Görüntüle</Link>}
          </li>
        ))}
      </ul>
    </>
  );
}
