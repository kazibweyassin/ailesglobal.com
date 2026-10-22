# Ailes Global

Ailes Global is a technology product that helps people compare immigration pathways in Germany, Canada, Ireland, and the United Kingdom. A user builds a profile, sees a preliminary pathway fit, reads the reasons and gaps, and gets an action plan with links to official sources.

It is not a law firm, not a government site, and not a visa guarantee.

## What this version includes

- A public site shaped like a services page for individuals: destinations, plans, pathway catalogue, an illustrative example, questions, and guides.
- A data layer in `data/immigration.ts` for countries, pathways, sources, and review status. UI components do not hard-code legal rules.
- A nine-step assessment and a deterministic matcher in `lib/match.ts`. Scores are a preliminary pathway fit from 0 to 100, not a probability of approval.
- Results, a device-local dashboard, saved pathways, and a simple case tracker. Data stays in the browser. Nothing is uploaded.

## What is not built yet

Accounts, password reset, PostgreSQL, Prisma, an admin console, and paid checkout are not in this version. Guided plans are labelled as not on sale. Do not add a payment provider until there is a real offer and a real terms page.

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS.

## Local setup

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The individuals page is also at `/services/individuals`.

```bash
pnpm build
pnpm start
```

There is no database and no required environment variable in this version. Do not put secrets in client components when accounts are added later.

## Immigration data

Each pathway has `sourceName`, `sourceUrl`, `lastVerifiedAt`, and `reviewStatus`. Requirement lines say “Requires verification” where the live threshold, list, or fee is not copied into the product. If this site and an official page disagree, the official page wins.

Update a pathway by editing `data/immigration.ts`, checking the official URL, and changing `lastVerifiedAt`. Do not mark a pathway `VERIFIED` unless the linked page and the description were both checked.

## Scoring

`matchPathways` adds points for education, experience, language, work, funds, and a few route-shaped signals. Missing signals become gaps. The bands are:

- 75–100 Strong potential
- 55–74 Potential
- 35–54 Needs improvement
- 0–34 Limited fit

The matcher does not reproduce Comprehensive Ranking System points, German Opportunity Card points, or salary floors.

## Disclaimer

Assessments are preliminary information based on what the user types. They are not legal advice and they do not guarantee eligibility, a visa, residence, employment, or any immigration outcome.
