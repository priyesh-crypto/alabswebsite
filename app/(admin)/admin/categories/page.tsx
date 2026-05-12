import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import CategoriesClient from "./CategoriesClient";

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
  const rows = await prisma.category.findMany({ orderBy: { order: "asc" } });
  return (
    <div>
      <AdminPageHeader title="Categories" description="Course categories drive the landing-page tabs and marquee pills." />
      <CategoriesClient rows={rows} />
    </div>
  );
}
