"use client";

/**
 * MobileLandingPage — mobile-only (<lg) home page for AnalytixLabs.
 *
 * Rendered alongside the Figma desktop export by app/(site)/page.tsx via
 * `lg:hidden` / `hidden lg:block` siblings. Navbar + footer are owned by
 * app/(site)/layout.tsx, so this component renders ONLY the page body.
 *
 * Visual language mirrors the desktop AlabsLandingPage Figma export:
 * - Dark navy: #09263f
 * - Lime CTA: #C8F032
 * - Light blue-tinted surface: #EAF3FA / #F4F8FB
 * - Card borders: #E2E8F0
 * - Rounded-2xl cards, rounded-full pills, 48px CTA height
 *
 * Layout reflows the desktop sections into a single-column 375px-friendly
 * flow without re-styling the design language.
 */

import { useMemo, useState } from "react";
import Link from "next/link";
import type { LandingPageProps } from "@/components/figma-pages/AlabsLandingPage/AlabsLandingPage";

// ------------------------------------------------------------------
// Tokens (mirror desktop)
// ------------------------------------------------------------------
const NAVY = "#09263f";
const LIME = "#C8F032";
const SURFACE = "#F4F8FB";
const BATCH_BG = "#EAF3FA";
const BORDER = "#E2E8F0";
const MUTED = "#5B6B7A";

// ------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------
function block(p: LandingPageProps, key: string): string | undefined {
  const blocks = p.pageBlocks?.blocks as Record<string, unknown> | undefined;
  const v = blocks?.[key];
  return typeof v === "string" ? v : undefined;
}

function blockList(p: LandingPageProps, key: string): string[] | undefined {
  const blocks = p.pageBlocks?.blocks as Record<string, unknown> | undefined;
  const v = blocks?.[key];
  if (Array.isArray(v) && v.every((x) => typeof x === "string")) return v as string[];
  return undefined;
}

function formatBatchDate(d: Date | string): string {
  const date = new Date(d);
  return date.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
}

