import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import CrudClient, { type ColumnDef, type FieldDef } from "../_components/CrudClient";

export const dynamic = "force-dynamic";

type Row = Awaited<ReturnType<typeof prisma.testimonial.findMany>>[number];

const columns: ColumnDef<Row>[] = [
  { key: "order", label: "#", width: "60px" },
  { key: "name", label: "Name", render: r => <span className="font-medium">{r.name}</span> },
  { key: "role", label: "Role / Company",
    render: r => <span className="text-gray-600">{[r.role, r.company].filter(Boolean).join(" · ") || "—"}</span> },
  { key: "rating", label: "Rating", width: "80px", render: r => "⭐".repeat(r.rating) },
  { key: "isActive", label: "Active", width: "80px",
    render: r => r.isActive
      ? <span className="text-green-600 text-xs font-semibold">YES</span>
      : <span className="text-gray-400 text-xs">no</span> },
];

const fields: FieldDef[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "role", label: "Role", type: "text" },
  { name: "company", label: "Company", type: "text" },
  { name: "photoUrl", label: "Photo URL", type: "url" },
  { name: "quote", label: "Quote", type: "textarea", rows: 5, required: true },
  { name: "rating", label: "Rating (1-5)", type: "number", min: 1, max: 5 },
  { name: "courseId", label: "Course ID (optional)", type: "text" },
  { name: "order", label: "Order", type: "number", min: 0 },
  { name: "isActive", label: "Active (visible on landing)", type: "boolean" },
];

export default async function TestimonialsPage() {
  const rows = await prisma.testimonial.findMany({ orderBy: [{ isActive: "desc" }, { order: "asc" }] });
  return (
    <div>
      <AdminPageHeader title="Testimonials" description="Quotes shown in the testimonial carousel." />
      <CrudClient
        resource="testimonials"
        rows={rows}
        columns={columns}
        fields={fields}
        emptyForm={{ name: "", role: "", company: "", photoUrl: "", quote: "", rating: 5, courseId: "", order: rows.length, isActive: true }}
        searchKeys={["name", "company", "quote"]}
      />
    </div>
  );
}
