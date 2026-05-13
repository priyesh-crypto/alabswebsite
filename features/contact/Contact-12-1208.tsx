import svgPaths from "./svg-xiqmk5opbh";

import imgMap from "./0f09e2ed0d672b0cd94cd4f710d6ab82f1636f25.png";
import imgMap1 from "./3b9dcae972bdfdca3a49ac75144ceb7b25fa17a2.png";
import imgMap2 from "./87df979eba7d15bfd3a8c46d4012eb50b8337c53.png";
import imgImage31 from "./996a7650d39df9f9d0c4aaa0e42c2b485c8b991a.png";
import { imgGroup } from "./svg-dr74c";
import Link from "next/link";
import type { NavItem, Office, SiteSettings } from "@/lib/api-client";
import {
  ContactCallbackFormDesktop,
  ContactCallbackFormMobile,
} from "./ContactCallbackForm";

function mapsUrl(office: Office | undefined, fallbackCity: string) {
  if (office?.directionsUrl) return office.directionsUrl;
  const query = office
    ? [office.addressLine1, office.addressLine2, office.city].filter(Boolean).join(", ")
    : fallbackCity;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query || fallbackCity)}`;
}

function telHref(phone: string | null | undefined) {
  return `tel:${(phone ?? "").replace(/[^\d+]/g, "")}`;
}

type ContactProps = {
  topNav?: NavItem[];
  footerLinks?: NavItem[];
  footerCities?: NavItem[];
  offices?: Office[];
  siteSettings?: SiteSettings | null;
  pageBlocks?: any;
};

function resolvePath(obj: any, path: string) {
  return path.split('.').reduce((o, p) => (o ? o[p] : undefined), obj);
}
function block(p: ContactProps, key: string): string | undefined {
  const blocks = p.pageBlocks?.blocks as Record<string, unknown> | undefined;
  if (!blocks) return undefined;
  const v = resolvePath(blocks, key) ?? blocks[key];
  return typeof v === "string" ? v : undefined;
}

function Group7() {
  return (
    <div className="absolute h-[100px] left-[147px] top-[173px] w-[147px]">
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

function Group8() {
  return (
    <div className="absolute h-[100px] left-[1147px] top-[117px] w-[147px]">
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



function IcRoundEmail() {
  return (
    <div className="absolute left-[211px] size-[43px] top-[514px]" data-name="ic:round-email">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 43">
        <g id="ic:round-email">
          <path d={svgPaths.p1e04fc00} fill="var(--fill-0, #09263F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[9.02%_9.04%_0.78%_7.77%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.4451 35.1787">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1e6ddc00} fill="var(--fill-0, #09263F)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcutePhoneFill() {
  return (
    <div className="absolute left-[213px] overflow-clip size-[39px] top-[641px]" data-name="mingcute:phone-fill">
      <Group />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Mask group">
      <div className="absolute inset-[-3.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.5 34.5">
          <g id="Mask group">
            <mask height="35" id="mask0_8_809" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="35" x="0" y="0">
              <g id="Group">
                <g id="Group_2">
                  <path d={svgPaths.p3f4dd500} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.pd9eb700} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </g>
            </mask>
            <g mask="url(#mask0_8_809)">
              <path d={svgPaths.p26d44580} fill="var(--fill-0, #09263F)" id="Vector_3" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkSolidTime() {
  return (
    <div className="absolute left-[213px] overflow-clip size-[39px] top-[767px]" data-name="icon-park-solid:time">
      <MaskGroup />
    </div>
  );
}

function BoxiconsLocationFilled() {
  return (
    <div className="absolute left-[121px] size-[24px] top-[1266px]" data-name="boxicons:location-filled">
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
    <div className="absolute left-[561px] size-[24px] top-[1266px]" data-name="boxicons:location-filled">
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
    <div className="absolute left-[1001px] size-[24px] top-[1266px]" data-name="boxicons:location-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="boxicons:location-filled">
          <path d={svgPaths.p39f2f380} fill="var(--fill-0, #09263F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[9.02%_9.04%_0.78%_7.77%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1343 20.7464">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pcefa100} fill="var(--fill-0, #09263F)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcutePhoneFill1() {
  return (
    <div className="absolute left-[122px] overflow-clip size-[23px] top-[1343px]" data-name="mingcute:phone-fill">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[9.02%_9.04%_0.78%_7.77%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1343 20.7464">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pcefa100} fill="var(--fill-0, #09263F)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcutePhoneFill2() {
  return (
    <div className="absolute left-[562px] overflow-clip size-[23px] top-[1343px]" data-name="mingcute:phone-fill">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[9.02%_9.04%_0.78%_7.77%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1343 20.7464">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pcefa100} fill="var(--fill-0, #09263F)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcutePhoneFill3() {
  return (
    <div className="absolute left-[1002px] overflow-clip size-[23px] top-[1343px]" data-name="mingcute:phone-fill">
      <Group3 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Mask group">
      <div className="absolute inset-[-5.45%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3333 20.3333">
          <g id="Mask group">
            <mask height="21" id="mask0_8_793" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="21" x="0" y="0">
              <g id="Group">
                <g id="Group_2">
                  <path d={svgPaths.p24a25e00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2dca7f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </g>
            </mask>
            <g mask="url(#mask0_8_793)">
              <path d={svgPaths.p9a98580} fill="var(--fill-0, #09263F)" id="Vector_3" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkSolidTime1() {
  return (
    <div className="absolute left-[122px] overflow-clip size-[22px] top-[1421px]" data-name="icon-park-solid:time">
      <MaskGroup1 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Mask group">
      <div className="absolute inset-[-5.45%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3333 20.3333">
          <g id="Mask group">
            <mask height="21" id="mask0_8_793" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="21" x="0" y="0">
              <g id="Group">
                <g id="Group_2">
                  <path d={svgPaths.p24a25e00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2dca7f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </g>
            </mask>
            <g mask="url(#mask0_8_793)">
              <path d={svgPaths.p9a98580} fill="var(--fill-0, #09263F)" id="Vector_3" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkSolidTime2() {
  return (
    <div className="absolute left-[562px] overflow-clip size-[22px] top-[1421px]" data-name="icon-park-solid:time">
      <MaskGroup2 />
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Mask group">
      <div className="absolute inset-[-5.45%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3333 20.3333">
          <g id="Mask group">
            <mask height="21" id="mask0_8_793" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="21" x="0" y="0">
              <g id="Group">
                <g id="Group_2">
                  <path d={svgPaths.p24a25e00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2dca7f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </g>
            </mask>
            <g mask="url(#mask0_8_793)">
              <path d={svgPaths.p9a98580} fill="var(--fill-0, #09263F)" id="Vector_3" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkSolidTime3() {
  return (
    <div className="absolute left-[1002px] overflow-clip size-[22px] top-[1421px]" data-name="icon-park-solid:time">
      <MaskGroup3 />
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

function Group9({ siteSettings }: { siteSettings?: SiteSettings | null }) {
  const phone = siteSettings?.contactPhone ?? "+91 9555219007";
  return (
    <div className="absolute contents left-[66px] top-[138px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[116px] not-italic text-[#09263f] text-[16px] top-[150px] whitespace-nowrap">{phone}</p>
      <div className="absolute border border-[rgba(9,38,63,0.3)] border-solid h-[40px] left-[66px] rounded-[56px] top-[138px] w-[206px]" />
      <FamiconsCall />
      <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} aria-label="Call us" className="absolute left-[66px] top-[138px] h-[40px] w-[206px] rounded-[56px]" />
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

export default function Contact(props: ContactProps) {
  const { topNav, footerLinks, footerCities, offices, siteSettings } = props;
  const o = offices ?? [];
  return (
    <div className="bg-white relative w-full overflow-x-hidden flex flex-col items-center" data-name="Contact">

      {/* ═══ MOBILE LAYOUT (hidden on lg+) ═══ */}
      <div className="block lg:hidden w-full">
        {/* Page heading */}
        <section className="bg-[#f4fafa] px-5 py-8 text-center">
          <h1 
            className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-[32px]"
            dangerouslySetInnerHTML={{ __html: block(props, "contact_hero.headline_html") ?? "CONTACT US" }}
          />
          <p className="text-sm text-[#09263f]/50 mt-2">{block(props, "contact_hero.subtitle") ?? "Analytixlabs is here to support you at every step of your journey."}</p>
        </section>

        {/* Get in touch info */}
        <section className="bg-[#07b3e7] px-5 py-8 text-white">
          <h2 className="font-semibold text-2xl mb-4">Get in touch</h2>
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-lg font-semibold mb-0.5">Email</p>
              <a href={`mailto:${siteSettings?.contactEmail ?? "info@analytixlabs.co.in"}`} className="text-base text-white/90">{siteSettings?.contactEmail ?? "info@analytixlabs.co.in"}</a>
            </div>
            <div>
              <p className="text-lg font-semibold mb-0.5">Phone no.</p>
              <a href={`tel:${siteSettings?.contactPhone ?? "+919555219007"}`} className="text-base text-white/90">{siteSettings?.contactPhone ?? "+91 95552 19007"}</a>
            </div>
            <div>
              <p className="text-lg font-semibold mb-0.5">Timing</p>
              <p className="text-base text-white/90">10:00 AM TO 07:00 PM</p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="font-semibold text-2xl mb-3">Sign up for demo</h2>
            <Link href="/courses" className="inline-flex items-center justify-center bg-[#ffd700] h-12 px-6 rounded-full font-semibold text-[#09263f] text-sm">Sign up →</Link>
          </div>
        </section>

        {/* Request callback form */}
        <section className="bg-white px-5 py-8">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-xl mb-6">Request a Call back</h2>
          <ContactCallbackFormMobile />
        </section>

        {/* Office map cards */}
        <section className="bg-[#f4fafa] px-5 py-8">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#09263f] text-xl mb-5">Our Offices</h2>
          <div className="flex flex-col gap-5">
            {(o.length ? o.map(office => ({
              city: office.city,
              address: [office.addressLine1, office.addressLine2].filter(Boolean).join(", "),
              phone: office.phone,
            })) : [
              { city: "Noida", address: "Sector 62, Noida, UP", phone: siteSettings?.contactPhone ?? "+91 95552 19007" },
              { city: "Gurgaon", address: "Sector 44, Gurgaon, Haryana", phone: siteSettings?.contactPhone ?? "+91 95552 19007" },
              { city: "Bangalore", address: "Koramangala, Bangalore, Karnataka", phone: siteSettings?.contactPhone ?? "+91 95552 19007" },
            ]).map((office, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-sm">
                <h3 className="font-semibold text-[#09263f] text-base mb-1">{office.city ?? `Office ${i + 1}`}</h3>
                <p className="text-sm text-[#09263f]/60 mb-3">{office.address ?? ""}</p>
                {office.phone && <a href={`tel:${office.phone}`} className="text-sm text-[#19cf9e] font-semibold">{office.phone}</a>}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-[#094c80] from-[13%] to-[#2096cb] py-10 px-6">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-xl leading-snug mb-2">{`"Unlock Insights. Enroll Now. Transform Tomorrow."`}</p>
          <p className="text-white/70 text-sm mb-6">Change the course of your career now</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#ffd700] h-12 px-6 rounded-full font-semibold text-[#09263f] text-sm">Contact Us</Link>
        </section>
      </div>{/* /mobile layout */}

      {/* ═══ DESKTOP LAYOUT (hidden below lg) ═══ */}
      <div className="hidden lg:flex w-full flex-col items-center">
      {/* Full-width backgrounds */}
      <div className="absolute bg-[#f4fafa] h-[335px] top-[64px] w-screen left-1/2 -translate-x-1/2" />
      <p 
        className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-1/2 not-italic text-[#09263f] text-[42px] text-center top-[176px] w-[798px]"
        dangerouslySetInnerHTML={{ __html: block(props, "contact_hero.headline_html") ?? "CONTACT US" }}
      />

      {/* Main absolute canvas (locked to 1440px) */}
      <div className="relative w-[1440px] h-[2328px] flex-shrink-0">
        <ContactCallbackFormDesktop />
        <Group7 />
        <Group8 />
        <div className="-translate-x-1/2 absolute bg-white h-[717px] left-1/2 rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[319px] w-[1134px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+0.5px)] not-italic text-[14px] text-[rgba(9,38,63,0.5)] text-center top-[251px] w-[481px]">{block(props, "contact_hero.subtitle") ?? "Analytixlabs is here to support you at every step of your journey."}</p>
      <div className="absolute bg-[#07b3e7] h-[717px] left-[150px] rounded-bl-[15px] rounded-tl-[15px] top-[319px] w-[501px]" />
      <div className="absolute bg-[#ffd700] h-[49px] left-[714px] rounded-[1000px] top-[916px] w-[494px]" />
      <div className="absolute bg-[#1de5b5] h-[49px] left-[197px] rounded-[1000px] top-[926px] w-[182px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[961.5px] not-italic text-[#09263f] text-[18px] text-center top-[929px] whitespace-nowrap">Send</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[286.5px] not-italic text-white text-[18px] text-center top-[939px] whitespace-nowrap">Sign up→</p>
      <Link href="/courses" aria-label="Sign up for demo" className="absolute left-[197px] top-[926px] h-[49px] w-[182px] rounded-[1000px] z-20" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-6px)] not-italic text-[#09263f] text-[28px] top-[373px] whitespace-nowrap">Request a Call back</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-523px)] not-italic text-[28px] text-white top-[360px] whitespace-nowrap">Get in touch</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-523px)] not-italic text-[28px] text-white top-[870px] whitespace-nowrap">Sign up for demo</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[197px] not-italic text-[16px] text-white top-[421px] w-[424px]">Get in touch with our team to explore solutions, training, or partnerships—we’re here to help.</p>
      <a href={`mailto:${siteSettings?.contactEmail ?? "info@analytixlabs.co.in"}`} className="contents"><p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[291px] not-italic text-[16px] text-white top-[542px] whitespace-nowrap hover:underline">{siteSettings?.contactEmail ?? "info@analytixlabs.co.in"}</p></a>
      <a href={`tel:${(siteSettings?.contactPhone ?? "+91 95552 19007").replace(/\s+/g, "")}`} className="contents"><p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[291px] not-italic text-[16px] text-white top-[667px] whitespace-nowrap hover:underline">{siteSettings?.contactPhone ?? "+91 95552 19007"}</p></a>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[291px] not-italic text-[16px] text-white top-[792px] whitespace-nowrap">10:00 AM TO 07:00 PM</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[291px] not-italic text-[20px] text-white top-[511px] whitespace-nowrap">Email</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[291px] not-italic text-[20px] text-white top-[636px] whitespace-nowrap">Phone no.</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[291px] not-italic text-[20px] text-white top-[761px] whitespace-nowrap">Timing</p>

      <div className="absolute h-[72px] left-[197px] top-[500px] w-[71px]">
        <div className="absolute inset-[-22.22%_-28.17%_-33.33%_-28.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111 112">
            <g filter="url(#filter0_d_8_820)" id="Ellipse 105">
              <ellipse cx="55.5" cy="52" fill="var(--fill-0, white)" rx="35.5" ry="36" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="112" id="filter0_d_8_820" width="111" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_820" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_820" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[72px] left-[197px] top-[625px] w-[71px]">
        <div className="absolute inset-[-22.22%_-28.17%_-33.33%_-28.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111 112">
            <g filter="url(#filter0_d_8_820)" id="Ellipse 105">
              <ellipse cx="55.5" cy="52" fill="var(--fill-0, white)" rx="35.5" ry="36" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="112" id="filter0_d_8_820" width="111" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_820" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_820" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[72px] left-[197px] top-[751px] w-[71px]">
        <div className="absolute inset-[-22.22%_-28.17%_-33.33%_-28.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111 112">
            <g filter="url(#filter0_d_8_820)" id="Ellipse 105">
              <ellipse cx="55.5" cy="52" fill="var(--fill-0, white)" rx="35.5" ry="36" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="112" id="filter0_d_8_820" width="111" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_820" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_820" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <IcRoundEmail />
      <MingcutePhoneFill />
      <IconParkSolidTime />
      <div className="absolute bg-[#d2faf0] h-[496px] left-[74px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[1172px] w-[412px]" />
      <div className="absolute bg-[#fffad2] h-[496px] left-[514px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[1172px] w-[412px]" />
      <div className="absolute bg-[#fff2fa] h-[496px] left-[954px] rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[1172px] w-[412px]" />
      <div className="absolute h-[191px] left-[75px] rounded-bl-[15px] rounded-br-[15px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] top-[1477px] w-[411px]" data-name="map">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[15px] rounded-br-[15px] size-full" src={imgMap.src} />
      </div>
      <div className="absolute h-[191px] left-[514px] rounded-bl-[15px] rounded-br-[15px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] top-[1477px] w-[412px]" data-name="map">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[15px] rounded-br-[15px] size-full" src={imgMap1.src} />
      </div>
      <div className="absolute h-[191px] left-[954px] rounded-bl-[15px] rounded-br-[15px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] top-[1477px] w-[412px]" data-name="map">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[15px] rounded-br-[15px] size-full" src={imgMap2.src} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[114px] not-italic text-[#09263f] text-[24px] top-[1206px] whitespace-nowrap">{o[0]?.city ?? "Noida"}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[554px] not-italic text-[#09263f] text-[24px] top-[1206px] whitespace-nowrap">{o[1]?.city ?? "Gurgaon"}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[994px] not-italic text-[#09263f] text-[24px] top-[1206px] whitespace-nowrap">{o[2]?.city ?? "Bengaluru"}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[164px] not-italic text-[16px] text-[rgba(9,38,63,0.5)] top-[1259px] w-[289px]">{o[0]?.addressLine1 ?? "1st Floor, A78, A Block, Sector 2, Metro Gate 3, Noida, UP 201301."}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[604px] not-italic text-[16px] text-[rgba(9,38,63,0.5)] top-[1259px] w-[289px]">{o[1]?.addressLine1 ?? "Sidhartha House, 2nd Floor, Plot 6, near HUDA City Metro, Sector 44, Gurugram, Haryana 122003"}</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[1044px] not-italic text-[16px] text-[rgba(9,38,63,0.5)] top-[1259px] w-[305px]">
        <p className="leading-[normal] mb-0">Backgate, BDA Complex, Bldg 51/2, 1st floor, 12th Main Rd, opp. A2B, Sector 6, HSR Layout, Bengaluru, Karnataka 560102</p>
        <p className="leading-[normal]">​</p>
      </div>
      <a href={telHref(o[0]?.phone ?? "+91 95552 19007")} className="contents"><p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[164px] not-italic text-[16px] text-[rgba(9,38,63,0.5)] top-[1347px] w-[289px] hover:underline">{o[0]?.phone ?? "+91 95552 19007"}</p></a>
      <a href={telHref(o[1]?.phone ?? "+91 95552 19007")} className="contents"><p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[604px] not-italic text-[16px] text-[rgba(9,38,63,0.5)] top-[1347px] w-[289px] hover:underline">{o[1]?.phone ?? "+91 95552 19007"}</p></a>
      <a href={telHref(o[2]?.phone ?? "+91 95552 19007")} className="contents"><p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1044px] not-italic text-[16px] text-[rgba(9,38,63,0.5)] top-[1347px] w-[289px] hover:underline">{o[2]?.phone ?? "+91 95552 19007"}</p></a>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[164px] not-italic text-[16px] text-[rgba(9,38,63,0.5)] top-[1424px] w-[289px]">{o[0]?.hours ?? "10:00 AM to 07:00 PM"}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[604px] not-italic text-[16px] text-[rgba(9,38,63,0.5)] top-[1424px] w-[289px]">{o[1]?.hours ?? "10:00 AM to 07:00 PM"}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1044px] not-italic text-[16px] text-[rgba(9,38,63,0.5)] top-[1424px] w-[289px]">{o[2]?.hours ?? "10:00 AM to 07:00 PM"}</p>
      <div className="absolute left-[114px] size-[38px] top-[1259px]">
        <div className="absolute inset-[-42.11%_-52.63%_-63.16%_-52.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 78">
            <g filter="url(#filter0_d_8_804)" id="Ellipse 108">
              <circle cx="39" cy="35" fill="var(--fill-0, white)" r="19" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="78" id="filter0_d_8_804" width="78" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_804" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_804" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[554px] size-[38px] top-[1259px]">
        <div className="absolute inset-[-42.11%_-52.63%_-63.16%_-52.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 78">
            <g filter="url(#filter0_d_8_804)" id="Ellipse 108">
              <circle cx="39" cy="35" fill="var(--fill-0, white)" r="19" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="78" id="filter0_d_8_804" width="78" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_804" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_804" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[994px] size-[38px] top-[1259px]">
        <div className="absolute inset-[-42.11%_-52.63%_-63.16%_-52.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 78">
            <g filter="url(#filter0_d_8_804)" id="Ellipse 108">
              <circle cx="39" cy="35" fill="var(--fill-0, white)" r="19" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="78" id="filter0_d_8_804" width="78" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_804" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_804" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[114px] size-[38px] top-[1336px]">
        <div className="absolute inset-[-42.11%_-52.63%_-63.16%_-52.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 78">
            <g filter="url(#filter0_d_8_804)" id="Ellipse 108">
              <circle cx="39" cy="35" fill="var(--fill-0, white)" r="19" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="78" id="filter0_d_8_804" width="78" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_804" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_804" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[554px] size-[38px] top-[1336px]">
        <div className="absolute inset-[-42.11%_-52.63%_-63.16%_-52.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 78">
            <g filter="url(#filter0_d_8_804)" id="Ellipse 108">
              <circle cx="39" cy="35" fill="var(--fill-0, white)" r="19" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="78" id="filter0_d_8_804" width="78" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_804" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_804" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[994px] size-[38px] top-[1336px]">
        <div className="absolute inset-[-42.11%_-52.63%_-63.16%_-52.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 78">
            <g filter="url(#filter0_d_8_804)" id="Ellipse 108">
              <circle cx="39" cy="35" fill="var(--fill-0, white)" r="19" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="78" id="filter0_d_8_804" width="78" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_804" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_804" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[114px] size-[38px] top-[1413px]">
        <div className="absolute inset-[-42.11%_-52.63%_-63.16%_-52.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 78">
            <g filter="url(#filter0_d_8_804)" id="Ellipse 108">
              <circle cx="39" cy="35" fill="var(--fill-0, white)" r="19" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="78" id="filter0_d_8_804" width="78" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_804" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_804" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[554px] size-[38px] top-[1413px]">
        <div className="absolute inset-[-42.11%_-52.63%_-63.16%_-52.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 78">
            <g filter="url(#filter0_d_8_804)" id="Ellipse 108">
              <circle cx="39" cy="35" fill="var(--fill-0, white)" r="19" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="78" id="filter0_d_8_804" width="78" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_804" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_804" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[994px] size-[38px] top-[1413px]">
        <div className="absolute inset-[-42.11%_-52.63%_-63.16%_-52.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 78">
            <g filter="url(#filter0_d_8_804)" id="Ellipse 108">
              <circle cx="39" cy="35" fill="var(--fill-0, white)" r="19" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="78" id="filter0_d_8_804" width="78" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_804" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_804" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <a href={mapsUrl(o[0], "Noida")} target="_blank" rel="noopener noreferrer" className="contents">
        <div className="-translate-x-1/2 absolute flex h-[19.495px] items-center justify-center left-[390.04px] top-[1211px] w-[126.074px] cursor-pointer" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
          <div className="flex-none rotate-[0.22deg]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative text-[#09263f] text-[16px] text-center whitespace-nowrap hover:underline">Get Directions→</p>
          </div>
        </div>
      </a>
      <a href={mapsUrl(o[1], "Gurgaon")} target="_blank" rel="noopener noreferrer" className="contents">
        <div className="-translate-x-1/2 absolute flex h-[19.495px] items-center justify-center left-[830.04px] top-[1211px] w-[126.074px] cursor-pointer" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
          <div className="flex-none rotate-[0.22deg]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative text-[#09263f] text-[16px] text-center whitespace-nowrap hover:underline">Get Directions→</p>
          </div>
        </div>
      </a>
      <a href={mapsUrl(o[2], "Bengaluru")} target="_blank" rel="noopener noreferrer" className="contents">
        <div className="-translate-x-1/2 absolute flex h-[19.495px] items-center justify-center left-[1270.04px] top-[1211px] w-[126.074px] cursor-pointer" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
          <div className="flex-none rotate-[0.22deg]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative text-[#09263f] text-[16px] text-center whitespace-nowrap hover:underline">Get Directions→</p>
          </div>
        </div>
      </a>
      <BoxiconsLocationFilled />
      <BoxiconsLocationFilled1 />
      <BoxiconsLocationFilled2 />
      <MingcutePhoneFill1 />
      <MingcutePhoneFill2 />
      <MingcutePhoneFill3 />
      <IconParkSolidTime1 />
      <IconParkSolidTime2 />
      <IconParkSolidTime3 />
      <div className="-translate-x-1/2 absolute bg-[#07b3e7] h-[350px] left-[calc(50%+5.5px)] rounded-[201px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[1874px] w-[1301px]" />
      <div className="absolute left-[733px] size-[474px] top-[1987px]">
        <div className="absolute bottom-1/2 left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 474 237">
            <path d={svgPaths.p22ecb680} fill="var(--fill-0, #7EDAFE)" id="Ellipse 76" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[857px] size-[446px] top-[1778px]" data-name="image 31">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage31.src} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(50%-500px)] not-italic text-[36px] text-white top-[1938px] w-[535px]">{`"Unlock Insights. Enroll Now. Transform Tomorrow."`}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[220px] not-italic text-[18px] text-white top-[2048px] whitespace-nowrap">Change the course of your career now</p>
      <div className="absolute bg-[#ffd700] h-[49px] left-[220px] rounded-[1000px] top-[2105px] w-[182px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[311px] not-italic text-[#09263f] text-[18px] text-center top-[2118px] whitespace-nowrap">Contact Us</p>
      <div className="absolute bg-white border-[#09263f] border-[0.5px] border-solid h-[62px] left-[719px] rounded-[178px] top-[472px] w-[494px]" />
      <div className="absolute bg-white border-[#09263f] border-[0.5px] border-solid h-[62px] left-[719px] rounded-[178px] top-[698px] w-[494px]" />
      <div className="absolute bg-white border-[#09263f] border-[0.5px] border-solid h-[62px] left-[719px] rounded-[178px] top-[810px] w-[494px]" />
      <div className="absolute bg-white border-[#09263f] border-[0.5px] border-solid h-[62px] left-[719px] rounded-[178px] top-[585px] w-[197px]" />
      <div className="absolute bg-white border-[#09263f] border-[0.5px] border-solid h-[62px] left-[950px] rounded-[178px] top-[585px] w-[263px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[719px] not-italic text-[16px] text-black top-[440px] whitespace-nowrap">Name</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[719px] not-italic text-[16px] text-black top-[666px] whitespace-nowrap">Email</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[719px] not-italic text-[16px] text-black top-[778px] whitespace-nowrap">Select City</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[719px] not-italic text-[16px] text-black top-[553px] whitespace-nowrap">Code</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[950px] not-italic text-[16px] text-black top-[553px] whitespace-nowrap">Mobile</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[752px] not-italic text-[16px] text-[rgba(0,0,0,0.5)] top-[493px] whitespace-nowrap">Your Name</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[752px] not-italic text-[16px] text-[rgba(0,0,0,0.5)] top-[719px] whitespace-nowrap">Your Email</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[752px] not-italic text-[16px] text-black top-[606px] whitespace-nowrap">+91</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[983px] not-italic text-[16px] text-[rgba(0,0,0,0.5)] top-[606px] whitespace-nowrap">Mobile</p>
      </div>{/* /absolute canvas */}
      </div>{/* /desktop layout */}

    </div>
  );
}