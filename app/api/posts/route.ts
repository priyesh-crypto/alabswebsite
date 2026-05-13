import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleError, ok } from "@/lib/api";
import type { Prisma } from "@prisma/client";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    const sp = req.nextUrl.searchParams;
    const limit = sp.get("limit");
    const tag = sp.get("tag");

    const where: Prisma.BlogPostWhereInput = { isPublished: true };
    if (tag) where.tags = { has: tag };

    const posts = await prisma.blogPost.findMany({
      where,
      orderBy: { publishedAt: "desc" },
      take: limit ? Math.max(1, Math.min(50, Number(limit))) : undefined,
    });
    return ok(posts);
  } catch (err) {
    return handleError(err);
  }
}
