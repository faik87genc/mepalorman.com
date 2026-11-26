import { notFound } from "next/navigation";
import { PostForm } from "@/components/admin/PostForm";
import { requireAdmin } from "@/lib/guard";
import { getPostById } from "@/lib/posts";

type Props = { params: Promise<{ id: string }>; searchParams: Promise<{ kaydedildi?: string }> };

export default async function EditPost({ params, searchParams }: Props) {
  await requireAdmin();
  const post = await getPostById((await params).id);
  if (!post) notFound();
  return <PostForm post={post} justSaved={!!(await searchParams).kaydedildi} />;
}
