import FadeInView from "@/components/ui/FadeInView";

const stats = [
  { number: "340%", label: "Increase in AI prompt injection attacks in 2024", color: "#EF4444" },
  { number: "$4.8M", label: "Average cost of a data breach for small businesses", color: "#F97316" },
  { number: "0", label: "Security tools designed for small business AI — until now", color: "#22C55E" },
];

export default function Problem() {
  return (
    <section id="problem" style={{
      padding: "120px 6vw",
      backgroundColor: "#080808",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      position: "relative",
      overflow: "hidden",
    }}>

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        <FadeInView>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "20px" }}>
            The Problem
          </p>
          <h2 style={{
            fontSize: "clamp(36px, 4vw, 60px)", fontWeight: 700,
            color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-2px",
            maxWidth: "680px",
          }}>
            Your AI agents work 24/7.{" "}
            <span style={{ color: "rgba(255,255,255,0.3)" }}>Nobody&apos;s watching them.</span>
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.35)", marginTop: "24px", maxWidth: "520px", lineHeight: 1.6 }}>
            Every automation you run is a potential attack surface. Hackers know this. Your security tools don&apos;t.
          </p>
        </FadeInView>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px",
          marginTop: "80px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "12px",
          overflow: "hidden",
        }}>
          {stats.map((stat, i) => (
            <FadeInView key={stat.number} delay={i * 0.1}>
              <div style={{
                backgroundColor: "#111111",
                padding: "48px 40px",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "1px",
                  background: `linear-gradient(90deg, transparent 0%, ${stat.color}60 50%, transparent 100%)`,
                }} />
                <p style={{
                  fontSize: "clamp(48px, 5vw, 72px)", fontWeight: 800,
                  color: stat.color, letterSpacing: "-3px", lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                }}>
                  {stat.number}
                </p>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", marginTop: "14px", lineHeight: 1.6, maxWidth: "220px" }}>
                  {stat.label}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
