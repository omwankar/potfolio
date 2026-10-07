import { useEffect, useState } from 'react';

const ProjectReel = ({ frames, alt, tall = false }) => {
  const list = frames?.length ? frames : [];
  const [frame, setFrame] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing || list.length < 2) return undefined;
    const id = setInterval(() => setFrame((i) => (i + 1) % list.length), 1300);
    return () => clearInterval(id);
  }, [playing, list.length]);

  if (!list.length) return null;

  const current = list[frame];
  const height = tall ? 'h-64 sm:h-80 lg:h-full lg:min-h-[22rem]' : 'h-48 sm:h-56';

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-200">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/80" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
        <span className="h-2 w-2 rounded-full bg-green-400/80" />
        <span className="ml-2 truncate text-[10px] text-white/35">{alt}</span>
        <span className="ml-auto text-[10px] uppercase tracking-wider text-white/35">Demo</span>
      </div>

      <div className={`relative overflow-hidden ${height}`}>
        {list.map((f, i) => (
          <img
            key={f.src}
            src={f.src}
            alt={f.caption || alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              i === frame ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="absolute bottom-2.5 left-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-black/80"
          aria-label={playing ? 'Pause demo' : 'Play demo'}>
          {playing ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {current.caption && (
          <p className="absolute bottom-2.5 left-12 right-2.5 truncate rounded-full bg-black/50 px-2.5 py-1 text-[10px] text-white/85 backdrop-blur">
            {current.caption}
          </p>
        )}
      </div>

      <div className="flex gap-1 px-3 py-2">
        {list.map((f, i) => (
          <button
            key={f.src}
            type="button"
            onClick={() => {
              setPlaying(false);
              setFrame(i);
            }}
            className={`h-1 flex-1 rounded-full ${i === frame ? 'bg-white' : 'bg-white/20'}`}
            aria-label={`${alt} frame ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectReel;
