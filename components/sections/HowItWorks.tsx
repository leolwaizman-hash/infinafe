import FadeInView from "@/components/ui/FadeInView";

const steps = [
  {
    num: "01",
    title: "Connect",
    desc: "Link your Zapier, Make, n8n, or Lindy account in under 60 seconds. One API key — nothing to install or maintain.",
  },
  {
    num: "02",
    title: "Monitor",
    desc: "Every action your AI agents take is analyzed in real-time before anything can go wrong.",
  },
  {
    num: "03",
    title: "Protect",
    desc: "Receive plain-English alerts the moment something suspicious is detected. Block threats automatically.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      padding: "120px 6vw",
      backgroundColor: "#0C0C0C",
      borderTop: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeInView>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "20px" }}>
            How It Works
          </p>
          <h2 style={{
            fontSize: "clamp(36px, 4vw, 60px)", fontWeight: 700,
            color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-2px",
            maxWidth: "560px",
          }}>
            Security that actually makes sense.
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.35)", marginTop: "20px", maxWidth: "480px", lineHeight: 1.6 }}>
            Three steps. No DevOps. No security team required.
          </p>
        </FadeInView>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px",
          marginTop: "72px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "12px",
          overflow: "hidden",
        }}>
          {steps.map((step, i) => (
            <FadeInView key={step.num} delay={i * 0.1}>
              <div style={{
                background: "#111111",
                padding: "44px 36px",
                height: "100%",
                boxSizing: "border-box",
              }}>
                <p style={{
                  fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.2)",
                  letterSpacing: "0.1em", marginBottom: "36px",
                  fontFamily: "monospace",
                }}>
                  {step.num}
                </p>
                <h3 style={{
                  fontSize: "24px", fontWeight: 700, color: "#FFFFFF",
                  marginBottom: "14px", letterSpacing: "-0.5px",
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.3}>
          <div style={{
            marginTop: "48px",
            display: "flex", flexWrap: "wrap", gap: "8px",
          }}>
            {["Real-time monitoring","Plain English alerts","Email notifications","Weekly digest","No agents to install","Cancel anytime"].map(f => (
              <span key={f} style={{
                fontSize: "13px", color: "rgba(255,255,255,0.4)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "6px",
                padding: "6px 14px",
                background: "rgba(255,255,255,0.02)",
                letterSpacing: "-0.01em",
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
