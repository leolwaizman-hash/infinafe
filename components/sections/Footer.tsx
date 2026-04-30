import Link from "next/link";

const InfinaLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 130" fill="none" width="72" height="23" aria-label="Infina">
    {[
      [8,8,8,122],[24,8,24,122],
      [48,8,48,122],[48,8,84,122],[84,8,84,122],
      [108,8,108,122],[108,8,155,8],[108,65,150,65],
      [172,8,172,122],[188,8,188,122],
      [212,8,212,122],[212,8,248,122],[248,8,248,122],
      [272,122,304,8],[336,122,304,8],[281,78,327,78],
    ].map(([x1,y1,x2,y2],i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="rgba(255,255,255,0.5)" strokeWidth="3.5" strokeLinecap="square"/>
    ))}
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", backgroundColor: "#000" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 6vw 40px" }}>
        {/* Top row */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "40px", paddingBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div>
            <InfinaLogo />
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.28)", marginTop: "12px", lineHeight: 1.6, maxWidth: "240px" }}>
              Protecting AI workflows.<br />Built for businesses moving fast.
            </p>
          </div>
          <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>Product</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[["Features","#features"],["How it works","#how-it-works"],["Pricing","#pricing"],["FAQ","#faq"]].map(([l,h]) => (
                  <Link key={l} href={h} style={{ fontSize: "14px", color: "rgba(255,255,255,0.32)", textDecoration: "none" }}>{l}</Link>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>Company</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[["Contact","mailto:leo@infina.ai"],["Privacy","#"],["Twitter / X","https://twitter.com/infina"]].map(([l,h]) => (
                  <Link key={l} href={h} style={{ fontSize: "14px", color: "rgba(255,255,255,0.32)", textDecoration: "none" }}>{l}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Bottom row */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingTop: "28px" }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.18)" }}>
            &copy; {new Date().getFullYear()} Infina. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4ADE80" }} />
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
