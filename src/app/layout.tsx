import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swoyam Siddharth Nayak — Software Engineer",
  description:
    "Software engineer building real-time voice AI and LLM systems at Sarvam AI — the Samvaad conversational-agent platform and India's sovereign AI.",
  authors: [{ name: "Swoyam Siddharth Nayak" }],
  openGraph: {
    title: "Swoyam Siddharth Nayak — Software Engineer",
    description: "Building real-time voice AI & LLM systems at Sarvam AI.",
    type: "website",
  },
};

const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    var d = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (d) document.documentElement.classList.add('dark');
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
