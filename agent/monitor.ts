/**
 * Infina — Personal Monitoring Agent
 * Uses Claude to check all systems and report status
 * Run: npx tsx agent/monitor.ts
 */

import Anthropic from "@anthropic-ai/sdk";
import * as https from "https";
import * as http from "http";
import * as fs from "fs";
import * as path from "path";

// Load .env.local automatically
function loadEnv() {
  const envPath = path.join(process.cwd(), ".env.local");
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf8").split("\n");
  for (const line of lines) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const val = match[2].trim().replace(/^["']|["']$/g, "");
      if (!process.env[key]) process.env[key] = val;
    }
  }
}
loadEnv();

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://infina.vercel.app";

// ── Tool definitions ─────────────────────────────────────────────────────────

const tools: Anthropic.Tool[] = [
  {
    name: "check_url",
    description:
      "Sends an HTTP GET request to a URL and returns the status code, response time, and whether the response was successful.",
    input_schema: {
      type: "object" as const,
      properties: {
        url: { type: "string", description: "The full URL to check" },
        label: { type: "string", description: "A human-readable label for this check" },
      },
      required: ["url", "label"],
    },
  },
  {
    name: "check_api_endpoint",
    description:
      "Sends a POST request to an API endpoint with a JSON body and returns the status code and response.",
    input_schema: {
      type: "object" as const,
      properties: {
        url: { type: "string", description: "The full URL of the API endpoint" },
        body: { type: "object", description: "The JSON body to send" },
        label: { type: "string", description: "A human-readable label for this check" },
      },
      required: ["url", "body", "label"],
    },
  },
  {
    name: "report_status",
    description:
      "Outputs the final status report after all checks are complete. Call this last.",
    input_schema: {
      type: "object" as const,
      properties: {
        overall: {
          type: "string",
          enum: ["healthy", "degraded", "down"],
          description: "Overall system status",
        },
        summary: {
          type: "string",
          description: "A one-line summary of the system status",
        },
        checks: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              status: { type: "string", enum: ["ok", "warning", "error"] },
              detail: { type: "string" },
              latency_ms: { type: "number" },
            },
            required: ["name", "status", "detail"],
          },
        },
        recommendations: {
          type: "array",
          items: { type: "string" },
          description: "Action items if any issues were found",
        },
      },
      required: ["overall", "summary", "checks"],
    },
  },
];

// ── Tool implementations ──────────────────────────────────────────────────────

function fetchUrl(url: string): Promise<{ status: number; ok: boolean; latency_ms: number; body: string }> {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const lib = url.startsWith("https") ? https : http;
    const req = lib.get(url, { timeout: 8000 }, (res) => {
      let body = "";
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => {
        resolve({
          status: res.statusCode ?? 0,
          ok: (res.statusCode ?? 0) < 400,
          latency_ms: Date.now() - start,
          body: body.slice(0, 200),
        });
      });
    });
    req.on("error", reject);
    req.on("timeout", () => reject(new Error("Timeout")));
  });
}

function postUrl(url: string, body: object): Promise<{ status: number; ok: boolean; latency_ms: number; body: string }> {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const data = JSON.stringify(body);
    const urlObj = new URL(url);
    const lib = url.startsWith("https") ? https : http;
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (url.startsWith("https") ? 443 : 80),
      path: urlObj.pathname,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(data),
      },
      timeout: 8000,
    };
    const req = lib.request(options, (res) => {
      let resBody = "";
      res.on("data", (chunk) => (resBody += chunk));
      res.on("end", () => {
        resolve({
          status: res.statusCode ?? 0,
          ok: (res.statusCode ?? 0) < 400,
          latency_ms: Date.now() - start,
          body: resBody.slice(0, 300),
        });
      });
    });
    req.on("error", reject);
    req.on("timeout", () => reject(new Error("Timeout")));
    req.write(data);
    req.end();
  });
}

async function executeTool(
  name: string,
  input: Record<string, unknown>,
): Promise<string> {
  switch (name) {
    case "check_url": {
      const { url, label } = input as { url: string; label: string };
      try {
        const result = await fetchUrl(url);
        return JSON.stringify({
          label,
          url,
          status_code: result.status,
          ok: result.ok,
          latency_ms: result.latency_ms,
          body_preview: result.body.slice(0, 100),
        });
      } catch (err) {
        return JSON.stringify({ label, url, ok: false, error: String(err) });
      }
    }
    case "check_api_endpoint": {
      const { url, body, label } = input as { url: string; body: object; label: string };
      try {
        const result = await postUrl(url, body);
        return JSON.stringify({
          label,
          url,
          status_code: result.status,
          ok: result.ok,
          latency_ms: result.latency_ms,
          response_preview: result.body,
        });
      } catch (err) {
        return JSON.stringify({ label, url, ok: false, error: String(err) });
      }
    }
    case "report_status": {
      // Handled outside the loop — just return a confirmation
      return JSON.stringify({ received: true });
    }
    default:
      return JSON.stringify({ error: `Unknown tool: ${name}` });
  }
}

