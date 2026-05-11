import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../../_components/AdminPageHeader";
import CourseEditorClient from "./CourseEditorClient";

export const dynamic = "force-dynamic";

export default async function CourseEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const [categories, course] = await Promise.all([
    prisma.category.findMany({ orderBy: { order: "asc" }, select: { id: true, name: true } }),
    id === "new"
      ? null
      : prisma.course.findUnique({
          where: { id },
          include: {
            modules: { include: { lessons: { orderBy: { order: "asc" } } }, orderBy: { order: "asc" } },
            pricing: { orderBy: { order: "asc" } },
            projects: { orderBy: { id: "asc" } },
            certifications: { orderBy: { id: "asc" } },
          },
        }),
  ]);

  if (id !== "new" && !course) notFound();

  const defaultCategoryId = categories[0]?.id ?? "";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const courseData: any = course
    ? {
        id: course.id,
        slug: course.slug,
        title: course.title,
        shortDesc: course.shortDesc,
        longDesc: course.longDesc,
        thumbnailUrl: course.thumbnailUrl ?? "",
        heroImageUrl: course.heroImageUrl ?? "",
        durationMonths: course.durationMonths ?? 0,
        classesCount: course.classesCount ?? 0,
        hoursCount: course.hoursCount ?? 0,
        price: course.price ?? 0,
        discountedPrice: course.discountedPrice ?? 0,
        emiPerMonth: course.emiPerMonth ?? 0,
        brochureUrl: course.brochureUrl ?? "",
        isFeatured: course.isFeatured,
        isPublished: course.isPublished,
        order: course.order,
        jobRoles: course.jobRoles,
        keySkills: course.keySkills,
        careerSupportText: course.careerSupportText ?? "",
        metaTitle: course.metaTitle ?? "",
        metaDesc: course.metaDesc ?? "",
        rating: course.rating ? Number(course.rating) * 10 : 0,
        alumniCount: course.alumniCount ?? 0,
        heroImage: course.heroImage ?? "",
        hasNoCodingRequired: course.hasNoCodingRequired,
        categoryId: course.categoryId,
        modules: course.modules.map(m => ({
          id: m.id,
          title: m.title,
          summary: m.summary ?? "",
          order: m.order,
          lessons: m.lessons.map(l => ({
            id: l.id,
            title: l.title,
            duration: l.duration ?? "",
            order: l.order,
          })),
        })),
        pricing: course.pricing.map(p => ({
          id: p.id,
          mode: p.mode,
          label: p.label,
          price: p.price,
          priceStruck: p.priceStruck ?? 0,
          installments: p.installments,
          hasEmi: p.hasEmi,
          ctaLabel: p.ctaLabel,
          ctaHref: p.ctaHref ?? "",
          order: p.order,
        })),
        projects: course.projects.map(p => ({
          id: p.id,
          title: p.title,
          desc: p.desc,
          imageUrl: p.imageUrl ?? "",
        })),
        certifications: course.certifications.map(c => ({
          id: c.id,
          title: c.title,
          issuer: c.issuer,
          imageUrl: c.imageUrl ?? "",
        })),
      }
    : {
        id: "new",
        slug: "",
        title: "",
        shortDesc: "",
        longDesc: "",
        thumbnailUrl: "",
        heroImageUrl: "",
        durationMonths: 0,
        classesCount: 0,
        hoursCount: 0,
        price: 0,
        discountedPrice: 0,
        emiPerMonth: 0,
        brochureUrl: "",
        isFeatured: false,
        isPublished: false,
        order: 0,
        jobRoles: [],
        keySkills: [],
        careerSupportText: "",
        metaTitle: "",
        metaDesc: "",
        rating: 0,
        alumniCount: 0,
        heroImage: "",
        hasNoCodingRequired: false,
        categoryId: defaultCategoryId,
        modules: [],
        pricing: [],
        projects: [],
        certifications: [],
      };

  return (
    <div>
      <div className="mb-2">
        <Link href="/admin/courses" className="text-sm text-[#1de5b5] hover:underline">← All courses</Link>
      </div>
      <AdminPageHeader
        title={course ? course.title : "New course"}
        description={course ? `Editing: ${course.slug}` : "Fill in all tabs before publishing."}
      />
      {course && (
        <div className="mb-4">
          <Link href={`/admin/pages/course/${course.slug}`} className="text-sm text-[#1de5b5] hover:underline">
            Edit page sections (PDP editor) →
          </Link>
        </div>
      )}
      <CourseEditorClient course={courseData} categories={categories} />
    </div>
  );
}
