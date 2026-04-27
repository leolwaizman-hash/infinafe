"use client";
import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";
import { motion } from "motion/react";

const initial: WaitlistState = { status: "idle", message: "" };

export default function WaitlistCTA() {
  const [state, action, isPending] = useActionState(joinWaitlist, initial);
  return (
    <section id="waitlist" style={{
      padding: "120px 6vw",
      backgroundColor: "#000",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      position: "relative",
      overflow: "hidden",
    }}>

      <div style={{
        position: "absolute", bottom: "-20%", left: "50%", transform: "translateX(-50%)",
        width: "800px", height: "400px",
        background: "radial-gradient(ellipse, rgba(0,255,135,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", color: "#00FF87", textTransform: "uppercase", marginBottom: "20px" }}>
            Early Access
          </p>
          <h2 style={{
            fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 700,
            color: "#F5F5F5", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: "20px",
          }}>
            Be first in line.
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)", marginBottom: "52px", lineHeight: 1.6 }}>
            Join 100+ businesses already on the waitlist.
          </p>

          {state.status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "40px 0" }}
            >
              <div style={{
                width: "64px", height: "64px", borderRadius: "50%",
                backgroundColor: "rgba(0,255,135,0.1)", border: "1px solid rgba(0,255,135,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#00FF87" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontSize: "20px", fontWeight: 600, color: "#F5F5F5" }}>{state.message}</p>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)" }}>We&apos;ll be in touch before launch.</p>
            </motion.div>
          ) : (
            <form action={action} style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "420px", margin: "0 auto" }}>
              <input
                type="email" name="email" placeholder="you@company.com" required
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "16px 20px",
                  fontSize: "15px",
                  color: "#F5F5F5",
                  outline: "none",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
              <button
                type="submit" disabled={isPending}
                style={{
                  backgroundColor: "#00FF87", color: "#000",
                  border: "none", borderRadius: "10px",
                  padding: "16px", fontSize: "16px", fontWeight: 700,
                  cursor: isPending ? "not-allowed" : "pointer",
                  opacity: isPending ? 0.6 : 1,
                  width: "100%",
                  boxShadow: "0 0 40px rgba(0,255,135,0.25)",
                }}
              >
                {isPending ? "Joining..." : "Join the waitlist →"}
              </button>
            </form>
          )}

          {state.status === "error" && (
            <p style={{ marginTop: "12px", fontSize: "14px", color: "#FF3B3B" }}>{state.message}</p>
          )}
          {state.status !== "success" && (
            <p style={{ marginTop: "20px", fontSize: "13px", color: "rgba(255,255,255,0.25)" }}>No spam, ever.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
