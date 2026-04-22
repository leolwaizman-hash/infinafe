export default function AnimatedGridBg() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="animated-grid absolute inset-0" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 30%, #0A0A0A 100%)" }} />
    </div>
  );
}
