https://www.boundless.com/?r=0
# BUILD AILES GLOBAL — IMMIGRATION INTELLIGENCE PLATFORM

You are a senior product engineer, UX designer, and full-stack architect.

Build a production-quality MVP called **Ailes Global**.

Ailes Global is a technology-enabled global mobility and immigration-intelligence platform for Africans who want to understand their realistic options for moving to another country.

The first four destination markets are:

1. Germany
2. Canada
3. Ireland
4. United Kingdom

Do NOT build a generic visa-agency website.

The core product is:

> **Assess your profile → discover potentially suitable immigration pathways → understand eligibility → identify gaps → create an action plan.**

The product should feel like a serious technology company, not a traditional immigration consultancy.

---

# 1. PRODUCT POSITIONING

Brand:

**Ailes Global**

Primary positioning:

> **Know where you can go. Know what it takes.**

Alternative supporting message:

> Your personalized roadmap to global mobility.

Ailes Global should help users answer:

* Which countries might fit my profile?
* Which immigration pathways might I qualify for?
* What are my biggest eligibility gaps?
* What documents will I need?
* What should I do next?
* When should I speak to an immigration professional?
* Which pathway is strongest for my current profile?

Ailes Global MUST NOT:

* guarantee visas
* guarantee immigration approval
* present itself as a government authority
* pretend to be a law firm
* give definitive legal advice
* fabricate eligibility rules
* invent immigration programs
* imply that a score means approval probability

Use language such as:

* "Potentially suitable"
* "Based on the information provided"
* "Preliminary assessment"
* "You may qualify"
* "Further verification required"
* "Consult a licensed immigration professional where required"

---

# 2. INITIAL COUNTRIES

Build the platform architecture so countries are data-driven rather than hard-coded.

Initial countries:

## Germany

Potential pathways/data categories:

* EU Blue Card
* Skilled Worker routes
* Opportunity Card
* IT specialist pathways
* vocational/training pathways
* job-seeker pathways where applicable

## Canada

Potential pathways/data categories:

* Express Entry
* Federal Skilled Worker
* Provincial Nominee Programs
* employer-supported work routes
* study-related pathways where applicable

## Ireland

Potential pathways/data categories:

* Critical Skills Employment Permit
* General Employment Permit
* employment-based residence pathways

## United Kingdom

Potential pathways/data categories:

* Skilled Worker
* Global Talent
* Scale-up
* other major work/talent pathways where appropriate

Do not hard-code detailed legal requirements into React components.

Create a structured data layer so pathway requirements can be updated independently.

---

# 3. TECHNOLOGY STACK

Use:

* Next.js latest stable version
* App Router
* TypeScript
* React
* Tailwind CSS
* shadcn/ui
* Lucide icons
* PostgreSQL
* Prisma ORM
* NextAuth/Auth.js or an equivalent secure authentication system
* Zod for validation
* React Hook Form
* Server Actions/API routes where appropriate

Use a clean modular architecture.

Suggested structure:

app/
page.tsx
assessment/
results/
dashboard/
countries/
pathways/
applications/
resources/
professionals/
auth/
admin/

components/
ui/
assessment/
dashboard/
countries/
pathways/
layout/

lib/
auth/
db/
assessment/
scoring/
countries/
pathways/
validation/

prisma/
schema.prisma
seed.ts

data/
countries/
pathways/

types/

---

# 4. VISUAL DESIGN

Design language:

Premium.
Trustworthy.
Modern.
Minimal.
International.

Do NOT make it look like:

* a government website
* a law firm's website
* a university website
* a cheap visa agency
* a generic AI SaaS template

Use a restrained professional visual system.

Primary colors should be neutral with one strong brand accent.

Suggested visual direction:

* off-white/light background
* deep navy/charcoal typography
* subtle borders
* generous whitespace
* cards with modest radius
* very limited gradients
* no excessive glassmorphism
* no excessive animations

Typography:

Use a modern sans-serif such as Inter, Geist, or equivalent.

