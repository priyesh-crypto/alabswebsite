"use client";

import React from "react";
import { useLeadCapture } from "../hooks/useLeadCapture";

export function LeadForm({ source, onSuccess }: { source: string; onSuccess: () => void }) {
  const {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    submitting,
    submitted,
    handleSubmit
  } = useLeadCapture(source, onSuccess);

  if (submitted) {
    return <p className="font-['Inter:Semi_Bold',sans-serif] text-[#19cf9e] text-[18px] text-center py-[20px]">Thanks! We'll reach out shortly.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
      <input required value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" className="border border-[rgba(9,38,63,0.3)] rounded-[178px] h-[52px] px-[20px] text-[14px] font-['Inter:Regular',sans-serif] outline-none focus:border-[#1de5b5]" />
      <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your Email" className="border border-[rgba(9,38,63,0.3)] rounded-[178px] h-[52px] px-[20px] text-[14px] font-['Inter:Regular',sans-serif] outline-none focus:border-[#1de5b5]" />
      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Mobile Number" className="border border-[rgba(9,38,63,0.3)] rounded-[178px] h-[52px] px-[20px] text-[14px] font-['Inter:Regular',sans-serif] outline-none focus:border-[#1de5b5]" />
      <button type="submit" disabled={submitting} className="bg-[#1de5b5] rounded-[1000px] h-[52px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[16px] hover:opacity-90 disabled:opacity-60 mt-[4px]">
        {submitting ? "Submitting..." : "Request Callback"}
      </button>
    </form>
  );
}
