"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const InfinaLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 130" fill="none" width="70" height="23" aria-label="Infina">
    {([
      [8,8,8,122],[24,8,24,122],
      [48,8,48,122],[48,8,84,122],[84,8,84,122],
      [108,8,108,122],[108,8,155,8],[108,65,150,65],
      [172,8,172,122],[188,8,188,122],
      [212,8,212,122],[212,8,248,122],[248,8,248,122],
      [272,122,304,8],[336,122,304,8],[281,78,327,78],
    ] as number[][]).map(([x1,y1,x2,y2],i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="rgba(255,255,255,0.85)" strokeWidth="3.5" strokeLinecap="square"/>
    ))}
  </svg>
);

const feed = [
  { badge: "BLOCKED", bc: "#FB7185", bb: "rgba(251,113,133,0.12)", title: "Prompt injection in customer workflow", source: "Zapier · Customer Support Bot", time: "2s ago", highlight: true },
  { badge: "STOPPED", bc: "#FB923C", bb: "rgba(251,146,60,0.1)", title: "Unauthorized data export attempt", source: "Make · Sales Automation", time: "14m ago", highlight: false },
  { badge: "CLEAR",   bc: "#4ADE80", bb: "rgba(74,222,128,0.08)", title: "All 12 workflows running normally", source: "System · health check", time: "1h ago",  highlight: false },
];

