import { Link } from "@tanstack/react-router";
import { ArrowUpRight, FileText, Sparkles } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { Chip, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/fx/Reveal";
import { TiltCard } from "@/components/fx/TiltCard";
import sbiCover from "@/assets/project-sbi.png.asset.json";
import drlCover from "@/assets/project-drl.png.asset.json";

const covers: Record<string, string> = {
  sbi: sbiCover.url,
  "dr-reddys": drlCover.url,
};

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Research that turns statements into decisions"
        description="Deep-dive financial analysis work, built from audited annual reports."
      />

      <div className="mt-14 grid gap-7">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.1}>
            <TiltCard className="h-full" intensity={4}>
              <div
                className={`grid gap-0 md:grid-cols-[0.9fr_1.1fr] ${
                  project.featured ? "" : "md:[direction:rtl]"
                }`}
              >
                <div className="relative overflow-hidden md:[direction:ltr]">
                  <img
                    src={covers[project.slug]}
                    alt={`${project.title} cover`}
                    loading="lazy"
                    className="h-full min-h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(200deg, transparent 30%, oklch(0.16 0.04 265 / 80%))",
                    }}
                  />
                  {project.featured && (
                    <span className="glass-strong absolute left-5 top-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gold">
                      <Sparkles className="size-3.5" /> Featured
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8 md:[direction:ltr]">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">
                    {project.subtitle}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm text-foreground/85">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full"
                          style={{ backgroundImage: "var(--gradient-aurora)" }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Chip key={tag} index={idx}>
                        {tag}
                      </Chip>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3 pt-1">
                    {project.href ? (
                      <Link
                        to={project.href}
                        className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                        style={{ backgroundImage: "var(--gradient-aurora)" }}
                      >
                        View case study <ArrowUpRight className="size-4" />
                      </Link>
                    ) : (
                      <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground">
                        <FileText className="size-4" /> Report available on request
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
