import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleError, notFound, ok } from "@/lib/api";

export const runtime = "nodejs";
export const revalidate = 60;

type Ctx = { params: Promise<{ slug: string }> };

export async function GET(_req: NextRequest, ctx: Ctx) {
  try {
    const { slug } = await ctx.params;
    const page = await prisma.page.findUnique({ where: { slug } });
    if (!page) return notFound("Page not found");
    return ok(page);
  } catch (err) {
    return handleError(err);
  }
}
