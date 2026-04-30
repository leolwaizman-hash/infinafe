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
      padding: "140px 6vw",
      backgroundColor: "#09090B",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      position: "relative",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Side by side layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}>

          {/* Left: headline + trust signals */}
          <FadeInView>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", marginBottom: "20px" }}>
              Pricing
            </p>
            <h2 style={{
              fontSize: "clamp(36px, 3.8vw, 58px)", fontWeight: 800,
              color: "#F8FAFC", lineHeight: 1.03, letterSpacing: "-0.04em", marginBottom: "24px",
            }}>
              Simple pricing.
              <br />
              <span style={{ color: "rgba(255,255,255,0.22)" }}>No surprises.</span>
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.42)", lineHeight: 1.7, marginBottom: "48px" }}>
              One plan. Everything included.
              Price locked in for early access customers — forever.
            </p>

            {/* Trust signals */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "No per-seat pricing — protect unlimited workflows",
                "Cancel anytime, no questions asked",
                "Used by 140+ businesses in early access",
                "SOC 2 compliance roadmap in progress",
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4l2 2L6.5 2" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
          </FadeInView>

          {/* Right: pricing card */}
          <FadeInView delay={0.15}>
            <div style={{
              background: "linear-gradient(160deg, #1C1C26 0%, #14141C 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "44px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }} />

              <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "4px" }}>
                <span style={{ fontSize: "64px", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.04em", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>$49</span>
                <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.3)", fontWeight: 400 }}>/month</span>
              </div>
              <p style={{ fontSize: "12px", color: "#4ADE80", marginBottom: "32px", fontWeight: 600, letterSpacing: "0.02em" }}>
                Early access — price locked in forever
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0", display: "flex", flexDirection: "column", gap: "11px" }}>
                {features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "rgba(255,255,255,0.52)" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7l3 3L11.5 3.5" stroke="rgba(74,222,128,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <input
                type="email" placeholder="your@email.com"
                value={email} onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleCheckout()}
                style={{
                  width: "100%", boxSizing: "border-box",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px", padding: "13px 16px",
                  fontSize: "14px", color: "#F8FAFC",
                  outline: "none", marginBottom: "10px",
                }}
              />
              <button
                onClick={handleCheckout} disabled={loading}
                style={{
                  width: "100%", background: "#F8FAFC", color: "#09090B",
                  border: "none", borderRadius: "8px", padding: "14px",
                  fontSize: "14px", fontWeight: 600, cursor: "pointer",
                  opacity: loading ? 0.6 : 1, letterSpacing: "-0.01em",
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
      </div>
    </section>
  );
}
