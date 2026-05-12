"use client";

import { useRef } from "react";
import svgPaths from "./svg-s11jurk4xd";
import imgPic from "./b07f7603c1d930775ea51b61e35748804618ac7d.png";
import imgPic1 from "./2ef37d3e065100931977d4110eb8885bb8c4fa15.png";
import imgPic2 from "./8e11228b2dedd9388988ba07514b3014ee32f3db.png";
import imgPic3 from "./ab4a506e3d4b25f4f06209f40fea6fc3f23abdf2.png";
import imgPic4 from "./bf0dbb82b660e793c6c3eda13d2b603c82a4970c.png";
import imgPic5 from "./906e818ae746115d8fb6ba87ac96c75fe640efcb.png";
import imgPic6 from "./69ce520546d02f059131a6b6c9d51c8b01b5c39e.png";
import imgPic7 from "./1445ffb19c22bd26825bee14c83f139f7486d75f.png";
import imgPic8 from "./147c0ee7cdcd2b00ebdac44dedd4ce59f4f5d3cc.png";
import imgImage31 from "./996a7650d39df9f9d0c4aaa0e42c2b485c8b991a.png";
import imgImage14 from "./3bf553a15ed8e3b04af9c46289180fc24b35c112.png";
import imgAsset253X2 from "./1d246294d3b2d1241d32b8ee0187da67083422b9.png";
import imgChatGptImageApr142026034518Pm3 from "./ca246bc8f4ab32f503e63c4a3ddc2ee3aff91329.png";
import imgImage40 from "./499548fee627c1d39da43fe9633451763856bdab.png";
import { imgGroup } from "./svg-0x5v9";
import Link from "next/link";
import type { BlogPost, Category, Course, NavItem, Office, SiteSettings } from "@/lib/api-client";

type ExploreCoursesProps = {
  courses?: Course[];
  categories?: Category[];
  posts?: BlogPost[];
  topNav?: NavItem[];
  footerLinks?: NavItem[];
  footerCities?: NavItem[];
  offices?: Office[];
  siteSettings?: SiteSettings | null;
};

function fmtDate(d: Date | string | null | undefined): string {
  if (!d) return "";
  const dt = typeof d === "string" ? new Date(d) : d;
  return dt.toLocaleDateString("en-IN", { day: "numeric", month: "long" });
}

