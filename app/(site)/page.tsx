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
  getLearningModes,
  getNav,
  getOffices,
  getPage,
  getPosts,
  getSiteSettings,
  getTestimonials,
} from "@/lib/api-client";



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
    posts,
    learningModes,
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
    getPosts({ limit: 3 }),
    getLearningModes(),
  ]);

  return (
    <div className="relative w-full">
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
        posts={posts}
        learningModes={learningModes}
      />
    </div>
  );
}
