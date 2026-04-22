import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/ui/FadeInView";
import Link from "next/link";

const features = ["Real-time agent monitoring","Plain English threat alerts","Email + Slack notifications","Weekly security digest","Covers Zapier, Make, n8n & Lindy","No per-seat pricing","Cancel anytime"];

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" className="border-t border-border">
      <div className="text-center mb-14">
        <FadeInView>
          <p className="text-xs font-semibold tracking-widest text-brand-green uppercase mb-4">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple pricing. No enterprise contracts.</h2>
          <p className="text-text-2 max-w-md mx-auto">One plan. Everything included. Full pricing details coming at launch.</p>
        </FadeInView>
      </div>
      <FadeInView>
        <div className="max-w-md mx-auto rounded-2xl border border-brand-green/30 bg-surface p-8 relative overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-40 rounded-full opacity-15 blur-[60px] pointer-events-none" style={{ background: "#00FF87" }} />
          <div className="relative">
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-5xl font-bold">$49</span>
              <span className="text-text-2 text-sm">/month</span>
            </div>
            <p className="text-text-2 text-sm mb-8">Early access pricing — locked in for life.</p>
            <ul className="space-y-3 mb-8">
              {features.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-text-2">
                  <span className="text-brand-green text-xs shrink-0">✓</span>{f}
                </li>
              ))}
            </ul>
            <Link href="#waitlist" className="block w-full text-center bg-brand-green text-bg font-semibold text-sm px-6 py-3 rounded-lg hover:brightness-110 glow-green transition-all duration-200">
              Join the Waitlist →
            </Link>
            <p className="text-center text-xs text-muted mt-4">Early access members get locked-in rates.</p>
          </div>
        </div>
      </FadeInView>
    </SectionWrapper>
  );
}
