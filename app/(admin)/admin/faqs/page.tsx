import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import FaqsClient from "./FaqsClient";

export const dynamic = "force-dynamic";

export default async function FaqsPage() {
  const rows = await prisma.faq.findMany({ orderBy: [{ scope: "asc" }, { order: "asc" }] });
  return (
    <div>
      <AdminPageHeader
        title="FAQs"
        description="Frequently asked questions. The landing page reads scope=GLOBAL; course detail pages read scope=<courseId>."
      />
      <FaqsClient rows={rows} />
    </div>
  );
}
