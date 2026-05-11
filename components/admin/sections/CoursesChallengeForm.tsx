"use client";

import type { FormProps } from "../SectionEditor";
import TextField from "../fields/TextField";
import ArrayField from "../fields/ArrayField";

type Cat = { label: string; slug: string };

export default function CoursesChallengeForm({ draft, onChange }: FormProps) {
  const d = draft as { headline: string; sidebarCategories: Cat[]; featuredCourseIds: string[] };
  function set(key: string, val: unknown) { onChange({ ...d, [key]: val }); }

  return (
    <div className="flex flex-col gap-4">
      <TextField label="Headline" value={d.headline ?? ""} onChange={v => set("headline", v)} />

      <ArrayField<Cat>
        label="Sidebar categories"
        items={d.sidebarCategories ?? []}
        onChange={v => set("sidebarCategories", v)}
        newItem={() => ({ label: "", slug: "" })}
        renderItem={(cat, _i, update) => (
          <div className="flex gap-2">
            <TextField label="Label" value={cat.label} onChange={v => update({ ...cat, label: v })} />
            <TextField label="Slug" value={cat.slug} onChange={v => update({ ...cat, slug: v })} />
          </div>
        )}
      />

      <p className="text-xs text-gray-400">
        Featured courses: managed via{" "}
        <a href="/admin/courses" className="text-[#1de5b5] hover:underline">Course catalogue</a>
        {" "}(mark courses as &quot;featured&quot; to show them here).
      </p>
    </div>
  );
}
