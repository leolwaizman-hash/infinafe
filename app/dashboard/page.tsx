import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

function ThreatBadge({ level, isThreat }: { level: string | null; isThreat: boolean }) {
  if (!isThreat) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
        Safe
      </span>
    );
  }
  const colors: Record<string, string> = {
    low:      "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    medium:   "text-orange-400 bg-orange-400/10 border-orange-400/20",
    high:     "text-brand-red bg-brand-red/10 border-brand-red/20",
    critical: "text-red-300 bg-red-900/30 border-red-300/20",
  };
  const dots: Record<string, string> = {
    low: "bg-yellow-400", medium: "bg-orange-400", high: "bg-brand-red", critical: "bg-red-300",
  };
  const cls = colors[level ?? "high"];
  const dot = dots[level ?? "high"];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${cls}`}>
      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dot}`} />
      {level ?? "threat"} threat
    </span>
  );
}

export default async function Dashboard() {
  const supabase = await createClient();
  const { data: actions } = await supabase
    .from("agent_actions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);

  const total   = actions?.length ?? 0;
  const threats = actions?.filter((a) => a.is_threat).length ?? 0;
  const safe    = total - threats;

  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-brand-green flex items-center justify-center">
            <span className="text-bg font-bold text-sm">IF</span>
          </div>
          <span className="font-semibold text-lg">Infina</span>
          <span className="text-muted text-sm">/ Dashboard</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-brand-green">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          Live monitoring
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-surface border border-border rounded-xl p-5">
            <p className="text-muted text-xs mb-1">Total actions</p>
            <p className="text-3xl font-bold text-text">{total}</p>
          </div>
          <div className="bg-surface border border-brand-green/20 rounded-xl p-5">
            <p className="text-muted text-xs mb-1">Safe</p>
            <p className="text-3xl font-bold text-brand-green">{safe}</p>
          </div>
          <div className="bg-surface border border-brand-red/20 rounded-xl p-5">
            <p className="text-muted text-xs mb-1">Threats blocked</p>
            <p className="text-3xl font-bold text-brand-red">{threats}</p>
          </div>
        </div>

        {/* Actions table */}
        <div className="bg-surface border border-border rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-semibold text-sm">Agent Actions</h2>
            <span className="text-muted text-xs">Last 50 actions</span>
          </div>

          {!actions || actions.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <p className="text-text-2 text-sm mb-2">No actions yet</p>
              <p className="text-muted text-xs">
                Send a POST request to <code className="bg-border px-1.5 py-0.5 rounded">/api/analyze</code> to get started
              </p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {actions.map((action) => (
                <div key={action.id} className="px-6 py-4 flex items-start gap-4 hover:bg-surface-2 transition-colors">
                  <div className="mt-0.5 shrink-0">
                    <ThreatBadge level={action.threat_level} isThreat={action.is_threat} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="text-sm font-medium text-text">{action.action_type}</span>
                      <span className="text-xs text-muted">via {action.platform}</span>
                      {action.is_threat && (
                        <span className="text-xs font-bold text-brand-red bg-brand-red/10 border border-brand-red/20 px-2 py-0.5 rounded">
                          ✕ BLOCKED
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-text-2 leading-relaxed">{action.analysis}</p>
                  </div>
                  <div className="text-xs text-muted shrink-0">
                    {new Date(action.created_at).toLocaleTimeString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Webhook instructions */}
        <div className="mt-8 bg-surface border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm">Connect your agents</h3>
            <span className="text-xs bg-brand-green/10 text-brand-green border border-brand-green/20 px-2.5 py-1 rounded-full font-medium">Live endpoint</span>
          </div>
          <p className="text-text-2 text-xs mb-4">
            Send any agent action to your live endpoint below — Infina analyzes it with AI in under 50ms and blocks threats automatically:
          </p>
          <pre className="bg-bg border border-brand-green/20 rounded-lg p-4 text-xs text-brand-green overflow-x-auto">{`POST https://infinafe.vercel.app/api/analyze

{
  "platform": "zapier",
  "action_type": "send_email",
  "payload": {
    "to": "customer@example.com",
    "subject": "Your order is ready",
    "body": "..."
  }
}`}</pre>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: "Response time", value: "< 50ms" },
              { label: "AI model", value: "Claude 3.5" },
              { label: "Uptime", value: "99.9%" },
            ].map((s) => (
              <div key={s.label} className="bg-bg border border-border rounded-lg px-3 py-2 text-center">
                <p className="text-brand-green text-sm font-bold">{s.value}</p>
                <p className="text-muted text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mt-4 bg-surface border border-border rounded-xl p-6">
          <h3 className="font-semibold text-sm mb-4">How Infina detects threats</h3>
          <div className="space-y-3">
            {[
              { step: "1", title: "Action received", desc: "Your agent sends a JSON payload to the /api/analyze endpoint in real time." },
              { step: "2", title: "AI analysis", desc: "Claude 3.5 scans the payload for prompt injections, data exfiltration patterns, and hijack attempts." },
              { step: "3", title: "Decision in 50ms", desc: "If safe — it passes through. If malicious — it's blocked and you get an alert instantly." },
              { step: "4", title: "Logged here", desc: "Every action, blocked or safe, appears in this dashboard with a full plain-English explanation." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start">
                <span className="w-6 h-6 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{s.step}</span>
                <div>
                  <p className="text-sm font-medium text-text">{s.title}</p>
                  <p className="text-xs text-muted mt-0.5 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