The site must be highly responsive.

Mobile experience is extremely important because the initial market is Africa.

---

# 5. LANDING PAGE

Build a high-conversion homepage.

Hero:

Headline:

> **Know where you can go. Know what it takes.**

Subheadline:

> Ailes Global helps you discover immigration pathways that may fit your profile, identify your eligibility gaps, and build a practical roadmap for moving abroad.

Primary CTA:

> Assess My Options

Secondary CTA:

> Explore Countries

Add a small trust/disclaimer:

> Ailes Global provides technology-based immigration information and assessments. It does not guarantee visa or immigration approval.

---

# 6. HOMEPAGE SECTIONS

## Hero

Strong CTA to begin assessment.

## How it works

Three/four steps:

1. Tell us about yourself
2. We analyze your profile
3. Compare potential pathways
4. Get your action plan

## Countries

Display:

Germany
Canada
Ireland
United Kingdom

Each card should show:

* flag
* country
* major pathway categories
* "Explore"

## Why Ailes Global

Examples:

* Personalized
* Data-driven
* Transparent
* Built for global mobility
* No visa guarantees
* Human support when needed

## Example assessment

Show a mock user profile and sample result.

Example:

Germany — Strong potential
Canada — Moderate potential
Ireland — Strong potential
UK — Moderate potential

Clearly label all displayed scores as illustrative.

## CTA

> Find your options

---

# 7. AUTHENTICATION

Users should be able to:

* create account
* sign in
* sign out
* reset password
* save assessment
* return later
* update profile
* view previous assessments

Use secure authentication.

Do not store unnecessary sensitive information.

---

# 8. USER PROFILE

Create a profile containing:

Personal:

* first name
* last name
* date of birth
* nationality
* country of residence
* marital status
* number of dependents

Education:

* highest education level
* field of study
* institution
* graduation year

Professional:

* occupation
* years of experience
* employment status
* current industry
* salary range
* job title
* professional certifications

Language:

* English level
* German level
* French level
* IELTS/TOEFL or equivalent where relevant

Mobility:

* target countries
* preferred migration timeline
* previous international travel
* previous visa refusals

Financial:

* approximate available funds
* willingness/ability to pay application-related costs

Do not require every field.

Assessment should be progressive.

---

# 9. ASSESSMENT FLOW

Build a beautiful multi-step assessment.

Progress indicator:

Step 1 — About You
Step 2 — Destination
Step 3 — Education
Step 4 — Work
Step 5 — Language
Step 6 — Family
Step 7 — Financial situation
Step 8 — Goals
Step 9 — Review

The user should be able to:

* go back
* save progress
* continue later
* see completion percentage

Do NOT overwhelm users with one giant form.

Use cards and one logical group of questions at a time.

---

# 10. ASSESSMENT QUESTIONS

Create a robust initial questionnaire.

Examples:

### Personal

What is your age?

What is your nationality?

Where do you currently live?

Are you married?

Do you have children/dependents?

### Step 3 — Education

What is your highest qualification?

Options:

* No formal qualification
* Secondary education
* Certificate
* Diploma
* Bachelor's
* Master's
* PhD
* Professional qualification

What did you study?

When did you complete it?

### Step 4 — Work

What is your current occupation?

How many years of professional experience do you have?

What industry do you work in?

Are you currently employed?

What is your approximate annual income?

### Step 5 — Language

English proficiency:

* Beginner
* Intermediate
* Advanced
* Fluent

Do you have an English test?

Test type:

* IELTS
* TOEFL
* PTE
* None

German proficiency:

A1/A2/B1/B2/C1/C2/None

French proficiency:

A1/A2/B1/B2/C1/C2/None

### Goals

Which countries interest you?

Select:

Germany
Canada
Ireland
United Kingdom

Preferred pathway:

* Work
* Skilled migration
* Study
* Business
* Talent
* Family
* Not sure

How soon do you want to move?

* 0–6 months
* 6–12 months
* 1–2 years
* 2+ years

