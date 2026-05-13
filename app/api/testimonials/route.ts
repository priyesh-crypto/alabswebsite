import { prisma } from "@/lib/prisma";
import { handleError, ok } from "@/lib/api";

export const runtime = "nodejs";

export async function GET() {
  try {
    const items = await prisma.testimonial.findMany({
      where: { isActive: true },
      orderBy: { order: "asc" },
    });
    return ok(items);
  } catch (err) {
    return handleError(err);
  }
}
