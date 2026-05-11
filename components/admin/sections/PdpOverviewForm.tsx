"use client";

import type { FormProps } from "../SectionEditor";
import TextareaField from "../fields/TextareaField";

export default function PdpOverviewForm({ draft, onChange }: FormProps) {
  const d = draft as { body: string };
  return (
    <div className="flex flex-col gap-4">
      <TextareaField label="Overview body" value={d.body ?? ""} onChange={v => onChange({ ...d, body: v })} rows={6} hint="Supports markdown. Stats (price, rating, duration, alumni) come from the course record." />
    </div>
  );
}
