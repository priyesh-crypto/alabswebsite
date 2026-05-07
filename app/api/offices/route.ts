import { prisma } from "@/lib/prisma";
import { handleError, ok } from "@/lib/api";

export const runtime = "nodejs";
export const revalidate = 60;

export async function GET() {
  try {
    const offices = await prisma.office.findMany({
      where: { isActive: true },
      orderBy: { order: "asc" },
    });
    return ok(offices);
  } catch (err) {
    return handleError(err);
  }
}
