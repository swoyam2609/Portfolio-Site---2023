/* ------------------------------------------------------------------
   Single source of content for the portfolio. Edit here — the section
   components render whatever these arrays contain.
   ------------------------------------------------------------------ */
import type { IconName } from "@/components/ui";

export const SITE = {
  name: "Swoyam Siddharth Nayak",
  role: "Software Engineer — real-time voice & LLM systems",
  email: "me@swoyam.in",
  github: "https://github.com/swoyam2609",
  githubHandle: "@swoyam2609",
  linkedin: "https://www.linkedin.com/in/swoyam2609/",
  blog: "https://blogs.swoyam.in",
  location: "Bhubaneswar, India",
};

export type NavItem = { href: string; label: string };
export const NAV: NavItem[] = [
  { href: "#work", label: "work" },
  { href: "#systems", label: "systems" },
  { href: "#projects", label: "projects" },
  { href: "#writing", label: "writing" },
  { href: "#contact", label: "contact" },
];

export type Fact = { k: string; v: string };
export const FACTS: Fact[] = [
  { k: "Role", v: "Software Engineer" },
  { k: "Company", v: "Sarvam AI" },
  { k: "Based in", v: "Bhubaneswar, India" },
  { k: "Email", v: "me@swoyam.in" },
  { k: "GitHub", v: "@swoyam2609" },
  { k: "Focus", v: "Voice AI · Backend Optimization" },
];

export type Metric = { heading: string; value: string; tag: { label: string; variant?: "default" | "green" | "brand"; icon?: IconName } };
export const METRICS: Metric[] = [
  { heading: "Agent authoring", value: "7d → 1–2h", tag: { label: "Copilot", variant: "green" } },
  { heading: "Voice pipelines", value: "V2V", tag: { label: "real-time", variant: "green", icon: "microphone" } },
  { heading: "IIIT-BH '25", value: "8.35", tag: { label: "CGPA", variant: "default", icon: "check" } },
];

export type System = { idx: string; title: string; body: string; tags: string[] };
export const SYSTEMS: System[] = [
  {
    idx: "01 / agent runtime",
    title: "Native function-calling agent",
    body: "Re-architected the core conversational agent from a two-agent (action + tool) design into a single native tool-calling agent with pluggable streaming/unstreaming adapters, across the voice-to-voice and WhatsApp/text pipelines — removing a per-turn hop and cutting latency.",
    tags: ["Python", "LiteLLM", "async", "tool-calling"],
  },
  {
    idx: "02 / authoring",
    title: "Samvaad “Copilot” (Improve-with-AI)",
    body: "A pydantic_ai orchestrator that streams edits over WebSocket and mutates live agent state-machine config through typed tools (edit-state, update-variable, edit-global-instruction) over Gemini 2.5 / Claude Sonnet 4 — cutting agent authoring from ~7 days to 1–2 hours.",
    tags: ["pydantic_ai", "WebSocket", "Gemini", "Claude"],
  },
  {
    idx: "03 / developer experience",
    title: "Playground v2",
    body: "Conversation forking & branching — replay any interaction to a chosen turn and fork new state, with Redis state-machine hydration — plus history review, bookmarking, and ClickHouse/Redis-backed debug-interaction management.",
    tags: ["FastAPI", "Redis", "ClickHouse"],
  },
  {
    idx: "04 / LLM layer",
    title: "sarvam-llm abstraction",
    body: "A multi-provider LLM abstraction over LiteLLM (AWS Bedrock, Google Vertex, Anthropic Claude, Azure/OpenAI) with automatic fallback chains, native function-calling, structured output, tuned httpx pooling, and Prometheus metrics for token usage, inter-token latency, and time-to-first-speech.",
    tags: ["LiteLLM", "Bedrock", "Vertex", "Prometheus"],
  },
  {
    idx: "05 / real-time audio",
    title: "Barge-in & background noise",
    body: "Real-time interruption handling that truncates the assistant turn at the exact played-character boundary and reconciles the LLM thread for seamless resumption — plus a background-noise system that dynamically mixes ambient audio into the TTS stream for acoustic realism.",
    tags: ["TTS", "streaming", "audio DSP"],
  },
  {
    idx: "06 / analytics",
    title: "Interaction ClickHouse data model",
    body: "Designed the interaction-turns and interaction-event ClickHouse model — per-turn and per-event tables capturing per-modality model, pipeline, and TTFB/TTFV latency across the ASR, LLM, tool, TTS and translate stages — surfaced through Metabase dashboards that drive product decisions.",
    tags: ["ClickHouse", "Metabase", "data modeling"],
  },
  {
    idx: "07 / extraction",
    title: "Post-call structured extraction",
    body: "Dynamically builds a Pydantic schema from each agent's variable config and drives typed LLM extraction from call transcripts — turning free-form conversations into structured, queryable outcomes.",
    tags: ["Pydantic", "structured output", "LLM"],
  },
  {
    idx: "08 / platform",
    title: "Extension Service",
    body: "A Streamlit multi-app platform with dynamic app routing, Flagsmith-driven org entitlement, and shared JWT auth inside the NextJS platform — letting client-specific tools ship without forking the core app.",
    tags: ["Streamlit", "NextJS", "Flagsmith", "JWT"],
  },
];

