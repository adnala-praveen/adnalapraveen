import { profile, strengths } from "@/lib/portfolio-data";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/fx/Reveal";
import { TiltCard } from "@/components/fx/TiltCard";
import { Award, BrainCircuit, Gauge, Layers } from "lucide-react";
import suitePhoto from "@/assets/praveen-suite-new.png.asset.json";

const icons = [BrainCircuit, Layers, Gauge, Award];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="Numbers are the story. I make them readable."
        description={profile.about}
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <TiltCard className="h-full p-2">
            <img
              src={suitePhoto.url}
              alt="Praveen Adnala at work"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[1.4rem] object-cover object-[center_25%]"
            />
            <div className="p-6">
              <p className="font-display text-lg font-semibold">Career summary</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                MBA (Finance) graduate now working as an Accountant at Recaz Polyurethanes Private
                Limited — running accounting, purchase, sales and inventory cycles end to end in
                Tally Prime, while continuing to build analysis-led financial reporting.
              </p>
            </div>
          </TiltCard>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {strengths.map((item, i) => {
            const Icon = icons[i] ?? BrainCircuit;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <TiltCard className="h-full p-6">
                  <span
                    className="grid size-11 place-items-center rounded-2xl"
                    style={{ backgroundImage: "var(--gradient-aurora)" }}
                  >
                    <Icon className="size-5 text-primary-foreground" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
