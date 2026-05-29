/**
 * Home — wired to the dynamic AlabsLandingPage Figma export
 * (components/figma-pages/AlabsLandingPage). Per CLAUDE.md §8 step
 * 8: gather every data source in parallel, pass as props.
 */
import { Metadata } from "next";
import AlabsLandingPage from "@/features/landing-page/AlabsLandingPage";
import FigmaScaleWrapper from "@/components/layout/FigmaScaleWrapper";
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
  getModeSessions,
} from "@/lib/api-client";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("home");
  if (!page) return {};
  return {
    title: page.metaTitle || "Home",
    description: page.metaDesc || undefined,
  };
}

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
    modeSessions,
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
    getModeSessions(),
  ]);

  const sharedProps = {
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
    modeSessions,
  };

  return (
    <FigmaScaleWrapper>
      <AlabsLandingPage {...sharedProps} />
    </FigmaScaleWrapper>
  );
}
