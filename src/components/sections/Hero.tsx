import { Text, Button, Badge, MetricCard } from "@/components/ui";
import { HeroWaveform } from "@/components/HeroWaveform";
import { METRICS, SITE } from "@/data/portfolio";
import { openUrl, mailto } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow" aria-hidden="true" />
      <HeroWaveform />
      <div className="enter relative mx-auto max-w-[1120px] px-7 pt-24 pb-20">
        <Badge variant="green" size="md" icon="microphone">
          Building real-time voice AI @ Sarvam AI
        </Badge>
        <h1
          className="display mt-6 font-bold tracking-tight leading-[0.98] text-5xl sm:text-6xl md:text-7xl"
          style={{ color: "var(--color-tatva-content-primary)" }}
        >
          Swoyam
          <br />
          Siddharth Nayak
        </h1>
        <div className="mt-5 mono" style={{ color: "var(--accent)" }}>
          <Text variant="body-lg" as="span">{SITE.role}</Text>
        </div>
        <div className="mt-6 max-w-[620px]">
          <Text variant="body-lg" tone="secondary" as="p">
            I build the backend that powers Sarvam&apos;s Samvaad conversational-agent platform —
            low-latency voice-to-voice pipelines, agent tooling, and the LLM layer behind
            India&apos;s sovereign AI.
          </Text>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="primary" icon="email" onClick={() => mailto(SITE.email)}>Get in touch</Button>
          <Button variant="secondary" icon="github" iconPosition="right" onClick={() => openUrl(SITE.github)}>GitHub</Button>
          <Button variant="outline" onClick={() => openUrl(SITE.linkedin)}>LinkedIn</Button>
          <Button variant="outline" onClick={() => openUrl(SITE.blog)}>Blog</Button>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-[720px]">
          {METRICS.map((m) => (
            <MetricCard key={m.heading} heading={m.heading} value={m.value} tag={m.tag} />
          ))}
        </div>
      </div>
    </section>
  );
}
