import { prisma } from "@/lib/prisma";
import AdminPageHeader from "../_components/AdminPageHeader";
import CrudClient, { type ColumnDef, type FieldDef } from "../_components/CrudClient";

export const dynamic = "force-dynamic";

type Row = Awaited<ReturnType<typeof prisma.masterclass.findMany>>[number];

const columns: ColumnDef<Row>[] = [
  { key: "title", label: "Title", render: r => <span className="font-medium">{r.title}</span> },
  { key: "startsAt", label: "Starts", width: "180px",
    render: r => r.startsAt ? <span>{new Date(r.startsAt).toLocaleString()}</span> : <span className="text-gray-400">—</span> },
  { key: "registerUrl", label: "Register URL",
    render: r => <a href={r.registerUrl} target="_blank" rel="noopener" className="text-[#1de5b5] hover:underline truncate inline-block max-w-xs">{r.registerUrl}</a> },
  { key: "isActive", label: "Active", width: "100px",
    render: r => r.isActive
      ? <span className="bg-green-100 text-green-700 text-xs font-semibold rounded px-2 py-0.5">LIVE</span>
      : <span className="text-gray-400 text-xs">off</span> },
];

const fields: FieldDef[] = [
  { name: "title", label: "Title", type: "text", required: true },
  { name: "bannerUrl", label: "Banner URL", type: "url", required: true },
  { name: "registerUrl", label: "Register URL", type: "url", required: true },
  { name: "startsAt", label: "Starts at (ISO datetime, optional)", type: "text", placeholder: "2026-06-15T10:00:00.000Z" },
  { name: "isActive", label: "Active (only one active at a time — saving will deactivate others)", type: "boolean" },
];

export default async function MasterclassPage() {
  const rows = await prisma.masterclass.findMany({ orderBy: { startsAt: "desc" } });
  return (
    <div>
      <AdminPageHeader
        title="Masterclass banner"
        description="Lead-gen banner. Only one active row is rendered on the public site at a time."
      />
      <CrudClient
        resource="masterclass"
        rows={rows}
        columns={columns}
        fields={fields}
        emptyForm={{ title: "", bannerUrl: "", registerUrl: "", startsAt: "", isActive: false }}
        toForm={r => ({
          title: r.title,
          bannerUrl: r.bannerUrl,
          registerUrl: r.registerUrl,
          startsAt: r.startsAt ? r.startsAt.toISOString() : "",
          isActive: r.isActive,
        })}
        searchKeys={["title"]}
      />
    </div>
  );
}
