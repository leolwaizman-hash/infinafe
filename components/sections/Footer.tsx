import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid #F0F0F0",
      padding: "48px 6vw",
      backgroundColor: "#FFFFFF",
    }}>
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "24px",
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 130" fill="none" width="80" height="24" aria-label="Infina">
          <line x1="8"  y1="8"  x2="8"  y2="122" stroke="#1D1D1F" strokeWidth="3.5" strokeLinecap="square"/>
          <line x1="24" y1="8"  x2="24" y2="122" stroke="#1D1D1F" strokeWidth="3.5" strokeLinecap="square"/>
          <line x1="48" y1="8"  x2="48"  y2="122" stroke="#1D1D1F" strokeWidth="3.5" strokeLinecap="square"/>
          <line x1="48" y1="8"  x2="84"  y2="122" stroke="#1D1D1F" strokeWidth="3.5" strokeLinecap="square"/>
          <line x1="84" y1="8"  x2="84"  y2="122" stroke="#1D1D1F" strokeWidth="3.5" strokeLinecap="square"/>
          <line x1="108" y1="8"   x2="108" y2="122" stroke="#1D1D1F" strokeWidth="3.5" strokeLinecap="square"/>
          <line x1="108" y1="8"   x2="155" y2="8"   stroke="#1D1D1F" strokeWidth="3.5" strokeLinecap="square"/>
          <line x1="108" y1="65"  x2="150" y2="65"  stroke="#1D1D1F" strokeWidth="3.5" strokeLinecap="square"/>
          <line x1="172" y1="8"  x2="172" y2="122" stroke="#1D1D1F" strokeWidth="3.5" strokeLinecap="square"/>
          <line x1="188" y1="8"  x2="188" y2="122" stroke="#1D1D1F" strokeWidth="3.5" strokeLinecap="square"/>
          <line x1="212" y1="8"  x2="212" y2="122" stroke="#1D1D1F" strokeWidth="3.5" strokeLinecap="square"/>
          <line x1="212" y1="8"  x2="248" y2="122" stroke="#1D1D1F" strokeWidth="3.5" strokeLinecap="square"/>
          <line x1="248" y1="8"  x2="248" y2="122" stroke="#1D1D1F" strokeWidth="3.5" strokeLinecap="square"/>
          <line x1="272" y1="122" x2="304" y2="8"   stroke="#1D1D1F" strokeWidth="3.5" strokeLinecap="square"/>
          <line x1="336" y1="122" x2="304" y2="8"   stroke="#1D1D1F" strokeWidth="3.5" strokeLinecap="square"/>
          <line x1="281" y1="78"  x2="327" y2="78"  stroke="#1D1D1F" strokeWidth="3.5" strokeLinecap="square"/>
        </svg>
        <nav style={{ display: "flex", gap: "32px" }}>
          {[
            { label: "Privacy", href: "#" },
            { label: "Contact", href: "mailto:hello@infina.ai" },
            { label: "Twitter / X", href: "https://twitter.com/infina" },
          ].map(link => (
            <Link key={link.label} href={link.href} style={{ fontSize: "14px", color: "#86868B", textDecoration: "none" }}>
              {link.label}
            </Link>
          ))}
        </nav>
        <p style={{ fontSize: "13px", color: "#86868B" }}>
          &copy; {new Date().getFullYear()} Infina. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
