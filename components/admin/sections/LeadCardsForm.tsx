"use client";

import type { FormProps } from "../SectionEditor";
import TextField from "../fields/TextField";
import ArrayField from "../fields/ArrayField";

type Card = { title: string; subtitle: string; bestForLabel: string };

export default function LeadCardsForm({ draft, onChange }: FormProps) {
  const d = draft as {
    card1: Card; card2: Card; trustBadges: string[]; pathHeading: string;
  };
  const c1 = d.card1 ?? { title: "", subtitle: "", bestForLabel: "Best for" };
  const c2 = d.card2 ?? { title: "", subtitle: "", bestForLabel: "Best for" };
  function set(key: string, val: unknown) { onChange({ ...d, [key]: val }); }
  function setCard(which: "card1" | "card2", patch: Partial<Card>) {
    onChange({ ...d, [which]: { ...(which === "card1" ? c1 : c2), ...patch } });
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Card 1 (left)</p>
        <TextField label="Best-for label" value={c1.bestForLabel ?? ""} onChange={v => setCard("card1", { bestForLabel: v })} />
        <TextField label="Title" value={c1.title ?? ""} onChange={v => setCard("card1", { title: v })} />
        <TextField label="Subtitle" value={c1.subtitle ?? ""} onChange={v => setCard("card1", { subtitle: v })} />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Card 2 (right)</p>
        <TextField label="Best-for label" value={c2.bestForLabel ?? ""} onChange={v => setCard("card2", { bestForLabel: v })} />
        <TextField label="Title" value={c2.title ?? ""} onChange={v => setCard("card2", { title: v })} />
        <TextField label="Subtitle" value={c2.subtitle ?? ""} onChange={v => setCard("card2", { subtitle: v })} />
      </div>

      <TextField label="Path heading" value={d.pathHeading ?? ""} onChange={v => set("pathHeading", v)} />

      <ArrayField<string>
        label="Trust badges"
        items={d.trustBadges ?? []}
        onChange={v => set("trustBadges", v)}
        newItem={() => ""}
        renderItem={(b, _i, update) => (
          <TextField label="" value={b} onChange={update} placeholder="Secure & Private" />
        )}
      />
    </div>
  );
}
