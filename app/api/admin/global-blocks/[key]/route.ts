import { NextRequest } from "next/server";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { withAdmin, parseBody, revalidatePublic } from "@/lib/admin-api";

export const runtime = "nodejs";

const ALLOWED_KEYS = new Set(["header", "footer", "cta_banner", "call_back", "pdp_labels"]);

const patchSchema = z.object({
  data: z.record(z.string(), z.unknown()),
});

export async function GET(req: NextRequest, { params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  return withAdmin(req, async () => {
    if (!ALLOWED_KEYS.has(key)) throw Object.assign(new Error("Unknown block key"), { code: "NOT_FOUND" });
    const block = await prisma.globalBlock.findUnique({ where: { key } });
    if (!block) throw Object.assign(new Error("Block not found"), { code: "NOT_FOUND" });
    return block;
  });
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  return withAdmin(req, async ({ session }) => {
    if (!ALLOWED_KEYS.has(key)) throw Object.assign(new Error("Unknown block key"), { code: "NOT_FOUND" });

    const { data } = await parseBody(req, patchSchema);

    const updated = await prisma.globalBlock.update({
      where: { key },
      data: {
        data: data as Prisma.InputJsonValue,
        updatedById: session.sub as string,
      },
    });

    await prisma.auditLog.create({
      data: {
        userId: session.sub as string,
        userName: session.name,
        entityType: "GlobalBlock",
        entityId: key,
        action: "update_draft",
        diff: { data } as Prisma.InputJsonValue,
      },
    });

    revalidatePublic();
    return updated;
  });
}
