"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

type LeadType =
  | "general"
  | "buyer"
  | "seller"
  | "rental"
  | "investor"
  | "valuation"
  | "property";

interface Props {
  leadType?: LeadType;
  property?: string;
  location?: string;
  compact?: boolean;
  title?: string;
  subtitle?: string;
  submitLabel?: string;
  showInterestSelect?: boolean;
  onSuccess?: () => void;
}

export default function LeadForm({
  leadType = "general",
  property,
  location,
  compact = false,
  title,
  subtitle,
  submitLabel = "Request Information",
  showInterestSelect = false,
  onSuccess,
}: Props) {
  const pathname = usePathname();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: showInterestSelect ? "" : undefined as string | undefined,
    timeline: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          leadType,
          property,
          location,
          source: pathname,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed. Please try again.");
      }
      setSubmitted(true);
      onSuccess?.();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Submission failed. Please try again.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-8 px-2">
        <CheckCircle2 size={44} className="text-[var(--color-bronze)] mb-4" strokeWidth={1.25} />
        <h3 className="text-2xl font-serif text-[var(--color-charcoal)] mb-2">Thank you.</h3>
        <p className="text-[var(--color-text-secondary)] max-w-sm leading-relaxed">
          A member of our team will be in touch shortly. We appreciate your interest in Global Group Realty.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {title && (
        <div className="mb-2">
          <h3 className="font-serif text-2xl text-[var(--color-charcoal)] mb-1">{title}</h3>
          {subtitle && <p className="text-sm text-[var(--color-text-secondary)]">{subtitle}</p>}
        </div>
      )}

      <div className={compact ? "space-y-4" : "grid sm:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor={`${leadType}-name`} className="form-label">Full Name</label>
          <input
            id={`${leadType}-name`}
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor={`${leadType}-email`} className="form-label">Email</label>
          <input
            id={`${leadType}-email`}
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label htmlFor={`${leadType}-phone`} className="form-label">Phone</label>
          <input
            id={`${leadType}-phone`}
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="(305) 555-0123"
          />
        </div>
        {leadType === "valuation" && (
          <div>
            <label htmlFor={`${leadType}-timeline`} className="form-label">Estimated Timeline</label>
            <select
              id={`${leadType}-timeline`}
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select</option>
              <option value="0-30">0–30 days</option>
              <option value="30-90">30–90 days</option>
              <option value="3-6">3–6 months</option>
              <option value="6+">6+ months</option>
              <option value="just-exploring">Just exploring</option>
            </select>
          </div>
        )}
        {showInterestSelect && (
          <div className="sm:col-span-2">
            <label htmlFor={`${leadType}-interest`} className="form-label">I'm interested in</label>
            <select
              id={`${leadType}-interest`}
              name="interest"
              required
              value={formData.interest}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select</option>
              <option value="Buying">Buying</option>
              <option value="Selling">Selling</option>
              <option value="Renting">Renting</option>
              <option value="Investing">Investing</option>
              <option value="Other">Other</option>
            </select>
          </div>
        )}
      </div>

      {!compact && (
        <div>
          <label htmlFor={`${leadType}-message`} className="form-label">Message (optional)</label>
          <textarea
            id={`${leadType}-message`}
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="form-input resize-none"
            placeholder="Tell us a bit about your goals, timeline, or any particular property you're interested in."
          />
        </div>
      )}

      {error && <p className="text-sm text-red-700">{error}</p>}

      <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
        {submitting ? "Submitting..." : submitLabel}
      </button>

      <p className="text-[11px] text-[var(--color-text-muted)] leading-relaxed pt-1">
        By submitting this form, you consent to being contacted by Global Group Realty about your
        inquiry. Your information is never shared with third parties.
      </p>
    </form>
  );
}
