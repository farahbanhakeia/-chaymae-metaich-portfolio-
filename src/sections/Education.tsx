import { education } from '@/data/education';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

export function Education() {
  return (
    <section id="formation" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="07 — Formation"
          title="Formation académique"
          description="Un parcours scientifique puis Grande École en finance, prolongé par un Mastère Spécialisé en audit, contrôle et systèmes d'information."
        />

        <ol className="relative mt-12 space-y-6 border-l border-navy-100 pl-8 dark:border-white/10 sm:pl-10">
          {education.map((item, i) => (
            <li key={item.id} className="relative">
              <span
                className={cn(
                  'absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full border-2 bg-cream dark:bg-navy-950 sm:-left-[49px]',
                  item.upcoming ? 'border-cyan-500' : 'border-emerald-500',
                )}
                aria-hidden="true"
              >
                <span
                  className={cn('h-2 w-2 rounded-full', item.upcoming ? 'bg-cyan-500' : 'bg-emerald-500')}
                />
              </span>

              <Reveal delay={Math.min(i * 0.05, 0.2)}>
                <article className="card p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-900 text-white dark:bg-emerald-600">
                        <Icon name={item.icon} size={20} />
                      </span>
                      <div>
                        <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                          {item.period}
                        </p>
                        <h3 className="mt-0.5 font-display text-lg font-semibold leading-snug text-navy-900 dark:text-white">
                          {item.degree}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                          {item.school}
                        </p>
                      </div>
                    </div>
                    {item.status && (
                      <span className="shrink-0 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                        {item.status}
                      </span>
                    )}
                  </div>

                  {item.details && item.details.length > 0 && (
                    <ul className="mt-4 space-y-1.5 sm:pl-[60px]">
                      {item.details.map((d) => (
                        <li
                          key={d}
                          className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                        >
                          <Icon
                            name="CircleDot"
                            size={7}
                            className="mt-1.5 shrink-0 text-emerald-500"
                          />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
