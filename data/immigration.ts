import type { Country, Pathway, PlanFocus, Resource } from "@/lib/types"

const checked = "2026-10-08"

export const countries: Country[] = [
  {
    slug: "germany",
    name: "Germany",
    code: "DE",
    flag: "🇩🇪",
    summary: "Skilled work, the EU Blue Card, and a way to look for a job.",
    overview:
      "Germany opens several doors for skilled people, from work routes to the Opportunity Card if you are still looking. Occupation lists, salary rules, and language expectations live with the German authorities, and they change.",
    workOpportunities:
      "Engineering, health, technology, and skilled trades come up often. Whether your occupation qualifies is on the current official lists.",
    typicalProfiles: [
      "You have a degree, years of skilled work, and a job offer to check.",
      "You are skilled, and you want to look at the Opportunity Card before you have an employer.",
      "You may need a recognised qualification or a language certificate.",
    ],
    keyChecks: [
      "Whether your qualification is recognised.",
      "Occupation and salary against the current threshold.",
      "German or English, depending on the route.",
    ],
    faqs: [
      {
        question: "What does a strong Germany score mean?",
        answer:
          "Your profile lines up with several signals on the German routes. Confirm the current rules on Make it in Germany.",
      },
      {
        question: "Where do I confirm the rules?",
        answer:
          "Start with Make it in Germany, then the authority named on the route you are considering.",
      },
    ],
    source: {
      sourceName: "Make it in Germany",
      sourceUrl: "https://www.make-it-in-germany.com/en/",
      lastVerifiedAt: checked,
      reviewStatus: "NEEDS_REVIEW",
    },
  },
  {
    slug: "canada",
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    summary: "Express Entry, skilled work, and the provinces.",
    overview:
      "Canada welcomes skilled people through Express Entry and through the provinces. Points, draws, and occupation rules are published by IRCC.",
    workOpportunities:
      "These programs look at skilled work, language, education, and sometimes a tie to a province or an employer.",
    typicalProfiles: [
      "You are comparing Express Entry with a provincial route.",
      "You still need an official language test before a federal program feels complete.",
      "You have a job offer or a provincial connection to confirm.",
    ],
    keyChecks: [
      "Language test results, on the official page.",
      "An education assessment, where the program asks for one.",
      "Whether a province or an employer is part of your route.",
    ],
    faqs: [
      {
        question: "How does my score relate to Express Entry?",
        answer:
          "Your Ailes score shows how your profile lines up. Comprehensive Ranking System points and invitations come from IRCC.",
      },
      {
        question: "Who publishes the programs?",
        answer: "Immigration, Refugees and Citizenship Canada publishes the federal programs and links on to the provinces.",
      },
    ],
    source: {
      sourceName: "Immigration, Refugees and Citizenship Canada",
      sourceUrl: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada.html",
      lastVerifiedAt: checked,
      reviewStatus: "NEEDS_REVIEW",
    },
  },
  {
    slug: "ireland",
    name: "Ireland",
    code: "IE",
    flag: "🇮🇪",
    summary: "Critical Skills and the General Employment Permit.",
    overview:
      "Ireland uses employment permits for many people who want to work there. Critical Skills is for occupations in short supply. The General Employment Permit covers a wider set of jobs, often with a labour-market test. The Department of Enterprise, Trade and Employment publishes the rules.",
    workOpportunities:
      "A permit usually starts with a job offer from an Irish employer. Occupation, pay, and qualifications differ by permit. The official page has the current test.",
    typicalProfiles: [
      "You have a skill, and a prospective employer in Ireland.",
      "You are checking whether your role is on the current Critical Skills list.",
      "You are comparing the permit with the permission to live in Ireland that follows it.",
    ],
    keyChecks: [
      "A real job offer, and a real employer.",
      "Your occupation on the current list.",
      "Pay and qualifications for that permit.",
    ],
    faqs: [
      {
        question: "Where do I file an Irish employment permit?",
        answer:
          "Compare the routes here, then file with the Department of Enterprise, Trade and Employment. Permission to live in Ireland is a separate step with the Irish Immigration Service.",
      },
    ],
    source: {
      sourceName: "Department of Enterprise, Trade and Employment",
      sourceUrl: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/",
      lastVerifiedAt: checked,
      reviewStatus: "VERIFIED",
    },
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    summary: "Skilled Worker, Global Talent, and Scale-up.",
    overview:
      "The UK publishes work and talent routes, each with its own sponsor, salary rules, and evidence. Skilled Worker usually needs a licensed sponsor. Global Talent and Scale-up stand on their own. The Home Office keeps the current rules on GOV.UK.",
    workOpportunities:
      "Many people need an employer who can sponsor them. Talent routes look at recognition in a field. Sponsor, salary, and endorsement rules are on GOV.UK.",
    typicalProfiles: [
      "You are skilled, and you still need to confirm the sponsor and the salary.",
      "You have a record of recognition, and you want the Global Talent evidence in plain view.",
      "You are comparing a Scale-up offer with Skilled Worker before you spend.",
    ],
    keyChecks: [
      "A licensed sponsor, where the route asks for one.",
      "Salary and the occupation code.",
      "English language evidence.",
    ],
    faqs: [
      {
        question: "What makes a UK job sponsorable?",
        answer:
          "It depends on the employer’s licence, the occupation code, and the salary rules on GOV.UK.",
      },
    ],
    source: {
      sourceName: "GOV.UK visas and immigration",
      sourceUrl: "https://www.gov.uk/browse/visas-immigration/work-visas",
      lastVerifiedAt: checked,
      reviewStatus: "NEEDS_REVIEW",
    },
  },
]

