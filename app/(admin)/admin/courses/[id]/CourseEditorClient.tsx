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

// PDP extension types
type StatTile = { label: string; value: string };
type Highlight = { title: string; description: string };
type CurriculumSummary = { liveHours: string; selfStudyHours: string; placementWeeks: string; includes: string[] };
type TestimonialStripItem = { quote: string; name: string; role: string; company: string; stars: number; photoUrl: string };
type ProjectDomain = { domain: string; title: string; description: string; icon: string };
type CareerFeature = { title: string; body: string };
type CareerPartner = { name: string; logoUrl: string };
type CareerSupport = { intro: string; features: CareerFeature[]; partnerLogos: CareerPartner[] };
type HowToApplyStep = { stepNumber: string; title: string; description: string };
type StudentStory = { photoUrl: string; name: string; credential: string; role: string; quote: string };
type RelatedArticle = { category: string; readTime: string; title: string; excerpt: string; author: string; url: string; imageUrl: string };
type CtaBanner = { headline: string; subheadline: string; ctaText: string; ctaUrl: string; bgColor: string };
type ContactBlock = { heading: string; description: string };
type FaqItem = { question: string; answer: string };
type LearningModeItem = { name: string; description: string; icon: string };
type CertificationData = { heading: string; body: string; certificateImageUrl: string; coBrandedName: string; coBrandedDesc: string; coBrandedLogoUrl: string };
type WhoShouldJoinItem = { icon: string; title: string; description: string };

export type CourseData = {
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
  // PDP extension
  pdpAlumniText: string;
  pdpStarsTotal: number;
  pdpRatingScale: number;
  pdpTaxNote: string;
  pdpEmiNote: string;
  pdpCities: string[];
  pdpStatTiles: StatTile[];
  pdpOverviewHighlights: Highlight[];
  pdpCurriculumHeading: string;
  pdpCurriculumSubheading: string;
  pdpCurriculumSummary: CurriculumSummary;
  pdpTestimonialStrip: TestimonialStripItem[];
  pdpProjectDomains: ProjectDomain[];
  pdpCareerSupport: CareerSupport;
  pdpHowToApply: HowToApplyStep[];
  pdpStudentStories: StudentStory[];
  pdpRelatedArticles: RelatedArticle[];
  pdpCtaBanner: CtaBanner;
  pdpContactBlock: ContactBlock;
  pdpFaqsData: FaqItem[];
  pdpLearningModesData: LearningModeItem[];
  pdpCertificationData: CertificationData;
  pdpWhoShouldJoinData: WhoShouldJoinItem[];
  pdpJobRolesData: string[];
  pdpKeySkillsData: string[];
};

type Category = { id: string; name: string };

// ---- Tabs ------------------------------------------------------------------

