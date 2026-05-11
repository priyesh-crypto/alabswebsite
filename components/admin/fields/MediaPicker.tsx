"use client";

import { useState, useRef } from "react";

export type MediaValue = { url: string; alt: string };

type Props = {
  label: string;
  value: MediaValue;
  onChange: (v: MediaValue) => void;
  hint?: string;
};

export default function MediaPicker({ label, value, onChange, hint }: Props) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    setError(null);
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/uploads", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Upload failed");
      const { url } = await res.json() as { url: string };
      onChange({ url, alt: value.alt });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-[#09263f] uppercase tracking-wide">{label}</label>

      {value.url ? (
        <div className="relative w-40 h-24 rounded border border-gray-200 overflow-hidden group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value.url} alt={value.alt} className="w-full h-full object-cover" />
          <button
            type="button"
            onClick={() => onChange({ url: "", alt: "" })}
            className="absolute top-1 right-1 bg-black/50 text-white rounded text-xs px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition"
          >
            Remove
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="w-40 h-24 border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center text-gray-400 text-xs hover:border-[#1de5b5] hover:text-[#09263f] transition"
        >
          {uploading ? "Uploading…" : "+ Upload image"}
        </button>
      )}

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={e => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
          e.target.value = "";
        }}
      />

      <input
        type="text"
        value={value.alt}
        onChange={e => onChange({ ...value, alt: e.target.value })}
        placeholder="Alt text"
        className="border border-gray-300 rounded-md h-8 px-3 text-xs outline-none focus:border-[#1de5b5]"
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  );
}
