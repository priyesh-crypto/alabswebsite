import ExploreCourses from "@/components/figma-pages/ExploreCourses/ExploreCourses";
import FigmaScaleWrapper from "@/components/figma-pages/shared/FigmaScaleWrapper";
import {
  getCategories,
  getCourses,
  getNav,
  getOffices,
  getPosts,
  getSiteSettings,
} from "@/lib/api-client";

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
  ] = await Promise.all([
    getSiteSettings(),
    getNav("TOP_NAV"),
    getNav("FOOTER_LINKS"),
    getNav("FOOTER_CITIES"),
    getCategories(),
    getCourses({ limit: 6 }),
    getPosts({ limit: 3 }),
    getOffices(),
  ]);

  return (
    <FigmaScaleWrapper>
      <div className="relative mx-auto" style={{ width: "1440px", height: "3600px" }}>
        <ExploreCourses
          siteSettings={siteSettings}
          topNav={topNav}
          footerLinks={footerLinks}
          footerCities={footerCities}
          categories={categories}
          courses={courses}
          posts={posts}
          offices={offices}
        />
      </div>
    </FigmaScaleWrapper>
  );
}
