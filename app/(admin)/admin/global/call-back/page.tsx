import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../../_components/AdminPageHeader";
import GlobalBlockEditor, { type GlobalFieldDef } from "@/components/admin/GlobalBlockEditor";

export const dynamic = "force-dynamic";

const FIELDS: GlobalFieldDef[] = [
  { name: "headline", label: "Form headline", type: "text", placeholder: "Request a Call Back" },
  { name: "subhead", label: "Form sub-headline", type: "text" },
  { name: "namePlaceholder", label: "Name field placeholder", type: "text" },
  { name: "emailPlaceholder", label: "Email field placeholder", type: "text" },
  { name: "phonePlaceholder", label: "Phone field placeholder", type: "text" },
  { name: "messagePlaceholder", label: "Message field placeholder", type: "text" },
  { name: "submitLabel", label: "Submit button label", type: "text", placeholder: "Request a Call Back" },
  { name: "successMessage", label: "Success message (shown after submit)", type: "textarea", rows: 2 },
  {
    name: "recipientEmails",
    label: "Notification recipients (email addresses)",
    type: "array-strings",
    placeholder: "team@analytixlabs.co.in",
  },
  {
    name: "cityOptions",
    label: "City dropdown options",
    type: "array-strings",
    placeholder: "Gurgaon",
  },
];

const DEFAULT: Record<string, unknown> = {
  headline: "Request a Call Back",
  subhead: "Our counsellors will get back to you within 24 hours.",
  namePlaceholder: "Your Name",
  emailPlaceholder: "Your Email",
  phonePlaceholder: "Your Phone",
  messagePlaceholder: "How can we help?",
  submitLabel: "Request a Call Back",
  successMessage: "Thank you! We'll get back to you within 24 hours.",
  recipientEmails: ["enquiry@analytixlabs.co.in"],
  cityOptions: ["Gurgaon", "Noida", "Bangalore", "Online"],
};

export default async function CallBackPage() {
  let block = await prisma.globalBlock.findUnique({ where: { key: "call_back" } });
  if (!block) {
    block = await prisma.globalBlock.create({
      data: { key: "call_back", label: "Call-back Form", data: DEFAULT as Prisma.InputJsonValue },
    });
  }

  return (
    <div className="max-w-2xl">
      <AdminPageHeader
        title="Request a Call-back Form"
        description="Edit form labels, placeholder text, submit button, and the email recipients for lead notifications."
      />
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <GlobalBlockEditor
          blockKey="call_back"
          initialData={block.data as Record<string, unknown>}
          fields={FIELDS}
        />
      </div>
    </div>
  );
}
