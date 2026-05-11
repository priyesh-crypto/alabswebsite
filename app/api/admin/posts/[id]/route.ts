import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { blogPostUpsertSchema } from "@/lib/zod-schemas";

export const runtime = "nodejs";

export async function PUT(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    const data = await parseBody(req, blogPostUpsertSchema);
    const updated = await prisma.blogPost.update({ where: { id }, data });
    revalidatePublic(["/blog", `/blog/${updated.slug}`]);
    return updated;
  });
}

export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    const row = await prisma.blogPost.delete({ where: { id } });
    revalidatePublic(["/blog", `/blog/${row.slug}`]);
    return { ok: true };
  });
}
