"use client";

import CrudClient, { type ColumnDef, type FieldDef } from "../_components/CrudClient";

export type FaqRow = {
  id: string;
  scope: string;
  question: string;
  answer: string;
  order: number;
  courseId: string | null;
};

const columns: ColumnDef<FaqRow>[] = [
  { key: "scope", label: "Scope", width: "120px",
    render: r => <span className="inline-block bg-gray-100 text-gray-700 text-xs rounded px-2 py-0.5 font-mono">{r.scope}</span> },
  { key: "question", label: "Question",
    render: r => <span className="font-medium line-clamp-1">{r.question}</span> },
  { key: "answer", label: "Answer",
    render: r => <span className="text-gray-500 line-clamp-2">{r.answer}</span> },
  { key: "order", label: "#", width: "60px" },
];

const fields: FieldDef[] = [
  { name: "question", label: "Question", type: "text", required: true },
  { name: "answer", label: "Answer", type: "textarea", rows: 6, required: true },
  { name: "scope", label: "Scope", type: "select", required: true, options: [
    { value: "GLOBAL", label: "GLOBAL (landing FAQ)" },
    { value: "ABOUT", label: "ABOUT page" },
    { value: "CONTACT", label: "CONTACT page" },
  ] },
  { name: "courseId", label: "Course ID (optional, overrides scope for course-specific FAQs)", type: "text" },
  { name: "order", label: "Order", type: "number", min: 0 },
];

export default function FaqsClient({ rows }: { rows: FaqRow[] }) {
  return (
    <CrudClient
      resource="faqs"
      rows={rows}
      columns={columns}
      fields={fields}
      emptyForm={{ question: "", answer: "", scope: "GLOBAL", courseId: "", order: rows.length }}
      searchKeys={["question", "scope"]}
    />
  );
}
