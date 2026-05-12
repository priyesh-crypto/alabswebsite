import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import LearningModesClient from "./LearningModesClient";

export const dynamic = "force-dynamic";

export default async function LearningModesPage() {
  const rows = await prisma.learningMode.findMany({ orderBy: { order: "asc" } });
  return (
    <div>
      <AdminPageHeader
        title="Learning modes"
        description="Tab labels and subtitles for the landing-page Learning Modes section. Batches link to a mode via Batch.modeId."
      />
      <LearningModesClient rows={rows} />
    </div>
  );
}
