import React from "react";
import Link from "next/link";
import type { Course } from "@/lib/api-client";

// Format a batch start-date as "20 April" for card display.
function fmtDate(d: Date | string | null | undefined): string {
  if (!d) return "";
  const dt = typeof d === "string" ? new Date(d) : d;
  return dt.toLocaleDateString("en-IN", { day: "numeric", month: "long" });
}

// Fallback card data — ensures the carousel always has enough cards to scroll.
const FALLBACK_CARDS = [
  { title: "Data Analytics", classesCount: 46, hoursCount: 500, experienceLabel: "Beginner" },
  { title: "Business Analytics", classesCount: 38, hoursCount: 420, experienceLabel: "Intermediate" },
  { title: "Agentic AI", classesCount: 32, hoursCount: 360, experienceLabel: "Advanced" },
  { title: "Full Stack AI", classesCount: 40, hoursCount: 480, experienceLabel: "Intermediate" },
  { title: "Specialization Modules", classesCount: 24, hoursCount: 280, experienceLabel: "All Levels" },
] as const;

export function CourseCard({ course, idx, cardStyle }: { course?: Course; idx: number; cardStyle?: React.CSSProperties }) {
  const fb = FALLBACK_CARDS[idx % FALLBACK_CARDS.length]!;
  const b0 = course?.batches?.[0];
  const b1 = course?.batches?.[1];
  const b2 = course?.batches?.[2];
  const imgSrc = course?.thumbnailUrl ?? `https://placehold.co/640x360/09263F/FFFFFF?text=AnalytixLabs`;

  return (
    <div
      className="relative bg-white border-[0.5px] border-[rgba(0,0,0,0.3)] border-solid rounded-[24px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.1)] flex-none cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_12px_40px_0px_rgba(0,0,0,0.2)] flex flex-col snap-start h-auto xl:h-[560px]"
      style={{ width: "400px", ...cardStyle }}
    >
      {/* Course thumbnail */}
      <div className="p-3">
        <div className="relative w-full rounded-[18px] overflow-hidden bg-[#09263F] flex items-center justify-center h-[180px] xl:h-auto xl:aspect-video">
          <img alt={course?.title ?? fb.title} className="w-full h-full object-cover opacity-80" src={imgSrc} />
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 px-5 pt-0 pb-6">
        {/* Metadata chips */}
        <div className="flex gap-2 justify-start mb-3">
          {[
            { label: course?.classesCount ? `${course.classesCount} Classes` : `${fb.classesCount} Classes`, bg: "#f0fbff" },
            { label: course?.hoursCount ? `${course.hoursCount}+ Hours` : `${fb.hoursCount}+ Hours`, bg: "#fffad2" },
          ].map((tag, i) => (
            <div key={i} className="flex items-center h-[22px] px-3 rounded-full border border-[#09263f]/5" style={{ backgroundColor: tag.bg }}>
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[10px] text-[rgba(9,38,63,0.6)] uppercase tracking-wider">{tag.label}</span>
            </div>
          ))}
        </div>

        {/* Card title */}
        <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#09263f] leading-tight mb-4 min-h-[50px] text-left">
          {course?.title ?? fb.title}
        </h3>

        {/* Unified Cohort Blocks */}
        <div className="flex gap-2 mb-6">
          {[
            { batch: b0, mode: "Live Online", loc: "Global", date: fmtDate(b0?.startDate) || "11 May", bg: "#f0fbff", fallbackSched: "Weekends" },
            { batch: b1, mode: "Live Online", loc: "Global", date: fmtDate(b1?.startDate) || "15 Sept", bg: "#fffad2", fallbackSched: "Weekends" },
            { batch: b2, mode: "Classroom", loc: "Gurgaon", date: fmtDate(b2?.startDate) || "04 May", bg: "#fff2fa", fallbackSched: "Weekends" },
          ].map((b, i) => {
            const seats = b.batch?.seatsLeft ?? (i === 0 ? 0 : 20);
            const isSoldOut = seats === 0;
            return (
              <div key={i} className={`flex-1 flex flex-col border border-[rgba(0,0,0,0.05)] rounded-[14px] overflow-hidden shadow-sm transition-all ${isSoldOut ? 'opacity-50 grayscale' : 'hover:border-[#1de5b5]/30 transition-colors'}`}>
                <div className="py-2 flex flex-col items-center justify-center text-center px-1 h-[60px]" style={{ backgroundColor: b.bg }}>
                  <span className="font-bold text-[10px] text-[#09263f]/60 uppercase tracking-tight">{b.mode}</span>
                  <span className="font-bold text-[12px] text-[#09263f] leading-tight">{b.loc}</span>
                  <span className="font-bold text-[11px] text-[#09263f]/80 mt-1">{b.date}</span>
                </div>
                <div className="py-1.5 text-center bg-white flex flex-col justify-center px-1 min-h-[38px] border-t border-[rgba(0,0,0,0.05)]">
                  <div className="text-[#09263f] leading-tight">
                    <span className="text-[9px] opacity-70 font-medium">{b.batch?.schedule || b.fallbackSched}</span>
                    <br />
                    <span className={`text-[10px] font-bold ${isSoldOut ? 'text-red-500' : 'text-green-600'}`}>
                      {isSoldOut ? "SOLD OUT" : `${seats} Seats`}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA button */}
        <div className="mt-auto">
          <Link href={course?.slug ? `/courses/${course.slug}` : "/courses"} className="bg-[#19cf9e] h-[48px] rounded-[14px] shadow-sm flex items-center justify-center font-bold text-white text-[15px] hover:brightness-105 active:scale-[0.98] transition-all">
            Explore Course
          </Link>
        </div>
      </div>
    </div>
  );
}
