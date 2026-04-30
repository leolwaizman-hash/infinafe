"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

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

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState(() =>
    "inf_" + (sessionId?.slice(-24) || Math.random().toString(36).slice(2, 26))
  );

  useEffect(() => {
    if (sessionId) {
      fetch("/api/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, api_key: apiKey }),
      });
    }
  }, [sessionId, apiKey]);

  function copyKey() {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#09090B", color: "#F8FAFC", fontFamily: "var(--font-sans)" }}>

      {/* Nav */}
      <nav style={{ height: "62px", padding: "0 6vw", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <InfinaLogo />
        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#4ADE80" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ADE80", display: "inline-block" }} />
          Protected
        </div>
      </nav>

      {/* Ambient glow */}
      <div style={{ position: "fixed", top: "30%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "500px", background: "radial-gradient(ellipse at center, rgba(74,222,128,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <main style={{ maxWidth: "560px", margin: "0 auto", padding: "72px 6vw 80px", position: "relative", zIndex: 1 }}>

        {/* Success badge */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
          <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Headline */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <h1 style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#F8FAFC", marginBottom: "16px", fontFamily: "var(--font-display)" }}>
            You&apos;re protected.
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>
            Welcome to Infina. Your AI agents are now monitored 24/7. Save your API key below to connect your automations.
          </p>
        </div>

        {/* API Key */}
        <div style={{ background: "linear-gradient(160deg, #1A1A24 0%, #111118 100%)", border: "1px solid rgba(74,222,128,0.15)", borderRadius: "14px", padding: "28px", marginBottom: "16px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(74,222,128,0.3), transparent)" }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Your API Key</p>
            <span style={{ fontSize: "11px", color: "#4ADE80", background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.15)", borderRadius: "4px", padding: "2px 8px", fontWeight: 600 }}>Keep this safe</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <code style={{ flex: 1, fontSize: "14px", color: "#4ADE80", fontFamily: "var(--font-geist-mono)", wordBreak: "break-all", lineHeight: 1.5 }}>{apiKey}</code>
            <button
              onClick={copyKey}
              style={{ flexShrink: 0, background: copied ? "rgba(74,222,128,0.1)" : "rgba(255,255,255,0.05)", border: `1px solid ${copied ? "rgba(74,222,128,0.3)" : "rgba(255,255,255,0.1)"}`, borderRadius: "7px", padding: "8px 14px", fontSize: "12px", fontWeight: 600, color: copied ? "#4ADE80" : "rgba(255,255,255,0.6)", cursor: "pointer", transition: "all 0.15s", whiteSpace: "nowrap" }}
            >
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
        </div>

        {/* Connect instructions */}
        <div style={{ background: "#111118", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "28px", marginBottom: "28px" }}>
          <p style={{ fontSize: "13px", fontWeight: 700, color: "#F8FAFC", marginBottom: "20px", letterSpacing: "-0.01em" }}>Connect Zapier / Make / n8n in 2 minutes</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { n: "1", text: "In your automation, add an HTTP Request step" },
              { n: "2", text: <>POST to: <code style={{ color: "#4ADE80", fontFamily: "var(--font-geist-mono)", fontSize: "12px", background: "rgba(74,222,128,0.06)", padding: "1px 6px", borderRadius: "4px" }}>https://infinafe.vercel.app/api/analyze</code></> },
              { n: "3", text: <>Add header: <code style={{ color: "#4ADE80", fontFamily: "var(--font-geist-mono)", fontSize: "12px", background: "rgba(74,222,128,0.06)", padding: "1px 6px", borderRadius: "4px" }}>x-api-key: your-key</code></> },
              { n: "4", text: "Send your action data as JSON — Infina handles the rest" },
            ].map((s) => (
              <div key={s.n} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.15)", color: "#4ADE80", fontSize: "11px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>{s.n}</span>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/dashboard"
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "100%", background: "#F8FAFC", color: "#09090B", borderRadius: "10px", padding: "15px", fontSize: "15px", fontWeight: 700, textDecoration: "none", letterSpacing: "-0.02em", boxSizing: "border-box" }}
        >
          View my dashboard →
        </Link>

        <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,0.2)", marginTop: "16px" }}>
          Questions? Email <a href="mailto:leo@infina.ai" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>leo@infina.ai</a>
        </p>
      </main>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: "100vh", background: "#09090B", display: "flex", alignItems: "center", justifyContent: "center", color: "#F8FAFC" }}>
        Loading...
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
