import { Box, Text, Icon } from "@/components/ui";
import { Container, SectionHeader } from "@/components/common";
import { POSTS } from "@/data/portfolio";
import { openUrl } from "@/lib/utils";

export function Writing() {
  return (
    <section id="writing">
      <Container narrow className="py-16">
        <SectionHeader
          eyebrow="Writing"
          title="From the blog"
          subtitle="Notes on the things I build — mostly Python, automation, and infrastructure."
        />
        <div className="reveal">
          <Box borderColor="primary" rounded="md" overflow="hidden" bg="surface">
            {POSTS.map((p, i) => (
              <button
                key={p.url}
                onClick={() => openUrl(p.url)}
                className="flex items-center gap-5 w-full px-5 py-4 text-left cursor-pointer bg-transparent"
                style={i < POSTS.length - 1 ? { borderBottom: "1px solid var(--color-tatva-border-primary)" } : undefined}
              >
                <span className="mono shrink-0" style={{ width: 92 }}>
                  <Text variant="body-xs" tone="tertiary" as="span">{p.date}</Text>
                </span>
                <div className="flex flex-col items-start grow">
                  <Text variant="body-sm" as="span">{p.title}</Text>
                  <span className="mono" style={{ color: "var(--accent)", fontSize: 12 }}>{p.cat}</span>
                </div>
                <Icon name="arrow-up-right" size="sm" tone="tertiary" />
              </button>
            ))}
          </Box>
        </div>
      </Container>
    </section>
  );
}
