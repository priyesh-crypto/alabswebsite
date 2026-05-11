/**
 * GET  /api/admin/site-settings — current settings (singleton row id=1).
 * PUT  /api/admin/site-settings — update them. Triggers public revalidation.
 */
import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, revalidatePublic, withAdmin } from "@/lib/admin-api";
import { siteSettingsUpdateSchema } from "@/lib/zod-schemas";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  return withAdmin(req, async () => {
    const settings = await prisma.siteSettings.findUnique({ where: { id: 1 } });
    return settings;
  });
}

export async function PUT(req: NextRequest) {
  return withAdmin(req, async () => {
    const data = await parseBody(req, siteSettingsUpdateSchema);
    const updated = await prisma.siteSettings.upsert({
      where: { id: 1 },
      create: { id: 1, ...data },
      update: data,
    });
    revalidatePublic();
    return updated;
  });
}
