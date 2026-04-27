"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import HandwritingCanvas from "@/components/ui/HandwritingCanvas";

const InfinaLogo = ({ size = 80 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 130" fill="none"
    width={size} height={Math.round(size * 0.325)} aria-label="Infina">
    {[
      [8,8,8,122],[24,8,24,122],
      [48,8,48,122],[48,8,84,122],[84,8,84,122],
      [108,8,108,122],[108,8,155,8],[108,65,150,65],
      [172,8,172,122],[188,8,188,122],
      [212,8,212,122],[212,8,248,122],[248,8,248,122],
      [272,122,304,8],[336,122,304,8],[281,78,327,78],
    ].map(([x1,y1,x2,y2],i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="#F5F5F5" strokeWidth="3.5" strokeLinecap="square"/>
    ))}
  </svg>
);

export default function Hero() {
  const [done, setDone] = useState(false);

  return (
    <section style={{
      minHeight: "100vh",
      backgroundColor: "#000",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* Glow blob */}
      <div style={{
        position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)",
        width: "800px", height: "500px",
        background: "radial-gradient(ellipse, rgba(0,255,135,0.08) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0,
        padding: "20px 6vw",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        zIndex: 100,
      }}>
        <InfinaLogo size={72} />
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {[["How it works","#how-it-works"],["Pricing","#pricing"],["Who it's for","#who"]].map(([label,href]) => (
            <Link key={label} href={href} style={{
              fontSize: "14px", color: "rgba(255,255,255,0.55)",
              textDecoration: "none", transition: "color 0.2s",
            }}>{label}</Link>
          ))}
          <Link href="#pricing" style={{
            background: "#fff", color: "#000",
            padding: "9px 22px", borderRadius: "8px",
            fontSize: "14px", fontWeight: 600, textDecoration: "none",
          }}>
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero content */}
      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "0 6vw", paddingTop: "100px",
        maxWidth: "1100px", margin: "0 auto", width: "100%", position: "relative", zIndex: 1,
      }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(0,255,135,0.08)",
            border: "1px solid rgba(0,255,135,0.2)",
            borderRadius: "100px", padding: "6px 16px",
            marginBottom: "40px", width: "fit-content",
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00FF87", display: "block" }} />
          <span style={{ fontSize: "13px", color: "#00FF87", fontWeight: 500 }}>AI Agent Security — Now Available</span>
        </motion.div>

        {/* Handwriting animation */}
        <HandwritingCanvas
          text="Infina Technology"
          onComplete={() => setTimeout(() => setDone(true), 150)}
        />

        <AnimatePresence>
          {done && (
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p style={{
                fontSize: "clamp(18px, 2vw, 24px)",
                color: "rgba(255,255,255,0.5)",
                marginTop: "24px",
                maxWidth: "540px",
                lineHeight: 1.6,
                fontWeight: 400,
              }}>
                Security for the AI agents running your business.
                Real-time protection from prompt injections, data leaks, and hijacks.
              </p>

              <div style={{ marginTop: "48px", display: "flex", flexWrap: "wrap", gap: "14px" }}>
                <Link href="#pricing" style={{
                  background: "#00FF87", color: "#000",
                  padding: "14px 32px", borderRadius: "8px",
                  fontSize: "16px", fontWeight: 700, textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  boxShadow: "0 0 40px rgba(0,255,135,0.3)",
                }}>
                  Start free trial →
                </Link>
                <Link href="#how-it-works" style={{
                  border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)",
                  padding: "14px 32px", borderRadius: "8px",
                  fontSize: "16px", fontWeight: 600, textDecoration: "none",
                  display: "inline-flex", alignItems: "center",
                  background: "rgba(255,255,255,0.04)",
                }}>
                  See how it works
                </Link>
              </div>

              <p style={{ marginTop: "24px", fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>
                No credit card required · Cancel anytime · Setup in 60 seconds
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      {done && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{
            position: "absolute", bottom: "40px", left: "50%",
            transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          }}
        >
          <div style={{
            width: "1px", height: "48px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)"
          }} />
        </motion.div>
      )}
    </section>
  );
}
