import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../../_components/AdminPageHeader";
import PageEditorShell from "@/components/admin/PageEditorShell";
import { getSectionsForPage } from "@/lib/sections/index";
import type { SectionRow } from "@/components/admin/SectionEditor";

export const dynamic = "force-dynamic";

const PAGE_SLUG = "courses";

// Additive: create any missing course section type so newly-added types
// (e.g. related_articles) appear on existing installs without a reseed.
async function ensureCourseSections() {
  const existing = await prisma.section.findMany({
    where: { pageSlug: PAGE_SLUG },
    orderBy: { order: "asc" },
  });

  const types = ["hero_simple", "courses_grid", "related_articles", "testimonials_carousel", "cta_banner", "faqs"];
  const presentTypes = new Set(existing.map(s => s.type));
  const missing = getSectionsForPage(PAGE_SLUG).filter(d => types.includes(d.type) && !presentTypes.has(d.type));

  if (missing.length > 0) {
    const baseOrder = existing.length;
    await prisma.section.createMany({
      data: missing.map((def, i) => ({
        pageSlug: PAGE_SLUG,
        type: def.type,
        label: def.label,
        order: baseOrder + i,
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

  return existing;
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
