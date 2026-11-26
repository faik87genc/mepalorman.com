import { PostForm } from "@/components/admin/PostForm";
import { requireAdmin } from "@/lib/guard";

export default async function NewPost() {
  await requireAdmin();
  return <PostForm />;
}
