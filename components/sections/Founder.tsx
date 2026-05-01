"use client";
import { motion } from "motion/react";
import WordReveal from "@/components/ui/WordReveal";

const achievements = [
  { value: "10+", label: "Years in cybersecurity", color: "#60A5FA" },
  { value: "140+", label: "Early access businesses", color: "#4ADE80" },
  { value: "2,847", label: "Threats blocked to date", color: "#FB7185" },
  { value: "$0", label: "Data lost by our customers", color: "#4ADE80" },
];

const paragraphs = [
  "Leo built Infina after watching a client's entire customer database get silently exfiltrated through a compromised Zapier workflow — in under 3 minutes. The attacker didn't hack anything. They just sent the right prompt to the right AI agent, and the data walked out the door.",
  "With over a decade of experience in cybersecurity and enterprise automation, Leo saw that the AI agent revolution was creating invisible attack surfaces that no existing security tool could see. The Fortune 500 had Zenity and Lakera. Everyone else had nothing.",
  "Infina is his answer: the security platform he wished existed. Built to be dead simple, genuinely effective, and affordable for the businesses that need it most — the ones running on Zapier at midnight, building the future one automation at a time.",
];

const tags = ["Cybersecurity", "AI Automation", "Threat Intelligence", "SMB Security", "Zero-Trust"];

export default function Founder() {
  return (
    <section style={{ padding: "140px 6vw", backgroundColor: "#0E0E12", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden" }}>

      {/* Ambient glow */}
      <div style={{ position: "absolute", top: "40%", left: "20%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", marginBottom: "64px" }}
        >
          The Founder
        </motion.p>

        <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

          {/* LEFT — stats */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.05)", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  style={{ padding: "32px 28px", background: "linear-gradient(160deg, #1A1A24 0%, #111118 100%)", position: "relative", overflow: "hidden" }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, ${a.color}40, transparent)` }} />
                  <p style={{ fontSize: "38px", fontWeight: 800, color: a.color, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "8px", fontFamily: "var(--font-display)", textShadow: `0 0 30px ${a.color}40` }}>
                    {a.value}
                  </p>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.32)", lineHeight: 1.4, margin: 0 }}>
                    {a.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Credibility bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ padding: "18px 22px", background: "rgba(74,222,128,0.04)", border: "1px solid rgba(74,222,128,0.12)", borderRadius: "10px", display: "flex", alignItems: "center", gap: "12px" }}
            >
              <span className="pulse-dot" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ADE80", flexShrink: 0 }} />
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.5 }}>
                Protecting AI workflows across <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 700 }}>12 countries</strong> since 2024
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT — story */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Name + title */}
            <div style={{ marginBottom: "36px" }}>
              <h2 style={{ fontSize: "clamp(36px, 3.8vw, 56px)", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.02, letterSpacing: "-0.04em", marginBottom: "10px" }}>
                <WordReveal text="Leo Waizman" delay={0.1} />
              </h2>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "13px", color: "#4ADE80", fontWeight: 700, letterSpacing: "0.02em" }}>Founder & CEO</span>
                <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>Infina</span>
              </div>
            </div>

            {/* Opening pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ borderLeft: "2px solid rgba(74,222,128,0.3)", paddingLeft: "20px", marginBottom: "32px" }}
            >
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>
                "The attacker didn&apos;t hack anything. They just sent the right prompt — and the data walked out the door."
              </p>
            </motion.blockquote>

            {/* Story paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "36px" }}>
              {paragraphs.slice(1).map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
                  style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: 0 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}
            >
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.55 + i * 0.05 }}
                  style={{ fontSize: "11px", color: "rgba(255,255,255,0.38)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "5px 11px", background: "rgba(255,255,255,0.02)", letterSpacing: "0.01em" }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
