import AboutUs from "@/components/figma-pages/AboutUs/AboutUs";
import {
  getFaqs,
  getNav,
  getOffices,
  getSiteSettings,
  getTestimonials,
} from "@/lib/api-client";

const ABOUT_HEIGHT_PX = 6400;

export default async function AboutPage() {
  const [siteSettings, topNav, footerLinks, footerCities, offices, testimonials, faqs] =
    await Promise.all([
      getSiteSettings(),
      getNav("TOP_NAV"),
      getNav("FOOTER_LINKS"),
      getNav("FOOTER_CITIES"),
      getOffices(),
      getTestimonials(),
      getFaqs({ scope: "GLOBAL" }),
    ]);

  return (
    <div
      className="relative mx-auto"
      style={{ width: "1440px", height: `${ABOUT_HEIGHT_PX}px` }}
    >
      <AboutUs
        siteSettings={siteSettings}
        topNav={topNav}
        footerLinks={footerLinks}
        footerCities={footerCities}
        offices={offices}
        testimonials={testimonials}
        faqs={faqs}
      />
    </div>
  );
}
