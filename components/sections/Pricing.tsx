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
      backgroundColor: "#050505",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px", height: "500px",
        background: "radial-gradient(ellipse, rgba(0,255,135,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        <FadeInView>
          <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", color: "#00FF87", textTransform: "uppercase", marginBottom: "20px", textAlign: "center" }}>
            Pricing
          </p>
          <h2 style={{
            fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 700,
            color: "#F5F5F5", lineHeight: 1.05, letterSpacing: "-1.5px",
            textAlign: "center",
          }}>
            Simple pricing.
            <span style={{ color: "rgba(255,255,255,0.3)" }}> No surprises.</span>
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)", marginTop: "20px", textAlign: "center", maxWidth: "480px", margin: "20px auto 0" }}>
            One plan. Everything included. Start protecting today.
          </p>
        </FadeInView>

        <FadeInView delay={0.15}>
          <div style={{
            maxWidth: "520px", margin: "64px auto 0",
            background: "linear-gradient(135deg, #0D0D0D 0%, #111111 100%)",
            border: "1px solid rgba(0,255,135,0.2)",
            borderRadius: "20px",
            padding: "52px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 0 60px rgba(0,255,135,0.08), 0 0 120px rgba(0,255,135,0.04)",
          }}>

            {/* Top glow accent */}
            <div style={{
              position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
              width: "60%", height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(0,255,135,0.6), transparent)",
            }} />

            <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "6px" }}>
              <span style={{ fontSize: "72px", fontWeight: 800, color: "#F5F5F5", letterSpacing: "-3px", lineHeight: 1 }}>$49</span>
              <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>/month</span>
            </div>
            <p style={{ fontSize: "14px", color: "#00FF87", marginBottom: "36px", fontWeight: 500 }}>
              Early access — price locked forever.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px 0", display: "flex", flexDirection: "column", gap: "14px" }}>
              {features.map(f => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", color: "rgba(255,255,255,0.6)" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4.5" stroke="#00FF87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                borderRadius: "10px", padding: "14px 18px",
                fontSize: "15px", color: "#F5F5F5",
                outline: "none", marginBottom: "12px",
              }}
            />
            <button
              onClick={handleCheckout}
              disabled={loading}
              style={{
                width: "100%", background: "#00FF87", color: "#000",
                border: "none", borderRadius: "10px", padding: "16px",
                fontSize: "16px", fontWeight: 700, cursor: "pointer",
                boxShadow: "0 0 40px rgba(0,255,135,0.3)",
                opacity: loading ? 0.7 : 1,
                transition: "opacity 0.2s",
              }}
            >
              {loading ? "Redirecting..." : "Start protecting my agents →"}
            </button>
            <p style={{ textAlign: "center", fontSize: "13px", color: "rgba(255,255,255,0.25)", marginTop: "16px" }}>
              Secured by Stripe · Cancel anytime
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
