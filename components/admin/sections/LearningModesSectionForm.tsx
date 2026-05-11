"use client";

import type { FormProps } from "../SectionEditor";
import TextField from "../fields/TextField";
import TextareaField from "../fields/TextareaField";
import ArrayField from "../fields/ArrayField";

type Session = { label: string; date: string; time: string; seatsLabel?: string };
type Mode = { key: string; label: string; title: string; sessions: Session[] };

export default function LearningModesSectionForm({ draft, onChange }: FormProps) {
  const d = draft as { headline: string; intro: string; modes: Mode[] };
  function set(key: string, val: unknown) { onChange({ ...d, [key]: val }); }

  return (
    <div className="flex flex-col gap-4">
      <TextField label="Headline" value={d.headline ?? ""} onChange={v => set("headline", v)} />
      <TextareaField label="Intro text" value={d.intro ?? ""} onChange={v => set("intro", v)} rows={2} />

      <ArrayField<Mode>
        label="Learning modes"
        items={d.modes ?? []}
        onChange={v => set("modes", v)}
        newItem={() => ({ key: "", label: "", title: "", sessions: [] })}
        renderItem={(mode, _i, updateMode) => (
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <TextField label="Key" value={mode.key} onChange={v => updateMode({ ...mode, key: v })} placeholder="classroom" />
              <TextField label="Tab label" value={mode.label} onChange={v => updateMode({ ...mode, label: v })} placeholder="Classroom" />
              <TextField label="Card title" value={mode.title} onChange={v => updateMode({ ...mode, title: v })} />
            </div>
            <ArrayField<Session>
              label="Sessions"
              items={mode.sessions ?? []}
              onChange={sessions => updateMode({ ...mode, sessions })}
              newItem={() => ({ label: "", date: "", time: "", seatsLabel: "" })}
              renderItem={(s, _j, updateS) => (
                <div className="flex gap-2 flex-wrap">
                  <TextField label="Label" value={s.label} onChange={v => updateS({ ...s, label: v })} />
                  <TextField label="Date" value={s.date} onChange={v => updateS({ ...s, date: v })} />
                  <TextField label="Time" value={s.time} onChange={v => updateS({ ...s, time: v })} />
                  <TextField label="Seats" value={s.seatsLabel ?? ""} onChange={v => updateS({ ...s, seatsLabel: v })} />
                </div>
              )}
            />
          </div>
        )}
      />
    </div>
  );
}
