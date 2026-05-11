"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem, Office, SiteSettings, BlogPost } from "@/lib/api-client";

// Assets imported from the landing page directory to ensure consistency
import svgPaths from "../AlabsLandingPage/svg-5my3vzmwxc";
import imgAlabsLogo from "../AlabsLandingPage/3bf553a15ed8e3b04af9c46289180fc24b35c112.png";
import { imgGroup } from "../AlabsLandingPage/svg-2vm31";

// Types
export type GlobalLayoutProps = {
  topNav?: NavItem[];
  footerLinks?: NavItem[];
  footerCities?: NavItem[];
  offices?: Office[];
  siteSettings?: SiteSettings | null;
  posts?: BlogPost[];
};

// --- Sticky Global Navbar ---
export function GlobalNavbar({ topNav }: { topNav?: NavItem[] }) {
  const pathname = usePathname();
  const nav = topNav ?? [];
  
  const DEFAULT_LINKS = [
    { label: "Upcoming Batches", url: "/batches" },
    { label: "Explore Courses", url: "/courses" },
    { label: "Why Us", url: "/why-us" },
    { label: "For Corporates", url: "/for-corporates" },
    { label: "Blog", url: "/blog" },
    { label: "Contact Us", url: "/contact" },
  ];

  const links = nav.length > 0 ? nav : DEFAULT_LINKS;

  const isActive = (url: string) => {
    if (url === "/" && pathname === "/") return true;
    if (url !== "/" && pathname.startsWith(url)) return true;
    return false;
  };
  
  return (
    <header className="sticky top-0 z-[100] w-full bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] flex justify-center h-[68px]">
      <div className="w-[1440px] relative h-full flex items-center px-[33px]">
        {/* Logo */}
        <Link href="/" className="relative h-[57px] w-[191px] flex-shrink-0">
          <img alt="AnalytixLabs" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAlabsLogo.src} />
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center ml-[120px] gap-[35px]">
          {links.slice(0, 6).map((link, i) => (
            <Link 
              key={i} 
              href={link.url ?? "#"} 
              className={`relative inline-flex items-center font-['Inter:Medium',sans-serif] font-medium text-[13px] whitespace-nowrap transition-all duration-300 hover:text-[#07b3e7] py-2 ${
                isActive(link.url ?? "") ? "text-[#07b3e7]" : "text-[#09263f]"
              }`}
            >
              {link.label}
              {link.label === "Explore Courses" && (
                <ChevronDown className="ml-1 size-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              )}
              {isActive(link.url ?? "") && (
                <div className="absolute bottom-[-10px] left-0 right-0 h-[3px] bg-[#07b3e7] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center ml-auto gap-[15px]">
          <Link href="/signin" className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-[14px] hover:text-[#19cf9e] transition-colors">Sign in</Link>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-[#1de5b5] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-200"></div>
            <Link href="/signup" className="relative flex items-center justify-center bg-[#1de5b5] h-[40px] px-6 rounded-full shadow-[0px_4px_15px_0px_rgba(29,229,181,0.2)] font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[13px] hover:brightness-95 transition-all active:scale-95">
              Create Free Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// --- Global Footer ---
export function GlobalFooter({ offices, footerLinks, footerCities, siteSettings, posts }: GlobalLayoutProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  
  const o0 = offices?.[0];
  const o1 = offices?.[1];
  const o2 = offices?.[2];
  
  const fl = footerLinks ?? [];
  const aboutUsLinks = fl.filter(l => l.group === "FOOTER_COL_ABOUT").length > 0 ? fl.filter(l => l.group === "FOOTER_COL_ABOUT") : fl.slice(0, 5);
  const etcLinks = fl.filter(l => l.group === "FOOTER_COL_ETC").length > 0 ? fl.filter(l => l.group === "FOOTER_COL_ETC") : fl.slice(5, 10);
  
  const popularSearches = footerCities ?? [];
  const copyYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-r from-[#094c80] from-[13.037%] to-[#2096cb] w-screen left-1/2 -translate-x-1/2 flex justify-center text-white font-['Inter',sans-serif] overflow-hidden">
      <div className="w-[1440px] px-[66px] py-[80px] relative">
        {/* Decorative background circle */}
        <div className="absolute left-[-123px] size-[500px] top-[-254px] pointer-events-none">
          <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 500">
            <circle cx="250" cy="250" fill="white" r="250" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col gap-[80px]">
          {/* Top Section: Logo, Blog, and Link Columns */}
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
                  {(posts && posts.length > 0
                    ? posts.slice(0, 3)
                    : [
                        { slug: "parametric-vs-non-parametric", title: "Parametric vs. Non-Parametric Test: Which One to Use for Hypothesis Testing?" },
                        { slug: "what-is-agentic-ai", title: "What is Agentic AI – A Technical Guide for Beginners" },
                        { slug: "list-vs-tuple-python", title: "List vs Tuple in Python: Understanding Key Differences" },
                      ]
                  ).map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="hover:underline line-clamp-2">{p.title}</Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-[40px] flex-1 justify-items-end">
              <div className="flex flex-col gap-6 w-[180px]">
                <p className="font-semibold text-[16px]">About Us</p>
                <div className="flex flex-col gap-4 text-[14px] font-light">
                  {(aboutUsLinks.length > 0 ? aboutUsLinks : [
                    { label: "Why Us", url: "/why-us" },
                    { label: "Courses", url: "/courses" },
                    { label: "About Faculty", url: "/about" },
                    { label: "Contact Us", url: "/contact" },
                    { label: "AnalytixLabs Placements", url: "/placements" },
                  ]).map((link, i) => (
                    <Link key={i} href={link.url ?? "#"} className="hover:underline">{link.label}</Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6 w-[180px]">
                <p className="font-semibold text-[16px]">Etcetera</p>
                <div className="flex flex-col gap-4 text-[14px] font-light">
                  {(etcLinks.length > 0 ? etcLinks : [
                    { label: "System Requirements", url: "/requirements" },
                    { label: "Free Resources", url: "/resources" },
                    { label: "Success Stories", url: "/success-stories" },
                    { label: "Colleges Universities Training Courses", url: "/colleges" },
                  ]).map((link, i) => (
                    <Link key={i} href={link.url ?? "#"} className="hover:underline">{link.label}</Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6 w-[280px]">
                <p className="font-semibold text-[16px]">Popular Searches</p>
                <div className="flex flex-col gap-3 text-[14px] font-light">
                  {(popularSearches.length > 0 ? popularSearches.slice(0, 13) : [
                    { label: "Data Analyst Training Course In Delhi", url: "/courses" },
                    { label: "Data Science Course in Delhi", url: "/courses" },
                    { label: "Business Analyst Course In Delhi", url: "/courses" },
                    { label: "Artificial Intelligence Course in Delhi", url: "/courses" },
                    { label: "Generative AI Course", url: "/courses" },
                  ]).map((link, i) => (
                    <Link key={i} href={link.url ?? "#"} className="hover:underline whitespace-nowrap">{link.label}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-[30px]">
            {[o0, o1, o2].map((office, idx) => (
              <div key={idx} className="flex-1 border border-white/30 rounded-[15px] p-6 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <BoxiconsLocationFilled3 className="size-4" />
                    <p className="font-semibold text-[16px]">{office?.city ?? (idx === 0 ? "Noida" : idx === 1 ? "Gurgaon" : "Bengaluru")}</p>
                  </div>
                  <Link href={office?.directionsUrl ?? "#"} target="_blank" className="text-[14px] hover:underline flex items-center">
                    Get Directions <span className="ml-1">→</span>
                  </Link>
                </div>
                <p className="text-[14px] font-light leading-relaxed">
                  {office?.addressLine1 ?? (idx === 0 
                    ? "1st Floor, A78, A Block, Sector 2, Metro Gate 3, Noida, UP 201301." 
                    : idx === 1 
                      ? "2nd Floor, Sidhartha House, Building No. 6, Sector 44, Gurugram, Haryana 122003." 
                      : "Bldg 51/2, First floor 12th Main Road, Near BDA complex Sector 6, HSR Layout, Bengaluru, Karnataka 560102.")}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8 pt-10 border-t border-white/20">
            <div className="flex justify-between items-center">
              <p className="text-[14px] font-light">
                © {mounted ? copyYear : "2024"} AnalytixLabs. All Rights Reserved.
              </p>
              
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
    </footer>
  );
}

// --- Icon Sub-components ---

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
