import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import StatsStrip from "@/components/shared/StatsStrip";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Why Us | AnalytixLabs",
  description:
    "15,000+ learners chose AnalytixLabs. Industry-aligned curriculum, practitioner-led faculty, and placement-first design that actually gets you hired.",
};

const WHY_PILLARS = [
  {
    icon: "🎯",
    title: "Industry-Aligned Curriculum",
    body: "Every course is built and reviewed quarterly with senior practitioners from Fortune 500 analytics teams so what you learn matches what employers actually use.",
    tint: "bg-[#1de5b5]/10",
  },
  {
    icon: "👨‍🏫",
    title: "Practitioner-Led Faculty",
    body: "We don't hire trainers — we hire working data scientists. Every instructor has shipped models that move real business KPIs.",
    tint: "bg-yellow-50",
  },
  {
    icon: "💼",
    title: "Placement-First Design",
    body: "From day one, every assignment is graded for interview readiness. Mock interviews, capstone reviews, and a dedicated placement cell run year-round.",
    tint: "bg-pink-50",
  },
  {
    icon: "🧪",
    title: "10+ Industry Capstones",
    body: "Work on real datasets from BFSI, e-commerce, healthcare and supply chain. Capstones are reviewed by industry mentors, not graders.",
    tint: "bg-teal-50",
  },
  {
    icon: "🌐",
    title: "Hybrid by Design",
    body: "Switch between live online, classroom, or self-paced — we re-issue materials so you never lose continuity if your schedule changes.",
    tint: "bg-sky-50",
  },
  {
    icon: "♾️",
    title: "Lifetime Access",
    body: "Class recordings, updated content, and alumni Slack stay with you forever. Re-skill at no cost when the field shifts.",
    tint: "bg-green-50",
  },
];

const WHY_OUTCOMES = [
  { num: "15,000+", label: "Learners trained since 2011" },
  { num: "94%", label: "Placement-track conversion" },
  { num: "₹13.4L", label: "Average post-program salary" },
  { num: "30+", label: "Countries of student base" },
];

const WHY_COMPARE = [
  { feature: "Curriculum updates", us: "Quarterly, with industry advisors", others: "Once a year or less" },
  { feature: "Instructors", us: "Senior working practitioners", others: "Full-time trainers, mixed experience" },
  { feature: "Capstone projects", us: "10+ across BFSI, retail, healthcare", others: "1–2 toy datasets" },
  { feature: "Placement support", us: "Until placed, with mock loops", others: "Resume help only" },
  { feature: "Class size", us: "Capped at 25 for live cohorts", others: "100+ webinars" },
  { feature: "Alumni access", us: "Lifetime Slack + updated content", others: "Course window only" },
];

const WHY_PARTNERS = [
  "Microsoft", "IBM", "Accenture", "Deloitte", "TCS", "EY", "Genpact",
  "Wipro", "Capgemini", "ZS Associates", "Mu Sigma", "Fractal",
];

const WHY_HOW = [
  { num: "01", title: "Diagnose where you are", body: "30-minute consult with a counselor to map your background, role goals, and timeline. No generic syllabus pitch." },
  { num: "02", title: "Choose your learning mode", body: "Pick live online, weekend classroom, or self-paced. Switch any time — we re-cohort you with no loss of credit." },
  { num: "03", title: "Build through capstones", body: "Every module ends in a graded project that is reviewed by an industry mentor, then added to your portfolio." },
  { num: "04", title: "Land the role", body: "Mock interview loops with hiring managers, resume reviews, and direct intros to our 50+ partner companies until you sign an offer." },
];

const WHY_TESTIMONIALS = [
  { name: "Riya Mehta", role: "Senior Analyst, Flipkart", body: "What set AnalytixLabs apart was the depth — every concept came with a real business problem. I went into interviews with stories, not just notes." },
  { name: "Karthik N.", role: "Data Scientist, Paytm", body: "I switched mid-cohort from weekends to live online when my job changed. They re-issued every recording and the placement cell didn't miss a beat." },
  { name: "Anisha Roy", role: "BI Lead, Genpact", body: "The lifetime access is the underrated part. I've come back twice to reskill on LLMs and Generative AI without paying again." },
];

const AVATAR_COLORS = ["bg-[#1de5b5]/20", "bg-pink-100", "bg-yellow-100"];

