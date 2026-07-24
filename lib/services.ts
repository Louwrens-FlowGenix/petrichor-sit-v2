export type Service = {
  slug: string;
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  includes: string[];
  body: { heading: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "bookkeeping",
    name: "Bookkeeping",
    short:
      "Accurate, up-to-date books on Xero, reconciled monthly, so you always know where you stand.",
    metaTitle: "Bookkeeping Services for Small Businesses | Petrichor Consulting",
    metaDescription:
      "Monthly bookkeeping on Xero for South African startups and small businesses. Bank reconciliations, supplier and customer ledgers, management reports. From R2,500/month.",
    intro:
      "Good bookkeeping is not data capture — it is the foundation every other financial decision rests on. We maintain your books on Xero, reconcile them monthly, and hand you numbers you can actually use.",
    includes: [
      "Full processing of bank, card and petty cash transactions",
      "Monthly bank reconciliations",
      "Customer and supplier ledger maintenance",
      "Fixed asset registers and depreciation schedules",
      "Monthly management reports: profit & loss, balance sheet, cash flow",
      "Clean year-end handover for financial statements and tax",
    ],
    body: [
      {
        heading: "Why Xero, and what that means for you",
        text: "We run client books on Xero because live bank feeds, automated matching rules and a clean audit trail mean fewer errors and less time spent on capture — time we spend on review and insight instead. You get real-time access to your own numbers from anywhere, and your records are structured correctly from day one for VAT, income tax and annual financial statements.",
      },
      {
        heading: "Built for businesses that are still growing",
        text: "A five-invoice-a-month startup does not need the same service as a business running stock, foreign suppliers and multiple bank accounts. We scope bookkeeping to your actual volume and complexity, and the retainer scales as you do — you are never paying for capacity you don't use.",
      },
      {
        heading: "Catch-up and clean-up work",
        text: "Behind on your books? We regularly take on catch-up engagements — reconstructing records from bank statements, correcting historic misallocations, and bringing entities back into a state where VAT and income tax returns can be filed with confidence.",
      },
    ],
    faqs: [
      {
        q: "What does bookkeeping cost?",
        a: "Monthly retainers start from R2,500/month for a straightforward small business, scoped on transaction volume and complexity. Once-off catch-up work is quoted per engagement.",
      },
      {
        q: "Do I need to buy a Xero subscription?",
        a: "Yes — the subscription is in your name so your data always belongs to you. We help you choose the right plan and set everything up, including bank feeds.",
      },
      {
        q: "Can you take over from my current bookkeeper or system?",
        a: "Yes. We handle conversions from spreadsheets, Sage, QuickBooks and manual records onto Xero, including opening balances and historic comparatives where needed.",
      },
    ],
  },
  {
    slug: "payroll",
    name: "Payroll Administration",
    short:
      "Payslips, PAYE/UIF/SDL submissions and IRP5s handled end-to-end on SimplePay.",
    metaTitle: "Payroll Services & PAYE Compliance | Petrichor Consulting",
    metaDescription:
      "Outsourced payroll for South African small businesses on SimplePay: payslips, EMP201 and EMP501 submissions, UIF, SDL, IRP5s and leave administration.",
    intro:
      "Payroll is unforgiving — a late EMP201 attracts an immediate 10% penalty, and reconciliation errors surface at the worst possible time. We run payroll properly, every month, so your people are paid right and SARS has nothing to query.",
    includes: [
      "Monthly payslips on SimplePay with employee self-service access",
      "EMP201 submissions (PAYE, UIF, SDL) and payment schedules",
      "Bi-annual EMP501 reconciliations and IRP5/IT3(a) certificates",
      "UIF declarations to the Department of Employment and Labour",
      "Leave, overtime and allowance administration",
      "Employment Tax Incentive (ETI) calculations where applicable",
    ],
    body: [
      {
        heading: "Compliance without the deadline anxiety",
        text: "PAYE, UIF and SDL each carry their own filing and payment deadlines, and the EMP501 reconciliation cycle adds two more. We manage the full calendar, submit on time, and keep proof of every submission — so if SARS ever asks, the answer is a document, not a scramble.",
      },
      {
        heading: "Structuring pay correctly",
        text: "How a package is structured affects both the employee's take-home pay and your cost to company. We advise on travel allowances, retirement fund contributions within the 27.5% deduction cap, medical scheme fees tax credits, and ETI eligibility for qualifying young employees — so packages are efficient and defensible.",
      },
      {
        heading: "From one employee to a full team",
        text: "Whether you are registering as an employer for the first time or migrating an established payroll, we handle the setup: PAYE/UIF/SDL registrations, employee onboarding, and historic take-on so year-to-date figures carry over correctly.",
      },
    ],
    faqs: [
      {
        q: "When do I have to register for PAYE?",
        a: "As soon as you pay any employee above the tax threshold, or become liable to withhold employees' tax. We assess your position and handle the SARS registration if it's required.",
      },
      {
        q: "What happens if I've missed submissions?",
        a: "We bring the payroll up to date, file the outstanding returns, and where there are reasonable grounds we prepare remission requests for penalties. The sooner it's addressed, the more options you have.",
      },
      {
        q: "Do employees get their own payslip access?",
        a: "Yes — SimplePay gives each employee a self-service portal for payslips and IRP5s, which also cuts down the admin requests landing on your desk.",
      },
    ],
  },
  {
    slug: "tax",
    name: "Tax Compliance & Consulting",
    short:
      "Income tax, provisional tax and VAT — filed on time, structured intelligently, defended when needed.",
    metaTitle: "Tax Compliance & Consulting South Africa | Petrichor Consulting",
    metaDescription:
      "Company and individual tax returns, provisional tax, VAT registration and returns, SARS dispute resolution and tax planning — by a Registered Tax Practitioner.",
    intro:
      "Tax is where most small businesses leak money — through penalties on the compliance side and missed structuring on the planning side. As a Registered Tax Practitioner practice, we handle both: returns filed correctly and on time, and a tax position that is deliberate rather than accidental.",
    includes: [
      "Company (ITR14) and individual (ITR12) income tax returns",
      "Provisional tax calculations and IRP6 submissions",
      "VAT registration, VAT201 returns and input tax reviews",
      "SARS verifications, audits, objections and appeals",
      "Tax clearance / compliance status (TCS) applications",
      "Tax planning: salary vs dividends, asset allowances, structuring",
    ],
    body: [
      {
        heading: "Compliance that holds up under scrutiny",
        text: "Filing a return is easy; filing one that survives a SARS verification is the actual job. We prepare returns from properly reconciled records, keep the supporting schedules SARS asks for, and respond to verifications and audits on your behalf — including objections and appeals where assessments are wrong.",
      },
      {
        heading: "Provisional tax without the guesswork",
        text: "Underestimate provisional tax and you face penalties; overestimate and you starve your own cash flow. We calculate estimates from live management accounts rather than thumb-suck, and revisit them before each IRP6 deadline so the number is defensible in both directions.",
      },
      {
        heading: "Planning while the options are still open",
        text: "Most tax outcomes are decided long before the return is filed — when you choose how to pay yourself, finance an asset, or structure a sale. We advise on salary-versus-dividend mixes, Section 12C and wear-and-tear allowances on equipment, small business corporation rates, and VAT consequences of transactions before you commit to them.",
      },
    ],
    faqs: [
      {
        q: "When must my business register for VAT?",
        a: "From 1 April 2026, registration is compulsory once taxable supplies exceed R2.3 million in any consecutive 12-month period. Voluntary registration is possible from R120,000. Whether voluntary registration helps or hurts depends on your customers and cost base — we assess it case by case.",
      },
      {
        q: "Can you fix a mess with SARS?",
        a: "Usually, yes. Outstanding returns, disputed assessments, unallocated payments and penalty remissions are everyday work for us. The critical thing is to engage with SARS formally and quickly — ignoring correspondence removes your remedies.",
      },
      {
        q: "Are you registered with SARS as a practitioner?",
        a: "Yes — Petrichor's returns are filed by a Registered Tax Practitioner, registered with SARS through SAIPA as the recognised controlling body. Verification details are available on request.",
      },
    ],
  },
  {
    slug: "financial-statements",
    name: "Annual Financial Statements",
    short:
      "IFRS for SMEs compliant financial statements, compiled on CaseWare, ready for banks, SARS and investors.",
    metaTitle: "Annual Financial Statements (AFS) | Petrichor Consulting",
    metaDescription:
      "Compilation of annual financial statements under IFRS for SMEs on CaseWare for South African companies — for Companies Act compliance, SARS, banks and investors.",
    intro:
      "Annual financial statements are a Companies Act requirement — but done properly, they are also the document that unlocks finance, satisfies SARS, and tells you what your business is actually worth. We compile AFS on CaseWare under IFRS for SMEs, the standard trusted by banks and auditors.",
    includes: [
      "Compilation of AFS under IFRS for SMEs",
      "CaseWare Cloud working papers and lead schedules",
      "Companies Act disclosures and directors' responsibilities",
      "Deferred tax computations and reconciliations",
      "Support schedules aligned to the ITR14 tax return",
      "Liaison with auditors or independent reviewers where required",
    ],
    body: [
      {
        heading: "Why the standard and the software matter",
        text: "Banks, investors and SARS all read financial statements against a known framework. Compiling on CaseWare under IFRS for SMEs means your AFS follow the same structure and disclosure discipline the big firms use — which shortens due diligence, speeds up credit applications, and removes questions before they're asked.",
      },
      {
        heading: "AFS and your tax return, reconciled",
        text: "Your ITR14 is assessed against your financial statements, and mismatches trigger verifications. Because we prepare both from the same working papers, the accounting profit, tax computation and return reconcile line by line — no orphan differences for SARS to query.",
      },
      {
        heading: "Does your company need an audit?",
        text: "Most owner-managed companies don't — the Companies Act's Public Interest Score determines whether you need an audit, an independent review, or a compilation. We calculate your score, tell you the minimum requirement, and prepare accordingly, so you're not paying for assurance you don't legally need.",
      },
    ],
    faqs: [
      {
        q: "How quickly can you produce AFS?",
        a: "From clean books, typically two to three weeks depending on complexity. If the books need catch-up work first, we quote the clean-up and the compilation together so there are no surprises.",
      },
      {
        q: "My bank is asking for signed AFS — can you help at short notice?",
        a: "Often, yes. Tell us the deadline upfront; urgent engagements are possible where the underlying records allow it.",
      },
      {
        q: "Can you prepare prior-year statements that were never done?",
        a: "Yes. Multi-year catch-up compilations are common, particularly for companies regularising their CIPC and SARS compliance.",
      },
    ],
  },
  {
    slug: "cipc",
    name: "CIPC Services",
    short:
      "Company registrations, annual returns, director changes and beneficial ownership filings — handled.",
    metaTitle: "CIPC Company Registration & Compliance | Petrichor Consulting",
    metaDescription:
      "CIPC company registration, annual returns, director and address changes, MOI amendments and beneficial ownership filings for South African companies.",
    intro:
      "CIPC compliance is easy to ignore and expensive to neglect — miss annual returns and your company is deregistered, with your bank account frozen and contracts voidable. We keep your statutory record clean, from incorporation onward.",
    includes: [
      "New company registrations (including name reservation and MOI)",
      "CIPC annual returns and compliance checklists",
      "Beneficial ownership register filings",
      "Director appointments, resignations and changes",
      "Registered address and company name changes",
      "Company deregistrations and re-instatements",
    ],
    body: [
      {
        heading: "Starting a company properly",
        text: "Registration is the easy part — the decisions around it are what matter: share structure, directors, financial year-end, and the registrations that follow (SARS income tax, PAYE, VAT, UIF, COIDA). We register the company and sequence the rest so you're trading compliantly from day one, not retrofitting it later.",
      },
      {
        heading: "The filings that keep you alive",
        text: "Every company must file a CIPC annual return in its anniversary month and keep its beneficial ownership register current — both now enforced with real consequences, up to deregistration. As part of a retainer we track these dates and file on time, every year.",
      },
      {
        heading: "Fixing a lapsed company",
        text: "If your company has been referred for deregistration or already deregistered for non-filing, re-instatement is possible but procedural. We manage the process end-to-end, including the outstanding returns and supporting documents CIPC requires.",
      },
    ],
    faqs: [
      {
        q: "How long does a company registration take?",
        a: "Typically a few business days once documents are signed, subject to CIPC processing times and name approval. We handle the entire submission.",
      },
      {
        q: "What is beneficial ownership and does it apply to me?",
        a: "All companies must file and maintain a register of the natural persons who ultimately own or control them. It applies to virtually every private company — and it must be updated when ownership changes, not just filed once.",
      },
      {
        q: "Can you act as our ongoing company secretary?",
        a: "For most small companies, our retainer covers the statutory essentials: annual returns, registers, and changes as they arise. Larger governance needs are scoped separately.",
      },
    ],
  },
  {
    slug: "advisory",
    name: "Business Advisory",
    short:
      "Management accounts, cash-flow planning and decision support from someone who knows your numbers.",
    metaTitle: "Business Advisory for Growing Companies | Petrichor Consulting",
    metaDescription:
      "Strategic financial advisory for South African SMEs: management accounts, budgets and cash-flow forecasts, pricing and structuring decisions, and finance readiness.",
    intro:
      "Most small businesses only hear from their accountant at year-end — after every decision has already been made. Advisory is the opposite: using your live numbers to make better calls on pricing, hiring, financing and structure while they can still be changed.",
    includes: [
      "Monthly or quarterly management accounts with commentary",
      "Budgets, forecasts and cash-flow planning",
      "Pricing, margin and break-even analysis",
      "Finance applications: lender-ready packs and projections",
      "Remuneration structuring for owners and key staff",
      "Transaction support: buying, selling or restructuring a business",
    ],
    body: [
      {
        heading: "Numbers with a narrative",
        text: "A management report you don't understand is decoration. Ours come with commentary in plain language: what moved, why it moved, and what — if anything — you should do about it. Over time that builds the financial instinct most owners only develop through expensive mistakes.",
      },
      {
        heading: "Cash flow is the discipline",
        text: "Profitable businesses die of cash-flow failure regularly. We build rolling forecasts that account for the timing reality of your business — VAT and provisional tax payment dates, debtor collection cycles, stock commitments — so you see the squeeze months before they arrive.",
      },
      {
        heading: "Advice grounded in your actual business",
        text: "Because we run your books, our advice starts from your real numbers, not generic benchmarks. Whether it's whether to register for VAT voluntarily, how to structure a new hire's package, or whether that piece of equipment should be bought, financed or leased — the answer is calculated, not opined.",
      },
    ],
    faqs: [
      {
        q: "Is advisory only for bigger businesses?",
        a: "No — the highest-leverage decisions (pricing, entity structure, owner remuneration) are made early, when businesses are small. A few hours of advisory at the right moment routinely pays for itself many times over.",
      },
      {
        q: "Do I need a bookkeeping retainer to get advisory?",
        a: "No, but it helps — advice is only as good as the numbers underneath it. For once-off advisory we'll first assess whether your records support the analysis you need.",
      },
      {
        q: "Can you help me raise finance?",
        a: "We prepare the financial pack lenders and investors expect — historic statements, management accounts, and forward projections with stated assumptions — and support you through their questions.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
