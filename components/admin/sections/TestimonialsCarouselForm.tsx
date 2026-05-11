"use client";

import type { FormProps } from "../SectionEditor";
import TextField from "../fields/TextField";
import TextareaField from "../fields/TextareaField";

export default function TestimonialsCarouselForm({ draft, onChange }: FormProps) {
  const d = draft as { headline: string; subhead: string; testimonialIds: string[] };
  function set(key: string, val: unknown) { onChange({ ...d, [key]: val }); }

  return (
    <div className="flex flex-col gap-4">
      <TextField label="Headline" value={d.headline ?? ""} onChange={v => set("headline", v)} />
      <TextareaField label="Sub-headline" value={d.subhead ?? ""} onChange={v => set("subhead", v)} rows={2} />
      <p className="text-xs text-gray-400">
        Testimonials shown are from the global pool.{" "}
        <a href="/admin/testimonials" className="text-[#1de5b5] hover:underline">Manage testimonials →</a>
      </p>
    </div>
  );
}
