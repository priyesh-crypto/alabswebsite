import { handleError, ok, unauthorized } from "@/lib/api";
import { readSession } from "@/lib/auth";

export const runtime = "nodejs";

export async function GET() {
  try {
    const claims = await readSession();
    if (!claims) return unauthorized();
    return ok({
      user: {
        id: claims.sub,
        email: claims.email,
        name: claims.name,
        role: claims.role,
      },
    });
  } catch (err) {
    return handleError(err);
  }
}
