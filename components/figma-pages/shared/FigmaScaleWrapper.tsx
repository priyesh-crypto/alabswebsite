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
      // Below lg (1024px) the mobile layouts take over — no zoom needed.
      // Between lg and 1440px the desktop canvas needs to shrink to fit.
      const scale = vw < 1024 ? 1 : vw >= 1440 ? 1 : vw / 1440;
      ref.current.style.zoom = String(scale);
    }

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  return (
    <div ref={ref} style={{ transformOrigin: "top left" }}>
      {children}
    </div>
  );
}
