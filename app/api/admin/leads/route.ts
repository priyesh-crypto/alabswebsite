/**
 * Admin leads — list (paginated, filterable) + CSV export.
 *
 * Public site never reads leads, so revalidation isn't needed here.
 */
import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseListQuery, withAdmin } from "@/lib/admin-api";

export const runtime = "nodejs";

function csvEscape(v: unknown): string {
  if (v === null || v === undefined) return "";
  const s = String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export async function GET(req: NextRequest) {
  return withAdmin(req, async () => {
    const sp = req.nextUrl.searchParams;
    const format = sp.get("format");
    const source = sp.get("source") ?? undefined;
    const from = sp.get("from") ? new Date(sp.get("from")!) : undefined;
    const to = sp.get("to") ? new Date(sp.get("to")!) : undefined;
    const { q, page, pageSize, sortBy, sortDir } = parseListQuery(req);

    const where = {
      ...(source ? { source } : {}),
      ...(from || to ? { createdAt: { ...(from ? { gte: from } : {}), ...(to ? { lte: to } : {}) } } : {}),
      ...(q
        ? { OR: [
            { name: { contains: q, mode: "insensitive" as const } },
            { email: { contains: q, mode: "insensitive" as const } },
            { phone: { contains: q } },
          ] }
        : {}),
    };

    if (format === "csv") {
      const rows = await prisma.lead.findMany({ where, orderBy: { createdAt: "desc" }, take: 5000 });
      const header = ["createdAt", "source", "name", "email", "phone", "city", "company", "courseId", "message"];
      const lines = [
        header.join(","),
        ...rows.map(r => [
          r.createdAt.toISOString(),
          r.source,
          r.name,
          r.email,
          r.phone,
          r.city,
          r.company,
          r.courseId,
          r.message,
        ].map(csvEscape).join(",")),
      ];
      return new Response(lines.join("\n"), {
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": `attachment; filename=leads-${new Date().toISOString().slice(0, 10)}.csv`,
        },
      });
    }

    const orderBy = sortBy ? { [sortBy]: sortDir } : { createdAt: "desc" as const };
    const [rows, total] = await Promise.all([
      prisma.lead.findMany({ where, orderBy, skip: (page - 1) * pageSize, take: pageSize }),
      prisma.lead.count({ where }),
    ]);
    return { rows, total, page, pageSize };
  });
}
