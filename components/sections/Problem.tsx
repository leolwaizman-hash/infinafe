import FadeInView from "@/components/ui/FadeInView";

const stats = [
  { number: "340%", label: "Rise in AI prompt injection attacks in 2024", color: "#FB7185" },
  { number: "$4.8M", label: "Average cost of a data breach for small businesses", color: "#FB923C" },
  { number: "0", label: "Security tools built for small business AI — until now", color: "#4ADE80" },
];

export default function Problem() {
  return (
    <section id="problem" style={{
      padding: "140px 6vw",
      backgroundColor: "#09090B",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      position: "relative",
      overflow: "hidden",
    }}>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Editorial layout: statement + stats side by side */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}>

          {/* Left: big statement */}
          <FadeInView>
            <p style={{
              fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.28)", textTransform: "uppercase", marginBottom: "24px",
            }}>
              The Problem
            </p>
            <h2 style={{
              fontSize: "clamp(40px, 4vw, 64px)", fontWeight: 800,
              color: "#F8FAFC", lineHeight: 1.03, letterSpacing: "-0.04em",
            }}>
              Your automation
              stack is an
              <span style={{ color: "rgba(255,255,255,0.22)" }}>{" "}open door.</span>
            </h2>
            <p style={{
              fontSize: "16px", color: "rgba(255,255,255,0.42)",
              marginTop: "28px", lineHeight: 1.7, maxWidth: "420px",
            }}>
              Every time your AI agent sends an email, reads a spreadsheet,
              or talks to a customer — it&apos;s a potential attack surface.
              Hackers know this. Your security tools don&apos;t.
            </p>
          </FadeInView>

          {/* Right: three stats, stacked editorially */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {stats.map((s, i) => (
              <FadeInView key={s.number} delay={i * 0.1}>
                <div style={{
                  padding: "32px 0",
                  borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "28px",
                }}>
                  <span style={{
                    fontSize: "clamp(44px, 4.5vw, 64px)",
                    fontWeight: 800,
                    color: s.color,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    flexShrink: 0,
                    fontVariantNumeric: "tabular-nums",
                    minWidth: "100px",
                  }}>
                    {s.number}
                  </span>
                  <span style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.55,
                  }}>
                    {s.label}
                  </span>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
