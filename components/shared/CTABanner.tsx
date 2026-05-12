export default function CTABanner() {
  return (
    <div className="bg-[#09263f] py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        Ready to transform your career?
      </h2>
      <p className="text-white/70 mb-8 max-w-xl mx-auto">
        Join 20,000+ learners who have built their data science career with
        AnalytixLabs.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/contact"
          className="bg-[#1de5b5] text-[#09263f] font-bold px-8 py-3 rounded-full hover:brightness-95 transition"
        >
          Talk to a Counselor
        </a>
        <a
          href="/courses"
          className="border border-white/40 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition"
        >
          Browse Courses
        </a>
      </div>
    </div>
  );
}
