import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseDetailPage, { type PdpCourse } from "@/components/pdp/CourseDetailPage";
import { prisma, deepSerialize } from "@/lib/prisma";
import { getPage } from "@/lib/api-client";
import FigmaScaleWrapper from "@/components/layout/FigmaScaleWrapper";

export const dynamic = "force-dynamic";
// ... (generateMetadata remains same)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = await prisma.course.findUnique({
    where: { slug },
    select: { title: true, metaTitle: true, metaDesc: true, shortDesc: true },
  });
  if (!course) return {};
  return {
    title: course.metaTitle ?? course.title,
    description: course.metaDesc ?? course.shortDesc,
  };
}

export default async function CourseDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await prisma.course.findUnique({
    where: { slug, isPublished: true },
    include: {
      modules: {
        include: { lessons: { orderBy: { order: "asc" } } },
        orderBy: { order: "asc" },
      },
      pricing: { orderBy: { order: "asc" } },
      projects: { orderBy: { id: "asc" } },
      certifications: true,
      batches: { where: { isActive: true }, orderBy: { startDate: "asc" } },
      tools: true,
      faqs: { orderBy: { order: "asc" } },
      category: true,
    },
  });
  if (!course) notFound();

  const pageBlocks = await getPage(`course/${slug}`).catch(() => null);

  // Prisma Decimal isn't serializable into client components — cast rating to number
  // and deep-serialize the whole graph.
  const safe = deepSerialize({
    ...course,
    rating: course.rating ? Number(course.rating) : null,
  }) as PdpCourse;

  return (
    <FigmaScaleWrapper>
      <CourseDetailPage course={safe} pageBlocks={pageBlocks} />
    </FigmaScaleWrapper>
  );
}
