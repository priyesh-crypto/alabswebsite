import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { learningModeUpsertSchema } from "@/lib/zod-schemas";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  return withAdmin(req, async () => prisma.learningMode.findMany({ orderBy: { order: "asc" } }));
}

export async function POST(req: NextRequest) {
  return withAdmin(req, async () => {
    const data = await parseBody(req, learningModeUpsertSchema);
    const created = await prisma.learningMode.create({ data });
    revalidatePublic();
    return created;
  });
}
