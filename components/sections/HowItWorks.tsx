import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/ui/FadeInView";

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="border-t border-border">
      <div className="text-center mb-14">
        <FadeInView>
          <p className="text-xs font-semibold tracking-widest text-brand-green uppercase mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Security alerts that actually make sense.</h2>
          <p className="text-text-2 text-base max-w-xl mx-auto">No jargon. No overwhelming dashboards. Just clear answers.</p>
        </FadeInView>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <FadeInView delay={0}>
          <div className="rounded-2xl border border-brand-green/25 bg-brand-green/5 p-7 glow-green h-full">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-3 h-3 rounded-full bg-brand-green shadow-[0_0_10px_rgba(0,255,135,0.8)]" />
              <span className="text-xs font-semibold text-brand-green uppercase tracking-wider">All Clear</span>
            </div>
            <p className="text-text text-base font-medium mb-4">Everything looks good.</p>
            <p className="text-text-2 text-sm leading-relaxed">
              Today we checked <span className="text-text font-semibold">847 agent actions</span> and blocked <span className="text-brand-green font-semibold">3 suspicious ones</span> before they could do any damage.
            </p>
            <div className="mt-6 pt-5 border-t border-brand-green/15 flex items-center gap-6 text-xs text-text-2">
              <span><span className="text-brand-green font-semibold">847</span> checked</span>
              <span><span className="text-brand-green font-semibold">3</span> blocked</span>
              <span><span className="text-text font-semibold">0</span> incidents</span>
            </div>
          </div>
        </FadeInView>
        <FadeInView delay={0.15}>
          <div className="rounded-2xl border border-brand-red/25 bg-brand-red/5 p-7 glow-red h-full">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-3 h-3 rounded-full bg-brand-red shadow-[0_0_10px_rgba(255,59,59,0.8)] animate-pulse" />
              <span className="text-xs font-semibold text-brand-red uppercase tracking-wider">Threat Blocked</span>
            </div>
            <p className="text-text text-base font-medium mb-4">Someone tried to trick your email agent.</p>
            <p className="text-text-2 text-sm leading-relaxed">
              An incoming email contained hidden instructions trying to get your agent to forward customer data to an outside address. <span className="text-brand-green font-semibold">We blocked it.</span>
            </p>
            <div className="mt-5 p-3.5 rounded-lg bg-surface border border-border text-xs text-text-2 leading-relaxed">
              <span className="text-text font-semibold">What to do next:</span> The email has been flagged. Review your email agent&apos;s permissions and let us know if you recognise the sender.
            </div>
          </div>
        </FadeInView>
      </div>
      <FadeInView delay={0.2}>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-text-2">
          {["Real-time monitoring","Plain English alerts","One-click remediation","Weekly digest reports","No agents to install"].map(f => (
            <span key={f} className="flex items-center gap-2"><span className="text-brand-green">✓</span>{f}</span>
          ))}
        </div>
      </FadeInView>
    </SectionWrapper>
  );
}
