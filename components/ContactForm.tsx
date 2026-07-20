"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-lg border border-green-950/15 bg-white px-4 py-3 text-[0.95rem] text-green-950 placeholder:text-stone-400 focus:border-green-800";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const body = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please email us directly."
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-green-800/20 bg-white p-8 text-center">
        <p className="font-display text-2xl text-green-900">Message sent</p>
        <p className="mt-3 text-sm text-stone-500">
          Thanks — we reply to every enquiry, usually within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Full name
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email address
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
          Phone <span className="font-normal text-stone-400">(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          How can we help?
        </label>
        <textarea id="message" name="message" rows={5} required className={field} />
      </div>

      {/* Honeypot — bots fill this, humans never see it */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <label className="flex items-start gap-3 text-sm text-stone-500">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 accent-green-800" />
        <span>
          I agree to the{" "}
          <a href="/privacy-policy" className="text-green-800 underline underline-offset-2">
            privacy policy
          </a>{" "}
          and consent to Petrichor Consulting processing my personal
          information to respond to this enquiry.
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
