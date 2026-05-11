/**
 * Admin CRUD helpers — wrap every /api/admin/* route handler with a single
 * pattern: auth → validate → run → revalidate → JSON response.
 *
 * Why a wrapper: every admin route needs the same five things, and forgetting
 * any of them is a silent security/cache bug. Centralizing keeps it boring.
 */
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { ZodError, type ZodType } from "zod";
import { handleError, forbidden, unauthorized, ok } from "@/lib/api";
import { readSession, type AdminClaims } from "@/lib/auth";

export type AdminContext = {
  session: AdminClaims;
  req: NextRequest;
};

/**
 * Run an async admin handler with auth + role check + error handling.
 * `requireRole`: if "ADMIN", only admins (not editors) can call. Default: "EDITOR" (anyone signed in).
 */
export async function withAdmin<T>(
  req: NextRequest,
  handler: (ctx: AdminContext) => Promise<T>,
  opts: { requireRole?: "ADMIN" | "EDITOR" } = {},
): Promise<NextResponse> {
  try {
    const session = await readSession();
    if (!session) return unauthorized();
    if (opts.requireRole === "ADMIN" && session.role !== "ADMIN") {
      return forbidden("Admin role required");
    }
    const result = await handler({ session, req });
    if (result instanceof NextResponse) return result;
    return ok(result);
  } catch (err) {
    return handleError(err);
  }
}

/**
 * Parse + Zod-validate a JSON body. Throws ZodError on bad input — handleError
 * downstream converts that to a 400 with field-level details.
 */
export async function parseBody<T>(req: NextRequest, schema: ZodType<T>): Promise<T> {
  const body = await req.json().catch(() => ({}));
  return schema.parse(body);
}

/**
 * Common list-query params. Kept tiny on purpose; route handlers compose them
 * into Prisma findMany args.
 */
export type ListQuery = {
  q?: string;
  page: number;
  pageSize: number;
  sortBy?: string;
  sortDir: "asc" | "desc";
};

export function parseListQuery(req: NextRequest): ListQuery {
  const sp = req.nextUrl.searchParams;
  const page = Math.max(1, Number(sp.get("page") ?? "1") || 1);
  const pageSize = Math.min(100, Math.max(1, Number(sp.get("pageSize") ?? "20") || 20));
  const sort = sp.get("sort"); // e.g. "createdAt:desc"
  const [sortBy, sortDir] = sort
    ? [sort.split(":")[0], (sort.split(":")[1] ?? "desc") as "asc" | "desc"]
    : [undefined, "desc" as const];
  return {
    q: sp.get("q") ?? undefined,
    page,
    pageSize,
    sortBy,
    sortDir,
  };
}

/**
 * Path(s) to revalidate on every admin write. Centralized so we can't forget.
 * Pass extra paths from the route handler as needed (e.g. /courses/[slug] → "/courses/data-science").
 */
const DEFAULT_REVALIDATE_PATHS = ["/", "/courses", "/about", "/contact", "/for-corporates"];

export function revalidatePublic(extra: string[] = []): void {
  const seen = new Set<string>();
  [...DEFAULT_REVALIDATE_PATHS, ...extra].forEach(p => {
    if (!seen.has(p)) {
      revalidatePath(p);
      seen.add(p);
    }
  });
}

/**
 * Helper to short-circuit a Zod error before it reaches the boundary, when
 * a route handler wants to enrich the message.
 */
export function isZodError(err: unknown): err is ZodError {
  return err instanceof ZodError;
}
