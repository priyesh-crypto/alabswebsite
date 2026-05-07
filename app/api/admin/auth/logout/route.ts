import { handleError, ok } from "@/lib/api";
import { clearSessionCookie } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST() {
  try {
    await clearSessionCookie();
    return ok({ ok: true });
  } catch (err) {
    return handleError(err);
  }
}
