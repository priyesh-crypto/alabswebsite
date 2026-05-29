"use client";

/**
 * SectionEditor — renders one accordion item per Section row.
 * The form content is dispatched by section type to the appropriate
 * AdminForm component registered in /components/admin/sections/.
 *
 * Save draft   → PATCH /api/admin/sections/[id]
 * Publish      → POST  /api/admin/sections/[id]/publish
 * Revert       → POST  /api/admin/sections/[id]/revert
 */

import { useState, useCallback } from "react";
import Link from "next/link";
import { getSectionDef } from "@/lib/sections/index";
import HeroLandingForm from "./sections/HeroLandingForm";
import LeadCardsForm from "./sections/LeadCardsForm";
import TestimonialsCarouselForm from "./sections/TestimonialsCarouselForm";
import FaqsSectionForm from "./sections/FaqsSectionForm";
import HiringPartnersSectionForm from "./sections/HiringPartnersSectionForm";
import CategoryPillsForm from "./sections/CategoryPillsForm";
import LearningModesSectionForm from "./sections/LearningModesSectionForm";
import InstituteIntroForm from "./sections/InstituteIntroForm";
import CoursesChallengeForm from "./sections/CoursesChallengeForm";
import HeroSimpleForm from "./sections/HeroSimpleForm";
import CoursesGridForm from "./sections/CoursesGridForm";
import RelatedArticlesForm from "./sections/RelatedArticlesForm";
import PdpOverviewForm from "./sections/PdpOverviewForm";
import PdpCurriculumForm from "./sections/PdpCurriculumForm";
import PdpCertificationForm from "./sections/PdpCertificationForm";
import PdpCareerSupportForm from "./sections/PdpCareerSupportForm";
import PdpHowToApplyForm from "./sections/PdpHowToApplyForm";

export type SectionRow = {
  id: string;
  type: string;
  label: string;
  order: number;
  isVisible: boolean;
  contentDraft: Record<string, unknown>;
  contentPublished: Record<string, unknown> | null;
  updatedAt: string;
};

// Map section type → form component
const FORM_REGISTRY: Record<string, React.ComponentType<FormProps>> = {
  hero_landing: HeroLandingForm,
  lead_cards: LeadCardsForm,
  testimonials_carousel: TestimonialsCarouselForm,
  faqs: FaqsSectionForm,
  hiring_partners: HiringPartnersSectionForm,
  category_pills: CategoryPillsForm,
  learning_modes: LearningModesSectionForm,
  institute_intro: InstituteIntroForm,
  courses_challenge: CoursesChallengeForm,
  hero_simple: HeroSimpleForm,
  courses_grid: CoursesGridForm,
  related_articles: RelatedArticlesForm,
  pdp_overview: PdpOverviewForm,
  pdp_curriculum: PdpCurriculumForm,
  pdp_certification: PdpCertificationForm,
  pdp_career_support: PdpCareerSupportForm,
  pdp_how_to_apply: PdpHowToApplyForm,
};

export type FormProps = {
  draft: Record<string, unknown>;
  onChange: (updated: Record<string, unknown>) => void;
};

type Props = {
  sections: SectionRow[];
  onRefreshPreview: () => void;
};

