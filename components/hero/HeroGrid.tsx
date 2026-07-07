export default function HeroGrid() {
  return (
    <>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#2563eb22,transparent_60%)]" />

      <div
        className="absolute inset-0 -z-20 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </>
  );
}