import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Petrichor Consulting (Pty) Ltd collects, uses and protects personal information under POPIA.",
  alternates: { canonical: "/privacy-policy" },
};

/*
 * NOTE FOR LOUWRENS: you have already prepared full POPIA documentation for
 * Petrichor (Section 51 Manual, ROPA). Replace or extend the text below with
 * your own approved wording — this is a sound default, but your compliance
 * documents are the source of truth.
 */

export default function PrivacyPolicy() {
  return (
    <article className="wrap max-w-3xl py-16 sm:py-24">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-3 text-4xl">Privacy policy</h1>
      <p className="mt-3 text-sm text-stone-400">Last updated: July 2026</p>

      <div className="mt-10 space-y-8 leading-relaxed text-stone-500 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-green-900">
        <section>
          <h2>Who we are</h2>
          <p className="mt-3">
            {site.legalName} ("Petrichor", "we") is a South African accounting
            and advisory firm and a responsible party as defined in the
            Protection of Personal Information Act, 4 of 2013 (POPIA). Contact:{" "}
            {site.email}.
          </p>
        </section>

        <section>
          <h2>What we collect and why</h2>
          <p className="mt-3">
            Through this website we collect the personal information you
            submit via our contact form or send us on WhatsApp or email — your
            name, contact details and the content of your enquiry. We process
            it for one purpose: to respond to you and, if you engage us, to
            begin onboarding. Client engagements are governed by a separate
            engagement letter and our full privacy documentation.
          </p>
        </section>

        <section>
          <h2>Legal basis and consent</h2>
          <p className="mt-3">
            We process enquiry information on the basis of your consent (given
            when you submit the form) and, where an engagement follows, for
            the conclusion and performance of a contract. You may withdraw
            consent at any time by contacting us.
          </p>
        </section>

        <section>
          <h2>Sharing and operators</h2>
          <p className="mt-3">
            We do not sell personal information. We use reputable service
            providers as operators to run this website and our practice —
            including hosting (Vercel) and transactional email (Resend). Some
            operators process data outside South Africa; where they do, we
            rely on their contractual safeguards consistent with section 72 of
            POPIA.
          </p>
        </section>

        <section>
          <h2>Retention and security</h2>
          <p className="mt-3">
            Enquiry information is kept only as long as needed to deal with
            your enquiry or as required by law. We apply reasonable technical
            and organisational measures to protect personal information
            against loss, unauthorised access and unlawful processing.
          </p>
        </section>

        <section>
          <h2>Your rights</h2>
          <p className="mt-3">
            Under POPIA you may request access to, correction of, or deletion
            of your personal information, and you may object to processing.
            Requests can be sent to {site.email}. You also have the right to
            lodge a complaint with the Information Regulator
            (inforeg.org.za). Our PAIA manual is available on request.
          </p>
        </section>

        <section>
          <h2>Cookies and analytics</h2>
          <p className="mt-3">
            This website does not set marketing or tracking cookies. If we
            introduce analytics in future, this policy will be updated and,
            where required, your consent requested.
          </p>
        </section>
      </div>
    </article>
  );
}