export const pathways: Pathway[] = [
  {
    slug: "eu-blue-card",
    countrySlug: "germany",
    name: "EU Blue Card",
    category: "skilled",
    summary: "For qualified professionals with a job offer that meets the salary rules.",
    designedFor: "People with a recognised higher qualification, or equivalent experience where the rules allow it, and a concrete job offer in Germany.",
    description:
      "The EU Blue Card is a residence title for skilled work in Germany. Salary thresholds, shortage occupations, and qualification rules are on Make it in Germany.",
    requirements: [
      "A job offer in Germany.",
      "A qualification the route accepts.",
      "Salary at or above the threshold that applies to the role.",
      "Any language evidence the specific case needs.",
    ],
    documents: ["Passport", "Employment contract or offer", "Qualification evidence", "Proof of any required licence to practise", "Application form from the responsible authority"],
    nextSteps: ["Confirm the occupation and salary on the official page", "Check whether the qualification needs recognition", "Ask the employer which office receives the application"],
    typicalProfile: "A professional with a degree, several years of experience, and an employer ready to put the offer in writing.",
    source: {
      sourceName: "Make it in Germany — EU Blue Card",
      sourceUrl: "https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card",
      lastVerifiedAt: checked,
      reviewStatus: "NEEDS_REVIEW",
    },
  },
  {
    slug: "opportunity-card",
    countrySlug: "germany",
    name: "Opportunity Card",
    category: "work",
    summary: "For people who want to look for qualified work in Germany.",
    designedFor: "Skilled people who do not yet have a German job offer and want to understand the job-seeker option.",
    description:
      "The Opportunity Card is Germany’s points-based job-seeker route for skilled workers. Points, blocked-account amounts, and recognised qualifications are on the official page.",
    requirements: [
      "A qualification or experience profile the route can consider.",
      "Language evidence at the level the route currently asks for.",
      "Funds for the stay, often shown with a blocked account or declaration.",
      "Age and partial recognition can matter in the official points model.",
    ],
    documents: ["Passport", "Qualification documents", "Language certificate", "Proof of funds", "CV and employment evidence"],
    nextSteps: ["Read the current points factors on the official page", "Price a language course only after you know the level required", "List employers you could realistically approach"],
    typicalProfile: "A skilled graduate or experienced worker planning a job search rather than travelling with a contract.",
    source: {
      sourceName: "Make it in Germany — Opportunity Card",
      sourceUrl: "https://www.make-it-in-germany.com/en/visa-residence/types/opportunity-card",
      lastVerifiedAt: checked,
      reviewStatus: "NEEDS_REVIEW",
    },
  },
  {
    slug: "skilled-worker",
    countrySlug: "germany",
    name: "Skilled Worker",
    category: "skilled",
    summary: "For people with recognised training or a degree, and a job to match.",
    designedFor: "Applicants with a job offer that matches a qualification, including some vocational profiles.",
    description:
      "Germany’s skilled worker titles cover qualified work beyond the EU Blue Card. Recognition of vocational training is often the step that decides it. The current rules are on Make it in Germany.",
    requirements: [
      "A concrete job offer related to the qualification.",
      "A qualification that can be recognised, or a case that uses the experience provision.",
      "Any licence to practise for regulated professions.",
    ],
    documents: ["Passport", "Job offer", "Training or degree records", "Recognition notice where required", "CV and references"],
    nextSteps: ["Identify whether the profession is regulated", "Start qualification recognition if the official page says it is required", "Compare this route with the EU Blue Card before you choose"],
    typicalProfile: "A trained specialist or graduate with an employer and a qualification that may need a recognition decision.",
    source: {
      sourceName: "Make it in Germany — skilled workers",
      sourceUrl: "https://www.make-it-in-germany.com/en/visa-residence/types/skilled-workers",
      lastVerifiedAt: checked,
      reviewStatus: "NEEDS_REVIEW",
    },
  },
  {
    slug: "express-entry",
    countrySlug: "canada",
    name: "Express Entry",
    category: "skilled",
    summary: "The system Canada uses to manage several skilled programs.",
    designedFor: "Skilled workers comparing Canada’s main economic programs before they pay for tests and assessments.",
    description:
      "Express Entry is the system Canada uses to manage several skilled programs. Each program has its own rules, and invitations depend on draws published by IRCC.",
    requirements: [
      "Skilled work experience under the program’s definition.",
      "Language test results from a designated test.",
      "Education that the program can assess.",
      "Settlement funds, unless an exemption applies.",
    ],
    documents: ["Passport", "Language test", "Education credential assessment where required", "Employment reference letters", "Proof of funds"],
    nextSteps: ["Confirm which program inside Express Entry you might enter", "Budget for a language test before you assume a score", "Read the current official eligibility page"],
    typicalProfile: "A skilled worker with formal education, measurable language ability, and a few years of experience.",
    source: {
      sourceName: "IRCC — Express Entry",
      sourceUrl: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html",
      lastVerifiedAt: checked,
      reviewStatus: "NEEDS_REVIEW",
    },
  },
  {
    slug: "federal-skilled-worker",
    countrySlug: "canada",
    name: "Federal Skilled Worker",
    category: "skilled",
    summary: "A federal program, through Express Entry, for skilled work abroad.",
    designedFor: "People whose main case is foreign skilled experience, education, and language, rather than Canadian work experience.",
    description:
      "The Federal Skilled Worker Program has its own minimums and a selection grid. A strong grid on paper is still not an invitation to apply. Factors and pass marks are on the IRCC page.",
    requirements: [
      "Skilled work experience of the length the program states.",
      "Language ability at the stated minimum.",
      "Education and, where required, an assessment.",
      "Proof you meet the current selection factors.",
    ],
    documents: ["Passport", "Language results", "Education assessment", "Employment letters with duties and dates", "Proof of funds"],
    nextSteps: ["Read the eligibility page rather than a points calculator from an unofficial site", "Match your job duties to the experience definition", "Plan the language test early"],
    typicalProfile: "An experienced professional outside Canada with a degree and strong English or French.",
    source: {
      sourceName: "IRCC — Federal Skilled Worker",
      sourceUrl: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/federal-skilled-workers.html",
      lastVerifiedAt: checked,
      reviewStatus: "NEEDS_REVIEW",
    },
  },
  {
    slug: "provincial-nominee",
    countrySlug: "canada",
    name: "Provincial Nominee Programs",
    category: "work",
    summary: "Provinces and territories nominate people for permanent residence.",
    designedFor: "Applicants with a job offer, a study or work connection, or a skill a province is actively seeking.",
    description:
      "Each province publishes its own streams. Some are aligned with Express Entry and some are not. A nomination comes from the province.",
    requirements: [
      "A connection the specific stream accepts, such as a job offer or local experience.",
      "Language, education, and work criteria for that stream.",
      "Intent to live in the nominating province, where the stream requires it.",
    ],
    documents: ["Passport", "Stream-specific forms", "Job offer or provincial connection evidence", "Language and education documents"],
    nextSteps: ["Pick a province for a real reason you can explain", "Open that province’s official stream page", "Ignore unofficial lists of “open” occupations until you verify them"],
    typicalProfile: "A skilled worker with a provincial job offer or a clear reason to live in one province.",
    source: {
      sourceName: "IRCC — Provincial Nominee Programs",
      sourceUrl: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html",
      lastVerifiedAt: checked,
      reviewStatus: "NEEDS_REVIEW",
    },
  },
  {
    slug: "critical-skills",
    countrySlug: "ireland",
    name: "Critical Skills Employment Permit",
    category: "skilled",
    summary: "Ireland’s permit for jobs it treats as critically important.",
    designedFor: "Highly skilled people with a job offer in an occupation Ireland currently lists, at the remuneration the permit requires.",
    description:
      "The Critical Skills Employment Permit is aimed at skills Ireland wants to attract. Eligible occupations and pay floors are published by the Department of Enterprise, Trade and Employment. The list on this site is not that official list.",
    requirements: [
      "A job offer in the State.",
      "An occupation on the current Critical Skills list, or a role that meets the published remuneration rule.",
      "The qualification the permit expects for that occupation.",
    ],
    documents: ["Passport", "Signed employment contract", "Qualification evidence", "Employer documents requested on the official checklist"],
    nextSteps: ["Read the current Critical Skills page and occupations list", "Compare the offer with the published remuneration rule", "Use the department’s checklist, not a generic one"],
    typicalProfile: "A degree-level specialist with an Irish employer and a role that may sit on the shortage list.",
    source: {
      sourceName: "DETE — Critical Skills Employment Permit",
      sourceUrl: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/critical-skills-employment-permit/",
      lastVerifiedAt: checked,
      reviewStatus: "VERIFIED",
    },
  },
  {
    slug: "general-employment-permit",
    countrySlug: "ireland",
    name: "General Employment Permit",
    category: "work",
    summary: "A wider Irish work permit, for jobs the rules still allow.",
    designedFor: "Applicants with an Irish job offer in an occupation the General Employment Permit can consider.",
    description:
      "The General Employment Permit covers a wide range of jobs, with exclusions and, in many cases, a labour-market needs test. Those conditions are on the department’s site.",
    requirements: [
      "A job offer from an employer in Ireland.",
      "An occupation that is not on the ineligible list.",
      "Labour-market needs test, unless an exemption applies.",
      "Remuneration at the published minimum for this permit.",
    ],
    documents: ["Passport", "Employment contract", "Labour-market needs test evidence where required", "Qualification or experience evidence"],
    nextSteps: ["Check the ineligible occupations list", "Ask the employer whether a labour-market test is required", "Compare processing and family rules with Critical Skills before you choose"],
    typicalProfile: "A worker with a confirmed Irish offer in a role that is eligible but not necessarily on the Critical Skills list.",
    source: {
      sourceName: "DETE — types of employment permits",
      sourceUrl: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/",
      lastVerifiedAt: checked,
      reviewStatus: "VERIFIED",
    },
  },
  {
    slug: "employment-residence",
    countrySlug: "ireland",
    name: "Employment-based residence",
    category: "residence",
    summary: "Permission to live in Ireland, separate from the work permit.",
    designedFor: "People who already have, or are about to have, an employment permit and need to understand the residence step.",
    description:
      "An employment permit and permission to enter or remain are two different documents. The Irish Immigration Service publishes the residence steps, including stamp types and timelines.",
    requirements: [
      "The correct employment permit, or eligibility to apply for one.",
      "The entry or residence permission the Immigration Service describes.",
      "Any registration step after arrival.",
    ],
    documents: ["Passport", "Employment permit", "Residence or visa application evidence requested by the Immigration Service"],
    nextSteps: ["Separate the permit application from the immigration permission", "Read irishimmigration.ie for the current registration step", "Contact Ailes if your status is already complicated"],
    typicalProfile: "A permit holder, or a person with a permit application underway, planning arrival and registration.",
    source: {
      sourceName: "Irish Immigration Service",
      sourceUrl: "https://www.irishimmigration.ie/",
      lastVerifiedAt: checked,
      reviewStatus: "NEEDS_REVIEW",
    },
  },
  {
    slug: "skilled-worker",
    countrySlug: "united-kingdom",
    name: "Skilled Worker",
    category: "skilled",
    summary: "The main sponsored path for eligible jobs with a licensed UK sponsor.",
    designedFor: "People with a job offer from an employer that holds a sponsor licence, in an eligible occupation.",
    description:
      "Skilled Worker applications depend on a certificate of sponsorship, an eligible occupation code, and salary rules published on GOV.UK.",
    requirements: [
      "A licensed sponsor and a certificate of sponsorship.",
      "An eligible occupation code.",
      "Salary at the rate the route currently applies.",
      "English language at the required level.",
    ],
    documents: ["Passport", "Certificate of sponsorship reference", "English language evidence", "Maintenance evidence if the sponsor does not certify it", "Criminal record certificate where the role requires one"],
    nextSteps: ["Ask the employer for the sponsor licence number and occupation code", "Read the current salary rules on GOV.UK", "Do not pay a recruiter who promises a sponsor they cannot name"],
    typicalProfile: "A skilled employee with a UK employer that already sponsors, or is willing to sponsor, the role.",
    source: {
      sourceName: "GOV.UK — Skilled Worker visa",
      sourceUrl: "https://www.gov.uk/skilled-worker-visa",
      lastVerifiedAt: checked,
      reviewStatus: "NEEDS_REVIEW",
    },
  },
  {
    slug: "global-talent",
    countrySlug: "united-kingdom",
    name: "Global Talent",
    category: "talent",
    summary: "For leaders and potential leaders in academia, research, arts, or digital technology.",
    designedFor: "Applicants who can assemble independent evidence of recognition, often with an endorsing body.",
    description:
      "Global Talent is for people recognised in specific fields. Most applicants need an endorsement from a body named by the Home Office, or a listed prize. The evidence standard is on GOV.UK.",
    requirements: [
      "A field the route covers.",
      "Endorsement or a prize the route accepts.",
      "Evidence of recognition beyond your own description of your work.",
    ],
    documents: ["Passport", "Endorsement application or prize evidence", "Letters from recognised organisations", "A record of work the endorsing body asks for"],
    nextSteps: ["Confirm your field is covered", "Read that endorsing body’s evidence guide", "Compare the evidence burden with Skilled Worker before you start"],
    typicalProfile: "A researcher, founder, or artist with public recognition and independent referees.",
    source: {
      sourceName: "GOV.UK — Global Talent visa",
      sourceUrl: "https://www.gov.uk/global-talent-visa",
      lastVerifiedAt: checked,
      reviewStatus: "NEEDS_REVIEW",
    },
  },
  {
    slug: "scale-up",
    countrySlug: "united-kingdom",
    name: "Scale-up",
    category: "work",
    summary: "For people hired by a UK scale-up that meets the Home Office definition.",
    designedFor: "Applicants with a job offer from a sponsor that holds a Scale-up licence, at the published salary.",
    description:
      "Scale-up is a narrower path than Skilled Worker. The employer needs a licence for this route, and the salary test is its own. Both are on GOV.UK.",
    requirements: [
      "A job offer from a Scale-up sponsor.",
      "Salary at the published Scale-up rate.",
      "English language evidence.",
    ],
    documents: ["Passport", "Certificate of sponsorship", "English language evidence", "Job details that match the sponsorship"],
    nextSteps: ["Ask whether the employer’s licence is Scale-up, not only Skilled Worker", "Check the salary figure against the official page", "Treat sponsorship as unconfirmed until the certificate exists"],
    typicalProfile: "A higher-paid hire joining a UK company that has already qualified as a scale-up sponsor.",
    source: {
      sourceName: "GOV.UK — Scale-up Worker visa",
      sourceUrl: "https://www.gov.uk/scale-up-visa",
      lastVerifiedAt: checked,
      reviewStatus: "NEEDS_REVIEW",
    },
  },
]

