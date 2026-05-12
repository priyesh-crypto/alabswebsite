import svgPaths from "./svg-y2pnleu7yt";
import imgImage14 from "./3bf553a15ed8e3b04af9c46289180fc24b35c112.png";
import imgAsset253X2 from "./1d246294d3b2d1241d32b8ee0187da67083422b9.png";
import imgTools from "./d11a8aa3ab5c427b280eb2360c8ac690041f1014.png";
import imgCertificate from "./78c146474d419f14468f31d6b051a8eec770800f.png";
import imgCertificate1 from "./310818decab7f64245f76241f5bb404ed5cb5db3.png";
import imgCompanyLogo from "./e4f28721ade240e2e8d95535a4efddfc4acffa8a.png";
import imgEllipse92 from "./ff201a4e824358a86a9ece853ac8ae2093f873e8.png";
import imgImage38 from "./0ff0f453bd04fe1e0c83fc2fdb469f36963dc095.png";
import imgImage39 from "./499548fee627c1d39da43fe9633451763856bdab.png";
import imgRectangle51 from "./69ce520546d02f059131a6b6c9d51c8b01b5c39e.png";
import imgRectangle53 from "./1445ffb19c22bd26825bee14c83f139f7486d75f.png";
import imgRectangle107 from "./147c0ee7cdcd2b00ebdac44dedd4ce59f4f5d3cc.png";
import imgImage31 from "./996a7650d39df9f9d0c4aaa0e42c2b485c8b991a.png";
import imgImage34 from "./c94d34e2f718a4dd21715c47c11eb89121b7a3ea.png";
import imgMap from "./753a8cf92e71b3a1c99a662be50669e23496d5bb.png";
import imgRectangle155 from "./25a03a243bd49a9890bd34393cee8cef2fcf0e8e.png";
import img197 from "./0effb68a268a8b7912b8aae4d984808edb6a835d.png";
import { imgGroup } from "./svg-n3yhl";
import Link from "next/link";
import type { CourseDetail, NavItem, Office, SiteSettings } from "@/lib/api-client";

