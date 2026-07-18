import { useEffect } from "react";

// brilho que segue o cursor; rAF limita o redesenho
export default function Spotlight() {
  useEffect(() => {
    const el = document.getElementById("spotlight-glow");
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      const x = e.clientX;
      const y = e.clientY;
      raf = requestAnimationFrame(() => {
        el.style.background = `radial-gradient(560px circle at ${x}px ${y}px, var(--accent-soft), transparent 70%)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      id="spotlight-glow"
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1 }}
    />
  );
}
