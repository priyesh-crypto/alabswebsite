import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { handleError, ok, tooMany, unauthorized } from "@/lib/api";
import { adminLoginSchema } from "@/lib/zod-schemas";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { setSessionCookie, signSession, verifyPassword } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const ip = clientIp(req);
    const limited = rateLimit(`admin-login:${ip}`, 10, 60_000);
    if (!limited.allowed) return tooMany("Too many login attempts");

    const body = await req.json();
    const { email, password } = adminLoginSchema.parse(body);

    const user = await prisma.adminUser.findUnique({ where: { email } });
    if (!user) return unauthorized("Invalid email or password");

    const passOk = await verifyPassword(password, user.password);
    if (!passOk) return unauthorized("Invalid email or password");

    const token = await signSession({
      sub: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    });
    await setSessionCookie(token);

    return ok({
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
    });
  } catch (err) {
    return handleError(err);
  }
}
