"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TextField from "@/components/admin/fields/TextField";
import TextareaField from "@/components/admin/fields/TextareaField";
import NumberField from "@/components/admin/fields/NumberField";
import SwitchField from "@/components/admin/fields/SwitchField";
import SelectField from "@/components/admin/fields/SelectField";
import ArrayField from "@/components/admin/fields/ArrayField";
import MediaPicker from "@/components/admin/fields/MediaPicker";

// ---- Types ------------------------------------------------------------------

type Module = { id?: string; title: string; summary: string; order: number; lessons: Lesson[] };
type Lesson = { id?: string; title: string; duration: string; order: number };
type Pricing = { id?: string; mode: string; label: string; price: number; priceStruck?: number; installments: number; hasEmi: boolean; ctaLabel: string; ctaHref: string; order: number };
type Project = { id?: string; title: string; desc: string; imageUrl: string };
type Certification = { id?: string; title: string; issuer: string; imageUrl: string };

type CourseData = {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  thumbnailUrl: string;
  heroImageUrl: string;
  durationMonths: number;
  classesCount: number;
  hoursCount: number;
  price: number;
  discountedPrice: number;
  emiPerMonth: number;
  brochureUrl: string;
  isFeatured: boolean;
  isPublished: boolean;
  order: number;
  jobRoles: string[];
  keySkills: string[];
  careerSupportText: string;
  metaTitle: string;
  metaDesc: string;
  rating: number;
  alumniCount: number;
  heroImage: string;
  hasNoCodingRequired: boolean;
  categoryId: string;
  modules: Module[];
  pricing: Pricing[];
  projects: Project[];
  certifications: Certification[];
};

type Category = { id: string; name: string };

// ---- Tabs ------------------------------------------------------------------

const TABS = [
  { key: "basics", label: "Basics" },
  { key: "pricing", label: "Pricing" },
  { key: "curriculum", label: "Curriculum" },
  { key: "projects", label: "Projects" },
  { key: "tools", label: "Tools & Skills" },
  { key: "seo", label: "SEO" },
  { key: "publish", label: "Publish" },
];

// ---- Main component --------------------------------------------------------

