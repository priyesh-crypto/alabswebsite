"use client";

import { ReactNode } from "react";

type Props<T> = {
  label: string;
  items: T[];
  onChange: (items: T[]) => void;
  renderItem: (item: T, index: number, update: (updated: T) => void) => ReactNode;
  newItem: () => T;
  hint?: string;
  maxItems?: number;
};

export default function ArrayField<T>({
  label, items, onChange, renderItem, newItem, hint, maxItems,
}: Props<T>) {
  function update(index: number, updated: T) {
    const next = [...items];
    next[index] = updated;
    onChange(next);
  }

  function remove(index: number) {
    onChange(items.filter((_, i) => i !== index));
  }

  function add() {
    onChange([...items, newItem()]);
  }

  function moveUp(index: number) {
    if (index === 0) return;
    const next = [...items];
    [next[index - 1], next[index]] = [next[index], next[index - 1]];
    onChange(next);
  }

  function moveDown(index: number) {
    if (index === items.length - 1) return;
    const next = [...items];
    [next[index], next[index + 1]] = [next[index + 1], next[index]];
    onChange(next);
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold text-[#09263f] uppercase tracking-wide">{label}</label>

      {items.length === 0 && (
        <p className="text-xs text-gray-400 italic">No items yet.</p>
      )}

      {items.map((item, index) => (
        <div key={index} className="flex gap-2 items-start border border-gray-200 rounded-lg p-3 bg-gray-50/50">
          <div className="flex flex-col gap-1 mr-1 pt-1">
            <button
              type="button"
              onClick={() => moveUp(index)}
              disabled={index === 0}
              className="text-gray-400 hover:text-[#09263f] disabled:opacity-30 text-xs leading-none"
              title="Move up"
            >▲</button>
            <button
              type="button"
              onClick={() => moveDown(index)}
              disabled={index === items.length - 1}
              className="text-gray-400 hover:text-[#09263f] disabled:opacity-30 text-xs leading-none"
              title="Move down"
            >▼</button>
          </div>
          <div className="flex-1">
            {renderItem(item, index, updated => update(index, updated))}
          </div>
          <button
            type="button"
            onClick={() => remove(index)}
            className="text-red-400 hover:text-red-600 text-xs px-1.5 py-0.5 mt-1"
            title="Remove"
          >✕</button>
        </div>
      ))}

      {(!maxItems || items.length < maxItems) && (
        <button
          type="button"
          onClick={add}
          className="text-sm text-[#1de5b5] font-semibold hover:underline self-start"
        >
          + Add item
        </button>
      )}

      {hint && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  );
}
