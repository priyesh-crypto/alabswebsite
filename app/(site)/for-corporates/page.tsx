import ForCorporate from "@/components/figma-pages/ForCorporate/ForCorporate";
import {
  getNav,
  getOffices,
  getSiteSettings,
} from "@/lib/api-client";

const FOR_CORPORATE_HEIGHT_PX = 5200;

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
    <div
      className="relative mx-auto"
      style={{ width: "1440px", height: `${FOR_CORPORATE_HEIGHT_PX}px` }}
    >
      <ForCorporate
        siteSettings={siteSettings}
        topNav={topNav}
        footerLinks={footerLinks}
        footerCities={footerCities}
        offices={offices}
      />
    </div>
  );
}
