import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/ui/FadeInView";

const audiences = [
  { icon: "🏢", title: "Small agencies running automations for clients", description: "You've built Zapier or Make workflows for dozens of clients. One compromised agent could expose all of them." },
  { icon: "🛍️", title: "E-commerce brands using AI for customer service", description: "Your AI handles refunds, complaints, and order lookups. It knows your pricing, your policies, and your customers." },
  { icon: "🚀", title: "SaaS startups with AI-powered workflows", description: "Your product runs on automation. The AI that's powering your growth is also your biggest unguarded surface." },
  { icon: "⚡", title: "Any small business using Zapier, Make, Lindy, or n8n", description: "If your business runs on AI agents — even simple ones — you need to know when something is trying to abuse them." },
];

export default function WhoItsFor() {
  return (
    <SectionWrapper id="who" className="border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-24">
          <FadeInView>
            <p className="text-xs font-semibold tracking-widest text-brand-green uppercase mb-4">Who It&apos;s For</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Built for real businesses.</h2>
            <p className="text-text-2 leading-relaxed mb-8">You don&apos;t need a dedicated security team or a PhD in cybersecurity. You just need to know your AI agents are safe.</p>
            <div className="flex flex-wrap gap-2">
              {["Zapier","Make","n8n","Lindy"].map(t => (
                <span key={t} className="border border-border-2 text-text-2 text-xs px-3 py-1.5 rounded-full">{t}</span>
              ))}
            </div>
          </FadeInView>
        </div>
        <div className="flex flex-col gap-4">
          {audiences.map((item, i) => (
            <FadeInView key={item.title} delay={i * 0.1} direction="left">
              <div className="flex gap-4 p-5 rounded-xl border border-border bg-surface hover:border-brand-green/30 hover:bg-surface-2 transition-all duration-200 group">
                <div className="text-2xl mt-0.5 shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-sm font-semibold text-text mb-1 group-hover:text-brand-green transition-colors">{item.title}</h3>
                  <p className="text-xs text-text-2 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
