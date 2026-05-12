import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import PostsClient from "./PostsClient";

export const dynamic = "force-dynamic";

export default async function PostsPage() {
  const rows = await prisma.blogPost.findMany({ orderBy: [{ isPublished: "desc" }, { publishedAt: "desc" }] });
  return (
    <div>
      <AdminPageHeader title="Blog posts" description="Markdown blog posts. The footer shows the 3 most recent published posts." />
      <PostsClient rows={rows} />
    </div>
  );
}
