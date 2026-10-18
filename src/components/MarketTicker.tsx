import { marketTicker } from '@/data/finance';
import { cn } from '@/lib/cn';

/** Bandeau de marché défilant — données illustratives (démonstration). */
export function MarketTicker() {
  const items = [...marketTicker, ...marketTicker];

  return (
    <div className="relative border-y border-white/10 bg-navy-900 dark:bg-navy-950">
      <div className="container flex items-center gap-4 py-2.5">
        <span className="z-10 flex shrink-0 items-center gap-1.5 rounded-md bg-emerald-500/15 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
          Marchés · démo
        </span>
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-9 whitespace-nowrap">
            {items.map((t, i) => (
              <span key={i} className="inline-flex items-center gap-2 font-mono text-xs">
                <span className="font-semibold text-slate-100">{t.sym}</span>
                <span className="text-slate-400">{t.val}</span>
                <span
                  className={cn(
                    'inline-flex items-center gap-0.5 font-medium',
                    t.up ? 'text-emerald-400' : 'text-rose-400',
                  )}
                >
                  {t.up ? '▲' : '▼'} {t.chg}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
