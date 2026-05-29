import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { batchUpsertSchema } from "@/lib/zod-schemas";

export const runtime = "nodejs";

export async function PUT(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    const data = await parseBody(req, batchUpsertSchema);
    const updated = await prisma.batch.update({ where: { id }, data });
    revalidatePublic(["/batches"]);
    return updated;
  });
}

export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    await prisma.batch.delete({ where: { id } });
    revalidatePublic(["/batches"]);
    return { ok: true };
  });
}
