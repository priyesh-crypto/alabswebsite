import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Offers & Scholarships | AnalytixLabs",
  description:
    "Honest offers — no fake countdowns. Early bird discounts, referral credits, women-in-tech scholarships, student discounts, bundles, and alumni reskill rates.",
};

const ACTIVE_OFFERS = [
  { tag: "EARLY BIRD", title: "Reserve 14 days early — save up to ₹15,000", body: "Lock your seat at least two weeks before any cohort starts and we knock 10–18% off the program fee. Stackable with referral credit.", expiry: "Rolling", cta: "Browse upcoming batches", href: "/batches", tint: "bg-[#1de5b5]/10", code: "EARLY15" },
  { tag: "REFERRAL", title: "Refer a friend, both get ₹5,000", body: "When someone you refer enrols, you each get ₹5,000 credited — to your fee, your alumni reskill, or transferred out. No cap on referrals.", expiry: "Always on", cta: "Get your referral link", href: "/contact", tint: "bg-yellow-50", code: "REFER5K" },
  { tag: "WOMEN IN TECH", title: "10% scholarship for women re-entering tech", body: "Open to women returning to data and engineering roles after a break of 12+ months. Application + 30-min interview required.", expiry: "30 Jun 2026", cta: "Apply for scholarship", href: "/contact", tint: "bg-pink-50", code: "WOMENTECH10" },
  { tag: "STUDENT", title: "20% off for full-time university students", body: "Verified students at any recognised college get a 20% education discount on Data Analyst, Python or SQL programs.", expiry: "Always on", cta: "Verify and enrol", href: "/contact", tint: "bg-teal-50", code: "STUDENT20" },
  { tag: "BUNDLE", title: "Pair Data Science 360 with Generative AI for ₹30,000 less", body: "When you sign up for both flagship programs in the same year, the second runs at near-cost. We've capped this at 25 enrolments per quarter.", expiry: "30 Sep 2026", cta: "See bundle details", href: "/contact", tint: "bg-sky-50", code: "BUNDLE30" },
  { tag: "ALUMNI", title: "Alumni reskill at 50% off", body: "Already a graduate? Take any new program at half price, lifetime. Just log in with your alumni email to apply automatically.", expiry: "Always on", cta: "Re-skill now", href: "/contact", tint: "bg-green-50", code: "ALUMNI50" },
];

const OFFER_RULES = [
  "Offers cannot be combined unless explicitly marked as stackable.",
  "Discounts apply to program fee only — exam, certification, and partner-platform fees are excluded.",
  "Refunds, where applicable, are processed at the post-discount fee value.",
  "AnalytixLabs reserves the right to amend or withdraw any offer with 7 days' notice. Active enrolments are honored at the price they signed up at.",
];

function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#09263f] mb-3">{title}</h2>
      {sub && <p className="text-[#475569] max-w-2xl mx-auto">{sub}</p>}
    </div>
  );
}

export default function OffersPage() {
  return (
    <>
      <PageHero
        title="Honest offers. No fake countdowns."
        lede="We run six standing offers all year and never invent urgency. If a price drops, you'll see it here. If a deadline passes, the offer is closed — not 'extended' for the seventh week running."
      />

      {/* Offers grid */}
      <section className="py-16 px-4">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          {ACTIVE_OFFERS.map((o, i) => (
            <div key={i} className={`${o.tint} bg-white rounded-2xl border border-[#e8ecf0] shadow-sm p-8 relative`}>
              <div className="flex justify-between items-start mb-4 gap-4">
                <span className="text-[10px] font-bold px-3 py-1.5 bg-[#09263f] text-white rounded-full tracking-wider">
                  {o.tag}
                </span>
                <span className="text-xs font-semibold text-[#09263f]/70">
                  Expires: {o.expiry}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#09263f] leading-snug mb-3">{o.title}</h3>
              <p className="text-sm text-[#09263f]/88 leading-relaxed mb-5">{o.body}</p>
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="font-mono text-sm font-bold text-[#09263f] bg-white/70 px-3.5 py-2 rounded-lg border border-dashed border-[#09263f]/20 tracking-wider">
                  CODE: {o.code}
                </div>
                <a
                  href={o.href}
                  className="bg-[#1de5b5] text-[#09263f] font-semibold px-5 py-2 rounded-full text-sm hover:brightness-95 transition"
                >
                  {o.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How offers work */}
      <section className="py-16 px-4 bg-[#f5f7fa]">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader
            title="How our offers actually work."
            sub="Three short rules — no surprises at checkout."
          />
          <div className="max-w-[900px] mx-auto">
            {OFFER_RULES.map((r, i) => (
              <div
                key={i}
                className={`flex gap-4 py-5 ${i < OFFER_RULES.length - 1 ? "border-b border-[#09263f]/8" : ""}`}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1de5b5] text-[#09263f] flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-sm text-[#09263f] leading-relaxed pt-1">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talk row */}
      <section className="py-16 px-4 pb-24">
        <div className="max-w-[1100px] mx-auto bg-[#09263f] text-white rounded-3xl p-12 grid grid-cols-1 lg:grid-cols-[1.4fr_auto] gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-3">Eligible for more than one offer?</h2>
            <p className="text-sm leading-relaxed opacity-88">
              Talk to a counselor — we&apos;ll walk through what stacks, what doesn&apos;t, and the cleanest combination for your situation. Five-minute call.
            </p>
          </div>
          <a
            href="/contact"
            className="bg-[#1de5b5] text-[#09263f] font-semibold px-6 py-3 rounded-full hover:brightness-95 transition whitespace-nowrap"
          >
            Talk to admissions
          </a>
        </div>
      </section>
    </>
  );
}
