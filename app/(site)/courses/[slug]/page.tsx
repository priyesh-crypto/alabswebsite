import Pdp from "@/components/figma-pages/Pdp/Pdp";
import {
  getCourse,
  getNav,
  getOffices,
  getSiteSettings,
} from "@/lib/api-client";
import { notFound } from "next/navigation";

const PDP_HEIGHT_PX = 11000;

export default async function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const [course, siteSettings, topNav, footerLinks, footerCities, offices] =
    await Promise.all([
      getCourse(params.slug),
      getSiteSettings(),
      getNav("TOP_NAV"),
      getNav("FOOTER_LINKS"),
      getNav("FOOTER_CITIES"),
      getOffices(),
    ]);

  if (!course) notFound();

  return (
    <div
      className="relative mx-auto"
      style={{ width: "1440px", height: `${PDP_HEIGHT_PX}px` }}
    >
      <Pdp
        course={course}
        siteSettings={siteSettings}
        topNav={topNav}
        footerLinks={footerLinks}
        footerCities={footerCities}
        offices={offices}
      />
    </div>
  );
}
