import { useRef, type ReactNode, type CSSProperties } from "react";

interface Tilt3DProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees on each axis. Default 14. */
  max?: number;
  /** Hover lift in px. Default 14. */
  lift?: number;
  /** Glare overlay intensity 0-1. Default 0.35 */
  glare?: number;
  /** Scale on hover. Default 1.04 */
  scale?: number;
  style?: CSSProperties;
}

/**
 * Mouse-tracking 3D tilt card with parallax inner layers and glare.
 * Children can use `data-tilt-layer="N"` to opt into Z-depth parallax,
 * where N is a positive number (higher = more pop-out).
 */
export function Tilt3D({
  children,
  className = "",
  max = 14,
  lift = 14,
  glare = 0.35,
  scale = 1.04,
  style,
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const glareRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>(0);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;  // 0..1
    const y = (e.clientY - rect.top) / rect.height;  // 0..1
    const rx = (0.5 - y) * max * 2;
    const ry = (x - 0.5) * max * 2;

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${lift}px) scale(${scale})`;
      const layers = el.querySelectorAll<HTMLElement>("[data-tilt-layer]");
      layers.forEach((layer) => {
        const depth = Number(layer.dataset.tiltLayer || 0);
        const tx = (x - 0.5) * depth * 2;
        const ty = (y - 0.5) * depth * 2;
        layer.style.transform = `translate3d(${tx}px, ${ty}px, ${depth}px)`;
      });
      if (glareRef.current) {
        glareRef.current.style.opacity = String(glare);
        glareRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.85), rgba(255,255,255,0) 55%)`;
      }
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(rafRef.current);
    el.style.transform =
      "perspective(1100px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)";
    const layers = el.querySelectorAll<HTMLElement>("[data-tilt-layer]");
    layers.forEach((l) => (l.style.transform = "translate3d(0,0,0)"));
    if (glareRef.current) glareRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`relative transition-transform duration-300 ease-out [transform-style:preserve-3d] ${className}`}
      style={{ willChange: "transform", ...style }}
    >
      {children}
      <div
        ref={glareRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 mix-blend-overlay transition-opacity duration-300"
        style={{ transform: "translateZ(1px)" }}
      />
    </div>
  );
}
