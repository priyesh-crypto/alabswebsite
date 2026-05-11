/**
 * Admin draft preview — renders the public page but using DRAFT content
 * from Section.contentDraft instead of contentPublished. Used inside
 * the PreviewFrame iframe in the page editors.
 *
 * URL: /admin/preview/landing
 *      /admin/preview/courses
 *      /admin/preview/course/data-science
 */
import { redirect } from "next/navigation";
import { readSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

function getPublicPath(segments: string[]): string {
  const slug = segments.join("/");
  if (slug === "landing") return "/";
  if (slug === "courses") return "/courses";
  if (slug.startsWith("course/")) return `/courses/${slug.slice(7)}`;
  return "/";
}

export default async function PreviewRedirect({ params }: { params: Promise<{ slug: string[] }> }) {
  // Gate behind auth — previews are admin-only
  const session = await readSession();
  if (!session) redirect("/admin/login");

  const { slug } = await params;
  const publicPath = getPublicPath(slug);

  // In production, the preview would set a signed cookie that causes the
  // public page to serve draft content. For now, redirect to the live public
  // page so the iframe shows the current published state.
  redirect(publicPath);
}
