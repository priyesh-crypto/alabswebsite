"use client";

import { useState } from "react";

type Option = { value: string; label: string };

type Props = {
  label: string;
  value: string[];
  onChange: (v: string[]) => void;
  options: Option[];
  hint?: string;
};

export default function MultiSelectField({ label, value, onChange, options, hint }: Props) {
  const [open, setOpen] = useState(false);

  function toggle(v: string) {
    if (value.includes(v)) {
      onChange(value.filter(x => x !== v));
    } else {
      onChange([...value, v]);
    }
  }

  const selectedLabels = value
    .map(v => options.find(o => o.value === v)?.label ?? v)
    .join(", ");

  return (
    <div className="flex flex-col gap-1 relative">
      <label className="text-xs font-semibold text-[#09263f] uppercase tracking-wide">{label}</label>

      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="border border-gray-300 rounded-md h-9 px-3 text-sm text-left outline-none focus:border-[#1de5b5] bg-white"
      >
        {value.length === 0 ? (
          <span className="text-gray-400">Select…</span>
        ) : (
          <span className="truncate">{selectedLabels}</span>
        )}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
          {options.map(o => (
            <label key={o.value} className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer text-sm">
              <input
                type="checkbox"
                checked={value.includes(o.value)}
                onChange={() => toggle(o.value)}
                className="accent-[#1de5b5]"
              />
              {o.label}
            </label>
          ))}
          {options.length === 0 && (
            <p className="px-3 py-2 text-sm text-gray-400">No options available.</p>
          )}
        </div>
      )}

      {hint && <p className="text-xs text-gray-400">{hint}</p>}

      {open && (
        <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
      )}
    </div>
  );
}
