"use client";

/**
 * Per-page block editor.
 *
 * Blocks are stored as a free-form JSON object on Page.blocks. Public components
 * read individual keys (e.g. "hero.title.brand", "about.cityHighlights"). The
 * editor auto-detects the type of each existing key:
 *   - string  → single-line input (or textarea if longer than 80 chars)
 *   - string[] → list of inputs with add/remove
 *   - object   → nested key/value table (used for { label, url } CTA shapes)
 *   - other    → JSON textarea
 *
 * Admins can rename keys, add new ones, or delete existing ones. The save call
 * sends the whole blocks object; backend validates with pageUpdateSchema.
 */

import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type BlockValue = string | string[] | Record<string, string> | unknown;

type Entry = { key: string; value: BlockValue };

function detectKind(value: unknown): "string" | "list" | "object" | "json" {
  if (typeof value === "string") return "string";
  if (Array.isArray(value) && value.every(v => typeof v === "string")) return "list";
  if (value && typeof value === "object") return "object";
  return "json";
}

export default function PageBlockEditor({
  slug,
  initialTitle,
  initialBlocks,
  initialMetaTitle,
  initialMetaDesc,
}: {
  slug: string;
  initialTitle: string;
  initialBlocks: Record<string, unknown>;
  initialMetaTitle: string;
  initialMetaDesc: string;
}) {
  const router = useRouter();

  const initialEntries = useMemo<Entry[]>(
    () => Object.entries(initialBlocks).map(([key, value]) => ({ key, value: value as BlockValue })),
    [initialBlocks],
  );

  const [title, setTitle] = useState(initialTitle);
  const [metaTitle, setMetaTitle] = useState(initialMetaTitle);
  const [metaDesc, setMetaDesc] = useState(initialMetaDesc);
  const [entries, setEntries] = useState<Entry[]>(initialEntries);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ kind: "ok" | "err"; text: string } | null>(null);

  function updateEntry(idx: number, patch: Partial<Entry>) {
    setEntries(prev => prev.map((e, i) => (i === idx ? { ...e, ...patch } : e)));
  }
  function removeEntry(idx: number) {
    setEntries(prev => prev.filter((_, i) => i !== idx));
  }
  function addEntry(type: "string" | "list" | "object") {
    const empty: Record<typeof type, BlockValue> = { string: "", list: [""], object: { label: "", url: "" } };
    setEntries(prev => [...prev, { key: "", value: empty[type] }]);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    try {
      // Build the blocks object, dropping empty keys.
      const blocks: Record<string, unknown> = {};
      for (const entry of entries) {
        const k = entry.key.trim();
        if (!k) continue;
        blocks[k] = entry.value;
      }

      const res = await fetch(`/api/admin/pages/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, blocks, metaTitle, metaDesc }),
      });
      const body = await res.json().catch(() => null);
      if (!res.ok) {
        setMessage({ kind: "err", text: body?.error?.message ?? "Save failed" });
      } else {
        setMessage({ kind: "ok", text: "Saved. Public page revalidated." });
        router.refresh();
      }
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 bg-white rounded-xl border border-gray-200 p-6">
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-[#09263f]">Page title</span>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            className="border border-gray-300 rounded-md h-10 px-3 outline-none focus:border-[#1de5b5]"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-[#09263f]">Meta title (SEO)</span>
          <input
            value={metaTitle}
            onChange={e => setMetaTitle(e.target.value)}
            className="border border-gray-300 rounded-md h-10 px-3 outline-none focus:border-[#1de5b5]"
          />
        </label>
      </section>
      <label className="flex flex-col gap-1.5 text-sm">
        <span className="font-medium text-[#09263f]">Meta description (SEO)</span>
        <textarea
          value={metaDesc}
          onChange={e => setMetaDesc(e.target.value)}
          rows={2}
          className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-[#1de5b5]"
        />
      </label>

      <hr className="border-gray-100" />

      <header className="flex items-center justify-between">
        <h2 className="font-semibold text-[#09263f]">Content blocks</h2>
        <div className="flex gap-2 text-xs">
          <button type="button" onClick={() => addEntry("string")} className="bg-[#1de5b5] text-[#09263f] rounded-full px-3 py-1.5 font-semibold hover:brightness-95">+ String</button>
          <button type="button" onClick={() => addEntry("list")} className="bg-[#1de5b5]/30 text-[#09263f] rounded-full px-3 py-1.5 font-semibold hover:brightness-95">+ List</button>
          <button type="button" onClick={() => addEntry("object")} className="bg-[#09263f] text-white rounded-full px-3 py-1.5 font-semibold hover:brightness-110">+ Object (label/url)</button>
        </div>
      </header>

      {entries.length === 0 ? (
        <p className="text-sm text-gray-500 py-8 text-center">No blocks yet — add one above.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {entries.map((entry, idx) => (
            <BlockRow
              key={idx}
              entry={entry}
              onChange={patch => updateEntry(idx, patch)}
              onRemove={() => removeEntry(idx)}
            />
          ))}
        </div>
      )}

      {message && (
        <p
          className={`text-sm rounded-md px-3 py-2 ${
            message.kind === "ok"
              ? "bg-green-50 border border-green-200 text-green-700"
              : "bg-red-50 border border-red-200 text-red-700"
          }`}
        >
          {message.text}
        </p>
      )}

      <div className="flex justify-end pt-2 border-t border-gray-100">
        <button
          type="submit"
          disabled={saving}
          className="bg-[#1de5b5] text-[#09263f] rounded-full px-6 py-2 font-semibold hover:brightness-95 transition disabled:opacity-50"
        >
          {saving ? "Saving…" : "Save page"}
        </button>
      </div>
    </form>
  );
}

function BlockRow({
  entry,
  onChange,
  onRemove,
}: {
  entry: Entry;
  onChange: (patch: Partial<Entry>) => void;
  onRemove: () => void;
}) {
  const kind = detectKind(entry.value);
  const isLong = typeof entry.value === "string" && entry.value.length > 80;

  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col gap-3 bg-gray-50/50">
      <div className="flex items-center gap-3">
        <input
          value={entry.key}
          onChange={e => onChange({ key: e.target.value })}
          placeholder="block key (e.g. hero.title.brand)"
          className="border border-gray-300 rounded-md h-9 px-2 text-xs flex-1 font-mono outline-none focus:border-[#1de5b5]"
        />
        <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">{kind}</span>
        <button type="button" onClick={onRemove} className="text-red-600 text-xs hover:underline">Remove</button>
      </div>

      {kind === "string" && (
        isLong ? (
          <textarea
            value={entry.value as string}
            onChange={e => onChange({ value: e.target.value })}
            rows={4}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#1de5b5]"
          />
        ) : (
          <input
            value={entry.value as string}
            onChange={e => onChange({ value: e.target.value })}
            className="border border-gray-300 rounded-md h-9 px-2 text-sm outline-none focus:border-[#1de5b5]"
          />
        )
      )}

      {kind === "list" && (
        <ListEditor
          values={entry.value as string[]}
          onChange={values => onChange({ value: values })}
        />
      )}

      {kind === "object" && (
        <ObjectEditor
          values={entry.value as Record<string, string>}
          onChange={values => onChange({ value: values })}
        />
      )}

      {kind === "json" && (
        <textarea
          value={JSON.stringify(entry.value, null, 2)}
          onChange={e => {
            try {
              onChange({ value: JSON.parse(e.target.value) });
            } catch {
              // keep raw — user is mid-edit
            }
          }}
          rows={5}
          className="border border-gray-300 rounded-md px-3 py-2 text-xs font-mono outline-none focus:border-[#1de5b5]"
        />
      )}
    </div>
  );
}

function ListEditor({ values, onChange }: { values: string[]; onChange: (v: string[]) => void }) {
  return (
    <div className="flex flex-col gap-2">
      {values.map((v, i) => (
        <div key={i} className="flex items-center gap-2">
          <input
            value={v}
            onChange={e => onChange(values.map((x, j) => (j === i ? e.target.value : x)))}
            className="border border-gray-300 rounded-md h-9 px-2 text-sm flex-1 outline-none focus:border-[#1de5b5]"
          />
          <button
            type="button"
            onClick={() => onChange(values.filter((_, j) => j !== i))}
            className="text-red-600 text-xs hover:underline"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...values, ""])}
        className="text-[#1de5b5] text-xs font-semibold self-start hover:underline"
      >
        + Add item
      </button>
    </div>
  );
}

function ObjectEditor({ values, onChange }: { values: Record<string, string>; onChange: (v: Record<string, string>) => void }) {
  const keys = Object.keys(values);
  return (
    <div className="flex flex-col gap-2">
      {keys.map(k => (
        <div key={k} className="grid grid-cols-[140px_1fr_60px] gap-2 items-center">
          <code className="text-xs text-gray-600">{k}</code>
          <input
            value={values[k] ?? ""}
            onChange={e => onChange({ ...values, [k]: e.target.value })}
            className="border border-gray-300 rounded-md h-9 px-2 text-sm outline-none focus:border-[#1de5b5]"
          />
          <button
            type="button"
            onClick={() => {
              const next = { ...values };
              delete next[k];
              onChange(next);
            }}
            className="text-red-600 text-xs hover:underline"
          >
            Remove
          </button>
        </div>
      ))}
      <NewKeyForm
        onAdd={(k, v) => onChange({ ...values, [k]: v })}
      />
    </div>
  );
}

function NewKeyForm({ onAdd }: { onAdd: (key: string, value: string) => void }) {
  const [k, setK] = useState("");
  const [v, setV] = useState("");
  return (
    <div className="grid grid-cols-[140px_1fr_60px] gap-2 items-center">
      <input
        value={k}
        onChange={e => setK(e.target.value)}
        placeholder="new key"
        className="border border-gray-300 rounded-md h-9 px-2 text-xs font-mono outline-none focus:border-[#1de5b5]"
      />
      <input
        value={v}
        onChange={e => setV(e.target.value)}
        placeholder="value"
        className="border border-gray-300 rounded-md h-9 px-2 text-sm outline-none focus:border-[#1de5b5]"
      />
      <button
        type="button"
        onClick={() => {
          if (!k.trim()) return;
          onAdd(k.trim(), v);
          setK("");
          setV("");
        }}
        className="text-[#1de5b5] text-xs font-semibold hover:underline"
      >
        + Add
      </button>
    </div>
  );
}
