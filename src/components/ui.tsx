/* ------------------------------------------------------------------
   In-house UI primitives — zero third-party design-system dependency.
   Token-driven (CSS custom properties defined in globals.css).
   Spacing scale: 1 unit = 2px (p={6} => 12px), matching prior usage.
   ------------------------------------------------------------------ */
import React from "react";

const px = (n?: number) => (n === undefined ? undefined : `${n * 2}px`);

/* ----------------------------- Icon ----------------------------- */

export type IconName =
  | "email"
  | "github"
  | "microphone"
  | "arrow-up-right"
  | "external-link"
  | "check";

const ICON_PX: Record<string, number> = {
  xxs: 12, xs: 14, sm: 16, md: 20, lg: 24, xl: 28, "2xl": 32, "3xl": 40,
};
const TONE_VAR: Record<string, string> = {
  primary: "var(--color-tatva-content-primary)",
  secondary: "var(--color-tatva-content-secondary)",
  tertiary: "var(--color-tatva-content-tertiary)",
  brand: "var(--accent)",
  inverse: "var(--color-tatva-brand-content-primary)",
  inherit: "currentColor",
};

const ICON_PATHS: Record<IconName, React.ReactNode> = {
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" fill="currentColor" stroke="none" />
  ),
  microphone: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
    </>
  ),
  "arrow-up-right": <path d="M7 17 17 7M9 7h8v8" />,
  "external-link": (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
    </>
  ),
  check: <path d="m4 12 5 5L20 6" />,
};

export function Icon({
  name,
  size = "sm",
  tone = "primary",
  strokeWidth = 2,
  "aria-label": ariaLabel,
}: {
  name: IconName;
  size?: keyof typeof ICON_PX;
  tone?: keyof typeof TONE_VAR;
  strokeWidth?: number;
  "aria-label"?: string;
}) {
  const s = ICON_PX[size] ?? 16;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: TONE_VAR[tone], flexShrink: 0 }}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

/* ----------------------------- Box ----------------------------- */

type BoxProps = {
  as?: keyof React.JSX.IntrinsicElements;
  bg?: "primary" | "secondary" | "surface";
  borderColor?: "primary" | "secondary";
  borderSides?: "b" | "t" | "l" | "r" | "x" | "y";
  rounded?: "sm" | "md" | "lg" | "full";
  p?: number; px?: number; py?: number; pt?: number; pr?: number; pb?: number; pl?: number;
  gap?: number;
  display?: "flex" | "grid" | "block" | "inline-flex";
  direction?: "row" | "column";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  w?: "full" | "auto" | number;
  h?: "full" | "auto" | number;
  minH?: "screen" | "full";
  overflow?: "hidden" | "auto" | "visible";
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  children?: React.ReactNode;
};

const BG: Record<string, string> = {
  primary: "var(--color-tatva-background-primary)",
  secondary: "var(--color-tatva-background-secondary)",
  surface: "var(--color-tatva-surface-primary)",
};
const RADIUS: Record<string, number> = { sm: 8, md: 12, lg: 20, full: 9999 };
const FLEX_ALIGN: Record<string, string> = {
  start: "flex-start", center: "center", end: "flex-end", stretch: "stretch", baseline: "baseline",
};
const FLEX_JUSTIFY: Record<string, string> = {
  start: "flex-start", center: "center", end: "flex-end",
  between: "space-between", around: "space-around", evenly: "space-evenly",
};

