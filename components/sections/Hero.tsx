"use client";
import { motion } from "motion/react";
import AnimatedGridBg from "@/components/ui/AnimatedGridBg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      <AnimatedGridBg />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-[120px] pointer-events-none" style={{ background: "#00FF87" }} />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-brand-green/20 bg-brand-green/5 rounded-full px-4 py-1.5 text-xs font-medium text-brand-green mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
          Now accepting early access applications
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          Your AI agents are <span className="text-brand-red">vulnerable.</span><br />
          We keep them safe — <span className="text-brand-green text-glow-green">in plain English.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-text-2 max-w-2xl mx-auto mb-10 leading-relaxed">
          Infinafe protects the AI agents running your business from prompt injections, data leaks, and hijacks. Built for small businesses, not Fortune 500 security teams.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#waitlist" className="bg-brand-green text-bg font-bold text-base px-8 py-3.5 rounded-lg hover:brightness-110 glow-green transition-all duration-200">
            Join the Waitlist
          </Link>
          <Link href="#how-it-works" className="border border-border-2 text-text-2 hover:border-brand-green/50 hover:text-text text-base px-8 py-3.5 rounded-lg transition-all duration-200">
            See how it works ↓
          </Link>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-xs text-muted">
          No credit card. No enterprise contracts. Just security that makes sense.
        </motion.p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
    </section>
  );
}
