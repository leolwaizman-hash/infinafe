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
      backgroundColor: "#080808",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      position: "relative",
      overflow: "hidden",
    }}>

      <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "20px" }}>
            Early Access
          </p>
          <h2 style={{
            fontSize: "clamp(36px, 4vw, 60px)", fontWeight: 700,
            color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-2px", marginBottom: "20px",
          }}>
            Be first in line.
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.35)", marginBottom: "52px", lineHeight: 1.6 }}>
            Join 100+ businesses already on the waitlist.
          </p>

          {state.status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "40px 0" }}
            >
              <div style={{
                width: "52px", height: "52px", borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontSize: "20px", fontWeight: 600, color: "#FFFFFF" }}>{state.message}</p>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.3)" }}>We&apos;ll be in touch before launch.</p>
            </motion.div>
          ) : (
            <form action={action} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "0 auto" }}>
              <input
                type="email" name="email" placeholder="you@company.com" required
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "14px 18px",
                  fontSize: "14px",
                  color: "#FFFFFF",
                  outline: "none",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
              <button
                type="submit" disabled={isPending}
                style={{
                  backgroundColor: "#FFFFFF", color: "#000",
                  border: "none", borderRadius: "8px",
                  padding: "14px", fontSize: "15px", fontWeight: 600,
                  cursor: isPending ? "not-allowed" : "pointer",
                  opacity: isPending ? 0.6 : 1,
                  width: "100%",
                  letterSpacing: "-0.01em",
                }}
              >
                {isPending ? "Joining..." : "Join the waitlist →"}
              </button>
            </form>
          )}

          {state.status === "error" && (
            <p style={{ marginTop: "12px", fontSize: "13px", color: "#EF4444" }}>{state.message}</p>
          )}
          {state.status !== "success" && (
            <p style={{ marginTop: "18px", fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>No spam, ever.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
