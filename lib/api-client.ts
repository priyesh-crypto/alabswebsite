/**
 * Server-side data access. Used by Server Components in app/(site)/.
 *
 * Calls Prisma directly — no HTTP self-fetch — so the server port
 * never matters. The /api/* routes exist for client-side fetching and
 * external consumers only.
 */
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

// ---- Exported types (unchanged — pages & components depend on these) ----

export type SiteSettings = Prisma.SiteSettingsGetPayload<true> | null;
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
export type BatchCourse = Prisma.CourseGetPayload<{
  include: { category: true; batches: true };
}>;

export type NavGroup =
  | "TOP_NAV"
  | "MEGA_MENU"
  | "FOOTER_LINKS"
  | "FOOTER_CITIES"
  | "FOOTER_COL_ABOUT"
  | "FOOTER_COL_ETC"
  | "FOOTER_COL_POPULAR";

// ---- Public read API surface (direct Prisma calls) ----

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    return await prisma.siteSettings.findUnique({ where: { id: 1 } });
  } catch {
    return null;
  }
}

export async function getNav(group: NavGroup): Promise<NavItem[]> {
  try {
    return await prisma.navItem.findMany({
      where: { group: group as Prisma.NavItemWhereInput["group"], isActive: true },
      include: {
        children: { where: { isActive: true }, orderBy: { order: "asc" } },
      },
      orderBy: { order: "asc" },
    });
  } catch {
    return [];
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    return await prisma.category.findMany({ orderBy: { order: "asc" } });
  } catch {
    return [];
  }
}

export async function getCourses(
  params: { featured?: boolean; category?: string; limit?: number } = {}
): Promise<Course[]> {
  try {
    const where: Prisma.CourseWhereInput = { isPublished: true };
    if (params.featured) where.isFeatured = true;
    if (params.category) where.category = { slug: params.category };

    return await prisma.course.findMany({
      where,
      include: {
        category: true,
        batches: { where: { isActive: true }, orderBy: { startDate: "asc" } },
      },
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
      take: params.limit ? Math.max(1, Math.min(50, params.limit)) : undefined,
    });
  } catch {
    return [];
  }
}

export async function getCourse(slug: string): Promise<CourseDetail | null> {
  try {
    return await prisma.course.findUnique({
      where: { slug },
      include: {
        category: true,
        modules: {
          include: { lessons: { orderBy: { order: "asc" } } },
          orderBy: { order: "asc" },
        },
        batches: { where: { isActive: true }, orderBy: { startDate: "asc" } },
        tools: true,
        certifications: true,
        projects: { orderBy: { id: "asc" } },
        faqs: { orderBy: { order: "asc" } },
      },
    });
  } catch {
    return null;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    return await prisma.testimonial.findMany({
      where: { isActive: true },
      orderBy: { order: "asc" },
    });
  } catch {
    return [];
  }
}

export async function getHiringPartners(): Promise<HiringPartner[]> {
  try {
    return await prisma.hiringPartner.findMany({ orderBy: { order: "asc" } });
  } catch {
    return [];
  }
}

export async function getTeam(): Promise<TeamMember[]> {
  try {
    return await prisma.teamMember.findMany({ orderBy: { order: "asc" } });
  } catch {
    return [];
  }
}

export async function getFaqs(
  params: { scope?: string; courseSlug?: string } = {}
): Promise<Faq[]> {
  try {
    const where: Prisma.FaqWhereInput = {};
    if (params.courseSlug) {
      const course = await prisma.course.findUnique({
        where: { slug: params.courseSlug },
        select: { id: true },
      });
      if (!course) return [];
      where.courseId = course.id;
    } else if (params.scope) {
      where.scope = params.scope;
    } else {
      where.scope = "GLOBAL";
    }
    return await prisma.faq.findMany({ where, orderBy: { order: "asc" } });
  } catch {
    return [];
  }
}

export async function getPosts(
  params: { limit?: number; tag?: string } = {}
): Promise<BlogPost[]> {
  try {
    const where: Prisma.BlogPostWhereInput = { isPublished: true };
    if (params.tag) where.tags = { has: params.tag };
    return await prisma.blogPost.findMany({
      where,
      orderBy: { publishedAt: "desc" },
      take: params.limit ? Math.max(1, Math.min(50, params.limit)) : undefined,
    });
  } catch {
    return [];
  }
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const post = await prisma.blogPost.findUnique({ where: { slug } });
    if (!post?.isPublished) return null;
    return post;
  } catch {
    return null;
  }
}

