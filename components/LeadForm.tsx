"use client";

import { Send } from "lucide-react";
import { useId, useState } from "react";
import { siteContent } from "@/lib/content";

type FormStatus = {
  ok: boolean;
  message: string;
};

const initialStatus: FormStatus = {
  ok: false,
  message: "",
};

export function LeadForm() {
  const [status, setStatus] = useState(initialStatus);
  const [isPending, setIsPending] = useState(false);
  const statusId = useId();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setStatus(initialStatus);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as FormStatus;

      setStatus(result);
      if (result.ok) {
        form.reset();
        window.location.href = "/thank-you";
      }
    } catch {
      setStatus({
        ok: false,
        message: "The form could not be sent right now. Please email sam@digitalseva.us directly.",
      });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form
      className="grid gap-4 rounded-lg border border-[#F7EAD0] bg-white p-5 shadow-sm sm:p-6"
      onSubmit={handleSubmit}
      aria-describedby={status.message ? statusId : undefined}
    >
      <input
        className="hidden"
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" name="name" autoComplete="name" required />
        <Field label="Email address" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone number" name="phone" type="tel" autoComplete="tel" />
        <Field label="Organization name" name="organizationName" autoComplete="organization" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Select label="Organization type" name="organizationType" options={siteContent.formOptions.organizationTypes} />
        <Select label="Primary priority" name="priority" options={siteContent.formOptions.priorities} />
      </div>
      <Select label="Estimated timeline" name="timeline" options={siteContent.formOptions.timelines} />
      <label className="grid gap-2 text-sm font-bold text-[#3B2415]">
        What would you like to improve?
        <textarea
          name="message"
          required
          rows={5}
          className="focus-ring resize-y rounded-lg border border-[#E6D0A5] bg-[#FFF6E6] px-4 py-3 font-medium text-[#3B2415]"
          placeholder="Tell us about constituent records, payments, donations, services, volunteers, reporting, or current website needs."
        />
      </label>
      {status.message && (
        <p
          id={statusId}
          className={`rounded-lg px-4 py-3 text-sm font-bold ${
            status.ok ? "bg-[#8B1E3F]/10 text-[#8B1E3F]" : "bg-[#8B1E3F]/10 text-[#8B1E3F]"
          }`}
        >
          {status.message}
        </p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#D4A017] px-5 py-3 text-sm font-extrabold text-[#3B2415] transition hover:bg-[#F4C056] disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send className="size-4" />
        {isPending ? "Sending..." : "Request a Free Demo"}
      </button>
      <p className="text-xs leading-6 text-[#6B4B2A]">
        By submitting this form, you agree to be contacted about DigitalSeva. Payment-processing,
        banking, migration, premium integration, and custom-development fees may be separate.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-[#3B2415]">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="focus-ring rounded-lg border border-[#E6D0A5] bg-[#FFF6E6] px-4 py-3 font-medium text-[#3B2415]"
      />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-[#3B2415]">
      {label}
      <select
        name={name}
        required
        defaultValue=""
        className="focus-ring rounded-lg border border-[#E6D0A5] bg-[#FFF6E6] px-4 py-3 font-medium text-[#3B2415]"
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
