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
import imgAlabsLogo from "./3bf553a15ed8e3b04af9c46289180fc24b35c112.png";
import imgBrand from "./1904a369c66c61d55534bc891b6545f664e34340.png";
import imgBrand1 from "./df7460e7d387cf05847fa1a9558d64e7697c7f9a.png";
import imgImage41 from "./a97303ee2d1e88ae2dcd01bf4eaed6cc3ca65d23.png";
import imgBrand2 from "./d7317d424c4f54cc294ca80ca343bfe0d33648ec.png";
import imgBrand3 from "./f85fd5624752bf13429a0092fb513d7678f64954.png";
import imgRectangle135 from "./753a8cf92e71b3a1c99a662be50669e23496d5bb.png";
import imgSponser from "./0effb68a268a8b7912b8aae4d984808edb6a835d.png";
import { imgGroup } from "./svg-2vm31";
import { GlobalNavbar, GlobalFooter } from "../shared/GlobalLayout";


function Icon() {
  return (
    <div className="absolute left-[74px] size-[31px] top-[988px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g id="icon">
          <path d={svgPaths.p28a68b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[416px] size-[25px] top-[990px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="icon">
          <path d={svgPaths.p4b64a80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[585px] size-[24px] top-[1079px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d={svgPaths.pb6aa400} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p44b0b80} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[757px] size-[20px] top-[993px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <path d={svgPaths.p318cd180} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.167 21.1667">
          <g id="Group">
            <path d={svgPaths.p2ccfc700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p39159f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p7d5fb00} fill="var(--fill-0, black)" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1036d980} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p28ff8380} fill="var(--fill-0, black)" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkSolidDataDisplay() {
  return (
    <div className="absolute left-[247px] overflow-clip size-[23px] top-[1080px]" data-name="icon-park-solid:data-display">
      <Group />
    </div>
  );
}

function BoxiconsMonitor() {
  return (
    <div className="absolute left-[1092px] size-[27px] top-[990px]" data-name="boxicons:monitor">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="boxicons:monitor">
          <path d={svgPaths.p65adc00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[924px] size-[25px] top-[1079px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="icon">
          <path d={svgPaths.p290dac00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle() {
  return (
    <div className="absolute left-[86px] size-[28px] top-[1449px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p3c3d0980} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle1() {
  return (
    <div className="absolute left-[86px] size-[28px] top-[1521px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p3c3d0980} fill="var(--fill-0, #19CF9E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle2() {
  return (
    <div className="absolute left-[86px] size-[28px] top-[1593px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p3c3d0980} fill="var(--fill-0, #19CF9E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle3() {
  return (
    <div className="absolute left-[86px] size-[28px] top-[1665px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p3c3d0980} fill="var(--fill-0, #19CF9E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[100px] left-[243px] top-[1778px] w-[147px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147 100">
        <g id="Group 1">
          <ellipse cx="2.96372" cy="2.94117" fill="var(--fill-0, #D9D9D9)" id="Ellipse 28" rx="2.96372" ry="2.94117" />
          <ellipse cx="2.96372" cy="21.7646" fill="var(--fill-0, #D9D9D9)" id="Ellipse 36" rx="2.96372" ry="2.94117" />
          <ellipse cx="2.96372" cy="40.5883" fill="var(--fill-0, #D9D9D9)" id="Ellipse 44" rx="2.96372" ry="2.94117" />
          <ellipse cx="2.96372" cy="59.4117" fill="var(--fill-0, #D9D9D9)" id="Ellipse 52" rx="2.96372" ry="2.94117" />
          <ellipse cx="2.96372" cy="78.2352" fill="var(--fill-0, #D9D9D9)" id="Ellipse 60" rx="2.96372" ry="2.94117" />
          <ellipse cx="2.96372" cy="97.0588" fill="var(--fill-0, #D9D9D9)" id="Ellipse 68" rx="2.96372" ry="2.94117" />
          <ellipse cx="23.1172" cy="2.94117" fill="var(--fill-0, #D9D9D9)" id="Ellipse 29" rx="2.96372" ry="2.94117" />
          <ellipse cx="23.1172" cy="21.7646" fill="var(--fill-0, #D9D9D9)" id="Ellipse 37" rx="2.96372" ry="2.94117" />
          <ellipse cx="23.1172" cy="40.5883" fill="var(--fill-0, #D9D9D9)" id="Ellipse 45" rx="2.96372" ry="2.94117" />
          <ellipse cx="23.1172" cy="59.4117" fill="var(--fill-0, #D9D9D9)" id="Ellipse 53" rx="2.96372" ry="2.94117" />
          <ellipse cx="23.1172" cy="78.2352" fill="var(--fill-0, #D9D9D9)" id="Ellipse 61" rx="2.96372" ry="2.94117" />
          <ellipse cx="23.1172" cy="97.0588" fill="var(--fill-0, #D9D9D9)" id="Ellipse 69" rx="2.96372" ry="2.94117" />
          <ellipse cx="43.2704" cy="2.94117" fill="var(--fill-0, #D9D9D9)" id="Ellipse 30" rx="2.96372" ry="2.94117" />
          <ellipse cx="43.2704" cy="21.7647" fill="var(--fill-0, #D9D9D9)" id="Ellipse 38" rx="2.96372" ry="2.94117" />
          <ellipse cx="43.2704" cy="40.5884" fill="var(--fill-0, #D9D9D9)" id="Ellipse 46" rx="2.96372" ry="2.94117" />
          <ellipse cx="43.2704" cy="59.4116" fill="var(--fill-0, #D9D9D9)" id="Ellipse 54" rx="2.96372" ry="2.94117" />
          <ellipse cx="43.2704" cy="78.2351" fill="var(--fill-0, #D9D9D9)" id="Ellipse 62" rx="2.96372" ry="2.94117" />
          <ellipse cx="43.2704" cy="97.0589" fill="var(--fill-0, #D9D9D9)" id="Ellipse 70" rx="2.96372" ry="2.94117" />
          <ellipse cx="63.4237" cy="2.94117" fill="var(--fill-0, #D9D9D9)" id="Ellipse 31" rx="2.96372" ry="2.94117" />
          <ellipse cx="63.4237" cy="21.7647" fill="var(--fill-0, #D9D9D9)" id="Ellipse 39" rx="2.96372" ry="2.94117" />
          <ellipse cx="63.4237" cy="40.5884" fill="var(--fill-0, #D9D9D9)" id="Ellipse 47" rx="2.96372" ry="2.94117" />
          <ellipse cx="63.4237" cy="59.4116" fill="var(--fill-0, #D9D9D9)" id="Ellipse 55" rx="2.96372" ry="2.94117" />
          <ellipse cx="63.4237" cy="78.2351" fill="var(--fill-0, #D9D9D9)" id="Ellipse 63" rx="2.96372" ry="2.94117" />
          <ellipse cx="63.4237" cy="97.0589" fill="var(--fill-0, #D9D9D9)" id="Ellipse 71" rx="2.96372" ry="2.94117" />
          <ellipse cx="83.577" cy="2.94117" fill="var(--fill-0, #D9D9D9)" id="Ellipse 32" rx="2.96372" ry="2.94117" />
          <ellipse cx="83.577" cy="21.7647" fill="var(--fill-0, #D9D9D9)" id="Ellipse 40" rx="2.96372" ry="2.94117" />
          <ellipse cx="83.577" cy="40.5884" fill="var(--fill-0, #D9D9D9)" id="Ellipse 48" rx="2.96372" ry="2.94117" />
          <ellipse cx="83.577" cy="59.4116" fill="var(--fill-0, #D9D9D9)" id="Ellipse 56" rx="2.96372" ry="2.94117" />
          <ellipse cx="83.577" cy="78.2351" fill="var(--fill-0, #D9D9D9)" id="Ellipse 64" rx="2.96372" ry="2.94117" />
          <ellipse cx="83.577" cy="97.0589" fill="var(--fill-0, #D9D9D9)" id="Ellipse 72" rx="2.96372" ry="2.94117" />
          <ellipse cx="103.73" cy="2.94117" fill="var(--fill-0, #D9D9D9)" id="Ellipse 33" rx="2.96372" ry="2.94117" />
          <ellipse cx="103.73" cy="21.7646" fill="var(--fill-0, #D9D9D9)" id="Ellipse 41" rx="2.96372" ry="2.94117" />
          <ellipse cx="103.73" cy="40.5883" fill="var(--fill-0, #D9D9D9)" id="Ellipse 49" rx="2.96372" ry="2.94117" />
          <ellipse cx="103.73" cy="59.4117" fill="var(--fill-0, #D9D9D9)" id="Ellipse 57" rx="2.96372" ry="2.94117" />
          <ellipse cx="103.73" cy="78.2352" fill="var(--fill-0, #D9D9D9)" id="Ellipse 65" rx="2.96372" ry="2.94117" />
          <ellipse cx="103.73" cy="97.0588" fill="var(--fill-0, #D9D9D9)" id="Ellipse 73" rx="2.96372" ry="2.94117" />
          <ellipse cx="123.884" cy="2.94117" fill="var(--fill-0, #D9D9D9)" id="Ellipse 34" rx="2.96372" ry="2.94117" />
          <ellipse cx="123.884" cy="21.7646" fill="var(--fill-0, #D9D9D9)" id="Ellipse 42" rx="2.96372" ry="2.94117" />
          <ellipse cx="123.884" cy="40.5883" fill="var(--fill-0, #D9D9D9)" id="Ellipse 50" rx="2.96372" ry="2.94117" />
          <ellipse cx="123.884" cy="59.4117" fill="var(--fill-0, #D9D9D9)" id="Ellipse 58" rx="2.96372" ry="2.94117" />
          <ellipse cx="123.884" cy="78.2352" fill="var(--fill-0, #D9D9D9)" id="Ellipse 66" rx="2.96372" ry="2.94117" />
          <ellipse cx="123.884" cy="97.0588" fill="var(--fill-0, #D9D9D9)" id="Ellipse 74" rx="2.96372" ry="2.94117" />
          <ellipse cx="144.036" cy="2.94117" fill="var(--fill-0, #D9D9D9)" id="Ellipse 35" rx="2.96372" ry="2.94117" />
          <ellipse cx="144.036" cy="21.7647" fill="var(--fill-0, #D9D9D9)" id="Ellipse 43" rx="2.96372" ry="2.94117" />
          <ellipse cx="144.036" cy="40.5884" fill="var(--fill-0, #D9D9D9)" id="Ellipse 51" rx="2.96372" ry="2.94117" />
          <ellipse cx="144.036" cy="59.4116" fill="var(--fill-0, #D9D9D9)" id="Ellipse 59" rx="2.96372" ry="2.94117" />
          <ellipse cx="144.036" cy="78.2351" fill="var(--fill-0, #D9D9D9)" id="Ellipse 67" rx="2.96372" ry="2.94117" />
          <ellipse cx="144.036" cy="97.0589" fill="var(--fill-0, #D9D9D9)" id="Ellipse 75" rx="2.96372" ry="2.94117" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-476px)] top-[5578px]">
      <div className="-translate-x-1/2 absolute bg-[#1de5b5] h-[350px] left-[calc(50%-476px)] rounded-bl-[201px] rounded-br-[20px] rounded-tl-[201px] rounded-tr-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[5578px] w-[348px]" />
    </div>
  );
}

function ModeTickIcon({ top, active }: { top: number; active: boolean }) {
  return (
    <div className="absolute left-[161px] size-[36px] transition-all duration-300" style={{ top: `${top}px` }} data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p13fc6d00} fill={active ? "white" : "#094C80"} id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function WpfOnline() {
  return (
    <div className="absolute left-[686px] size-[26px] top-[3324px]" data-name="wpf:online">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="wpf:online">
          <path d={svgPaths.p811e870} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiLocation() {
  return (
    <div className="absolute left-[839px] size-[24px] top-[3324px]" data-name="mdi:location">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:location">
          <path d={svgPaths.p3aac8400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiLocation1() {
  return (
    <div className="absolute left-[1031px] size-[24px] top-[3324px]" data-name="mdi:location">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:location">
          <path d={svgPaths.p3aac8400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiLocation2() {
  return (
    <div className="absolute left-[1215px] size-[24px] top-[3324px]" data-name="mdi:location">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:location">
          <path d={svgPaths.p3aac8400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StreamlineGroupMeetingCallRemix() {
  return (
    <div className="absolute left-[685px] size-[28px] top-[3401px]" data-name="streamline:group-meeting-call-remix">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="streamline:group-meeting-call-remix">
          <path clipRule="evenodd" d={svgPaths.p67d7100} fill="var(--fill-0, #07B3E7)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons8Student() {
  return (
    <div className="absolute left-[682px] size-[33px] top-[3449px]" data-name="icons8:student">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="icons8:student">
          <path d={svgPaths.p31662980} fill="var(--fill-0, #07B3E7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[4.17%_4.16%_4.16%_4.17%]" data-name="Group">
      <div className="absolute inset-[-2.82%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0847 28.0846">
          <g id="Group">
            <path d={svgPaths.p5b28440} id="Vector" stroke="var(--stroke-0, #07B3E7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p364beb80} id="Vector_2" stroke="var(--stroke-0, #07B3E7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p28545b80} id="Vector_3" stroke="var(--stroke-0, #07B3E7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1c2b94c0} id="Vector_4" stroke="var(--stroke-0, #07B3E7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function StreamlinePlumpGlobalLearning() {
  return (
    <div className="absolute left-[682px] overflow-clip size-[29px] top-[3504px]" data-name="streamline-plump:global-learning">
      <Group2 />
    </div>
  );
}

function CarbonMachineLearningModel() {
  return (
    <div className="absolute left-[681px] size-[31px] top-[3554px]" data-name="carbon:machine-learning-model">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g id="carbon:machine-learning-model">
          <path d={svgPaths.p2952ab00} fill="var(--fill-0, #07B3E7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AkarIconsCross() {
  return (
    <div className="absolute left-[1185px] size-[24px] top-[6352px]" data-name="akar-icons:cross">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="akar-icons:cross">
          <path d="M20 20L4 4M20 4L4 20" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function AkarIconsCross1() {
  return (
    <div className="relative size-[24px]" data-name="akar-icons:cross">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="akar-icons:cross">
          <path d={svgPaths.p13051a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function AkarIconsCross2() {
  return (
    <div className="relative size-[24px]" data-name="akar-icons:cross">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="akar-icons:cross">
          <path d={svgPaths.p13051a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function AkarIconsCross3() {
  return (
    <div className="relative size-[24px]" data-name="akar-icons:cross">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="akar-icons:cross">
          <path d={svgPaths.p13051a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function AkarIconsCross4() {
  return (
    <div className="relative size-[24px]" data-name="akar-icons:cross">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="akar-icons:cross">
          <path d={svgPaths.p13051a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function AkarIconsCross5() {
  return (
    <div className="relative size-[24px]" data-name="akar-icons:cross">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="akar-icons:cross">
          <path d={svgPaths.p13051a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function AkarIconsCross6() {
  return (
    <div className="relative size-[24px]" data-name="akar-icons:cross">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="akar-icons:cross">
          <path d={svgPaths.p13051a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function AkarIconsCross7() {
  return (
    <div className="relative size-[24px]" data-name="akar-icons:cross">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="akar-icons:cross">
          <path d={svgPaths.p13051a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LineMdStarFilled() {
  return (
    <div className="absolute left-[676px] size-[19px] top-[5811px]" data-name="line-md:star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="line-md:star-filled">
          <path d={svgPaths.p358b5b00} fill="var(--fill-0, #FFD700)" id="Vector" />
          <path d={svgPaths.p160bf0c0} id="Vector_2" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LineMdStarFilled1() {
  return (
    <div className="absolute left-[693px] size-[19px] top-[5811px]" data-name="line-md:star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="line-md:star-filled">
          <path d={svgPaths.p358b5b00} fill="var(--fill-0, #FFD700)" id="Vector" />
          <path d={svgPaths.p160bf0c0} id="Vector_2" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LineMdStarFilled2() {
  return (
    <div className="absolute left-[710px] size-[19px] top-[5811px]" data-name="line-md:star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="line-md:star-filled">
          <path d={svgPaths.p358b5b00} fill="var(--fill-0, #FFD700)" id="Vector" />
          <path d={svgPaths.p160bf0c0} id="Vector_2" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LineMdStarFilled3() {
  return (
    <div className="absolute left-[727px] size-[19px] top-[5811px]" data-name="line-md:star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="line-md:star-filled">
          <path d={svgPaths.p358b5b00} fill="var(--fill-0, #FFD700)" id="Vector" />
          <path d={svgPaths.p160bf0c0} id="Vector_2" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LineMdStarFilled4() {
  return (
    <div className="absolute left-[744px] size-[19px] top-[5811px]" data-name="line-md:star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="line-md:star-filled">
          <path d={svgPaths.p358b5b00} fill="var(--fill-0, #FFD700)" id="Vector" />
          <path d={svgPaths.p160bf0c0} id="Vector_2" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MdiAccountStudent() {
  return (
    <div className="absolute left-[881px] size-[59px] top-[515px]" data-name="mdi:account-student">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 59">
        <g id="mdi:account-student">
          <path d={svgPaths.pbd5faf0} fill="var(--fill-0, #19CF9E)" id="icon2" />
        </g>
      </svg>
    </div>
  );
}

function MaterialSymbolsLightLockOutline() {
  return (
    <div className="absolute left-[793px] size-[18px] top-[770px]" data-name="material-symbols-light:lock-outline">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="material-symbols-light:lock-outline">
          <path d={svgPaths.p87c8c80} fill="var(--fill-0, black)" fillOpacity="0.5" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Group">
          <path d={svgPaths.p22800000} fill="var(--fill-0, black)" fillOpacity="0.5" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1368ae80} fill="var(--fill-0, black)" fillOpacity="0.5" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function HealthiconsNoOutline() {
  return (
    <div className="absolute left-[937px] overflow-clip size-[18px] top-[770px]" data-name="healthicons:no-outline">
      <Group4 />
    </div>
  );
}

function MdiLightClock() {
  return (
    <div className="absolute left-[1070px] size-[18px] top-[770px]" data-name="mdi-light:clock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="mdi-light:clock">
          <path d={svgPaths.p15b08c70} fill="var(--fill-0, black)" fillOpacity="0.5" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiLocation3() {
  return (
    <div className="absolute left-[714px] size-[19px] top-[2612px]" data-name="mdi:location">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="mdi:location">
          <path d={svgPaths.p997f080} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiLocation4() {
  return (
    <div className="absolute left-[1054px] size-[19px] top-[2612px]" data-name="mdi:location">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="mdi:location">
          <path d={svgPaths.p997f080} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="Group">
      <div className="absolute inset-[-8.42%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 12.875">
          <g id="Group">
            <path d={svgPaths.p8ea6100} fill="var(--fill-0, white)" id="Vector" />
            <path d="M3.125 1V2.875M9.375 1V2.875" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LetsIconsDateFill() {
  return (
    <div className="absolute left-[716px] overflow-clip size-[15px] top-[2653px]" data-name="lets-icons:date-fill">
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="Group">
      <div className="absolute inset-[-8.42%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 12.875">
          <g id="Group">
            <path d={svgPaths.p8ea6100} fill="var(--fill-0, white)" id="Vector" />
            <path d="M3.125 1V2.875M9.375 1V2.875" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LetsIconsDateFill1() {
  return (
    <div className="absolute left-[1056px] overflow-clip size-[15px] top-[2653px]" data-name="lets-icons:date-fill">
      <Group6 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[8.33%_8.33%_0.77%_8.34%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1667 15.4516">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p20f4500} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteTimeFill() {
  return (
    <div className="absolute left-[715px] overflow-clip size-[17px] top-[2691px]" data-name="mingcute:time-fill">
      <Group7 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[8.33%_8.33%_0.77%_8.34%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1667 15.4516">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p20f4500} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteTimeFill1() {
  return (
    <div className="absolute left-[1055px] overflow-clip size-[17px] top-[2691px]" data-name="mingcute:time-fill">
      <Group8 />
    </div>
  );
}

function FluentPresenceAvailable12Filled() {
  return (
    <div className="absolute left-[716px] size-[15px] top-[2729px]" data-name="fluent:presence-available-12-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_1_634)" id="fluent:presence-available-12-filled">
          <path d={svgPaths.p1566d700} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_634">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FluentPresenceAvailable12Filled1() {
  return (
    <div className="absolute left-[1056px] size-[15px] top-[2729px]" data-name="fluent:presence-available-12-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_1_634)" id="fluent:presence-available-12-filled">
          <path d={svgPaths.p1566d700} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_634">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[1271px] size-[64px] top-[506px]" data-name="icon1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_625)" id="icon1">
          <path d={svgPaths.p2760a800} fill="var(--fill-0, #07B3E7)" id="Vector" />
          <g id="material-symbols-light:business-center-rounded" />
        </g>
        <defs>
          <clipPath id="clip0_1_625">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group9({ course }: { course?: Course }) {
  const b0 = course?.batches?.[0];
  const b1 = course?.batches?.[1];
  const b2 = course?.batches?.[2];
  return (
    <div className="absolute contents left-[520px] top-[1427px]">
      <div className="absolute bg-white border-[0.5px] border-[rgba(0,0,0,0.3)] border-solid h-[540px] left-[520px] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[1427px] w-[400px]" />
      <div className="absolute h-[262px] left-[531px] rounded-[15px] top-[1435px] w-[378px]" data-name="course img">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[15px] size-full" src={course?.thumbnailUrl ?? imgCourseImg.src} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[539px] not-italic text-[24px] text-black top-[1740px] whitespace-nowrap">{course?.title ?? "Data Analytics"}</p>
      <div className="absolute bg-[#f0fbff] h-[23px] left-[666px] rounded-[58px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] top-[1706px] w-[77px]" />
      <div className="absolute bg-[#fffad2] h-[23px] left-[747px] rounded-[58px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] top-[1706px] w-[82px]" />
      <div className="absolute bg-[#fff2fa] h-[23px] left-[832px] rounded-[58px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] top-[1706px] w-[77px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[678px] not-italic text-[10px] text-[rgba(9,38,63,0.5)] top-[1712px] whitespace-nowrap">{course?.classesCount ? `${course.classesCount} Classes` : "46 Classes"}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[759px] not-italic text-[10px] text-[rgba(9,38,63,0.5)] top-[1712px] whitespace-nowrap">{course?.hoursCount ? `${course.hoursCount}+ Hours` : "500+ Hours"}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[844px] not-italic text-[10px] text-[rgba(9,38,63,0.5)] top-[1712px] whitespace-nowrap">{course?.experienceLabel ?? "Experience"}</p>
      <div className="absolute bg-[#f0fbff] h-[43px] left-[546px] rounded-[81px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] top-[1789px] w-[101px]" />
      <div className="absolute bg-[#fffad2] h-[43px] left-[656px] rounded-[81px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] top-[1789px] w-[116px]" />
      <div className="absolute bg-[#fff2fa] h-[43px] left-[781px] rounded-[81px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] top-[1789px] w-[116px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[579px] not-italic text-[12px] text-black top-[1796px] whitespace-nowrap">{b0?.location ?? "Noida"}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[684px] not-italic text-[12px] text-black top-[1796px] whitespace-nowrap">{b1?.location ?? "Bangalore"}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[814px] not-italic text-[12px] text-black top-[1796px] whitespace-nowrap">{b2?.location ?? "Gurgaon"}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[577px] not-italic text-[10px] text-[rgba(0,0,0,0.5)] top-[1812px] whitespace-nowrap">{fmtDate(b0?.startDate) || "20 April"}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[697px] not-italic text-[10px] text-[rgba(0,0,0,0.5)] top-[1812px] whitespace-nowrap">{fmtDate(b1?.startDate) || "13 April"}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[821px] not-italic text-[10px] text-[rgba(0,0,0,0.5)] top-[1812px] whitespace-nowrap">{fmtDate(b2?.startDate) || "04 May"}</p>
      {/* Schedule + seats pills — flex-wrap so longer text doesn't squish */}
      <div className="absolute left-[539px] top-[1846px] flex flex-wrap gap-[6px]" style={{ width: "359px" }}>
        {[
          { schedule: b0?.schedule ?? "Weekend", seats: b0?.seatsLeft ?? 10 },
          { schedule: b1?.schedule ?? "Weekday", seats: b1?.seatsLeft ?? 8 },
          { schedule: b2?.schedule ?? "Self-Placed", seats: b2?.seatsLeft ?? 10 },
        ].map((b, i) => (
          <div key={i} className="bg-white border-[0.5px] border-[rgba(0,0,0,0.3)] border-solid rounded-[81px] px-[10px] py-[5px] flex items-center justify-center">
            <span className="font-['Inter:Regular',sans-serif] text-[#09263f] text-[11px] leading-tight text-center whitespace-nowrap">
              {b.schedule} –{" "}
              <strong className="font-['Inter:Extra_Bold',sans-serif] font-extrabold">{b.seats} Seats left</strong>
            </span>
          </div>
        ))}
      </div>
      <Link href={course?.slug ? `/courses/${course.slug}` : "/courses"} className="contents">
        <div className="absolute bg-[#1de5b5] h-[56px] left-[539px] rounded-[1000px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[1894px] w-[364px]" />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[720.5px] not-italic text-white text-[16px] text-center top-[1912px] whitespace-nowrap">Explore Course</p>
      </Link>
    </div>
  );
}

function Group10({ course }: { course?: Course }) {
  const b0 = course?.batches?.[0];
  const b1 = course?.batches?.[1];
  const b2 = course?.batches?.[2];
  return (
    <div className="absolute contents left-[961px] top-[1427px]">
      <div className="absolute bg-white border-[0.5px] border-[rgba(0,0,0,0.3)] border-solid h-[540px] left-[961px] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[1427px] w-[400px]" />
      <div className="absolute h-[262px] left-[972px] rounded-[15px] top-[1435px] w-[378px]" data-name="course img">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[15px] size-full" src={course?.thumbnailUrl ?? imgCourseImg1.src} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[980px] not-italic text-[24px] text-black top-[1740px] whitespace-nowrap">{course?.title ?? "Business Analytics"}</p>
      <div className="absolute bg-[#f0fbff] h-[23px] left-[1107px] rounded-[58px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] top-[1706px] w-[77px]" />
      <div className="absolute bg-[#fffad2] h-[23px] left-[1188px] rounded-[58px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] top-[1706px] w-[82px]" />
      <div className="absolute bg-[#fff2fa] h-[23px] left-[1273px] rounded-[58px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] top-[1706px] w-[77px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1119px] not-italic text-[10px] text-[rgba(9,38,63,0.5)] top-[1712px] whitespace-nowrap">{course?.classesCount ? `${course.classesCount} Classes` : "46 Classes"}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1200px] not-italic text-[10px] text-[rgba(9,38,63,0.5)] top-[1712px] whitespace-nowrap">{course?.hoursCount ? `${course.hoursCount}+ Hours` : "500+ Hours"}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1285px] not-italic text-[10px] text-[rgba(9,38,63,0.5)] top-[1712px] whitespace-nowrap">{course?.experienceLabel ?? "Experience"}</p>
      <div className="absolute bg-[#f0fbff] h-[43px] left-[987px] rounded-[81px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] top-[1789px] w-[101px]" />
      <div className="absolute bg-[#fffad2] h-[43px] left-[1097px] rounded-[81px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] top-[1789px] w-[116px]" />
      <div className="absolute bg-[#fff2fa] h-[43px] left-[1222px] rounded-[81px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] top-[1789px] w-[116px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1020px] not-italic text-[12px] text-black top-[1796px] whitespace-nowrap">{b0?.location ?? "Noida"}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1125px] not-italic text-[12px] text-black top-[1796px] whitespace-nowrap">{b1?.location ?? "Bangalore"}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1255px] not-italic text-[12px] text-black top-[1796px] whitespace-nowrap">{b2?.location ?? "Gurgaon"}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1018px] not-italic text-[10px] text-[rgba(0,0,0,0.5)] top-[1812px] whitespace-nowrap">{fmtDate(b0?.startDate) || "20 April"}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1138px] not-italic text-[10px] text-[rgba(0,0,0,0.5)] top-[1812px] whitespace-nowrap">{fmtDate(b1?.startDate) || "13 April"}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1262px] not-italic text-[10px] text-[rgba(0,0,0,0.5)] top-[1812px] whitespace-nowrap">{fmtDate(b2?.startDate) || "04 May"}</p>
      {/* Schedule + seats pills — flex-wrap so longer text doesn't squish */}
      <div className="absolute left-[980px] top-[1846px] flex flex-wrap gap-[6px]" style={{ width: "359px" }}>
        {[
          { schedule: b0?.schedule ?? "Weekend", seats: b0?.seatsLeft ?? 10 },
          { schedule: b1?.schedule ?? "Weekday", seats: b1?.seatsLeft ?? 8 },
          { schedule: b2?.schedule ?? "Self-Placed", seats: b2?.seatsLeft ?? 10 },
        ].map((b, i) => (
          <div key={i} className="bg-white border-[0.5px] border-[rgba(0,0,0,0.3)] border-solid rounded-[81px] px-[10px] py-[5px] flex items-center justify-center">
            <span className="font-['Inter:Regular',sans-serif] text-[#09263f] text-[11px] leading-tight text-center whitespace-nowrap">
              {b.schedule} –{" "}
              <strong className="font-['Inter:Extra_Bold',sans-serif] font-extrabold">{b.seats} Seats left</strong>
            </span>
          </div>
        ))}
      </div>
      <Link href={course?.slug ? `/courses/${course.slug}` : "/courses"} className="contents">
        <div className="absolute bg-[#1de5b5] h-[56px] left-[980px] rounded-[1000px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[1894px] w-[364px]" />
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1161.5px] not-italic text-white text-[16px] text-center top-[1912px] whitespace-nowrap">Explore Course</p>
      </Link>
    </div>
  );
}



function BoxiconsLocationFilled() {
  return (
    <div className="absolute left-[82px] size-[24px] top-[5148px]" data-name="boxicons:location-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="boxicons:location-filled">
          <path d={svgPaths.p39f2f380} fill="var(--fill-0, #09263F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BoxiconsLocationFilled1() {
  return (
    <div className="absolute left-[302px] size-[24px] top-[5147px]" data-name="boxicons:location-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="boxicons:location-filled">
          <path d={svgPaths.p39f2f380} fill="var(--fill-0, #09263F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BoxiconsLocationFilled2() {
  return (
    <div className="absolute left-[517px] size-[24px] top-[5148px]" data-name="boxicons:location-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="boxicons:location-filled">
          <path d={svgPaths.p39f2f380} fill="var(--fill-0, #09263F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group11({ onClick, disabled }: { onClick?: () => void; disabled?: boolean }) {
  return (
    <div
      className={`absolute left-[1324.24px] size-[37.095px] top-[1353.95px] transition-opacity duration-200 ${disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer opacity-100 hover:opacity-70"}`}
      onClick={disabled ? undefined : onClick}
    >
      <div className="absolute inset-[-43.13%_-53.91%_-64.7%_-53.92%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.0952 77.0952">
          <g id="Group 7">
            <g filter="url(#filter0_d_1_620)" id="Ellipse 98">
              <circle cx="38.5476" cy="34.5476" fill="var(--fill-0, #09263F)" r="18.5476" />
            </g>
            <g id="weui:arrow-outlined">
              <path d={svgPaths.p19b24200} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77.0952" id="filter0_d_1_620" width="77.0952" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_620" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_620" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function LeftArrowButton({ onClick, disabled }: { onClick?: () => void; disabled?: boolean }) {
  return (
    <div
      className={`absolute left-[1282px] size-[37.095px] top-[1353.95px] transition-opacity duration-200 ${disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer opacity-100 hover:opacity-70"}`}
      onClick={disabled ? undefined : onClick}
    >
      <div className="absolute inset-[-43.13%_-53.91%_-64.7%_-53.92%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.0952 77.0952">
          <g id="Group 7 Left">
            <g filter="url(#filter0_d_left)">
              <circle cx="38.5476" cy="34.5476" fill="var(--fill-0, #09263F)" r="18.5476" />
            </g>
            <g transform="translate(77.0952, 0) scale(-1, 1)">
              <path d={svgPaths.p19b24200} fill="var(--fill-0, white)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77.0952" id="filter0_d_left" width="77.0952" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_left" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_left" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function WeuiArrowOutlined() {
  return (
    <div className="h-[20px] relative w-[10px]" data-name="weui:arrow-outlined">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20">
        <g id="weui:arrow-outlined">
          <path d={svgPaths.p24403700} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FamiconsCall() {
  return (
    <div className="absolute left-[88px] size-[21px] top-[150px]" data-name="famicons:call">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="famicons:call">
          <path d={svgPaths.pea93a00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[66px] top-[138px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[116px] not-italic text-[#09263f] text-[16px] top-[150px] whitespace-nowrap">+91 9555219007</p>
      <div className="absolute border border-[rgba(9,38,63,0.3)] border-solid h-[40px] left-[66px] rounded-[56px] top-[138px] w-[206px]" />
      <FamiconsCall />
    </div>
  );
}

function BoxiconsLocationFilled3({ className }: { className?: string }) {
  return (
    <div className={className} data-name="boxicons:location-filled">
      <svg className="block size-full" fill="currentColor" viewBox="0 0 21 21">
        <path d={svgPaths.p5169a80} />
      </svg>
    </div>
  );
}

function BoxiconsLocationFilled4() {
  return (
    <div className="absolute left-[528px] size-[21px] top-[560px]" data-name="boxicons:location-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="boxicons:location-filled">
          <path d={svgPaths.p5169a80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BoxiconsLocationFilled5() {
  return (
    <div className="absolute left-[971px] size-[21px] top-[560px]" data-name="boxicons:location-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="boxicons:location-filled">
          <path d={svgPaths.p5169a80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RiInstagramFill({ className }: { className?: string }) {
  return (
    <div className={className} data-name="ri:instagram-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.p22379000} fill="currentColor" />
      </svg>
    </div>
  );
}

function IcRoundFacebook({ className }: { className?: string }) {
  return (
    <div className={className} data-name="ic:round-facebook">
      <svg className="block size-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </div>
  );
}

function MdiLinkedin({ className }: { className?: string }) {
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

function MdiYoutube({ className }: { className?: string }) {
  return (
    <div className={className} data-name="mdi:youtube">
      <svg className="block size-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[4.69%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.984px] mask-size-[21px_21px]" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 19.032">
        <g id="Group">
          <path d={svgPaths.p18891d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group14 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function PrimeTwitter({ className }: { className?: string }) {
  return (
    <div className={className} data-name="prime:twitter">
      <svg className="block size-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
      </svg>
    </div>
  );
}

function AkarIconsMediumFill({ className }: { className?: string }) {
  return (
    <div className={className} data-name="akar-icons:medium-fill">
       <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 18">
          <path d={svgPaths.p19230580} fill="currentColor" id="medium" />
        </svg>
    </div>
  );
}

function Frame({ offices, footerLinks, footerCities, siteSettings, posts }: {
  offices?: LandingPageProps["offices"];
  footerLinks?: LandingPageProps["footerLinks"];
  footerCities?: LandingPageProps["footerCities"];
  siteSettings?: LandingPageProps["siteSettings"];
  posts?: LandingPageProps["posts"];
}) {
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
          {/* Brand & Blog Area */}
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

          {/* Nav Links Grid */}
          <div className="grid grid-cols-3 gap-[40px] flex-1 justify-items-end">
            {/* About Us */}
            <div className="flex flex-col gap-6 w-[180px]">
              <p className="font-semibold text-[16px]">About Us</p>
              <div className="flex flex-col gap-4 text-[14px] font-light">
                {(aboutUsLinks.length > 0 ? aboutUsLinks : [
                  { label: "Why Us", url: "/why-us" },
                  { label: "Courses", url: "/courses" },
                  { label: "About Faculty", url: "/about" },
                  { label: "Contact Us", url: "/contact" },
                  { label: "AnalytixLabs Placements", url: "/placements" },
                  { label: "System Requirements", url: "/requirements" },
                ]).map((link, i) => (
                  <Link key={i} href={link.url ?? "#"} className="hover:underline">{link.label}</Link>
                ))}
              </div>
            </div>

            {/* Etcetera */}
            <div className="flex flex-col gap-6 w-[180px]">
              <p className="font-semibold text-[16px]">Etcetera</p>
              <div className="flex flex-col gap-4 text-[14px] font-light">
                {(etcLinks.length > 0 ? etcLinks : [
                  { label: "System Requirements", url: "/requirements" },
                  { label: "About Faculty", url: "/about" },
                  { label: "Free Resources", url: "/resources" },
                  { label: "Success Stories", url: "/success-stories" },
                  { label: "Colleges Universities Training Courses", url: "/colleges" },
                ]).map((link, i) => (
                  <Link key={i} href={link.url ?? "#"} className="hover:underline">{link.label}</Link>
                ))}
              </div>
            </div>

            {/* Popular Searches */}
            <div className="flex flex-col gap-6 w-[280px]">
              <p className="font-semibold text-[16px]">Popular Searches</p>
              <div className="flex flex-col gap-3 text-[14px] font-light">
                {(popularSearches.length > 0 ? popularSearches.slice(0, 13) : [
                  { label: "Data Analyst Training Course In Delhi", url: "/courses" },
                  { label: "Data Analyst Training Course In Noida", url: "/courses" },
                  { label: "Data Analyst Training Course In Gurgaon", url: "/courses" },
                  { label: "Data Analyst Training Course In Bengaluru", url: "/courses" },
                  { label: "Data Science Course in Delhi", url: "/courses" },
                  { label: "Data Science Course In Noida", url: "/courses" },
                  { label: "Data Science Course In Gurgaon", url: "/courses" },
                  { label: "Data Science Course In Bengaluru", url: "/courses" },
                  { label: "Business Analyst Course In Bengaluru", url: "/courses" },
                  { label: "Business Analyst Course In Delhi", url: "/courses" },
                  { label: "Artificial Intelligence Course in Bengaluru", url: "/courses" },
                  { label: "Artificial Intelligence Course in Delhi", url: "/courses" },
                  { label: "Generative AI Course", url: "/courses" },
                ]).map((link, i) => (
                  <Link key={i} href={link.url ?? "#"} className="hover:underline whitespace-nowrap">{link.label}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Office Cards Section */}
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

        {/* Bottom Bar */}
        <div className="flex flex-col gap-8 pt-10 border-t border-white/20">
          <div className="flex justify-between items-center">
            <p className="text-[14px] font-light">
              © {mounted ? copyYear : "2024"} AnalytixLabs. All Rights Reserved.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              {(() => {
                // siteSettings.socialLinks is a JSON blob shaped { instagram, facebook, youtube, linkedin, twitter, medium }.
                const sl = (siteSettings?.socialLinks ?? {}) as Record<string, string | undefined>;
                return [
                  { icon: RiInstagramFill, url: sl.instagram, size: "size-[24px]" },
                  { icon: IcRoundFacebook, url: sl.facebook, size: "size-[28px]" },
                  { icon: MdiYoutube, url: sl.youtube, size: "size-[32px]" },
                  { icon: MdiLinkedin, url: sl.linkedin, size: "size-[26px]" },
                  { icon: PrimeTwitter, url: sl.twitter, size: "size-[22px]" },
                  { icon: AkarIconsMediumFill, url: sl.medium, size: "size-[24px]" },
                ];
              })().map((social, i) => (
                <a key={i} href={social.url ?? "#"} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <social.icon className={social.size} />
                </a>
              ))}
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

// ---------------------------------------------------------------
// Props contract — every dynamic value the Home page consumes.
// All fields are optional; the JSX falls back to the original
// hardcoded Figma string/image when a field is missing or empty.
// ---------------------------------------------------------------
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
function block(p: LandingPageProps, key: string): string | undefined {
  const blocks = p.pageBlocks?.blocks as Record<string, unknown> | undefined;
  const v = blocks?.[key];
  return typeof v === "string" ? v : undefined;
}

// Helper to read a string[] out of Page.blocks (e.g. bulleted lists).
function blockList(p: LandingPageProps, key: string): string[] | undefined {
  const blocks = p.pageBlocks?.blocks as Record<string, unknown> | undefined;
  const v = blocks?.[key];
  if (Array.isArray(v) && v.every(x => typeof x === "string")) return v as string[];
  return undefined;
}

// Helper to read a `{ label, url }` CTA shape out of Page.blocks.
function blockCta(p: LandingPageProps, key: string): { label?: string; url?: string } {
  const blocks = p.pageBlocks?.blocks as Record<string, unknown> | undefined;
  const v = blocks?.[key];
  if (v && typeof v === "object") {
    const o = v as Record<string, unknown>;
    return {
      label: typeof o.label === "string" ? o.label : undefined,
      url: typeof o.url === "string" ? o.url : undefined,
    };
  }
  return {};
}

function LeadForm({ source, onSuccess }: { source: string; onSuccess: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitting(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE ?? ""}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, source }),
      });
      setSubmitted(true);
      setTimeout(onSuccess, 1500);
    } catch {
      // fail silently
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return <p className="font-['Inter:Semi_Bold',sans-serif] text-[#19cf9e] text-[18px] text-center py-[20px]">Thanks! We'll reach out shortly.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
      <input required value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" className="border border-[rgba(9,38,63,0.3)] rounded-[178px] h-[52px] px-[20px] text-[14px] font-['Inter:Regular',sans-serif] outline-none focus:border-[#1de5b5]" />
      <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your Email" className="border border-[rgba(9,38,63,0.3)] rounded-[178px] h-[52px] px-[20px] text-[14px] font-['Inter:Regular',sans-serif] outline-none focus:border-[#1de5b5]" />
      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Mobile Number" className="border border-[rgba(9,38,63,0.3)] rounded-[178px] h-[52px] px-[20px] text-[14px] font-['Inter:Regular',sans-serif] outline-none focus:border-[#1de5b5]" />
      <button type="submit" disabled={submitting} className="bg-[#1de5b5] rounded-[1000px] h-[52px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[16px] hover:opacity-90 disabled:opacity-60 mt-[4px]">
        {submitting ? "Submitting..." : "Request Callback"}
      </button>
    </form>
  );
}

// Format a batch start-date as "20 April" for card display.
function fmtDate(d: Date | string | null | undefined): string {
  if (!d) return "";
  const dt = typeof d === "string" ? new Date(d) : d;
  return dt.toLocaleDateString("en-IN", { day: "numeric", month: "long" });
}

// Fallback card data — ensures the carousel always has enough cards to scroll.
const FALLBACK_CARDS = [
  { title: "Data Analytics",         classesCount: 46, hoursCount: 500, experienceLabel: "Beginner"     },
  { title: "Business Analytics",     classesCount: 38, hoursCount: 420, experienceLabel: "Intermediate" },
  { title: "Agentic AI",             classesCount: 32, hoursCount: 360, experienceLabel: "Advanced"     },
  { title: "Full Stack AI",          classesCount: 40, hoursCount: 480, experienceLabel: "Intermediate" },
  { title: "Specialization Modules", classesCount: 24, hoursCount: 280, experienceLabel: "All Levels"   },
] as const;

// Self-contained course card. Positions are expressed relative to the card's
// own 400×540 container so it can live inside a flex/scroll row rather than
// being anchored to the 1440 px page canvas.
function CourseCard({ course, idx }: { course?: Course; idx: number }) {
  const fb = FALLBACK_CARDS[idx % FALLBACK_CARDS.length]!;
  const b0 = course?.batches?.[0];
  const b1 = course?.batches?.[1];
  const b2 = course?.batches?.[2];
  const imgSrc = course?.thumbnailUrl ?? (idx % 2 === 0 ? imgCourseImg.src : imgCourseImg1.src);

  return (
    <div
      className="relative bg-white border-[0.5px] border-[rgba(0,0,0,0.3)] border-solid rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] flex-none cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_8px_32px_0px_rgba(0,0,0,0.22)] flex flex-col overflow-hidden snap-start"
      style={{ width: "400px", minHeight: "560px" }}
    >
      {/* Course thumbnail */}
      <div className="p-[11px_11px_0_11px]">
        <div className="relative h-[262px] w-full rounded-[15px] overflow-hidden">
          <img alt={course?.title ?? fb.title} className="absolute inset-0 size-full object-cover" src={imgSrc} />
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 px-[19px] pt-[15px] pb-[35px]">
        {/* Metadata chips — classes / hours / level */}
        <div className="flex flex-wrap gap-2 justify-end mb-4">
          {[
            { label: course?.classesCount ? `${course.classesCount} Classes` : `${fb.classesCount} Classes`, bg: "#f0fbff" },
            { label: course?.hoursCount ? `${course.hoursCount}+ Hours` : `${fb.hoursCount}+ Hours`, bg: "#fffad2" },
            { label: course?.experienceLabel ?? fb.experienceLabel, bg: "#fff2fa" },
          ].map((tag, i) => (
            <div key={i} className="flex items-center h-[23px] px-3 rounded-[58px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)]" style={{ backgroundColor: tag.bg }}>
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[10px] text-[rgba(9,38,63,0.5)] whitespace-nowrap">{tag.label}</span>
            </div>
          ))}
        </div>

        {/* Card title */}
        <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-tight text-[24px] text-black mb-3 min-h-[1.5em]">
          {course?.title ?? fb.title}
        </h3>

        {/* Location colored pills */}
        <div className="flex flex-wrap gap-2 mb-3">
          {[
            { loc: b0?.location ?? "Noida",     date: fmtDate(b0?.startDate) || "20 April", bg: "#f0fbff" },
            { loc: b1?.location ?? "Bangalore", date: fmtDate(b1?.startDate) || "13 April", bg: "#fffad2" },
            { loc: b2?.location ?? "Gurgaon",   date: fmtDate(b2?.startDate) || "04 May",   bg: "#fff2fa" },
          ].map((b, i) => (
            <div key={i} className="flex flex-col items-center justify-center min-h-[43px] px-4 py-1 rounded-[81px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] flex-1 min-w-[100px]" style={{ backgroundColor: b.bg }}>
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-black whitespace-nowrap">{b.loc}</span>
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[10px] text-[rgba(0,0,0,0.5)] whitespace-nowrap">{b.date}</span>
            </div>
          ))}
        </div>

        {/* Schedule + seats pills */}
        <div className="flex flex-wrap gap-[6px] mb-4">
          {[
            { schedule: b0?.schedule ?? "Weekend",     seats: b0?.seatsLeft ?? 10 },
            { schedule: b1?.schedule ?? "Weekday",     seats: b1?.seatsLeft ?? 8  },
            { schedule: b2?.schedule ?? "Self-Placed", seats: b2?.seatsLeft ?? 10 },
          ].map((b, i) => (
            <div key={i} className="bg-white border-[0.5px] border-[rgba(0,0,0,0.3)] border-solid rounded-[81px] px-[10px] py-1.5 flex items-center justify-center flex-1 min-w-[110px] h-auto">
              <span className="font-['Inter:Regular',sans-serif] text-[#09263f] text-[10px] leading-tight whitespace-normal text-center">
                {b.schedule} – <strong className="font-['Inter:Extra_Bold',sans-serif] font-extrabold">{b.seats} Seats left</strong>
              </span>
            </div>
          ))}
        </div>

        {/* CTA button — pushed to bottom with mt-auto */}
        <div className="mt-auto">
          <Link href={course?.slug ? `/courses/${course.slug}` : "/courses"} className="block w-full transition-all duration-200 hover:shadow-[0px_6px_24px_0px_rgba(0,0,0,0.35)] rounded-[1000px]">
            <div className="bg-[#1de5b5] h-[56px] rounded-[1000px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] flex items-center justify-center hover:bg-[#17c9a0]">
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[16px]">Explore Course</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── FAQ flow-based section ──────────────────────────────────────────────────
// Replaces the previous absolute-positioned FAQ block. Uses the grid-rows trick
// for collapse/expand: closed = grid-template-rows: 0fr, open = 1fr, with the
// inner answer wrapped in overflow-hidden so it animates height naturally.
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

function FaqFlowSection({
  faqs, openFaqId, onToggle, contactPhone,
}: {
  faqs: Faq[];
  openFaqId: number | null;
  onToggle: (idx: number) => void;
  contactPhone?: string;
}) {
  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 bg-white flex justify-center py-[100px]" data-section="faq">
      <div className="w-[1440px] px-[66px] relative">
      <h2 className="text-center font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-[40px]">
        Frequently Asked Questions
      </h2>
      <p className="text-center font-['Inter:Regular',sans-serif] font-normal text-[18px] text-[rgba(9,38,63,0.5)] mt-[24px] mb-[60px] mx-auto w-[988px]">
        Have Questions on how you benefit from the course?
      </p>

      <div className="mx-auto w-[1067px] flex flex-col gap-4">
        {FAQ_FALLBACK.map((fb, idx) => {
          const isOpen = openFaqId === idx;
          const question = faqs[idx]?.question ?? fb.question;
          const answer = faqs[idx]?.answer ?? fb.answer;
          return (
            <div
              key={idx}
              className={`rounded-[20px] border border-gray-200 transition-all duration-300 ${
                isOpen
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
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-[20px]">
                  {question}
                </span>
                <span
                  className="shrink-0 size-[51px] rounded-full bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] flex items-center justify-center transition-transform duration-300"
                  style={{ transform: isOpen ? "rotate(0deg)" : "rotate(-45deg)" }}
                  aria-hidden="true"
                >
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    <path d="M20 20L4 4M20 4L4 20" stroke="black" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </span>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[rgba(9,38,63,0.7)] leading-[1.6]">
                    {answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Still have questions card */}
        <div className="rounded-[20px] border border-gray-200 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.03)] p-6 mt-2 flex items-start justify-between gap-6">
          <div className="flex-1">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-[20px]">Still have questions?</p>
            <p className="mt-2 font-['Inter:Regular',sans-serif] font-normal text-[#09263f] text-[16px] w-[749px]">
              Not sure which course is right for you? Talk to our program advisors and get personalized guidance on curriculum, career outcomes, and the best learning path based on your goals.
            </p>
          </div>
          <a
            href={contactPhone ? `tel:${contactPhone}` : "/contact"}
            className="shrink-0 self-center bg-[#19cf9e] rounded-full h-[49px] w-[182px] flex items-center justify-center font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[18px] hover:brightness-95 transition"
          >
            Call Us
          </a>
        </div>
        </div>
      </div>
    </section>
  );
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
  const handleFormSubmit = (e: React.FormEvent) => {
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
    // simple email + 10-digit mobile sanity checks
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!/^\d{7,15}$/.test(mobile.replace(/[\s-]/g, ""))) {
      setFormError("Please enter a valid mobile number.");
      return;
    }
    setFormError(null);
    // TODO: POST /api/leads — for now log + visual confirmation.
    // eslint-disable-next-line no-console
    console.log("[Request a Call back]", formData);
    setFormSubmitted(true);
    setIsNotRobot(false); // Reset captcha on success
    setTimeout(() => setFormSubmitted(false), 2500);
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
      {/* Absolute canvas — every Figma-positioned element above the FAQ lives in here.
          Locked to h-[6177px] so the FAQ + footer that follow can flow naturally. */}
      <div className="relative w-[1440px] h-[6177px] self-center" data-section="absolute-canvas">
      {/* Legacy city pills removed — replaced by premium buttons below */}
      {/* Hero title — three slots with locked structure (prefix / brand-gradient / suffix).
          Admin-editable via Page("home").blocks: hero.title.prefix | hero.title.brand | hero.title.suffix.
          Locking the structure prevents admins from breaking the gradient styling. */}
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-[63px] not-italic text-[42px] text-black top-[168px] w-[568px]">
        <span className="leading-[normal]">{`${block(props, "hero.title.prefix") ?? "Become a"} `}</span>
        <span className="bg-clip-text bg-gradient-to-r from-[#1de5b5] from-[34.135%] leading-[normal] text-[transparent] to-[#07b3e7] to-[78.846%]">{block(props, "hero.title.brand") ?? "Data Scientist"}</span>
        <span className="leading-[normal] text-[#07b3e7]">{` `}</span>
        <span className="leading-[normal]">{block(props, "hero.title.suffix") ?? "with Real Industry Projects & Placement Support"}</span>
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[63px] not-italic text-[14px] text-[rgba(0,0,0,0.5)] top-[351px] w-[467px]">{block(props, "hero.subheading") ?? block(props, "hero.heading") ?? "Learn Data Science, AI and Data Analytics with 600+ learning hours and industry projects."}</p>
      {/* Hero CTAs — labels + URLs come from Page blocks: hero.cta1 / hero.cta2 ({ label, url }). */}
      <Link href={blockCta(props, "hero.cta1").url ?? "/courses"} className="contents"><div className="absolute bg-[#1de5b5] h-[46px] left-[63px] rounded-[1000px] top-[423px] w-[170px]" /></Link>
      <Link href={blockCta(props, "hero.cta2").url ?? "/contact"} className="contents"><div className="absolute bg-[#ffd700] h-[46px] left-[246px] rounded-[1000px] top-[423px] w-[268px]" /></Link>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[148.5px] not-italic text-white text-[14px] text-center top-[437px] whitespace-nowrap">{blockCta(props, "hero.cta1").label ?? "Explore Courses"}</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[275.5px] not-italic text-[10px] text-black text-center top-[541px] whitespace-nowrap">
        <span className="leading-[normal]">{`Rated by `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal]">{stats.ratedBy ?? block(props, "hero.ratedBy") ?? "5000+"}</span>
        <span className="leading-[normal]">{` learners`}</span>
      </p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[325px] not-italic text-[8px] text-black text-center top-[525px] whitespace-nowrap">{`(${stats.rating ?? block(props, "hero.rating") ?? "4.8"})`}</p>
      {/* Hero star rating — N filled stars derived from rounded(rating). Positions match
          the original Figma 5-slot grid at left 225/244/263/282/301 (19px stride). */}
      {Array.from({ length: Math.round(Math.min(5, Math.max(0, Number(stats.rating ?? block(props, "hero.rating") ?? "5") || 5))) }, (_, i) => (
        <p
          key={`hero-star-${i}`}
          className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[16px] text-black text-center top-[518px] whitespace-nowrap"
          style={{ left: `${225 + i * 19}px` }}
        >{`⭐ `}</p>
      ))}
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[381px] not-italic text-[#09263f] text-[14px] text-center top-[437px] whitespace-nowrap">{blockCta(props, "hero.cta2").label ?? "Book Free Career Consultation"}</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[110px] not-italic text-[#09263f] text-[18px] text-center top-[127px] whitespace-nowrap">{block(props, "hero.tagline") ?? sinceTagline ?? "Since 2011"}</p>
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
            { text: pill(0,"Agentic AI"),         color: categories[0]?.color ?? "#d2faf0" },
            { text: pill(2,"Data Science"),       color: categories[2]?.color ?? "#fffad2" },
            { text: pill(4,"Data Analytics"),     color: categories[4]?.color ?? "#f0fbff" },
            { text: pill(6,"Business Analytics"), color: categories[6]?.color ?? "#fff2fa" },
            { text: pill(0,"Agentic AI"),         color: categories[0]?.color ?? "#d2faf0" },
            { text: pill(2,"Data Science"),       color: categories[2]?.color ?? "#fffad2" },
            { text: pill(4,"Data Analytics"),     color: categories[4]?.color ?? "#f0fbff" },
            { text: pill(6,"Business Analytics"), color: categories[6]?.color ?? "#fff2fa" },
          ].map((p, i) => (
            <div key={i} aria-hidden="true" className="flex-none pointer-events-none select-none h-[56px] rounded-[351px] px-[40px] inline-flex flex-row items-center justify-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] min-w-[240px]" style={{ background: p.color }}>
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-[16px] whitespace-nowrap">{p.text}</span>
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
            { text: pill(1,"Full Stack AI"),      color: categories[1]?.color ?? "#fffad2" },
            { text: pill(3,"Data Visualization"), color: categories[3]?.color ?? "#d2faf0" },
            { text: pill(5,"Bootcamp"),           color: categories[5]?.color ?? "#fff2fa" },
            { text: pill(7 % Math.max(categories.length,1),"Agentic AI"), color: categories[7 % Math.max(categories.length,1)]?.color ?? "#f0fbff" },
            { text: pill(1,"Full Stack AI"),      color: categories[1]?.color ?? "#fffad2" },
            { text: pill(3,"Data Visualization"), color: categories[3]?.color ?? "#d2faf0" },
            { text: pill(5,"Bootcamp"),           color: categories[5]?.color ?? "#fff2fa" },
            { text: pill(7 % Math.max(categories.length,1),"Agentic AI"), color: categories[7 % Math.max(categories.length,1)]?.color ?? "#f0fbff" },
          ].map((p, i) => (
            <div key={i} aria-hidden="true" className="flex-none pointer-events-none select-none h-[56px] rounded-[351px] px-[40px] inline-flex flex-row items-center justify-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] min-w-[240px]" style={{ background: p.color }}>
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-[16px] whitespace-nowrap">{p.text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Icon circles for pill rows removed — replaced by animated marquee strips above */}
      <div className="absolute bg-[#f4fafa] h-[808px] top-[1212px] w-screen left-1/2 -translate-x-1/2" />
      <div className="absolute bg-[#f4fafa] h-[805px] top-[2945px] w-screen left-1/2 -translate-x-1/2" />
      {/* Category tab backgrounds — active = green, inactive = white */}
      {([
        [1434, 1452, categories[0]?.name ?? "Data Science & Analytics"],
        [1506, 1524, categories[1]?.name ?? "Artificial intelligence (AI)"],
        [1578, 1596, categories[2]?.name ?? "Full Stack AI"],
        [1650, 1668, categories[3]?.name ?? "Agentic AI Course"],
      ] as [number, number, string][]).map(([bgTop, textTop, label], idx) => (
        <div key={idx}>
          <div
            className={`-translate-x-1/2 absolute h-[58px] left-[calc(50%-450px)] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] w-[408px] cursor-pointer ${activeCategory === idx ? "bg-[#19cf9e]" : "bg-white"}`}
            style={{ top: `${bgTop}px` }}
            onClick={() => handleCategoryClick(idx)}
          />
          <p
            className={`absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[122px] not-italic text-[20px] whitespace-nowrap cursor-pointer ${activeCategory === idx ? "text-white" : "text-[#09263f]"}`}
            style={{ top: `${textTop}px` }}
            onClick={() => handleCategoryClick(idx)}
          >{label}</p>
          {/* tick icon — fill white when active, #19CF9E when inactive */}
          <div
            className="absolute left-[86px] size-[28px] cursor-pointer"
            style={{ top: `${bgTop + 15}px` }}
            onClick={() => handleCategoryClick(idx)}
          >
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <g id="mdi:tick-circle">
                <path d={svgPaths.p3c3d0980} fill={activeCategory === idx ? "white" : "#19CF9E"} id="Vector" />
              </g>
            </svg>
          </div>
        </div>
      ))}
      <Group1 />
      <div className="-translate-x-1/2 absolute bg-[#07b3e7] h-[350px] left-[calc(50%+5.5px)] rounded-[201px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[3904px] w-[1301px]" />
      <Group3 />
      <div className="-translate-x-1/2 absolute h-[380px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[5562px] w-[565px]" style={{ backgroundImage: "linear-gradient(203.749457deg, rgb(215, 247, 246) 3.8424%, rgb(242, 250, 228) 97.744%)" }} />
      <div className="-translate-x-1/2 absolute flex h-[350px] items-center justify-center left-[calc(50%+478px)] top-[5578px] w-[348px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#07b3e7] h-[350px] relative rounded-bl-[201px] rounded-br-[20px] rounded-tl-[201px] rounded-tr-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] w-[348px]" />
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
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-196px)] not-italic text-[#09263f] text-[40px] top-[1306px] w-[600px]">Our Courses - 6 Months Job Challenge</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+0.5px)] not-italic text-[#09263f] text-[40px] text-center top-[2184px] whitespace-nowrap">Learning Modes</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+0.5px)] not-italic text-[#09263f] text-[40px] text-center top-[5402px] whitespace-nowrap">What Students Say About Us?</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-43px)] not-italic text-[#09263f] text-[40px] top-[3013px] w-[711px]">{block(props, "about.heading") ?? "AnalytixLabs is a top-ranked Data Science Institute"}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-500px)] not-italic text-[36px] text-white top-[3968px] w-[535px]">{`"Unlock Insights. Enroll Now. Transform Tomorrow."`}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[220px] not-italic text-[18px] text-white top-[4078px] whitespace-nowrap">Change the course of your career now</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/2 not-italic text-[18px] text-[rgba(9,38,63,0.5)] text-center top-[2255px] w-[988px]">Explore Personalized learning modes to match your style! Whether you’re a working professional or student or want to upskill, we’ve got you covered. Our approach ensures effective learning, making it enjoyable and rewarding.</p>
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
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/2 not-italic text-[18px] text-[rgba(9,38,63,0.5)] text-center top-[5473px] w-[988px]">True Stories, Transformative Career Experience</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-34px)] not-italic text-[18px] text-[rgba(9,38,63,0.5)] top-[3133px] w-[657px]">{block(props, "about.body") ?? "When it comes to industry-relevant data analytics courses and certifications. Offering a wide array of meticulously curated curriculums for students from various backgrounds, AnalytixLabs has led thousands of aspirants to desired job roles in data engineering, data science, artificial intelligence, and business analytics since 2011."}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-34px)] not-italic text-[#09263f] text-[18px] top-[3274px] whitespace-nowrap">{block(props, "about.cityIntro") ?? "You can pick a data science course in :"}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-2px)] not-italic text-[#09263f] text-[18px] top-[3324px] whitespace-nowrap">Online</p>
      {/* About → city-mode bullets. Editable via Page("home").blocks.cityHighlights (string[4]).
          Positions are fixed (Figma 4-slot column at left calc(50%+6px), tops 3404/3456/3507/3559). */}
      {(() => {
        const fallback = [
          "One to one mentorship",
          "Industry driven curriculum curated",
          "Experiential learning",
          "Extensive post-class sessions",
        ];
        const items = blockList(props, "about.cityHighlights") ?? fallback;
        const tops = [3404, 3456, 3507, 3559];
        return tops.map((top, i) => (
          <p
            key={`city-bullet-${i}`}
            className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%+6px)] not-italic text-[#09263f] text-[16px] w-[265px]"
            style={{ top: `${top}px` }}
          >
            {items[i] ?? fallback[i]}
          </p>
        ));
      })()}
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+148px)] not-italic text-[#09263f] text-[18px] top-[3324px] whitespace-nowrap">Bangalore</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+341px)] not-italic text-[#09263f] text-[18px] top-[3324px] whitespace-nowrap">Gurgaon</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+525px)] not-italic text-[#09263f] text-[18px] top-[3324px] whitespace-nowrap">Noida</p>
      <Link href="/contact" className="contents"><div className="absolute bg-[#ffd700] h-[49px] left-[220px] rounded-[1000px] top-[4135px] w-[182px] cursor-pointer hover:brightness-95 transition" /></Link>
      <button type="button" onClick={handleFormSubmit} aria-label="Send form" className="absolute bg-[#ffd700] h-[49px] left-[786px] rounded-[1000px] top-[5114px] w-[182px] cursor-pointer hover:brightness-95 transition" />
      <a href={`tel:${siteSettings?.contactPhone ?? ""}`} className="contents"><div className="absolute bg-[#19cf9e] h-[49px] left-[66px] rounded-[1000px] top-[4663px] w-[182px] cursor-pointer hover:brightness-95 transition" /></a>
      <Link href="/about" className="contents"><div className="absolute bg-[#19cf9e] h-[49px] left-[685px] rounded-[1000px] top-[3620px] w-[223px] cursor-pointer hover:brightness-95 transition" /></Link>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[311px] not-italic text-[#09263f] text-[18px] text-center top-[4148px] whitespace-nowrap">Contact Us</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[875.5px] not-italic text-[#09263f] text-[18px] text-center top-[5127px] whitespace-nowrap">Send</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[155.5px] not-italic text-white text-[18px] text-center top-[4676px] whitespace-nowrap">Call Us</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[795.5px] not-italic text-white text-[18px] text-center top-[3633px] whitespace-nowrap">Value Proposition</p>
      <div className={`absolute h-[116px] left-[66px] rounded-[20px] top-[2378px] w-[562px] cursor-pointer ${activeLearningMode === 0 ? "bg-gradient-to-r from-[#094c80] from-[13.037%] to-[#2096cb]" : "border border-[#094c80] border-solid shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]"}`} onClick={() => setActiveLearningMode(0)} />
      <div className={`absolute h-[117px] left-[66px] rounded-[20px] top-[2522px] w-[562px] cursor-pointer ${activeLearningMode === 1 ? "bg-gradient-to-r from-[#094c80] from-[13.037%] to-[#2096cb]" : "border border-[#094c80] border-solid shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]"}`} onClick={() => setActiveLearningMode(1)} />
      <div className={`absolute h-[116px] left-[66px] rounded-[20px] top-[2667px] w-[562px] cursor-pointer ${activeLearningMode === 2 ? "bg-gradient-to-r from-[#094c80] from-[13.037%] to-[#2096cb]" : "border border-[#094c80] border-solid shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]"}`} onClick={() => setActiveLearningMode(2)} />
      {/* Learning-mode tab labels — read from learningModes[i].name, fallback to legacy strings.
          The 3 tab slots are at fixed Figma tops (2422 / 2562 / 2708). */}
      {(() => {
        const fallback = ["Weekday Bootcamp", "Weekday Batches", "Self-paced Blended"];
        const tabTops = [2422, 2562, 2708];
        const leftOffsets = [509, 508, 508];
        return tabTops.map((top, i) => (
          <p
            key={`mode-tab-${i}`}
            className={`absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[26px] whitespace-nowrap cursor-pointer ${activeLearningMode === i ? "text-white" : "text-[#09263f]"}`}
            style={{ left: `calc(50% - ${leftOffsets[i]}px)`, top: `${top}px` }}
            onClick={() => setActiveLearningMode(i)}
          >
            {learningModes[i]?.name ?? fallback[i]}
          </p>
        ));
      })()}
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-28px)] not-italic text-[#094c80] text-[28px] top-[2384px] whitespace-nowrap">{learningModes[activeLearningMode]?.name ?? (activeLearningMode === 0 ? "Weekday Bootcamp" : activeLearningMode === 1 ? "Weekday Batches" : "Self-paced Blended")}</p>
      <ModeTickIcon top={2417} active={activeLearningMode === 0} />
      <ModeTickIcon top={2559} active={activeLearningMode === 1} />
      <ModeTickIcon top={2707} active={activeLearningMode === 2} />
      <div className="absolute border border-[rgba(9,38,63,0.5)] border-solid h-[319px] left-[656px] rounded-[20px] top-[2348px] w-[705px]" />
      <div className="absolute bg-[#094c80] h-[319px] left-[1021px] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[2494px] w-[326px]" />
      <div className="absolute bg-[#094c80] h-[319px] left-[681px] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[2494px] w-[328px]" />
      <div className="absolute left-[64px] size-[540px] top-[3052px]" style={{ animation: "alp-pulse-fade 8s ease-in-out infinite" }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 540 540">
          <path d={svgPaths.p312e4440} fill="var(--fill-0, #07B3E7)" fillOpacity="0.2" id="Ellipse 93" />
        </svg>
      </div>
      <div className="absolute left-[175px] size-[320px] top-[3161px]" style={{ animation: "alp-pulse-fade 10s ease-in-out infinite 1s" }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 320">
          <path d={svgPaths.p322b2c00} fill="var(--fill-0, #07B3E7)" fillOpacity="0.2" id="Ellipse 94" />
        </svg>
      </div>
      <div className="absolute left-[135px] size-[400px] top-[3121px]" style={{ animation: "alp-pulse-fade 9s ease-in-out infinite 0.5s" }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 400">
          <path d={svgPaths.p22c14680} fill="var(--fill-0, #07B3E7)" fillOpacity="0.2" id="Ellipse 96" />
        </svg>
      </div>
      <div className="absolute left-[99px] size-[470px] top-[3087px]" style={{ animation: "alp-pulse-fade 11s ease-in-out infinite 1.5s" }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 470 470">
          <path d={svgPaths.p32075c00} fill="var(--fill-0, #07B3E7)" fillOpacity="0.2" id="Ellipse 95" />
        </svg>
      </div>
      <div className="absolute h-[421px] left-[62px] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] top-[3031px] w-[264px]" data-name="img" style={{ animation: "alp-float 6s ease-in-out infinite" }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImg.src} />
      </div>
      <div className="absolute h-[421px] left-[341px] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] top-[3195px] w-[264px]" data-name="img" style={{ animation: "alp-float 6s ease-in-out infinite 3s" }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImg1.src} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+37px)] not-italic text-[#09263f] text-[36px] top-[4482px] whitespace-nowrap">Request a Call back</p>
      <div className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-[calc(50%-654px)] not-italic text-[#09263f] text-[36px] top-[4476px] whitespace-nowrap">
        <p className="leading-[128.33999633789062%] mb-0 whitespace-pre">{`Excited? `}</p>
        <p className="leading-[128.33999633789062%] whitespace-pre">Talk to Expert Counselor</p>
      </div>
      <div className="absolute bg-white border-[#09263f] border-[0.5px] border-solid h-[62px] left-[786px] rounded-[178px] top-[4599px] w-[494px]" />
      <div className="absolute bg-white border-[#09263f] border-[0.5px] border-solid h-[62px] left-[786px] rounded-[178px] top-[4825px] w-[494px]" />
      <div className="absolute bg-white border-[#09263f] border-[0.5px] border-solid h-[62px] left-[786px] rounded-[178px] top-[4937px] w-[494px]" />
      <div className="absolute bg-white border-[#09263f] border-[0.5px] border-solid h-[62px] left-[786px] rounded-[178px] top-[4712px] w-[197px]" />
      <div className="absolute bg-white border-[#09263f] border-[0.5px] border-solid h-[62px] left-[1017px] rounded-[178px] top-[4712px] w-[263px]" />
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
          className={`size-[28px] border-2 rounded-[2px] cursor-pointer flex items-center justify-center transition-all ${isNotRobot ? "bg-[#19cf9e] border-[#19cf9e]" : "bg-white border-[#c1c1c1] hover:border-[#b2b2b2]"}`}
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
        <p className="absolute left-[786px] top-[5085px] text-[12px] font-['Inter:Medium',sans-serif] font-medium text-[#19cf9e]">Thanks! We&rsquo;ll be in touch shortly.</p>
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
              ? <circle cx="7.5" cy="7.5" fill="var(--fill-0, #09263F)" r="7" stroke="var(--stroke-0, #09263F)" />
              : <circle cx="7.5" cy="7.5" r="7" stroke="var(--stroke-0, #09263F)" />}
          </svg>
        </div>
      ))}
      {/* FAQ section moved out of absolute canvas — see <FaqFlowSection /> rendered below. */}
      <div key={`${testimonialKey}-img`} className="testimonial-fade -translate-x-1/2 absolute left-1/2 size-[150px] top-[5585px] rounded-full border-[6px] border-white shadow-[0px_10px_30px_0px_rgba(0,0,0,0.15)] overflow-hidden bg-white">
        <img alt="" className="absolute block inset-0 max-w-none size-full object-cover" height="150" src={t0?.photoUrl ?? imgEllipse92.src} width="150" />
      </div>
      <div key={`${testimonialKey}-name`} className="testimonial-fade -translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-1/2 not-italic text-[#09263f] text-[0px] text-center top-[5745px] whitespace-nowrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[116.02999877929688%] mb-0 text-[16px] whitespace-pre">{t0?.name ?? "Piyush Ganar"}</p>
        <p className="leading-[116.02999877929688%] text-[14px] whitespace-pre">{t0?.role ? ` ${t0.role}` : ` Class of 2012 IIM Ahmedabad`}</p>
      </div>
      <p key={`${testimonialKey}-co`} className="testimonial-fade -translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[116.02999877929688%] left-1/2 not-italic text-[#09263f] text-[14px] text-center top-[5789px] whitespace-nowrap">{t0?.company ? `(${t0.company})` : "(Assistant General Manager Sales Marketing, Findability Sciences)"}</p>
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
                    <stop stopColor="#19CF9E" />
                    <stop offset="1" stopColor="#07B3E7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f4fafa] border-[#19cf9e] border-[1.5px] border-solid h-[214px] left-[628px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[490px] w-[356px] cursor-pointer hover:scale-[1.02] transition-transform" onClick={() => { setLeadModalType("fresher"); setShowLeadModal(true); }} />
      <div className="absolute bg-[#f4fafa] border-[#07b3e7] border-[1.5px] border-solid h-[214px] left-[1015px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[490px] w-[356px] cursor-pointer hover:scale-[1.02] transition-transform" onClick={() => { setLeadModalType("experienced"); setShowLeadModal(true); }} />
      {/* Lead-capture card #1 (Fresher / Student). Copy editable via Page("home").blocks: leadCard1.{title,subtitle,bestFor}. */}
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[25px] leading-[normal] left-[663px] not-italic text-[20px] text-black top-[573px] w-[203px] pointer-events-none">{block(props, "leadCard1.title") ?? "Fresher / Student"}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[29px] leading-[normal] left-[663px] not-italic text-[14px] text-[rgba(0,0,0,0.5)] top-[616px] w-[217px] pointer-events-none">{block(props, "leadCard1.subtitle") ?? "Starting or preparing to start your carrer"}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[15px] leading-[normal] left-[663px] not-italic text-[#19cf9e] text-[14px] top-[545px] w-[53px] pointer-events-none">{block(props, "leadCard1.bestFor") ?? "Best for"}</p>
      <div className="absolute flex h-[234.485px] items-center justify-center left-[800px] top-[410px] w-[237.664px] pointer-events-none" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "549" } as React.CSSProperties}>
        <div className="flex-none rotate-30">
          <div className="h-[168.476px] relative w-[177.161px]">
            <div className="absolute inset-[53.58%_0_-2.37%_-1.85%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180.614 82.2049">
                <g filter="url(#filter0_f_1_663)" id="Ellipse 19">
                  <path d={svgPaths.p30f5e880} fill="var(--fill-0, #19CF9E)" />
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
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+16px)] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-[2612px] whitespace-nowrap">{`Location - `}</p>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+356px)] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-[2612px] whitespace-nowrap">{`Location - `}</p>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+16px)] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-[2652px] whitespace-nowrap">{`Date - `}</p>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+356px)] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-[2652px] whitespace-nowrap">{`Date - `}</p>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+16px)] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-[2690px] whitespace-nowrap">Time -</p>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+356px)] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-[2690px] whitespace-nowrap">Time -</p>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+16px)] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-[2728px] whitespace-nowrap">{`Available seats - `}</p>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+356px)] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-[2728px] whitespace-nowrap">{`Available seats - `}</p>
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
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1048px] not-italic text-[20px] text-black top-[575px] whitespace-nowrap pointer-events-none">{block(props, "leadCard2.title") ?? "Experienced Professional"}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[29px] leading-[normal] left-[1048px] not-italic text-[14px] text-[rgba(0,0,0,0.5)] top-[618px] w-[217px] pointer-events-none">{block(props, "leadCard2.subtitle") ?? "Working, switching roles, or restarting your career"}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[15px] leading-[normal] left-[1048px] not-italic text-[#07b3e7] text-[14px] top-[547px] w-[53px] pointer-events-none">{block(props, "leadCard2.bestFor") ?? "Best for"}</p>
      <div className="absolute flex h-[234.485px] items-center justify-center left-[1189px] top-[410px] w-[237.664px] pointer-events-none" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "549" } as React.CSSProperties}>
        <div className="flex-none rotate-30">
          <div className="h-[168.476px] relative w-[177.161px]">
            <div className="absolute inset-[53.58%_0_-2.37%_-1.85%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180.614 82.2049">
                <g filter="url(#filter0_f_1_632)" id="Ellipse 97">
                  <path d={svgPaths.p30f5e880} fill="var(--fill-0, #07B3E7)" />
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
        className={`absolute left-[520px] top-[1427px] w-[841px] h-[620px] flex gap-[41px] overflow-x-auto scroll-smooth hide-scrollbar transition-opacity duration-150 snap-x snap-mandatory pt-2 pb-14 ${carouselFading ? "opacity-0" : "opacity-100"}`}
      >
        {carouselCourses.map((course, idx) => (
          // Carousel may include partial fallback objects (id/title/batches only) when the DB
          // doesn't yet have MIN_CARDS courses for the active category. CourseCard reads only
          // the fields it needs and tolerates undefined siblings, so the cast is safe.
          <CourseCard key={course?.id ?? `fb-${idx}`} course={course as Course | undefined} idx={idx} />
        ))}
      </div>

      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[73px] leading-[0] left-[195px] not-italic text-[#09263f] text-[0px] text-center top-[848px] w-[284px]">
        <span className="leading-[normal] text-[40px]">{stats.candidates ?? "15,000+"}</span>
        <span className="leading-[normal] text-[32px]">{` `}</span>
        <span className="leading-[normal] text-[20px]">Candidates</span>
      </p>
      {/* Hiring partner logos — infinite marquee. Uses original Figma PNG assets.
          Admin can replace via /admin/hiring-partners once white-background logos are uploaded. */}
      <div className="absolute left-[370px] top-[828px] w-[1070px] h-[91px] overflow-hidden bg-white flex flex-row items-center">
        <div
          className="alp-marquee-pause flex flex-row flex-nowrap items-center w-max gap-[60px] whitespace-nowrap shrink-0"
          style={{ animation: "alp-marquee-left 28s linear infinite" }}
        >
          {[
            { src: imgBrand.src,   alt: hiringPartners[0]?.name ?? "", h: 53, w: 196 },
            { src: imgBrand1.src,  alt: hiringPartners[1]?.name ?? "", h: 64, w: 186 },
            { src: imgImage41.src, alt: hiringPartners[2]?.name ?? "", h: 68, w: 183 },
            { src: imgBrand2.src,  alt: hiringPartners[3]?.name ?? "", h: 55, w: 197 },
            { src: imgBrand3.src,  alt: hiringPartners[4]?.name ?? "", h: 61, w: 195 },
            { src: imgBrand.src,   alt: hiringPartners[0]?.name ?? "", h: 53, w: 196 },
            { src: imgBrand1.src,  alt: hiringPartners[1]?.name ?? "", h: 64, w: 186 },
            { src: imgImage41.src, alt: hiringPartners[2]?.name ?? "", h: 68, w: 183 },
            { src: imgBrand2.src,  alt: hiringPartners[3]?.name ?? "", h: 55, w: 197 },
            { src: imgBrand3.src,  alt: hiringPartners[4]?.name ?? "", h: 61, w: 195 },
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
          className={`-translate-x-1/2 absolute flex h-[48px] items-center justify-center px-6 rounded-full font-['Inter',sans-serif] font-semibold text-[15px] transition-all duration-300 shadow-md gap-2 ${
            activeLocation === idx 
              ? "bg-[#19cf9e] text-white shadow-[#19cf9e]/30 shadow-xl scale-105 translate-y-[-2px]" 
              : "bg-white text-[#09263f] border border-[#09263f]/10 hover:border-[#19cf9e]/50 hover:shadow-lg"
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
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSponser.src} />
      </div>
      </div>{/* /absolute canvas */}

      {/* ── FAQ section (flow-based) ────────────────────────────────────────────
          Per CLAUDE.md §15, this block is intentionally OUTSIDE the absolute canvas
          so the grid-rows accordion can naturally push subsequent siblings down. */}
      <FaqFlowSection
        faqs={faqs}
        openFaqId={openFaqId}
        onToggle={toggleFaq}
        contactPhone={siteSettings?.contactPhone}
      />



      {/* Lead capture modal — portal rendered over the fixed-width canvas */}
      {showLeadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowLeadModal(false)}>
          <div className="bg-white rounded-[20px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.25)] w-[520px] p-[40px] relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-[16px] right-[20px] text-[24px] text-[rgba(0,0,0,0.4)] hover:text-black" onClick={() => setShowLeadModal(false)}>×</button>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-[24px] mb-[8px]">
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