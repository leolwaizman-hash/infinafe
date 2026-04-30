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
      borderTop: "1px solid rgba(255,255,255,0.05)",
      backgroundColor: "#080808",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeInView>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "20px" }}>
            Who It&apos;s For
          </p>
          <h2 style={{
            fontSize: "clamp(36px, 4vw, 60px)", fontWeight: 700,
            color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-2px",
            maxWidth: "560px",
          }}>
            Built for small teams moving fast.
          </h2>
        </FadeInView>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1px",
          marginTop: "72px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "12px",
          overflow: "hidden",
        }}>
          {profiles.map((p, i) => (
            <FadeInView key={p.title} delay={i * 0.1}>
              <div style={{
                padding: "44px 36px",
                background: "#111111",
                height: "100%",
                boxSizing: "border-box",
              }}>
                <p style={{
                  fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.2)",
                  letterSpacing: "0.1em", marginBottom: "28px",
                  fontFamily: "monospace",
                }}>
                  {p.num}
                </p>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px", letterSpacing: "-0.3px" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>
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
