import { Card } from "@/components/ui";
import { Container, SectionHeader } from "@/components/common";
import { PROJECTS } from "@/data/portfolio";
import { openUrl } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects">
      <Container className="py-16">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've shipped"
          subtitle="Side projects, campus-scale apps, and experiments — many still live."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {PROJECTS.map((p) => (
            <div key={p.title} className="reveal">
              <Card
                heading={p.title}
                description={p.body}
                badge={{ value: p.cat, variant: "default" }}
                topRightIcon="external-link"
                topRightIconTooltip={`Open ${p.title}`}
                topRightIconAriaLabel={`Open ${p.title}`}
                onTopRightIconClick={() => openUrl(p.url)}
                onClick={() => openUrl(p.url)}
                direction="vertical"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