function Group9() {
  return (
    <div className="absolute h-[100px] left-[527px] top-[248px] w-[147px]">
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

function IconoirSearch() {
  return (
    <div className="absolute left-[1313px] size-[24px] top-[501px]" data-name="iconoir:search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconoir:search">
          <path d={svgPaths.p2430ab80} id="Vector" stroke="var(--stroke-0, #09263F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Group2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="h-[25.421px] relative w-[23px] cursor-pointer" onClick={onClick}>
      <div className="absolute inset-[-58.18%_-86.96%_-89.65%_-86.96%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 63">
          <g id="Group 6">
            <g filter="url(#filter0_d_5_416)" id="Ellipse 98">
              <circle cx="31.5" cy="27.5" r="11.25" shapeRendering="crispEdges" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
            </g>
            <g id="weui:arrow-outlined">
              <path d={svgPaths.p3ab4bb00} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="63" id="filter0_d_5_416" width="63" x="0" y="2.38419e-07">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_416" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_416" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group3({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute h-[25.421px] left-[1319px] top-[615px] w-[23px] cursor-pointer" onClick={onClick}>
      <div className="absolute inset-[-58.18%_-86.96%_-89.65%_-86.96%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 63">
          <g id="Group 7">
            <g filter="url(#filter0_d_5_411)" id="Ellipse 98">
              <circle cx="31.5" cy="27.5" fill="var(--fill-0, white)" r="11.5" />
            </g>
            <g id="weui:arrow-outlined">
              <path d={svgPaths.p3ab4bb00} fill="var(--fill-0, black)" id="Vector" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="63" id="filter0_d_5_411" width="63" x="0" y="2.38419e-07">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_411" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_411" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}





function IconoirArrowUpRight({ className }: { className?: string }) {
  return (
    <div className={className} data-name="iconoir:arrow-up-right">
      <svg className="block size-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>
    </div>
  );
}

function HeroiconsOutlineArrowUp() {
  return (
    <div className="relative size-[23.433px]" data-name="heroicons-outline:arrow-up">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.4331 23.4331">
        <g id="heroicons-outline:arrow-up">
          <path d={svgPaths.p3427c00} id="Vector" stroke="var(--stroke-0, #09263F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2" />
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



function BoxiconsLocationFilled() {
  return (
    <div className="absolute left-[85px] size-[21px] top-[560px]" data-name="boxicons:location-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="boxicons:location-filled">
          <path d={svgPaths.p5169a80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BoxiconsLocationFilled1() {
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

function BoxiconsLocationFilled2() {
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

function RiInstagramFill() {
  return <div className="absolute left-[898px] size-[24px] top-[688px]" data-name="ri:instagram-fill" />;
}

function IcRoundFacebook() {
  return (
    <div className="absolute left-[1177px] size-[29px] top-[701px]" data-name="ic:round-facebook">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
        <g id="ic:round-facebook">
          <path d={svgPaths.p2610db70} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiLinkedin() {
  return (
    <div className="absolute left-[1261px] size-[27px] top-[702px]" data-name="mdi:linkedin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="mdi:linkedin">
          <path d={svgPaths.p2fc0e480} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiYoutube() {
  return (
    <div className="absolute left-[1218px] size-[30px] top-[700px]" data-name="mdi:youtube">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="mdi:youtube">
          <path d={svgPaths.p16bc3a00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
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
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function PrimeTwitter() {
  return (
    <div className="absolute left-[1306px] overflow-clip size-[21px] top-[705px]" data-name="prime:twitter">
      <Group />
    </div>
  );
}

function AkarIconsMediumFill() {
  return <div className="absolute left-[1310px] size-[24px] top-[676px]" data-name="akar-icons:medium-fill" />;
}

function Frame({ offices, footerLinks, footerCities, siteSettings }: {
  offices?: ExploreCoursesProps["offices"];
  footerLinks?: ExploreCoursesProps["footerLinks"];
  footerCities?: ExploreCoursesProps["footerCities"];
  siteSettings?: ExploreCoursesProps["siteSettings"];
}) {
  const o0 = offices?.[0]; const o1 = offices?.[1]; const o2 = offices?.[2];
  const fl = footerLinks ?? []; const fc = footerCities ?? [];
  const flLabel = (i: number, fb: string) => fl[i]?.label ?? fb;
  const flUrl = (i: number, fb: string) => fl[i]?.url ?? fb;
  const fcLabel = (i: number, fb: string) => fc[i]?.label ?? fb;
  const fcUrl = (i: number, fb: string) => fc[i]?.url ?? fb;
  const copyYear = new Date().getFullYear();
  return (
    <footer className="relative bg-gradient-to-r from-[#094c80] from-[13.037%] to-[#2096cb] w-screen left-1/2 -translate-x-1/2 flex justify-center text-white font-['Inter',sans-serif] overflow-hidden">
      <div className="w-[1440px] px-[66px] py-[80px] relative min-h-[800px]">
        {/* Decorative background circle */}
        <div className="absolute left-[-123px] size-[500px] top-[-254px] pointer-events-none">
          <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 500">
            <circle cx="250" cy="250" fill="var(--fill-0, white)" id="Ellipse 117" r="250" />
          </svg>
        </div>
        <div className="absolute h-[69px] left-[52px] top-[58px] w-[233px]" data-name="image 14">
          <img alt="AnalytixLabs" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={siteSettings?.logoUrl ?? imgImage14.src} />
        </div>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1094px] not-italic text-[16px] text-white top-[62px] whitespace-nowrap">Popular Searches</p>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[804px] not-italic text-[16px] text-white top-[62px] whitespace-nowrap">Etcetera</p>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[514px] not-italic text-[16px] text-white top-[62px] whitespace-nowrap">About Us</p>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[108px] not-italic text-[16px] text-white top-[562px] whitespace-nowrap">{o0?.city ?? "Noida"}</p>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[550px] not-italic text-[16px] text-white top-[562px] whitespace-nowrap">{o1?.city ?? "Gurgaon"}</p>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[992px] not-italic text-[16px] text-white top-[562px] whitespace-nowrap">{o2?.city ?? "Bangalore"}</p>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[261px] not-italic text-[16px] text-white top-[281px] whitespace-nowrap">Blog</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[1094px] not-italic text-[14px] text-white top-[92px] w-[242px]">{fcLabel(0, "Data Analyst Training Course In Delhi")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[804px] not-italic text-[14px] text-white top-[92px] w-[143px]">{flLabel(6, "System Requirements")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[514px] not-italic text-[14px] text-white top-[92px] w-[51px]">{flLabel(0, "Why Us")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[88px] not-italic text-[14px] text-white top-[593px] w-[363px]">{o0?.addressLine1 ?? "1st Floor, A78, A Block, Sector 2, Metro Gate 3, Noida, UP 201301."}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[66px] not-italic text-[14px] text-white top-[757px] w-[363px]">© 2026 AnalytixLabs. All Rights Reserved.</p>
        <p className="-translate-x-full absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[1370px] not-italic text-[14px] text-right text-white top-[758px] whitespace-pre">{`Privacy Policy       Terms and Conditions      Sitemap`}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[530px] not-italic text-[14px] text-white top-[593px] w-[402px]">{o1?.addressLine1 ?? "2nd Floor, Sidhartha House, Building No. 6, Sector 44, Gurugram, Haryana 122003, (600 meters from HUDA City Metro)."}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[972px] not-italic text-[14px] text-white top-[593px] w-[387px]">{o2?.addressLine1 ?? "Bldg 51/2, First floor 12th Main Road, Near BDA complex Sector 6, HSR Layout Back Gate of BDA Complex, Opp A2B (Adayar Ananda Bhavan) Bangalore, Karnataka 560102."}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[18px] leading-[normal] left-[1094px] not-italic text-[14px] text-white top-[118px] w-[248px]">{fcLabel(1, "Data Analyst Training Course In Noida")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[18px] leading-[normal] left-[804px] not-italic text-[14px] text-white top-[118px] w-[102px]">{flLabel(7, "Free Resources")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[18px] leading-[normal] left-[514px] not-italic text-[14px] text-white top-[118px] w-[54px]">{flLabel(1, "Courses")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[1094px] not-italic text-[14px] text-white top-[143px] w-[265px]">{fcLabel(2, "Data Analyst Training Course In Gurgaon")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[804px] not-italic text-[14px] text-white top-[143px] w-[105px]">{flLabel(8, "Success Stories")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[514px] not-italic text-[14px] text-white top-[143px] w-[91px]">{flLabel(2, "About Faculty")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[18px] leading-[normal] left-[1094px] not-italic text-[14px] text-white top-[169px] w-[275px]">{fcLabel(3, "Data Analyst Training Course In Bangalore")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[37px] leading-[normal] left-[804px] not-italic text-[14px] text-white top-[169px] w-[171px]">{flLabel(9, "Colleges Universities Training Courses")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[18px] leading-[normal] left-[514px] not-italic text-[14px] text-white top-[169px] w-[74px]">{flLabel(3, "Contact Us")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[1094px] not-italic text-[14px] text-white top-[194px] w-[190px]">{fcLabel(4, "Data Science Course in Delhi")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[514px] not-italic text-[14px] text-white top-[194px] w-[163px]">{flLabel(4, "AnalytixLabs Placements")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[18px] leading-[normal] left-[1094px] not-italic text-[14px] text-white top-[220px] w-[196px]">{fcLabel(5, "Data Science Course In Noida")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[18px] leading-[normal] left-[514px] not-italic text-[14px] text-white top-[220px] w-[143px]">{flLabel(5, "System Requirements")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[1094px] not-italic text-[14px] text-white top-[245px] w-[213px]">{fcLabel(6, "Data Science Course In Gurgaon")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[18px] leading-[normal] left-[1094px] not-italic text-[14px] text-white top-[271px] w-[223px]">{fcLabel(7, "Data Science Course In Bangalore")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[1094px] not-italic text-[14px] text-white top-[296px] w-[247px]">{fcLabel(8, "Business Analyst Course In Bangalore")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[18px] leading-[normal] left-[1094px] not-italic text-[14px] text-white top-[322px] w-[214px]">{fcLabel(9, "Business Analyst Course In Delhi")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[1094px] not-italic text-[14px] text-white top-[347px] w-[268px]">{fcLabel(10, "Artificial Intelligence Course in Bangalore")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[18px] leading-[normal] left-[1094px] not-italic text-[14px] text-white top-[373px] w-[235px]">{fcLabel(11, "Artificial Intelligence Course in Delhi")}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[1094px] not-italic text-[14px] text-white top-[398px] w-[139px]">{fcLabel(12, "Generative AI Course")}</p>

        <div className="absolute border-[0.5px] border-[rgba(255,255,255,0.5)] border-solid h-[118px] left-[947px] rounded-[15px] top-[541px] w-[426px]" />
        <div className="absolute border-[0.5px] border-[rgba(255,255,255,0.5)] border-solid h-[118px] left-[507px] rounded-[15px] top-[541px] w-[425px]" />
        <div className="absolute border-[0.5px] border-[rgba(255,255,255,0.5)] border-solid h-[118px] left-[66px] rounded-[15px] top-[541px] w-[426px]" />
        <div className="absolute border-[0.5px] border-[rgba(255,255,255,0.5)] border-solid h-[213px] left-[66px] rounded-[15px] top-[271px] w-[426px]" />
        <div className="absolute bg-white h-[38px] left-[89px] rounded-[97px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[308px] w-[379px]" />
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[200px] not-italic text-[#09263f] text-[14px] top-[317px] whitespace-nowrap">{`Submit a Guest Post `}</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[89px] not-italic text-[14px] text-white top-[366px] w-[375px]">Parametric vs. Non-Parametric Test: Which One to Use for Hypothesis Testing?</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[89px] not-italic text-[14px] text-white top-[411px] w-[353px]">What is Agentic AI – A Technical Guide for Beginners</p>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[89px] not-italic text-[14px] text-white top-[440px] w-[379px]">List vs Tuple in Python: Understanding Key Differences</p>
        <BoxiconsLocationFilled />
        <BoxiconsLocationFilled1 />
        <BoxiconsLocationFilled2 />
        <div className="-translate-x-1/2 absolute flex h-[17.424px] items-center justify-center left-[415.03px] top-[560px] w-[108.066px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
          <div className="flex-none rotate-[0.22deg]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[14px] text-center text-white whitespace-nowrap">Get Directions→</p>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute flex h-[17.424px] items-center justify-center left-[855.03px] top-[560px] w-[108.066px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
          <div className="flex-none rotate-[0.22deg]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[14px] text-center text-white whitespace-nowrap">Get Directions→</p>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute flex h-[17.424px] items-center justify-center left-[1295.03px] top-[560px] w-[108.066px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
          <div className="flex-none rotate-[0.22deg]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[14px] text-center text-white whitespace-nowrap">Get Directions→</p>
          </div>
        </div>
        <div className="absolute h-0 left-[67px] top-[738px] w-[1306px]">
          <div className="absolute inset-[-0.5px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1306 0.5">
              <line id="Line 15" stroke="var(--stroke-0, white)" strokeOpacity="0.5" strokeWidth="0.5" x2="1306" y1="0.25" y2="0.25" />
            </svg>
          </div>
        </div>
        <RiInstagramFill />
        <div className="absolute inset-[88.33%_19.24%_8.78%_79.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
            <path d={svgPaths.p22379000} fill="var(--fill-0, white)" id="insta" />
          </svg>
        </div>
        <IcRoundFacebook />
        <MdiLinkedin />
        <MdiYoutube />
        <PrimeTwitter />
        <AkarIconsMediumFill />
        <div className="absolute inset-[88.58%_5.14%_9.16%_93.26%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 18">
            <path d={svgPaths.p19230580} fill="var(--fill-0, white)" id="medium" />
          </svg>
        </div>
      </div>
    </footer>
  );
}

export default function ExploreCourses(props: ExploreCoursesProps) {
  const {
    courses = [],
    categories = [],
    posts = [],
    topNav = [],
    footerLinks = [],
    footerCities = [],
    offices = [],
    siteSettings,
  } = props;

  const categoryScrollRef = useRef<HTMLDivElement>(null);

  const scrollCategories = (direction: "left" | "right") => {
    if (categoryScrollRef.current) {
      const { scrollLeft, clientWidth } = categoryScrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      categoryScrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white relative w-full overflow-x-hidden flex flex-col items-center" data-name="Explore courses">

      {/* ═══ MOBILE LAYOUT (hidden on lg+) ═══ */}
      <div className="block lg:hidden w-full">
        {/* Hero */}
        <section className="bg-[#f4fafa] px-5 pt-6 pb-8">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-[28px] sm:text-[32px] leading-[1.2] mb-3">
            <span>Explore </span>
            <span className="bg-clip-text bg-gradient-to-r from-[#1de5b5] from-[34%] to-[#07b3e7] to-[79%] text-transparent">AI &amp; Data Science</span>
            <span> Courses That Get You Job Ready</span>
          </h1>
          <p className="text-sm text-[#09263f]/50 mb-4">Find the Course That Moves Your Career Forward</p>
          <div className="relative max-w-[260px] mx-auto">
            <img src={imgAsset253X2.src} alt="" className="w-full h-auto object-contain" />
          </div>
        </section>

        {/* Search + category pills */}
        <section className="bg-white px-5 py-5">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-xl mb-4">All Courses</h2>
          {/* Search */}
          <div className="relative mb-4">
            <input
              type="search"
              placeholder="Search courses..."
              className="w-full border border-[#09263f]/30 rounded-xl h-12 pl-10 pr-4 text-sm outline-none focus:border-[#1de5b5]"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#09263f]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {/* Category pills - horizontal scroll */}
          <div className="overflow-x-auto -mx-5 px-5 scrollbar-none">
            <div className="flex gap-2 w-max pb-1">
              <Link href="/courses" className="shrink-0 px-4 py-2 bg-white rounded-full border border-[#09263f]/30 text-sm font-semibold text-[#09263f] whitespace-nowrap">All</Link>
              {categories?.slice(0, 5).map((cat, i) => (
                <Link key={i} href={`/courses?category=${encodeURIComponent(cat.slug ?? "")}`} className="shrink-0 px-4 py-2 bg-gradient-to-r from-[#094c80] to-[#2096cb] rounded-full text-sm font-semibold text-white whitespace-nowrap">{cat.name}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* Course cards */}
        <section className="px-5 py-5 flex flex-col gap-4">
          {(courses?.length ? courses : [undefined, undefined, undefined, undefined, undefined, undefined]).slice(0, 6).map((course, i) => {
            const imgs = [imgPic, imgPic1, imgPic2, imgPic3, imgPic4, imgPic5];
            const fb = { title: ["Data Analytics", "Business Analytics", "Agentic AI", "Full Stack AI", "Data Science", "Machine Learning"][i] ?? "Course", classesCount: 46, hoursCount: 500 };
            const b0 = course?.batches?.[0];
            const b1 = course?.batches?.[1];
            const b2 = course?.batches?.[2];
            return (
              <div key={i} className="bg-white border border-[rgba(0,0,0,0.15)] rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] flex flex-col">
                <div className="h-52 w-full overflow-hidden">
                  <img src={course?.thumbnailUrl ?? imgs[i]?.src ?? imgPic.src} alt={course?.title ?? fb.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex gap-2 justify-end mb-4">
                    {[
                      { label: course?.classesCount ? `${course.classesCount} Classes` : `${fb.classesCount} Classes`, bg: "#f0fbff" },
                      { label: course?.hoursCount ? `${course.hoursCount}+ Hrs` : `${fb.hoursCount}+ Hrs`, bg: "#fffad2" },
                    ].map((tag, ti) => (
                      <div key={ti} className="px-3 py-1 rounded-full text-[11px] font-medium text-[#09263f]/85" style={{ backgroundColor: tag.bg }}>{tag.label}</div>
                    ))}
                  </div>
                  <h3 className="font-semibold text-xl text-black mb-4 leading-snug min-h-[50px]">{course?.title ?? fb.title}</h3>
                  <div className="flex gap-2 mb-5">
                    {[
                      { loc: b0?.location ?? "Noida", date: fmtDate(b0?.startDate) || "20 April", bg: "#f0fbff" },
                      { loc: b1?.location ?? "Bangalore", date: fmtDate(b1?.startDate) || "13 April", bg: "#fffad2" },
                      { loc: b2?.location ?? "Gurgaon", date: fmtDate(b2?.startDate) || "04 May", bg: "#fff2fa" },
                    ].map((b, bi) => (
                      <div key={bi} className="flex-1 flex flex-col items-center justify-center py-2.5 px-1 rounded-xl shadow-sm" style={{ backgroundColor: b.bg }}>
                        <span className="font-semibold text-[12px] text-black">{b.loc}</span>
                        <span className="text-[10px] text-black/50">{b.date}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={course?.slug ? `/courses/${course.slug}` : "/courses"} className="mt-auto flex items-center justify-center w-full bg-[#1de5b5] h-14 rounded-full font-bold text-[#09263f] text-[16px] shadow-md active:scale-95 transition-all">
                    Explore Course
                  </Link>
                </div>
              </div>
            );
          })}
        </section>

        {/* Blog posts */}
        <section className="bg-[#f4fafa] px-5 py-8">
          <div className="flex flex-col gap-4 mb-5">
            {(posts ?? [undefined, undefined, undefined]).slice(0, 3).map((post, i) => {
              const covers = [imgPic6, imgPic7, imgPic8];
              return (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  <img src={post?.coverUrl ?? covers[i]?.src ?? imgPic6.src} alt={post?.title ?? ""} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <p className="text-[#4c7fd2] text-xs font-semibold mb-1">Data Science</p>
                    <h3 className="text-sm font-medium text-black mb-2 leading-snug">{post?.title ?? "Parametric vs. Non-Parametric Test: Which One to Use for Hypothesis Testing?"}</h3>
                    <p className="text-xs text-black/50 line-clamp-2 mb-2">{post?.excerpt ?? "Statistical tests form the backbone of data-driven decision-making."}</p>
                    <span className="text-xs text-black/70">{post?.authorName ?? "S. Dutta"}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link href="/blog" className="inline-flex items-center gap-1 bg-[#ffd700] h-11 px-6 rounded-full font-semibold text-[#09263f] text-sm">Explore Blogs →</Link>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-[#094c80] from-[13%] to-[#2096cb] py-10 px-6">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-xl leading-snug mb-2">{`"Unlock Insights. Enroll Now. Transform Tomorrow."`}</p>
          <p className="text-white/70 text-sm mb-6">Change the course of your career now</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#ffd700] h-12 px-6 rounded-full font-semibold text-[#09263f] text-sm">Contact Us</Link>
        </section>
        <Frame offices={offices} footerLinks={footerLinks} footerCities={footerCities} siteSettings={siteSettings} />
      </div>{/* /mobile layout */}

      {/* ═══ DESKTOP LAYOUT (hidden below lg) ═══ */}
      <div className="hidden lg:flex w-full flex-col items-center bg-white">

        {/* 1. Hero Section */}
        <section className="w-full bg-[#f4fafa] flex justify-center pt-20 pb-10 overflow-hidden relative">
          <div className="w-[1440px] px-[66px] flex justify-between items-center relative">
            <div className="max-w-[720px] flex flex-col gap-8 z-10">
              <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-[48px] leading-[1.2]">
                Explore <span className="bg-clip-text bg-gradient-to-r from-[#1de5b5] to-[#07b3e7] text-transparent">AI & Data Science</span> Courses That Get You Job Ready
              </h1>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[18px] text-[rgba(9,38,63,0.5)]">
                Find the Course That Moves Your Career Forward
              </p>
            </div>
            {/* Decorative Images */}
            <div className="relative flex-1 h-[400px]">
              <div className="absolute h-[331px] right-0 top-0 w-[315px] z-[1]">
                <img alt="" className="size-full object-contain" src={imgAsset253X2.src} />
              </div>
              <div className="absolute h-[326px] right-[100px] top-[10px] w-[218px] z-[2]">
                <img alt="" className="size-full object-contain" src={imgChatGptImageApr142026034518Pm3.src} />
              </div>
              <div className="absolute h-[308px] right-[240px] top-[40px] w-[267px] z-[0]">
                <img alt="" className="size-full object-contain" src={imgImage40.src} />
              </div>
            </div>
            <div className="absolute top-0 right-0">
              <Group9 />
            </div>
          </div>
        </section>

        {/* 2. Course Selection & Category Bar */}
        <section className="w-full max-w-[1440px] px-[66px] pt-4 pb-12 flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-[36px]">All Courses</h2>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="bg-white border-[0.5px] border-[rgba(9,38,63,0.3)] border-solid h-[54px] w-[565px] rounded-[15px] pl-6 pr-16 text-[16px] outline-none focus:border-[#1de5b5] transition-all"
              />
              <div className="absolute right-1.5 bg-[#ffd700] size-[46px] rounded-[10px] flex items-center justify-center hover:brightness-95 cursor-pointer transition-all">
                <IconoirSearch />
              </div>
            </div>
          </div>

          <div className="relative w-full h-[112px] rounded-[91px] bg-gradient-to-r from-[#094c80] to-[#2096cb] overflow-hidden flex items-center px-12 group">
            <div
              ref={categoryScrollRef}
              className="w-full flex items-center gap-6 overflow-x-auto hide-scrollbar scroll-smooth"
            >
              <Link href="/courses" className="shrink-0 bg-white px-10 py-3 rounded-full shadow-lg text-[#09263f] font-bold text-[18px] hover:brightness-95 transition-all">
                All
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/courses?category=${cat.slug}`}
                  className="shrink-0 border border-white/30 px-10 py-3 rounded-full text-white font-bold text-[18px] hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            {/* Scroll buttons */}
            <div className="absolute left-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="-scale-y-100 rotate-180">
                <Group2 onClick={() => scrollCategories("left")} />
              </div>
            </div>
            <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Group3 onClick={() => scrollCategories("right")} />
            </div>
          </div>

          {/* Course Grid */}
          <div className="flex w-full gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scroll-smooth hide-scrollbar px-4">
            {(courses?.length ? courses : [undefined, undefined, undefined, undefined, undefined, undefined]).slice(0, 10).map((course, i) => {
              const b0 = course?.batches?.[0];
              const b1 = course?.batches?.[1];
              const b2 = course?.batches?.[2];
              return (
                <div key={i} className="flex-shrink-0 w-[320px] md:w-[400px] snap-center bg-white border-[0.5px] border-[rgba(0,0,0,0.15)] border-solid h-[560px] rounded-[24px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.1)] flex flex-col p-5 hover:shadow-[0px_8px_40px_0px_rgba(0,0,0,0.2)] transition-all">
                  <div className="aspect-video w-full rounded-[18px] overflow-hidden mb-5 shrink-0 bg-[#09263F] flex items-center justify-center relative group/thumb">
                    <img
                      alt={course?.title ?? ""}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                      src={course?.thumbnailUrl?.includes('placehold.co') || !course?.thumbnailUrl
                        ? `https://placehold.co/640x360/09263F/FFFFFF?text=${(course?.title || "AnalytixLabs").replace(/\+/g, ' ')}`
                        : course.thumbnailUrl
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09263F]/40 to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity" />
                  </div>

                  <div className="flex gap-2 justify-start mb-3 px-1">
                    <div className="bg-[#f0fbff] h-[22px] px-3 rounded-full flex items-center justify-center border border-[#09263f]/10">
                      <span className="font-['Inter:Medium',sans-serif] font-medium text-[10px] text-[#09263f]/80 uppercase tracking-wider">
                        {course?.classesCount ? `${course.classesCount} Classes` : "46 Classes"}
                      </span>
                    </div>
                    <div className="bg-[#fffad2] h-[22px] px-3 rounded-full flex items-center justify-center border border-[#09263f]/10">
                      <span className="font-['Inter:Medium',sans-serif] font-medium text-[10px] text-[#09263f]/80 uppercase tracking-wider">
                        {course?.hoursCount ? `${course.hoursCount}+ Hours` : "500+ Hours"}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-[#09263f] leading-tight mb-4 min-h-[54px] text-left px-1">
                    {course?.title ?? ["Data Analytics", "Business Analytics", "Agentic AI", "Full Stack AI", "Data Science", "Machine Learning"][i % 6]}
                  </h3>

                  <div className="flex gap-2 mb-4">
                    {[
                      { batch: b0, mode: "Live Online", loc: "Global", date: fmtDate(b0?.startDate) || "11 May", bg: "#f0fbff", fallbackSched: "Weekends" },
                      { batch: b1, mode: "Live Online", loc: "Global", date: fmtDate(b1?.startDate) || "15 Sept", bg: "#fffad2", fallbackSched: "Weekends" },
                      { batch: b2, mode: "Classroom", loc: "Gurgaon", date: fmtDate(b2?.startDate) || "04 May", bg: "#fff2fa", fallbackSched: "Weekends" },
                    ].map((b, bi) => {
                      const seats = b.batch?.seatsLeft ?? (bi === 0 ? 0 : 20);
                      const isSoldOut = seats === 0;
                      return (
                        <div key={bi} className={`flex-1 flex flex-col border border-[rgba(0,0,0,0.05)] rounded-[14px] overflow-hidden shadow-sm transition-all ${isSoldOut ? 'opacity-50 grayscale' : 'hover:border-[#1de5b5]/30'}`}>
                          {/* Location & Mode Header */}
                          <div className="py-2 flex flex-col items-center justify-center text-center px-1 h-[60px]" style={{ backgroundColor: b.bg }}>
                            <span className="font-bold text-[9px] text-[#09263f]/60 uppercase tracking-tight">{b.mode}</span>
                            <span className="font-bold text-[11px] text-[#09263f] leading-tight">{b.loc}</span>
                            <span className="font-bold text-[10px] text-[#09263f]/80 mt-1">{b.date}</span>
                          </div>
                          {/* Schedule & Seats Footer */}
                          <div className="py-1.5 text-center bg-white flex flex-col justify-center px-1 min-h-[38px] border-t border-[rgba(0,0,0,0.05)]">
                            <div className="text-[#09263f] leading-tight">
                              <span className="text-[9px] opacity-70 font-medium">{b.batch?.schedule || b.fallbackSched}</span>
                              <br />
                              <span className={`text-[10px] font-bold ${isSoldOut ? 'text-red-500' : 'text-green-600'}`}>
                                {isSoldOut ? "SOLD OUT" : `${seats} Seats`}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-auto pt-4">
                    <Link href={course?.slug ? `/courses/${course.slug}` : "/courses"} className="w-full bg-[#19cf9e] h-[48px] rounded-[14px] shadow-sm flex items-center justify-center font-bold text-white text-[15px] hover:brightness-105 active:scale-[0.98] transition-all">
                      Explore Course
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Related Articles Section */}
        <section className="w-full bg-[#f4fafa] flex justify-center py-12">
          <div className="w-[1440px] px-[66px] flex flex-col items-center">
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-[40px] mb-16">Related Articles</h2>

            <div className="w-full grid grid-cols-3 gap-10">
              {(posts ?? [undefined, undefined, undefined]).slice(0, 3).map((post, i) => {
                const covers = [imgPic6, imgPic7, imgPic8];
                const categoryPalette = ["#4c7fd2", "#1de5b5", "#ff9b3d"];
                const categoryFallbacks = ["Data Science", "AI & ML", "Analytics"];
                const categoryColor = categoryPalette[i % categoryPalette.length];
                const categoryLabel = post?.tags?.[0] ?? categoryFallbacks[i];
                const authorAvatar = `https://ui-avatars.com/api/?name=AnalytixLabs&background=09263F&color=fff`; return (
                  <div key={i} className="bg-white rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.1)] flex flex-col h-full hover:shadow-[0px_8px_40px_0px_rgba(0,0,0,0.15)] transition-all group">
                    {/* Article Cover */}
                    <div className="h-[240px] bg-[#09263f] flex items-center justify-center overflow-hidden rounded-t-[20px]">
                      <img
                        alt={post?.title ?? ""}
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                        src={post?.coverUrl ?? covers[i]?.src ?? `https://placehold.co/640x360/09263F/FFFFFF?text=${post?.title?.split(' ').slice(0, 3).join(' ') || "Related Article"}`}
                      />
                    </div>

                    <div className="flex flex-col flex-1 p-8">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-[14px]" style={{ color: categoryColor }}>
                          {categoryLabel}
                        </span>
                        <span className="text-[12px] text-black/40 font-medium">9 min read</span>
                      </div>

                      <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#09263f] leading-tight mb-4 line-clamp-2">
                        {post?.title ?? ["What is Agentic AI – A Technical Guide for Beginners", "List vs Tuple in Python: Understanding Key Differences", "Parametric vs. Non-Parametric Test: Which One to Use?"][i]}
                      </h3>

                      <p className="text-[14px] text-[#09263f]/60 leading-relaxed mb-6 line-clamp-3">
                        {post?.excerpt ?? "Learn the fundamental concepts and practical applications in this comprehensive guide tailored for modern data professionals."}
                      </p>

                      <div className="mt-auto flex justify-between items-center pt-6 border-t border-black/5">
                        <div className="flex items-center gap-3">
                          <div className="size-[36px] rounded-full overflow-hidden bg-[#f0f0f0] border border-black/5">
                            <img alt="" className="size-full object-cover" src={authorAvatar} />
                          </div>
                          <span className="font-bold text-[14px] text-[#09263f]">AnalytixLabs Editorial</span>
                        </div>
                        <div className="size-[36px] rounded-full flex items-center justify-center border border-black/10 group-hover:bg-[#09263f] group-hover:border-[#09263f] transition-all duration-300">
                          <IconoirArrowUpRight className="size-5 text-black/40 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link href="/blog" className="mt-16 inline-flex items-center justify-center bg-[#ffd700] h-[56px] px-12 rounded-full font-bold text-[#09263f] text-[18px] shadow-lg hover:scale-[1.05] transition-all">
              Explore Blogs →
            </Link>
          </div>
        </section>

        {/* 4. CTA Banner Section */}
        <section className="w-full flex justify-center py-20 px-10">
          <div className="w-[1300px] h-[400px] bg-[#07b3e7] rounded-[40px] shadow-2xl relative overflow-hidden flex items-center px-20">
            {/* Background elements */}
            <div className="absolute right-0 top-0 size-[500px] opacity-20 pointer-events-none">
              <svg className="size-full" fill="none" viewBox="0 0 500 500">
                <circle cx="250" cy="250" r="250" fill="white" />
              </svg>
            </div>
            <div className="absolute right-[50px] top-[-50px] w-[500px] h-full pointer-events-none opacity-80">
              <img src={imgImage31.src} className="size-full object-contain" alt="" />
            </div>

            <div className="max-w-[600px] flex flex-col gap-8 z-10">
              <h2 className="font-bold text-white text-[42px] leading-tight">
                "Unlock Insights. Enroll Now. Transform Tomorrow."
              </h2>
              <p className="text-white/80 text-[20px]">
                Change the course of your career now
              </p>
              <Link href="/contact" className="bg-[#ffd700] h-[60px] w-[220px] rounded-full flex items-center justify-center font-bold text-[#09263f] text-[20px] shadow-xl hover:scale-[1.05] transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        <Frame offices={offices} footerLinks={footerLinks} footerCities={footerCities} siteSettings={siteSettings} />
      </div>

    </div>
  );
}