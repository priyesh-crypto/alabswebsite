"use client";

import { useEffect, useRef } from "react";

/**
 * Scales the fixed-1440px Figma page content down to fit the current viewport.
 * Uses CSS `zoom` so layout height adjusts automatically (no JS height hacks).
 * On viewports ≥ 1440px the element renders at natural size (zoom = 1).
 */
export default function FigmaScaleWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function apply() {
      if (!ref.current) return;
      const vw = window.innerWidth;
      // Figma exports are a fixed 1440px canvas. Scale them down to fit any
      // viewport narrower than 1440 — including phones and tablets — since
      // there are no dedicated mobile layouts to take over below lg.
      const scale = vw >= 1440 ? 1 : vw / 1440;
      // `zoom` is supported in all modern browsers (incl. iOS Safari 18+).
      // It reflows the layout box so the document height auto-adjusts.
      ref.current.style.zoom = String(scale);
    }

    apply();
    window.addEventListener("resize", apply);
    window.addEventListener("orientationchange", apply);
    return () => {
      window.removeEventListener("resize", apply);
      window.removeEventListener("orientationchange", apply);
    };
  }, []);

  return (
    <div ref={ref} className="lg:-mt-[68px]" style={{ transformOrigin: "top left" }}>
      {children}
    </div>
  );
}
