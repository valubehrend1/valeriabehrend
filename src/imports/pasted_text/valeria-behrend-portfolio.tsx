Create a one-page portfolio website for Valeria Behrend, a Senior Web Developer with a strong background in Advertising Art Direction, UI/UX, design, and marketing.
The website must be a single-page scroll experience with sections stacked vertically. The final output must be implemented in React + TypeScript using Material UI, with styles created exclusively through MUI styled().
Do not use plain CSS files. Do not use inline styles unless absolutely necessary. Structure the project using clean, scalable architecture:
components/ dummy/presentational components only
hooks/
utils/
types/
styles/
Use concise, production-quality code with good TypeScript practices. Add clear className attributes to main visual and content elements so they can be easily identified in the browser inspector.
The visual style should be inspired by Russian Constructivism combined with a modern digital portfolio aesthetic. Use strong geometric composition, diagonal blocks, bold typography, high contrast, structured grids, asymmetry, and a palette based on red, black, off-white, warm beige, and small accents of electric blue or metallic gray. The design should feel artistic, strategic, technical, and premium — not retro or decorative only.
The website should feel like the portfolio of someone who bridges software engineering, art direction, design thinking, and marketing strategy.
General requirements:
One-page vertical scroll layout
Smooth section transitions
Responsive design for desktop, tablet, and mobile
Strong visual hierarchy
Large expressive typography
Modern interaction details
Accessible contrast
Clean component structure
Dummy data for projects and services
No lorem ipsum
Elegant micro-animations where appropriate
Website sections:
1. Hero / Home section
Create a striking opening section with the text:
“Valeria Behrend”
Subtitle:
“Software Engineering & Art Direction”
Add an attractive typography animation to the main name or subtitle. The animation should feel refined and editorial, not childish. It can use effects like staggered letter reveal, sliding geometric masks, subtle distortion, kinetic typography, or animated diagonal shapes.
The hero should immediately communicate senior technical expertise, visual sensitivity, strategic thinking, and creative direction.
Include a modern constructivist composition with geometric shapes, diagonal red and black elements, and a bold editorial layout.
1. About Me section
Title:
“About Me”
Include a placeholder for a portrait photo of Valeria. The placeholder should be part of the visual composition, not just a generic gray box. It can use a framed constructivist-style image container with diagonal borders, geometric overlays, or editorial labels.
Use this text, refined in polished English:
“I’m Valeria Behrend, a Senior Software Developer with a background in Advertising Art Direction and experience in digital marketing. My work lives at the intersection of technology, visual communication, and strategy.
Before moving fully into software development, I studied Advertising Art Direction in Argentina, where I built a strong foundation in concept, composition, branding, audience perception, and visual storytelling. Later, I trained in web development through several programs, including courses at UTN in Argentina and Le Wagon in Germany.
I spent five years in Germany working as a Front-End Developer and Design Lead, combining hands-on engineering with design direction, UI decisions, product thinking, and collaboration across multidisciplinary teams.
There is a real difference between a developer who learned design later and someone who was trained to think visually and communicatively before moving into code. Aesthetic judgment, understanding how a piece communicates, and making intentional visual decisions come from years of thinking about audience, brand, and message.
Today, I build digital products that are technically solid, visually intentional, and strategically aligned with business goals.”
The tone should be confident, elegant, direct, and professional.
1. Services section
Title:
“Services”
Create a visually strong services section with cards or structured blocks. Include these services:
Web & Mobile Development React, TypeScript, Node.js, Capacitor, Docker.
AI Chatbots & Integrations Custom chatbot flows, automation, and AI-powered integrations.
UI/UX with Design & Marketing Criteria Interfaces shaped by usability, visual direction, brand positioning, and audience behavior.
Maintenance & Product Evolution Improvements, refactors, new features, performance work, and long-term project support.
Extended Technical Team For complex, urgent, data-heavy, or AI-related projects, I can work with a trusted network of developers who can join the project when needed.
The section should communicate flexibility, seniority, and reliability.
1. Projects section
Title:
“Selected Projects”
Create 6 project cards using realistic placeholder content. Each card should include project title, short description, role, technologies, visual placeholder area, and CTA label such as “View case study”.
Use these dummy project examples that fit Valeria’s profile:
1. “E-commerce Front-End Platform” Role: Senior Front-End Developer Tech: React, TypeScript, MUI, REST APIs
2. “Mobile Hybrid App” Role: Web & Mobile Developer Tech: React, Capacitor, TypeScript
3. “AI Customer Support Chatbot” Role: Developer & Integration Consultant Tech: Node.js, AI APIs, Automation
4. “Design System & UI Modernization” Role: Design Lead & Front-End Developer Tech: React, MUI, Storybook
5. “Marketing Landing Page System” Role: Developer with Art Direction Tech: React, TypeScript, Analytics
6. “Legacy Product Evolution” Role: Front-End Developer Tech: React, Refactoring, Performance
The cards should use a constructivist-modern grid with strong borders, labels, numbers, diagonal image placeholders, and subtle hover animations.
1. Contact section
Title:
“Let’s work together”
Create a contact form with these fields:
Name
Email
Project type
Message
Add a submit button with strong visual styling.
Include supporting text:
“Have a project in mind, a product that needs improvement, or an idea that needs technical and visual direction? Let’s talk.”
The form does not need backend functionality. Use clean controlled components or a simple typed form state.
1. Footer
Create a footer with:
Valeria Behrend logo/text mark
LinkedIn link placeholder using: https://www.linkedin.com/in/valeria-behrend-5673101b2/
Optional email placeholder
Small closing line:
“Software Engineering × Art Direction × Strategy”
The footer should visually close the page with strong graphic balance.
Technical requirements:
Use React, TypeScript, Material UI, MUI styled(), functional components, dummy components / presentational components, reusable data arrays for services and projects, typed interfaces for services, projects, and form fields, utility helpers where useful, custom hooks only if they improve clarity, for example useContactForm, semantic HTML where possible, accessible labels for form fields, and className attributes on major DOM elements.
Suggested file structure:
src/types/index.ts Define interfaces: ServiceItem, ProjectItem, ContactFormState
src/data/services.ts Export services array.
src/data/projects.ts Export projects array.
src/hooks/useContactForm.ts Handle form state.
src/styles/theme.ts Create MUI theme with typography, colors, spacing, and breakpoints.
src/components/layout/PageShell.tsx Main wrapper.
src/components/sections/HeroSection.tsx Hero section.
src/components/sections/AboutSection.tsx About section.
src/components/sections/ServicesSection.tsx Services section.
src/components/sections/ProjectsSection.tsx Projects section.
src/components/sections/ContactSection.tsx Contact form section.
src/components/sections/Footer.tsx Footer.
src/components/ui/SectionTitle.tsx Reusable section title.
src/components/ui/ConstructivistShape.tsx Reusable decorative shape.
src/App.tsx Compose all sections.
Important visual direction:
Use bold editorial typography. Use diagonal and geometric layouts. Use red, black, and off-white as the foundation. Use modern spacing and clean composition. Avoid generic tech portfolio aesthetics. Avoid overly soft gradients. Avoid cliché developer visuals. Make the page feel memorable, curated, and intentional. The result should look like a professional personal brand site for a senior developer with art direction expertise.
Generate the full working code for the complete one-page website.
