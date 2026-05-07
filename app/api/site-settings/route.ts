import { prisma } from "@/lib/prisma";
import { handleError, ok } from "@/lib/api";

export const runtime = "nodejs";
export const revalidate = 60;

export async function GET() {
  try {
    const settings = await prisma.siteSettings.findUnique({ where: { id: 1 } });
    return ok(settings);
  } catch (err) {
    return handleError(err);
  }
}
