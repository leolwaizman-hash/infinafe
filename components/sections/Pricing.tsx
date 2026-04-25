"use client";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/ui/FadeInView";
import { useState } from "react";

const features = ["Real-time agent monitoring","Plain English threat alerts","Email notifications","Weekly security digest","Covers Zapier, Make, n8n & Lindy","No per-seat pricing","Cancel anytime"];

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
    <SectionWrapper id="pricing" className="border-t border-border">
      <div className="text-center mb-14">
        <FadeInView>
          <p className="text-xs font-semibold tracking-widest text-brand-green uppercase mb-4">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple pricing. No enterprise contracts.</h2>
          <p className="text-text-2 max-w-md mx-auto">One plan. Everything included. Start protecting your AI agents today.</p>
        </FadeInView>
      </div>
      <FadeInView>
        <div className="max-w-md mx-auto rounded-2xl border border-brand-green/30 bg-surface p-8 relative overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-40 rounded-full opacity-15 blur-[60px] pointer-events-none" style={{ background: "#00FF87" }} />
          <div className="relative">
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-5xl font-bold">$49</span>
              <span className="text-[#6B7280] text-sm">/month</span>
            </div>
            <p className="text-[#6B7280] text-sm mb-6">Early access pricing — locked in for life.</p>
            <ul className="space-y-3 mb-8">
              {features.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-[#6B7280]">
                  <span className="text-brand-green text-xs shrink-0">✓</span>{f}
                </li>
              ))}
            </ul>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-lg px-4 py-3 text-sm text-[#F5F5F5] placeholder:text-[#6B7280] focus:outline-none focus:border-[#00FF87]/50 mb-3"
            />
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="block w-full text-center bg-[#00FF87] text-black font-semibold text-sm px-6 py-3 rounded-lg hover:brightness-110 transition-all duration-200 disabled:opacity-60"
            >
              {loading ? "Redirecting..." : "Start Protecting My Agents →"}
            </button>
            <p className="text-center text-xs text-[#6B7280] mt-4">Powered by Stripe · Cancel anytime</p>
          </div>
        </div>
      </FadeInView>
    </SectionWrapper>
  );
}
