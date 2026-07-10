import { useEffect, useState, type RefObject } from "react";

/** Adds `.in` to every `.reveal` element as it scrolls into view. */
export function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = document.querySelectorAll(".reveal");
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((i) => i.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((i) => io.observe(i));
    return () => io.disconnect();
  }, []);
}

/** Reads/sets the `.dark` class on <html>, persisted to localStorage. */
export function useThemeToggle(): [boolean, () => void] {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const el = document.documentElement;
    const next = !el.classList.contains("dark");
    el.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  };

  return [dark, toggle];
}

/** Animated voice-waveform on a <canvas>, driven by the --accent token. */
export function useHeroWaveform(ref: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let W = 0,
      H = 0,
      dpr = 1;
    const bars = 72;
    const seeds = Array.from({ length: bars }, (_, i) => ((i * 12345) % 628) / 100);
    let t = 0;

    const accent = () =>
      getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#c96442";

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas!.clientWidth;
      H = canvas!.clientHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    window.addEventListener("resize", size);

    function frame() {
      ctx!.clearRect(0, 0, W, H);
      const col = accent();
      const mid = H / 2;
      const gap = W / bars;
      for (let i = 0; i < bars; i++) {
        const x = i * gap + gap / 2;
        const env = Math.sin((i / bars) * Math.PI);
        const a = Math.sin(t * 1.6 + seeds[i]) * 0.5 + 0.5;
        const b = Math.sin(t * 2.7 + seeds[i] * 1.7) * 0.5 + 0.5;
        const h = (a * 0.6 + b * 0.4) * env * (H * 0.34) + 2;
        ctx!.fillStyle = col;
        ctx!.globalAlpha = 0.1 + env * 0.16;
        ctx!.fillRect(x - gap * 0.16, mid - h, gap * 0.32, h * 2);
      }
      ctx!.globalAlpha = 0.5;
      ctx!.strokeStyle = col;
      ctx!.lineWidth = 1.4;
      ctx!.beginPath();
      for (let px = 0; px <= W; px += 6) {
        const norm = px / W;
        const env2 = Math.sin(norm * Math.PI);
        const y =
          mid +
          Math.sin(norm * 14 - t * 2.2) * env2 * (H * 0.1) +
          Math.sin(norm * 30 - t * 3.1) * env2 * (H * 0.04);
        if (px === 0) ctx!.moveTo(px, y);
        else ctx!.lineTo(px, y);
      }
      ctx!.stroke();
      ctx!.globalAlpha = 1;
      t += 0.016;
      if (!reduce) raf = requestAnimationFrame(frame);
    }
    if (reduce) {
      t = 1.2;
      frame();
    } else raf = requestAnimationFrame(frame);
    return () => {
      window.removeEventListener("resize", size);
      cancelAnimationFrame(raf);
    };
  }, [ref]);
}
