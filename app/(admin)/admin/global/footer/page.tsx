import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../../_components/AdminPageHeader";
import GlobalBlockEditor, { type GlobalFieldDef } from "@/components/admin/GlobalBlockEditor";

export const dynamic = "force-dynamic";

const FIELDS: GlobalFieldDef[] = [
  // Brand column
  { name: "tagline", label: "Footer tagline", type: "textarea", rows: 2 },
  { name: "copyrightText", label: "Copyright text", type: "text" },
  // Contact
  { name: "phone", label: "Phone number", type: "text" },
  { name: "email", label: "Email address", type: "email" },
  { name: "address", label: "Address", type: "textarea", rows: 3 },
  // Social links
  { name: "social.linkedin", label: "LinkedIn URL", type: "url" },
  { name: "social.facebook", label: "Facebook URL", type: "url" },
  { name: "social.twitter", label: "Twitter URL", type: "url" },
  { name: "social.instagram", label: "Instagram URL", type: "url" },
  { name: "social.youtube", label: "YouTube URL", type: "url" },
  // Link columns
  {
    name: "col1",
    label: "Column 1 links",
    type: "array-objects",
    itemFields: [{ key: "label", label: "Label" }, { key: "href", label: "URL", inputType: "url" }],
  },
  {
    name: "col2",
    label: "Column 2 links",
    type: "array-objects",
    itemFields: [{ key: "label", label: "Label" }, { key: "href", label: "URL", inputType: "url" }],
  },
  {
    name: "col3",
    label: "Column 3 links",
    type: "array-objects",
    itemFields: [{ key: "label", label: "Label" }, { key: "href", label: "URL", inputType: "url" }],
  },
  {
    name: "cityLinks",
    label: "City course links (e.g. Data Science in Delhi)",
    type: "array-objects",
    itemFields: [{ key: "label", label: "Label" }, { key: "href", label: "URL", inputType: "url" }],
  },
];

const DEFAULT: Record<string, unknown> = {
  tagline: "AnalytixLabs — India's leading Data Science training institute.",
  copyrightText: "© 2024 AnalytixLabs. All rights reserved.",
  phone: "+91-8010-841-841",
  email: "enquiry@analytixlabs.co.in",
  address: "Sector 44, Gurgaon, Haryana",
  social: { linkedin: "", facebook: "", twitter: "", instagram: "", youtube: "" },
  col1: [], col2: [], col3: [], cityLinks: [],
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
        description="Edit footer tagline, contact info, social links, and all link columns."
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
