import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../../_components/AdminPageHeader";
import GlobalBlockEditor, { type GlobalFieldDef } from "@/components/admin/GlobalBlockEditor";

export const dynamic = "force-dynamic";

const FIELDS: GlobalFieldDef[] = [
  { name: "projectsTitle", label: "Capstone projects — title", type: "text" },
  { name: "toolsTitle", label: "Tools & technologies — title", type: "text" },
  { name: "whoShouldJoinTitle", label: "Who should join — title", type: "text" },
  { name: "jobRolesTitle", label: "Job roles — title", type: "text" },
  { name: "keySkillsTitle", label: "Key skills — title", type: "text" },
  { name: "learningModesTitle", label: "Learning modes — title", type: "text" },
  { name: "courseFeesTitle", label: "Course fees — title", type: "text" },
  { name: "careerSupportTitle", label: "Career support — title", type: "text" },
  { name: "howToApplyTitle", label: "How to apply — title", type: "text" },
  { name: "learnersTitle", label: "Testimonials strip — title", type: "text" },
  { name: "studentStoriesTitle", label: "Student stories — title", type: "text" },
  { name: "relatedArticlesTitle", label: "Related articles — title", type: "text" },
  { name: "faqTitle", label: "FAQ — title", type: "text" },
  { name: "batchesTitle", label: "Batches table — title", type: "text" },
];

const DEFAULT: Record<string, unknown> = {
  projectsTitle: "Data Science Capstone Projects & Assignments",
  toolsTitle: "Data Science Tools & Technologies",
  whoShouldJoinTitle: "Who Should Join",
  jobRolesTitle: "Job Roles You Can Pursue",
  keySkillsTitle: "Key Skills You'll Gain",
  learningModesTitle: "Learning Modes",
  courseFeesTitle: "Course Fees",
  careerSupportTitle: "Career Support",
  howToApplyTitle: "How to Apply",
  learnersTitle: "What Our Learners Say",
  studentStoriesTitle: "Student Success Stories",
  relatedArticlesTitle: "Related Articles",
  faqTitle: "Frequently Asked Questions",
  batchesTitle: "Upcoming Batches",
};

export default async function PdpLabelsPage() {
  let block = await prisma.globalBlock.findUnique({ where: { key: "pdp_labels" } });
  if (!block) {
    block = await prisma.globalBlock.create({
      data: { key: "pdp_labels", label: "PDP section labels", data: DEFAULT as Prisma.InputJsonValue },
    });
  }

  return (
    <div className="max-w-2xl">
      <AdminPageHeader
        title="Course-page section labels"
        description="Edit the section headings shown on every course detail (PDP) page. These apply to all courses."
      />
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <GlobalBlockEditor
          blockKey="pdp_labels"
          initialData={block.data as Record<string, unknown>}
          fields={FIELDS}
        />
      </div>
    </div>
  );
}
