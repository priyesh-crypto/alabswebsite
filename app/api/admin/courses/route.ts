import { NextRequest } from "next/server";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { withAdmin, parseBody, revalidatePublic } from "@/lib/admin-api";

export const runtime = "nodejs";

const courseSchema = z.object({
  slug: z.string().trim().min(1).max(120).regex(/^[a-z0-9-]+$/),
  title: z.string().trim().min(1).max(240),
  shortDesc: z.string().trim().default(""),
  longDesc: z.string().trim().default(""),
  thumbnailUrl: z.string().default(""),
  heroImageUrl: z.string().default(""),
  durationMonths: z.coerce.number().int().min(0).default(0),
  classesCount: z.coerce.number().int().min(0).default(0),
  hoursCount: z.coerce.number().int().min(0).default(0),
  price: z.coerce.number().int().min(0).default(0),
  discountedPrice: z.coerce.number().int().min(0).default(0),
  emiPerMonth: z.coerce.number().int().min(0).default(0),
  brochureUrl: z.string().default(""),
  isFeatured: z.boolean().default(false),
  isPublished: z.boolean().default(false),
  order: z.coerce.number().int().min(0).default(0),
  jobRoles: z.array(z.string()).default([]),
  keySkills: z.array(z.string()).default([]),
  careerSupportText: z.string().default(""),
  metaTitle: z.string().default(""),
  metaDesc: z.string().default(""),
  rating: z.coerce.number().min(0).max(100).default(0),
  alumniCount: z.coerce.number().int().min(0).default(0),
  hasNoCodingRequired: z.boolean().default(false),
  categoryId: z.string().min(1),
  // PDP extension fields (all optional)
  pdpAlumniText: z.string().nullable().optional(),
  pdpStarsTotal: z.coerce.number().int().min(0).nullable().optional(),
  pdpRatingScale: z.coerce.number().nullable().optional(),
  pdpTaxNote: z.string().nullable().optional(),
  pdpEmiNote: z.string().nullable().optional(),
  pdpCities: z.array(z.string()).optional(),
  pdpStatTiles: z.any().optional(),
  pdpOverviewHighlights: z.any().optional(),
  pdpCurriculumHeading: z.string().nullable().optional(),
  pdpCurriculumSubheading: z.string().nullable().optional(),
  pdpCurriculumSummary: z.any().optional(),
  pdpTestimonialStrip: z.any().optional(),
  pdpProjectDomains: z.any().optional(),
  pdpCareerSupport: z.any().optional(),
  pdpHowToApply: z.any().optional(),
  pdpStudentStories: z.any().optional(),
  pdpRelatedArticles: z.any().optional(),
  pdpCtaBanner: z.any().optional(),
  pdpContactBlock: z.any().optional(),
  pdpFaqsData: z.any().optional(),
  pdpLearningModesData: z.any().optional(),
  pdpCertificationData: z.any().optional(),
  pdpWhoShouldJoinData: z.any().optional(),
  pdpJobRolesData: z.any().optional(),
  pdpKeySkillsData: z.any().optional(),
  modules: z.array(z.object({
    id: z.string().optional(),
    title: z.string().trim().min(1),
    summary: z.string().default(""),
    order: z.coerce.number().int().default(0),
    lessons: z.array(z.object({
      id: z.string().optional(),
      title: z.string().trim().min(1),
      duration: z.string().default(""),
      order: z.coerce.number().int().default(0),
    })).default([]),
  })).default([]),
  pricing: z.array(z.object({
    id: z.string().optional(),
    mode: z.string(),
    label: z.string(),
    price: z.coerce.number().int().min(0),
    priceStruck: z.coerce.number().int().min(0).optional(),
    installments: z.coerce.number().int().min(1).default(3),
    hasEmi: z.boolean().default(true),
    ctaLabel: z.string().default("Enroll now"),
    ctaHref: z.string().default(""),
    order: z.coerce.number().int().default(0),
  })).default([]),
  projects: z.array(z.object({
    id: z.string().optional(),
    title: z.string().trim().min(1),
    desc: z.string().default(""),
    imageUrl: z.string().default(""),
  })).default([]),
});

export type CourseInput = z.infer<typeof courseSchema>;

export async function GET(req: NextRequest) {
  return withAdmin(req, async () => {
    return prisma.course.findMany({
      orderBy: [{ isFeatured: "desc" }, { order: "asc" }],
      include: { category: { select: { name: true } } },
    });
  });
}

export async function POST(req: NextRequest) {
  return withAdmin(req, async ({ session }) => {
    const data = await parseBody(req, courseSchema);
    const { modules, pricing, projects, rating, ...rest } = data;

    const course = await prisma.course.create({
      data: {
        ...rest,
        rating: rating ? rating / 10 : null,
        modules: {
          create: modules.map(m => ({
            title: m.title,
            summary: m.summary,
            order: m.order,
            lessons: {
              create: m.lessons.map(l => ({ title: l.title, duration: l.duration, order: l.order })),
            },
          })),
        },
        pricing: {
          create: pricing.map(p => ({
            mode: p.mode,
            label: p.label,
            price: p.price,
            priceStruck: p.priceStruck,
            installments: p.installments,
            hasEmi: p.hasEmi,
            ctaLabel: p.ctaLabel,
            ctaHref: p.ctaHref,
            order: p.order,
          })),
        },
        projects: {
          create: projects.map(p => ({ title: p.title, desc: p.desc, imageUrl: p.imageUrl })),
        },
      },
    });

    await prisma.auditLog.create({
      data: {
        userId: session.sub as string,
        userName: session.name,
        entityType: "Course",
        entityId: course.id,
        action: "create",
        diff: { slug: course.slug, title: course.title } as Prisma.InputJsonValue,
      },
    });

    revalidatePublic();
    return course;
  });
}
