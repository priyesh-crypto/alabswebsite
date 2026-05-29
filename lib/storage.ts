/**
 * File storage abstraction for admin uploads.
 *
 * Driver is chosen by UPLOAD_DRIVER:
 *   - "local"    → writes to UPLOAD_DIR (./public/uploads), served at /uploads/*.
 *                  Fine for local dev; NOT suitable for serverless (Vercel) where
 *                  the filesystem is ephemeral/read-only.
 *   - "supabase" → uploads to a Supabase Storage bucket and returns its public URL.
 *
 * Both expose the same uploadFile()/deleteFile() so the route handlers stay simple.
 */
import { mkdir, writeFile, unlink } from "node:fs/promises";
import path from "node:path";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type StoredFile = { url: string };

const driver = (): string => process.env.UPLOAD_DRIVER ?? "local";

// ── Supabase client (lazy, server-only, service-role key) ───────────────────
let _sb: SupabaseClient | null = null;
function supabase(): SupabaseClient {
  if (_sb) return _sb;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Supabase storage requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY");
  }
  _sb = createClient(url, key, { auth: { persistSession: false } });
  return _sb;
}
const bucket = (): string => process.env.SUPABASE_STORAGE_BUCKET ?? "uploads";

export async function uploadFile(opts: {
  buffer: Buffer;
  filename: string; // e.g. "ab12cd34.png"
  contentType: string;
}): Promise<StoredFile> {
  const { buffer, filename, contentType } = opts;

  if (driver() === "supabase") {
    // File sits at the bucket root → public URL ends in /<bucket>/<filename>.
    const objectPath = filename;
    const sb = supabase();
    const { error } = await sb.storage.from(bucket()).upload(objectPath, buffer, {
      contentType,
      upsert: false,
    });
    if (error) throw new Error(`Supabase upload failed: ${error.message}`);
    const { data } = sb.storage.from(bucket()).getPublicUrl(objectPath);
    return { url: data.publicUrl };
  }

  // local
  const targetDir = path.resolve(process.env.UPLOAD_DIR ?? "./public/uploads");
  await mkdir(targetDir, { recursive: true });
  await writeFile(path.join(targetDir, filename), buffer);
  return { url: `/uploads/${filename}` };
}

export async function deleteFile(url: string): Promise<void> {
  if (driver() === "supabase") {
    // Public URL: .../storage/v1/object/public/<bucket>/<objectPath>
    const marker = `/public/${bucket()}/`;
    const idx = url.indexOf(marker);
    if (idx === -1) return; // not a managed object
    const objectPath = url.slice(idx + marker.length);
    await supabase().storage.from(bucket()).remove([objectPath]).catch(() => undefined);
    return;
  }

  // local — best-effort unlink
  if (url.startsWith("/uploads/")) {
    const filename = url.replace(/^\/uploads\//, "");
    const filePath = path.resolve(process.env.UPLOAD_DIR ?? "./public/uploads", filename);
    await unlink(filePath).catch(() => undefined);
  }
}