---

# 11. SCORING ENGINE

Create a modular scoring engine.

Do NOT claim that the score represents the probability of receiving a visa.

The score represents:

> **Ailes Global preliminary pathway fit**

Score range:

0–100

Categories:

* Strong potential: 75–100
* Potential: 55–74
* Needs improvement: 35–54
* Limited fit: 0–34

The score should consider factors such as:

* age
* education
* occupation
* experience
* language
* salary
* financial capacity
* pathway-specific requirements
* country-specific requirements

Different pathways should have different scoring rules.

Example:

Germany skilled-worker pathway:

occupation match
experience
qualification
salary
language
job offer where applicable

Canada skilled migration:

age
education
language
experience
occupation
Canadian experience where applicable
adaptability factors where relevant

Ireland Critical Skills:

occupation match
employment
salary
qualification
experience

UK Skilled Worker:

eligible occupation
salary
sponsorship requirement
experience/qualification where relevant

These are NOT legal determinations.

---

# 12. MATCHING ENGINE

Create:

matchPathways(profile)

It should return:

country
pathway
score
status
reasons
missingRequirements
recommendedActions

Example result:

{
country: "Germany",
pathway: "Opportunity Card",
score: 78,
status: "strong_potential",
reasons: [
"Your professional experience may align with eligible skilled occupations.",
"Your age is favorable for this pathway."
],
missingRequirements: [
"Language evidence may be required.",
"Your qualification/experience needs verification."
],
recommendedActions: [
"Verify your qualification",
"Improve German language level",
"Prepare employment documents"
]
}

---

# 13. RESULTS PAGE

This is one of the most important pages in the product.

After assessment:

Headline:

> **Your Ailes Global Mobility Assessment**

Show:

### Overall profile

Example:

Profile completeness: 91%

Then country cards:

Germany
78/100
Strong potential

Canada
64/100
Potential

Ireland
82/100
Strong potential

UK
59/100
Potential

Again:

DO NOT call this "visa probability."

Use:

> Preliminary pathway fit

---

# 14. COUNTRY DETAIL

When the user clicks Germany:

Show:

Germany

Potential pathways:

1. Opportunity Card
2. EU Blue Card
3. Skilled Worker

For every pathway show:

* pathway description
* who it is generally designed for
* key requirements
* user's matching factors
* gaps
* documents
* next steps
* official government source
* professional-help recommendation where appropriate

Example:

## EU Blue Card

Your preliminary fit:

82/100

Why:

✓ Relevant professional experience
✓ Occupation potentially aligned
✓ Salary may need verification

Potential gaps:

⚠ Confirm qualifying employment offer
⚠ Verify salary threshold
⚠ Verify qualification/experience

Next steps:

1. Validate occupation
2. Search qualifying employers
3. Verify salary requirements
4. Prepare documents

---

# 15. OFFICIAL SOURCES

Every pathway must support:

officialSourceUrl

Never invent government URLs.

Display:

> Verify requirements with the official immigration authority.

Include source metadata:

sourceName
sourceUrl
lastVerifiedAt

Create an architecture where immigration data can be updated.

Do not pretend data is current if it has not been verified.

---

# 16. ACTION PLAN

Generate a personalized action plan.

Example:

## Your Germany roadmap

### Phase 1 — Eligibility

* Verify qualification
* Verify occupation
* Verify language

### Phase 2 — Preparation

* Prepare CV
* Collect employment letters
* Obtain qualification documents
* Prepare language certificate

### Phase 3 — Opportunity

* Identify qualifying jobs
* Apply
* Track applications

### Phase 4 — Immigration

* Prepare application
* Obtain professional/legal review if required
* Submit through appropriate official channel

Each task should have:

* title
* description
* status
* priority
* estimated effort
* due date

Statuses:

Not started
In progress
Completed

---

# 17. DOCUMENT VAULT

Create a secure document area.

Categories:

Identity
Education
Employment
Language
Financial
Immigration
Family

