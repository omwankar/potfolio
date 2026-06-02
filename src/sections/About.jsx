import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import StatCounter from '../components/StatCounter.jsx';
import { profile, stats, education } from '../constants/index.js';

const About = () => {
  return (
    <section id="about" className="section-pad">
      <div className="c-space mx-auto max-w-7xl">
        <SectionHeading eyebrow="About" title="Turning ideas into" accent="shipped products" />

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="glass glass-hover lg:col-span-2 p-8" delay={0.05}>
            <p className="text-lg leading-relaxed text-white/75">{profile.about}</p>
            <p className="mt-4 leading-relaxed text-white/50">{profile.summary}</p>
          </Reveal>

          <Reveal className="glass glass-hover p-8" delay={0.1}>
            <span className="eyebrow">Education</span>
            {education.map((e) => (
              <div key={e.id} className="mt-5">
                <p className="text-lg font-semibold text-white">{e.degree}</p>
                <p className="mt-1 text-white/60">{e.school}</p>
                <p className="mt-3 inline-block rounded-full bg-accent-gradient px-3 py-1 text-xs font-semibold text-white">
                  {e.duration}
                </p>
              </div>
            ))}
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
