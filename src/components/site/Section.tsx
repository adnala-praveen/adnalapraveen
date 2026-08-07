import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/fx/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        <span
          className="size-1.5 rounded-full"
          style={{ backgroundImage: "var(--gradient-aurora)" }}
        />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      {...(id ? { id } : {})}
      className={`relative mx-auto w-full max-w-6xl scroll-mt-28 px-5 py-20 sm:px-8 md:py-28 ${className}`}
    >
      {children}
    </section>
  );
}

export function Chip({ children, index = 0 }: { children: ReactNode; index?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-foreground/85 transition-colors hover:text-foreground"
    >
      {children}
    </motion.span>
  );
}
