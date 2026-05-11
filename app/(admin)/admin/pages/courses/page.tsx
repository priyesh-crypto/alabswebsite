import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../../_components/AdminPageHeader";
import PageEditorShell from "@/components/admin/PageEditorShell";
import { getSectionsForPage } from "@/lib/sections/index";
import type { SectionRow } from "@/components/admin/SectionEditor";

export const dynamic = "force-dynamic";

const PAGE_SLUG = "courses";

async function ensureCourseSections() {
  const existing = await prisma.section.findMany({
    where: { pageSlug: PAGE_SLUG },
    orderBy: { order: "asc" },
  });
  if (existing.length > 0) return existing;

  const types = ["hero_simple", "courses_grid", "testimonials_carousel", "cta_banner", "faqs"];
  const defs = getSectionsForPage(PAGE_SLUG).filter(d => types.includes(d.type));

  await prisma.section.createMany({
    data: defs.map((def, i) => ({
      pageSlug: PAGE_SLUG,
      type: def.type,
      label: def.label,
      order: i,
      isVisible: true,
      contentDraft: def.defaultContent as Prisma.InputJsonValue,
      contentPublished: Prisma.JsonNull,
    })),
  });

  return prisma.section.findMany({
    where: { pageSlug: PAGE_SLUG },
    orderBy: { order: "asc" },
  });
}

export default async function CoursesPageEditor() {
  const rows = await ensureCourseSections();
  const sections: SectionRow[] = rows.map(r => ({
    id: r.id,
    type: r.type,
    label: r.label,
    order: r.order,
    isVisible: r.isVisible,
    contentDraft: r.contentDraft as Record<string, unknown>,
    contentPublished: r.contentPublished as Record<string, unknown> | null,
    updatedAt: r.updatedAt.toISOString(),
  }));

  return (
    <div>
      <AdminPageHeader
        title="Explore Courses page"
        description="Edit the Explore Courses listing page sections."
      />
      <PageEditorShell pageSlug={PAGE_SLUG} sections={sections} />
    </div>
  );
}
