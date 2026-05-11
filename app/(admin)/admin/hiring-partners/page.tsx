import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import CrudClient, { type ColumnDef, type FieldDef } from "../_components/CrudClient";

export const dynamic = "force-dynamic";

type Row = Awaited<ReturnType<typeof prisma.hiringPartner.findMany>>[number];

const columns: ColumnDef<Row>[] = [
  { key: "order", label: "#", width: "60px" },
  { key: "name", label: "Name" },
  {
    key: "logoUrl",
    label: "Logo",
    render: r =>
      r.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={r.logoUrl} alt={r.name} className="h-8 w-auto object-contain" />
      ) : <span className="text-gray-400">—</span>,
  },
];

const fields: FieldDef[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "logoUrl", label: "Logo URL", type: "url", required: true, placeholder: "https://…/logo.png" },
  { name: "order", label: "Order", type: "number", min: 0 },
];

export default async function HiringPartnersPage() {
  const rows = await prisma.hiringPartner.findMany({ orderBy: { order: "asc" } });
  return (
    <div>
      <AdminPageHeader title="Hiring partners" description="Logos shown in the landing-page logo marquee." />
      <CrudClient
        resource="hiring-partners"
        rows={rows}
        columns={columns}
        fields={fields}
        emptyForm={{ name: "", logoUrl: "", order: rows.length }}
        searchKeys={["name"]}
      />
    </div>
  );
}