export async function getPage(slug: string): Promise<Page | null> {
  try {
    // 'home' maps to the 'landing' slug in the CMS
    const dbSlug = slug === "home" ? "landing" : slug;

    const [page, sections] = await Promise.all([
      prisma.page.findUnique({ where: { slug: dbSlug } }),
      prisma.section.findMany({
        where: { pageSlug: dbSlug, isVisible: true },
        orderBy: { order: "asc" },
      }),
    ]);

    const mergedBlocks: Record<string, unknown> = {
      ...((page?.blocks as Record<string, unknown>) ?? {}),
    };

    sections.forEach((sec) => {
      if (!sec.contentPublished) return;
      const content = sec.contentPublished as Record<string, unknown>;
      mergedBlocks[sec.type] = content;

      if (sec.type === "hero_landing") {
        const headline = content.headline as string | undefined;
        if (headline) {
          const match = headline.match(/^(.*?)\*\*(.*?)\*\*(.*)$/);
          if (match) {
            mergedBlocks["hero.title.prefix"] = match[1].trim();
            mergedBlocks["hero.title.brand"] = match[2].trim();
            mergedBlocks["hero.title.suffix"] = match[3].trim();
          } else {
            mergedBlocks["hero.title.prefix"] = "";
            mergedBlocks["hero.title.brand"] = headline;
            mergedBlocks["hero.title.suffix"] = "";
          }
        }
        if (content.subtitle) mergedBlocks["hero.subheading"] = content.subtitle;
        if (content.eyebrow) mergedBlocks["hero.tagline"] = content.eyebrow;
        if (content.socialProofText) mergedBlocks["hero.ratedBy"] = content.socialProofText;
        const ctas = content.ctas as unknown[] | undefined;
        if (ctas?.[0]) mergedBlocks["hero.cta1"] = ctas[0];
        if (ctas?.[1]) mergedBlocks["hero.cta2"] = ctas[1];
      } else if (sec.type === "institute_intro") {
        if (content.headline) mergedBlocks["about.heading"] = content.headline;
        if (content.body) mergedBlocks["about.body"] = content.body;
        if (content.cityIntro) mergedBlocks["about.cityIntro"] = content.cityIntro;
        if (content.bullets) {
          mergedBlocks["about.cityHighlights"] = (content.bullets as { text: string }[]).map((b) => b.text);
        }
      } else if (sec.type === "learning_modes") {
        if (content.intro) mergedBlocks["learningModes.subtitle"] = content.intro;
      } else if (
        sec.type === "hero_simple" ||
        sec.type === "about_hero" ||
        sec.type === "contact_hero"
      ) {
        if (content.headline) {
          const html = (content.headline as string).replace(
            /\*\*(.*?)\*\*/g,
            '<span class="bg-clip-text bg-gradient-to-r from-[#1de5b5] to-[#07b3e7] text-transparent">$1</span>'
          );
          mergedBlocks[`${sec.type}.headline_html`] = html;
        }
      }
    });

    const result = page
      ? { ...page, blocks: mergedBlocks }
      : {
          id: "virtual",
          slug: dbSlug,
          title: dbSlug,
          blocks: mergedBlocks,
          metaTitle: null,
          metaDesc: null,
          updatedAt: new Date(),
        };

    return result as unknown as Page;
  } catch {
    return null;
  }
}

export async function getOffices(): Promise<Office[]> {
  try {
    return await prisma.office.findMany({
      where: { isActive: true },
      orderBy: { order: "asc" },
    });
  } catch {
    return [];
  }
}

export async function getLearningModes(): Promise<LearningMode[]> {
  try {
    return await prisma.learningMode.findMany({
      where: { isActive: true },
      orderBy: { order: "asc" },
    });
  } catch {
    return [];
  }
}

export async function getActiveMasterclass(): Promise<Masterclass | null> {
  try {
    return await prisma.masterclass.findFirst({
      where: { isActive: true },
      orderBy: { startsAt: "asc" },
    });
  } catch {
    return null;
  }
}

export async function getBatches(
  params: { category?: string; location?: string } = {}
): Promise<BatchCourse[]> {
  try {
    const locationFilter = params.location
      ? { location: { contains: params.location, mode: "insensitive" as const } }
      : {};

    return await prisma.course.findMany({
      where: {
        isPublished: true,
        ...(params.category ? { category: { slug: params.category } } : {}),
        batches: { some: { isActive: true, ...locationFilter } },
      },
      include: {
        category: true,
        batches: {
          where: { isActive: true, ...locationFilter },
          orderBy: { startDate: "asc" },
        },
      },
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    });
  } catch {
    return [];
  }
}
