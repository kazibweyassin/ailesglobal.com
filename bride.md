https://www.wesbridgeassociates.co.uk/
Now I have a clear picture of the Wesbridge site. Let me analyze the key sections I need to replicate:

Navigation: Mega menu with dropdowns for For Businesses (Sponsorship, Global Business Mobility, Compliance & Growth, Business visas), For Individuals (Work visas, Family & settlement, Study & visit, Appeals), Resources (Calculators, Eligibility Checkers, Lookups, Company), About, Blog
Hero: "UK visas, sorted properly" with passport illustration, Book a consultation + Browse all services
Service Finder: "Search for the service you need" with dropdowns for audience and service
Stats: 230+ Companies, 25+ Countries, 15+ Years, 24/7 Support
Visa Eligibility Quiz: 3 questions
Wesbridge Speed: Timeline section
Why Choose Wesbridge: Speed, Excellence, Care pillars
Our Process: 5-step process
Free Immigration Tools: Calculators and lookups
Our Performance: Stats + testimonials carousel
Find the Right Service: Service finder form
FAQ: Accordion
Ready to Start: CTA
Contact Info: Phone, address, hours
Footer: Full site index
The current Ailes Global site has a simpler layout. I need to significantly expand it to match Wesbridge's complexity. Let me plan the implementation:

Update app/layout.tsx - Add mega menu, improve footer
Rewrite app/page.tsx - Full homepage with all sections
Update app/[slug]/page.tsx - Expand service pages
Update app/globals.css - Design tokens
Create new components for quiz, FAQ, testimonials
Let me start implementing. I'll work through each file systematically.

First, let me update the globals.css to match Wesbridge's color scheme. Wesbridge uses a blue color scheme (#58a9e8 is close to their blue). Let me look at their design more carefully.

From the Wesbridge site:

Primary blue: appears to be around #3189e2 or similar
Background: white/light
Text: dark navy
Cards with shadows
Rounded corners
The current Ailes Global already uses similar colors. Let me focus on the structural changes.

Let me start with the layout.tsx to add the mega menu, then the page.tsx for the homepage, then the slug pages, then components.

I'll create the new components first since they'll be used by the pages.

Let me plan the file structure:

app/layout.tsx - Root layout with mega menu
app/page.tsx - Homepage
app/[slug]/page.tsx - Service pages
components/mega-menu.tsx - Mega menu component
components/visa-quiz.tsx - Interactive quiz
components/faq-accordion.tsx - FAQ accordion
components/testimonial-carousel.tsx - Testimonial carousel
components/service-finder.tsx - Service finder form
Let me start implementing. I'll write the files in order of dependency.

Actually, let me be strategic. The layout needs the mega menu, so let me create that first, then the homepage, then the slug pages.
