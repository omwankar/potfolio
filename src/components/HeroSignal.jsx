import { useEffect, useState } from 'react';
import { profile, stats } from '../constants/index.js';
import StatCounter from './StatCounter.jsx';

const SCRIPT = [
  { kind: 'cmd', text: 'whoami' },
  { kind: 'out', text: `${profile.name.toLowerCase().replace(' ', '_')}  —  ${profile.role}` },
  { kind: 'cmd', text: 'focus' },
  { kind: 'out', text: 'retrieval  ·  evaluation  ·  confidence gates' },
  { kind: 'cmd', text: 'now' },
  { kind: 'out', text: `${profile.title} @ ${profile.company}  ·  ${profile.location}` },
];

const HeroSignal = () => {
  const [line, setLine] = useState(0);
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (line >= SCRIPT.length) {
      setDone(true);
      return undefined;
    }

    const target = SCRIPT[line].text;
    if (typed.length < target.length) {
      const id = setTimeout(() => setTyped(target.slice(0, typed.length + 1)), SCRIPT[line].kind === 'cmd' ? 38 : 16);
      return () => clearTimeout(id);
    }

    const id = setTimeout(() => {
      setLine((n) => n + 1);
      setTyped('');
    }, 420);
    return () => clearTimeout(id);
  }, [line, typed]);

  return (
    <div className="glass relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-accent-gradient" />

      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <p className="ml-2 truncate font-mono text-[11px] text-white/40">om@wankar — zsh</p>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Open to talk
        </span>
      </div>

      <div className="min-h-[13.5rem] space-y-2.5 px-5 py-5 font-mono text-[13px] leading-relaxed sm:min-h-[14.5rem]">
        {SCRIPT.slice(0, line).map((row, i) => (
          <Line key={i} row={row} text={row.text} />
        ))}
        {!done && SCRIPT[line] && <Line row={SCRIPT[line]} text={typed} caret />}
        {done && (
          <p className="flex items-center gap-2 text-accent-cyan/80">
            <span className="text-accent-violet">$</span>
            <span className="h-4 w-2 animate-pulse bg-white/80" />
          </p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-px border-t border-white/10 bg-white/[0.03]">
        {stats.map((s) => (
          <div key={s.id} className="bg-ink-50/80 px-3 py-4 text-center">
            <p className="font-display text-2xl font-bold gradient-text">
              <StatCounter value={s.value} suffix={s.suffix || ''} />
            </p>
            <p className="mt-1 text-[10px] leading-snug text-white/45">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Line = ({ row, text, caret = false }) => {
  if (row.kind === 'cmd') {
    return (
      <p className="text-white/80">
        <span className="text-accent-violet">$</span> {text}
        {caret && <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-px bg-white/80" />}
      </p>
    );
  }

  return (
    <p className="pl-4 text-white/55">
      {text}
      {caret && <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-px bg-white/70" />}
    </p>
  );
};

export default HeroSignal;
