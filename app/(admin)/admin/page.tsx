/**
 * Admin dashboard — at-a-glance counts + recent leads.
 *
 * Uses Prisma directly (we're already on the server with a verified session).
 * Cheap: a handful of indexed counts + one ORDER BY DESC LIMIT 5.
 */
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

async function revalidatePublic() {
  "use server";
  revalidatePath("/");
  revalidatePath("/courses");
  revalidatePath("/about");
  revalidatePath("/contact");
}

function StatCard({ label, value, href }: { label: string; value: number | string; href?: string }) {
  const inner = (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-sm transition">
      <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">{label}</p>
      <p className="text-3xl font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] mt-2">{value}</p>
    </div>
  );
  return href ? <Link href={href}>{inner}</Link> : inner;
}

export default async function AdminDashboard() {
  const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const [
    courseCount,
    publishedCourseCount,
    leadCount,
    leadsLast7d,
    testimonialCount,
    postCount,
    publishedPostCount,
    recentLeads,
  ] = await Promise.all([
    prisma.course.count(),
    prisma.course.count({ where: { isPublished: true } }),
    prisma.lead.count(),
    prisma.lead.count({ where: { createdAt: { gte: since } } }),
    prisma.testimonial.count({ where: { isActive: true } }),
    prisma.blogPost.count(),
    prisma.blogPost.count({ where: { isPublished: true } }),
    prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
      select: { id: true, name: true, email: true, source: true, createdAt: true },
    }),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-['Inter:Semi_Bold',sans-serif] font-semibold">Dashboard</h1>
        <form action={revalidatePublic}>
          <button
            type="submit"
            className="text-sm bg-[#1de5b5] text-[#09263f] px-4 py-2 rounded-full font-semibold hover:brightness-95 transition"
          >
            Revalidate site
          </button>
        </form>
      </header>

      {/* Counts */}
      <section className="grid grid-cols-4 gap-4">
        <StatCard label="Courses" value={`${publishedCourseCount} / ${courseCount}`} href="/admin/courses" />
        <StatCard label="Leads (last 7d)" value={leadsLast7d} href="/admin/leads" />
        <StatCard label="Total leads" value={leadCount} href="/admin/leads" />
        <StatCard label="Active testimonials" value={testimonialCount} href="/admin/testimonials" />
        <StatCard label="Blog posts" value={`${publishedPostCount} / ${postCount}`} href="/admin/posts" />
      </section>

      {/* Recent leads */}
      <section className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <header className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold">Recent leads</h2>
          <Link href="/admin/leads" className="text-sm text-[#1de5b5] hover:underline">View all →</Link>
        </header>
        {recentLeads.length === 0 ? (
          <p className="px-5 py-8 text-sm text-gray-500 text-center">No leads yet.</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-xs uppercase tracking-wider text-gray-500">
              <tr>
                <th className="px-5 py-3 font-semibold">Name</th>
                <th className="px-5 py-3 font-semibold">Email</th>
                <th className="px-5 py-3 font-semibold">Source</th>
                <th className="px-5 py-3 font-semibold">When</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map(l => (
                <tr key={l.id} className="border-t border-gray-100">
                  <td className="px-5 py-3 font-semibold">{l.name}</td>
                  <td className="px-5 py-3 text-gray-600">{l.email}</td>
                  <td className="px-5 py-3 text-gray-600">{l.source}</td>
                  <td className="px-5 py-3 text-gray-500">{l.createdAt.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}
