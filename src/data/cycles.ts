export type CycleStatus = "Shipped" | "In progress";

export type Cycle = {
  id: string;
  number: number;
  title: string;
  status: CycleStatus;
  role: string;
  summary: string;
  repo: string;
  features: string[];
  stack: string[];
  liveDemo?: string;
  screenshot?: string;
  screenshotAlt?: string;
};

export const siteCopy = {
  name: "Adedoyin Ahoton",
  brandLabel: "Builder",
  heroThesis:
    "I learn by shipping — real problems, end-to-end builds, and notes on what broke along the way.",
  intro: [
    "I’m a builder who learns by shipping — each cycle I pick a real problem, build a working project end-to-end, and write down what broke along the way.",
    "I like tools that save time or make messy data easier to reason about, and I’d rather have four scrappy, functioning builds than one polished thing that never ships.",
    "These four cycles were built working through pairs and as part of a team, so a lot of what I learned came from splitting up problems, reviewing each other’s code, and figuring out how to ship together — not just solo.",
  ],
  lastUpdated: "July 25, 2026",
  pdfPath: "/README.pdf",
  github: "https://github.com/brovaset",
  linkedin: "https://www.linkedin.com/in/adedoyin-ahoton-38b428227/",
} as const;

export const cycles: Cycle[] = [
  {
    id: "slack-clone",
    number: 1,
    title: "Slack Clone",
    status: "Shipped",
    role: "Realtime messaging",
    summary:
      "A Slack-inspired team app with real auth, per-user channels and DMs, and live message updates — no fake data.",
    repo: "https://github.com/brovaset/Slack-Clone",
    features: [
      "Real sign up / sign in with Supabase Auth",
      "Channels with membership — add or remove teammates per channel",
      "Channel and direct messages stored in Postgres",
      "Per-user views — each person only sees their own channels and DMs",
      "Real-time message updates via Supabase Realtime",
      "Profile status and presence",
    ],
    stack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
    ],
    liveDemo: "https://brovaset.github.io/Slack-Clone/",
  },
  {
    id: "adscale-ai",
    number: 2,
    title: "AdScale AI",
    status: "Shipped",
    role: "AI advertising agent",
    summary:
      "Turns a plain-language brief into a real Meta campaign — with a human approving every dollar before it spends.",
    repo: "https://github.com/brovaset/AdScale",
    features: [
      "AI campaign generation via Claude tool use",
      "Approve-before-spend gate enforced server-side",
      "Real campaign creation through the Meta Marketing API",
      "Server-side spend guardrails the agent can’t exceed",
      "AI optimization suggestions in plain language",
      "Google sign-in via Supabase Auth",
    ],
    stack: [
      "React + Vite",
      "FastAPI",
      "Claude",
      "Supabase",
      "Meta API",
    ],
    liveDemo: "https://adscale-99th-dragon.vercel.app",
  },
  {
    id: "accountpulse",
    number: 3,
    title: "AccountPulse",
    status: "In progress",
    role: "Customer success agent",
    summary:
      "A read-only AI advisor that spots at-risk accounts before churn — the agent informs, the CSM decides.",
    repo: "https://github.com/brovaset/AccountPulse",
    features: [
      "Pulls CRM, usage, support, and comms signals",
      "Classifies risk with sources and next steps",
      "Human approval before any customer-facing action",
      "Deterministic rules-based reporting for stable demos",
      "Prompt-injection resistant CRM/ticket text handling",
      "Streamlit UI for reviews and morning briefings",
    ],
    stack: ["Python", "Streamlit", "HubSpot", "PostHog", "Zendesk"],
    screenshot: "/accountpulse-screenshot.png",
    screenshotAlt:
      "AccountPulse UI — account selection and health review with CRM, usage, support, and comms signals",
  },
  {
    id: "popengine",
    number: 4,
    title: "PopEngine",
    status: "In progress",
    role: "NYC permit planner",
    summary:
      "Questionnaire in, source-cited permit plan out — feasibility verdict, deadlines, and portal links for NYC events.",
    repo: "https://github.com/jzeng151/pop-engine",
    features: [
      "33-rule NYC ruleset with source citations",
      "Backward-computed feasibility engine",
      "Live checklist with deadline alerts",
      "Event intake with conditional branching",
      "Portal deep links with document packages",
      "Rules stored as versioned data, not hardcoded logic",
    ],
    stack: ["Next.js", "Express", "PostgreSQL", "Twilio"],
  },
];
