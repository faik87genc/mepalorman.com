"use client";

import Link from "next/link";
import { startTransition, useActionState, useRef, useState, type FormEvent } from "react";
import { removePost, savePost, uploadImage, type SaveState } from "@/app/admin/actions";
import { Markdown } from "@/components/Markdown";
import { slugify } from "@/lib/format";
import type { Post } from "@/lib/posts";

const EMPTY = { title: "", slug: "", excerpt: "", content: "", coverImageUrl: "", metaTitle: "", metaDescription: "", focusKeyword: "" };

/** Yayın öncesi SEO kontrol listesi: [geçti mi, açıklama]. */
function seoChecks(v: typeof EMPTY): [boolean, string][] {
  const kw = v.focusKeyword.trim().toLocaleLowerCase("tr-TR");
  const has = (s: string) => !!kw && s.toLocaleLowerCase("tr-TR").includes(kw);
  const title = v.metaTitle || v.title;
  const desc = v.metaDescription || v.excerpt;
  const words = v.content.split(/\s+/).filter(Boolean).length;
  return [
    [title.length >= 30 && title.length <= 60, `SEO başlığı 30–60 karakter (${title.length})`],
    [desc.length >= 110 && desc.length <= 155, `Açıklama 110–155 karakter (${desc.length})`],
    [!!kw, "Hedef anahtar kelime yazıldı"],
    [has(title), "Anahtar kelime başlıkta"],
    [has(desc), "Anahtar kelime açıklamada"],
    [has(v.content.slice(0, 600)), "Anahtar kelime giriş paragrafında"],
    [words >= 600, `En az 600 kelime (${words})`],
    [(v.content.match(/^## /gm)?.length ?? 0) >= 2, "En az 2 ara başlık (##)"],
    [/\]\(\/[^)]*\)/.test(v.content), "Site içi en az 1 bağlantı, ör. [euro palet](/urunler/80x120-euro-palet/)"],
    [!!v.coverImageUrl, "Kapak görseli var"],
  ];
}

export function PostForm({ post, justSaved }: { post?: Post; justSaved?: boolean }) {
  const [state, action, pending] = useActionState<SaveState, FormData>(savePost, justSaved ? { ok: "Kaydedildi." } : {});
  const [v, setV] = useState(() => (post ? { ...EMPTY, ...post } : EMPTY));
  const [date, setDate] = useState(post?.publishedAt ?? "");
  const [preview, setPreview] = useState(false);
  const [upload, setUpload] = useState("");
  const area = useRef<HTMLTextAreaElement>(null);
  const checks = seoChecks(v);

  const set = (k: keyof typeof EMPTY, value: string) => setV((old) => ({ ...old, [k]: value }));
  const field = (k: keyof typeof EMPTY) => ({ name: k, value: v[k], onChange: (e: { target: { value: string } }) => set(k, e.target.value) });

  // form action yerine onSubmit: React'in gönderim sonrası form sıfırlaması yazıyı silmesin.
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget, (e.nativeEvent as SubmitEvent).submitter);
    startTransition(() => action(data));
  }

  async function send(file: File | undefined, done: (url: string) => void) {
    if (!file) return;
    if (file.size > 4 * 1024 * 1024) return setUpload("Görsel en fazla 4 MB olabilir.");
    setUpload("Yükleniyor…");
    const body = new FormData();
    body.set("file", file);
    try {
      const r = await uploadImage(body);
      if (r.url) done(r.url);
      setUpload(r.error ?? "Görsel yüklendi.");
    } catch {
      setUpload("Görsel yüklenemedi.");
    }
  }

  const insert = (snippet: string) => {
    const at = area.current?.selectionStart ?? v.content.length;
    setV((old) => ({ ...old, content: old.content.slice(0, at) + snippet + old.content.slice(at) }));
  };

  return (
    <>
      <div className="admin-bar">
        <h1>{post ? "Yazıyı düzenle" : "Yeni yazı"}</h1>
        <nav aria-label="Panel">
          <Link href="/admin/" className="btn btn-sm btn-ghost">← Yazılar</Link>
          {post?.published && <Link href={`/rehber/${post.slug}/`} className="btn btn-sm btn-ghost">Görüntüle</Link>}
        </nav>
      </div>

      <div className="admin-cols">
        <form onSubmit={submit}>
          <input type="hidden" name="id" value={post?.id ?? ""} />
          <label>
            Başlık
            <input type="text" {...field("title")} required />
          </label>
          <label>
            Adres (slug)
            <input type="text" {...field("slug")} placeholder={slugify(v.title)} />
            <small>/rehber/{slugify(v.slug || v.title)}/ — yayındaki yazının adresini değiştirmeyin.</small>
          </label>
          <label>
            Kısa özet
            <textarea {...field("excerpt")} rows={3} />
            <small>Yazının üstünde ve listede görünür.</small>
          </label>

          <div className="admin-tools">
            <button type="button" className={`btn btn-sm ${preview ? "btn-ghost" : "btn-dark"}`} onClick={() => setPreview(false)}>Yaz</button>
            <button type="button" className={`btn btn-sm ${preview ? "btn-dark" : "btn-ghost"}`} onClick={() => setPreview(true)}>Önizle</button>
            <label className="btn btn-sm btn-ghost" style={{ margin: 0 }}>
              Yazıya görsel ekle
              <input type="file" accept="image/jpeg,image/png,image/webp" className="sr" onChange={(e) => { send(e.target.files?.[0], (url) => insert(`\n![görsel açıklaması](${url})\n`)); e.target.value = ""; }} />
            </label>
          </div>
          {preview && (
            <div className="admin-preview">
              <Markdown text={v.content || "*Henüz içerik yok.*"} />
            </div>
          )}
          <label hidden={preview}>
            İçerik (Markdown)
            <textarea ref={area} className="admin-content" {...field("content")} rows={22} placeholder={"## Ara başlık\n\nParagraf… **kalın**, [bağlantı](/teklif-al/)\n\n- madde"} />
          </label>

          <label>
            Kapak görseli
            <input type="text" {...field("coverImageUrl")} placeholder="https://… (veya aşağıdan yükleyin)" />
          </label>
          <label>
            Kapak dosyası yükle
            <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => send(e.target.files?.[0], (url) => set("coverImageUrl", url))} />
            <small role="status">{upload}</small>
          </label>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {v.coverImageUrl && <img className="admin-cover" src={v.coverImageUrl} alt="Kapak önizlemesi" />}

          <label>
            Hedef anahtar kelime
            <input type="text" {...field("focusKeyword")} />
          </label>
          <label>
            SEO başlığı
            <input type="text" {...field("metaTitle")} placeholder={v.title} />
          </label>
          <label>
            Meta açıklama
            <textarea {...field("metaDescription")} rows={2} placeholder={v.excerpt} />
          </label>

          <label>
            Yayın tarihi
            <input type="date" name="publishDate" value={date} onChange={(e) => setDate(e.target.value)} />
            <small>Boş bırakırsanız hemen yayınlanır. İleri bir tarih seçerseniz o gün 09:00’da görünür.</small>
          </label>

          {state.error && <p className="admin-note is-error" role="alert">{state.error}</p>}
          {state.ok && <p className="admin-note" role="status">{state.ok}</p>}
          <div className="admin-tools">
            <button type="submit" name="intent" value="publish" className="btn btn-gold" disabled={pending}>{post?.published ? "Güncelle" : "Yayınla"}</button>
            <button type="submit" name="intent" value="draft" className="btn btn-ghost" disabled={pending}>{post?.published ? "Yayından kaldır" : "Taslak kaydet"}</button>
          </div>
        </form>

        <aside aria-label="SEO kontrolü">
          <h2>SEO kontrolü: {checks.filter(([ok]) => ok).length}/{checks.length}</h2>
          <ul className="admin-checks">
            {checks.map(([ok, label]) => (
              <li key={label.replace(/\(.*\)/, "")}>{ok ? "✅" : "⬜"} {label}</li>
            ))}
          </ul>
          {post && (
            <form action={removePost} onSubmit={(e) => { if (!confirm("Yazı kalıcı olarak silinecek. Emin misiniz?")) e.preventDefault(); }}>
              <input type="hidden" name="id" value={post.id} />
              <p><button className="btn btn-sm btn-ghost">Yazıyı sil</button></p>
            </form>
          )}
        </aside>
      </div>
    </>
  );
}
