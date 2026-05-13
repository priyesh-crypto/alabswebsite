import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleError, ok } from "@/lib/api";
import type { Prisma } from "@prisma/client";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    const sp = req.nextUrl.searchParams;
    const featured = sp.get("featured");
    const categorySlug = sp.get("category");
    const limit = sp.get("limit");

    const where: Prisma.CourseWhereInput = { isPublished: true };
    if (featured === "true") where.isFeatured = true;
    if (categorySlug) where.category = { slug: categorySlug };

    const courses = await prisma.course.findMany({
      where,
      include: {
        category: true,
        batches: { where: { isActive: true }, orderBy: { startDate: "asc" } },
      },
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
      take: limit ? Math.max(1, Math.min(50, Number(limit))) : undefined,
    });
    return ok(courses);
  } catch (err) {
    return handleError(err);
  }
}
