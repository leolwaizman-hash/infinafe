import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-md bg-brand-green flex items-center justify-center">
              <span className="text-bg font-bold text-sm">IF</span>
            </div>
            <span className="font-semibold text-lg">Infinafe</span>
          </div>
          <p className="text-text-2 text-xs">AI agent security, in plain English.</p>
        </div>
        <nav className="flex flex-wrap items-center gap-6 text-sm text-text-2">
          <Link href="#" className="hover:text-text transition-colors">Privacy</Link>
          <Link href="mailto:hello@infinafe.com" className="hover:text-text transition-colors">Contact</Link>
          <Link href="https://twitter.com/infinafe" target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">Twitter / X</Link>
        </nav>
        <p className="text-xs text-muted">&copy; {new Date().getFullYear()} Infinafe. All rights reserved.</p>
      </div>
    </footer>
  );
}
