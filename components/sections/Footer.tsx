import Link from "next/link";
import Image from "next/image";

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
        <Image src="/logo.svg" alt="Infina" width={80} height={24} />
        <nav style={{ display: "flex", gap: "32px" }}>
          {[
            { label: "Privacy", href: "#" },
            { label: "Contact", href: "mailto:hello@infinafe.com" },
            { label: "Twitter / X", href: "https://twitter.com/infinafe" },
          ].map(link => (
            <Link key={link.label} href={link.href} style={{ fontSize: "14px", color: "#86868B", textDecoration: "none" }}>
              {link.label}
            </Link>
          ))}
        </nav>
        <p style={{ fontSize: "13px", color: "#86868B" }}>
          &copy; {new Date().getFullYear()} Infinafe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
