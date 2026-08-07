import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  ClipboardList,
  FileSpreadsheet,
  Lightbulb,
  Presentation,
  Target,
} from "lucide-react";
import { AuroraBackground } from "@/components/fx/AuroraBackground";
import { ScrollProgress } from "@/components/fx/ScrollProgress";
import { SmoothScroll } from "@/components/fx/SmoothScroll";
import { CustomCursor } from "@/components/fx/CustomCursor";
import { Reveal } from "@/components/fx/Reveal";
import { TiltCard } from "@/components/fx/TiltCard";
import { Counter } from "@/components/fx/Counter";
import { Chip, Section, SectionHeading } from "@/components/site/Section";
import { Footer } from "@/components/site/Footer";
import cover from "@/assets/project-sbi.jpg";

const title = "Financial Performance Analysis of State Bank of India — Praveen Adnala";
const description =
  "MBA major project: a five-year financial performance analysis of State Bank of India covering profitability, liquidity, solvency, asset quality and efficiency ratios with findings and recommendations.";

export const Route = createFileRoute("/projects/sbi")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SbiProject,
});

const objectives = [
  "Evaluate the profitability position of State Bank of India over the study period.",
  "Assess liquidity and the bank's ability to meet short-term obligations.",
  "Examine solvency and capital adequacy against regulatory requirements.",
  "Study asset quality through gross and net NPA movement.",
  "Measure operational efficiency and cost management.",
  "Offer practical recommendations for investors and management.",
];

const methodology = [
  {
    step: "Data collection",
    body: "Secondary data taken from SBI's audited annual reports, RBI publications and official disclosures for five financial years.",
  },
  {
    step: "Data organisation",
    body: "Balance sheet, profit & loss and key disclosures reorganised into a comparative Excel workbook.",
  },
  {
    step: "Ratio computation",
    body: "Profitability, liquidity, solvency, asset-quality and efficiency ratios calculated year on year.",
  },
  {
    step: "Trend & comparative analysis",
    body: "Year-on-year trends charted, with peer benchmarking against the public sector banking average.",
  },
  {
    step: "Interpretation",
    body: "Findings interpreted against the bank's strategy, credit cycle and regulatory environment.",
  },
];

const ratios = [
  {
    group: "Profitability",
    items: [
      { name: "Return on Equity (ROE)", value: 16.5, unit: "%", scale: 25 },
      { name: "Return on Assets (ROA)", value: 1.04, unit: "%", scale: 2 },
      { name: "Net Interest Margin", value: 3.28, unit: "%", scale: 5 },
      { name: "Net Profit Margin", value: 14.2, unit: "%", scale: 25 },
    ],
  },
  {
    group: "Liquidity & Solvency",
    items: [
      { name: "Current Ratio", value: 1.12, unit: "x", scale: 2 },
      { name: "Credit-Deposit Ratio", value: 75.4, unit: "%", scale: 100 },
      { name: "Capital Adequacy (CAR)", value: 14.68, unit: "%", scale: 20 },
      { name: "Debt-Equity Ratio", value: 1.42, unit: "x", scale: 3 },
    ],
  },
  {
    group: "Asset Quality & Efficiency",
    items: [
      { name: "Gross NPA", value: 2.78, unit: "%", scale: 8 },
      { name: "Net NPA", value: 0.67, unit: "%", scale: 3 },
      { name: "Cost-to-Income Ratio", value: 52.6, unit: "%", scale: 80 },
      { name: "Provision Coverage", value: 74.9, unit: "%", scale: 100 },
    ],
  },
];

const findings = [
  "Profitability improved steadily across the study period, with ROE recovering strongly on the back of higher net interest income.",
  "Asset quality showed the sharpest improvement — gross and net NPA ratios declined every year as recoveries and write-offs outpaced fresh slippages.",
  "Capital adequacy remained comfortably above the regulatory minimum, indicating a solid solvency cushion.",
  "Liquidity stayed adequate, though the credit-deposit ratio rose as loan growth outpaced deposit mobilisation.",
  "Operating efficiency lagged: the cost-to-income ratio stayed elevated because of a large branch network and staff cost base.",
];

const recommendations = [
  "Strengthen low-cost CASA deposit mobilisation to protect the net interest margin.",
  "Continue digital-first service delivery to bring the cost-to-income ratio down.",
  "Sustain the tightened credit appraisal and monitoring that drove NPA reduction.",
  "Expand fee and non-interest income streams to reduce dependence on lending spreads.",
  "Maintain the capital buffer above regulatory minimums to support credit growth.",
];

const tools = [
  { name: "Excel", Icon: FileSpreadsheet },
  { name: "Financial Statements", Icon: ClipboardList },
  { name: "Annual Reports", Icon: BookOpen },
  { name: "PowerPoint", Icon: Presentation },
];

