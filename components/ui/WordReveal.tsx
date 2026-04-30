"use client";
import { motion } from "motion/react";

interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
  dim?: boolean; // last word dimmed (Apple style)
}

export default function WordReveal({ text, style, delay = 0, stagger = 0.07, dim = false }: Props) {
  const words = text.split(" ");
  return (
    <span style={{ display: "inline" }}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.65,
              delay: delay + i * stagger,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              display: "inline-block",
              marginRight: "0.28em",
              color: dim && isLast ? "rgba(255,255,255,0.22)" : undefined,
              ...style,
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
}
