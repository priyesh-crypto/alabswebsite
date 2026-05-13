// @ts-nocheck
"use client";
// Phase 4b dynamic conversion of the AlabsLandingPage Figma export.
// Per CLAUDE.md §8: layout, classes, positioning, SVG paths, and PNG
// imports are PRESERVED VERBATIM. Only hardcoded strings/numbers/links
// get replaced with prop reads (with the original literal as fallback).
// PNG imports below stay as the visual fallback; runtime props can
// override individual images per CLAUDE.md §8 step 5.
import { useState, useRef, useEffect } from "react";

// Google Maps embed for the location selector under the "Request a Call back" form.
// Uses the simple `?q=…&output=embed` format that does NOT require an API key. If you
// later provide a Maps Embed API key in NEXT_PUBLIC_GMAPS_KEY, switch to the v1 endpoint.
const CITY_LABELS = ["Noida", "Gurgaon", "Bangalore"] as const;

const COUNTRY_CODES = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+65", country: "Singapore" },
  { code: "+971", country: "UAE" },
  { code: "+1", country: "Canada" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+81", country: "Japan" },
  { code: "+86", country: "China" },
  { code: "+7", country: "Russia" },
  { code: "+27", country: "South Africa" },
  { code: "+55", country: "Brazil" },
  { code: "+52", country: "Mexico" },
  { code: "+31", country: "Netherlands" },
  { code: "+34", country: "Spain" },
  { code: "+39", country: "Italy" },
  { code: "+41", country: "Switzerland" },
  { code: "+46", country: "Sweden" },
] as const;

const mapEmbedUrl = (city: string) => {
  const key = process.env.NEXT_PUBLIC_GMAPS_KEY;
  if (key) {
    return `https://www.google.com/maps/embed/v1/place?key=${key}&q=AnalytixLabs+${encodeURIComponent(city)}`;
  }
  return `https://www.google.com/maps?q=${encodeURIComponent(`AnalytixLabs ${city}`)}&output=embed`;
};
import Link from "next/link";
import type {
  BlogPost,
  Category,
  Course,
  Faq,
  HiringPartner,
  LearningMode,
  Masterclass,
  NavItem,
  Office,
  Page,
  SiteSettings,
  Testimonial,
} from "@/lib/api-client";

import svgPaths from "../svg-5my3vzmwxc";
import imgStudents from "../50558ea6f485093bd8f538cd38248c9901a11d01.png";
import imgStudents1 from "../76aae0cd415561ca5fa786b6cfe0512098568bff.png";
import imgStudents2 from "../8dcc5bb265eae07450528605f3f07ba391aa095b.png";
import imgStudents3 from "../50602167a8692a495b4cb0ef8171feea9d2aded5.png";
import imgStudents4 from "../ac6fd5b533236c77026eb158b3e17ff6c04083d9.png";
import imgStudent from "../ebdf0364a656d88c82cbd5e29eba0b5f7299ccbf.png";
import imgAsset253X1 from "../1d246294d3b2d1241d32b8ee0187da67083422b9.png";
import imgManWithBag from "../996a7650d39df9f9d0c4aaa0e42c2b485c8b991a.png";
import imgImg from "../30119f874016a5cd886694d00842f8baee878bd6.png";
import imgImg1 from "../e86b2f9ddf2ec35475ae87d1814fefa7e0a19639.png";
import imgImage34 from "../c94d34e2f718a4dd21715c47c11eb89121b7a3ea.png";
import imgEllipse92 from "../ff201a4e824358a86a9ece853ac8ae2093f873e8.png";
import imgManRed from "../0ff0f453bd04fe1e0c83fc2fdb469f36963dc095.png";
import imgGirlSmiling from "../499548fee627c1d39da43fe9633451763856bdab.png";
import imgGirl from "../35e13ffebc486245a925641a88d5a3fb4c148424.png";
import imgMan from "../ca246bc8f4ab32f503e63c4a3ddc2ee3aff91329.png";
import imgCourseImg from "../ab4a506e3d4b25f4f06209f40fea6fc3f23abdf2.png";
import imgCourseImg1 from "../bf0dbb82b660e793c6c3eda13d2b603c82a4970c.png";

