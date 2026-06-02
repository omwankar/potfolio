import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { experiences } from '../constants/index.js';

const Experience = () => {
  return (
    <section id="experience" className="section-pad">
      <div className="c-space mx-auto max-w-7xl">
        <SectionHeading eyebrow="Experience" title="Where I've" accent="worked" />

        <div className="relative border-l border-white/10 pl-8 sm:pl-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} className="relative pb-10 last:pb-0" delay={i * 0.08}>
              <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center sm:-left-[49px]">
                <span className="h-3.5 w-3.5 rounded-full bg-accent-gradient shadow-glow" />
              </span>

              <div className="glass glass-hover p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-white">{exp.role}</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                    {exp.duration}
                  </span>
                </div>
                <p className="mt-1 gradient-text text-sm font-semibold">{exp.company}</p>

                <ul className="mt-5 space-y-3">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed text-white/65">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-cyan" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
