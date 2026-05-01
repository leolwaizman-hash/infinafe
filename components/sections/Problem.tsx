"use client";
import { motion } from "motion/react";
import Counter from "@/components/ui/Counter";
import WordReveal from "@/components/ui/WordReveal";

const stats = [
  { prefix: "", target: 340, suffix: "%", label: "Rise in AI prompt injection attacks in 2024", color: "#FB7185" },
  { prefix: "$", target: 4.8, suffix: "M", decimals: 1, label: "Average cost of a data breach for small businesses", color: "#FB923C" },
  { prefix: "", target: 0, suffix: "", label: "Security tools existed for small business AI — until Infina.", color: "#4ADE80" },
];

export default function Problem() {
  return (
    <section id="problem" style={{ padding: "140px 6vw", backgroundColor: "#09090B", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden" }}>

      {/* Ambient */}
      <div style={{ position: "absolute", top: "40%", right: "-15%", width: "700px", height: "700px", background: "radial-gradient(circle, rgba(251,113,133,0.04) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "start" }}>

          {/* Left: big statement */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", marginBottom: "24px" }}
            >
              The Problem
            </motion.p>

            <h2 style={{ fontSize: "clamp(40px, 4vw, 64px)", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.03, letterSpacing: "-0.04em", margin: "0 0 28px" }}>
              <WordReveal text="Your automation stack is an" delay={0.1} />
              {" "}
              <motion.span
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
                style={{ display: "inline-block", color: "rgba(255,255,255,0.22)" }}
              >
                open door.
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ fontSize: "16px", color: "rgba(255,255,255,0.42)", lineHeight: 1.7, maxWidth: "420px" }}
            >
              Every time your AI agent sends an email, reads a spreadsheet,
              or talks to a customer — it&apos;s a potential attack surface.
              Hackers know this. Your security tools don&apos;t.
            </motion.p>
          </div>

          {/* Right: animated stats */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ padding: "36px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none", display: "flex", alignItems: "baseline", gap: "28px" }}
              >
                <span style={{ fontSize: "clamp(44px, 4.5vw, 64px)", fontWeight: 800, color: s.color, letterSpacing: "-0.04em", lineHeight: 1, flexShrink: 0, minWidth: "110px", fontVariantNumeric: "tabular-nums", textShadow: `0 0 40px ${s.color}55` }}>
                  <Counter target={s.target} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} duration={2000} />
                </span>
                <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", lineHeight: 1.55 }}>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
