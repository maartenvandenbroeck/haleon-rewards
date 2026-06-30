# Haleon Rewards — AI Engineering Hackathon

Welcome to the challenge codebase. **Haleon Rewards** is a small internal peer-recognition app: colleagues give each other recognition with points and a short message, and a leaderboard tracks who has been recognized most.

You have never seen this code before. That is the point. Your job across the sprints is to use your AI coding assistant (GitHub Copilot, Cursor, ChatGPT, or Claude) to understand it, extend it, fix it, and review it.

## Tech stack

- React 18 + TypeScript
- Vite (dev server and build)

## Getting started

```bash
npm install
npm run dev
```

The app opens at http://localhost:5173/. You should see the recognition feed, a "Give recognition" form, and a leaderboard.

```bash
npm run build   # type-check + production build
```

## Project structure

```
src/
├── App.tsx                     # top-level layout and state
├── types.ts                    # shared type definitions
├── data/
│   └── seed.ts                 # seed team members and recognitions
├── components/
│   ├── RecognitionForm.tsx     # give recognition
│   ├── RecognitionList.tsx     # the feed
│   └── Leaderboard.tsx         # points ranking
└── utils/
    ├── format.ts               # formatting helpers
    ├── points.ts               # points aggregation + leaderboard
    └── export.ts               # CSV export (to be built — Sprint 2)
```

## The sprints

### Sprint 1 — Understand (30 min)
Use AI to read and explain this codebase. Produce a short written summary: what does the app do, what are the main components, and how do they connect? Do not run it first — read it with AI.

### Sprint 2 — Build (45 min)
Implement the **Export CSV** feature. The button already exists in the toolbar; the implementation in `src/utils/export.ts` is missing. The acceptance criteria are documented in that file.

**Plan before you prompt.** Write 3–4 steps for how you will approach it, then prompt your AI tool step by step. Do not try to one-shot it with a single complex prompt.

### Sprint 3 — Fix (30 min)
There are three known bugs in the app. Use AI to locate and fix each one. One of the three was introduced by a previous AI-generated change — identify which, and explain how you found it.

Symptoms to investigate:
1. The leaderboard order looks wrong.
2. Recognition dates display the wrong month.
3. The leaderboard points don't match what you'd expect from the feed.

### Responsible AI Checkpoint (25 min)
You'll be given two AI-generated pull requests to review. Annotate each one, decide whether to approve or request changes, and justify your decision. (Provided separately by the facilitator.)
