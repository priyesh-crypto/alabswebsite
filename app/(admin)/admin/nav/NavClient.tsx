"use client";

import CrudClient, { type ColumnDef, type FieldDef } from "../_components/CrudClient";

export type NavGroupId =
  | "TOP_NAV"
  | "MEGA_MENU"
  | "FOOTER_LINKS"
  | "FOOTER_CITIES"
  | "FOOTER_COL_ABOUT"
  | "FOOTER_COL_ETC"
  | "FOOTER_COL_POPULAR";

export type NavRow = {
  id: string;
  label: string;
  url: string;
  group: NavGroupId;
  order: number;
  parentId: string | null;
  isActive: boolean;
};

// Order + display labels for each editable nav group.
const GROUPS: { id: NavGroupId; title: string; blurb: string }[] = [
  { id: "TOP_NAV", title: "Top navigation", blurb: "Header links: Upcoming Batches, Explore Courses, Why Us, Contact Us, Sign In, …" },
  { id: "MEGA_MENU", title: "Explore Courses mega-menu", blurb: "Column headers + nested course links. Nest a link by picking its column as the parent." },
  { id: "FOOTER_LINKS", title: "Footer links", blurb: "General footer links." },
  { id: "FOOTER_COL_ABOUT", title: "Footer — About column", blurb: "" },
  { id: "FOOTER_COL_ETC", title: "Footer — Resources column", blurb: "" },
  { id: "FOOTER_COL_POPULAR", title: "Footer — Popular column", blurb: "" },
  { id: "FOOTER_CITIES", title: "Footer — City course links", blurb: '"Data Science Course in Delhi", etc.' },
];

const GROUP_OPTIONS = GROUPS.map(g => ({ value: g.id, label: g.title }));

export default function NavClient({ rows }: { rows: NavRow[] }) {
  // Parent options = every item (label prefixed by group), so a child can be
  // nested under any column header. Empty = top level.
  const parentOptions = rows
    .slice()
    .sort((a, b) => a.label.localeCompare(b.label))
    .map(r => ({ value: r.id, label: `${r.label} (${r.group})` }));

  const labelById = new Map(rows.map(r => [r.id, r.label]));

  const columns: ColumnDef<NavRow>[] = [
    { key: "order", label: "#", width: "50px" },
    { key: "label", label: "Label", render: r => <span className="font-medium">{r.label}</span> },
    { key: "url", label: "URL", render: r => <span className="text-gray-500 break-all">{r.url}</span> },
    {
      key: "parentId",
      label: "Nested under",
      render: r => (r.parentId ? <span className="text-gray-600">{labelById.get(r.parentId) ?? "—"}</span> : <span className="text-gray-300">top level</span>),
    },
    {
      key: "isActive",
      label: "Active",
      width: "72px",
      render: r =>
        r.isActive
          ? <span className="text-green-600 text-xs font-semibold">YES</span>
          : <span className="text-gray-400 text-xs">no</span>,
    },
  ];

  const fields = (group: NavGroupId): FieldDef[] => [
    { name: "label", label: "Label", type: "text", required: true },
    { name: "url", label: "URL / link", type: "text", required: true, placeholder: "/courses or https://… or #" },
    { name: "group", label: "Group", type: "select", required: true, options: GROUP_OPTIONS },
    { name: "parentId", label: "Nested under (optional)", type: "select", options: parentOptions },
    { name: "order", label: "Order", type: "number", min: 0 },
    { name: "isActive", label: "Active (visible on site)", type: "boolean" },
  ];

  return (
    <div className="flex flex-col gap-10">
      {GROUPS.map(group => {
        const groupRows = rows.filter(r => r.group === group.id);
        return (
          <section key={group.id} className="flex flex-col gap-3">
            <div>
              <h2 className="text-base font-semibold text-[#09263f]">{group.title}</h2>
              {group.blurb && <p className="text-xs text-gray-500 mt-0.5">{group.blurb}</p>}
            </div>
            <CrudClient<NavRow>
              resource="nav"
              rows={groupRows}
              columns={columns}
              fields={fields(group.id)}
              emptyForm={{
                label: "",
                url: "",
                group: group.id,
                parentId: "",
                order: groupRows.length,
                isActive: true,
              }}
              toForm={r => ({
                label: r.label,
                url: r.url,
                group: r.group,
                parentId: r.parentId ?? "",
                order: r.order,
                isActive: r.isActive,
              })}
              searchKeys={["label", "url"]}
            />
          </section>
        );
      })}
    </div>
  );
}