export const resources: Resource[] = [
  {
    slug: "how-to-read-your-score",
    category: "Using Ailes",
    title: "How to read your score",
    summary: "What your 0–100 result is telling you.",
    readTime: "4 min",
    body: [
      "Your score is how your story lines up with a route.",
      "Strong potential means several of the usual signals are already in your profile. Potential means there is a real path, and a gap you can see. Needs improvement and limited fit mean the gaps are doing more of the work.",
      "Every result links to the official page. When a threshold, a list, or a fee matters, that page is the one to trust.",
    ],
  },
  {
    slug: "compare-before-you-pay",
    category: "Planning",
    title: "Compare countries before you spend",
    summary: "A calm order of operations for Germany, Canada, Ireland, and the UK.",
    readTime: "5 min",
    body: [
      "Language tests, credential checks, and translations cost money. Spend it after you know which route will actually use them.",
      "Start with the life you want: work, study, talent, or family. Then compare the four countries on occupation, language, and whether a job offer is usually part of the path.",
      "Keep one folder of identity, education, and work papers. The same documents often support more than one country. The form they must take is specific to each.",
    ],
  },
  {
    slug: "germany-pathways-compared",
    category: "Germany",
    title: "Germany: Blue Card, Skilled Worker, Opportunity Card",
    summary: "A job-offer path, and a path for people still looking.",
    readTime: "6 min",
    body: [
      "The EU Blue Card and the skilled worker titles usually start with a job. The Opportunity Card is for people who still need to find qualified work. Knowing which one you are on saves a language course, or a blocked-account deposit.",
      "Qualification recognition is the check people leave until last. If your profession is regulated, recognition is its own process.",
      "Read the current pages on Make it in Germany. Salary figures on blogs go stale.",
    ],
  },
  {
    slug: "canada-express-entry-plain",
    category: "Canada",
    title: "Canada Express Entry, in plain language",
    summary: "One system, several Canadian programs.",
    readTime: "5 min",
    body: [
      "Express Entry is how Canada manages applications. The Federal Skilled Worker Program is one program inside it. Provincial nominee streams may sit inside that system, or beside it.",
      "A language test and an education assessment are the costs most people meet on the way to a complete profile.",
      "Draws change. Read the current IRCC page next to your Ailes result.",
    ],
  },
  {
    slug: "ireland-critical-skills-checks",
    category: "Ireland",
    title: "Ireland Critical Skills: start here",
    summary: "The occupation list and the job offer come first.",
    readTime: "5 min",
    body: [
      "Critical Skills is an employment permit. It expects a job in Ireland, an occupation the department currently treats as eligible, and pay at the level the rules state.",
      "The General Employment Permit is the wider path, and it often includes a labour-market test. The permit is also separate from permission to enter and remain.",
      "The occupations list and the permit checklist live on the Department of Enterprise, Trade and Employment site. Residence steps live with the Irish Immigration Service.",
    ],
  },
  {
    slug: "uk-sponsorship-plain",
    category: "United Kingdom",
    title: "UK Skilled Worker, in plain language",
    summary: "A sponsor is usually the start of this path.",
    readTime: "5 min",
    body: [
      "Skilled Worker is a sponsored route. The employer needs a licence, the job needs an eligible occupation code, and the pay needs to meet the current rule.",
      "Global Talent is a different path. It looks for recognition in specific fields, and usually an endorsement. Scale-up needs a Scale-up sponsor, which is its own kind of licence.",
      "Confirm all three on GOV.UK. A recruiter’s screenshot is a conversation. A certificate of sponsorship is the document.",
    ],
  },
]

