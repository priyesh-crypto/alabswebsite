import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../../_components/AdminPageHeader";
import PageBlockEditor from "./PageBlockEditor";

export const dynamic = "force-dynamic";

export default async function EditPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await prisma.page.findUnique({ where: { slug } });
  if (!page) notFound();

  return (
    <div className="max-w-4xl">
      <AdminPageHeader
        title={`Page: ${page.title}`}
        description={`Edit the content blocks for slug "${page.slug}". Each block key is read directly by a public component — renaming a key will hide that content until the code is updated.`}
      />
      <PageBlockEditor
        slug={page.slug}
        initialTitle={page.title}
        initialBlocks={(page.blocks as Record<string, unknown>) ?? {}}
        initialMetaTitle={page.metaTitle ?? ""}
        initialMetaDesc={page.metaDesc ?? ""}
      />
    </div>
  );
}
