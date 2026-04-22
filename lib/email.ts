import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendThreatAlert({
  platform,
  actionType,
  analysis,
  threatLevel,
  actionId,
}: {
  platform: string;
  actionType: string;
  analysis: string;
  threatLevel: string;
  actionId: string;
}) {
  const levelColor = {
    low:      "#F59E0B",
    medium:   "#F97316",
    high:     "#EF4444",
    critical: "#DC2626",
  }[threatLevel] ?? "#EF4444";

  const levelEmoji = {
    low:      "⚠️",
    medium:   "🚨",
    high:     "🔴",
    critical: "💀",
  }[threatLevel] ?? "🚨";

  await resend.emails.send({
    from:    "Infinafe Alerts <alerts@infinafe.com>",
    to:      process.env.ALERT_EMAIL!,
    subject: `${levelEmoji} Threat detected in your ${platform} agent`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #F5F5F5; padding: 32px; border-radius: 12px;">
        <div style="margin-bottom: 24px;">
          <span style="background: ${levelColor}22; color: ${levelColor}; border: 1px solid ${levelColor}44; padding: 4px 12px; border-radius: 100px; font-size: 12px; font-weight: 600; text-transform: uppercase;">
            ${levelEmoji} ${threatLevel} threat
          </span>
        </div>

        <h1 style="font-size: 22px; font-weight: 700; margin: 0 0 8px;">
          Suspicious activity blocked
        </h1>
        <p style="color: #A1A1AA; margin: 0 0 24px; font-size: 14px;">
          Platform: <strong style="color: #F5F5F5;">${platform}</strong> &nbsp;·&nbsp;
          Action: <strong style="color: #F5F5F5;">${actionType}</strong>
        </p>

        <div style="background: #111111; border: 1px solid #1F1F1F; border-left: 3px solid ${levelColor}; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
          <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #F5F5F5;">
            ${analysis}
          </p>
        </div>

        <p style="color: #6B7280; font-size: 12px; margin: 0;">
          Action ID: ${actionId} &nbsp;·&nbsp;
          Infinafe is watching your agents 24/7.
        </p>
      </div>
    `,
  });
}
