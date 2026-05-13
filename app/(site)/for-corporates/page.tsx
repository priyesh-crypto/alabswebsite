import ForCorporate from "@/features/corporate/ForCorporate";
import FigmaScaleWrapper from "@/components/layout/FigmaScaleWrapper";
import {
  getNav,
  getOffices,
  getSiteSettings,
} from "@/lib/api-client";

export const dynamic = "force-dynamic";

export default async function ForCorporatesPage() {
  const [siteSettings, topNav, footerLinks, footerCities, offices] =
    await Promise.all([
      getSiteSettings(),
      getNav("TOP_NAV"),
      getNav("FOOTER_LINKS"),
      getNav("FOOTER_CITIES"),
      getOffices(),
    ]);

  return (
    <FigmaScaleWrapper>
      <ForCorporate
        siteSettings={siteSettings}
        topNav={topNav}
        footerLinks={footerLinks}
        footerCities={footerCities}
        offices={offices}
      />
    </FigmaScaleWrapper>
  );
}
