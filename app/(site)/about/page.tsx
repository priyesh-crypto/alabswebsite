import AboutUs from "@/features/about-us/AboutUs";
import FigmaScaleWrapper from "@/components/layout/FigmaScaleWrapper";
import {
  getFaqs,
  getNav,
  getOffices,
  getPage,
  getSiteSettings,
  getTestimonials,
} from "@/lib/api-client";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const [siteSettings, topNav, footerLinks, footerCities, offices, testimonials, faqs, pageBlocks] =
    await Promise.all([
      getSiteSettings(),
      getNav("TOP_NAV"),
      getNav("FOOTER_LINKS"),
      getNav("FOOTER_CITIES"),
      getOffices(),
      getTestimonials(),
      getFaqs({ scope: "GLOBAL" }),
      getPage("about"),
    ]);

  return (
    <FigmaScaleWrapper>
      <AboutUs
        siteSettings={siteSettings}
        topNav={topNav}
        footerLinks={footerLinks}
        footerCities={footerCities}
        offices={offices}
        testimonials={testimonials}
        faqs={faqs}
        pageBlocks={pageBlocks}
      />
    </FigmaScaleWrapper>
  );
}
