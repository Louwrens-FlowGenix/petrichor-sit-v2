import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `${site.url}/services/${s.slug}`,
      images: [{ url: "/images/og.png", width: 1200, height: 630 }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.metaDescription,
    url: `${site.url}/services/${s.slug}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Country", name: "South Africa" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article>
        <header className="border-b border-green-950/10">
          <div className="wrap py-16 sm:py-24">
            <nav aria-label="Breadcrumb" className="font-mono text-xs text-stone-400">
              <Link href="/" className="hover:text-green-800">Home</Link>
              <span aria-hidden="true"> / </span>
              <Link href="/#services" className="hover:text-green-800">Services</Link>
              <span aria-hidden="true"> / </span>
              <span className="text-green-900">{s.name}</span>
            </nav>
            <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] sm:text-5xl">{s.name}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-500">{s.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#contact" className="btn-primary">Get a quote</Link>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </header>

        <div className="wrap grid gap-16 py-16 sm:py-20 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            {s.body.map((b) => (
              <section key={b.heading}>
                <h2 className="font-display text-2xl text-green-900">{b.heading}</h2>
                <p className="mt-4 leading-relaxed text-stone-500">{b.text}</p>
              </section>
            ))}

            <section>
              <h2 className="font-display text-2xl text-green-900">Common questions</h2>
              <dl className="mt-6 divide-y divide-green-950/10 border-y border-green-950/10">
                {s.faqs.map((f) => (
                  <div key={f.q} className="py-5">
                    <dt className="font-medium text-green-950">{f.q}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-stone-500">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-green-950/10 bg-stone-100/60 p-7">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
                What's included
              </p>
              <ul className="mt-4 space-y-3 text-sm text-stone-500">
                {s.includes.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="text-ochre-500" aria-hidden="true">—</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <nav aria-label="Other services" className="mt-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
                Other services
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {services
                  .filter((x) => x.slug !== s.slug)
                  .map((x) => (
                    <li key={x.slug}>
                      <Link
                        href={`/services/${x.slug}`}
                        className="text-green-800 underline-offset-2 hover:underline"
                      >
                        {x.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
          </aside>
        </div>
      </article>
    </>
  );
}
