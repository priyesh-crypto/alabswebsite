import { GlobalNavbar, GlobalFooter } from "@/components/figma-pages/shared/GlobalLayout";
import FigmaScaleWrapper from "@/components/figma-pages/shared/FigmaScaleWrapper";
import { getNav, getOffices, getSiteSettings, getPosts } from "@/lib/api-client";

/**
 * Public site layout. Hosts every route under app/(site)/.
 * Navbar and Footer are fully responsive. The Figma page bodies are
 * zoom-scaled to fit the viewport on screens narrower than 1440px.
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
        <FigmaScaleWrapper>{children}</FigmaScaleWrapper>
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
