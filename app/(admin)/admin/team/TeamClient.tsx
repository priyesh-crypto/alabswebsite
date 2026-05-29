"use client";

import CrudClient, { type ColumnDef, type FieldDef } from "../_components/CrudClient";

export type TeamRow = {
  id: string;
  order: number;
  name: string;
  role: string;
  photoUrl: string | null;
  bio: string | null;
  linkedinUrl: string | null;
  group: string;
  experienceLabel: string | null;
  expertise: string[];
};

const columns: ColumnDef<TeamRow>[] = [
  { key: "order", label: "#", width: "60px" },
  {
    key: "photoUrl",
    label: "Photo",
    width: "80px",
    render: r =>
      r.photoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={r.photoUrl} alt={r.name} className="size-10 rounded-full object-cover" />
      ) : <span className="text-gray-400">—</span>,
  },
  { key: "name", label: "Name", render: r => <span className="font-medium">{r.name}</span> },
  { key: "role", label: "Role" },
  {
    key: "group",
    label: "Group",
    width: "90px",
    render: r => (
      <span className={`text-xs font-semibold ${r.group === "FACULTY" ? "text-[#07b3e7]" : "text-gray-500"}`}>
        {r.group}
      </span>
    ),
  },
  { key: "linkedinUrl", label: "LinkedIn",
    render: r => r.linkedinUrl
      ? <a href={r.linkedinUrl} target="_blank" rel="noopener" className="text-[#1de5b5] hover:underline">profile</a>
      : <span className="text-gray-400">—</span> },
];

const fields: FieldDef[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "role", label: "Role", type: "text", required: true },
  {
    name: "group",
    label: "Group",
    type: "select",
    required: true,
    options: [
      { value: "TEAM", label: "Leadership (About page)" },
      { value: "FACULTY", label: "Faculty (Faculty page)" },
    ],
  },
  { name: "photoUrl", label: "Photo", type: "image" },
  { name: "bio", label: "Bio", type: "textarea", rows: 4 },
  { name: "experienceLabel", label: "Experience (e.g. 20+ years)", type: "text" },
  { name: "expertise", label: "Expertise tags (comma-separated)", type: "text" },
  { name: "linkedinUrl", label: "LinkedIn URL", type: "url" },
  { name: "order", label: "Order", type: "number", min: 0 },
];

export default function TeamClient({ rows }: { rows: TeamRow[] }) {
  return (
    <CrudClient<TeamRow>
      resource="team"
      rows={rows}
      columns={columns}
      fields={fields}
      emptyForm={{ name: "", role: "", group: "TEAM", photoUrl: "", bio: "", experienceLabel: "", expertise: "", linkedinUrl: "", order: rows.length }}
      // expertise is stored as string[] but edited as a comma-separated string.
      toForm={r => ({
        name: r.name,
        role: r.role,
        group: r.group,
        photoUrl: r.photoUrl ?? "",
        bio: r.bio ?? "",
        experienceLabel: r.experienceLabel ?? "",
        expertise: (r.expertise ?? []).join(", "),
        linkedinUrl: r.linkedinUrl ?? "",
        order: r.order,
      })}
      searchKeys={["name", "role"]}
    />
  );
}
