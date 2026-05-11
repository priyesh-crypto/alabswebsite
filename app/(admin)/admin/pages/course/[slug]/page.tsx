import { notFound } from "next/navigation";
import Link from "next/link";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../../../_components/AdminPageHeader";
import PageEditorShell from "@/components/admin/PageEditorShell";
import { getSectionsForPage } from "@/lib/sections/index";
import type { SectionRow } from "@/components/admin/SectionEditor";

export const dynamic = "force-dynamic";

async function ensurePdpSections(courseSlug: string) {
  const pageSlug = `course/${courseSlug}`;
  const existing = await prisma.section.findMany({
    where: { pageSlug },
    orderBy: { order: "asc" },
  });
  if (existing.length > 0) return existing;

  const types = [
    "pdp_hero",
    "pdp_overview",
    "pdp_curriculum",
    "pdp_projects",
    "pdp_tools",
    "pdp_who_should_join",
    "pdp_job_roles",
    "pdp_skills",
    "pdp_learning_modes",
    "pdp_fees",
    "pdp_certification",
    "pdp_career_support",
    "pdp_how_to_apply",
    "testimonials_carousel",
    "faqs",
    "cta_banner",
    "call_back_form",
  ];

  const defs = getSectionsForPage(pageSlug).filter(d => types.includes(d.type));

  await prisma.section.createMany({
    data: defs.map((def, i) => ({
      pageSlug,
      type: def.type,
      label: def.label,
      order: i,
      isVisible: true,
      contentDraft: def.defaultContent as Prisma.InputJsonValue,
      contentPublished: Prisma.JsonNull,
    })),
  });

  return prisma.section.findMany({
    where: { pageSlug },
    orderBy: { order: "asc" },
  });
}

export default async function PdpPageEditor({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = await prisma.course.findUnique({
    where: { slug },
    select: { id: true, slug: true, title: true },
  });
  if (!course) notFound();

  const rows = await ensurePdpSections(slug);
  const pageSlug = `course/${slug}`;

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
        title={`PDP: ${course.title}`}
        description={`Edit course detail page sections for "${course.slug}". Curriculum, tools, pricing, and batches are managed in the Course editor.`}
      />
      <div className="mb-4">
        <Link href={`/admin/courses`} className="text-sm text-[#1de5b5] hover:underline">
          ← Back to courses
        </Link>
        {" · "}
        <Link href={`/admin/courses/${course.id}`} className="text-sm text-[#1de5b5] hover:underline">
          Edit course data →
        </Link>
      </div>
      <PageEditorShell pageSlug={pageSlug} sections={sections} />
    </div>
  );
}
