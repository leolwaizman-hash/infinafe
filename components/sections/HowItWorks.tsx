import FadeInView from "@/components/ui/FadeInView";

const steps = [
  {
    num: "01",
    title: "Connect in 60 seconds",
    desc: "Link your Zapier, Make, n8n, or Lindy account with a single API key. No agents to install. No DevOps required.",
    detail: "One-line setup",
  },
  {
    num: "02",
    title: "Every action, analyzed",
    desc: "Infina intercepts and analyzes every automation action in real-time — before it executes. Nothing slips through.",
    detail: "Real-time monitoring",
  },
  {
    num: "03",
    title: "Threats blocked. You're notified.",
    desc: "When something suspicious is detected, Infina blocks it automatically and sends you a plain-English alert within seconds.",
    detail: "Instant alerts",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      padding: "140px 6vw",
      backgroundColor: "#0E0E12",
      borderTop: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <FadeInView>
          <p style={{
            fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.28)", textTransform: "uppercase", marginBottom: "20px",
          }}>
            How It Works
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", marginBottom: "80px" }}>
            <h2 style={{
              fontSize: "clamp(36px, 3.8vw, 58px)", fontWeight: 800,
              color: "#F8FAFC", lineHeight: 1.05, letterSpacing: "-0.04em",
              maxWidth: "520px", margin: 0,
            }}>
              Security that actually
              <span style={{ color: "rgba(255,255,255,0.22)" }}>{" "}makes sense.</span>
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.38)", maxWidth: "320px", lineHeight: 1.65, margin: 0 }}>
              Three steps. No DevOps.<br />No security team required.
            </p>
          </div>
        </FadeInView>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(255,255,255,0.05)", borderRadius: "14px", overflow: "hidden" }}>
          {steps.map((step, i) => (
            <FadeInView key={step.num} delay={i * 0.1}>
              <div style={{
                background: "#141418",
                padding: "44px 36px 44px",
                height: "100%",
                boxSizing: "border-box",
                position: "relative",
              }}>
                {/* Top accent line */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                  background: i === 0
                    ? "linear-gradient(90deg, #FB7185 0%, transparent 60%)"
                    : i === 1
                    ? "linear-gradient(90deg, #FB923C 0%, transparent 60%)"
                    : "linear-gradient(90deg, #4ADE80 0%, transparent 60%)",
                  opacity: 0.5,
                }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px" }}>
                  <span style={{
                    fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.2)",
                    letterSpacing: "0.08em", fontFamily: "var(--font-geist-mono)",
                  }}>
                    {step.num}
                  </span>
                  <span style={{
                    fontSize: "10px", fontWeight: 600,
                    color: i === 0 ? "#FB7185" : i === 1 ? "#FB923C" : "#4ADE80",
                    background: i === 0 ? "rgba(251,113,133,0.1)" : i === 1 ? "rgba(251,146,60,0.1)" : "rgba(74,222,128,0.08)",
                    padding: "3px 8px", borderRadius: "4px",
                    letterSpacing: "0.04em",
                  }}>
                    {step.detail}
                  </span>
                </div>

                <h3 style={{
                  fontSize: "21px", fontWeight: 700, color: "#F8FAFC",
                  marginBottom: "14px", letterSpacing: "-0.03em", lineHeight: 1.2,
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Feature pills */}
        <FadeInView delay={0.3}>
          <div style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["Real-time monitoring", "Plain English alerts", "Email notifications", "Weekly digest", "No agents to install", "Cancel anytime"].map(f => (
              <span key={f} style={{
                fontSize: "12px", color: "rgba(255,255,255,0.38)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "6px", padding: "6px 13px",
                background: "rgba(255,255,255,0.02)",
              }}>
                {f}
              </span>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
