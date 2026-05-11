import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { categoryUpsertSchema } from "@/lib/zod-schemas";
import { notFound } from "@/lib/api";

export const runtime = "nodejs";

export async function GET(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    const row = await prisma.category.findUnique({ where: { id } });
    if (!row) return notFound();
    return row;
  });
}

export async function PUT(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    const data = await parseBody(req, categoryUpsertSchema);
    const updated = await prisma.category.update({ where: { id }, data });
    revalidatePublic();
    return updated;
  });
}

export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    await prisma.category.delete({ where: { id } });
    revalidatePublic();
    return { ok: true };
  });
}
