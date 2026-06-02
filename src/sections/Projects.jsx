import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { projects } from '../constants/index.js';

const Projects = () => {
  return (
    <section id="projects" className="section-pad">
      <div className="c-space mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've"
          accent="built"
          subtitle="Production-grade platforms and AI systems — from enterprise CRM to algorithmic trading and price intelligence."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08} className="group h-full">
              <article className="glass glass-hover flex h-full flex-col overflow-hidden p-7">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-1 gradient-text text-sm font-semibold">{project.subtitle}</p>
                  </div>
                  <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/55">
                    {project.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/60">{project.description}</p>

                <ul className="mt-5 space-y-2.5">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="flex gap-2.5 text-[13px] leading-relaxed text-white/55">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-violet" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
