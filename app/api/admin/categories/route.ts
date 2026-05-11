import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { categoryUpsertSchema } from "@/lib/zod-schemas";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  return withAdmin(req, async () => prisma.category.findMany({ orderBy: { order: "asc" } }));
}

export async function POST(req: NextRequest) {
  return withAdmin(req, async () => {
    const data = await parseBody(req, categoryUpsertSchema);
    const created = await prisma.category.create({ data });
    revalidatePublic();
    return created;
  });
}
