"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [apiKey] = useState(() => {
    // Generate a stable API key from the session ID
    return "inf_" + (sessionId?.slice(-24) || Math.random().toString(36).slice(2, 26));
  });

  useEffect(() => {
    // Save the API key to Supabase
    if (sessionId) {
      fetch("/api/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, api_key: apiKey }),
      });
    }
  }, [sessionId, apiKey]);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] flex flex-col items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        {/* Success icon */}
        <div className="w-20 h-20 rounded-full bg-[#00FF87]/10 border border-[#00FF87]/30 flex items-center justify-center mx-auto mb-8">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#00FF87" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 className="text-4xl font-bold mb-4">
          You&apos;re protected. 🛡️
        </h1>
        <p className="text-[#6B7280] text-lg mb-10">
          Welcome to Infina. Your AI agents are now monitored 24/7.
        </p>

        {/* API Key box */}
        <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6 text-left mb-6">
          <p className="text-sm text-[#6B7280] mb-2">Your API Key</p>
          <div className="flex items-center gap-3">
            <code className="text-[#00FF87] font-mono text-sm flex-1 break-all">{apiKey}</code>
            <button
              onClick={() => navigator.clipboard.writeText(apiKey)}
              className="shrink-0 text-xs border border-[#1F1F1F] rounded-lg px-3 py-2 hover:border-[#00FF87]/50 transition-colors"
            >
              Copy
            </button>
          </div>
          <p className="text-xs text-[#6B7280] mt-3">
            ⚠️ Save this key — you&apos;ll need it to connect your automations.
          </p>
        </div>

        {/* How to connect */}
        <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6 text-left mb-8">
          <p className="text-sm font-semibold mb-4">How to connect Zapier / Make / n8n:</p>
          <ol className="space-y-3 text-sm text-[#6B7280]">
            <li className="flex gap-3">
              <span className="text-[#00FF87] font-bold">1.</span>
              In your automation, add an HTTP request step
            </li>
            <li className="flex gap-3">
              <span className="text-[#00FF87] font-bold">2.</span>
              POST to: <code className="text-[#F5F5F5] bg-[#0A0A0A] px-2 py-0.5 rounded">https://infina.vercel.app/api/analyze</code>
            </li>
            <li className="flex gap-3">
              <span className="text-[#00FF87] font-bold">3.</span>
              Add header: <code className="text-[#F5F5F5] bg-[#0A0A0A] px-2 py-0.5 rounded">x-api-key: {apiKey}</code>
            </li>
            <li className="flex gap-3">
              <span className="text-[#00FF87] font-bold">4.</span>
              Send your action data as JSON body
            </li>
          </ol>
        </div>

        <a
          href="/dashboard"
          className="inline-block bg-[#00FF87] text-black font-bold px-8 py-4 rounded-xl hover:bg-[#00FF87]/90 transition-colors"
        >
          View My Dashboard →
        </a>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-[#F5F5F5]">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
