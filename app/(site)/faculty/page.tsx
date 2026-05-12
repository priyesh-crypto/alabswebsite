import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import StatsStrip from "@/components/shared/StatsStrip";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Our Faculty | AnalytixLabs",
  description:
    "We hire working data scientists, not full-time trainers. Meet the practitioners teaching our cohorts.",
};

const FACULTY_MEMBERS = [
  { name: "Sumeet Bansal", role: "Founder & Chief Mentor", exp: "20+ years", bio: "Ex-American Express, Bain Cap, Marketics. Led customer-analytics teams across BFSI and consumer-goods. Has personally taught 8,000+ practitioners.", expertise: ["Statistics", "Predictive Modeling", "Strategy"], tint: "bg-[#1de5b5]/10" },
  { name: "Dr. Nidhi Gupta", role: "Head of Data Science", exp: "15+ years", bio: "PhD in Statistics. Former Principal Data Scientist at ZS Associates. Specializes in pharmaceutical analytics and causal inference.", expertise: ["Causal Inference", "ML at scale", "Healthcare"], tint: "bg-yellow-50" },
  { name: "Karan Malhotra", role: "Lead — Generative AI", exp: "12+ years", bio: "Former Senior ML Engineer at Microsoft. Built RAG systems and fine-tuning pipelines used by Fortune 500 customers.", expertise: ["LLMs", "RAG", "MLOps"], tint: "bg-pink-50" },
  { name: "Priya Krishnan", role: "Head — Business Analytics", exp: "14+ years", bio: "Former AVP, Genpact. Specializes in supply-chain optimization and the link between BI dashboards and operating decisions.", expertise: ["BI", "SQL", "Decision Science"], tint: "bg-teal-50" },
  { name: "Arjun Saxena", role: "Senior Faculty — Python", exp: "10+ years", bio: "Ex-Flipkart. Maintains an internal teaching framework that has trained 4,000+ Python learners across our cohorts.", expertise: ["Python", "Pandas", "Backend"], tint: "bg-sky-50" },
  { name: "Meera Iyer", role: "Senior Faculty — Visualization", exp: "11+ years", bio: "Tableau Zen Master. Former lead BI analyst at Wipro. Mentors learners on stakeholder-grade dashboard storytelling.", expertise: ["Tableau", "Power BI", "Storytelling"], tint: "bg-green-50" },
  { name: "Rahul Deshmukh", role: "Faculty — Deep Learning", exp: "9+ years", bio: "Computer Vision lead at a healthcare AI startup. Has shipped 30+ models to production in radiology and ophthalmology.", expertise: ["CNNs", "PyTorch", "Computer Vision"], tint: "bg-yellow-50" },
  { name: "Anita Banerjee", role: "Faculty — Statistics", exp: "16+ years", bio: "Former Senior Statistician at Mu Sigma. Specializes in experimental design and explaining the math behind every model we teach.", expertise: ["Statistics", "A/B Testing", "Experimentation"], tint: "bg-[#1de5b5]/10" },
];

const FACULTY_VALUES = [
  { num: "50+", label: "Years of cumulative industry experience per cohort" },
  { num: "1:25", label: "Maximum faculty-to-student ratio in live classes" },
  { num: "100%", label: "Faculty currently practicing in industry" },
  { num: "0", label: "Generic 'trainers' on the roster — none, by design" },
];

const FACULTY_CRITERIA = [
  { title: "Currently practicing", body: "Every instructor must be actively shipping data work — not just teaching it. We re-verify every six months." },
  { title: "Senior-level only", body: "Minimum 8 years of post-graduate industry experience. Most have 12+. We don't compromise here, ever." },
  { title: "Vetted teaching demo", body: "Three-stage selection: technical screen, mock teaching, and a live cohort observation before they're cleared to teach." },
  { title: "Student-rated each cohort", body: "End-of-module ratings under 4.4/5 trigger an immediate review. We retire faculty who don't meet the bar." },
];

function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#09263f] mb-3">{title}</h2>
      {sub && <p className="text-[#475569] max-w-2xl mx-auto">{sub}</p>}
    </div>
  );
}

export default function FacultyPage() {
  return (
    <>
      <PageHero
        title="The faculty is the program."
        lede="We hire working data scientists, not full-time trainers. Every name on this page is shipping models in industry right now — and teaching you how they actually do it."
      >
        <div className="flex flex-wrap gap-4 mt-7">
          <a href="/contact" className="bg-[#09263f] text-white font-semibold px-6 py-3 rounded-full border border-white/30 hover:bg-[#07294a] transition">
            Talk to a Counselor
          </a>
          <a href="/why-us" className="border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition">
            Why Us
          </a>
        </div>
      </PageHero>

      <StatsStrip stats={FACULTY_VALUES} />

      {/* Selection criteria */}
      <section className="py-16 px-4">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader
            title="How we choose faculty."
            sub="A four-filter process that most candidates don't make it through."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FACULTY_CRITERIA.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#e8ecf0] p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#1de5b5] flex items-center justify-center font-bold text-[#09263f] text-lg mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-[17px] font-bold text-[#09263f] mb-2">{c.title}</h3>
                <p className="text-sm leading-snug text-[#09263f]/80">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty grid */}
      <section className="py-16 px-4 bg-[#f5f7fa]">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader
            title="Meet the people teaching you."
            sub="Eight of the senior faculty leading our active cohorts."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FACULTY_MEMBERS.map((m, i) => (
              <div
                key={i}
                className={`${m.tint} bg-white rounded-2xl border border-[#e8ecf0] shadow-sm overflow-hidden flex flex-col`}
              >
                <div className="h-48 bg-white/50 flex items-center justify-center text-5xl font-bold text-[#09263f] tracking-wider">
                  {m.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-[17px] font-bold text-[#09263f] mb-1">{m.name}</h3>
                  <div className="text-xs font-semibold text-[#09263f]/75 mb-1">{m.role}</div>
                  <div className="text-xs text-[#475569] mb-3">{m.exp} of industry experience</div>
                  <p className="text-xs leading-snug text-[#09263f]/90 mb-3 flex-1">{m.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {m.expertise.map((e, j) => (
                      <span key={j} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/70 text-[#09263f]">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-9 text-sm text-[#475569]">
            + 12 more faculty across course tracks
          </div>
        </div>
      </section>

      {/* Faculty promise */}
      <section className="py-16 px-4">
        <div className="max-w-[1100px] mx-auto bg-[#09263f] text-white rounded-3xl p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold text-[#1de5b5] tracking-widest uppercase mb-3">
              Our faculty promise
            </div>
            <h2 className="text-3xl font-bold leading-tight mb-4">
              If your instructor isn't currently shipping in industry, we'll switch you to one who is — at no cost.
            </h2>
            <p className="text-sm leading-relaxed opacity-85">
              Every student gets a faculty audit at the end of module one. If the practitioner experience
              isn't visible in how they teach, we move you to a different instructor and give you that
              module's recordings free. We've used this clause less than 1% of the time. We keep it because
              the bar matters more than the convenience.
            </p>
          </div>
          <div>
            <a
              href="/contact"
              className="block w-full text-center bg-[#1de5b5] text-[#09263f] font-semibold px-6 py-3 rounded-full hover:brightness-95 transition"
            >
              Talk to admissions
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
