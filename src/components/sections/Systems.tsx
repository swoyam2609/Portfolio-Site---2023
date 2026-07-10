import { Box, Text, Badge } from "@/components/ui";
import { Container, SectionHeader } from "@/components/common";
import { SYSTEMS } from "@/data/portfolio";

export function Systems() {
  return (
    <section id="systems">
      <Container className="py-16">
        <SectionHeader
          eyebrow="Selected systems @ Sarvam"
          title="What I've built on the Samvaad platform"
          subtitle="The conversational-agent stack that turns text prompts into production voice agents — the pieces I've owned end to end."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SYSTEMS.map((s) => (
            <div key={s.idx} className="reveal lift">
              <Box borderColor="primary" rounded="md" bg="surface" p={6} h="full">
                <div className="mono" style={{ color: "var(--accent)", fontSize: 12 }}>{s.idx}</div>
                <div className="mt-3 mb-2">
                  <Text variant="heading-xs" as="h3">{s.title}</Text>
                </div>
                <Text variant="body-sm" tone="secondary" as="p">{s.body}</Text>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <Badge key={tag} variant="default" size="sm">{tag}</Badge>
                  ))}
                </div>
              </Box>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
