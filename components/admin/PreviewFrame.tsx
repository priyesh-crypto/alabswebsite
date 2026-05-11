"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  pageSlug: string; // "landing" | "courses" | "course/data-science"
  refreshKey?: number;
};

const PUBLIC_PATH: Record<string, string> = {
  landing: "/",
  courses: "/courses",
};

function getPublicPath(pageSlug: string): string {
  if (PUBLIC_PATH[pageSlug]) return PUBLIC_PATH[pageSlug];
  if (pageSlug.startsWith("course/")) return `/courses/${pageSlug.slice(7)}`;
  return "/";
}

export default function PreviewFrame({ pageSlug, refreshKey }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");
  const src = `/admin/preview/${pageSlug}`;

  // Reload iframe when refreshKey changes
  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = src;
    }
  }, [refreshKey, src]);

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex items-center justify-between px-1">
        <a
          href={getPublicPath(pageSlug)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#1de5b5] hover:underline"
        >
          View public page ↗
        </a>
        <div className="flex gap-1 border border-gray-200 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => setViewport("desktop")}
            className={`px-3 py-1.5 text-xs font-semibold transition ${
              viewport === "desktop" ? "bg-[#09263f] text-white" : "bg-white text-gray-500 hover:bg-gray-50"
            }`}
          >
            Desktop
          </button>
          <button
            type="button"
            onClick={() => setViewport("mobile")}
            className={`px-3 py-1.5 text-xs font-semibold transition ${
              viewport === "mobile" ? "bg-[#09263f] text-white" : "bg-white text-gray-500 hover:bg-gray-50"
            }`}
          >
            Mobile
          </button>
        </div>
      </div>

      <div
        className="flex-1 bg-gray-100 rounded-xl overflow-hidden flex items-start justify-center border border-gray-200"
        style={{ minHeight: 600 }}
      >
        <div
          className="bg-white h-full overflow-hidden transition-all duration-300"
          style={{ width: viewport === "desktop" ? "100%" : "390px" }}
        >
          <iframe
            ref={iframeRef}
            src={src}
            title="Page preview"
            className="w-full h-full border-0"
            style={{ height: 800, minHeight: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
