/**
 * Home placeholder — Phase 4a infrastructure ready.
 *
 * Phase 4b will replace this with the dynamic AlabsLandingPage
 * Figma export, copied into components/figma-pages/ and converted
 * per CLAUDE.md §8 recipe (props-driven, PNG imports preserved as
 * fallbacks, repeating cards rendered as N explicit slots).
 */
import {
  getActiveMasterclass,
  getCourses,
  getFaqs,
  getHiringPartners,
  getNav,
  getOffices,
  getPage,
  getSiteSettings,
  getTestimonials,
} from "@/lib/api-client";

export default async function HomePage() {
  // Smoke-load: verify the api-client wiring works end-to-end and
  // the seeded data flows through. Phase 4b consumes these.
  const [
    siteSettings,
    topNav,
    megaMenu,
    footerLinks,
    footerCities,
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
      className="relative mx-auto bg-white"
      style={{ width: "1440px", minHeight: "600px" }}
    >
      <div className="p-12">
        <h1 className="text-3xl font-medium mb-4">
          Phase 4a — infrastructure ready
        </h1>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Public route group, server-side API client, and PNG/SVG type
          declarations are in place. Phase 4b copies the
          AlabsLandingPage Figma export into components/figma-pages/
          and applies the §8 recipe.
        </p>
        <ul className="space-y-1 text-sm">
          <li>siteSettings: {siteSettings ? "✓ loaded" : "× null"}</li>
          <li>top nav items: {topNav.length}</li>
          <li>mega menu items: {megaMenu.length}</li>
          <li>footer link items: {footerLinks.length}</li>
          <li>footer city items: {footerCities.length}</li>
          <li>featured courses: {featuredCourses.length}</li>
          <li>testimonials: {testimonials.length}</li>
          <li>hiring partners: {hiringPartners.length}</li>
          <li>global faqs: {faqs.length}</li>
          <li>offices: {offices.length}</li>
          <li>masterclass: {masterclass ? "✓ active" : "× none"}</li>
          <li>home page blocks: {pageBlocks ? "✓ loaded" : "× missing"}</li>
        </ul>
      </div>
    </div>
  );
}
