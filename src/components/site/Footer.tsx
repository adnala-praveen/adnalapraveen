import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="relative mx-auto w-full max-w-6xl px-5 pb-12 pt-6 sm:px-8">
      <div className="glass flex flex-col items-center gap-4 rounded-3xl px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with care.
        </p>
        <a
          href="#top"
          className="text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
