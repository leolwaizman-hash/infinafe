import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export const dynamic = "force-dynamic";

const InfinaLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 130" fill="none" width="60" height="20" aria-label="Infina">
    {([
      [8,8,8,122],[24,8,24,122],
      [48,8,48,122],[48,8,84,122],[84,8,84,122],
      [108,8,108,122],[108,8,155,8],[108,65,150,65],
      [172,8,172,122],[188,8,188,122],
      [212,8,212,122],[212,8,248,122],[248,8,248,122],
      [272,122,304,8],[336,122,304,8],[281,78,327,78],
    ] as number[][]).map(([x1,y1,x2,y2],i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="rgba(255,255,255,0.75)" strokeWidth="3.5" strokeLinecap="square"/>
    ))}
  </svg>
);

function ThreatBadge({ level, isThreat }: { level: string | null; isThreat: boolean }) {
  if (!isThreat) {
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: 700, padding: "3px 9px", borderRadius: "100px", background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.18)", color: "#4ADE80" }}>
        <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4ADE80" }} />
        Safe
      </span>
    );
  }
  const map: Record<string, { bg: string; border: string; color: string }> = {
    low:      { bg: "rgba(251,191,36,0.08)",  border: "rgba(251,191,36,0.2)",  color: "#FBBF24" },
    medium:   { bg: "rgba(251,146,60,0.08)",  border: "rgba(251,146,60,0.2)",  color: "#FB923C" },
    high:     { bg: "rgba(251,113,133,0.08)", border: "rgba(251,113,133,0.2)", color: "#FB7185" },
    critical: { bg: "rgba(239,68,68,0.1)",    border: "rgba(239,68,68,0.25)",  color: "#F87171" },
  };
  const s = map[level ?? "high"];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: 700, padding: "3px 9px", borderRadius: "100px", background: s.bg, border: `1px solid ${s.border}`, color: s.color }}>
      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: s.color, animation: "pulse 2s infinite" }} />
      {level ?? "high"} threat
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
    <div style={{ minHeight: "100vh", backgroundColor: "#09090B", color: "#F8FAFC", fontFamily: "var(--font-sans)" }}>

      {/* Header */}
      <header style={{ height: "62px", padding: "0 6vw", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.07)", position: "sticky", top: 0, background: "rgba(9,9,11,0.9)", backdropFilter: "blur(20px)", zIndex: 50 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <InfinaLogo />
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", fontWeight: 400 }}>/ Dashboard</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#4ADE80", background: "rgba(74,222,128,0.07)", border: "1px solid rgba(74,222,128,0.14)", borderRadius: "100px", padding: "5px 12px" }}>
          <span className="pulse-dot" style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4ADE80" }} />
          Live monitoring
        </div>
      </header>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 6vw 80px" }}>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px", marginBottom: "32px" }}>
          {[
            { label: "Total actions", value: total, color: "#F8FAFC", border: "rgba(255,255,255,0.07)" },
            { label: "Safe", value: safe, color: "#4ADE80", border: "rgba(74,222,128,0.15)" },
            { label: "Threats blocked", value: threats, color: "#FB7185", border: "rgba(251,113,133,0.15)" },
          ].map((s) => (
            <div key={s.label} style={{ background: "linear-gradient(160deg, #1A1A24 0%, #111118 100%)", border: `1px solid ${s.border}`, borderRadius: "14px", padding: "24px 28px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${s.color}40, transparent)` }} />
              <p style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "10px" }}>{s.label}</p>
              <p style={{ fontSize: "40px", fontWeight: 800, color: s.color, letterSpacing: "-0.04em", lineHeight: 1, fontFamily: "var(--font-display)" }}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Actions feed */}
        <div style={{ background: "linear-gradient(160deg, #1A1A24 0%, #111118 100%)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
          <div style={{ padding: "18px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h2 style={{ fontSize: "14px", fontWeight: 700, color: "#F8FAFC", letterSpacing: "-0.01em" }}>Agent Actions</h2>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.04em" }}>Last 50 actions</span>
          </div>

          {!actions || actions.length === 0 ? (
            <div style={{ padding: "80px 24px", textAlign: "center" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#4ADE80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#F8FAFC", marginBottom: "8px" }}>Waiting for your first action</p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", lineHeight: 1.6 }}>
                Connect your automation platform below and send a request to <code style={{ color: "#4ADE80", fontFamily: "var(--font-geist-mono)", fontSize: "12px" }}>/api/analyze</code>
              </p>
            </div>
          ) : (
            <div>
              {actions.map((action, i) => (
                <div key={action.id} style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "18px 24px", borderBottom: i < actions.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", background: action.is_threat ? "rgba(251,113,133,0.02)" : "transparent" }}>
                  <div style={{ flexShrink: 0, marginTop: "2px" }}>
                    <ThreatBadge level={action.threat_level} isThreat={action.is_threat} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: "#F8FAFC" }}>{action.action_type}</span>
                      <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.28)" }}>via {action.platform}</span>
                      {action.is_threat && (
                        <span style={{ fontSize: "10px", fontWeight: 700, color: "#FB7185", background: "rgba(251,113,133,0.08)", border: "1px solid rgba(251,113,133,0.18)", borderRadius: "4px", padding: "2px 7px", letterSpacing: "0.04em" }}>✕ BLOCKED</span>
                      )}
                    </div>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: 1.65, margin: 0 }}>{action.analysis}</p>
                  </div>
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", flexShrink: 0, fontFamily: "var(--font-geist-mono)" }}>
                    {new Date(action.created_at).toLocaleTimeString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Connect */}
        <div style={{ background: "linear-gradient(160deg, #1A1A24 0%, #111118 100%)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "28px", marginBottom: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#F8FAFC", letterSpacing: "-0.01em" }}>Connect your agents</h3>
            <span style={{ fontSize: "11px", color: "#4ADE80", background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.15)", borderRadius: "100px", padding: "3px 10px", fontWeight: 600 }}>Live endpoint</span>
          </div>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginBottom: "16px", lineHeight: 1.6 }}>
            POST any agent action here — analyzed by AI in under 50ms, threats blocked automatically:
          </p>
          <pre style={{ background: "#09090B", border: "1px solid rgba(74,222,128,0.12)", borderRadius: "10px", padding: "18px 20px", fontSize: "12px", color: "#4ADE80", overflowX: "auto", fontFamily: "var(--font-geist-mono)", lineHeight: 1.7, margin: "0 0 16px" }}>{`POST https://infinafe.vercel.app/api/analyze

{
  "platform": "zapier",
  "action_type": "send_email",
  "payload": { "to": "customer@example.com", "body": "..." }
}`}</pre>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px" }}>
            {[
              { label: "Response time", value: "< 50ms" },
              { label: "AI model", value: "Claude 3.5" },
              { label: "Uptime", value: "99.9%" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#09090B", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", padding: "12px", textAlign: "center" }}>
                <p style={{ fontSize: "15px", fontWeight: 800, color: "#4ADE80", letterSpacing: "-0.03em", fontFamily: "var(--font-display)" }}>{s.value}</p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.28)", marginTop: "3px" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back to site */}
        <div style={{ textAlign: "center", paddingTop: "8px" }}>
          <Link href="/" style={{ fontSize: "13px", color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>← Back to infinafe.vercel.app</Link>
        </div>
      </main>
    </div>
  );
}
