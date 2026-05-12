"use client";

import { useState } from "react";
import PageHero from "@/components/shared/PageHero";

import type { Metadata } from "next";

// Metadata cannot be exported from a client component file; it is defined here as a constant for reference.
// Page title: "Free Resources | AnalytixLabs"

const RESOURCE_CATEGORIES = [
  "All", "Data Science", "Machine Learning", "Generative AI", "Python",
  "SQL", "Career Guide", "Business Analytics",
];

const FEATURED_POST = {
  category: "Generative AI",
  title: "Building production-grade RAG systems: a practitioner's checklist",
  body: "What separates a demo RAG from a system that survives a quarter in production. Chunking, evals, retrieval drift, cost guardrails, and the eight failure modes we see most often.",
  author: "Karan Malhotra",
  date: "28 Apr 2026",
  read: "12 min read",
};

const POSTS = [
  { cat: "Data Science", title: "Parametric vs. Non-Parametric Test: Which One to Use for Hypothesis Testing?", excerpt: "A field guide to choosing the right test when sample size, distribution, or measurement scale push you off the beaten path.", read: "8 min", date: "24 Apr 2026", tint: "bg-[#1de5b5]/10" },
  { cat: "Generative AI", title: "What is Agentic AI? A technical guide for beginners", excerpt: "How agent loops actually work under the hood, and the three architectural patterns we keep seeing in production.", read: "11 min", date: "22 Apr 2026", tint: "bg-yellow-50" },
  { cat: "Python", title: "List vs Tuple in Python: Understanding key differences", excerpt: "Why the answer is rarely 'tuples are faster' — what actually changes about correctness, hashability and intent.", read: "6 min", date: "20 Apr 2026", tint: "bg-pink-50" },
  { cat: "Machine Learning", title: "When to use XGBoost vs. Neural Nets — a decision tree", excerpt: "A simple, opinionated guide based on what we've shipped across BFSI, retail and healthcare.", read: "9 min", date: "18 Apr 2026", tint: "bg-teal-50" },
  { cat: "SQL", title: "Window functions every analyst should master", excerpt: "Six patterns that solve 80% of the SQL puzzles asked in product analyst interviews.", read: "7 min", date: "15 Apr 2026", tint: "bg-sky-50" },
  { cat: "Career Guide", title: "Cracking the data science interview at Indian product companies", excerpt: "What Flipkart, Swiggy, Razorpay and CRED actually look for in 2026 — based on coaching 800+ candidates this year.", read: "13 min", date: "12 Apr 2026", tint: "bg-green-50" },
  { cat: "Business Analytics", title: "From dashboards to decisions — running a BI review that ships", excerpt: "How to structure a weekly BI review so it actually changes operating decisions.", read: "8 min", date: "08 Apr 2026", tint: "bg-[#1de5b5]/10" },
  { cat: "Generative AI", title: "Choosing your first LLM evaluation framework", excerpt: "A side-by-side of LangSmith, Ragas, DeepEval and a roll-your-own minimal stack.", read: "10 min", date: "05 Apr 2026", tint: "bg-yellow-50" },
  { cat: "Data Science", title: "The case-study handbook: 12 patterns for analytics interviews", excerpt: "How to break down ambiguous business questions into structured, hire-worthy answers.", read: "14 min", date: "01 Apr 2026", tint: "bg-pink-50" },
];

const DOWNLOADS = [
  { kind: "Cheatsheet", title: "Pandas one-pager", body: "Every transform you'll actually use in interviews, on one page.", color: "bg-[#1de5b5]/10" },
  { kind: "eBook", title: "The Analytics Interview Playbook (PDF, 92 pages)", body: "Frameworks, sample answers, and a 30-day prep plan we hand to every cohort.", color: "bg-yellow-50" },
  { kind: "Template", title: "Capstone project structure (Notion)", body: "The exact folder + writeup structure our students use to package portfolio work.", color: "bg-pink-50" },
];

function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#09263f] mb-3">{title}</h2>
      {sub && <p className="text-[#475569] max-w-2xl mx-auto">{sub}</p>}
    </div>
  );
}

