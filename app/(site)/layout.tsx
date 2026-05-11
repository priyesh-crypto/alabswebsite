import { GlobalNavbar, GlobalFooter } from "@/components/figma-pages/shared/GlobalLayout";
import { getNav, getOffices, getSiteSettings, getPosts } from "@/lib/api-client";

/**
 * Public site layout. Hosts every route under app/(site)/.
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
    <div className="w-full overflow-x-auto bg-white flex flex-col items-center">
      <GlobalNavbar topNav={topNav} />
      <main className="w-full flex-grow">{children}</main>
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
