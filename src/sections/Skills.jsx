import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { skillGroups } from '../constants/index.js';

const Skills = () => {
  return (
    <section id="skills" className="section-pad">
      <div className="c-space mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="The tools I build"
          accent="with"
          subtitle="A full-stack toolkit spanning AI/ML, modern web frontends, scalable backends, and cloud-native data."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} className="glass glass-hover p-6" delay={i * 0.06}>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-gradient" />
                <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
