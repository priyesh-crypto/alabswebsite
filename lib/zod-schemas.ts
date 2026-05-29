import { z } from "zod";

// Public lead capture — accepts every form variant on the site
// (contact form, callback request, brochure download, newsletter,
// corporate inquiry). Fields outside the minimum set are optional
// so the same endpoint serves all callers.
export const leadInputSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Valid email required").max(180),
  countryCode: z.string().trim().max(8).optional().or(z.literal("")).transform((v) => (v ? v : undefined)),
  phone: z.string().trim().max(32).optional().or(z.literal("")).transform((v) => (v ? v : undefined)),
  message: z.string().trim().max(2000).optional().or(z.literal("")).transform((v) => (v ? v : undefined)),
  city: z.string().trim().max(80).optional().or(z.literal("")).transform((v) => (v ? v : undefined)),
  company: z.string().trim().max(180).optional().or(z.literal("")).transform((v) => (v ? v : undefined)),
  teamSize: z.string().trim().max(40).optional().or(z.literal("")).transform((v) => (v ? v : undefined)),
  courseId: z.string().trim().max(40).optional().or(z.literal("")).transform((v) => (v ? v : undefined)),
  source: z.enum([
    "contact-form",
    "callback-request",
    "brochure-download",
    "newsletter",
    "masterclass-register",
    "corporate-enquiry",
  ]),
  utm: z.record(z.string(), z.string()).optional(),
});
export type LeadInput = z.infer<typeof leadInputSchema>;

export const adminLoginSchema = z.object({
  email: z.string().trim().email().max(180),
  password: z.string().min(1).max(200),
});
export type AdminLoginInput = z.infer<typeof adminLoginSchema>;

// Common list-query coercions for admin tables.
export const paginationQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(25),
  q: z.string().trim().max(200).optional(),
  sort: z.string().trim().max(80).optional(),
});

// ---- Admin write schemas ----------------------------------------------------

// Loose but typed JSON shape for socialLinks / stats blobs.
const stringRecord = z.record(z.string(), z.string());

// Reusable: trim + drop empty strings (frontends submit "" for cleared fields).
const optionalString = (max = 500) =>
  z.string().trim().max(max).optional().or(z.literal("")).transform(v => (v ? v : undefined));

const requiredString = (min = 1, max = 500) => z.string().trim().min(min).max(max);

export const categoryUpsertSchema = z.object({
  name: requiredString(1, 120),
  slug: z.string().trim().min(1).max(120).regex(/^[a-z0-9-]+$/, "lowercase letters, numbers, hyphens only"),
  order: z.coerce.number().int().min(0).max(9999).default(0),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/).optional().or(z.literal("")).transform(v => v || undefined),
});
export type CategoryUpsertInput = z.infer<typeof categoryUpsertSchema>;

export const faqUpsertSchema = z.object({
  question: requiredString(1, 500),
  answer: requiredString(1, 5000),
  scope: z.string().trim().min(1).max(40).default("GLOBAL"),
  courseId: optionalString(40),
  order: z.coerce.number().int().min(0).max(9999).default(0),
});
export type FaqUpsertInput = z.infer<typeof faqUpsertSchema>;

export const testimonialUpsertSchema = z.object({
  name: requiredString(1, 120),
  role: optionalString(120),
  company: optionalString(160),
  photoUrl: optionalString(500),
  quote: requiredString(1, 2000),
  rating: z.coerce.number().int().min(1).max(5).default(5),
  courseId: optionalString(40),
  order: z.coerce.number().int().min(0).max(9999).default(0),
  isActive: z.coerce.boolean().default(true),
});
export type TestimonialUpsertInput = z.infer<typeof testimonialUpsertSchema>;

export const hiringPartnerUpsertSchema = z.object({
  name: requiredString(1, 120),
  logoUrl: requiredString(1, 500),
  order: z.coerce.number().int().min(0).max(9999).default(0),
});
export type HiringPartnerUpsertInput = z.infer<typeof hiringPartnerUpsertSchema>;

