import { useEffect, useMemo, useState } from 'react';

const FRAMES = [
  { src: '/assets/demo-frame-1.jpg', caption: 'Healthy · ~30 req/s · queues empty', offered: 30 },
  { src: '/assets/demo-frame-2.jpg', caption: 'Load rising · queues fill · p99 climbs', offered: 72 },
  { src: '/assets/demo-frame-3.jpg', caption: 'Retries kick in · database saturates', offered: 95 },
  { src: '/assets/demo-frame-4.jpg', caption: 'Collapsed · busy 99% · goodput 0', offered: 118 },
  { src: '/assets/demo-retry-storm.png', caption: 'Retry storm · abandoned work still burns capacity', offered: 100 },
];

const CAPACITY = 100;
const FRAME_MS = 1400;

const simulate = (offered) => {
  const retryFactor = Math.max(0, (offered - 70) / 30);
  const hitting = Math.round(offered * (1 + retryFactor * 2.5));
  const busy = Math.min(99.9, (hitting / CAPACITY) * 100);
  const goodput = Math.max(0, Math.round(offered * (1 - retryFactor)));
  const abandoned = Math.max(0, hitting - goodput);
  return { hitting, busy, goodput, abandoned };
};

const Bar = ({ label, value, max, tone }) => {
  const width = Math.min(100, (value / max) * 100);
  const colors = {
    cyan: 'bg-accent-cyan',
    violet: 'bg-accent-violet',
    red: 'bg-red-400',
  };
  return (
    <div>
      <div className="mb-1 flex justify-between text-[11px] text-white/50">
        <span>{label}</span>
        <span className="font-mono text-white/80">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div className={`h-full rounded-full ${colors[tone]}`} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
};

const DemoPlayer = () => {
  const [frame, setFrame] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [offered, setOffered] = useState(FRAMES[0].offered);
  const result = useMemo(() => simulate(offered), [offered]);
  const collapsed = result.goodput === 0;

  useEffect(() => {
    if (!playing) return undefined;
    const id = setInterval(() => {
      setFrame((i) => {
        const next = (i + 1) % FRAMES.length;
        setOffered(FRAMES[next].offered);
        return next;
      });
    }, FRAME_MS);
    return () => clearInterval(id);
  }, [playing]);

  const current = FRAMES[frame];
  const progress = ((frame + 1) / FRAMES.length) * 100;

  return (
    <div className="glass relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-accent-gradient" />
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Product demo</p>
          <p className="mt-0.5 text-sm font-medium text-white">Loadrift · Retry storm</p>
        </div>
        <a
          href="https://loadrift.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white/80 hover:bg-white/10">
          Open full sim
        </a>
      </div>

      <div className="relative aspect-video overflow-hidden bg-ink-200">
        {FRAMES.map((f, i) => (
          <img
            key={f.src}
            src={f.src}
            alt={f.caption}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              i === frame ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-black/80"
          aria-label={playing ? 'Pause demo' : 'Play demo'}>
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <p className="absolute bottom-3 left-14 right-3 truncate rounded-full bg-black/55 px-3 py-1.5 text-[11px] text-white/85 backdrop-blur">
          {current.caption}
        </p>
      </div>

      <div className="h-0.5 bg-white/10">
        <div className="h-full bg-accent-gradient transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      <div className="flex gap-1.5 px-4 pt-3">
        {FRAMES.map((f, i) => (
          <button
            key={f.src}
            type="button"
            onClick={() => {
              setPlaying(false);
              setFrame(i);
              setOffered(FRAMES[i].offered);
            }}
            className={`h-1.5 flex-1 rounded-full ${i === frame ? 'bg-white' : 'bg-white/20'}`}
            aria-label={`Demo frame ${i + 1}`}
          />
        ))}
      </div>

      <div className="space-y-4 p-5">
        <p className="text-[13px] leading-relaxed text-white/55">
          Drag traffic. Past ~70 rps, retries multiply the load that caused them. The database stays busy while
          goodput falls to zero — abandoned work still burns capacity.
        </p>

        <label className="block">
          <div className="mb-2 flex justify-between text-[11px] text-white/50">
            <span>Offered load</span>
            <span className="font-mono text-white/80">{offered} req/s</span>
          </div>
          <input
            type="range"
            min="20"
            max="120"
            value={offered}
            onChange={(e) => setOffered(Number(e.target.value))}
            className="w-full accent-violet-500"
            aria-label="Offered requests per second"
          />
        </label>

        <Bar label="Hitting the database" value={result.hitting} max={350} tone="violet" />
        <Bar label="Database busy %" value={Number(result.busy.toFixed(1))} max={100} tone={collapsed ? 'red' : 'cyan'} />
        <Bar label="Goodput (useful completions)" value={result.goodput} max={120} tone={collapsed ? 'red' : 'cyan'} />

        <p
          className={`rounded-xl border px-3 py-2 text-[12px] ${
            collapsed
              ? 'border-red-400/30 bg-red-400/10 text-red-200'
              : 'border-white/10 bg-white/5 text-white/55'
          }`}>
          {collapsed
            ? `Collapsed. ${result.hitting} attempts for ${offered} offered requests. Goodput is 0.`
            : `${result.abandoned} extra attempts from retries. Raise the slider until goodput dies.`}
        </p>
      </div>
    </div>
  );
};

export default DemoPlayer;
