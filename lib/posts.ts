import { neon } from "@neondatabase/serverless";
import { cache } from "react";

/** Admin panelinden yazılan blog yazıları (Neon Postgres). Sitede /rehber/ altında yayınlanır. */
export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  published: boolean;
  /** ISO tarih (yyyy-mm-dd). */
  publishedAt: string;
  updatedAt: string;
};

export type PostInput = Omit<Post, "id" | "publishedAt" | "updatedAt">;

export const isDatabaseConfigured = () => Boolean(process.env.DATABASE_URL?.trim());

const client = () => neon(process.env.DATABASE_URL!.trim());

// Tablo ilk kullanımda kendiliğinden kurulur; ayrı bir migration adımı yok.
let ready: Promise<unknown> | null = null;
async function db() {
  const sql = client();
  ready ??= sql`create table if not exists posts (
    id uuid primary key default gen_random_uuid(),
    slug text not null unique,
    title text not null,
    excerpt text not null default '',
    content text not null default '',
    cover_image_url text not null default '',
    meta_title text not null default '',
    meta_description text not null default '',
    focus_keyword text not null default '',
    published boolean not null default false,
    published_at timestamptz,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
  )`.catch((e) => {
    ready = null;
    throw e;
  });
  await ready;
  return sql;
}

type Row = Record<string, unknown>;
const day = (v: unknown) => (v ? new Date(v as string).toISOString().slice(0, 10) : "");
const toPost = (r: Row): Post => ({
  id: String(r.id),
  slug: String(r.slug),
  title: String(r.title),
  excerpt: String(r.excerpt),
  content: String(r.content),
  coverImageUrl: String(r.cover_image_url),
  metaTitle: String(r.meta_title),
  metaDescription: String(r.meta_description),
  focusKeyword: String(r.focus_keyword),
  published: Boolean(r.published),
  publishedAt: day(r.published_at),
  updatedAt: day(r.updated_at),
});

// Veritabanı yoksa site yalnızca koddaki rehberlerle çalışır. Çalışma anındaki hata
// fırlatılır (ISR eski sayfayı korur); yalnızca derlemede boş listeye düşülür.
export const getPublishedPosts = cache(async (): Promise<Post[]> => {
  if (!isDatabaseConfigured()) return [];
  try {
    const sql = await db();
    const rows = await sql`select * from posts where published order by published_at desc`;
    return rows.map(toPost);
  } catch (e) {
    if (process.env.NEXT_PHASE === "phase-production-build") return [];
    throw e;
  }
});

export const getPublishedPost = async (slug: string) => (await getPublishedPosts()).find((p) => p.slug === slug);

export async function listAllPosts(): Promise<Post[]> {
  const sql = await db();
  return (await sql`select * from posts order by updated_at desc`).map(toPost);
}

export async function getPostById(id: string): Promise<Post | undefined> {
  if (!/^[0-9a-f-]{36}$/i.test(id)) return undefined;
  const sql = await db();
  const [row] = await sql`select * from posts where id = ${id}`;
  return row ? toPost(row) : undefined;
}

export async function slugTaken(slug: string, exceptId?: string): Promise<boolean> {
  const sql = await db();
  const rows = await sql`select id from posts where slug = ${slug}`;
  return rows.some((r) => r.id !== exceptId);
}

export async function createPost(p: PostInput): Promise<string> {
  const sql = await db();
  const [row] = await sql`insert into posts
    (slug, title, excerpt, content, cover_image_url, meta_title, meta_description, focus_keyword, published, published_at)
    values (${p.slug}, ${p.title}, ${p.excerpt}, ${p.content}, ${p.coverImageUrl}, ${p.metaTitle}, ${p.metaDescription}, ${p.focusKeyword}, ${p.published}, case when ${p.published}::boolean then now() end)
    returning id`;
  return String(row.id);
}

export async function updatePost(id: string, p: PostInput): Promise<void> {
  const sql = await db();
  await sql`update posts set
    slug = ${p.slug}, title = ${p.title}, excerpt = ${p.excerpt}, content = ${p.content},
    cover_image_url = ${p.coverImageUrl}, meta_title = ${p.metaTitle}, meta_description = ${p.metaDescription},
    focus_keyword = ${p.focusKeyword}, published = ${p.published},
    published_at = case when ${p.published}::boolean then coalesce(published_at, now()) else published_at end,
    updated_at = now()
    where id = ${id}`;
}

export async function deletePost(id: string): Promise<void> {
  const sql = await db();
  await sql`delete from posts where id = ${id}`;
}
