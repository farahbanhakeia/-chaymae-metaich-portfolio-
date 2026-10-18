import { heroSpark } from '@/data/finance';
import { profile } from '@/data/profile';
import { useChartColors } from './charts/useChartColors';
import { Icon } from './Icon';

/** Sparkline légère en SVG inline (aucune dépendance de graphe dans le bundle initial). */
function MiniSparkline({ color }: { color: string }) {
  const values = heroSpark.map((d) => d.v);
  const w = 160;
  const h = 36;
  const pad = 2;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = (w - pad * 2) / (values.length - 1);
  const pts = values.map((v, i) => {
    const x = pad + i * step;
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    return [x, y] as const;
  });
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const area = `${line} L${pts[pts.length - 1][0].toFixed(1)},${h} L${pts[0][0].toFixed(1)},${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-9 w-full" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="miniSparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.35} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#miniSparkFill)" />
      <path d={line} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeroPortrait() {
  const c = useChartColors();

  return (
    <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-sm">
      {/* Glow */}
      <div
        className="absolute -inset-4 -z-10 rounded-[2.25rem] bg-gradient-to-br from-emerald-400/25 via-cyan-400/10 to-transparent blur-2xl"
        aria-hidden="true"
      />

      {/* Portrait */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-navy-100 bg-white shadow-card-hover dark:border-white/10 dark:bg-navy-900">
        <img
          src={profile.photo}
          alt={`Portrait de ${profile.name}`}
          width={640}
          height={800}
          loading="eager"
          className="aspect-[4/5] w-full object-cover object-top"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-navy-950/55 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {profile.role}
          </span>
        </div>
      </div>

      {/* Floating sparkline card */}
      <div className="absolute -bottom-5 -left-3 w-44 rounded-2xl border border-navy-100 bg-white/90 p-3.5 shadow-card-hover backdrop-blur-md dark:border-white/10 dark:bg-navy-900/85 sm:-left-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Tendance
          </span>
          <span className="inline-flex items-center gap-0.5 font-mono text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
            <Icon name="ArrowUpRight" size={12} />
            +18 %
          </span>
        </div>
        <div className="mt-1.5">
          <MiniSparkline color={c.emerald} />
        </div>
      </div>

      {/* Floating KPI chip */}
      <div className="absolute -right-2 top-8 rounded-xl border border-navy-100 bg-white/90 px-3 py-2 shadow-card backdrop-blur-md dark:border-white/10 dark:bg-navy-900/85 sm:-right-5">
        <p className="font-display text-lg font-bold leading-none text-navy-900 dark:text-white">
          940<span className="text-xs font-medium text-slate-400">/990</span>
        </p>
        <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
          TOEIC
        </p>
      </div>
    </div>
  );
}
