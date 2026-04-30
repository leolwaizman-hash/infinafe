"use client";
import { motion } from "motion/react";
import WordReveal from "@/components/ui/WordReveal";

const profiles = [
  { num: "01", title: "Automation builders", desc: "Running complex Zapier or Make workflows that touch customer data." },
  { num: "02", title: "AI-first businesses", desc: "Using n8n, Lindy, or custom agents for sales, support, or operations." },
  { num: "03", title: "Small business owners", desc: "Who rely on AI tools but don't have an IT or security team." },
  { num: "04", title: "Compliance-conscious teams", desc: "Who need a paper trail of what their AI agents are doing." },
];

export default function WhoItsFor() {
  return (
    <section id="who" style={{ padding: "140px 6vw", borderTop: "1px solid rgba(255,255,255,0.05)", backgroundColor: "#09090B" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", marginBottom: "20px" }}>
          Who It&apos;s For
        </motion.p>
        <h2 style={{ fontSize: "clamp(36px, 4vw, 60px)", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.05, letterSpacing: "-0.04em", maxWidth: "560px", marginBottom: "72px" }}>
          <WordReveal text="Built for small teams moving fast." delay={0.1} />
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.05)", borderRadius: "12px", overflow: "hidden" }}>
          {profiles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div style={{ padding: "44px 36px", background: "#141418", height: "100%", boxSizing: "border-box" }}>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", marginBottom: "28px", fontFamily: "var(--font-geist-mono)" }}>{p.num}</p>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#F8FAFC", marginBottom: "12px", letterSpacing: "-0.03em" }}>{p.title}</h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
