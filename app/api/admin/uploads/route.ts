import { NextRequest } from "next/server";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { prisma } from "@/lib/prisma";
import { badRequest, handleError, ok, unauthorized } from "@/lib/api";
import { readSession } from "@/lib/auth";

export const runtime = "nodejs";

const MAX_BYTES = 10 * 1024 * 1024; // 10mb per file
const ALLOWED_PREFIXES = ["image/", "application/pdf"];

export async function POST(req: NextRequest) {
  try {
    const claims = await readSession();
    if (!claims) return unauthorized();

    const form = await req.formData();
    const file = form.get("file");
    if (!(file instanceof File)) return badRequest("file field is required");
    if (file.size > MAX_BYTES) return badRequest("File exceeds 10mb limit");
    if (!ALLOWED_PREFIXES.some((p) => file.type.startsWith(p) || file.type === p)) {
      return badRequest(`Unsupported MIME type: ${file.type}`);
    }

    const driver = process.env.UPLOAD_DRIVER ?? "local";
    if (driver !== "local") {
      return badRequest("Only local uploads are wired in Phase 2; S3 lands later.");
    }

    const ext = path.extname(file.name) || guessExt(file.type);
    const id = crypto.randomBytes(12).toString("hex");
    const filename = `${id}${ext}`;
    const targetDir = path.resolve(process.env.UPLOAD_DIR ?? "./public/uploads");
    await mkdir(targetDir, { recursive: true });
    const targetPath = path.join(targetDir, filename);

    const buf = Buffer.from(await file.arrayBuffer());
    await writeFile(targetPath, buf);

    const publicUrl = `/uploads/${filename}`;
    const asset = await prisma.uploadedAsset.create({
      data: {
        url: publicUrl,
        mimeType: file.type,
        size: file.size,
        alt: typeof form.get("alt") === "string" ? (form.get("alt") as string) : null,
      },
    });

    return ok({ id: asset.id, url: asset.url }, { status: 201 });
  } catch (err) {
    return handleError(err);
  }
}

function guessExt(mime: string): string {
  if (mime === "image/png") return ".png";
  if (mime === "image/jpeg") return ".jpg";
  if (mime === "image/webp") return ".webp";
  if (mime === "image/svg+xml") return ".svg";
  if (mime === "image/gif") return ".gif";
  if (mime === "application/pdf") return ".pdf";
  return "";
}