export const faqs = [
  {
    question: "What is Ailes?",
    answer:
      "Ailes helps you see which paths to Germany, Canada, Ireland, or the UK fit your story, and what to do next.",
  },
  {
    question: "How do I know which routes may fit?",
    answer:
      "Take the assessment. You get a score for each country, the reasons it landed there, the gaps, and a link to the official page.",
  },
  {
    question: "What does the score mean?",
    answer:
      "A fit from 0 to 100. Strong potential, potential, needs improvement, or limited fit. Every result shows why.",
  },
  {
    question: "What does the free assessment include?",
    answer:
      "Your background, education, work, languages, family, funds, and goals. Then a ranked set of routes, the gaps, and a plan.",
  },
  {
    question: "Can I speak to someone?",
    answer:
      "Yes. Write to us and tell us the country and the pathway you have in mind. We will pick it up from there.",
  },
  {
    question: "How current is the pathway information?",
    answer:
      "Every route shows the official page, the day we last checked the link, and whether it still needs a closer look.",
  },
]

export const plans: PlanFocus[] = [
  {
    id: "assessment",
    label: "All four countries",
    audience: "For anyone still choosing a country",
    essential: [
      "One profile: education, work, language, family, funds, and goals",
      "A score for Germany, Canada, Ireland, and the UK",
      "The reasons, the gaps, and the next steps",
      "The official page for every route",
    ],
    guided: [
      "A saved plan you can move forward, step by step",
      "A document checklist you can track",
      "A short brief of your profile and the routes that rose",
      "Your assessment, kept for you",
    ],
  },
  {
    id: "germany",
    label: "Germany",
    audience: "For a move built around work in Germany",
    essential: [
      "A read on the EU Blue Card, Skilled Worker, and the Opportunity Card",
      "A clear split between routes that expect a job and routes that do not",
      "Language and qualification gaps, called out",
      "Make it in Germany, linked on every route",
    ],
    guided: [
      "A Germany plan, in four phases",
      "A checklist for recognition, language, and work evidence",
      "A short brief you can keep with your papers",
    ],
  },
  {
    id: "canada",
    label: "Canada",
    audience: "For federal and provincial paths in Canada",
    essential: [
      "A read on Express Entry, Federal Skilled Worker, and the provinces",
      "Language-test and education gaps, called out",
      "Your result, next to the official IRCC page",
      "IRCC, linked on every route",
    ],
    guided: [
      "A plan for tests and reference letters",
      "A province shortlist from what you told us",
      "A short brief you can keep with your papers",
    ],
  },
  {
    id: "ireland",
    label: "Ireland",
    audience: "For a job and a life in Ireland",
    essential: [
      "A read on Critical Skills, the General Employment Permit, and residence",
      "The permit and permission to live there, kept as two steps",
      "Occupation and pay, with a pointer to the official page",
      "Links to the Department and the Immigration Service",
    ],
    guided: [
      "Questions worth asking an employer",
      "A document checklist aligned with the official one",
      "A note on the permit step, then the residence step",
    ],
  },
  {
    id: "united-kingdom",
    label: "United Kingdom",
    audience: "For sponsored work or a talent route in the UK",
    essential: [
      "A read on Skilled Worker, Global Talent, and Scale-up",
      "Sponsorship, called out where the route usually needs it",
      "The GOV.UK page for salary and sponsor rules",
      "GOV.UK, linked on every route",
    ],
    guided: [
      "Questions to send an employer before you resign",
      "An evidence list for talent routes",
      "A short brief of the route and what it asks you to show",
    ],
  },
]

