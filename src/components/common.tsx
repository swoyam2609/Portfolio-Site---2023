import React from "react";
import { Text } from "@/components/ui";

export function Container({
  narrow,
  className = "",
  children,
}: {
  narrow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-auto ${narrow ? "max-w-[760px]" : "max-w-[1120px]"} px-7 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-6${center ? " justify-center" : ""}`}>
      <span className="h-px w-6" style={{ background: "var(--accent)", opacity: 0.7 }} />
      <span className="mono uppercase tracking-[0.18em]" style={{ fontSize: 12, color: "var(--accent)" }}>
        {children}
      </span>
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="display text-3xl md:text-4xl font-semibold tracking-tight"
      style={{ color: "var(--color-tatva-content-primary)" }}
    >
      {children}
    </h2>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="reveal">
      <Eyebrow>{eyebrow}</Eyebrow>
      <SectionTitle>{title}</SectionTitle>
      {subtitle && (
        <div className="mt-3 mb-8 max-w-[720px]">
          <Text variant="body-md" tone="secondary" as="p">
            {subtitle}
          </Text>
        </div>
      )}
    </div>
  );
}
