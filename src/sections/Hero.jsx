import { motion } from 'framer-motion';
import { profile } from '../constants/index.js';
import Button from '../components/Button.jsx';
import DemoPlayer from '../components/DemoPlayer.jsx';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="aurora-blob left-[-10%] top-[10%] h-72 w-72 animate-aurora bg-accent-indigo/40" />
      <div className="aurora-blob right-[-8%] top-[18%] h-80 w-80 animate-aurora-slow bg-accent-cyan/30" />

      <div className="c-space mx-auto w-full max-w-7xl pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <motion.span {...fadeUp(0)} className="eyebrow">
              {profile.title} · {profile.company}
            </motion.span>

            <motion.h1
              {...fadeUp(0.05)}
              className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]">
              Hi, I&apos;m <span className="gradient-text">Om Wankar</span>
            </motion.h1>

            <motion.p {...fadeUp(0.12)} className="mt-4 max-w-xl text-lg leading-relaxed text-white/65">
              {profile.summary}
            </motion.p>

            <motion.div {...fadeUp(0.2)} className="mt-8 flex flex-wrap gap-3">
              <Button href="https://loadrift.vercel.app" target="_blank">
                Product demo
              </Button>
              <Button href="#discovery" variant="ghost">
                Discovery docs
              </Button>
              <Button href={profile.resume} target="_blank" variant="ghost">
                Resume
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent-gradient opacity-20 blur-3xl" />
            <DemoPlayer />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
