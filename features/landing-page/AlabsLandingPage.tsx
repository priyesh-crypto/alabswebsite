"use client";
import { AlabsLandingPageMobile } from "./components/AlabsLandingPageMobile";
import { AlabsLandingPageDesktop } from "./components/AlabsLandingPageDesktop";
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

import svgPaths from "./svg-5my3vzmwxc";
import imgStudents from "./50558ea6f485093bd8f538cd38248c9901a11d01.png";
import imgStudents1 from "./76aae0cd415561ca5fa786b6cfe0512098568bff.png";
import imgStudents2 from "./8dcc5bb265eae07450528605f3f07ba391aa095b.png";
import imgStudents3 from "./50602167a8692a495b4cb0ef8171feea9d2aded5.png";
import imgStudents4 from "./ac6fd5b533236c77026eb158b3e17ff6c04083d9.png";
import imgStudent from "./ebdf0364a656d88c82cbd5e29eba0b5f7299ccbf.png";
import imgAsset253X1 from "./1d246294d3b2d1241d32b8ee0187da67083422b9.png";
import imgManWithBag from "./996a7650d39df9f9d0c4aaa0e42c2b485c8b991a.png";
import imgImg from "./30119f874016a5cd886694d00842f8baee878bd6.png";
import imgImg1 from "./e86b2f9ddf2ec35475ae87d1814fefa7e0a19639.png";
import imgImage34 from "./c94d34e2f718a4dd21715c47c11eb89121b7a3ea.png";
import imgEllipse92 from "./ff201a4e824358a86a9ece853ac8ae2093f873e8.png";
import imgManRed from "./0ff0f453bd04fe1e0c83fc2fdb469f36963dc095.png";
import imgGirlSmiling from "./499548fee627c1d39da43fe9633451763856bdab.png";
import imgGirl from "./35e13ffebc486245a925641a88d5a3fb4c148424.png";
import imgMan from "./ca246bc8f4ab32f503e63c4a3ddc2ee3aff91329.png";
import imgCourseImg from "./ab4a506e3d4b25f4f06209f40fea6fc3f23abdf2.png";
import imgCourseImg1 from "./bf0dbb82b660e793c6c3eda13d2b603c82a4970c.png";

import imgBrand from "./1904a369c66c61d55534bc891b6545f664e34340.png";
import imgBrand1 from "./df7460e7d387cf05847fa1a9558d64e7697c7f9a.png";
import imgImage41 from "./a97303ee2d1e88ae2dcd01bf4eaed6cc3ca65d23.png";
import imgBrand2 from "./d7317d424c4f54cc294ca80ca343bfe0d33648ec.png";
import imgBrand3 from "./f85fd5624752bf13429a0092fb513d7678f64954.png";
import imgRectangle135 from "./753a8cf92e71b3a1c99a662be50669e23496d5bb.png";
import imgSponser from "./0effb68a268a8b7912b8aae4d984808edb6a835d.png";
import { imgGroup } from "./svg-2vm31";
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
} from "./components/LandingPageIcons";



export type LandingPageProps = {
  siteSettings?: SiteSettings | null;
  topNav?: NavItem[];
  megaMenu?: NavItem[];
  footerLinks?: NavItem[];
  footerCities?: NavItem[];
  categories?: Category[];
  featuredCourses?: Course[];
  testimonials?: Testimonial[];
  hiringPartners?: HiringPartner[];
  faqs?: Faq[];
  offices?: Office[];
  masterclass?: Masterclass | null;
  pageBlocks?: Page | null;
  // Recent blog snippets shown in the footer's "Blog" card.
  posts?: BlogPost[];
  // Learning modes (Phase A new model). Drives the Learning Modes tab labels and subtitles.
  learningModes?: LearningMode[];
};

// Helper to safely read a string out of the Page.blocks JSON without
// blowing up on `null` / `undefined` / non-string values.
// Supports dot notation for nested objects (e.g. "hero_landing.headline")
function resolvePath(obj: any, path: string) {
  return path.split('.').reduce((o, p) => (o ? o[p] : undefined), obj);
}

function block(p: LandingPageProps, key: string): string | undefined {
  const blocks = p.pageBlocks?.blocks as Record<string, unknown> | undefined;
  if (!blocks) return undefined;
  const v = resolvePath(blocks, key) ?? blocks[key];
  return typeof v === "string" ? v : undefined;
}

// Helper to read a string[] out of Page.blocks (e.g. bulleted lists).
function blockList(p: LandingPageProps, key: string): string[] | undefined {
  const blocks = p.pageBlocks?.blocks as Record<string, unknown> | undefined;
  if (!blocks) return undefined;
  const v = resolvePath(blocks, key) ?? blocks[key];
  if (Array.isArray(v) && v.every(x => typeof x === "string")) return v as string[];
  return undefined;
}

