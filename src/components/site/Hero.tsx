import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { profile, stats } from "@/lib/portfolio-data";
import suitePhoto from "@/assets/praveen-suite-new.png.asset.json";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { Counter } from "@/components/fx/Counter";
import { RevealText } from "@/components/fx/Reveal";

const floatIcons = ["₹", "%", "Σ", "$", "▲"];

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index] ?? "";
    const delay = deleting ? 45 : text === current ? 1800 : 85;

    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.12em] animate-pulse bg-accent align-middle" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-5 pb-16 pt-36 sm:px-8 md:pt-44">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <Sparkles className="size-3.5 text-accent" />
            Available for finance & accounting roles
          </motion.span>

          <h1 className="mt-6 font-display text-[13vw] font-semibold leading-[0.92] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
            <RevealText text="Hi, I'm" delay={1.4} className="block text-foreground/70" />
            <motion.span
              className="text-gradient block"
              initial={{ opacity: 0, y: "0.4em", filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {profile.firstName}
            </motion.span>
          </h1>

          <p className="mt-5 font-display text-xl font-medium sm:text-2xl md:text-3xl">
            <Typewriter words={profile.roles} />
          </p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {profile.tagline} {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.15 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <MagneticButton href={profile.cvUrl} target="_blank">
              <Download className="size-4" /> Download CV
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              <Mail className="size-4" /> Get in touch
            </MagneticButton>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 2.3 }}
            className="mt-12 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl px-4 py-4">
                <dt className="font-display text-2xl font-semibold text-foreground">
                  {stat.display ? (
                    <span className="text-gold">{stat.display}</span>
                  ) : (
                    <Counter
                      value={stat.value}
                      decimals={stat.suffix === "%" ? 0 : 2}
                      suffix={stat.suffix}
                    />
                  )}
                </dt>
                <dd className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, filter: "blur(14px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[3rem] opacity-40 blur-3xl"
            style={{ backgroundImage: "var(--gradient-aurora)" }}
          />
          <div className="glass-strong relative overflow-hidden rounded-[2.5rem] p-3">
            <img
              src={suitePhoto.url}
              alt={`${profile.name}, finance analyst and accountant`}
              loading="eager"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover object-[center_15%]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-3 rounded-[2rem]"
              style={{
                background:
                  "linear-gradient(160deg, oklch(1 0 0 / 14%), transparent 38%, transparent 70%, oklch(0.16 0.04 265 / 65%))",
              }}
            />
          </div>

          {floatIcons.map((icon, i) => (
            <span
              key={icon}
              aria-hidden
              className="glass absolute grid size-11 place-items-center rounded-2xl font-display text-sm text-accent"
              style={{
                top: `${[8, 62, 30, 84, 46][i]}%`,
                left: i % 2 === 0 ? "-8%" : "auto",
                right: i % 2 === 0 ? "auto" : "-8%",
                animation: `float-y ${5 + i}s ease-in-out ${i * 0.4}s infinite`,
              }}
            >
              {icon}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
        className="mx-auto mt-16 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
      >
        Scroll <ArrowDown className="size-3.5 animate-bounce" />
      </motion.a>
    </section>
  );
}
