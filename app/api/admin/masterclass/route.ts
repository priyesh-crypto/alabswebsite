import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { masterclassUpsertSchema } from "@/lib/zod-schemas";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  return withAdmin(req, async () => prisma.masterclass.findMany({ orderBy: { startsAt: "desc" } }));
}

export async function POST(req: NextRequest) {
  return withAdmin(req, async () => {
    const data = await parseBody(req, masterclassUpsertSchema);
    // If activating a new one, deactivate the others — landing reads only one active.
    if (data.isActive) {
      await prisma.masterclass.updateMany({ where: { isActive: true }, data: { isActive: false } });
    }
    const created = await prisma.masterclass.create({ data });
    revalidatePublic();
    return created;
  });
}