const TABS = [
  { key: "basics", label: "Basics" },
  { key: "pricing", label: "Pricing" },
  { key: "curriculum", label: "Curriculum" },
  { key: "projects", label: "Projects" },
  { key: "tools", label: "Tools & Skills" },
  // PDP extension tabs
  { key: "pdpHero", label: "PDP Hero" },
  { key: "pdpOverview", label: "Overview" },
  { key: "pdpCurriculum", label: "PDP Curriculum" },
  { key: "pdpWho", label: "Who Should Join" },
  { key: "pdpRoles", label: "Roles & Skills" },
  { key: "pdpModes", label: "Learning Modes" },
  { key: "pdpProjects", label: "Projects (PDP)" },
  { key: "pdpCert", label: "Certification" },
  { key: "pdpCareer", label: "Career Support" },
  { key: "pdpApply", label: "How To Apply" },
  { key: "pdpTestimonials", label: "Testimonials" },
  { key: "pdpStories", label: "Student Stories" },
  { key: "pdpArticles", label: "Articles" },
  { key: "pdpCta", label: "CTA Banner" },
  { key: "pdpContact", label: "Contact Block" },
  { key: "pdpFaqs", label: "FAQs (PDP)" },
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

        {activeTab === "pdpHero" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextField label="Alumni text" value={data.pdpAlumniText} onChange={v => set("pdpAlumniText", v)} placeholder="20,000+" />
              <NumberField label="Stars total (reviews)" value={data.pdpStarsTotal} onChange={v => set("pdpStarsTotal", v)} min={0} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NumberField label="Rating scale" value={data.pdpRatingScale} onChange={v => set("pdpRatingScale", v)} min={1} max={10} />
              <TextField label="Tax note" value={data.pdpTaxNote} onChange={v => set("pdpTaxNote", v)} placeholder="Inclusive of all taxes" />
            </div>
            <TextField label="EMI note" value={data.pdpEmiNote} onChange={v => set("pdpEmiNote", v)} placeholder="Easy EMI available" />
            <ArrayField<string>
              label="Cities"
              items={data.pdpCities}
              onChange={v => set("pdpCities", v)}
              newItem={() => ""}
              renderItem={(c, _i, update) => <TextField label="" value={c} onChange={update} placeholder="Noida" />}
            />
            <ArrayField<StatTile>
              label="Stat tiles (max 3 shown)"
              items={data.pdpStatTiles}
              onChange={v => set("pdpStatTiles", v)}
              newItem={() => ({ label: "", value: "" })}
              renderItem={(t, _i, update) => (
                <div className="grid grid-cols-2 gap-2">
                  <TextField label="Label" value={t.label} onChange={v => update({ ...t, label: v })} />
                  <TextField label="Value" value={t.value} onChange={v => update({ ...t, value: v })} />
                </div>
              )}
            />
          </div>
        )}

        {activeTab === "pdpOverview" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <ArrayField<Highlight>
              label="Overview highlights"
              items={data.pdpOverviewHighlights}
              onChange={v => set("pdpOverviewHighlights", v)}
              newItem={() => ({ title: "", description: "" })}
              renderItem={(h, _i, update) => (
                <div className="flex flex-col gap-2">
                  <TextField label="Title" value={h.title} onChange={v => update({ ...h, title: v })} />
                  <TextareaField label="Description" value={h.description} onChange={v => update({ ...h, description: v })} rows={2} />
                </div>
              )}
            />
          </div>
        )}

        {activeTab === "pdpCurriculum" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <TextField label="Curriculum heading" value={data.pdpCurriculumHeading} onChange={v => set("pdpCurriculumHeading", v)} />
            <TextareaField label="Curriculum subheading" value={data.pdpCurriculumSubheading} onChange={v => set("pdpCurriculumSubheading", v)} rows={2} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <TextField label="Live hours" value={data.pdpCurriculumSummary.liveHours} onChange={v => set("pdpCurriculumSummary", { ...data.pdpCurriculumSummary, liveHours: v })} />
              <TextField label="Self-study hours" value={data.pdpCurriculumSummary.selfStudyHours} onChange={v => set("pdpCurriculumSummary", { ...data.pdpCurriculumSummary, selfStudyHours: v })} />
              <TextField label="Placement weeks" value={data.pdpCurriculumSummary.placementWeeks} onChange={v => set("pdpCurriculumSummary", { ...data.pdpCurriculumSummary, placementWeeks: v })} />
            </div>
            <ArrayField<string>
              label="What's included"
              items={data.pdpCurriculumSummary.includes}
              onChange={v => set("pdpCurriculumSummary", { ...data.pdpCurriculumSummary, includes: v })}
              newItem={() => ""}
              renderItem={(s, _i, update) => <TextField label="" value={s} onChange={update} />}
            />
          </div>
        )}

        {activeTab === "pdpWho" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <ArrayField<WhoShouldJoinItem>
              label="Who should join"
              items={data.pdpWhoShouldJoinData}
              onChange={v => set("pdpWhoShouldJoinData", v)}
              newItem={() => ({ icon: "", title: "", description: "" })}
              renderItem={(w, _i, update) => (
                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <TextField label="Icon (emoji)" value={w.icon} onChange={v => update({ ...w, icon: v })} placeholder="🎓" />
                    <div className="sm:col-span-2">
                      <TextField label="Title" value={w.title} onChange={v => update({ ...w, title: v })} />
                    </div>
                  </div>
                  <TextareaField label="Description" value={w.description} onChange={v => update({ ...w, description: v })} rows={2} />
                </div>
              )}
            />
          </div>
        )}

        {activeTab === "pdpRoles" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <ArrayField<string>
              label="Job roles (PDP)"
              items={data.pdpJobRolesData}
              onChange={v => set("pdpJobRolesData", v)}
              newItem={() => ""}
              renderItem={(r, _i, update) => <TextField label="" value={r} onChange={update} placeholder="Data Scientist" />}
            />
            <ArrayField<string>
              label="Key skills (PDP)"
              items={data.pdpKeySkillsData}
              onChange={v => set("pdpKeySkillsData", v)}
              newItem={() => ""}
              renderItem={(s, _i, update) => <TextField label="" value={s} onChange={update} placeholder="Python" />}
            />
          </div>
        )}

        {activeTab === "pdpModes" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <ArrayField<LearningModeItem>
              label="Learning modes"
              items={data.pdpLearningModesData}
              onChange={v => set("pdpLearningModesData", v)}
              newItem={() => ({ name: "", description: "", icon: "" })}
              renderItem={(m, _i, update) => (
                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <TextField label="Icon (emoji)" value={m.icon} onChange={v => update({ ...m, icon: v })} placeholder="🏫" />
                    <div className="sm:col-span-2">
                      <TextField label="Mode name" value={m.name} onChange={v => update({ ...m, name: v })} />
                    </div>
                  </div>
                  <TextareaField label="Description" value={m.description} onChange={v => update({ ...m, description: v })} rows={2} />
                </div>
              )}
            />
          </div>
        )}

        {activeTab === "pdpProjects" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <ArrayField<ProjectDomain>
              label="Project domains"
              items={data.pdpProjectDomains}
              onChange={v => set("pdpProjectDomains", v)}
              newItem={() => ({ domain: "", title: "", description: "", icon: "" })}
              renderItem={(p, _i, update) => (
                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <TextField label="Icon (emoji)" value={p.icon} onChange={v => update({ ...p, icon: v })} />
                    <TextField label="Domain" value={p.domain} onChange={v => update({ ...p, domain: v })} placeholder="Healthcare" />
                    <TextField label="Title" value={p.title} onChange={v => update({ ...p, title: v })} />
                  </div>
                  <TextareaField label="Description" value={p.description} onChange={v => update({ ...p, description: v })} rows={2} />
                </div>
              )}
            />
          </div>
        )}

        {activeTab === "pdpCert" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <p className="text-xs text-gray-500">Tools are linked from the global Tools table. Below: certification block.</p>
            <TextField label="Heading" value={data.pdpCertificationData.heading} onChange={v => set("pdpCertificationData", { ...data.pdpCertificationData, heading: v })} />
            <TextareaField label="Body" value={data.pdpCertificationData.body} onChange={v => set("pdpCertificationData", { ...data.pdpCertificationData, body: v })} rows={3} />
            <MediaPicker label="Certificate image" value={{ url: data.pdpCertificationData.certificateImageUrl, alt: "Certificate" }} onChange={v => set("pdpCertificationData", { ...data.pdpCertificationData, certificateImageUrl: v.url })} />
            <TextField label="Co-branded partner name" value={data.pdpCertificationData.coBrandedName} onChange={v => set("pdpCertificationData", { ...data.pdpCertificationData, coBrandedName: v })} />
            <TextareaField label="Co-branded description" value={data.pdpCertificationData.coBrandedDesc} onChange={v => set("pdpCertificationData", { ...data.pdpCertificationData, coBrandedDesc: v })} rows={2} />
            <MediaPicker label="Co-branded logo" value={{ url: data.pdpCertificationData.coBrandedLogoUrl, alt: data.pdpCertificationData.coBrandedName }} onChange={v => set("pdpCertificationData", { ...data.pdpCertificationData, coBrandedLogoUrl: v.url })} />
          </div>
        )}

        {activeTab === "pdpCareer" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <TextareaField label="Intro" value={data.pdpCareerSupport.intro} onChange={v => set("pdpCareerSupport", { ...data.pdpCareerSupport, intro: v })} rows={3} />
            <ArrayField<CareerFeature>
              label="Features"
              items={data.pdpCareerSupport.features}
              onChange={v => set("pdpCareerSupport", { ...data.pdpCareerSupport, features: v })}
              newItem={() => ({ title: "", body: "" })}
              renderItem={(f, _i, update) => (
                <div className="flex flex-col gap-2">
                  <TextField label="Title" value={f.title} onChange={v => update({ ...f, title: v })} />
                  <TextareaField label="Body" value={f.body} onChange={v => update({ ...f, body: v })} rows={2} />
                </div>
              )}
            />
            <ArrayField<CareerPartner>
              label="Hiring partner logos"
              items={data.pdpCareerSupport.partnerLogos}
              onChange={v => set("pdpCareerSupport", { ...data.pdpCareerSupport, partnerLogos: v })}
              newItem={() => ({ name: "", logoUrl: "" })}
              renderItem={(p, _i, update) => (
                <div className="flex flex-col gap-2">
                  <TextField label="Name" value={p.name} onChange={v => update({ ...p, name: v })} />
                  <MediaPicker label="Logo" value={{ url: p.logoUrl, alt: p.name }} onChange={v => update({ ...p, logoUrl: v.url })} />
                </div>
              )}
            />
          </div>
        )}

        {activeTab === "pdpApply" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <ArrayField<HowToApplyStep>
              label="How to apply (steps)"
              items={data.pdpHowToApply}
              onChange={v => set("pdpHowToApply", v)}
              newItem={() => ({ stepNumber: String((data.pdpHowToApply?.length ?? 0) + 1), title: "", description: "" })}
              renderItem={(s, _i, update) => (
                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                    <TextField label="Step" value={s.stepNumber} onChange={v => update({ ...s, stepNumber: v })} />
                    <div className="sm:col-span-3">
                      <TextField label="Title" value={s.title} onChange={v => update({ ...s, title: v })} />
                    </div>
                  </div>
                  <TextareaField label="Description" value={s.description} onChange={v => update({ ...s, description: v })} rows={2} />
                </div>
              )}
            />
          </div>
        )}

        {activeTab === "pdpTestimonials" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <ArrayField<TestimonialStripItem>
              label="Testimonial strip"
              items={data.pdpTestimonialStrip}
              onChange={v => set("pdpTestimonialStrip", v)}
              newItem={() => ({ quote: "", name: "", role: "", company: "", stars: 5, photoUrl: "" })}
              renderItem={(t, _i, update) => (
                <div className="flex flex-col gap-2">
                  <TextareaField label="Quote" value={t.quote} onChange={v => update({ ...t, quote: v })} rows={3} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <TextField label="Name" value={t.name} onChange={v => update({ ...t, name: v })} />
                    <TextField label="Role" value={t.role} onChange={v => update({ ...t, role: v })} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <TextField label="Company" value={t.company} onChange={v => update({ ...t, company: v })} />
                    <NumberField label="Stars" value={t.stars} onChange={v => update({ ...t, stars: v })} min={0} max={5} />
                  </div>
                  <MediaPicker label="Photo" value={{ url: t.photoUrl, alt: t.name }} onChange={v => update({ ...t, photoUrl: v.url })} />
                </div>
              )}
            />
          </div>
        )}

        {activeTab === "pdpStories" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <ArrayField<StudentStory>
              label="Student stories"
              items={data.pdpStudentStories}
              onChange={v => set("pdpStudentStories", v)}
              newItem={() => ({ photoUrl: "", name: "", credential: "", role: "", quote: "" })}
              renderItem={(s, _i, update) => (
                <div className="flex flex-col gap-2">
                  <MediaPicker label="Photo" value={{ url: s.photoUrl, alt: s.name }} onChange={v => update({ ...s, photoUrl: v.url })} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <TextField label="Name" value={s.name} onChange={v => update({ ...s, name: v })} />
                    <TextField label="Credential" value={s.credential} onChange={v => update({ ...s, credential: v })} placeholder="Placed @ Accenture" />
                  </div>
                  <TextField label="Role" value={s.role} onChange={v => update({ ...s, role: v })} />
                  <TextareaField label="Quote" value={s.quote} onChange={v => update({ ...s, quote: v })} rows={3} />
                </div>
              )}
            />
          </div>
        )}

        {activeTab === "pdpArticles" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <ArrayField<RelatedArticle>
              label="Related articles"
              items={data.pdpRelatedArticles}
              onChange={v => set("pdpRelatedArticles", v)}
              newItem={() => ({ category: "", readTime: "", title: "", excerpt: "", author: "", url: "", imageUrl: "" })}
              renderItem={(a, _i, update) => (
                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <TextField label="Category" value={a.category} onChange={v => update({ ...a, category: v })} />
                    <TextField label="Read time" value={a.readTime} onChange={v => update({ ...a, readTime: v })} placeholder="6 min read" />
                  </div>
                  <TextField label="Title" value={a.title} onChange={v => update({ ...a, title: v })} />
                  <TextareaField label="Excerpt" value={a.excerpt} onChange={v => update({ ...a, excerpt: v })} rows={2} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <TextField label="Author" value={a.author} onChange={v => update({ ...a, author: v })} />
                    <TextField label="URL" value={a.url} onChange={v => update({ ...a, url: v })} type="url" />
                  </div>
                  <MediaPicker label="Image" value={{ url: a.imageUrl, alt: a.title }} onChange={v => update({ ...a, imageUrl: v.url })} />
                </div>
              )}
            />
          </div>
        )}

        {activeTab === "pdpCta" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <TextField label="Headline" value={data.pdpCtaBanner.headline} onChange={v => set("pdpCtaBanner", { ...data.pdpCtaBanner, headline: v })} />
            <TextareaField label="Subheadline" value={data.pdpCtaBanner.subheadline} onChange={v => set("pdpCtaBanner", { ...data.pdpCtaBanner, subheadline: v })} rows={2} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <TextField label="CTA text" value={data.pdpCtaBanner.ctaText} onChange={v => set("pdpCtaBanner", { ...data.pdpCtaBanner, ctaText: v })} />
              <TextField label="CTA URL" value={data.pdpCtaBanner.ctaUrl} onChange={v => set("pdpCtaBanner", { ...data.pdpCtaBanner, ctaUrl: v })} />
            </div>
            <TextField label="Background color (hex)" value={data.pdpCtaBanner.bgColor} onChange={v => set("pdpCtaBanner", { ...data.pdpCtaBanner, bgColor: v })} placeholder="#0B1B3B" />
          </div>
        )}

        {activeTab === "pdpContact" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <TextField label="Heading" value={data.pdpContactBlock.heading} onChange={v => set("pdpContactBlock", { ...data.pdpContactBlock, heading: v })} />
            <TextareaField label="Description" value={data.pdpContactBlock.description} onChange={v => set("pdpContactBlock", { ...data.pdpContactBlock, description: v })} rows={3} />
          </div>
        )}

        {activeTab === "pdpFaqs" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            <ArrayField<FaqItem>
              label="FAQs (PDP)"
              items={data.pdpFaqsData}
              onChange={v => set("pdpFaqsData", v)}
              newItem={() => ({ question: "", answer: "" })}
              renderItem={(f, _i, update) => (
                <div className="flex flex-col gap-2">
                  <TextField label="Question" value={f.question} onChange={v => update({ ...f, question: v })} />
                  <TextareaField label="Answer" value={f.answer} onChange={v => update({ ...f, answer: v })} rows={3} />
                </div>
              )}
            />
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
