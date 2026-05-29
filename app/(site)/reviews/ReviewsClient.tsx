"use client";

import { useState } from "react";

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

export default function ReviewsClient({
  stats,
  reviews,
}: {
  stats: ReviewStats;
  reviews: Review[];
}) {
  const [filter, setFilter] = useState("All");
  const [src, setSrc] = useState("All sources");

  const filtered = reviews.filter((r) => {
    if (filter !== "All" && r.stars !== Number(filter[0])) return false;
    if (src !== "All sources" && r.src !== src) return false;
    return true;
  });

  return (
    <>
      {/* Summary cards */}
      <section className="py-10 px-4 pt-12">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Overall rating */}
          <div className="bg-[#1de5b5]/10 rounded-2xl border border-[#e8ecf0] shadow-sm p-9 flex flex-col items-center justify-center text-center">
            <div className="text-6xl font-bold text-[#09263f] leading-none">{stats.rating}</div>
            <div className="mt-3"><Stars size={22} /></div>
            <div className="text-sm text-[#09263f] mt-4 font-semibold">
              Average across {stats.total.toLocaleString()} reviews
            </div>
          </div>
          {/* Breakdown */}
          <div className="bg-white rounded-2xl border border-[#e8ecf0] shadow-sm p-7">
            <h3 className="text-xs font-bold text-[#09263f] mb-4 tracking-wider uppercase">
              Star breakdown
            </h3>
            {stats.breakdown.map((b, i) => (
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
            {stats.sources.map((s, i) => (
              <div
                key={i}
                className={`flex justify-between py-2.5 ${i < stats.sources.length - 1 ? "border-b border-[#09263f]/8" : ""}`}
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
    </>
  );
}
