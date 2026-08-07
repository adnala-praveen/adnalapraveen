import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, [data-cursor='hover']")));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div
        className="absolute rounded-full transition-[width,height,opacity] duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          width: active ? 46 : 16,
          height: active ? 46 : 16,
          transform: "translate(-50%, -50%)",
          border: "1px solid oklch(1 0 0 / 45%)",
          background: active ? "oklch(1 0 0 / 8%)" : "transparent",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          width: 340,
          height: 340,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--aurora-1) 22%, transparent), transparent 65%)",
          filter: "blur(30px)",
          transition: "left 180ms ease-out, top 180ms ease-out",
        }}
      />
    </div>
  );
}
