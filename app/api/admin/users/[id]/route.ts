import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseBody, withAdmin } from "@/lib/admin-api";
import { adminUserUpdateSchema } from "@/lib/zod-schemas";
import { hashPassword } from "@/lib/auth";
import { badRequest } from "@/lib/api";

export const runtime = "nodejs";

export async function PUT(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(
    req,
    async () => {
      const data = await parseBody(req, adminUserUpdateSchema);
      const update: { email: string; name: string; role: "ADMIN" | "EDITOR"; password?: string } = {
        email: data.email,
        name: data.name,
        role: data.role,
      };
      if (data.password) update.password = await hashPassword(data.password);
      const updated = await prisma.adminUser.update({
        where: { id },
        data: update,
        select: { id: true, email: true, name: true, role: true, createdAt: true },
      });
      return updated;
    },
    { requireRole: "ADMIN" },
  );
}

export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  return withAdmin(
    req,
    async ({ session }) => {
      // Don't let an admin delete themselves — easy way to lock everyone out.
      if (session.sub === id) return badRequest("Cannot delete your own account");
      // Don't let the last ADMIN be deleted.
      const adminCount = await prisma.adminUser.count({ where: { role: "ADMIN" } });
      const target = await prisma.adminUser.findUnique({ where: { id }, select: { role: true } });
      if (target?.role === "ADMIN" && adminCount <= 1) {
        return badRequest("Cannot delete the last admin");
      }
      await prisma.adminUser.delete({ where: { id } });
      return { ok: true };
    },
    { requireRole: "ADMIN" },
  );
}
