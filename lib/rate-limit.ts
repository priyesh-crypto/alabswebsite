// Tiny in-memory token-bucket rate limiter. Resets on server restart —
// fine for dev and low-traffic single-instance prod. Swap for Redis or
// Upstash when we go horizontal.

type Bucket = { tokens: number; resetAt: number };
const buckets = new Map<string, Bucket>();

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number,
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const existing = buckets.get(key);
  if (!existing || existing.resetAt <= now) {
    const fresh: Bucket = { tokens: limit - 1, resetAt: now + windowMs };
    buckets.set(key, fresh);
    return { allowed: true, remaining: fresh.tokens, resetAt: fresh.resetAt };
  }
  if (existing.tokens <= 0) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }
  existing.tokens -= 1;
  return { allowed: true, remaining: existing.tokens, resetAt: existing.resetAt };
}

export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
}
