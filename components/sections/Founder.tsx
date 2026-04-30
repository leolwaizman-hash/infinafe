"use client";
import { motion } from "motion/react";

const achievements = [
  { value: "10+", label: "Years in cybersecurity" },
  { value: "140+", label: "Early access businesses" },
  { value: "2,847", label: "Threats blocked to date" },
  { value: "$0", label: "Data lost by our customers" },
];

const paragraphs = [
  "Leo built Infina after watching a client's entire customer database get silently exfiltrated through a compromised Zapier workflow — in under 3 minutes. The attacker didn't hack anything. They just sent the right prompt to the right AI agent, and the data walked out the door.",
  "With over a decade of experience in cybersecurity and enterprise automation, Leo saw that the AI agent revolution was creating invisible attack surfaces that no existing security tool could see. The Fortune 500 had Zenity and Lakera. Everyone else had nothing.",
  "Infina is his answer: the security platform he wished existed. Built to be dead simple, genuinely effective, and affordable for the businesses that need it most — the ones running on Zapier at midnight, building the future one automation at a time.",
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

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "start" }}>

          {/* Left: stats only */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.05)", borderRadius: "14px", overflow: "hidden" }}>
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                >
                  <div style={{ padding: "32px 28px", background: "#141418" }}>
                    <p style={{ fontSize: "36px", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "8px", fontFamily: "var(--font-display)" }}>
                      {a.value}
                    </p>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", lineHeight: 1.4, margin: 0 }}>
                      {a.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Credibility bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ marginTop: "24px", padding: "20px 24px", background: "rgba(74,222,128,0.05)", border: "1px solid rgba(74,222,128,0.12)", borderRadius: "10px", display: "flex", alignItems: "center", gap: "12px" }}
            >
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ADE80", flexShrink: 0 }} />
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.5 }}>
                Protecting AI workflows across <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>12 countries</strong> since 2024
              </p>
            </motion.div>
          </motion.div>

          {/* Right: story */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 style={{ fontSize: "clamp(32px, 3.5vw, 52px)", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.05, letterSpacing: "-0.04em", marginBottom: "6px" }}>
              Leo Waizman
            </h2>
            <p style={{ fontSize: "14px", color: "#4ADE80", fontWeight: 600, marginBottom: "40px", letterSpacing: "0.02em" }}>
              Founder & CEO, Infina
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  style={{ fontSize: "15px", color: "rgba(255,255,255,0.48)", lineHeight: 1.8, margin: 0 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* LinkedIn-style credential tags */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ marginTop: "36px", display: "flex", flexWrap: "wrap", gap: "8px" }}
            >
              {["Cybersecurity", "AI Automation", "Threat Intelligence", "SMB Security", "Zero-Trust Architecture"].map(tag => (
                <span key={tag} style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "5px 12px", background: "rgba(255,255,255,0.02)" }}>
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
