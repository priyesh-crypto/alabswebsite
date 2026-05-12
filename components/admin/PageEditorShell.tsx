"use client";

import { useState, useCallback } from "react";
import SectionEditor, { type SectionRow } from "./SectionEditor";
import PreviewFrame from "./PreviewFrame";

type Props = {
  pageSlug: string;
  sections: SectionRow[];
};

export default function PageEditorShell({ pageSlug, sections }: Props) {
  const [refreshKey, setRefreshKey] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  const handleRefreshPreview = useCallback(() => {
    setRefreshKey(k => k + 1);
  }, []);

  return (
    <div>
      {/* Mobile preview toggle */}
      <div className="flex items-center gap-2 mb-4 xl:hidden">
        <button
          type="button"
          onClick={() => setShowPreview(false)}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold transition ${
            !showPreview ? "bg-[#09263f] text-white" : "bg-white border border-gray-200 text-gray-600"
          }`}
        >
          Edit sections
        </button>
        <button
          type="button"
          onClick={() => setShowPreview(true)}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold transition ${
            showPreview ? "bg-[#09263f] text-white" : "bg-white border border-gray-200 text-gray-600"
          }`}
        >
          Preview
        </button>
      </div>

      {/* Desktop: side-by-side. Mobile: stacked, toggle between panels. */}
      <div className="xl:grid xl:grid-cols-[1fr_520px] xl:gap-6 xl:items-start">
        {/* Section accordion — hidden on mobile when preview is shown */}
        <div className={`flex flex-col gap-4 ${showPreview ? "hidden xl:flex" : "flex"}`}>
          <SectionEditor sections={sections} onRefreshPreview={handleRefreshPreview} />
        </div>

        {/* Preview — hidden on mobile when editor is shown */}
        <div className={`xl:sticky xl:top-4 ${showPreview ? "block" : "hidden xl:block"}`}>
          <PreviewFrame pageSlug={pageSlug} refreshKey={refreshKey} />
        </div>
      </div>
    </div>
  );
}
