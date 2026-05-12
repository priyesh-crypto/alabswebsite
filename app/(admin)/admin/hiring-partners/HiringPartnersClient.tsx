"use client";

import CrudClient, { type ColumnDef, type FieldDef } from "../_components/CrudClient";

export type HiringPartnerRow = {
  id: string;
  order: number;
  name: string;
  logoUrl: string;
};

const columns: ColumnDef<HiringPartnerRow>[] = [
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
  { name: "logoUrl", label: "Logo", type: "image", required: true },
  { name: "order", label: "Order", type: "number", min: 0 },
];

export default function HiringPartnersClient({ rows }: { rows: HiringPartnerRow[] }) {
  return (
    <CrudClient
      resource="hiring-partners"
      rows={rows}
      columns={columns}
      fields={fields}
      emptyForm={{ name: "", logoUrl: "", order: rows.length }}
      searchKeys={["name"]}
    />
  );
}
