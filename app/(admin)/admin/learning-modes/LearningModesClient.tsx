"use client";

import CrudClient, { type ColumnDef, type FieldDef } from "../_components/CrudClient";

export type LearningModeRow = {
  id: string;
  order: number;
  name: string;
  slug: string;
  subtitle: string | null;
  isActive: boolean;
};

const columns: ColumnDef<LearningModeRow>[] = [
  { key: "order", label: "#", width: "60px" },
  { key: "name", label: "Name", render: r => <span className="font-medium">{r.name}</span> },
  { key: "slug", label: "Slug" },
  { key: "subtitle", label: "Subtitle",
    render: r => <span className="text-gray-600">{r.subtitle ?? "—"}</span> },
  { key: "isActive", label: "Active", width: "80px",
    render: r => r.isActive
      ? <span className="text-green-600 text-xs font-semibold">YES</span>
      : <span className="text-gray-400 text-xs">no</span> },
];

const fields: FieldDef[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "slug", label: "Slug", type: "text", required: true, placeholder: "weekday-bootcamp" },
  { name: "subtitle", label: "Subtitle", type: "textarea", rows: 2 },
  { name: "order", label: "Order", type: "number", min: 0 },
  { name: "isActive", label: "Active", type: "boolean" },
];

export default function LearningModesClient({ rows }: { rows: LearningModeRow[] }) {
  return (
    <CrudClient
      resource="learning-modes"
      rows={rows}
      columns={columns}
      fields={fields}
      emptyForm={{ name: "", slug: "", subtitle: "", order: rows.length, isActive: true }}
      searchKeys={["name", "slug"]}
    />
  );
}
