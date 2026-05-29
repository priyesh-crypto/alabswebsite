import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../../_components/AdminPageHeader";
import PageEditorShell from "@/components/admin/PageEditorShell";
import { getSectionsForPage } from "@/lib/sections/index";
import type { SectionRow } from "@/components/admin/SectionEditor";

export const dynamic = "force-dynamic";

// Ensure default sections exist for the landing page. Runs additively: creates
// any landing section type that isn't already present, so newly-added types
// (e.g. lead_cards) appear on existing installs without a reseed.
async function ensureLandingSections() {
  const existing = await prisma.section.findMany({
    where: { pageSlug: "landing" },
    orderBy: { order: "asc" },
  });

  const defs = getSectionsForPage("landing");
  // Only seed the sections that belong exclusively to landing (not shared)
  const landingOnlyTypes = [
    "hero_landing",
    "lead_cards",
    "hiring_partners",
    "category_pills",
    "courses_challenge",
    "learning_modes",
    "institute_intro",
    "testimonials_carousel",
    "cta_banner",
    "faqs",
  ];

  const presentTypes = new Set(existing.map(s => s.type));
  const missing = defs.filter(d => landingOnlyTypes.includes(d.type) && !presentTypes.has(d.type));

  if (missing.length > 0) {
    const baseOrder = existing.length;
    await prisma.section.createMany({
      data: missing.map((def, i) => ({
        pageSlug: "landing",
        type: def.type,
        label: def.label,
        order: baseOrder + i,
        isVisible: true,
        contentDraft: def.defaultContent as Prisma.InputJsonValue,
        contentPublished: Prisma.JsonNull,
      })),
    });
    return prisma.section.findMany({
      where: { pageSlug: "landing" },
      orderBy: { order: "asc" },
    });
  }

  return existing;
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
