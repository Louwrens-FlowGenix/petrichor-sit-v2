import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing the use of the Petrichor Consulting website and the general basis of our engagements.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <article className="wrap max-w-3xl py-16 sm:py-24">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-3 text-4xl">Terms of service</h1>
      <p className="mt-3 text-sm text-stone-400">Last updated: July 2026</p>

      <div className="mt-10 space-y-8 leading-relaxed text-stone-500 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-green-900">
        <section>
          <h2>About these terms</h2>
          <p className="mt-3">
            These terms govern your use of this website, operated by{" "}
            {site.legalName}. By using the site you accept them. Professional
            services are rendered only under a signed engagement letter, which
            takes precedence over anything on this website.
          </p>
        </section>

        <section>
          <h2>No advice without engagement</h2>
          <p className="mt-3">
            Content on this website is general information about our services
            and about South African accounting and tax topics. It is not
            professional advice and should not be acted on without engaging us
            (or another suitably qualified practitioner) on your specific
            circumstances. Legislation and SARS practice change; we do not
            warrant that page content reflects the position at any given date.
          </p>
        </section>

        <section>
          <h2>Quotes and pricing</h2>
          <p className="mt-3">
            Indicative pricing on this website (including "retainers from{" "}
            {site.pricingFloor}/month") is a starting point, not an offer. All
            fees are confirmed in a written proposal or engagement letter
            based on the scope and complexity of your requirements.
          </p>
        </section>

        <section>
          <h2>Intellectual property</h2>
          <p className="mt-3">
            The content, design and branding of this website belong to{" "}
            {site.legalName} unless otherwise indicated. Third-party product
            names and logos (including Fintura, Xero, SimplePay and CaseWare) are the
            trademarks of their respective owners and are used to indicate the
            software we work in, not any endorsement.
          </p>
        </section>

        <section>
          <h2>Liability</h2>
          <p className="mt-3">
            To the extent permitted by law, we are not liable for loss arising
            from reliance on website content or from interruptions in the
            website's availability. Nothing in these terms limits liability
            that cannot lawfully be limited.
          </p>
        </section>

        <section>
          <h2>Law</h2>
          <p className="mt-3">
            These terms are governed by the laws of the Republic of South
            Africa.
          </p>
        </section>
      </div>
    </article>
  );
}
