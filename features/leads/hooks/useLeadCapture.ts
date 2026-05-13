import { useState } from "react";

export function useLeadCapture(source: string, onSuccess?: () => void) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitting(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE ?? ""}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, source }),
      });
      setSubmitted(true);
      if (onSuccess) {
        setTimeout(onSuccess, 1500);
      }
    } catch {
      // fail silently
    } finally {
      setSubmitting(false);
    }
  }

  return {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    submitting,
    submitted,
    handleSubmit
  };
}
