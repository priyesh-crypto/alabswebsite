"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type Form = {
  logoUrl: string;
  faviconUrl: string;
  primaryColor: string;
  contactEmail: string;
  contactPhone: string;
  businessHours: string;
  address: string;
  socialLinks: Record<string, string>;
  stats: Record<string, string>;
  gtmId: string;
  defaultMetaDesc: string;
  ogImageUrl: string;
};

const SOCIAL_KEYS = ["linkedin", "facebook", "twitter", "instagram", "youtube", "medium"] as const;
const STATS_KEYS = [
  "years",
  "students",
  "trainers",
  "candidates",
  "trainingHours",
  "companies",
  "avgRating",
  "rating",
  "ratedBy",
] as const;

const DEFAULTS: Form = {
  logoUrl: "",
  faviconUrl: "",
  primaryColor: "#09263f",
  contactEmail: "",
  contactPhone: "",
  businessHours: "10:00 AM TO 07:00 PM",
  address: "",
  socialLinks: {},
  stats: {},
  gtmId: "",
  defaultMetaDesc: "",
  ogImageUrl: "",
};

export default function SiteSettingsForm({ initial }: { initial: Form | null }) {
  const router = useRouter();
  const [form, setForm] = useState<Form>(initial ?? DEFAULTS);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ kind: "ok" | "err"; text: string } | null>(null);

  function setField<K extends keyof Form>(key: K, value: Form[K]) {
    setForm(prev => ({ ...prev, [key]: value }));
  }
  function setMapField(map: "socialLinks" | "stats", k: string, v: string) {
    setForm(prev => ({ ...prev, [map]: { ...prev[map], [k]: v } }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/site-settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const body = await res.json().catch(() => null);
      if (!res.ok) {
        setMessage({ kind: "err", text: body?.error?.message ?? "Save failed" });
      } else {
        setMessage({ kind: "ok", text: "Saved. Public pages will reflect changes after the cache refreshes." });
        router.refresh();
      }
    } catch {
      setMessage({ kind: "err", text: "Network error" });
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 bg-white rounded-xl border border-gray-200 p-6">
      <Section title="Brand">
        <Input label="Logo URL" value={form.logoUrl} onChange={v => setField("logoUrl", v)} required />
        <Input label="Favicon URL" value={form.faviconUrl} onChange={v => setField("faviconUrl", v)} />
        <Input label="OG image URL" value={form.ogImageUrl} onChange={v => setField("ogImageUrl", v)} />
        <Input label="Primary color" value={form.primaryColor} onChange={v => setField("primaryColor", v)} placeholder="#09263f" />
      </Section>

      <Section title="Contact">
        <Input label="Contact email" type="email" value={form.contactEmail} onChange={v => setField("contactEmail", v)} required />
        <Input label="Contact phone" value={form.contactPhone} onChange={v => setField("contactPhone", v)} required />
        <Input label="Business hours" value={form.businessHours} onChange={v => setField("businessHours", v)} required />
        <Input label="Address" value={form.address} onChange={v => setField("address", v)} required />
      </Section>

      <Section title="Social links">
        <div className="grid grid-cols-2 gap-4">
          {SOCIAL_KEYS.map(key => (
            <Input
              key={key}
              label={key}
              value={form.socialLinks[key] ?? ""}
              onChange={v => setMapField("socialLinks", key, v)}
              placeholder={`https://${key}.com/analytixlabs`}
            />
          ))}
        </div>
      </Section>

      <Section title="Stats" description="Used by hero counters and footer. Free-form key/value — leave blank to omit.">
        <div className="grid grid-cols-3 gap-4">
          {STATS_KEYS.map(key => (
            <Input
              key={key}
              label={key}
              value={form.stats[key] ?? ""}
              onChange={v => setMapField("stats", key, v)}
            />
          ))}
        </div>
      </Section>

      <Section title="SEO & analytics">
        <Input label="GTM ID" value={form.gtmId} onChange={v => setField("gtmId", v)} />
        <Textarea label="Default meta description" value={form.defaultMetaDesc} onChange={v => setField("defaultMetaDesc", v)} rows={3} />
      </Section>

      {message && (
        <p
          className={`text-sm rounded-md px-3 py-2 ${
            message.kind === "ok"
              ? "bg-green-50 border border-green-200 text-green-700"
              : "bg-red-50 border border-red-200 text-red-700"
          }`}
        >
          {message.text}
        </p>
      )}

      <div className="flex justify-end gap-3">
        <button
          type="submit"
          disabled={saving}
          className="bg-[#1de5b5] text-[#09263f] rounded-full px-6 py-2 font-semibold hover:brightness-95 transition disabled:opacity-50"
        >
          {saving ? "Saving…" : "Save settings"}
        </button>
      </div>
    </form>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <header>
        <h2 className="font-semibold text-[#09263f]">{title}</h2>
        {description && <p className="text-xs text-gray-500 mt-0.5">{description}</p>}
      </header>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-medium text-[#09263f] capitalize">{label}{required && <span className="text-red-500"> *</span>}</span>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md h-10 px-3 text-sm outline-none focus:border-[#1de5b5]"
      />
    </label>
  );
}

function Textarea({
  label,
  value,
  onChange,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-medium text-[#09263f]">{label}</span>
      <textarea
        rows={rows}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#1de5b5]"
      />
    </label>
  );
}
