import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import TeamClient from "./TeamClient";

export const dynamic = "force-dynamic";

export default async function TeamPage() {
  const rows = await prisma.teamMember.findMany({ orderBy: { order: "asc" } });
  return (
    <div>
      <AdminPageHeader title="Team" description="Leadership / faculty cards shown on the About page." />
      <TeamClient rows={rows} />
    </div>
  );
}
