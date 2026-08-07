import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/portfolio-data";
import { Chip, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/fx/Reveal";
import { TiltCard } from "@/components/fx/TiltCard";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where the ledgers meet the business"
        description="A career timeline built on hands-on ownership of finance operations."
      />

      <div className="relative mt-14 pl-8 sm:pl-12">
        <motion.span
          aria-hidden
          className="absolute left-[7px] top-2 w-px origin-top sm:left-[15px]"
          style={{ backgroundImage: "var(--gradient-aurora)", bottom: "1rem" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />

        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.1} className="relative">
            <span
              aria-hidden
              className="absolute -left-8 top-8 grid size-4 place-items-center rounded-full sm:-left-12"
              style={{ backgroundImage: "var(--gradient-aurora)" }}
            >
              <span className="size-1.5 rounded-full bg-background" />
            </span>

            <TiltCard className="p-7 sm:p-9" intensity={5}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-surface-strong">
                  <Briefcase className="size-4 text-accent" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                </div>
                {job.current && (
                  <span className="glass ml-auto inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-accent">
                    <span className="size-1.5 animate-pulse rounded-full bg-accent" />
                    {job.period}
                  </span>
                )}
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.points.map((point, idx) => (
                  <Chip key={point} index={idx}>
                    {point}
                  </Chip>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
