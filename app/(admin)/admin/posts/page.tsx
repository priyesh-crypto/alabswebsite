import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import CrudClient, { type ColumnDef, type FieldDef } from "../_components/CrudClient";

export const dynamic = "force-dynamic";

type Row = Awaited<ReturnType<typeof prisma.blogPost.findMany>>[number];

const columns: ColumnDef<Row>[] = [
  { key: "title", label: "Title", render: r => <span className="font-medium line-clamp-1">{r.title}</span> },
  { key: "slug", label: "Slug",
    render: r => <code className="text-xs text-gray-600">{r.slug}</code> },
  { key: "authorName", label: "Author" },
  { key: "publishedAt", label: "Published", width: "160px",
    render: r => r.publishedAt ? <span className="text-gray-500">{new Date(r.publishedAt).toLocaleDateString()}</span> : <span className="text-gray-400">—</span> },
  { key: "isPublished", label: "Live", width: "70px",
    render: r => r.isPublished
      ? <span className="bg-green-100 text-green-700 text-xs font-semibold rounded px-2 py-0.5">YES</span>
      : <span className="text-gray-400 text-xs">draft</span> },
];

const fields: FieldDef[] = [
  { name: "title", label: "Title", type: "text", required: true },
  { name: "slug", label: "Slug", type: "text", required: true, placeholder: "my-blog-post" },
  { name: "excerpt", label: "Excerpt", type: "textarea", rows: 3 },
  { name: "coverUrl", label: "Cover image URL", type: "url" },
  { name: "body", label: "Body (markdown)", type: "textarea", rows: 14, required: true },
  { name: "authorName", label: "Author name", type: "text", required: true },
  { name: "publishedAt", label: "Published at (ISO datetime)", type: "text", placeholder: "2026-05-08T10:00:00.000Z" },
  { name: "isPublished", label: "Published (visible on /blog)", type: "boolean" },
  { name: "tags", label: "Tags (comma-separated)", type: "text", placeholder: "analytics, career" },
  { name: "metaTitle", label: "Meta title (SEO)", type: "text" },
  { name: "metaDesc", label: "Meta description (SEO)", type: "textarea", rows: 2 },
];

export default async function PostsPage() {
  const rows = await prisma.blogPost.findMany({ orderBy: [{ isPublished: "desc" }, { publishedAt: "desc" }] });
  return (
    <div>
      <AdminPageHeader title="Blog posts" description="Markdown blog posts. The footer shows the 3 most recent published posts." />
      <CrudClient
        resource="posts"
        rows={rows}
        columns={columns}
        fields={fields}
        emptyForm={{
          title: "", slug: "", excerpt: "", coverUrl: "", body: "", authorName: "AnalytixLabs Editorial",
          publishedAt: "", isPublished: false, tags: "", metaTitle: "", metaDesc: "",
        }}
        toForm={r => ({
          title: r.title,
          slug: r.slug,
          excerpt: r.excerpt ?? "",
          coverUrl: r.coverUrl ?? "",
          body: r.body,
          authorName: r.authorName,
          publishedAt: r.publishedAt ? r.publishedAt.toISOString() : "",
          isPublished: r.isPublished,
          tags: r.tags.join(", "),
          metaTitle: r.metaTitle ?? "",
          metaDesc: r.metaDesc ?? "",
        })}
        searchKeys={["title", "slug", "authorName"]}
      />
    </div>
  );
}
