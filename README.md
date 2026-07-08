# Haleon Rewards — AI Engineering Hackathon

Welcome to the challenge codebase. **Haleon Rewards** is a small internal peer-recognition app: colleagues give each other recognition with points and a short message, and a leaderboard tracks who has been recognized most.

You have never seen this code before. That is the point. Your job across the sprints is to use your AI coding assistant (GitHub Copilot, Cursor, ChatGPT, or Claude) to understand it, fix it, extend it, and review it.

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
    └── export.ts               # CSV export (to be built — Sprint 3)
```

## The sprints

### Sprint 1 — Understand (30 min)

Two steps, in this order:

**Step 1 — Read with AI (first 20 min).** Before running the app, use your AI assistant to explore the codebase from the files alone. Produce a short written summary: what does the app do, what are the main components, and how do they connect?

**Step 2 — Run it and compare (last 10 min).** Now install and start the app:

```bash
npm install
npm run dev
```

The app opens at http://localhost:5173/. Check your summary against what you actually see. Note any differences — places where AI's explanation was incomplete, wrong, or where the running app reveals something the code didn't obviously show.

### Sprint 2 — Fix (35 min)

There are three known bugs in the app. Use AI to locate and fix each one. One of the three was introduced by a previous AI-generated change — identify which, and explain how you found it.

Symptoms to investigate:
1. The leaderboard order looks wrong.
2. Recognition dates display the wrong month.
3. The leaderboard points don't match what you'd expect from the feed.

**Stretch (if you finish early):** audit the rest of the codebase. Are there any other places where a similar class of bug could exist — off-by-one errors, incorrect comparisons, or logic that looks right but produces the wrong result in an edge case? Use AI to help you look, but verify anything it flags by reading the code yourself.

### Sprint 3 — Build (60 min)

**Plan before you prompt.** Write 3–4 steps for how you will approach it before touching any code. Then prompt your AI tool step by step. Do not try to one-shot it with a single complex prompt.

**Core task (everyone):** Implement the **Export CSV** feature — with a filter.

1. Add a category filter dropdown to the recognition feed (filter by: All, Collaboration, Innovation, Customer Focus, Integrity, Delivery).
2. Make the **Export CSV** button export only the recognitions currently visible after filtering.

The export stub is in `src/utils/export.ts`. The acceptance criteria are documented in that file. The filter state will need to live somewhere both the feed and the export button can reach — think about where before you start prompting.

---

**Stretch 1 — Two-column leaderboard** (if your team finishes the core task early):

Extend the leaderboard to show two columns side by side: *Most recognized* (total points received) and *Most generous* (total points given). Both columns should rank all team members independently.

---

**Stretch 2 — Open build** (if you still have time):

Add any element you think would make this a better internal tool. Some directions to consider: Haleon branding, UX or UI improvements, additional filtering or sorting, a summary stats bar, accessibility improvements. Use AI to help you scope and implement whatever your team agrees is most valuable.

### Responsible AI Checkpoint (20 min breakout + 10 min share-back)

You'll be given two AI-generated pull requests to review. Annotate each one, decide whether to approve or request changes, and justify your decision. (Provided separately by the facilitator.)

After 20 minutes, the whole group comes back together. Be ready to share: which PR did you approve, which did you request changes on, and what was the deciding factor?

---

## Post-session survey

Please fill in the survey before you leave — it takes 2 minutes:

**[Haleon D&T Engineering Hackathon — Participant Survey](https://forms.office.com/r/7nJY3Gneen)**
