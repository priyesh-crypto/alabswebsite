import { prisma } from "@/lib/prisma";
import { handleError, ok, withCache } from "@/lib/api";

export const runtime = "nodejs";

export async function GET() {
  try {
    const settings = await prisma.siteSettings.findUnique({ where: { id: 1 } });
    return ok(settings, withCache({}, 3600)); // Site settings can be cached longer (1h)
  } catch (err) {
    return handleError(err);
  }
}
