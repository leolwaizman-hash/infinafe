import FadeInView from "@/components/ui/FadeInView";

const stats = [
  { number: "340%", label: "Rise in AI prompt injection attacks in 2024", color: "#FF3B3B" },
  { number: "$4.8M", label: "Average cost of a data breach for SMBs", color: "#FF9500" },
  { number: "0", label: "Security tools built for small business AI — until now", color: "#00FF87" },
];

export default function Problem() {
  return (
    <section id="problem" style={{
      padding: "120px 6vw",
      backgroundColor: "#000",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background glow */}
      <div style={{
        position: "absolute", top: "50%", right: "-10%", transform: "translateY(-50%)",
        width: "600px", height: "400px",
        background: "radial-gradient(ellipse, rgba(255,59,59,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        <FadeInView>
          <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", color: "#FF3B3B", textTransform: "uppercase", marginBottom: "20px" }}>
            The Threat
          </p>
          <h2 style={{
            fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 700,
            color: "#F5F5F5", lineHeight: 1.05, letterSpacing: "-1.5px",
            maxWidth: "700px",
          }}>
            Your AI agents work 24/7.
            <span style={{ color: "rgba(255,255,255,0.35)" }}> No one&apos;s watching them.</span>
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)", marginTop: "24px", maxWidth: "540px", lineHeight: 1.6 }}>
            Every automation you run is a potential attack surface. Hackers know this. Do you?
          </p>
        </FadeInView>

        {/* Stats grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px",
          marginTop: "80px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "16px",
          overflow: "hidden",
        }}>
          {stats.map((stat, i) => (
            <FadeInView key={stat.number} delay={i * 0.1}>
              <div style={{
                backgroundColor: "#0D0D0D",
                padding: "52px 44px",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                  background: `linear-gradient(90deg, transparent, ${stat.color}40, transparent)`,
                }} />
                <p style={{
                  fontSize: "clamp(52px, 5vw, 76px)", fontWeight: 800,
                  color: stat.color, letterSpacing: "-3px", lineHeight: 1,
                }}>
                  {stat.number}
                </p>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", marginTop: "16px", lineHeight: 1.55, maxWidth: "230px" }}>
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
