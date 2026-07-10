import { Text } from "@/components/ui";
import { Container, SectionHeader } from "@/components/common";
import { JOBS } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="work">
      <Container narrow className="py-16">
        <SectionHeader eyebrow="Experience" title="Where I've worked" />
        <div className="reveal rail mt-9 ml-2">
          {JOBS.map((j) => (
            <div key={j.role + j.co} className="relative pl-8 pb-10 last:pb-0">
              <span
                className="absolute rounded-full"
                style={{
                  left: -5,
                  top: 6,
                  width: 10,
                  height: 10,
                  background: j.now ? "var(--accent)" : "var(--color-tatva-background-primary)",
                  border: j.now ? "2px solid var(--accent)" : "2px solid var(--color-tatva-content-tertiary)",
                  boxShadow: j.now ? "0 0 0 4px color-mix(in srgb, var(--accent) 22%, transparent)" : undefined,
                }}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <Text variant="heading-xs" as="h3">
                  {j.role} · <span style={{ color: "var(--accent)" }}>{j.co}</span>
                </Text>
                <span className="mono"><Text variant="body-xs" tone="tertiary" as="span">{j.when}</Text></span>
              </div>
              <div className="mt-3 flex flex-col gap-2">
                {j.bullets.map((b, bi) => (
                  <div key={bi} className="flex gap-2">
                    <span style={{ color: "var(--accent)" }}>▸</span>
                    <Text variant="body-sm" tone="secondary" as="span">{b}</Text>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
