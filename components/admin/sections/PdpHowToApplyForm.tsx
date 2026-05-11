"use client";

import type { FormProps } from "../SectionEditor";
import TextField from "../fields/TextField";
import TextareaField from "../fields/TextareaField";
import ArrayField from "../fields/ArrayField";

type Step = { title: string; body: string };

export default function PdpHowToApplyForm({ draft, onChange }: FormProps) {
  const d = draft as { steps: Step[] };
  function set(key: string, val: unknown) { onChange({ ...d, [key]: val }); }

  return (
    <div className="flex flex-col gap-4">
      <ArrayField<Step>
        label="Steps (max 6)"
        items={d.steps ?? []}
        onChange={v => set("steps", v)}
        maxItems={6}
        newItem={() => ({ title: "", body: "" })}
        renderItem={(step, _i, update) => (
          <div className="flex flex-col gap-2">
            <TextField label="Step title" value={step.title} onChange={v => update({ ...step, title: v })} />
            <TextareaField label="Step description" value={step.body} onChange={v => update({ ...step, body: v })} rows={2} />
          </div>
        )}
      />
    </div>
  );
}
