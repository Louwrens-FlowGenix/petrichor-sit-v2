export const site = {
  name: "Petrichor Consulting",
  legalName: "Petrichor Consulting (Pty) Ltd",
  url: "https://petrichor-consult.com",
  tagline: "Accounting, tax & advisory for startups and growing businesses",
  description:
    "Petrichor Consulting is a remote-first South African accounting firm for startups and growing businesses. Bookkeeping, payroll, tax compliance, annual financial statements, CIPC services and business advisory — retainers from R2,500/month.",
  email: "louwrens@petrichor-consult.com",
  phoneDisplay: "+27 77 600 4989",
  phoneE164: "+27776004989",
  whatsapp:
    "https://wa.me/27776004989?text=" +
    encodeURIComponent(
      "Hi Petrichor Consulting, I'd like to enquire about your services."
    ),
  address: {
    locality: "Somerset West",
    region: "Western Cape",
    postalCode: "7130",
    country: "ZA",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/petrichor-consult/",
    instagram: "https://www.instagram.com/petrichor_consult",
    facebook: "https://www.facebook.com/profile.php?id=61578128152465",
  },
  founder: {
    name: "Louwrens da Silva",
    role: "Founder & Director",
    credentials: [
      "Professional Accountant (SA) — SAIPA",
      "Registered Tax Practitioner (SARS)",
    ],
    // Membership numbers intentionally not rendered publicly.
    // Prospective clients can verify SAIPA membership and SARS practitioner
    // registration on request — see README "Credentials" note.
  },
  stats: {
    clients: "50+",
    years: "9+",
  },
  pricingFloor: "R2,500",
  badges: {
    xeroL2: {
      src: "/logos/xero-l2-badge.png",
      alt: "Xero Level 2 Certified Professional partner badge",
    },
  },
  tools: [
    { name: "Fintura", src: "/logos/fintura.png", note: "Financial management" },
    { name: "Xero", src: "/logos/xero.png", note: "Cloud accounting" },
    { name: "SimplePay", src: "/logos/simplepay.png", note: "Payroll" },
    { name: "CaseWare", src: "/logos/caseware.png", note: "Financial statements" },
  ],
} as const;
