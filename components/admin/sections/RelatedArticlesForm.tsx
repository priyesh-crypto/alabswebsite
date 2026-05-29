"use client";

import type { FormProps } from "../SectionEditor";
import TextField from "../fields/TextField";

export default function RelatedArticlesForm({ draft, onChange }: FormProps) {
  const d = draft as { headline: string; viewAllHref: string; limit: number };
  function set(key: string, val: unknown) { onChange({ ...d, [key]: val }); }

  return (
    <div className="flex flex-col gap-4">
      <TextField label="Headline" value={d.headline ?? ""} onChange={v => set("headline", v)} placeholder="Related Articles" />
      <TextField label="“View all” link" value={d.viewAllHref ?? ""} onChange={v => set("viewAllHref", v)} placeholder="/blog" />
    </div>
  );
}