export default function CourseEditorClient({
  course: initial,
  categories,
}: {
  course: CourseData;
  categories: Category[];
}) {
  const router = useRouter();
  const [data, setData] = useState<CourseData>(initial);
  const [activeTab, setActiveTab] = useState("basics");
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; error?: boolean } | null>(null);

  function set<K extends keyof CourseData>(key: K, val: CourseData[K]) {
    setData(prev => ({ ...prev, [key]: val }));
  }

  function showToast(msg: string, error = false) {
    setToast({ msg, error });
    setTimeout(() => setToast(null), 4000);
  }

  async function save() {
    setSaving(true);
    try {
      const isNew = data.id === "new";
      const url = isNew ? "/api/admin/courses" : `/api/admin/courses/${data.id}`;
      const method = isNew ? "POST" : "PATCH";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error?.message ?? "Save failed");
      }
      const saved = await res.json() as { id: string };
      showToast("Saved ✓");
      if (isNew) router.replace(`/admin/courses/${saved.id}`);
      else router.refresh();
    } catch (e) {
      showToast(e instanceof Error ? e.message : "Save failed", true);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {toast && (
        <div className={`text-sm rounded-lg px-4 py-3 font-semibold ${
          toast.error ? "bg-red-50 text-red-600" : "bg-green-50 text-green-700"
        }`}>
          {toast.msg}
        </div>
      )}

      {/* Tab bar — scrollable on mobile */}
      <div className="flex gap-0 border-b border-gray-200 overflow-x-auto scrollbar-none -mx-4 sm:mx-0 px-4 sm:px-0">
        {TABS.map(tab => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2.5 text-sm font-semibold border-b-2 -mb-px transition whitespace-nowrap shrink-0 ${
              activeTab === tab.key
                ? "border-[#1de5b5] text-[#09263f]"
                : "border-transparent text-gray-500 hover:text-[#09263f]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
        {activeTab === "basics" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextField label="Title" value={data.title} onChange={v => set("title", v)} required />
              <TextField label="Slug" value={data.slug} onChange={v => set("slug", v)} required hint="URL-safe, lowercase" />
            </div>
            <SelectField
              label="Category"
              value={data.categoryId}
              onChange={v => set("categoryId", v)}
              options={categories.map(c => ({ value: c.id, label: c.name }))}
              required
            />
            <TextareaField label="Short description (card)" value={data.shortDesc} onChange={v => set("shortDesc", v)} rows={2} />
            <TextareaField label="Long description (overview)" value={data.longDesc} onChange={v => set("longDesc", v)} rows={6} />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <NumberField label="Duration (months)" value={data.durationMonths ?? 0} onChange={v => set("durationMonths", v)} min={0} />
              <NumberField label="Classes count" value={data.classesCount ?? 0} onChange={v => set("classesCount", v)} min={0} />
              <NumberField label="Hours count" value={data.hoursCount ?? 0} onChange={v => set("hoursCount", v)} min={0} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <NumberField label="Rating (×10)" value={data.rating ?? 0} onChange={v => set("rating", v)} min={0} max={100} hint="e.g. 96 = 9.6" />
              <NumberField label="Alumni count" value={data.alumniCount ?? 0} onChange={v => set("alumniCount", v)} min={0} />
              <NumberField label="Sort order" value={data.order ?? 0} onChange={v => set("order", v)} min={0} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <MediaPicker label="Thumbnail" value={{ url: data.thumbnailUrl ?? "", alt: data.title }} onChange={v => set("thumbnailUrl", v.url)} />
              <MediaPicker label="Hero image" value={{ url: data.heroImageUrl ?? "", alt: data.title }} onChange={v => set("heroImageUrl", v.url)} />
            </div>
            <TextField label="Brochure URL" value={data.brochureUrl ?? ""} onChange={v => set("brochureUrl", v)} type="url" />
            <SwitchField label="No coding required" value={data.hasNoCodingRequired ?? false} onChange={v => set("hasNoCodingRequired", v)} />
            <TextareaField label="Career support text" value={data.careerSupportText ?? ""} onChange={v => set("careerSupportText", v)} rows={3} />
          </div>
        )}

        {activeTab === "pricing" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <p className="text-sm text-gray-500">Define pricing for each learning mode (classroom, online, e-learning).</p>
            <ArrayField<Pricing>
              label="Pricing rows"
              items={data.pricing ?? []}
              onChange={v => set("pricing", v)}
              newItem={() => ({ mode: "online", label: "Online", price: 0, installments: 3, hasEmi: true, ctaLabel: "Enroll now", ctaHref: "", order: (data.pricing?.length ?? 0) })}
              renderItem={(row, _i, update) => (
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <SelectField
                      label="Mode"
                      value={row.mode}
                      onChange={v => update({ ...row, mode: v })}
                      options={[
                        { value: "classroom", label: "Classroom & Bootcamp" },
                        { value: "online", label: "Online / Live" },
                        { value: "elearning", label: "E-learning / Self-paced" },
                      ]}
                    />
                    <TextField label="Display label" value={row.label} onChange={v => update({ ...row, label: v })} />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <NumberField label="Price (₹)" value={row.price} onChange={v => update({ ...row, price: v })} min={0} />
                    <NumberField label="Struck price (₹)" value={row.priceStruck ?? 0} onChange={v => update({ ...row, priceStruck: v })} min={0} />
                    <NumberField label="Installments" value={row.installments} onChange={v => update({ ...row, installments: v })} min={1} max={36} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <TextField label="CTA label" value={row.ctaLabel} onChange={v => update({ ...row, ctaLabel: v })} />
                    <TextField label="CTA URL" value={row.ctaHref ?? ""} onChange={v => update({ ...row, ctaHref: v })} type="url" />
                  </div>
                  <SwitchField label="Show EMI" value={row.hasEmi} onChange={v => update({ ...row, hasEmi: v })} />
                </div>
              )}
            />
          </div>
        )}

        {activeTab === "curriculum" && (
          <div className="flex flex-col gap-4 max-w-3xl">
            <p className="text-sm text-gray-500">Modules are shown in the PDP curriculum section. Each module has an ordered list of lessons.</p>
            <ArrayField<Module>
              label="Modules"
              items={data.modules ?? []}
              onChange={v => set("modules", v)}
              newItem={() => ({ title: "", summary: "", order: (data.modules?.length ?? 0), lessons: [] })}
              renderItem={(mod, _i, updateMod) => (
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <TextField label="Module title" value={mod.title} onChange={v => updateMod({ ...mod, title: v })} required />
                    <TextareaField label="Summary" value={mod.summary ?? ""} onChange={v => updateMod({ ...mod, summary: v })} rows={2} />
                  </div>
                  <ArrayField<Lesson>
                    label="Lessons"
                    items={mod.lessons ?? []}
                    onChange={lessons => updateMod({ ...mod, lessons })}
                    newItem={() => ({ title: "", duration: "", order: (mod.lessons?.length ?? 0) })}
                    renderItem={(lesson, _j, updateLesson) => (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <TextField label="Lesson title" value={lesson.title} onChange={v => updateLesson({ ...lesson, title: v })} />
                        <TextField label="Duration" value={lesson.duration ?? ""} onChange={v => updateLesson({ ...lesson, duration: v })} placeholder="45 min" />
                      </div>
                    )}
                  />
                </div>
              )}
            />
          </div>
        )}

        {activeTab === "projects" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <ArrayField<Project>
              label="Course projects"
              items={data.projects ?? []}
              onChange={v => set("projects", v)}
              newItem={() => ({ title: "", desc: "", imageUrl: "" })}
              renderItem={(proj, _i, update) => (
                <div className="flex flex-col gap-2">
                  <TextField label="Project title" value={proj.title} onChange={v => update({ ...proj, title: v })} />
                  <TextareaField label="Description" value={proj.desc} onChange={v => update({ ...proj, desc: v })} rows={2} />
                  <MediaPicker label="Image" value={{ url: proj.imageUrl ?? "", alt: proj.title }} onChange={v => update({ ...proj, imageUrl: v.url })} />
                </div>
              )}
            />
          </div>
        )}

        {activeTab === "tools" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <ArrayField<string>
              label="Job roles"
              items={data.jobRoles ?? []}
              onChange={v => set("jobRoles", v)}
              newItem={() => ""}
              renderItem={(role, _i, update) => (
                <TextField label="" value={role} onChange={update} placeholder="Data Scientist" />
              )}
            />
            <ArrayField<string>
              label="Key skills"
              items={data.keySkills ?? []}
              onChange={v => set("keySkills", v)}
              newItem={() => ""}
              renderItem={(skill, _i, update) => (
                <TextField label="" value={skill} onChange={update} placeholder="Python" />
              )}
            />
            <p className="text-xs text-gray-400">Tools taught (Python, SQL, etc.) are managed in the global Tools table and linked from there.</p>
          </div>
        )}

        {activeTab === "seo" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <TextField label="Meta title" value={data.metaTitle ?? ""} onChange={v => set("metaTitle", v)} placeholder="Leave blank to use course title" />
            <TextareaField label="Meta description" value={data.metaDesc ?? ""} onChange={v => set("metaDesc", v)} rows={3} />
          </div>
        )}

        {activeTab === "publish" && (
          <div className="flex flex-col gap-4 max-w-sm">
            <SwitchField label="Published (visible on site)" value={data.isPublished} onChange={v => set("isPublished", v)} />
            <SwitchField label="Featured (show on landing page)" value={data.isFeatured} onChange={v => set("isFeatured", v)} />
          </div>
        )}
      </div>

      {/* Sticky save bar */}
      <div className="flex items-center gap-3 py-4 border-t border-gray-200 bg-white sticky bottom-0">
        <button
          type="button"
          onClick={save}
          disabled={saving}
          className="bg-[#1de5b5] text-[#09263f] px-6 py-2.5 rounded-full text-sm font-semibold hover:brightness-95 disabled:opacity-50 transition"
        >
          {saving ? "Saving…" : "Save course"}
        </button>
        <a href={`/courses/${data.slug}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:underline">
          View on site ↗
        </a>
      </div>
    </div>
  );
}