function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#09263f] mb-3">{title}</h2>
      {sub && <p className="text-[#475569] max-w-2xl mx-auto">{sub}</p>}
    </div>
  );
}

function Tick() {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" className="flex-shrink-0">
      <circle cx="9" cy="9" r="8" fill="#1de5b5" />
      <path d="M5 9l3 3 5-5" stroke="#09263f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        title="Why 15,000+ learners chose AnalytixLabs to build their analytics career."
        lede="We're not the cheapest. We're not the loudest. We are the only program built end-to-end around one question: will you get the role you came here for?"
      >
        <div className="flex flex-wrap gap-4 mt-7">
          <a href="/contact" className="bg-[#09263f] text-white font-semibold px-6 py-3 rounded-full border border-white/30 hover:bg-[#07294a] transition">
            Talk to a Counselor
          </a>
          <a href="/courses" className="border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition">
            Browse Courses
          </a>
        </div>
      </PageHero>

      <StatsStrip stats={WHY_OUTCOMES} />

      {/* Pillars */}
      <section className="py-16 px-4">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader
            title="Six things we won't compromise on."
            sub="Everything else is negotiable. These six are the program."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_PILLARS.map((p, i) => (
              <div
                key={i}
                className={`${p.tint} bg-white rounded-2xl shadow-sm p-6 border border-[#e8ecf0]`}
                style={{ minHeight: 220 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl mb-4 shadow-sm">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-[#09263f] mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed text-[#09263f]/85">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-4 bg-[#f5f7fa]">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader
            title="The honest comparison."
            sub="What you get with us vs. typical analytics programs."
          />
          <div className="max-w-[1100px] mx-auto bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="grid bg-[#09263f] text-white px-7 py-4 font-bold text-sm gap-4" style={{ gridTemplateColumns: "1.2fr 1.5fr 1.2fr" }}>
              <div></div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1de5b5] inline-block" />
                AnalytixLabs
              </div>
              <div className="opacity-70">Typical institute</div>
            </div>
            {WHY_COMPARE.map((row, i) => (
              <div
                key={i}
                className={`grid px-7 py-4 items-center gap-4 text-sm ${i < WHY_COMPARE.length - 1 ? "border-b border-[#09263f]/8" : ""}`}
                style={{ gridTemplateColumns: "1.2fr 1.5fr 1.2fr" }}
              >
                <div className="font-semibold text-[#09263f]">{row.feature}</div>
                <div className="flex items-center gap-2 text-[#09263f] font-semibold">
                  <Tick />{row.us}
                </div>
                <div className="text-[#475569]">{row.others}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader
            title="How a learner moves through the program."
            sub="Four stages. Each one designed to remove a specific failure mode."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_HOW.map((h, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-[#1de5b5] leading-none opacity-40 mb-2">{h.num}</div>
                <h3 className="text-lg font-bold text-[#09263f] mb-2">{h.title}</h3>
                <p className="text-sm leading-snug text-[#09263f]/80">{h.body}</p>
                {i < WHY_HOW.length - 1 && (
                  <div className="hidden lg:block absolute right-[-1.75rem] top-7 text-2xl font-light text-[#09263f]/30">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring partners */}
      <section className="py-16 px-4 bg-[#f5f7fa]">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader
            title="Where our graduates work."
            sub="50+ hiring partners, from product unicorns to global consulting."
          />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-[1100px] mx-auto">
            {WHY_PARTNERS.map((p, i) => (
              <div
                key={i}
                className="h-20 bg-white rounded-xl flex items-center justify-center text-sm font-bold text-[#09263f] shadow-sm"
              >
                {p}
              </div>
            ))}
          </div>
          <div className="text-center mt-7">
            <a
              href="/placements"
              className="bg-[#1de5b5] text-[#09263f] font-semibold px-6 py-3 rounded-full hover:brightness-95 transition"
            >
              See full placement record
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader title="In their words." sub="No edits. No marketing polish." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-6 border border-[#e8ecf0]">
                <div className="mb-4 text-[#1de5b5] text-4xl font-bold leading-none">&ldquo;</div>
                <p className="text-sm leading-relaxed text-[#09263f] mb-6 min-h-[130px]">{t.body}</p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full ${AVATAR_COLORS[i]} flex items-center justify-center font-bold text-[#09263f] text-base`}
                  >
                    {t.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#09263f]">{t.name}</div>
                    <div className="text-xs text-[#475569]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
