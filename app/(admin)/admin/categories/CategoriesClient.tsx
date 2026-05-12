"use client";

import CrudClient, { type ColumnDef, type FieldDef } from "../_components/CrudClient";

export type CategoryRow = {
  id: string;
  order: number;
  name: string;
  slug: string;
  color: string | null;
};

const columns: ColumnDef<CategoryRow>[] = [
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

export default function CategoriesClient({ rows }: { rows: CategoryRow[] }) {
  return (
    <CrudClient
      resource="categories"
      rows={rows}
      columns={columns}
      fields={fields}
      emptyForm={{ name: "", slug: "", order: rows.length, color: "" }}
      searchKeys={["name", "slug"]}
    />
  );
}
