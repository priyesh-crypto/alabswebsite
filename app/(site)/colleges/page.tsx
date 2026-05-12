import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import StatsStrip from "@/components/shared/StatsStrip";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Colleges & Universities | AnalytixLabs",
  description:
    "AnalytixLabs partners with 200+ institutions to bridge the curriculum-to-industry gap — faculty development, student bootcamps, curriculum co-design, and hackathons.",
};

const COLLEGE_PROGRAMS = [
  { name: "Faculty Development Program", duration: "5 days", learners: "100+ FDPs delivered", body: "An immersive workshop for college faculty in CS, Stats and Math departments to teach updated curriculum on Python, ML and Generative AI.", tint: "bg-[#1de5b5]/10" },
  { name: "Student Bootcamp — Data Skills", duration: "8 weeks", learners: "30,000+ students", body: "Industry-graded bootcamp delivered on-campus or live online. Covers Python, SQL, statistics and a capstone reviewed by our faculty.", tint: "bg-yellow-50" },
  { name: "Curriculum Co-design", duration: "Ongoing", learners: "30+ universities", body: "We sit with your CS / Statistics / MBA leadership and design a year-long elective with case studies and assessments.", tint: "bg-pink-50" },
  { name: "Hackathon-as-a-Service", duration: "1–2 weeks", learners: "12,000+ participants", body: "End-to-end hackathon hosting: problem statements from real industry data, mentor pool, judging panel, prize and certificate logistics.", tint: "bg-teal-50" },
];

const COLLEGE_PARTNERS = [
  "IIT Madras", "IIT Roorkee", "IIM Indore", "BITS Pilani", "VIT Vellore",
  "SRM University", "Manipal", "Amity", "DTU", "NSUT",
  "Christ University", "IIIT Bangalore",
];

const COLLEGE_OUTCOMES = [
  { num: "200+", label: "Institutions partnered" },
  { num: "30,000+", label: "Students trained" },
  { num: "94%", label: "Faculty satisfaction" },
  { num: "12yr", label: "Running since 2014" },
];

const KICKOFF_STEPS = [
  ["Week 1 — Audit", "We meet your department leads, review existing syllabi, and shadow current sessions."],
  ["Week 2 — Design", "Joint working session to map student outcomes to a sprint-based plan."],
  ["Week 3 — Pilot", "Run a 2-day faculty/student pilot with one of our senior practitioners."],
  ["Week 4 — Rollout", "Hand over training assets, assessment rubrics, and mentor contacts."],
] as const;

function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#09263f] mb-3">{title}</h2>
      {sub && <p className="text-[#475569] max-w-2xl mx-auto">{sub}</p>}
    </div>
  );
}

export default function CollegesPage() {
  return (
    <>
      <PageHero
        title="A training partner for colleges and universities — built for academic outcomes."
        lede="We work with 200+ institutions to bridge the curriculum-to-industry gap. Faculty development, student bootcamps, co-designed electives and hackathons — all run by senior practitioners."
      >
        <div className="flex flex-wrap gap-4 mt-7">
          <a href="/contact" className="bg-[#09263f] text-white font-semibold px-6 py-3 rounded-full border border-white/30 hover:bg-[#07294a] transition">
            Partner with us
          </a>
          <a href="#programs" className="border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition">
            Browse programs
          </a>
        </div>
      </PageHero>

      <StatsStrip stats={COLLEGE_OUTCOMES} />

      {/* Programs */}
      <section className="py-16 px-4" id="programs">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader
            title="Four ways institutions work with us."
            sub="Pick the format that matches the gap you're trying to close."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[1200px] mx-auto">
            {COLLEGE_PROGRAMS.map((p, i) => (
              <div key={i} className={`${p.tint} bg-white rounded-2xl shadow-sm border border-[#e8ecf0] p-8`}>
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-xl font-bold text-[#09263f] max-w-[70%]">{p.name}</h3>
                  <span className="text-xs font-semibold px-3 py-1.5 bg-white/70 rounded-full text-[#09263f] flex-shrink-0">
                    {p.duration}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#09263f]/90 mb-4">{p.body}</p>
                <div className="text-xs font-bold text-[#09263f]/80">📊 {p.learners}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institution logos */}
      <section className="py-16 px-4 bg-[#f5f7fa]">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader title="Some of the institutions we work with." />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-[1100px] mx-auto">
            {COLLEGE_PARTNERS.map((p, i) => (
              <div
                key={i}
                className="h-20 bg-white rounded-xl flex items-center justify-center text-center px-2 text-sm font-bold text-[#09263f] shadow-sm"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we engage */}
      <section className="py-16 px-4">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#09263f] mb-5 leading-tight">
              How we engage — a four-week kickoff.
            </h2>
            <ol className="list-none p-0 m-0 space-y-4">
              {KICKOFF_STEPS.map(([t, b], i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#1de5b5] text-[#09263f] flex items-center justify-center font-bold text-sm">
                    0{i + 1}
                  </span>
                  <div>
                    <div className="font-bold text-[#09263f]">{t}</div>
                    <div className="text-sm text-[#09263f]/85 leading-snug mt-0.5">{b}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-yellow-50 rounded-2xl shadow-sm border border-[#e8ecf0] p-8">
            <h3 className="text-xl font-bold text-[#09263f] mb-3">Request a campus brief</h3>
            <p className="text-sm text-[#09263f]/85 leading-snug mb-5">
              Share a few details and a member of our partnerships team will get back within 1 business day with a tailored proposal.
            </p>
            <div className="space-y-3">
              <input
                placeholder="Your name"
                className="w-full h-11 px-4 rounded-xl border border-[#e8ecf0] text-sm outline-none focus:border-[#1de5b5]"
              />
              <input
                placeholder="Institution"
                className="w-full h-11 px-4 rounded-xl border border-[#e8ecf0] text-sm outline-none focus:border-[#1de5b5]"
              />
              <input
                placeholder="Work email"
                type="email"
                className="w-full h-11 px-4 rounded-xl border border-[#e8ecf0] text-sm outline-none focus:border-[#1de5b5]"
              />
              <select className="w-full h-11 px-4 rounded-xl border border-[#e8ecf0] text-sm outline-none focus:border-[#1de5b5] bg-white">
                <option>Faculty Development</option>
                <option>Student Bootcamp</option>
                <option>Curriculum Co-design</option>
                <option>Hackathon</option>
              </select>
              <button className="w-full bg-[#1de5b5] text-[#09263f] font-semibold py-3 rounded-full hover:brightness-95 transition">
                Send request
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