import imgBrand from "../1904a369c66c61d55534bc891b6545f664e34340.png";
import imgBrand1 from "../df7460e7d387cf05847fa1a9558d64e7697c7f9a.png";
import imgImage41 from "../a97303ee2d1e88ae2dcd01bf4eaed6cc3ca65d23.png";
import imgBrand2 from "../d7317d424c4f54cc294ca80ca343bfe0d33648ec.png";
import imgBrand3 from "../f85fd5624752bf13429a0092fb513d7678f64954.png";
import imgRectangle135 from "../753a8cf92e71b3a1c99a662be50669e23496d5bb.png";
import imgSponser from "../0effb68a268a8b7912b8aae4d984808edb6a835d.png";
import { imgGroup } from "../svg-2vm31";
import { LeadForm } from "@/features/leads/components/LeadForm";
import { CourseCard } from "@/features/courses/components/CourseCard";
import { FaqFlowSection } from "@/features/support/components/FaqFlowSection";
import {
  Icon,
  Icon1,
  Icon2,
  Icon3,
  Group,
  IconParkSolidDataDisplay,
  BoxiconsMonitor,
  Icon4,
  MdiTickCircle,
  MdiTickCircle1,
  MdiTickCircle2,
  MdiTickCircle3,
  Group1,
  Group3,
  ModeTickIcon,
  WpfOnline,
  MdiLocation,
  MdiLocation1,
  MdiLocation2,
  StreamlineGroupMeetingCallRemix,
  Icons8Student,
  Group2,
  StreamlinePlumpGlobalLearning,
  CarbonMachineLearningModel,
  AkarIconsCross,
  AkarIconsCross1,
  AkarIconsCross2,
  AkarIconsCross3,
  AkarIconsCross4,
  AkarIconsCross5,
  AkarIconsCross6,
  AkarIconsCross7,
  LineMdStarFilled,
  LineMdStarFilled1,
  LineMdStarFilled2,
  LineMdStarFilled3,
  LineMdStarFilled4,
  MdiAccountStudent,
  MaterialSymbolsLightLockOutline,
  Group4,
  HealthiconsNoOutline,
  MdiLightClock,
  MdiLocation3,
  MdiLocation4,
  Group5,
  LetsIconsDateFill,
  Group6,
  LetsIconsDateFill1,
  Group7,
  MingcuteTimeFill,
  Group8,
  MingcuteTimeFill1,
  FluentPresenceAvailable12Filled,
  FluentPresenceAvailable12Filled1,
  Icon5,
  Group9,
  Group10,
  BoxiconsLocationFilled,
  BoxiconsLocationFilled1,
  BoxiconsLocationFilled2,
  Group11,
  LeftArrowButton,
  WeuiArrowOutlined,
  FamiconsCall,
  Group15,
  BoxiconsLocationFilled3,
  BoxiconsLocationFilled4,
  BoxiconsLocationFilled5,
  RiInstagramFill,
  IcRoundFacebook,
  MdiLinkedin,
  MdiYoutube,
  Group14,
  ClipPathGroup,
  Group12,
  PrimeTwitter,
  AkarIconsMediumFill
} from "./LandingPageIcons";





import { LandingPageProps } from "../AlabsLandingPage";
function resolvePath(obj: any, path: string) {
  return path.split('.').reduce((o, p) => (o ? o[p] : undefined), obj);
}

function block(pb: any, key: string): string | undefined {
  const blocks = pb?.blocks as Record<string, unknown> | undefined;
  if (!blocks) return undefined;
  const v = resolvePath(blocks, key) ?? blocks[key];
  return typeof v === "string" ? v : undefined;
}
function blockList(pb: any, key: string): string[] | undefined {
  const blocks = pb?.blocks as Record<string, unknown> | undefined;
  if (!blocks) return undefined;
  const v = resolvePath(blocks, key) ?? blocks[key];
  if (Array.isArray(v) && v.every(x => typeof x === "string")) return v as string[];
  return undefined;
}
function blockCta(pb: any, key: string): { label?: string; url?: string } {
  const blocks = pb?.blocks as Record<string, unknown> | undefined;
  if (!blocks) return {};
  const v = resolvePath(blocks, key) ?? blocks[key];
  if (v && typeof v === "object") {
    const o = v as Record<string, unknown>;
    return {
      label: typeof o.label === "string" ? o.label : undefined,
      url: typeof o.url === "string" ? o.url : typeof o.href === "string" ? o.href : undefined,
    };
  }
  return {};
}


