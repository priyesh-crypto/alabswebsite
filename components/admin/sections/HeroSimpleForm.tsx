"use client";

import type { FormProps } from "../SectionEditor";
import TextField from "../fields/TextField";
import TextareaField from "../fields/TextareaField";
import MediaPicker from "../fields/MediaPicker";

export default function HeroSimpleForm({ draft, onChange }: FormProps) {
  const d = draft as { headline: string; subtitle: string; heroImage?: { url: string; alt: string } };
  function set(key: string, val: unknown) { onChange({ ...d, [key]: val }); }

  return (
    <div className="flex flex-col gap-4">
      <TextareaField label="Headline" value={d.headline ?? ""} onChange={v => set("headline", v)} rows={2} hint="Use **bold** for emphasis" />
      <TextareaField label="Subtitle" value={d.subtitle ?? ""} onChange={v => set("subtitle", v)} rows={2} />
      <MediaPicker label="Hero image" value={d.heroImage ?? { url: "", alt: "" }} onChange={v => set("heroImage", v)} />
    </div>
  );
}
