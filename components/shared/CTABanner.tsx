import { getGlobalBlock, type GlobalBlockData } from "@/lib/api-client";

function s(data: GlobalBlockData | null | undefined, key: string): string | undefined {
  const v = data?.[key];
  return typeof v === "string" && v.trim() ? v : undefined;
}

/**
 * Presentational CTA banner. Reads the admin-editable `cta_banner` global block
 * (headline / sub-headline / primary CTA / visibility) with the original design
 * copy as fallback so it renders correctly even before any edit.
 */
export function CTABanner({ data }: { data?: GlobalBlockData | null }) {
  // Hide entirely if the admin toggled it off.
  if (data && data["isActive"] === false) return null;

  const headline = s(data, "headline") ?? "Ready to transform your career?";
  const subhead =
    s(data, "subhead") ??
    "Join 20,000+ learners who have built their data science career with AnalytixLabs.";
  const ctaLabel = s(data, "ctaLabel") ?? "Talk to a Counselor";
  const ctaHref = s(data, "ctaHref") ?? "/contact";

  return (
    <div className="bg-[#09263f] py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">{headline}</h2>
      <p className="text-white/70 mb-8 max-w-xl mx-auto">{subhead}</p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={ctaHref}
          className="bg-[#1de5b5] text-[#09263f] font-bold px-8 py-3 rounded-full hover:brightness-95 transition"
        >
          {ctaLabel}
        </a>
        <a
          href="/courses"
          className="border border-white/40 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition"
        >
          Browse Courses
        </a>
      </div>
    </div>
  );
}

/**
 * Async server wrapper — fetches the block and renders the banner. Use this in
 * server components so the CTA banner is editable from /admin/global/cta-banner.
 */
export default async function CTABannerServer() {
  const data = await getGlobalBlock("cta_banner");
  return <CTABanner data={data} />;
}
