import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleError, ok } from "@/lib/api";
import type { Prisma } from "@prisma/client";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    const sp = req.nextUrl.searchParams;
    const scope = sp.get("scope");
    const courseSlug = sp.get("courseSlug");

    const where: Prisma.FaqWhereInput = {};
    if (courseSlug) {
      const course = await prisma.course.findUnique({
        where: { slug: courseSlug },
        select: { id: true },
      });
      if (!course) return ok([]);
      where.courseId = course.id;
    } else if (scope) {
      where.scope = scope;
    } else {
      where.scope = "GLOBAL";
    }

    const items = await prisma.faq.findMany({ where, orderBy: { order: "asc" } });
    return ok(items);
  } catch (err) {
    return handleError(err);
  }
}
