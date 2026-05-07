import { ok } from "@/lib/api";

export const runtime = "nodejs";

export async function GET() {
  return ok({ ok: true, ts: new Date().toISOString() });
}
