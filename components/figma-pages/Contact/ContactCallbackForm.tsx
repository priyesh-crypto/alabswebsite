"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

function useCallbackForm() {
  const [form, setForm] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    city: "Noida",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          countryCode: form.countryCode,
          phone: form.phone,
          city: form.city,
          source: "callback-request",
        }),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as {
          error?: { message?: string };
        };
        setErrorMsg(j?.error?.message ?? "Submission failed. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setForm({ name: "", countryCode: "+91", phone: "", email: "", city: "Noida" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return { form, setForm, status, errorMsg, onSubmit };
}

export function ContactCallbackFormMobile() {
  const { form, setForm, status, errorMsg, onSubmit } = useCallbackForm();
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium text-black mb-1">Name</label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          placeholder="Your Name"
          className="w-full border border-[#09263f]/30 rounded-full h-14 px-5 text-base outline-none focus:border-[#1de5b5]"
        />
      </div>
      <div className="flex gap-2">
        <div className="w-24">
          <label className="block text-sm font-medium text-black mb-1">Code</label>
          <select
            value={form.countryCode}
            onChange={(e) => setForm((f) => ({ ...f, countryCode: e.target.value }))}
            className="w-full border border-[#09263f]/30 rounded-full h-14 px-3 text-sm bg-white outline-none focus:border-[#1de5b5]"
          >
            <option>+91</option>
            <option>+1</option>
            <option>+44</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-black mb-1">Mobile</label>
          <input
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            placeholder="Mobile"
            className="w-full border border-[#09263f]/30 rounded-full h-14 px-5 text-base outline-none focus:border-[#1de5b5]"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-black mb-1">Email</label>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          placeholder="Your Email"
          className="w-full border border-[#09263f]/30 rounded-full h-14 px-5 text-base outline-none focus:border-[#1de5b5]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-black mb-1">Select City</label>
        <select
          value={form.city}
          onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
          className="w-full border border-[#09263f]/30 rounded-full h-14 px-5 text-base bg-white outline-none focus:border-[#1de5b5]"
        >
          <option>Noida</option>
          <option>Gurgaon</option>
          <option>Bangalore</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-[#ffd700] h-14 rounded-full font-semibold text-[#09263f] text-base mt-1 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send"}
      </button>
      {status === "success" && (
        <p className="text-sm text-green-700">Thanks! We&apos;ll call you back shortly.</p>
      )}
      {status === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}
    </form>
  );
}

export function ContactCallbackFormDesktop() {
  const { form, setForm, status, errorMsg, onSubmit } = useCallbackForm();

  const baseField =
    "absolute z-20 bg-white border border-[#09263f]/30 rounded-[1000px] h-[49px] px-6 text-[15px] text-[#09263f] outline-none focus:border-[#1de5b5] placeholder:text-[rgba(9,38,63,0.5)]";

  return (
    <form onSubmit={onSubmit}>
      <input
        required
        value={form.name}
        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        placeholder="Your Name"
        className={`${baseField} left-[714px] top-[478px] w-[494px]`}
      />

      <select
        value={form.countryCode}
        onChange={(e) => setForm((f) => ({ ...f, countryCode: e.target.value }))}
        className={`${baseField} left-[714px] top-[585px] w-[104px] px-4`}
      >
        <option>+91</option>
        <option>+1</option>
        <option>+44</option>
      </select>
      <input
        value={form.phone}
        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
        placeholder="Mobile"
        className={`${baseField} left-[828px] top-[585px] w-[380px]`}
      />

      <input
        required
        type="email"
        value={form.email}
        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        placeholder="Your Email"
        className={`${baseField} left-[714px] top-[697px] w-[494px]`}
      />

      <select
        value={form.city}
        onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
        className={`${baseField} left-[714px] top-[810px] w-[494px]`}
      >
        <option>Noida</option>
        <option>Gurgaon</option>
        <option>Bangalore</option>
      </select>

      {/* Transparent clickable overlay on top of the existing yellow Send button div */}
      <button
        type="submit"
        disabled={status === "submitting"}
        aria-label="Send"
        className="absolute left-[714px] top-[916px] h-[49px] w-[494px] rounded-[1000px] bg-transparent cursor-pointer z-20 disabled:cursor-not-allowed"
      />

      {status === "success" && (
        <p className="absolute left-[714px] top-[975px] w-[494px] text-center text-sm text-green-700">
          Thanks! We&apos;ll call you back shortly.
        </p>
      )}
      {status === "error" && (
        <p className="absolute left-[714px] top-[975px] w-[494px] text-center text-sm text-red-600">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
