import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleError, notFound, ok } from "@/lib/api";

export const runtime = "nodejs";
export const revalidate = 60;

type Ctx = { params: Promise<{ slug: string }> };

export async function GET(_req: NextRequest, ctx: Ctx) {
  try {
    const { slug } = await ctx.params;
    const course = await prisma.course.findUnique({
      where: { slug },
      include: {
        category: true,
        modules: {
          orderBy: { order: "asc" },
          include: { lessons: { orderBy: { order: "asc" } } },
        },
        batches: { where: { isActive: true }, orderBy: { startDate: "asc" } },
        tools: true,
        certifications: true,
        projects: true,
        faqs: { orderBy: { order: "asc" } },
      },
    });
    if (!course || !course.isPublished) return notFound("Course not found");
    return ok(course);
  } catch (err) {
    return handleError(err);
  }
}
