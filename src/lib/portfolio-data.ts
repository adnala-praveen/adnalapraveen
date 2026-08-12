export const profile = {
  name: "Adnala Praveen",
  firstName: "Praveen",
  roles: ["Finance Analyst", "Accountant", "Financial Data Storyteller"],
  email: "adnalapraveen@gmail.com",
  cvUrl: "https://adnala-praveen.github.io/praveen-portfolio/Adnala_Praveen_Resume.pdf",
  photo: "https://adnala-praveen.github.io/praveen-portfolio/praveen.jpg",
  photoAlt: "https://adnala-praveen.github.io/praveen-portfolio/praveen-down.jpg",
  tagline:
    "A motivated MBA graduate specializing in Finance with practical knowledge of financial analysis, accounting principles, and business operations.",
  intro:
    "Skilled in using Tally ERP, SQL, and Advanced Excel to drive organizational growth through data-driven financial decision-making.",
  about:
    "I demonstrate strong analytical skills, structured thinking, and the ability to learn quickly in fast-paced environments. I am a Gold Medalist in the Mandal Level Mathematics Talent Test for exceptional problem-solving ability. Currently, I am expanding my expertise in Tally Prime and ERP systems to support professional financial management.",
};

export const stats = [
  { value: 9.12, suffix: "", label: "B.Com CGPA" },
  { value: 8.8, suffix: "", label: "MBA Aggregate" },
  { value: 88, suffix: "%", label: "Intermediate" },
  { value: 1, suffix: "", label: "Gold Medalist", display: "Gold" },
];

export const strengths = [
  {
    title: "Analytical Thinking",
    body: "Breaking financial statements down to the ratios and trends that actually drive a decision.",
  },
  {
    title: "Structured Execution",
    body: "Ledger-level discipline across accounting, purchase, sales and inventory cycles.",
  },
  {
    title: "Fast Learner",
    body: "Comfortable picking up new ERP modules, reporting formats and compliance rules quickly.",
  },
  {
    title: "Problem Solving",
    body: "Gold Medalist in the Mandal Level Mathematics Talent Test for exceptional problem-solving.",
  },
];

export const experience = [
  {
    role: "Accountant",
    company: "Recaz Polyurethanes Private Limited",
    period: "Currently Working",
    current: true,
    summary:
      "Owning the day-to-day finance operations — from purchase and sales cycles to GST documentation, reconciliation and management reporting.",
    points: [
      "Accounting",
      "Purchase Management",
      "Sales Management",
      "Inventory Management",
      "Vendor Coordination",
      "Invoice Processing",
      "GST Documentation",
      "Bank Reconciliation",
      "Tally Prime",
      "Financial Reporting",
      "Daily Stock Reports",
      "Purchase Orders",
    ],
  },
];

export const education = [
  {
    degree: "MBA (Finance)",
    school: "MRCET",
    detail: "Aggregate: 8.80",
    period: "2024 - 2026",
    highlight: true,
  },
  {
    degree: "Bachelor of Commerce (CA)",
    school: "Osmania University",
    detail: "Aggregate: 9.12",
    period: "2021 - 2024",
  },
  {
    degree: "Intermediate (MEC)",
    school: "NSR Jr College",
    detail: "Percentage: 88%",
    period: "2019 - 2021",
  },
  {
    degree: "School of Secondary Education",
    school: "ZPHS Boys High School",
    detail: "Aggregate: 8.5",
    period: "2014 - 2019",
  },
];

export const skillGroups = [
  {
    title: "Finance",
    caption: "Analysis & interpretation",
    skills: ["Ratio Analysis", "Trend Analysis", "Financial Reporting", "Financial Statements"],
  },
  {
    title: "Accounting",
    caption: "Books, compliance & control",
    skills: ["Tally ERP", "Tally Prime", "GST Documentation", "Bank Reconciliation"],
  },
  {
    title: "Technology",
    caption: "Data & systems",
    skills: ["MS Excel", "SQL", "ERP Software", "MS Word"],
  },
  {
    title: "Automation",
    caption: "Faster, cleaner workflows",
    skills: ["Excel Dashboards", "Advanced Formulas", "Pivot Reporting", "Purchase Orders"],
  },
  {
    title: "AI Tools",
    caption: "Modern research assistance",
    skills: ["AI Research Assistants", "Prompt-based Analysis", "Internet Browsing", "PowerPoint"],
  },
  {
    title: "Soft Skills",
    caption: "How I work with people",
    skills: ["Problem Solving", "Time Management", "Teamwork", "Communication"],
  },
];

export const projects = [
  {
    slug: "sbi",
    title: "Financial Performance Analysis of State Bank of India",
    subtitle: "MBA Major Project",
    featured: true,
    description:
      "A complete evaluation of India's largest public sector bank — profitability, liquidity, solvency and efficiency examined across audited annual reports.",
    points: [
      "Multi-year ratio analysis across profitability, liquidity and solvency",
      "Asset quality review covering gross and net NPA movement",
      "Excel models and charts translating statements into decision inputs",
      "Findings and recommendations for investors and management",
    ],
    tags: ["Excel", "Financial Statements", "Annual Reports", "PowerPoint"],
    href: "/projects/sbi",
  },
  {
    slug: "dr-reddys",
    title: "Financial Performance Analysis",
    subtitle: "Dr. Reddy's Laboratories Ltd",
    featured: false,
    description:
      "Conducted in-depth financial analysis using audited annual reports to evaluate the company's profitability, liquidity, and solvency trends.",
    points: [
      "Analyzed key ratios (ROE, ROA, Current Ratio, Debt-Equity)",
      "Performed multi-year trend analysis on revenue & net profit",
      "Built Excel dashboards for financial visualization",
      "Interpreted results for investment decision-making",
    ],
    tags: ["MS Excel", "Ratio Analysis", "Trend Analysis", "Financial Statements"],
    href: null,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
