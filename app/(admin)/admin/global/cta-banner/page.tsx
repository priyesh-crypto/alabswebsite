import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../../_components/AdminPageHeader";
import GlobalBlockEditor, { type GlobalFieldDef } from "@/components/admin/GlobalBlockEditor";

export const dynamic = "force-dynamic";

const FIELDS: GlobalFieldDef[] = [
  { name: "headline", label: "Headline", type: "text", placeholder: "Unlock Insights. Enroll Now." },
  { name: "subhead", label: "Sub-headline", type: "textarea", rows: 2 },
  { name: "ctaLabel", label: "CTA button label", type: "text", placeholder: "Explore Courses" },
  { name: "ctaHref", label: "CTA button URL", type: "url" },
  { name: "image", label: "Banner image", type: "media" },
  { name: "isActive", label: "Show this banner", type: "switch" },
];

const DEFAULT: Record<string, unknown> = {
  headline: "Unlock Insights. Enroll Now.",
  subhead: "Join 60,000+ professionals who have transformed their careers with AnalytixLabs.",
  ctaLabel: "Explore Courses",
  ctaHref: "/courses",
  image: { url: "", alt: "" },
  isActive: true,
};

export default async function CtaBannerPage() {
  let block = await prisma.globalBlock.findUnique({ where: { key: "cta_banner" } });
  if (!block) {
    block = await prisma.globalBlock.create({
      data: { key: "cta_banner", label: "CTA Banner", data: DEFAULT as Prisma.InputJsonValue },
    });
  }

  return (
    <div className="max-w-2xl">
      <AdminPageHeader
        title="CTA Banner"
        description='Edit the "Unlock Insights. Enroll Now." block that appears at the bottom of most pages.'
      />
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <GlobalBlockEditor
          blockKey="cta_banner"
          initialData={block.data as Record<string, unknown>}
          fields={FIELDS}
        />
      </div>
    </div>
  );
}
