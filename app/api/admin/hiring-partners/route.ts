import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { hiringPartnerUpsertSchema } from "@/lib/zod-schemas";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  return withAdmin(req, async () => prisma.hiringPartner.findMany({ orderBy: { order: "asc" } }));
}

export async function POST(req: NextRequest) {
  return withAdmin(req, async () => {
    const data = await parseBody(req, hiringPartnerUpsertSchema);
    const created = await prisma.hiringPartner.create({ data });
    revalidatePublic();
    return created;
  });
}
