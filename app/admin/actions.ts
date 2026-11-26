"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { put } from "@vercel/blob";
import { authConfigProblems, createSessionToken, verifyPassword, SESSION_COOKIE_NAME, SESSION_MAX_AGE_SECONDS } from "@/lib/auth";
import { hasSession, requireAdmin } from "@/lib/guard";
import { createPost, deletePost, getPostById, slugTaken, updatePost, type PostInput } from "@/lib/posts";
import { guideBySlug } from "@/lib/data/guides";
import { slugify } from "@/lib/format";

// Kaba kuvvete karşı: IP başına 10 dakikada 10 deneme (sunucu örneği başına, bellek içi).
const attempts = new Map<string, { count: number; resetAt: number }>();
function tooManyAttempts(ip: string): boolean {
  const now = Date.now();
  for (const [k, v] of attempts) if (v.resetAt <= now) attempts.delete(k);
  const a = attempts.get(ip) ?? { count: 0, resetAt: now + 10 * 60_000 };
  a.count += 1;
  attempts.set(ip, a);
  return a.count > 10;
}

export async function login(formData: FormData) {
  if (authConfigProblems().length > 0) redirect("/admin/login/?hata=ayar");
  if (tooManyAttempts((await headers()).get("x-real-ip") ?? "unknown")) redirect("/admin/login/?hata=limit");
  if (!verifyPassword(String(formData.get("password") ?? ""), process.env.ADMIN_PASSWORD_HASH ?? "")) redirect("/admin/login/?hata=sifre");
  (await cookies()).set(SESSION_COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
  redirect("/admin/");
}

export async function logout() {
  (await cookies()).delete(SESSION_COOKIE_NAME);
  redirect("/admin/login/");
}

function revalidateBlog(...slugs: string[]) {
  for (const p of ["/rehber", ...slugs.map((s) => `/rehber/${s}`)]) revalidatePath(p);
}

export type SaveState = { error?: string; ok?: string };

export async function savePost(_prev: SaveState, formData: FormData): Promise<SaveState> {
  await requireAdmin();
  const text = (k: string) => String(formData.get(k) ?? "").trim();
  const id = text("id");
  const title = text("title");
  const content = text("content");
  const post: PostInput = {
    title,
    slug: slugify(text("slug") || title),
    excerpt: text("excerpt"),
    content,
    coverImageUrl: text("coverImageUrl"),
    metaTitle: text("metaTitle"),
    metaDescription: text("metaDescription"),
    focusKeyword: text("focusKeyword"),
    published: formData.get("intent") === "publish",
  };
  if (!title || !post.slug) return { error: "Başlık zorunlu." };
  if (post.published && (!content || !post.excerpt)) return { error: "Yayınlamak için kısa özet ve içerik zorunlu." };
  if (post.coverImageUrl && !/^(https:\/\/|\/img\/)/.test(post.coverImageUrl)) return { error: "Kapak görseli adresi https:// ile başlamalı." };

  let createdId = "";
  try {
    if (guideBySlug(post.slug) || (await slugTaken(post.slug, id || undefined))) return { error: `"${post.slug}" adresi zaten kullanılıyor. Adresi (slug) değiştirin.` };
    const old = id ? await getPostById(id) : undefined;
    if (id && !old) return { error: "Yazı bulunamadı; silinmiş olabilir." };
    if (id) await updatePost(id, post);
    else createdId = await createPost(post);
    revalidateBlog(post.slug, ...(old && old.slug !== post.slug ? [old.slug] : []));
  } catch (e) {
    console.error("admin: yazı kaydedilemedi", e);
    return { error: "Kaydedilemedi: veritabanına ulaşılamadı. Metniniz sayfada duruyor, tekrar deneyin." };
  }
  if (createdId) redirect(`/admin/yazi/${createdId}/?kaydedildi=1`);
  return { ok: post.published ? "Kaydedildi ve yayında." : "Taslak olarak kaydedildi." };
}

export async function removePost(formData: FormData) {
  await requireAdmin();
  const post = await getPostById(String(formData.get("id") ?? ""));
  if (post) {
    await deletePost(post.id);
    revalidateBlog(post.slug);
  }
  redirect("/admin/");
}

const MAX_UPLOAD = 4 * 1024 * 1024;

// Tarayıcının bildirdiği tipe değil, dosyanın ilk baytlarına güvenilir.
function sniff(b: Buffer): [string, string] | null {
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return ["jpg", "image/jpeg"];
  if (b.subarray(0, 4).toString("hex") === "89504e47") return ["png", "image/png"];
  if (b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") return ["webp", "image/webp"];
  return null;
}

export async function uploadImage(formData: FormData): Promise<{ url?: string; error?: string }> {
  if (!(await hasSession())) return { error: "Oturum sona ermiş, tekrar giriş yapın." };
  if (!process.env.BLOB_READ_WRITE_TOKEN) return { error: "Görsel depolama ayarlı değil (BLOB_READ_WRITE_TOKEN eksik)." };
  const file = formData.get("file");
  if (!(file instanceof File) || !file.size) return { error: "Dosya seçilmedi." };
  if (file.size > MAX_UPLOAD) return { error: "Görsel en fazla 4 MB olabilir." };
  const bytes = Buffer.from(await file.arrayBuffer());
  const type = sniff(bytes);
  if (!type) return { error: "Yalnızca JPEG, PNG veya WebP yüklenebilir." };
  try {
    const blob = await put(`blog/${Date.now()}-${crypto.randomUUID()}.${type[0]}`, bytes, { access: "public", contentType: type[1] });
    return { url: blob.url };
  } catch (e) {
    console.error("admin: görsel yüklenemedi", e);
    return { error: "Görsel yüklenemedi." };
  }
}
