import { prisma } from "@/lib/prisma";
import { handleError, ok } from "@/lib/api";

export const runtime = "nodejs";
export const revalidate = 60;

export async function GET() {
  try {
    const items = await prisma.teamMember.findMany({ orderBy: { order: "asc" } });
    return ok(items);
  } catch (err) {
    return handleError(err);
  }
}
