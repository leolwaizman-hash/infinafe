"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import WordReveal from "@/components/ui/WordReveal";

const steps = [
  {
    num: "01", color: "#FB7185",
    title: "Connect in 60 seconds",
    desc: "Link your Zapier, Make, n8n, or Lindy account with a single API key. No agents to install. No DevOps required.",
    tag: "One-line setup",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4v20M4 14h20" stroke="#FB7185" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="6" stroke="#FB7185" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    num: "02", color: "#FB923C",
    title: "Every action, analyzed",
    desc: "Infina intercepts and analyzes every automation action in real-time — before it executes. Nothing slips through.",
    tag: "Real-time monitoring",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14h4l3-6 4 12 3-9 3 6 3-3" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "03", color: "#4ADE80",
    title: "Threats blocked. You're notified.",
    desc: "When something suspicious is detected, Infina blocks it automatically and sends you a plain-English alert within seconds.",
    tag: "Instant alerts",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L5 9v6c0 5.5 4 10.7 9 12 5-1.3 9-6.5 9-12V9L14 4z" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 14l3 3 5-5" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const step1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.3, 0.42], [0, 1, 1, 0]);
  const step2Opacity = useTransform(scrollYProgress, [0.3, 0.42, 0.6, 0.72], [0, 1, 1, 0]);
  const step3Opacity = useTransform(scrollYProgress, [0.6, 0.72, 1, 1], [0, 1, 1, 1]);
  const step1Y = useTransform(scrollYProgress, [0, 0.12], [30, 0]);
  const step2Y = useTransform(scrollYProgress, [0.3, 0.42], [30, 0]);
  const step3Y = useTransform(scrollYProgress, [0.6, 0.72], [30, 0]);

  const opacities = [step1Opacity, step2Opacity, step3Opacity];
  const ys = [step1Y, step2Y, step3Y];

  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 1]);

  return (
    <section id="how-it-works" style={{ backgroundColor: "#0E0E12", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      {/* Section header — normal scroll */}
      <div style={{ padding: "120px 6vw 60px", maxWidth: "1200px", margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", marginBottom: "20px" }}
        >
          How It Works
        </motion.p>
        <h2 style={{ fontSize: "clamp(36px, 3.8vw, 58px)", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.05, letterSpacing: "-0.04em", maxWidth: "560px", margin: 0 }}>
          <WordReveal text="Security that actually makes sense." delay={0.1} />
        </h2>
      </div>

      {/* Sticky scroll container */}
      <div ref={containerRef} style={{ height: "280vh", position: "relative" }}>
        <motion.div
          style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", opacity: headerOpacity }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", padding: "0 6vw", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

            {/* Left: step indicator */}
            <div style={{ position: "relative" }}>
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  style={{ opacity: opacities[i], y: ys[i], position: i === 0 ? "relative" : "absolute", top: i === 0 ? undefined : 0, left: 0, right: 0 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `rgba(${step.color === "#FB7185" ? "251,113,133" : step.color === "#FB923C" ? "251,146,60" : "74,222,128"},0.1)`, border: `1px solid rgba(${step.color === "#FB7185" ? "251,113,133" : step.color === "#FB923C" ? "251,146,60" : "74,222,128"},0.2)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {step.icon}
                    </div>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: step.color, letterSpacing: "0.08em", fontFamily: "var(--font-geist-mono)" }}>{step.num} — {step.tag}</span>
                  </div>
                  <h3 style={{ fontSize: "clamp(32px, 3.5vw, 52px)", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "20px" }}>{step.title}</h3>
                  <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "440px" }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Right: visual indicator */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  style={{ padding: "28px 32px", borderRadius: "14px", marginBottom: "8px", opacity: opacities[i], y: ys[i], background: `rgba(${step.color === "#FB7185" ? "251,113,133" : step.color === "#FB923C" ? "251,146,60" : "74,222,128"},0.06)`, border: `1px solid rgba(${step.color === "#FB7185" ? "251,113,133" : step.color === "#FB923C" ? "251,146,60" : "74,222,128"},0.12)` }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "14px", fontWeight: 600, color: "#F8FAFC" }}>{step.title}</span>
                    <span style={{ fontSize: "10px", color: step.color, background: `rgba(${step.color === "#FB7185" ? "251,113,133" : step.color === "#FB923C" ? "251,146,60" : "74,222,128"},0.12)`, padding: "3px 8px", borderRadius: "4px", fontFamily: "var(--font-geist-mono)", fontWeight: 700 }}>{step.num}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pills */}
      <div style={{ padding: "0 6vw 100px", maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["Real-time monitoring","Plain English alerts","Email notifications","Weekly digest","No agents to install","Cancel anytime"].map(f => (
            <span key={f} style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "6px", padding: "6px 13px", background: "rgba(255,255,255,0.02)" }}>{f}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
