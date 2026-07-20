import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { SocialLinks } from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-green-950 text-stone-200">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={80}
              height={70}
              className="h-10 w-auto"
            />
            <span className="font-display text-xl text-stone-50">
              Petrichor Consulting
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-300">
            A remote-first South African accounting firm for startups and
            growing businesses. Where new beginnings flourish.
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <nav aria-label="Services">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ochre-400">
            Services
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-stone-300 transition-colors hover:text-stone-50">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ochre-400">
            Get in touch
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="text-stone-300 transition-colors hover:text-stone-50">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneE164}`} className="text-stone-300 transition-colors hover:text-stone-50">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-stone-300 transition-colors hover:text-stone-50">
                WhatsApp us
              </a>
            </li>
            <li className="pt-1 text-stone-400">
              {site.address.locality}, {site.address.region}, South Africa
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-50/10">
        <div className="wrap flex flex-col gap-3 py-6 text-xs text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-stone-200">
              Privacy policy
            </Link>
            <Link href="/terms" className="hover:text-stone-200">
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
