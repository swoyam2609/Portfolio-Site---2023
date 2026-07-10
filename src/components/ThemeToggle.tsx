"use client";

import { useThemeToggle } from "@/lib/hooks";

export function ThemeToggle() {
  const [dark, toggle] = useThemeToggle();
  return (
    <button
      type="button"
      className={`theme-toggle${dark ? " is-dark" : ""}`}
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title="Toggle theme"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <defs>
          <mask id="moonMask">
            <rect width="24" height="24" fill="white" />
            <circle className="moon-cut" cx="12" cy="10" r="6" fill="black" />
          </mask>
        </defs>
        <circle className="orb" cx="12" cy="12" r="5.5" fill="currentColor" mask="url(#moonMask)" />
        <g className="rays" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <line x1="12" y1="1.5" x2="12" y2="3.5" />
          <line x1="12" y1="20.5" x2="12" y2="22.5" />
          <line x1="1.5" y1="12" x2="3.5" y2="12" />
          <line x1="20.5" y1="12" x2="22.5" y2="12" />
          <line x1="4.2" y1="4.2" x2="5.7" y2="5.7" />
          <line x1="18.3" y1="18.3" x2="19.8" y2="19.8" />
          <line x1="4.2" y1="19.8" x2="5.7" y2="18.3" />
          <line x1="18.3" y1="5.7" x2="19.8" y2="4.2" />
        </g>
      </svg>
    </button>
  );
}
