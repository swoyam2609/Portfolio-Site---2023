import { Box, Text } from "@/components/ui";
import { Container, SectionHeader } from "@/components/common";
import { QUOTES } from "@/data/portfolio";

export function Testimonials() {
  return (
    <section id="voices">
      <Container className="py-16">
        <SectionHeader eyebrow="In others' words" title="What people say" />
        <div className="reveal mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {QUOTES.map((qt) => (
            <Box key={qt.by} borderColor="primary" rounded="md" bg="surface" p={6}>
              <Text variant="body-md" tone="secondary" as="p">“{qt.q}”</Text>
              <div className="mono mt-4 flex items-center gap-2">
                <Text variant="body-sm" as="span">{qt.by}</Text>
                <Text variant="body-sm" tone="tertiary" as="span">· {qt.role}</Text>
              </div>
            </Box>
          ))}
        </div>
      </Container>
    </section>
  );
}
