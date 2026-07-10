import { Text, Button } from "@/components/ui";
import { Container, Eyebrow } from "@/components/common";
import { SITE } from "@/data/portfolio";
import { openUrl, mailto } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact">
      <Container className="py-24 text-center">
        <div className="reveal flex flex-col items-center">
          <Eyebrow center>Contact</Eyebrow>
          <h2
            className="display font-bold tracking-tight text-4xl md:text-6xl"
            style={{ color: "var(--color-tatva-content-primary)" }}
          >
            Let&apos;s build something.
          </h2>
          <div className="mt-5 max-w-[560px]">
            <Text variant="body-lg" tone="secondary" as="p">
              Open to interesting problems in voice AI, backend optimization, and real-time systems.
            </Text>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="primary" icon="email" onClick={() => mailto(SITE.email)}>{SITE.email}</Button>
            <Button variant="secondary" icon="github" onClick={() => openUrl(SITE.github)}>GitHub</Button>
            <Button variant="outline" onClick={() => openUrl(SITE.linkedin)}>LinkedIn</Button>
            <Button variant="outline" onClick={() => openUrl(SITE.blog)}>Blog</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
