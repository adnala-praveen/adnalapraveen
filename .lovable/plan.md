# Praveen Adnala — Premium Portfolio Redesign

A complete, from-scratch rebuild of your portfolio as a dark, futuristic, glass-and-aurora experience. All existing content is preserved; education, experience and the SBI project are added.

## Look and feel

- Deep navy base with a slow animated aurora gradient mesh and drifting blobs behind everything.
- Glass cards throughout: frosted surfaces, soft glowing borders, elegant gradient edges, generous rounded corners and premium shadows.
- Accent system: electric indigo → cyan → soft violet glow, with a gold-ish highlight for achievements.
- Typography: large editorial display headings paired with a clean geometric body face, wide spacing, strong hierarchy.
- Motion: page reveal, scroll-triggered section reveals, text reveal, animated counters, magnetic buttons, card tilt + spotlight hover, mouse-follow glow, floating icons, scroll progress bar, custom cursor, smooth scrolling. Tuned to feel elegant, not busy — all motion respects reduced-motion preferences.

## Sections (single scrolling home page + dedicated project page)

1. **Loader + hero** — animated name reveal, typing effect cycling "Finance Analyst / Accountant / Financial Analyst", your photo in a glowing glass frame, CTA buttons (Download CV, Contact), animated stats (9.12 CGPA, 8.80 MBA, Gold Medalist), floating finance/tech icons.
2. **About** — professional intro and career summary from your current site, plus interactive strength cards (analytical skills, structured thinking, fast learner, problem solving) with animated highlights.
3. **Experience timeline** — animated vertical timeline. Current role: **Accountant, Recaz Polyurethanes Private Limited (Currently Working)** with all 12 responsibilities as animated chips: Accounting, Purchase Management, Sales Management, Inventory Management, Vendor Coordination, Invoice Processing, GST Documentation, Bank Reconciliation, Tally Prime, Financial Reporting, Daily Stock Reports, Purchase Orders.
4. **Education timeline** — animated academic journey: MBA (Finance), MRCET — **Completed, Post Graduation Completed**, Agg. 8.80; B.Com (CA), Osmania University, 9.12; Intermediate (MEC), NSR Jr College, 88%; SSC, ZPHS Boys High School, 8.5.
5. **Skills** — premium animated cards grouped into Finance, Accounting, Technology, Automation, AI Tools, Soft Skills, using your existing skills (Tally ERP, Tally Prime, ERP Software, MS Excel, SQL, MS Word, PowerPoint, Internet Browsing, Problem Solving, Time Management, Teamwork, Communication) placed into the right groups.
6. **Projects** — redesigned premium cards with tilt, spotlight hover and animated borders.
   - *Financial Performance Analysis — Dr. Reddy's Laboratories Ltd* — kept exactly as-is (all four bullet points and tags: MS Excel, Ratio Analysis, Trend Analysis, Financial Statements).
   - *Financial Performance Analysis of State Bank of India* — new featured project, links to its own page.
7. **Contact** — glass card with an animated form, interactive social/contact icons (email, LinkedIn, resume), smooth reveal.

## Featured SBI project page

Its own route with a premium layout: overview, objectives, methodology, financial ratio analysis (animated stat cards and simple charts for profitability, liquidity, solvency and efficiency ratios), key findings, recommendations, and a tools-used strip (Excel, Financial Statements, Annual Reports, PowerPoint), plus a methodology timeline.

Note: I'll write realistic MBA-project content for the SBI sections. Send me your actual figures/findings any time and I'll swap them in verbatim.

## Two things to confirm as we build

- **Contact form**: I'll build it as an animated form that opens your email client (no backend). If you'd rather have real message storage and email notifications, say so and I'll add Lovable Cloud for it.
- **Project links**: your projects are finance research, not code, so cards will show "View details" / "Download report" rather than Live Demo / GitHub, unless you have links to provide.

## Technical notes

- TanStack Start + React + Tailwind v4, with Motion (Framer Motion) for animation and Lenis for smooth scrolling; GSAP added only if a specific effect needs it. Three.js is skipped — the aurora, particles and mesh are done with CSS/canvas for far better performance on mobile.
- Design tokens (navy background, aurora accents, glass surfaces, glows, gradients, shadows) defined in `src/styles.css`; no hardcoded colors in components.
- Sections built as separate components under `src/components/`; home page rewrites `src/routes/index.tsx`, SBI project at `src/routes/projects.sbi.tsx`.
- Images pulled from your existing site URLs; fonts loaded via `<link>` in `__root.tsx`.
- SEO: per-route title/description/OG tags, semantic HTML, single H1, alt text, lazy-loaded images, responsive down to small mobile, keyboard-accessible and reduced-motion friendly.
