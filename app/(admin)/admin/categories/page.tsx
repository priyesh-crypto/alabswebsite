import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import CrudClient, { type ColumnDef, type FieldDef } from "../_components/CrudClient";

export const dynamic = "force-dynamic";

type Row = Awaited<ReturnType<typeof prisma.category.findMany>>[number];

const columns: ColumnDef<Row>[] = [
  { key: "order", label: "#", width: "60px" },
  { key: "name", label: "Name" },
  { key: "slug", label: "Slug" },
  {
    key: "color",
    label: "Color",
    render: r =>
      r.color ? (
        <span className="inline-flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded border" style={{ background: r.color }} />
          <code className="text-xs">{r.color}</code>
        </span>
      ) : <span className="text-gray-400">—</span>,
  },
];

const fields: FieldDef[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "slug", label: "Slug", type: "text", required: true, placeholder: "data-science" },
  { name: "order", label: "Order", type: "number", min: 0 },
  { name: "color", label: "Pill color (hex)", type: "text", placeholder: "#d2faf0" },
];

export default async function CategoriesPage() {
  const rows = await prisma.category.findMany({ orderBy: { order: "asc" } });
  return (
    <div>
      <AdminPageHeader title="Categories" description="Course categories drive the landing-page tabs and marquee pills." />
      <CrudClient
        resource="categories"
        rows={rows}
        columns={columns}
        fields={fields}
        emptyForm={{ name: "", slug: "", order: rows.length, color: "" }}
        searchKeys={["name", "slug"]}
      />
    </div>
  );
}
