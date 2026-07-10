import { Text, Badge, Icon } from "@/components/ui";
import { Container, Eyebrow } from "@/components/common";
import { EDUCATION, COMMUNITIES, HONORS } from "@/data/portfolio";
import { openUrl } from "@/lib/utils";

const topBorder = { borderTop: "1px solid var(--color-tatva-border-primary)" };

export function Education() {
  return (
    <section id="education">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
          {/* Education & leadership */}
          <div className="reveal">
            <Eyebrow>Education &amp; leadership</Eyebrow>
            <div className="flex flex-col">
              {EDUCATION.map((e, i) => (
                <div key={e.t} className="py-4" style={i > 0 ? topBorder : undefined}>
                  <Text variant="body-md" as="h3">{e.t}</Text>
                  <div className="mt-1"><Text variant="body-sm" tone="tertiary" as="p">{e.s}</Text></div>
                  <div className="mono mt-1" style={{ color: "var(--accent)", fontSize: 12 }}>{e.m}</div>
                  {e.chips && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {e.chips.map((c) => <Badge key={c} variant="default" size="sm">{c}</Badge>)}
                    </div>
                  )}
                </div>
              ))}
              <div className="py-4" style={topBorder}>
                <div className="mb-3"><Text variant="body-md" as="h3">Communities</Text></div>
                <div className="flex flex-wrap gap-2">
                  {COMMUNITIES.map((c) => <Badge key={c} variant="default" size="sm">{c}</Badge>)}
                </div>
              </div>
            </div>
          </div>

          {/* Publications & honors */}
          <div className="reveal">
            <Eyebrow>Publications &amp; honors</Eyebrow>
            {HONORS.map((h, i) => (
              <div key={h.title} className="py-4" style={i > 0 ? topBorder : undefined}>
                <Text variant="body-md" as="h3">{h.title}</Text>
                {h.link ? (
                  <button className="mono mt-1 flex items-center gap-1" onClick={() => openUrl(h.link!)}>
                    <span className="mono" style={{ color: "var(--accent)", fontSize: 12 }}>{h.meta}</span>
                    <Icon name="external-link" size="xxs" tone="secondary" />
                  </button>
                ) : (
                  <div className="mono mt-1" style={{ color: "var(--accent)", fontSize: 12 }}>{h.meta}</div>
                )}
                {h.points && (
                  <div className="mt-3 flex flex-col gap-2">
                    {h.points.map((p, pi) => (
                      <Text key={pi} variant="body-sm" tone="secondary" as="p">{p}</Text>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
