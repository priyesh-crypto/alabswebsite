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

  return (
    <div className="bg-white rounded-2xl shadow-[0px_4px_24px_0px_rgba(0,0,0,0.07)] border border-[#e8ecf0] overflow-hidden">
      {/* Card header */}
      <div className="flex flex-col sm:flex-row gap-0">
        {/* Thumbnail */}
        <div className="sm:w-[200px] shrink-0 bg-[#09263f]/5">
          {course.thumbnailUrl ? (
            <img
              src={course.thumbnailUrl}
              alt={course.title}
              className="w-full h-[140px] sm:h-full object-cover"
            />
          ) : (
            <div className="w-full h-[140px] sm:h-full bg-gradient-to-br from-[#07b3e7]/20 to-[#1de5b5]/20 flex items-center justify-center">
              <span className="text-4xl">📊</span>
            </div>
          )}
        </div>

        {/* Course info */}
        <div className="flex-1 px-5 py-4">
          <div className="flex items-start gap-2 flex-wrap">
            <h2 className="font-semibold text-[#09263f] text-[16px] leading-snug flex-1 min-w-0">
              {course.title}
            </h2>
            {course.isFeatured && (
              <span className="shrink-0 text-[10px] font-bold text-white bg-[#1de5b5] px-2.5 py-1 rounded-full leading-none">
                New
              </span>
            )}
          </div>

          {/* Stats pills */}
          <div className="flex flex-wrap items-center gap-2 mt-2.5">
            {(course.classesCount ?? 0) > 0 && (
              <span className="text-[12px] text-[#09263f]/60 bg-[#f3f6f9] px-2.5 py-1 rounded-full font-medium">
                {course.classesCount} Classes
              </span>
            )}
            {(course.hoursCount ?? 0) > 0 && (
              <span className="text-[12px] text-[#09263f]/60 bg-[#f3f6f9] px-2.5 py-1 rounded-full font-medium">
                {course.hoursCount} Hours
              </span>
            )}
            {(course.durationMonths ?? 0) > 0 && (
              <span className="text-[12px] text-[#09263f]/60 bg-[#f3f6f9] px-2.5 py-1 rounded-full font-medium">
                {course.durationMonths} Months
              </span>
            )}
          </div>

          {/* Category badge */}
          <div className="mt-2">
            <span
              className="text-[11px] font-semibold px-2 py-0.5 rounded"
              style={{
                backgroundColor:
                  course.category.slug === "artificial-intelligence"
                    ? "#07b3e7"
                    : course.category.slug === "data-science"
                    ? "#ffd700"
                    : course.category.slug === "business-data-analytics"
                    ? "#1de5b5"
                    : "#09263f",
                color: course.category.slug === "business-data-analytics" ? "#09263f" : "#fff",
              }}
            >
              {course.category.name}
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#e8ecf0]" />

      {/* Batch rows */}
      <div className="px-5 py-3">
        {/* Desktop header row */}
        <div className="hidden md:grid md:grid-cols-[1fr_160px_180px_120px_140px] gap-3 pb-2 mb-1 border-b border-[#e8ecf0]">
          <span className="text-[11px] font-semibold text-[#09263f]/40 uppercase tracking-wide">Location / Mode</span>
          <span className="text-[11px] font-semibold text-[#09263f]/40 uppercase tracking-wide">Start Date</span>
          <span className="text-[11px] font-semibold text-[#09263f]/40 uppercase tracking-wide">Schedule</span>
          <span className="text-[11px] font-semibold text-[#09263f]/40 uppercase tracking-wide">Seats</span>
          <span className="text-[11px] font-semibold text-[#09263f]/40 uppercase tracking-wide"></span>
        </div>

        <div className="flex flex-col divide-y divide-[#f0f4f7]">
          {batches.length === 0 ? (
            <p className="text-[13px] text-[#09263f]/40 py-3 italic">
              No upcoming batches scheduled. Check back soon.
            </p>
          ) : (
            batches.map((batch) => {
              const seats = seatsLabel(batch.seatsLeft);
              return (
                <div key={batch.id} className="py-3">
                  {/* Mobile layout */}
                  <div className="flex flex-col gap-1.5 md:hidden">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{modeIcon(batch.location)}</span>
                      <span className="font-semibold text-[14px] text-[#09263f]">{batch.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-[#09263f]/70 ml-6">
                      <span>📅 {fmtDate(batch.startDate)}</span>
                      <span>⏰ {batch.schedule}</span>
                      <span style={{ color: seats.color }} className="font-semibold">{seats.text}</span>
                    </div>
                    <div className="ml-6 mt-1">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="inline-flex items-center justify-center h-9 px-4 rounded-full text-[13px] font-semibold text-white bg-[#09263f] hover:bg-[#07294a] transition-colors"
                      >
                        Explore Course →
                      </Link>
                    </div>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden md:grid md:grid-cols-[1fr_160px_180px_120px_140px] gap-3 items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{modeIcon(batch.location)}</span>
                      <span className="font-medium text-[14px] text-[#09263f]">{batch.location}</span>
                    </div>
                    <span className="text-[14px] text-[#09263f]/70">{fmtDate(batch.startDate)}</span>
                    <span className="text-[14px] text-[#09263f]/70">{batch.schedule}</span>
                    <span
                      className="text-[13px] font-semibold"
                      style={{ color: seats.color }}
                    >
                      {seats.text}
                    </span>
                    <div>
                      <Link
                        href={`/courses/${course.slug}`}
                        className="inline-flex items-center justify-center h-9 px-4 rounded-full text-[13px] font-semibold text-white bg-[#09263f] hover:bg-[#07294a] transition-colors whitespace-nowrap"
                      >
                        Explore Course →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
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
