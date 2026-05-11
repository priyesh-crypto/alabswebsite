"use client";

/*  StatsMarquee — fully isolated Stats + Logo + Category-pill marquee section.
 *
 *  Root cause of the vertical-stacking regression:
 *    - `.marquee-track` in globals.css has `display:flex` but NO `flex-direction:row`.
 *    - Any ancestor that sets `flex-direction:column` propagates into the track,
 *      turning the row of logos/pills into a vertical stack.
 *  Fix:
 *    - Every track uses explicit `flex-row` via Tailwind.
 *    - `whitespace-nowrap` + `w-max` lock the track to its natural inline width.
 *    - Keyframes are scoped to this component (<style> tag) — no globals.css dependency.
 *    - The outer wrapper is `flex flex-col` with `overflow-hidden` to clip each row.
 */

import Link from "next/link";
import type { HiringPartner, Category } from "@/lib/api-client";

// ── Props ────────────────────────────────────────────────────────────────────

type LogoPng = { src: string; alt: string; h: number; w: number };

type StatsMarqueeProps = {
  candidatesCount?: string;
  hiringPartners?:  HiringPartner[];
  logoPngs?:        LogoPng[];       // Figma PNG imports passed from parent
  categories?:      Category[];
};

// ── Static fallback data (mirrors original Figma hardcoded values) ────────────

const FORWARD_FALLBACK = [
  { text: "Agentic AI",         href: "/courses?category=artificial-intelligence",       color: "#d2faf0" },
  { text: "Data Science",       href: "/courses?category=data-science",                  color: "#fffad2" },
  { text: "Data Analytics",     href: "/courses?category=business-and-data-analytics",   color: "#f0fbff" },
  { text: "Business Analytics", href: "/courses?category=business-and-data-analytics",   color: "#fff2fa" },
] as const;

const REVERSE_FALLBACK = [
  { text: "Full Stack AI",      href: "/courses?category=artificial-intelligence",       color: "#fffad2" },
  { text: "Data Visualization", href: "/courses?category=specialization-modules",        color: "#d2faf0" },
  { text: "Bootcamp",           href: "/courses?category=specialization-modules",        color: "#fff2fa" },
  { text: "Machine Learning",   href: "/courses?category=artificial-intelligence",       color: "#f0fbff" },
] as const;

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Double an array so translateX(-50%) creates a perfectly seamless loop. */
function doubled<T>(arr: readonly T[]): T[] {
  return [...arr, ...arr];
}

/** Build pill list from DB categories, falling back to static list. */
function buildPills(
  cats: Category[],
  fallback: readonly { text: string; href: string; color: string }[],
  colorMap: readonly string[],
) {
  const source =
    cats.length >= fallback.length
      ? cats.slice(0, fallback.length).map((c, i) => ({
          text:  c.name,
          href:  `/courses?category=${c.slug}`,
          color: colorMap[i] ?? "#f0fbff",
        }))
      : (fallback as unknown as { text: string; href: string; color: string }[]);
  return doubled(source);
}

const FWD_COLORS = FORWARD_FALLBACK.map(p => p.color);
const REV_COLORS = REVERSE_FALLBACK.map(p => p.color);

// ── Component ─────────────────────────────────────────────────────────────────

export default function StatsMarquee({
  candidatesCount = "15,000+",
  hiringPartners  = [],
  logoPngs        = [],
  categories      = [],
}: StatsMarqueeProps) {
  const forwardPills = buildPills(categories, FORWARD_FALLBACK, FWD_COLORS);
  const reversePills = buildPills(
    [...categories].reverse(),
    REVERSE_FALLBACK,
    REV_COLORS,
  );

  // Logo list: always use Figma PNGs for correct backgrounds; DB name = alt text only.
  const logos: LogoPng[] = logoPngs.map((png, i) => ({
    ...png,
    alt: hiringPartners[i]?.name ?? png.alt,
  }));
  const logoTrack = doubled(logos.length > 0 ? logos : logoPngs);

  return (
    <>
      {/* ── Scoped keyframes — immune to globals.css changes ── */}
      <style>{`
        @keyframes sm-forward { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
        @keyframes sm-reverse { from { transform: translateX(-50%); } to { transform: translateX(0);    } }
        .sm-pause:hover { animation-play-state: paused !important; }
      `}</style>

      {/*
        ── Isolation wrapper ──────────────────────────────────────────────────
        flex-col  : rows stack top-to-bottom (NOT their children)
        gap-6     : consistent spacing between rows
        w-full    : fill available horizontal space
        overflow-hidden : clip marquee overflow on both rows
      */}
      <div className="flex flex-col gap-6 w-full overflow-hidden" data-section="stats-marquee">

        {/* ── Row 1: Stat counter (left) + Logo marquee (right) ─────────────── */}
        <div className="flex flex-row items-center justify-between w-full gap-8">

          {/* Static stat — shrink-0 prevents flex from crushing it */}
          <div className="shrink-0 text-left">
            <p
              className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none text-[#09263f] text-[40px]"
              aria-label={`${candidatesCount} Candidates`}
            >
              {candidatesCount}
            </p>
            <p className="font-['Inter:Regular',sans-serif] text-[#09263f] text-[20px] mt-0.5">
              Candidates
            </p>
          </div>

          {/* Logo marquee — flex-1 clips to remaining width */}
          <div className="flex-1 overflow-hidden relative min-w-0">
            {/* Soft fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0  w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

            {/*
              Track: flex-row + whitespace-nowrap + w-max are the three critical
              properties that prevent vertical stacking.
            */}
            <div
              className="sm-pause flex flex-row items-center whitespace-nowrap w-max gap-16"
              style={{ animation: "sm-forward 28s linear infinite" }}
            >
              {logoTrack.map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  height={logo.h}
                  width={logo.w}
                  className="object-contain flex-none pointer-events-none"
                  style={{ height: logo.h, width: logo.w }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Row 2: Forward category pills ────────────────────────────────── */}
        <div className="w-full overflow-hidden relative">
          <div
            className="sm-pause flex flex-row items-center whitespace-nowrap w-max gap-7"
            style={{ animation: "sm-forward 32s linear infinite" }}
          >
            {forwardPills.map((p, i) => (
              <Link key={i} href={p.href} className="flex-none inline-flex">
                <span
                  className="inline-flex flex-row items-center justify-center h-14 rounded-[351px] px-10 whitespace-nowrap min-w-[220px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-base"
                  style={{ background: p.color }}
                >
                  {p.text}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Row 3: Reverse category pills ────────────────────────────────── */}
        <div className="w-full overflow-hidden relative">
          <div
            className="sm-pause flex flex-row items-center whitespace-nowrap w-max gap-7"
            style={{ animation: "sm-reverse 32s linear infinite" }}
          >
            {reversePills.map((p, i) => (
              <Link key={i} href={p.href} className="flex-none inline-flex">
                <span
                  className="inline-flex flex-row items-center justify-center h-14 rounded-[351px] px-10 whitespace-nowrap min-w-[220px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-base"
                  style={{ background: p.color }}
                >
                  {p.text}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
