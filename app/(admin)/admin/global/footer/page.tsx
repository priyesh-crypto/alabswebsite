import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../../_components/AdminPageHeader";
import GlobalBlockEditor, { type GlobalFieldDef } from "@/components/admin/GlobalBlockEditor";

export const dynamic = "force-dynamic";

const FIELDS: GlobalFieldDef[] = [
  { name: "copyrightText", label: "Copyright text", type: "text" },
  // Column headings (the links inside each column are managed under Navigation)
  { name: "col1Heading", label: "Column 1 heading", type: "text", placeholder: "About Us" },
  { name: "col2Heading", label: "Column 2 heading", type: "text", placeholder: "Etcetera" },
  { name: "col3Heading", label: "Column 3 heading", type: "text", placeholder: "Popular Searches" },
  // Social links
  { name: "social.linkedin", label: "LinkedIn URL", type: "url" },
  { name: "social.facebook", label: "Facebook URL", type: "url" },
  { name: "social.twitter", label: "Twitter URL", type: "url" },
  { name: "social.instagram", label: "Instagram URL", type: "url" },
  { name: "social.youtube", label: "YouTube URL", type: "url" },
  { name: "social.medium", label: "Medium URL", type: "url" },
  // Legal links (bottom bar)
  {
    name: "legalLinks",
    label: "Legal links (bottom bar)",
    type: "array-objects",
    itemFields: [{ key: "label", label: "Label" }, { key: "url", label: "URL", inputType: "url" }],
  },
];

const DEFAULT: Record<string, unknown> = {
  copyrightText: "© 2024 AnalytixLabs. All Rights Reserved.",
  col1Heading: "About Us",
  col2Heading: "Etcetera",
  col3Heading: "Popular Searches",
  social: { linkedin: "", facebook: "", twitter: "", instagram: "", youtube: "", medium: "" },
  legalLinks: [
    { label: "Privacy Policy", url: "/privacy-policy" },
    { label: "Terms and Conditions", url: "/terms-and-conditions" },
    { label: "Sitemap", url: "/sitemap" },
  ],
};

export default async function FooterBlockPage() {
  let block = await prisma.globalBlock.findUnique({ where: { key: "footer" } });
  if (!block) {
    block = await prisma.globalBlock.create({
      data: { key: "footer", label: "Footer", data: DEFAULT as Prisma.InputJsonValue },
    });
  }

  return (
    <div className="max-w-3xl">
      <AdminPageHeader
        title="Footer"
        description="Edit footer column headings, social links, copyright and legal links. Footer link columns and city links are managed under Navigation. Contact info comes from Site settings."
      />
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <GlobalBlockEditor
          blockKey="footer"
          initialData={block.data as Record<string, unknown>}
          fields={FIELDS}
        />
      </div>
    </div>
  );
}