export const officeUpsertSchema = z.object({
  city: requiredString(1, 80),
  addressLine1: requiredString(1, 500),
  addressLine2: optionalString(500),
  phone: requiredString(1, 40),
  hours: requiredString(1, 120),
  directionsUrl: requiredString(1, 500),
  mapImageUrl: optionalString(500),
  mapEmbedUrl: z.string().trim().max(500).optional().or(z.literal(""))
    .refine(v => !v || v.startsWith("https://www.google.com/maps"), "Must start with https://www.google.com/maps")
    .transform(v => v || undefined),
  order: z.coerce.number().int().min(0).max(9999).default(0),
  isActive: z.coerce.boolean().default(true),
});
export type OfficeUpsertInput = z.infer<typeof officeUpsertSchema>;

export const teamMemberUpsertSchema = z.object({
  name: requiredString(1, 120),
  role: requiredString(1, 160),
  photoUrl: optionalString(500),
  bio: optionalString(2000),
  linkedinUrl: optionalString(500),
  order: z.coerce.number().int().min(0).max(9999).default(0),
  group: z.enum(["TEAM", "FACULTY"]).default("TEAM"),
  experienceLabel: optionalString(60),
  // Accept a real string[] or a comma-separated string from a plain text input.
  expertise: z.preprocess(v => {
    if (typeof v === "string") return v.split(",").map(s => s.trim()).filter(Boolean);
    return v;
  }, z.array(z.string().trim().min(1).max(60)).default([])),
});
export type TeamMemberUpsertInput = z.infer<typeof teamMemberUpsertSchema>;

export const masterclassUpsertSchema = z.object({
  title: requiredString(1, 200),
  bannerUrl: requiredString(1, 500),
  registerUrl: requiredString(1, 500),
  // Accept ISO datetime, an empty string, or omitted. Stored as Date.
  startsAt: z.string().datetime().optional().or(z.literal("")).transform(v => (v ? new Date(v) : undefined)),
  isActive: z.coerce.boolean().default(true),
});
export type MasterclassUpsertInput = z.infer<typeof masterclassUpsertSchema>;

export const blogPostUpsertSchema = z.object({
  slug: z.string().trim().min(1).max(160).regex(/^[a-z0-9-]+$/, "lowercase letters, numbers, hyphens only"),
  title: requiredString(1, 240),
  excerpt: optionalString(500),
  coverUrl: optionalString(500),
  body: requiredString(1, 100_000),
  authorName: requiredString(1, 120),
  publishedAt: z.string().datetime().optional().or(z.literal("")).transform(v => (v ? new Date(v) : undefined)),
  isPublished: z.coerce.boolean().default(false),
  // Accept either a real string[] or a comma-separated string from a plain text input.
  tags: z.preprocess(v => {
    if (typeof v === "string") return v.split(",").map(s => s.trim()).filter(Boolean);
    return v;
  }, z.array(z.string().trim().min(1).max(40)).default([])),
  metaTitle: optionalString(200),
  metaDesc: optionalString(300),
});
export type BlogPostUpsertInput = z.infer<typeof blogPostUpsertSchema>;

export const adminUserCreateSchema = z.object({
  email: z.string().trim().email().max(180),
  name: requiredString(1, 120),
  password: z.string().min(8, "Password must be at least 8 characters").max(200),
  role: z.enum(["ADMIN", "EDITOR"]).default("EDITOR"),
});
export type AdminUserCreateInput = z.infer<typeof adminUserCreateSchema>;

export const adminUserUpdateSchema = z.object({
  email: z.string().trim().email().max(180),
  name: requiredString(1, 120),
  role: z.enum(["ADMIN", "EDITOR"]),
  // Empty string = leave password unchanged.
  password: z.string().min(8).max(200).optional().or(z.literal("")).transform(v => (v ? v : undefined)),
});
export type AdminUserUpdateInput = z.infer<typeof adminUserUpdateSchema>;

