/**
 * Admin login. Lives in a separate route group so it does NOT inherit the
 * sidebar shell from `app/(admin)/admin/layout.tsx`.
 *
 * Submits to the existing `POST /api/admin/auth/login` route, which sets the
 * httpOnly `alabs_admin` cookie. On success, the client navigates to the
 * `?from=` redirect path captured by middleware (or /admin by default).
 */
"use client";

import { useState, type FormEvent, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function AdminLoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const from = params.get("from") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setError(body?.error?.message ?? "Login failed");
        return;
      }
      router.replace(from);
      router.refresh();
    } catch {
      setError("Network error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f4fafa] flex items-center justify-center p-6">
      <form
        onSubmit={onSubmit}
        className="bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] p-10 w-full max-w-md flex flex-col gap-5"
      >
        <header className="flex flex-col gap-1">
          <h1 className="text-xl font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f]">
            AnalytixLabs <span className="text-[#1de5b5]">Admin</span>
          </h1>
          <p className="text-sm text-gray-500">Sign in to manage site content.</p>
        </header>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-[#09263f]">Email</span>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="email"
            autoFocus
            className="border border-gray-300 rounded-lg h-11 px-3 text-sm outline-none focus:border-[#1de5b5]"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-[#09263f]">Password</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="border border-gray-300 rounded-lg h-11 px-3 text-sm outline-none focus:border-[#1de5b5]"
          />
        </label>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">{error}</p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="bg-[#1de5b5] text-[#09263f] rounded-full h-11 font-semibold hover:brightness-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <AdminLoginForm />
    </Suspense>
  );
}
