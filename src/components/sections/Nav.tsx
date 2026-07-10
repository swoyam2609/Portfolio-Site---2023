import { Box, Text } from "@/components/ui";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NAV } from "@/data/portfolio";

export function Nav() {
  return (
    <Box as="nav" borderColor="primary" borderSides="b" px={7} py={4} bg="primary">
      <div className="mx-auto max-w-[1120px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 mono" style={{ fontWeight: 600 }}>
          <span className="inline-block rounded-full" style={{ width: 9, height: 9, background: "var(--accent)" }} />
          <Text variant="body-sm" as="span">swoyam.in</Text>
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-6">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="mono navlink" style={{ fontSize: 13 }}>
                <Text variant="body-sm" tone="secondary" as="span">{n.label}</Text>
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </Box>
  );
}
