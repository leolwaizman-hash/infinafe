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
      backgroundColor: "#1D1D1F",
      borderTop: "1px solid #F0F0F0",
    }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", color: "#86868B", textTransform: "uppercase", marginBottom: "16px" }}>
            Early Access
          </p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "16px" }}>
            Be first in line.
          </h2>
          <p style={{ fontSize: "17px", color: "#86868B", marginBottom: "48px", lineHeight: 1.5 }}>
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
                backgroundColor: "rgba(0,196,106,0.1)", border: "1px solid rgba(0,196,106,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "24px", color: "#00C46A"
              }}>✓</div>
              <p style={{ fontSize: "20px", fontWeight: 600, color: "#FFFFFF" }}>{state.message}</p>
              <p style={{ fontSize: "14px", color: "#86868B" }}>We&apos;ll be in touch before launch.</p>
            </motion.div>
          ) : (
            <form action={action} style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "420px", margin: "0 auto" }}>
              <input
                type="email" name="email" placeholder="you@company.com" required
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "12px",
                  padding: "16px 20px",
                  fontSize: "15px",
                  color: "#FFFFFF",
                  outline: "none",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
              <button
                type="submit" disabled={isPending}
                style={{
                  backgroundColor: "#FFFFFF", color: "#1D1D1F",
                  border: "none", borderRadius: "12px",
                  padding: "16px", fontSize: "15px", fontWeight: 600,
                  cursor: isPending ? "not-allowed" : "pointer",
                  opacity: isPending ? 0.6 : 1,
                  width: "100%",
                }}
              >
                {isPending ? "Joining..." : "Join Waitlist →"}
              </button>
            </form>
          )}

          {state.status === "error" && (
            <p style={{ marginTop: "12px", fontSize: "14px", color: "#FF3B3B" }}>{state.message}</p>
          )}
          {state.status !== "success" && (
            <p style={{ marginTop: "20px", fontSize: "13px", color: "#6E6E73" }}>No spam, ever. Unsubscribe any time.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
