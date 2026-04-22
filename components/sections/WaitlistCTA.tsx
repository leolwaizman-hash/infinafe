"use client";
import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";
import { motion } from "motion/react";

const initial: WaitlistState = { status: "idle", message: "" };

export default function WaitlistCTA() {
  const [state, action, isPending] = useActionState(joinWaitlist, initial);
  return (
    <section id="waitlist" className="py-24 px-6 border-t border-border relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full opacity-10 blur-[100px] pointer-events-none" style={{ background: "#00FF87" }} />
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55 }}>
          <p className="text-xs font-semibold tracking-widest text-brand-green uppercase mb-4">Early Access</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Be first in line when we launch.</h2>
          <p className="text-text-2 mb-10 max-w-lg mx-auto">Join 100+ businesses already on the waitlist. We&apos;ll notify you the moment Infinafe is ready.</p>
          {state.status === "success" ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-4 py-8">
              <div className="w-16 h-16 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-2xl text-brand-green">✓</div>
              <p className="text-xl font-semibold">{state.message}</p>
              <p className="text-text-2 text-sm">We&apos;ll be in touch before launch.</p>
            </motion.div>
          ) : (
            <form action={action} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" name="email" placeholder="you@company.com" required
                className="flex-1 bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-muted outline-none focus:border-brand-green/50 focus:ring-1 focus:ring-brand-green/25 transition-all" />
              <button type="submit" disabled={isPending}
                className="bg-brand-green text-bg font-semibold text-sm px-6 py-3 rounded-lg hover:brightness-110 glow-green transition-all disabled:opacity-50 cursor-pointer shrink-0">
                {isPending ? "Joining..." : "Join Waitlist"}
              </button>
            </form>
          )}
          {state.status === "error" && <p role="alert" className="mt-3 text-sm text-brand-red">{state.message}</p>}
          {state.status !== "success" && <p className="mt-5 text-xs text-muted">No spam, ever. Unsubscribe any time.</p>}
        </motion.div>
      </div>
    </section>
  );
}
