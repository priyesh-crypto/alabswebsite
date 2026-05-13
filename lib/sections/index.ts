/**
 * Section type registry — the single source of truth for every editable section type.
 *
 * Each entry defines:
 *  - type: unique string id used in the DB Section.type column
 *  - label: human name shown in the admin accordion
 *  - schema: Zod validator for Section.contentDraft / contentPublished
 *  - defaultContent: used when a new section of this type is created
 *  - pageScope: which page slugs this section type can appear on
 */
import { z } from "zod";

// ---- Shared primitives -------------------------------------------------------

const mediaRef = z.object({
  url: z.string().url().or(z.literal("")),
  alt: z.string().default(""),
});

const cta = z.object({
  label: z.string().default(""),
  href: z.string().default(""),
  variant: z.enum(["primary", "secondary", "ghost"]).default("primary"),
});

const richString = z.string().default(""); // plain text, may contain **bold** markers

// ---- Landing page section schemas -------------------------------------------

export const heroLandingSchema = z.object({
  eyebrow: z.string().optional(),
  headline: richString,
  subtitle: z.string().default(""),
  ctas: z.array(cta).max(2).default([]),
  heroImage: mediaRef.optional(),
  socialProofText: z.string().default(""),
  learnerPathCards: z.array(z.object({
    label: z.string(),
    title: z.string(),
    icon: z.string().optional(),
  })).default([]),
});

export const hiringPartnersSchema = z.object({
  metricLabel: z.string().default("15,000+"),
  metricSuffix: z.string().default("Candidates"),
  partnerIds: z.array(z.string()).default([]),
});

export const categoryPillsSchema = z.object({
  pills: z.array(z.object({
    label: z.string(),
    href: z.string().default("/courses"),
    icon: z.string().optional(),
    color: z.string().optional(),
  })).default([]),
});

export const coursesChallengeSchema = z.object({
  headline: z.string().default("Our Courses - 6 Months Job Challenge"),
  sidebarCategories: z.array(z.object({
    label: z.string(),
    slug: z.string(),
  })).default([]),
  featuredCourseIds: z.array(z.string()).default([]),
});

export const learningModesSchema = z.object({
  headline: z.string().default("Learning Modes"),
  intro: z.string().default(""),
  modes: z.array(z.object({
    key: z.string(),
    label: z.string(),
    title: z.string(),
    sessions: z.array(z.object({
      label: z.string(),
      date: z.string(),
      time: z.string(),
      seatsLabel: z.string().optional(),
    })).default([]),
  })).default([]),
});

export const instituteIntroSchema = z.object({
  headline: z.string().default(""),
  body: z.string().default(""),
  cityChips: z.array(z.string()).default([]),
  bullets: z.array(z.object({ icon: z.string().optional(), text: z.string() })).default([]),
  cta: cta.optional(),
  images: z.array(mediaRef).max(2).default([]),
});

// ---- Shared section schemas (appear on multiple pages) ----------------------

export const testimonialsSectionSchema = z.object({
  headline: z.string().default("What Students Say About Us?"),
  subhead: z.string().default(""),
  testimonialIds: z.array(z.string()).default([]),
});

export const faqsSectionSchema = z.object({
  headline: z.string().default("Frequently Asked Questions"),
  subhead: z.string().default(""),
  faqIds: z.array(z.string()).default([]),
});

export const ctaBannerRefSchema = z.object({
  useGlobal: z.literal(true).default(true),
});

export const callBackRefSchema = z.object({
  useGlobal: z.literal(true).default(true),
});

// ---- Explore Courses page section schemas -----------------------------------

export const heroSimpleSchema = z.object({
  headline: richString,
  subtitle: z.string().default(""),
  heroImage: mediaRef.optional(),
});

export const coursesGridSchema = z.object({
  headline: z.string().default(""),
  searchPlaceholder: z.string().default("Search courses…"),
  categories: z.array(z.object({ label: z.string(), key: z.string() })).default([]),
  courseIds: z.array(z.string()).default([]),
});

export const relatedArticlesSchema = z.object({
  headline: z.string().default("Related Articles"),
  sourceTags: z.array(z.string()).default([]),
  limit: z.number().int().min(1).max(10).default(3),
  viewAllHref: z.string().default("/blog"),
});

// ---- About page section schemas ---------------------------------------------

export const aboutHeroSchema = z.object({
  headline: richString,
  subtitle: z.string().default(""),
});

