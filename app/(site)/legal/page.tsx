"use client";

import { useState } from "react";
import PageHero from "@/components/shared/PageHero";

const PRIVACY_SECTIONS = [
  { id: "intro", title: "1. Introduction", body: "AnalytixLabs (\"we\", \"us\") respects your privacy. This policy explains what we collect, how we use it, and your rights under applicable Indian and international data-protection law." },
  { id: "collect", title: "2. Information we collect", body: "Account details (name, email, phone), enrolment information, payment metadata (we do not store card numbers), and usage analytics from our learning platform. We collect only what is needed to deliver the program." },
  { id: "use", title: "3. How we use information", body: "To deliver and improve our programs, communicate batch and placement updates, provide support, and meet legal obligations. We never sell personal data, ever." },
  { id: "share", title: "4. Sharing", body: "Limited sharing with payment processors, learning platforms, and verified hiring partners (only after you opt in to placement support). All vendors are bound by strict data-processing agreements." },
  { id: "rights", title: "5. Your rights", body: "Access, correction, deletion, portability, and the right to withdraw consent. Email privacy@analytixlabs.in and we respond within 14 days." },
  { id: "retention", title: "6. Retention", body: "We retain student records for 7 years after course completion (required for certifications and tax). Marketing data is purged 24 months after last engagement." },
  { id: "security", title: "7. Security", body: "Data encrypted in transit and at rest. SOC 2-aligned controls. Annual third-party security audits. We disclose any material breach within 72 hours." },
  { id: "cookies", title: "8. Cookies", body: "Strictly-necessary, performance and preference cookies. Marketing cookies require explicit opt-in. Manage preferences from the cookie banner at any time." },
];

const TERMS_SECTIONS = [
  { id: "agreement", title: "1. Agreement", body: "By enrolling in any AnalytixLabs program, you agree to these terms. The terms apply alongside the specific program enrolment letter you sign." },
  { id: "fees", title: "2. Fees and refunds", body: "Program fee is payable in full or via approved EMI. Refunds available within 7 days of cohort start, prorated against any sessions attended. After day 8, transfers to a future cohort are allowed; refunds are not." },
  { id: "ip", title: "3. Intellectual property", body: "All course materials, code, datasets and recordings are proprietary. You receive a non-transferable, lifetime license for personal use. Redistribution or resale is grounds for cohort dismissal without refund." },
  { id: "conduct", title: "4. Code of conduct", body: "Cohorts are professional environments. Harassment, plagiarism, and disrespectful behavior result in immediate removal. Capstone work that is not your own is treated as academic fraud." },
  { id: "placements", title: "5. Placement support", body: "We provide structured placement support but do not guarantee a job. Placement assistance is contingent on your meeting capstone, attendance, and mock-interview thresholds." },
  { id: "termination", title: "6. Termination", body: "We may terminate enrolment for non-payment, conduct violations, or fraud. You may withdraw at any time per the refund schedule above." },
  { id: "liability", title: "7. Limitation of liability", body: "Our total liability is capped at the program fee paid. We are not liable for indirect or consequential damages." },
  { id: "law", title: "8. Governing law", body: "These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of courts at Gurugram, Haryana." },
];

export default function LegalPage() {
  const [tab, setTab] = useState<"privacy" | "terms">("privacy");
  const sections = tab === "privacy" ? PRIVACY_SECTIONS : TERMS_SECTIONS;

  return (
    <>
      <PageHero
        title="Privacy & Terms."
        lede="Plain-English overview, then the specifics. Last updated 30 April 2026."
      />

      <section className="py-10 px-4 pb-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="flex gap-1 mb-6 bg-[#f5f7fa] rounded-xl p-1">
              <button
                onClick={() => setTab("privacy")}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition ${tab === "privacy" ? "bg-white text-[#09263f] shadow-sm" : "text-[#475569] hover:text-[#09263f]"}`}
              >
                Privacy
              </button>
              <button
                onClick={() => setTab("terms")}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition ${tab === "terms" ? "bg-white text-[#09263f] shadow-sm" : "text-[#475569] hover:text-[#09263f]"}`}
              >
                Terms
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm text-[#09263f]/80 px-3 py-2 rounded-lg font-medium hover:bg-[#f5f7fa] transition"
                >
                  {s.title}
                </a>
              ))}
            </nav>
            <div className="mt-8 p-4 bg-[#f5f7fa] rounded-xl">
              <div className="font-bold text-sm text-[#09263f] mb-1">Questions?</div>
              <div className="text-xs text-[#475569] leading-relaxed">
                privacy@analytixlabs.in for privacy.{" "}
                legal@analytixlabs.in for terms.
              </div>
            </div>
          </aside>

          {/* Body */}
          <div>
            <div className="bg-white border border-[#e8ecf0] rounded-2xl p-10">
              <h2 className="text-2xl font-bold text-[#09263f] mb-2">
                {tab === "privacy" ? "Privacy Policy" : "Terms of Service"}
              </h2>
              <div className="text-xs text-[#475569] mb-8">
                Effective: 30 April 2026 · Version 4.2
              </div>
              {sections.map((s) => (
                <section key={s.id} id={s.id} className="mb-7 scroll-mt-24">
                  <h3 className="text-lg font-bold text-[#09263f] mb-2">{s.title}</h3>
                  <p className="text-sm leading-[1.7] text-[#09263f]/88">{s.body}</p>
                </section>
              ))}
              <div className="mt-12 p-5 bg-[#1de5b5]/10 rounded-xl text-sm text-[#09263f] leading-relaxed">
                <strong>Plain-English summary:</strong> we collect what we need, never sell it, secure it well, and you can ask for your data or have it deleted at any time. Program fees are refundable in the first 7 days; after that we&apos;ll transfer you to a future cohort. We provide placement support — we don&apos;t guarantee jobs.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
