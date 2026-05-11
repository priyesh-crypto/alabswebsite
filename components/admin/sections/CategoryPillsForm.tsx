"use client";

import type { FormProps } from "../SectionEditor";
import TextField from "../fields/TextField";
import ArrayField from "../fields/ArrayField";

type Pill = { label: string; href: string; color?: string };

export default function CategoryPillsForm({ draft, onChange }: FormProps) {
  const d = draft as { pills: Pill[] };
  function set(key: string, val: unknown) { onChange({ ...d, [key]: val }); }

  return (
    <div className="flex flex-col gap-4">
      <ArrayField<Pill>
        label="Category pills"
        items={d.pills ?? []}
        onChange={v => set("pills", v)}
        newItem={() => ({ label: "", href: "/courses", color: "" })}
        renderItem={(item, _i, update) => (
          <div className="flex gap-2 flex-wrap">
            <TextField label="Label" value={item.label} onChange={v => update({ ...item, label: v })} />
            <TextField label="Link" value={item.href} onChange={v => update({ ...item, href: v })} />
            <TextField label="Color (hex)" value={item.color ?? ""} onChange={v => update({ ...item, color: v })} placeholder="#d2faf0" />
          </div>
        )}
      />
    </div>
  );
}
