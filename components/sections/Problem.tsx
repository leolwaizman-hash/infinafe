import FadeInView from "@/components/ui/FadeInView";

const stats = [
  { number: "340%", label: "Rise in AI prompt injection attacks in 2024" },
  { number: "$4.8M", label: "Average cost of a data breach for a small business" },
  { number: "0", label: "AI agent security tools built for small business — until now" },
];

export default function Problem() {
  return (
    <section id="problem" style={{
      padding: "120px 6vw",
      borderTop: "1px solid #F0F0F0",
      backgroundColor: "#FFFFFF",
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <FadeInView>
          <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", color: "#86868B", textTransform: "uppercase", marginBottom: "16px" }}>
            The Problem
          </p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#1D1D1F", lineHeight: 1.1, letterSpacing: "-0.5px", maxWidth: "640px" }}>
            Your AI agents work around the clock. Nobody&apos;s guarding them.
          </h2>
        </FadeInView>

        {/* Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1px",
          marginTop: "80px",
          border: "1px solid #F0F0F0",
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "#F0F0F0",
        }}>
          {stats.map((stat, i) => (
            <FadeInView key={stat.number} delay={i * 0.1}>
              <div style={{
                backgroundColor: "#FFFFFF",
                padding: "48px 40px",
              }}>
                <p style={{ fontSize: "clamp(48px, 5vw, 72px)", fontWeight: 700, color: "#1D1D1F", letterSpacing: "-2px", lineHeight: 1 }}>
                  {stat.number}
                </p>
                <p style={{ fontSize: "15px", color: "#6E6E73", marginTop: "16px", lineHeight: 1.5, maxWidth: "220px" }}>
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