function SbiProject() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />
      <AuroraBackground />

      <main>
        <section className="relative mx-auto max-w-6xl px-5 pb-6 pt-28 sm:px-8 md:pt-36">
          <Link
            to="/"
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Back to portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-accent">
              MBA Major Project
            </span>
            <h1 className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">
              <span className="text-gradient">
                Financial Performance Analysis of State Bank of India
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <Chip key={tool.name} index={i}>
                  {tool.name}
                </Chip>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong mt-12 overflow-hidden rounded-[2rem] p-2"
          >
            <img
              src={cover}
              alt="Financial performance analysis of State Bank of India"
              width={1280}
              height={900}
              className="h-64 w-full rounded-[1.6rem] object-cover sm:h-96"
            />
          </motion.div>
        </section>

        <Section>
          <SectionHeading
            eyebrow="Overview"
            title="Reading India's largest bank through its own numbers"
            description="State Bank of India is the country's largest public sector bank by assets, deposits and branch network. This study evaluates its financial health using published, audited data — testing whether reported growth translates into genuine profitability, sound asset quality and a stable solvency position."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { label: "Study period", value: "5 financial years" },
              { label: "Data source", value: "Audited annual reports" },
              { label: "Ratios analysed", value: "12 key ratios" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <TiltCard className="p-7" intensity={5}>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-3 font-display text-2xl font-semibold text-foreground">
                    {item.value}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeading eyebrow="Objectives" title="What the study set out to answer" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {objectives.map((objective, i) => (
              <Reveal key={objective} delay={i * 0.06}>
                <TiltCard className="flex h-full items-start gap-4 p-6" intensity={4}>
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-surface-strong">
                    <Target className="size-4 text-accent" />
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/85">{objective}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="Methodology"
            title="From annual report to interpretation"
            description="A secondary-research design, executed in five sequential stages."
          />
          <div className="relative mt-12 pl-8 sm:pl-12">
            <motion.span
              aria-hidden
              className="absolute left-[7px] top-2 w-px origin-top sm:left-[15px]"
              style={{ backgroundImage: "var(--gradient-aurora)", bottom: "1rem" }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <div className="space-y-5">
              {methodology.map((item, i) => (
                <Reveal key={item.step} delay={i * 0.07} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-8 top-7 grid size-4 place-items-center rounded-full sm:-left-12"
                    style={{ backgroundImage: "var(--gradient-aurora)" }}
                  >
                    <span className="size-1.5 rounded-full bg-background" />
                  </span>
                  <TiltCard className="p-6" intensity={4}>
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-sm font-semibold text-accent">
                        0{i + 1}
                      </span>
                      <h3 className="font-display text-lg font-semibold">{item.step}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="Ratio Analysis"
            title="Twelve ratios, three lenses"
            description="Indicative closing-year values from the study workbook. Each bar is scaled within its own benchmark range."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {ratios.map((block, gi) => (
              <Reveal key={block.group} delay={gi * 0.09}>
                <TiltCard className="h-full p-7" intensity={4}>
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-2xl bg-surface-strong">
                      <BarChart3 className="size-4 text-accent" />
                    </span>
                    <h3 className="font-display text-base font-semibold">{block.group}</h3>
                  </div>

                  <div className="mt-7 space-y-6">
                    {block.items.map((item, i) => (
                      <div key={item.name}>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-sm text-foreground/85">{item.name}</span>
                          <span className="font-display text-sm font-semibold text-foreground">
                            <Counter value={item.value} decimals={2} suffix={item.unit} />
                          </span>
                        </div>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-strong">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundImage: "var(--gradient-aurora)" }}
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${Math.min(100, (item.value / item.scale) * 100)}%`,
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, delay: i * 0.08, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Key Findings" title="What the numbers revealed" />
              <div className="mt-10 space-y-4">
                {findings.map((finding, i) => (
                  <Reveal key={finding} delay={i * 0.06}>
                    <TiltCard className="flex items-start gap-4 p-5" intensity={3}>
                      <span className="font-display text-sm font-semibold text-gold">
                        0{i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-foreground/85">{finding}</p>
                    </TiltCard>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Recommendations" title="Where the bank can go next" />
              <div className="mt-10 space-y-4">
                {recommendations.map((rec, i) => (
                  <Reveal key={rec} delay={i * 0.06}>
                    <TiltCard className="flex items-start gap-4 p-5" intensity={3}>
                      <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-surface-strong">
                        <Lightbulb className="size-4 text-accent" />
                      </span>
                      <p className="text-sm leading-relaxed text-foreground/85">{rec}</p>
                    </TiltCard>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading eyebrow="Tools Used" title="Built with a lean analyst stack" align="center" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool, i) => (
              <Reveal key={tool.name} delay={i * 0.07}>
                <TiltCard className="flex flex-col items-center gap-4 p-8 text-center">
                  <span
                    className="grid size-12 place-items-center rounded-2xl"
                    style={{ backgroundImage: "var(--gradient-aurora)" }}
                  >
                    <tool.Icon className="size-5 text-primary-foreground" />
                  </span>
                  <p className="font-display text-sm font-semibold">{tool.name}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-aurora)" }}
            >
              <ArrowLeft className="size-4" /> Back to portfolio
            </Link>
          </Reveal>
        </Section>
      </main>

      <Footer />
    </>
  );
}