// ---- Contact page section schemas -------------------------------------------

export const contactHeroSchema = z.object({
  headline: richString,
  subtitle: z.string().default(""),
});

// ---- PDP section schemas ----------------------------------------------------

export const pdpOverviewSchema = z.object({
  body: z.string().default(""),
});

export const pdpCurriculumSchema = z.object({
  statLiveHours: z.number().int().default(195),
  statSelfStudyHours: z.number().int().default(422),
  statPlacementWeeks: z.number().int().default(8),
  includesBullets: z.array(z.string()).default([]),
});

export const pdpCertificationSchema = z.object({
  headline: z.string().default("Get Certified"),
  body: z.string().default(""),
  certificateImage: mediaRef.optional(),
  nasscomLogo: mediaRef.optional(),
});

export const pdpCareerSupportSchema = z.object({
  headline: z.string().default("Career Support"),
  bullets: z.array(z.string()).default([]),
  placementReportUrl: z.string().default(""),
});

export const pdpHowToApplySchema = z.object({
  steps: z.array(z.object({ title: z.string(), body: z.string() }))
    .min(1).max(6)
    .default([]),
});

// ---- Registry ----------------------------------------------------------------

export type SectionTypeId =
  // Landing
  | "hero_landing"
  | "hiring_partners"
  | "category_pills"
  | "courses_challenge"
  | "learning_modes"
  | "institute_intro"
  | "cta_banner"
  | "call_back_form"
  | "testimonials_carousel"
  | "faqs"
  // Explore Courses
  | "hero_simple"
  | "courses_grid"
  | "related_articles"
  // About
  | "about_hero"
  // Contact
  | "contact_hero"
  // PDP
  | "pdp_hero"
  | "pdp_overview"
  | "pdp_curriculum"
  | "pdp_projects"
  | "pdp_tools"
  | "pdp_who_should_join"
  | "pdp_job_roles"
  | "pdp_skills"
  | "pdp_learning_modes"
  | "pdp_fees"
  | "pdp_certification"
  | "pdp_career_support"
  | "pdp_how_to_apply";

export type SectionDef = {
  type: SectionTypeId;
  label: string;
  schema: z.ZodTypeAny;
  defaultContent: Record<string, unknown>;
  pageScope: string[]; // which pageSlug prefixes this type is valid for
  readOnly?: boolean;  // if true, admin can see it but editing links to global
};

