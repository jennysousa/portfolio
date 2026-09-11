/* ============================================================
   Jennifer Sousa — Portfolio · i18n (PT ↔ EN)
   PT is the default HTML content (saved at runtime).
   EN translations are stored below.
   ============================================================ */
(function () {
  'use strict';

  var KEY = 'preferredLanguage';
  var DEFAULT = 'pt';

  /* ---- EN translations ---- */
  var en = {

    /* ========== SHARED (nav, footer, breadcrumb, contact CTA) ========== */
    's.skip':            'Skip to main content',
    's.nav.aria':        'Main navigation',
    's.nav.home':        'Home',
    's.nav.scope':       'Design Process',
    's.nav.experience':  'About me',
    's.nav.cases':       'Cases',
    's.nav.cases.b2b':   'B2B / B2B2C Payments',
    's.nav.cases.saas':  'SaaS Platform',
    's.nav.cases.b2c':   'B2C App',
    's.nav.cases.lead':  'Leadership',
    's.nav.about':       'Professional experience',
    's.nav.cta':         "Let\u2019s talk?",
    's.footer.copy':     '© 2026 Jennifer Sousa · Designed and developed with AI as copilot',
    's.footer.top':      'Back to top',
    's.footer.a11y':     'Accessibility verified · WCAG 2.1 AA',
    's.newtab':          '(opens in new tab)',
    's.copy.label':      'Copy email jenniferellen.18@gmail.com',
    's.backlink':        'Back to homepage',
    's.cta.eyebrow':     'Contact',
    's.cta.title':       'Let\u2019s <em>talk?</em>',
    's.cta.sub':         'If you\u2019d like to talk about design, leadership, or complex digital products, reach out.',
    's.cta.back':        'Back to homepage',

    's.lb.dialog':       'Image viewer',
    's.lb.close':        'Close',
    's.lb.prev':         'Previous image',
    's.lb.next':         'Next image',

    /* ========== HOME (index.html) ========== */
    'h.hero.title':   'I structure <em>design at scale</em> for products that need to perform.',
    'h.hero.desc':    'Welcome to my portfolio, I\u2019m Jenny, a product designer for over 10 years. I build solutions that reduce friction and increase conversion, combining deep technical UX expertise applied to business, always pairing craft with strategic vision in the work of helping people and teams grow alongside me.',
    'h.hero.meta1':   '12+ years in design',
    'h.hero.meta2':   '6+ years in B2B2C',
    'h.hero.meta3':   'UX Strategy · Generative AI · Leadership',
    'h.hero.cue':     'Scroll to explore',

    'h.hero.badge':   'Open to new opportunities',

    'h.missao.eyebrow': 'My mission',
    'h.missao.p':       'My name is Jenny, I\u2019ve worked in design since 2011, and over the last 10 years I\u2019ve specialized in building solutions for digital products. Along the way I also learned that good design is built together, which is why I invest as much in craft as in helping people and teams grow alongside me.',
    'h.processo.title': 'My design process',
    'h.processo.1.title': 'Immersion',
    'h.processo.1.body': 'I start with deep investigation, combining AI and, once the product is live, real data, to understand context, scenario, the problem and its causes.',
    'h.processo.2.title': 'Definition',
    'h.processo.2.body': 'Based on what I discover, I define the starting points. This is the most important validation in the process, it decides which problems get solved and where the hands-on work begins.',
    'h.processo.3.title': 'Ideation',
    'h.processo.3.body': 'With the problems defined, execution truly begins. Everything is created, tested, and validated internally before any delivery.',
    'h.processo.4.title': 'Functional prototyping',
    'h.processo.4.body': 'I use AI again to build a realistic prototype, functional enough to go to user testing before implementation.',
    'h.processo.5.title': 'Continuous validation',
    'h.processo.5.body': "Once implemented, the process doesn't stop. I track whether the hypotheses are solving the problem efficiently, or if it's time to adapt and test again. Data and behavior analysis is ongoing, this is where it all becomes a loop, going back to investigation.",
    'h.processo.loop': 'Back to 01 — Immersion',
    'h.missao.p2':      'I like turning ambiguous contexts into clearer processes, more consistent experiences, and better-informed product decisions.',

    'h.num.eyebrow':  'Leadership',
    'h.num.title':    'From technical craft to leadership.',
    'h.lead.body':    'After establishing myself as a technical reference, leadership came as a natural path. I started by leading three designers in the Telco area, one per carrier (Claro, Vivo, and TIM), and later went on to lead the entire Product Design team at Bemobi, doubling my team from 3 to 6 people with the addition of visual and content designers. I kept a hybrid role, combining management processes with technical practice. My purpose as a design leader has always been to help develop experiences, people, and businesses. It was during this period that I created, structured, and iterated on the DesignOps that still organizes the whole design area today.',
    'h.stat1.unit':   'years',
    'h.stat1.label':  'working with design',
    'h.stat2.unit':   'years',
    'h.stat2.label':  'in digital products',
    'h.stat3.unit':   'designers',
    'h.stat3.label':  'developed throughout my career',
    'h.stat4.label':  'years in leadership',
    'h.ctx2':         'My background combines people leadership, hands-on Product Design, process improvement, and close collaboration with product, engineering, business, and partner teams.',

    'h.cases.eyebrow':'Featured cases',
    'h.cases.title':  'Projects that represent how I work across <em>product, craft, and scale</em>.',
    'h.c1.kind':      'Smart Checkout Platform',
    'h.c1.name':      'Building from scratch a checkout that scales for any industry',
    'h.c1.desc':      'How we evolved a transactional payment journey, connecting UX, metrics, recurring billing and multiple methods like Pix, card, wallets and combined payment.',
    'h.c1.tags':      'Fintech · PaaS · UX Strategy · B2B2C · UX Metrics · Generative AI · White-label',
    'h.c1.cta':       'View case',
    'h.c2.kind':      'Leadership and DesignOps at Bemobi',
    'h.c2.name':      'From isolated designers to a team with culture, criteria and autonomy.',
    'h.c2.desc':      'How I organized rituals, quality criteria, competency matrix and tracking practices to bring clarity to operations and support the development of 6 designers in a Product Design team at a digital payments company.',
    'h.c2.tags':      'Design culture · Leadership · Generative AI · Product strategy · Technical mentorship',
    'h.c2.cta':       'View case',
    'h.c3.kind':      'B2B/B2B2C Platform',
    'h.c3.name':      'From manual configuration to a scalable platform powered by AI/ML',
    'h.c3.desc':      'The evolution of Loop, an offer and service orchestration platform for mobile carriers, expanding operations across Brazil and LATAM.',
    'h.c3.tags':      'AI/ML · Design System · SaaS · Telecom · Next Best Action',
    'h.c3.cta':       'View case',
    'h.c4.kind':      'B2C Product and B2B Platform',
    'h.c4.name':      'How we brought to life a local pharmacy solution that won a Camila Farani challenge',
    'h.c4.desc':      'Building an ecosystem where customers could find the best pharmacy product prices and place delivery orders.',
    'h.c4.tags':      'Healthtech · Delivery · UX Research · Usability Test',
    'h.c4.cta':       'View case',

    'h.contact.eyebrow': 'Ready to bring the next idea to life',
    'h.contact.title':   'Let\u2019s solve problems together?',
    'h.contact.sub':     'If you need someone who bridges strategic vision and UX execution, I\u2019m here.',

    /* ========== CASE DESIGNOPS ========== */
    'do.hero.kind':    'Case · Management · DesignOps',
    'do.hero.title':   'DesignOps &amp; Design Leadership',
    'do.hero.sub':     'How I structured a design operation to develop designers, increase UX maturity, and strengthen product decisions.',
    'do.hero.m1':      'Design Leadership',
    'do.hero.m2':      'DesignOps',
    'do.hero.m3':      'Technical mentoring',
    'do.hero.m4':      'Product strategy',
    'do.hero.m5':      'Design culture',

    'do.s01.title':    'Context',
    'do.s01.p1':       'In an environment of complex digital products, with multiple squads, stakeholders, simultaneous demands, and varying levels of UX maturity, I realized that design leadership needed to go beyond tracking deliverables. It was necessary to build an operation capable of giving the team clarity, developing designers, strengthening collaboration with product and engineering, and improving the quality of design decisions.',

    'do.s02.title':    'Problem',
    'do.s02.p1':       'The team needed more clarity about expectations, quality criteria, rituals, responsibilities, and growth paths. At the same time, designers worked in different contexts with product-specific challenges, which required leadership that preserved autonomy without losing alignment, consistency, and strategic vision.',

    'do.s03.title':    'My role',
    'do.s03.p1':       'I worked at the intersection of leadership, operations, and product strategy, structuring the design operation, supporting designer development, facilitating alignment and quality rituals, and strengthening the integration of design with product, engineering, and business areas.',
    'do.s03.p2':       'The work was not just about creating rituals or documents, but about turning a fragmented design operation into a clearer system of development, quality, and decision-making.',

    'do.s04.title':    'My approach',

    'do.b1.title':     'Hiring, onboarding, and expectation alignment',
    'do.b1.p1':        'The work started before someone joined the team. I participated in defining role scopes, setting expectations, outlining key challenges, and identifying growth opportunities. After hiring, I structured the onboarding experience so the person could understand the team\u2019s context, products, rituals, key collaborations, and the processes the team was responsible for.',
    'do.b1.p2':        'My goal was to create a safe space for questions, pushback, and adaptation, reducing initial anxiety and accelerating the person\u2019s autonomy in the team.',
    'do.b1.label':     'Supporting materials',
    'do.b1.cap1':      'First 30 / 60 / 90 days structure',
    'do.b1.cap2':      'Team rituals map',
    'do.b1.cap3':      'Initial alignment example with direct report',

    'do.b2.title':     'Career development, IDPs, and continuous feedback',
    'do.b2.p1':        'With designers already on the team, I maintained an individual follow-up routine through 1:1s, continuous feedback, and Individual Development Plans (IDPs). These conversations helped connect real day-to-day challenges with skills to develop, making the career plan more concrete and actionable.',
    'do.b2.p2':        'The IDP was not treated as a static document, but as a living tool to guide small steps of growth, reviewed periodically based on feedback, the person\u2019s goals, and team needs.',
    'do.b2.label':     'Supporting materials',
    'do.b2.cap1':      'Anonymized development plan (IDP) example',
    'do.b2.cap2':      'Competency matrix',
    'do.b2.cap3':      'Career path',

    'do.b3.title':     'Design reviews as a mechanism for quality and technical growth',
    'do.b3.p1':        'Design reviews were one of the main mechanisms for quality, alignment, and technical growth. More than reviewing screens, these sessions were used to understand the challenge received, the depth of discovery, the hypotheses considered, the solution planning, the data used, and the decision criteria.',
    'do.b3.p2':        'During reviews, I guided designers to explain the reasoning behind their decisions, connecting problem, user, business rule, technical feasibility, metrics, and final experience. This helped the team mature critical thinking, reduce decisions based solely on personal taste, and strengthen argumentation with stakeholders.',
    'do.b3.chk':       'Checklist that guided each design review',
    'do.b3.c1':        'What problem are we solving?',
    'do.b3.c2':        'What evidence supports this decision?',
    'do.b3.c3':        'What alternatives were considered?',
    'do.b3.c4':        'What UX risks exist?',
    'do.b3.c5':        'How does this connect to metrics?',
    'do.b3.c6':        'Is there impact on the design system?',
    'do.b3.c7':        'What needs to be validated?',
    'do.b3.c8':        'Which stakeholders need to be involved?',
    'do.b3.label':     'Supporting materials',
    'do.b3.cap1':      'Design review template',
    'do.b3.cap2':      'Quality criteria',

    'do.b4.title':     'Team rituals: health check, retrospectives, and continuous improvement',
    'do.b4.p1':        'To monitor team health and identify friction before it became a bigger problem, I adapted the Health Check methodology inspired by Spotify\u2019s model for the design team context. The ritual allowed designers to evaluate important dimensions of their routine, such as collaboration, clarity, autonomy, feeling safe to ask for help, relationship with stakeholders, delivery quality, and perception of growth.',
    'do.b4.p2':        'These sessions created a collective space to surface insecurities, blockers, and improvement opportunities, while generating concrete actions for process evolution.',
    'do.b4.p3':        'I also ran retrospectives to discuss specific projects, demands, or situations affecting the team. These moments helped identify what should be kept, adjusted, or escalated, and indicated when my involvement needed to be more direct or just strategic guidance.',
    'do.b4.label':     'Supporting materials',
    'do.b4.cap1':      'Health Check categories',
    'do.b4.cap2':      'Retrospective template',
    'do.b4.cap3':      'Insights from a rituals improvement survey',

    'do.b5.title':     'Design as product strategy, data, and scale',
    'do.b5.p1':        'My approach to DesignOps was not about creating processes for the sake of it, but about strengthening the role of design as part of product strategy. I encouraged a culture of deep discovery, documentation, stakeholder collaboration, and using data to inform decisions about the user journey.',
    'do.b5.p2':        'In complex products, especially with multiple journeys, business rules, and technical integrations, design needs to operate close to PMs, POs, engineering, and commercial teams. That\u2019s why I facilitated workshops, checkpoints, and co-creation sessions to expand designers\u2019 context and improve decision quality.',
    'do.b5.p3':        'I also worked on evangelizing the design system as a tool for scale, consistency, and efficiency, reinforcing that patterns are not just about standardizing the interface, but about reusing decisions, reducing rework, and building solutions better prepared for the future.',
    'do.b5.label':     'Supporting materials',
    'do.b5.cap1':      'Collaboration flows',
    'do.b5.cap2':      'Design System contributions',
    'do.b5.cap3':      'Documentation examples',

    'do.diag.label':   'Leadership system',
    'do.diag.lead':    'People, processes, and product evolving together.',
    'do.dim1':         'People',
    'do.dim2':         'Processes',
    'do.dim3':         'Product',
    'do.chip.hire':    'Hiring',
    'do.chip.onb':     'Onboarding',
    'do.chip.pdi':     'IDP',
    'do.chip.retro':   'Retrospectives',
    'do.chip.docs':    'Documentation',
    'do.chip.dados':   'Data',
    'do.chip.metricas':'Metrics',

    'do.s05.title':    'AI applied to design leadership and operations',
    'do.s05.p1':       'I used AI as a support layer for reading the team, the operation, and the product.',
    'do.s05.p2':       'With Rovo/Jira, I tracked demand patterns, workload, issue types, most requesting squads, and projects that were extending beyond expected timelines. These signals helped me understand where the team needed more guidance, prioritization, or support.',
    'do.s05.p3':       'With Claude, I deepened maturity analyses, organized process hypotheses, synthesized operational patterns, and explored ways to improve rituals, feedback, documentation, and decision-making.',
    'do.s05.p4':       'AI did not replace my judgment as a leader, but expanded my ability to observe the system, identify weak signals, and turn scattered data into practical direction.',
    'do.s05.cap1':     'AI applied to leadership and UX maturity',

    'do.s06.title':    'Actions taken',
    'do.s06.i1':       'Rituals for closer follow-up of 6 designers, organized by collectives and areas.',
    'do.s06.i2':       'Implementation of monthly design review rituals.',
    'do.s06.i3':       'Adjusted 1:1 frequency based on each person\u2019s maturity and follow-up needs.',
    'do.s06.i4':       'Conducted bimonthly Health Check with the design team.',
    'do.s06.i5':       'Individual IDP follow-up.',
    'do.s06.i6':       'Support across multiple squads, products, and business contexts.',

    'do.s07.title':    'Observed results',
    'do.s07.p1':       'Results were observed through the evolution of design review discussions, 1:1 records, IDPs, Health Checks, and the quality of team interactions with product and engineering stakeholders.',
    'do.s07.i1':       'Greater clarity about responsibilities, expectations, and quality criteria across the team.',
    'do.s07.i2':       'Designers more confident in asking for help, presenting their reasoning, and backing decisions with evidence.',
    'do.s07.i3':       'Deeper design reviews, with discussions less based on aesthetic opinion and more connected to problem, context, metrics, feasibility, and impact.',
    'do.s07.i4':       'Greater integration between design, PMs, POs, engineering, and business stakeholders.',
    'do.s07.i5':       'More consistency in deliverables through documentation, quality rituals, and design system usage.',
    'do.s07.i6':       'More concrete career support through 1:1s, continuous feedback, and periodically reviewed IDPs.',
    'do.s07.i7':       'Increased team maturity in discovery, argumentation, documentation, and cross-functional collaboration.',

    'do.s08.title':    'Learnings and next steps',
    'do.s08.p1':       'One of the main learnings was that design maturity is not built only with processes, but with repetition, listening, clarity, and safety for the team to grow technically. Rituals only create value when they help people make better decisions, collaborate more, and see the impact of their own work on the product.',
    'do.s08.p2':       'As an evolution, I began exploring the use of AI to accelerate analyses, structure hypotheses, support documentation, and expand designers\u2019 repertoire, without replacing the critical thinking that sustains good product decisions.',

    'do.next':         'Next case: Smart Checkout',


    'af.hero.kind':    'Case · Product Design · Pharmacy marketplace, app + backoffice',
    'af.hero.sub':     'How I built, solo, from scratch, a pharmacy shopping and delivery platform: a consumer app for finding, comparing, and receiving products, plus a backoffice for partner pharmacies to manage orders.',
    'af.hero.imgph':   'Hero image of the app (coming soon)',
    'af.f1.k':         'My role',
    'af.f1.v':         'Sole product designer on the project, owning it end-to-end, from discovery to launch.',
    'af.f2.k':         'Channels',
    'af.f2.v':         'Consumer mobile app (Flutter) and a desktop backoffice for order management used by partner pharmacies.',
    'af.f3.k':         'Team involved',
    'af.f3.v':         'Lean 10-person team. I formed the product duo with the PO, reporting directly to the CEO, and worked closely with the 3 developers and the tech lead to bring designed solutions to life.',
    'af.subnav.aria':  'Case sections',
    'af.nav.introducao': 'Introduction',
    'af.nav.pesquisa':   'Research',
    'af.nav.objetivos':  'Goals',
    'af.nav.solucoes':   'Solutions',
    'af.nav.resultados': 'Results',
    'af.nav.aprendizados':'Learnings',

    'af.s01.title':    'Project introduction',
    'af.s01.p1':       'The goal was to build, from scratch, a pharmacy shopping and delivery platform: a consumer app for finding, comparing, and receiving products, plus a backoffice for partner pharmacies to manage orders.',
    'af.s01.p2':       'On the user side, the pain point was the need to travel physically for simple purchases, the difficulty comparing prices across nearby pharmacies, and the lack of a remote option for more sensitive items. On the business side, the pain point was low digital presence among independent pharmacies, which accounted for 65% of the Brazilian pharmacy market (IQVIA data), in a sector moving R$124 billion a year, but losing ground to large chains with their own digital operations.',
    'af.s01.p3':       'The problem existed because the sector was, and largely still is, fragmented: many small players, low digitization, and no solution unifying price comparison and delivery into one simple experience. The idea originated from a pitch validated in investor Camila Farani\u2019s program, internally summarized as "the iFood of pharmacies."',

    'af.s02.title':    'Research',
    'af.s02.i1':       'Desk research: IQVIA market data (R$124B total market, 65% independent pharmacies), competitor and analogous-solution benchmarking.',
    'af.s02.i2':       'Initial ideation: Crazy 8s exercises and a CSD matrix (certainties, assumptions, doubts) to map what we already knew versus what needed validation.',
    'af.s02.i3':       'Quantitative research: survey run in partnership with CEFET Jr and ICTQ.',
    'af.s02.i4':       'Qualitative research: 14 contextual interviews, with a real age-range profile of participants.',
    'af.s02.i5':       'Personas: 4 personas built from the research (business owner, father, grandmother, psychologist), with the "grandmother" persona serving as the main anchor for the product\u2019s accessibility principles.',
    'af.s02.i6':       'Design principles: usability, accessibility, and UX writing, derived directly from user research.',

    'af.s03.title':    'Business goals vs. user goals',
    'af.s03.p1':       'Initial research pointed to a 35+ audience as the primary target, but real operation showed a much broader audience, including younger age groups buying not just medication but items from other categories that weren\u2019t the product\u2019s original bet.',
    'af.s03.p2':       'The purchasing-behavior hypothesis also didn\u2019t hold up: we expected "pain relief" to be the leading order category, but the top-selling item in the period was pregnancy tests, likely because buying that item at a physical pharmacy can feel embarrassing, something digital naturally solves.',
    'af.s03.p3':       'On the business side, the price-transparency promise ran into a dynamic that wasn\u2019t fully within our control: each partner pharmacy set its own discount margin, creating a quiet competition among partners over whose price would show up first as the best deal.',

    'af.s04.title':    'Solutions',
    'af.s04.parta':    'a) Solution process',
    'af.s04.a.p':      'Card sorting and information architecture to organize product categories. Core user flows designed: sign-up, purchase, favorites, and order cancellation. Sketches, wireframes, and a full style guide (colors, typography, buttons, forms) evolving into final UI screens.',
    'af.s04.partb':    'b) Decisions with exposed rationale',

    'af.k.contexto':   'Context',
    'af.k.decidido':   'What was decided',
    'af.k.porque':     'Why',

    'af.b1.title':     'Box 1 · Risk of mismatch between research and real audience',
    'af.b1.contexto':  'The product\u2019s foundational research was conducted in the Tijuca neighborhood, but the MVP would actually run in Niter\u00f3i.',
    'af.b1.decidido':  'I flagged this risk to the team before go-live, anticipating that the real audience could differ from the researched one.',
    'af.b1.porque':    'Catching this kind of mismatch early avoids the team only noticing the problem after launch, when it\u2019s more expensive to fix.',

    'af.b2.title':     'Box 2 · Out-of-stock items',
    'af.b2.contexto':  'The requested product wasn\u2019t always available at the pharmacy at the time of purchase.',
    'af.b2.decidido':  'I designed a similar-product suggestion feature, showing the price difference between the original item and the substitute.',
    'af.b2.porque':    'It avoided losing the entire sale over a single missing item, and gave the user a clear alternative instead of a dead-end error.',
    'af.b2.ph':        'Similar-product suggestion (coming soon)',

    'af.b3.title':     'Box 3 · Digitizing controlled-medication sales',
    'af.b3.contexto':  'In 2019, this flow barely existed digitally in the Brazilian market, purchases were in-person only.',
    'af.b3.decidido':  'I designed and helped implement the full flow, prescription upload through the app, validation by the pharmacy itself, and physical prescription pickup by the courier at delivery.',
    'af.b3.porque':    'It was a high-demand category no direct competitor offered digitally, and solving it safely (keeping the pharmacy\u2019s human validation step) became a real differentiator.',

    'af.b4.title':     'Box 4 · Interface for the most vulnerable user (the "grandmother" persona)',
    'af.b4.contexto':  'A meaningful part of the audience had low digital familiarity and needed a friction-free, unambiguous experience.',
    'af.b4.decidido':  'Larger typography, a simplified visual hierarchy with a single obvious path per screen, higher contrast on action elements, and direct UX writing free of technical jargon or generic category names.',
    'af.b4.porque':    'Designing for the most demanding edge of the audience raised the clarity bar for every other user profile too.',

    'af.b5.title':     'Box 5 · Ongoing user care',
    'af.b5.contexto':  'Part of the 35+ user base used medication on an ongoing basis, and both research and user feedback pointed to a real risk of missed doses and lapsed prescriptions, alongside the business risk of losing touch with the user between purchases.',
    'af.b5.decidido':  'I designed the "My Reminders" feature, letting users register each medication with an alert time, frequency (daily or weekly), treatment start and end dates, and quick access to the attached prescription, with both a calendar view and a daily view.',
    'af.b5.porque':    'The decision was dual from the start. Ongoing user care was part of the product\u2019s mission, and bringing users back to the app regularly had real business value. I didn\u2019t treat one as a trade-off against the other, both aligned in the same solution.',
    'af.b5.note':      'No quantitative result available specifically for this feature.',
    'af.b5.ph1':       '"My Reminders" screen (coming soon)',
    'af.b5.ph2':       '"My Reminders" screen · detail (coming soon)',

    'af.tech.title':   'Technical collaboration',
    'af.tech.contexto':'The PO pushed for a virtual assistant guiding the user step by step through each stage of the purchase, wizard-style.',
    'af.tech.decidido':'Working with one of the developers, I built the case that the assistant should help without being invasive, avoiding annoyance instead of easing the flow. We added a "don\u2019t show this again" button, a pattern already familiar to Android users, the predominant OS among the app\u2019s registered users.',
    'af.tech.porque':  'Closeness with the development team let me pair technical and UX arguments to reverse a product decision that, without that counterpoint, would have turned into a more invasive than useful experience.',

    'af.s05.title':    'Results',
    'af.s05.p1':       'The MVP launched with 6 active partner pharmacies. I ran usability testing with 5 real users, both pre-launch (validating the core job to be done) and post-launch (applying SUS methodology to guide the following UX roadmap). We implemented a star-based satisfaction rating (CSAT), which reached an average of 4.4 out of 5. The referral program (member get member) carried meaningful weight in acquisition: approximately 30% of new sign-ups in the period came through it. I tracked the first 4 months of real operation before leaving the company.',
    'af.r1.unit':      '/ 5',
    'af.r1.label':     'Average CSAT validated in real operation',
    'af.r2.unit':      'pharmacies',
    'af.r2.label':     'active pharmacies at MVP launch',
    'af.r3.label':     'of new sign-ups came from the referral program',

    'af.s06.title':    'Learnings / Closing',
    'af.s06.p1':       'Being the product\u2019s sole designer took away the safety net of having another design person nearby to validate what counted as a good visual standard. It pushed me to research far more market references, e-commerce, other apps, design in general, because I was the team\u2019s own visual reference point. That raised the bar I hold myself to today with my deliverables, and shaped a lot of how detail-oriented I still am with UI.',
    'af.s06.p2':       'The star rating reached a solid average (4.4 out of 5), but we had no text field to capture qualitative feedback, so we knew the experience was well-rated without fully understanding why. Also, a large share of users left the app without rating it at all, expected behavior once they\u2019d already received the product at home. This taught me the difference between "collecting some feedback" and "collecting the right feedback": a number on its own, without qualitative context, isn\u2019t enough to prioritize what to improve first.',
    'af.s06.stmt':     '"I learned that a good visual standard doesn\u2019t come from the opinion of whoever\u2019s on your team, it comes from researching real market references. That sharpened my eye for craft, a standard I still hold myself to today."',
    'af.next':         'Next case: DesignOps',
    'af.s02.stat1.unit':  'B',
    'af.s02.stat1.label': 'annual revenue of the pharmaceutical market',
    'af.s02.stat2.label': 'of pharmacies are currently independent',
    'af.s02.stat3.label': 'of the market\u2019s total revenue',
    'af.s02.stat.foot':   '*IQVIA data, 2019.',
    'af.s02.stat4.label': 'place orders by phone',
    'af.s02.stat5.label': 'favorability toward an app solving this problem',
    'af.s02.stat6.label': 'would use the app',
    'af.s02.stat2.foot':  '*Survey with CEFET, 167 forms answered.',

    /* ========== CASE SMART CHECKOUT ========== */
    'sc.hero.kind':    'Case · Product Design Leadership · Payments platform',
    'sc.hero.title':   'Smart Checkout',
    'sc.hero.sub':     'How I led UX in a white-label payments platform with intelligent orchestration, multiple channels, methods, and configurable rules, organizing technical and business complexity into a clearer, more reliable, and scalable experience.',
    'sc.hero.role.b':  'Lead Product Designer · UX technical reference',
    'sc.hero.role.s':  'White-label payments platform, recurrence, and billing B2B2C.',
    'sc.hero.m1':      'Product Design Leadership',
    'sc.hero.m2':      'UX Strategy',
    'sc.hero.m3':      'Payments',
    'sc.hero.m4':      'B2B2C',
    'sc.hero.m5':      'White-label Platform',
    'sc.hero.m6':      'Design System',
    'sc.hero.m7':      'UX Metrics',
    'sc.hero.m8':      'Data-informed Design',
    'sc.hero.m9':      'Financial UX',

    'sc.hs1.fig':      '3 <em>formats</em>',
    'sc.hs1.label':    'of integration: standalone, iFrame, and native SDK',
    'sc.hs2.fig':      '5+ <em>industries</em>',
    'sc.hs2.label':    'telecom, utilities, education, health, ISPs, and recurring services',
    'sc.hs3.fig':      '+30 <em>partners</em>',
    'sc.hs3.label':    'enterprise integrated into the white-label platform',
    'sc.hs4.fig':      '14+ <em>methods</em>',
    'sc.hs4.label':    'Pix, cards, wallets, boleto, recurrence, and combinations',
    'sc.hs5.fig':      'R$ 3.5 <em>bn</em>',
    'sc.hs5.label':    'in TPV reported in Q1 2026, considering the company\u2019s payments operation, per public release',

    'sc.s01.title':    'Context',
    'sc.s01.p1':       'Smart Checkout was a white-label payments platform with an intelligent orchestration layer and configurable rules. It served different industries, including telecom, utilities, education, health, ISPs, and recurring services.',
    'sc.s01.p2':       'The platform supported contexts such as utility bills, top-ups, tuition, debts, negotiation, subscriptions, and recurrence. The experience needed to work in standalone, iFrame, and native SDK for iOS and Android.',
    'sc.s01.p3':       'Behind a simple journey were payment methods, commercial rules, security validations, error states, fallback, installments, billing, and per-partner customizations.',
    'sc.s01.p4':       'Beyond digital channels, the same payments umbrella included POS, used in in-person collections such as door-to-door utility billing, school and university payments, and kiosks at physical locations. The reported TPV considers the overall payments operation, combining digital and in-person channels.',
    'sc.s01.closing':  'The complexity was less about each individual method and more about the <em>combination</em> of channels, rules, security, payer behavior, and the commercial needs of each industry.',
    'sc.s01.cap':      'Systemic view',

    'sc.s02.title':    'The challenge',
    'sc.s02.p1':       'The product was built progressively. As new partners, industries, methods, and rules came in, complexity grew. The challenge was to evolve quickly without creating fragmentation.',
    'sc.s02.p2':       'Each new method added validations, states, terms, messages, and exceptions. Each partner brought a different commercial need. Each channel required its own experience strategy.',
    'sc.s02.p3':       'Each adaptation needed to answer a central question before becoming a screen.',
    'sc.s02.stmt':     'Does this decision only address a specific request, or does it <em>strengthen the platform</em> for the next partners, channels, and industries?',
    'sc.s02.cap':      'Product ecosystem',

    'sc.s03.title':    'My role',
    'sc.s03.blk':      'My role as UX technical reference',
    'sc.s03.p1':       'I served as Lead Product Designer and UX technical reference for Smart Checkout, leading the experience evolution in a complex payments platform. My work combined designer management, technical direction, design review, pattern definition, accessibility, UX writing, prioritization, roadmap, data, and Celeste Design System governance.',
    'sc.s03.p2':       'I did not act as the sole executor of solutions. I led, directed, reviewed, approved, and rejected design decisions, while also sketching initial paths and point solutions when needed. On Smart Checkout, I supported a senior designer and a junior designer. I also worked in partnership with visual design and content design to ensure consistency, clarity, and quality in the final experience.',
    'sc.s03.p3':       'Beyond Smart Checkout, my leadership also covered the designer responsible for the POS terminal experience, within the same payments umbrella, ensuring alignment of patterns, UX consistency, and integration with the Celeste Design System.',

    'sc.s03.a1.name':  'Experience architecture',
    'sc.s03.a1.desc':  'I directed flows, patterns, information hierarchy, states, and display rules to maintain coherence across channels.',
    'sc.s03.a2.name':  'Design quality',
    'sc.s03.a2.desc':  'Design review, UX and UI criteria, accessibility, UX writing, component validation, and Celeste governance.',
    'sc.s03.a3.name':  'Product strategy',
    'sc.s03.a3.desc':  'Prioritization via OKRs, data analysis, roadmap, and alignment with PM, engineering, data, commercial, and leadership.',
    'sc.s03.closing':  'My role was to make complexity understandable for the team and <em>simpler for the user</em>.',
    'sc.s03.label':    'Three layers of action',

    'sc.s04.title':    'My approach',
    'sc.s04.blk':      'From incremental evolution to a scalable platform',
    'sc.st1.n':        '01', 'sc.st1.t': 'Map the system',        'sc.st1.d': 'Understand industries, channels, methods, rules, integrations, risks, and behaviors before proposing interface.',
    'sc.st2.n':        '02', 'sc.st2.t': 'Organize information architecture', 'sc.st2.d': 'Define how methods, installments, states, validations, recurrence, and fallback should appear without overloading the journey.',
    'sc.st3.n':        '03', 'sc.st3.t': 'Turn exceptions into patterns', 'sc.st3.d': 'Separate one-off requests from real platform opportunities, preserving consistency and flexibility.',
    'sc.st4.n':        '04', 'sc.st4.t': 'Use data to decide',     'sc.st4.d': 'Analyze conversion, errors, method adoption, channels, installments, recordings, and funnels to move decisions beyond opinion.',
    'sc.st5.n':        '05', 'sc.st5.t': 'Scale quality with Design System', 'sc.st5.d': 'Create components, patterns, and criteria to align web, iFrame, and SDK without ignoring each channel\u2019s own logic.',
    'sc.s04.cap':      'UX fronts for product strategy',

    'sc.s05.title':    'Decisions that scaled the product',
    'sc.s05b1.title':  'Architecture for multiple methods and channels',
    'sc.s05b1.p1':     'The product needed to support methods with very different logics within three integration formats. Web and iFrame followed a one-page experience with expandable and collapsible sections. The SDK was native, paginated, and better suited for app contexts. The design decision was to preserve clarity and consistency without forcing the same interface across all channels.',
    'sc.s05b1.i1':     'Pix, cards, wallets, boleto, recurrence, and combinations required different flows, states, and messages.',
    'sc.s05b1.i2':     'Some options depended on device, operating system, channel, or eligibility.',
    'sc.s05b1.i3':     'Consistency meant preserving the decision logic, without repeating the same interface everywhere.',
    'sc.s05b1.cap':    'Product format/channel adaptability',

    'sc.s05b2.title':  'Configurable rules with product criteria',
    'sc.s05b2.p1':     'The checkout allowed customizations by partner, channel, product, profile, device, and commercial strategy. My role was to help define what should be configurable, what should become a platform standard, and what should not be allowed because it would compromise consistency, conversion, or scale.',
    'sc.s05b2.i1':     'Method order, displayed sections, installment slots, and recommended installment could vary.',
    'sc.s05b2.i2':     'Wallets and specific methods depended on technical context, such as operating system and availability.',
    'sc.s05b2.i3':     'Partner requests were evaluated as product hypotheses, not just as commercial demands.',
    'sc.s05b2.tag':    'Example · Partner negotiation',
    'sc.s05b2.ex':     'In a negotiation, the request was to highlight the 1-installment payment option. Since this could affect the share of installment transactions, I proposed keeping the three planned recommendations and adding the 1-installment option as a fourth initial choice. The solution preserved the commercial strategy, met the partner\u2019s need, and avoided compromising the selection experience.',
    'sc.s05b2.cap':    'Product customization framework',

    'sc.s05b3.title':  'Clarity in validations, security, and fallback',
    'sc.s05b3.p1':     'The platform had internal anti-fraud, 3D Secure, zero dollar, ID Check on Click to Pay, and external authentications. These moments required clarity without excessive information exposure. In some errors, the message needed to guide the user without revealing details that could open security gaps or violate LGPD limits.',
    'sc.s05b3.i1':     '3D Secure took the user to authentication in the issuing bank\u2019s environment.',
    'sc.s05b3.i2':     'Zero dollar validated the card before installment selection.',
    'sc.s05b3.i3':     'Card errors needed to guide without explicitly mentioning fraud.',
    'sc.s05b3.i4':     'Pix was the main fallback for card failures.',
    'sc.s05b3.i5':     'Biometric Pix or wallet failures directed users to more viable alternatives.',
    'sc.s05b3.close':  'The goal was to preserve the payment intent, sustain conversion, and <em>maintain trust</em> in moments where the journey could break.',

    'sc.s05b4.title':  'Scale through Design System, data, and AI',
    'sc.s05b4.p1':     'The Celeste Design System helped create consistency and speed in a platform growing in methods, channels, and rules. It was not just a visual library. It worked as a decision layer for components, states, interactions, documentation, validation, and handoff with engineering. Celeste also supported other payment fronts, such as invoice listing and POS, helping maintain consistency across digital and in-person channels.',
    'sc.s05b4.i1':     'Components like inputs, buttons, cards, bottom sheets, modals, error states, loading, and installment selection were critical for the checkout.',
    'sc.s05b4.i2':     'Storybook bridged Figma and implementation.',
    'sc.s05b4.i3':     'PostHog, session recordings, and AI helped investigate behavior, formulate hypotheses, and support decisions.',
    'sc.s05b4.i4':     'Dashboards provided quantitative vision. Recordings helped understand the context behind the numbers.',
    'sc.s05b4.close':  'AI did not make design decisions. It helped the team <em>investigate better</em>, accelerate analyses, and qualify product discussions.',
    'sc.s05b4.cap1':   'Celeste design token naming',
    'sc.s05b4.cap2':   'Component approval workflow',

    'sc.s06.title':    'Observed results',
    'sc.s06.p1':       'The main result was consolidating Smart Checkout as a payments platform better prepared to scale across industries, channels, and methods, with clearer decision-making, experience consistency, and analytical maturity.',
    'sc.s06.p2':       'In a recent 6-month window, the advance rate from payment request to payment attempt across SDK, iFrame, and standalone channels showed recurring growth of approximately 5 percentage points per month, even with new partners joining and increasing operational complexity.',
    'sc.s06.p3':       'This result reflected a joint effort of product, engineering, commercial, partners, and operations, while UX contributed with journey clarity, behavior analysis, fallback improvements, and more data-driven decisions.',
    'sc.s06.r1.k':     'Product',
    'sc.s06.r1.i1':    'Platform prepared for multiple industries, channels, and methods.',
    'sc.s06.r1.i2':    'Clearer architecture for complex methods and configurable rules.',
    'sc.s06.r1.i3':    'Better error handling, fallback, and retry.',
    'sc.s06.r2.k':     'Team',
    'sc.s06.r2.i1':    'UX more present in roadmap, OKRs, and strategic decisions.',
    'sc.s06.r2.i2':    'Designers closer to data, funnels, recordings, and metrics.',
    'sc.s06.r2.i3':    'Design review with clearer quality, accessibility, and consistency criteria.',
    'sc.s06.r3.k':     'System',
    'sc.s06.r3.i1':    'Celeste brought consistency across products and channels.',
    'sc.s06.r3.i2':    'Storybook bridged Figma, design review, and engineering.',
    'sc.s06.r3.i3':    'Customizations gained clearer product and scale criteria.',

    'sc.s07.title':    'Learnings',
    'sc.s07.p1':       'In financial products, simplicity does not mean the absence of complexity. It means organizing complexity so the user can make decisions with clarity, confidence, and trust.',
    'sc.s07.p2':       'The challenge was to let the product grow in methods, channels, rules, and validations without letting that complexity reach the user in a disorganized way.',
    'sc.s07.stmt':     'My main contribution was helping the team turn that complexity into <em>experience architecture</em>, decision criteria, reusable patterns, and more data-driven discussions.',

    'sc.next':         'Next case: Loop',

    /* ========== CASE LOOP ========== */
    'lp.hero.kind':    'Case · Product Design · Platform',
    'lp.hero.title':   'Loop',
    'lp.hero.sub':     'How we turned a manual offer operation into a digital orchestration platform for emerging markets, driven by data, channels, and behavior.',
    'lp.hero.m1':      'Internal platform',
    'lp.hero.m2':      'Design System',
    'lp.hero.m3':      'AI/ML',
    'lp.hero.m4':      'Next Best Action',
    'lp.hero.m5':      'Telecom',
    'lp.hero.m6':      'PaaS',

    'lp.s01.title':    'Context',
    'lp.s01.p1':       'Loop was a Digital Engagement Platform for configuring and personalizing digital offers across operator channels: web portals, SMS, IVR, USSD, and navigation flows. Internal teams used it to operate campaigns, services, and offers for operators like Vivo, TIM, Claro, Telcel, Entel, and Movistar, among other partners in emerging markets.',
    'lp.s01.p2':       'It worked as an orchestration layer between channels, offers, business rules, and behavioral data, delivering the right offer, in the right channel, at the right time for each user.',
    'lp.s01.p3':       'In prepaid, there are critical moments when the user runs out of balance or data and needs to resolve navigation quickly. In these scenarios, they reached <em>captive portals</em> with alternatives such as top-up, balance loan, data loan, or value-added services.',
    'lp.s01.cap':      'Systemic view',

    'lp.s02.title':    'Problem',
    'lp.s02.p1':       'Before the evolution, much of the campaign setup was manual, with specific rules per channel, project, and partner. This made the operation slow, fragmented, and hard to scale.',
    'lp.s02.p2':       'The challenge was not just configuring offers, but transforming a manual operation into a product capable of learning from user behavior and supporting data-driven decisions.',
    'lp.s02.p3':       'Without this shift, the operation would remain stuck with isolated rules, low standardization, and little reuse, limiting adaptation by partner, country, and channel. The goal was to turn an administrative tool into an orchestrator capable of combining business rules, segmentation, behavioral data, and Next Best Action.',
    'lp.s02.cap':      'Before and after the operation',

    'lp.s03.title':    'My role',
    'lp.s03.p1':       'I worked as Senior Product Designer on Loop from October 2019 to July 2023, being the only dedicated designer for most of the product\u2019s evolution.',
    'lp.s03.p2':       'I combined user research with internal users, flow design, information architecture, legacy feature redesign, new features, usability testing, documentation, and Design System evolution.',
    'lp.s03.p3':       'From July 2023 on, after moving into management, I continued supporting the product at a leadership level, guiding the designer who took over direct work on Loop.',
    'lp.s03.p4':       'I had autonomy to lead discoveries, propose solutions, and translate technical, commercial, and operational needs into viable product flows, always aligned with Product, Engineering, Data, and Commercial. I maintained close contact with internal users\u2014especially Marketing and Growth &amp; Performance\u2014who ran campaigns and provided feedback on bottlenecks and opportunities.',
    'lp.s03.blk':      'Cross-functional collaboration',
    'lp.s03.collab1':  'Although my direct role was as Senior Product Designer, Loop required constant collaboration with Product, Engineering, Growth &amp; Performance, Marketing, Data, and Commercial. This proximity was essential to turn technical rules, commercial goals, and operational needs into viable platform flows.',
    'lp.s03.collab2':  'I worked in partnership with PM, Head of Product, Engineering, Growth &amp; Performance, Marketing, and Marketing Coordination, while maintaining frequent contact with internal operations users.',

    'lp.s04.title':    'My approach',

    'lp.b1.title':     'Understanding users\u2019 real operation',
    'lp.b1.p1':        'The work started with a deep understanding of the operation of the teams that used Loop daily, mainly Marketing and Growth &amp; Performance.',
    'lp.b1.p2':        'These teams configured portals, channels, services, offers, and display rules. After publishing, Growth &amp; Performance tracked results and fed learnings back to improve future setups.',
    'lp.b1.p3':        'Research, interviews, usability tests, and contextual observation revealed bottlenecks that did not appear in formal requirements, such as operators frequently using multiple tabs, something the product had not anticipated.',

    'lp.b2.title':     'Design System as scale infrastructure',
    'lp.b2.p1':        'My biggest contribution on Loop was creating and evangelizing the platform\u2019s Design System. The product had grown with legacy features, inconsistent patterns, and components built for very specific needs, tied to old product and technology decisions.',
    'lp.b2.p2':        'We did not stop the product to redesign everything. The evolution was gradual: organizing components, mapping patterns, separating legacy, current, and future versions, and gaining consistency with each delivery. I used a logic inspired by Atomic Design, documented in Storybook, to align reuse and maintenance with Engineering.',
    'lp.b2.p3':        'The Design System was not an aesthetic layer. It was product infrastructure: consistency and speed for Product, reuse and maintenance for Engineering, clarity and reliability for Commercial, and legacy evolution without stopping the product.',
    'lp.b2.cap1':      'Design System token construction',
    'lp.b2.cap2':      'Visual foundations',
    'lp.b2.cap3':      'Inputs and forms',
    'lp.b2.cap4':      'Component handoff',
    'lp.b2.flow.label':'Gradual component evolution',
    'lp.b2.fk1':       'Legacy', 'lp.b2.fv1': 'Legacy component', 'lp.b2.fn1': 'Built for a specific need, with legacy technical limitations.',
    'lp.b2.fk2':       'Current', 'lp.b2.fv2': 'Consolidated pattern', 'lp.b2.fn2': 'Organized by levels, documented, and reusable.',
    'lp.b2.fk3':       'Future', 'lp.b2.fv3': 'Scalable component', 'lp.b2.fn3': 'Prepared for new business rules and partners.',
    'lp.b2.val.label': 'Value by area',
    'lp.b2.vk1':       'Product', 'lp.b2.vv1': 'Consistency and speed in deliveries.',
    'lp.b2.vk2':       'Engineering', 'lp.b2.vv2': 'Reuse and simpler maintenance.',
    'lp.b2.vk3':       'Commercial', 'lp.b2.vv3': 'Clarity and reliability in evolutions.',
    'lp.b2.note':      'Documented in Storybook to align reuse and maintenance with Engineering.',

    'lp.b3.title':     'Operational control before automatic intelligence',
    'lp.b3.p1':        'One of the most important features was configuring the initial position and weight of offers before Loop\u2019s automatic action, balancing two decision modes: data-driven and behavior-based automation, and manual control for commercial objectives.',
    'lp.b3.p2':        'If an operator wanted to incentivize a R$25 top-up, the offer could be pinned as initial priority, while Loop continued learning from behavior and adapting the experience. This preserved operational control without blocking the evolution toward a data-driven model.',
    'lp.b3.cap':       'Operational control and Next Best Action',
    'lp.b3.flow.label':'Next Best Action logic',
    'lp.b3.fv1':       'Initial setup',      'lp.b3.fn1': 'Offer position and weight defined by operations.',
    'lp.b3.fv2':       'Publishing',          'lp.b3.fn2': 'Experience activated across channels and portals.',
    'lp.b3.fv3':       'Behavior collection',  'lp.b3.fn3': 'Data and interactions feed the models.',
    'lp.b3.fv4':       'Intelligent adjustment','lp.b3.fn4': 'AI/ML adapts the offer without losing commercial control.',

    'lp.b4.title':     'Architecture of partners, integrators, services, and offers',
    'lp.b4.p1':        'I also participated in creating the flow that organized the relationship between partners, integrators, services, and offers, translating a complex technical and commercial logic into something understandable for those configuring the operation.',
    'lp.b4.p2':        'The design challenge was making visible how contracts, technical integrations, digital services, and campaigns connected, allowing adaptation by partner and business model.',
    'lp.b4.arch.label':'Architecture example',
    'lp.b4.arch.desc': 'Content partner \u2192 Creation API \u2192 Streaming service \u2192 VAS offer',
    'lp.b4.cap':       'Architecture of partners, integrators, services, and offers',

    'lp.b5.title':     'Research, collaboration, and operational traceability',
    'lp.b5.p1':        'In interviews and contextual observation, I identified that operators worked with multiple tabs open and sometimes more than one person edited the same portal or campaign. The product did not anticipate this behavior, which caused conflicts, errors, and uncertainty about which version was up to date.',
    'lp.b5.p2':        'From that insight, we evolved the platform with a change history, bringing more traceability and confidence to the operation. The learning reinforced the value of observing real usage, not just formal requirements.',

    'lp.s05.title':    'Actions taken',
    'lp.ac1.name':     'Research',       'lp.ac1.desc': 'Interviews, usability tests, and contextual conversations with internal platform users.',
    'lp.ac2.name':     'Flows',          'lp.ac2.desc': 'Redesign of configuration flows to reduce operational effort and improve clarity.',
    'lp.ac3.name':     'Design System',  'lp.ac3.desc': 'Creation, organization, and evangelization of the Design System with Product, Engineering, and Commercial.',
    'lp.ac4.name':     'AI/ML',          'lp.ac4.desc': 'Configuration of initial position and weight of offers before automatic action.',
    'lp.ac5.name':     'Architecture',   'lp.ac5.desc': 'Flow that organizes the relationship between partners, integrators, services, and offers.',
    'lp.ac6.name':     'Traceability',   'lp.ac6.desc': 'Evolution considering multiple tabs, operational collaboration, and change history.',
    'lp.ac7.name':     'Onboarding',     'lp.ac7.desc': 'Supporting onboarding materials, presentations, and tutorials for new operators.',
    'lp.ac8.name':     'Collaboration',  'lp.ac8.desc': 'Close work with PM, Engineering, Marketing, Growth, Data, Commercial, and leadership.',

    'lp.s06.title':    'Observed results',
    'lp.s06.p1':       'Loop\u2019s evolution increased operational efficiency and platform maturity, with direct impact on setup time and delivery consistency.',
    'lp.s06.m1.fig':   '<em>55%</em>',
    'lp.s06.m1.label': 'reduction in operational time to set up the initial offer positioning plan in a channel.',
    'lp.s06.m2.sup':   'Average task time',
    'lp.s06.m2.fig':   '9min28s <span class="arw">\u2192</span> 4min12s',
    'lp.s06.m2.label': 'in portal and campaign preparation, with more predictability.',
    'lp.s06.m3.label': 'partners in over 50 countries served by the operation.',
    'lp.s06.m4.label': 'microfinance transactions, such as balance and mobile data loans.',
    'lp.s06.m5.label': 'recurring subscriptions offered via Loop.',
    'lp.s06.i1':       'More visual and functional consistency with the Design System evolution.',
    'lp.s06.i2':       'More operational traceability with the change history.',
    'lp.s06.i3':       'More clarity in configuring offers, services, partners, and integrations.',
    'lp.s06.i4':       'Greater predictability in portal and campaign preparation.',
    'lp.s06.i5':       'Improved internal user satisfaction, tracked through semi-annual interviews and anonymous annual surveys.',
    'lp.s06.i6':       'The platform remained active after my transition to management.',
    'lp.s06.note':     'Note: metrics extracted from an internal results presentation from 2022. To maintain traceability, I chose to use only documented numbers.',

    'lp.s07.title':    'Learnings and next steps',
    'lp.s07.p1':       'Internal products can be just as complex as consumer products. They often require even more design maturity because they need to translate technical, commercial, and operational rules into flows that sustain business scale.',
    'lp.s07.p2':       'In complex platforms, the Design System is not just visual consistency. It is product infrastructure: it preserves decisions, reduces rework, improves communication with Engineering, and prepares for continuous evolution.',
    'lp.s07.p3':       'I also learned to balance automation and control. In AI/ML-driven products, automatic decisions need to coexist with business rules and commercial goals. As a next step, I would deepen the visualization of AI/ML decisions in the interface, making recommendations more transparent for operators, and measure more precisely the impact of design on conversion and operational efficiency.',
    'lp.s07.stmt':     'Design System, data, and AI/ML as <em>infrastructure for scaling product decisions.</em>',

    'lp.cta.p':        'Loop was an important project in my trajectory with complex products. In it, I translated business rules, operations, technology, and data into a clearer experience for those who needed to operate decisions at scale.<br /><br />More than designing screens, my role was to structure a product capable of supporting decisions and reducing operational effort.',
    'lp.next':         'Next case: DesignOps',

    /* ========== SOBRE MIM (About) ========== */
    'ab.hero.kind':    'About me',
    'ab.open.title':   'How my career was built',
    'ab.edu.eyebrow':  'Academic path',
    'ab.edu.title':    'Education, courses &amp; certifications',
    'ab.edu.item1.name': 'Bachelor\u2019s in Graphic Design',
    'ab.edu.item1.meta': 'UVA \u00b7 2012\u20132016',
    'ab.edu.item2.name': 'Web Design course (HTML/CSS/JS)',
    'ab.edu.item2.meta': 'SENAC \u00b7 2019',
    'ab.edu.item3.name': 'Specialization in UX Research',
    'ab.edu.item3.meta': 'CCE PUC-Rio \u00b7 2019',
    'ab.edu.item4.name': 'Postgraduate in People Leadership &amp; Management',
    'ab.edu.item4.meta': 'Descomplica \u00b7 2022\u20132023',
    'ab.edu.item5.name': 'Postgraduate in Product Management',
    'ab.edu.item5.meta': 'Descomplica \u00b7 2023',
    'ab.edu.legend.ds':      'Design System',
    'ab.edu.legend.product': 'Product',
    'ab.edu.legend.ux':      'UX',
    'ab.edu.legend.ui':      'UI',
    'ab.edu.legend.soft':    'Soft Skill',
    'ab.edu.course1.name': 'Design System &amp; Ops',
    'ab.edu.course1.meta': 'Meiuca \u00b7 2020',
    'ab.edu.course2.name': 'Product Metrics',
    'ab.edu.course2.meta': 'Product Arena \u00b7 2020',
    'ab.edu.course3.name': 'UX Design',
    'ab.edu.course3.meta': 'How Bootcamps \u00b7 2020',
    'ab.edu.course4.name': 'UX Metrics',
    'ab.edu.course4.meta': 'Product Arena \u00b7 2019',
    'ab.edu.course5.name': 'Product Management Mobile',
    'ab.edu.course5.meta': 'Product Arena \u00b7 2019',
    'ab.edu.course6.name': 'User Interface Design',
    'ab.edu.course6.meta': 'UI Lab \u00b7 2018',
    'ab.edu.course7.name': 'Mestres do Lovable',
    'ab.edu.course7.meta': 'Leo Pereira \u00b7 2026',
    'ab.edu.course10.name': 'Service Design',
    'ab.edu.course10.meta': 'PM3 \u00b7 2024',
    'ab.edu.course11.name': 'Product Management',
    'ab.edu.course11.meta': 'PM3 \u00b7 2022',
    'ab.edu.course12.name': 'Accessibility',
    'ab.edu.course12.meta': 'M\u00f4re Educa\u00e7\u00e3o \u00b7 2025',
    'ab.edu.course8.name': 'Emotional Intelligence',
    'ab.edu.course8.meta': 'Conquer \u00b7 2021',
    'ab.edu.course9.name': 'Productivity &amp; High Performance',
    'ab.edu.course9.meta': 'Conquer \u00b7 2023',
    'ab.open.bio1':    'I started in graphic design, but it was moving into digital product, in an e-commerce context, that I found what I actually wanted to do: flow, information architecture and journey, not the visual side of design. I chased a faster pace at a startup, helping launch an MVP from scratch, and from there kept going deeper into products with high regulatory and operational complexity, my domain now: digital payments, checkout and B2B2C white-label platforms. I built on that foundation for over 6 years at a multinational, where I grew from specialist to lead.',
    'ab.open.bio2':    'I\u2019m a naturally curious designer. I invest in courses and attend industry events to stay current. I\u2019m also deeply into philosophy and understanding human behavior, an interest that connects directly to user-centered and behavioral design, to that principle that what someone does isn\u2019t always what they say they do. Philosophy feeds that thirst to keep improving, that sense that I still know so little and there\u2019s always more to learn.',
    'ab.open.bio3':    'Today I put a good part of that energy into sharpening how I use AI in my design process, a focus I see as essential for where the profession is heading.',
    'ab.hero.title':   'I work at the intersection of <em>people, processes, and products</em>.',
    'ab.about.p1':     'I\u2019m a Product Designer with experience spanning design team management, UX strategy, DesignOps, discovery, metrics, Design Systems, and the evolution of complex digital products.',
    'ab.about.p2':     'I like turning ambiguous contexts into clearer processes, more consistent experiences, and better-informed product decisions.',

    'ab.exp.eyebrow':  'Professional experience',
    'ab.xp.title':     'Professional experience',
    'ab.xp.bemobi':    'Bemobi',
    'ab.xp.bemobi.t':  '6 years and 8 months',

    'ab.r1.title':     'Lead Product Designer',
    'ab.r1.time':      '2 years and 11 months',
    'ab.r1.tag':       'Leadership, DesignOps, and complex product',
    'ab.r1.desc':      'Leadership of designers in Product Design, Content Design/UX Writing, and Visual Design, working on Smart Checkout, digital payments, B2B/B2B2C products, white-label platforms, discovery, Product Analytics, Design System, and UX decisions in high technical and commercial complexity.',

    'ab.r2.title':     'Specialist Product Design - UX Lead',
    'ab.r2.time':      '1 year and 5 months',
    'ab.r2.tag':       'Technical leadership, designer development, and quality',
    'ab.r2.desc':      'Hybrid role between technical depth and people leadership, conducting 1:1s, feedback, onboarding, development plans, frameworks, discovery facilitation, stakeholder alignment, and deliverable quality improvement.',

    'ab.r3.title':     'Senior Product Designer',
    'ab.r3.time':      '1 year and 1 month',
    'ab.r3.tag':       'Scalability, Design System, and validation',
    'ab.r3.desc':      'Design System evolution, craft refinement, discovery, usability testing, SUS analysis, Design Thinking, Design Sprint, and collaboration with technical teams to improve consistency, efficiency, and quality in digital products.',

    'ab.r4.title':     'Product Designer',
    'ab.r4.time':      '1 year and 6 months',
    'ab.r4.tag':       'Product, operations, and end-to-end delivery',
    'ab.r4.desc':      'Working on B2B/B2B2C products, offer orchestration, telecom, digital channels, dashboards, operational flows, prototyping, business rules, and collaboration with Product, Engineering, and Commercial through to production delivery.',

    'ab.xp.achei':     'Achei Farm\u00e1cias',
    'ab.xp.achei.t':   '1 year and 4 months',
    'ab.r5.title':     'Product Designer',
    'ab.r5.time':      '1 year and 4 months',
    'ab.r5.tag':       'MVP, healthtech, and B2B/B2C product',
    'ab.r5.desc':      'Working at a health startup on MVP structuring and evolution of B2C mobile and B2B web products for partner pharmacies, connecting research, information architecture, prototyping, usability testing, operational dashboards, and continuous experience improvement.'
  };

  /* ---- Page metadata (title + description) ---- */
  var meta = {
    'index.html': {
      pt: { t: 'Jennifer Sousa \u00b7 Product Designer \u00b7 Payments & UX Strategy', d: 'Portf\u00f3lio de Jennifer Sousa, Lead Product Designer. Estrat\u00e9gia, opera\u00e7\u00e3o e experi\u00eancia para escalar produtos digitais complexos.' },
      en: { t: 'Jennifer Sousa \u00b7 Product Designer \u00b7 Payments & UX Strategy', d: 'Portfolio of Jennifer Sousa, Lead Product Designer. Strategy, operations, and experience for scaling complex digital products.' }
    },
    'Case DesignOps.html': {
      pt: { t: 'DesignOps & Lideran\u00e7a de Design \u00b7 Jennifer Sousa', d: 'Case de gest\u00e3o e lideran\u00e7a de design: como estruturei uma opera\u00e7\u00e3o de design para desenvolver designers, aumentar a maturidade de UX e fortalecer decis\u00f5es de produto.' },
      en: { t: 'DesignOps & Design Leadership \u00b7 Jennifer Sousa', d: 'Design management and leadership case: how I structured a design operation to develop designers, increase UX maturity, and strengthen product decisions.' }
    },
    'Case Smart Checkout.html': {
      pt: { t: 'Smart Checkout \u00b7 Jennifer Sousa', d: 'Case de lideran\u00e7a de UX no Smart Checkout: uma plataforma white-label de pagamentos com orquestra\u00e7\u00e3o inteligente, m\u00faltiplos canais, m\u00e9todos e regras configur\u00e1veis, organizada em uma experi\u00eancia clara e escal\u00e1vel.' },
      en: { t: 'Smart Checkout \u00b7 Jennifer Sousa', d: 'UX leadership case for Smart Checkout: a white-label payments platform with intelligent orchestration, multiple channels, methods, and configurable rules, organized into a clear and scalable experience.' }
    },
    'Case Loop.html': {
      pt: { t: 'Loop \u00b7 Digital Engagement Platform \u00b7 Jennifer Sousa', d: 'Case de Product Design: como transformamos uma opera\u00e7\u00e3o manual de ofertas em uma plataforma de orquestra\u00e7\u00e3o digital, com Design System, IA/ML e Next Best Action em telecom.' },
      en: { t: 'Loop \u00b7 Digital Engagement Platform \u00b7 Jennifer Sousa', d: 'Product Design case: how we turned a manual offer operation into a digital orchestration platform, with Design System, AI/ML, and Next Best Action in telecom.' }
    },
    'Case Achei Farmacias.html': {
      pt: { t: 'AcheiFarm\u00e1cias \u00b7 Jennifer Sousa', d: 'Case de Product Design: como constru\u00ed, sozinha, do zero, uma plataforma de compra e entrega de produtos de farm\u00e1cia, do app do usu\u00e1rio final ao backoffice das farm\u00e1cias parceiras.' },
      en: { t: 'AcheiFarm\u00e1cias \u00b7 Jennifer Sousa', d: 'Product Design case: how I built, solo, from scratch, a pharmacy shopping and delivery platform, from the consumer app to the partner pharmacies\u2019 backoffice.' }
    }
  };

  /* ============================================================
     Core engine
     ============================================================ */

  function getLang() {
    try { return localStorage.getItem(KEY) || DEFAULT; } catch (e) { return DEFAULT; }
  }

  function saveLang(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) { /* private browsing */ }
  }

  function applyLang(lang) {
    /* 1. html lang */
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

    /* 2. Translate data-i18n elements */
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute('data-i18n');
      /* Save original PT HTML on first pass */
      if (!el.hasAttribute('data-i18n-pt')) {
        el.setAttribute('data-i18n-pt', el.innerHTML);
      }
      if (lang === 'en' && en[key]) {
        el.innerHTML = en[key];
      } else if (lang === 'pt') {
        var orig = el.getAttribute('data-i18n-pt');
        if (orig !== null) el.innerHTML = orig;
      }
    }

    /* 3. Translate data-cap attributes (lightbox captions) */
    var capEls = document.querySelectorAll('[data-i18n-cap]');
    for (var j = 0; j < capEls.length; j++) {
      var cel = capEls[j];
      var ck = cel.getAttribute('data-i18n-cap');
      if (!cel.hasAttribute('data-i18n-cap-pt')) {
        cel.setAttribute('data-i18n-cap-pt', cel.getAttribute('data-cap') || '');
      }
      if (lang === 'en' && en[ck]) {
        cel.setAttribute('data-cap', en[ck]);
      } else if (lang === 'pt') {
        cel.setAttribute('data-cap', cel.getAttribute('data-i18n-cap-pt') || '');
      }
    }

    /* 4. Page title + meta description */
    var page = decodeURIComponent(location.pathname.split('/').pop()) || 'index.html';
    if (page === '' || page === '/') page = 'index.html';
    var m = meta[page];
    if (m && m[lang]) {
      document.title = m[lang].t;
      var descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute('content', m[lang].d);
    }

    /* 5. Update toggle button */
    var btn = document.getElementById('langToggle');
    if (btn) {
      btn.textContent = lang === 'pt' ? 'EN' : 'PT';
      btn.setAttribute('aria-label', lang === 'pt' ? 'Switch to English' : 'Mudar para Portugu\u00eas');
    }

    /* 6. Translate aria-label attributes via data-i18n-label */
    var labelEls = document.querySelectorAll('[data-i18n-label]');
    for (var m = 0; m < labelEls.length; m++) {
      var lel = labelEls[m];
      var lk = lel.getAttribute('data-i18n-label');
      if (!lel.hasAttribute('data-i18n-label-pt')) {
        lel.setAttribute('data-i18n-label-pt', lel.getAttribute('aria-label') || '');
      }
      if (lang === 'en' && en[lk]) {
        lel.setAttribute('aria-label', en[lk]);
      } else if (lang === 'pt') {
        lel.setAttribute('aria-label', lel.getAttribute('data-i18n-label-pt') || '');
      }
    }

    /* 7. Auto-update lightbox trigger aria-labels from data-cap */
    var lbTriggers = document.querySelectorAll('[data-lightbox]');
    var enlargePrefix = lang === 'en' ? 'Enlarge: ' : 'Ampliar: ';
    for (var n = 0; n < lbTriggers.length; n++) {
      var trig = lbTriggers[n];
      var capVal = trig.getAttribute('data-cap') || '';
      trig.setAttribute('aria-label', enlargePrefix + capVal);
    }
  }

  function toggle() {
    var next = getLang() === 'pt' ? 'en' : 'pt';
    saveLang(next);
    applyLang(next);
  }

  /* ---- Inject toggle button ---- */
  function injectToggle() {
    var navLinks = document.querySelector('.nav__links');
    if (!navLinks) return;
    var btn = document.createElement('button');
    btn.id = 'langToggle';
    btn.className = 'lang-toggle';
    btn.type = 'button';
    btn.addEventListener('click', toggle);
    navLinks.appendChild(btn);
  }

  /* ---- Init ---- */
  function init() {
    injectToggle();
    applyLang(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
