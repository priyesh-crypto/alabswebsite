import { Metadata } from "next";
import { GlobalNavbar, GlobalFooter } from "@/components/layout/GlobalLayout";
import { getNav, getOffices, getSiteSettings, getPosts } from "@/lib/api-client";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  if (!settings) return { title: "AnalytixLabs" };

  return {
    title: {
      template: "%s | AnalytixLabs",
      default: "AnalytixLabs | India's Top Data Science & AI Institute",
    },
    description: settings.defaultMetaDesc || "Premier data science training institute in India offering courses in Data Science, AI, Business Analytics, and more.",
    openGraph: {
      title: "AnalytixLabs",
      description: settings.defaultMetaDesc || "India's leading data science institute.",
      images: settings.ogImageUrl ? [{ url: settings.ogImageUrl }] : [],
    },
  };
}

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
      <GlobalNavbar topNav={topNav} siteSettings={siteSettings} />
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
