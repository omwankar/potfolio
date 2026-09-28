export const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Skills', href: '#skills' },
  { id: 4, name: 'Experience', href: '#experience' },
  { id: 5, name: 'Projects', href: '#projects' },
  { id: 6, name: 'Contact', href: '#contact' },
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
    'Full-Stack Developer & AI/ML Engineer with hands-on experience building enterprise CRM platforms, LLM-integrated products, and data-driven applications. Proficient in React/Next.js, Node.js, Python, and cloud-native architectures. Skilled at integrating Anthropic Claude and Scikit-learn into real-world systems.',
  about:
    'I am passionate about automating workflows, surfacing business insights, and delivering scalable software. Currently SDE-1 at Clarusto Technologies — shipping CRM/HR platforms, LLM-integrated products, and ML systems that turn messy business data into decisions.',
};

export const socials = [
  { id: 1, name: 'GitHub', href: 'https://github.com/omwankar', handle: 'github.com/omwankar' },
  { id: 2, name: 'LinkedIn', href: 'https://linkedin.com/in/om-wankar', handle: 'linkedin.com/in/om-wankar' },
  { id: 3, name: 'Email', href: 'mailto:omgajananwankar123@gmail.com', handle: 'omgajananwankar123@gmail.com' },
];

export const stats = [
  { id: 1, value: 95, suffix: '%', label: 'ML insight accuracy' },
  { id: 2, value: 50, prefix: '$', suffix: 'K', label: 'Annual savings identified' },
  { id: 3, value: 20, suffix: '+', label: 'REST modules architected' },
  { id: 4, value: 90, suffix: '%+', label: 'Product-match accuracy' },
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
    title: 'AI / ML',
    skills: [
      'Anthropic Claude API',
      'Scikit-learn',
      'NLP / TF-IDF',
      'Text classification',
      'LLM prompt engineering',
      'pandas',
      'NumPy',
      'Walk-forward backtesting',
    ],
  },
  {
    id: 2,
    title: 'Frontend',
    skills: [
      'React 18/19',
      'Next.js 15/16 (App Router)',
      'Vite',
      'Tailwind CSS',
      'Radix UI',
      'shadcn/ui',
      'TanStack Query',
      'GSAP / Lenis',
      'Three.js / R3F',
      'Streamlit',
    ],
  },
  {
    id: 3,
    title: 'Backend',
    skills: [
      'Node.js',
      'Express 4/5',
      'FastAPI',
      'Flask',
      'REST API design',
      'Serverless (Vercel/Netlify)',
      'Zod',
      'TypeScript',
      'Python',
    ],
  },
  {
    id: 4,
    title: 'Data & DB',
    skills: ['Supabase (Postgres · Auth · Storage · RLS)', 'MongoDB / Mongoose', 'SQL', 'pandas', 'NumPy'],
  },
  {
    id: 5,
    title: 'Tools',
    skills: [
      'Git',
      'Docker',
      'GCP',
      'GitHub Actions',
      'Travis CI',
      'Stripe',
      'Resend',
      'Cloudinary',
      'Zerodha Kite',
      'PDFKit',
      'Cursor',
    ],
  },
];