function Dashboard() {
  return (
    <div style={{ position: "relative" }}>
      {/* Glow halo behind the card */}
      <div style={{
        position: "absolute", inset: "-40px",
        background: "radial-gradient(ellipse at 50% 50%, rgba(74,222,128,0.08) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      {/* Outer gradient border */}
      <div style={{ position: "absolute", inset: "-1px", borderRadius: "17px", background: "linear-gradient(135deg, rgba(74,222,128,0.2) 0%, rgba(255,255,255,0.04) 40%, rgba(96,165,250,0.12) 100%)", pointerEvents: "none" }} />
      <div style={{
        position: "relative",
        background: "linear-gradient(160deg, #1A1A24 0%, #111118 100%)",
        border: "1px solid transparent",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.04) inset, 0 48px 100px rgba(0,0,0,0.65)",
      }}>
        {/* Title bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 18px", borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(0,0,0,0.25)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ display: "flex", gap: "6px" }}>
              {[0,1,2].map(i => <div key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />)}
            </div>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.28)", fontFamily: "var(--font-geist-mono)", letterSpacing: "0.02em" }}>infina.app / dashboard</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(74,222,128,0.07)", border: "1px solid rgba(74,222,128,0.15)", borderRadius: "100px", padding: "4px 11px" }}>
            <div className="pulse-dot" style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4ADE80" }} />
            <span style={{ fontSize: "11px", color: "#4ADE80", fontWeight: 600 }}>Protected</span>
          </div>
        </div>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {[
            { label: "Blocked", value: "2,847", sub: "+14 today", color: "#FB7185" },
            { label: "Workflows", value: "14", sub: "active", color: "#F8FAFC" },
            { label: "Risk", value: "Low", sub: "last 24h", color: "#4ADE80" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "16px 18px", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.28)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px" }}>{s.label}</p>
              <p style={{ fontSize: "22px", fontWeight: 700, color: s.color, letterSpacing: "-0.04em", lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.22)", marginTop: "5px" }}>{s.sub}</p>
            </div>
          ))}
        </div>
        {/* Feed header */}
        <div style={{ padding: "10px 18px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "10px", fontWeight: 600, color: "rgba(255,255,255,0.25)", letterSpacing: "0.07em", textTransform: "uppercase" }}>Live Feed</span>
          <span style={{ fontSize: "10px", color: "#4ADE80", fontFamily: "var(--font-geist-mono)" }}>● live</span>
        </div>
        {/* Alerts */}
        {feed.map((a, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "13px 18px", borderBottom: i < feed.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", background: a.highlight ? "rgba(251,113,133,0.025)" : "transparent" }}>
            <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.06em", color: a.bc, background: a.bb, padding: "3px 7px", borderRadius: "3px", fontFamily: "var(--font-geist-mono)", flexShrink: 0 }}>{a.badge}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.82)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", margin: 0 }}>{a.title}</p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", margin: "2px 0 0" }}>{a.source}</p>
            </div>
            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", flexShrink: 0, fontFamily: "var(--font-geist-mono)" }}>{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const headline = ["Your", "AI", "agents", "need", "a"];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section ref={ref} style={{ minHeight: "100vh", backgroundColor: "#09090B", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>

      {/* Ambient radial glow */}
      <div style={{ position: "absolute", top: "32%", left: "50%", transform: "translate(-50%, -50%)", width: "1000px", height: "700px", background: "radial-gradient(ellipse at center, rgba(74,222,128,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
      {/* Second accent glow — off center */}
      <div style={{ position: "absolute", top: "20%", left: "60%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(96,165,250,0.03) 0%, transparent 60%)", pointerEvents: "none" }} />

      {/* Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, height: "62px", padding: "0 6vw", display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(9,9,11,0.88)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.07)", zIndex: 100 }}>
        <InfinaLogo />
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {([["Features","#features"],["How it works","#how-it-works"],["Pricing","#pricing"]] as [string,string][]).map(([l,h]) => (
            <Link key={l} href={h} style={{ fontSize: "14px", color: "rgba(255,255,255,0.48)", textDecoration: "none", letterSpacing: "-0.01em" }}>{l}</Link>
          ))}
          <Link href="#pricing" style={{ background: "#F8FAFC", color: "#09090B", padding: "8px 20px", borderRadius: "7px", fontSize: "13px", fontWeight: 700, textDecoration: "none", letterSpacing: "-0.01em" }}>Get started</Link>
        </div>
      </nav>

      {/* Hero body — centered */}
      <motion.div style={{ y, opacity, flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: "80px", paddingBottom: "20px" }}>

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: "32px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "12px", color: "rgba(255,255,255,0.38)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "5px 14px", letterSpacing: "0.03em" }}>
            <span className="pulse-dot" style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4ADE80", flexShrink: 0 }} />
            Now available — early access open
          </span>
        </motion.div>

        {/* Headline — centered, full width */}
        <div style={{ textAlign: "center", padding: "0 6vw", maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(52px, 6.5vw, 96px)", fontWeight: 800, lineHeight: 0.98, letterSpacing: "-0.045em", margin: "0 0 22px" }}>
            {headline.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.65, delay: 0.15 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ display: "inline-block", marginRight: "0.22em", color: "#F8FAFC" }}
              >{word}</motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.65, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bodyguard-text"
              style={{ display: "inline-block" }}
            >bodyguard.</motion.span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.75 }} style={{ fontSize: "17px", color: "rgba(255,255,255,0.42)", lineHeight: 1.68, margin: "0 auto 32px", maxWidth: "520px" }}>
            Infina monitors every action your Zapier, Make, n8n, and Lindy automations take — and blocks threats before they reach your data.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.88 }} style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "20px", flexWrap: "wrap" }}>
            <Link href="#pricing" style={{ background: "#F8FAFC", color: "#09090B", padding: "14px 28px", borderRadius: "9px", fontSize: "15px", fontWeight: 700, textDecoration: "none", letterSpacing: "-0.02em" }}>Start protecting →</Link>
            <Link href="#how-it-works" style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)", padding: "14px 28px", borderRadius: "9px", fontSize: "15px", fontWeight: 500, textDecoration: "none", background: "rgba(255,255,255,0.03)", letterSpacing: "-0.01em" }}>See how it works</Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.22)", marginBottom: "16px" }}>No credit card required · $49/mo · Cancel anytime</p>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", justifyContent: "center" }}>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Works with</span>
              {["Zapier","Make","n8n","Lindy"].map(n => <span key={n} style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.3)" }}>{n}</span>)}
            </div>
          </motion.div>
        </div>


      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} style={{ position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)" }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
