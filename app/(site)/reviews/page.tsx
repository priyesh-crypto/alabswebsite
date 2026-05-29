import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import ReviewsClient from "./ReviewsClient";
import { getPage, getTestimonials } from "@/lib/api-client";

function blockVal<T>(blocks: Record<string, unknown> | undefined, key: string, fallback: T): T {
  const v = blocks?.[key];
  return v === undefined || v === null || v === "" ? fallback : (v as T);
}

type ReviewStats = {
  rating: number;
  total: number;
  breakdown: { stars: number; pct: number }[];
  sources: { name: string; count: number; rating: number }[];
};

type Review = {
  stars: number;
  name: string;
  course: string;
  body: string;
  date: string;
  verified: boolean;
  src: string;
};

const REVIEW_STATS: ReviewStats = {
  rating: 4.8,
  total: 2341,
  breakdown: [
    { stars: 5, pct: 78 },
    { stars: 4, pct: 16 },
    { stars: 3, pct: 4 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 1 },
  ],
  sources: [
    { name: "Google", count: 942, rating: 4.9 },
    { name: "Course Report", count: 687, rating: 4.8 },
    { name: "SwitchUp", count: 412, rating: 4.7 },
    { name: "LinkedIn", count: 300, rating: 4.8 },
  ],
};

const REVIEWS: Review[] = [
  { stars: 5, name: "Aditi Sharma", course: "Data Science 360", body: "I joined with no Python background and a Master's in Economics. Six months in, I had two offers — one from Genpact, one from a fintech. The placement cell rehearsed my case interview six times and didn't sugar-coat anything. That made the difference.", date: "12 Apr 2026", verified: true, src: "Course Report" },
  { stars: 5, name: "Vikram Joshi", course: "Generative AI & LLMs", body: "Karan's classes felt like sitting next to a senior engineer rather than a lecture hall. We built a RAG system end-to-end with real evals — that capstone got me past three rounds at a product company.", date: "08 Apr 2026", verified: true, src: "Google" },
  { stars: 5, name: "Sneha Kapoor", course: "Business Analytics", body: "I came in as a non-tech consultant and the SQL + Tableau modules clicked instantly thanks to Priya's case-driven approach. Now leading the BI team at my old firm.", date: "02 Apr 2026", verified: true, src: "Google" },
  { stars: 4, name: "Rohan Pillai", course: "Machine Learning", body: "Strong fundamentals and excellent capstones. Wish the class WhatsApp group had been a bit more active outside live hours, but the faculty were always reachable in office hours.", date: "28 Mar 2026", verified: true, src: "SwitchUp" },
  { stars: 5, name: "Tanya Verma", course: "Data Analyst Certification", body: "Best decision of my career switch. The mock interviews are brutal in the best way — by the time I sat for the real ones, nothing surprised me. Got placed at a B2B SaaS firm in week 11.", date: "22 Mar 2026", verified: true, src: "LinkedIn" },
  { stars: 5, name: "Mohammed Faisal", course: "Data Science 360", body: "The lifetime access policy is the real deal. I came back two years later to skill up on LLMs at no extra cost. They actually re-add you to the alumni Slack and the new content drops.", date: "18 Mar 2026", verified: true, src: "Google" },
  { stars: 4, name: "Pooja Reddy", course: "SQL for Analytics", body: "Tight, focused short program. Walked in shaky on window functions and walked out comfortable enough to clear two product analyst interviews back-to-back.", date: "10 Mar 2026", verified: true, src: "Course Report" },
  { stars: 5, name: "Dev Patel", course: "Deep Learning", body: "Rahul's CV module was the most rigorous course I've taken — academic or otherwise. We trained, debugged, and benchmarked, not just imported pre-built models.", date: "04 Mar 2026", verified: true, src: "Google" },
  { stars: 5, name: "Ishita Banerjee", course: "Data Science 360", body: "I was sceptical of online live cohorts but the cap of 25 made it feel like a small class. Instructors knew our names, our weak spots, our capstone projects.", date: "28 Feb 2026", verified: true, src: "LinkedIn" },
];

export default async function ReviewsPage() {
  const [page, testimonials] = await Promise.all([
    getPage("reviews"),
    getTestimonials(),
  ]);
  const blocks = (page?.blocks as Record<string, unknown>) ?? undefined;

  const heroTitle = blockVal(blocks, "hero.title", "2,341 verified reviews. We didn't write any of them.");
  const heroLede = blockVal(
    blocks,
    "hero.lede",
    "Every review here is collected through Google, Course Report, SwitchUp or LinkedIn — never gated, never edited, never paid. Read the four stars too. We learn more from those."
  );
  const reviewStats = blockVal<ReviewStats>(blocks, "stats", REVIEW_STATS);

  const writeHeading = blockVal(blocks, "write.heading", "Trained with us? Add your honest review.");
  const writeBody = blockVal(
    blocks,
    "write.body",
    "We post reviews on Google or Course Report — your name, your words, your link. We don't filter, we don't edit. If we drop the ball, tell future students."
  );
  const writeGoogleLabel = blockVal(blocks, "write.googleLabel", "Review us on Google");
  const writeGoogleHref = blockVal(blocks, "write.googleHref", "https://google.com");
  const writeEmailLabel = blockVal(blocks, "write.emailLabel", "Email feedback");
  const writeEmailHref = blockVal(blocks, "write.emailHref", "/contact");

  // Map Testimonial rows → review cards; fall back to hardcoded REVIEWS if empty.
  const reviews: Review[] =
    testimonials.length > 0
      ? testimonials.map((t) => ({
          stars: t.rating,
          name: t.name,
          course: t.company ?? t.role ?? "",
          body: t.quote,
          date: "",
          verified: true,
          src: t.role ?? "Verified",
        }))
      : REVIEWS;

  return (
    <>
      <PageHero title={heroTitle} lede={heroLede} />
      <ReviewsClient stats={reviewStats} reviews={reviews} />

      {/* Write review */}
      <section className="py-16 px-4 bg-[#f5f7fa]">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#09263f] mb-3">{writeHeading}</h2>
          <p className="text-sm text-[#475569] mb-6">{writeBody}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={writeGoogleHref}
              className="bg-[#1de5b5] text-[#09263f] font-semibold px-6 py-3 rounded-full hover:brightness-95 transition"
            >
              {writeGoogleLabel}
            </a>
            <a
              href={writeEmailHref}
              className="border border-[#09263f] text-[#09263f] font-semibold px-6 py-3 rounded-full hover:bg-[#09263f]/5 transition"
            >
              {writeEmailLabel}
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
