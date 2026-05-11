import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { faqUpsertSchema } from "@/lib/zod-schemas";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  return withAdmin(req, async () => prisma.faq.findMany({ orderBy: [{ scope: "asc" }, { order: "asc" }] }));
}

export async function POST(req: NextRequest) {
  return withAdmin(req, async () => {
    const data = await parseBody(req, faqUpsertSchema);
    const created = await prisma.faq.create({ data });
    revalidatePublic();
    return created;
  });
}
