"use client";
import Link from "next/link";
import { motion } from "motion/react";

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
  {
    badge: "BLOCKED", bc: "#FB7185", bb: "rgba(251,113,133,0.12)",
    title: "Prompt injection in customer workflow",
    source: "Zapier · Customer Support Bot",
    time: "2s ago",
    highlight: true,
  },
  {
    badge: "STOPPED", bc: "#FB923C", bb: "rgba(251,146,60,0.1)",
    title: "Unauthorized data export attempt",
    source: "Make · Sales Automation",
    time: "14m ago",
    highlight: false,
  },
  {
    badge: "CLEAR", bc: "#4ADE80", bb: "rgba(74,222,128,0.08)",
    title: "All 12 workflows running normally",
    source: "System · health check",
    time: "1h ago",
    highlight: false,
  },
];

const stats = [
  { label: "Blocked", value: "2,847", sub: "+14 today", color: "#FB7185" },
  { label: "Workflows", value: "14", sub: "active", color: "#F8FAFC" },
  { label: "Risk", value: "Low", sub: "last 24h", color: "#4ADE80" },
];

function Dashboard() {
  return (
    <div style={{ position: "relative" }}>
      {/* Ambient glow behind the card */}
      <div style={{
        position: "absolute", inset: "-60px",
        background: "radial-gradient(ellipse at 50% 60%, rgba(74,222,128,0.07) 0%, transparent 68%)",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative",
        background: "linear-gradient(160deg, #1C1C26 0%, #14141C 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.03) inset, 0 40px 80px rgba(0,0,0,0.55)",
      }}>

        {/* Title bar */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "13px 18px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          background: "rgba(0,0,0,0.25)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ display: "flex", gap: "6px" }}>
              {[0,1,2].map(i => (
                <div key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
              ))}
            </div>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.28)", fontFamily: "var(--font-geist-mono)", letterSpacing: "0.02em" }}>
              infina.app / dashboard
            </span>
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: "6px",
            background: "rgba(74,222,128,0.07)",
            border: "1px solid rgba(74,222,128,0.15)",
            borderRadius: "100px", padding: "4px 11px",
          }}>
            <div className="pulse-dot" style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4ADE80" }} />
            <span style={{ fontSize: "11px", color: "#4ADE80", fontWeight: 600, letterSpacing: "0.01em" }}>Protected</span>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: "16px 18px",
              borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.28)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px" }}>
                {s.label}
              </p>
              <p style={{ fontSize: "22px", fontWeight: 700, color: s.color, letterSpacing: "-0.04em", lineHeight: 1 }}>
                {s.value}
              </p>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.22)", marginTop: "5px" }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Feed header */}
        <div style={{
          padding: "10px 18px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span style={{ fontSize: "10px", fontWeight: 600, color: "rgba(255,255,255,0.25)", letterSpacing: "0.07em", textTransform: "uppercase" }}>
            Live Feed
          </span>
          <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.18)", fontFamily: "var(--font-geist-mono)" }}>
            ● live
          </span>
        </div>

        {/* Alerts */}
        {feed.map((a, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: "12px",
            padding: "13px 18px",
            borderBottom: i < feed.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
            background: a.highlight ? "rgba(251,113,133,0.025)" : "transparent",
          }}>
            <span style={{
              fontSize: "9px", fontWeight: 700, letterSpacing: "0.06em",
              color: a.bc, background: a.bb,
              padding: "3px 7px", borderRadius: "3px",
              fontFamily: "var(--font-geist-mono)",
              flexShrink: 0,
            }}>
              {a.badge}
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                fontSize: "12px", fontWeight: 500,
                color: "rgba(255,255,255,0.82)",
                whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                margin: 0,
              }}>
                {a.title}
              </p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", margin: "2px 0 0" }}>
                {a.source}
              </p>
            </div>
            <span style={{
              fontSize: "10px", color: "rgba(255,255,255,0.2)",
              flexShrink: 0, fontFamily: "var(--font-geist-mono)",
            }}>
              {a.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      backgroundColor: "#09090B",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, height: "60px",
        padding: "0 6vw",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "rgba(9,9,11,0.82)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        zIndex: 100,
      }}>
        <InfinaLogo />
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {([ ["How it works","#how-it-works"], ["Pricing","#pricing"], ["Who it's for","#who"] ] as [string,string][]).map(([label,href]) => (
            <Link key={label} href={href} style={{ fontSize: "14px", color: "rgba(255,255,255,0.42)", textDecoration: "none" }}>
              {label}
            </Link>
          ))}
          <Link href="#pricing" style={{
            background: "#F8FAFC", color: "#09090B",
            padding: "7px 18px", borderRadius: "7px",
            fontSize: "13px", fontWeight: 600, textDecoration: "none",
            letterSpacing: "-0.01em",
          }}>
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero body */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        padding: "0 6vw",
        paddingTop: "60px",
        gap: "72px",
      }}>

        {/* LEFT — Copy */}
        <div style={{ flex: "0 0 auto", width: "min(460px, 45vw)" }}>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: "28px" }}
          >
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              fontSize: "12px", color: "rgba(255,255,255,0.38)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "6px", padding: "5px 11px",
              letterSpacing: "0.02em",
            }}>
              <span className="pulse-dot" style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4ADE80", flexShrink: 0 }} />
              Now available
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{
              fontSize: "clamp(44px, 4.8vw, 68px)",
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              color: "#F8FAFC",
              margin: "0 0 24px",
            }}
          >
            Your AI agents
            <br />
            need a
            <br />
            <span style={{ color: "rgba(255,255,255,0.22)" }}>bodyguard.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.44)",
              lineHeight: 1.72,
              margin: "0 0 36px",
            }}
          >
            Infina monitors every action your Zapier, Make, n8n,
            and Lindy automations take — and blocks threats before
            they reach your data.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            style={{ display: "flex", gap: "10px", marginBottom: "32px" }}
          >
            <Link href="#pricing" style={{
              background: "#F8FAFC", color: "#09090B",
              padding: "12px 22px", borderRadius: "8px",
              fontSize: "14px", fontWeight: 600, textDecoration: "none",
              letterSpacing: "-0.01em",
            }}>
              Start free trial →
            </Link>
            <Link href="#how-it-works" style={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.52)",
              padding: "12px 22px", borderRadius: "8px",
              fontSize: "14px", fontWeight: 500, textDecoration: "none",
              background: "rgba(255,255,255,0.03)",
            }}>
              How it works
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", marginBottom: "24px" }}>
              No credit card required · $49/mo · Cancel anytime
            </p>
            <div style={{
              display: "flex", alignItems: "center", gap: "18px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.07em", textTransform: "uppercase", flexShrink: 0 }}>
                Works with
              </span>
              {["Zapier", "Make", "n8n", "Lindy"].map(name => (
                <span key={name} style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.28)" }}>
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT — Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{ flex: 1, minWidth: 0 }}
        >
          <Dashboard />
        </motion.div>

      </div>
    </section>
  );
}
