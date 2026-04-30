"use client";
import { motion } from "motion/react";

const achievements = [
  { value: "10+", label: "Years in cybersecurity" },
  { value: "140+", label: "Early access businesses" },
  { value: "2,847", label: "Threats blocked to date" },
  { value: "$0", label: "Data lost by our customers" },
];

export default function Founder() {
  return (
    <section style={{ padding: "140px 6vw", backgroundColor: "#0E0E12", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", marginBottom: "72px" }}
        >
          The Founder
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }}>

          {/* Left: photo placeholder + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Avatar */}
            <div style={{ position: "relative", marginBottom: "48px" }}>
              <div style={{ width: "120px", height: "120px", borderRadius: "24px", background: "linear-gradient(135deg, #1C1C26, #2A2A38)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <span style={{ fontSize: "48px", fontWeight: 800, color: "rgba(255,255,255,0.15)", letterSpacing: "-2px", fontFamily: "var(--font-display)" }}>LW</span>
              </div>
              <div style={{ position: "absolute", bottom: "4px", left: "88px", width: "28px", height: "28px", borderRadius: "50%", background: "rgba(74,222,128,0.15)", border: "2px solid #09090B", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="pulse-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ADE80" }} />
              </div>
            </div>

            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.05)", borderRadius: "12px", overflow: "hidden" }}>
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div style={{ padding: "24px", background: "#141418" }}>
                    <p style={{ fontSize: "28px", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "6px", fontFamily: "var(--font-display)" }}>{a.value}</p>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", lineHeight: 1.4 }}>{a.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: story */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 style={{ fontSize: "clamp(32px, 3.5vw, 52px)", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.05, letterSpacing: "-0.04em", marginBottom: "8px" }}>
              Leo Waizman
            </h2>
            <p style={{ fontSize: "15px", color: "#4ADE80", fontWeight: 600, marginBottom: "32px", letterSpacing: "0.02em" }}>
              Founder & CEO, Infina
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                "Leo built Infina after watching a client's entire customer database get silently exfiltrated through a compromised Zapier workflow — in under 3 minutes. The attacker didn't hack anything. They just sent the right prompt to the right AI agent, and the data walked out the door.",
                "With over a decade of experience in cybersecurity and enterprise automation, Leo saw that the AI agent revolution was creating invisible attack surfaces that no existing security tool could see. The Fortune 500 had Zenity and Lakera. Everyone else had nothing.",
                "Infina is his answer: the security platform he wished existed. Built to be dead simple, genuinely effective, and affordable for the businesses that need it most — the ones running on Zapier at midnight, building the future one automation at a time.",
                "\"Every small business owner building with AI deserves to sleep soundly. That's what we're here for.\"",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  style={{
                    fontSize: i === 3 ? "18px" : "15px",
                    color: i === 3 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.45)",
                    lineHeight: 1.75,
                    fontStyle: i === 3 ? "italic" : "normal",
                    borderLeft: i === 3 ? "2px solid rgba(74,222,128,0.4)" : "none",
                    paddingLeft: i === 3 ? "20px" : "0",
                    margin: 0,
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
