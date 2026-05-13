import React from "react";
import type { Faq } from "@/lib/api-client";

const FAQ_FALLBACK: { question: string; answer: string }[] = [
  { question: "Does the institute offer any discounts?", answer: "We believe in delivering a high-quality learning experience at a good value for your hard-earned money. First, our fee structure is highly competitive compared to any other reputed data science institute, considering the comprehensive curriculum, actual duration in hours, and well-rounded student support. However, we offer scholarships and referral benefits based on the candidates’ profiles. To know more about the ongoing offers contact our admission counselors." },
  { question: "What is the best course to get started with data analytics?", answer: "Our flagship Data Analytics 360 course is the most popular starting point — it covers Excel, SQL, Tableau, Python, and statistics with industry projects." },
  { question: "What distinguishes AnalytixLabs as a data analytics institute?", answer: "Our combination of industry-driven curriculum, one-to-one mentorship, real client capstone projects, and post-class doubt sessions distinguishes us from typical training institutes." },
  { question: "What comes under the Machine Learning course?", answer: "Our Machine Learning course covers supervised/unsupervised learning, deep learning fundamentals, model deployment, and a real-world capstone project using Python and TensorFlow." },
  { question: "What is a dual certification or co-branded certification?", answer: "A dual / co-branded certification means your certificate is jointly issued by AnalytixLabs and an industry partner (e.g. IBM, NSDC), giving it broader recognition with employers." },
  { question: "How many candiates have trained under AnalytixLabs?", answer: "Over 60,000 candidates have trained with AnalytixLabs since 2011, with alumni placed at companies like Amazon, Accenture, Deloitte, EY, and Genpact." },
  { question: "What does Deep Learning with Python training cover?", answer: "Deep Learning with Python covers neural networks, CNNs, RNNs, transformers, model training/optimization, and hands-on projects using TensorFlow and PyTorch." },
  { question: "What is the Analytics Edge course?", answer: "Analytics Edge is a specialization module designed for working professionals — it focuses on advanced analytics, BI dashboards, and decision science using real datasets." },
];

export function FaqFlowSection({
  faqs, openFaqId, onToggle, contactPhone, pageBlocks
}: {
  faqs: Faq[];
  openFaqId: number | null;
  onToggle: (idx: number) => void;
  contactPhone?: string;
  pageBlocks?: any;
}) {
  const block = (p: any, k: string): string | undefined => {
    if (!p) return undefined;
    const blocks = p.blocks as Record<string, any>;
    if (!blocks) return undefined;
    const v = k.split('.').reduce((o, i) => (o ? o[i] : undefined), blocks) ?? blocks[k];
    return typeof v === "string" ? v : undefined;
  };

  return (
    <section className="w-full bg-white flex justify-center py-[60px] lg:py-[100px]" data-section="faq">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-[66px] relative">
        <h2 className="text-center font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-[28px] lg:text-[40px]">
          {block(pageBlocks, "faqs.headline") ?? block(pageBlocks, "faqs_section.headline") ?? "Frequently Asked Questions"}
        </h2>
        <p className="text-center font-['Inter:Regular',sans-serif] font-normal text-[16px] lg:text-[18px] text-[rgba(9,38,63,0.5)] mt-[16px] mb-[40px] lg:mb-[60px] mx-auto max-w-[988px]">
          {block(pageBlocks, "faqs.subhead") ?? block(pageBlocks, "faqs_section.subhead") ?? "Have Questions on how you benefit from the course?"}
        </p>

        <div className="mx-auto w-full max-w-[1067px] flex flex-col gap-4">
          {FAQ_FALLBACK.map((fb, idx) => {
            const isOpen = openFaqId === idx;
            const question = faqs[idx]?.question ?? fb.question;
            const answer = faqs[idx]?.answer ?? fb.answer;
            return (
              <div
                key={idx}
                className={`rounded-[20px] border border-gray-200 transition-all duration-300 ${isOpen
                    ? "bg-gradient-to-b from-[#d7f7f6] to-[#f2fae4] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.1)] border-[#19cf9e]/30"
                    : "bg-[#f4fafa] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.03)] hover:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)]"
                  }`}
              >
                <button
                  type="button"
                  onClick={() => onToggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-4 p-5 text-left cursor-pointer"
                >
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-[15px] md:text-[20px]">
                    {question}
                  </span>
                  <span
                    className="shrink-0 size-[40px] md:size-[51px] rounded-full bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] flex items-center justify-center transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(0deg)" : "rotate(-45deg)" }}
                    aria-hidden="true"
                  >
                    <svg className="size-[20px] md:size-[24px]" fill="none" viewBox="0 0 24 24">
                      <path d="M20 20L4 4M20 4L4 20" stroke="black" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 font-['Inter:Regular',sans-serif] font-normal text-[13px] md:text-[16px] text-[rgba(9,38,63,0.7)] leading-[1.6]">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Still have questions card */}
          <div className="rounded-[20px] border border-gray-200 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.03)] p-6 mt-2 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-[20px]">Still have questions?</p>
              <p className="mt-2 font-['Inter:Regular',sans-serif] font-normal text-[#09263f] text-[16px] max-w-[749px] mx-auto md:mx-0">
                Not sure which course is right for you? Talk to our program advisors and get personalized guidance on curriculum, career outcomes, and the best learning path based on your goals.
              </p>
            </div>
            <a
              href={contactPhone ? `tel:${contactPhone}` : "/contact"}
              className="shrink-0 self-center bg-[#19cf9e] rounded-full h-[49px] w-full sm:w-[182px] flex items-center justify-center font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[18px] hover:brightness-95 transition"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
