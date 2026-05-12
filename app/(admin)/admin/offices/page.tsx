import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import OfficesClient from "./OfficesClient";

export const dynamic = "force-dynamic";

export default async function OfficesPage() {
  const rows = await prisma.office.findMany({ orderBy: { order: "asc" } });
  return (
    <div>
      <AdminPageHeader title="Offices" description="Office locations shown on the contact section, footer, and landing-page map." />
      <OfficesClient rows={rows} />
    </div>
  );
}