Users can upload documents.

MVP can use a storage abstraction rather than implementing production file storage immediately.

Important:

Never expose uploaded documents publicly.

Add placeholder architecture for:

* encrypted storage
* access control
* document expiration
* document verification
* OCR in future versions

---

# 18. APPLICATION TRACKER

Users should be able to create an immigration case.

Example:

Case:

Germany — Opportunity Card

Status:

Research
Preparing
Ready
Submitted
Decision
Completed

Tasks:

* Passport
* CV
* Qualification
* Language certificate
* Financial proof
* Application form

Timeline:

Date
Event
Status

---

# 19. DASHBOARD

Create a professional dashboard.

Top:

Good morning, Yassin.

Your mobility profile is 87% complete.

Then:

### Best current match

Ireland — Critical Skills Employment Permit

82/100

### Country matches

Germany
Canada
Ireland
UK

### Action plan

5 tasks remaining

### Documents

8/12 required documents uploaded

### Applications

Germany — Preparing
Canada — Research

### Recommended next action

> Complete your employment profile to improve your assessment.

---

# 20. COUNTRY EXPLORER

Create:

/countries

Cards for:

Germany
Canada
Ireland
United Kingdom

Each country page should contain:

* overview
* major pathways
* work opportunities
* typical applicant profiles
* key requirements
* official resources
* FAQ
* disclaimer

---

# 21. PATHWAY DATABASE

Create database models.

Country:

id
name
slug
code
flag
description
officialImmigrationUrl
active

Pathway:

id
countryId
name
slug
category
description
active
officialSourceUrl
lastVerifiedAt

PathwayRequirement:

id
pathwayId
field
operator
value
description
importance

Examples:

age <= 35
experience >= 3
language >= B2
salary >= threshold

The rules engine should be extensible.

---

# 22. DATABASE MODELS

Create Prisma models for at least:

User
Profile
Education
Employment
LanguageSkill
Assessment
AssessmentResult
Country
Pathway
PathwayRequirement
ActionPlan
ActionTask
Document
ImmigrationCase
CaseEvent
SavedPathway

Use proper relations.

Use timestamps.

Use indexes on common queries.

---

# 23. ADMIN DASHBOARD

Create an admin interface.

Admin should be able to:

* add country
* edit country
* add pathway
* edit pathway
* edit requirements
* update official source
* set last verified date
* deactivate outdated pathways
* view assessment statistics
* view user counts
* view pathway popularity

Admin must have role-based authorization.

Roles:

USER
ADMIN
REVIEWER

---

# 24. DATA VALIDATION

Use Zod.

Every API/server action must validate input.

Never trust client-side validation alone.

Handle:

* invalid values
* missing values
* malicious input
* unauthorized requests
* expired sessions
* invalid IDs

---

# 25. SECURITY

Implement:

* secure authentication
* password hashing if credentials authentication is used
* authorization
* server-side validation
* rate limiting architecture
* CSRF protection where applicable
* secure HTTP headers
* safe file handling
* no sensitive information in logs
* environment variables for secrets

Never put:

DATABASE_URL
AUTH_SECRET
API keys

in frontend code.

---

# 26. DISCLAIMER SYSTEM

Create reusable disclaimer components.

Assessment disclaimer:

> This assessment provides preliminary informational guidance based on the information you provide. It does not constitute legal advice and does not guarantee eligibility, visa approval, residence, employment, or immigration outcomes. Immigration rules change and should be verified against official sources.

Every pathway result should have a concise disclaimer.

---

# 27. PROFESSIONAL SUPPORT

Create a future-ready section:

> Need professional help?

Show:

* Immigration lawyer
* Regulated immigration consultant
* Authorized adviser
* recruitment partner

Do not fabricate professionals.

Create placeholder partner architecture.

Future model:

Ailes generates the assessment.

Licensed professionals handle regulated legal advice/representation.

Ailes receives a platform/referral/service fee where legally permissible.

---

# 28. SEARCH

