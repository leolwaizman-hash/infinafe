import type { Metadata } from "next";
import { DM_Sans, Syne, Geist_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-sans", subsets: ["latin"], weight: ["400","500","600","700"] });
const syne = Syne({ variable: "--font-display", subsets: ["latin"], weight: ["700","800"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://infinafe.vercel.app"),
  title: { default: "Infina — AI Agent Security for Small Business", template: "%s | Infina" },
  description: "Infina protects your Zapier, Make, n8n, and Lindy AI agents from prompt injections, data leaks, and hijacks. Real-time threat detection. Plain English alerts. $49/month.",
  keywords: ["AI agent security", "prompt injection protection", "Zapier security", "Make automation security", "n8n security", "small business cybersecurity", "AI automation protection"],
  authors: [{ name: "Leo Waizman", url: "https://infinafe.vercel.app" }],
  openGraph: {
    type: "website", siteName: "Infina",
    url: "https://infinafe.vercel.app",
    title: "Infina — AI Agent Security for Small Business",
    description: "Protect your AI agents from prompt injections, data leaks, and hijacks. Built for Zapier, Make, n8n, and Lindy. $49/month.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Infina — AI Agent Security" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infina — AI Agent Security for Small Business",
    description: "Protect your AI agents from prompt injections, data leaks, and hijacks.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
