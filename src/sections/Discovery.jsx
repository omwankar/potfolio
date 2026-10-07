import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { projects } from '../constants/index.js';

const Discovery = () => {
  const docs = projects.filter((p) => p.discovery);
  const [openId, setOpenId] = useState(docs[0]?.id ?? 1);

  return (
    <section id="discovery" className="section-pad">
      <div className="c-space mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Discovery docs"
          title="Why it exists,"
          accent="what I chose"
          subtitle="Case notes a recruiter can read in two minutes: problem, constraint, tradeoff, outcome. Not a feature dump."
        />

        <div className="space-y-3">
          {docs.map((project, i) => {
            const open = openId === project.id;
            const d = project.discovery;
            return (
              <Reveal key={project.id} delay={i * 0.05}>
                <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : project.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                    aria-expanded={open}>
                    <div>
                      <p className="font-display text-lg font-semibold text-white">{project.title}</p>
                      <p className="mt-0.5 text-sm text-white/50">{project.subtitle}</p>
                    </div>
                    <span className="text-white/40">{open ? '−' : '+'}</span>
                  </button>
                  {open && (
                    <div className="grid gap-5 border-t border-white/10 px-5 py-5 sm:grid-cols-2 sm:px-6">
                      {[
                        ['Problem', d.problem],
                        ['Constraint', d.constraint],
                        ['Tradeoff', d.tradeoff],
                        ['Outcome', d.outcome],
                      ].map(([label, text]) => (
                        <div key={label}>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">{label}</p>
                          <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
                        </div>
                      ))}
                      <div className="flex flex-wrap gap-3 sm:col-span-2">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-semibold text-accent-cyan hover:underline">
                            Live demo →
                          </a>
                        )}
                        {project.docs && (
                          <a
                            href={project.docs}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-semibold text-white/70 hover:text-white hover:underline">
                            Product docs →
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-semibold text-white/70 hover:text-white hover:underline">
                            GitHub →
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Discovery;
