"use client";

import type { FormProps } from "../SectionEditor";
import TextField from "../fields/TextField";
import ArrayField from "../fields/ArrayField";

export default function PdpCareerSupportForm({ draft, onChange }: FormProps) {
  const d = draft as { headline: string; bullets: string[]; placementReportUrl: string };
  function set(key: string, val: unknown) { onChange({ ...d, [key]: val }); }

  return (
    <div className="flex flex-col gap-4">
      <TextField label="Headline" value={d.headline ?? ""} onChange={v => set("headline", v)} />
      <TextField label="Placement report URL" value={d.placementReportUrl ?? ""} onChange={v => set("placementReportUrl", v)} type="url" />
      <ArrayField<string>
        label="Career support bullets"
        items={d.bullets ?? []}
        onChange={v => set("bullets", v)}
        newItem={() => ""}
        renderItem={(b, _i, update) => (
          <TextField label="" value={b} onChange={update} />
        )}
      />
    </div>
  );
}
