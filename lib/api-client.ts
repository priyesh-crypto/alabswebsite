/**
 * Server-side API client. Used by Server Components in app/(site)/.
 *
 * Calls our own /api routes via absolute URL so it works in dev,
 * production, and during static generation. NEXT_PUBLIC_SITE_URL
 * controls the base — set to https://www.alabs… in prod.
 *
 * `revalidate` mirrors the route's `revalidate = 60` so we get the
 * same ISR behavior on the consumer side. Pass `noStore: true` to
 * opt out (e.g. admin previews).
 */
import { Prisma } from "@prisma/client";

type FetchOpts = { revalidate?: number; noStore?: boolean };

function baseUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

async function get<T>(path: string, opts: FetchOpts = {}): Promise<T | null> {
  const url = `${baseUrl()}${path}`;
  try {
    const res = await fetch(url, {
      next: opts.noStore ? { revalidate: 0 } : { revalidate: opts.revalidate ?? 60 },
    });
    if (res.status === 404) return null;
    if (!res.ok) {
      console.error(`[api-client] ${path} → ${res.status}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.error(`[api-client] ${path} fetch failed`, err);
    return null;
  }
}

// ---- Public read API surface ----

export type SiteSettings = Awaited<ReturnType<typeof getSiteSettings>>;
export type Course = Prisma.CourseGetPayload<{
  include: {
    category: true;
    batches: true;
  };
}>;
export type CourseDetail = Prisma.CourseGetPayload<{
  include: {
    category: true;
    modules: { include: { lessons: true } };
    batches: true;
    tools: true;
    certifications: true;
    projects: true;
    faqs: true;
  };
}>;
export type NavItem = Prisma.NavItemGetPayload<{ include: { children: true } }>;
export type Testimonial = Prisma.TestimonialGetPayload<true>;
export type HiringPartner = Prisma.HiringPartnerGetPayload<true>;
export type TeamMember = Prisma.TeamMemberGetPayload<true>;
export type Faq = Prisma.FaqGetPayload<true>;
export type BlogPost = Prisma.BlogPostGetPayload<true>;
export type Page = Prisma.PageGetPayload<true>;
export type Office = Prisma.OfficeGetPayload<true>;
export type Masterclass = Prisma.MasterclassGetPayload<true>;
export type Category = Prisma.CategoryGetPayload<true>;
export type LearningMode = Prisma.LearningModeGetPayload<true>;

export const getSiteSettings = () =>
  get<Prisma.SiteSettingsGetPayload<true> | null>("/api/site-settings");

export type NavGroup =
  | "TOP_NAV"
  | "MEGA_MENU"
  | "FOOTER_LINKS"
  | "FOOTER_CITIES"
  | "FOOTER_COL_ABOUT"
  | "FOOTER_COL_ETC"
  | "FOOTER_COL_POPULAR";

export const getNav = (group: NavGroup) =>
  get<NavItem[]>(`/api/nav?group=${group}`).then((r) => r ?? []);

export const getCategories = () => get<Category[]>("/api/categories").then((r) => r ?? []);

export const getCourses = (params: { featured?: boolean; category?: string; limit?: number } = {}) => {
  const sp = new URLSearchParams();
  if (params.featured) sp.set("featured", "true");
  if (params.category) sp.set("category", params.category);
  if (params.limit) sp.set("limit", String(params.limit));
  const qs = sp.toString();
  return get<Course[]>(`/api/courses${qs ? `?${qs}` : ""}`).then((r) => r ?? []);
};

export const getCourse = (slug: string) => get<CourseDetail>(`/api/courses/${slug}`);

export const getTestimonials = () =>
  get<Testimonial[]>("/api/testimonials").then((r) => r ?? []);

export const getHiringPartners = () =>
  get<HiringPartner[]>("/api/hiring-partners").then((r) => r ?? []);

export const getTeam = () => get<TeamMember[]>("/api/team").then((r) => r ?? []);

export const getFaqs = (params: { scope?: string; courseSlug?: string } = {}) => {
  const sp = new URLSearchParams();
  if (params.scope) sp.set("scope", params.scope);
  if (params.courseSlug) sp.set("courseSlug", params.courseSlug);
  const qs = sp.toString();
  return get<Faq[]>(`/api/faqs${qs ? `?${qs}` : ""}`).then((r) => r ?? []);
};

export const getPosts = (params: { limit?: number; tag?: string } = {}) => {
  const sp = new URLSearchParams();
  if (params.limit) sp.set("limit", String(params.limit));
  if (params.tag) sp.set("tag", params.tag);
  const qs = sp.toString();
  return get<BlogPost[]>(`/api/posts${qs ? `?${qs}` : ""}`).then((r) => r ?? []);
};

export const getPost = (slug: string) => get<BlogPost>(`/api/posts/${slug}`);

export const getPage = (slug: string) => get<Page>(`/api/pages/${slug}`);

export const getOffices = () => get<Office[]>("/api/offices").then((r) => r ?? []);

export const getLearningModes = () =>
  get<LearningMode[]>("/api/learning-modes").then((r) => r ?? []);

export const getActiveMasterclass = () =>
  get<Masterclass | null>("/api/masterclass/active");
