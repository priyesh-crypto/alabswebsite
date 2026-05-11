"use client";

import type { FormProps } from "../SectionEditor";
import TextField from "../fields/TextField";
import TextareaField from "../fields/TextareaField";
import MediaPicker from "../fields/MediaPicker";
import ArrayField from "../fields/ArrayField";

type Bullet = { icon?: string; text: string };
type Cta = { label: string; href: string; variant: string };
type Media = { url: string; alt: string };

export default function InstituteIntroForm({ draft, onChange }: FormProps) {
  const d = draft as {
    headline: string; body: string; cityChips: string[];
    bullets: Bullet[]; cta?: Cta; images: Media[];
  };
  function set(key: string, val: unknown) { onChange({ ...d, [key]: val }); }

  return (
    <div className="flex flex-col gap-4">
      <TextField label="Headline" value={d.headline ?? ""} onChange={v => set("headline", v)} />
      <TextareaField label="Body text" value={d.body ?? ""} onChange={v => set("body", v)} rows={4} />

      <ArrayField<string>
        label="City chips"
        items={d.cityChips ?? []}
        onChange={v => set("cityChips", v)}
        newItem={() => ""}
        renderItem={(city, _i, update) => (
          <TextField label="" value={city} onChange={update} placeholder="Bangalore" />
        )}
      />

      <ArrayField<Bullet>
        label="Bullet points"
        items={d.bullets ?? []}
        onChange={v => set("bullets", v)}
        newItem={() => ({ text: "" })}
        renderItem={(b, _i, update) => (
          <TextField label="Bullet text" value={b.text} onChange={v => update({ ...b, text: v })} />
        )}
      />

      <div className="flex gap-3">
        <TextField label="CTA label" value={d.cta?.label ?? ""} onChange={v => set("cta", { ...d.cta, label: v, href: d.cta?.href ?? "/", variant: "primary" })} />
        <TextField label="CTA URL" value={d.cta?.href ?? ""} onChange={v => set("cta", { ...d.cta, href: v, label: d.cta?.label ?? "", variant: "primary" })} />
      </div>

      <div className="flex gap-3">
        <MediaPicker label="Image 1" value={d.images?.[0] ?? { url: "", alt: "" }} onChange={v => set("images", [v, d.images?.[1] ?? { url: "", alt: "" }])} />
        <MediaPicker label="Image 2" value={d.images?.[1] ?? { url: "", alt: "" }} onChange={v => set("images", [d.images?.[0] ?? { url: "", alt: "" }, v])} />
      </div>
    </div>
  );
}
