"use client";

import type { FormProps } from "../SectionEditor";
import TextField from "../fields/TextField";
import ArrayField from "../fields/ArrayField";

type Cat = { label: string; key: string };

export default function CoursesGridForm({ draft, onChange }: FormProps) {
  const d = draft as { headline: string; searchPlaceholder: string; categories: Cat[] };
  function set(key: string, val: unknown) { onChange({ ...d, [key]: val }); }

  return (
    <div className="flex flex-col gap-4">
      <TextField label="Headline" value={d.headline ?? ""} onChange={v => set("headline", v)} />
      <TextField label="Search placeholder" value={d.searchPlaceholder ?? ""} onChange={v => set("searchPlaceholder", v)} />

      <ArrayField<Cat>
        label="Filter categories (pills)"
        items={d.categories ?? []}
        onChange={v => set("categories", v)}
        newItem={() => ({ label: "", key: "" })}
        renderItem={(cat, _i, update) => (
          <div className="flex gap-2">
            <TextField label="Label" value={cat.label} onChange={v => update({ ...cat, label: v })} />
            <TextField label="Key" value={cat.key} onChange={v => update({ ...cat, key: v })} placeholder="data-science" />
          </div>
        )}
      />

      <p className="text-xs text-gray-400">
        Course ordering is managed in the{" "}
        <a href="/admin/courses" className="text-[#1de5b5] hover:underline">Course catalogue</a>.
      </p>
    </div>
  );
}
