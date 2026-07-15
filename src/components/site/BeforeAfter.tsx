import { useRef, useState } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-3xl border border-border select-none cursor-ew-resize shadow-elegant"
      onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
      onMouseDown={(e) => move(e.clientX)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
    >
      <img src={afterImg} alt="Po realizácii" width={1280} height={896} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={beforeImg} alt="Pred realizáciou" width={1280} height={896} className="absolute inset-0 h-full object-cover" style={{ width: `${10000 / Math.max(pos, 0.01)}%`, maxWidth: "none" }} loading="lazy" />
      </div>
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs font-medium uppercase tracking-wider">Pred</div>
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-xs font-medium uppercase tracking-wider">Po</div>
      <div className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white grid place-items-center shadow-glow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}