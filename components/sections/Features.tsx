"use client";
import { motion } from "motion/react";
import WordReveal from "@/components/ui/WordReveal";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#FB7185" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#FB7185",
    title: "Real-Time Threat Detection",
    desc: "Every single action your AI agents take — sending emails, reading files, calling APIs — is analyzed in under 50 milliseconds. Our proprietary threat engine identifies prompt injections, data exfiltration attempts, and hijack patterns before they execute. You get protection that's faster than the attack itself.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" stroke="#4ADE80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 1v3M10 1v3M14 1v3" stroke="#4ADE80" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    color: "#4ADE80",
    title: "Plain English Alerts",
    desc: "No cryptic security logs. No false alarms that cry wolf. When Infina detects a threat, you get a message that reads like it was written by a human: \"Your Zapier customer support bot tried to send 847 customer emails to an external address. We blocked it.\" Instantly actionable. Zero guesswork.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#60A5FA",
    title: "Automatic Threat Blocking",
    desc: "Detection is only half the battle. Infina doesn't just alert — it acts. Suspicious actions are blocked automatically before they cause damage. Your workflows continue running normally while threats are neutralized in the background. No manual intervention required. No damage done.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    color: "#A78BFA",
    title: "Full Compliance Audit Trail",
    desc: "Every action your AI agents take is logged with a full paper trail — who did what, when, and whether it was allowed or blocked. Export-ready reports for GDPR, SOC 2, and HIPAA compliance reviews. Finally, the documentation your compliance team has been asking for.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#FBBF24" strokeWidth="1.8"/>
        <path d="M8 21h8M12 17v4" stroke="#FBBF24" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7 8h10M7 11h6" stroke="#FBBF24" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    color: "#FBBF24",
    title: "Zero-Setup Integrations",
    desc: "Works with Zapier, Make, n8n, and Lindy out of the box. One API key. No webhook configuration. No agents to install on your servers. No code to write. Connect in 60 seconds and every workflow you've ever built is immediately protected. It really is that simple.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#34D399",
    title: "Weekly Intelligence Digest",
    desc: "Every Monday morning, Infina sends you a clear, readable security digest: what your AI agents did last week, what was blocked, what trends are emerging across the platform, and what you should watch out for next week. Stay ahead of threats without drowning in alerts.",
  },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "140px 6vw", backgroundColor: "#09090B", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", marginBottom: "20px" }}
        >
          Everything Included
        </motion.p>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "80px" }}>
          <h2 style={{ fontSize: "clamp(36px, 4vw, 60px)", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.05, letterSpacing: "-0.04em", maxWidth: "560px", margin: 0 }}>
            <WordReveal text="Enterprise security. Small business price." delay={0.1} />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: "16px", color: "rgba(255,255,255,0.4)", maxWidth: "340px", lineHeight: 1.65, margin: 0 }}
          >
            Six powerful protection layers. One flat monthly price. No security team required.
          </motion.p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.05)", borderRadius: "16px", overflow: "hidden" }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: (i % 3) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="shine-card" style={{ padding: "44px 40px", background: "#141418", height: "100%", boxSizing: "border-box", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, ${f.color}40, transparent)` }} />
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: `rgba(${f.color === "#FB7185" ? "251,113,133" : f.color === "#4ADE80" ? "74,222,128" : f.color === "#60A5FA" ? "96,165,250" : f.color === "#A78BFA" ? "167,139,250" : f.color === "#FBBF24" ? "251,191,36" : "52,211,153"},0.1)`, border: `1px solid rgba(${f.color === "#FB7185" ? "251,113,133" : f.color === "#4ADE80" ? "74,222,128" : f.color === "#60A5FA" ? "96,165,250" : f.color === "#A78BFA" ? "167,139,250" : f.color === "#FBBF24" ? "251,191,36" : "52,211,153"},0.2)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#F8FAFC", marginBottom: "14px", letterSpacing: "-0.02em", lineHeight: 1.3 }}>{f.title}</h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
