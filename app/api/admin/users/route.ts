import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, withAdmin } from "@/lib/admin-api";
import { adminUserCreateSchema } from "@/lib/zod-schemas";
import { hashPassword } from "@/lib/auth";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  return withAdmin(
    req,
    async () =>
      prisma.adminUser.findMany({
        orderBy: { createdAt: "asc" },
        select: { id: true, email: true, name: true, role: true, createdAt: true },
      }),
    { requireRole: "ADMIN" },
  );
}

export async function POST(req: NextRequest) {
  return withAdmin(
    req,
    async () => {
      const data = await parseBody(req, adminUserCreateSchema);
      const passwordHash = await hashPassword(data.password);
      const created = await prisma.adminUser.create({
        data: { email: data.email, name: data.name, password: passwordHash, role: data.role },
        select: { id: true, email: true, name: true, role: true, createdAt: true },
      });
      return created;
    },
    { requireRole: "ADMIN" },
  );
}