export type Job = { role: string; co: string; when: string; now?: boolean; bullets: string[] };
export const JOBS: Job[] = [
  {
    role: "Software Engineer",
    co: "Sarvam AI",
    when: "Jun 2025 — Present",
    now: true,
    bullets: [
      "Own the LLM & agent-pipeline layer of the Samvaad platform — the systems above, from the function-calling re-architecture to the ClickHouse analytics model.",
      "Delivered voice AI agents for multiple client orgs (collections, sales, retention, scheme support) as a forward-deployed engineer, including a staggered, timezone-aware outbound-campaign scheduler and a DND bulk-cancellation tool (asyncpg + concurrent aiohttp) for Tata Capital.",
    ],
  },
  {
    role: "AI Intern",
    co: "Sarvam AI",
    when: "Dec 2024 — May 2025",
    bullets: [
      "Developed voice-to-voice (V2V) AI agents for client organizations.",
      "Designed an AI-powered chatbot for general-purpose conversational use cases.",
    ],
  },
  {
    role: "AI Intern · MLOps & GenAI",
    co: "FixIt-AI",
    when: "Aug 2024 — Nov 2024",
    bullets: [
      "Achieved a seven-fold reduction in transcription-generation time via multi-threading.",
      "Designed and built 10+ REST APIs for CRUD operations.",
    ],
  },
  {
    role: "Project Intern",
    co: "Oracle NetSuite",
    when: "May 2024 — Jul 2024",
    bullets: ["Built NLP & LLM solutions across text analysis, translation, summarization, and conversational AI."],
  },
  {
    role: "Jr. Flutter Developer",
    co: "EzTruck",
    when: "Jul 2023 — Oct 2023",
    bullets: ["Built a logistics-management application in Flutter, with tracking and route-optimization features."],
  },
  {
    role: "Core Team Lead",
    co: "Codeate.in",
    when: "Jun 2021 — Jul 2022",
    bullets: ["Led core-team operations, coordinating efforts and maintaining delivery standards."],
  },
];

export type Project = { cat: string; title: string; body: string; url: string };
export const PROJECTS: Project[] = [
  { cat: "AI Assistant", title: "Sifra", body: "A personal AI assistant.", url: "https://sifra.swoyam.in" },
  { cat: "GenAI · Python", title: "Sentry Auto-Triage Bot", body: "FastAPI webhook that ingests Sentry issues, resolves the offending source frame, pulls code from GitHub, and posts an SRE-style Gemini root-cause card to Slack.", url: "https://github.com/swoyam2609" },
  { cat: "Generative AI", title: "AI Storyboarding", body: "Turns story ideas into full storyboards with Gemini for scenes and DALL·E 2 for visuals.", url: "https://github.com/swoyam2609/aibot-backend" },
  { cat: "Backend", title: "Job News", body: "A backend service surfacing curated job news.", url: "https://job-news.swoyam.in" },
  { cat: "Backend", title: "IIIT-Bh Learn", body: "A learning platform for IIIT Bhubaneswar.", url: "https://iiit-bh-learn.vercel.app/" },
  { cat: "Mobile App", title: "IIIT Everything", body: "A campus super-app on the Google Play Store.", url: "https://play.google.com/store/apps/details?id=com.swoyam.iiiteverything&hl=en_US" },
  { cat: "Event Tech", title: "DevFest '23 App & Web", body: "Website and check-in app for GDG Bhubaneswar's DevFest.", url: "https://devfest.gdgbbsr.in" },
  { cat: "Web · Automation", title: "Advaita Fest", body: "Website plus a passes & check-in system for IIIT-BH's annual fest.", url: "https://www.advaita-iiitbh.in/" },
  { cat: "Backend", title: "File Manager", body: "A self-hosted file-management service.", url: "https://filemanager.swoyam.in" },
  { cat: "Machine Learning", title: "Disease Prediction", body: "An ML API predicting diseases from symptom inputs.", url: "https://github.com/swoyam2609/diseasePredictionAPI" },
  { cat: "Backend · ML", title: "Epidemic Prediction", body: "A model for forecasting epidemic spread.", url: "https://github.com/swoyam2609/DSAI-Project" },
  { cat: "Mobile App", title: "SmartConnectify", body: "A connectivity-focused mobile application.", url: "https://github.com/swoyam2609/SmartConnectify" },
];

