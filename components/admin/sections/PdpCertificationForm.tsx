"use client";

import type { FormProps } from "../SectionEditor";
import TextField from "../fields/TextField";
import TextareaField from "../fields/TextareaField";
import MediaPicker from "../fields/MediaPicker";

export default function PdpCertificationForm({ draft, onChange }: FormProps) {
  const d = draft as {
    headline: string; body: string;
    certificateImage?: { url: string; alt: string };
    nasscomLogo?: { url: string; alt: string };
  };
  function set(key: string, val: unknown) { onChange({ ...d, [key]: val }); }

  return (
    <div className="flex flex-col gap-4">
      <TextField label="Headline" value={d.headline ?? ""} onChange={v => set("headline", v)} />
      <TextareaField label="Body" value={d.body ?? ""} onChange={v => set("body", v)} rows={3} />
      <div className="flex gap-4">
        <MediaPicker label="Certificate image" value={d.certificateImage ?? { url: "", alt: "" }} onChange={v => set("certificateImage", v)} />
        <MediaPicker label="NASSCOM logo" value={d.nasscomLogo ?? { url: "", alt: "" }} onChange={v => set("nasscomLogo", v)} />
      </div>
    </div>
  );
}
