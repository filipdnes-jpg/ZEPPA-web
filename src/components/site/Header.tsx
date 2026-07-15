import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Instagram, Facebook, Zap } from "lucide-react";

const nav = [
  { label: "Služby", href: "/#sluzby" },
  { label: "Realizácie", href: "/#realizacie" },
  { label: "Pred a po", href: "/#pred-po" },
  { label: "O nás", href: "/#o-nas" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-elegant py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--gradient-brand)] shadow-glow group-hover:scale-105 transition-transform">
            <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold tracking-tight">ZEPPA</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors story-link">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://www.instagram.com/zeppa.elektro/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hidden sm:grid h-9 w-9 place-items-center rounded-full glass hover:scale-110 transition-all">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://www.facebook.com/@zeppa.elektro/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hidden sm:grid h-9 w-9 place-items-center rounded-full glass hover:scale-110 transition-all">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="/#kontakt" className="hidden md:inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-cta)] px-5 py-2.5 text-sm font-medium text-white whitespace-nowrap shadow-[var(--shadow-cta)] hover:scale-105 transition-transform">
            Cenová ponuka
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden grid h-10 w-10 place-items-center rounded-lg glass" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border mt-3 animate-fade-in">
          <nav className="flex flex-col p-5 gap-4 max-w-7xl mx-auto">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-base hover:text-brand-glow">
                {n.label}
              </a>
            ))}
            <a href="/#kontakt" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center rounded-full bg-[image:var(--gradient-cta)] px-5 py-3 text-sm font-medium text-white shadow-[var(--shadow-cta)]">
              Cenová ponuka
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}