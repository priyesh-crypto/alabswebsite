"use client";

import { useMemo, useState } from "react";
import type {
  Batch,
  Certification,
  Course,
  CourseModule,
  CoursePricing,
  Project,
} from "@prisma/client";

// ============================================================
// Types
// ============================================================

type LessonLite = {
  id: string;
  title: string;
  duration: string | null;
  order: number;
};

type ModuleWithLessons = CourseModule & { lessons: LessonLite[] };

type ToolLite = { id: string; name: string; iconUrl: string | null };

type FaqLite = { id: string; question: string; answer: string; order: number };

type CategoryLite = { name: string; slug: string };

export type PdpCourse = Course & {
  modules: ModuleWithLessons[];
  pricing: CoursePricing[];
  projects: Project[];
  certifications: Certification[];
  batches: Batch[];
  tools: ToolLite[];
  faqs: FaqLite[];
  category: CategoryLite;
};

// JSON shapes for the pdp* fields
type StatTile = { label: string; value: string | number };
type Highlight = { title: string; description: string };
type CurriculumSummary = {
  liveHours?: string | number;
  selfStudyHours?: string | number;
  placementWeeks?: string | number;
  includes?: string[];
};
type TestimonialStripItem = {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  stars?: number;
  photoUrl?: string;
};
type ProjectDomain = {
  domain: string;
  title: string;
  description: string;
  icon?: string;
};
type CareerSupport = {
  intro?: string;
  features?: { title: string; body: string }[];
  partnerLogos?: { name: string; logoUrl: string }[];
};
type HowToApplyStep = {
  stepNumber: number | string;
  title: string;
  description: string;
};
type StudentStory = {
  photoUrl?: string;
  name: string;
  credential?: string;
  role?: string;
  quote: string;
};
type RelatedArticle = {
  category?: string;
  readTime?: string;
  title: string;
  excerpt?: string;
  author?: string;
  url?: string;
  imageUrl?: string;
};
type CtaBanner = {
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaUrl?: string;
  bgColor?: string;
};
type ContactBlock = { heading: string; description?: string };
type FaqItem = { question: string; answer: string };
type LearningModeItem = { name: string; description: string; icon?: string };
type CertificationData = {
  heading?: string;
  body?: string;
  certificateImageUrl?: string;
  coBrandedName?: string;
  coBrandedDesc?: string;
  coBrandedLogoUrl?: string;
};
type WhoShouldJoinItem = {
  icon?: string;
  title: string;
  description: string;
};

// ============================================================
// Helpers
// ============================================================

function safeArray<T>(v: unknown, fallback: T[] = []): T[] {
  return Array.isArray(v) ? (v as T[]) : fallback;
}

function obj<T extends object>(v: unknown, fallback: T): T {
  return v && typeof v === "object" && !Array.isArray(v) ? (v as T) : fallback;
}

function inr(paise: number | null | undefined): string {
  if (paise == null) return "—";
  const r = paise / 100;
  return `₹${r.toLocaleString("en-IN")}`;
}

function Stars({ value, max = 5, size = 16 }: { value: number; max?: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${value} of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={i < Math.round(value) ? "#ffd700" : "#E5E7EB"}
        >
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L10 14.9l-5.3 2.8 1.1-5.9L1.5 7.7l5.9-.8z" />
        </svg>
      ))}
    </span>
  );
}

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="9" fill="#19cf9e" />
      <path d="M5.5 10.5l3 3 6-6" stroke="#09263f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const SECTION_CONTAINER = "max-w-[1200px] mx-auto px-4 lg:px-8";
const SECTION_PAD = "py-16 lg:py-24";

// ============================================================
// Main component
// ============================================================