export function Box({
  as = "div", bg, borderColor, borderSides, rounded,
  p, px: pxp, py, pt, pr, pb, pl, gap,
  display, direction, align, justify, w, h, minH, overflow,
  className, style, onClick, children,
}: BoxProps) {
  const Tag = as as React.ElementType;
  const s: React.CSSProperties = { ...style };
  if (bg) s.background = BG[bg];
  if (display) s.display = display;
  if (direction) s.flexDirection = direction;
  if (align) s.alignItems = FLEX_ALIGN[align];
  if (justify) s.justifyContent = FLEX_JUSTIFY[justify];
  if (gap !== undefined) s.gap = px(gap);
  if (p !== undefined) s.padding = px(p);
  if (pxp !== undefined) { s.paddingLeft = px(pxp); s.paddingRight = px(pxp); }
  if (py !== undefined) { s.paddingTop = px(py); s.paddingBottom = px(py); }
  if (pt !== undefined) s.paddingTop = px(pt);
  if (pr !== undefined) s.paddingRight = px(pr);
  if (pb !== undefined) s.paddingBottom = px(pb);
  if (pl !== undefined) s.paddingLeft = px(pl);
  if (rounded) s.borderRadius = RADIUS[rounded];
  if (w === "full") s.width = "100%"; else if (typeof w === "number") s.width = px(w);
  if (h === "full") s.height = "100%"; else if (typeof h === "number") s.height = px(h);
  if (minH === "screen") s.minHeight = "100vh"; else if (minH === "full") s.minHeight = "100%";
  if (overflow) s.overflow = overflow;
  if (borderColor) {
    const c = `var(--color-tatva-border-${borderColor})`;
    const bw = "1px solid";
    if (!borderSides) s.border = `${bw} ${c}`;
    else {
      const map: Record<string, (keyof React.CSSProperties)[]> = {
        b: ["borderBottom"], t: ["borderTop"], l: ["borderLeft"], r: ["borderRight"],
        x: ["borderLeft", "borderRight"], y: ["borderTop", "borderBottom"],
      };
      map[borderSides].forEach((k) => { (s as Record<string, string>)[k as string] = `${bw} ${c}`; });
    }
  }
  return (
    <Tag className={className} style={s} onClick={onClick}>
      {children}
    </Tag>
  );
}

/* ----------------------------- Text ----------------------------- */

const TEXT: Record<string, React.CSSProperties> = {
  "heading-xl": { fontSize: 34, lineHeight: 1.1, fontWeight: 700, letterSpacing: "-0.02em" },
  "heading-lg": { fontSize: 28, lineHeight: 1.12, fontWeight: 700, letterSpacing: "-0.02em" },
  "heading-md": { fontSize: 24, lineHeight: 1.15, fontWeight: 700, letterSpacing: "-0.01em" },
  "heading-sm": { fontSize: 20, lineHeight: 1.2, fontWeight: 700 },
  "heading-xs": { fontSize: 18, lineHeight: 1.25, fontWeight: 700, letterSpacing: "-0.01em" },
  "body-xl": { fontSize: 20, lineHeight: 1.5 },
  "body-lg": { fontSize: 18, lineHeight: 1.55 },
  "body-md": { fontSize: 16, lineHeight: 1.6 },
  "body-sm": { fontSize: 14.5, lineHeight: 1.55 },
  "body-xs": { fontSize: 12.5, lineHeight: 1.45 },
  "label-md": { fontSize: 14, lineHeight: 1.3, fontWeight: 600 },
  "label-sm": { fontSize: 12, lineHeight: 1.3, fontWeight: 600 },
};

export function Text({
  variant = "body-md",
  tone = "default",
  as = "span",
  className,
  style,
  children,
}: {
  variant?: keyof typeof TEXT;
  tone?: "default" | "secondary" | "tertiary" | "brand" | "inverse";
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  const Tag = as as React.ElementType;
  const color =
    tone === "default" ? "var(--color-tatva-content-primary)" : TONE_VAR[tone];
  return (
    <Tag className={className} style={{ ...TEXT[variant], color, margin: 0, ...style }}>
      {children}
    </Tag>
  );
}

/* ----------------------------- Button ----------------------------- */

const BTN_SIZE: Record<string, React.CSSProperties> = {
  sm: { padding: "7px 13px", fontSize: 13 },
  md: { padding: "10px 17px", fontSize: 13.5 },
  lg: { padding: "13px 22px", fontSize: 15 },
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  onClick,
  tooltip,
  type = "button",
  children,
}: {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: IconName;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  tooltip?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}) {
  const base: React.CSSProperties = {
    display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 10,
    fontWeight: 500, fontFamily: "inherit", cursor: "pointer",
    border: "1px solid transparent", transition: "all .2s ease", lineHeight: 1,
    ...BTN_SIZE[size],
  };
  if (variant === "primary") {
    base.background = "var(--color-tatva-brand-primary)";
    base.color = "var(--color-tatva-brand-content-primary)";
  } else if (variant === "secondary") {
    base.background = "var(--color-tatva-surface-primary)";
    base.color = "var(--color-tatva-content-primary)";
    base.borderColor = "var(--color-tatva-border-primary)";
  } else if (variant === "outline") {
    base.background = "transparent";
    base.color = "var(--color-tatva-content-primary)";
    base.borderColor = "var(--color-tatva-border-primary)";
  } else {
    base.background = "transparent";
    base.color = "var(--color-tatva-content-secondary)";
  }
  return (
    <button type={type} onClick={onClick} title={tooltip} className="ui-btn" style={base}>
      {icon && iconPosition === "left" && <Icon name={icon} size="sm" tone="inherit" />}
      {children}
      {icon && iconPosition === "right" && <Icon name={icon} size="sm" tone="inherit" />}
    </button>
  );
}

