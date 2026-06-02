import { motion } from 'framer-motion';
import { profile, marqueeSkills } from '../constants/index.js';
import Button from '../components/Button.jsx';

const highlights = [
  { label: 'AI / ML', value: 'Claude · Gemini · Scikit-learn' },
  { label: 'Full-Stack', value: 'React · Node · Python' },
  { label: 'Shipped', value: '3 production projects' },
];

const floatBadges = [
  { name: 'Claude', top: '8%', left: '-9%' },
  { name: 'FastAPI', top: '32%', right: '-10%' },
  { name: 'Supabase', top: '64%', left: '-11%' },
  { name: 'Next.js', top: '86%', right: '-7%' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      {/* aurora blobs */}
      <div className="aurora-blob left-[-10%] top-[10%] h-72 w-72 animate-aurora bg-accent-indigo/40" />
      <div className="aurora-blob right-[-8%] top-[18%] h-80 w-80 animate-aurora-slow bg-accent-cyan/30" />
      <div className="aurora-blob bottom-[6%] left-[28%] h-72 w-72 animate-aurora bg-accent-violet/30" />

      <div className="c-space mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <div>
            <motion.span {...fadeUp(0)} className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
              </span>
              Available for opportunities
            </motion.span>

            <motion.h1
              {...fadeUp(0.05)}
              className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
              Hi, I&apos;m <span className="gradient-text">Om Wankar</span>
            </motion.h1>

            <motion.p {...fadeUp(0.12)} className="mt-4 text-xl font-medium text-white/80 sm:text-2xl">
              {profile.role}
            </motion.p>

            <motion.p {...fadeUp(0.18)} className="mt-5 max-w-xl text-base leading-relaxed text-white/55">
              {profile.summary}
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-wrap gap-3">
              <Button href="#projects">View Work</Button>
              <Button href={profile.resume} target="_blank" variant="ghost">
                Download Resume
              </Button>
              <Button href="#contact" variant="ghost">
                Contact
              </Button>
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {highlights.map((h) => (
                <div key={h.label} className="glass px-4 py-3">
                  <p className="text-xs uppercase tracking-wider text-white/40">{h.label}</p>
                  <p className="mt-1 text-sm font-medium text-white/85">{h.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — code window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md">
            {/* glow ring */}
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent-gradient opacity-20 blur-3xl" />

            <div className="glass relative overflow-hidden shadow-glow">
              <div className="absolute inset-x-0 top-0 h-px bg-accent-gradient" />

              {/* window header */}
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-3 text-xs text-white/40">om-wankar.ts</span>
              </div>

              {/* code body */}
              <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed">
                <code>
                  <span className="text-accent-violet">const</span> <span className="text-accent-cyan">developer</span>{' '}
                  <span className="text-white/50">=</span> <span className="text-white/80">{'{'}</span>
                  {'\n'}
                  {'  '}<span className="text-white/50">name:</span>{' '}
                  <span className="text-emerald-300">&apos;Om Wankar&apos;</span>,{'\n'}
                  {'  '}<span className="text-white/50">role:</span>{' '}
                  <span className="text-emerald-300">&apos;Full-Stack + AI/ML&apos;</span>,{'\n'}
                  {'  '}<span className="text-white/50">stack:</span>{' '}
                  <span className="text-white/80">[</span>
                  <span className="text-emerald-300">&apos;React&apos;</span>,{' '}
                  <span className="text-emerald-300">&apos;Node&apos;</span>,{' '}
                  <span className="text-emerald-300">&apos;Python&apos;</span>
                  <span className="text-white/80">]</span>,{'\n'}
                  {'  '}<span className="text-white/50">ai:</span>{' '}
                  <span className="text-emerald-300">&apos;Claude · Gemini · Groq&apos;</span>,{'\n'}
                  {'  '}<span className="text-white/50">openToWork:</span>{' '}
                  <span className="text-accent-cyan">true</span>,{'\n'}
                  <span className="text-white/80">{'}'}</span>;
                  <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-accent-cyan align-middle" />
                </code>
              </pre>
            </div>

            {/* floating tech badges */}
            {floatBadges.map((b, i) => (
              <motion.span
                key={b.name}
                className="absolute hidden rounded-full border border-white/15 bg-ink-200/80 px-3 py-1 text-xs text-white/80 shadow-glow backdrop-blur md:block"
                style={{ top: b.top, left: b.left, right: b.right }}
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}>
                {b.name}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* marquee */}
        <div className="relative mt-16 overflow-hidden border-y border-white/10 py-5">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
          <div className="flex w-max animate-marquee gap-10">
            {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
              <span key={i} className="text-lg font-medium text-white/35">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/80 sm:flex">
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/20 p-1">
          <motion.span
            className="h-2 w-1 rounded-full bg-white/60"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </a>
    </section>
  );
};

export default Hero;
