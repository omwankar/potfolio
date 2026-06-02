import { profile, socials } from '../constants/index.js';

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="c-space mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="font-display text-sm font-semibold text-white">
          OM<span className="gradient-text">.</span>WANKAR
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/50">
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target={s.name === 'Email' ? undefined : '_blank'}
              rel="noreferrer"
              className="transition-colors hover:text-white">
              {s.name}
            </a>
          ))}
        </div>

        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
