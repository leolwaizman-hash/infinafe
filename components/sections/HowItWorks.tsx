import FadeInView from "@/components/ui/FadeInView";

const steps = [
  {
    num: "01",
    title: "Connect",
    desc: "Link your Zapier, Make, n8n, or Lindy account in under 60 seconds. One API key. No agents to install.",
  },
  {
    num: "02",
    title: "Monitor",
    desc: "Every action your AI agents take is analyzed in real-time — before anything can go wrong.",
  },
  {
    num: "03",
    title: "Protect",
    desc: "Get plain-English alerts the moment something suspicious is detected. Block threats automatically.",
  },
];

const pills = ["Real-time monitoring","Plain English alerts","Email notifications","Weekly digest","No agents to install","Cancel anytime"];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      padding: "120px 6vw",
      backgroundColor: "#050505",
      borderTop: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeInView>
          <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", color: "#00FF87", textTransform: "uppercase", marginBottom: "20px" }}>
            How It Works
          </p>
          <h2 style={{
            fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 700,
            color: "#F5F5F5", lineHeight: 1.05, letterSpacing: "-1.5px",
            maxWidth: "600px",
          }}>
            Security that actually makes sense.
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)", marginTop: "20px", maxWidth: "500px", lineHeight: 1.6 }}>
            Three steps. No DevOps. No security team required.
          </p>
        </FadeInView>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
          marginTop: "72px",
        }}>
          {steps.map((step, i) => (
            <FadeInView key={step.num} delay={i * 0.12}>
              <div style={{
                background: "linear-gradient(135deg, #0D0D0D 0%, #111111 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                padding: "44px 36px",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", bottom: 0, right: 0,
                  width: "200px", height: "200px",
                  background: "radial-gradient(circle, rgba(0,255,135,0.04) 0%, transparent 70%)",
                  pointerEvents: "none",
                }} />
                <p style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", marginBottom: "28px" }}>
                  {step.num}
                </p>
                <h3 style={{ fontSize: "26px", fontWeight: 700, color: "#F5F5F5", marginBottom: "14px", letterSpacing: "-0.5px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.3}>
          <div style={{ marginTop: "52px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {pills.map(f => (
              <span key={f} style={{
                fontSize: "13px", color: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "100px",
                padding: "7px 16px",
                background: "rgba(255,255,255,0.03)",
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