export type Post = { date: string; title: string; cat: string; url: string };
export const POSTS: Post[] = [
  { date: "Mar 18 '24", title: "Uploading File API [FastAPI]", cat: "Python", url: "https://blogs.swoyam.in/uploading-file-api-fastapi" },
  { date: "Jun 17 '24", title: "Get a custom mail-ID on your domain", cat: "Networking", url: "https://blogs.swoyam.in/get-custom-mail-id-on-your-domain" },
  { date: "Jan 24 '24", title: "Generating unique event passes", cat: "Automation", url: "https://blogs.swoyam.in/generating-unique-event-passes" },
  { date: "Jan 26 '24", title: "Mail automation using Python", cat: "Python", url: "https://blogs.swoyam.in/mail-automation-using-python" },
  { date: "Dec 26 '23", title: "DevFest'23 BBSR website & check-in app", cat: "Event", url: "https://blogs.swoyam.in/devfest23-bbsr-website-check-in-app" },
  { date: "Dec 28 '23", title: "Hackathon: assistive tech for adolescents with disabilities", cat: "Design", url: "https://blogs.swoyam.in/hackathon-on-innovating-assistive-technology-for-adolescents-with-disabilities" },
];

export type SkillGroup = { head: string; items: string[] };
export const SKILLS: SkillGroup[] = [
  { head: "Languages", items: ["Python", "JavaScript", "C / C++", "SQL", "Dart"] },
  { head: "AI / LLM", items: ["Agentic AI", "LiteLLM", "pydantic_ai", "Function-calling", "Hugging Face", "NLP"] },
  { head: "Backend & Web", items: ["FastAPI", "Streamlit", "WebSockets", "NextJS · ReactJS", "Flutter"] },
  { head: "Data & Cloud", items: ["ClickHouse · Redis", "PostgreSQL · MySQL", "Azure · GCP · AWS"] },
  { head: "Infra & DevOps", items: ["Docker", "Kubernetes / Helm", "ArgoCD · Terraform", "GitHub Actions"] },
  { head: "Observability", items: ["Prometheus · Grafana", "OpenTelemetry", "Metabase", "Sentry"] },
  { head: "Tooling", items: ["k9s", "Flagsmith", "Locust", "Git / GitHub"] },
  { head: "Also", items: ["UI/UX design", "Automation", "Technical writing"] },
];

export type EduItem = { t: string; s: string; m: string; chips?: string[] };
export const EDUCATION: EduItem[] = [
  { t: "B.Tech, Computer Science Engineering", s: "International Institute of Information Technology, Bhubaneswar", m: "2021 — 2025 · CGPA 8.35 / 10", chips: ["Tech Secretary '25", "Placement Coordinator", "Class Representative, CSE"] },
  { t: "Senior Secondary (PCM + CS)", s: "Kendriya Vidyalaya No. 3, Bhubaneswar", m: "2018 — 2021 · 95%" },
  { t: "Secondary", s: "Kendriya Vidyalaya No. 2, AFS Maharajpura, Gwalior", m: "2016 — 2018 · 87.2%" },
];

export const COMMUNITIES = ["GDG Bhubaneswar", "GDSC IIIT-BH", "TechSociety IIIT-BH", "eCell IIIT-BH", "PSoC IIIT-BH"];

export type Honor = { title: string; meta: string; link?: string; points?: string[] };
export const HONORS: Honor[] = [
  {
    title: "Precision Agriculture: ML & DL-based Detection and Classification of Agricultural Pests",
    meta: "IEEE Xplore",
    link: "https://ieeexplore.ieee.org/abstract/document/10431427",
    points: [
      "Novel hybrid ML/DL model (EfficientNetB0 + XGBoost) classifying 12 agricultural pest categories.",
      "96.7% early-detection accuracy, beating individual CNN and ML baselines.",
    ],
  },
  {
    title: "Google Hash Code 2022 — Qualification Round",
    meta: "Qualified · 807,907 points",
    points: [
      "Built an optimized solution to a large-scale logistics problem under time constraints in the global team programming competition.",
    ],
  },
];

export type Quote = { q: string; by: string; role: string };
export const QUOTES: Quote[] = [
  { q: "An exceptional individual — consistently outstanding organisational skills in managing our GDSC team, with seamless execution, hard work, and real leadership.", by: "Ayusha Kar", role: "GDSC IIIT-BH" },
  { q: "One of the hardest-working talents I've worked with — always on edge to go the extra mile and learn to get things done.", by: "Diwakar Arodiya", role: "Collaborator" },
  { q: "'Highly efficient' is the phrase that comes to mind. As Core Team Lead he showed deep command of core concepts and shipped real technical solutions — apps, websites and more.", by: "Sahil Singh", role: "Codeate" },
];
