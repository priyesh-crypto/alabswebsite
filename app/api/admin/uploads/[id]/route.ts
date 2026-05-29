import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAdmin } from "@/lib/admin-api";
import { notFound } from "@/lib/api";
import { deleteFile } from "@/lib/storage";

export const runtime = "nodejs";

export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    const asset = await prisma.uploadedAsset.findUnique({ where: { id } });
    if (!asset) return notFound();
    // Best-effort delete from the underlying store (local disk or Supabase).
    await deleteFile(asset.url);
    await prisma.uploadedAsset.delete({ where: { id } });
    return { ok: true };
  });
}
