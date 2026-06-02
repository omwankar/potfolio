import Reveal from './Reveal';

const SectionHeading = ({ eyebrow, title, accent, subtitle }) => {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="heading mt-5 text-white">
          {title} {accent && <span className="gradient-text">{accent}</span>}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-white/55">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;
