"use client";

import { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";

const REVIEW_STATS = {
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

const REVIEWS = [
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

function StarBar({ pct }: { pct: number }) {
  return (
    <div className="flex-1 h-2 bg-[#09263f]/8 rounded-full overflow-hidden">
      <div className="h-full bg-[#1de5b5] rounded-full" style={{ width: `${pct}%` }} />
    </div>
  );
}

function Stars({ count = 5, size = 16 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i < count ? "#1de5b5" : "#e8ecf0"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [filter, setFilter] = useState("All");
  const [src, setSrc] = useState("All sources");

  const filtered = REVIEWS.filter((r) => {
    if (filter !== "All" && r.stars !== Number(filter[0])) return false;
    if (src !== "All sources" && r.src !== src) return false;
    return true;
  });

  return (
    <>
      <PageHero
        title="2,341 verified reviews. We didn't write any of them."
        lede="Every review here is collected through Google, Course Report, SwitchUp or LinkedIn — never gated, never edited, never paid. Read the four stars too. We learn more from those."
      />

      {/* Summary cards */}
      <section className="py-10 px-4 pt-12">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Overall rating */}
          <div className="bg-[#1de5b5]/10 rounded-2xl border border-[#e8ecf0] shadow-sm p-9 flex flex-col items-center justify-center text-center">
            <div className="text-6xl font-bold text-[#09263f] leading-none">{REVIEW_STATS.rating}</div>
            <div className="mt-3"><Stars size={22} /></div>
            <div className="text-sm text-[#09263f] mt-4 font-semibold">
              Average across {REVIEW_STATS.total.toLocaleString()} reviews
            </div>
          </div>
          {/* Breakdown */}
          <div className="bg-white rounded-2xl border border-[#e8ecf0] shadow-sm p-7">
            <h3 className="text-xs font-bold text-[#09263f] mb-4 tracking-wider uppercase">
              Star breakdown
            </h3>
            {REVIEW_STATS.breakdown.map((b, i) => (
              <div key={i} className="grid gap-3 items-center mb-2.5" style={{ gridTemplateColumns: "60px 1fr 50px" }}>
                <span className="text-xs font-semibold text-[#09263f]">{b.stars} stars</span>
                <StarBar pct={b.pct} />
                <span className="text-xs text-[#475569] text-right">{b.pct}%</span>
              </div>
            ))}
          </div>
          {/* By source */}
          <div className="bg-white rounded-2xl border border-[#e8ecf0] shadow-sm p-7">
            <h3 className="text-xs font-bold text-[#09263f] mb-4 tracking-wider uppercase">
              By source
            </h3>
            {REVIEW_STATS.sources.map((s, i) => (
              <div
                key={i}
                className={`flex justify-between py-2.5 ${i < REVIEW_STATS.sources.length - 1 ? "border-b border-[#09263f]/8" : ""}`}
              >
                <span className="text-sm text-[#09263f] font-semibold">{s.name}</span>
                <span className="text-sm text-[#475569]">
                  {s.count} · <span className="text-[#09263f] font-bold">{s.rating}★</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 py-5">
        <div className="max-w-[1300px] mx-auto flex flex-wrap gap-2 items-center">
          <span className="text-xs font-semibold text-[#475569] mr-1">Stars:</span>
          {["All", "5 ★", "4 ★", "3 ★", "2 ★", "1 ★"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`h-9 px-4 rounded-full text-sm font-semibold transition border ${
                filter === s
                  ? "bg-[#09263f] text-white border-[#09263f]"
                  : "bg-white text-[#09263f] border-[#e8ecf0] hover:border-[#09263f]/30"
              }`}
            >
              {s}
            </button>
          ))}
          <select
            value={src}
            onChange={(e) => setSrc(e.target.value)}
            className="ml-auto h-9 px-4 rounded-full border border-[#e8ecf0] bg-white text-sm text-[#09263f] font-semibold outline-none"
          >
            <option>All sources</option>
            <option>Google</option>
            <option>Course Report</option>
            <option>SwitchUp</option>
            <option>LinkedIn</option>
          </select>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="px-4 pb-16">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#e8ecf0] shadow-sm p-6">
              <div className="flex justify-between items-center mb-3.5">
                <Stars count={r.stars} size={14} />
                <span className="text-[10px] font-bold px-2.5 py-1 bg-[#f5f7fa] text-[#475569] rounded-full tracking-wider">
                  via {r.src}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[#09263f] mb-4">&ldquo;{r.body}&rdquo;</p>
              <div className="flex justify-between items-center pt-3.5 border-t border-[#09263f]/8">
                <div>
                  <div className="text-sm font-bold text-[#09263f]">
                    {r.name}{" "}
                    {r.verified && (
                      <span className="text-[#1de5b5] text-xs ml-1">✓ Verified</span>
                    )}
                  </div>
                  <div className="text-xs text-[#475569]">
                    {r.course} · {r.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Write review */}
      <section className="py-16 px-4 bg-[#f5f7fa]">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#09263f] mb-3">
            Trained with us? Add your honest review.
          </h2>
          <p className="text-sm text-[#475569] mb-6">
            We post reviews on Google or Course Report — your name, your words, your link. We don&apos;t filter, we don&apos;t edit. If we drop the ball, tell future students.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://google.com"
              className="bg-[#1de5b5] text-[#09263f] font-semibold px-6 py-3 rounded-full hover:brightness-95 transition"
            >
              Review us on Google
            </a>
            <a
              href="/contact"
              className="border border-[#09263f] text-[#09263f] font-semibold px-6 py-3 rounded-full hover:bg-[#09263f]/5 transition"
            >
              Email feedback
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
