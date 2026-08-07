import { useRef, type ReactNode } from "react";

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  download,
  target,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  download?: boolean;
  target?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.22}px, ${y * 0.3}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-[transform,box-shadow,background-color] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const styles =
    variant === "primary"
      ? "text-primary-foreground shadow-[0_18px_50px_-18px_var(--aurora-1)] hover:shadow-[0_22px_60px_-16px_var(--aurora-1)]"
      : "glass text-foreground hover:bg-surface-strong";

  const content = (
    <>
      {variant === "primary" && (
        <span
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ backgroundImage: "var(--gradient-aurora)" }}
        />
      )}
      {children}
    </>
  );

  const shared = {
    ref: ref as React.Ref<never>,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className: `${base} ${styles} ${className}`,
  };

  if (href) {
    return (
      <a
        {...shared}
        href={href}
        {...(download ? { download: "" } : {})}
        {...(target ? { target, rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button {...shared} type="button" onClick={onClick}>
      {content}
    </button>
  );
}
