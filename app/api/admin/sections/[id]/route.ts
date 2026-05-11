import { NextRequest } from "next/server";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { withAdmin, parseBody, revalidatePublic } from "@/lib/admin-api";

export const runtime = "nodejs";

const patchSchema = z.object({
  contentDraft: z.record(z.string(), z.unknown()),
  isVisible: z.boolean().optional(),
});

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return withAdmin(req, async ({ session }) => {
    const data = await parseBody(req, patchSchema);

    const section = await prisma.section.findUnique({ where: { id } });
    if (!section) throw Object.assign(new Error("Section not found"), { code: "NOT_FOUND" });

    const updated = await prisma.section.update({
      where: { id },
      data: {
        contentDraft: data.contentDraft as Prisma.InputJsonValue,
        ...(data.isVisible !== undefined ? { isVisible: data.isVisible } : {}),
        updatedById: session.sub as string,
      },
    });

    await prisma.auditLog.create({
      data: {
        userId: session.sub as string,
        userName: session.name,
        entityType: "Section",
        entityId: id,
        action: "update_draft",
        diff: { contentDraft: data.contentDraft } as Prisma.InputJsonValue,
      },
    });

    revalidatePublic();
    return updated;
  });
}
