import ForCorporate from "@/features/corporate/ForCorporate";
import FigmaScaleWrapper from "@/components/layout/FigmaScaleWrapper";
import {
  getNav,
  getOffices,
  getPage,
  getSiteSettings,
} from "@/lib/api-client";

export const dynamic = "force-dynamic";

export default async function ForCorporatesPage() {
  const [siteSettings, topNav, footerLinks, footerCities, offices, page] =
    await Promise.all([
      getSiteSettings(),
      getNav("TOP_NAV"),
      getNav("FOOTER_LINKS"),
      getNav("FOOTER_CITIES"),
      getOffices(),
      getPage("for-corporates"),
    ]);

  const blocks = (page?.blocks as Record<string, unknown> | undefined) ?? {};

  return (
    <FigmaScaleWrapper>
      <ForCorporate
        siteSettings={siteSettings}
        topNav={topNav}
        footerLinks={footerLinks}
        footerCities={footerCities}
        offices={offices}
        blocks={blocks}
      />
    </FigmaScaleWrapper>
  );
}
