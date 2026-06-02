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
  location: 'Pune, India',
  email: 'omgajananwankar123@gmail.com',
  phone: '+91 9325156044',
  resume: '/Om_Wankar_Resume.pdf',
  summary:
    'Full-Stack Developer & AI/ML Engineer with hands-on experience building enterprise CRM platforms, LLM-integrated products, and data-driven applications. Proficient in React/Next.js, Node.js, Python, and cloud-native architectures — skilled at integrating Anthropic Claude, Google Gemini, Groq, and Scikit-learn into real-world systems.',
  about:
    'I love automating workflows, surfacing business insights, and shipping scalable software. From RBAC-protected CRM backends to AI trading assistants and ML-powered comparison engines, I enjoy turning complex problems into clean, production-ready products.',
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
      'Google Gemini',
      'Groq',
      'NVIDIA AI',
      'Scikit-learn',
      'NLP / TF-IDF',
      'Text classification',
      'Prompt engineering',
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
      'Next.js 15/16',
      'Vite',
      'Tailwind CSS',
      'Radix UI',
      'shadcn/ui',
      'TanStack Query',
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
    skills: ['Git', 'Docker', 'GCP', 'GitHub Actions', 'Travis CI', 'Stripe', 'Resend', 'Cloudinary', 'Zerodha Kite', 'PDFKit'],
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
    role: 'SDE Intern',
    company: 'Avirait Technologies, Pune',
    duration: 'Jan 2025 – Mar 2025',
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
    title: 'Clarusto',
    subtitle: 'Enterprise CRM & HR Platform',
    period: '2024 – Present',
    description:
      'A full-stack CRM/HR platform with 20+ REST modules covering sales pipeline, quotations, invoicing, time-tracking, HR, and document management.',
    highlights: [
      'Integrated Anthropic Claude with low-temperature structured prompts to auto-generate invoice & quotation summaries, cutting manual review time by 40%.',
      'Automated invoice pipeline: multi-tax calculations, sequential numbering (INV-YYYY-####), PDFKit generation, Supabase Storage upload, and Resend email delivery.',
      'Composable RBAC middleware (user / manager / super_admin) protecting 50+ endpoints, with Postgres RLS migrations and audit logging.',
    ],
    tags: ['Next.js 16', 'Express 5', 'TypeScript', 'Supabase', 'Anthropic Claude', 'PDFKit', 'Resend'],
  },
  {
    id: 2,
    title: 'Live Market Analysis',
    subtitle: 'F&O AI Trading Assistant',
    period: '2024',
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
    id: 3,
    title: 'Cheapest Product Finder',
    subtitle: 'AI Price Comparison Engine',
    period: 'Nov 2025 – Present',
    description:
      'An AI-powered price comparison system achieving 90%+ product-matching accuracy across 1,500+ real-time listings using NLP-based entity normalization and deduplication.',
    highlights: [
      'Trained multi-class text classifiers with Scikit-learn (TF-IDF + Logistic Regression / Random Forest) reaching 85%+ accuracy.',
      'Reduced manual comparison effort by 70% through automated matching.',
      'FastAPI backend for real-time ingestion & price aggregation, with an LLM summarizer surfacing best deals as structured JSON.',
    ],
    tags: ['Python', 'Scikit-learn', 'NLP / TF-IDF', 'FastAPI', 'pandas', 'LLM Summarizer'],
  },
];
