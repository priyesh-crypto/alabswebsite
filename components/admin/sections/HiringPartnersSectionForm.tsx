"use client";

import type { FormProps } from "../SectionEditor";
import TextField from "../fields/TextField";

export default function HiringPartnersSectionForm({ draft, onChange }: FormProps) {
  const d = draft as { metricLabel: string; metricSuffix: string };
  function set(key: string, val: unknown) { onChange({ ...d, [key]: val }); }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <TextField label="Metric number" value={d.metricLabel ?? ""} onChange={v => set("metricLabel", v)} placeholder="15,000+" />
        <TextField label="Metric suffix" value={d.metricSuffix ?? ""} onChange={v => set("metricSuffix", v)} placeholder="Candidates" />
      </div>
      <p className="text-xs text-gray-400">
        Partner logos come from the global list.{" "}
        <a href="/admin/hiring-partners" className="text-[#1de5b5] hover:underline">Manage partners →</a>
      </p>
    </div>
  );
}
