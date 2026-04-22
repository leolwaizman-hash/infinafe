import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeInView from "@/components/ui/FadeInView";

const cards = [
  { icon: "✉️", title: "Processing customer emails", description: "Your email agent reads, classifies, and responds to customer messages — including ones that contain sensitive account details." },
  { icon: "🗃️", title: "Managing client data", description: "Agents query your CRM, pull invoices, and update records. One bad instruction and the wrong data goes to the wrong place." },
  { icon: "⚙️", title: "Running automated workflows", description: "Zapier, Make, n8n, and Lindy pipelines run dozens of tasks a day. Each step is an opportunity for something to go wrong." },
  { icon: "👁️", title: "Making decisions without you watching", description: "Most of this happens in the background. You only find out there was a problem after the damage is done." },
];

export default function Problem() {
  return (
    <SectionWrapper id="problem" className="border-t border-border">
      <div className="text-center mb-14">
        <FadeInView>
          <p className="text-xs font-semibold tracking-widest text-brand-green uppercase mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Your AI agents handle sensitive work every day.</h2>
        </FadeInView>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {cards.map((card, i) => (
          <FadeInView key={card.title} delay={i * 0.1}>
            <div className="h-full rounded-xl border border-border bg-surface p-6 hover:border-border-2 transition-colors">
              <div className="text-2xl mb-4">{card.icon}</div>
              <h3 className="text-sm font-semibold text-text mb-2">{card.title}</h3>
              <p className="text-xs text-text-2 leading-relaxed">{card.description}</p>
            </div>
          </FadeInView>
        ))}
      </div>
      <FadeInView>
        <div className="text-center border border-brand-red/20 bg-brand-red/5 rounded-2xl px-8 py-10 max-w-3xl mx-auto">
          <p className="text-2xl sm:text-3xl font-bold mb-4">But nobody&apos;s guarding them.</p>
          <p className="text-text-2 text-sm leading-relaxed max-w-xl mx-auto">
            Prompt injection attacks rose <span className="text-brand-red font-semibold">340% in 2024</span>. Small businesses are the easiest targets — because their AI agents run without any monitoring at all.
          </p>
        </div>
      </FadeInView>
    </SectionWrapper>
  );
}