function SectionItem({
  section,
  onRefreshPreview,
}: {
  section: SectionRow;
  onRefreshPreview: () => void;
}) {
  const def = getSectionDef(section.type);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Record<string, unknown>>(section.contentDraft);
  const [saving, setSaving] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [reverting, setReverting] = useState(false);
  const [visible, setVisible] = useState(section.isVisible);
  const [toast, setToast] = useState<{ msg: string; error?: boolean } | null>(null);
  const isDirty = JSON.stringify(draft) !== JSON.stringify(section.contentDraft);
  const isPublished = !!section.contentPublished;
  const hasDraft = isDirty || !isPublished;

  function showToast(msg: string, error = false) {
    setToast({ msg, error });
    setTimeout(() => setToast(null), 3000);
  }

  async function saveDraft() {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/sections/${section.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentDraft: draft, isVisible: visible }),
      });
      if (!res.ok) throw new Error("Save failed");
      showToast("Draft saved");
      onRefreshPreview();
    } catch {
      showToast("Save failed", true);
    } finally {
      setSaving(false);
    }
  }

  async function publish() {
    if (!confirm("Publish this section? The changes will be live immediately.")) return;
    setPublishing(true);
    try {
      // Save draft first so latest state is captured
      await fetch(`/api/admin/sections/${section.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentDraft: draft, isVisible: visible }),
      });
      const res = await fetch(`/api/admin/sections/${section.id}/publish`, { method: "POST" });
      if (!res.ok) throw new Error("Publish failed");
      showToast("Published ✓");
      onRefreshPreview();
    } catch {
      showToast("Publish failed", true);
    } finally {
      setPublishing(false);
    }
  }

  async function revert() {
    if (!section.contentPublished) return;
    if (!confirm("Revert draft to last published version?")) return;
    setReverting(true);
    try {
      const res = await fetch(`/api/admin/sections/${section.id}/revert`, { method: "POST" });
      if (!res.ok) throw new Error("Revert failed");
      setDraft(section.contentPublished as Record<string, unknown>);
      showToast("Reverted to published");
    } catch {
      showToast("Revert failed", true);
    } finally {
      setReverting(false);
    }
  }

  const AdminForm = def?.readOnly ? null : FORM_REGISTRY[section.type];

  return (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
      {/* Accordion header */}
      <div
        className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50/60 transition select-none"
        onClick={() => setOpen(o => !o)}
      >
        <span className="text-gray-400 text-xs w-5 text-center">{open ? "▼" : "▶"}</span>
        <span className="text-sm font-semibold text-[#09263f] flex-1">{def?.label ?? section.type}</span>

        <div className="flex items-center gap-2 text-xs" onClick={e => e.stopPropagation()}>
          {/* Visibility toggle */}
          <button
            type="button"
            onClick={() => setVisible(v => !v)}
            className={`px-2 py-0.5 rounded-full text-[10px] font-semibold transition ${
              visible ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
            }`}
          >
            {visible ? "Visible" : "Hidden"}
          </button>

          {/* Published badge */}
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
            isPublished ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"
          }`}>
            {isPublished ? "Published" : "Draft only"}
          </span>

          {def?.readOnly && (
            <span className="text-gray-400 text-[10px]">→</span>
          )}
        </div>
      </div>

      {/* Accordion body */}
      {open && (
        <div className="border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {toast && (
            <div className={`text-xs rounded-lg px-3 py-2 font-semibold ${
              toast.error ? "bg-red-50 text-red-600" : "bg-green-50 text-green-700"
            }`}>
              {toast.msg}
            </div>
          )}

          {def?.readOnly ? (
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
              <p>This section is driven by a <strong>global block</strong>.</p>
              <p className="mt-1">
                <Link href={`/admin/global/${section.type.replace("_", "-")}`} className="text-[#1de5b5] hover:underline">
                  Edit in Global blocks →
                </Link>
              </p>
            </div>
          ) : AdminForm ? (
            <AdminForm draft={draft} onChange={setDraft} />
          ) : (
            <p className="text-sm text-gray-400 italic">
              No form registered for type <code>{section.type}</code>.
            </p>
          )}

          {!def?.readOnly && (
            <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={saveDraft}
                disabled={saving || !isDirty}
                className="bg-[#09263f] text-white px-4 py-2 rounded-full text-sm font-semibold hover:brightness-110 disabled:opacity-50 transition"
              >
                {saving ? "Saving…" : "Save draft"}
              </button>
              <button
                type="button"
                onClick={publish}
                disabled={publishing}
                className="bg-[#1de5b5] text-[#09263f] px-4 py-2 rounded-full text-sm font-semibold hover:brightness-95 disabled:opacity-50 transition"
              >
                {publishing ? "Publishing…" : "Publish"}
              </button>
              {isPublished && (
                <button
                  type="button"
                  onClick={revert}
                  disabled={reverting}
                  className="text-sm text-gray-500 hover:text-[#09263f] hover:underline disabled:opacity-50"
                >
                  {reverting ? "Reverting…" : "Revert to published"}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function SectionEditor({ sections, onRefreshPreview }: Props) {
  const sorted = [...sections].sort((a, b) => a.order - b.order);

  return (
    <div className="flex flex-col gap-3">
      {sorted.map(section => (
        <SectionItem
          key={section.id}
          section={section}
          onRefreshPreview={onRefreshPreview}
        />
      ))}
      {sorted.length === 0 && (
        <div className="text-sm text-gray-400 text-center py-12 border-2 border-dashed border-gray-200 rounded-xl">
          No sections yet for this page.
        </div>
      )}
    </div>
  );
}
