"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const VARIANTS: Record<string, { title: string; sub: string; next: string }> = {
  contact: {
    title: "Thanks — we got your message.",
    sub: "An admissions counselor will be in touch within one business day, usually faster.",
    next: "While you wait",
  },
  enroll: {
    title: "Welcome to the cohort.",
    sub: "Your seat is reserved. Check your inbox for the day-zero setup checklist and onboarding call link.",
    next: "Your next steps",
  },
  guest: {
    title: "Pitch received.",
    sub: "Our editor will read it and respond within 5 working days. Keep an eye on your inbox.",
    next: "While you wait",
  },
  newsletter: {
    title: "You're subscribed.",
    sub: "One good thing in your inbox each week — starting Monday.",
    next: "Worth reading",
  },
};

const NEXT_CARDS = [
  { tint: "bg-[#1de5b5]/10", title: "Read the placement record", body: "See where our recent grads landed and at what packages.", href: "/placements", cta: "View placements" },
  { tint: "bg-yellow-50", title: "Browse upcoming batches", body: "Live cohorts kick off every 3–4 weeks. Pick the one that fits your calendar.", href: "/batches", cta: "See batches" },
  { tint: "bg-pink-50", title: "Skim the free library", body: "Cheatsheets, articles, and a 92-page interview playbook — all free.", href: "/free-resources", cta: "Open library" },
];

function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#09263f] mb-3">{title}</h2>
      {sub && <p className="text-[#475569] max-w-2xl mx-auto">{sub}</p>}
    </div>
  );
}

function ThankYouContent() {
  const searchParams = useSearchParams();
  const variant = (searchParams.get("type") as keyof typeof VARIANTS) || "contact";
  const v = VARIANTS[variant] ?? VARIANTS.contact;

  return (
    <>
      {/* Hero section */}
      <section className="py-28 px-4 bg-[#f5f7fa] relative overflow-hidden">
        {/* Decorative dots */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #09263f 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 max-w-[720px] mx-auto text-center">
          <div
            className="w-24 h-24 rounded-full bg-[#1de5b5] inline-flex items-center justify-center mb-7"
            style={{ boxShadow: "0 12px 32px rgba(29,229,181,0.4)" }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="#09263F">
              <path d="M9 16.2l-3.5-3.5a1 1 0 0 0-1.4 1.4l4.2 4.2a1 1 0 0 0 1.4 0l10-10a1 1 0 0 0-1.4-1.4L9 16.2z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#09263f] mb-4 leading-tight">
            {v.title}
          </h1>
          <p className="text-lg text-[#09263f]/85 leading-relaxed">{v.sub}</p>
        </div>
      </section>

      {/* Next steps */}
      <section className="py-16 px-4">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader
            title={v.next}
            sub="Three things worth your time before our team replies."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {NEXT_CARDS.map((c, i) => (
              <div key={i} className={`${c.tint} bg-white rounded-2xl border border-[#e8ecf0] shadow-sm p-7`}>
                <h3 className="text-lg font-bold text-[#09263f] mb-2">{c.title}</h3>
                <p className="text-sm text-[#09263f]/85 leading-snug mb-4">{c.body}</p>
                <a
                  href={c.href}
                  className="bg-[#1de5b5] text-[#09263f] font-semibold px-5 py-2 rounded-full text-sm hover:brightness-95 transition"
                >
                  {c.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="pb-20 px-4">
        <div className="max-w-[720px] mx-auto text-center text-sm text-[#475569]">
          Wrong page?{" "}
          <a href="/" className="text-[#07b3e7] font-semibold hover:underline">
            Back to homepage
          </a>
        </div>
      </section>
    </>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="py-32 text-center text-[#475569]">Loading…</div>}>
      <ThankYouContent />
    </Suspense>
  );
}
