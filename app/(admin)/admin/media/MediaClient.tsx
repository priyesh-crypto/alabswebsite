"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

type Asset = {
  id: string;
  url: string;
  mimeType: string;
  size: number;
  alt: string | null;
  createdAt: Date;
};

export default function MediaClient({ rows }: { rows: Asset[] }) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/uploads", { method: "POST", body: fd });
      const body = await res.json().catch(() => null);
      if (!res.ok) {
        setError(body?.error?.message ?? "Upload failed");
        return;
      }
      router.refresh();
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  async function onDelete(id: string) {
    if (!confirm("Delete this file? Other content using its URL will break.")) return;
    const res = await fetch(`/api/admin/uploads/${id}`, { method: "DELETE" });
    if (!res.ok) {
      const body = await res.json().catch(() => null);
      alert(body?.error?.message ?? "Delete failed");
      return;
    }
    router.refresh();
  }

  function copyUrl(url: string) {
    navigator.clipboard.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(null), 1500);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{rows.length} {rows.length === 1 ? "file" : "files"} (showing latest 200)</p>
        <label className="bg-[#1de5b5] text-[#09263f] rounded-full px-4 py-2 text-sm font-semibold hover:brightness-95 transition cursor-pointer">
          {uploading ? "Uploading…" : "+ Upload file"}
          <input ref={fileRef} type="file" onChange={onUpload} disabled={uploading} className="hidden" accept="image/*,application/pdf" />
        </label>
      </div>

      {error && <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">{error}</p>}

      {rows.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-500">
          No files yet. Click <strong>Upload file</strong> to add one.
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {rows.map(a => {
            const isImage = a.mimeType.startsWith("image/");
            return (
              <div key={a.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col">
                <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                  {isImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={a.url} alt={a.alt ?? ""} className="object-contain w-full h-full" />
                  ) : (
                    <div className="text-xs uppercase tracking-wider text-gray-400">{a.mimeType}</div>
                  )}
                </div>
                <div className="p-3 flex flex-col gap-2 text-xs">
                  <code className="text-[10px] text-gray-500 truncate" title={a.url}>{a.url}</code>
                  <div className="flex items-center justify-between text-gray-400 text-[11px]">
                    <span>{(a.size / 1024).toFixed(1)} KB</span>
                    <span>{new Date(a.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between gap-2 mt-1">
                    <button
                      type="button"
                      onClick={() => copyUrl(a.url)}
                      className="text-[#1de5b5] font-semibold hover:underline"
                    >
                      {copied === a.url ? "Copied!" : "Copy URL"}
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete(a.id)}
                      className="text-red-600 font-semibold hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
