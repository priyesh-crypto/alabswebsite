"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem, Office, SiteSettings, BlogPost } from "@/lib/api-client";

import svgPaths from "../AlabsLandingPage/svg-5my3vzmwxc";
import imgAlabsLogo from "../AlabsLandingPage/3bf553a15ed8e3b04af9c46289180fc24b35c112.png";

export type GlobalLayoutProps = {
  topNav?: NavItem[];
  footerLinks?: NavItem[];
  footerCities?: NavItem[];
  offices?: Office[];
  siteSettings?: SiteSettings | null;
  posts?: BlogPost[];
};

// ─── Navbar ──────────────────────────────────────────────────────────────────

// Mega-menu category data
const MEGA_MENU_CATEGORIES = [
  {
    title: "Artificial Intelligence",
    borderColor: "#07b3e7",
    courses: [
      { label: "Full Stack AI Course", url: "/courses/full-stack-ai", isNew: true, badgeColor: "#1de5b5" },
      { label: "Agentic AI Course", url: "/courses/agentic-ai", isNew: true, badgeColor: "#1de5b5" },
      { label: "Generative AI Course", url: "/courses/generative-ai", isNew: true, badgeColor: "#1de5b5" },
      { label: "AI for Managers & Leaders", url: "/courses/ai-for-managers", isNew: false },
    ],
  },
  {
    title: "Business & Data Analytics",
    borderColor: "#1de5b5",
    courses: [
      { label: "Data Visualization & Analytics", url: "/courses/data-visualization", isNew: false },
      { label: "Data Analytics Course", url: "/courses/data-analytics", isNew: false },
      { label: "Business Analytics Course", url: "/courses/business-analytics", isNew: false },
    ],
  },
  {
    title: "Data Science",
    borderColor: "#ffd700",
    courses: [
      { label: "Data Science Course", url: "/courses/data-science", isNew: false },
      { label: "Data Science using Python", url: "/courses/data-science-python", isNew: false },
    ],
  },
  {
    title: "Specialization Modules",
    borderColor: "#09263f",
    courses: [
      { label: "Certified Big Data Engineer", url: "/courses/big-data", isNew: false },
      { label: "Machine Learning using Python", url: "/courses/machine-learning", isNew: false },
      { label: "Deep Learning with Python", url: "/courses/deep-learning", isNew: false },
    ],
  },
];

