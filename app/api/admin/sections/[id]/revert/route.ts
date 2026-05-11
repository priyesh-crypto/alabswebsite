import { NextRequest } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { withAdmin, revalidatePublic } from "@/lib/admin-api";

export const runtime = "nodejs";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return withAdmin(req, async ({ session }) => {
    const section = await prisma.section.findUnique({ where: { id } });
    if (!section) throw Object.assign(new Error("Section not found"), { code: "NOT_FOUND" });
    if (!section.contentPublished) {
      throw Object.assign(new Error("No published version to revert to"), { code: "BAD_REQUEST" });
    }

    const updated = await prisma.section.update({
      where: { id },
      data: {
        contentDraft: section.contentPublished as Prisma.InputJsonValue,
        updatedById: session.sub as string,
      },
    });

    await prisma.auditLog.create({
      data: {
        userId: session.sub as string,
        userName: session.name,
        entityType: "Section",
        entityId: id,
        action: "revert",
        diff: { revertedTo: section.contentPublished } as Prisma.InputJsonValue,
      },
    });

    revalidatePublic();
    return updated;
  });
}
