"use client";
import { motion } from "motion/react";
import WordReveal from "@/components/ui/WordReveal";

const testimonials = [
  {
    quote: "We had a prompt injection attack hit our customer support bot on a Tuesday morning. Infina caught it, blocked it, and sent me an alert — all before my coffee was done. I didn't even know what a prompt injection was before Infina explained it to me in plain English.",
    name: "Sarah M.",
    title: "Founder, eCommerce brand (Shopify + Zapier)",
    initials: "SM",
    stars: 5,
  },
  {
    quote: "I run 40+ Zapier automations for my agency clients. Infina is the first tool that made me feel like I actually know what's happening inside all of them. The weekly digest alone is worth the price — it's like having a security analyst on call.",
    name: "David K.",
    title: "Automation Consultant, 40+ active workflows",
    initials: "DK",
    stars: 5,
  },
  {
    quote: "We were manually auditing our Make.com workflows every month. It took 3 days and we still weren't confident we caught everything. With Infina, we have a real-time audit trail and we actually passed our first compliance review without stress.",
    name: "Rachel T.",
    title: "Operations Manager, B2B SaaS company",
    initials: "RT",
    stars: 5,
  },
  {
    quote: "The setup took 4 minutes. I timed it. And within the first week it flagged something in my n8n workflow that I'd been running for 6 months without realizing was a risk. That moment alone paid for a year of the subscription.",
    name: "James L.",
    title: "Solo founder, AI-first startup",
    initials: "JL",
    stars: 5,
  },
  {
    quote: "My board asked about AI security at our last meeting. Six months ago I would have had nothing to say. Now I pull up the Infina dashboard and walk them through everything. It changed the conversation completely.",
    name: "Priya S.",
    title: "CEO, 12-person tech company",
    initials: "PS",
    stars: 5,
  },
  {
    quote: "I was skeptical — another SaaS tool promising enterprise features for SMBs. But the threat detection is real. It blocked a data exfiltration attempt that my $300/month IT consultant completely missed. I cancelled the consultant. I kept Infina.",
    name: "Marcus W.",
    title: "Business owner, financial services",
    initials: "MW",
    stars: 5,
  },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "20px" }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FBBF24">
          <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L7 1z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ padding: "140px 6vw", backgroundColor: "#09090B", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", marginBottom: "20px" }}
        >
          What Customers Say
        </motion.p>

        <h2 style={{ fontSize: "clamp(36px, 4vw, 60px)", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.05, letterSpacing: "-0.04em", maxWidth: "600px", marginBottom: "72px" }}>
          <WordReveal text="Trusted by businesses that can't afford to get hacked." delay={0.1} />
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.05)", borderRadius: "16px", overflow: "hidden" }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: (i % 3) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div style={{ padding: "40px", background: "#141418", height: "100%", boxSizing: "border-box" }}>
                <Stars />
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: "28px", fontStyle: "italic" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>{t.initials}</span>
                  </div>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "#F8FAFC", margin: 0 }}>{t.name}</p>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", margin: "2px 0 0" }}>{t.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