export default function CourseDetailPage({ course }: { course: PdpCourse }) {
  const modules = course.modules ?? [];
  const pricing = course.pricing ?? [];
  const projects = course.projects ?? [];
  const certifications = course.certifications ?? [];
  const batches = course.batches ?? [];
  const tools = course.tools ?? [];
  const faqs = course.faqs ?? [];

  const statTiles =
    safeArray<StatTile>(course.pdpStatTiles).length > 0
      ? safeArray<StatTile>(course.pdpStatTiles)
      : [
          { label: "Total Hours", value: String(course.hoursCount ?? "—") },
          { label: "Live Classes", value: String(course.classesCount ?? "—") },
          { label: "Modules", value: String(modules.length) },
        ];

  const cities = (course.pdpCities ?? []).length
    ? course.pdpCities
    : ["Noida", "Gurgaon", "Bangalore"];

  const overviewHighlights = safeArray<Highlight>(course.pdpOverviewHighlights);
  const curriculumSummary = obj<CurriculumSummary>(course.pdpCurriculumSummary, {});
  const testimonialStrip = safeArray<TestimonialStripItem>(course.pdpTestimonialStrip);
  const projectDomains = safeArray<ProjectDomain>(course.pdpProjectDomains);
  const careerSupport = obj<CareerSupport>(course.pdpCareerSupport, {});
  const howToApply = safeArray<HowToApplyStep>(course.pdpHowToApply);
  const studentStories = safeArray<StudentStory>(course.pdpStudentStories);
  const relatedArticles = safeArray<RelatedArticle>(course.pdpRelatedArticles);
  const ctaBanner = obj<CtaBanner>(course.pdpCtaBanner, {
    headline: "Ready to start your data science journey?",
  });
  const contactBlock = obj<ContactBlock>(course.pdpContactBlock, {
    heading: "Have questions? Talk to a counselor.",
  });
  const faqsData =
    safeArray<FaqItem>(course.pdpFaqsData).length > 0
      ? safeArray<FaqItem>(course.pdpFaqsData)
      : faqs.map((f) => ({ question: f.question, answer: f.answer }));
  const learningModes = safeArray<LearningModeItem>(course.pdpLearningModesData);
  const certData = obj<CertificationData>(course.pdpCertificationData, {});
  const whoShouldJoin =
    safeArray<WhoShouldJoinItem>(course.pdpWhoShouldJoinData).length > 0
      ? safeArray<WhoShouldJoinItem>(course.pdpWhoShouldJoinData)
      : safeArray<WhoShouldJoinItem>(course.whoShouldJoin);
  const jobRoles =
    safeArray<string>(course.pdpJobRolesData).length > 0
      ? safeArray<string>(course.pdpJobRolesData)
      : (course.jobRoles ?? []);
  const keySkills =
    safeArray<string>(course.pdpKeySkillsData).length > 0
      ? safeArray<string>(course.pdpKeySkillsData)
      : (course.keySkills ?? []);

  const rating = course.rating ? Number(course.rating) : 9.6;
  const ratingScale = course.pdpRatingScale ?? 10;
  const alumniText = course.pdpAlumniText ?? (course.alumniCount ? `${course.alumniCount.toLocaleString()}+` : "20,000+");
  const starsTotal = course.pdpStarsTotal ?? 675;

  return (
    <div className="bg-white text-[#09263f] font-sans">
      <HeroSection
        course={course}
        pricing={pricing}
        statTiles={statTiles}
        cities={cities}
        rating={rating}
        ratingScale={ratingScale}
        alumniText={alumniText}
        starsTotal={starsTotal}
      />

      <StickyAnchorNav />

      <OverviewSection course={course} pricing={pricing} highlights={overviewHighlights} rating={rating} alumniText={alumniText} />

      <CurriculumSection modules={modules} course={course} summary={curriculumSummary} />

      <TestimonialStrip items={testimonialStrip} />

      <CapstoneProjects items={projectDomains} fallback={projects} />

      <ToolsGrid tools={tools} />

      <WhoShouldJoinSection items={whoShouldJoin} />

      <JobRolesSection roles={jobRoles} />

      <KeySkillsSection skills={keySkills} />

      <LearningModesSection modes={learningModes} />

      <CourseFeesSection pricing={pricing} />

      <CertificationSection data={certData} certifications={certifications} />

      <CareerSupportSection data={careerSupport} />

      <HowToApplySection steps={howToApply} />

      <StudentStoriesSection stories={studentStories} />

      <RelatedArticlesSection articles={relatedArticles} />

      <CtaBannerSection data={ctaBanner} />

      <ContactSection data={contactBlock} courseId={course.id} />

      <FaqSection items={faqsData} />

      <BatchesTable batches={batches} />
    </div>
  );
}

// ============================================================
// Section 1 — Hero
// ============================================================

