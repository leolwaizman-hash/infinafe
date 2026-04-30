"use client";
import FadeInView from "@/components/ui/FadeInView";
import { useState } from "react";

const features = [
  "Real-time agent monitoring",
  "Plain English threat alerts",
  "Email notifications",
  "Weekly security digest",
  "Covers Zapier, Make, n8n & Lindy",
  "No per-seat pricing",
  "Cancel anytime",
];

export default function Pricing() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    if (!email) { alert("Please enter your email first"); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const { url, error } = await res.json();
      if (error) throw new Error(error);
      window.location.href = url;
    } catch {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <section id="pricing" style={{
      padding: "120px 6vw",
      backgroundColor: "#0C0C0C",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      position: "relative",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeInView>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "20px", textAlign: "center" }}>
            Pricing
          </p>
          <h2 style={{
            fontSize: "clamp(36px, 4vw, 60px)", fontWeight: 700,
            color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-2px",
            textAlign: "center",
          }}>
            Simple pricing.{" "}
            <span style={{ color: "rgba(255,255,255,0.25)" }}>No surprises.</span>
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.35)", marginTop: "20px", textAlign: "center", maxWidth: "420px", margin: "20px auto 0", lineHeight: 1.6 }}>
            One plan. Everything included. Start protecting today.
          </p>
        </FadeInView>

        <FadeInView delay={0.15}>
          <div style={{
            maxWidth: "480px", margin: "64px auto 0",
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "14px",
            padding: "48px",
            position: "relative",
            overflow: "hidden",
          }}>

            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            }} />

            <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "4px" }}>
              <span style={{ fontSize: "68px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-3px", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>$49</span>
              <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.3)", fontWeight: 400 }}>/month</span>
            </div>
            <p style={{ fontSize: "13px", color: "#22C55E", marginBottom: "36px", fontWeight: 500 }}>
              Early access — price locked in forever.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
              {features.map(f => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "rgba(255,255,255,0.55)" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3L11.5 3.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleCheckout()}
              style={{
                width: "100%", boxSizing: "border-box",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px", padding: "13px 16px",
                fontSize: "14px", color: "#FFFFFF",
                outline: "none", marginBottom: "10px",
              }}
            />
            <button
              onClick={handleCheckout}
              disabled={loading}
              style={{
                width: "100%", background: "#FFFFFF", color: "#000",
                border: "none", borderRadius: "8px", padding: "14px",
                fontSize: "15px", fontWeight: 600, cursor: "pointer",
                opacity: loading ? 0.6 : 1,
                letterSpacing: "-0.01em",
                transition: "opacity 0.15s",
              }}
            >
              {loading ? "Redirecting..." : "Start protecting my agents →"}
            </button>
            <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,0.2)", marginTop: "14px" }}>
              Secured by Stripe · Cancel anytime
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
