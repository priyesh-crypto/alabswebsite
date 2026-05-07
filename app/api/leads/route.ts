import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleError, ok, tooMany } from "@/lib/api";
import { leadInputSchema } from "@/lib/zod-schemas";
import { clientIp, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const ip = clientIp(req);
    const limited = rateLimit(`leads:${ip}`, 5, 60_000);
    if (!limited.allowed) return tooMany("Too many submissions, try again later");

    const body = await req.json();
    const data = leadInputSchema.parse(body);

    const lead = await prisma.lead.create({ data });
    // Echo only the id — never private fields.
    return ok({ id: lead.id }, { status: 201 });
  } catch (err) {
    return handleError(err);
  }
}
