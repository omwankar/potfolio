import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import StatCounter from '../components/StatCounter.jsx';
import { profile, stats, education } from '../constants/index.js';

const About = () => {
  return (
    <section id="about" className="section-pad">
      <div className="c-space mx-auto max-w-7xl">
        <SectionHeading eyebrow="About" title="What I care" accent="about" />

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="glass glass-hover relative overflow-hidden lg:col-span-2 p-8" delay={0.05}>
            <p className="text-lg leading-relaxed text-white/75">{profile.about}</p>
          </Reveal>

          <Reveal className="glass glass-hover flex flex-col justify-between p-8" delay={0.1}>
            <div>
              <span className="eyebrow">Now</span>
              <p className="mt-5 font-display text-xl font-semibold text-white">{profile.title}</p>
              <p className="mt-1 text-white/60">{profile.company}</p>
              <p className="mt-3 inline-block rounded-full bg-accent-gradient px-3 py-1 text-xs font-semibold text-white">
                April 2025 – Present
              </p>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">Education</p>
              {education.map((e) => (
                <div key={e.id} className="mt-3">
                  <p className="font-semibold text-white">{e.degree}</p>
                  <p className="mt-1 text-sm text-white/55">
                    {e.school} · {e.duration}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.id} className="glass glass-hover p-6 text-center" delay={i * 0.08}>
              <p className="font-display text-4xl font-bold gradient-text">
                <StatCounter value={s.value} prefix={s.prefix || ''} suffix={s.suffix || ''} />
              </p>
              <p className="mt-2 text-sm text-white/55">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
