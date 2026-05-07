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