// Helper to read a `{ label, url }` CTA shape out of Page.blocks.
function blockCta(p: LandingPageProps, key: string): { label?: string; url?: string } {
  const blocks = p.pageBlocks?.blocks as Record<string, unknown> | undefined;
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


export default function AlabsLandingPage(props: LandingPageProps = {}) {
  const {
    siteSettings,
    categories = [],
    featuredCourses = [],
    topNav = [],
    testimonials = [],
    hiringPartners = [],
    faqs = [],
    offices = [],
    footerLinks = [],
    footerCities = [],
    posts = [],
    learningModes = [],
    pageBlocks = null,
  } = props;

  const [activeLearningMode, setActiveLearningMode] = useState(0);
  const [activeLocation, setActiveLocation] = useState(0);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadModalType, setLeadModalType] = useState<"fresher" | "experienced">("fresher");
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const [carouselScrollLeft, setCarouselScrollLeft] = useState(0);
  const [carouselMaxScroll, setCarouselMaxScroll] = useState(0);
  const [carouselFading, setCarouselFading] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const testimonialCarouselRef = useRef<HTMLDivElement>(null);

  // FAQ accordion — only one open at a time. null = all closed.
  const [openFaqId, setOpenFaqId] = useState<number | null>(0);

  // Request-a-Call-back form — unified state.
  const [formData, setFormData] = useState({
    name: "",
    code: "+91",
    mobile: "",
    email: "",
    city: CITY_LABELS[0] as string,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isNotRobot, setIsNotRobot] = useState(false);

  // Sync form city ↔ map location selector.
  useEffect(() => {
    setFormData(prev => ({ ...prev, city: CITY_LABELS[activeLocation] }));
  }, [activeLocation]);

  const handleFormChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const [formError, setFormError] = useState<string | null>(null);
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isNotRobot) {
      setFormError("Please verify that you are not a robot.");
      return;
    }
    const name = formData.name.trim();
    const mobile = formData.mobile.trim();
    const email = formData.email.trim();
    if (!name || !mobile || !email) {
      setFormError("Please fill in name, mobile, and email.");
      setFormSubmitted(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!/^\d{7,15}$/.test(mobile.replace(/[\s-]/g, ""))) {
      setFormError("Please enter a valid mobile number.");
      return;
    }
    setFormError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: mobile,
          source: "callback-request",
        }),
      });
      if (!res.ok) {
        const msg = res.status === 429
          ? "Too many submissions, please try again in a minute."
          : "Something went wrong. Please try again.";
        setFormError(msg);
        return;
      }
      setFormSubmitted(true);
      setIsNotRobot(false);
      setTimeout(() => setFormSubmitted(false), 2500);
    } catch {
      setFormError("Network error. Please try again.");
    }
  };

  // Testimonial autoplay — every 6s. Pauses for 12s after manual click.
  const [testimonialPaused, setTestimonialPaused] = useState(false);
  const testimonialCount = Math.max(testimonials.length, 7);
  useEffect(() => {
    if (testimonialPaused) return;
    const id = setInterval(() => {
      setActiveTestimonialIdx(prev => (prev + 1) % testimonialCount);
    }, 6000);
    return () => clearInterval(id);
  }, [testimonialPaused, testimonialCount]);
  const handleTestimonialDot = (idx: number) => {
    setActiveTestimonialIdx(idx);
    setTestimonialPaused(true);
    setTimeout(() => setTestimonialPaused(false), 12000);
  };
  // Sync the mobile/tablet peek-carousel scroll position with activeTestimonialIdx
  // (driven either by dot click or autoplay).
  useEffect(() => {
    const root = testimonialCarouselRef.current;
    if (!root) return;
    const child = root.children[activeTestimonialIdx] as HTMLElement | undefined;
    if (!child) return;
    const target = child.offsetLeft - (root.clientWidth - child.clientWidth) / 2;
    root.scrollTo({ left: target, behavior: "smooth" });
  }, [activeTestimonialIdx]);
  const toggleFaq = (idx: number) =>
    setOpenFaqId(prev => (prev === idx ? null : idx));

  const stats = (siteSettings?.stats ?? {}) as Record<string, string>;
  const sinceTagline = stats.years ? `Since 20${(2026 - Number(stats.years.replace(/\D/g, "") || 15)).toString().slice(2)}` : undefined;

  const pill = (i: number, fallback: string): string =>
    categories[i]?.name ?? fallback;
  const pillUrl = (i: number, fallback: string): string =>
    categories[i]?.slug ? `/courses?category=${categories[i]!.slug}` : fallback;

  // Map learning mode index to schedule keywords
  const MODE_MAP = ["Bootcamp", "Weekday", "Self-paced"];

  // Filter by active category AND learning mode. 
  const filteredCourses = featuredCourses.filter(c => {
    const catMatch = !categories[activeCategory] || c.categoryId === categories[activeCategory].id;
    // Check if any batch matches the active learning mode schedule
    const modeMatch = c.batches?.some(b =>
      b.schedule?.toLowerCase().includes(MODE_MAP[activeLearningMode].toLowerCase())
    ) ?? true; // If no batches, don't filter by mode for now
    return catMatch && modeMatch;
  });

  // Category-specific fallback titles
  const getFallbackTitle = (catIdx: number, cardIdx: number) => {
    const catName = categories[catIdx]?.name ?? "Course";
    return `${catName} ${cardIdx + 1}`;
  };

  const MIN_CARDS = 5;
  const carouselCourses: (Course | { id: string; title: string; batches: any[] } | undefined)[] = filteredCourses.length >= MIN_CARDS
    ? filteredCourses
    : [
      ...filteredCourses,
      ...Array.from({ length: MIN_CARDS - filteredCourses.length }, (_, i) => ({
        id: `fallback-${activeCategory}-${i}`,
        title: getFallbackTitle(activeCategory, i),
        batches: [
          { location: "Online", startDate: new Date(), schedule: MODE_MAP[activeLearningMode], seatsLeft: 10 },
          { location: "Noida", startDate: new Date(), schedule: MODE_MAP[activeLearningMode], seatsLeft: 8 }
        ],
        classesCount: 30,
        hoursCount: 400,
        experienceLabel: "Beginner"
      }))
    ];

  const handleCarouselScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCarouselScrollLeft(el.scrollLeft);
    setCarouselMaxScroll(el.scrollWidth - el.clientWidth);
  };

  const handleCategoryClick = (idx: number) => {
    setCarouselFading(true);
    setTimeout(() => {
      setActiveCategory(idx);
      setCarouselScrollLeft(0);
      setCarouselFading(false);
      if (carouselRef.current) carouselRef.current.scrollLeft = 0;
    }, 150);
  };

  // Advance / retreat by one card width (400 px) plus gap (41 px).
  const handleNextCourse = () => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollLeft = Math.min(el.scrollLeft + 441, el.scrollWidth - el.clientWidth);
  };
  const handlePrevCourse = () => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollLeft = Math.max(el.scrollLeft - 441, 0);
  };

  // Active testimonial determined by carousel dot state.
  const t0 = testimonials[activeTestimonialIdx] ?? testimonials[0];

  // Fade testimonial content briefly on slide change (key forces remount → CSS transition replays).
  const testimonialKey = `t-${activeTestimonialIdx}`;

  
  const viewState = {
    pageBlocks, activeCategory, setActiveCategory, handleCategoryClick,
    carouselCourses, categories, stats, learningModes, testimonials, hiringPartners, pill, pillUrl, siteSettings,
    activeLearningMode, setActiveLearningMode,
    activeTestimonialIdx, handleTestimonialDot, testimonialPaused, testimonialCarouselRef, t0, testimonialKey,
    formData, handleFormChange, handleFormSubmit, isNotRobot, setIsNotRobot, formError, formSubmitted,
    activeLocation, setActiveLocation, CITY_LABELS, COUNTRY_CODES, mapEmbedUrl,
    setLeadModalType, setShowLeadModal,
    carouselFading, carouselRef, handleCarouselScroll, handleNextCourse, handlePrevCourse, carouselMaxScroll, carouselScrollLeft,
    sinceTagline, featuredCourses
  };
