"use client";

import { useRef } from "react";
import { useHeroWaveform } from "@/lib/hooks";

export function HeroWaveform() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useHeroWaveform(ref);
  return <canvas ref={ref} id="wave" aria-hidden="true" />;
}
