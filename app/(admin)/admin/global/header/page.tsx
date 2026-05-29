import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../../_components/AdminPageHeader";
import GlobalBlockEditor, { type GlobalFieldDef } from "@/components/admin/GlobalBlockEditor";

export const dynamic = "force-dynamic";

const FIELDS: GlobalFieldDef[] = [
  { name: "logoUrl", label: "Logo URL", type: "url" },
  { name: "logoAlt", label: "Logo alt text", type: "text" },
  { name: "signInLabel", label: "Sign in CTA label", type: "text" },
  { name: "signInHref", label: "Sign in CTA URL", type: "url" },
  { name: "createAccountLabel", label: "Create account CTA label", type: "text" },
  { name: "createAccountHref", label: "Create account CTA URL", type: "url" },
];

const DEFAULT: Record<string, unknown> = {
  logoUrl: "",
  logoAlt: "AnalytixLabs",
  signInLabel: "Sign in",
  signInHref: "https://lms.analytixlabs.co.in",
  createAccountLabel: "Create Free Account",
  createAccountHref: "https://lms.analytixlabs.co.in/register",
};

export default async function HeaderBlockPage() {
  let block = await prisma.globalBlock.findUnique({ where: { key: "header" } });
  if (!block) {
    block = await prisma.globalBlock.create({
      data: { key: "header", label: "Header & Navigation", data: DEFAULT as Prisma.InputJsonValue },
    });
  }

  return (
    <div className="max-w-3xl">
      <AdminPageHeader
        title="Header & Navigation"
        description="Edit the site logo and sign-in / create-account CTAs. Top nav links and the Explore Courses mega-menu are managed under Navigation. Changes go live immediately on save."
      />
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <GlobalBlockEditor
          blockKey="header"
          initialData={block.data as Record<string, unknown>}
          fields={FIELDS}
        />
      </div>
    </div>
  );
}