return (
    <div className="bg-white relative w-full overflow-x-hidden flex flex-col items-stretch" data-name="Alabs- Landing page">
      {/* Scoped keyframes — embedded so the marquees can't be broken by globals.css
          purging, layer ordering, or HMR. Unique names (alp-*) prevent collisions. */}
      <style>{`
        @keyframes alp-marquee-left  { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
        @keyframes alp-marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0);    } }
        @keyframes alp-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes alp-pulse-fade { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.05); } }
        .alp-marquee-pause:hover { animation-play-state: paused !important; }
      `}</style>
      
      <AlabsLandingPageMobile {...viewState} />
      <AlabsLandingPageDesktop {...viewState} />
      {/* ── FAQ section (flow-based) ────────────────────────────────────────────
          Per CLAUDE.md §15, this block is intentionally OUTSIDE the absolute canvas
          so the grid-rows accordion can naturally push subsequent siblings down. */}
      <FaqFlowSection
        faqs={faqs}
        openFaqId={openFaqId}
        onToggle={toggleFaq}
        contactPhone={siteSettings?.contactPhone}
        pageBlocks={pageBlocks}
      />



      {/* Lead capture modal — portal rendered over the fixed-width canvas */}
      {showLeadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowLeadModal(false)}>
          <div className="bg-white rounded-[20px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.25)] w-[520px] p-[40px] relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-[16px] right-[20px] text-[24px] text-[rgba(0,0,0,0.4)] hover:text-black" onClick={() => setShowLeadModal(false)}>×</button>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-alabs-navy text-[24px] mb-[8px]">
              {leadModalType === "fresher" ? "Start Your Data Career" : "Accelerate Your Career"}
            </p>
            <p className="font-['Inter:Regular',sans-serif] text-[rgba(0,0,0,0.5)] text-[14px] mb-[24px]">
              {leadModalType === "fresher" ? "Fill in your details and our counselor will reach out to you." : "Tell us about yourself and we'll suggest the best learning path."}
            </p>
            <LeadForm source={leadModalType === "fresher" ? "fresher-card" : "experienced-card"} onSuccess={() => setShowLeadModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
}