// ── Colors for terminal output ────────────────────────────────────────────────

const C = {
  green: (s: string) => `\x1b[32m${s}\x1b[0m`,
  red: (s: string) => `\x1b[31m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
  bold: (s: string) => `\x1b[1m${s}\x1b[0m`,
  dim: (s: string) => `\x1b[2m${s}\x1b[0m`,
  cyan: (s: string) => `\x1b[36m${s}\x1b[0m`,
};

// ── Main agent loop ───────────────────────────────────────────────────────────

async function runMonitor() {
  console.log("\n" + C.bold("  Infina System Monitor"));
  console.log(C.dim("  " + new Date().toLocaleString("en-US", { timeZone: "Asia/Jerusalem" })));
  console.log(C.dim("  Checking " + BASE_URL));
  console.log();

  const systemPrompt = `You are the monitoring agent for Infina, an AI security SaaS.
Your job is to check all systems and report their status.
Be concise and accurate. Check the following in order:
1. The main website (homepage loads correctly)
2. The /api/analyze endpoint (the core threat detection API)
3. The /success page (payment flow)
4. The /dashboard page
After all checks, call report_status with a complete summary.
Use the check_url and check_api_endpoint tools to perform checks.
For the /api/analyze endpoint, POST to it with: { "action": "send_email", "to": "test@test.com", "api_key": "test" }`;

  const messages: Anthropic.MessageParam[] = [
    {
      role: "user",
      content: `Run a complete health check on the Infina system at ${BASE_URL}. Check all critical endpoints and report the status.`,
    },
  ];

  let finalReport: Record<string, unknown> | null = null;

  // Agentic loop
  while (true) {
    const response = await client.messages.create({
      model: "claude-opus-4-7",
      max_tokens: 4096,
      thinking: { type: "adaptive" },
      system: systemPrompt,
      tools,
      messages,
    });

    if (response.stop_reason === "end_turn") break;

    const toolUseBlocks = response.content.filter(
      (b): b is Anthropic.ToolUseBlock => b.type === "tool_use",
    );

    if (toolUseBlocks.length === 0) break;

    messages.push({ role: "assistant", content: response.content });

    const toolResults: Anthropic.ToolResultBlockParam[] = [];

    for (const tool of toolUseBlocks) {
      // Capture the report before executing
      if (tool.name === "report_status") {
        finalReport = tool.input as Record<string, unknown>;
      }

      process.stdout.write(C.dim(`  Running check: ${(tool.input as { label?: string }).label ?? tool.name}... `));
      const result = await executeTool(tool.name, tool.input as Record<string, unknown>);
      console.log(C.dim("done"));

      toolResults.push({
        type: "tool_result",
        tool_use_id: tool.id,
        content: result,
      });
    }

    messages.push({ role: "user", content: toolResults });

    if (finalReport) break;
  }

  // ── Print report ────────────────────────────────────────────────────────────

  if (!finalReport) {
    console.log(C.red("  No report generated."));
    return;
  }

  const overall = finalReport.overall as string;
  const summary = finalReport.summary as string;
  const checks = (finalReport.checks as Array<{
    name: string;
    status: string;
    detail: string;
    latency_ms?: number;
  }>) ?? [];
  const recommendations = (finalReport.recommendations as string[]) ?? [];

  const statusColor =
    overall === "healthy" ? C.green
    : overall === "degraded" ? C.yellow
    : C.red;

  const statusIcon =
    overall === "healthy" ? "●"
    : overall === "degraded" ? "◐"
    : "○";

  console.log("  " + "─".repeat(50));
  console.log("  " + statusColor(C.bold(`${statusIcon}  ${overall.toUpperCase()}`)));
  console.log("  " + summary);
  console.log();

  for (const check of checks) {
    const icon = check.status === "ok" ? C.green("✓") : check.status === "warning" ? C.yellow("⚠") : C.red("✗");
    const latency = check.latency_ms ? C.dim(` (${check.latency_ms}ms)`) : "";
    console.log(`  ${icon}  ${C.bold(check.name)}${latency}`);
    console.log(`     ${C.dim(check.detail)}`);
  }

  if (recommendations.length > 0) {
    console.log();
    console.log("  " + C.yellow(C.bold("Recommendations:")));
    for (const rec of recommendations) {
      console.log(`  ${C.yellow("→")}  ${rec}`);
    }
  }

  console.log("  " + "─".repeat(50));
  console.log();
}

runMonitor().catch((err) => {
  console.error(C.red("  Monitor failed: " + String(err)));
  process.exit(1);
});