type PdpProps = {
  course?: CourseDetail | null;
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

function fmtRupees(amount: number | null | undefined): string {
  if (!amount) return "";
  return "₹" + amount.toLocaleString("en-IN") + "/-";
}



function LineMdPlay() {
  return (
    <div className="absolute left-[1047px] size-[22px] top-[879px]" data-name="line-md:play">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="line-md:play">
          <path d={svgPaths.p39787d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MaterialSymbolsDownloadRounded() {
  return (
    <div className="absolute left-[1053px] size-[19px] top-[907px]" data-name="material-symbols:download-rounded">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="material-symbols:download-rounded">
          <path d={svgPaths.p25202e00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IcBaselineTv() {
  return (
    <div className="absolute left-[1055px] size-[15px] top-[933px]" data-name="ic:baseline-tv">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="ic:baseline-tv">
          <path d={svgPaths.p17981300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_8.33%_0.78%_8.33%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 14.5427">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p3576d000} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteTimeLine() {
  return (
    <div className="absolute left-[1055px] overflow-clip size-[16px] top-[956px]" data-name="mingcute:time-line">
      <Group />
    </div>
  );
}

function MaterialSymbolsStarOutlineRounded() {
  return (
    <div className="absolute left-[1053px] size-[20px] top-[979px]" data-name="material-symbols:star-outline-rounded">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="material-symbols:star-outline-rounded">
          <path d={svgPaths.p406a4f0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IxSupport() {
  return (
    <div className="absolute left-[1055px] size-[16px] top-[1006px]" data-name="ix:support">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ix:support">
          <path clipRule="evenodd" d={svgPaths.pec3e100} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconParkOutlineQuote() {
  return (
    <div className="absolute left-[1064px] size-[32px] top-[1245px]" data-name="icon-park-outline:quote">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="icon-park-outline:quote">
          <path clipRule="evenodd" d={svgPaths.pf903f80} fill="var(--fill-0, #09263F)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[1031px] top-[1228px]">
      <div className="absolute bg-white h-[217px] left-[1031px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[1228px] w-[343px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[112px] leading-[1.8] left-[1064px] not-italic text-[#09263f] text-[11px] top-[1283px] w-[277px]">The structure was exactly what I needed. I went from zero Python to deploying an ML model within 8 months. The placement support helped me crack my first data scientist role.</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1108px] not-italic text-[#09263f] text-[12px] top-[1380px] whitespace-nowrap">Rahul Kapoor</p>
      <div className="absolute left-[1064px] size-[39px] top-[1383px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
          <circle cx="19.5" cy="19.5" fill="var(--fill-0, #1DE5B5)" id="Ellipse 118" r="19.5" />
        </svg>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium h-[9px] leading-[normal] left-[1111.5px] not-italic text-[10px] text-black text-center top-[1414px] w-[7px]">{`⭐ `}</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium h-[9px] leading-[normal] left-[1122.5px] not-italic text-[10px] text-black text-center top-[1414px] w-[7px]">{`⭐ `}</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium h-[9px] leading-[normal] left-[1133.5px] not-italic text-[10px] text-black text-center top-[1414px] w-[7px]">{`⭐ `}</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium h-[9px] leading-[normal] left-[1144.5px] not-italic text-[10px] text-black text-center top-[1414px] w-[7px]">{`⭐ `}</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium h-[9px] leading-[normal] left-[1155.5px] not-italic text-[10px] text-black text-center top-[1414px] w-[7px]">{`⭐ `}</p>
      <IconParkOutlineQuote />
    </div>
  );
}

function FaSolidChalkboardTeacher() {
  return (
    <div className="absolute h-[40px] left-[248px] top-[917px] w-[50px]" data-name="fa-solid:chalkboard-teacher">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 40">
        <g clipPath="url(#clip0_9_1070)" id="fa-solid:chalkboard-teacher">
          <path d={svgPaths.p2357fb00} fill="var(--fill-0, #09263F)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_9_1070">
            <rect fill="white" height="40" width="50" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FaSolidChalkboardTeacher1() {
  return (
    <div className="absolute h-[20px] left-[183px] top-[3991px] w-[25px]" data-name="fa-solid:chalkboard-teacher">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 20">
        <g clipPath="url(#clip0_9_1064)" id="fa-solid:chalkboard-teacher">
          <path d={svgPaths.p11dbd900} fill="var(--fill-0, #09263F)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_9_1064">
            <rect fill="white" height="20" width="25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FaSolidChalkboardTeacher2() {
  return (
    <div className="absolute h-[34px] left-[76px] top-[4359px] w-[42px]" data-name="fa-solid:chalkboard-teacher">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 34">
        <g clipPath="url(#clip0_9_1061)" id="fa-solid:chalkboard-teacher">
          <path d={svgPaths.pa43c032} fill="var(--fill-0, #09263F)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_9_1061">
            <rect fill="white" height="34" width="42" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MiBook() {
  return (
    <div className="absolute left-[556px] size-[54px] top-[909px]" data-name="mi:book">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
        <g id="mi:book">
          <path d={svgPaths.p298de700} fill="var(--fill-0, #09263F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function WeuiArrowOutlined() {
  return (
    <div className="h-[36px] relative w-[18px]" data-name="weui:arrow-outlined">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 36">
        <g id="weui:arrow-outlined">
          <path d={svgPaths.p272be800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function WeuiArrowOutlined1() {
  return (
    <div className="h-[36px] relative w-[18px]" data-name="weui:arrow-outlined">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 36">
        <g id="weui:arrow-outlined">
          <path d={svgPaths.p272be800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function WeuiArrowOutlined2() {
  return (
    <div className="h-[36px] relative w-[18px]" data-name="weui:arrow-outlined">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 36">
        <g id="weui:arrow-outlined">
          <path d={svgPaths.p272be800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function WeuiArrowOutlined3() {
  return (
    <div className="h-[36px] relative w-[18px]" data-name="weui:arrow-outlined">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 36">
        <g id="weui:arrow-outlined">
          <path d={svgPaths.p272be800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function WeuiArrowOutlined4() {
  return (
    <div className="h-[36px] relative w-[18px]" data-name="weui:arrow-outlined">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 36">
        <g id="weui:arrow-outlined">
          <path d={svgPaths.p272be800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle() {
  return (
    <div className="absolute left-[78px] size-[24px] top-[3518px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p2299ac0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle1() {
  return (
    <div className="absolute left-[78px] size-[24px] top-[3596px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p2299ac0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle2() {
  return (
    <div className="absolute left-[78px] size-[24px] top-[3674px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p2299ac0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle3() {
  return (
    <div className="absolute left-[78px] size-[24px] top-[3752px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p2299ac0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle4() {
  return (
    <div className="absolute left-[78px] size-[24px] top-[3830px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p2299ac0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle5() {
  return (
    <div className="absolute left-[72px] size-[17px] top-[4485px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p1941ea00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle6() {
  return (
    <div className="absolute left-[385px] size-[17px] top-[4485px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p1941ea00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle7() {
  return (
    <div className="absolute left-[698px] size-[17px] top-[4485px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p1941ea00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle8() {
  return (
    <div className="absolute left-[72px] size-[17px] top-[4510px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p1941ea00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle9() {
  return (
    <div className="absolute left-[385px] size-[17px] top-[4510px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p1941ea00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle10() {
  return (
    <div className="absolute left-[698px] size-[17px] top-[4510px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p1941ea00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle11() {
  return (
    <div className="absolute left-[72px] size-[17px] top-[4566px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p1941ea00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle12() {
  return (
    <div className="absolute left-[385px] size-[17px] top-[4566px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p1941ea00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle13() {
  return (
    <div className="absolute left-[698px] size-[17px] top-[4566px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p1941ea00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle14() {
  return (
    <div className="absolute left-[538px] size-[24px] top-[3518px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p2299ac0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle15() {
  return (
    <div className="absolute left-[538px] size-[24px] top-[3596px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p2299ac0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle16() {
  return (
    <div className="absolute left-[538px] size-[24px] top-[3674px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p2299ac0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle17() {
  return (
    <div className="absolute left-[538px] size-[24px] top-[3752px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p2299ac0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MdiTickCircle18() {
  return (
    <div className="absolute left-[538px] size-[24px] top-[3830px]" data-name="mdi:tick-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:tick-circle">
          <path d={svgPaths.p2299ac0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FluentLive20Filled() {
  return (
    <div className="absolute left-[487px] size-[33px] top-[3985px]" data-name="fluent:live-20-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="fluent:live-20-filled">
          <path d={svgPaths.p457d980} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FluentLive20Filled1() {
  return (
    <div className="absolute left-[385px] size-[51px] top-[4349px]" data-name="fluent:live-20-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 51">
        <g id="fluent:live-20-filled">
          <path d={svgPaths.paa14600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[9.61%_12.5%_0.78%_12.5%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21.5087">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pe75a580} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteLiveFill() {
  return (
    <div className="absolute left-[797px] overflow-clip size-[24px] top-[3987px]" data-name="mingcute:live-fill">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[9.61%_12.5%_0.78%_12.5%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.5 37.6402">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pc6e3c80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteLiveFill1() {
  return (
    <div className="absolute left-[705px] overflow-clip size-[42px] top-[4354px]" data-name="mingcute:live-fill">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-476px)] top-[6680px]">
      <div className="-translate-x-1/2 absolute bg-[#1de5b5] h-[350px] left-[calc(50%-476px)] rounded-bl-[201px] rounded-br-[20px] rounded-tl-[201px] rounded-tr-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[6680px] w-[348px]" />
    </div>
  );
}

function LineMdStarFilled() {
  return (
    <div className="absolute left-[676px] size-[19px] top-[6913px]" data-name="line-md:star-filled">
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
    <div className="absolute left-[693px] size-[19px] top-[6913px]" data-name="line-md:star-filled">
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
    <div className="absolute left-[710px] size-[19px] top-[6913px]" data-name="line-md:star-filled">
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
    <div className="absolute left-[727px] size-[19px] top-[6913px]" data-name="line-md:star-filled">
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
    <div className="absolute left-[744px] size-[19px] top-[6913px]" data-name="line-md:star-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="line-md:star-filled">
          <path d={svgPaths.p358b5b00} fill="var(--fill-0, #FFD700)" id="Vector" />
          <path d={svgPaths.p160bf0c0} id="Vector_2" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
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

function HeroiconsOutlineArrowUp1() {
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

function HeroiconsOutlineArrowUp2() {
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

function PrimeBookmark() {
  return (
    <div className="absolute h-[24px] left-[406px] top-[7806px] w-[23px]" data-name="prime:bookmark">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
        <g id="prime:bookmark">
          <path d={svgPaths.p379aa200} fill="var(--fill-0, #09263F)" fillOpacity="0.5" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PrimeBookmark1() {
  return (
    <div className="absolute h-[24px] left-[854px] top-[7806px] w-[23px]" data-name="prime:bookmark">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
        <g id="prime:bookmark">
          <path d={svgPaths.p379aa200} fill="var(--fill-0, #09263F)" fillOpacity="0.5" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PrimeBookmark2() {
  return (
    <div className="absolute left-[1301px] size-[24px] top-[7806px]" data-name="prime:bookmark">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="prime:bookmark">
          <path d={svgPaths.p1d85d780} fill="var(--fill-0, #09263F)" fillOpacity="0.5" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BoxiconsLocationFilled() {
  return (
    <div className="absolute left-[82px] size-[24px] top-[9336px]" data-name="boxicons:location-filled">
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
    <div className="absolute left-[302px] size-[24px] top-[9335px]" data-name="boxicons:location-filled">
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
    <div className="absolute left-[517px] size-[24px] top-[9336px]" data-name="boxicons:location-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="boxicons:location-filled">
          <path d={svgPaths.p39f2f380} fill="var(--fill-0, #09263F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AkarIconsCross() {
  return (
    <div className="absolute left-[1185px] size-[24px] top-[9719px]" data-name="akar-icons:cross">
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

function Group7({ siteSettings }: { siteSettings?: PdpProps["siteSettings"] }) {
  return (
    <div className="absolute contents left-[66px] top-[138px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[116px] not-italic text-[#09263f] text-[16px] top-[150px] whitespace-nowrap">{siteSettings?.contactPhone ?? "+91 9555219007"}</p>
      <div className="absolute border border-[rgba(9,38,63,0.3)] border-solid h-[40px] left-[66px] rounded-[56px] top-[138px] w-[206px]" />
      <FamiconsCall />
    </div>
  );
}

function BoxiconsLocationFilled3() {
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

function Group5() {
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
      <Group5 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function PrimeTwitter() {
  return (
    <div className="absolute left-[1306px] overflow-clip size-[21px] top-[705px]" data-name="prime:twitter">
      <Group4 />
    </div>
  );
}

function AkarIconsMediumFill() {
  return <div className="absolute left-[1310px] size-[24px] top-[676px]" data-name="akar-icons:medium-fill" />;
}

function Frame({ offices, footerLinks, footerCities, siteSettings }: {
  offices?: PdpProps["offices"];
  footerLinks?: PdpProps["footerLinks"];
  footerCities?: PdpProps["footerCities"];
  siteSettings?: PdpProps["siteSettings"];
}) {
  const o0 = offices?.[0]; const o1 = offices?.[1]; const o2 = offices?.[2];
  const fl = footerLinks ?? []; const fc = footerCities ?? [];
  const flLabel = (i: number, fb: string) => fl[i]?.label ?? fb;
  const flUrl   = (i: number, fb: string) => fl[i]?.url ?? fb;
  const fcLabel = (i: number, fb: string) => fc[i]?.label ?? fb;
  const fcUrl   = (i: number, fb: string) => fc[i]?.url ?? fb;
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
      <Group7 siteSettings={siteSettings} />
      <div className="absolute border-[0.5px] border-[rgba(255,255,255,0.5)] border-solid h-[118px] left-[947px] rounded-[15px] top-[541px] w-[426px]" />
      <div className="absolute border-[0.5px] border-[rgba(255,255,255,0.5)] border-solid h-[118px] left-[507px] rounded-[15px] top-[541px] w-[425px]" />
      <div className="absolute border-[0.5px] border-[rgba(255,255,255,0.5)] border-solid h-[118px] left-[66px] rounded-[15px] top-[541px] w-[426px]" />
      <div className="absolute border-[0.5px] border-[rgba(255,255,255,0.5)] border-solid h-[213px] left-[66px] rounded-[15px] top-[271px] w-[426px]" />
      <div className="absolute bg-white h-[38px] left-[89px] rounded-[97px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[308px] w-[379px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[200px] not-italic text-[#09263f] text-[14px] top-[317px] whitespace-nowrap">{`Submit a Guest Post `}</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[89px] not-italic text-[14px] text-white top-[366px] w-[375px]">Parametric vs. Non-Parametric Test: Which One to Use for Hypothesis Testing?</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[89px] not-italic text-[14px] text-white top-[411px] w-[353px]">What is Agentic AI – A Technical Guide for Beginners</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[89px] not-italic text-[14px] text-white top-[440px] w-[379px]">List vs Tuple in Python: Understanding Key Differences</p>
      <BoxiconsLocationFilled3 />
      <BoxiconsLocationFilled4 />
      <BoxiconsLocationFilled5 />
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

function Group8({ course }: { course?: PdpProps["course"] }) {
  return (
    <div className="absolute contents left-[967px] top-[143px]">
      <div className="absolute bg-white h-[505px] left-[967px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[143px] w-[407px]" />
      <div className="absolute h-[198.888px] left-[967px] rounded-tl-[15px] rounded-tr-[15px] top-[143px] w-[407px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[15px] rounded-tr-[15px] size-full" src={course?.heroImageUrl ?? imgRectangle155.src} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[33.508px] leading-[normal] left-[993.1px] not-italic text-[26px] text-black top-[365.67px] w-[180px]">{course?.discountedPrice ? fmtRupees(course.discountedPrice) : "₹59,000"}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[18.376px] leading-[normal] left-[1180px] not-italic text-[14px] text-[rgba(0,0,0,0.5)] top-[378px] w-[100px] line-through">{course?.price ? fmtRupees(course.price) : "₹65,000"}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[12.971px] leading-[normal] left-[993.1px] not-italic text-[10px] text-[rgba(0,0,0,0.5)] top-[405px] w-[226.638px]">Inclusive of all taxes• Easy EMI available</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[993.1px] not-italic text-[12px] text-[rgba(0,0,0,0.5)] top-[505px] whitespace-pre">{`Noida   Gurgaon   Bangalore`}</p>
      <div className="absolute bg-[#1de5b5] h-[34px] left-[993px] rounded-[5px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] top-[430px] w-[114px]" />
      <div className="absolute border border-[rgba(9,38,63,0.5)] border-solid h-[34px] left-[1114px] rounded-[5px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] top-[430px] w-[113px]" />
      <div className="absolute border border-[rgba(9,38,63,0.5)] border-solid h-[34px] left-[1234px] rounded-[5px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] top-[430px] w-[114px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[12.971px] leading-[normal] left-[1024.84px] not-italic text-white text-[10px] top-[440px] w-[67.636px]">Classroom</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal h-[12.971px] leading-[normal] left-[1170.09px] not-italic text-[#09263f] text-[10px] text-center top-[440px] w-[40.344px]">Online</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal h-[12.971px] leading-[normal] left-[1292.13px] not-italic text-[#09263f] text-[10px] text-center top-[440px] w-[64.076px]">eLearning</p>
      <div className="absolute h-0 left-[1180px] top-[388px] w-[53px]">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 0.5">
            <line id="Line 16" stroke="var(--stroke-0, black)" strokeOpacity="0.5" strokeWidth="0.5" x2="53" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#ffd700] h-[40px] left-[993.1px] rounded-[109px] top-[540px] w-[354.79px]" />
      <div className="absolute border border-[rgba(9,38,63,0.5)] border-solid h-[40px] left-[993.1px] rounded-[109px] top-[590px] w-[354.79px]" />
      <Link href={course?.brochureUrl ?? "#"} className="contents"><p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16.214px] leading-[normal] left-[1170.5px] not-italic text-[#09263f] text-[12px] text-center top-[552px] w-[221.892px]">Download Syllabus</p></Link>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16.214px] leading-[normal] left-[1170.5px] not-italic text-[#09263f] text-[12px] text-center top-[602px] w-[221.892px]">Contact Us</p>
    </div>
  );
}

function Group10({ course }: { course?: PdpProps["course"] }) {
  return (
    <div className="absolute contents left-[967px] top-[143px]">
      <Group8 course={course} />
      <div className="absolute border border-[rgba(9,38,63,0.2)] border-solid h-[16px] left-[1126px] rounded-bl-[5px] rounded-br-[5px] top-[465px] w-[90px]" />
      <div className="absolute border border-[rgba(9,38,63,0.2)] border-solid h-[16px] left-[1246px] rounded-bl-[5px] rounded-br-[5px] top-[465px] w-[90px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[1170.5px] not-italic text-[#09263f] text-[0px] text-center top-[468px] whitespace-nowrap">
        <span className="leading-[normal] text-[8px]">{`@₹68,440/- `}</span>
        <span className="leading-[normal] text-[5px] text-[rgba(9,38,63,0.5)]">easy EMI</span>
      </p>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[1290.5px] not-italic text-[#09263f] text-[0px] text-center top-[468px] whitespace-nowrap">
        <span className="leading-[normal] text-[8px]">@₹</span>
        <span className="leading-[normal] text-[8px]">48</span>
        <span className="leading-[normal] text-[8px]">{`,440/- `}</span>
        <span className="leading-[normal] text-[5px] text-[rgba(9,38,63,0.5)]">easy EMI</span>
      </p>
    </div>
  );
}

export default function Pdp(props: PdpProps) {
  const {
    course,
    topNav = [],
    footerLinks = [],
    footerCities = [],
    offices = [],
    siteSettings,
  } = props;
  return (
    <div className="bg-white relative w-full overflow-x-hidden flex flex-col items-center" data-name="Pdp">

      {/* ═══ MOBILE LAYOUT (hidden at lg+) ═══ */}
      <div className="block lg:hidden w-full pb-20">

        {/* Hero */}
        <section className="bg-[#09263f] px-5 pt-7 pb-8">
          <p className="text-xs text-white/50 mb-2">
            <Link href="/" className="text-white/50">Home</Link>
            {" / "}
            <Link href="/courses" className="text-white/50">Courses</Link>
            {" / "}
            <span className="text-white/70">{course?.title ?? "Data Science"}</span>
          </p>
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[26px] leading-[1.25] mb-3">
            {course?.title ?? "Data Science Course with Certification & Placement"}
          </h1>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-base">{"⭐".repeat(5)}</span>
            <span className="text-white text-sm font-semibold">9.6 / 10</span>
            <span className="text-white/50 text-xs">(20,000+ alumni)</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            {course?.shortDesc ?? "An extensive industry-relevant Data Science course with 8 weeks of Placement Assistance."}
          </p>
          {/* Stat pills */}
          <div className="flex gap-2 flex-wrap mb-6">
            {[
              { label: String(course?.hoursCount ?? 675), sub: "Total Hours", bg: "#d2faf0" },
              { label: String(course?.classesCount ?? 65), sub: "Live Classes", bg: "#fffad2" },
              { label: String(course?.modules?.length ?? 11), sub: "Modules", bg: "#f0fbff" },
              { label: "20K+", sub: "Alumni", bg: "#fff2fa" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center justify-center rounded-2xl px-4 py-2 min-w-[70px]" style={{ background: s.bg }}>
                <span className="font-semibold text-[#09263f] text-lg leading-none">{s.label}</span>
                <span className="text-[10px] text-[#09263f]/60 mt-0.5 whitespace-nowrap">{s.sub}</span>
              </div>
            ))}
          </div>
          <Link href="#enroll" className="flex items-center justify-center bg-[#1de5b5] h-12 rounded-full font-semibold text-[#09263f] text-base mb-3">
            Sign up for Free Demo
          </Link>
          <div className="relative rounded-2xl overflow-hidden max-h-[180px]">
            <img src={img197.src} alt="" className="w-full object-cover" style={{ maxHeight: "180px" }} />
          </div>
        </section>

        {/* Pricing card */}
        <section className="bg-white px-5 py-6 shadow-[0_4px_20px_0_rgba(0,0,0,0.08)]">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-semibold text-[#09263f] text-2xl">
              {course?.discountedPrice ? `₹${(course.discountedPrice / 100).toLocaleString("en-IN")}` : "₹48,000+"}
            </span>
            <span className="text-[#09263f]/40 text-sm">onwards</span>
          </div>
          {course?.emiPerMonth && (
            <p className="text-sm text-[#09263f]/60 mb-3">EMI from ₹{(course.emiPerMonth / 100).toLocaleString("en-IN")}/month</p>
          )}
          <div className="flex flex-col gap-2 text-sm text-[#09263f]/70 mb-4">
            {[
              { icon: "▶", text: "Video lectures + Live sessions" },
              { icon: "⬇", text: "Brochure download" },
              { icon: "📺", text: "Lifetime LMS access" },
              { icon: "⏱", text: `${course?.durationMonths ?? 8} months program` },
              { icon: "⭐", text: "9.6 avg rating" },
              { icon: "🤝", text: "8-week placement support" },
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-base w-5">{r.icon}</span>
                <span>{r.text}</span>
              </div>
            ))}
          </div>
          <Link href="#enroll" id="enroll" className="flex items-center justify-center w-full bg-[#1de5b5] h-12 rounded-full font-semibold text-[#09263f] text-base mb-2">
            Enroll Now
          </Link>
          <button className="flex items-center justify-center w-full h-11 rounded-full border border-[#09263f]/30 text-sm font-medium text-[#09263f]">
            Add to Wishlist
          </button>
        </section>

        {/* Overview */}
        <section className="bg-white px-5 py-8 border-t border-[#09263f]/10">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-xl mb-4">Overview</h2>
          <p className="text-sm text-[#09263f]/70 leading-relaxed mb-3">
            {`AnalytixLabs' Advanced Certification in Data Science is a 700+ hour, 8-month program built for people with zero programming background.`}
          </p>
          <p className="text-sm text-[#09263f]/70 leading-relaxed">
            The entire curriculum is designed in collaboration with NASSCOM FutureSkills Prime, aligned with what the industry needs.
          </p>
        </section>

        {/* Curriculum */}
        <section className="bg-[#f4fafa] px-5 py-8">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-xl mb-1">
            {course?.title ? `${course.title} Curriculum` : "Data Science Course Curriculum"}
          </h2>
          <p className="text-sm text-[#09263f]/50 mb-5">{course?.modules?.length ?? 11} modules · 600+ hours · no prior coding experience needed</p>
          <div className="flex flex-col gap-2">
            {(course?.modules ?? Array.from({ length: 6 }, (_, i) => ({
              id: String(i), title: ["Python & Statistics", "SQL & Data Wrangling", "Machine Learning", "Deep Learning & NLP", "BI & Visualisation", "Capstone Projects"][i] ?? `Module ${i + 1}`, summary: null, order: i, lessons: [],
            }))).slice(0, 10).map((mod, idx) => {
              const colors = ["#f0fbff", "#d2faf0", "#fff2fa", "#fffad2", "#d2faf0"];
              return (
                <details key={idx} className="bg-white rounded-xl shadow-sm group">
                  <summary className="flex items-center gap-3 px-4 py-3 cursor-pointer list-none select-none min-h-[52px]">
                    <span className="flex-none size-7 rounded-lg flex items-center justify-center font-semibold text-[#09263f] text-sm" style={{ background: colors[idx % colors.length] }}>{idx + 1}</span>
                    <span className="flex-1 font-semibold text-[#09263f] text-sm">{mod.title}</span>
                    <svg className="size-4 text-[#09263f]/40 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  {mod.summary && <p className="px-4 pb-3 pt-1 text-sm text-[#09263f]/60">{mod.summary}</p>}
                  {mod.lessons?.length > 0 && (
                    <ul className="px-4 pb-3 flex flex-col gap-1">
                      {mod.lessons.map((l, li) => (
                        <li key={li} className="text-sm text-[#09263f]/70 flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-[#1de5b5] shrink-0" />
                          {l.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </details>
              );
            })}
          </div>
        </section>

        {/* Tools */}
        <section className="bg-white px-5 py-8">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-xl mb-4">Tools &amp; Technologies</h2>
          {course?.tools?.length ? (
            <div className="flex flex-wrap gap-2">
              {course.tools.map((t, i) => (
                <div key={i} className="px-3 py-1.5 rounded-full border border-[#09263f]/20 text-sm text-[#09263f] bg-[#f4fafa] flex items-center gap-1">
                  {t.iconUrl && <img src={t.iconUrl} alt="" className="size-4 object-contain" />}
                  {t.name}
                </div>
              ))}
            </div>
          ) : (
            <img src={imgTools.src} alt="Tools covered" className="w-full h-auto object-contain rounded-xl" />
          )}
        </section>

        {/* Learning Modes */}
        <section className="bg-[#f4fafa] px-5 py-8">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-xl mb-5">Learning Modes</h2>
          <div className="flex flex-col gap-4">
            {[
              { mode: "Classroom & Bootcamp", price: "₹68,440/-", desc: "An immersive in-person experience designed to accelerate skill development." },
              { mode: "Interactive Live Online", price: "₹59,000/-", desc: "Blend traditional classroom with real-time interactive sessions for busy schedules." },
              { mode: "Blended eLearning", price: "₹53,100/-", desc: "Fuse classroom instruction with flexible eLearning modules." },
            ].map((m, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-[#09263f]/10">
                <h3 className="font-semibold text-[#09263f] text-base mb-1">{m.mode}</h3>
                <p className="text-xl font-semibold text-[#09263f] mb-2">{m.price} <span className="text-xs font-normal text-[#09263f]/50">incl. taxes</span></p>
                <p className="text-sm text-[#09263f]/60 mb-3">{m.desc}</p>
                <Link href="#enroll" className="flex items-center justify-center w-full bg-[#ffd700] h-11 rounded-full font-semibold text-[#09263f] text-sm">Enroll now</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-white px-5 py-8">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-xl mb-5">Certifications</h2>
          <div className="flex flex-col gap-4">
            {(course?.certifications?.length ? course.certifications.map(c => ({ title: c.title, issuer: c.issuer, img: c.imageUrl ?? null })) : [
              { title: "AnalytixLabs Certification", issuer: "AnalytixLabs", img: imgCertificate.src },
              { title: "NASSCOM FutureSkills Prime", issuer: "NASSCOM / MeitY", img: imgCertificate1.src },
            ]).map((cert, i) => (
              <div key={i} className="border border-[#09263f]/15 rounded-xl p-4 flex items-center gap-4">
                {cert.img && <img src={cert.img} alt={cert.title} className="w-16 h-16 object-contain shrink-0" />}
                <div>
                  <p className="font-semibold text-[#09263f] text-sm">{cert.title}</p>
                  <p className="text-xs text-[#09263f]/50 mt-0.5">Issued by {cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Support */}
        <section className="bg-[#f4fafa] px-5 py-8">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-xl mb-4">Career Support</h2>
          <ul className="flex flex-col gap-4">
            {[
              { head: "Placement Readiness Program", body: "A focused 6–8 week module after certification with one-on-one resume reviews, mock interviews, and structured feedback." },
              { head: "Diverse Job Opportunities", body: "50+ companies have hired our alumni. Active recruiter network and 20,000+ alumni community." },
              { head: "Job Guarantee Program", body: "Meet the requirements and don't get placed? 50% fee refund." },
              { head: "Continued Career Support", body: "Access to job postings, upskilling resources, and career counselling beyond the placement window." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="size-2 rounded-full bg-[#09263f] mt-2 shrink-0" />
                <div>
                  <p className="font-semibold text-[#09263f] text-sm">{item.head}</p>
                  <p className="text-sm text-[#09263f]/60 mt-0.5 leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <img src={imgCompanyLogo.src} alt="Hiring companies" className="w-full mt-6 h-auto object-contain opacity-70" />
        </section>

        {/* FAQs */}
        {(course?.faqs?.length ?? 0) > 0 && (
          <section className="bg-white px-5 py-8">
            <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-xl mb-5">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-2">
              {course!.faqs!.map((faq, i) => (
                <details key={i} className="bg-[#f4fafa] rounded-xl group">
                  <summary className="flex items-center justify-between gap-3 px-4 py-3 cursor-pointer list-none min-h-[52px]">
                    <span className="font-medium text-[#09263f] text-sm">{faq.question}</span>
                    <svg className="size-4 shrink-0 text-[#09263f]/40 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-4 pb-3 pt-1 text-sm text-[#09263f]/70 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-[#094c80] from-[13%] to-[#2096cb] py-10 px-6">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-xl leading-snug mb-2">
            {`"Unlock Insights. Enroll Now. Transform Tomorrow."`}
          </p>
          <p className="text-white/70 text-sm mb-6">Change the course of your career now</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#ffd700] h-12 px-6 rounded-full font-semibold text-[#09263f] text-sm">
            Contact Us
          </Link>
        </section>
      </div>{/* /mobile layout */}

      {/* Sticky bottom CTA bar — mobile only */}
      <div className="block lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#09263f]/15 px-4 py-3 shadow-[0_-4px_20px_0_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-[#09263f]/50 leading-none">Starting from</p>
            <p className="font-semibold text-[#09263f] text-lg leading-tight">
              {course?.discountedPrice ? `₹${(course.discountedPrice / 100).toLocaleString("en-IN")}` : "₹48,000+"}
            </p>
          </div>
          <Link href="#enroll" className="flex items-center justify-center bg-[#1de5b5] h-12 px-6 rounded-full font-semibold text-[#09263f] text-sm whitespace-nowrap">
            Enroll Now
          </Link>
        </div>
      </div>

      {/* ═══ DESKTOP LAYOUT (hidden below lg) ═══ */}
      <div className="hidden lg:flex w-full flex-col items-center">
      {/* Main absolute canvas (locked to 1440px) */}
      <div className="relative w-[1440px] h-[10913px] flex-shrink-0">
        <div className="-translate-x-1/2 absolute h-[464px] left-[calc(50%+93.5px)] top-[68px] w-[441px]" data-name="Asset 25@3x 2">
          <img alt="" className="absolute inset-0 max-w-none object-cover opacity-44 pointer-events-none size-full" src={imgAsset253X2.src} />
        </div>
        <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[46px] left-0 to-white top-[488px] w-[1395px]" />
        <div className="absolute left-[63px] top-[142px] w-[667px] flex flex-col gap-6">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-[42px] leading-tight">
            {course?.title ?? "Data Science Course with Certification & Placement"}
          </h1>
          <div className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(9,38,63,0.5)] leading-relaxed">
            {course?.shortDesc ?? "An extensive industry-relevant Data Science course with 8 weeks of Placement Assistance. No coding background required — start from zero, finish job-ready."}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center text-[16px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-black">⭐</span>
              ))}
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[rgba(9,38,63,0.5)]">
              <span className="text-[#09263f] font-semibold">9.6 / 10</span> (20,000+ alumni)
            </p>
          </div>
        </div>
      <div className="absolute bg-[#d2faf0] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[76px] left-[63px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[371px] w-[114px]" />
      <div className="absolute bg-[#d2faf0] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[143px] left-[49px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[886px] w-[295px]" />
      <div className="absolute bg-[#d2faf0] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[213px] left-[49px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[3972px] w-[295px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[349px] left-[49px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[4338px] w-[295px]" />
      <div className="absolute bg-[#d2faf0] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[76px] left-[1031px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[672px] w-[172px]" />
      <div className="absolute bg-[#fffad2] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[76px] left-[177px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[371px] w-[114px]" />
      <div className="absolute bg-[#fffad2] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[76px] left-[1203px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[672px] w-[171px]" />
      <div className="absolute bg-[#f0fbff] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[76px] left-[291px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[371px] w-[113px]" />
      <div className="absolute bg-[#f0fbff] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[143px] left-[357px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[886px] w-[293px]" />
      <div className="absolute bg-[#f0fbff] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[213px] left-[357px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[3972px] w-[293px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[349px] left-[364px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[4338px] w-[293px]" />
      <div className="absolute bg-[#f0fbff] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[76px] left-[1031px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[748px] w-[170px]" />
      <div className="absolute bg-[#fff2fa] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[76px] left-[404px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[371px] w-[114px]" />
      <div className="absolute bg-[#fff2fa] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[143px] left-[662px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[886px] w-[294px]" />
      <div className="absolute bg-[#fff2fa] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[213px] left-[662px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[3972px] w-[294px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[349px] left-[677px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[4338px] w-[294px]" />
      <div className="absolute bg-[#fff2fa] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[76px] left-[1201px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[748px] w-[171px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[119.5px] not-italic text-[#09263f] text-[20px] text-center top-[387px] w-[43px]">{course?.hoursCount ?? 675}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[75px] not-italic text-[#09263f] text-[20px] top-[925px] w-[74px]">195 hrs</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[197px] not-italic text-[#09263f] text-[14px] text-center top-[4016px] whitespace-nowrap">{`Classroom & Bootcamp`}</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[223px] not-italic text-[#09263f] text-[16px] text-center top-[4365px] whitespace-nowrap">{`Classroom & Bootcamp`}</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-[197.5px] not-italic text-[#09263f] text-[0px] text-center top-[4415px] whitespace-nowrap">
        <span className="leading-[normal] text-[24px]">₹ 68,440/-</span>
        <span className="leading-[normal] text-[16px]">&nbsp;</span>
        <span className="leading-[normal] text-[13px]">including taxes</span>
      </p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-[510px] not-italic text-[#09263f] text-[0px] text-center top-[4415px] whitespace-nowrap">
        <span className="leading-[normal] text-[24px]">₹ 59,000/-</span>
        <span className="leading-[normal] text-[16px]">&nbsp;</span>
        <span className="leading-[normal] text-[13px]">including taxes</span>
      </p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-[827px] not-italic text-[#09263f] text-[0px] text-center top-[4415px] whitespace-nowrap">
        <span className="leading-[normal] text-[24px]">₹ 53,100/-</span>
        <span className="leading-[normal] text-[16px]">&nbsp;</span>
        <span className="leading-[normal] text-[13px]">including taxes</span>
      </p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1116px] not-italic text-[20px] text-black text-center top-[691px] w-[64px]">₹48k</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[233px] not-italic text-[#09263f] text-[20px] text-center top-[387px] w-[30px]">{course?.classesCount ?? 65}</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1286px] not-italic text-[#09263f] text-[20px] text-center top-[688px] whitespace-nowrap">8 mo</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[347px] not-italic text-[#09263f] text-[20px] text-center top-[387px] w-[22px]">{course?.modules?.length ?? 11}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[383px] not-italic text-[#09263f] text-[20px] top-[925px] w-[77px]">422 hrs</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[504.5px] not-italic text-[#09263f] text-[14px] text-center top-[4016px] whitespace-nowrap">Interactive Live Online</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[533.5px] not-italic text-[#09263f] text-[16px] text-center top-[4365px] whitespace-nowrap">Interactive Live Online</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1115.5px] not-italic text-[#09263f] text-[20px] text-center top-[774px] w-[33px]">9.6</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[460.5px] not-italic text-[#09263f] text-[20px] text-center top-[387px] w-[59px]">20K+</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[690px] not-italic text-[#09263f] text-[20px] top-[925px] w-[85px]">8 Weeks</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[809.5px] not-italic text-[#09263f] text-[14px] text-center top-[4016px] whitespace-nowrap">Blended eLearning</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[832.5px] not-italic text-[#09263f] text-[16px] text-center top-[4365px] whitespace-nowrap">Blended eLearning</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1286px] not-italic text-[#09263f] text-[20px] text-center top-[764px] w-[88px]">20K+</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[119px] not-italic text-[12px] text-[rgba(9,38,63,0.5)] text-center top-[413px] w-[74px]">Total Hours</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[75px] not-italic text-[12px] text-[rgba(9,38,63,0.5)] top-[954px] w-[89px]">Live instruction</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[75px] not-italic text-[#09263f] text-[13px] top-[977px] w-[237px]">65 classes × 3 hrs + 20 hrs eLearning</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[197px] not-italic text-[13px] text-[rgba(9,38,63,0.5)] text-center top-[4041px] w-[280px]">An immersive, in-person learning experience designed to accelerate skill development through intensive, hands-on training and expert mentorship. It bridges the gap between theory and real-world application, equipping learners with the expertise and skills needed to succeed in today’s dynamic professional landscape.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[95px] not-italic text-[#09263f] text-[13px] top-[4486px] whitespace-nowrap">Fees payable in up to 3 installment​s</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[408px] not-italic text-[#09263f] text-[13px] top-[4486px] whitespace-nowrap">Fees payable in up to 3 installment​s</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[721px] not-italic text-[#09263f] text-[13px] top-[4486px] whitespace-nowrap">Fees payable in up to 3 installment​s</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[95px] not-italic text-[#09263f] text-[13px] top-[4511px] w-[249px]">0% Interest EMI – Pay in Easy Installments (though education financing partners)</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[408px] not-italic text-[#09263f] text-[13px] top-[4511px] w-[249px]">0% Interest EMI – Pay in Easy Installments (though education financing partners)</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[721px] not-italic text-[#09263f] text-[13px] top-[4511px] w-[249px]">0% Interest EMI – Pay in Easy Installments (though education financing partners)</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[95px] not-italic text-[#09263f] text-[13px] top-[4567px] whitespace-nowrap">Fees payable in up to 3 installment​s</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[408px] not-italic text-[#09263f] text-[13px] top-[4567px] whitespace-nowrap">Fees payable in up to 3 installment​s</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[721px] not-italic text-[#09263f] text-[13px] top-[4567px] whitespace-nowrap">Fees payable in up to 3 installment​s</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1115.5px] not-italic text-[12px] text-[rgba(9,38,63,0.5)] text-center top-[714px] w-[111px]">Starting price</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[233.5px] not-italic text-[12px] text-[rgba(9,38,63,0.5)] text-center top-[413px] w-[77px]">Live classes</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1287.5px] not-italic text-[12px] text-[rgba(9,38,63,0.5)] text-center top-[714px] w-[115px]">Program duration</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[347.5px] not-italic text-[12px] text-[rgba(9,38,63,0.5)] text-center top-[413px] w-[55px]">Modules</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[383px] not-italic text-[12px] text-[rgba(9,38,63,0.5)] top-[954px] w-[60px]">Self-study</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[383px] not-italic text-[#09263f] text-[13px] top-[977px] w-[228px]">8–10 hrs/week · 38 hrs assessments</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[504px] not-italic text-[13px] text-[rgba(9,38,63,0.5)] text-center top-[4041px] w-[244px]">Blend the dynamic experience of traditional classroom with engaging, real-time interactive sessions, carefully tailored to meet the demand of busy schedules. This innovative approach ensures effective learning, fostering a deeper understanding and retention of knowledge.</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1116px] not-italic text-[12px] text-[rgba(9,38,63,0.5)] text-center top-[800px] w-[82px]">Avg rating</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[461px] not-italic text-[12px] text-[rgba(9,38,63,0.5)] text-center top-[413px] w-[44px]">Alumni</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[690px] not-italic text-[12px] text-[rgba(9,38,63,0.5)] top-[954px] w-[120px]">Placement readiness</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[690px] not-italic text-[#09263f] text-[13px] top-[977px] w-[163px]">Post certification program</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[809.5px] not-italic text-[13px] text-[rgba(9,38,63,0.5)] text-center top-[4041px] w-[267px]">Fuse the rich atmosphere of classroom instruction with the flexibility and accessibility of eLearning modules, meticulously integrated to accommodate learning preferences. This unique blend ensures an optimal learning experience, empowering participants to delve into subjects deeply.</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1287px] not-italic text-[12px] text-[rgba(9,38,63,0.5)] text-center top-[790px] w-[66px]">Alumni</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[195px] not-italic text-[14px] text-[rgba(9,38,63,0.5)] text-center top-[761px] whitespace-nowrap">Curriculum</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[54px] not-italic text-[14px] text-[rgba(9,38,63,0.5)] top-[1512px] whitespace-nowrap">11 modules · 600+ hours · no prior coding experience needed</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[54px] not-italic text-[14px] text-[rgba(9,38,63,0.5)] top-[1950px] whitespace-nowrap">6 capstone projects and 20+ graded assignments modelled on real business problems from banking, e-commerce, telecom, and retail.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[54px] not-italic text-[14px] text-[rgba(9,38,63,0.5)] top-[4278px] w-[921px]">{`The data science course fees vary by learning mode, so choose the format that works for you. All modes cover the same syllabus, the same assessments, and the same NASSCOM certification. `}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[54px] not-italic text-[14px] text-[rgba(9,38,63,0.5)] top-[6064px] whitespace-nowrap">There’s no entrance exam or lengthy application process. Here’s how it typically works:</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[54px] not-italic text-[14px] text-[rgba(9,38,63,0.5)] top-[5298px] w-[921px]">
        <p className="leading-[normal] mb-0">{` A course is only as good as the career outcomes it delivers. That’s why career support isn’t an add-on at AnalytixLabs. It’s built into the program from the start.`}</p>
        <p className="leading-[normal]">​</p>
      </div>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[54px] not-italic text-[14px] text-[rgba(9,38,63,0.5)] top-[4770px] w-[921px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">AnalytixLabs certifications are highly valued across the industry, backed by strong domain expertise and a rigorous evaluation process. Students must complete all course requirements—including case studies, MCQs, and viva assessments—within set timelines, with up to two attempts per assessment and a one-year completion window.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">{`Learners can also earn a prestigious certification through NASSCOM’s FutureSkills Prime (FSP), a government-backed initiative aligned with India’s digital economy mission, offering industry-relevant training in Analytics & Data Science.`}</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[306px] not-italic text-[14px] text-[rgba(9,38,63,0.5)] text-center top-[761px] whitespace-nowrap">Projects</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[397px] not-italic text-[14px] text-[rgba(9,38,63,0.5)] text-center top-[761px] whitespace-nowrap">Tools</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[517px] not-italic text-[14px] text-[rgba(9,38,63,0.5)] text-center top-[761px] whitespace-nowrap">Who should Join</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[672.5px] not-italic text-[14px] text-[rgba(9,38,63,0.5)] text-center top-[761px] whitespace-nowrap">Learning Modes</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[799px] not-italic text-[14px] text-[rgba(9,38,63,0.5)] text-center top-[761px] whitespace-nowrap">Batches</p>
      <div className="absolute bg-[#ffd700] h-[44px] left-[70px] rounded-[109px] top-[4610px] w-[250px]" />
      <div className="absolute bg-[#ffd700] h-[44px] left-[386px] rounded-[109px] top-[4610px] w-[250px]" />
      <div className="absolute bg-[#ffd700] h-[44px] left-[698px] rounded-[109px] top-[4610px] w-[250px]" />
      <div className="absolute bg-[#1de5b5] h-[44px] left-[49px] rounded-[109px] top-[5683px] w-[177px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[44px] left-[49px] rounded-[109px] top-[5933px] w-[270px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[49px] left-[52px] rounded-[15px] top-[1559px] w-[904px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[49px] left-[52px] rounded-[15px] top-[1619px] w-[904px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[49px] left-[52px] rounded-[15px] top-[1679px] w-[904px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[49px] left-[52px] rounded-[15px] top-[1739px] w-[904px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[49px] left-[52px] rounded-[15px] top-[1799px] w-[904px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[42px] left-[52px] rounded-[15px] top-[2714px] w-[107px]" />
      <div className="absolute bg-[#fff2fa] h-[42px] left-[52px] rounded-[32px] top-[3285px] w-[143px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[42px] left-[52px] rounded-[15px] top-[2771px] w-[100px]" />
      <div className="absolute bg-[#d2faf0] h-[42px] left-[52px] rounded-[32px] top-[3342px] w-[168px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[42px] left-[174px] rounded-[15px] top-[2714px] w-[90px]" />
      <div className="absolute bg-[#fef9d1] h-[42px] left-[202px] rounded-[32px] top-[3285px] w-[131px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[42px] left-[167px] rounded-[15px] top-[2771px] w-[145px]" />
      <div className="absolute bg-[#f0fbff] h-[42px] left-[227px] rounded-[32px] top-[3342px] w-[217px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[42px] left-[279px] rounded-[15px] top-[2714px] w-[124px]" />
      <div className="absolute bg-[#d2faf0] h-[42px] left-[340px] rounded-[32px] top-[3285px] w-[135px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[42px] left-[327px] rounded-[15px] top-[2771px] w-[177px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[42px] left-[419px] rounded-[15px] top-[2714px] w-[123px]" />
      <div className="absolute bg-[#f0fbff] h-[42px] left-[483px] rounded-[32px] top-[3285px] w-[179px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[42px] left-[520px] rounded-[15px] top-[2771px] w-[92px]" />
      <div className="absolute bg-[#fff2fa] h-[42px] left-[452px] rounded-[32px] top-[3342px] w-[210px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[42px] left-[558px] rounded-[15px] top-[2714px] w-[111px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[42px] left-[628px] rounded-[15px] top-[2771px] w-[96px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[42px] left-[685px] rounded-[15px] top-[2714px] w-[109px]" />
      <div className="absolute bg-[#fef9d1] h-[42px] left-[671px] rounded-[32px] top-[3285px] w-[151px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[42px] left-[810px] rounded-[15px] top-[2714px] w-[141px]" />
      <div className="absolute bg-[#fff2fa] h-[42px] left-[831px] rounded-[32px] top-[3285px] w-[103px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[113px] left-[52px] rounded-[15px] top-[2005px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[113px] left-[52px] rounded-[15px] top-[2938px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[113px] left-[52px] rounded-[15px] top-[6114px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[61px] left-[52px] rounded-[15px] top-[3498px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[61px] left-[52px] rounded-[15px] top-[3576px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[61px] left-[52px] rounded-[15px] top-[3654px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[61px] left-[52px] rounded-[15px] top-[3732px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[61px] left-[52px] rounded-[15px] top-[3810px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[61px] left-[512px] rounded-[15px] top-[3498px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[61px] left-[512px] rounded-[15px] top-[3576px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[61px] left-[512px] rounded-[15px] top-[3654px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[61px] left-[512px] rounded-[15px] top-[3732px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[61px] left-[512px] rounded-[15px] top-[3810px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[113px] left-[52px] rounded-[15px] top-[2135px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[113px] left-[52px] rounded-[15px] top-[3068px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[113px] left-[52px] rounded-[15px] top-[6244px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[113px] left-[52px] rounded-[15px] top-[2265px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[113px] left-[52px] rounded-[15px] top-[2395px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[113px] left-[512px] rounded-[15px] top-[2005px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[113px] left-[512px] rounded-[15px] top-[2938px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[113px] left-[512px] rounded-[15px] top-[6114px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[113px] left-[512px] rounded-[15px] top-[2135px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[113px] left-[512px] rounded-[15px] top-[3068px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[113px] left-[512px] rounded-[15px] top-[6244px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[113px] left-[512px] rounded-[15px] top-[2265px] w-[444px]" />
      <div className="absolute border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[113px] left-[512px] rounded-[15px] top-[2395px] w-[444px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[195px] not-italic text-[#09263f] text-[12px] text-center top-[4624px] w-[156px]">Enroll now</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[511px] not-italic text-[#09263f] text-[12px] text-center top-[4624px] w-[156px]">Enroll now</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[823px] not-italic text-[#09263f] text-[12px] text-center top-[4624px] w-[156px]">Enroll now</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[138.5px] not-italic text-white text-[12px] text-center top-[5697px] w-[187px]">Check your Eligibility</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[182.5px] not-italic text-[#09263f] text-[12px] text-center top-[5947px] w-[259px]">Download our Latest Placement Report</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-671px)] not-italic text-[#09263f] text-[32px] top-[822px] whitespace-nowrap">Overview</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-671px)] not-italic text-[#09263f] text-[32px] top-[3908px] whitespace-nowrap">Data Science Learning Modes</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-671px)] not-italic text-[#09263f] text-[32px] top-[4226px] whitespace-nowrap">Data Science Course Fees</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-671px)] not-italic text-[#09263f] text-[32px] top-[6012px] whitespace-nowrap">How To Apply</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-671px)] not-italic text-[#09263f] text-[32px] top-[5246px] whitespace-nowrap">Data Science Career Support</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-671px)] not-italic text-[#09263f] text-[32px] top-[4718px] whitespace-nowrap">Data Science Certification</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-671px)] not-italic text-[#09263f] text-[32px] top-[1453px] whitespace-nowrap">Data Science Course Curriculum</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-671px)] not-italic text-[#09263f] text-[32px] top-[1891px] whitespace-nowrap">{`Data Science Capstone Projects & Assignments`}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-671px)] not-italic text-[#09263f] text-[32px] top-[2856px] whitespace-nowrap">Who Should Join</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-671px)] not-italic text-[#09263f] text-[32px] top-[3426px] whitespace-nowrap">{`Data Science Key skills you'll gain`}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-671px)] not-italic text-[#09263f] text-[32px] top-[2544px] whitespace-nowrap">{`Data Science Tools & Technologies`}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-671px)] not-italic text-[#09263f] text-[32px] top-[5774px] whitespace-nowrap">Our candidates work at leading companies.</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-671px)] not-italic text-[#09263f] text-[32px] top-[3218px] whitespace-nowrap">Data Science Job roles you can target</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[calc(50%-671px)] not-italic text-[14px] text-[rgba(9,38,63,0.5)] top-[1063px] w-[893px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`AnalytixLabs' Advanced Certification in Data Science is a 700+ hour, 8-month program built for people with zero programming background. You start from the fundamentals — Excel, SQL, statistics — and work your way up to machine learning, NLP, predictive modelling, and generative AI.`}</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">The entire curriculum is designed in collaboration with NASSCOM FutureSkills Prime, a joint initiative of MeitY and NASSCOM, so what you learn is directly aligned with what the industry needs.</p>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[calc(50%-655px)] not-italic text-[0px] text-[rgba(9,38,63,0.5)] top-[1210px] w-[867px]">
        <span className="leading-[normal] text-[#09263f] text-[14px]">Genuine classroom training —</span>
        <span className="leading-[normal] text-[14px]">{` not just recorded lectures. Walk into our centres in Noida, Gurgaon, or Bangalore and learn face-to-face with instructors who've spent years solving real business problems.`}</span>
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[calc(50%-655px)] not-italic text-[0px] text-[rgba(9,38,63,0.5)] top-[5361px] w-[867px]">
        <span className="leading-[normal] text-[#09263f] text-[14px]">Placement Readiness Program —</span>
        <span className="leading-[normal] text-[14px]">{` `}</span>
        <span className="leading-[normal] text-[14px]">A focused 6-8 week module after certification. This isn’t generic career advice. It includes one-on-one resume reviews, mock interviews with industry professionals, case study sessions, and structured feedback. The goal: interview-ready, not just course-complete.</span>
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[calc(50%-655px)] not-italic text-[0px] text-[rgba(9,38,63,0.5)] top-[5612px] w-[867px]">
        <span className="leading-[normal] text-[#09263f] text-[14px]">Continued Career Support —</span>
        <span className="leading-[normal] text-[14px]">{` `}</span>
        <span className="leading-[normal] text-[14px]">Access to job postings, upskilling resources, and career counselling beyond the placement window. Long-term career partner, not just a training provider.</span>
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[calc(50%-655px)] not-italic text-[#09263f] text-[0px] top-[1290px] w-[867px]">
        <span className="leading-[normal] text-[14px]">{`Structured learning journey — `}</span>
        <span className="leading-[normal] text-[14px] text-[rgba(9,38,63,0.5)]">from data extraction and visualisation through to building, deploying, and monitoring ML models in production.</span>
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[calc(50%-655px)] not-italic text-[#09263f] text-[0px] top-[5449px] w-[867px]">
        <span className="leading-[normal] text-[14px]">Diverse Job Opportunities</span>
        <span className="leading-[normal] text-[14px]">{` — `}</span>
        <span className="leading-[normal] text-[14px] text-[rgba(9,38,63,0.5)]">50+ companies have hired our alumni. Active recruiter network and 20,000+ alumni community across data science, analytics, ML, and BI.</span>
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[calc(50%-655px)] not-italic text-[0px] text-[rgba(9,38,63,0.5)] top-[1370px] w-[867px]">
        <span className="leading-[normal] text-[#09263f] text-[14px]">{`Real placement support — `}</span>
        <span className="leading-[normal] text-[14px]">Our Placement Readiness Program runs 8 weeks post-certification, covering resume building to simulated interviews.</span>
      </p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[calc(50%-655px)] not-italic text-[0px] text-[rgba(9,38,63,0.5)] top-[5529px] w-[867px]">
        <p className="mb-0 text-[14px]">
          <span className="leading-[normal] text-[#09263f]">{`Job Guarantee Program — `}</span>
          <span className="leading-[normal]">Meet the requirements and don’t get placed? 50% fee refund. The best data science course with placement guarantee should have skin in the game.</span>
        </p>
        <p className="leading-[normal] text-[14px]">​</p>
      </div>
      <FaSolidChalkboardTeacher />
      <FaSolidChalkboardTeacher1 />
      <FaSolidChalkboardTeacher2 />
      <MiBook />
      <div className="absolute bg-[#09263f] h-[57px] left-[52px] rounded-[51px] top-[1198px] w-[2px]" />
      <div className="absolute bg-[#09263f] h-[57px] left-[52px] rounded-[51px] top-[5357px] w-[2px]" />
      <div className="absolute bg-[#09263f] h-[57px] left-[52px] rounded-[51px] top-[5600px] w-[2px]" />
      <div className="absolute bg-[#09263f] h-[57px] left-[52px] rounded-[51px] top-[1279px] w-[2px]" />
      <div className="absolute bg-[#09263f] h-[57px] left-[52px] rounded-[51px] top-[5438px] w-[2px]" />
      <div className="absolute bg-[#09263f] h-[57px] left-[52px] rounded-[51px] top-[1360px] w-[2px]" />
      <div className="absolute bg-[#09263f] h-[57px] left-[52px] rounded-[51px] top-[5519px] w-[2px]" />
      <div className="absolute h-0 left-[49px] top-[784px] w-[804px]">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 804 0.5">
            <line id="Line 17" stroke="var(--stroke-0, #09263F)" strokeOpacity="0.5" strokeWidth="0.5" x2="804" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>

      {course?.modules?.slice(0, 8).map((mod, idx) => {
        const rowTop = 1571 + idx * 60;
        const bgColors = ["#f0fbff", "#d2faf0", "#fff2fa", "#fffad2", "#d2faf0"];
        return (
          <div key={idx} className="absolute contents">
            <div className="absolute h-[26px] left-[64px] rounded-[6px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] w-[36px]" style={{ top: `${rowTop}px`, backgroundColor: bgColors[idx % bgColors.length] }} />
            <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[117px] not-italic text-[#09263f] text-[16px] whitespace-nowrap" style={{ top: `${rowTop + 5}px` }}>{mod.title}</p>
            <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[82px] not-italic text-[#09263f] text-[16px] text-center whitespace-nowrap" style={{ top: `${rowTop + 4}px` }}>{idx + 1}</p>
            <div className="absolute flex h-[18px] items-center justify-center left-[910px] w-[36px]" style={{ top: `${rowTop + 4}px`, "--transform-inner-width": "1200", "--transform-inner-height": "2403" } as any}>
              <div className="-scale-y-100 flex-none rotate-90">
                <WeuiArrowOutlined />
              </div>
            </div>
          </div>
        );
      })}
      <div className="absolute bg-[#d2faf0] h-[31px] left-[77px] rounded-[32px] top-[2022px] w-[123px]" />
      <div className="absolute bg-[#fef9d1] h-[31px] left-[77px] rounded-[32px] top-[2152px] w-[123px]" />
      <div className="absolute bg-[#f0fbff] h-[31px] left-[77px] rounded-[32px] top-[2282px] w-[123px]" />
      <div className="absolute bg-[#fff2fa] h-[31px] left-[77px] rounded-[32px] top-[2412px] w-[123px]" />
      <div className="absolute bg-[#fff2fa] h-[31px] left-[537px] rounded-[32px] top-[2022px] w-[123px]" />
      <div className="absolute bg-[#f0fbff] h-[31px] left-[537px] rounded-[32px] top-[2152px] w-[123px]" />
      <div className="absolute bg-[#fef9d1] h-[31px] left-[537px] rounded-[32px] top-[2282px] w-[123px]" />
      <div className="absolute bg-[#d2faf0] h-[31px] left-[537px] rounded-[32px] top-[2412px] w-[123px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[138.5px] not-italic text-[#09263f] text-[12px] text-center top-[2030px] whitespace-nowrap">Machine Learning</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[77px] not-italic text-[#09263f] text-[12px] top-[3001px] w-[405px]">Looking to start a career in analytics, data science, or AI — no prior background needed.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[77px] not-italic text-[#09263f] text-[12px] top-[6177px] w-[405px]">Call us, fill the enquiry form, or request a callback. Book a free demo class before committing.</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[138px] not-italic text-[#09263f] text-[12px] text-center top-[2160px] whitespace-nowrap">NLP</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[77px] not-italic text-[#09263f] text-[12px] top-[3131px] w-[384px]">Ready to move beyond Excel into Python, ML, and predictive modelling</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[77px] not-italic text-[#09263f] text-[12px] top-[6307px] w-[384px]">Batches fill up quickly, especially classroom sessions in Noida, Gurgaon, and Bangalore. Lock in your spot early</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[138px] not-italic text-[#09263f] text-[12px] text-center top-[2290px] whitespace-nowrap">Unsupervised ML</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[138.5px] not-italic text-[#09263f] text-[12px] text-center top-[2420px] whitespace-nowrap">Regression</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[598.5px] not-italic text-[#09263f] text-[12px] text-center top-[2030px] whitespace-nowrap">E-commerce</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[537px] not-italic text-[#09263f] text-[12px] top-[3001px] whitespace-nowrap">Wanting to transition into a data scientist or ML engineer role.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[537px] not-italic text-[#09263f] text-[12px] top-[6177px] w-[419px]">Our counsellor will understand your background and goals, then recommend the right course and training mode.</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[598px] not-italic text-[#09263f] text-[12px] text-center top-[2160px] whitespace-nowrap">Telecom</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[537px] not-italic text-[#09263f] text-[12px] top-[3131px] w-[402px]">Seeking hands-on understanding of data science and AI tools your team uses daily.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[537px] not-italic text-[#09263f] text-[12px] top-[6307px] w-[402px]">Seeking hands-One-time payment, instalments, or 0% EMI through our financing partners.</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[598.5px] not-italic text-[#09263f] text-[12px] text-center top-[2290px] whitespace-nowrap">Time Series</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[598.5px] not-italic text-[#09263f] text-[12px] text-center top-[2420px] whitespace-nowrap">Deployment</p>
      {course?.projects?.slice(0, 8).map((proj, idx) => {
        const isLeft = idx < 4;
        const colIdx = isLeft ? idx : idx - 4;
        const topY = 2075 + colIdx * 130;
        const leftX = isLeft ? 77 : 537;
        return (
          <p key={idx} className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[#09263f] text-[16px] whitespace-nowrap" style={{ top: `${topY}px`, left: `${leftX}px` }}>
            {proj.title}
          </p>
        );
      })}
      {/* Restored static content */}
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[77px] not-italic text-[#09263f] text-[16px] top-[2965px] whitespace-nowrap">Fresh graduates (any stream)</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[77px] not-italic text-[#09263f] text-[18px] top-[6141px] whitespace-nowrap">Step 1: Get in touch</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[119px] not-italic text-[#09263f] text-[16px] top-[3520px] whitespace-nowrap">Python for Data Analysis</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[119px] not-italic text-[#09263f] text-[16px] top-[3598px] whitespace-nowrap">Supervised Machine Learning</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[119px] not-italic text-[#09263f] text-[16px] top-[3676px] whitespace-nowrap">Predictive Modelling</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[119px] not-italic text-[#09263f] text-[16px] top-[3754px] whitespace-nowrap">Data Visualization</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[119px] not-italic text-[#09263f] text-[16px] top-[3832px] whitespace-nowrap">{`Data Mining & Analysis`}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[579px] not-italic text-[#09263f] text-[16px] top-[3520px] whitespace-nowrap">{`Statistical Analysis & Modelling`}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[579px] not-italic text-[#09263f] text-[16px] top-[3598px] whitespace-nowrap">Unsupervised Learning Models</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[579px] not-italic text-[#09263f] text-[16px] top-[3676px] whitespace-nowrap">{`Text Mining & NLP`}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[579px] not-italic text-[#09263f] text-[16px] top-[3754px] whitespace-nowrap">Reporting Analytics</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[579px] not-italic text-[#09263f] text-[16px] top-[3832px] whitespace-nowrap">{`Data Blending & Manipulation`}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[77px] not-italic text-[#09263f] text-[16px] top-[3095px] whitespace-nowrap">{`Analysts & reporting professionals`}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[77px] not-italic text-[#09263f] text-[18px] top-[6271px] whitespace-nowrap">Step 3: Reserve your Seat</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[537px] not-italic text-[#09263f] text-[16px] top-[2965px] whitespace-nowrap">IT / BPO / Operations professionals</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[537px] not-italic text-[#09263f] text-[18px] top-[6141px] whitespace-nowrap">Step 2: Speak with a Learning Advisor</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[537px] not-italic text-[#09263f] text-[16px] top-[3095px] whitespace-nowrap">{`Managers & team leads`}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[537px] not-italic text-[#09263f] text-[18px] top-[6271px] whitespace-nowrap">Step 4: Complete Payment</p>
      <MdiTickCircle />
      <MdiTickCircle1 />
      <MdiTickCircle2 />
      <MdiTickCircle3 />
      <MdiTickCircle4 />
      <MdiTickCircle5 />
      <MdiTickCircle6 />
      <MdiTickCircle7 />
      <MdiTickCircle8 />
      <MdiTickCircle9 />
      <MdiTickCircle10 />
      <MdiTickCircle11 />
      <MdiTickCircle12 />
      <MdiTickCircle13 />
      <MdiTickCircle14 />
      <MdiTickCircle15 />
      <MdiTickCircle16 />
      <MdiTickCircle17 />
      <MdiTickCircle18 />
      <FluentLive20Filled />
      <FluentLive20Filled1 />
      <MingcuteLiveFill />
      <MingcuteLiveFill1 />
      <div className="absolute h-[88px] left-[77px] top-[2603px] w-[956px] flex items-center gap-[40px] overflow-x-auto scrollbar-hide" data-name="tools">
        {course?.tools?.map((tool, idx) => (
          <div key={idx} className="flex flex-col items-center flex-shrink-0">
             {tool.iconUrl ? (
               <img src={tool.iconUrl} alt={tool.name} className="h-[40px] w-auto mb-2" />
             ) : (
               <div className="h-[40px] w-[40px] bg-[#f0f0f0] rounded-lg mb-2" />
             )}
             <span className="text-[12px] text-[#09263f] font-medium">{tool.name}</span>
          </div>
        ))}
      </div>
      <div className="absolute h-0 left-[72px] top-[4452px] w-[248px]">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 248 0.5">
            <line id="Line 19" stroke="var(--stroke-0, #09263F)" strokeOpacity="0.5" strokeWidth="0.5" x2="248" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[387px] top-[4452px] w-[248px]">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 248 0.5">
            <line id="Line 19" stroke="var(--stroke-0, #09263F)" strokeOpacity="0.5" strokeWidth="0.5" x2="248" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[700px] top-[4452px] w-[248px]">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 248 0.5">
            <line id="Line 19" stroke="var(--stroke-0, #09263F)" strokeOpacity="0.5" strokeWidth="0.5" x2="248" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[308px] left-[54px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[4899px] w-[436px]" data-name="certificate">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCertificate.src} />
      </div>
      <div className="absolute h-[308px] left-[535px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[4899px] w-[436px]" data-name="certificate">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCertificate1.src} />
      </div>
      <div className="absolute h-[63px] left-[45px] top-[5838px] w-[915.059px]" data-name="company logo">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgCompanyLogo.src} />
      </div>
      <Group3 />
      <div className="-translate-x-1/2 absolute h-[380px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[6664px] w-[565px]" style={{ backgroundImage: "linear-gradient(203.749457deg, rgb(215, 247, 246) 3.8424%, rgb(242, 250, 228) 97.744%)" }} />
      <div className="-translate-x-1/2 absolute flex h-[350px] items-center justify-center left-[calc(50%+478px)] top-[6680px] w-[348px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#07b3e7] h-[350px] relative rounded-bl-[201px] rounded-br-[20px] rounded-tl-[201px] rounded-tr-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] w-[348px]" />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+0.5px)] not-italic text-[#09263f] text-[40px] text-center top-[6504px] whitespace-nowrap">What Students Say About Us?</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/2 not-italic text-[18px] text-[rgba(9,38,63,0.5)] text-center top-[6575px] w-[988px]">True Stories, Transformative Career Experience</p>
      <div className="-translate-x-1/2 absolute left-1/2 size-[150px] top-[6687px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="150" src={imgEllipse92.src} width="150" />
      </div>
      <div className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-1/2 not-italic text-[#09263f] text-[0px] text-center top-[6847px] whitespace-nowrap">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[116.02999877929688%] mb-0 text-[16px] whitespace-pre">Piyush Ganar</p>
        <p className="leading-[116.02999877929688%] text-[14px] whitespace-pre">{` Class of 2012 IIM Ahmedabad`}</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[116.02999877929688%] left-1/2 not-italic text-[#09263f] text-[14px] text-center top-[6891px] whitespace-nowrap">(Assistant General Manager Sales Marketing, Findability Sciences)</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.404] left-[calc(50%+6.5px)] not-italic text-[12px] text-[rgba(9,38,63,0.5)] text-center top-[6937px] w-[525px]">The course material is very easy to understand and the case studies were based on real time business problems. What I love the most about Sumeet and his team is that they never operated the institute like a typical commercial enterprise but more like a temple for learning. The gates of Alabs are always open for students for any kind of help and guidance. I would recommend ALabs to all.</p>
      <LineMdStarFilled />
      <LineMdStarFilled1 />
      <LineMdStarFilled2 />
      <LineMdStarFilled3 />
      <LineMdStarFilled4 />
      <div className="absolute left-[93px] rounded-bl-[140px] size-[424px] top-[6606px]" data-name="image 38">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[140px] size-full" src={imgImage38.src} />
      </div>
      <div className="absolute h-[418px] left-[1022px] rounded-br-[185px] top-[6614px] w-[354px]" data-name="image 39">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-br-[185px]">
          <img alt="" className="absolute h-[102.87%] left-[-6.5%] max-w-none top-[-2.87%] w-[121.47%]" src={imgImage39.src} />
        </div>
      </div>
      <div className="absolute bg-[#f4fafa] h-[872px] left-0 top-[7179px] w-[1440px]" />
      <div className="absolute bg-white h-[481px] left-[63px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[7376px] w-[414px]" />
      <div className="absolute bg-white h-[481px] left-[509px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[7376px] w-[414px]" />
      <div className="absolute bg-white h-[481px] left-[956px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] top-[7376px] w-[414px]" />
      <div className="absolute h-[246px] left-[63px] rounded-tl-[15px] rounded-tr-[15px] top-[7376px] w-[414px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[15px] rounded-tr-[15px] size-full" src={imgRectangle51.src} />
      </div>
      <div className="absolute h-[246px] left-[509px] rounded-tl-[15px] rounded-tr-[15px] top-[7376px] w-[414px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[15px] rounded-tr-[15px] size-full" src={imgRectangle53.src} />
      </div>
      <div className="absolute h-[246px] left-[956px] rounded-tl-[15px] rounded-tr-[15px] top-[7376px] w-[414px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[15px] rounded-tr-[15px] size-full" src={imgRectangle107.src} />
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[79px] not-italic text-[16px] text-black top-[7682px] w-[328px]">Parametric vs. Non-Parametric Test: Which One to Use for Hypothesis Testing?</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[525px] not-italic text-[16px] text-black top-[7682px] w-[323px]">Parametric vs. Non-Parametric Test: Which One to Use for Hypothesis Testing?</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[972px] not-italic text-[16px] text-black top-[7682px] w-[323px]">Parametric vs. Non-Parametric Test: Which One to Use for Hypothesis Testing?</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[79px] not-italic text-[12px] text-[rgba(0,0,0,0.5)] top-[7734px] w-[364px]">Statistical tests form the backbone of data-driven decision-making. They allow analysts to move beyond intuition and evaluate claims in a measurable w...</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[525px] not-italic text-[12px] text-[rgba(0,0,0,0.5)] top-[7734px] w-[365px]">Statistical tests form the backbone of data-driven decision-making. They allow analysts to move beyond intuition and evaluate claims in a measurable w...</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[972px] not-italic text-[12px] text-[rgba(0,0,0,0.5)] top-[7734px] w-[365px]">Statistical tests form the backbone of data-driven decision-making. They allow analysts to move beyond intuition and evaluate claims in a measurable w...</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[128px] not-italic text-[12px] text-black top-[7808px] whitespace-nowrap">S. Dutta</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[574px] not-italic text-[12px] text-black top-[7808px] whitespace-nowrap">S. Dutta</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1021px] not-italic text-[12px] text-black top-[7808px] whitespace-nowrap">S. Dutta</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[401px] not-italic text-[12px] text-[rgba(0,0,0,0.5)] top-[7640px] whitespace-nowrap">9 min read</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[848px] not-italic text-[12px] text-[rgba(0,0,0,0.5)] top-[7640px] whitespace-nowrap">9 min read</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1295px] not-italic text-[12px] text-[rgba(0,0,0,0.5)] top-[7640px] whitespace-nowrap">9 min read</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[79px] not-italic text-[#4c7fd2] text-[16px] top-[7642px] whitespace-nowrap">Data Science</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[525px] not-italic text-[#ffd700] text-[16px] top-[7642px] whitespace-nowrap">Data Science</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[972px] not-italic text-[#1de5b5] text-[16px] top-[7642px] whitespace-nowrap">Data Science</p>
      <div className="absolute h-[40px] left-[79px] top-[7797px] w-[39px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 40">
          <ellipse cx="19.5" cy="20" fill="var(--fill-0, #082962)" id="Ellipse 3" rx="19.5" ry="20" />
        </svg>
      </div>
      <div className="absolute h-[40px] left-[525px] top-[7797px] w-[39px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 40">
          <ellipse cx="19.5" cy="20" fill="var(--fill-0, #082962)" id="Ellipse 3" rx="19.5" ry="20" />
        </svg>
      </div>
      <div className="absolute h-[40px] left-[972px] top-[7797px] w-[39px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 40">
          <ellipse cx="19.5" cy="20" fill="var(--fill-0, #082962)" id="Ellipse 3" rx="19.5" ry="20" />
        </svg>
      </div>
      <div className="absolute flex items-center justify-center left-[432.5px] size-[33.128px] top-[7800.4px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "1203" } as React.CSSProperties}>
        <div className="flex-none rotate-[43.46deg]">
          <HeroiconsOutlineArrowUp />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[880.56px] size-[33.128px] top-[7800.4px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "1203" } as React.CSSProperties}>
        <div className="flex-none rotate-[43.46deg]">
          <HeroiconsOutlineArrowUp1 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1327.66px] size-[33.128px] top-[7800.4px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "1203" } as React.CSSProperties}>
        <div className="flex-none rotate-[43.46deg]">
          <HeroiconsOutlineArrowUp2 />
        </div>
      </div>
      <PrimeBookmark />
      <PrimeBookmark1 />
      <PrimeBookmark2 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-1/2 not-italic text-[#09263f] text-[40px] text-center top-[7243px] whitespace-nowrap">Related Articles</p>
      <div className="-translate-x-1/2 absolute bg-[#ffd700] h-[49px] left-1/2 rounded-[1000px] top-[7929px] w-[200px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-1/2 not-italic text-[#09263f] text-[18px] text-center top-[7942px] whitespace-nowrap">Explore Blogs→</p>
      <div className="-translate-x-1/2 absolute bg-[#07b3e7] h-[350px] left-[calc(50%+5.5px)] rounded-[201px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[8197px] w-[1301px]" />
      <div className="absolute left-[733px] size-[474px] top-[8310px]">
        <div className="absolute bottom-1/2 left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 474 237">
            <path d={svgPaths.p22ecb680} fill="var(--fill-0, #7EDAFE)" id="Ellipse 76" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[857px] size-[446px] top-[8101px]" data-name="image 31">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage31.src} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-500px)] not-italic text-[36px] text-white top-[8261px] w-[535px]">{`"Unlock Insights. Enroll Now. Transform Tomorrow."`}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[220px] not-italic text-[18px] text-white top-[8371px] whitespace-nowrap">Change the course of your career now</p>
      <div className="absolute bg-[#ffd700] h-[49px] left-[220px] rounded-[1000px] top-[8428px] w-[182px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[311px] not-italic text-[#09263f] text-[18px] text-center top-[8441px] whitespace-nowrap">Contact Us</p>
      <div className="absolute bg-[#1de5b5] h-[41px] left-[66px] rounded-[80px] top-[9378px] w-[145px]" />
      <div className="absolute bg-white border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[41px] left-[302px] rounded-[80px] top-[9378px] w-[144px]" />
      <div className="absolute bg-white border-[0.5px] border-[rgba(9,38,63,0.5)] border-solid h-[41px] left-[521px] rounded-[80px] top-[9378px] w-[148px]" />
      <div className="absolute bg-[#ffd700] h-[49px] left-[786px] rounded-[1000px] top-[9302px] w-[182px]" />
      <div className="absolute bg-[#19cf9e] h-[49px] left-[66px] rounded-[1000px] top-[8851px] w-[182px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[875.5px] not-italic text-[#09263f] text-[18px] text-center top-[9315px] whitespace-nowrap">Send</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[155.5px] not-italic text-white text-[18px] text-center top-[8864px] whitespace-nowrap">Call Us</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+37px)] not-italic text-[#09263f] text-[36px] top-[8670px] whitespace-nowrap">Request a Call back</p>
      <div className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-[calc(50%-654px)] not-italic text-[#09263f] text-[36px] top-[8664px] whitespace-nowrap">
        <p className="leading-[128.33999633789062%] mb-0 whitespace-pre">{`Excited? `}</p>
        <p className="leading-[128.33999633789062%] whitespace-pre">Talk to Expert Counselor</p>
      </div>
      <div className="absolute bg-white border-[#09263f] border-[0.5px] border-solid h-[62px] left-[786px] rounded-[178px] top-[8787px] w-[494px]" />
      <div className="absolute bg-white border-[#09263f] border-[0.5px] border-solid h-[62px] left-[786px] rounded-[178px] top-[9013px] w-[494px]" />
      <div className="absolute bg-white border-[#09263f] border-[0.5px] border-solid h-[62px] left-[786px] rounded-[178px] top-[9125px] w-[494px]" />
      <div className="absolute bg-white border-[#09263f] border-[0.5px] border-solid h-[62px] left-[786px] rounded-[178px] top-[8900px] w-[197px]" />
      <div className="absolute bg-white border-[#09263f] border-[0.5px] border-solid h-[62px] left-[1017px] rounded-[178px] top-[8900px] w-[263px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[786px] not-italic text-[16px] text-black top-[8755px] whitespace-nowrap">Name</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[66px] not-italic text-[16px] text-black top-[8789px] whitespace-nowrap">To gain insights into your profile and strategize your next career move!</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[786px] not-italic text-[16px] text-black top-[8981px] whitespace-nowrap">Email</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[786px] not-italic text-[16px] text-black top-[9093px] whitespace-nowrap">Select City</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[786px] not-italic text-[16px] text-black top-[8868px] whitespace-nowrap">Code</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1017px] not-italic text-[16px] text-black top-[8868px] whitespace-nowrap">Mobile</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[819px] not-italic text-[16px] text-[rgba(0,0,0,0.5)] top-[8808px] whitespace-nowrap">Your Name</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[819px] not-italic text-[16px] text-[rgba(0,0,0,0.5)] top-[9034px] whitespace-nowrap">Your Email</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[819px] not-italic text-[16px] text-black top-[9146px] whitespace-nowrap">Bangalore</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[819px] not-italic text-[16px] text-black top-[8921px] whitespace-nowrap">+91</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[1050px] not-italic text-[16px] text-[rgba(0,0,0,0.5)] top-[8921px] whitespace-nowrap">Mobile</p>
      <div className="absolute h-[58px] left-[786px] top-[9210px] w-[209px]" data-name="image 34">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[269.23%] left-[-4.7%] max-w-none top-[-75.96%] w-[104.7%]" src={imgImage34.src} />
        </div>
      </div>
      <div className="absolute h-[347px] left-[66px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[8939px] w-[603px]" data-name="map">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMap.src} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[114px] not-italic text-[#09263f] text-[24px] top-[9334px] whitespace-nowrap">Noida</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[333px] not-italic text-[#09263f] text-[24px] top-[9339px] whitespace-nowrap">Gurgaon</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[550px] not-italic text-[#09263f] text-[24px] top-[9340px] whitespace-nowrap">Bengaluru</p>
      <div className="-translate-x-1/2 absolute flex h-[17.436px] items-center justify-center left-[139.54px] top-[9389.03px] w-[111.066px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.22deg]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative text-white text-[14px] text-center whitespace-nowrap">Get Directions→</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[17.436px] items-center justify-center left-[374.54px] top-[9389.03px] w-[111.066px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.22deg]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative text-[#09263f] text-[14px] text-center whitespace-nowrap">Get Directions→</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[17.436px] items-center justify-center left-[598.54px] top-[9389.03px] w-[111.066px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.22deg]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative text-[#09263f] text-[14px] text-center whitespace-nowrap">Get Directions→</p>
        </div>
      </div>
      <BoxiconsLocationFilled />
      <BoxiconsLocationFilled1 />
      <BoxiconsLocationFilled2 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%+0.5px)] not-italic text-[#09263f] text-[40px] text-center top-[9544px] whitespace-nowrap">Frequently Asked Questions</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/2 not-italic text-[18px] text-[rgba(9,38,63,0.5)] text-center top-[9615px] w-[988px]">Have Questions on how you benefit from the course?</p>
      <div className="absolute bg-[#19cf9e] h-[49px] left-[1040px] rounded-[1000px] top-[10741px] w-[182px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[1129.5px] not-italic text-white text-[18px] text-center top-[10754px] whitespace-nowrap">Call Us</p>
      <div className="-translate-x-1/2 absolute h-[261px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[9674px] w-[1067px]" style={{ backgroundImage: "linear-gradient(189.091777deg, rgb(215, 247, 246) 3.8424%, rgb(242, 250, 228) 97.744%)" }} />
      <div className="-translate-x-1/2 absolute bg-[#f4fafa] border-[0.5px] border-[rgba(0,0,0,0.5)] border-solid h-[82px] left-[calc(50%+0.5px)] rounded-[20px] top-[9950px] w-[1067px]" />
      <div className="-translate-x-1/2 absolute bg-[#f4fafa] border-[0.5px] border-[rgba(0,0,0,0.5)] border-solid h-[82px] left-[calc(50%+0.5px)] rounded-[20px] top-[10049px] w-[1067px]" />
      <div className="-translate-x-1/2 absolute bg-[#f4fafa] border-[0.5px] border-[rgba(0,0,0,0.5)] border-solid h-[82px] left-[calc(50%+0.5px)] rounded-[20px] top-[10148px] w-[1067px]" />
      <div className="-translate-x-1/2 absolute bg-[#f4fafa] border-[0.5px] border-[rgba(0,0,0,0.5)] border-solid h-[82px] left-[calc(50%+0.5px)] rounded-[20px] top-[10248px] w-[1067px]" />
      <div className="-translate-x-1/2 absolute bg-[#f4fafa] border-[0.5px] border-[rgba(0,0,0,0.5)] border-solid h-[82px] left-[calc(50%+0.5px)] rounded-[20px] top-[10348px] w-[1067px]" />
      <div className="-translate-x-1/2 absolute bg-[#f4fafa] border-[0.5px] border-[rgba(0,0,0,0.5)] border-solid h-[82px] left-[calc(50%+0.5px)] rounded-[20px] top-[10448px] w-[1067px]" />
      <div className="-translate-x-1/2 absolute bg-[#f4fafa] border-[0.5px] border-[rgba(0,0,0,0.5)] border-solid h-[82px] left-[calc(50%+0.5px)] rounded-[20px] top-[10548px] w-[1067px]" />
      <div className="-translate-x-1/2 absolute border-[0.5px] border-[rgba(0,0,0,0.5)] border-solid h-[133px] left-[calc(50%+0.5px)] rounded-[20px] top-[10699px] w-[1067px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[219px] not-italic text-[#09263f] text-[20px] top-[9714px] whitespace-nowrap">Does the institute offer any discounts?</p>
      {course?.faqs?.slice(0, 10).map((faq, idx) => {
        const topY = 9979 + idx * 99;
        return (
          <p key={idx} className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[219px] not-italic text-[#09263f] text-[20px] whitespace-nowrap" style={{ top: `${topY}px` }}>
            {faq.question}
          </p>
        );
      })}
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[219px] not-italic text-[#09263f] text-[20px] top-[10728px] whitespace-nowrap">Still have questions?</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[219px] not-italic text-[#09263f] text-[16px] top-[10764px] w-[749px]">Not sure which course is right for you? Talk to our program advisors and get personalized guidance on curriculum, career outcomes, and the best learning path based on your goals.</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[219px] not-italic text-[16px] text-[rgba(9,38,63,0.5)] top-[9763px] w-[927px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">We believe in delivering a high-quality learning experience at a good value for your hard-earned money. First, our fee structure is highly competitive compared to any other reputed data science institute, considering the comprehensive curriculum, actual duration in hours, and well-rounded student support. However, we offer scholarships and referral benefits based on the candidates’ profiles. To know more about the ongoing offers contact our admission counselors.</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal]">In addition, AnalytixLabs is fully transparent about pricing and offers the same price to everyone on the website. We take pride in the quality of work and want it to be a driving factor for the students to join us rather than the discount offers!</p>
      </div>
      <div className="absolute left-[1171px] size-[51px] top-[9705px]">
        <div className="absolute inset-[-31.37%_-39.22%_-47.06%_-39.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 91">
            <g filter="url(#filter0_d_1_727)" id="Ellipse 84">
              <circle cx="45.5" cy="41.5" fill="var(--fill-0, white)" r="25.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_d_1_727" width="91" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_727" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_727" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[1171px] size-[51px] top-[9967px]">
        <div className="absolute inset-[-31.37%_-39.22%_-47.06%_-39.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 91">
            <g filter="url(#filter0_d_1_727)" id="Ellipse 84">
              <circle cx="45.5" cy="41.5" fill="var(--fill-0, white)" r="25.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_d_1_727" width="91" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_727" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_727" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[1171px] size-[51px] top-[10066px]">
        <div className="absolute inset-[-31.37%_-39.22%_-47.06%_-39.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 91">
            <g filter="url(#filter0_d_1_727)" id="Ellipse 84">
              <circle cx="45.5" cy="41.5" fill="var(--fill-0, white)" r="25.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_d_1_727" width="91" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_727" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_727" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[1171px] size-[51px] top-[10165px]">
        <div className="absolute inset-[-31.37%_-39.22%_-47.06%_-39.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 91">
            <g filter="url(#filter0_d_1_727)" id="Ellipse 84">
              <circle cx="45.5" cy="41.5" fill="var(--fill-0, white)" r="25.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_d_1_727" width="91" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_727" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_727" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[1171px] size-[51px] top-[10265px]">
        <div className="absolute inset-[-31.37%_-39.22%_-47.06%_-39.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 91">
            <g filter="url(#filter0_d_1_727)" id="Ellipse 84">
              <circle cx="45.5" cy="41.5" fill="var(--fill-0, white)" r="25.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_d_1_727" width="91" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_727" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_727" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[1171px] size-[51px] top-[10365px]">
        <div className="absolute inset-[-31.37%_-39.22%_-47.06%_-39.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 91">
            <g filter="url(#filter0_d_1_727)" id="Ellipse 84">
              <circle cx="45.5" cy="41.5" fill="var(--fill-0, white)" r="25.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_d_1_727" width="91" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_727" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_727" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[1171px] size-[51px] top-[10465px]">
        <div className="absolute inset-[-31.37%_-39.22%_-47.06%_-39.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 91">
            <g filter="url(#filter0_d_1_727)" id="Ellipse 84">
              <circle cx="45.5" cy="41.5" fill="var(--fill-0, white)" r="25.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_d_1_727" width="91" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_727" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_727" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[1171px] size-[51px] top-[10565px]">
        <div className="absolute inset-[-31.37%_-39.22%_-47.06%_-39.22%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 91">
            <g filter="url(#filter0_d_1_727)" id="Ellipse 84">
              <circle cx="45.5" cy="41.5" fill="var(--fill-0, white)" r="25.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_d_1_727" width="91" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_727" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_727" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <AkarIconsCross />
      <div className="absolute flex items-center justify-center left-[1180.03px] size-[33.941px] top-[9976.03px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "1203" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <AkarIconsCross1 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1180.03px] size-[33.941px] top-[10075.03px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "1203" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <AkarIconsCross2 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1180.03px] size-[33.941px] top-[10174.03px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "1203" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <AkarIconsCross3 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1180.03px] size-[33.941px] top-[10274.03px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "1203" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <AkarIconsCross4 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1180.03px] size-[33.941px] top-[10374.03px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "1203" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <AkarIconsCross5 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1180.03px] size-[33.941px] top-[10474.03px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "1203" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <AkarIconsCross6 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1180.03px] size-[33.941px] top-[10574.03px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "1203" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <AkarIconsCross7 />
        </div>
      </div>

      {/* Sticky Sidebar Container */}
      <div className="absolute left-[967px] pointer-events-none top-[143px] w-[407px] z-20" style={{ height: "calc(6504px - 143px)" }}>
        <div className="sticky pointer-events-auto top-[100px]">
          <Group10 course={course} />
          
          {/* Includes Section */}
          <div className="absolute contents left-0 top-0">
            <div className="absolute bg-white h-[382px] left-[64px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[687px] w-[343px]" />
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[86px] not-italic text-[10px] text-[rgba(0,0,0,0.5)] top-[719px] whitespace-nowrap">Includes</p>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[111px] not-italic text-[#09263f] text-[11px] top-[733px] whitespace-nowrap">65 hrs on-demand video</p>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[111px] not-italic text-[#09263f] text-[11px] top-[757px] whitespace-nowrap">49 downloadable resources</p>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[111px] not-italic text-[#09263f] text-[11px] top-[781px] whitespace-nowrap">{`Access on mobile & TV`}</p>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[111px] not-italic text-[#09263f] text-[11px] top-[805px] whitespace-nowrap">6 capstone projects</p>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[111px] not-italic text-[#09263f] text-[11px] top-[829px] whitespace-nowrap">Certificate of completion</p>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[111px] not-italic text-[#09263f] text-[11px] top-[853px] whitespace-nowrap">8 weeks placement support</p>
            
            <div className="absolute h-0 left-[87px] top-[784px] w-[298px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 298 1">
                  <line id="Line 18" stroke="var(--stroke-0, #09263F)" strokeOpacity="0.2" x2="298" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>

            <div className="absolute bg-[#ffd700] h-[40px] left-[86px] rounded-[109px] top-[899px] w-[299px]" />
            <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[235.5px] not-italic text-[#09263f] text-[12px] text-center top-[911px] w-[187px]">Download Syllabus</p>
            
            <div className="absolute border border-[rgba(9,38,63,0.5)] border-solid h-[40px] left-[86px] rounded-[109px] top-[949px] w-[299px]" />
            <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[235.5px] not-italic text-[#09263f] text-[12px] text-center top-[961px] w-[187px]">Add to Wishlist</p>

            <div className="absolute bg-[#1de5b5] h-[40px] left-[86px] rounded-[109px] top-[999px] w-[299px]" />
            <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[235.5px] not-italic text-white text-[12px] text-center top-[1011px] w-[187px]">Sign up for Free Demo</p>

            {/* Icons adjusted for relative container */}
            <div className="absolute left-[80px] size-[22px] top-[733px]"><LineMdPlay /></div>
            <div className="absolute left-[86px] size-[19px] top-[757px]"><MaterialSymbolsDownloadRounded /></div>
            <div className="absolute left-[88px] size-[15px] top-[781px]"><IcBaselineTv /></div>
            <div className="absolute left-[88px] size-[16px] top-[805px]"><MingcuteTimeLine /></div>
            <div className="absolute left-[86px] size-[20px] top-[829px]"><MaterialSymbolsStarOutlineRounded /></div>
            <div className="absolute left-[88px] size-[16px] top-[853px]"><IxSupport /></div>
          </div>

          <div className="absolute left-0 top-[1085px]">
            <Group9 />
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[81.5px] not-italic text-[#09263f] text-[14px] text-center top-[761px] whitespace-nowrap">Overview</p>
      <div className="absolute bg-[#09263f] h-[3px] left-[48px] rounded-[21px] top-[781px] w-[66px]" />
      <div className="absolute h-[157px] left-[47px] top-[552px] w-[601px]" data-name="1 97">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img197.src} />
      </div>
      <div className="absolute bg-[#1de5b5] h-[44px] left-[63px] rounded-[109px] top-[497px] w-[193px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[164.5px] not-italic text-[#09263f] text-[14px] text-center top-[511px] whitespace-nowrap">Sign up for Demo</p>
      </div>{/* /absolute canvas */}
      </div>{/* /desktop layout */}
    </div>
  );
}