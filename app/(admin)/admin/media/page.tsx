import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import MediaClient from "./MediaClient";

export const dynamic = "force-dynamic";

export default async function MediaPage() {
  const rows = await prisma.uploadedAsset.findMany({ orderBy: { createdAt: "desc" }, take: 200 });
  return (
    <div>
      <AdminPageHeader
        title="Media library"
        description="Files uploaded by admins. Reference the URL from any image / file field on other pages."
      />
      <MediaClient rows={rows} />
    </div>
  );
}
