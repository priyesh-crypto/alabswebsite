import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import BatchesClient, { type BatchRow } from "./BatchesClient";

export const dynamic = "force-dynamic";

export default async function BatchesPage() {
  const [batches, courses, modes] = await Promise.all([
    prisma.batch.findMany({
      orderBy: [{ isActive: "desc" }, { startDate: "asc" }],
      include: { course: { select: { title: true } } },
    }),
    prisma.course.findMany({ orderBy: { title: "asc" }, select: { id: true, title: true } }),
    prisma.learningMode.findMany({ orderBy: { order: "asc" }, select: { id: true, name: true } }),
  ]);

  const rows: BatchRow[] = batches.map(b => ({
    id: b.id,
    courseId: b.courseId,
    courseTitle: b.course.title,
    location: b.location,
    startDate: b.startDate.toISOString(),
    schedule: b.schedule,
    seatsLeft: b.seatsLeft,
    modeId: b.modeId,
    isActive: b.isActive,
  }));

  return (
    <div>
      <AdminPageHeader
        title="Batches"
        description="Upcoming batch schedule across every course. Shown on the Upcoming Batches page and the course detail pages."
      />
      <BatchesClient
        rows={rows}
        courses={courses}
        modes={modes}
      />
    </div>
  );
}
