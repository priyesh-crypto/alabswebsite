import { prisma } from "@/lib/prisma";
import { handleError, ok } from "@/lib/api";

export const runtime = "nodejs";
export const revalidate = 60;

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { order: "asc" },
    });
    return ok(categories);
  } catch (err) {
    return handleError(err);
  }
}
