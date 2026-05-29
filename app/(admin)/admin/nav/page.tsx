import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import NavClient, { type NavRow } from "./NavClient";

export const dynamic = "force-dynamic";

export default async function NavPage() {
  const items = await prisma.navItem.findMany({
    orderBy: [{ group: "asc" }, { order: "asc" }],
  });

  const rows: NavRow[] = items.map(i => ({
    id: i.id,
    label: i.label,
    url: i.url,
    group: i.group,
    order: i.order,
    parentId: i.parentId,
    isActive: i.isActive,
  }));

  return (
    <div>
      <AdminPageHeader
        title="Navigation"
        description="Edit the links in the top navigation, the Explore Courses mega-menu, and the footer. Use the parent picker to nest a link under a mega-menu column."
      />
      <NavClient rows={rows} />
    </div>
  );
}
