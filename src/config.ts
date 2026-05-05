// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  language: string;
  brandName: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  brandName: "Bhargavi N.",
};

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  links: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "Expertise", href: "#curriculum" },
    { label: "Experience", href: "#cinematic" },
    { label: "Projects", href: "#alumni" },
    { label: "Contact", href: "#footer" },
  ],
  ctaText: "Get in touch",
};

// ============================================================
// Hero
// ============================================================

export interface HeroConfig {
  title: string;
  subtitleLine1: string;
  subtitleLine2: string;
  ctaText: string;
}

export const heroConfig: HeroConfig = {
  title: "Bhargavi",
  subtitleLine1: "Risk & Fraud Analyst specializing in transaction monitoring,",
  subtitleLine2: "KYC/AML compliance, and fraud pattern detection.",
  ctaText: "Explore expertise",
};

// ============================================================
// Capabilities (Curriculum section)
// ============================================================

export interface CapabilityItem {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface CapabilitiesConfig {
  sectionLabel: string;
  items: CapabilityItem[];
}

export const capabilitiesConfig: CapabilitiesConfig = {
  sectionLabel: "Core Competencies",
  items: [
    {
      title: "Fraud Detection & Risk",
      slug: "fraud-risk",
      description: "Investigating 10,000+ monthly transactions across card, ACH, debit, and wire channels. Expertise in account takeover detection, identity theft investigation, chargeback dispute resolution, and synthetic identity fraud detection.",
      image: "images/capability-1.jpg",
    },
    {
      title: "Transaction Monitoring",
      slug: "transaction-monitoring",
      description: "Real-time monitoring on JPMorgan Chase & Co. fraud detection platforms, reviewing high-velocity payment channels. Building daily and weekly fraud reports in SQL and Excel covering alert volumes, fraud loss, and emerging typologies.",
      image: "images/capability-2.jpg",
    },
    {
      title: "KYC / AML Compliance",
      slug: "kyc-aml-compliance",
      description: "Performing KYC verification for 100+ retail and corporate customers daily. Conducting CDD and Enhanced Due Diligence on PEPs and sanctions hits. Applying BSA/AML, OFAC, and FinCEN regulatory frameworks.",
      image: "images/capability-3.jpg",
    },
    {
      title: "Data & Risk Analytics",
      slug: "data-analytics",
      description: "SQL querying with joins, aggregations, and CTEs. Python data analysis with Pandas and NumPy. Tableau and Power BI dashboard design. Trend analysis, KPI reporting, and statistical fraud pattern detection.",
      image: "images/capability-4.jpg",
    },
  ],
};

// ============================================================
// Capability Detail (sub-pages)
// ============================================================

export interface CapabilityDetailData {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface CapabilityDetailConfig {
  sectionLabel: string;
  backLinkText: string;
  prevLabel: string;
  nextLabel: string;
  notFoundText: string;
  capabilities: Record<string, CapabilityDetailData>;
}

export const capabilityDetailConfig: CapabilityDetailConfig = {
  sectionLabel: "Core Competency",
  backLinkText: "Back to home",
  prevLabel: "Previous",
  nextLabel: "Next",
  notFoundText: "Competency not found.",
  capabilities: {
    "fraud-risk": {
      title: "Fraud Detection & Risk Management",
      subtitle: "Proactive defense against financial crime across payment channels.",
      paragraphs: [
        "With 3+ years of hands-on experience in fraud detection, I have developed deep expertise in identifying and mitigating financial crime across card, ACH, debit, and wire payment channels. At JPMorgan Chase & Co., I monitor real-time transactions on enterprise fraud detection platforms, reviewing over 10,000 transactions weekly to identify anomalous patterns and potential fraud events.",
        "My investigative approach combines automated alert triage with manual deep-dive analysis. I examine account takeovers, identity misuse, device anomalies, and abnormal spending behaviors to build comprehensive evidence packages for Tier-2 escalation. This systematic methodology has contributed to measurable reductions in false-positive alert volumes.",
        "In the chargeback and dispute management domain, I validate customer identity and account ownership using KYC data, transaction history, IP intelligence, and behavioral signals. I compile evidence packages aligned to Visa, Mastercard, and Reg E timelines, supporting representments and improving win rates on disputed transactions.",
        "My risk scoring expertise extends beyond operational execution into strategic improvement. I identify recurring fraud patterns and recommend rule and threshold enhancements to fraud strategy teams, directly contributing to reduced analyst review time and strengthened fraud-loss controls.",
      ],
    },
    "transaction-monitoring": {
      title: "Transaction Monitoring & Alert Management",
      subtitle: "Real-time surveillance of high-velocity payment flows with precision.",
      paragraphs: [
        "Transaction monitoring is the frontline defense in modern financial crime prevention. At JPMorgan Chase & Co., I operate enterprise-grade fraud detection platforms to surveil real-time card, ACH, debit, and merchant transactions. The high-velocity environment demands both speed and accuracy in alert triage and investigation.",
        "My daily workflow involves reviewing thousands of system-generated alerts, each requiring rapid risk assessment. I analyze transaction velocity, geolocation mismatches, device fingerprints, merchant risk profiles, and historical spending patterns to make informed decisions on case disposition.",
        "Beyond operational monitoring, I build comprehensive reporting infrastructure. Using SQL and Excel, I create daily and weekly fraud reports covering alert volumes, fraud loss metrics, dispute outcomes, and emerging threat typologies. These insights are surfaced directly to compliance and operations leadership to inform strategic decision-making.",
        "I partner closely with AML and Compliance teams to ensure all investigations align with BSA/AML, OFAC, and internal fraud-policy controls. This cross-functional collaboration ensures that SAR-relevant cases receive proper documentation and escalation through regulatory channels.",
      ],
    },
    "kyc-aml-compliance": {
      title: "KYC / AML Compliance & Regulatory Frameworks",
      subtitle: "End-to-end customer due diligence aligned with global regulatory standards.",
      paragraphs: [
        "Know Your Customer (KYC) and Anti-Money Laundering (AML) compliance form the foundation of financial integrity. At Goldman Sachs, supporting global banking operations, I performed KYC verification for over 100 retail and corporate banking customers daily, reviewing government IDs, address proofs, and beneficial-ownership documentation in strict adherence to RBI and AML guidelines.",
        "My due diligence work spans the full risk spectrum. I conducted Customer Due Diligence (CDD) and Enhanced Due Diligence (EDD) on higher-risk profiles, including Politically Exposed Persons (PEPs) and customers triggering sanctions or watchlist hits. Suspicious cases were meticulously documented and escalated to AML specialists with structured case write-ups.",
        "Sanctions and watchlist screening is a critical component of my compliance expertise. I have hands-on experience with OFAC screening, adverse media monitoring, and PEP identification. This work directly supports regulatory reporting obligations under BSA/AML and FinCEN frameworks.",
        "Quality and process improvement are integral to my compliance approach. I improved verification accuracy through process documentation and SOP refinement, contributing to higher first-pass quality scores in internal QC audits. I also collaborated with onboarding, remediation, and compliance teams to clear backlogs and meet regulatory turnaround times.",
      ],
    },
    "data-analytics": {
      title: "Data Analytics & Risk Intelligence",
      subtitle: "Transforming raw transaction data into actionable fraud intelligence.",
      paragraphs: [
        "Data-driven decision making is at the core of modern fraud prevention. I leverage SQL, Python, Tableau, and Power BI to extract, analyze, and visualize transaction data, turning millions of raw records into actionable intelligence for stakeholders.",
        "My SQL expertise includes complex joins, aggregations, Common Table Expressions (CTEs), and window functions. I use these skills to query transaction databases, build risk-scoring queries, and generate operational reports. Python complements this with Pandas and NumPy for advanced statistical analysis and data manipulation.",
        "Visualization and reporting are where data becomes insight. I design dashboards in Tableau and Power BI that track KPIs including alert volumes, fraud loss rates, false-positive ratios, and investigation outcomes. These dashboards enable leadership to monitor program health and identify emerging trends in real time.",
        "In my self-initiated Fraud Transaction Analysis project, I analyzed 50,000+ synthetic payment transactions to identify high-risk behavioral patterns including velocity anomalies, geo-mismatches, and repeat-offender clusters. I built a tiered risk-scoring model and visualized results in Power BI, demonstrating measurable improvement in detection precision over baseline rule-only logic.",
      ],
    },
  },
};

// ============================================================
// Architecture (CinematicVision section)
// ============================================================

export interface ArchitectureConfig {
  sectionLabel: string;
  videoPath: string;
  title: string;
  description: string;
}

export const architectureConfig: ArchitectureConfig = {
  sectionLabel: "Professional Experience",
  videoPath: "",
  title: "From Hyderabad to Wall Street — building fraud expertise across two continents.",
  description: "My career spans global banking operations at Goldman Sachs and U.S. fintech fraud detection at JPMorgan Chase & Co.. This cross-continental experience gives me unique perspective on both emerging-market regulatory frameworks and high-velocity U.S. payment fraud. I hold an MS in Information Systems from Wilmington University and a BTech in Electronics & Communication Engineering, combining technical depth with domain expertise in financial crime prevention.",
};

// ============================================================
// Research (AlumniArchives section)
// ============================================================

export interface ResearchProject {
  title: string;
  year: string;
  discipline: string;
  image: string;
}

export interface ResearchConfig {
  sectionLabel: string;
  projects: ResearchProject[];
}

export const researchConfig: ResearchConfig = {
  sectionLabel: "Tools & Projects",
  projects: [
    {
      title: "Real-Time Fraud Alert Triage",
      year: "2024",
      discipline: "Fraud Operations",
      image: "images/research-1.jpg",
    },
    {
      title: "Chargeback Dispute Analytics",
      year: "2024",
      discipline: "Risk Analysis",
      image: "images/research-2.jpg",
    },
    {
      title: "PEP & Sanctions Screening",
      year: "2023",
      discipline: "Compliance Tech",
      image: "images/research-3.jpg",
    },
    {
      title: "Synthetic Identity Detection",
      year: "2024",
      discipline: "Data Science",
      image: "images/research-4.jpg",
    },
    {
      title: "Transaction Velocity Monitoring",
      year: "2024",
      discipline: "Fraud Operations",
      image: "images/research-1.jpg",
    },
    {
      title: "AML SAR Filing Workflow",
      year: "2023",
      discipline: "Regulatory Tech",
      image: "images/research-2.jpg",
    },
    {
      title: "Customer Risk Segmentation",
      year: "2024",
      discipline: "Predictive Analytics",
      image: "images/research-3.jpg",
    },
    {
      title: "ATO Detection Pipeline",
      year: "2024",
      discipline: "Network Security",
      image: "images/research-4.jpg",
    },
    {
      title: "Cross-Border Wire Monitoring",
      year: "2024",
      discipline: "Fraud Operations",
      image: "images/research-1.jpg",
    },
    {
      title: "Merchant Risk Scoring Model",
      year: "2024",
      discipline: "Data Science",
      image: "images/research-2.jpg",
    },
    {
      title: "KYC Remediation Clearance",
      year: "2023",
      discipline: "Process Improvement",
      image: "images/research-3.jpg",
    },
    {
      title: "Geolocation Mismatch Analysis",
      year: "2024",
      discipline: "Behavioral Analytics",
      image: "images/research-4.jpg",
    },
  ],
};

// ============================================================
// Footer
// ============================================================

export interface FooterLinkColumn {
  title: string;
  links: string[];
}

export interface FooterBottomLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  heading: string;
  columns: FooterLinkColumn[];
  copyright: string;
  bottomLinks: FooterBottomLink[];
}

export const footerConfig: FooterConfig = {
  heading: "Let's build fraud-free financial systems together.",
  columns: [
    {
      title: "Connect",
      links: [
        "bhargavinchowdary@gmail.com",
        "+1 (267) 407-1988",
        "Newark, DE (Open to Relocation)",
      ],
    },
    {
      title: "Expertise",
      links: [
        "Fraud Detection",
        "Transaction Monitoring",
        "KYC / AML Compliance",
        "Data Analytics",
      ],
    },
  ],
  copyright: "\u00A9 2026 Bhargavi Nimmagadda. All rights reserved.",
  bottomLinks: [
    { label: "LinkedIn", href: "#" },
    { label: "Resume", href: "#" },
  ],
};