Implement global search.

Search:

countries
pathways
resources
FAQs

Example:

User searches:

"Germany IT jobs"

Return:

Germany
EU Blue Card
Skilled Worker
IT specialist pathway

---

# 29. SEO

Implement strong SEO.

Metadata for:

Ailes Global
Germany immigration pathways
Canada immigration pathways
Ireland Critical Skills
UK Skilled Worker
African immigration
global mobility

Create structured metadata.

Use dynamic metadata for country/pathway pages.

Generate sitemap.

Generate robots.txt.

Use canonical URLs.

---

# 30. ACCESSIBILITY

Follow WCAG principles.

Use:

semantic HTML
keyboard navigation
ARIA where necessary
visible focus states
accessible forms
proper labels
good contrast
screen-reader friendly errors

---

# 31. RESPONSIVE DESIGN

Must work extremely well on:

320px mobile
375px mobile
768px tablet
1024px laptop
1440px desktop

Mobile navigation should be clean.

Assessment should feel excellent on a phone.

---

# 32. EMPTY STATES

Create polished empty states.

Examples:

No assessment yet:

> Find out where your profile may take you.

No saved pathways:

> Save pathways you're interested in.

No documents:

> Your document vault is empty.

No applications:

> Track your first immigration journey here.

---

# 33. LOADING STATES

Use skeleton loaders.

Do not leave blank screens.

Create loading.tsx where useful.

---

# 34. ERROR HANDLING

Create:

error.tsx
not-found.tsx

Show useful messages.

Never expose stack traces to users.

---

# 35. SAMPLE DATA

Create realistic seed data for:

Germany
Canada
Ireland
United Kingdom

At least:

3 pathways per country.

Use clearly marked sample/seed data.

Do not invent current legal thresholds.

Where exact requirements are unknown, use placeholder fields and mark them:

"Requires verification."

Do not fabricate immigration law.

---

# 36. TESTING

Add tests for:

assessment validation
profile validation
matching engine
score calculation
country filtering
pathway matching
authorization
API/server actions

Use Vitest or Jest.

Include example tests.

---

# 37. PRODUCT ANALYTICS

Create an analytics abstraction.

Track events such as:

assessment_started
assessment_completed
country_viewed
pathway_viewed
pathway_saved
action_plan_created
document_uploaded
case_created

Do not collect unnecessary personal data.

Make analytics provider replaceable.

---

# 38. PAYMENTS ARCHITECTURE

Do NOT implement payments initially.

But create architecture for future products:

Free:
Basic assessment

Paid:
Detailed assessment
Personalized action plan
Document checklist
Application tracking
Professional review

Future payment provider can be integrated later.

---

# 39. FUTURE AI LAYER

Do not make AI the foundation.

Design the system so AI can later assist with:

* explaining results
* summarizing requirements
* document checklist generation
* CV review
* personalized action plans
* FAQ assistant

But the core eligibility logic must remain deterministic and auditable.

AI must never invent immigration requirements.

---

# 40. ADMIN DATA WORKFLOW

Every immigration pathway should have:

lastVerifiedAt
sourceUrl
sourceName
reviewStatus

Review status:

VERIFIED
NEEDS_REVIEW
OUTDATED
DRAFT

Only VERIFIED pathways should be presented as current production information.

DRAFT pathways should only appear in admin.

---

# 41. NAVIGATION

Desktop navigation:

Ailes Global logo

Explore
Countries
Pathways
How It Works
Resources

Right side:

Sign In
Assess My Options

Logged-in:

Dashboard
My Assessment
Action Plan
Documents
Applications
Profile

---

# 42. URL STRUCTURE

Use:

/
/countries
/countries/germany
/countries/canada
/countries/ireland
/countries/united-kingdom

/pathways
/pathways/germany/opportunity-card
/pathways/germany/eu-blue-card
/pathways/canada/express-entry

/assessment
/assessment/results

/dashboard
/dashboard/action-plan
/dashboard/documents
/dashboard/applications
/dashboard/profile

