import Link from "next/link";
import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 50;

type SearchParams = {
  page?: string;
  q?: string;
  source?: string;
  from?: string;
  to?: string;
};

export default async function LeadsPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page) || 1);
  const q = sp.q?.trim() || undefined;
  const source = sp.source?.trim() || undefined;
  const from = sp.from ? new Date(sp.from) : undefined;
  const to = sp.to ? new Date(sp.to) : undefined;

  const where = {
    ...(source ? { source } : {}),
    ...(from || to ? { createdAt: { ...(from ? { gte: from } : {}), ...(to ? { lte: to } : {}) } } : {}),
    ...(q
      ? { OR: [
          { name: { contains: q, mode: "insensitive" as const } },
          { email: { contains: q, mode: "insensitive" as const } },
          { phone: { contains: q } },
        ] }
      : {}),
  };

  const [rows, total] = await Promise.all([
    prisma.lead.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    }),
    prisma.lead.count({ where }),
  ]);
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  // Build CSV link preserving current filters.
  const csvParams = new URLSearchParams({ format: "csv" });
  if (q) csvParams.set("q", q);
  if (source) csvParams.set("source", source);
  if (sp.from) csvParams.set("from", sp.from);
  if (sp.to) csvParams.set("to", sp.to);

  return (
    <div>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h1 className="text-2xl font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f]">Leads</h1>
          <p className="text-sm text-gray-500 mt-1">{total.toLocaleString()} {total === 1 ? "lead" : "leads"} match the current filters.</p>
        </div>
        <a
          href={`/api/admin/leads?${csvParams.toString()}`}
          className="bg-[#1de5b5] text-[#09263f] rounded-full px-4 py-2 text-sm font-semibold hover:brightness-95 transition"
        >
          Export CSV
        </a>
      </div>

      {/* Filter form */}
      <form className="bg-white rounded-xl border border-gray-200 p-4 mb-4 grid grid-cols-5 gap-3 text-sm" action="/admin/leads" method="GET">
        <input
          name="q"
          type="search"
          placeholder="Search name / email / phone"
          defaultValue={q ?? ""}
          className="border border-gray-300 rounded-md h-10 px-3 outline-none focus:border-[#1de5b5]"
        />
        <select name="source" defaultValue={source ?? ""} className="border border-gray-300 rounded-md h-10 px-3 bg-white">
          <option value="">All sources</option>
          {["contact-form", "callback-request", "brochure-download", "newsletter", "masterclass-register", "corporate-enquiry"].map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <input name="from" type="date" defaultValue={sp.from ?? ""} className="border border-gray-300 rounded-md h-10 px-3" />
        <input name="to" type="date" defaultValue={sp.to ?? ""} className="border border-gray-300 rounded-md h-10 px-3" />
        <button type="submit" className="bg-[#09263f] text-white rounded-md h-10 px-4 font-semibold hover:brightness-110">
          Apply
        </button>
      </form>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-4 py-3 font-semibold">When</th>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">Phone</th>
              <th className="px-4 py-3 font-semibold">Source</th>
              <th className="px-4 py-3 font-semibold">City</th>
              <th className="px-4 py-3 font-semibold">Course</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr><td colSpan={7} className="px-4 py-12 text-center text-gray-500">No leads match.</td></tr>
            ) : rows.map(l => (
              <tr key={l.id} className="border-t border-gray-100">
                <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{l.createdAt.toLocaleString()}</td>
                <td className="px-4 py-3 font-medium">{l.name}</td>
                <td className="px-4 py-3 text-gray-600">{l.email}</td>
                <td className="px-4 py-3 text-gray-600">{l.phone ?? "—"}</td>
                <td className="px-4 py-3"><code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">{l.source}</code></td>
                <td className="px-4 py-3 text-gray-600">{l.city ?? "—"}</td>
                <td className="px-4 py-3 text-gray-600">{l.courseId ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="flex items-center justify-center gap-2 mt-6 text-sm">
          {Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 10).map(p => {
            const params = new URLSearchParams();
            if (q) params.set("q", q);
            if (source) params.set("source", source);
            if (sp.from) params.set("from", sp.from);
            if (sp.to) params.set("to", sp.to);
            params.set("page", String(p));
            return (
              <Link
                key={p}
                href={`/admin/leads?${params.toString()}`}
                className={`px-3 py-1.5 rounded-md ${p === page ? "bg-[#09263f] text-white" : "bg-white border border-gray-200 hover:border-[#1de5b5]"}`}
              >
                {p}
              </Link>
            );
          })}
          {totalPages > 10 && <span className="text-gray-400 px-2">… {totalPages}</span>}
        </nav>
      )}
    </div>
  );
}
