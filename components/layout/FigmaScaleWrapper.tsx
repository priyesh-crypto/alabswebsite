"use client";

import { useEffect, useRef } from "react";

/**
 * Each Figma page component owns an internal `block xl:hidden` mobile/tablet
 * layout that renders natively below 1280px (xl). Above xl, the page's
 * fixed-1440px absolute canvas takes over. This wrapper only scales that
 * desktop canvas — and only when the viewport is narrower than 1440. Below xl,
 * the wrapper is a no-op so the on-brand mobile/tablet layout reaches the user
 * at native size.
 */
export default function FigmaScaleWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function apply() {
      if (!ref.current) return;
      const vw = window.innerWidth;
      const LG = 1024; // Tablet threshold
      const DESIGN_WIDTH = 1440;
      let scale = 1;

      // Use the ratio to scale desktop layout for anything above LG (1024px)
      if (vw >= LG && vw < DESIGN_WIDTH) {
        scale = vw / DESIGN_WIDTH;
      }

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
