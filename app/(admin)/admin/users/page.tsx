import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { readSession } from "@/lib/auth";
import AdminPageHeader from "../_components/AdminPageHeader";
import UsersClient from "./UsersClient";

export const dynamic = "force-dynamic";

export default async function AdminUsersPage() {
  const session = await readSession();
  if (!session || session.role !== "ADMIN") redirect("/admin");

  const rows = await prisma.adminUser.findMany({
    orderBy: { createdAt: "asc" },
    select: { id: true, email: true, name: true, role: true, createdAt: true },
  });
  return (
    <div>
      <AdminPageHeader
        title="Admin users"
        description="Only ADMIN role can manage this list. Editors cannot create users or change roles."
      />
      <UsersClient rows={rows} />
    </div>
  );
}
