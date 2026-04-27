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
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "52px 6vw",
      backgroundColor: "#000",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        display: "flex", flexWrap: "wrap",
        justifyContent: "space-between", alignItems: "center",
        gap: "24px",
      }}>
        <InfinaLogo />
        <nav style={{ display: "flex", gap: "32px" }}>
          {[
            { label: "Privacy", href: "#" },
            { label: "Contact", href: "mailto:hello@infina.ai" },
            { label: "Twitter / X", href: "https://twitter.com/infina" },
          ].map(link => (
            <Link key={link.label} href={link.href} style={{ fontSize: "14px", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>
              {link.label}
            </Link>
          ))}
        </nav>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.2)" }}>
          &copy; {new Date().getFullYear()} Infina. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
