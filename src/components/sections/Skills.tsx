import { Text } from "@/components/ui";
import { Container, SectionHeader } from "@/components/common";
import { SKILLS } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills">
      <Container className="py-16">
        <SectionHeader eyebrow="Toolbox" title="Skills & stack" />
        <div className="reveal mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS.map((g) => (
            <div key={g.head}>
              <div className="mono pb-2.5 mb-3.5" style={{ borderBottom: "1px solid var(--color-tatva-border-primary)" }}>
                <Text variant="label-sm" tone="tertiary" as="span">{g.head.toUpperCase()}</Text>
              </div>
              <div className="flex flex-col gap-2">
                {g.items.map((it) => (
                  <Text key={it} variant="body-sm" tone="secondary" as="span">{it}</Text>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