// Pages: slug is the lookup key; blocks is a free-form JSON object whose keys
// the public site reads (e.g. "hero.title.brand", "about.cityHighlights"). We
// validate that it's a JSON object — individual key shapes stay flexible to
// support per-page block schemas without schema churn.
export const pageUpdateSchema = z.object({
  title: requiredString(1, 200),
  blocks: z.record(z.string(), z.unknown()).default({}),
  metaTitle: optionalString(200),
  metaDesc: optionalString(300),
});
export type PageUpdateInput = z.infer<typeof pageUpdateSchema>;

// Empty string clears the relation (-> null); undefined would leave it unchanged.
const nullableId = (max = 40) =>
  z.string().trim().max(max).optional().or(z.literal("")).transform(v => (v ? v : null));

export const navItemUpsertSchema = z.object({
  label: requiredString(1, 160),
  url: requiredString(1, 500),
  group: z.enum([
    "TOP_NAV",
    "MEGA_MENU",
    "FOOTER_LINKS",
    "FOOTER_CITIES",
    "FOOTER_COL_ABOUT",
    "FOOTER_COL_ETC",
    "FOOTER_COL_POPULAR",
  ]),
  order: z.coerce.number().int().min(0).max(9999).default(0),
  parentId: nullableId(40),
  isActive: z.coerce.boolean().default(true),
});
export type NavItemUpsertInput = z.infer<typeof navItemUpsertSchema>;

export const batchUpsertSchema = z.object({
  courseId: requiredString(1, 40),
  location: requiredString(1, 80),
  // Accepts "YYYY-MM-DD" (from a date input) or a full ISO string.
  startDate: z.string().trim().min(1, "Start date is required").transform(v => new Date(v))
    .refine(d => !Number.isNaN(d.getTime()), "Invalid date"),
  schedule: requiredString(1, 200),
  seatsLeft: z.coerce.number().int().min(0).max(99999).default(0),
  modeId: nullableId(40),
  isActive: z.coerce.boolean().default(true),
});
export type BatchUpsertInput = z.infer<typeof batchUpsertSchema>;

export const learningModeUpsertSchema = z.object({
  slug: z.string().trim().min(1).max(80).regex(/^[a-z0-9-]+$/, "lowercase letters, numbers, hyphens only"),
  name: requiredString(1, 120),
  subtitle: optionalString(300),
  order: z.coerce.number().int().min(0).max(9999).default(0),
  isActive: z.coerce.boolean().default(true),
});
export type LearningModeUpsertInput = z.infer<typeof learningModeUpsertSchema>;

export const siteSettingsUpdateSchema = z.object({
  logoUrl: z.string().url().max(500),
  faviconUrl: z.string().url().max(500).optional().or(z.literal("")).transform(v => v || undefined),
  primaryColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "Hex color like #09263f").default("#09263f"),
  contactEmail: z.string().email().max(180),
  contactPhone: z.string().trim().min(3).max(40),
  businessHours: z.string().trim().min(1).max(120),
  address: z.string().trim().min(1).max(500),
  socialLinks: stringRecord.default({}),
  // stats is an open-ended Record because the landing page reads ad-hoc keys
  // (years, students, candidates, rating, ratedBy, …) — admins shouldn't be
  // forced to memorize them. Store as a free-form string map for now.
  stats: stringRecord.default({}),
  gtmId: z.string().trim().max(60).optional().or(z.literal("")).transform(v => v || undefined),
  defaultMetaDesc: z.string().trim().max(300).optional().or(z.literal("")).transform(v => v || undefined),
  ogImageUrl: z.string().url().max(500).optional().or(z.literal("")).transform(v => v || undefined),
});
export type SiteSettingsUpdateInput = z.infer<typeof siteSettingsUpdateSchema>;
