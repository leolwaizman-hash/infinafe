"use client";
import Link from "next/link";
import { motion } from "motion/react";

const InfinaLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 130" fill="none" width="72" height="23" aria-label="Infina">
    {[
      [8,8,8,122],[24,8,24,122],
      [48,8,48,122],[48,8,84,122],[84,8,84,122],
      [108,8,108,122],[108,8,155,8],[108,65,150,65],
      [172,8,172,122],[188,8,188,122],
      [212,8,212,122],[212,8,248,122],[248,8,248,122],
      [272,122,304,8],[336,122,304,8],[281,78,327,78],
    ].map(([x1,y1,x2,y2],i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="square"/>
    ))}
  </svg>
);

const alerts = [
  { dot: "#EF4444", label: "THREAT", msg: "Prompt injection detected in Zapier workflow #4821", sub: "Customer Support Bot · 2s ago" },
  { dot: "#F97316", label: "BLOCKED", msg: "Data exfiltration attempt stopped before execution", sub: "Sales Automation · 14m ago" },
  { dot: "#22C55E", label: "CLEAR", msg: "All 12 active workflows running normally", sub: "System · 1h ago" },
];

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      backgroundColor: "#080808",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Top glow */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "1000px", height: "600px",
        background: "radial-gradient(ellipse at top, rgba(255,255,255,0.04) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0,
        padding: "0 6vw",
        height: "64px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        backgroundColor: "rgba(8,8,8,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        zIndex: 100,
      }}>
        <InfinaLogo />
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
          {[["How it works","#how-it-works"],["Pricing","#pricing"],["Who it's for","#who"]].map(([label,href]) => (
            <Link key={label} href={href} style={{
              fontSize: "14px", color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
            }}>{label}</Link>
          ))}
          <Link href="#pricing" style={{
            background: "#fff", color: "#000",
            padding: "8px 20px", borderRadius: "7px",
            fontSize: "14px", fontWeight: 600, textDecoration: "none",
            letterSpacing: "-0.01em",
          }}>
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero content */}
      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center",
        padding: "120px 6vw 80px",
        position: "relative", zIndex: 1,
      }}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "100px", padding: "5px 14px",
            marginBottom: "36px",
          }}
        >
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#22C55E", flexShrink: 0 }} />
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontWeight: 500, letterSpacing: "0.03em" }}>
            Now available · AI Agent Security
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "clamp(44px, 6.5vw, 88px)",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.0,
            letterSpacing: "-3px",
            maxWidth: "820px",
            marginBottom: "0",
          }}
        >
          Your AI agents are
          <br />
          <span style={{ color: "rgba(255,255,255,0.28)" }}>running unsupervised.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "clamp(16px, 1.4vw, 19px)",
            color: "rgba(255,255,255,0.4)",
            maxWidth: "480px",
            lineHeight: 1.65,
            marginTop: "28px",
            marginBottom: "44px",
          }}
        >
          Real-time threat detection for Zapier, Make, n8n, and Lindy.
          Plain-English alerts the moment something goes wrong.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}
        >
          <Link href="#pricing" style={{
            background: "#FFFFFF", color: "#000",
            padding: "13px 28px", borderRadius: "8px",
            fontSize: "15px", fontWeight: 600, textDecoration: "none",
            letterSpacing: "-0.01em",
          }}>
            Start free trial →
          </Link>
          <Link href="#how-it-works" style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.65)",
            padding: "13px 28px", borderRadius: "8px",
            fontSize: "15px", fontWeight: 500, textDecoration: "none",
          }}>
            See how it works
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ marginTop: "18px", fontSize: "13px", color: "rgba(255,255,255,0.22)" }}
        >
          No credit card required · Cancel anytime · Setup in 60 seconds
        </motion.p>

        {/* Product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: "72px",
            width: "100%",
            maxWidth: "720px",
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "14px",
            overflow: "hidden",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
            textAlign: "left",
          }}
        >
          {/* Window chrome */}
          <div style={{
            padding: "13px 18px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex", alignItems: "center", gap: "8px",
            background: "#0F0F0F",
          }}>
            {["rgba(255,95,86,0.7)","rgba(255,189,46,0.7)","rgba(39,201,63,0.7)"].map((c,i) => (
              <span key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
            ))}
            <span style={{ marginLeft: "10px", fontSize: "12px", color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}>
              infina — threat monitor
            </span>
          </div>

          {/* Alert rows */}
          <div style={{ padding: "8px 0" }}>
            {alerts.map((a, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "16px",
                padding: "14px 20px",
                borderBottom: i < alerts.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}>
                <div style={{
                  width: "7px", height: "7px", borderRadius: "50%",
                  background: a.dot, flexShrink: 0,
                  boxShadow: `0 0 8px ${a.dot}99`,
                }} />
                <div style={{
                  fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em",
                  color: a.dot, flexShrink: 0, width: "52px",
                  fontFamily: "monospace",
                }}>
                  {a.label}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", fontWeight: 500, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {a.msg}
                  </p>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", margin: "2px 0 0", fontFamily: "monospace" }}>
                    {a.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
