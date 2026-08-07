import { skillGroups } from "@/lib/portfolio-data";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/fx/Reveal";
import { TiltCard } from "@/components/fx/TiltCard";
import { Bot, Calculator, Cpu, LineChart, Users, Workflow } from "lucide-react";

const icons = [LineChart, Calculator, Cpu, Workflow, Bot, Users];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A toolkit that spans books, data and people"
        description="Grouped by how I actually use them day to day — not by progress bars."
        align="center"
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[i] ?? LineChart;
          return (
            <Reveal key={group.title} delay={i * 0.07}>
              <TiltCard className="h-full p-7">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-surface-strong">
                    <Icon className="size-5 text-accent" />
                  </span>
                  <span className="font-display text-4xl font-semibold text-foreground/10">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{group.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {group.caption}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 text-sm text-foreground/85 transition-transform duration-300 hover:translate-x-1"
                    >
                      <span
                        className="size-1.5 rounded-full"
                        style={{ backgroundImage: "var(--gradient-aurora)" }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
