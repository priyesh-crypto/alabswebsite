import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { badRequest, handleError, ok } from "@/lib/api";

export const runtime = "nodejs";

const ALLOWED_GROUPS = ["TOP_NAV", "MEGA_MENU", "FOOTER_LINKS", "FOOTER_CITIES"] as const;
type NavGroupName = (typeof ALLOWED_GROUPS)[number];

export async function GET(req: NextRequest) {
  try {
    const group = req.nextUrl.searchParams.get("group");
    if (!group || !ALLOWED_GROUPS.includes(group as NavGroupName)) {
      return badRequest(`group must be one of ${ALLOWED_GROUPS.join(", ")}`);
    }
    const items = await prisma.navItem.findMany({
      where: { group: group as NavGroupName, isActive: true },
      include: { children: { where: { isActive: true }, orderBy: { order: "asc" } } },
      orderBy: { order: "asc" },
    });
    return ok(items);
  } catch (err) {
    return handleError(err);
  }
}
