"use client";

import type { FormProps } from "../SectionEditor";
import TextField from "../fields/TextField";
import TextareaField from "../fields/TextareaField";
import MediaPicker from "../fields/MediaPicker";
import ArrayField from "../fields/ArrayField";

type Cta = { label: string; href: string; variant: string };
type LearnerCard = { label: string; title: string; icon: string };

export default function HeroLandingForm({ draft, onChange }: FormProps) {
  const d = draft as {
    eyebrow?: string;
    headline: string;
    subtitle: string;
    ctas: Cta[];
    heroImage?: { url: string; alt: string };
    socialProofText: string;
    learnerPathCards: LearnerCard[];
  };

  function set(key: string, val: unknown) {
    onChange({ ...d, [key]: val });
  }

  return (
    <div className="flex flex-col gap-4">
      <TextField label="Eyebrow text" value={d.eyebrow ?? ""} onChange={v => set("eyebrow", v)} placeholder="Since 2011" />
      <TextareaField label="Headline" value={d.headline ?? ""} onChange={v => set("headline", v)} required rows={2} hint="Use **bold** for emphasis" />
      <TextareaField label="Subtitle" value={d.subtitle ?? ""} onChange={v => set("subtitle", v)} rows={2} />
      <TextField label="Social proof text" value={d.socialProofText ?? ""} onChange={v => set("socialProofText", v)} placeholder="Rated by 5000+ learners" />

      <MediaPicker
        label="Hero image"
        value={d.heroImage ?? { url: "", alt: "" }}
        onChange={v => set("heroImage", v)}
      />

      <ArrayField<Cta>
        label="CTAs (max 2)"
        items={d.ctas ?? []}
        onChange={v => set("ctas", v)}
        maxItems={2}
        newItem={() => ({ label: "", href: "/", variant: "primary" })}
        renderItem={(item, _i, update) => (
          <div className="flex gap-2 items-start">
            <TextField label="Label" value={item.label} onChange={v => update({ ...item, label: v })} />
            <TextField label="URL" value={item.href} onChange={v => update({ ...item, href: v })} type="url" />
          </div>
        )}
      />

      <ArrayField<LearnerCard>
        label="Learner path cards"
        items={d.learnerPathCards ?? []}
        onChange={v => set("learnerPathCards", v)}
        newItem={() => ({ label: "", title: "", icon: "" })}
        renderItem={(item, _i, update) => (
          <div className="flex gap-2">
            <TextField label="Badge label" value={item.label} onChange={v => update({ ...item, label: v })} placeholder="For Freshers" />
            <TextField label="Title" value={item.title} onChange={v => update({ ...item, title: v })} placeholder="Student / Fresher" />
          </div>
        )}
      />
    </div>
  );
}
