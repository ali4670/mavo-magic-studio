import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
  y?: number;
  /** Visual effect on enter. Default: 'rise' */
  variant?: "rise" | "fade" | "scale" | "blur" | "tilt" | "slideLeft" | "slideRight";
  /** Enable continuous parallax translateY as element scrolls through viewport */
  parallax?: number;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  y = 32,
  variant = "rise",
  parallax = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!parallax) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh; // -1..1ish
        setOffset(progress * parallax);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [parallax]);

  const hidden = (() => {
    switch (variant) {
      case "fade":
        return { transform: "translateY(0)", opacity: 0, filter: "blur(0)" };
      case "scale":
        return { transform: "translateY(0) scale(0.92)", opacity: 0, filter: "blur(0)" };
      case "blur":
        return { transform: `translateY(${y}px)`, opacity: 0, filter: "blur(14px)" };
      case "tilt":
        return {
          transform: `perspective(1200px) rotateX(14deg) translateY(${y}px) scale(0.96)`,
          opacity: 0,
          filter: "blur(0)",
        };
      case "slideLeft":
        return { transform: `translateX(-${y * 2}px)`, opacity: 0, filter: "blur(0)" };
      case "slideRight":
        return { transform: `translateX(${y * 2}px)`, opacity: 0, filter: "blur(0)" };
      case "rise":
      default:
        return { transform: `translateY(${y}px)`, opacity: 0, filter: "blur(6px)" };
    }
  })();

  const shown = {
    transform:
      variant === "tilt"
        ? `perspective(1200px) rotateX(0deg) translateY(${offset}px) scale(1)`
        : `translateY(${offset}px) translateX(0) scale(1)`,
    opacity: 1,
    filter: "blur(0px)",
  };

  return (
    <Tag
      ref={ref as never}
      style={{
        ...(visible ? shown : hidden),
        transition: `transform 1000ms cubic-bezier(0.22,0.61,0.36,1) ${delay}ms, opacity 800ms ease-out ${delay}ms, filter 800ms ease-out ${delay}ms`,
        willChange: "transform, opacity, filter",
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
