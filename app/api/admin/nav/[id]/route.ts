import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { navItemUpsertSchema } from "@/lib/zod-schemas";
import { badRequest } from "@/lib/api";

export const runtime = "nodejs";

export async function PUT(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    const data = await parseBody(req, navItemUpsertSchema);
    // Guard against a self-referencing parent (would orphan the tree).
    if (data.parentId === id) return badRequest("A nav item cannot be its own parent");
    const updated = await prisma.navItem.update({ where: { id }, data });
    revalidatePublic();
    return updated;
  });
}

export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    // Re-parent any children to top level so they aren't orphaned by the FK.
    await prisma.navItem.updateMany({ where: { parentId: id }, data: { parentId: null } });
    await prisma.navItem.delete({ where: { id } });
    revalidatePublic();
    return { ok: true };
  });
}