export default function FreeResourcesPage() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const filtered = POSTS.filter(
    (p) =>
      (cat === "All" || p.cat === cat) &&
      (!q || (p.title + p.excerpt).toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <>
      <PageHero
        title="Free resources, written by practitioners."
        lede="Articles, cheatsheets, and templates from the same faculty who teach our cohorts. No fluff, no SEO bait — only things we'd hand a colleague."
      >
        <div className="mt-7 flex flex-wrap gap-3 items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles, cheatsheets, templates…"
            className="w-full sm:w-[480px] h-12 px-6 rounded-full border border-white/30 bg-white/10 text-white placeholder-white/60 text-sm outline-none focus:bg-white/20"
          />
          <button className="bg-[#09263f] text-white font-semibold px-6 py-3 rounded-full border border-white/30 hover:bg-[#07294a] transition text-sm">
            Search
          </button>
        </div>
      </PageHero>

      {/* Featured post */}
      <section className="py-15 px-4 pt-16">
        <div className="max-w-[1300px] mx-auto bg-[#09263f] text-white rounded-3xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-14">
            <span className="inline-block text-xs font-bold text-[#09263f] bg-[#1de5b5] px-4 py-1.5 rounded-full mb-5">
              FEATURED · {FEATURED_POST.category}
            </span>
            <h2 className="text-3xl font-bold leading-tight mb-4">{FEATURED_POST.title}</h2>
            <p className="text-[15px] leading-relaxed opacity-90 mb-6">{FEATURED_POST.body}</p>
            <div className="flex flex-wrap gap-6 items-center text-xs opacity-80 mb-6">
              <span>By {FEATURED_POST.author}</span>
              <span>•</span>
              <span>{FEATURED_POST.date}</span>
              <span>•</span>
              <span>{FEATURED_POST.read}</span>
            </div>
            <a href="#" className="bg-[#1de5b5] text-[#09263f] font-semibold px-6 py-3 rounded-full hover:brightness-95 transition">
              Read article →
            </a>
          </div>
          <div className="hidden lg:flex items-center justify-center bg-white/5 min-h-[360px] text-white/30 font-bold text-lg p-8 text-center">
            RAG architecture diagram
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="px-4 pt-10 pb-2">
        <div className="max-w-[1300px] mx-auto flex flex-wrap gap-2">
          {RESOURCE_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`h-9 px-5 rounded-full text-sm font-semibold transition border ${
                cat === c
                  ? "bg-[#09263f] text-white border-[#09263f]"
                  : "bg-white text-[#09263f] border-[#e8ecf0] hover:border-[#09263f]/30"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Post grid */}
      <section className="px-4 py-8 pb-16">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <article
              key={i}
              className={`${p.tint} bg-white rounded-2xl border border-[#e8ecf0] shadow-sm overflow-hidden flex flex-col cursor-pointer hover:-translate-y-1 transition-transform`}
            >
              <div className="h-44 bg-white/40 flex items-center justify-center font-bold text-[#09263f]/40 text-lg">
                {p.cat}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-[11px] font-semibold text-[#09263f]/70 mb-2 tracking-wider uppercase">
                  {p.cat} · {p.read}
                </div>
                <h3 className="text-[17px] font-bold text-[#09263f] leading-snug mb-2">{p.title}</h3>
                <p className="text-sm text-[#09263f]/85 leading-snug mb-3 flex-1">{p.excerpt}</p>
                <div className="text-xs text-[#475569]">{p.date}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 px-4 bg-[#f5f7fa]">
        <div className="max-w-[1300px] mx-auto">
          <SectionHeader
            title="Pull-no-punches downloads."
            sub="Things our cohorts get on day one — free, no email gate."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
            {DOWNLOADS.map((d, i) => (
              <div key={i} className={`${d.color} bg-white rounded-2xl border border-[#e8ecf0] shadow-sm p-7`}>
                <span className="text-[10px] font-bold px-2.5 py-1 bg-[#09263f]/10 text-[#09263f] rounded-full tracking-wider uppercase">
                  {d.kind}
                </span>
                <h3 className="text-lg font-bold text-[#09263f] mt-4 mb-2">{d.title}</h3>
                <p className="text-sm text-[#09263f]/85 leading-snug mb-5">{d.body}</p>
                <button className="bg-[#1de5b5] text-[#09263f] font-semibold px-5 py-2 rounded-full text-sm hover:brightness-95 transition">
                  Download free →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 pb-24">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#09263f] mb-3">
            Get one good thing in your inbox each week.
          </h2>
          <p className="text-sm text-[#475569] mb-6">
            One article, one cheatsheet, or one tactic that actually moved the needle for our cohort. Never a sales pitch.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <input
              placeholder="you@work.com"
              type="email"
              className="w-full sm:w-[360px] h-12 px-6 rounded-full border border-[#e8ecf0] text-sm outline-none focus:border-[#1de5b5]"
            />
            <button className="bg-[#1de5b5] text-[#09263f] font-semibold px-6 py-3 rounded-full hover:brightness-95 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
