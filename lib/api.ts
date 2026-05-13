import { NextResponse } from "next/server";
import { ZodError } from "zod";

export type ApiError = { error: { code: string; message: string; details?: unknown } };

export function ok<T>(data: T, init?: ResponseInit): NextResponse<T> {
  return NextResponse.json(data, init);
}

export function withCache(init: ResponseInit = {}, seconds = 60): ResponseInit {
  return {
    ...init,
    headers: {
      ...init.headers,
      "Cache-Control": `public, s-maxage=${seconds}, stale-while-revalidate=${seconds * 2}`,
    },
  };
}

export function fail(
  status: number,
  code: string,
  message: string,
  details?: unknown,
): NextResponse<ApiError> {
  return NextResponse.json({ error: { code, message, details } }, { status });
}

export function badRequest(message: string, details?: unknown) {
  return fail(400, "BAD_REQUEST", message, details);
}

export function unauthorized(message = "Authentication required") {
  return fail(401, "UNAUTHORIZED", message);
}

export function forbidden(message = "Forbidden") {
  return fail(403, "FORBIDDEN", message);
}

export function notFound(message = "Not found") {
  return fail(404, "NOT_FOUND", message);
}

export function tooMany(message = "Too many requests") {
  return fail(429, "RATE_LIMITED", message);
}

export function serverError(err: unknown) {
  if (process.env.NODE_ENV !== "production") {
    console.error("[api] server error:", err);
  }
  return fail(500, "SERVER_ERROR", "Internal server error");
}

export function handleError(err: unknown): NextResponse<ApiError> {
  if (err instanceof ZodError) {
    return badRequest("Validation failed", err.issues);
  }
  if (err instanceof Error && err.message === "UNAUTHORIZED") {
    return unauthorized();
  }
  return serverError(err);
}
