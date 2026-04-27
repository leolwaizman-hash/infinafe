"use client";
import { useEffect, useRef, useState, useCallback } from "react";

interface Props {
  text: string;
  onComplete?: () => void;
}

export default function HandwritingCanvas({ text, onComplete }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [penPos, setPenPos] = useState({ x: 0, y: 0 });
  const [showPen, setShowPen] = useState(false);
  const stopRef = useRef(false);

  const startAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = container.offsetWidth;
    const fontSize = Math.min(w * 0.115, 108);
    const h = fontSize * 1.8;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    const fontStr = `700 ${fontSize}px var(--font-caveat), 'Caveat', cursive`;
    ctx.font = fontStr;
    ctx.fillStyle = "#1D1D1F";
    ctx.textBaseline = "middle";

    const startX = 4;
    const startY = h / 2;
    let i = 0;
    const charDelay = 68;

    setShowPen(true);

    const step = () => {
      if (stopRef.current) return;
      if (i > text.length) {
        setShowPen(false);
        onComplete?.();
        return;
      }

      ctx.clearRect(0, 0, w, h);
      const drawn = text.substring(0, i);
      ctx.fillText(drawn, startX, startY);

      const metrics = ctx.measureText(drawn);
      setPenPos({ x: startX + metrics.width, y: startY });

      i++;
      setTimeout(step, charDelay);
    };

    document.fonts.ready.then(() => {
      ctx.font = fontStr;
      setTimeout(step, 700);
    });
  }, [text, onComplete]);

  useEffect(() => {
    stopRef.current = false;
    startAnimation();
    return () => { stopRef.current = true; };
  }, [startAnimation]);

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
      <canvas ref={canvasRef} style={{ display: "block", width: "100%" }} />
      {showPen && (
        <span
          className="pen-cursor"
          style={{ left: penPos.x, top: penPos.y }}
          aria-hidden
        >
          ✒️
        </span>
      )}
    </div>
  );
}
