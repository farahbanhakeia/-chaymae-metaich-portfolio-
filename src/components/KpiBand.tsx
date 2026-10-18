import { motion, useReducedMotion } from 'framer-motion';
import { kpiTiles } from '@/data/finance';
import { cn } from '@/lib/cn';
import { useChartColors } from './charts/useChartColors';
import { CountUp } from './CountUp';
import { Icon } from './Icon';
import { Sparkline } from './Sparkline';

export function KpiBand() {
  const c = useChartColors();
  const reduce = useReducedMotion();
  const tone: Record<'emerald' | 'cyan' | 'gold' | 'navy', string> = {
    emerald: c.emerald,
    cyan: c.cyan,
    gold: c.gold,
    navy: c.navy,
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpiTiles.map((k, i) => (
        <motion.div
          key={k.label}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.3), ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduce ? undefined : { y: -4 }}
          className="card p-5"
        >
          <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {k.label}
          </p>
          <div className="mt-2 flex items-end justify-between gap-2">
            <p className="font-display text-2xl font-bold tabular-nums text-navy-900 dark:text-white">
              <CountUp to={k.num} decimals={k.decimals ?? 0} prefix={k.prefix} suffix={k.suffix} />
            </p>
            <span
              className={cn(
                'inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 font-mono text-[11px] font-semibold',
                k.positive
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                  : 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
              )}
            >
              <Icon name={k.positive ? 'TrendingUp' : 'TrendingDown'} size={12} />
              {k.delta}
            </span>
          </div>
          <div className="mt-3 h-8">
            <Sparkline data={k.spark} color={tone[k.tone]} id={`${k.tone}-${i}`} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
