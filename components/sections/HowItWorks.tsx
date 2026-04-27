import FadeInView from "@/components/ui/FadeInView";

const steps = [
  {
    num: "01",
    title: "Connect",
    desc: "Link your Zapier, Make, n8n, or Lindy account in under 60 seconds. No code. No agents to install.",
  },
  {
    num: "02",
    title: "Monitor",
    desc: "Every action your AI agents take is analyzed by Infinafe in real-time — before anything can go wrong.",
  },
  {
    num: "03",
    title: "Protect",
    desc: "Get plain-English alerts the moment something suspicious is detected. No jargon. No dashboards to learn.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      padding: "120px 6vw",
      borderTop: "1px solid #F0F0F0",
      backgroundColor: "#F5F5F7",
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <FadeInView>
          <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", color: "#86868B", textTransform: "uppercase", marginBottom: "16px" }}>
            How It Works
          </p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#1D1D1F", lineHeight: 1.1, letterSpacing: "-0.5px", maxWidth: "540px" }}>
            Security that actually makes sense.
          </h2>
        </FadeInView>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          marginTop: "72px",
        }}>
          {steps.map((step, i) => (
            <FadeInView key={step.num} delay={i * 0.12}>
              <div style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                padding: "48px 36px",
                border: "1px solid #E8E8ED",
              }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#86868B", letterSpacing: "0.08em", marginBottom: "32px" }}>
                  {step.num}
                </p>
                <h3 style={{ fontSize: "28px", fontWeight: 700, color: "#1D1D1F", marginBottom: "16px", letterSpacing: "-0.3px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "15px", color: "#6E6E73", lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Feature pills */}
        <FadeInView delay={0.3}>
          <div style={{ marginTop: "56px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {["Real-time monitoring", "Plain English alerts", "Email notifications", "Weekly digest", "No agents to install", "Cancel anytime"].map(f => (
              <span key={f} style={{
                fontSize: "13px", color: "#1D1D1F",
                border: "1px solid #D2D2D7",
                borderRadius: "100px",
                padding: "8px 18px",
                backgroundColor: "#fff",
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
