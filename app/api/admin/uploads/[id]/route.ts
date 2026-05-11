import { NextRequest } from "next/server";
import { unlink } from "node:fs/promises";
import path from "node:path";
import { prisma } from "@/lib/prisma";
import { withAdmin } from "@/lib/admin-api";
import { notFound } from "@/lib/api";

export const runtime = "nodejs";

export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    const asset = await prisma.uploadedAsset.findUnique({ where: { id } });
    if (!asset) return notFound();
    // Best-effort delete on disk for local uploads. Don't fail the API if unlink errors.
    if ((process.env.UPLOAD_DRIVER ?? "local") === "local" && asset.url.startsWith("/uploads/")) {
      const filename = asset.url.replace(/^\/uploads\//, "");
      const filePath = path.resolve(process.env.UPLOAD_DIR ?? "./public/uploads", filename);
      await unlink(filePath).catch(() => undefined);
    }
    await prisma.uploadedAsset.delete({ where: { id } });
    return { ok: true };
  });
}
