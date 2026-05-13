import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleError, notFound, ok } from "@/lib/api";

export const runtime = "nodejs";

type Ctx = { params: Promise<{ slug: string }> };

export async function GET(_req: NextRequest, ctx: Ctx) {
  try {
    const { slug } = await ctx.params;
    const post = await prisma.blogPost.findUnique({ where: { slug } });
    if (!post || !post.isPublished) return notFound("Post not found");
    return ok(post);
  } catch (err) {
    return handleError(err);
  }
}
