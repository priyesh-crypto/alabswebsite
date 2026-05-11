"use client";

/**
 * Reusable list + create + edit + delete UI for a single resource.
 *
 * Design constraints:
 *  - Server component renders this with the initial rows (faster first paint).
 *  - All mutations go through fetch() to /api/admin/<resource>[/id]; on success
 *    we refresh the route via router.refresh() so the server component re-runs.
 *  - Forms are auto-generated from the `fields` prop. Keep field types narrow —
 *    string / textarea / number / boolean / select. Custom widgets aren't worth
 *    the complexity yet; if a resource needs them, write a bespoke page.
 */

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export type FieldDef =
  | { name: string; label: string; type: "text" | "url" | "email"; placeholder?: string; required?: boolean }
  | { name: string; label: string; type: "textarea"; rows?: number; required?: boolean }
  | { name: string; label: string; type: "number"; min?: number; max?: number; required?: boolean }
  | { name: string; label: string; type: "boolean" }
  | { name: string; label: string; type: "select"; options: { value: string; label: string }[]; required?: boolean };

export type ColumnDef<T> = {
  key: string;
  label: string;
  render?: (row: T) => React.ReactNode;
  width?: string;
};

type Props<T extends { id: string }> = {
  resource: string; // e.g. "categories" → /api/admin/categories
  rows: T[];
  columns: ColumnDef<T>[];
  fields: FieldDef[];
  emptyForm: Record<string, unknown>;
  toForm?: (row: T) => Record<string, unknown>;
  searchKeys?: (keyof T)[];
};

