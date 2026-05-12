"use client";

import CrudClient, { type ColumnDef, type FieldDef } from "../_components/CrudClient";

export type OfficeRow = {
  id: string;
  order: number;
  city: string;
  phone: string;
  addressLine1: string;
  addressLine2: string | null;
  hours: string;
  directionsUrl: string;
  mapImageUrl: string | null;
  mapEmbedUrl: string | null;
  isActive: boolean;
};

const columns: ColumnDef<OfficeRow>[] = [
  { key: "order", label: "#", width: "60px" },
  { key: "city", label: "City", render: r => <span className="font-medium">{r.city}</span> },
  { key: "phone", label: "Phone" },
  { key: "addressLine1", label: "Address",
    render: r => <span className="text-gray-600 line-clamp-2">{r.addressLine1}</span> },
  { key: "isActive", label: "Active", width: "80px",
    render: r => r.isActive
      ? <span className="text-green-600 text-xs font-semibold">YES</span>
      : <span className="text-gray-400 text-xs">no</span> },
];

const fields: FieldDef[] = [
  { name: "city", label: "City", type: "text", required: true },
  { name: "addressLine1", label: "Address line 1", type: "textarea", rows: 2, required: true },
  { name: "addressLine2", label: "Address line 2", type: "text" },
  { name: "phone", label: "Phone", type: "text", required: true },
  { name: "hours", label: "Business hours", type: "text", required: true },
  { name: "directionsUrl", label: "Directions URL", type: "url", required: true, placeholder: "https://maps.google.com/?q=…" },
  { name: "mapImageUrl", label: "Static map image URL", type: "url" },
  { name: "mapEmbedUrl", label: "Embed URL (must start with https://www.google.com/maps)", type: "url",
    placeholder: "https://www.google.com/maps?q=AnalytixLabs+Noida&output=embed" },
  { name: "order", label: "Order", type: "number", min: 0 },
  { name: "isActive", label: "Active", type: "boolean" },
];

export default function OfficesClient({ rows }: { rows: OfficeRow[] }) {
  return (
    <CrudClient
      resource="offices"
      rows={rows}
      columns={columns}
      fields={fields}
      emptyForm={{
        city: "", addressLine1: "", addressLine2: "", phone: "", hours: "10:00 AM TO 07:00 PM",
        directionsUrl: "", mapImageUrl: "", mapEmbedUrl: "", order: rows.length, isActive: true,
      }}
      searchKeys={["city"]}
    />
  );
}
