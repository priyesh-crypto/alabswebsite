import { NextRequest } from "next/server";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { withAdmin, parseBody, revalidatePublic } from "@/lib/admin-api";
import { pdpExtensionFields } from "@/lib/pdp-schemas";

export const runtime = "nodejs";

const patchSchema = z.object({
  slug: z.string().trim().min(1).max(120).regex(/^[a-z0-9-]+$/).optional(),
  title: z.string().trim().min(1).max(240).optional(),
  shortDesc: z.string().trim().optional(),
  longDesc: z.string().trim().optional(),
  thumbnailUrl: z.string().optional(),
  heroImageUrl: z.string().optional(),
  durationMonths: z.coerce.number().int().min(0).optional(),
  classesCount: z.coerce.number().int().min(0).optional(),
  hoursCount: z.coerce.number().int().min(0).optional(),
  price: z.coerce.number().int().min(0).optional(),
  discountedPrice: z.coerce.number().int().min(0).optional(),
  brochureUrl: z.string().optional(),
  isFeatured: z.boolean().optional(),
  isPublished: z.boolean().optional(),
  order: z.coerce.number().int().min(0).optional(),
  jobRoles: z.array(z.string()).optional(),
  keySkills: z.array(z.string()).optional(),
  careerSupportText: z.string().optional(),
  metaTitle: z.string().optional(),
  metaDesc: z.string().optional(),
  rating: z.coerce.number().min(0).max(100).optional(),
  alumniCount: z.coerce.number().int().min(0).optional(),
  hasNoCodingRequired: z.boolean().optional(),
  categoryId: z.string().min(1).optional(),
  ...pdpExtensionFields,
  modules: z.array(z.object({
    id: z.string().optional(),
    title: z.string(),
    summary: z.string().default(""),
    order: z.coerce.number().int().default(0),
    lessons: z.array(z.object({
      id: z.string().optional(),
      title: z.string(),
      duration: z.string().default(""),
      order: z.coerce.number().int().default(0),
    })).default([]),
  })).optional(),
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
  })).optional(),
  projects: z.array(z.object({
    id: z.string().optional(),
    title: z.string(),
    desc: z.string().default(""),
    imageUrl: z.string().default(""),
  })).optional(),
}).passthrough();

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return withAdmin(req, async ({ session }) => {
    const data = await parseBody(req, patchSchema);
    const { modules, pricing, projects, rating, ...rest } = data;

    // Scalar fields update
    const updated = await prisma.course.update({
      where: { id },
      data: {
        ...rest,
        ...(rating !== undefined ? { rating: rating / 10 } : {}),
      },
    });

    // Replace modules (delete all → recreate)
    if (modules !== undefined) {
      await prisma.courseModule.deleteMany({ where: { courseId: id } });
      for (const m of modules) {
        await prisma.courseModule.create({
          data: {
            courseId: id,
            title: m.title,
            summary: m.summary,
            order: m.order,
            lessons: {
              create: m.lessons.map(l => ({ title: l.title, duration: l.duration, order: l.order })),
            },
          },
        });
      }
    }

    // Replace pricing
    if (pricing !== undefined) {
      await prisma.coursePricing.deleteMany({ where: { courseId: id } });
      await prisma.coursePricing.createMany({
        data: pricing.map(p => ({
          courseId: id,
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
      });
    }

    // Replace projects
    if (projects !== undefined) {
      await prisma.project.deleteMany({ where: { courseId: id } });
      await prisma.project.createMany({
        data: projects.map(p => ({ courseId: id, title: p.title, desc: p.desc, imageUrl: p.imageUrl })),
      });
    }

    await prisma.auditLog.create({
      data: {
        userId: session.sub as string,
        userName: session.name,
        entityType: "Course",
        entityId: id,
        action: "update",
        diff: { title: updated.title, isPublished: updated.isPublished } as Prisma.InputJsonValue,
      },
    });

    revalidatePublic([`/courses/${updated.slug}`]);
    return updated;
  });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return withAdmin(req, async ({ session }) => {
    const course = await prisma.course.findUnique({ where: { id } });
    if (!course) throw Object.assign(new Error("Course not found"), { code: "NOT_FOUND" });

    await prisma.course.delete({ where: { id } });

    await prisma.auditLog.create({
      data: {
        userId: session.sub as string,
        userName: session.name,
        entityType: "Course",
        entityId: id,
        action: "delete",
        diff: { slug: course.slug } as Prisma.InputJsonValue,
      },
    });

    revalidatePublic();
    return { ok: true };
  }, { requireRole: "ADMIN" });
}
