import { Instagram, Facebook, Phone, Mail, MapPin, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-black/40 mt-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid gap-12 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--gradient-brand)] shadow-glow">
              <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold">ZEPPA</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Slaboprúdové elektroinštalácie a bezpečnostné systémy. Profesionálne riešenia pre firmy aj domácnosti.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Služby</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Kamerové systémy (CCTV)</li>
            <li>EPS a HSP</li>
            <li>Zabezpečovacie systémy</li>
            <li>Dátové siete</li>
            <li>Inteligentné budovy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-brand-glow shrink-0" />Kamenná 11, 010 01 Žilina</li>
            <li><a href="tel:+421904633461" className="flex items-center gap-2 hover:text-foreground"><Phone className="h-4 w-4 text-brand-glow" />+421 904 633 461</a></li>
            <li><a href="mailto:makyna.milan@zeppa.sk" className="flex items-center gap-2 hover:text-foreground"><Mail className="h-4 w-4 text-brand-glow" />makyna.milan@zeppa.sk</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Sledujte nás</h4>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/zeppa.elektro/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full glass hover:scale-110 transition-all">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com/@zeppa.elektro/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full glass hover:scale-110 transition-all">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ZEPPA — Všetky práva vyhradené.
      </div>
    </footer>
  );
}