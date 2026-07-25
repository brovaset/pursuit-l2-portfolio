# Cycle 1 — Slack Clone

**Status:** Shipped  
**Repo:** https://github.com/brovaset/Slack-Clone  
**Live demo:** https://brovaset.github.io/Slack-Clone/

## Problem

Team messaging tools like Slack look simple on the surface, but building one surfaces real problems: real-time sync, per-user data scoping, and auth done right instead of faked.

## Solution

A Slack-inspired team messaging app. Users sign up and sign in for real, get their own channels and DMs, and see messages update live — no page refresh, no fake data.

## Key features

- Real sign up / sign in with Supabase Auth
- Channels with membership — add or remove teammates per channel
- Channel and direct messages stored in Postgres
- Per-user views — each person only sees their own channels and DMs
- Real-time message updates via Supabase Realtime
- Profile status and presence

## Tech stack

Next.js 15 (App Router), React, TypeScript, Tailwind CSS, Supabase (Auth, Postgres, Realtime)

## Screenshot / live link

Live demo: https://brovaset.github.io/Slack-Clone/

## Notes

Realtime updates and per-user data scoping fought each other more than expected — getting each person to see only their own channels/DMs without breaking the live subscription took a few passes.
