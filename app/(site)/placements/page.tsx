import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import StatsStrip from "@/components/shared/StatsStrip";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Placements | AnalytixLabs",
  description:
    "94% placement-track conversion. ₹13.4L average salary. 50+ hiring partners. See the unvarnished record from our last two years.",
};

const PLACEMENT_STATS = [
  { num: "94%", label: "Placement-track conversion" },
  { num: "₹13.4L", label: "Average post-program salary" },
  { num: "₹38L", label: "Highest CTC offered (2025)" },
  { num: "50+", label: "Active hiring partners" },
];

const RECENT_PLACEMENTS = [
  { name: "Ananya Singh", role: "Data Scientist", company: "Flipkart", before: "Mech Engineer", program: "Data Science 360", ctc: "₹22L", year: "2026" },
  { name: "Rajat Kumar", role: "ML Engineer", company: "Razorpay", before: "Backend Dev", program: "Generative AI", ctc: "₹28L", year: "2026" },
  { name: "Priya Sharma", role: "BI Lead", company: "Genpact", before: "Ops Analyst", program: "Business Analytics", ctc: "₹18L", year: "2026" },
  { name: "Karan Mehta", role: "Senior Analyst", company: "Swiggy", before: "Consultant", program: "Data Analyst Cert.", ctc: "₹16L", year: "2026" },
  { name: "Sara Khan", role: "Data Scientist", company: "Microsoft", before: "Researcher", program: "Data Science 360", ctc: "₹32L", year: "2025" },
  { name: "Vivek Reddy", role: "Analytics Manager", company: "Deloitte", before: "Audit", program: "Data Science 360", ctc: "₹24L", year: "2025" },
  { name: "Tara Iyer", role: "ML Scientist", company: "CRED", before: "MS Statistics", program: "Machine Learning", ctc: "₹26L", year: "2025" },
  { name: "Aman Gupta", role: "Senior DS", company: "PhonePe", before: "Software Eng", program: "Data Science 360", ctc: "₹34L", year: "2025" },
];

const HIRING_PARTNERS = [
  "Flipkart", "Razorpay", "Swiggy", "Genpact", "Deloitte", "Microsoft", "CRED", "PhonePe",
  "Accenture", "TCS", "EY", "Wipro", "Capgemini", "ZS Associates", "Mu Sigma", "Fractal",
  "Paytm", "BCG", "McKinsey", "PwC", "KPMG", "IBM", "Cognizant", "Infosys",
];

const PLACEMENT_PROCESS = [
  { num: "01", title: "Profile build-out", body: "Resume tear-down, LinkedIn rewrite, GitHub portfolio review. Done in week 8 of every cohort." },
  { num: "02", title: "Mock interview loops", body: "Three rounds with hiring managers from partner companies. Every loop is video-reviewed with you." },
  { num: "03", title: "Direct intros", body: "We don't do generic 'job boards'. Your placement counselor pitches you to specific roles by hand." },
  { num: "04", title: "Until placed", body: "Support continues until you sign an offer. No 6-month cutoff." },
];

const AVATAR_TINTS = ["bg-[#1de5b5]/20", "bg-yellow-100", "bg-pink-100", "bg-teal-100"];

function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#09263f] mb-3">{title}</h2>
      {sub && <p className="text-[#475569] max-w-2xl mx-auto">{sub}</p>}
    </div>
  );
}

export default function PlacementsPage() {
  return (
    <>
      <PageHero
        title="Placements aren't a feature. They're the point."
        lede="We measure success by where you land — not how many people enrolled. Here's the unvarnished record from the last two years, plus how the placement engine actually works."
      >
        <div className="flex flex-wrap gap-4 mt-7">
          <a href="/contact" className="bg-[#09263f] text-white font-semibold px-6 py-3 rounded-full border border-white/30 hover:bg-[#07294a] transition">
            Talk to placements
          </a>
          <a href="/reviews" className="border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition">
            Read student reviews
          </a>
        </div>
      </PageHero>

      <StatsStrip stats={PLACEMENT_STATS} />

      {/* Recent placements table */}
      <section className="py-16 px-4">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader
            title="A snapshot of recent placements."
            sub="Eight from the last 12 months. We can share the full ledger on request."
          />
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#09263f]/6">
            {/* Header row */}
            <div className="hidden md:grid bg-[#09263f] text-white px-7 py-4 text-xs font-bold tracking-wider uppercase gap-4"
              style={{ gridTemplateColumns: "1.4fr 1.2fr 1.2fr 1.2fr 1.2fr 0.8fr" }}>
              <div>Student</div>
              <div>Hired as</div>
              <div>Company</div>
              <div>Came from</div>
              <div>Program</div>
              <div className="text-right">CTC</div>
            </div>
            {RECENT_PLACEMENTS.map((p, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-[1.4fr_1.2fr_1.2fr_1.2fr_1.2fr_0.8fr] grid-cols-1 px-7 py-4 items-center gap-4 text-sm ${i < RECENT_PLACEMENTS.length - 1 ? "border-b border-[#09263f]/8" : ""}`}
              >
                <div className="flex gap-2.5 items-center">
                  <span
                    className={`w-9 h-9 rounded-full ${AVATAR_TINTS[i % 4]} flex items-center justify-center font-bold text-[#09263f] text-xs flex-shrink-0`}
                  >
                    {p.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                  </span>
                  <div>
                    <div className="font-bold text-[#09263f]">{p.name}</div>
                    <div className="text-xs text-[#475569]">{p.year}</div>
                  </div>
                </div>
                <div className="font-semibold text-[#09263f]">{p.role}</div>
                <div className="font-bold text-[#09263f]">{p.company}</div>
                <div className="text-[#475569]">{p.before}</div>
                <div className="text-[#09263f]">{p.program}</div>
                <div className="md:text-right font-bold text-[#1de5b5] text-base">{p.ctc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How placements work */}
      <section className="py-16 px-4 bg-[#f5f7fa]">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader
            title="How the placement engine runs."
            sub="Four phases. None of them are optional."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PLACEMENT_PROCESS.map((h, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#e8ecf0] shadow-sm p-6">
                <div className="text-5xl font-bold text-[#1de5b5] leading-none mb-2">{h.num}</div>
                <h3 className="text-[17px] font-bold text-[#09263f] mb-2">{h.title}</h3>
                <p className="text-sm leading-snug text-[#09263f]/80">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring partners */}
      <section className="py-16 px-4">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader title="Where our graduates land." />
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
            {HIRING_PARTNERS.map((p, i) => (
              <div
                key={i}
                className="h-[70px] bg-white rounded-xl flex items-center justify-center text-xs font-bold text-[#09263f] shadow-sm text-center px-1.5"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
