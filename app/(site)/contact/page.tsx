import Contact from "@/features/contact/Contact-12-1208";
import FigmaScaleWrapper from "@/components/layout/FigmaScaleWrapper";
import {
  getNav,
  getOffices,
  getPage,
  getSiteSettings,
} from "@/lib/api-client";

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const [siteSettings, topNav, footerLinks, footerCities, offices, pageBlocks] =
    await Promise.all([
      getSiteSettings(),
      getNav("TOP_NAV"),
      getNav("FOOTER_LINKS"),
      getNav("FOOTER_CITIES"),
      getOffices(),
      getPage("contact"),
    ]);

  return (
    <FigmaScaleWrapper>
      <Contact
        siteSettings={siteSettings}
        topNav={topNav}
        footerLinks={footerLinks}
        footerCities={footerCities}
        offices={offices}
        pageBlocks={pageBlocks}
      />
    </FigmaScaleWrapper>
  );
}