export const SECTION_REGISTRY: SectionDef[] = [
  // Landing
  {
    type: "hero_landing",
    label: "Hero banner",
    schema: heroLandingSchema,
    defaultContent: heroLandingSchema.parse({}),
    pageScope: ["landing"],
  },
  {
    type: "hiring_partners",
    label: "Hiring partners strip",
    schema: hiringPartnersSchema,
    defaultContent: hiringPartnersSchema.parse({}),
    pageScope: ["landing"],
  },
  {
    type: "category_pills",
    label: "Category pills",
    schema: categoryPillsSchema,
    defaultContent: categoryPillsSchema.parse({}),
    pageScope: ["landing"],
  },
  {
    type: "courses_challenge",
    label: "Courses — 6 Month Job Challenge",
    schema: coursesChallengeSchema,
    defaultContent: coursesChallengeSchema.parse({}),
    pageScope: ["landing"],
  },
  {
    type: "learning_modes",
    label: "Learning modes",
    schema: learningModesSchema,
    defaultContent: learningModesSchema.parse({}),
    pageScope: ["landing"],
  },
  {
    type: "institute_intro",
    label: "Institute intro",
    schema: instituteIntroSchema,
    defaultContent: instituteIntroSchema.parse({}),
    pageScope: ["landing"],
  },
  // Shared
  {
    type: "cta_banner",
    label: "CTA banner (Global)",
    schema: ctaBannerRefSchema,
    defaultContent: { useGlobal: true },
    pageScope: ["landing", "courses", "course/"],
    readOnly: true,
  },
  {
    type: "call_back_form",
    label: "Request a Call-back (Global)",
    schema: callBackRefSchema,
    defaultContent: { useGlobal: true },
    pageScope: ["landing", "courses", "course/"],
    readOnly: true,
  },
  {
    type: "testimonials_carousel",
    label: "Testimonials carousel",
    schema: testimonialsSectionSchema,
    defaultContent: testimonialsSectionSchema.parse({}),
    pageScope: ["landing", "courses", "course/"],
  },
  {
    type: "faqs",
    label: "FAQs",
    schema: faqsSectionSchema,
    defaultContent: faqsSectionSchema.parse({}),
    pageScope: ["landing", "courses", "course/"],
  },
  // Explore Courses
  {
    type: "hero_simple",
    label: "Hero (simple)",
    schema: heroSimpleSchema,
    defaultContent: heroSimpleSchema.parse({}),
    pageScope: ["courses"],
  },
  {
    type: "courses_grid",
    label: "Courses grid",
    schema: coursesGridSchema,
    defaultContent: coursesGridSchema.parse({}),
    pageScope: ["courses"],
  },
  {
    type: "related_articles",
    label: "Related articles",
    schema: relatedArticlesSchema,
    defaultContent: relatedArticlesSchema.parse({}),
    pageScope: ["courses", "course/"],
  },
  // About
  {
    type: "about_hero",
    label: "About Hero",
    schema: aboutHeroSchema,
    defaultContent: aboutHeroSchema.parse({}),
    pageScope: ["about"],
  },
  // Contact
  {
    type: "contact_hero",
    label: "Contact Hero",
    schema: contactHeroSchema,
    defaultContent: contactHeroSchema.parse({}),
    pageScope: ["contact"],
  },
  // PDP
  {
    type: "pdp_hero",
    label: "PDP hero (from course record)",
    schema: z.object({}),
    defaultContent: {},
    pageScope: ["course/"],
    readOnly: true,
  },
  {
    type: "pdp_overview",
    label: "Overview body",
    schema: pdpOverviewSchema,
    defaultContent: pdpOverviewSchema.parse({}),
    pageScope: ["course/"],
  },
  {
    type: "pdp_curriculum",
    label: "Curriculum stats & includes",
    schema: pdpCurriculumSchema,
    defaultContent: pdpCurriculumSchema.parse({}),
    pageScope: ["course/"],
  },
  {
    type: "pdp_projects",
    label: "Projects (from course record)",
    schema: z.object({}),
    defaultContent: {},
    pageScope: ["course/"],
    readOnly: true,
  },
  {
    type: "pdp_tools",
    label: "Tools (from course record)",
    schema: z.object({}),
    defaultContent: {},
    pageScope: ["course/"],
    readOnly: true,
  },
  {
    type: "pdp_who_should_join",
    label: "Who should join (from course record)",
    schema: z.object({}),
    defaultContent: {},
    pageScope: ["course/"],
    readOnly: true,
  },
  {
    type: "pdp_job_roles",
    label: "Job roles (from course record)",
    schema: z.object({}),
    defaultContent: {},
    pageScope: ["course/"],
    readOnly: true,
  },
  {
    type: "pdp_skills",
    label: "Skills gained (from course record)",
    schema: z.object({}),
    defaultContent: {},
    pageScope: ["course/"],
    readOnly: true,
  },
  {
    type: "pdp_learning_modes",
    label: "Learning modes (from course record)",
    schema: z.object({}),
    defaultContent: {},
    pageScope: ["course/"],
    readOnly: true,
  },
  {
    type: "pdp_fees",
    label: "Fees (from course pricing)",
    schema: z.object({}),
    defaultContent: {},
    pageScope: ["course/"],
    readOnly: true,
  },
  {
    type: "pdp_certification",
    label: "Certification block",
    schema: pdpCertificationSchema,
    defaultContent: pdpCertificationSchema.parse({}),
    pageScope: ["course/"],
  },
  {
    type: "pdp_career_support",
    label: "Career support",
    schema: pdpCareerSupportSchema,
    defaultContent: pdpCareerSupportSchema.parse({}),
    pageScope: ["course/"],
  },
  {
    type: "pdp_how_to_apply",
    label: "How to apply",
    schema: pdpHowToApplySchema,
    defaultContent: pdpHowToApplySchema.parse({ steps: [{ title: "Step 1", body: "" }] }),
    pageScope: ["course/"],
  },
];

export function getSectionDef(type: string): SectionDef | undefined {
  return SECTION_REGISTRY.find(d => d.type === type);
}

export function getSectionsForPage(pageSlug: string): SectionDef[] {
  return SECTION_REGISTRY.filter(d =>
    d.pageScope.some(scope => pageSlug === scope || pageSlug.startsWith(scope))
  );
}
