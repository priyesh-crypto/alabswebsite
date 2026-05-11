import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { readSession } from "@/lib/auth";
import AdminPageHeader from "../_components/AdminPageHeader";
import CrudClient, { type ColumnDef, type FieldDef } from "../_components/CrudClient";

export const dynamic = "force-dynamic";

type Row = {
  id: string;
  email: string;
  name: string;
  role: "ADMIN" | "EDITOR";
  createdAt: Date;
};

const columns: ColumnDef<Row>[] = [
  { key: "name", label: "Name", render: r => <span className="font-medium">{r.name}</span> },
  { key: "email", label: "Email" },
  { key: "role", label: "Role", width: "100px",
    render: r => r.role === "ADMIN"
      ? <span className="bg-[#1de5b5]/20 text-[#09263f] text-xs font-semibold rounded px-2 py-0.5">ADMIN</span>
      : <span className="bg-gray-100 text-gray-700 text-xs font-semibold rounded px-2 py-0.5">EDITOR</span> },
  { key: "createdAt", label: "Created", width: "180px",
    render: r => <span className="text-gray-500">{new Date(r.createdAt).toLocaleDateString()}</span> },
];

const fields: FieldDef[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "role", label: "Role", type: "select", required: true, options: [
    { value: "EDITOR", label: "EDITOR" },
    { value: "ADMIN", label: "ADMIN" },
  ] },
  { name: "password", label: "Password (leave blank to keep existing on edit; required on create)", type: "text" },
];

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
      <CrudClient
        resource="users"
        rows={rows}
        columns={columns}
        fields={fields}
        emptyForm={{ name: "", email: "", role: "EDITOR", password: "" }}
        toForm={r => ({ name: r.name, email: r.email, role: r.role, password: "" })}
        searchKeys={["name", "email"]}
      />
    </div>
  );
}