/* ----------------------------- Badge ----------------------------- */

function badgeColors(variant: string): React.CSSProperties {
  switch (variant) {
    case "green":
      return { background: "rgba(52,150,100,0.14)", color: "var(--badge-green)", borderColor: "rgba(52,150,100,0.28)" };
    case "brand":
      return { background: "rgba(var(--accent-rgb),0.14)", color: "var(--accent)", borderColor: "rgba(var(--accent-rgb),0.3)" };
    default:
      return {
        background: "var(--color-tatva-background-secondary)",
        color: "var(--color-tatva-content-secondary)",
        borderColor: "var(--color-tatva-border-primary)",
      };
  }
}

export function Badge({
  variant = "default",
  size = "md",
  icon,
  children,
}: {
  variant?: "default" | "green" | "brand";
  size?: "sm" | "md" | "lg";
  icon?: IconName;
  children?: React.ReactNode;
}) {
  const pad = size === "sm" ? "3px 8px" : size === "lg" ? "6px 13px" : "4px 10px";
  const fs = size === "sm" ? 11.5 : size === "lg" ? 13.5 : 12.5;
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 5, padding: pad, fontSize: fs,
        fontWeight: 500, borderRadius: 999, border: "1px solid", lineHeight: 1.2, whiteSpace: "nowrap",
        ...badgeColors(variant),
      }}
    >
      {icon && <Icon name={icon} size="xxs" />}
      {children}
    </span>
  );
}

/* ----------------------------- Card ----------------------------- */

export function Card({
  heading,
  description,
  badge,
  topRightIcon,
  topRightIconTooltip,
  topRightIconAriaLabel,
  onTopRightIconClick,
  onClick,
}: {
  heading: string;
  description?: string;
  badge?: { value: string; variant?: "default" | "green" | "brand" };
  topRightIcon?: IconName;
  topRightIconTooltip?: string;
  topRightIconAriaLabel?: string;
  onTopRightIconClick?: () => void;
  onClick?: () => void;
  direction?: "vertical" | "horizontal";
}) {
  return (
    <div
      onClick={onClick}
      className="lift"
      style={{
        display: "flex", flexDirection: "column", gap: 9, height: "100%",
        background: "var(--color-tatva-surface-primary)",
        border: "1px solid var(--color-tatva-border-primary)",
        borderRadius: 14, padding: 20, cursor: onClick ? "pointer" : "default",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
        {badge && <Badge variant={badge.variant ?? "default"} size="sm">{badge.value}</Badge>}
        {topRightIcon && (
          <button
            type="button"
            title={topRightIconTooltip}
            aria-label={topRightIconAriaLabel}
            onClick={(e) => { e.stopPropagation(); onTopRightIconClick?.(); }}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 2, marginLeft: "auto" }}
          >
            <Icon name={topRightIcon} size="sm" tone="tertiary" />
          </button>
        )}
      </div>
      <Text variant="heading-xs" as="h4">{heading}</Text>
      {description && <Text variant="body-sm" tone="secondary" as="p">{description}</Text>}
    </div>
  );
}

/* ----------------------------- MetricCard ----------------------------- */

export function MetricCard({
  heading,
  value,
  tag,
}: {
  heading: string;
  value: string | number;
  tag?: { label: string; variant?: "default" | "green" | "brand"; icon?: IconName };
}) {
  return (
    <div
      style={{
        display: "flex", flexDirection: "column", gap: 8,
        background: "var(--color-tatva-surface-primary)",
        border: "1px solid var(--color-tatva-border-primary)",
        borderRadius: 14, padding: "18px 20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <Text variant="body-sm" tone="tertiary" as="span">{heading}</Text>
        {tag && (
          <Badge variant={tag.variant ?? "green"} size="sm" icon={tag.icon}>{tag.label}</Badge>
        )}
      </div>
      <span
        className="mono"
        style={{
          fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em",
          color: "var(--color-tatva-content-primary)", fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </span>
    </div>
  );
}
