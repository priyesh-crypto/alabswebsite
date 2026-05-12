import { z } from "zod";

// PDP JSON shapes — mirror the type definitions in
// components/pdp/CourseDetailPage.tsx. Used by both POST and PATCH
// course admin routes to validate JSON blobs at write time.

export const statTileSchema = z.object({
  label: z.string(),
  value: z.union([z.string(), z.number()]),
});

export const highlightSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const curriculumSummarySchema = z.object({
  liveHours: z.union([z.string(), z.number()]).optional(),
  selfStudyHours: z.union([z.string(), z.number()]).optional(),
  placementWeeks: z.union([z.string(), z.number()]).optional(),
  includes: z.array(z.string()).optional(),
});

export const testimonialStripSchema = z.object({
  quote: z.string(),
  name: z.string(),
  role: z.string().optional(),
  company: z.string().optional(),
  stars: z.number().optional(),
  photoUrl: z.string().optional(),
});

export const projectDomainSchema = z.object({
  domain: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
});

export const careerSupportSchema = z.object({
  intro: z.string().optional(),
  features: z
    .array(z.object({ title: z.string(), body: z.string() }))
    .optional(),
  partnerLogos: z
    .array(z.object({ name: z.string(), logoUrl: z.string() }))
    .optional(),
});

export const howToApplyStepSchema = z.object({
  stepNumber: z.union([z.string(), z.number()]),
  title: z.string(),
  description: z.string(),
});

export const studentStorySchema = z.object({
  photoUrl: z.string().optional(),
  name: z.string(),
  credential: z.string().optional(),
  role: z.string().optional(),
  quote: z.string(),
});

export const relatedArticleSchema = z.object({
  category: z.string().optional(),
  readTime: z.string().optional(),
  title: z.string(),
  excerpt: z.string().optional(),
  author: z.string().optional(),
  url: z.string().optional(),
  imageUrl: z.string().optional(),
});

export const ctaBannerSchema = z.object({
  headline: z.string(),
  subheadline: z.string().optional(),
  ctaText: z.string().optional(),
  ctaUrl: z.string().optional(),
  bgColor: z.string().optional(),
});

export const contactBlockSchema = z.object({
  heading: z.string(),
  description: z.string().optional(),
});

export const faqItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const learningModeItemSchema = z.object({
  name: z.string(),
  description: z.string(),
  icon: z.string().optional(),
});

export const certificationDataSchema = z.object({
  heading: z.string().optional(),
  body: z.string().optional(),
  certificateImageUrl: z.string().optional(),
  coBrandedName: z.string().optional(),
  coBrandedDesc: z.string().optional(),
  coBrandedLogoUrl: z.string().optional(),
});

export const whoShouldJoinItemSchema = z.object({
  icon: z.string().optional(),
  title: z.string(),
  description: z.string(),
});

// Bundle of all PDP-extension fields, ready to spread into a course schema.
export const pdpExtensionFields = {
  pdpAlumniText: z.string().nullable().optional(),
  pdpStarsTotal: z.coerce.number().int().min(0).nullable().optional(),
  pdpRatingScale: z.coerce.number().nullable().optional(),
  pdpTaxNote: z.string().nullable().optional(),
  pdpEmiNote: z.string().nullable().optional(),
  pdpCities: z.array(z.string()).optional(),
  pdpStatTiles: z.array(statTileSchema).optional(),
  pdpOverviewHighlights: z.array(highlightSchema).optional(),
  pdpCurriculumHeading: z.string().nullable().optional(),
  pdpCurriculumSubheading: z.string().nullable().optional(),
  pdpCurriculumSummary: curriculumSummarySchema.optional(),
  pdpTestimonialStrip: z.array(testimonialStripSchema).optional(),
  pdpProjectDomains: z.array(projectDomainSchema).optional(),
  pdpCareerSupport: careerSupportSchema.optional(),
  pdpHowToApply: z.array(howToApplyStepSchema).optional(),
  pdpStudentStories: z.array(studentStorySchema).optional(),
  pdpRelatedArticles: z.array(relatedArticleSchema).optional(),
  pdpCtaBanner: ctaBannerSchema.optional(),
  pdpContactBlock: contactBlockSchema.optional(),
  pdpFaqsData: z.array(faqItemSchema).optional(),
  pdpLearningModesData: z.array(learningModeItemSchema).optional(),
  pdpCertificationData: certificationDataSchema.optional(),
  pdpWhoShouldJoinData: z.array(whoShouldJoinItemSchema).optional(),
  pdpJobRolesData: z.array(z.string()).optional(),
  pdpKeySkillsData: z.array(z.string()).optional(),
};
