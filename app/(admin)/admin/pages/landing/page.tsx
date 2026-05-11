import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../../_components/AdminPageHeader";
import PageEditorShell from "@/components/admin/PageEditorShell";
import { getSectionsForPage } from "@/lib/sections/index";
import type { SectionRow } from "@/components/admin/SectionEditor";

export const dynamic = "force-dynamic";

// Ensure default sections exist for the landing page
async function ensureLandingSections() {
  const existing = await prisma.section.findMany({
    where: { pageSlug: "landing" },
    orderBy: { order: "asc" },
  });
  if (existing.length > 0) return existing;

  const defs = getSectionsForPage("landing");
  // Only seed the sections that belong exclusively to landing (not shared)
  const landingOnlyTypes = [
    "hero_landing",
    "hiring_partners",
    "category_pills",
    "courses_challenge",
    "learning_modes",
    "institute_intro",
    "testimonials_carousel",
    "cta_banner",
    "faqs",
  ];

  const toCreate = defs
    .filter(d => landingOnlyTypes.includes(d.type))
    .map((def, i) => ({
      pageSlug: "landing",
      type: def.type,
      label: def.label,
      order: i,
      isVisible: true,
      contentDraft: def.defaultContent as Prisma.InputJsonValue,
      contentPublished: Prisma.JsonNull,
    }));

  await prisma.section.createMany({ data: toCreate });
  return prisma.section.findMany({
    where: { pageSlug: "landing" },
    orderBy: { order: "asc" },
  });
}

export default async function LandingPageEditor() {
  const rows = await ensureLandingSections();
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
        title="Landing page"
        description="Edit every section of the home page. Save draft to preview, then Publish to make changes live."
      />
      <PageEditorShell pageSlug="landing" sections={sections} />
    </div>
  );
}
