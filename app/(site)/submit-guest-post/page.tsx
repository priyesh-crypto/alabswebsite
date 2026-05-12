import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Submit a Guest Post | AnalytixLabs",
  description:
    "Our blog is read by 80,000+ practitioners each month. We pay for accepted posts and publish under your name. Pitch us a data science, ML, or career piece.",
};

const GUEST_TOPICS = [
  "Hands-on tutorials with real datasets",
  "Production-grade ML, MLOps, or LLM systems",
  "Career switch stories with concrete numbers",
  "Practitioner takes on tools we don't already cover",
  "Deep dives into statistics, causal inference, or experimentation",
  "Industry-specific analytics (healthcare, BFSI, retail, supply chain)",
];

const NOT_ACCEPTING = [
  "Marketing copy or product comparisons",
  "Listicles without original analysis",
  "AI-generated content without substantial editing",
  "Anything thinly-veiled link-building",
];

const REVIEW_STAGES = [
  { num: "01", title: "Pitch", body: "Send us your topic, outline, and one sample of past writing. We respond within 5 working days." },
  { num: "02", title: "Draft", body: "If we accept, you have 21 days for the first draft. We pair you with one of our editors for a structure review." },
  { num: "03", title: "Edit", body: "Two rounds of editorial review focused on accuracy, voice, and reader value. Average end-to-end is 3 weeks." },
  { num: "04", title: "Publish", body: "Author byline, headshot, social cross-promotion, and a do-follow link to your portfolio or LinkedIn." },
];

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
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="8" fill="#1de5b5" />
      <path d="M5 9l3 3 5-5" stroke="#09263f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SubmitGuestPostPage() {
  return (
    <>
      <PageHero
        title="Write something we'd send to a colleague."
        lede="Our blog is read by 80,000+ practitioners each month. We pay for accepted posts and we publish under your name. We also have strong opinions about what makes a piece worth their time."
      >
        <a href="#pitch-form" className="mt-7 inline-block bg-[#09263f] text-white font-semibold px-6 py-3 rounded-full border border-white/30 hover:bg-[#07294a] transition">
          Pitch your post
        </a>
      </PageHero>

      {/* What we publish / don't */}
      <section className="py-16 px-4">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-[#1de5b5]/10 rounded-2xl border border-[#e8ecf0] shadow-sm p-8">
            <h3 className="text-xl font-bold text-[#09263f] mb-5">What we publish</h3>
            <div className="space-y-3">
              {GUEST_TOPICS.map((t, i) => (
                <div key={i} className="flex gap-3 items-start text-sm text-[#09263f] leading-snug">
                  <Tick />{t}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-[#e8ecf0] shadow-sm p-8">
            <h3 className="text-xl font-bold text-[#09263f] mb-5">What we don&apos;t publish</h3>
            <div className="space-y-3">
              {NOT_ACCEPTING.map((t, i) => (
                <div key={i} className="flex gap-3 items-start text-sm text-[#09263f]/85 leading-snug">
                  <span className="flex-shrink-0 text-red-600 font-bold text-base leading-none mt-0.5">×</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Review process */}
      <section className="py-16 px-4 bg-[#f5f7fa]">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader
            title="The review process."
            sub="Roughly 3 weeks end to end. Editorial is real, not a rubber stamp."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1200px] mx-auto">
            {REVIEW_STAGES.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#e8ecf0] shadow-sm p-6">
                <div className="text-5xl font-bold text-[#1de5b5] leading-none mb-2 opacity-50">{s.num}</div>
                <h3 className="text-[17px] font-bold text-[#09263f] mb-2">{s.title}</h3>
                <p className="text-sm leading-snug text-[#09263f]/80">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch form */}
      <section className="py-16 px-4 pb-24" id="pitch-form">
        <div className="max-w-[880px] mx-auto bg-white rounded-3xl border border-[#09263f]/6 shadow-sm p-12">
          <h2 className="text-2xl font-bold text-[#09263f] mb-2">Pitch your post</h2>
          <p className="text-sm text-[#475569] mb-7">
            Five fields. We respond to every legitimate pitch within five working days.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-[#09263f]">Your name</label>
              <input
                placeholder="Full name"
                className="h-11 px-4 rounded-xl border border-[#e8ecf0] text-sm outline-none focus:border-[#1de5b5]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-[#09263f]">Email</label>
              <input
                type="email"
                placeholder="you@work.com"
                className="h-11 px-4 rounded-xl border border-[#e8ecf0] text-sm outline-none focus:border-[#1de5b5]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label className="text-sm font-semibold text-[#09263f]">LinkedIn or portfolio link</label>
            <input
              placeholder="https://..."
              className="h-11 px-4 rounded-xl border border-[#e8ecf0] text-sm outline-none focus:border-[#1de5b5]"
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label className="text-sm font-semibold text-[#09263f]">Working title</label>
            <input
              placeholder="What's your post about?"
              className="h-11 px-4 rounded-xl border border-[#e8ecf0] text-sm outline-none focus:border-[#1de5b5]"
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label className="text-sm font-semibold text-[#09263f]">Outline / abstract</label>
            <textarea
              rows={4}
              placeholder="3–5 bullet points. What's the angle, who's it for, what will they take away?"
              className="px-4 py-3 rounded-xl border border-[#e8ecf0] text-sm outline-none focus:border-[#1de5b5] resize-none"
            />
          </div>
          <div className="flex flex-col gap-1 mb-7">
            <label className="text-sm font-semibold text-[#09263f]">Link to past writing (sample)</label>
            <input
              placeholder="Optional but strongly recommended"
              className="h-11 px-4 rounded-xl border border-[#e8ecf0] text-sm outline-none focus:border-[#1de5b5]"
            />
          </div>
          <button className="w-full bg-[#1de5b5] text-[#09263f] font-semibold py-3 rounded-full hover:brightness-95 transition">
            Send pitch
          </button>
        </div>
      </section>
    </>
  );
}
