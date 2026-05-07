import { prisma } from "@/lib/prisma";
import { handleError, ok } from "@/lib/api";

export const runtime = "nodejs";
export const revalidate = 60;

export async function GET() {
  try {
    const masterclass = await prisma.masterclass.findFirst({
      where: { isActive: true },
      orderBy: { startsAt: "asc" },
    });
    return ok(masterclass);
  } catch (err) {
    return handleError(err);
  }
}
