import type { Metadata } from "next";
import { Newsreader, Archivo, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

const display = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const sans = Archivo({ subsets: ["latin"], variable: "--font-sans" });
const mono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Petrichor Consulting | Startup Accountants South Africa",
    template: "%s | Petrichor Consulting",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: site.url,
    siteName: site.name,
    title: "Petrichor Consulting | Startup Accountants South Africa",
    description: site.description,
    images: [{ url: "/images/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petrichor Consulting | Startup Accountants South Africa",
    description: site.description,
    images: ["/images/og.png"],
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/images/petrichor-logo-mark.png`,
    image: `${site.url}/images/og.png`,
    description: site.description,
    email: site.email,
    telephone: site.phoneE164,
    priceRange: "Retainers from R2,500/month",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: { "@type": "Country", name: "South Africa" },
    founder: {
      "@type": "Person",
      name: site.founder.name,
      jobTitle: site.founder.role,
      hasCredential: site.founder.credentials,
    },
    sameAs: [site.social.linkedin, site.social.instagram, site.social.facebook],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Accounting & advisory services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${site.url}/services/${s.slug}`,
        },
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
