import Link from "next/link";
import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";

export const dynamic = "force-dynamic";

export default async function PagesIndex() {
  const rows = await prisma.page.findMany({
    orderBy: { slug: "asc" },
    select: { id: true, slug: true, title: true, updatedAt: true },
  });
  return (
    <div>
      <AdminPageHeader
        title="Pages"
        description="Editable copy blocks for every dynamic page on the site. Block keys (e.g. hero.title.brand, about.cityHighlights) are read by the public components."
      />
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-4 py-3 font-semibold">Slug</th>
              <th className="px-4 py-3 font-semibold">Title</th>
              <th className="px-4 py-3 font-semibold">Last updated</th>
              <th className="px-4 py-3 font-semibold w-32 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(p => (
              <tr key={p.id} className="border-t border-gray-100 hover:bg-gray-50/50">
                <td className="px-4 py-3"><code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">{p.slug}</code></td>
                <td className="px-4 py-3 font-medium">{p.title}</td>
                <td className="px-4 py-3 text-gray-500">{p.updatedAt.toLocaleString()}</td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/pages/${p.slug}`} className="text-[#1de5b5] font-semibold hover:underline">Edit</Link>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr><td colSpan={4} className="px-4 py-8 text-center text-gray-500">No pages yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
