"use client";
import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";
import { motion } from "motion/react";
import WordReveal from "@/components/ui/WordReveal";

const initial: WaitlistState = { status: "idle", message: "" };

const proof = [
  { value: "140+", label: "Early access businesses" },
  { value: "12", label: "Countries protected" },
  { value: "$0", label: "Customer data lost" },
];

export default function WaitlistCTA() {
  const [state, action, isPending] = useActionState(joinWaitlist, initial);
  return (
    <section id="waitlist" style={{
      padding: "160px 6vw",
      backgroundColor: "#080808",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Ambient glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "500px", background: "radial-gradient(ellipse at center, rgba(74,222,128,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "radial-gradient(circle at center, rgba(74,222,128,0.03) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", position: "relative" }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "28px" }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "12px", color: "rgba(255,255,255,0.38)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px", padding: "5px 14px", letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600 }}>
            <span className="pulse-dot" style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4ADE80", flexShrink: 0 }} />
            Early Access Open
          </span>
        </motion.div>

        {/* Headline */}
        <h2 style={{ fontSize: "clamp(44px, 5vw, 72px)", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.0, letterSpacing: "-0.04em", marginBottom: "24px" }}>
          <WordReveal text="Don't let the next attack" delay={0.05} stagger={0.06} />
          <br />
          <WordReveal text="be your first warning." delay={0.4} stagger={0.06} dim />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ fontSize: "17px", color: "rgba(255,255,255,0.38)", lineHeight: 1.7, marginBottom: "52px", maxWidth: "500px", margin: "0 auto 52px" }}
        >
          Join the businesses that decided to stop hoping their AI agents were safe — and started knowing.
        </motion.p>

        {/* Social proof stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{ display: "flex", justifyContent: "center", gap: "0", marginBottom: "44px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px", overflow: "hidden", maxWidth: "480px", margin: "0 auto 44px" }}
        >
          {proof.map((p, i) => (
            <div key={i} style={{ flex: 1, padding: "20px 16px", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none", textAlign: "center" }}>
              <p style={{ fontSize: "22px", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "4px", fontFamily: "var(--font-display)" }}>{p.value}</p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", lineHeight: 1.4, margin: 0 }}>{p.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          {state.status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "40px 0" }}
            >
              <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontSize: "22px", fontWeight: 700, color: "#F8FAFC", letterSpacing: "-0.02em" }}>{state.message}</p>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)" }}>We&apos;ll be in touch before launch. Watch your inbox.</p>
            </motion.div>
          ) : (
            <form action={action} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "420px", margin: "0 auto" }}>
              <input
                type="email" name="email" placeholder="you@company.com" required
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "9px", padding: "15px 20px", fontSize: "15px", color: "#F8FAFC", outline: "none", width: "100%", boxSizing: "border-box" }}
              />
              <button
                type="submit" disabled={isPending}
                style={{ background: "#F8FAFC", color: "#09090B", border: "none", borderRadius: "9px", padding: "15px", fontSize: "15px", fontWeight: 700, cursor: isPending ? "not-allowed" : "pointer", opacity: isPending ? 0.6 : 1, width: "100%", letterSpacing: "-0.02em", transition: "opacity 0.15s" }}
              >
                {isPending ? "Joining..." : "Secure my spot — it's free →"}
              </button>
            </form>
          )}

          {state.status === "error" && (
            <p style={{ marginTop: "12px", fontSize: "13px", color: "#FB7185" }}>{state.message}</p>
          )}
          {state.status !== "success" && (
            <p style={{ marginTop: "20px", fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
              No spam, ever. Unsubscribe anytime.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