function HeroSection({
  course,
  pricing,
  statTiles,
  cities,
  rating,
  ratingScale,
  alumniText,
  starsTotal,
}: {
  course: PdpCourse;
  pricing: CoursePricing[];
  statTiles: StatTile[];
  cities: string[];
  rating: number;
  ratingScale: number;
  alumniText: string;
  starsTotal: number;
}) {
  const [mode, setMode] = useState<"classroom" | "online" | "elearning">("online");
  const activePricing =
    pricing.find((p) => p.mode === mode) ?? pricing[0];

  return (
    <>
    <section className="bg-gradient-to-br from-[#F7F8FA] to-white border-b border-[#E5E7EB]">
      <div className={`${SECTION_CONTAINER} ${SECTION_PAD}`}>
        {/* pb-24 on mobile to leave room for sticky CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 pb-20 lg:pb-0">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold text-[#07b3e7] uppercase tracking-wide mb-3">
              {course.category.name}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#09263f] mb-4">
              {course.title}
            </h1>
            <p className="text-base md:text-lg text-[#475569] mb-6 max-w-2xl">
              {course.shortDesc}
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8">
              <div className="flex items-center gap-2">
                <Stars value={Math.min(5, rating / 2)} />
                <span className="font-semibold">
                  {rating}/{ratingScale}
                </span>
              </div>
              <div className="text-sm text-[#475569]">
                <span className="font-semibold text-[#09263f]">{starsTotal}</span> Reviews
              </div>
              <div className="text-sm text-[#475569]">
                <span className="font-semibold text-[#09263f]">{alumniText}</span> Alumni
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 max-w-md">
              {statTiles.slice(0, 3).map((tile, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-bold text-[#09263f]">{tile.value}</div>
                  <div className="text-xs text-[#475569] mt-1">{tile.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — pricing card */}
          <aside className="bg-white rounded-2xl border border-[#E5E7EB] shadow-md p-6 h-fit">
            <div className="flex gap-2 mb-5 bg-[#F7F8FA] p-1 rounded-xl">
              {(["classroom", "online", "elearning"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`flex-1 text-xs font-semibold py-2 rounded-lg capitalize transition ${
                    mode === m
                      ? "bg-[#09263f] text-white"
                      : "text-[#475569] hover:text-[#09263f]"
                  }`}
                >
                  {m === "elearning" ? "E-learning" : m}
                </button>
              ))}
            </div>

            {activePricing ? (
              <div className="mb-5">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-[#09263f]">
                    {inr(activePricing.price)}
                  </span>
                  {activePricing.priceStruck ? (
                    <span className="text-base text-[#94A3B8] line-through">
                      {inr(activePricing.priceStruck)}
                    </span>
                  ) : null}
                </div>
                {course.pdpTaxNote && (
                  <p className="text-xs text-[#475569] mt-1">{course.pdpTaxNote}</p>
                )}
                {course.pdpEmiNote && (
                  <p className="text-xs text-[#07b3e7] font-semibold mt-1">
                    {course.pdpEmiNote}
                  </p>
                )}
              </div>
            ) : (
              <div className="mb-5 text-sm text-[#475569]">Contact us for pricing</div>
            )}

            {cities.length > 0 && (
              <div className="mb-5">
                <p className="text-xs uppercase tracking-wide text-[#94A3B8] font-semibold mb-2">
                  Available in
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cities.map((c) => (
                    <span
                      key={c}
                      className="text-xs font-medium bg-[#F7F8FA] text-[#09263f] px-2.5 py-1 rounded-full border border-[#E5E7EB]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button
              type="button"
              className="w-full bg-[#ffd700] text-[#09263f] font-bold py-3 rounded-xl hover:brightness-95 transition mb-2"
            >
              Sign up for Demo
            </button>
            <div className="grid grid-cols-2 gap-2">
              {course.brochureUrl ? (
                <a
                  href={course.brochureUrl}
                  className="text-center text-sm font-semibold border border-[#09263f] text-[#09263f] py-2.5 rounded-xl hover:bg-[#F7F8FA] transition"
                >
                  Download Syllabus
                </a>
              ) : (
                <button
                  type="button"
                  className="text-sm font-semibold border border-[#09263f] text-[#09263f] py-2.5 rounded-xl hover:bg-[#F7F8FA] transition"
                >
                  Download Syllabus
                </button>
              )}
              <button
                type="button"
                className="text-sm font-semibold border border-[#09263f] text-[#09263f] py-2.5 rounded-xl hover:bg-[#F7F8FA] transition"
              >
                Contact Us
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>

    {/* Mobile sticky CTA — hidden on lg+ where the pricing card is visible */}
    <div className="fixed bottom-0 inset-x-0 z-50 p-3 bg-white border-t border-[#E5E7EB] shadow-lg lg:hidden">
      <button
        type="button"
        className="w-full bg-[#ffd700] text-[#09263f] font-bold py-3.5 rounded-xl hover:brightness-95 transition text-base"
        onClick={() => {
          const el = document.getElementById("contact");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Sign up for Demo
      </button>
    </div>
    </>
  );
}

// ============================================================
// Sticky anchor nav
// ============================================================

function StickyAnchorNav() {
  const items = [
    { id: "overview", label: "Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "projects", label: "Projects" },
    { id: "tools", label: "Tools" },
    { id: "audience", label: "Who Should Join" },
    { id: "modes", label: "Learning Modes" },
    { id: "batches", label: "Batches" },
  ];
  return (
    <div className="sticky top-0 z-30 bg-white border-b border-[#E5E7EB] shadow-sm">
      <div className={`${SECTION_CONTAINER} flex gap-1 overflow-x-auto`}>
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className="text-sm font-semibold text-[#475569] hover:text-[#09263f] px-3 py-3 whitespace-nowrap border-b-2 border-transparent hover:border-[#ffd700] transition"
          >
            {it.label}
          </a>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Section 2 — Overview
// ============================================================

function OverviewSection({
  course,
  pricing,
  highlights,
  rating,
  alumniText,
}: {
  course: PdpCourse;
  pricing: CoursePricing[];
  highlights: Highlight[];
  rating: number;
  alumniText: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const startingPrice = pricing[0]?.price;
  const stats = [
    { label: "Starting Price", value: startingPrice ? inr(startingPrice) : "—" },
    { label: "Avg Rating", value: `${rating}/10` },
    { label: "Duration", value: course.durationMonths ? `${course.durationMonths} months` : "—" },
    { label: "Alumni", value: alumniText },
  ];

  return (
    <section id="overview" className={`bg-white ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Course Overview</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-5 text-center"
            >
              <div className="text-xl md:text-2xl font-bold text-[#09263f]">{s.value}</div>
              <div className="text-xs text-[#475569] mt-1 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>

        <div
          className={`prose prose-slate max-w-none text-[#475569] leading-relaxed ${
            expanded ? "" : "max-h-48 overflow-hidden relative"
          }`}
        >
          <p className="whitespace-pre-line">{course.longDesc}</p>
          {!expanded && (
            <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </div>
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="text-sm font-semibold text-[#07b3e7] hover:underline mt-3"
        >
          {expanded ? "Show less" : "Read more"}
        </button>

        {highlights.length > 0 && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div key={i} className="flex gap-3 bg-[#F7F8FA] rounded-2xl p-5">
                <Check />
                <div>
                  <h3 className="font-bold text-[#09263f] mb-1">{h.title}</h3>
                  <p className="text-sm text-[#475569]">{h.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ============================================================
// Section 3 — Curriculum
// ============================================================

function CurriculumSection({
  modules,
  course,
  summary,
}: {
  modules: ModuleWithLessons[];
  course: PdpCourse;
  summary: CurriculumSummary;
}) {
  const [open, setOpen] = useState<string | null>(modules[0]?.id ?? null);
  const sortedModules = useMemo(
    () => [...modules].sort((a, b) => a.order - b.order),
    [modules]
  );
  const heading = course.pdpCurriculumHeading ?? "Course Curriculum";
  const subheading =
    course.pdpCurriculumSubheading ??
    "Industry-aligned curriculum designed by experts.";

  return (
    <section id="curriculum" className={`bg-[#F7F8FA] ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{heading}</h2>
        <p className="text-[#475569] mb-8 max-w-3xl">{subheading}</p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          <div className="flex flex-col gap-3">
            {sortedModules.map((m, idx) => {
              const isOpen = open === m.id;
              return (
                <div key={m.id} className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : m.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[#F7F8FA]"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-full bg-[#ffd700] text-[#09263f] font-bold flex items-center justify-center text-sm shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-bold text-[#09263f] text-base md:text-lg">{m.title}</h3>
                    </div>
                    <span className="text-2xl text-[#07b3e7] leading-none">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 border-t border-[#E5E7EB]">
                      {m.summary && (
                        <p className="text-sm text-[#475569] mt-4 mb-3">{m.summary}</p>
                      )}
                      {m.lessons.length > 0 && (
                        <ul className="flex flex-col gap-2">
                          {m.lessons.map((l) => (
                            <li key={l.id} className="flex items-center justify-between text-sm">
                              <span className="text-[#09263f] flex items-center gap-2">
                                <Check />
                                {l.title}
                              </span>
                              {l.duration && (
                                <span className="text-[#94A3B8] text-xs">{l.duration}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <aside className="bg-[#09263f] text-white rounded-2xl p-6 h-fit">
            <h3 className="font-bold text-lg mb-4">Program Summary</h3>
            <ul className="flex flex-col gap-3 text-sm mb-6">
              {summary.liveHours && (
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Live hours</span>
                  <span className="font-semibold">{summary.liveHours}</span>
                </li>
              )}
              {summary.selfStudyHours && (
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Self-study hours</span>
                  <span className="font-semibold">{summary.selfStudyHours}</span>
                </li>
              )}
              {summary.placementWeeks && (
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/70">Placement weeks</span>
                  <span className="font-semibold">{summary.placementWeeks}</span>
                </li>
              )}
            </ul>
            {summary.includes && summary.includes.length > 0 && (
              <>
                <p className="text-xs uppercase tracking-wide text-[#ffd700] font-semibold mb-3">
                  What&apos;s included
                </p>
                <ul className="flex flex-col gap-2 text-sm">
                  {summary.includes.map((it, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-[#ffd700]">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 4 — Testimonial strip
// ============================================================

function TestimonialStrip({ items }: { items: TestimonialStripItem[] }) {
  if (!items.length) return null;
  return (
    <section className={`bg-[#09263f] text-white ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">
          What Our Learners Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Stars value={t.stars ?? 5} />
              <p className="mt-4 mb-5 text-white/90 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                {t.photoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={t.photoUrl}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-[#07b3e7] flex items-center justify-center font-bold">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-white/60">
                    {[t.role, t.company].filter(Boolean).join(" · ")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 — Capstone projects
// ============================================================

function CapstoneProjects({
  items,
  fallback,
}: {
  items: ProjectDomain[];
  fallback: Project[];
}) {
  const list: ProjectDomain[] =
    items.length > 0
      ? items
      : fallback.map((p) => ({ domain: "Project", title: p.title, description: p.desc }));
  if (!list.length) return null;
  return (
    <section id="projects" className={`bg-white ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Capstone Projects</h2>
        <p className="text-[#475569] mb-8 max-w-2xl">
          Build a portfolio that showcases real industry problem-solving.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {list.map((p, i) => (
            <div
              key={i}
              className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-5 hover:shadow-md transition"
            >
              {p.icon && (
                <div className="w-12 h-12 rounded-xl bg-[#ffd700] flex items-center justify-center mb-3 text-xl">
                  {p.icon}
                </div>
              )}
              <span className="inline-block text-xs font-semibold text-[#07b3e7] uppercase tracking-wide mb-2">
                {p.domain}
              </span>
              <h3 className="font-bold text-[#09263f] mb-2">{p.title}</h3>
              <p className="text-sm text-[#475569]">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 6 — Tools grid
// ============================================================

function ToolsGrid({ tools }: { tools: ToolLite[] }) {
  if (!tools.length) return null;
  return (
    <section id="tools" className={`bg-[#F7F8FA] ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Tools & Technologies</h2>
        <p className="text-[#475569] mb-8 max-w-2xl">
          Master the most in-demand tools used by industry professionals.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {tools.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-[#E5E7EB] p-4 flex flex-col items-center justify-center aspect-square hover:shadow-md transition"
            >
              {t.iconUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={t.iconUrl} alt={t.name} className="w-10 h-10 object-contain mb-2" />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-[#07b3e7]/10 text-[#07b3e7] font-bold flex items-center justify-center mb-2">
                  {t.name.charAt(0)}
                </div>
              )}
              <span className="text-xs font-medium text-[#09263f] text-center">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 — Who Should Join
// ============================================================

function WhoShouldJoinSection({ items }: { items: WhoShouldJoinItem[] }) {
  if (!items.length) return null;
  return (
    <section id="audience" className={`bg-white ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Who Should Join</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((w, i) => (
            <div
              key={i}
              className="bg-[#F7F8FA] rounded-2xl p-6 border border-[#E5E7EB]"
            >
              {w.icon && <div className="text-3xl mb-3">{w.icon}</div>}
              <h3 className="font-bold text-[#09263f] mb-2">{w.title}</h3>
              <p className="text-sm text-[#475569]">{w.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 8 — Job Roles
// ============================================================

function JobRolesSection({ roles }: { roles: string[] }) {
  if (!roles.length) return null;
  return (
    <section className={`bg-[#F7F8FA] ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Job Roles You Can Pursue</h2>
        <p className="text-[#475569] mb-6 max-w-2xl">
          Career paths our alumni have built across leading companies.
        </p>
        <div className="flex flex-wrap gap-2">
          {roles.map((r, i) => (
            <span
              key={i}
              className="bg-white border border-[#E5E7EB] text-[#09263f] font-semibold px-4 py-2 rounded-full text-sm hover:bg-[#ffd700] transition cursor-default"
            >
              {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 9 — Key Skills
// ============================================================

function KeySkillsSection({ skills }: { skills: string[] }) {
  if (!skills.length) return null;
  return (
    <section className={`bg-white ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Key Skills You&apos;ll Gain</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 max-w-3xl">
          {skills.map((s, i) => (
            <li key={i} className="flex items-center gap-3 text-[#09263f]">
              <Check />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ============================================================
// Section 10 — Learning Modes
// ============================================================

function LearningModesSection({ modes }: { modes: LearningModeItem[] }) {
  if (!modes.length) return null;
  return (
    <section id="modes" className={`bg-[#F7F8FA] ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Learning Modes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {modes.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#E5E7EB] p-6 hover:shadow-md transition"
            >
              {m.icon && (
                <div className="w-14 h-14 rounded-2xl bg-[#ffd700] text-[#09263f] text-2xl flex items-center justify-center mb-4">
                  {m.icon}
                </div>
              )}
              <h3 className="font-bold text-xl text-[#09263f] mb-2">{m.name}</h3>
              <p className="text-sm text-[#475569]">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 11 — Course Fees
// ============================================================

function CourseFeesSection({ pricing }: { pricing: CoursePricing[] }) {
  if (!pricing.length) return null;
  return (
    <section className={`bg-white ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Course Fees</h2>
        <p className="text-[#475569] mb-8 max-w-2xl">
          Choose a learning mode that fits your schedule and budget.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricing.map((p) => (
            <div
              key={p.id}
              className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-6 flex flex-col"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[#07b3e7] mb-3">
                {p.label}
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-[#09263f]">{inr(p.price)}</span>
                {p.priceStruck ? (
                  <span className="text-sm text-[#94A3B8] line-through">{inr(p.priceStruck)}</span>
                ) : null}
              </div>
              <p className="text-sm text-[#475569] mb-1">{p.installments} easy installments</p>
              {p.hasEmi && (
                <p className="text-sm font-semibold text-[#07b3e7] mb-5">EMI available</p>
              )}
              <a
                href={p.ctaHref || "#contact"}
                className="mt-auto text-center bg-[#ffd700] text-[#09263f] font-bold py-3 rounded-xl hover:brightness-95 transition"
              >
                {p.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 12 — Certification
// ============================================================

function CertificationSection({
  data,
  certifications,
}: {
  data: CertificationData;
  certifications: Certification[];
}) {
  const certImg = data.certificateImageUrl ?? certifications[0]?.imageUrl ?? null;
  if (!data.heading && !certifications.length && !certImg) return null;
  return (
    <section className={`bg-[#F7F8FA] ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              {data.heading ?? "Industry-Recognized Certification"}
            </h2>
            <p className="text-[#475569] mb-6">
              {data.body ??
                "Earn a certificate that's recognized by 500+ hiring partners across the industry."}
            </p>
            {(data.coBrandedName || data.coBrandedDesc) && (
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex gap-4 items-center">
                {data.coBrandedLogoUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={data.coBrandedLogoUrl}
                    alt={data.coBrandedName ?? ""}
                    className="w-16 h-16 object-contain"
                  />
                )}
                <div>
                  {data.coBrandedName && (
                    <h3 className="font-bold text-[#09263f]">{data.coBrandedName}</h3>
                  )}
                  {data.coBrandedDesc && (
                    <p className="text-sm text-[#475569]">{data.coBrandedDesc}</p>
                  )}
                </div>
              </div>
            )}
          </div>
          {certImg && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={certImg}
              alt="Certificate"
              className="rounded-2xl shadow-md border border-[#E5E7EB] w-full"
            />
          )}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 13 — Career support
// ============================================================

function CareerSupportSection({ data }: { data: CareerSupport }) {
  if (!data.intro && !data.features?.length && !data.partnerLogos?.length) return null;
  return (
    <section className={`bg-white ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Career Support</h2>
        {data.intro && <p className="text-[#475569] mb-8 max-w-2xl">{data.intro}</p>}

        {data.features && data.features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {data.features.map((f, i) => (
              <div
                key={i}
                className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ffd700] text-[#09263f] font-bold flex items-center justify-center mb-3">
                  {i + 1}
                </div>
                <h3 className="font-bold text-[#09263f] mb-2">{f.title}</h3>
                <p className="text-sm text-[#475569]">{f.body}</p>
              </div>
            ))}
          </div>
        )}

        {data.partnerLogos && data.partnerLogos.length > 0 && (
          <div>
            <p className="text-xs uppercase tracking-wide font-semibold text-[#07b3e7] mb-4">
              Our hiring partners
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 items-center">
              {data.partnerLogos.map((p, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#E5E7EB] rounded-xl p-3 flex items-center justify-center aspect-[3/2]"
                >
                  {p.logoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.logoUrl}
                      alt={p.name}
                      className="max-h-10 object-contain"
                    />
                  ) : (
                    <span className="text-xs text-[#475569]">{p.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ============================================================
// Section 14 — How to apply
// ============================================================

function HowToApplySection({ steps }: { steps: HowToApplyStep[] }) {
  if (!steps.length) return null;
  return (
    <section className={`bg-[#09263f] text-white ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">How to Apply</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-[#ffd700] text-[#09263f] font-bold text-xl flex items-center justify-center mb-4">
                {s.stepNumber}
              </div>
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-white/70">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 15 — Student stories
// ============================================================

function StudentStoriesSection({ stories }: { stories: StudentStory[] }) {
  if (!stories.length) return null;
  return (
    <section className={`bg-white ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Student Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stories.map((s, i) => (
            <div
              key={i}
              className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                {s.photoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={s.photoUrl}
                    alt={s.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-[#07b3e7] text-white font-bold flex items-center justify-center">
                    {s.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-bold text-[#09263f]">{s.name}</div>
                  {s.role && <div className="text-xs text-[#475569]">{s.role}</div>}
                  {s.credential && (
                    <div className="text-xs text-[#07b3e7] font-semibold">{s.credential}</div>
                  )}
                </div>
              </div>
              <p className="text-sm text-[#475569] italic">&ldquo;{s.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 16 — Related articles
// ============================================================

function RelatedArticlesSection({ articles }: { articles: RelatedArticle[] }) {
  if (!articles.length) return null;
  return (
    <section className={`bg-[#F7F8FA] ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articles.map((a, i) => (
            <a
              key={i}
              href={a.url ?? "#"}
              className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:shadow-md transition flex flex-col"
            >
              {a.imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={a.imageUrl}
                  alt={a.title}
                  className="w-full aspect-[16/9] object-cover"
                />
              )}
              <div className="p-5 flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-3 text-xs">
                  {a.category && (
                    <span className="text-[#07b3e7] font-semibold uppercase tracking-wide">
                      {a.category}
                    </span>
                  )}
                  {a.readTime && <span className="text-[#94A3B8]">{a.readTime}</span>}
                </div>
                <h3 className="font-bold text-[#09263f]">{a.title}</h3>
                {a.excerpt && (
                  <p className="text-sm text-[#475569] line-clamp-2">{a.excerpt}</p>
                )}
                {a.author && (
                  <p className="text-xs text-[#94A3B8] mt-auto">By {a.author}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 17 — CTA Banner
// ============================================================

function CtaBannerSection({ data }: { data: CtaBanner }) {
  const bg = data.bgColor ?? "#09263f";
  return (
    <section className="py-12 lg:py-16" style={{ backgroundColor: bg }}>
      <div className={`${SECTION_CONTAINER} flex flex-col md:flex-row items-center justify-between gap-6 text-white`}>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{data.headline}</h2>
          {data.subheadline && <p className="text-white/80">{data.subheadline}</p>}
        </div>
        {data.ctaText && (
          <a
            href={data.ctaUrl ?? "#contact"}
            className="bg-[#ffd700] text-[#09263f] font-bold px-8 py-3.5 rounded-xl hover:brightness-95 transition whitespace-nowrap"
          >
            {data.ctaText}
          </a>
        )}
      </div>
    </section>
  );
}

// ============================================================
// Section 18 — Contact + lead form
// ============================================================

function ContactSection({
  data,
  courseId,
}: {
  data: ContactBlock;
  courseId: string;
}) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          city: form.city,
          courseId,
          source: "pdp-contact",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className={`bg-white ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{data.heading}</h2>
            {data.description && <p className="text-[#475569] mb-8">{data.description}</p>}
          </div>
          <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-6">
            {done ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#ffd700] mx-auto mb-4 flex items-center justify-center">
                  <Check />
                </div>
                <h3 className="font-bold text-[#09263f] mb-2">Thank you!</h3>
                <p className="text-sm text-[#475569]">
                  We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#07b3e7]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Mobile number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#07b3e7]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#07b3e7]"
                />
                <select
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#07b3e7]"
                >
                  <option value="">Select city</option>
                  <option value="Noida">Noida</option>
                  <option value="Gurgaon">Gurgaon</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Online">Online</option>
                  <option value="Other">Other</option>
                </select>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-[#ffd700] text-[#09263f] font-bold py-3 rounded-xl hover:brightness-95 disabled:opacity-50 transition"
                >
                  {submitting ? "Submitting…" : "Request Callback"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 19 — FAQ
// ============================================================

function FaqSection({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  if (!items.length) return null;
  return (
    <section className={`bg-[#F7F8FA] ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl flex flex-col gap-3">
          {items.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[#F7F8FA]"
              >
                <h3 className="font-semibold text-[#09263f]">{f.question}</h3>
                <span className="text-2xl text-[#07b3e7] leading-none">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-[#475569] border-t border-[#E5E7EB] pt-4">
                  <p className="whitespace-pre-line">{f.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 20 — Batches table
// ============================================================

function BatchesTable({ batches }: { batches: Batch[] }) {
  if (!batches.length) return null;
  return (
    <section id="batches" className={`bg-white ${SECTION_PAD}`}>
      <div className={SECTION_CONTAINER}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Upcoming Batches</h2>
        <div className="overflow-x-auto border border-[#E5E7EB] rounded-2xl">
          <table className="w-full text-sm">
            <thead className="bg-[#F7F8FA] text-[#09263f]">
              <tr>
                <th className="text-left p-4 font-semibold">Location</th>
                <th className="text-left p-4 font-semibold">Start Date</th>
                <th className="text-left p-4 font-semibold">Schedule</th>
                <th className="text-left p-4 font-semibold">Seats Left</th>
                <th className="text-right p-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((b) => (
                <tr key={b.id} className="border-t border-[#E5E7EB]">
                  <td className="p-4 font-medium text-[#09263f]">{b.location}</td>
                  <td className="p-4 text-[#475569]">
                    {new Date(b.startDate).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="p-4 text-[#475569]">{b.schedule}</td>
                  <td className="p-4">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        b.seatsLeft <= 5
                          ? "bg-red-50 text-red-600"
                          : "bg-[#ffd700]/30 text-[#09263f]"
                      }`}
                    >
                      {b.seatsLeft} seats
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <a
                      href="#contact"
                      className="inline-block bg-[#ffd700] text-[#09263f] font-bold px-4 py-2 rounded-xl hover:brightness-95 transition text-xs"
                    >
                      Reserve Seat
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
