import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks, profile } from '../constants/index.js';

const NavItems = ({ onClick = () => {}, active = '' }) => (
  <ul className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
    {navLinks.map(({ id, name, href }) => (
      <li key={id}>
        <a
          href={href}
          onClick={onClick}
          className={`nav-link block px-2 py-2 sm:p-0 ${active === href ? 'text-white after:w-full' : ''}`}>
          {name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const fromBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 80;
      if (fromBottom) {
        setActive('#contact');
        return;
      }
      for (let i = ids.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActive(`#${ids[i]}`);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'border-b border-white/10 bg-ink/70 backdrop-blur-xl' : 'border-b border-transparent'
        }`}>
        <div className="c-space mx-auto flex max-w-7xl items-center justify-between py-3 sm:py-4">
          <a href="#home" className="font-display text-lg font-bold tracking-tight text-white">
            OM<span className="gradient-text">.</span>WANKAR
          </a>

          <nav className="hidden sm:block">
            <NavItems active={active} />
          </nav>

          <a href="#contact" className="hidden sm:inline-flex btn-primary !px-5 !py-2">
            Let&apos;s talk
          </a>

          <button
            onClick={() => setIsOpen((v) => !v)}
            className="text-white/70 transition-colors hover:text-white sm:hidden"
            aria-label="Toggle menu">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-white/10 bg-ink/95 backdrop-blur-xl sm:hidden">
            <nav className="c-space py-5">
              <NavItems onClick={() => setIsOpen(false)} active={active} />
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost mt-4 w-full"
                onClick={() => setIsOpen(false)}>
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
