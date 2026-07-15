import { useEffect, useState } from "react";
import { Phone, Mail, ArrowUp } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href="tel:+421904633461" aria-label="Zavolať" className="group grid h-12 w-12 place-items-center rounded-full bg-[var(--gradient-brand)] text-white shadow-glow hover:scale-110 transition-transform">
        <Phone className="h-5 w-5 group-hover:animate-pulse" />
      </a>
      <a href="mailto:makyna.milan@zeppa.sk" aria-label="E-mail" className="grid h-12 w-12 place-items-center rounded-full glass text-white hover:scale-110 transition-transform">
        <Mail className="h-5 w-5" />
      </a>
      {show && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Hore" className="grid h-12 w-12 place-items-center rounded-full glass text-white hover:scale-110 transition-transform animate-fade-in">
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}