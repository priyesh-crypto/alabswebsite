import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { testimonialUpsertSchema } from "@/lib/zod-schemas";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  return withAdmin(req, async () => prisma.testimonial.findMany({ orderBy: [{ isActive: "desc" }, { order: "asc" }] }));
}

export async function POST(req: NextRequest) {
  return withAdmin(req, async () => {
    const data = await parseBody(req, testimonialUpsertSchema);
    const created = await prisma.testimonial.create({ data });
    revalidatePublic();
    return created;
  });
}
