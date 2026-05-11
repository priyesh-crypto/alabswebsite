import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import SiteSettingsForm from "./SiteSettingsForm";

export const dynamic = "force-dynamic";

export default async function SiteSettingsPage() {
  const settings = await prisma.siteSettings.findUnique({ where: { id: 1 } });
  return (
    <div className="max-w-3xl">
      <AdminPageHeader
        title="Site settings"
        description="Logo, contact info, social links, and stats. Saved values are read by every public page via the SiteSettings singleton."
      />
      <SiteSettingsForm
        initial={
          settings
            ? {
                logoUrl: settings.logoUrl,
                faviconUrl: settings.faviconUrl ?? "",
                primaryColor: settings.primaryColor,
                contactEmail: settings.contactEmail,
                contactPhone: settings.contactPhone,
                businessHours: settings.businessHours,
                address: settings.address,
                socialLinks: (settings.socialLinks as Record<string, string>) ?? {},
                stats: (settings.stats as Record<string, string>) ?? {},
                gtmId: settings.gtmId ?? "",
                defaultMetaDesc: settings.defaultMetaDesc ?? "",
                ogImageUrl: settings.ogImageUrl ?? "",
              }
            : null
        }
      />
    </div>
  );
}
