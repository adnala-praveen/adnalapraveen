import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/fx/Reveal";
import { TiltCard } from "@/components/fx/TiltCard";
import { MagneticButton } from "@/components/fx/MagneticButton";

const socials = [
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adnala-praveen", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/adnala-praveen", Icon: Github },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "someone"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent/60 focus:bg-surface-strong";

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk numbers"
        description="Open to finance, accounting and analyst roles — and always happy to discuss a project."
        align="center"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <TiltCard className="h-full p-8" intensity={5}>
            <h3 className="font-display text-xl font-semibold">Reach me directly</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The fastest way is email — I usually reply within a day.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-7 flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              <span className="grid size-10 place-items-center rounded-2xl bg-surface-strong">
                <Mail className="size-4 text-accent" />
              </span>
              {profile.email}
            </a>

            <p className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="grid size-10 place-items-center rounded-2xl bg-surface-strong">
                <MapPin className="size-4 text-accent" />
              </span>
              Hyderabad, Telangana, India
            </p>

            <div className="mt-8 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass grid size-11 place-items-center rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:text-accent"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </TiltCard>
        </Reveal>

        <Reveal delay={0.1}>
          <TiltCard className="h-full p-8" intensity={4}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={field}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={field}
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${field} resize-none`}
                  placeholder="Tell me about the role or project…"
                />
              </div>
              <MagneticButton onClick={() => undefined} className="w-full sm:w-auto">
                <span
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2"
                  role="presentation"
                >
                  Send message <Send className="size-4" />
                </span>
              </MagneticButton>
            </form>
          </TiltCard>
        </Reveal>
      </div>
    </Section>
  );
}
