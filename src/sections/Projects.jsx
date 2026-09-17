import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { projects } from '../constants/index.js';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
  </svg>
);

const ProjectLinks = ({ live, github, extraLive, compact = false }) => (
  <div className={`flex flex-wrap ${compact ? 'gap-2' : 'gap-3'}`}>
    {live && (
      <a
        href={live}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center gap-2 rounded-full bg-accent-gradient font-semibold text-white shadow-glow transition-transform hover:scale-[1.03] active:scale-95 ${
          compact ? 'px-3.5 py-1.5 text-xs' : 'px-5 py-2.5 text-sm'
        }`}>
        Live Demo <ArrowIcon />
      </a>
    )}
    {extraLive && (
      <a
        href={extraLive.href}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 font-semibold text-accent-cyan transition-all hover:bg-accent-cyan/20 ${
          compact ? 'px-3.5 py-1.5 text-xs' : 'px-5 py-2.5 text-sm'
        }`}>
        {extraLive.label} <ArrowIcon />
      </a>
    )}
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 font-semibold text-white/90 backdrop-blur transition-all hover:border-white/30 hover:bg-white/10 ${
          compact ? 'px-3.5 py-1.5 text-xs' : 'px-5 py-2.5 text-sm'
        }`}>
        <GithubIcon /> GitHub
      </a>
    )}
  </div>
);

const BrowserFrame = ({ src, alt, tall = false }) => (
  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-200">
    <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-red-400/80" />
      <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
      <span className="h-2 w-2 rounded-full bg-green-400/80" />
      <span className="ml-2 truncate rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-white/35">
        {alt}
      </span>
    </div>
    <div className={`relative overflow-hidden ${tall ? 'h-64 sm:h-80 lg:h-full lg:min-h-[22rem]' : 'h-48'}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
    </div>
  </div>
);

const Projects = () => {
  const featured = projects.find((p) => p.featured) || projects[0];
  const resumeRest = projects.filter((p) => !p.featured && !p.extra);
  const extra = projects.filter((p) => p.extra);

  return (
    <section id="projects" className="section-pad">
      <div className="c-space mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've"
          accent="built"
          subtitle="Loadrift, Live Market Analysis, and Cheapest Product Finder — plus one extra live build from GitHub."
        />

        <Reveal>
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${featured.accent} opacity-80`} />
            <div className="relative grid items-stretch gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-4 sm:p-6 lg:p-7">
                <BrowserFrame src={featured.image} alt={`${featured.title} live preview`} tall />
              </div>

              <div className="flex flex-col p-6 sm:p-8 lg:py-10 lg:pr-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-accent-gradient px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                    Featured
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/55">
                    {featured.period}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">{featured.title}</h3>
                <p className="mt-1 text-sm font-semibold gradient-text">{featured.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/65">{featured.description}</p>

                <ul className="mt-5 space-y-2.5">
                  {featured.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-[13px] leading-relaxed text-white/55">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-cyan" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <ProjectLinks live={featured.live} github={featured.github} extraLive={featured.extraLive} />
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {resumeRest.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08} className="group h-full">
              <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-glow">
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`} />
                <div className="relative p-4 pb-0">
                  <BrowserFrame src={project.image} alt={`${project.title} preview`} />
                </div>

                <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-1 text-sm font-semibold gradient-text">{project.subtitle}</p>
                    </div>
                    <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/55">
                      {project.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/60">{project.description}</p>

                  <ul className="mt-4 space-y-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-[13px] leading-relaxed text-white/50">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-violet" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ProjectLinks live={project.live} github={project.github} extraLive={project.extraLive} compact />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {extra.length > 0 && (
          <div className="mt-12">
            <Reveal>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-white/40">Also shipped</p>
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-2">
              {extra.map((project, i) => (
                <Reveal key={project.id} delay={i * 0.08} className="group h-full">
                  <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-glow">
                    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`} />
                    <div className="relative p-4 pb-0">
                      <BrowserFrame src={project.image} alt={`${project.title} live preview`} />
                    </div>
                    <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
                          <p className="mt-1 text-sm font-semibold gradient-text">{project.subtitle}</p>
                        </div>
                        <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/55">
                          {project.period}
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-white/60">{project.description}</p>
                      <div className="mt-auto pt-6">
                        <div className="mb-5 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/60">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <ProjectLinks live={project.live} github={project.github} extraLive={project.extraLive} compact />
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
