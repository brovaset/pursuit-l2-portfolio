# Cycle 2 — AdScale AI

**Status:** Shipped  
**Repo:** https://github.com/brovaset/AdScale  
**Live demo:** https://adscale-99th-dragon.vercel.app

## Data insight

Advertising managers are experiencing a slow, largely invisible displacement. The executional work that defines the role — building, versioning, launching, and reporting on campaigns — is increasingly automated by self-serve ad platforms and absorbed into larger marketing teams. From an identical 2020 baseline, marketing-management jobs grew about 46% while advertising-management jobs fell about 4.5% over five years — a divergence raw headcounts hide, since advertising is roughly 18x smaller as a field. Advertising managers are left doing high-volume, low-leverage busywork with no time for strategic work, and no easy way to prove their impact in the data-fluent language marketing teams now speak.

## Problem

Advertising managers can lose real budget to underperforming campaigns before anyone notices, and spend most of their day on executional busywork instead of strategy.

## Solution

An AI advertising manager that turns a plain-language brief into a real, launched ad campaign — with a human approving every dollar before it spends. AdScale lets you describe a campaign in one sentence, has a Claude agent draft the structure (audience, budget split, ad copy, channels), and only launches through the real ad-platform API after explicit human approval — giving one manager the output of a team.

## Key features

- AI campaign generation — Claude parses a plain-language brief into a structured campaign via tool use
- Approve-before-spend gate enforced server-side (launch is rejected without explicit approval)
- Real campaign creation through the Meta Marketing API (sandbox account, created paused — can’t spend real money)
- Server-side spend guardrails and approval thresholds the agent can’t exceed
- AI optimization suggestions in plain language, plus an “indexed impact” performance summary
- Google sign-in via Supabase Auth (OAuth-only, no stored passwords)

## Tech stack

React 19 + Vite + Tailwind CSS (frontend), FastAPI + SQLAlchemy + Pydantic (backend, 23 passing contract tests), Claude (Anthropic API) for the agent, Supabase Auth + Postgres, Meta Marketing API / Google Ads API integrations, deployed on Vercel

## Screenshot / live link

Live demo: https://adscale-99th-dragon.vercel.app

## Built with

A two-person team in parallel branches — backend/AI/integrations on one side, frontend/dashboard/approval flows on the other — during Pursuit’s AI-Native Program.

## Notes

The approve-before-spend gate had to be airtight before we trusted it with a real API, so we spent more time on that guardrail logic and the mock-mode fallback than on the UI itself.
