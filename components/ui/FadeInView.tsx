"use client";
import { motion } from "motion/react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export default function FadeInView({
  children, delay = 0, duration = 0.8,
  y = 32, scale = false, style, className,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y, scale: scale ? 0.95 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}
