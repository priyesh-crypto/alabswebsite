"use client";

import { useMemo, useState } from "react";
import { 
  Play, 
  FileDown, 
  Tv, 
  Briefcase, 
  Award, 
  Headset, 
  Star,
  Download,
  Heart,
  ExternalLink,
  Quote
} from "lucide-react";
import imgRahul from "@/features/pdp/0effb68a268a8b7912b8aae4d984808edb6a835d.png";
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

function resolvePath(obj: any, path: string) {
  return path.split('.').reduce((o, p) => (o ? o[p] : undefined), obj);
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

const SECTION_CONTAINER = "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8";
const SECTION_PAD = "py-10 sm:py-12 lg:py-20";

// ============================================================
// Main component
// ============================================================

export default function CourseDetailPage({ course, pageBlocks }: { course: PdpCourse; pageBlocks?: any }) {
  function block(key: string): any | undefined {
    const blocks = pageBlocks?.blocks as Record<string, unknown> | undefined;
    if (!blocks) return undefined;
    return resolvePath(blocks, key) ?? blocks[key];
  }
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
          { label: "Total hours", value: String(course.hoursCount ?? "—") },
          { label: "Live classes", value: String(course.classesCount ?? "—") },
          { label: "Modules", value: String(modules.length || "—") },
          { label: "Alumni", value: course.pdpAlumniText ?? (course.alumniCount ? `${Math.round(course.alumniCount / 1000)}K+` : "20K+") },
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
  const alumniText = course.pdpAlumniText ?? (course.alumniCount ? `${course.alumniCount.toLocaleString()}+` : "20,000+");

  return (
    <div className="bg-white text-[#09263f] font-sans pb-24 lg:pb-0">
      {/* 2-col area — wraps just the top of the page (Hero + StickyAnchorNav +
          Overview + Curriculum). Sticky sidebar runs alongside this section.
          Capstone and everything below break out to full width since the
          sidebar's natural height ends around the Curriculum. */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12">
          <main className="min-w-0">
            <HeroSection
              course={course}
              statTiles={statTiles}
              rating={rating}
              alumniText={alumniText}
            />

            {/* Mobile/tablet: sidebar reflows here, right after the hero text */}
            <div className="lg:hidden mb-8">
              <PdpSidebar
                course={course}
                pricing={pricing}
                cities={cities}
                rating={rating}
                alumniText={alumniText}
                testimonialStrip={testimonialStrip}
              />
            </div>

            <StickyAnchorNav />

            <OverviewSection course={course} highlights={overviewHighlights} pageBlocks={pageBlocks} />
            <CurriculumSection modules={modules} course={course} summary={curriculumSummary} pageBlocks={pageBlocks} />
          </main>

          {/* Desktop sticky sidebar */}
          <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start lg:pt-6">
            <PdpSidebar
              course={course}
              pricing={pricing}
              cities={cities}
              rating={rating}
              alumniText={alumniText}
              testimonialStrip={testimonialStrip}
            />
          </aside>
        </div>
      </div>

      {/* Full-width sections — Capstone onwards extend across the whole page */}
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
      <TestimonialStrip items={testimonialStrip} />
      <StudentStoriesSection stories={studentStories} />
      <RelatedArticlesSection articles={relatedArticles} />
      <CtaBannerSection data={ctaBanner} />
      <ContactSection data={contactBlock} courseId={course.id} />
      <FaqSection items={faqsData} />
      <BatchesTable batches={batches} />

      <MobileStickyCta />
    </div>
  );
}

// ============================================================
// Section 1 — Hero
// ============================================================

/**
 * Sidebar stack with 4 cards (Pricing / Stats / Includes / Testimonial).
 * Rendered ONCE — inside the desktop aside (sticky) or inside the mobile
 * inline block below the hero text. Owns its own pricing-tab state.
 */
function PdpSidebar({
  course,
  pricing,
  cities,
  rating,
  alumniText,
  testimonialStrip,
}: {
  course: PdpCourse;
  pricing: CoursePricing[];
  cities: string[];
  rating: number;
  alumniText: string;
  testimonialStrip: TestimonialStripItem[];
}) {
  const [mode, setMode] = useState<"classroom" | "online" | "elearning">("classroom");
  const activePricing = pricing.find((p) => p.mode === mode) ?? pricing[0];
  const modeLabels: Record<"classroom" | "online" | "elearning", string> = {
    classroom: "Classroom",
    online: "Online",
    elearning: "eLearning",
  };
  const allModes: Array<"classroom" | "online" | "elearning"> = ["classroom", "online", "elearning"];

  const featured = testimonialStrip[0] ?? {
    quote: "The structure was exactly what I needed. I went from zero Python to deploying an ML model within 8 months. The placement support helped me crack my first data scientist role.",
    name: "Rahul Kapoor",
    role: "Data Scientist",
    company: "Flipkart",
    stars: 5,
    photoUrl: undefined,
  };

  const sidebarStats: Array<{ label: string; value: string; bg: string; color: string }> = [
    { label: "Starting price", value: pricing[0]?.price ? `₹${Math.round(pricing[0].price / 100 / 1000)}k` : "₹48k", bg: "#E8F8F1", color: "#19cf9e" },
    { label: "Program duration", value: course.durationMonths ? `${course.durationMonths} mo` : "8 mo", bg: "#FFF5DA", color: "#D89A00" },
    { label: "Avg rating", value: `${Math.min(10, rating).toFixed(1)}`, bg: "#E6F4FB", color: "#07b3e7" },
    { label: "Alumni", value: alumniText, bg: "#FCE7F3", color: "#DB2777" },
  ];

  const sidebarIncludes: Array<{ icon: React.ReactNode; label: string }> = [
    { icon: <Play className="size-5 text-[#09263f]/60" />, label: `${course.hoursCount ?? 65} hrs on-demand video` },
    { icon: <FileDown className="size-5 text-[#09263f]/60" />, label: "49 downloadable resources" },
    { icon: <Tv className="size-5 text-[#09263f]/60" />, label: "Access on mobile & TV" },
    { icon: <Briefcase className="size-5 text-[#09263f]/60" />, label: `${course.modules?.length ?? 6} capstone projects` },
    { icon: <Award className="size-5 text-[#09263f]/60" />, label: "Certificate of completion" },
    { icon: <Headset className="size-5 text-[#09263f]/60" />, label: "8 weeks placement support" },
  ];

  return (
    <div className="flex flex-col gap-5 lg:gap-6">
      {/* 1. PRICING CARD */}
      <div className="bg-white rounded-[24px] border border-[#09263f]/10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* Course image */}
        <div className="aspect-[16/10] bg-[#09263f] relative">
          {course.heroImageUrl || course.thumbnailUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={course.heroImageUrl ?? course.thumbnailUrl}
              alt={course.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/40 font-semibold text-sm">
              Course Preview
            </div>
          )}
        </div>

        <div className="p-5 sm:p-6">
          {/* Price */}
          {activePricing ? (
            <div className="mb-4">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-2xl sm:text-3xl font-bold text-[#09263f]">{inr(activePricing.price)}</span>
                {activePricing.priceStruck ? (
                  <span className="text-sm sm:text-base text-[#94A3B8] line-through">{inr(activePricing.priceStruck)}</span>
                ) : null}
              </div>
              <p className="text-xs text-[#475569] mt-1">
                {course.pdpTaxNote ?? "Inclusive of all taxes• Easy EMI available"}
              </p>
            </div>
          ) : (
            <div className="mb-4 text-sm text-[#475569]">Contact us for pricing</div>
          )}

          {/* Mode tabs with inactive-EMI badges underneath */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {allModes.map((m) => {
              const isActive = mode === m;
              const p = pricing.find((pr) => pr.mode === m);
              return (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`flex flex-col items-center justify-center rounded-xl px-2 py-2.5 transition ${
                    isActive
                      ? "bg-[#19cf9e] text-white font-semibold shadow-sm"
                      : "bg-white text-[#09263f] border border-[#E5E7EB] hover:border-[#19cf9e]/50"
                  }`}
                >
                  <span className="text-xs sm:text-[13px] font-semibold leading-tight">
                    {modeLabels[m]}
                  </span>
                  {!isActive && p?.price ? (
                    <span className="block w-full mt-1.5 bg-[#F7F8FA] text-[#475569] text-[9px] font-medium rounded-md px-1 py-0.5 leading-tight truncate">
                      @{inr(p.price)}/- <span className="text-[#94A3B8]">easy EMI</span>
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>

          {/* Cities */}
          {cities.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-xs text-[#09263f] font-medium">
              {cities.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          )}

          {/* CTAs */}
          {course.brochureUrl ? (
            <a
              href={course.brochureUrl}
              className="block w-full text-center bg-[#ffd700] text-[#09263f] font-bold py-3 rounded-full hover:brightness-95 transition mb-2"
            >
              Download Syllabus
            </a>
          ) : (
            <button
              type="button"
              className="block w-full text-center bg-[#ffd700] text-[#09263f] font-bold py-3 rounded-full hover:brightness-95 transition mb-2"
            >
              Download Syllabus
            </button>
          )}
          <button
            type="button"
            className="block w-full text-center border border-[#09263f] text-[#09263f] font-semibold py-3 rounded-full hover:bg-[#F7F8FA] transition"
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* 2. STATS CARD — pastel 2×2 grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {sidebarStats.map((s, i) => (
          <div key={i} className="rounded-2xl p-4 sm:p-5 text-center" style={{ backgroundColor: s.bg }}>
            <div className="text-2xl sm:text-3xl font-bold leading-tight" style={{ color: s.color }}>
              {s.value}
            </div>
            <div className="text-xs text-[#475569] mt-1.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* 3. INCLUDES CARD */}
      <div className="bg-white rounded-[24px] border border-[#09263f]/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-5 sm:p-6">
        <h3 className="text-xs uppercase tracking-wider text-[#475569] font-semibold mb-4">Includes</h3>
        <ul className="flex flex-col gap-3.5 mb-6 pb-6 border-b border-[#E5E7EB]">
          {sidebarIncludes.map((it, i) => (
            <li key={i} className="flex items-center gap-3">
              {it.icon}
              <span className="text-sm text-[#09263f]/85 font-medium">{it.label}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2.5">
          {course.brochureUrl ? (
            <a href={course.brochureUrl} className="flex items-center justify-center bg-[#ffd700] h-[48px] rounded-full font-bold text-[#09263f] text-sm">
              Download Syllabus
            </a>
          ) : (
            <button type="button" className="flex items-center justify-center bg-[#ffd700] h-[48px] rounded-full font-bold text-[#09263f] text-sm">
              Download Syllabus
            </button>
          )}
          <button type="button" className="flex items-center justify-center bg-white h-[48px] rounded-full font-bold text-[#09263f] text-sm border border-[#09263f]/15">
            Add to Wishlist
          </button>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center bg-[#19cf9e] h-[48px] rounded-full font-bold text-white text-sm"
          >
            Sign up for Free Demo
          </button>
        </div>
      </div>

      {/* 4. TESTIMONIAL CARD */}
      <div className="bg-white rounded-[24px] border border-[#09263f]/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-5 sm:p-6 relative">
        <Quote className="size-7 text-[#09263f]/30 mb-2" />
        <p className="text-[#09263f]/85 text-sm leading-relaxed mb-5">
          {featured.quote}
        </p>
        <div className="flex items-center gap-3">
          <div className="size-11 rounded-full overflow-hidden border-2 border-white shadow-sm bg-[#19cf9e]">
            {featured.photoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={featured.photoUrl} alt={featured.name} className="size-full object-cover" />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={imgRahul.src} alt={featured.name} className="size-full object-cover" />
            )}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-[#09263f] truncate">{featured.name}</p>
            <p className="text-[11px] text-[#09263f]/55 truncate">
              {[featured.role, featured.company].filter(Boolean).join(" @ ")}
            </p>
            <div className="flex gap-0.5 mt-1">
              {Array.from({ length: featured.stars ?? 5 }).map((_, i) => (
                <Star key={i} className="size-3 fill-[#ffd700] text-[#ffd700]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

// ============================================================
// Hero — text content only (title / sub / rating / 4-stat row / CTA).
// The sidebar (Pricing/Stats/Includes/Testimonial) lives in the outer
// 2-col grid, rendered by CourseDetailPage; this keeps a single source
// of truth and removes duplication.
// ============================================================

function HeroSection({
  course,
  statTiles,
  rating,
  alumniText,
}: {
  course: PdpCourse;
  statTiles: StatTile[];
  rating: number;
  alumniText: string;
}) {
  const leftStats: Array<{ label: string; value: string; bg: string }> = (statTiles.length >= 4 ? statTiles : [
    { label: "Total hours", value: String(course.hoursCount ?? "—") },
    { label: "Live classes", value: String(course.classesCount ?? "—") },
    { label: "Modules", value: String(course.modules?.length || "—") },
    { label: "Alumni", value: alumniText },
  ]).slice(0, 4).map((s, i) => ({
    label: String(s.label),
    value: String(s.value),
    bg: ["#d2faf0", "#fffad2", "#f0fbff", "#fff2fa"][i % 4]!,
  }));

  return (
    <section className="bg-white pt-6 lg:pt-4 pb-8 lg:pb-10">
      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight text-[#09263f] mb-3">
        {course.title}
      </h1>
      <p className="text-sm sm:text-base lg:text-lg text-[#475569] mb-5 leading-relaxed max-w-2xl">
        {course.shortDesc}
      </p>

      {/* Rating */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <Stars value={Math.min(5, rating / 2)} size={14} />
        <span className="text-sm font-semibold text-[#09263f]">
          {Math.min(5, rating / 2).toFixed(1)}/5
        </span>
        <span className="text-sm text-[#475569]">({alumniText} alumni)</span>
      </div>

      {/* Course-capability stat row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 mb-8 max-w-2xl">
        {leftStats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center rounded-[20px] py-4 px-3 shadow-sm border border-[#09263f]/5"
            style={{ background: s.bg }}
          >
            <span className="font-bold text-[#09263f] text-lg lg:text-xl leading-tight">{s.value}</span>
            <span className="text-[10px] lg:text-[11px] text-[#09263f]/50 mt-1 font-semibold uppercase tracking-wider text-center">{s.label}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="hidden lg:inline-flex items-center justify-center bg-[#19cf9e] text-white font-bold px-8 py-3.5 rounded-full hover:brightness-95 transition text-base shadow-sm"
        onClick={() => {
          const el = document.getElementById("contact");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Sign Up for Demo
      </button>
    </section>
  );
}

// ============================================================
// Mobile sticky CTA bar — visible <lg only.
// ============================================================

function MobileStickyCta() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-3 bg-white border-t border-[#E5E7EB] shadow-lg lg:hidden">
      <button
        type="button"
        className="w-full bg-[#19cf9e] text-white font-bold py-3.5 rounded-full hover:brightness-95 transition text-base"
        onClick={() => {
          const el = document.getElementById("contact");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Sign Up for Demo
      </button>
    </div>
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
  highlights,
  pageBlocks,
}: {
  course: PdpCourse;
  highlights: Highlight[];
  pageBlocks?: any;
}) {
  const [expanded, setExpanded] = useState(false);

  function blockStr(key: string): string | undefined {
    const blocks = pageBlocks?.blocks as Record<string, unknown> | undefined;
    if (!blocks) return undefined;
    const v = resolvePath(blocks, key) ?? blocks[key];
    return typeof v === "string" ? v : undefined;
  }

  const desc = blockStr("pdp_overview.body") || course.longDesc;

  if (!desc && highlights.length === 0) return null;

  return (
    <section id="overview" className="bg-white pt-8 lg:pt-10 pb-6 lg:pb-8">
      {/* Course longDesc — collapsed by default */}
      {desc && (
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-[#09263f]">Overview</h2>
          <div
            className={`prose prose-slate max-w-none text-sm sm:text-base text-[#475569] leading-relaxed ${
              expanded ? "" : "max-h-48 overflow-hidden relative"
            }`}
            dangerouslySetInnerHTML={blockStr("pdp_overview.body") ? { __html: blockStr("pdp_overview.body")! } : undefined}
          >
            {!blockStr("pdp_overview.body") && <p className="whitespace-pre-line">{desc}</p>}
            {!expanded && (
              <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
          </div>
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="text-xs font-semibold text-[#07b3e7] hover:underline mt-2"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        </div>
      )}

      {/* Optional highlights grid */}
      {highlights.length > 0 && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {highlights.map((h, i) => (
            <div key={i} className="flex gap-3 bg-[#F7F8FA] rounded-2xl p-4 sm:p-5">
              <Check />
              <div>
                <h3 className="font-bold text-[#09263f] mb-1">{h.title}</h3>
                <p className="text-sm text-[#475569]">{h.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
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
  pageBlocks,
}: {
  modules: ModuleWithLessons[];
  course: PdpCourse;
  summary: CurriculumSummary;
  pageBlocks?: any;
}) {
  const [open, setOpen] = useState<string | null>(modules[0]?.id ?? null);
  const sortedModules = useMemo(
    () => [...modules].sort((a, b) => a.order - b.order),
    [modules]
  );
  const heading = course.pdpCurriculumHeading ?? "Data Science Course Curriculum";
  const subheading =
    course.pdpCurriculumSubheading ??
    "Industry-aligned curriculum, designed by working data professionals — built so you can finish job-ready.";

  return (
    <section id="curriculum" className="bg-white py-10 lg:py-16">
      <div className={SECTION_CONTAINER}>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#09263f]">{heading}</h2>
        <p className="text-sm sm:text-base text-[#475569] mb-6 max-w-3xl">{subheading}</p>

        <div className="flex flex-col gap-2.5">
          {sortedModules.map((m, idx) => {
            const isOpen = open === m.id;
            return (
              <div
                key={m.id}
                className={`rounded-2xl border transition ${
                  isOpen
                    ? "bg-white border-[#1de5b5] shadow-[0_4px_24px_0_rgba(29,229,181,0.10)]"
                    : "bg-[#F7F8FA] border-[#E5E7EB] hover:border-[#1de5b5]/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : m.id)}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span
                      className={`shrink-0 size-9 sm:size-10 rounded-xl font-bold flex items-center justify-center text-sm transition ${
                        isOpen
                          ? "bg-[#1de5b5] text-white"
                          : "bg-white text-[#09263f] border border-[#E5E7EB]"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-semibold text-[#09263f] text-sm sm:text-base lg:text-lg truncate">
                      {m.title}
                    </h3>
                  </div>
                  <span
                    className={`shrink-0 inline-flex items-center justify-center size-7 sm:size-8 rounded-full text-sm transition ${
                      isOpen ? "bg-[#1de5b5]/10 text-[#1de5b5] rotate-180" : "text-[#94A3B8]"
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-0">
                    {m.summary && (
                      <p className="text-sm text-[#475569] mt-1 mb-4 pl-12 sm:pl-14">{m.summary}</p>
                    )}
                    {m.lessons.length > 0 && (
                      <ul className="flex flex-col gap-2 pl-12 sm:pl-14">
                        {m.lessons.map((l) => (
                          <li
                            key={l.id}
                            className="flex items-center justify-between gap-3 text-sm border-b border-[#E5E7EB] last:border-b-0 pb-2 last:pb-0"
                          >
                            <span className="text-[#09263f] flex items-center gap-2">
                              <Check />
                              {l.title}
                            </span>
                            {l.duration && (
                              <span className="text-[#94A3B8] text-xs shrink-0">{l.duration}</span>
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
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center">
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

  // Pastel palette rotated per card — matches Figma's varied capstone tiles
  const palette = [
    { bg: "#E6F4FB", icon: "#07b3e7" }, // sky
    { bg: "#FFF5DA", icon: "#D89A00" }, // amber
    { bg: "#E8F8F1", icon: "#19cf9e" }, // mint
    { bg: "#FCE7F3", icon: "#DB2777" }, // pink
    { bg: "#EDE9FE", icon: "#7C3AED" }, // violet
    { bg: "#FFE4E6", icon: "#E11D48" }, // rose
  ];

  return (
    <section id="projects" className="bg-[#F7F8FA] py-10 lg:py-16">
      <div className={SECTION_CONTAINER}>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#09263f] text-center">
          Data Science Capstone Projects &amp; Assignments
        </h2>
        <p className="text-sm sm:text-base text-[#475569] mb-6 max-w-2xl mx-auto text-center">
          Build a portfolio of real-world projects across banking, retail, telecom, healthcare and more.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {list.map((p, i) => {
            const c = palette[i % palette.length]!;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#E5E7EB] p-4 sm:p-5 hover:shadow-[0_8px_24px_0_rgba(9,38,63,0.08)] transition flex flex-col gap-3"
              >
                <div
                  className="size-11 rounded-xl flex items-center justify-center text-lg"
                  style={{ backgroundColor: c.bg, color: c.icon }}
                >
                  {p.icon ?? "✦"}
                </div>
                <div>
                  {p.domain && (
                    <span className="block text-[10px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: c.icon }}>
                      {p.domain}
                    </span>
                  )}
                  <h3 className="font-semibold text-[#09263f] text-sm sm:text-base leading-snug mb-1.5">
                    {p.title}
                  </h3>
                  {p.description && (
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
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
    <section id="tools" className="bg-white py-10 lg:py-16">
      <div className={SECTION_CONTAINER}>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#09263f] text-center">
          Data Science Tools &amp; Technologies
        </h2>
        <p className="text-sm sm:text-base text-[#475569] mb-6 max-w-2xl mx-auto text-center">
          Hands-on with the most in-demand tools used by working data professionals.
        </p>
        {/* Horizontal scroll on mobile, wrap grid on tablet+, single line on desktop */}
        <div className="-mx-4 lg:mx-0 overflow-x-auto scrollbar-none">
          <div className="px-4 lg:px-0 grid grid-flow-col auto-cols-[88px] sm:auto-cols-[100px] md:grid-flow-row md:auto-cols-auto md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3 lg:gap-4">
            {tools.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl border border-[#E5E7EB] p-3 sm:p-4 flex flex-col items-center justify-center text-center hover:shadow-[0_4px_16px_0_rgba(9,38,63,0.08)] transition aspect-square"
              >
                {t.iconUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={t.iconUrl} alt={t.name} className="size-8 sm:size-10 object-contain mb-1.5 sm:mb-2" />
                ) : (
                  <div className="size-8 sm:size-10 rounded-lg bg-[#07b3e7]/10 text-[#07b3e7] font-bold flex items-center justify-center mb-1.5 sm:mb-2 text-sm sm:text-base">
                    {t.name.charAt(0)}
                  </div>
                )}
                <span className="text-[11px] sm:text-xs font-medium text-[#09263f] leading-tight">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
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
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center">Who Should Join</h2>
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
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-center">Job Roles You Can Pursue</h2>
        <p className="text-[#475569] mb-6 max-w-2xl mx-auto text-center">
          Career paths our alumni have built across leading companies.
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
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
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center">Key Skills You&apos;ll Gain</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 max-w-3xl mx-auto">
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
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center">Learning Modes</h2>
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
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-center">Course Fees</h2>
        <p className="text-[#475569] mb-8 max-w-2xl mx-auto text-center">
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
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center">
          {data.heading ?? "Industry-Recognized Certification"}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
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
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-center">Career Support</h2>
        {data.intro && <p className="text-[#475569] mb-8 max-w-2xl mx-auto text-center">{data.intro}</p>}

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
            <p className="text-xs uppercase tracking-wide font-semibold text-[#07b3e7] mb-4 text-center">
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
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center">How to Apply</h2>
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
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">Student Success Stories</h2>
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
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">Related Articles</h2>
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
    <section className="py-10 sm:py-12 lg:py-16" style={{ backgroundColor: bg }}>
      <div className={`${SECTION_CONTAINER} flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-5 md:gap-6 text-white`}>
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 leading-tight">{data.headline}</h2>
          {data.subheadline && <p className="text-sm sm:text-base text-white/80">{data.subheadline}</p>}
        </div>
        {data.ctaText && (
          <a
            href={data.ctaUrl ?? "#contact"}
            className="w-full md:w-auto text-center bg-[#ffd700] text-[#09263f] font-bold px-8 py-3.5 rounded-xl hover:brightness-95 transition whitespace-nowrap"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">{data.heading}</h2>
            {data.description && <p className="text-sm sm:text-base text-[#475569] mb-4 lg:mb-8">{data.description}</p>}
          </div>
          <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-4 sm:p-6">
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
        <h2 className="text-base sm:text-xl lg:text-3xl font-bold mb-5 sm:mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl flex flex-col gap-3">
          {items.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left hover:bg-[#F7F8FA]"
              >
                <h3 className="font-semibold text-[#09263f] text-xs sm:text-sm lg:text-base leading-snug">
                  {f.question}
                </h3>
                <span className="text-xl sm:text-2xl text-[#07b3e7] leading-none shrink-0">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-[#475569] border-t border-[#E5E7EB] pt-3 sm:pt-4 leading-relaxed">
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
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">Upcoming Batches</h2>
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
