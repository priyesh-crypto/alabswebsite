import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleError, ok } from "@/lib/api";

export const runtime = "nodejs";
export const revalidate = 60;

/**
 * GET /api/batches
 *
 * Returns all published courses that have at least one active batch,
 * with their batches included. Used by the Upcoming Batches page.
 *
 * Query params:
 *   category  — filter by category slug
 *   location  — filter by batch location (partial match)
 */
export async function GET(req: NextRequest) {
  try {
    const sp = req.nextUrl.searchParams;
    const categorySlug = sp.get("category") ?? undefined;
    const location = sp.get("location") ?? undefined;

    const courses = await prisma.course.findMany({
      where: {
        isPublished: true,
        ...(categorySlug ? { category: { slug: categorySlug } } : {}),
        batches: {
          some: {
            isActive: true,
            ...(location
              ? { location: { contains: location, mode: "insensitive" } }
              : {}),
          },
        },
      },
      include: {
        category: true,
        batches: {
          where: {
            isActive: true,
            ...(location
              ? { location: { contains: location, mode: "insensitive" } }
              : {}),
          },
          orderBy: { startDate: "asc" },
        },
      },
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    });

    return ok(courses);
  } catch (err) {
    return handleError(err);
  }
}
