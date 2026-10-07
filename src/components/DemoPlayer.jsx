import { useMemo, useState } from 'react';

const CAPACITY = 100;

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
    muted: 'bg-white/25',
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
  const [offered, setOffered] = useState(100);
  const result = useMemo(() => simulate(offered), [offered]);
  const collapsed = result.goodput === 0;

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

        <p className={`rounded-xl border px-3 py-2 text-[12px] ${
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
