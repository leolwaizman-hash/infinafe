"use client";
import { motion } from "motion/react";

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

export default function FadeInView({ children, delay = 0, className, direction = "up" }: FadeInViewProps) {
  const d = { up: { y: 24, x: 0 }, left: { y: 0, x: -24 }, right: { y: 0, x: 24 }, none: { y: 0, x: 0 } };
  const { x, y } = d[direction];
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