export default function CrudClient<T extends { id: string }>({
  resource,
  rows,
  columns,
  fields,
  emptyForm,
  toForm,
  searchKeys,
}: Props<T>) {
  const router = useRouter();
  const [editing, setEditing] = useState<T | null>(null);
  const [creating, setCreating] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = search && searchKeys
    ? rows.filter(r => searchKeys.some(k => String(r[k] ?? "").toLowerCase().includes(search.toLowerCase())))
    : rows;

  async function onDelete(id: string) {
    if (!confirm("Delete this row? This cannot be undone.")) return;
    const res = await fetch(`/api/admin/${resource}/${id}`, { method: "DELETE" });
    if (!res.ok) {
      const body = await res.json().catch(() => null);
      alert(body?.error?.message ?? "Delete failed");
      return;
    }
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Search + create */}
      <div className="flex items-center justify-between gap-4">
        <input
          type="search"
          placeholder="Search…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-gray-300 rounded-md h-10 px-3 text-sm w-72 outline-none focus:border-[#1de5b5]"
        />
        <button
          type="button"
          onClick={() => { setEditing(null); setCreating(true); }}
          className="bg-[#1de5b5] text-[#09263f] rounded-full px-4 py-2 text-sm font-semibold hover:brightness-95 transition"
        >
          + New
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs uppercase tracking-wider text-gray-500">
            <tr>
              {columns.map(c => (
                <th key={c.key} className="px-4 py-3 font-semibold" style={c.width ? { width: c.width } : undefined}>
                  {c.label}
                </th>
              ))}
              <th className="px-4 py-3 font-semibold w-32 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="px-4 py-8 text-center text-gray-500">
                  No rows.
                </td>
              </tr>
            ) : (
              filtered.map(row => (
                <tr key={row.id} className="border-t border-gray-100 hover:bg-gray-50/50">
                  {columns.map(c => (
                    <td key={c.key} className="px-4 py-3 align-top">
                      {c.render ? c.render(row) : String((row as Record<string, unknown>)[c.key] ?? "")}
                    </td>
                  ))}
                  <td className="px-4 py-3 text-right space-x-3">
                    <button
                      type="button"
                      onClick={() => { setCreating(false); setEditing(row); }}
                      className="text-[#1de5b5] font-semibold hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete(row.id)}
                      className="text-red-600 font-semibold hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Drawer */}
      {(creating || editing) && (
        <Drawer
          title={creating ? "New" : "Edit"}
          fields={fields}
          initial={editing ? (toForm ? toForm(editing) : (editing as unknown as Record<string, unknown>)) : emptyForm}
          onCancel={() => { setCreating(false); setEditing(null); }}
          onSubmit={async values => {
            const url = creating ? `/api/admin/${resource}` : `/api/admin/${resource}/${editing!.id}`;
            const method = creating ? "POST" : "PUT";
            const res = await fetch(url, {
              method,
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            });
            if (!res.ok) {
              const body = await res.json().catch(() => null);
              throw new Error(body?.error?.message ?? "Save failed");
            }
            setCreating(false);
            setEditing(null);
            router.refresh();
          }}
        />
      )}
    </div>
  );
}

function Drawer({
  title,
  fields,
  initial,
  onCancel,
  onSubmit,
}: {
  title: string;
  fields: FieldDef[];
  initial: Record<string, unknown>;
  onCancel: () => void;
  onSubmit: (values: Record<string, unknown>) => Promise<void>;
}) {
  const [values, setValues] = useState<Record<string, unknown>>(initial);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function setVal(name: string, v: unknown) {
    setValues(prev => ({ ...prev, [name]: v }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      await onSubmit(values);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-6" onClick={onCancel}>
      <form
        onSubmit={handleSubmit}
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <header className="px-6 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white">
          <h2 className="font-semibold text-[#09263f]">{title}</h2>
          <button type="button" onClick={onCancel} className="text-gray-400 hover:text-black text-xl">×</button>
        </header>

        <div className="p-6 flex flex-col gap-4">
          {fields.map(field => (
            <FieldInput key={field.name} field={field} value={values[field.name]} onChange={v => setVal(field.name, v)} />
          ))}

          {error && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">{error}</p>
          )}
        </div>

        <footer className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 sticky bottom-0 bg-white">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm rounded-full border border-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="bg-[#1de5b5] text-[#09263f] rounded-full px-6 py-2 text-sm font-semibold hover:brightness-95 transition disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save"}
          </button>
        </footer>
      </form>
    </div>
  );
}

function FieldInput({ field, value, onChange }: { field: FieldDef; value: unknown; onChange: (v: unknown) => void }) {
  const labelRow = (
    <span className="font-medium text-[#09263f] text-sm">
      {field.label}
      {"required" in field && field.required && <span className="text-red-500"> *</span>}
    </span>
  );

  if (field.type === "textarea") {
    return (
      <label className="flex flex-col gap-1.5">
        {labelRow}
        <textarea
          rows={field.rows ?? 4}
          value={String(value ?? "")}
          onChange={e => onChange(e.target.value)}
          required={field.required}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#1de5b5]"
        />
      </label>
    );
  }
  if (field.type === "boolean") {
    return (
      <label className="flex items-center gap-3 text-sm">
        <input type="checkbox" checked={!!value} onChange={e => onChange(e.target.checked)} />
        <span className="font-medium text-[#09263f]">{field.label}</span>
      </label>
    );
  }
  if (field.type === "number") {
    return (
      <label className="flex flex-col gap-1.5">
        {labelRow}
        <input
          type="number"
          value={(value as number | string | undefined) ?? ""}
          onChange={e => onChange(e.target.value === "" ? "" : Number(e.target.value))}
          min={field.min}
          max={field.max}
          required={field.required}
          className="border border-gray-300 rounded-md h-10 px-3 text-sm outline-none focus:border-[#1de5b5]"
        />
      </label>
    );
  }
  if (field.type === "select") {
    return (
      <label className="flex flex-col gap-1.5">
        {labelRow}
        <select
          value={String(value ?? "")}
          onChange={e => onChange(e.target.value)}
          required={field.required}
          className="border border-gray-300 rounded-md h-10 px-3 text-sm outline-none focus:border-[#1de5b5] bg-white"
        >
          <option value="">— select —</option>
          {field.options.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </label>
    );
  }
  return (
    <label className="flex flex-col gap-1.5">
      {labelRow}
      <input
        type={field.type}
        value={String(value ?? "")}
        onChange={e => onChange(e.target.value)}
        placeholder={"placeholder" in field ? field.placeholder : undefined}
        required={field.required}
        className="border border-gray-300 rounded-md h-10 px-3 text-sm outline-none focus:border-[#1de5b5]"
      />
    </label>
  );
}
