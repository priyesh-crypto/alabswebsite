import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { masterclassUpsertSchema } from "@/lib/zod-schemas";

export const runtime = "nodejs";

export async function PUT(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    const data = await parseBody(req, masterclassUpsertSchema);
    if (data.isActive) {
      await prisma.masterclass.updateMany({ where: { isActive: true, NOT: { id } }, data: { isActive: false } });
    }
    const updated = await prisma.masterclass.update({ where: { id }, data });
    revalidatePublic();
    return updated;
  });
}

export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    await prisma.masterclass.delete({ where: { id } });
    revalidatePublic();
    return { ok: true };
  });
}