export const marqueeSkills = [
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'TypeScript',
  'Anthropic Claude',
  'FastAPI',
  'Supabase',
  'Scikit-learn',
  'Tailwind CSS',
  'Express',
  'pandas',
  'Docker',
  'MongoDB',
  'NumPy',
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
    title: 'Loadrift',
    subtitle: 'System Design Simulator',
    period: '2026',
    featured: true,
    extra: false,
    accent: 'from-indigo-500/40 via-violet-500/20 to-cyan-400/20',
    image: '/assets/project-loadrift.png',
    live: 'https://loadrift.vercel.app',
    github: 'https://github.com/omwankar/loadrift',
    extraLive: { label: 'Glossary', href: 'https://loadrift.vercel.app/glossary' },
    description:
      'A browser-based system design simulator: place components on a canvas, wire them together, then raise traffic and watch real queueing behaviour — latency percentiles, retry storms, circuit breakers — from a discrete-event engine, not a fake animation.',
    highlights: [
      '33 components and 23 worked examples, including teaching scenarios and reconstructions of Netflix, Stripe, Discord, Uber, and more.',
      'Real discrete-event engine: finite server slots, gamma-distributed service times, measured p50/p95/p99, and abandoned work that still burns capacity.',
      'Chaos controls, deterministic replay, and a test suite that asserts request conservation — runs entirely in the browser with no backend or telemetry.',
    ],
    tags: ['React', 'TypeScript', 'Vite', 'Discrete-event sim', 'SVG canvas', 'Vitest'],
  },
  {
    id: 2,
    title: 'Harbour Transcript Judge',
    subtitle: 'Evaluation without ground truth',
    period: '2026',
    featured: false,
    extra: false,
    accent: 'from-amber-400/25 via-indigo-500/15 to-cyan-400/20',
    image: '/assets/project-harbour.png',
    github: 'https://github.com/omwankar/op04-harbour-transcript-judge',
    description:
      'A deterministic judge that reads an agent trajectory — customer message, tool calls, tool results — and returns a verdict, a confidence, and a failure category. The submitted judge makes no model call.',
    highlights: [
      'Fit pass rates on 480 labelled development traces with case-grouped smoothing: balanced accuracy 0.867, MCC 0.801, AUROC 0.911, ECE 0.045 — vs a 0.50 always-pass baseline.',
      'Failure analysis: 42 development errors sit in mixed “escalated instead of acting” leaves; only 3 of 480 errors occur at confidence ≥ 0.85.',
      'Python evaluation loop with a failure taxonomy and calibration, not a prompt that hopes the model is right.',
    ],
    tags: ['Python', 'Evaluation', 'Calibration', 'Failure taxonomy', 'AUROC / MCC / ECE'],
  },
  {
    id: 3,
    title: 'AI PR Review Agent',
    subtitle: 'Retrieval-grounded multi-agent review',
    period: '2026',
    featured: false,
    extra: false,
    accent: 'from-emerald-400/25 via-violet-500/15 to-indigo-500/20',
    image: '/assets/project-prreview.png',
    github: 'https://github.com/omwankar/PR-reaview_system',
    description:
      'A pull-request review pipeline: verify the webhook, dedupe, enqueue, then four specialists (security, quality, tests, docs) that run only with retrieved code context.',
    highlights: [
      'Hybrid retrieval fuses vector similarity and full-text search with reciprocal rank fusion. Findings are schema-valid.',
      'Auto-post happens only when confidence is high and nothing is critical; otherwise it goes to a human queue.',
      'Golden-case regression gate, append-only event log, and a budget check before model spend.',
    ],
    tags: ['Python', 'FastAPI', 'LangGraph', 'Hybrid retrieval', 'Next.js'],
  },
  {
    id: 4,
    title: 'Scout',
    subtitle: 'Research agent that writes a sourced brief',
    period: '2026',
    featured: false,
    extra: false,
    accent: 'from-cyan-400/30 via-teal-400/15 to-indigo-500/20',
    image: '/assets/project-scout.png',
    live: 'https://scout-production-05ad.up.railway.app',
    github: 'https://github.com/omwankar/scout',
    description:
      'A browser agent that takes a plain-English research goal, searches and browses public pages, and finishes as a validated competitive brief with sources — exportable as Markdown or JSON.',
    highlights: [
      'Streams thoughts, actions, and screenshots live while the agent works.',
      'A person can stop the run, approve navigations, or steer it in plain language mid-flight.',
      'TypeScript stack with Claude, Playwright, Fastify, and Next.js — deployed on Railway.',
    ],
    tags: ['TypeScript', 'Claude', 'Playwright', 'Fastify', 'Next.js'],
  },
  {
    id: 5,
    title: 'Live Market Analysis',
    subtitle: 'F&O AI Trading Assistant',
    period: '2024',
    featured: false,
    extra: false,
    accent: 'from-cyan-400/30 via-emerald-400/15 to-indigo-500/20',
    image: '/assets/project-trading.png',
    github: 'https://github.com/omwankar/live-market-anaysis',
    description:
      'An AI-assisted NIFTY/BANKNIFTY decision-support system integrating Zerodha Kite, Yahoo Finance, and NSE bhavcopy with automatic multi-source fallback.',
    highlights: [
      'Full technical-analysis engine: RSI, EMA/SMA, ATR, Bollinger Bands, VWAP, pivot S/R, and candlestick patterns.',
      'Options intelligence module computing PCR bands, OI walls, and max pain.',
      'Grounded Claude prompts for natural-language trade explanations, Telegram bot alerts, and a live Streamlit dashboard.',
    ],
    tags: ['Python', 'Anthropic Claude', 'Streamlit', 'Zerodha Kite', 'pandas', 'NumPy', 'Telegram Bot'],
  },
  {
    id: 6,
    title: 'Cheapest Product Finder',
    subtitle: 'AI Price Comparison Engine',
    period: 'Nov 2025 – Present',
    featured: false,
    extra: false,
    accent: 'from-violet-500/35 via-fuchsia-500/15 to-cyan-400/20',
    image: '/assets/project-pricefinder.png',
    live: 'https://cheapestproductfinder.vercel.app',
    github: 'https://github.com/omwankar/Cheapest-Product-Finder-',
    description:
      'An AI-powered price comparison system achieving 90%+ product-matching accuracy across 1,500+ real-time listings using NLP-based entity normalization and deduplication.',
    highlights: [
      'Trained multi-class text classifiers with Scikit-learn (TF-IDF + Logistic Regression / Random Forest) reaching 85%+ accuracy.',
      'Reduced manual comparison effort by 70% through automated matching.',
      'FastAPI backend for real-time ingestion and price aggregation, with an LLM summarizer surfacing best deals as structured JSON.',
    ],
    tags: ['Python', 'Scikit-learn', 'NLP / TF-IDF', 'FastAPI', 'pandas', 'LLM Summarizer'],
  },
  {
    id: 7,
    title: 'InsightAxis',
    subtitle: 'AI Market Research & Industry Intelligence',
    period: '2026',
    featured: false,
    extra: true,
    accent: 'from-teal-400/25 via-indigo-500/15 to-cyan-400/20',
    image: '/assets/project-insightaxis.png',
    live: 'https://marketreashed.vercel.app',
    github: 'https://github.com/omwankar/marketreashed',
    description:
      'An AI market-intelligence product that turns industry data into research briefs, charts, and decision-ready reports.',
    highlights: [
      'Interactive research dashboard with Recharts visualizations and animated report flows.',
      'Structured industry briefs covering freight, supply-chain, and commercial market signals.',
      'Production Vite + React app with serverless API routes and a motion-first UI.',
    ],
    tags: ['React', 'Vite', 'Recharts', 'Framer Motion', 'Serverless API'],
  },
];
