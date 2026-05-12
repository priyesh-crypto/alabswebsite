"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { BatchCourse, Category } from "@/lib/api-client";

// ── helpers ──────────────────────────────────────────────────────────────────

function fmtDate(d: string | Date): string {
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function seatsLabel(n: number): { text: string; color: string } {
  if (n === 0) return { text: "Seats Full", color: "#ef4444" };
  if (n <= 3) return { text: `${n} Seats Left`, color: "#f97316" };
  return { text: `${n} Seats Left`, color: "#22c55e" };
}

function modeIcon(location: string) {
  const l = location.toLowerCase();
  if (l.includes("online")) return "🖥️";
  if (l.includes("blended")) return "🔀";
  return "🏢";
}

// ── types ────────────────────────────────────────────────────────────────────

export type UpcomingBatchesProps = {
  courses: BatchCourse[];
  categories: Category[];
};

// ── FILTER TABS ───────────────────────────────────────────────────────────────

const CATEGORY_SLUGS: Record<string, string> = {
  "artificial-intelligence": "Artificial Intelligence Courses",
  "data-science": "Data Science Courses",
  "business-data-analytics": "Business & Data Analytics Courses",
  "specialization-modules": "Specialization Modules",
};

// ── COURSE CARD ───────────────────────────────────────────────────────────────

function CourseCard({ course }: { course: BatchCourse }) {
  const batches = course.batches ?? [];
  const [selectedBatchId, setSelectedBatchId] = useState<string | null>(
    batches.length > 0 ? batches[0].id : null
  );
  const [showAllBatches, setShowAllBatches] = useState(false);

  const selectedBatch = batches.find(b => b.id === selectedBatchId);
  const visibleBatches = showAllBatches ? batches : batches.slice(0, 4);
  const hiddenCount = batches.length - 4;

  return (
    <div className="bg-white rounded-[32px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.05)] border border-[#e8ecf0] overflow-hidden flex flex-col md:flex-row items-start transition-all">
      {/* 1. Sticky Sidebar (Left/Top) */}
      <div className="md:w-[400px] w-full bg-[#f9fafb] p-8 md:sticky md:top-24 md:self-start flex flex-col min-h-full border-b md:border-b-0 md:border-r border-[#e8ecf0]">
        <div className="mb-6">
          <span
            className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block"
            style={{
              backgroundColor:
                course.category.slug === "artificial-intelligence"
                  ? "rgba(7,179,231,0.1)"
                  : course.category.slug === "data-science"
                  ? "rgba(255,215,0,0.1)"
                  : course.category.slug === "business-data-analytics"
                  ? "rgba(29,229,181,0.1)"
                  : "rgba(9,38,63,0.1)",
              color:
                course.category.slug === "artificial-intelligence"
                  ? "#07b3e7"
                  : course.category.slug === "data-science"
                  ? "#b89b00"
                  : course.category.slug === "business-data-analytics"
                  ? "#17c9a0"
                  : "#09263f",
            }}
          >
            {course.category.name}
          </span>
          <h2 className="font-bold text-[#09263f] text-[28px] leading-tight mb-4">
            {course.title}
          </h2>
          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-8">
            {[
              course.durationMonths ? `${course.durationMonths} Months` : null,
              course.classesCount ? `${course.classesCount} Classes` : null,
              course.hoursCount ? `${course.hoursCount} Hours` : null,
            ].filter(Boolean).map((stat, i) => (
              <span key={i} className="text-[14px] text-[#09263f]/60 font-medium flex items-center">
                {i > 0 && <span className="mr-3 text-[#09263f]/20">|</span>}
                {stat}
              </span>
            ))}
          </div>

          {/* Value Add: Why this course? */}
          <div className="space-y-4 mb-10">
            <h4 className="text-[14px] font-bold text-[#09263f] uppercase tracking-wider">Key Highlights</h4>
            <ul className="space-y-3">
              {[
                "Hands-on Industry Projects",
                "Placement Assistance",
                "1-on-1 Mentorship Sessions"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[14px] text-[#09263f]/70">
                  <span className="size-1.5 rounded-full bg-[#1de5b5]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sticky Action Block */}
        <div className="mt-auto pt-8 border-t border-[#e8ecf0]">
          <div className="mb-6 p-4 bg-white rounded-2xl border border-[#e8ecf0]">
             <p className="text-[12px] font-bold text-[#09263f]/40 uppercase mb-1">Selected Batch</p>
             {selectedBatch ? (
               <div className="flex flex-col">
                  <span className="font-bold text-[#09263f] text-[16px]">{fmtDate(selectedBatch.startDate)}</span>
                  <span className="text-[13px] text-[#09263f]/60">{selectedBatch.location} • {selectedBatch.schedule}</span>
               </div>
             ) : (
               <p className="text-[14px] text-red-500 font-medium italic">Please select a date</p>
             )}
          </div>
          
          <div className="flex flex-col gap-3">
            <button 
              disabled={!selectedBatchId}
              className="w-full h-[56px] rounded-2xl text-[16px] font-bold text-white bg-[#09263f] hover:bg-[#0c3150] disabled:opacity-30 disabled:grayscale transition-all shadow-xl shadow-[#09263f]/10"
            >
              Enroll Now
            </button>
            <Link 
              href={`/courses/${course.slug}`}
              className="w-full h-[56px] rounded-2xl text-[16px] font-bold text-[#09263f] bg-white border border-[#09263f]/20 hover:bg-gray-50 flex items-center justify-center transition-all"
            >
              Explore Syllabus →
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Batch List (Right) */}
      <div className="flex-1 p-8 md:p-12 w-full">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-[14px] font-bold text-[#09263f]/40 uppercase tracking-widest">Available Schedules</h3>
          <span className="text-[13px] font-medium text-[#09263f]/60 bg-[#f3f6f9] px-3 py-1 rounded-full">
            {batches.length} Upcoming Batches
          </span>
        </div>
        
        <div className="flex flex-col gap-4">
          {batches.length === 0 ? (
            <div className="py-20 text-center bg-[#f9fafb] rounded-[24px] border-2 border-dashed border-[#e8ecf0]">
              <p className="text-[#09263f]/40 text-[16px] italic">No upcoming batches scheduled</p>
            </div>
          ) : (
            <>
              {visibleBatches.map((batch) => {
                const seats = batch.seatsLeft;
                const isFull = seats === 0;
                const isSelected = selectedBatchId === batch.id;
                
                return (
                  <div 
                    key={batch.id} 
                    onClick={() => {
                      if (isFull) return;
                      setSelectedBatchId(isSelected ? null : batch.id);
                    }}
                    className={`group relative flex items-center p-6 rounded-[24px] border-2 transition-all cursor-pointer ${
                      isFull 
                        ? "opacity-40 cursor-not-allowed bg-gray-50 border-transparent" 
                        : isSelected
                          ? "border-[#1de5b5] bg-[#1de5b5]/5 shadow-md scale-[1.02]"
                          : "border-[#f0f4f7] bg-white hover:border-[#1de5b5]/30 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-[160px_1fr_140px] gap-6 items-center">
                      {/* Date Component */}
                      <div className="flex flex-col">
                        <span className="font-bold text-[18px] text-[#09263f]">{fmtDate(batch.startDate)}</span>
                        <span className="text-[12px] font-bold text-[#1de5b5] uppercase tracking-wider">Starts Soon</span>
                      </div>

                      {/* Info Component */}
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{modeIcon(batch.location)}</span>
                          <span className="font-bold text-[15px] text-[#09263f]">{batch.location}</span>
                        </div>
                        <span className="text-[14px] text-[#09263f]/60 font-medium">{batch.schedule}</span>
                      </div>

                      {/* Status Component */}
                      <div className="sm:text-right">
                        {isFull ? (
                          <div className="inline-flex px-3 py-1 bg-gray-100 rounded-full">
                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Seats Full</span>
                          </div>
                        ) : (
                          <div className={`inline-flex px-3 py-1 rounded-full ${seats <= 3 ? 'bg-red-50' : 'bg-green-50'}`}>
                            <span className={`text-[11px] font-bold uppercase tracking-widest ${seats <= 3 ? 'text-red-500' : 'text-green-600'}`}>
                              {seats <= 3 ? `${seats} Seats Left` : "Registration Open"}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Radio */}
                    {!isFull && (
                      <div className={`ml-8 size-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected ? "border-[#1de5b5] bg-[#1de5b5]" : "border-[#e8ecf0] group-hover:border-[#1de5b5]/50"
                      }`}>
                        {isSelected && <div className="size-2.5 rounded-full bg-white shadow-sm" />}
                      </div>
                    )}
                  </div>
                );
              })}

              {hiddenCount > 0 && (
                <button 
                  onClick={() => setShowAllBatches(!showAllBatches)}
                  className="mt-4 w-full py-4 rounded-[18px] border-2 border-dashed border-[#e8ecf0] text-[#09263f]/60 font-bold text-[14px] hover:bg-[#f9fafb] hover:border-[#09263f]/20 transition-all flex items-center justify-center gap-2"
                >
                  {showAllBatches ? (
                    <>Show Less ↑</>
                  ) : (
                    <>View {hiddenCount} More Batches ↓</>
                  )}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────

export default function UpcomingBatches({
  courses,
  categories,
}: UpcomingBatchesProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [locationFilter, setLocationFilter] = useState<string>("all");

  // Build filter tabs from fetched categories + prepend "All"
  const tabs = useMemo(() => {
    const cat = categories
      .filter((c) => CATEGORY_SLUGS[c.slug] !== undefined || true)
      .sort((a, b) => a.order - b.order)
      .map((c) => ({
        slug: c.slug,
        label: CATEGORY_SLUGS[c.slug] ?? c.name,
      }));
    return [{ slug: null, label: "All" }, ...cat];
  }, [categories]);

  // Unique locations across all batches
  const locations = useMemo(() => {
    const set = new Set<string>();
    courses.forEach((c) => c.batches.forEach((b) => set.add(b.location)));
    return ["all", ...Array.from(set).sort()];
  }, [courses]);

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const catOk = activeSlug === null || c.category.slug === activeSlug;
      const locOk =
        locationFilter === "all" ||
        c.batches.some(
          (b) => b.location.toLowerCase() === locationFilter.toLowerCase()
        );
      return catOk && locOk;
    });
  }, [courses, activeSlug, locationFilter]);

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex flex-col">

      {/* ── Hero ── */}
      <div className="bg-[#09263f] w-full py-12 px-4 text-center">
        <p className="text-[#1de5b5] text-[13px] font-semibold uppercase tracking-widest mb-2">
          Schedule
        </p>
        <h1 className="text-white text-[32px] sm:text-[40px] font-bold leading-tight">
          Upcoming Batches
        </h1>
        <p className="text-white/60 text-[15px] mt-3 max-w-xl mx-auto">
          A sneak peek of our courses &amp; batches that we are launching soon!
        </p>

        {/* Online mode banner */}
        <div className="inline-flex items-center gap-2 mt-5 bg-[#1de5b5]/15 border border-[#1de5b5]/30 rounded-full px-5 py-2">
          <span className="text-[#1de5b5] text-[18px]">🖥️</span>
          <span className="text-white text-[13px] font-medium">
            Interactive Online mode available for all courses
          </span>
        </div>
      </div>

      {/* ── Filters ── */}
      <div className="sticky top-[68px] z-40 bg-white border-b border-[#e8ecf0] shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Category tabs — horizontally scrollable */}
          <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar py-3">
            {tabs.map((tab) => (
              <button
                key={String(tab.slug)}
                type="button"
                onClick={() => setActiveSlug(tab.slug)}
                className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all ${
                  activeSlug === tab.slug
                    ? "bg-[#09263f] text-white shadow-sm"
                    : "text-[#09263f]/70 hover:bg-[#09263f]/8 hover:text-[#09263f]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Location filter ── */}
      <div className="max-w-[1200px] mx-auto w-full px-4 pt-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[13px] font-semibold text-[#09263f]/50 shrink-0">Filter by city:</span>
          {locations.map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => setLocationFilter(loc)}
              className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all border ${
                locationFilter === loc
                  ? "bg-[#07b3e7] text-white border-[#07b3e7]"
                  : "bg-white text-[#09263f]/60 border-[#e8ecf0] hover:border-[#07b3e7] hover:text-[#07b3e7]"
              }`}
            >
              {loc === "all" ? "All Cities" : loc}
            </button>
          ))}
        </div>
      </div>

      {/* ── Course cards ── */}
      <main className="flex-1 max-w-[1200px] mx-auto w-full px-4 py-6">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📅</div>
            <p className="text-[#09263f]/50 text-[16px]">
              No upcoming batches found for the selected filters.
            </p>
            <button
              type="button"
              onClick={() => { setActiveSlug(null); setLocationFilter("all"); }}
              className="mt-4 inline-flex items-center gap-1 text-[#07b3e7] text-[14px] font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </main>

      {/* ── Bottom CTA ── */}
      <div className="bg-gradient-to-r from-[#09263f] to-[#07294a] w-full py-14 px-4 text-center">
        <p className="text-[#1de5b5] font-semibold text-[13px] uppercase tracking-widest mb-3">
          Join thousands of learners
        </p>
        <h2 className="text-white text-[26px] sm:text-[32px] font-bold mb-2">
          Hundreds are making the right decision every month!
        </h2>
        <p className="text-white/60 text-[15px] mb-8 max-w-lg mx-auto">
          Change the course of your career now. Speak to a counsellor and find the right program for you.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#1de5b5] text-white font-semibold text-[15px] hover:brightness-95 transition-all shadow-[0px_4px_20px_0px_rgba(29,229,181,0.35)]"
        >
          Contact Us →
        </Link>
      </div>

    </div>
  );
}
