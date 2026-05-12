import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import MasterclassClient from "./MasterclassClient";

export const dynamic = "force-dynamic";

export default async function MasterclassPage() {
  const rows = await prisma.masterclass.findMany({ orderBy: { startsAt: "desc" } });
  return (
    <div>
      <AdminPageHeader
        title="Masterclass banner"
        description="Lead-gen banner. Only one active row is rendered on the public site at a time."
      />
      <MasterclassClient rows={rows} />
    </div>
  );
}
