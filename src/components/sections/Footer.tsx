import { Box, Text } from "@/components/ui";
import { SITE } from "@/data/portfolio";

export function Footer() {
  return (
    <Box as="footer" borderColor="primary" borderSides="t" px={7} py={6}>
      <div className="mx-auto max-w-[1120px] flex flex-wrap justify-between gap-2 mono">
        <Text variant="body-xs" tone="tertiary" as="span">© 2026 {SITE.name}</Text>
        <Text variant="body-xs" tone="tertiary" as="span">{SITE.location} · built from scratch</Text>
      </div>
    </Box>
  );
}
