"use client";

import CrudClient, { type ColumnDef, type FieldDef } from "../_components/CrudClient";

export type BatchRow = {
  id: string;
  courseId: string;
  courseTitle: string;
  location: string;
  startDate: string; // ISO
  schedule: string;
  seatsLeft: number;
  modeId: string | null;
  isActive: boolean;
};

type Option = { id: string; title?: string; name?: string };

function fmtDate(iso: string): string {
  // Render as a friendly date; keep it locale-stable.
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

const columns: ColumnDef<BatchRow>[] = [
  { key: "courseTitle", label: "Course", render: r => <span className="font-medium">{r.courseTitle}</span> },
  { key: "location", label: "Location" },
  { key: "startDate", label: "Starts", width: "120px", render: r => fmtDate(r.startDate) },
  { key: "schedule", label: "Schedule", render: r => <span className="text-gray-600">{r.schedule}</span> },
  { key: "seatsLeft", label: "Seats", width: "70px" },
  {
    key: "isActive",
    label: "Active",
    width: "80px",
    render: r =>
      r.isActive
        ? <span className="text-green-600 text-xs font-semibold">YES</span>
        : <span className="text-gray-400 text-xs">no</span>,
  },
];

export default function BatchesClient({
  rows,
  courses,
  modes,
}: {
  rows: BatchRow[];
  courses: { id: string; title: string }[];
  modes: { id: string; name: string }[];
}) {
  const fields: FieldDef[] = [
    {
      name: "courseId",
      label: "Course",
      type: "select",
      required: true,
      options: courses.map(c => ({ value: c.id, label: c.title })),
    },
    { name: "location", label: "Location", type: "text", required: true, placeholder: "Gurgaon / Online / …" },
    { name: "startDate", label: "Start date", type: "date", required: true },
    { name: "schedule", label: "Schedule", type: "text", required: true, placeholder: "Weekends (2:00 PM)" },
    { name: "seatsLeft", label: "Seats left", type: "number", min: 0 },
    {
      name: "modeId",
      label: "Learning mode (optional)",
      type: "select",
      options: modes.map(m => ({ value: m.id, label: m.name })),
    },
    { name: "isActive", label: "Active (visible on site)", type: "boolean" },
  ];

  return (
    <CrudClient<BatchRow>
      resource="batches"
      rows={rows}
      columns={columns}
      fields={fields}
      emptyForm={{
        courseId: courses[0]?.id ?? "",
        location: "",
        startDate: "",
        schedule: "",
        seatsLeft: 0,
        modeId: "",
        isActive: true,
      }}
      // Date input wants YYYY-MM-DD; the row carries an ISO string.
      toForm={r => ({
        courseId: r.courseId,
        location: r.location,
        startDate: r.startDate ? r.startDate.slice(0, 10) : "",
        schedule: r.schedule,
        seatsLeft: r.seatsLeft,
        modeId: r.modeId ?? "",
        isActive: r.isActive,
      })}
      searchKeys={["courseTitle", "location", "schedule"]}
    />
  );
}