// ------------------------------------------------------------------
// Component
// ------------------------------------------------------------------
export default function MobileLandingPage(props: LandingPageProps = {}) {
  const {
    featuredCourses = [],
    hiringPartners = [],
    testimonials = [],
    faqs = [],
    categories = [],
    learningModes = [],
  } = props;

  const safeCourses = featuredCourses ?? [];
  const safePartners = hiringPartners ?? [];
  const safeTestimonials = testimonials ?? [];
  const safeFaqs = faqs ?? [];
  const safeCategories = categories ?? [];
  const safeLearningModes = learningModes ?? [];

  // --- Top "Agentic" tabs (decorative) ---
  const topTabs = ["Agentic AI Data Science", "Agentic AI Full Stack AI"];
  const [activeTopTab, setActiveTopTab] = useState(topTabs[0]);

  // --- Course category sub-tabs ---
  const courseTabs = useMemo(() => {
    if (safeCategories.length > 0) {
      return safeCategories.slice(0, 2).map((c) => ({ id: c.id, label: c.name }));
    }
    return [
      { id: "ds", label: "Data Science & Analytics" },
      { id: "ai", label: "Artificial Intelligence" },
    ];
  }, [safeCategories]);
  const [activeCourseTab, setActiveCourseTab] = useState<string>(courseTabs[0]?.id ?? "ds");
  const visibleCourses = useMemo(() => {
    const filtered = safeCourses.filter((c) =>
      safeCategories.length ? c.categoryId === activeCourseTab : true,
    );
    const list = filtered.length ? filtered : safeCourses;
    return list.slice(0, 2);
  }, [safeCourses, safeCategories, activeCourseTab]);

  // --- Learning modes tabs ---
  const modeTabs = safeLearningModes.length
    ? safeLearningModes
    : [
        { id: "wb", slug: "weekday-bootcamp", name: "Weekday Bootcamp", subtitle: null },
        { id: "wd", slug: "weekday-batches", name: "Weekday Batches", subtitle: null },
        { id: "sp", slug: "self-paced", name: "Self paced", subtitle: null },
        { id: "bl", slug: "blended", name: "Blended", subtitle: null },
      ];
  const [activeMode, setActiveMode] = useState<string>(modeTabs[0]?.id ?? "");
  const activeModeObj = modeTabs.find((m) => m.id === activeMode) ?? modeTabs[0];

  // --- City pills ---
  const cities = ["Online", "Bangalore", "Gurgaon", "Noida"];
  const [activeCity, setActiveCity] = useState<string>(cities[0]);

  // --- Testimonial carousel ---
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const activeTestimonial = safeTestimonials[testimonialIdx];

  // --- FAQ accordion ---
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  // --- Lead form ---
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadCity, setLeadCity] = useState("");
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadDone, setLeadDone] = useState(false);

  async function submitLead(e: React.FormEvent) {
    e.preventDefault();
    if (!leadName || !leadEmail) return;
    setLeadSubmitting(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE ?? ""}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadName,
          email: leadEmail,
          phone: leadPhone,
          message: leadCity ? `City: ${leadCity}` : undefined,
          source: "mobile-callback",
        }),
      });
      setLeadDone(true);
    } catch {
      // silent
    } finally {
      setLeadSubmitting(false);
    }
  }

  const heroTitle =
    block(props, "hero.title") ??
    "Become a Data Scientist with Real Industry Projects & Placement Support";
  const heroSubtitle =
    block(props, "hero.subtitle") ??
    "Industry-led training, mentorship and placement support from India's top-rated analytics institute.";
  const aboutTitle =
    block(props, "about.title") ??
    "AnalytixLabs is a top-ranked Data Science Institute";
  const aboutBody =
    block(props, "about.body") ??
    "We help working professionals and freshers build careers in data science, analytics and AI through experiential, mentor-led learning programs.";
  const valueProps = blockList(props, "about.values") ?? [
    "One to one mentorship",
    "Industry-driven curriculum curated by experts",
    "Experiential learning",
    "Extensive post-class sessions",
  ];

  // Batches for the learning-modes section (filtered by active mode)
  const modeBatches = safeCourses
    .flatMap((c) => (c.batches ?? []).map((b) => ({ ...b, courseTitle: c.title })))
    .filter((b) => (safeLearningModes.length ? b.modeId === activeMode : true))
    .slice(0, 2);

  return (
    <div
      className="w-full bg-white lg:hidden"
      style={{ color: NAVY, fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}
    >
      {/* ============================================================
          1. HERO
         ============================================================ */}
      <section className="px-5 pt-6 pb-8 space-y-5">
        <span
          className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full"
          style={{ background: BATCH_BG, color: NAVY }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: LIME }} />
          Since 2011
        </span>
        <h1
          className="text-[30px] font-extrabold tracking-tight"
          style={{ color: NAVY, lineHeight: 1.15 }}
        >
          {heroTitle}
        </h1>
        <p className="text-[14px] leading-relaxed" style={{ color: MUTED }}>
          {heroSubtitle}
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center h-12 rounded-2xl font-semibold text-[15px]"
            style={{ background: LIME, color: NAVY }}
          >
            Explore Courses
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-12 rounded-2xl font-semibold text-[15px] border"
            style={{ borderColor: NAVY, color: NAVY }}
          >
            Book Free Career Consultation
          </Link>
        </div>

        {/* Hero image with floating audience cards */}
        <div className="relative mt-3 rounded-3xl overflow-hidden aspect-[4/3]" style={{ background: NAVY }}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=70')",
            }}
          />
          <div
            className="absolute left-3 top-4 bg-white rounded-2xl shadow-lg px-3 py-2 max-w-[60%]"
            style={{ boxShadow: "0 10px 24px rgba(9,38,63,0.15)" }}
          >
            <p className="text-[12px] font-bold" style={{ color: NAVY }}>
              Fresher / Student
            </p>
            <p className="text-[10px] leading-tight mt-0.5" style={{ color: MUTED }}>
              Starting or preparing to start your career
            </p>
          </div>
          <div
            className="absolute right-3 bottom-4 bg-white rounded-2xl shadow-lg px-3 py-2 max-w-[64%]"
            style={{ boxShadow: "0 10px 24px rgba(9,38,63,0.15)" }}
          >
            <p className="text-[12px] font-bold" style={{ color: NAVY }}>
              Experienced Professional
            </p>
            <p className="text-[10px] leading-tight mt-0.5" style={{ color: MUTED }}>
              Working, switching roles, or restarting your career
            </p>
          </div>
        </div>

        {/* Rating row */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-[14px]" style={{ color: "#F5B400" }}>
            ★★★★★
          </span>
          <span className="text-[13px] font-semibold" style={{ color: NAVY }}>
            (4.8)
          </span>
          <span className="text-[12px]" style={{ color: MUTED }}>
            Rated by 5000+ learners
          </span>
        </div>
      </section>

      {/* ============================================================
          2. ENDORSEMENTS ROW (horizontal scroll)
         ============================================================ */}
      <section className="py-4">
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-3 px-5 min-w-max">
            {[
              { title: "IIM Ahmedabad", caption: "Endorsement Partner" },
              { title: "Tech Excellence", caption: "EdTech Award 2024" },
              { title: "Featured in", caption: "Forbes • YourStory" },
              { title: "MASSANK", caption: "Industry Recognition" },
            ].map((b) => (
              <div
                key={b.title}
                className="flex-shrink-0 w-36 bg-white rounded-2xl px-3 py-3 border"
                style={{ borderColor: BORDER }}
              >
                <p className="text-[12px] font-bold leading-tight" style={{ color: NAVY }}>
                  {b.title}
                </p>
                <p className="text-[10px] leading-tight mt-1" style={{ color: MUTED }}>
                  {b.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3. HIRING PARTNERS + "15,000+ Candidates" stat
         ============================================================ */}
      <section className="px-5 py-8" style={{ background: SURFACE }}>
        <div className="rounded-3xl bg-white p-5 border" style={{ borderColor: BORDER }}>
          <p className="text-[34px] font-extrabold leading-none" style={{ color: NAVY }}>
            15,000+
            <span className="text-[18px] font-bold ml-1">Candidates</span>
          </p>
          <p className="text-[13px] mt-1" style={{ color: MUTED }}>
            trained &amp; placed across top companies
          </p>

          <div className="mt-5 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-6 min-w-max">
              {(safePartners.length
                ? safePartners
                : [
                    { id: "1", name: "HUAWEI", logoUrl: "" },
                    { id: "2", name: "GE Capital", logoUrl: "" },
                    { id: "3", name: "Intl. Travel House", logoUrl: "" },
                  ]
              ).map((p) => (
                <div
                  key={p.id}
                  className="h-10 flex items-center justify-center flex-shrink-0"
                  style={{ minWidth: 90 }}
                >
                  {p.logoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.logoUrl}
                      alt={p.name}
                      className="max-h-8 max-w-[110px] object-contain"
                    />
                  ) : (
                    <span className="text-[13px] font-bold tracking-wide" style={{ color: NAVY }}>
                      {p.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. TOP TAB PILLS (Agentic) — decorative, sticky-ish
         ============================================================ */}
      <section className="px-5 pt-6 pb-2">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {topTabs.map((t) => {
            const active = activeTopTab === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTopTab(t)}
                className="flex-shrink-0 px-4 h-9 rounded-full text-[12px] font-semibold border"
                style={{
                  background: active ? NAVY : "#fff",
                  color: active ? "#fff" : NAVY,
                  borderColor: active ? NAVY : BORDER,
                }}
              >
                {t}
              </button>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          5. OUR COURSES — 6 Months Job Challenge
         ============================================================ */}
      <section className="px-5 py-6 space-y-5">
        <h2 className="text-[24px] font-extrabold leading-tight" style={{ color: NAVY }}>
          Our Courses — 6 Months Job Challenge
        </h2>

        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {courseTabs.map((t) => {
            const active = activeCourseTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveCourseTab(t.id)}
                className="flex-shrink-0 px-4 h-9 rounded-full text-[12px] font-semibold border"
                style={{
                  background: active ? NAVY : "#fff",
                  color: active ? "#fff" : NAVY,
                  borderColor: active ? NAVY : BORDER,
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-5">
          {visibleCourses.length === 0 && (
            <p className="text-sm" style={{ color: MUTED }}>
              More courses coming soon.
            </p>
          )}
          {visibleCourses.map((course) => {
            const batches = (course.batches ?? []).slice(0, 3);
            return (
              <article
                key={course.id}
                className="rounded-3xl overflow-hidden bg-white border"
                style={{ borderColor: BORDER, boxShadow: "0 8px 24px rgba(9,38,63,0.06)" }}
              >
                {/* Hero image */}
                <div
                  className="h-44 bg-cover bg-center"
                  style={{
                    backgroundImage: course.thumbnailUrl
                      ? `url('${course.thumbnailUrl}')`
                      : `linear-gradient(135deg, ${NAVY}, #1E3A8A)`,
                  }}
                />

                {/* Navy title band */}
                <div className="px-4 py-3" style={{ background: NAVY }}>
                  <h3 className="text-[16px] font-bold text-white leading-snug">
                    {course.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {course.classesCount != null && (
                      <span
                        className="text-[10px] font-semibold px-2 py-1 rounded-full"
                        style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}
                      >
                        {course.classesCount} Classes
                      </span>
                    )}
                    {course.hoursCount != null && (
                      <span
                        className="text-[10px] font-semibold px-2 py-1 rounded-full"
                        style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}
                      >
                        {course.hoursCount}+ Hours Experience
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4 space-y-4">
                  {batches.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      {batches.map((b) => (
                        <div
                          key={b.id}
                          className="rounded-xl p-2 text-center"
                          style={{ background: BATCH_BG }}
                        >
                          <p className="text-[11px] font-bold truncate" style={{ color: NAVY }}>
                            {b.location}
                          </p>
                          <p
                            className="text-[14px] font-extrabold leading-tight mt-0.5"
                            style={{ color: NAVY }}
                          >
                            {formatBatchDate(b.startDate)}
                          </p>
                          <p className="text-[9px] leading-tight mt-0.5" style={{ color: MUTED }}>
                            {b.schedule}
                          </p>
                          <p className="text-[9px] leading-tight" style={{ color: MUTED }}>
                            {b.seatsLeft} seats left
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link
                    href={`/courses/${course.slug}`}
                    className="inline-flex w-full items-center justify-center h-11 rounded-2xl font-semibold text-[14px]"
                    style={{ background: LIME, color: NAVY }}
                  >
                    Explore Course
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          6. LEARNING MODES
         ============================================================ */}
      <section className="px-5 py-8 space-y-5" style={{ background: SURFACE }}>
        <h2 className="text-[24px] font-extrabold leading-tight" style={{ color: NAVY }}>
          Learning Modes
        </h2>
        <p className="text-[14px] leading-relaxed" style={{ color: MUTED }}>
          Choose the format that fits your schedule — bootcamps, weekday batches, self-paced or blended learning.
        </p>

        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {modeTabs.map((m) => {
            const active = activeMode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActiveMode(m.id)}
                className="flex-shrink-0 px-4 h-9 rounded-full text-[12px] font-semibold border"
                style={{
                  background: active ? NAVY : "#fff",
                  color: active ? "#fff" : NAVY,
                  borderColor: active ? NAVY : BORDER,
                }}
              >
                {m.name}
              </button>
            );
          })}
        </div>

        <div>
          <h3 className="text-[18px] font-bold" style={{ color: NAVY }}>
            {activeModeObj?.name}
          </h3>
          <p className="text-[13px] italic mt-1" style={{ color: MUTED }}>
            Experiential learning with in-person mentorship!
          </p>
        </div>

        <div className="space-y-3">
          {modeBatches.length === 0 ? (
            <p className="text-sm" style={{ color: MUTED }}>
              Batch schedule will be announced soon.
            </p>
          ) : (
            modeBatches.map((b) => (
              <div
                key={b.id}
                className="rounded-2xl bg-white border p-4 space-y-3"
                style={{ borderColor: BORDER }}
              >
                <p className="text-[15px] font-bold" style={{ color: NAVY }}>
                  {b.courseTitle}
                </p>
                <div className="grid grid-cols-2 gap-y-2 text-[12px]">
                  <span style={{ color: MUTED }}>Location</span>
                  <span className="font-semibold text-right" style={{ color: NAVY }}>
                    {b.location}
                  </span>
                  <span style={{ color: MUTED }}>Date</span>
                  <span className="font-semibold text-right" style={{ color: NAVY }}>
                    {formatBatchDate(b.startDate)}
                  </span>
                  <span style={{ color: MUTED }}>Time</span>
                  <span className="font-semibold text-right" style={{ color: NAVY }}>
                    {b.schedule}
                  </span>
                  <span style={{ color: MUTED }}>Available seats</span>
                  <span className="font-semibold text-right" style={{ color: NAVY }}>
                    {b.seatsLeft}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ============================================================
          7. TOP-RANKED INSTITUTE (dark navy card)
         ============================================================ */}
      <section className="px-5 py-8">
        <div className="rounded-3xl p-6 space-y-5 text-white" style={{ background: NAVY }}>
          <h2 className="text-[22px] font-extrabold leading-tight">{aboutTitle}</h2>
          <p className="text-[13px] leading-relaxed text-white/80">{aboutBody}</p>

          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {cities.map((city) => {
              const active = activeCity === city;
              return (
                <button
                  key={city}
                  onClick={() => setActiveCity(city)}
                  className="flex-shrink-0 px-4 h-9 rounded-full text-[12px] font-semibold border"
                  style={{
                    background: active ? LIME : "transparent",
                    color: active ? NAVY : "#fff",
                    borderColor: active ? LIME : "rgba(255,255,255,0.35)",
                  }}
                >
                  {city}
                </button>
              );
            })}
          </div>

          <ul className="space-y-3">
            {valueProps.map((v) => (
              <li key={v} className="flex items-start gap-3 text-[14px] text-white">
                <span
                  className="mt-0.5 inline-flex h-5 w-5 rounded-full items-center justify-center flex-shrink-0"
                  style={{ background: LIME, color: NAVY }}
                >
                  <span className="text-[11px] font-extrabold">✓</span>
                </span>
                <span className="leading-snug">{v}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex items-center justify-center h-10 px-5 rounded-full text-[13px] font-semibold"
            style={{ background: LIME, color: NAVY }}
          >
            Value Proposition
          </button>
        </div>
      </section>

      {/* ============================================================
          8. "Unlock Insights" banner
         ============================================================ */}
      <section className="px-5 py-4">
        <div
          className="rounded-3xl overflow-hidden border"
          style={{ borderColor: BORDER, background: "#fff" }}
        >
          <div
            className="h-32 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=70')",
            }}
          />
          <div className="p-5 space-y-3">
            <h3 className="text-[18px] font-extrabold leading-snug" style={{ color: NAVY }}>
              Unlock Insights. Enroll Now. Transform Tomorrow.
            </h3>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-11 px-5 rounded-2xl font-semibold text-[14px]"
              style={{ background: LIME, color: NAVY }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          9. Excited? Talk to Expert Counselor
         ============================================================ */}
      <section className="px-5 py-8 space-y-3 text-center">
        <h3 className="text-[22px] font-extrabold" style={{ color: NAVY }}>
          Excited? Talk to Expert Counselor
        </h3>
        <p className="text-[14px] leading-relaxed" style={{ color: MUTED }}>
          Get a free 15-minute career consultation with an AnalytixLabs counselor and find the right program for your goals.
        </p>
        <a
          href={`tel:${props.siteSettings?.contactPhone ?? ""}`}
          className="inline-flex items-center justify-center h-11 px-6 rounded-2xl font-semibold text-[14px]"
          style={{ background: LIME, color: NAVY }}
        >
          Call Us
        </a>
      </section>

      {/* ============================================================
          10. REQUEST A CALL BACK form
         ============================================================ */}
      <section className="px-5 py-8" style={{ background: SURFACE }}>
        <div className="rounded-3xl bg-white border p-5 space-y-4" style={{ borderColor: BORDER }}>
          <h3 className="text-[20px] font-extrabold" style={{ color: NAVY }}>
            Request a Call back
          </h3>
          {leadDone ? (
            <p className="text-center font-semibold py-6" style={{ color: "#19a36e" }}>
              Thanks! We&apos;ll reach out shortly.
            </p>
          ) : (
            <form onSubmit={submitLead} className="space-y-3">
              <input
                required
                value={leadName}
                onChange={(e) => setLeadName(e.target.value)}
                placeholder="Name"
                className="w-full h-12 rounded-xl border px-4 text-[14px] outline-none focus:border-current"
                style={{ borderColor: BORDER, color: NAVY }}
              />
              <div className="flex gap-2">
                <div
                  className="w-20 h-12 rounded-xl border flex items-center justify-center text-[14px] font-semibold"
                  style={{ borderColor: BORDER, background: SURFACE, color: NAVY }}
                >
                  +91
                </div>
                <input
                  value={leadPhone}
                  onChange={(e) => setLeadPhone(e.target.value)}
                  placeholder="Mobile"
                  inputMode="tel"
                  className="flex-1 h-12 rounded-xl border px-4 text-[14px] outline-none"
                  style={{ borderColor: BORDER, color: NAVY }}
                />
              </div>
              <input
                required
                type="email"
                value={leadEmail}
                onChange={(e) => setLeadEmail(e.target.value)}
                placeholder="Email"
                className="w-full h-12 rounded-xl border px-4 text-[14px] outline-none"
                style={{ borderColor: BORDER, color: NAVY }}
              />
              <select
                value={leadCity}
                onChange={(e) => setLeadCity(e.target.value)}
                className="w-full h-12 rounded-xl border px-4 text-[14px] outline-none bg-white"
                style={{ borderColor: BORDER, color: leadCity ? NAVY : MUTED }}
              >
                <option value="">Select City</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                disabled={leadSubmitting}
                className="w-full h-12 rounded-2xl font-semibold text-[15px] disabled:opacity-60"
                style={{ background: LIME, color: NAVY }}
              >
                {leadSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ============================================================
          11. TESTIMONIALS
         ============================================================ */}
      {safeTestimonials.length > 0 && activeTestimonial && (
        <section className="px-5 py-10 space-y-4">
          <h2 className="text-[24px] font-extrabold" style={{ color: NAVY }}>
            What Students Say About Us?
          </h2>
          <div
            className="rounded-3xl border p-5 relative bg-white"
            style={{ borderColor: BORDER }}
          >
            <div className="flex justify-end mb-3">
              {activeTestimonial.photoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={activeTestimonial.photoUrl}
                  alt={activeTestimonial.name}
                  className="h-16 w-16 rounded-2xl object-cover"
                />
              ) : (
                <div
                  className="h-16 w-16 rounded-2xl"
                  style={{ background: BATCH_BG }}
                />
              )}
            </div>
            <p className="text-[14px] leading-relaxed italic" style={{ color: NAVY }}>
              &ldquo;{activeTestimonial.quote}&rdquo;
            </p>
            <div className="mt-4">
              <p className="text-[15px] font-bold" style={{ color: NAVY }}>
                {activeTestimonial.name}
              </p>
              <p className="text-[12px] mt-0.5" style={{ color: MUTED }}>
                {[activeTestimonial.role, activeTestimonial.company]
                  .filter(Boolean)
                  .join(" — ")}
              </p>
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <button
                type="button"
                onClick={() =>
                  setTestimonialIdx(
                    (testimonialIdx - 1 + safeTestimonials.length) %
                      safeTestimonials.length,
                  )
                }
                aria-label="Previous testimonial"
                className="h-10 w-10 rounded-full border flex items-center justify-center text-[18px]"
                style={{ borderColor: BORDER, color: NAVY }}
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() =>
                  setTestimonialIdx((testimonialIdx + 1) % safeTestimonials.length)
                }
                aria-label="Next testimonial"
                className="h-10 w-10 rounded-full flex items-center justify-center text-[18px] font-bold"
                style={{ background: LIME, color: NAVY }}
              >
                ›
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          12. FAQ accordion
         ============================================================ */}
      {safeFaqs.length > 0 && (
        <section className="px-5 py-8 space-y-4">
          <h2 className="text-[24px] font-extrabold" style={{ color: NAVY }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {safeFaqs.map((f) => {
              const open = openFaq === f.id;
              return (
                <div
                  key={f.id}
                  className="rounded-2xl border bg-white overflow-hidden"
                  style={{ borderColor: BORDER }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : f.id)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span
                      className="text-[14px] font-semibold pr-3 leading-snug"
                      style={{ color: NAVY }}
                    >
                      {f.question}
                    </span>
                    <span
                      className="h-7 w-7 rounded-full flex items-center justify-center flex-shrink-0 text-[16px] font-bold"
                      style={{
                        background: open ? NAVY : BATCH_BG,
                        color: open ? "#fff" : NAVY,
                      }}
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div
                      className="px-4 pb-4 text-[13px] leading-relaxed"
                      style={{ color: MUTED }}
                    >
                      {f.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ============================================================
          13. Still have questions
         ============================================================ */}
      <section
        className="px-5 py-10 text-center space-y-3"
        style={{ background: SURFACE }}
      >
        <h3 className="text-[22px] font-extrabold" style={{ color: NAVY }}>
          Still have questions?
        </h3>
        <p className="text-[14px] leading-relaxed" style={{ color: MUTED }}>
          Our counselors are happy to help you choose the right course and batch.
        </p>
        <a
          href={`tel:${props.siteSettings?.contactPhone ?? ""}`}
          className="inline-flex items-center justify-center h-11 px-6 rounded-2xl font-semibold text-[14px]"
          style={{ background: LIME, color: NAVY }}
        >
          Call Us
        </a>
      </section>
    </div>
  );
}
