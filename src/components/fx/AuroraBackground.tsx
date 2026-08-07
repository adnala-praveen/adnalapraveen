export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="aurora-blob"
        style={{
          width: "48rem",
          height: "48rem",
          top: "-14rem",
          left: "-10rem",
          background: "var(--aurora-1)",
          animation: "float-slow 26s ease-in-out infinite",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: "40rem",
          height: "40rem",
          top: "18%",
          right: "-12rem",
          background: "var(--aurora-2)",
          opacity: 0.35,
          animation: "float-slow 32s ease-in-out infinite reverse",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: "44rem",
          height: "44rem",
          bottom: "-16rem",
          left: "20%",
          background: "var(--aurora-3)",
          opacity: 0.3,
          animation: "float-slow 38s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 12%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 12%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at 50% 20%, #000 10%, transparent 72%)",
          animation: "grid-pan 18s linear infinite",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, transparent 30%, oklch(0.16 0.04 265 / 85%) 100%)",
        }}
      />
    </div>
  );
}
