"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import HandwritingCanvas from "@/components/ui/HandwritingCanvas";

export default function Hero() {
  const [done, setDone] = useState(false);

  return (
    <section style={{
      minHeight: "100vh",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 6vw",
      position: "relative",
    }}>

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0,
        padding: "18px 6vw",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid #f0f0f0",
        zIndex: 100,
      }}>
        <Image src="/logo.svg" alt="Infina" width={90} height={28} style={{ color: "#1D1D1F" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link href="#how-it-works" style={{ fontSize: "14px", color: "#6E6E73", textDecoration: "none" }}>How it works</Link>
          <Link href="#pricing" style={{ fontSize: "14px", color: "#6E6E73", textDecoration: "none" }}>Pricing</Link>
          <Link href="#pricing" style={{
            background: "#1D1D1F", color: "#fff",
            padding: "9px 22px", borderRadius: "100px",
            fontSize: "14px", fontWeight: 600, textDecoration: "none",
          }}>
            Get started
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <div style={{ maxWidth: "860px", paddingTop: "80px" }}>

        {/* Handwriting animation */}
        <HandwritingCanvas
          text="Infina Technology"
          onComplete={() => setTimeout(() => setDone(true), 150)}
        />

        {/* Content that appears after writing */}
        <AnimatePresence>
          {done && (
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p style={{
                fontSize: "clamp(18px, 2.2vw, 26px)",
                color: "#6E6E73",
                marginTop: "20px",
                maxWidth: "560px",
                lineHeight: 1.55,
                fontWeight: 400,
              }}>
                AI security for the automations running your business.
                Protect your Zapier, Make, and n8n agents from prompt injections and data leaks.

              </p>

              <div style={{ marginTop: "44px", display: "flex", flexWrap: "wrap", gap: "14px" }}>
                <Link href="#pricing" style={{
                  background: "#1D1D1F", color: "#fff",
                  padding: "16px 38px", borderRadius: "100px",
                  fontSize: "17px", fontWeight: 600, textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: "8px",
                }}>
                  Start protecting →
                </Link>
                <Link href="#how-it-works" style={{
                  border: "1.5px solid #D2D2D7", color: "#1D1D1F",
                  padding: "16px 38px", borderRadius: "100px",
                  fontSize: "17px", fontWeight: 600, textDecoration: "none",
                  display: "inline-flex", alignItems: "center",
                }}>
                  How it works
                </Link>
              </div>

              <p style={{ marginTop: "28px", fontSize: "13px", color: "#86868B" }}>
                No credit card. No enterprise contracts. Just security that makes sense.
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
          transition={{ delay: 1, duration: 0.5 }}
          style={{
            position: "absolute", bottom: "40px", left: "50%",
            transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          }}
        >
          <span style={{ fontSize: "12px", color: "#86868B", letterSpacing: "0.05em" }}>SCROLL</span>
          <div style={{
            width: "1px", height: "40px", background: "linear-gradient(to bottom, #86868B, transparent)"
          }} />
        </motion.div>
      )}
    </section>
  );
}
