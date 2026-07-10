import { Box, Text } from "@/components/ui";
import { Container, Eyebrow } from "@/components/common";
import { FACTS } from "@/data/portfolio";

export function About() {
  return (
    <section id="about">
      <Container className="py-16">
        <div className="reveal grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div>
            <Eyebrow>About</Eyebrow>
            <Text variant="body-xl" as="p">
              Computer Science graduate from IIIT Bhubaneswar (Class of 2025), now a software
              engineer at Sarvam AI — contributing to India&apos;s sovereign LLM under the IndiaAI
              Mission.
            </Text>
            <div className="mt-5">
              <Text variant="body-md" tone="secondary" as="p">
                My focus is turning cutting-edge generative-AI research into real-world systems with
                tangible user impact: real-time voice agents, an agentic authoring copilot, a
                multi-provider LLM abstraction, and the analytics that keep it all measurable. I
                started full-stack — Flutter apps, FastAPI backends, event automation — and carried
                that build-anything instinct into AI infrastructure.
              </Text>
            </div>
            <div className="mt-4">
              <Text variant="body-md" tone="secondary" as="p">
                Off the critical path, I&apos;ve led as Tech Secretary and Placement Coordinator at
                IIIT Bhubaneswar, shipped campus-scale apps used by thousands, and written about the
                things I build.
              </Text>
            </div>
          </div>
          <Box borderColor="primary" rounded="md" overflow="hidden">
            {FACTS.map((f, i) => (
              <Box
                key={f.k}
                display="flex"
                justify="between"
                align="center"
                gap={4}
                px={5}
                py={3}
                borderColor={i < FACTS.length - 1 ? "primary" : undefined}
                borderSides={i < FACTS.length - 1 ? "b" : undefined}
              >
                <span className="mono"><Text variant="body-sm" tone="tertiary" as="span">{f.k}</Text></span>
                <span className="mono"><Text variant="body-sm" as="span">{f.v}</Text></span>
              </Box>
            ))}
          </Box>
        </div>
      </Container>
    </section>
  );
}