/admin
/admin/countries
/admin/pathways
/admin/users

---

# 43. BRAND COPY

Avoid generic phrases such as:

"Unlock your dreams"
"Your journey starts here"
"Make your dreams a reality"

Use direct language.

Examples:

> **Find the immigration pathways that may fit you.**

> **Stop guessing. Start with your profile.**

> **Compare countries before you spend money applying.**

> **Know your gaps before you apply.**

> **One profile. Multiple pathways. A clearer plan.**

---

# 44. LANDING PAGE HERO COPY

Use:

AILES GLOBAL

**Know where you can go. Know what it takes.**

> Compare immigration pathways across Germany, Canada, Ireland and the UK based on your profile, skills, experience and goals.

CTA:

**Assess My Options**

Secondary:

**Explore Countries**

Small disclaimer:

> Informational assessment only. No visa or immigration outcome is guaranteed.

---

# 45. IMPORTANT PRODUCT PRINCIPLE

The platform must not ask:

> "Which visa do you want?"

Instead ask:

> **"Where do you want to go, and what are you trying to achieve?"**

Then the system determines which pathways may be relevant.

This prevents the platform from becoming a simple visa catalogue.

---

# 46. MVP PRIORITY

Build in this exact order:

PHASE 1

Landing page
Navigation
Countries
Pathways
Authentication

PHASE 2

Profile
Assessment
Validation
Progress saving

PHASE 3

Matching engine
Scoring engine
Results page

PHASE 4

Dashboard
Action plan
Saved pathways

PHASE 5

Documents
Application tracker

PHASE 6

Admin
Country management
Pathway management
Requirements management

PHASE 7

Testing
Security
SEO
Performance
Accessibility

---

# 47. DEFINITION OF DONE

The MVP is complete only when a new user can:

1. Visit Ailes Global
2. Understand the product
3. Create an account
4. Complete the assessment
5. Save their profile
6. Receive country/pathway matches
7. See their preliminary fit score
8. Understand why a pathway matched
9. See potential gaps
10. Receive a personalized action plan
11. Save pathways
12. View their dashboard
13. Explore Germany, Canada, Ireland and UK independently
14. Track an immigration case
15. Upload/document-manage files through the secure architecture
16. See appropriate disclaimers
17. Access official immigration sources

An administrator must be able to:

1. Manage countries
2. Manage pathways
3. Manage pathway requirements
4. Update official sources
5. Mark data as verified/outdated
6. View basic platform analytics

---

# 48. ENGINEERING QUALITY

Write clean production-quality TypeScript.

Avoid:

* any
* giant components
* duplicated logic
* hard-coded country rules inside UI
* hard-coded scores
* fake APIs
* fake legal data
* unnecessary dependencies
* excessive client components

Prefer:

* reusable components
* server components by default
* server-side data access
* typed functions
* schema validation
* modular business logic
* clear separation between UI, database, and scoring logic

Add comments only where they explain non-obvious business logic.

---

# 49. README

Create a complete README containing:

* what Ailes Global is
* product architecture
* tech stack
* local setup
* environment variables
* database setup
* Prisma migration
* seed command
* development command
* test command
* production build
* deployment instructions
* architecture explanation
* scoring-engine explanation
* immigration-data update process
* security notes
* legal/disclaimer notes

---

# 50. FINAL INSTRUCTION

Do not simply generate a visually impressive frontend.

Build the actual foundation of a scalable immigration-intelligence product.

The most important parts are:

1. excellent user experience
2. structured immigration data
3. deterministic matching logic
4. explainable results
5. extensible country/pathway architecture
6. secure user profiles
7. action plans
8. admin-controlled immigration data
9. official-source references
10. clean architecture

The product should feel like the beginning of a serious company that could eventually become an African equivalent of a technology-driven global immigration platform.

Start by creating the project structure and core architecture, then implement the MVP completely.

Do not stop after creating the landing page.

Build the working application end-to-end.