export function GlobalNavbar({ topNav }: { topNav?: NavItem[] }) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerCoursesOpen, setDrawerCoursesOpen] = useState(false);
  const megaTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMega = () => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    megaTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  // Close drawer on route change
  useEffect(() => { setDrawerOpen(false); setMegaOpen(false); }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const DEFAULT_LINKS = [
    { label: "Upcoming Batches", url: "/batches" },
    { label: "Explore Courses", url: "/courses" },
    { label: "Why Us", url: "/why-us" },
    { label: "For Corporates", url: "/for-corporates" },
    { label: "Blog", url: "/blog" },
    { label: "Contact Us", url: "/contact" },
  ];

  const nav = (topNav?.length ?? 0) > 0 ? topNav! : DEFAULT_LINKS;

  const isActive = (url: string) =>
    url === "/" ? pathname === "/" : pathname.startsWith(url);

  return (
    <>
      {/* Spacer so page content doesn't render under the fixed navbar */}
      <div className="h-[68px] w-full shrink-0" aria-hidden />
      <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] h-[68px] flex items-center">
        {/* ── Desktop layout (≥ 1024px) ── */}
        <div className="hidden lg:flex w-full max-w-[1440px] mx-auto px-[33px] h-full items-center">
          <Link href="/" className="relative h-[57px] w-[191px] shrink-0">
            <img alt="AnalytixLabs" className="absolute inset-0 max-w-none object-cover size-full pointer-events-none" src={imgAlabsLogo.src} />
          </Link>

          <nav className="flex items-center ml-[60px] xl:ml-[120px] gap-[25px] xl:gap-[35px] overflow-x-auto scrollbar-none">
            {nav.slice(0, 6).map((link, i) => {
              if (link.label === "Explore Courses") {
                return (
                  <div
                    key={i}
                    className="relative h-full flex items-center"
                    onMouseEnter={openMega}
                    onMouseLeave={closeMega}
                  >
                    <button
                      type="button"
                      className={`relative inline-flex items-center font-medium text-[13px] whitespace-nowrap transition-colors hover:text-[#07b3e7] py-2 ${
                        isActive(link.url ?? "") || megaOpen ? "text-[#07b3e7]" : "text-[#09263f]"
                      }`}
                      onClick={() => setMegaOpen(o => !o)}
                      aria-expanded={megaOpen}
                    >
                      {link.label}
                      <ChevronDown className={`ml-1 size-3 opacity-60 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
                    </button>
                    {(isActive(link.url ?? "") || megaOpen) && (
                      <div className="absolute bottom-[-10px] left-0 right-0 h-[3px] bg-[#07b3e7] rounded-full" />
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={i}
                  href={link.url ?? "#"}
                  className={`relative inline-flex items-center font-medium text-[13px] whitespace-nowrap transition-colors hover:text-[#07b3e7] py-2 ${
                    isActive(link.url ?? "") ? "text-[#07b3e7]" : "text-[#09263f]"
                  }`}
                >
                  {link.label}
                  {isActive(link.url ?? "") && (
                    <div className="absolute bottom-[-10px] left-0 right-0 h-[3px] bg-[#07b3e7] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center ml-auto gap-[15px] shrink-0">
            <Link href="/signin" className="font-semibold text-[#09263f] text-[14px] hover:text-[#19cf9e] transition-colors">
              Sign in
            </Link>
            <Link
              href="/signup"
              className="flex items-center justify-center bg-[#1de5b5] h-[40px] px-6 rounded-full font-semibold text-white text-[13px] hover:brightness-95 transition-all shadow-[0px_4px_15px_0px_rgba(29,229,181,0.2)]"
            >
              Create Free Account
            </Link>
          </div>
        </div>

        {/* ── Mobile layout (< 1024px) ── */}
        <div className="flex lg:hidden w-full items-center justify-between px-4 h-full">
          <Link href="/" className="relative h-10 w-32 shrink-0">
            <img alt="AnalytixLabs" className="h-full w-auto object-contain" src={imgAlabsLogo.src} />
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            className="p-2 rounded-md text-[#09263f] hover:bg-gray-100 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* ── Mega-menu dropdown (desktop only) ── */}
        {megaOpen && (
          <div
            className="hidden lg:block absolute top-full left-0 right-0 bg-white shadow-[0px_12px_40px_0px_rgba(0,0,0,0.12)] border-t border-[#09263f]/8 rounded-b-2xl"
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
          >
            <div className="max-w-[1440px] mx-auto px-[33px] py-8">
              <div className="grid grid-cols-2 gap-x-16 gap-y-8">
                {MEGA_MENU_CATEGORIES.map((cat, ci) => (
                  <div key={ci}>
                    <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-[15px] mb-3">
                      {cat.title}
                    </h3>
                    <ul
                      className="flex flex-col gap-1 pl-3"
                      style={{ borderLeft: `3px solid ${cat.borderColor}` }}
                    >
                      {cat.courses.map((course, cj) => (
                        <li key={cj}>
                          <Link
                            href={course.url}
                            className="flex items-center gap-2 py-1.5 text-[14px] text-[#09263f]/70 hover:text-[#07b3e7] transition-colors font-medium"
                            onClick={() => setMegaOpen(false)}
                          >
                            {course.label}
                            {course.isNew && (
                              <span
                                className="text-[10px] font-semibold text-white px-2 py-0.5 rounded-full leading-none"
                                style={{ backgroundColor: course.badgeColor }}
                              >
                                New
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#09263f]/10">
                <Link
                  href="/courses"
                  onClick={() => setMegaOpen(false)}
                  className="inline-flex items-center justify-center bg-[#09263f] text-white font-semibold text-[14px] h-12 px-8 rounded-xl hover:bg-[#07294a] transition-colors"
                >
                  Explore All Courses
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── Mobile drawer ── */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-[210] w-72 bg-white shadow-2xl flex flex-col lg:hidden">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
              <Link href="/" className="h-9 w-28">
                <img alt="AnalytixLabs" className="h-full w-auto object-contain" src={imgAlabsLogo.src} />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setDrawerOpen(false)}
                className="p-1.5 rounded-md text-gray-400 hover:text-[#09263f] hover:bg-gray-100 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1">
              {nav.map((link, i) => {
                if (link.label === "Explore Courses") {
                  return (
                    <div key={i}>
                      <button
                        type="button"
                        onClick={() => setDrawerCoursesOpen(o => !o)}
                        className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                          drawerCoursesOpen || isActive(link.url ?? "")
                            ? "bg-[#07b3e7]/10 text-[#07b3e7]"
                            : "text-[#09263f] hover:bg-gray-50"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`size-4 opacity-60 transition-transform duration-200 ${drawerCoursesOpen ? "rotate-180" : ""}`} />
                      </button>
                      {drawerCoursesOpen && (
                        <div className="mt-1 mb-2 ml-3 flex flex-col gap-4">
                          {MEGA_MENU_CATEGORIES.map((cat, ci) => (
                            <div key={ci}>
                              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#09263f]/40 px-3 mb-1">
                                {cat.title}
                              </p>
                              <div
                                className="flex flex-col gap-0.5 pl-3"
                                style={{ borderLeft: `2px solid ${cat.borderColor}` }}
                              >
                                {cat.courses.map((course, cj) => (
                                  <Link
                                    key={cj}
                                    href={course.url}
                                    onClick={() => setDrawerOpen(false)}
                                    className="flex items-center gap-2 px-2 py-2 text-[14px] text-[#09263f]/70 hover:text-[#07b3e7] font-medium rounded transition-colors"
                                  >
                                    {course.label}
                                    {course.isNew && (
                                      <span
                                        className="text-[10px] font-semibold text-white px-1.5 py-0.5 rounded-full leading-none"
                                        style={{ backgroundColor: course.badgeColor }}
                                      >
                                        New
                                      </span>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                          <Link
                            href="/courses"
                            onClick={() => setDrawerOpen(false)}
                            className="mx-2 flex items-center justify-center bg-[#09263f] text-white font-semibold text-[13px] h-10 rounded-xl hover:bg-[#07294a] transition-colors"
                          >
                            Explore All Courses
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={i}
                    href={link.url ?? "#"}
                    className={`block px-3 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                      isActive(link.url ?? "")
                        ? "bg-[#07b3e7]/10 text-[#07b3e7]"
                        : "text-[#09263f] hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Auth buttons */}
            <div className="px-4 py-5 border-t border-gray-100 flex flex-col gap-3">
              <Link
                href="/signin"
                className="block text-center py-2.5 rounded-full border border-[#09263f] text-[#09263f] font-semibold text-[14px] hover:bg-gray-50 transition"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="block text-center py-2.5 rounded-full bg-[#1de5b5] text-white font-semibold text-[14px] hover:brightness-95 transition shadow-[0px_4px_15px_0px_rgba(29,229,181,0.2)]"
              >
                Create Free Account
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

export function GlobalFooter({ offices, footerLinks, footerCities, posts }: GlobalLayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  useEffect(() => { setMounted(true); }, []);

  const o0 = offices?.[0];
  const o1 = offices?.[1];
  const o2 = offices?.[2];

  const fl = footerLinks ?? [];
  const aboutUsLinks = fl.filter(l => l.group === "FOOTER_COL_ABOUT").length > 0
    ? fl.filter(l => l.group === "FOOTER_COL_ABOUT")
    : fl.slice(0, 5);
  const etcLinks = fl.filter(l => l.group === "FOOTER_COL_ETC").length > 0
    ? fl.filter(l => l.group === "FOOTER_COL_ETC")
    : fl.slice(5, 10);
  const popularSearches = footerCities ?? [];
  const copyYear = new Date().getFullYear();

  const DEFAULT_ABOUT = [
    { label: "Why Us", url: "/why-us" },
    { label: "Courses", url: "/courses" },
    { label: "About Faculty", url: "/about" },
    { label: "Contact Us", url: "/contact" },
    { label: "AnalytixLabs Placements", url: "/placements" },
  ];
  const DEFAULT_ETC = [
    { label: "System Requirements", url: "/requirements" },
    { label: "Free Resources", url: "/resources" },
    { label: "Success Stories", url: "/success-stories" },
    { label: "Colleges Universities Training Courses", url: "/colleges" },
  ];
  const DEFAULT_SEARCHES = [
    { label: "Data Analyst Training Course In Delhi", url: "/courses" },
    { label: "Data Science Course in Delhi", url: "/courses" },
    { label: "Business Analyst Course In Delhi", url: "/courses" },
    { label: "Artificial Intelligence Course in Delhi", url: "/courses" },
    { label: "Generative AI Course", url: "/courses" },
  ];

  const aboutLinks = aboutUsLinks.length > 0 ? aboutUsLinks : DEFAULT_ABOUT;
  const etLinks = etcLinks.length > 0 ? etcLinks : DEFAULT_ETC;
  const searchLinks = popularSearches.length > 0 ? popularSearches.slice(0, 13) : DEFAULT_SEARCHES;

  const footerOffices = [
    { office: o0, fallbackCity: "Noida", fallbackAddr: "1st Floor, A78, A Block, Sector 2, Metro Gate 3, Noida, UP 201301." },
    { office: o1, fallbackCity: "Gurgaon", fallbackAddr: "2nd Floor, Sidhartha House, Building No. 6, Sector 44, Gurugram, Haryana 122003." },
    { office: o2, fallbackCity: "Bengaluru", fallbackAddr: "Bldg 51/2, First floor 12th Main Road, Near BDA complex Sector 6, HSR Layout, Bengaluru, Karnataka 560102." },
  ];

  function toggleSection(key: string) {
    setOpenSection(prev => prev === key ? null : key);
  }

  const AccordionSection = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
    <div className="border-b border-white/20">
      <button
        type="button"
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between py-4 text-left font-semibold text-[15px]"
      >
        {title}
        <svg
          className={`w-4 h-4 transition-transform ${openSection === id ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {openSection === id && <div className="pb-4">{children}</div>}
    </div>
  );

  return (
    <footer className="relative bg-gradient-to-r from-[#094c80] from-[13%] to-[#2096cb] w-full text-white font-['Inter',sans-serif] overflow-hidden">

      {/* ── Desktop footer (≥ 1024px) ── */}
      <div className="hidden lg:block">
        <div className="max-w-[1440px] mx-auto px-[66px] py-[80px] relative">
          {/* Decorative circle */}
          <div className="absolute left-[-123px] size-[500px] top-[-254px] pointer-events-none">
            <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 500">
              <circle cx="250" cy="250" fill="white" r="250" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col gap-[80px]">
            {/* Top: logo+blog + link columns */}
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-10 w-[426px]">
                <Link href="/" className="block w-[233px] h-[69px]">
                  <img alt="AnalytixLabs" className="w-full h-full object-contain" src={imgAlabsLogo.src} />
                </Link>

                <div className="bg-white/10 border border-white/20 rounded-[15px] p-8 backdrop-blur-sm">
                  <p className="font-semibold text-[16px] mb-6 text-center">Blog</p>
                  <Link href="/blog/submit-guest-post" className="block bg-white text-[#09263f] h-[44px] rounded-full flex items-center justify-center font-semibold text-[14px] mb-6 hover:bg-white/90 transition-all shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]">
                    Submit a Guest Post
                  </Link>
                  <div className="flex flex-col gap-5 text-[14px] font-light">
                    {(posts && posts.length > 0 ? posts.slice(0, 3) : [
                      { slug: "parametric-vs-non-parametric", title: "Parametric vs. Non-Parametric Test: Which One to Use for Hypothesis Testing?" },
                      { slug: "what-is-agentic-ai", title: "What is Agentic AI – A Technical Guide for Beginners" },
                      { slug: "list-vs-tuple-python", title: "List vs Tuple in Python: Understanding Key Differences" },
                    ]).map(p => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="hover:underline line-clamp-2">{p.title}</Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-[40px] flex-1 justify-items-end">
                <div className="flex flex-col gap-8 w-[180px]">
                  <p className="font-semibold text-[16px]">About Us</p>
                  <div className="flex flex-col gap-5 text-[14px] font-light leading-relaxed">
                    {aboutLinks.map((l, i) => <Link key={i} href={l.url ?? "#"} className="hover:underline">{l.label}</Link>)}
                  </div>
                </div>

                <div className="flex flex-col gap-8 w-[180px]">
                  <p className="font-semibold text-[16px]">Etcetera</p>
                  <div className="flex flex-col gap-5 text-[14px] font-light leading-relaxed">
                    {etLinks.map((l, i) => <Link key={i} href={l.url ?? "#"} className="hover:underline">{l.label}</Link>)}
                  </div>
                </div>

                <div className="flex flex-col gap-8 w-[280px]">
                  <p className="font-semibold text-[16px]">Popular Searches</p>
                  <div className="flex flex-col gap-[18px] text-[14px] font-light leading-tight">
                    {searchLinks.map((l, i) => <Link key={i} href={l.url ?? "#"} className="hover:underline whitespace-normal block">{l.label}</Link>)}
                  </div>
                </div>
              </div>
            </div>

            {/* Office cards */}
            <div className="flex justify-between gap-[30px]">
              {footerOffices.map(({ office, fallbackCity, fallbackAddr }, idx) => (
                <div key={idx} className="flex-1 border border-white/30 rounded-[15px] p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <BoxiconsLocationFilled3 className="size-4" />
                      <p className="font-semibold text-[16px]">{office?.city ?? fallbackCity}</p>
                    </div>
                    <Link href={office?.directionsUrl ?? "#"} target="_blank" className="text-[14px] hover:underline flex items-center">
                      Get Directions <span className="ml-1">→</span>
                    </Link>
                  </div>
                  <p className="text-[14px] font-light leading-relaxed">{office?.addressLine1 ?? fallbackAddr}</p>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col gap-8 pt-10 border-t border-white/20">
              <div className="flex justify-between items-center">
                <p className="text-[14px] font-light">© {mounted ? copyYear : "2024"} AnalytixLabs. All Rights Reserved.</p>
                <div className="flex items-center gap-6">
                  <RiInstagramFill className="size-[24px]" />
                  <IcRoundFacebook className="size-[28px]" />
                  <MdiYoutube className="size-[32px]" />
                  <MdiLinkedin className="size-[26px]" />
                  <PrimeTwitter className="size-[22px]" />
                  <AkarIconsMediumFill className="size-[24px]" />
                </div>
                <div className="flex gap-8 text-[14px] font-light">
                  <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                  <Link href="/terms-and-conditions" className="hover:underline">Terms and Conditions</Link>
                  <Link href="/sitemap" className="hover:underline">Sitemap</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile footer (< 1024px) ── */}
      <div className="lg:hidden px-5 py-10 flex flex-col gap-8">
        {/* Logo */}
        <Link href="/" className="block w-40 h-12">
          <img alt="AnalytixLabs" className="w-full h-full object-contain" src={imgAlabsLogo.src} />
        </Link>

        {/* Blog box */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
          <p className="font-semibold text-[15px] mb-4 text-center">Blog</p>
          <Link href="/blog/submit-guest-post" className="block bg-white text-[#09263f] py-2.5 rounded-full text-center font-semibold text-[14px] mb-5 hover:bg-white/90 transition">
            Submit a Guest Post
          </Link>
          <div className="flex flex-col gap-4 text-[13px] font-light">
            {(posts && posts.length > 0 ? posts.slice(0, 3) : [
              { slug: "parametric-vs-non-parametric", title: "Parametric vs. Non-Parametric Test: Which One to Use for Hypothesis Testing?" },
              { slug: "what-is-agentic-ai", title: "What is Agentic AI – A Technical Guide for Beginners" },
              { slug: "list-vs-tuple-python", title: "List vs Tuple in Python: Understanding Key Differences" },
            ]).map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="hover:underline line-clamp-2">{p.title}</Link>
            ))}
          </div>
        </div>

        {/* Accordion link sections */}
        <div>
          <AccordionSection id="about" title="About Us">
            <div className="flex flex-col gap-3 text-[14px] font-light">
              {aboutLinks.map((l, i) => <Link key={i} href={l.url ?? "#"} className="hover:underline">{l.label}</Link>)}
            </div>
          </AccordionSection>
          <AccordionSection id="etc" title="Etcetera">
            <div className="flex flex-col gap-3 text-[14px] font-light">
              {etLinks.map((l, i) => <Link key={i} href={l.url ?? "#"} className="hover:underline">{l.label}</Link>)}
            </div>
          </AccordionSection>
          <AccordionSection id="searches" title="Popular Searches">
            <div className="flex flex-col gap-3 text-[14px] font-light">
              {searchLinks.map((l, i) => <Link key={i} href={l.url ?? "#"} className="hover:underline">{l.label}</Link>)}
            </div>
          </AccordionSection>
        </div>

        {/* Office cards (vertical stack) */}
        <div className="flex flex-col gap-4">
          {footerOffices.map(({ office, fallbackCity, fallbackAddr }, idx) => (
            <div key={idx} className="border border-white/30 rounded-2xl p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BoxiconsLocationFilled3 className="size-4" />
                  <p className="font-semibold text-[15px]">{office?.city ?? fallbackCity}</p>
                </div>
                <Link href={office?.directionsUrl ?? "#"} target="_blank" className="text-[13px] hover:underline">
                  Directions →
                </Link>
              </div>
              <p className="text-[13px] font-light leading-relaxed">{office?.addressLine1 ?? fallbackAddr}</p>
            </div>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5 flex-wrap">
          <RiInstagramFill className="size-[22px]" />
          <IcRoundFacebook className="size-[26px]" />
          <MdiYoutube className="size-[30px]" />
          <MdiLinkedin className="size-[24px]" />
          <PrimeTwitter className="size-[20px]" />
          <AkarIconsMediumFill className="size-[22px]" />
        </div>

        {/* Bottom links + copyright */}
        <div className="border-t border-white/20 pt-6 flex flex-col gap-3 text-[13px] font-light">
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:underline">Terms &amp; Conditions</Link>
            <Link href="/sitemap" className="hover:underline">Sitemap</Link>
          </div>
          <p className="text-white/70">© {mounted ? copyYear : "2024"} AnalytixLabs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Icon components ──────────────────────────────────────────────────────────

export function BoxiconsLocationFilled3({ className }: { className?: string }) {
  return (
    <div className={className} data-name="boxicons:location-filled">
      <svg className="block size-full" fill="currentColor" viewBox="0 0 21 21">
        <path d={svgPaths.p5169a80} />
      </svg>
    </div>
  );
}

export function RiInstagramFill({ className }: { className?: string }) {
  return (
    <div className={className} data-name="ri:instagram-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.p22379000} fill="currentColor" />
      </svg>
    </div>
  );
}

export function IcRoundFacebook({ className }: { className?: string }) {
  return (
    <div className={className} data-name="ic:round-facebook">
      <svg className="block size-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </div>
  );
}

export function MdiLinkedin({ className }: { className?: string }) {
  return (
    <div className={className} data-name="mdi:linkedin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="mdi:linkedin">
          <path d={svgPaths.p2fc0e480} fill="currentColor" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export function MdiYoutube({ className }: { className?: string }) {
  return (
    <div className={className} data-name="mdi:youtube">
      <svg className="block size-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    </div>
  );
}

export function PrimeTwitter({ className }: { className?: string }) {
  return (
    <div className={className} data-name="prime:twitter">
      <svg className="block size-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
      </svg>
    </div>
  );
}

export function AkarIconsMediumFill({ className }: { className?: string }) {
  return (
    <div className={className} data-name="akar-icons:medium-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 18">
        <path d={svgPaths.p19230580} fill="currentColor" id="medium" />
      </svg>
    </div>
  );
}

export function ChevronDown({ className }: { className?: string }) {
  return (
    <div className={className} data-name="weui:arrow-outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20">
        <path d={svgPaths.p24403700} fill="currentColor" transform="rotate(90 5 10)" />
      </svg>
    </div>
  );
}
