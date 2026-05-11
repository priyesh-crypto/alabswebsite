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

  const handleRefreshPreview = useCallback(() => {
    setRefreshKey(k => k + 1);
  }, []);

  return (
    <div className="grid grid-cols-[1fr_520px] gap-6 items-start">
      {/* Left: section accordion */}
      <div className="flex flex-col gap-4">
        <SectionEditor sections={sections} onRefreshPreview={handleRefreshPreview} />
      </div>

      {/* Right: live preview */}
      <div className="sticky top-4">
        <PreviewFrame pageSlug={pageSlug} refreshKey={refreshKey} />
      </div>
    </div>
  );
}
