import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { navItemUpsertSchema } from "@/lib/zod-schemas";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  return withAdmin(req, async () =>
    prisma.navItem.findMany({ orderBy: [{ group: "asc" }, { order: "asc" }] }),
  );
}

export async function POST(req: NextRequest) {
  return withAdmin(req, async () => {
    const data = await parseBody(req, navItemUpsertSchema);
    const created = await prisma.navItem.create({ data });
    revalidatePublic();
    return created;
  });
}
