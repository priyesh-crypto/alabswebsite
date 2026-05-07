/**
 * Home — wired to the dynamic AlabsLandingPage Figma export
 * (components/figma-pages/AlabsLandingPage). Per CLAUDE.md §8 step
 * 8: gather every data source in parallel, pass as props.
 */
import AlabsLandingPage from "@/components/figma-pages/AlabsLandingPage/AlabsLandingPage";
import {
  getActiveMasterclass,
  getCategories,
  getCourses,
  getFaqs,
  getHiringPartners,
  getNav,
  getOffices,
  getPage,
  getSiteSettings,
  getTestimonials,
} from "@/lib/api-client";

// The Figma export is 8343px tall (per the Vite-era Home wrapper).
const HOME_HEIGHT_PX = 8343;

export default async function HomePage() {
  const [
    siteSettings,
    topNav,
    megaMenu,
    footerLinks,
    footerCities,
    categories,
    featuredCourses,
    testimonials,
    hiringPartners,
    faqs,
    offices,
    masterclass,
    pageBlocks,
  ] = await Promise.all([
    getSiteSettings(),
    getNav("TOP_NAV"),
    getNav("MEGA_MENU"),
    getNav("FOOTER_LINKS"),
    getNav("FOOTER_CITIES"),
    getCategories(),
    getCourses({ featured: true, limit: 6 }),
    getTestimonials(),
    getHiringPartners(),
    getFaqs({ scope: "GLOBAL" }),
    getOffices(),
    getActiveMasterclass(),
    getPage("home"),
  ]);

  return (
    <div
      className="relative mx-auto"
      style={{ width: "1440px", height: `${HOME_HEIGHT_PX}px` }}
    >
      <AlabsLandingPage
        siteSettings={siteSettings}
        topNav={topNav}
        megaMenu={megaMenu}
        footerLinks={footerLinks}
        footerCities={footerCities}
        categories={categories}
        featuredCourses={featuredCourses}
        testimonials={testimonials}
        hiringPartners={hiringPartners}
        faqs={faqs}
        offices={offices}
        masterclass={masterclass}
        pageBlocks={pageBlocks}
      />
    </div>
  );
}
