import type { Metadata } from "next";
import { ContentLayout, SideCard } from "@/components/ContentLayout";
import { Markdown } from "@/components/Markdown";
import { trDate } from "@/lib/format";
import { articleLd, pageMeta } from "@/lib/seo";
import type { Post } from "@/lib/posts";

export const postMetadata = (p: Post): Metadata =>
  pageMeta({ title: p.metaTitle || `${p.title} | MEPAL`, description: p.metaDescription || p.excerpt, path: `/rehber/${p.slug}/`, type: "article" });

/** Admin panelinden yazılan yazı; koddaki rehberlerle aynı sayfa düzeni. */
export function PostView({ post }: { post: Post }) {
  const path = `/rehber/${post.slug}/`;
  const message = `Merhaba, "${post.title}" yazınızı okudum. Palet için fiyat almak istiyorum. Ürün: … Adet: … İl: …`;
  const wordCount = post.content.split(/\s+/).filter(Boolean).length;
  const image = post.coverImageUrl.startsWith("/") ? post.coverImageUrl : undefined;
  const ld = articleLd({ title: post.title, description: post.metaDescription || post.excerpt, path, published: post.publishedAt, updated: post.updatedAt, image, wordCount, keywords: post.focusKeyword || undefined });
  return (
    <ContentLayout
      crumbs={[["Rehber", "/rehber/"], [post.title, path]]}
      h1={post.title}
      answer={post.excerpt}
      message={message}
      meta={`${Math.max(1, Math.round(wordCount / 200))} dk okuma · Yayın: ${trDate(post.publishedAt)} · Güncelleme: ${trDate(post.updatedAt)}`}
      ld={[post.coverImageUrl.startsWith("https://") ? { ...ld, image: [post.coverImageUrl] } : ld]}
      finalTitle="Bu bilgiyle palet ihtiyacınız için teklif alın"
      side={<SideCard title="Araçlar" links={[["Konteynere kaç palet sığar?", "/araclar/konteyner-palet-hesaplama/"], ["Palet seçici", "/araclar/palet-secici/"], ["Palet danışmanı", "/araclar/palet-danismani/"]]} />}
    >
      {post.coverImageUrl && (
        <figure className="page-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.coverImageUrl} alt={post.title} />
        </figure>
      )}
      <div className="block post-body">
        <Markdown text={post.content} />
      </div>
    </ContentLayout>
  );
}
