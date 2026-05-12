import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import TestimonialsClient from "./TestimonialsClient";

export const dynamic = "force-dynamic";

export default async function TestimonialsPage() {
  const rows = await prisma.testimonial.findMany({ orderBy: [{ isActive: "desc" }, { order: "asc" }] });
  return (
    <div>
      <AdminPageHeader title="Testimonials" description="Quotes shown in the testimonial carousel." />
      <TestimonialsClient rows={rows} />
    </div>
  );
}
