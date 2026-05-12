import Contact from "@/components/figma-pages/Contact/Contact-12-1208";
import FigmaScaleWrapper from "@/components/figma-pages/shared/FigmaScaleWrapper";
import {
  getNav,
  getOffices,
  getSiteSettings,
} from "@/lib/api-client";

const CONTACT_HEIGHT_PX = 3200;

export default async function ContactPage() {
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
      <div
        className="relative mx-auto"
        style={{ width: "1440px", height: `${CONTACT_HEIGHT_PX}px` }}
      >
        <Contact
        siteSettings={siteSettings}
        topNav={topNav}
        footerLinks={footerLinks}
        footerCities={footerCities}
        offices={offices}
        />
      </div>
    </FigmaScaleWrapper>
  );
}