export function AlabsLandingPageMobile({
  pageBlocks, activeCategory, setActiveCategory, handleCategoryClick,
  carouselCourses, categories, stats, learningModes, testimonials, hiringPartners, pill, pillUrl, siteSettings,
  activeLearningMode, setActiveLearningMode,
  activeTestimonialIdx, handleTestimonialDot, testimonialPaused, testimonialCarouselRef, t0, testimonialKey,
  formData, handleFormChange, handleFormSubmit, isNotRobot, setIsNotRobot, formError, formSubmitted,
  activeLocation, setActiveLocation, CITY_LABELS, COUNTRY_CODES, mapEmbedUrl,
  setLeadModalType, setShowLeadModal,
  carouselFading, carouselRef, handleCarouselScroll, handleNextCourse, handlePrevCourse, carouselMaxScroll, carouselScrollLeft,
  sinceTagline, featuredCourses
}: any) {
  return (
    <>
      {/* ═══ MOBILE LAYOUT (hidden at lg+) ═══ */}
      <div className="block lg:hidden w-full overflow-x-hidden">
        {/* ── 1. HERO ── */}
        <section className="px-5 pt-6 pb-6 bg-white">
          <p className="text-xs font-semibold text-alabs-navy mb-3 opacity-70">{block(pageBlocks, "hero_landing.eyebrow") ?? block(pageBlocks, "hero.tagline") ?? sinceTagline ?? "Since 2011"}</p>
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] sm:text-[34px] text-black leading-[1.2] mb-3">
            <span>{block(pageBlocks, "hero.title.prefix") ?? "Become a"} </span>
            <span className="bg-clip-text bg-gradient-to-r from-alabs-primary-light from-[34%] to-alabs-blue to-[79%] text-transparent">{block(pageBlocks, "hero.title.brand") ?? "Data Scientist"}</span>
            <span> {block(pageBlocks, "hero.title.suffix") ?? "with Real Industry Projects & Placement Support"}</span>
          </h1>
          <p className="text-sm text-black/50 mb-6 leading-relaxed">{block(pageBlocks, "hero.subheading") ?? block(pageBlocks, "hero.heading") ?? "Learn Data Science, AI and Data Analytics with 600+ learning hours and industry projects."}</p>
          <div className="flex flex-row gap-3 mb-8 flex-wrap">
            <Link href={blockCta(pageBlocks, "hero.cta1").url ?? "/courses"} className="inline-flex items-center justify-center bg-alabs-primary-light h-12 px-6 rounded-full font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-sm sm:text-base whitespace-nowrap">
              {blockCta(pageBlocks, "hero.cta1").label ?? "Explore Courses"}
            </Link>
            <Link href={blockCta(pageBlocks, "hero.cta2").url ?? "/contact"} className="inline-flex items-center justify-center bg-alabs-yellow h-12 px-6 rounded-full font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-sm sm:text-base whitespace-nowrap">
              {blockCta(pageBlocks, "hero.cta2").label ?? "Book Free Career Consultation"}
            </Link>
          </div>
          {/*
            Each column reserves space at the top (pt) for the figure to peek
            ABOVE the card. The figure is absolutely-positioned BEHIND the card
            (z-0 + pointer-events-none) so the card stays fully clickable and
            visually covers the bottom portion of the figure — the "image
            emerging from behind the box" effect the spec calls for.
            Both figures share an identical bounding box (FIGURE_H) so they
            render at visually equal size despite their different natural
            aspect ratios (girl 1:1, man 2:3).
          */}
          <div className="relative mb-10">
            {/* X chevron backdrop — centered, scales for tablet */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[92%] max-w-[440px] sm:max-w-[560px] md:max-w-[680px] lg:max-w-[800px] aspect-[97/102] z-0 opacity-30"
              style={{
                backgroundImage: `url(${imgAsset253X1.src})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
              }}
            />

            <div className="relative z-10 grid grid-cols-2 gap-3 items-end">
              {/* Fresher column */}
              <div className="relative pt-[120px] sm:pt-[160px] md:pt-[200px] lg:pt-[240px]">
                {/* Girl figure — 1:1 ratio (Full Width) */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center">
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      src={imgGirl.src}
                      alt="Student"
                      className="w-full h-full object-contain object-bottom select-none"
                    />
                  </div>
                </div>
                {/* Card — fully clickable, on top */}
                <button
                  onClick={() => { setLeadModalType("fresher"); setShowLeadModal(true); }}
                  className="relative z-10 w-full flex flex-col justify-center bg-alabs-bg-light border-[2.165px] border-alabs-primary rounded-[21.65px] p-4 sm:p-5 text-left transition active:scale-[0.98] shadow-[0_5.77px_28.87px_0_rgba(0,0,0,0.25)] min-h-[120px] sm:min-h-[140px] md:min-h-[160px]"
                >
                  <p className="text-alabs-blue text-[10px] sm:text-xs font-semibold mb-0.5 uppercase tracking-wide">
                    {block(pageBlocks, "leadCard1.bestFor") ?? "Best for"}
                  </p>
                  <p className="text-alabs-navy font-bold text-[13px] sm:text-[15px] md:text-[18px] leading-snug mb-1">
                    {block(pageBlocks, "leadCard1.title") ?? "Fresher / Student"}
                  </p>
                  <p className="text-alabs-navy/60 text-[10px] sm:text-xs md:text-sm leading-snug">
                    {block(pageBlocks, "leadCard1.subtitle") ?? "Starting or preparing to start your career"}
                  </p>
                  <span className="absolute top-3 right-3 text-alabs-primary opacity-30">
                    <svg className="size-5 md:size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 3 1 9l11 6 9-4.91V17h2V9zM5 13.18v4L12 21l7-3.82v-4L12 17z"/>
                    </svg>
                  </span>
                </button>
              </div>

              {/* Experienced column */}
              <div className="relative pt-[120px] sm:pt-[160px] md:pt-[200px] lg:pt-[240px]">
                {/* Man figure — Balanced width to match Girl's height (approx 68% of column) */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center">
                  <div className="w-[68%] aspect-[393/589] overflow-hidden">
                    <img
                      src={imgMan.src}
                      alt="Professional"
                      className="w-full h-full object-contain object-bottom select-none"
                    />
                  </div>
                </div>
                <button
                  onClick={() => { setLeadModalType("experienced"); setShowLeadModal(true); }}
                  className="relative z-10 w-full flex flex-col justify-center bg-alabs-bg-light border-[2.165px] border-alabs-primary rounded-[21.65px] p-4 sm:p-5 text-left transition active:scale-[0.98] shadow-[0_5.77px_28.87px_0_rgba(0,0,0,0.25)] min-h-[120px] sm:min-h-[140px] md:min-h-[160px]"
                >
                  <p className="text-alabs-blue text-[10px] sm:text-xs font-semibold mb-0.5 uppercase tracking-wide">
                    {block(pageBlocks, "leadCard2.bestFor") ?? "Best for"}
                  </p>
                  <p className="text-alabs-navy font-bold text-[13px] sm:text-[15px] md:text-[18px] leading-snug mb-1">
                    {block(pageBlocks, "leadCard2.title") ?? "Experienced Professional"}
                  </p>
                  <p className="text-alabs-navy/60 text-[10px] sm:text-xs md:text-sm leading-snug">
                    {block(pageBlocks, "leadCard2.subtitle") ?? "Working, switching roles, or restarting your career"}
                  </p>
                  <span className="absolute top-3 right-3 text-alabs-blue opacity-30">
                    <svg className="size-5 md:size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4z"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <p className="text-center font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-base mb-3">
            {block(pageBlocks, "hero_landing.ctaSubtext") ?? block(pageBlocks, "hero.ctaSubtext") ?? "Find Your Perfect Learning Path!"}
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-7 text-[11px] sm:text-xs text-alabs-navy/60">
            <span className="inline-flex items-center gap-1.5">
              <svg className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-2.21-1.79-4-4-4S4 8.79 4 11v4h8m4 0h4v-3c0-2.21-1.79-4-4-4-1.04 0-2 .4-2.71 1.04M12 11V7a4 4 0 118 0v4"/></svg>
              Secure &amp; Private
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path strokeLinecap="round" d="M8 8l8 8M16 8l-8 8"/></svg>
              No Spam, ever
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2"/></svg>
              Takes only 2 mins
            </span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {[imgStudents, imgStudents1, imgStudents2, imgStudents3, imgStudents4].map((img, i) => (
                <div key={i} className="size-8 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                  <img src={img.src} className="size-full object-cover" alt="" />
                </div>
              ))}
            </div>
            <div>
              <div className="text-sm leading-none">{"⭐".repeat(Math.round(Number(stats.rating ?? 5)))} <span className="text-[11px] text-black/40 ml-1">({stats.rating ?? "4.8"})</span></div>
              <span className="text-[11px] text-black/50">Rated by <strong className="text-alabs-navy">{block(pageBlocks, "hero_landing.socialProofText") ?? block(pageBlocks, "hero.ratedBy") ?? stats.ratedBy ?? "5000+"}</strong> learners</span>
            </div>
          </div>
        </section>

        {/* ── 2. SPONSER ── */}
        <div className="px-5 py-3 bg-white">
          <img src="/Final_Logo.png" alt="AnalytixLabs Certification Partners" className="max-h-20 object-contain w-full" />
        </div>

        {/* ── 3. HIRING PARTNERS ── */}
        <section className="bg-white py-8">
          <p className="text-center font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-xl mb-1">
            <span className="text-3xl">{block(pageBlocks, "hiring_partners.metricLabel") ?? stats.candidates ?? "15,000+"}</span> {block(pageBlocks, "hiring_partners.metricSuffix") ?? stats.candidatesSuffix ?? "Candidates"}
          </p>
          <p className="text-center text-sm text-alabs-navy/50 mb-5">placed at top companies</p>
          <div className="w-full flex items-center" style={{ overflow: "hidden", height: "64px" }}>
            <div className="flex items-center gap-10 flex-none" style={{ width: "max-content", animation: "alp-marquee-left 20s linear infinite", willChange: "transform" }}>
              {[
                { src: imgBrand.src, h: 36 }, { src: imgBrand1.src, h: 40 }, { src: imgImage41.src, h: 42 }, { src: imgBrand2.src, h: 36 }, { src: imgBrand3.src, h: 38 },
                { src: imgBrand.src, h: 36 }, { src: imgBrand1.src, h: 40 }, { src: imgImage41.src, h: 42 }, { src: imgBrand2.src, h: 36 }, { src: imgBrand3.src, h: 38 },
              ].map((s, i) => (
                <img key={i} src={s.src} alt="" className="object-contain flex-none opacity-70" style={{ height: s.h }} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. CATEGORY MARQUEE PILLS ── */}
        <div className="w-full py-4 bg-white" style={{ overflow: "hidden" }}>
          <div className="flex items-center mb-3" style={{ overflow: "hidden", height: "44px" }}>
            <div className="flex gap-4 items-center flex-none" style={{ width: "max-content", animation: "alp-marquee-left 20s linear infinite", willChange: "transform" }}>
              {[
                { text: pill(0, "Agentic AI"), color: categories[0]?.color ?? "#d2faf0" },
                { text: pill(2, "Data Science"), color: categories[2]?.color ?? "#fffad2" },
                { text: pill(4, "Data Analytics"), color: categories[4]?.color ?? "#f0fbff" },
                { text: pill(6, "Business Analytics"), color: categories[6]?.color ?? "#fff2fa" },
                { text: pill(0, "Agentic AI"), color: categories[0]?.color ?? "#d2faf0" },
                { text: pill(2, "Data Science"), color: categories[2]?.color ?? "#fffad2" },
                { text: pill(4, "Data Analytics"), color: categories[4]?.color ?? "#f0fbff" },
                { text: pill(6, "Business Analytics"), color: categories[6]?.color ?? "#fff2fa" },
              ].map((p, i) => (
                <div key={i} className="flex-none px-5 py-2 rounded-full font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-sm whitespace-nowrap" style={{ background: p.color }}>{p.text}</div>
              ))}
            </div>
          </div>
          <div className="flex items-center" style={{ overflow: "hidden", height: "44px" }}>
            <div className="flex gap-4 items-center flex-none" style={{ width: "max-content", animation: "alp-marquee-right 24s linear infinite", willChange: "transform" }}>
              {[
                { text: pill(1, "Full Stack AI"), color: categories[1]?.color ?? "#fffad2" },
                { text: pill(3, "Data Visualization"), color: categories[3]?.color ?? "#d2faf0" },
                { text: pill(5, "Bootcamp"), color: categories[5]?.color ?? "#fff2fa" },
                { text: pill(7 % Math.max(categories.length, 1), "Business Analytics"), color: categories[7 % Math.max(categories.length, 1)]?.color ?? "#f0fbff" },
                { text: pill(1, "Full Stack AI"), color: categories[1]?.color ?? "#fffad2" },
                { text: pill(3, "Data Visualization"), color: categories[3]?.color ?? "#d2faf0" },
                { text: pill(5, "Bootcamp"), color: categories[5]?.color ?? "#fff2fa" },
                { text: pill(7 % Math.max(categories.length, 1), "Business Analytics"), color: categories[7 % Math.max(categories.length, 1)]?.color ?? "#f0fbff" },
              ].map((p, i) => (
                <div key={i} className="flex-none px-5 py-2 rounded-full font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-sm whitespace-nowrap" style={{ background: p.color }}>{p.text}</div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 5. COURSES ── */}
        <section className="bg-alabs-bg-light py-8 px-5">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-2xl mb-5">
            {block(pageBlocks, "courses_challenge.headline") ?? block(pageBlocks, "coursesChallenge.headline") ?? "Our Courses – 6 Months Job Challenge"}
          </h2>
          <div className="overflow-x-auto -mx-5 px-5 mb-5 scrollbar-none">
            <div className="flex gap-2 w-max">
              {([
                categories[0]?.name ?? "Data Science & Analytics",
                categories[1]?.name ?? "Artificial Intelligence",
                categories[2]?.name ?? "Full Stack AI",
                categories[3]?.name ?? "Agentic AI",
              ]).map((label, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCategoryClick(idx)}
                  className={`shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${activeCategory === idx ? "bg-alabs-primary text-white" : "bg-white border border-alabs-navy/20 text-alabs-navy"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-opacity duration-150 ${carouselFading ? "opacity-0" : "opacity-100"}`}>
            {carouselCourses.slice(0, 4).map((course, i) => (
              <CourseCard key={(course as Course)?.id ?? `mc-${i}`} course={course as Course} idx={i} cardStyle={{ width: "100%" }} />
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link href="/courses" className="inline-flex items-center gap-2 text-alabs-primary font-semibold text-sm">View All Courses →</Link>
          </div>
        </section>

        {/* ── 6. LEARNING MODES ── */}
        <section className="bg-white py-10 px-5">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-3xl text-center mb-3">
            {block(pageBlocks, "learning_modes.headline") ?? block(pageBlocks, "learningModes.headline") ?? "Learning Modes"}
          </h2>
          <p className="text-sm text-center text-alabs-navy/60 leading-relaxed mb-6 max-w-[560px] mx-auto">
            {block(pageBlocks, "learningModes.subtitle") ?? "Explore Personalized learning modes to match your style! Whether you're a working professional or student or want to upskill, we've got you covered. Our approach ensures effective learning, making it enjoyable and rewarding."}
          </p>
          <div className="flex flex-row gap-2 sm:gap-3 mb-6 overflow-x-auto -mx-5 px-5 scrollbar-none">
            {[0, 1, 2].map(i => (
              <button
                key={i}
                onClick={() => setActiveLearningMode(i)}
                className={`shrink-0 rounded-xl px-4 sm:px-6 h-12 text-sm sm:text-base font-semibold transition-all duration-200 whitespace-nowrap ${activeLearningMode === i ? "bg-gradient-to-r from-alabs-darkblue to-alabs-lightblue text-white shadow-lg" : "border border-alabs-darkblue/30 bg-white text-alabs-navy shadow-sm"}`}
              >
                {learningModes[i]?.name ?? ["Weekday Bootcamp", "Weekday Batches", "Self-paced Blended"][i]}
              </button>
            ))}
          </div>
          {(() => {
            const MOBILE_MODE_MOCKS = [
              { c1: { title: "DataScience 360", loc: "Noida", date: "05 May", time: "9:30 am - 01:30pm", seats: "08 Seats" }, c2: { title: "Data Visualization & Analytics", loc: "Noida", date: "05 May", time: "9:30 am - 01:30pm", seats: "08 Seats" } },
              { c1: { title: "Business Analytics", loc: "Bengaluru", date: "15 May", time: "6:30 PM - 9:30 PM", seats: "10 Seats" }, c2: { title: "Data Visualization", loc: "Online", date: "22 May", time: "7:00 PM - 10:00 PM", seats: "05 Seats" } },
              { c1: { title: "Machine Learning", loc: "Online", date: "Self-Paced", time: "Anytime", seats: "15 Seats" }, c2: { title: "Deep Learning", loc: "Online", date: "Self-Paced", time: "Anytime", seats: "20 Seats" } },
            ];
            const cur = MOBILE_MODE_MOCKS[activeLearningMode] ?? MOBILE_MODE_MOCKS[0]!;
            const modeName = learningModes[activeLearningMode]?.name ?? ["Weekday Bootcamp", "Weekday Batches", "Self-paced Blended"][activeLearningMode];
            const modeBlurb = learningModes[activeLearningMode]?.subtitle ?? (activeLearningMode === 0 ? "Experiential learning with in-person mentorship!" : activeLearningMode === 1 ? "Intensive full-day sessions for rapid upskilling." : "Learn at your own speed with weekend doubt sessions.");
            return (
              <div className="rounded-2xl border border-alabs-navy/15 bg-white p-5 sm:p-6">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-darkblue text-xl sm:text-2xl mb-1">{modeName}</h3>
                <p className="text-sm text-alabs-navy/60 mb-5">{modeBlurb}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[cur.c1, cur.c2].map((card, ci) => (
                    <div key={ci} className="bg-alabs-darkblue rounded-xl p-5 text-white">
                      <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-lg leading-snug mb-4">{card.title}</h4>
                      <div className="space-y-2.5 text-sm">
                        {[
                          { icon: (<svg className="size-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"/></svg>), label: "Location -", value: card.loc },
                          { icon: (<svg className="size-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm10 6H4v8h12V8z"/></svg>), label: "Date -", value: card.date },
                          { icon: (<svg className="size-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm.5 4a.5.5 0 00-1 0v4.2l3 1.8a.5.5 0 10.5-.86l-2.5-1.5z"/></svg>), label: "Time -", value: card.time },
                          { icon: (<svg className="size-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/></svg>), label: "Available seats -", value: card.seats },
                        ].map((row, ri) => (
                          <div key={ri} className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5 last:border-b-0 last:pb-0">
                            <span className="inline-flex items-center gap-2 text-white/60">{row.icon}{row.label}</span>
                            <span className="font-semibold text-white text-right">{row.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </section>

        {/* ── 7. INSTITUTE INTRO ── */}
        <section className="bg-alabs-bg-light py-8 px-5">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-2xl mb-4">{block(pageBlocks, "about.heading") ?? "AnalytixLabs is a top-ranked Data Science Institute"}</h2>
          <p className="text-sm text-alabs-navy/70 leading-relaxed mb-4">{block(pageBlocks, "about.body") ?? "When it comes to industry-relevant data analytics courses and certifications, AnalytixLabs has led thousands of aspirants to desired job roles in data engineering, data science, AI, and business analytics since 2011."}</p>
          <p className="text-sm text-alabs-navy font-medium mb-3">{block(pageBlocks, "about.cityIntro") ?? "You can pick a data science course in:"}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {["Online", "Bangalore", "Gurgaon", "Noida"].map(city => (
              <span key={city} className="px-3 py-1.5 rounded-full border border-alabs-navy/30 text-sm font-semibold text-alabs-navy bg-white">{city}</span>
            ))}
          </div>
          <ul className="flex flex-col gap-2.5 mb-6">
            {(blockList(pageBlocks, "about.cityHighlights") ?? ["One to one mentorship", "Industry driven curriculum curated", "Experiential learning", "Extensive post-class sessions"]).map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-alabs-navy">
                <svg className="size-4 shrink-0 mt-0.5 text-alabs-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link href="/about" className="inline-flex items-center justify-center bg-alabs-primary h-12 px-6 rounded-full font-semibold text-white text-sm mb-6">Value Proposition</Link>
          <div className="grid grid-cols-2 gap-3">
            <img src={imgImg.src} alt="" className="rounded-2xl object-cover aspect-[3/4] w-full" />
            <img src={imgImg1.src} alt="" className="rounded-2xl object-cover aspect-[3/4] w-full mt-6" />
          </div>
        </section>

        {/* ── 8. CTA BANNER ── */}
        <section className="bg-gradient-to-r from-alabs-darkblue from-[13%] to-alabs-lightblue py-10 px-6">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-xl leading-snug mb-2">{`"Unlock Insights. Enroll Now. Transform Tomorrow."`}</p>
          <p className="text-white/70 text-sm mb-6">Change the course of your career now</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-alabs-yellow h-12 px-6 rounded-full font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-sm">Contact Us</Link>
        </section>

        {/* ── 9. CALLBACK FORM ── */}
        <section className="bg-white py-10 px-5">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-2xl leading-snug mb-1">Excited?<br />Talk to Expert Counselor</p>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-xl mt-3 mb-6">Request a Call back</h2>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 mb-7">
            <input value={formData.name} onChange={handleFormChange("name")} placeholder="Name" className="w-full border border-alabs-navy/30 rounded-full h-14 px-5 text-base outline-none focus:border-alabs-primary-light" />
            <div className="flex gap-2">
              <select value={formData.code} onChange={handleFormChange("code")} className="w-24 border border-alabs-navy/30 rounded-full h-14 px-3 text-sm outline-none focus:border-alabs-primary-light bg-white">
                {COUNTRY_CODES.map(c => <option key={c.code + c.country} value={c.code}>{c.code}</option>)}
              </select>
              <input value={formData.mobile} onChange={handleFormChange("mobile")} placeholder="Mobile number" className="flex-1 border border-alabs-navy/30 rounded-full h-14 px-5 text-base outline-none focus:border-alabs-primary-light" />
            </div>
            <input type="email" value={formData.email} onChange={handleFormChange("email")} placeholder="Email" className="w-full border border-alabs-navy/30 rounded-full h-14 px-5 text-base outline-none focus:border-alabs-primary-light" />
            <select value={formData.city} onChange={handleFormChange("city")} className="w-full border border-alabs-navy/30 rounded-full h-14 px-5 text-base outline-none focus:border-alabs-primary-light bg-white">
              {CITY_LABELS.map(c => <option key={c}>{c}</option>)}
            </select>
            <label className="flex items-center gap-2 text-sm text-alabs-navy/70 cursor-pointer">
              <input type="checkbox" checked={isNotRobot} onChange={e => setIsNotRobot(e.target.checked)} className="size-4 rounded" />
              I am not a robot
            </label>
            {formError && <p className="text-red-500 text-sm">{formError}</p>}
            {formSubmitted && <p className="text-alabs-primary text-sm font-medium">Thanks! We&rsquo;ll be in touch shortly.</p>}
            <button type="submit" className="w-full bg-alabs-yellow h-14 rounded-full font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-base hover:brightness-95 transition">Send</button>
          </form>
          <div className="rounded-2xl overflow-hidden mb-4">
            <iframe
              key={`m-map-${activeLocation}`}
              title={`${CITY_LABELS[activeLocation]} map (mobile)`}
              src={mapEmbedUrl(CITY_LABELS[activeLocation])}
              className="w-full border-0"
              style={{ height: "280px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex gap-2">
            {([0, 1, 2] as const).map(idx => (
              <button key={idx} onClick={() => setActiveLocation(idx)} className={`flex-1 h-11 rounded-full text-xs font-semibold transition-all ${activeLocation === idx ? "bg-alabs-primary text-white" : "bg-white border border-alabs-navy/20 text-alabs-navy"}`}>
                {idx === 2 ? "Bengaluru" : CITY_LABELS[idx]}
              </button>
            ))}
          </div>
        </section>

        {/* ── 10. TESTIMONIALS ── */}
        {(() => {
          type CarouselItem = { name: string; role: string | null; company: string | null; quote: string; rating: number; photoUrl: string | null };
          const FALLBACK_TESTIMONIALS: CarouselItem[] = [
            { name: "Piyush Ganar", role: "Class of 2012 IIM Ahmedabad", company: "Assistant General Manager Sales Marketing, Findability Sciences", quote: "The course material is very easy to understand and the case studies were based on real time business problems. What I love the most about Sumeet and his team is that they never operated the institute like a typical commercial enterprise but more like a temple for learning. The gates of Alabs are always open for students for any kind of help and guidance. I would recommend ALabs to all.", rating: 5, photoUrl: null },
            { name: "Anita Sharma", role: "Class of 2020", company: "Senior Data Scientist, Accenture", quote: "AnalytixLabs delivered exactly what they promised — strong fundamentals, hands-on projects, and continuous mentor support. The placement team kept iterating with me on my resume and mock interviews. I cracked my first DS role within two months.", rating: 5, photoUrl: null },
            { name: "Rahul Verma", role: "Class of 2019", company: "AI Engineer, Genpact", quote: "I switched from a non-technical background and the structured curriculum, real datasets, and group capstone projects made the difference. Faculty answered doubts even on weekends. Worth every rupee.", rating: 5, photoUrl: null },
            { name: "Sneha Iyer", role: "Class of 2021", company: "Analytics Lead, Deloitte", quote: "What sets ALabs apart is the blend of theory and industry context. The instructors are working professionals — you feel the difference in every session. Got placed in 3 weeks of starting interviews.", rating: 5, photoUrl: null },
            { name: "Karan Mehta", role: "Class of 2018", company: "ML Manager, EY", quote: "The mentorship goes beyond the classroom — career conversations, salary negotiation tips, even post-placement check-ins. ALabs is family, not a coaching center.", rating: 5, photoUrl: null },
          ];
          const items: CarouselItem[] = testimonials.length > 0
            ? testimonials.slice(0, 7).map((t) => ({ name: t.name, role: t.role, company: t.company, quote: t.quote, rating: t.rating, photoUrl: t.photoUrl }))
            : FALLBACK_TESTIMONIALS;
          return (
            <section className="bg-alabs-bg-light py-10 overflow-hidden">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-3xl text-center mb-2 px-5">
                {block(pageBlocks, "testimonials_carousel.headline") ?? block(pageBlocks, "testimonials.headline") ?? "What Students Say About Us?"}
              </h2>
              <p className="text-sm text-center text-alabs-navy/60 mb-7 px-5">
                {block(pageBlocks, "testimonials_carousel.subhead") ?? block(pageBlocks, "testimonials.subhead") ?? "True Stories, Transformative Career Experience"}
              </p>
              <div
                ref={testimonialCarouselRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none pb-2"
                style={{ scrollbarWidth: "none", paddingInline: "10%" }}
              >
                {items.map((t, i) => (
                  <div
                    key={i}
                    className="snap-center shrink-0 w-[78%] sm:w-[60%] md:w-[55%] rounded-2xl bg-gradient-to-br from-[#eaf6ed] via-white to-[#eaf2f8] p-5 sm:p-6 border border-white shadow-[0px_4px_24px_0px_rgba(9,38,63,0.06)]"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="size-20 sm:size-24 rounded-full border-[3px] border-white shadow-[0px_10px_30px_0px_rgba(0,0,0,0.12)] overflow-hidden mb-3 bg-white">
                        <img src={t.photoUrl ?? imgEllipse92.src} className="size-full object-cover" alt={t.name} />
                      </div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-base">{t.name}</p>
                      {t.role && <p className="text-sm text-alabs-navy/70 mt-0.5">{t.role}</p>}
                      {t.company && (
                        <p className="text-xs text-alabs-navy/50 mt-0.5 mb-3 px-2">({t.company})</p>
                      )}
                      <div className="flex gap-0.5 mb-4 text-sm text-alabs-yellow" aria-label={`${t.rating} stars`}>
                        {Array.from({ length: Math.max(1, Math.min(5, t.rating)) }).map((_, s) => (<span key={s}>★</span>))}
                      </div>
                      <p className="text-sm text-alabs-navy/70 leading-relaxed">{t.quote}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-6">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleTestimonialDot(i)}
                    className="size-2.5 rounded-full transition-colors"
                    style={{ background: activeTestimonialIdx === i ? "var(--alabs-navy)" : "rgba(9,38,63,0.2)" }}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </section>
          );
        })()}
      </div>{/* /mobile layout */}


    </>
  );
}
