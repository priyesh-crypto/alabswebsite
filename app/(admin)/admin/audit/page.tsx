import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";

export const dynamic = "force-dynamic";

const ENTITY_COLORS: Record<string, string> = {
  Section: "bg-blue-100 text-blue-700",
  GlobalBlock: "bg-purple-100 text-purple-700",
  Course: "bg-green-100 text-green-700",
  default: "bg-gray-100 text-gray-600",
};

const ACTION_COLORS: Record<string, string> = {
  publish: "bg-[#1de5b5]/20 text-[#07795f]",
  update_draft: "bg-amber-100 text-amber-700",
  revert: "bg-orange-100 text-orange-700",
  create: "bg-green-100 text-green-700",
  update: "bg-amber-100 text-amber-700",
  delete: "bg-red-100 text-red-700",
  default: "bg-gray-100 text-gray-600",
};

export default async function AuditLogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; entity?: string }>;
}) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page ?? 1));
  const entityFilter = sp.entity?.trim() || undefined;
  const pageSize = 50;

  const [total, logs] = await Promise.all([
    prisma.auditLog.count({
      where: entityFilter ? { entityType: entityFilter } : undefined,
    }),
    prisma.auditLog.findMany({
      where: entityFilter ? { entityType: entityFilter } : undefined,
      orderBy: { createdAt: "desc" },
      take: pageSize,
      skip: (page - 1) * pageSize,
    }),
  ]);

  const totalPages = Math.ceil(total / pageSize);
  const entityTypes = ["Section", "GlobalBlock", "Course", "AdminUser"];

  return (
    <div>
      <AdminPageHeader
        title="Audit log"
        description="Every save, publish, and delete action is recorded here. Read-only."
      />

      {/* Filters */}
      <form className="flex items-center gap-3 mb-4" method="GET">
        <select
          name="entity"
          defaultValue={entityFilter ?? ""}
          className="border border-gray-300 rounded-md h-9 px-3 text-sm outline-none focus:border-[#1de5b5] bg-white"
        >
          <option value="">All entities</option>
          {entityTypes.map(e => (
            <option key={e} value={e}>{e}</option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-[#09263f] text-white rounded-full px-4 py-2 text-sm font-semibold hover:brightness-110 transition"
        >
          Filter
        </button>
        {entityFilter && (
          <a href="/admin/audit" className="text-sm text-gray-500 hover:underline">Clear</a>
        )}
        <span className="text-sm text-gray-400 ml-auto">{total} entries</span>
      </form>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-4 py-3 font-semibold">When</th>
              <th className="px-4 py-3 font-semibold">User</th>
              <th className="px-4 py-3 font-semibold">Entity</th>
              <th className="px-4 py-3 font-semibold">Action</th>
              <th className="px-4 py-3 font-semibold">ID</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr key={log.id} className="border-t border-gray-100 hover:bg-gray-50/50">
                <td className="px-4 py-3 text-gray-500 whitespace-nowrap text-xs">
                  {log.createdAt.toLocaleString()}
                </td>
                <td className="px-4 py-3 font-semibold text-xs">{log.userName}</td>
                <td className="px-4 py-3">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    ENTITY_COLORS[log.entityType] ?? ENTITY_COLORS.default
                  }`}>
                    {log.entityType}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    ACTION_COLORS[log.action] ?? ACTION_COLORS.default
                  }`}>
                    {log.action}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <code className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                    {log.entityId.slice(0, 12)}…
                  </code>
                </td>
              </tr>
            ))}
            {logs.length === 0 && (
              <tr><td colSpan={5} className="px-4 py-8 text-center text-gray-500">No audit entries yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-end gap-2 mt-4 text-sm">
          {page > 1 && (
            <a href={`?page=${page - 1}${entityFilter ? `&entity=${entityFilter}` : ""}`} className="px-3 py-1.5 rounded border border-gray-200 hover:bg-gray-50">← Prev</a>
          )}
          <span className="text-gray-500">{page} / {totalPages}</span>
          {page < totalPages && (
            <a href={`?page=${page + 1}${entityFilter ? `&entity=${entityFilter}` : ""}`} className="px-3 py-1.5 rounded border border-gray-200 hover:bg-gray-50">Next →</a>
          )}
        </div>
      )}
    </div>
  );
}
