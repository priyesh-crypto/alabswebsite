import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import CrudClient, { type ColumnDef, type FieldDef } from "../_components/CrudClient";

export const dynamic = "force-dynamic";

type Row = Awaited<ReturnType<typeof prisma.learningMode.findMany>>[number];

const columns: ColumnDef<Row>[] = [
  { key: "order", label: "#", width: "60px" },
  { key: "name", label: "Name", render: r => <span className="font-medium">{r.name}</span> },
  { key: "slug", label: "Slug" },
  { key: "subtitle", label: "Subtitle",
    render: r => <span className="text-gray-600">{r.subtitle ?? "—"}</span> },
  { key: "isActive", label: "Active", width: "80px",
    render: r => r.isActive ? <span className="text-green-600 text-xs font-semibold">YES</span> : <span className="text-gray-400 text-xs">no</span> },
];

const fields: FieldDef[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "slug", label: "Slug", type: "text", required: true, placeholder: "weekday-bootcamp" },
  { name: "subtitle", label: "Subtitle", type: "textarea", rows: 2 },
  { name: "order", label: "Order", type: "number", min: 0 },
  { name: "isActive", label: "Active", type: "boolean" },
];

export default async function LearningModesPage() {
  const rows = await prisma.learningMode.findMany({ orderBy: { order: "asc" } });
  return (
    <div>
      <AdminPageHeader
        title="Learning modes"
        description="Tab labels and subtitles for the landing-page Learning Modes section. Batches link to a mode via Batch.modeId."
      />
      <CrudClient
        resource="learning-modes"
        rows={rows}
        columns={columns}
        fields={fields}
        emptyForm={{ name: "", slug: "", subtitle: "", order: rows.length, isActive: true }}
        searchKeys={["name", "slug"]}
      />
    </div>
  );
}
