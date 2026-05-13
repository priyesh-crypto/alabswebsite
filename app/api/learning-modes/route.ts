import { prisma } from "@/lib/prisma";
import { handleError, ok } from "@/lib/api";

export const runtime = "nodejs";

export async function GET() {
  try {
    const modes = await prisma.learningMode.findMany({
      where: { isActive: true },
      orderBy: { order: "asc" },
    });
    return ok(modes);
  } catch (err) {
    return handleError(err);
  }
}
