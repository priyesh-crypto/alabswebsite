import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import HiringPartnersClient from "./HiringPartnersClient";

export const dynamic = "force-dynamic";

export default async function HiringPartnersPage() {
  const rows = await prisma.hiringPartner.findMany({ orderBy: { order: "asc" } });
  return (
    <div>
      <AdminPageHeader title="Hiring partners" description="Logos shown in the landing-page logo marquee." />
      <HiringPartnersClient rows={rows} />
    </div>
  );
}
