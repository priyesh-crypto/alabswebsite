import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { teamMemberUpsertSchema } from "@/lib/zod-schemas";

export const runtime = "nodejs";

export async function PUT(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    const data = await parseBody(req, teamMemberUpsertSchema);
    const updated = await prisma.teamMember.update({ where: { id }, data });
    revalidatePublic();
    return updated;
  });
}

export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    await prisma.teamMember.delete({ where: { id } });
    revalidatePublic();
    return { ok: true };
  });
}
