import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import GoogleReviews from "@/components/GoogleReviews";
import ContactForm from "@/components/ContactForm";

/* ---------- Signature: rain lines ---------- */
function RainLines() {
  // Deterministic, quiet vertical strokes — petrichor, literally.
  const lines = [
    { x: 8, h: 64, d: 0.05 },
    { x: 22, h: 40, d: 0.25 },
    { x: 34, h: 88, d: 0.12 },
    { x: 47, h: 52, d: 0.38 },
    { x: 61, h: 72, d: 0.2 },
    { x: 74, h: 44, d: 0.45 },
    { x: 88, h: 80, d: 0.08 },
  ];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {lines.map((l, i) => (
        <span
          key={i}
          className="animate-rainfall absolute top-0 w-px bg-gradient-to-b from-transparent via-green-800/25 to-green-800/40"
          style={{ left: `${l.x}%`, height: `${l.h}%`, animationDelay: `${l.d}s` }}
        />
      ))}
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const facts = [
    { k: site.stats.clients, v: "clients served" },
    { k: site.stats.years, v: "years' experience" },
    { k: "SAIPA", v: "Professional Accountant (SA)" },
    { k: "SARS", v: "Registered Tax Practitioner" },
  ];
  return (
    <section className="relative border-b border-green-950/10">
      <RainLines />
      <div className="wrap relative grid gap-14 py-20 sm:py-28 lg:grid-cols-[7fr_4fr] lg:gap-20">
        <div className="animate-fadeup">
          <p className="eyebrow">Accounting · Tax · Advisory — South Africa</p>
          <h1 className="mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            The accounting partner for the business you're{" "}
            <em className="text-green-800">still becoming</em>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-500">
            Petrichor Consulting is a remote-first firm for startups and
            growing businesses. We keep you compliant with SARS and CIPC,
            run your books on Xero, and give you numbers you can actually
            decide with — from R2,500/month.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/#contact" className="btn-primary">
              Book a consultation
            </Link>
            <Link href="/#services" className="btn-ghost">
              Explore services
            </Link>
          </div>
        </div>

        {/* The ledger — quiet fact column */}
        <dl className="animate-fadeup self-center [animation-delay:0.15s]">
          {facts.map((f) => (
            <div
              key={f.v}
              className="flex items-baseline justify-between gap-6 border-t border-green-950/10 py-4 last:border-b"
            >
              <dt className="order-2 text-right text-sm text-stone-500">{f.v}</dt>
              <dd className="order-1 font-mono text-xl text-green-900">{f.k}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------- Tools strip ---------- */
function Tools() {
  return (
    <section aria-label="Software we work in" className="border-b border-green-950/10 bg-stone-100/60">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-10 gap-y-4 py-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
          We work in
        </p>
        <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
          {site.tools.map((t) => (
            <div key={t.name} className="flex items-center gap-3" title={t.note}>
              {/* Drop the official brand SVGs into /public/logos — see README */}
              <img src={t.src} alt={t.name} className="h-6 w-auto" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-[4fr_7fr] lg:gap-20">
        <div>
          <p className="eyebrow">About the firm</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Petrichor: the scent of rain on dry earth — the moment before
            everything grows.
          </h2>
        </div>
        <div className="space-y-5 text-[1.05rem] leading-relaxed text-stone-500">
          <p>
            We chose the name deliberately. Petrichor Consulting works with
            businesses at their beginning — startups, young companies, and
            owners stepping into their first serious growth — and stays with
            them as they scale. Accounting, tax and advisory, delivered
            remotely to clients across South Africa.
          </p>
          <p>
            The firm is grounded in a simple principle: you reap what you sow.
            For us that means diligence in the unglamorous work — clean
            reconciliations, deadlines met, records that hold up under
            scrutiny — because that is what compounds into a business that
            banks, investors and SARS take seriously.
          </p>
          <p>
            We are digital-first by design, not by fashion. Cloud accounting,
            structured document workflows and virtual consultations keep our
            overheads low and our response times short — savings that show up
            in your retainer.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Founder ---------- */
function Founder() {
  return (
    <section className="border-y border-green-950/10 bg-stone-100/60 py-20 sm:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <figure className="relative mx-auto w-full max-w-sm">
          <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl border border-ochre-500/40" aria-hidden="true" />
          <Image
            src="/images/louwrens.webp"
            alt="Louwrens da Silva, founder of Petrichor Consulting"
            width={1200}
            height={1500}
            className="relative rounded-2xl object-cover"
            sizes="(min-width: 1024px) 24rem, 90vw"
          />
        </figure>
        <div>
          <p className="eyebrow">Who you'll work with</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Louwrens da Silva</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {site.founder.credentials.map((c) => (
              <li
                key={c}
                className="rounded-full border border-green-800/25 px-3.5 py-1.5 font-mono text-xs text-green-900"
              >
                {c}
              </li>
            ))}
          </ul>
          <img
            src={site.badges.xeroL2.src}
            alt={site.badges.xeroL2.alt}
            className="mt-5 h-16 w-auto"
            loading="lazy"
          />
          <div className="mt-6 space-y-5 leading-relaxed text-stone-500">
            <p>
              Louwrens founded Petrichor Consulting to give small businesses
              the calibre of financial partner usually reserved for much
              bigger ones. He is a SAIPA Professional Accountant (SA) and a
              SARS Registered Tax Practitioner, with {site.stats.years} years
              across bookkeeping, payroll, tax, financial statement
              preparation and business advisory.
            </p>
            <p>
              Beyond the practice, Louwrens serves as a director of trading
              companies in the equipment industry — which means the advice you
              get comes from someone who also sits on the client's side of
              the table: managing cash flow, negotiating with banks, hiring
              people, and answering to SARS on his own returns.
            </p>
            <p className="text-sm text-stone-400">
              Professional registrations are verifiable — details provided on
              request and confirmed directly with SAIPA and SARS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services index ---------- */
function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-28">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Everything a growing business needs from its accountant
          </h2>
        </div>
        <ul className="mt-12">
          {services.map((s) => (
            <li key={s.slug} className="group border-t border-green-950/10 last:border-b">
              <Link
                href={`/services/${s.slug}`}
                className="grid gap-2 py-6 transition-colors hover:bg-green-800/[0.03] sm:grid-cols-[1fr_1.4fr_auto] sm:items-center sm:gap-8 sm:px-4"
              >
                <h3 className="font-display text-2xl text-green-900 group-hover:text-green-800">
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed text-stone-500">{s.short}</p>
                <span
                  aria-hidden="true"
                  className="hidden font-mono text-ochre-500 transition-transform group-hover:translate-x-1 sm:block"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-stone-500">
          Something more specific?{" "}
          <Link href="/#contact" className="text-green-800 underline underline-offset-2">
            Tell us what you need
          </Link>{" "}
          — bespoke engagements are quoted per scope.
        </p>
      </div>
    </section>
  );
}

/* ---------- How we work ---------- */
function Process() {
  const steps = [
    {
      n: "01",
      t: "A short discovery call",
      d: "Thirty minutes, no charge. We look at where your business and records stand, what's urgent, and whether we're the right fit.",
    },
    {
      n: "02",
      t: "A fixed, written proposal",
      d: "You get a scoped proposal with a fixed monthly retainer or engagement fee — no hourly meters, no surprise invoices.",
    },
    {
      n: "03",
      t: "Onboarding and a monthly rhythm",
      d: "We set up or take over your Xero, payroll and SARS profiles, then settle into a predictable monthly cycle of processing, filing and reporting.",
    },
  ];
  return (
    <section className="border-y border-green-950/10 bg-green-950 py-20 text-stone-100 sm:py-28">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow !text-ochre-400">How we work</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Remote-first, fixed-fee, on a schedule you can rely on
          </h2>
        </div>
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="border-t border-stone-50/15 pt-6">
              <span className="font-mono text-sm text-ochre-400">{s.n}</span>
              <h3 className="mt-3 font-display text-xl">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-300">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-20 sm:py-28">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Fixed fees, scoped to your business — not the clock
          </h2>
          <p className="mt-4 leading-relaxed text-stone-500">
            Every quote is based on your actual volume and complexity, agreed
            in writing before work starts.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-800/20 bg-white p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
              Monthly retainers
            </p>
            <p className="mt-4 font-display text-4xl text-green-900">
              from {site.pricingFloor}
              <span className="text-xl text-stone-400">/month</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone-500">
              Ongoing bookkeeping, payroll, VAT and tax compliance, with
              management reporting and advisory built in — one predictable
              fee covering everything agreed in your scope.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-stone-500">
              {["Bookkeeping on Xero", "Payroll & statutory submissions", "VAT & income tax compliance", "Management reports & advisory"].map(
                (x) => (
                  <li key={x} className="flex gap-3">
                    <span className="text-ochre-500" aria-hidden="true">—</span>
                    {x}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="rounded-2xl border border-green-950/10 bg-stone-100/60 p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
              Once-off engagements
            </p>
            <p className="mt-4 font-display text-4xl text-green-900">
              per project
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone-500">
              Standalone work quoted on scope — you'll know the fee before we
              begin.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-stone-500">
              {["Company registration & setup", "Annual financial statements", "Outstanding tax return catch-ups", "SARS disputes & remissions"].map(
                (x) => (
                  <li key={x} className="flex gap-3">
                    <span className="text-ochre-500" aria-hidden="true">—</span>
                    {x}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/#contact" className="btn-primary">
            Get a custom quote
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-green-950/10 bg-stone-100/60 py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Start with a conversation
          </h2>
          <p className="mt-4 leading-relaxed text-stone-500">
            Tell us where your business is and what's keeping you up at
            night. We reply to every enquiry, usually within one business
            day.
          </p>
          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-stone-400">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="text-green-800 underline underline-offset-2">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-stone-400">Phone / WhatsApp</dt>
              <dd className="mt-1">
                <a href={`tel:${site.phoneE164}`} className="text-green-800 underline underline-offset-2">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-stone-400">Based in</dt>
              <dd className="mt-1 text-stone-500">
                {site.address.locality}, {site.address.region} — serving
                clients across South Africa, remotely.
              </dd>
            </div>
          </dl>
        </div>
        <div className="rounded-2xl border border-green-950/10 bg-white p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Tools />
      <About />
      <Founder />
      <Services />
      <Process />
      <Pricing />
      <GoogleReviews />
      <Contact />
    </>
  );
}
