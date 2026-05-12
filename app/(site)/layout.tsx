import { GlobalNavbar, GlobalFooter } from "@/components/figma-pages/shared/GlobalLayout";
import { getNav, getOffices, getSiteSettings, getPosts } from "@/lib/api-client";

/**
 * Public site layout. Hosts every route under app/(site)/.
 * Navbar and footer are fully responsive. Pages that wrap fixed-width
 * Figma exports apply FigmaScaleWrapper themselves so that already-responsive
 * pages (new PDP, ported static pages) are not zoom-scaled.
 */
export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const [siteSettings, topNav, footerLinks, footerCities, offices, posts] = await Promise.all([
    getSiteSettings(),
    getNav("TOP_NAV"),
    getNav("FOOTER_LINKS"),
    getNav("FOOTER_CITIES"),
    getOffices(),
    getPosts({ limit: 3 }),
  ]);

  return (
    <div className="w-full bg-white flex flex-col">
      <GlobalNavbar topNav={topNav} />
      <main className="w-full flex-grow overflow-x-hidden">
        {children}
      </main>
      <GlobalFooter
        offices={offices}
        footerLinks={footerLinks}
        footerCities={footerCities}
        siteSettings={siteSettings}
        posts={posts}
      />
    </div>
  );
}
