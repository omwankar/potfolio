export const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'Work', href: '#projects' },
  { id: 3, name: 'Discovery', href: '#discovery' },
  { id: 4, name: 'Experience', href: '#experience' },
  { id: 5, name: 'Contact', href: '#contact' },
];

export const profile = {
  name: 'Om Wankar',
  role: 'Full-Stack Developer & AI/ML Engineer',
  title: 'SDE-1',
  company: 'Clarusto Technologies',
  location: 'Pune, India',
  email: 'omgajananwankar123@gmail.com',
  phone: '+91 9325156044',
  resume: '/Om_Wankar_Resume.pdf',
  summary:
    'Engineer building AI that stays tied to source context and only ships when the output holds up. Work spans LLM retrieval and confidence gates, evaluation and failure analysis, and the APIs and interfaces that turn model output into something a team can use.',
  about:
    'Python and TypeScript. Strongest fit is machine learning — testing approaches, measuring failures, and improving output quality. Currently SDE-1 at Clarusto Technologies, and shipping evaluation judges, retrieval-grounded agents, and research browsers on the side.',
};

export const socials = [
  { id: 1, name: 'GitHub', href: 'https://github.com/omwankar', handle: 'github.com/omwankar' },
  { id: 2, name: 'LinkedIn', href: 'https://linkedin.com/in/om-wankar', handle: 'linkedin.com/in/om-wankar' },
  { id: 3, name: 'Email', href: 'mailto:omgajananwankar123@gmail.com', handle: 'omgajananwankar123@gmail.com' },
];

export const stats = [
  { id: 1, value: 33, suffix: '', label: 'Loadrift sim components' },
  { id: 2, value: 480, suffix: '', label: 'labelled Harbour traces' },
  { id: 3, value: 95, suffix: '%', label: 'ML insight accuracy at work' },
];

export const education = [
  {
    id: 1,
    degree: 'B.E. Electronics & Telecommunication',
    school: "PVG's COET, Pune",
    duration: '2022 – 2026',
  },
];

export const skillGroups = [
  {
    id: 1,
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    id: 2,
    title: 'AI / ML',
    skills: [
      'LLM APIs (Claude, OpenAI)',
      'Retrieval & embeddings',
      'LangGraph',
      'Hybrid retrieval / RRF',
      'Evaluation (accuracy, MCC, AUROC, calibration)',
      'Failure taxonomy',
      'Confidence gates',
      'Scikit-learn',
      'TF-IDF',
      'pandas',
      'NumPy',
    ],
  },
  {
    id: 3,
    title: 'Product',
    skills: [
      'FastAPI',
      'Next.js',
      'React',
      'Node.js',
      'Playwright',
      'Fastify',
      'Supabase / Postgres',
      'REST APIs',
      'Vite',
    ],
  },
  {
    id: 4,
    title: 'Tools',
    skills: ['Git', 'Docker', 'GitHub Actions', 'Render', 'Vercel'],
  },
];

export const marqueeSkills = [
  'Python',
  'TypeScript',
  'Claude',
  'LangGraph',
  'FastAPI',
  'Next.js',
  'React',
  'Playwright',
  'Retrieval',
  'Evaluation',
  'Supabase',
  'Postgres',
  'Scikit-learn',
  'Node.js',
  'Render',
];

