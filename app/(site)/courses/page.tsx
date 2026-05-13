import ExploreCourses from "@/features/explore-courses/ExploreCourses";
import FigmaScaleWrapper from "@/components/layout/FigmaScaleWrapper";
import {
  getCategories,
  getCourses,
  getNav,
  getOffices,
  getPage,
  getPosts,
  getSiteSettings,
} from "@/lib/api-client";

export const dynamic = "force-dynamic";

export default async function CoursesPage() {
  const [
    siteSettings,
    topNav,
    footerLinks,
    footerCities,
    categories,
    courses,
    posts,
    offices,
    pageBlocks,
  ] = await Promise.all([
    getSiteSettings(),
    getNav("TOP_NAV"),
    getNav("FOOTER_LINKS"),
    getNav("FOOTER_CITIES"),
    getCategories(),
    getCourses({ limit: 6 }),
    getPosts({ limit: 3 }),
    getOffices(),
    getPage("courses"),
  ]);

  return (
    <FigmaScaleWrapper>
      <ExploreCourses
        siteSettings={siteSettings}
        topNav={topNav}
        footerLinks={footerLinks}
        footerCities={footerCities}
        categories={categories}
        courses={courses}
        posts={posts}
        offices={offices}
        pageBlocks={pageBlocks}
      />
    </FigmaScaleWrapper>
  );
}
