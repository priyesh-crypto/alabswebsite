import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAdmin } from "@/lib/admin-api";

export const runtime = "nodejs";

// List endpoint: just returns slug + title for the sidebar list.
export async function GET(req: NextRequest) {
  return withAdmin(req, async () =>
    prisma.page.findMany({
      orderBy: { slug: "asc" },
      select: { id: true, slug: true, title: true, updatedAt: true },
    }),
  );
}