export const experiences = [
  {
    id: 1,
    role: 'SDE-1',
    company: 'Clarusto Technologies, Pune',
    duration: 'April 2025 – Present',
    current: true,
    points: [
      'Built an ML-powered credit-card reward tracking system using Scikit-learn and feature engineering — achieved 95% insight accuracy and identified $50K in annual savings across 10K+ transactions.',
      'Designed an NLP-based transaction categorization pipeline; boosted user engagement by 25% and retention by 40% through data-driven personalization.',
      'Developed a real-time recommendation engine with pandas and NumPy to surface contextual reward suggestions, reducing user effort by 30%.',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Proxy',
    subtitle: 'Agents date on your behalf',
    period: '2026',
    featured: true,
    extra: false,
    accent: 'from-rose-400/30 via-orange-400/15 to-violet-500/20',
    live: 'https://proxy-agentic-dating.vercel.app',
    github: 'https://github.com/omwankar/proxy-agentic-dating',
    image: '/assets/proxy-landing.png',
    demoFrames: [
      { src: '/assets/proxy-landing.png', caption: 'LinkedIn + Instagram in — the agent goes on the date' },
      { src: '/assets/proxy-profile.png', caption: 'Agent profile built from two public sources only' },
      { src: '/assets/proxy-date.png', caption: 'Live date: two agents talking on their people\'s behalf' },
      { src: '/assets/proxy-debrief.png', caption: 'After-date debrief — what worked, what concerned' },
      { src: '/assets/proxy-rankings.png', caption: 'Who fits whom — dated pairs rank first' },
    ],
    description:
      'Every person is an agent. It reads public LinkedIn and Instagram, dates the others, and returns a ranking of who actually fits — scored from the debrief, not a swipe.',
    highlights: [
      '33 people, 528 pairs pre-scored, 103 dates on record. Rankings put people they actually dated first.',
    ],
    tags: ['Next.js', 'TypeScript', 'Agents'],
    discovery: {
      problem:
        'A bio is a guess. You cannot tell from a LinkedIn headline how a conversation would actually feel, so matchmaking stays a vibe check.',
      constraint:
        'Exactly two public sources — LinkedIn and Instagram. The person never chats. Their agent does, then you get the ranking.',
      tradeoff:
        'Agents date each other instead of you chatting first. Rankings prefer pairs that already went on a date (scored from the debrief) over the matchmaker’s pre-date estimate.',
      outcome:
        'A live board: 33 people, 528 pre-scored pairs, 103 dates, with transcripts, debriefs, and a “who fits whom” ranking.',
    },
  },
  {
    id: 2,
    title: 'Loadrift',
    subtitle: 'System Design Simulator',
    period: '2026',
    featured: false,
    extra: false,
    accent: 'from-indigo-500/40 via-violet-500/20 to-cyan-400/20',
    live: 'https://loadrift.vercel.app',
    github: 'https://github.com/omwankar/loadrift',
    extraLive: { label: 'Docs', href: 'https://loadrift.vercel.app/glossary' },
    docs: 'https://loadrift.vercel.app/glossary',
    image: '/assets/demo-retry-storm.png',
    demoFrames: [
      { src: '/assets/demo-frame-1.jpg', caption: 'Healthy canvas — ~30 rps, every service green' },
      { src: '/assets/demo-frame-2.jpg', caption: 'Queue filling at ~70 rps, p95 climbing' },
      { src: '/assets/demo-frame-3.jpg', caption: 'Retries overflow the queue — goodput falling' },
      { src: '/assets/demo-frame-4.jpg', caption: 'Collapsed: DB 99% busy, goodput 0' },
      { src: '/assets/demo-retry-storm.png', caption: 'Retry storm on the real canvas' },
    ],
    description:
      'Build a system on a canvas, raise traffic, and watch real queueing — not a formula dressed up as a chart.',
    highlights: [
      '33 components, 23 examples, and a discrete-event engine with finite slots, measured percentiles, and abandoned work that still burns capacity.',
    ],
    tags: ['React', 'TypeScript', 'Vite', 'Discrete-event sim'],
    discovery: {
      problem:
        'System design advice is static: “add a cache.” People never feel why p99 falls off a cliff past 80% utilisation, or how retries turn one slow database into an outage.',
      constraint:
        'Every number has to be true. A plausible fake is worse than no number. The engine cannot depend on the UI, so it can be driven from a script and tested.',
      tradeoff:
        'Hand-rolled SVG and charts instead of a charting library — smaller bundle, predictable render. Runs entirely in the browser: no account, no backend, no telemetry.',
      outcome:
        'Retry Storm at 100 rps: the database is 99.9% busy and goodput is zero, because retries tripled 100 offered requests into 348 hitting a full database.',
    },
  },
  {
    id: 3,
    title: 'Harbour Transcript Judge',
    subtitle: 'Evaluation without ground truth',
    period: '2026',
    featured: false,
    extra: false,
    accent: 'from-amber-400/25 via-indigo-500/15 to-cyan-400/20',
    image: '/assets/project-harbour.png',
    demoFrames: [
      { src: '/assets/project-harbour.png', caption: 'Verdict PASS at 0.87 confidence — no model in the judge' },
      { src: '/assets/harbour-frame-2.jpg', caption: 'Transcript timeline: tool calls scored against rules' },
      { src: '/assets/harbour-frame-3.jpg', caption: 'Calibration gate: fail when the model escalates instead of acting' },
    ],
    github: 'https://github.com/omwankar/op04-harbour-transcript-judge',
    description:
      'A deterministic judge over agent trajectories: verdict, confidence, and failure category — with no model call in the submitted judge.',
    highlights: [
      '480 labelled traces: balanced accuracy 0.867, MCC 0.801, AUROC 0.911, ECE 0.045 vs a 0.50 always-pass baseline.',
    ],
    tags: ['Python', 'Evaluation', 'Calibration'],
    discovery: {
      problem:
        'You cannot grade an agent with a gold answer when the “right” action depends on the transcript. A second LLM-as-judge just adds another model you cannot trust.',
      constraint:
        'The submitted judge makes no model call. Pass/fail has to come from rules over the trajectory, and confidence has to mean something.',
      tradeoff:
        'Case-grouped smoothing over 480 development traces instead of fitting noise. Errors cluster in mixed “escalated instead of acting” leaves; only 3 of 480 fail at confidence ≥ 0.85.',
      outcome:
        'A calibrated gate you can put in front of auto-actions: high confidence is actually high confidence, against a 0.50 always-pass baseline.',
    },
  },
  {
    id: 4,
    title: 'AI PR Review Agent',
    subtitle: 'Retrieval-grounded multi-agent review',
    period: '2026',
    featured: false,
    extra: false,
    accent: 'from-emerald-400/25 via-violet-500/15 to-indigo-500/20',
    image: '/assets/project-prreview.png',
    demoFrames: [
      { src: '/assets/pr-frame-2.jpg', caption: 'Security specialist reading the diff first' },
      { src: '/assets/project-prreview.png', caption: 'Four specialists — security, quality, tests, docs' },
      { src: '/assets/pr-frame-3.jpg', caption: 'Critical finding sent to the human queue, not auto-posted' },
    ],
    github: 'https://github.com/omwankar/PR-reaview_system',
    description:
      'Webhook → dedupe → enqueue → four specialists that only speak with retrieved code context.',
    highlights: [
      'Auto-post only when confidence is high and nothing is critical; otherwise a human queue. Budget check before model spend.',
    ],
    tags: ['Python', 'FastAPI', 'LangGraph'],
    discovery: {
      problem:
        'PR bots dump generic comments. Reviewers ignore them. You need findings tied to the actual diff, with a kill switch when the model is guessing.',
      constraint:
        'Specialists (security, quality, tests, docs) run only with retrieved context. Schema-valid findings. No auto-post on critical issues.',
      tradeoff:
        'Hybrid retrieval (vector + full-text, reciprocal rank fusion) over “stuff the whole repo in the prompt.” Golden-case regression so a good run stays good.',
      outcome:
        'A pipeline that can post when it is sure, and wait when it is not — plus an append-only event log and a spend cap.',
    },
  },
];
