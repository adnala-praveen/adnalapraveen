import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/portfolio-data";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/fx/Reveal";
import { TiltCard } from "@/components/fx/TiltCard";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        eyebrow="Education"
        title="An academic journey built on consistency"
        description="From secondary school to a completed MBA in Finance — each stage backed by strong scores."
      />

      <div className="relative mt-14 pl-8 sm:pl-12">
        <motion.span
          aria-hidden
          className="absolute left-[7px] top-2 w-px origin-top sm:left-[15px]"
          style={{ backgroundImage: "var(--gradient-aurora)", bottom: "1rem" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        />

        <div className="space-y-6">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.08} className="relative">
              <span
                aria-hidden
                className="absolute -left-8 top-8 grid size-4 place-items-center rounded-full sm:-left-12"
                style={{
                  backgroundImage: item.highlight
                    ? "linear-gradient(120deg, var(--gold), var(--aurora-2))"
                    : "var(--gradient-aurora)",
                }}
              >
                <span className="size-1.5 rounded-full bg-background" />
              </span>

              <TiltCard className="p-6 sm:p-7" intensity={5}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-surface-strong">
                      <GraduationCap
                        className={`size-4 ${item.highlight ? "text-gold" : "text-accent"}`}
                      />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{item.degree}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.school} · {item.detail}
                      </p>
                      {item.badge && (
                        <span className="mt-3 inline-flex rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                    {item.period}
                  </span>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
