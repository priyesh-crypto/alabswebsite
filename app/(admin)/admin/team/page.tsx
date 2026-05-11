import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import CrudClient, { type ColumnDef, type FieldDef } from "../_components/CrudClient";

export const dynamic = "force-dynamic";

type Row = Awaited<ReturnType<typeof prisma.teamMember.findMany>>[number];

const columns: ColumnDef<Row>[] = [
  { key: "order", label: "#", width: "60px" },
  {
    key: "photoUrl",
    label: "Photo",
    width: "80px",
    render: r =>
      r.photoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={r.photoUrl} alt={r.name} className="size-10 rounded-full object-cover" />
      ) : <span className="text-gray-400">—</span>,
  },
  { key: "name", label: "Name", render: r => <span className="font-medium">{r.name}</span> },
  { key: "role", label: "Role" },
  { key: "linkedinUrl", label: "LinkedIn",
    render: r => r.linkedinUrl
      ? <a href={r.linkedinUrl} target="_blank" rel="noopener" className="text-[#1de5b5] hover:underline">profile</a>
      : <span className="text-gray-400">—</span> },
];

const fields: FieldDef[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "role", label: "Role", type: "text", required: true },
  { name: "photoUrl", label: "Photo URL", type: "url" },
  { name: "bio", label: "Bio", type: "textarea", rows: 4 },
  { name: "linkedinUrl", label: "LinkedIn URL", type: "url" },
  { name: "order", label: "Order", type: "number", min: 0 },
];

export default async function TeamPage() {
  const rows = await prisma.teamMember.findMany({ orderBy: { order: "asc" } });
  return (
    <div>
      <AdminPageHeader title="Team" description="Leadership / faculty cards shown on the About page." />
      <CrudClient
        resource="team"
        rows={rows}
        columns={columns}
        fields={fields}
        emptyForm={{ name: "", role: "", photoUrl: "", bio: "", linkedinUrl: "", order: rows.length }}
        searchKeys={["name", "role"]}
      />
    </div>
  );
}
