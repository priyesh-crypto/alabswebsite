import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { testimonialUpsertSchema } from "@/lib/zod-schemas";

export const runtime = "nodejs";

export async function PUT(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    const data = await parseBody(req, testimonialUpsertSchema);
    const updated = await prisma.testimonial.update({ where: { id }, data });
    revalidatePublic();
    return updated;
  });
}

export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(req, async () => {
    await prisma.testimonial.delete({ where: { id } });
    revalidatePublic();
    return { ok: true };
  });
}
