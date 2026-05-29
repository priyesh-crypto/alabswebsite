import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { batchUpsertSchema } from "@/lib/zod-schemas";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  return withAdmin(req, async () =>
    prisma.batch.findMany({
      orderBy: [{ isActive: "desc" }, { startDate: "asc" }],
      include: { course: { select: { title: true } } },
    }),
  );
}

export async function POST(req: NextRequest) {
  return withAdmin(req, async () => {
    const data = await parseBody(req, batchUpsertSchema);
    const created = await prisma.batch.create({ data });
    revalidatePublic(["/batches"]);
    return created;
  });
}
