"use client";

import type { FormProps } from "../SectionEditor";
import NumberField from "../fields/NumberField";
import ArrayField from "../fields/ArrayField";
import TextField from "../fields/TextField";

export default function PdpCurriculumForm({ draft, onChange }: FormProps) {
  const d = draft as {
    statLiveHours: number;
    statSelfStudyHours: number;
    statPlacementWeeks: number;
    includesBullets: string[];
  };
  function set(key: string, val: unknown) { onChange({ ...d, [key]: val }); }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 flex-wrap">
        <NumberField label="Live hours" value={d.statLiveHours ?? 0} onChange={v => set("statLiveHours", v)} min={0} />
        <NumberField label="Self-study hours" value={d.statSelfStudyHours ?? 0} onChange={v => set("statSelfStudyHours", v)} min={0} />
        <NumberField label="Placement weeks" value={d.statPlacementWeeks ?? 0} onChange={v => set("statPlacementWeeks", v)} min={0} />
      </div>

      <ArrayField<string>
        label="&quot;Includes&quot; bullets"
        items={d.includesBullets ?? []}
        onChange={v => set("includesBullets", v)}
        newItem={() => ""}
        renderItem={(b, _i, update) => (
          <TextField label="" value={b} onChange={update} placeholder="e.g. 11 Modules" />
        )}
      />

      <p className="text-xs text-gray-400">Modules and lessons come from the course record (edit in Course editor → Curriculum tab).</p>
    </div>
  );
}
