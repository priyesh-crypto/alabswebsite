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


export function AlabsLandingPageDesktop({
  pageBlocks,
  activeCategory, setActiveCategory, handleCategoryClick,
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
      {/* ═══════════════════════════════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below lg / 1024 px)
          Absolute canvas — every Figma-positioned element above the FAQ lives here.
          Locked to h-[6177px] so the FAQ + footer that follow can flow naturally.
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="hidden xl:block">
        <div className="relative w-[1440px] h-[6177px] self-center" data-section="absolute-canvas">
          {/* Legacy city pills removed — replaced by premium buttons below */}
          {/* Hero title — three slots with locked structure (prefix / brand-gradient / suffix).
          Admin-editable via Page("home").blocks: hero.title.prefix | hero.title.brand | hero.title.suffix.
          Locking the structure prevents admins from breaking the gradient styling. */}
          <div className="absolute left-[63px] top-[168px] w-[568px] flex flex-col gap-6">
            <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[42px] text-black leading-tight">
              <span>{`${block(pageBlocks, "hero.title.prefix") ?? "Become a"} `}</span>
              <span className="bg-clip-text bg-gradient-to-r from-alabs-primary-light to-alabs-blue text-transparent">{block(pageBlocks, "hero.title.brand") ?? "Data Scientist"}</span>
              <span className="text-alabs-blue">{` `}</span>
              <span>{block(pageBlocks, "hero.title.suffix") ?? "with Real Industry Projects & Placement Support"}</span>
            </h1>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.5)] leading-relaxed">
              {block(pageBlocks, "hero.subheading") ?? block(pageBlocks, "hero.heading") ?? "Learn Data Science, AI and Data Analytics with 600+ learning hours and industry projects."}
            </p>

            <div className="flex flex-row items-center gap-4">
              <Link href={blockCta(pageBlocks, "hero.cta1").url ?? "/courses"} className="inline-flex items-center justify-center bg-alabs-primary-light h-[46px] px-8 rounded-full font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[14px] whitespace-nowrap shadow-sm hover:brightness-95 transition-all">
                {blockCta(pageBlocks, "hero.cta1").label ?? "Explore Courses"}
              </Link>
              <Link href={blockCta(pageBlocks, "hero.cta2").url ?? "/contact"} className="inline-flex items-center justify-center bg-alabs-yellow h-[46px] px-8 rounded-full font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-[14px] whitespace-nowrap shadow-sm hover:brightness-95 transition-all">
                {blockCta(pageBlocks, "hero.cta2").label ?? "Book Free Career Consultation"}
              </Link>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center text-[16px]">
                {Array.from({ length: Math.round(Math.min(5, Math.max(0, Number(stats.rating ?? block(pageBlocks, "hero.rating") ?? "5") || 5))) }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <div className="flex flex-col">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[10px] text-black leading-none">
                  Rated by <span className="font-bold">{block(pageBlocks, "hero_landing.socialProofText") ?? block(pageBlocks, "hero.ratedBy") ?? stats.ratedBy ?? "5000+"}</span> learners
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[8px] text-black">
                  ({stats.rating ?? block(pageBlocks, "hero.rating") ?? "4.8"})
                </p>
              </div>
            </div>
          </div>
          <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[110px] not-italic text-alabs-navy text-[18px] text-center top-[127px] whitespace-nowrap">{block(pageBlocks, "hero_landing.eyebrow") ?? block(pageBlocks, "hero.tagline") ?? sinceTagline ?? "Since 2011"}</p>
          <div className="absolute left-[63px] size-[42px] top-[514px]" data-name="students">
            <div className="absolute inset-[-38.1%_-47.62%_-57.14%_-47.62%]">
              <img alt="" className="block max-w-none size-full" height="82" src={imgStudents.src} width="82" />
            </div>
          </div>
          <div className="absolute left-[82px] size-[42px] top-[514px]" data-name="students">
            <div className="absolute inset-[-38.1%_-47.62%_-57.14%_-47.62%]">
              <img alt="" className="block max-w-none size-full" height="82" src={imgStudents1.src} width="82" />
            </div>
          </div>
          <div className="absolute left-[102px] size-[42px] top-[514px]" data-name="students">
            <div className="absolute inset-[-38.1%_-47.62%_-57.14%_-47.62%]">
              <img alt="" className="block max-w-none size-full" height="82" src={imgStudents2.src} width="82" />
            </div>
          </div>
          <div className="absolute left-[122px] size-[42px] top-[514px]" data-name="students">
            <div className="absolute inset-[-38.1%_-47.62%_-57.14%_-47.62%]">
              <img alt="" className="block max-w-none size-full" height="82" src={imgStudents3.src} width="82" />
            </div>
          </div>
          <div className="absolute left-[142px] size-[42px] top-[514px]" data-name="students">
            <div className="absolute inset-[-38.1%_-47.62%_-57.14%_-47.62%]">
              <img alt="" className="block max-w-none size-full" height="82" src={imgStudents4.src} width="82" />
            </div>
          </div>
          <div className="absolute left-[162px] size-[42px] top-[514px]" data-name="STUDENT">
            <div className="absolute inset-[-38.1%_-47.62%_-57.14%_-47.62%]">
              <img alt="" className="block max-w-none size-full" height="82" src={imgStudent.src} width="82" />
            </div>
          </div>
          <div className="absolute h-[447px] left-[801px] top-[68px] w-[425px]" data-name="Asset 25@3x 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAsset253X1.src} />
          </div>
          <div className="absolute bg-white h-[91px] top-[828px] w-screen left-1/2 -translate-x-1/2" />
          {/* Course category pill rows — animated marquee strips.
          Layout uses inline Tailwind utilities (flex-row + whitespace-nowrap + w-max)
          rather than the .marquee-track class, because that class was being suppressed
          in some build configurations. Animation still uses the marquee-left/right
          @keyframes from globals.css applied via inline style. */}
          <div className="absolute top-[960px] h-[76px] w-screen left-1/2 -translate-x-1/2 overflow-hidden flex flex-row items-center">
            <div
              className="alp-marquee-pause flex flex-row flex-nowrap items-center w-max gap-[28px] whitespace-nowrap shrink-0"
              style={{ animation: "alp-marquee-left 28s linear infinite" }}
            >
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
                <div key={i} aria-hidden="true" className="flex-none pointer-events-none select-none h-[56px] rounded-[351px] px-[40px] inline-flex flex-row items-center justify-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] min-w-[240px]" style={{ background: p.color }}>
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-[16px] whitespace-nowrap">{p.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-[1047px] h-[76px] w-screen left-1/2 -translate-x-1/2 overflow-hidden flex flex-row items-center">
            <div
              className="alp-marquee-pause flex flex-row flex-nowrap items-center w-max gap-[28px] whitespace-nowrap shrink-0"
              style={{ animation: "alp-marquee-right 28s linear infinite" }}
            >
              {[
                { text: pill(1, "Full Stack AI"), color: categories[1]?.color ?? "#fffad2" },
                { text: pill(3, "Data Visualization"), color: categories[3]?.color ?? "#d2faf0" },
                { text: pill(5, "Bootcamp"), color: categories[5]?.color ?? "#fff2fa" },
                { text: pill(7 % Math.max(categories.length, 1), "Agentic AI"), color: categories[7 % Math.max(categories.length, 1)]?.color ?? "#f0fbff" },
                { text: pill(1, "Full Stack AI"), color: categories[1]?.color ?? "#fffad2" },
                { text: pill(3, "Data Visualization"), color: categories[3]?.color ?? "#d2faf0" },
                { text: pill(5, "Bootcamp"), color: categories[5]?.color ?? "#fff2fa" },
                { text: pill(7 % Math.max(categories.length, 1), "Agentic AI"), color: categories[7 % Math.max(categories.length, 1)]?.color ?? "#f0fbff" },
              ].map((p, i) => (
                <div key={i} aria-hidden="true" className="flex-none pointer-events-none select-none h-[56px] rounded-[351px] px-[40px] inline-flex flex-row items-center justify-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] min-w-[240px]" style={{ background: p.color }}>
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-[16px] whitespace-nowrap">{p.text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Icon circles for pill rows removed — replaced by animated marquee strips above */}
          <div className="absolute bg-alabs-bg-light h-[808px] top-[1212px] w-screen left-1/2 -translate-x-1/2" />
          <div className="absolute bg-alabs-bg-light h-[805px] top-[2945px] w-screen left-1/2 -translate-x-1/2" />
          {/* Category tab backgrounds — active = green, inactive = white */}
          {([
            [1434, 1452, categories[0]?.name ?? "Data Science & Analytics"],
            [1506, 1524, categories[1]?.name ?? "Artificial intelligence (AI)"],
            [1578, 1596, categories[2]?.name ?? "Full Stack AI"],
            [1650, 1668, categories[3]?.name ?? "Agentic AI Course"],
          ] as [number, number, string][]).map(([bgTop, textTop, label], idx) => (
            <div key={idx}>
              <div
                className={`-translate-x-1/2 absolute h-[58px] left-[calc(50%-450px)] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] w-[408px] cursor-pointer ${activeCategory === idx ? "bg-alabs-primary" : "bg-white"}`}
                style={{ top: `${bgTop}px` }}
                onClick={() => handleCategoryClick(idx)}
              />
              <p
                className={`absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[122px] not-italic text-[20px] whitespace-nowrap cursor-pointer ${activeCategory === idx ? "text-white" : "text-alabs-navy"}`}
                style={{ top: `${textTop}px` }}
                onClick={() => handleCategoryClick(idx)}
              >{label}</p>
              {/* tick icon — fill white when active, var(--alabs-primary) when inactive */}
              {activeCategory === idx && (
                <div
                  className="absolute left-[86px] size-[28px] cursor-pointer"
                  style={{ top: `${bgTop + 15}px` }}
                  onClick={() => handleCategoryClick(idx)}
                >
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                    <g id="mdi:tick-circle">
                      <path d={svgPaths.p3c3d0980} fill="white" id="Vector" />
                    </g>
                  </svg>
                </div>
              )}
            </div>
          ))}
          <Group1 />
          <div className="-translate-x-1/2 absolute bg-alabs-blue h-[350px] left-[calc(50%+5.5px)] rounded-[201px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[3904px] w-[1301px]" />
          <Group3 />
          <div className="-translate-x-1/2 absolute h-[380px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[5562px] w-[565px]" style={{ backgroundImage: "linear-gradient(203.749457deg, rgb(215, 247, 246) 3.8424%, rgb(242, 250, 228) 97.744%)" }} />
          <div className="-translate-x-1/2 absolute flex h-[350px] items-center justify-center left-[calc(50%+478px)] top-[5578px] w-[348px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="bg-alabs-blue h-[350px] relative rounded-bl-[201px] rounded-br-[20px] rounded-tl-[201px] rounded-tr-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] w-[348px]" />
            </div>
          </div>
          <div className="absolute left-[733px] size-[474px] top-[4017px]">
            <div className="absolute bottom-1/2 left-0 right-0 top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 474 237">
                <path d={svgPaths.p22ecb680} fill="var(--fill-0, #7EDAFE)" id="Ellipse 76" />
              </svg>
            </div>
          </div>
          <div className="absolute left-[857px] size-[446px] top-[3808px]" data-name="man with bag">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManWithBag.src} />
          </div>
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-196px)] not-italic text-alabs-navy text-[40px] top-[1306px] w-[600px]">
            {block(pageBlocks, "courses_challenge.headline") ?? block(pageBlocks, "coursesChallenge.headline") ?? "Our Courses - 6 Months Job Challenge"}
          </p>
          <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+0.5px)] not-italic text-alabs-navy text-[40px] text-center top-[2184px] whitespace-nowrap">
            {block(pageBlocks, "learning_modes.headline") ?? block(pageBlocks, "learningModes.headline") ?? "Learning Modes"}
          </p>
          <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+0.5px)] not-italic text-alabs-navy text-[40px] text-center top-[5402px] whitespace-nowrap">
            {block(pageBlocks, "testimonials_carousel.headline") ?? block(pageBlocks, "testimonials.headline") ?? "What Students Say About Us?"}
          </p>
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-43px)] not-italic text-alabs-navy text-[40px] top-[3013px] w-[711px]">{block(pageBlocks, "about.heading") ?? "AnalytixLabs is a top-ranked Data Science Institute"}</p>
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-500px)] not-italic text-[36px] text-white top-[3968px] w-[535px]">{`"Unlock Insights. Enroll Now. Transform Tomorrow."`}</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[220px] not-italic text-[18px] text-white top-[4078px] whitespace-nowrap">Change the course of your career now</p>
          <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/2 not-italic text-[18px] text-[rgba(9,38,63,0.5)] text-center top-[2255px] w-[988px]">
            {block(pageBlocks, "learning_modes.intro") ?? block(pageBlocks, "learningModes.subtitle") ?? "Explore Personalized learning modes to match your style! Whether you’re a working professional or student or want to upskill, we’ve got you covered. Our approach ensures effective learning, making it enjoyable and rewarding."}
          </p>
          {/* Learning Modes subtitle — driven by the active LearningMode row's `subtitle` field.
          Falls back to per-tab strings if the DB hasn't been seeded yet. */}
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-30px)] not-italic text-[18px] text-[rgba(9,38,63,0.5)] top-[2430px] whitespace-nowrap">{
            learningModes[activeLearningMode]?.subtitle
            ?? (activeLearningMode === 0
              ? "Intensive full-day sessions for rapid upskilling."
              : activeLearningMode === 1
                ? "Experiential learning with in-person mentorship!"
                : "Learn at your own speed with weekend doubt sessions.")
          }</p>
          <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/2 not-italic text-[18px] text-[rgba(9,38,63,0.5)] text-center top-[5473px] w-[988px]">
            {block(pageBlocks, "testimonials_carousel.subhead") ?? block(pageBlocks, "testimonials.subhead") ?? "True Stories, Transformative Career Experience"}
          </p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-34px)] not-italic text-[18px] text-[rgba(9,38,63,0.5)] top-[3133px] w-[657px]">{block(pageBlocks, "about.body") ?? "When it comes to industry-relevant data analytics courses and certifications. Offering a wide array of meticulously curated curriculums for students from various backgrounds, AnalytixLabs has led thousands of aspirants to desired job roles in data engineering, data science, artificial intelligence, and business analytics since 2011."}</p>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-34px)] not-italic text-alabs-navy text-[18px] top-[3274px] whitespace-nowrap">{block(pageBlocks, "about.cityIntro") ?? "You can pick a data science course in :"}</p>
          {(() => {
            const fallback = ["Online", "Bangalore", "Gurgaon", "Noida"];
            const chips = blockList(pageBlocks, "about.cityChips") ?? fallback;
            const offsets = [-2, 148, 341, 525];
            return offsets.map((offset, i) => (
              <p
                key={`city-chip-${i}`}
                className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-alabs-navy text-[18px] top-[3324px] whitespace-nowrap"
                style={{ left: `calc(50% + ${offset}px)` }}
              >
                {chips[i] ?? fallback[i]}
              </p>
            ));
          })()}
          {/* About → city-mode bullets. Editable via Page("home").blocks.cityHighlights (string[4]).
          Positions are fixed (Figma 4-slot column at left calc(50%+6px), tops 3404/3456/3507/3559). */}
          {(() => {
            const fallback = [
              "One to one mentorship",
              "Industry driven curriculum curated",
              "Experiential learning",
              "Extensive post-class sessions",
            ];
            const items = blockList(pageBlocks, "about.cityHighlights") ?? fallback;
            const tops = [3404, 3456, 3507, 3559];
            return tops.map((top, i) => (
              <p
                key={`city-bullet-${i}`}
                className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%+6px)] not-italic text-alabs-navy text-[16px] w-[265px]"
                style={{ top: `${top}px` }}
              >
                {items[i] ?? fallback[i]}
              </p>
            ));
          })()}
          <Link href="/contact" className="contents"><div className="absolute bg-alabs-yellow h-[49px] left-[220px] rounded-[1000px] top-[4135px] w-[182px] cursor-pointer hover:brightness-95 transition" /></Link>
          <button type="button" onClick={handleFormSubmit} aria-label="Send form" className="absolute bg-alabs-yellow h-[49px] left-[786px] rounded-[1000px] top-[5114px] w-[182px] cursor-pointer hover:brightness-95 transition" />
          <a href={`tel:${siteSettings?.contactPhone ?? ""}`} className="contents"><div className="absolute bg-alabs-primary h-[49px] left-[66px] rounded-[1000px] top-[4663px] w-[182px] cursor-pointer hover:brightness-95 transition" /></a>
          <Link href="/about" className="contents"><div className="absolute bg-alabs-primary h-[49px] left-[685px] rounded-[1000px] top-[3620px] w-[223px] cursor-pointer hover:brightness-95 transition" /></Link>
          <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[311px] not-italic text-alabs-navy text-[18px] text-center top-[4148px] whitespace-nowrap">Contact Us</p>
          <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[875.5px] not-italic text-alabs-navy text-[18px] text-center top-[5127px] whitespace-nowrap">Send</p>
          <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[155.5px] not-italic text-white text-[18px] text-center top-[4676px] whitespace-nowrap">Call Us</p>
          <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[795.5px] not-italic text-white text-[18px] text-center top-[3633px] whitespace-nowrap">Value Proposition</p>
          <div className={`absolute h-[116px] left-[66px] rounded-[20px] top-[2378px] w-[562px] cursor-pointer ${activeLearningMode === 0 ? "bg-gradient-to-r from-alabs-darkblue from-[13.037%] to-alabs-lightblue" : "border border-alabs-darkblue border-solid shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]"}`} onClick={() => setActiveLearningMode(0)} />
          <div className={`absolute h-[117px] left-[66px] rounded-[20px] top-[2522px] w-[562px] cursor-pointer ${activeLearningMode === 1 ? "bg-gradient-to-r from-alabs-darkblue from-[13.037%] to-alabs-lightblue" : "border border-alabs-darkblue border-solid shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]"}`} onClick={() => setActiveLearningMode(1)} />
          <div className={`absolute h-[116px] left-[66px] rounded-[20px] top-[2667px] w-[562px] cursor-pointer ${activeLearningMode === 2 ? "bg-gradient-to-r from-alabs-darkblue from-[13.037%] to-alabs-lightblue" : "border border-alabs-darkblue border-solid shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]"}`} onClick={() => setActiveLearningMode(2)} />
          {/* Learning-mode tab labels — read from learningModes[i].name, fallback to legacy strings.
          The 3 tab slots are at fixed Figma tops (2422 / 2562 / 2708). */}
          {(() => {
            const fallback = ["Weekday Bootcamp", "Weekday Batches", "Self-paced Blended"];
            const tabTops = [2422, 2562, 2708];
            const leftOffsets = [509, 508, 508];
            return tabTops.map((top, i) => (
              <p
                key={`mode-tab-${i}`}
                className={`absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[26px] whitespace-nowrap cursor-pointer ${activeLearningMode === i ? "text-white" : "text-alabs-navy"}`}
                style={{ left: `calc(50% - ${leftOffsets[i]}px)`, top: `${top}px` }}
                onClick={() => setActiveLearningMode(i)}
              >
                {learningModes[i]?.name ?? fallback[i]}
              </p>
            ));
          })()}
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-28px)] not-italic text-alabs-darkblue text-[28px] top-[2384px] whitespace-nowrap">{learningModes[activeLearningMode]?.name ?? (activeLearningMode === 0 ? "Weekday Bootcamp" : activeLearningMode === 1 ? "Weekday Batches" : "Self-paced Blended")}</p>
          <ModeTickIcon top={2417} active={activeLearningMode === 0} />
          <ModeTickIcon top={2559} active={activeLearningMode === 1} />
          <ModeTickIcon top={2707} active={activeLearningMode === 2} />
          <div className="absolute border border-[rgba(9,38,63,0.5)] border-solid h-[530px] left-[656px] rounded-[20px] top-[2348px] w-[705px]" />
          <div className="absolute bg-alabs-darkblue h-[319px] left-[1021px] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[2494px] w-[326px]" />
          <div className="absolute bg-alabs-darkblue h-[319px] left-[681px] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[2494px] w-[328px]" />
          <div className="absolute left-[64px] size-[540px] top-[3052px]" style={{ animation: "alp-pulse-fade 8s ease-in-out infinite" }}>
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 540 540">
              <path d={svgPaths.p312e4440} fill="var(--fill-0, var(--alabs-blue))" fillOpacity="0.2" id="Ellipse 93" />
            </svg>
          </div>
          <div className="absolute left-[175px] size-[320px] top-[3161px]" style={{ animation: "alp-pulse-fade 10s ease-in-out infinite 1s" }}>
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 320">
              <path d={svgPaths.p322b2c00} fill="var(--fill-0, var(--alabs-blue))" fillOpacity="0.2" id="Ellipse 94" />
            </svg>
          </div>
          <div className="absolute left-[135px] size-[400px] top-[3121px]" style={{ animation: "alp-pulse-fade 9s ease-in-out infinite 0.5s" }}>
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 400">
              <path d={svgPaths.p22c14680} fill="var(--fill-0, var(--alabs-blue))" fillOpacity="0.2" id="Ellipse 96" />
            </svg>
          </div>
          <div className="absolute left-[99px] size-[470px] top-[3087px]" style={{ animation: "alp-pulse-fade 11s ease-in-out infinite 1.5s" }}>
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 470 470">
              <path d={svgPaths.p32075c00} fill="var(--fill-0, var(--alabs-blue))" fillOpacity="0.2" id="Ellipse 95" />
            </svg>
          </div>
          <div className="absolute h-[421px] left-[62px] rounded-[20px] shadow-[0px_20px_50px_rgba(0,0,0,0.2)] top-[3031px] w-[264px] overflow-hidden bg-white" data-name="img" style={{ animation: "alp-float 6s ease-in-out infinite" }}>
            <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10" src={imgImg.src} />
          </div>
          <div className="absolute h-[421px] left-[341px] rounded-[20px] shadow-[0px_20px_50px_rgba(0,0,0,0.2)] top-[3195px] w-[264px] overflow-hidden bg-white" data-name="img" style={{ animation: "alp-float 6s ease-in-out infinite 3s" }}>
            <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10" src={imgImg1.src} />
          </div>
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+37px)] not-italic text-alabs-navy text-[36px] top-[4482px] whitespace-nowrap">Request a Call back</p>
          <div className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-[calc(50%-654px)] not-italic text-alabs-navy text-[36px] top-[4476px] whitespace-nowrap">
            <p className="leading-[128.33999633789062%] mb-0 whitespace-pre">{`Excited? `}</p>
            <p className="leading-[128.33999633789062%] whitespace-pre">Talk to Expert Counselor</p>
          </div>
          <div className="absolute bg-white border-alabs-navy border-[0.5px] border-solid h-[62px] left-[786px] rounded-[178px] top-[4599px] w-[494px]" />
          <div className="absolute bg-white border-alabs-navy border-[0.5px] border-solid h-[62px] left-[786px] rounded-[178px] top-[4825px] w-[494px]" />
          <div className="absolute bg-white border-alabs-navy border-[0.5px] border-solid h-[62px] left-[786px] rounded-[178px] top-[4937px] w-[494px]" />
          <div className="absolute bg-white border-alabs-navy border-[0.5px] border-solid h-[62px] left-[786px] rounded-[178px] top-[4712px] w-[197px]" />
          <div className="absolute bg-white border-alabs-navy border-[0.5px] border-solid h-[62px] left-[1017px] rounded-[178px] top-[4712px] w-[263px]" />
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[786px] not-italic text-[16px] text-black top-[4567px] whitespace-nowrap">Name</p>
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[66px] not-italic text-[16px] text-black top-[4601px] whitespace-nowrap">To gain insights into your profile and strategize your next career move!</p>
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[786px] not-italic text-[16px] text-black top-[4793px] whitespace-nowrap">Email</p>
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[786px] not-italic text-[16px] text-black top-[4905px] whitespace-nowrap">Select City</p>
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[786px] not-italic text-[16px] text-black top-[4680px] whitespace-nowrap">Code</p>
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1017px] not-italic text-[16px] text-black top-[4680px] whitespace-nowrap">Mobile</p>
          {/* ── Request a Call back: real form controls overlaid on the decorative borders. */}
          <input
            value={formData.name}
            onChange={handleFormChange("name")}
            placeholder="Your Name"
            required
            className="absolute left-[816px] top-[4615px] w-[434px] h-[32px] bg-transparent outline-none font-['Inter:Light',sans-serif] font-light text-[16px] text-black placeholder:text-[rgba(0,0,0,0.5)]"
          />
          <select
            value={formData.code}
            onChange={handleFormChange("code")}
            className="absolute left-[816px] top-[4728px] w-[140px] h-[32px] bg-transparent outline-none font-['Inter:Light',sans-serif] font-light text-[16px] text-black appearance-none cursor-pointer"
          >
            {COUNTRY_CODES.map(c => (
              <option key={`${c.country}-${c.code}`} value={c.code}>{`${c.country} (${c.code})`}</option>
            ))}
          </select>
          <input
            value={formData.mobile}
            onChange={handleFormChange("mobile")}
            placeholder="Mobile"
            inputMode="tel"
            required
            className="absolute left-[1047px] top-[4728px] w-[206px] h-[32px] bg-transparent outline-none font-['Inter:Light',sans-serif] font-light text-[16px] text-black placeholder:text-[rgba(0,0,0,0.5)]"
          />
          <input
            value={formData.email}
            onChange={handleFormChange("email")}
            placeholder="Your Email"
            type="email"
            required
            className="absolute left-[816px] top-[4841px] w-[434px] h-[32px] bg-transparent outline-none font-['Inter:Light',sans-serif] font-light text-[16px] text-black placeholder:text-[rgba(0,0,0,0.5)]"
          />
          <select
            value={formData.city}
            onChange={handleFormChange("city")}
            className="absolute left-[816px] top-[4953px] w-[434px] h-[32px] bg-transparent outline-none font-['Inter:Light',sans-serif] font-light text-[16px] text-black appearance-none cursor-pointer"
          >
            {CITY_LABELS.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <div className="absolute left-[786px] top-[5022px] w-[302px] h-[74px] bg-[#f9f9f9] border border-[#d3d3d3] rounded-[3px] flex items-center px-[12px] gap-[14px] shadow-sm select-none">
            <div
              className={`size-[28px] border-2 rounded-[2px] cursor-pointer flex items-center justify-center transition-all ${isNotRobot ? "bg-alabs-primary border-alabs-primary" : "bg-white border-[#c1c1c1] hover:border-[#b2b2b2]"}`}
              onClick={() => setIsNotRobot(!isNotRobot)}
            >
              {isNotRobot && (
                <svg viewBox="0 0 24 24" className="size-5 text-white fill-current">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
            </div>
            <label className="font-['Inter',sans-serif] text-[14px] text-[#555] cursor-pointer flex-1" onClick={() => setIsNotRobot(!isNotRobot)}>
              I'm not a robot
            </label>
            <div className="flex flex-col items-center justify-center gap-1 opacity-80">
              <svg className="size-[32px]" viewBox="0 0 24 24" fill="#4c8bf5">
                <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M11,12.17l-2.59-2.59L7,11l4,4l8-8l-1.41-1.41L11,12.17z" />
              </svg>
              <div className="flex flex-col items-center leading-none">
                <span className="text-[9px] font-bold text-[#555]">reCAPTCHA</span>
                <span className="text-[7px] text-[#777]">Privacy - Terms</span>
              </div>
            </div>
          </div>
          {formSubmitted && (
            <p className="absolute left-[786px] top-[5085px] text-[12px] font-['Inter:Medium',sans-serif] font-medium text-alabs-primary">Thanks! We&rsquo;ll be in touch shortly.</p>
          )}
          {formError && (
            <p className="absolute left-[786px] top-[5085px] text-[12px] font-['Inter:Medium',sans-serif] font-medium text-[#d4183d] w-[494px]">{formError}</p>
          )}
          <div className="absolute h-0 left-[691px] top-[3374px] w-[652px]">
            <div className="absolute inset-[-0.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 652 0.5">
                <line id="Line 2" stroke="var(--stroke-0, black)" strokeOpacity="0.3" strokeWidth="0.5" x2="652" y1="0.25" y2="0.25" />
              </svg>
            </div>
          </div>
          <WpfOnline />
          <StreamlineGroupMeetingCallRemix />
          <Icons8Student />
          <StreamlinePlumpGlobalLearning />
          <CarbonMachineLearningModel />
          {[640, 664, 688, 712, 736, 760, 784].map((left, idx) => (
            <div key={left} className="absolute size-[15px] top-[5978px] cursor-pointer" style={{ left: `${left}px` }} onClick={() => handleTestimonialDot(idx)}>
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                {activeTestimonialIdx === idx
                  ? <circle cx="7.5" cy="7.5" fill="var(--fill-0, var(--alabs-navy))" r="7" stroke="var(--stroke-0, var(--alabs-navy))" />
                  : <circle cx="7.5" cy="7.5" r="7" stroke="var(--stroke-0, var(--alabs-navy))" />}
              </svg>
            </div>
          ))}
          {/* FAQ section moved out of absolute canvas — see <FaqFlowSection /> rendered below. */}
          <div key={`${testimonialKey}-img`} className="testimonial-fade -translate-x-1/2 absolute left-1/2 size-[150px] top-[5585px] rounded-full border-[6px] border-white shadow-[0px_10px_30px_0px_rgba(0,0,0,0.15)] overflow-hidden bg-white">
            <img alt="" className="absolute block inset-0 max-w-none size-full object-cover" height="150" src={t0?.photoUrl ?? imgEllipse92.src} width="150" />
          </div>
          <div key={`${testimonialKey}-name`} className="testimonial-fade -translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-1/2 not-italic text-alabs-navy text-[0px] text-center top-[5745px] whitespace-nowrap">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[116.02999877929688%] mb-0 text-[16px] whitespace-pre">{t0?.name ?? "Piyush Ganar"}</p>
            <p className="leading-[116.02999877929688%] text-[14px] whitespace-pre">{t0?.role ? ` ${t0.role}` : ` Class of 2012 IIM Ahmedabad`}</p>
          </div>
          <p key={`${testimonialKey}-co`} className="testimonial-fade -translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[116.02999877929688%] left-1/2 not-italic text-alabs-navy text-[14px] text-center top-[5789px] whitespace-nowrap">{t0?.company ? `(${t0.company})` : "(Assistant General Manager Sales Marketing, Findability Sciences)"}</p>
          <p key={`${testimonialKey}-quote`} className="testimonial-fade -translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.404] left-[calc(50%+6.5px)] not-italic text-[12px] text-[rgba(9,38,63,0.5)] text-center top-[5835px] w-[525px]">{t0?.quote ?? "The course material is very easy to understand and the case studies were based on real time business problems. What I love the most about Sumeet and his team is that they never operated the institute like a typical commercial enterprise but more like a temple for learning. The gates of Alabs are always open for students for any kind of help and guidance. I would recommend ALabs to all."}</p>
          <LineMdStarFilled />
          <LineMdStarFilled1 />
          <LineMdStarFilled2 />
          <LineMdStarFilled3 />
          <LineMdStarFilled4 />
          <div className="absolute left-[93px] rounded-bl-[140px] size-[424px] top-[5504px]" data-name="man red">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[140px] size-full" src={imgManRed.src} />
          </div>
          <div className="absolute h-[418px] left-[1022px] rounded-br-[185px] top-[5512px] w-[354px]" data-name="girl smiling">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-br-[185px]">
              <img alt="" className="absolute h-[102.87%] left-[-6.5%] max-w-none top-[-2.87%] w-[121.47%]" src={imgGirlSmiling.src} />
            </div>
          </div>
          <div className="absolute flex h-[234.485px] items-center justify-center left-[1186px] top-[410px] w-[237.664px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "549" } as React.CSSProperties}>
            <div className="flex-none rotate-30">
              <div className="h-[168.476px] relative w-[177.161px]">
                <div className="absolute inset-[53.58%_0_-2.37%_-1.85%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180.614 82.2049">
                    <g filter="url(#filter0_f_1_665)" id="Ellipse 20">
                      <path d={svgPaths.p30f5e880} fill="url(#paint0_linear_1_665)" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="82.2049" id="filter0_f_1_665" width="180.614" x="-1.19209e-07" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_1_665" stdDeviation="2" />
                      </filter>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_665" x1="91.8588" x2="91.8588" y1="-90.2716" y2="78.2048">
                        <stop stopColor="var(--alabs-primary)" />
                        <stop offset="1" stopColor="var(--alabs-blue)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-alabs-bg-light border-alabs-primary border-[1.5px] border-solid h-[214px] left-[628px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[490px] w-[356px] cursor-pointer hover:scale-[1.02] transition-transform" onClick={() => { setLeadModalType("fresher"); setShowLeadModal(true); }} />
          <div className="absolute bg-alabs-bg-light border-alabs-blue border-[1.5px] border-solid h-[214px] left-[1015px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[490px] w-[356px] cursor-pointer hover:scale-[1.02] transition-transform" onClick={() => { setLeadModalType("experienced"); setShowLeadModal(true); }} />
          {/* Lead-capture card #1 (Fresher / Student). Copy editable via Page("home").blocks: leadCard1.{title,subtitle,bestFor}. */}
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[25px] leading-[normal] left-[663px] not-italic text-[20px] text-black top-[573px] w-[203px] pointer-events-none">{block(pageBlocks, "leadCard1.title") ?? "Fresher / Student"}</p>
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[29px] leading-[normal] left-[663px] not-italic text-[14px] text-[rgba(0,0,0,0.5)] top-[616px] w-[217px] pointer-events-none">{block(pageBlocks, "leadCard1.subtitle") ?? "Starting or preparing to start your carrer"}</p>
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[15px] leading-[normal] left-[663px] not-italic text-alabs-primary text-[14px] top-[545px] w-[53px] pointer-events-none">{block(pageBlocks, "leadCard1.bestFor") ?? "Best for"}</p>
          <div className="absolute flex h-[234.485px] items-center justify-center left-[800px] top-[410px] w-[237.664px] pointer-events-none" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "549" } as React.CSSProperties}>
            <div className="flex-none rotate-30">
              <div className="h-[168.476px] relative w-[177.161px]">
                <div className="absolute inset-[53.58%_0_-2.37%_-1.85%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180.614 82.2049">
                    <g filter="url(#filter0_f_1_663)" id="Ellipse 19">
                      <path d={svgPaths.p30f5e880} fill="var(--fill-0, var(--alabs-primary))" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="82.2049" id="filter0_f_1_663" width="180.614" x="-1.19209e-07" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_1_663" stdDeviation="2" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-[596px] size-[385px] top-[106px]" data-name="GIRL">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGirl.src} />
          </div>
          <div className="pointer-events-none">
            <MdiAccountStudent />
          </div>
          <div className="absolute h-[408px] left-[1048px] top-[83px] w-[272px]" data-name="MAN">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMan.src} />
          </div>
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[818px] not-italic text-[12px] text-[rgba(0,0,0,0.5)] top-[772px] w-[194px]">{`Secure & Private`}</p>
          <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1002.5px] not-italic text-[12px] text-[rgba(0,0,0,0.5)] text-center top-[772px] w-[173px]">No Spam, ever</p>
          <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1143.5px] not-italic text-[12px] text-[rgba(0,0,0,0.5)] text-center top-[772px] w-[207px]">Takes only 2 mins</p>
          <MaterialSymbolsLightLockOutline />
          <HealthiconsNoOutline />
          <MdiLightClock />
          <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-[999px] not-italic text-[0px] text-black text-center top-[733px] whitespace-nowrap">
            <span className="leading-[normal] text-[16px]">Find Your Perfect Learning</span>
            <span className="leading-[normal] text-[#4c7fd2] text-[16px]">{` `}</span>
            <span className="leading-[normal] text-[16px]">Path!</span>
          </p>
          <div className="absolute bg-[rgba(255,255,255,0.1)] h-[169px] left-[695px] rounded-[15px] top-[2596px] w-[299px]" />
          <div className="absolute bg-[rgba(255,255,255,0.1)] h-[169px] left-[1035px] rounded-[15px] top-[2596px] w-[299px]" />
          {(() => {
            const MODE_MOCKS = [
              {
                c1: { title: "Data Science Bootcamp", loc: "Noida", date: "14 May", time: "9:30 AM", seats: "08 Seats" },
                c2: { title: "AI Engineering", loc: "Gurgaon", date: "21 May", time: "10:00 AM", seats: "12 Seats" }
              },
              {
                c1: { title: "Business Analytics", loc: "Bengaluru", date: "15 May", time: "6:30 PM", seats: "10 Seats" },
                c2: { title: "Data Visualization", loc: "Online", date: "22 May", time: "7:00 PM", seats: "05 Seats" }
              },
              {
                c1: { title: "Machine Learning", loc: "Online", date: "Self-Paced", time: "Anytime", seats: "15 Seats" },
                c2: { title: "Deep Learning", loc: "Online", date: "Self-Paced", time: "Anytime", seats: "20 Seats" }
              }
            ];
            const cur = MODE_MOCKS[activeLearningMode] || MODE_MOCKS[0];
            return (
              <>
                <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-4px)] not-italic text-[24px] text-white top-[2531px] whitespace-nowrap">{cur.c1.title}</p>
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+16px)] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-[2612px] whitespace-nowrap">{`Location: `}</p>
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+356px)] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-[2612px] whitespace-nowrap">{`Location: `}</p>
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+16px)] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-[2652px] whitespace-nowrap">{`Date: `}</p>
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+356px)] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-[2652px] whitespace-nowrap">{`Date: `}</p>
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+16px)] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-[2690px] whitespace-nowrap">Time:</p>
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+356px)] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-[2690px] whitespace-nowrap">Time:</p>
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+16px)] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-[2728px] whitespace-nowrap">{`Available seats: `}</p>
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+356px)] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-[2728px] whitespace-nowrap">{`Available seats: `}</p>
                <p className="-translate-x-full absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+253px)] not-italic text-[14px] text-right text-white top-[2612px] whitespace-nowrap">{cur.c1.loc}</p>
                <p className="-translate-x-full absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+593px)] not-italic text-[14px] text-right text-white top-[2612px] whitespace-nowrap">{cur.c2.loc}</p>
                <p className="-translate-x-full absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+253px)] not-italic text-[14px] text-right text-white top-[2652px] whitespace-nowrap">{cur.c1.date}</p>
                <p className="-translate-x-full absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+593px)] not-italic text-[14px] text-right text-white top-[2652px] whitespace-nowrap">{cur.c2.date}</p>
                <p className="-translate-x-full absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+253px)] not-italic text-[14px] text-right text-white top-[2690px] whitespace-nowrap">{cur.c1.time}</p>
                <p className="-translate-x-full absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+593px)] not-italic text-[14px] text-right text-white top-[2690px] whitespace-nowrap">{cur.c2.time}</p>
                <p className="-translate-x-full absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+253px)] not-italic text-[14px] text-right text-white top-[2728px] whitespace-nowrap">{cur.c1.seats}</p>
                <p className="-translate-x-full absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+593px)] not-italic text-[14px] text-right text-white top-[2728px] whitespace-nowrap">{cur.c2.seats}</p>
                <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+335px)] not-italic text-[24px] text-white top-[2531px] w-[246px]">{cur.c2.title}</p>
              </>
            );
          })()}
          <div className="absolute h-0 left-[713px] top-[2640px] w-[264px]">
            <div className="absolute inset-[-0.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 0.5">
                <line id="Line 3" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="0.5" x2="264" y1="0.25" y2="0.25" />
              </svg>
            </div>
          </div>
          <div className="absolute h-0 left-[713px] top-[2680px] w-[264px]">
            <div className="absolute inset-[-0.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 0.5">
                <line id="Line 3" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="0.5" x2="264" y1="0.25" y2="0.25" />
              </svg>
            </div>
          </div>
          <div className="absolute h-0 left-[713px] top-[2720px] w-[264px]">
            <div className="absolute inset-[-0.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 264 0.5">
                <line id="Line 3" stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="0.5" x2="264" y1="0.25" y2="0.25" />
              </svg>
            </div>
          </div>
          <MdiLocation3 />
          <MdiLocation4 />
          <LetsIconsDateFill />
          <LetsIconsDateFill1 />
          <MingcuteTimeFill />
          <MingcuteTimeFill1 />
          <FluentPresenceAvailable12Filled />
          <FluentPresenceAvailable12Filled1 />
          {/* Lead-capture card #2 (Experienced Professional). Copy editable via Page("home").blocks: leadCard2.{title,subtitle,bestFor}. */}
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1048px] not-italic text-[20px] text-black top-[575px] whitespace-nowrap pointer-events-none">{block(pageBlocks, "leadCard2.title") ?? "Experienced Professional"}</p>
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[29px] leading-[normal] left-[1048px] not-italic text-[14px] text-[rgba(0,0,0,0.5)] top-[618px] w-[217px] pointer-events-none">{block(pageBlocks, "leadCard2.subtitle") ?? "Working, switching roles, or restarting your career"}</p>
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[15px] leading-[normal] left-[1048px] not-italic text-alabs-blue text-[14px] top-[547px] w-[53px] pointer-events-none">{block(pageBlocks, "leadCard2.bestFor") ?? "Best for"}</p>
          <div className="absolute flex h-[234.485px] items-center justify-center left-[1189px] top-[410px] w-[237.664px] pointer-events-none" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "549" } as React.CSSProperties}>
            <div className="flex-none rotate-30">
              <div className="h-[168.476px] relative w-[177.161px]">
                <div className="absolute inset-[53.58%_0_-2.37%_-1.85%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180.614 82.2049">
                    <g filter="url(#filter0_f_1_632)" id="Ellipse 97">
                      <path d={svgPaths.p30f5e880} fill="var(--fill-0, var(--alabs-blue))" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="82.2049" id="filter0_f_1_632" width="180.614" x="-1.19209e-07" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_1_632" stdDeviation="2" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none">
            <Icon5 />
          </div>
          {/* ── Course card carousel ──────────────────────────────────────────────
           Container sits at the same absolute position as the original two cards.
           width = 2 × 400px card + 41px gap = 841px (matches original Group9/10 span).
           overflow-x: auto + scroll-behavior: smooth + hide-scrollbar = clean scroll.
           The arrow button (Group11) calls handleNextCourse → scrollLeft += 441.   */}
          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className={`absolute left-[520px] top-[1427px] w-[841px] h-[580px] flex gap-[41px] overflow-x-auto scroll-smooth hide-scrollbar transition-opacity duration-150 snap-x snap-mandatory pt-2 pb-14 ${carouselFading ? "opacity-0" : "opacity-100"}`}
          >
            {carouselCourses.map((course, idx) => (
              // Carousel may include partial fallback objects (id/title/batches only) when the DB
              // doesn't yet have MIN_CARDS courses for the active category. CourseCard reads only
              // the fields it needs and tolerates undefined siblings, so the cast is safe.
              <CourseCard key={course?.id ?? `fb-${idx}`} course={course as Course | undefined} idx={idx} />
            ))}
          </div>

          <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[73px] leading-[0] left-[195px] not-italic text-alabs-navy text-[0px] text-center top-[848px] w-[284px]">
            <span className="leading-[normal] text-[40px]">{block(pageBlocks, "hiring_partners.metricLabel") ?? stats.candidates ?? "15,000+"}</span>
            <span className="leading-[normal] text-[32px]">{` `}</span>
            <span className="leading-[normal] text-[20px]">{block(pageBlocks, "hiring_partners.metricSuffix") ?? stats.candidatesSuffix ?? "Candidates"}</span>
          </p>
          {/* Hiring partner logos — infinite marquee. Uses original Figma PNG assets.
          Admin can replace via /admin/hiring-partners once white-background logos are uploaded. */}
          <div className="absolute left-[370px] top-[828px] w-[1070px] h-[91px] overflow-hidden bg-white flex flex-row items-center">
            <div
              className="alp-marquee-pause flex flex-row flex-nowrap items-center w-max gap-[60px] whitespace-nowrap shrink-0"
              style={{ animation: "alp-marquee-left 28s linear infinite" }}
            >
              {[
                { src: imgBrand.src, alt: hiringPartners[0]?.name ?? "", h: 53, w: 196 },
                { src: imgBrand1.src, alt: hiringPartners[1]?.name ?? "", h: 64, w: 186 },
                { src: imgImage41.src, alt: hiringPartners[2]?.name ?? "", h: 68, w: 183 },
                { src: imgBrand2.src, alt: hiringPartners[3]?.name ?? "", h: 55, w: 197 },
                { src: imgBrand3.src, alt: hiringPartners[4]?.name ?? "", h: 61, w: 195 },
                { src: imgBrand.src, alt: hiringPartners[0]?.name ?? "", h: 53, w: 196 },
                { src: imgBrand1.src, alt: hiringPartners[1]?.name ?? "", h: 64, w: 186 },
                { src: imgImage41.src, alt: hiringPartners[2]?.name ?? "", h: 68, w: 183 },
                { src: imgBrand2.src, alt: hiringPartners[3]?.name ?? "", h: 55, w: 197 },
                { src: imgBrand3.src, alt: hiringPartners[4]?.name ?? "", h: 61, w: 195 },
              ].map((s, i) => (
                <img key={i} alt={s.alt} src={s.src} className="object-contain pointer-events-none flex-none" style={{ height: s.h, width: s.w }} />
              ))}
            </div>
          </div>
          <div className="absolute h-[347px] left-[66px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[4751px] w-[603px] overflow-hidden">
            <iframe
              key={`map-${activeLocation}`}
              title={`${CITY_LABELS[activeLocation]} office map`}
              src={mapEmbedUrl(CITY_LABELS[activeLocation])}
              className="absolute inset-0 size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* Premium City Selection Buttons */}
          {([
            [139.54, 0],
            [374.54, 1],
            [598.54, 2],
          ] as [number, 0 | 1 | 2][]).map(([leftPx, idx]) => (
            <button
              type="button"
              key={`select-${idx}`}
              onClick={() => setActiveLocation(idx)}
              className={`-translate-x-1/2 absolute flex h-[48px] items-center justify-center px-6 rounded-full font-['Inter',sans-serif] font-semibold text-[15px] transition-all duration-300 shadow-md gap-2 ${activeLocation === idx
                  ? "bg-alabs-primary text-white shadow-[var(--alabs-primary)]/30 shadow-xl scale-105 translate-y-[-2px]"
                  : "bg-white text-alabs-navy border border-alabs-navy/10 hover:border-alabs-primary/50 hover:shadow-lg"
                }`}
              style={{ left: `${leftPx}px`, top: "5140px" }}
            >
              <BoxiconsLocationFilled3 className="size-4" />
              {`Select ${idx === 2 ? "Bengaluru" : CITY_LABELS[idx]}`}
            </button>
          ))}
          <LeftArrowButton onClick={handlePrevCourse} disabled={carouselScrollLeft <= 0} />
          <Group11 onClick={handleNextCourse} disabled={carouselMaxScroll > 0 && carouselScrollLeft >= carouselMaxScroll - 1} />

          <div className="absolute h-[151px] left-[43px] top-[578px] w-[579px]" data-name="SPONSER">
            <img alt="AnalytixLabs Certification Partners" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/Final_Logo.png" />
          </div>
        </div>{/* /absolute canvas */}
      </div>{/* /desktop layout */}

      
    </>
  );
}
