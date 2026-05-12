import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "System Requirements | AnalytixLabs",
  description:
    "Check the hardware, software, and internet requirements for AnalytixLabs programs. Most laptops from the last 4 years are fine — we provide cloud workspaces as backup.",
};

const SYS_BLOCKS = [
  { title: "Operating system", body: "Windows 10/11 64-bit, macOS 12+ (Apple Silicon supported), or any modern Linux distribution. Chromebook is supported for live classes only — local Python/SQL exercises require a full OS.", icon: "💻", tint: "bg-[#1de5b5]/10" },
  { title: "Hardware", body: "Minimum 8 GB RAM (16 GB recommended for ML/Deep Learning tracks). 256 GB storage. Intel i5 / AMD Ryzen 5 or Apple M1+. A discrete GPU is not required — we provide cloud GPU credits for Deep Learning capstones.", icon: "🧠", tint: "bg-yellow-50" },
  { title: "Internet & camera", body: "10 Mbps stable broadband for live classes. A working webcam and microphone — preferably a headset. We test your setup on a 15-minute call before your cohort starts.", icon: "🎧", tint: "bg-pink-50" },
  { title: "Browser & tools", body: "Latest Chrome, Firefox, or Edge. Zoom desktop client. We pre-install Anaconda, VS Code, Git, and the program-specific stack on day zero with our setup script.", icon: "🌐", tint: "bg-teal-50" },
];

const PROGRAM_REQS = [
  { program: "Data Analyst Cert.", ram: "8 GB", storage: "256 GB", gpu: "Not needed", cloud: "—" },
  { program: "Data Science 360", ram: "16 GB", storage: "256 GB", gpu: "Not needed", cloud: "₹3,000 GPU credits provided" },
  { program: "Machine Learning", ram: "16 GB", storage: "256 GB", gpu: "Helpful, not required", cloud: "₹3,000 GPU credits provided" },
  { program: "Deep Learning", ram: "16 GB", storage: "512 GB", gpu: "Helpful (NVIDIA)", cloud: "₹6,000 GPU credits provided" },
  { program: "Generative AI", ram: "16 GB", storage: "512 GB", gpu: "Optional", cloud: "₹6,000 cloud credits + OpenAI/Anthropic keys" },
  { program: "Business Analytics", ram: "8 GB", storage: "256 GB", gpu: "Not needed", cloud: "Tableau & Power BI licenses" },
];

const SETUP_STEPS = [
  { title: "Run the setup script", body: "We send a one-line installer that sets up Python, conda, VS Code, Git, and program-specific libraries. Tested on Windows, macOS, and Ubuntu." },
  { title: "Pre-class systems check", body: "A 15-minute video call with a TA to verify webcam, mic, screen share, and that all environments run." },
  { title: "Install backup access", body: "We provision a cloud workspace as a fallback so you can attend class even if your laptop fails." },
];

function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#09263f] mb-3">{title}</h2>
      {sub && <p className="text-[#475569] max-w-2xl mx-auto">{sub}</p>}
    </div>
  );
}

export default function SystemRequirementsPage() {
  return (
    <>
      <PageHero
        title="The system you'll need to learn comfortably."
        lede="Most laptops bought in the last 4 years are fine. Below are the exact specs we test against, what each program needs, and how we set everything up for you on day zero."
      />

      {/* Requirements blocks */}
      <section className="py-16 px-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SYS_BLOCKS.map((b, i) => (
            <div key={i} className={`${b.tint} bg-white rounded-2xl border border-[#e8ecf0] shadow-sm p-8`}>
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-xl font-bold text-[#09263f] mb-3">{b.title}</h3>
              <p className="text-sm leading-relaxed text-[#09263f]/88">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Per-program table */}
      <section className="py-16 px-4 bg-[#f5f7fa]">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader
            title="What each program needs."
            sub="Specifics by track. If your machine is short, we provide cloud workspaces — no exceptions."
          />
          <div className="max-w-[1100px] mx-auto bg-white rounded-2xl overflow-hidden shadow-sm">
            <div
              className="hidden md:grid bg-[#09263f] text-white px-7 py-4 text-xs font-bold tracking-wider uppercase gap-4"
              style={{ gridTemplateColumns: "1.6fr 1fr 1fr 1.4fr 1.6fr" }}
            >
              <div>Program</div>
              <div>RAM</div>
              <div>Storage</div>
              <div>GPU</div>
              <div>Cloud / extras</div>
            </div>
            {PROGRAM_REQS.map((r, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-[1.6fr_1fr_1fr_1.4fr_1.6fr] grid-cols-1 px-7 py-4 items-center gap-4 text-sm text-[#09263f] ${i < PROGRAM_REQS.length - 1 ? "border-b border-[#09263f]/8" : ""}`}
              >
                <div className="font-bold">{r.program}</div>
                <div>{r.ram}</div>
                <div>{r.storage}</div>
                <div>{r.gpu}</div>
                <div>{r.cloud}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-zero setup */}
      <section className="py-16 px-4">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader
            title="Day-zero setup."
            sub="What happens before your first class — handled together."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
            {SETUP_STEPS.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#e8ecf0] shadow-sm p-6">
                <div className="w-11 h-11 rounded-xl bg-[#1de5b5] flex items-center justify-center font-bold text-[#09263f] text-base mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-[17px] font-bold text-[#09263f] mb-2">{s.title}</h3>
                <p className="text-sm leading-snug text-[#09263f]/85">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud workspace CTA */}
      <section className="py-16 px-4 pb-24">
        <div className="max-w-[900px] mx-auto bg-[#1de5b5]/10 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-[#09263f] mb-2">
            Don&apos;t have a machine that fits?
          </h3>
          <p className="text-sm text-[#09263f]/85 mb-5">
            We&apos;ll provision a managed cloud workspace at no extra cost. Talk to your counselor before enrolment so we can get it ready by day zero.
          </p>
          <a
            href="/contact"
            className="bg-[#1de5b5] text-[#09263f] font-semibold px-6 py-3 rounded-full hover:brightness-95 transition"
          >
            Request a cloud workspace
          </a>
        </div>
      </section>
    </>
  );
}
