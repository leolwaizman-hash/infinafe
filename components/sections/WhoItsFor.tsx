import FadeInView from "@/components/ui/FadeInView";

const profiles = [
  { num: "01", title: "Automation builders", desc: "Running complex Zapier or Make workflows that touch customer data." },
  { num: "02", title: "AI-first businesses", desc: "Using n8n, Lindy, or custom agents for sales, support, or operations." },
  { num: "03", title: "Small business owners", desc: "Who rely on AI tools but don't have an IT or security team." },
  { num: "04", title: "Compliance-conscious teams", desc: "Who need a paper trail of what their AI agents are doing." },
];

export default function WhoItsFor() {
  return (
    <section id="who" style={{
      padding: "120px 6vw",
      borderTop: "1px solid #F0F0F0",
      backgroundColor: "#FFFFFF",
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <FadeInView>
          <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", color: "#86868B", textTransform: "uppercase", marginBottom: "16px" }}>
            Who It&apos;s For
          </p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#1D1D1F", lineHeight: 1.1, letterSpacing: "-0.5px", maxWidth: "520px" }}>
            Built for small teams moving fast.
          </h2>
        </FadeInView>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px 32px",
          marginTop: "72px",
        }}>
          {profiles.map((p, i) => (
            <FadeInView key={p.title} delay={i * 0.1}>
              <div style={{ padding: "8px 0" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#86868B", letterSpacing: "0.08em", marginBottom: "20px" }}>
                  {p.num}
                </p>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1D1D1F", marginBottom: "10px" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "15px", color: "#6E6E73", lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