export const steps = [
  { n: "01", title: "Tell us your story", text: "Education, work, language, family, and where you want to go." },
  { n: "02", title: "We map the paths", text: "We line your profile up with routes in Germany, Canada, Ireland, and the UK." },
  { n: "03", title: "See where you stand", text: "A score, the reasons, and the gaps, side by side." },
  { n: "04", title: "Take the next step", text: "A plan, the official pages, and what to gather first." },
]

export const features = [
  { title: "A plan built around you", text: "You start with where you want to go, and what you hope to do when you arrive." },
  { title: "Results you can understand", text: "Every score comes with reasons, gaps, and a next step. You can see why a path rose or fell." },
  { title: "The official page, one click away", text: "Each pathway links to the authority that publishes it, with the day we last checked the link." },
  { title: "A score that speaks plainly", text: "0 to 100. Strong potential, potential, needs improvement, or limited fit." },
  { title: "Clarity before you spend", text: "See the gaps while tests, translations, and other costs are still a choice." },
  { title: "Someone to talk to", text: "Name the country and the pathway. We will pick it up from there." },
]

export const startHere = [
  { href: "/countries/germany", title: "Germany", meta: "Blue Card, Skilled Worker, Opportunity Card" },
  { href: "/countries/canada", title: "Canada", meta: "Express Entry, Federal Skilled Worker, provinces" },
  { href: "/countries/ireland", title: "Ireland", meta: "Critical Skills and General Employment Permit" },
  { href: "/countries/united-kingdom", title: "United Kingdom", meta: "Skilled Worker, Global Talent, Scale-up" },
  { href: "/pathways", title: "Work and skilled routes", meta: "The paths people take with a job or a sponsor" },
  { href: "/pathways/united-kingdom/global-talent", title: "Talent routes", meta: "For people with a record of recognition" },
  { href: "/resources/compare-before-you-pay", title: "Study the differences", meta: "What to look at before you pay for tests" },
  { href: "/assessment", title: "Not sure where to start", meta: "A few questions. A clearer picture." },
]

export const illustrative = {
  name: "Example profile",
  rows: [
    { country: "Germany", score: 78, status: "Strong potential", pathway: "Opportunity Card" },
    { country: "Canada", score: 64, status: "Potential", pathway: "Express Entry" },
    { country: "Ireland", score: 82, status: "Strong potential", pathway: "Critical Skills Employment Permit" },
    { country: "United Kingdom", score: 59, status: "Potential", pathway: "Skilled Worker" },
  ],
}

export function getCountry(slug: string) {
  return countries.find((country) => country.slug === slug)
}

export function pathwaysFor(slug: string) {
  return pathways.filter((pathway) => pathway.countrySlug === slug)
}

export function getPathway(countrySlug: string, slug: string) {
  return pathways.find((pathway) => pathway.countrySlug === countrySlug && pathway.slug === slug)
}

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug)
}
