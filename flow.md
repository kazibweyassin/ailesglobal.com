Act as a Senior Full-Stack Engineer and UX/UI Specialist. Build a high-conversion, multi-step conversational visa risk assessment funnel inspired by the Boundless UI/UX. The funnel must integrate smoothly into our existing platform.

### Tech Stack & Styling Guidelines:
- Frontend Framework: React (TypeScript) with Tailwind CSS.
- Styling: Minimalist, clean, high-trust aesthetic. Use high-contrast typography, plenty of whitespace, clear card borders, and prominent yellow-gold CTA buttons (#F2A900 or similar).
- Layout: Mobile-first responsive web design. Centered card layout with a clean progress tracking indicator at the top ("Find Match" / "Assess Risk").

### Step-by-Step Logic Workflow:
The component must manage a local multi-step state machine with the following sequence:

1. Step 1 (Intent Selection): Large radio cards asking "What can we help you with today?". Options: "I need help getting a green card or a fiancé visa", "I need help removing conditions from an existing green card", "I need help visiting the U.S. temporarily".
2. Step 2 (Trip Purpose): "What is your primary reason for visiting?". Options: "A vacation or business trip", "To work", "To study".
3. Step 3 (Travel History - Risk Mitigator): "In the past, have you traveled internationally and returned home?". 
   - If "Yes": Display an inline contextual box containing a green checkmark icon, bold text reading "RISK DECREASED", and explanation text: "Past international travel is one of the factors most often reviewed by consular officers. Returning home afterwards shows you're likely to do so after this trip too."
   - If "No": Proceed quietly.
4. Step 4 (Prior Rejection - Risk Multiplier): "Have you been denied a travel visa to your destination in the last 90 days?".
   - If "Yes": Display an inline warning box containing an information icon, bold text reading "RISK INCREASED", and explanation text: "Consular officers don't typically overturn recent denials, so it can be harder to get approved if you were recently denied. But it's still possible, and we'll assess your situation..."
5. Step 5 (The Value Gate / Lead Capture): A mandatory account creation screen blocking the final results. Big heading: "Create an account to see your travel visa denial risk and how we'll lower it". Provide Email and Password input fields, along with checkboxes for Privacy Policy/Terms and Marketing consent. A "Results" submission button triggers an API user registration event.
6. Step 6 (The Paywall & Dynamic Risk Report): Calculate a risk metric based on the previous responses and render a beautifully formatted premium dashboard displaying:
   - Travel Visa Denial Risk badge: "Low", "Slightly High", or "High" with corresponding color coding.
   - Price anchor: "Apply for \$195" with a prominent "Payment Options" checkout CTA link.
   - Expandable accordion list for "WHAT'S INCLUDED" (e.g., Application optimization tips, 24/7 expert chat access, Automated e-filing tools, and a 30-minute mock interview with a former consular officer).
   - "WHY TRUST US" credibility badges (e.g., Years in business, 100,000+ approvals, and rating snapshots from Trustpilot).

### Technical Requirements:
- Build clean, declarative state management handling tracking fields: `intent`, `purpose`, `hasTraveled`, `hasRecentDenial`, and user credentials.
- Provide callback hooks so that the final submit step can interface with our backend endpoint (`/api/register`) to automatically log user records.
- Provide a placeholder function `handlePaymentInit()` attached to the final CTA that can pass parameters out to our payment gateway.
- Ensure all inline explanation text boxes smoothly animate into view using Tailwind transitions when a user selects a radio button.
