import Link from "next/link";
import { requireAdmin } from "@/lib/guard";
import { isDatabaseConfigured, listAllPosts, type Post } from "@/lib/posts";
import { trDate } from "@/lib/format";
import { logout } from "./actions";

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
      <ul className="admin-list">
        {posts.map((p) => (
          <li key={p.id}>
            <div>
              <Link href={`/admin/yazi/${p.id}/`}>{p.title}</Link>
              <small>{p.published ? `Yayında · ${trDate(p.publishedAt)}` : `Taslak · ${trDate(p.updatedAt)}`} · /rehber/{p.slug}/</small>
            </div>
            {p.published && <Link href={`/rehber/${p.slug}/`} className="btn btn-sm btn-ghost">Görüntüle</Link>}
          </li>
        ))}
      </ul>
    </>
  );
}
