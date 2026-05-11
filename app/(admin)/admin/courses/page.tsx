import Link from "next/link";
import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";

export const dynamic = "force-dynamic";

export default async function CoursesListPage() {
  const courses = await prisma.course.findMany({
    orderBy: [{ isFeatured: "desc" }, { order: "asc" }, { title: "asc" }],
    include: { category: { select: { name: true } } },
  });

  return (
    <div>
      <AdminPageHeader
        title="Courses"
        description="Full course catalogue. Click a course to edit its master data — curriculum, pricing, batches, SEO, and more."
      />

      <div className="flex justify-end mb-4">
        <Link
          href="/admin/courses/new"
          className="bg-[#1de5b5] text-[#09263f] rounded-full px-4 py-2 text-sm font-semibold hover:brightness-95 transition"
        >
          + New course
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-4 py-3 font-semibold">Title</th>
              <th className="px-4 py-3 font-semibold">Category</th>
              <th className="px-4 py-3 font-semibold">Slug</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(c => (
              <tr key={c.id} className="border-t border-gray-100 hover:bg-gray-50/50">
                <td className="px-4 py-3">
                  <div className="font-semibold">{c.title}</div>
                  {c.isFeatured && (
                    <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-semibold">Featured</span>
                  )}
                </td>
                <td className="px-4 py-3 text-gray-600">{c.category.name}</td>
                <td className="px-4 py-3">
                  <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">{c.slug}</code>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    c.isPublished ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                  }`}>
                    {c.isPublished ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-4 py-3 text-right flex items-center justify-end gap-3">
                  <Link href={`/admin/courses/${c.id}`} className="text-[#1de5b5] font-semibold hover:underline text-xs">
                    Edit
                  </Link>
                  <Link href={`/admin/pages/course/${c.slug}`} className="text-gray-500 hover:text-[#09263f] hover:underline text-xs">
                    Page editor
                  </Link>
                </td>
              </tr>
            ))}
            {courses.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-500">No courses yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
