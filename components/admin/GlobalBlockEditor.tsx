"use client";

/**
 * Generic editor for a GlobalBlock record.
 * Renders a form driven by the passed field definitions, calls
 * PATCH /api/admin/global-blocks/[key] on save.
 */

import { useState } from "react";
import TextField from "./fields/TextField";
import TextareaField from "./fields/TextareaField";
import SwitchField from "./fields/SwitchField";
import MediaPicker, { type MediaValue } from "./fields/MediaPicker";
import ArrayField from "./fields/ArrayField";
import NumberField from "./fields/NumberField";

export type GlobalFieldDef =
  | { name: string; label: string; type: "text" | "url" | "email"; placeholder?: string }
  | { name: string; label: string; type: "textarea"; rows?: number }
  | { name: string; label: string; type: "number"; min?: number; max?: number }
  | { name: string; label: string; type: "switch" }
  | { name: string; label: string; type: "media" }
  | { name: string; label: string; type: "array-strings"; placeholder?: string }
  | {
      name: string; label: string; type: "array-objects";
      itemFields: { key: string; label: string; inputType?: "text" | "url" }[];
    };

type Props = {
  blockKey: string;
  initialData: Record<string, unknown>;
  fields: GlobalFieldDef[];
};

function getValue(data: Record<string, unknown>, name: string): unknown {
  return name.split(".").reduce<unknown>((obj, key) => {
    if (obj && typeof obj === "object") return (obj as Record<string, unknown>)[key];
    return undefined;
  }, data);
}

function setValue(data: Record<string, unknown>, name: string, val: unknown): Record<string, unknown> {
  const keys = name.split(".");
  if (keys.length === 1) return { ...data, [name]: val };
  const next = { ...data };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cur: any = next;
  for (let i = 0; i < keys.length - 1; i++) {
    cur[keys[i]] = { ...(cur[keys[i]] ?? {}) };
    cur = cur[keys[i]];
  }
  cur[keys[keys.length - 1]] = val;
  return next;
}

export default function GlobalBlockEditor({ blockKey, initialData, fields }: Props) {
  const [data, setData] = useState<Record<string, unknown>>(initialData);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; error?: boolean } | null>(null);

  function set(name: string, val: unknown) {
    setData(prev => setValue(prev, name, val));
  }

  function showToast(msg: string, error = false) {
    setToast({ msg, error });
    setTimeout(() => setToast(null), 3000);
  }

  async function save() {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/global-blocks/${blockKey}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      if (!res.ok) throw new Error("Save failed");
      showToast("Saved ✓");
    } catch {
      showToast("Save failed", true);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      {toast && (
        <div className={`text-sm rounded-lg px-4 py-3 font-semibold ${
          toast.error ? "bg-red-50 text-red-600" : "bg-green-50 text-green-700"
        }`}>
          {toast.msg}
        </div>
      )}

      {fields.map(field => {
        const val = getValue(data, field.name);

        if (field.type === "text" || field.type === "url" || field.type === "email") {
          return (
            <TextField
              key={field.name}
              label={field.label}
              value={(val as string) ?? ""}
              onChange={v => set(field.name, v)}
              type={field.type}
              placeholder={field.placeholder}
            />
          );
        }

        if (field.type === "textarea") {
          return (
            <TextareaField
              key={field.name}
              label={field.label}
              value={(val as string) ?? ""}
              onChange={v => set(field.name, v)}
              rows={field.rows}
            />
          );
        }

        if (field.type === "number") {
          return (
            <NumberField
              key={field.name}
              label={field.label}
              value={(val as number) ?? 0}
              onChange={v => set(field.name, v)}
              min={field.min}
              max={field.max}
            />
          );
        }

        if (field.type === "switch") {
          return (
            <SwitchField
              key={field.name}
              label={field.label}
              value={(val as boolean) ?? false}
              onChange={v => set(field.name, v)}
            />
          );
        }

        if (field.type === "media") {
          return (
            <MediaPicker
              key={field.name}
              label={field.label}
              value={(val as MediaValue) ?? { url: "", alt: "" }}
              onChange={v => set(field.name, v)}
            />
          );
        }

        if (field.type === "array-strings") {
          const arr = (val as string[]) ?? [];
          return (
            <ArrayField<string>
              key={field.name}
              label={field.label}
              items={arr}
              onChange={v => set(field.name, v)}
              newItem={() => ""}
              renderItem={(item, _i, update) => (
                <TextField label="" value={item} onChange={update} placeholder={field.placeholder} />
              )}
            />
          );
        }

        if (field.type === "array-objects") {
          type ObjItem = Record<string, string>;
          const arr = (val as ObjItem[]) ?? [];
          const emptyItem = field.itemFields.reduce<ObjItem>((acc, f) => { acc[f.key] = ""; return acc; }, {});
          return (
            <ArrayField<ObjItem>
              key={field.name}
              label={field.label}
              items={arr}
              onChange={v => set(field.name, v)}
              newItem={() => ({ ...emptyItem })}
              renderItem={(item, _i, update) => (
                <div className="flex gap-2 flex-wrap">
                  {field.itemFields.map(f => (
                    <TextField
                      key={f.key}
                      label={f.label}
                      value={item[f.key] ?? ""}
                      onChange={v => update({ ...item, [f.key]: v })}
                      type={f.inputType ?? "text"}
                    />
                  ))}
                </div>
              )}
            />
          );
        }

        return null;
      })}

      <div className="pt-2 border-t border-gray-100">
        <button
          type="button"
          onClick={save}
          disabled={saving}
          className="bg-[#1de5b5] text-[#09263f] px-5 py-2.5 rounded-full text-sm font-semibold hover:brightness-95 disabled:opacity-50 transition"
        >
          {saving ? "Saving…" : "Save changes"}
        </button>
      </div>
    </div>
  );
}
