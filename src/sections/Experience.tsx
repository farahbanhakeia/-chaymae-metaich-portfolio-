import { experiences } from '@/data/experience';
import { Icon } from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="section bg-white/50 dark:bg-navy-900/30">
      <div className="container">
        <SectionHeading
          eyebrow="06 — Expérience"
          title="Parcours professionnel"
          description="Deux ans d'alternance au cœur du suivi financier et du contrôle des données, une expérience de conseil et un projet associatif fondé et piloté."
        />

        <ol className="relative mt-12 space-y-6 border-l border-navy-100 pl-8 dark:border-white/10 sm:pl-10">
          {experiences.map((exp, i) => (
            <li key={exp.id} className="relative">
              <span
                className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-emerald-500 bg-cream dark:bg-navy-950 sm:-left-[49px]"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <Reveal delay={Math.min(i * 0.05, 0.2)}>
                <article className="card p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                      <Icon name="Briefcase" size={13} />
                      {exp.tag}
                    </span>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-semibold text-navy-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {exp.org}
                  </p>
                  {exp.context && (
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {exp.context}
                    </p>
                  )}

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    {exp.groups.map((g) => (
                      <div key={g.title}>
                        <h4 className="font-mono text-[11px] uppercase tracking-wider text-navy-500 dark:text-slate-400">
                          {g.title}
                        </h4>
                        <ul className="mt-2 space-y-1.5">
                          {g.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                            >
                              <Icon
                                name="CheckCircle2"
                                size={14}
                                className="mt-1 shrink-0 text-emerald-500"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {exp.tools && exp.tools.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-navy-100/70 pt-4 dark:border-white/10">
                      {exp.tools.map((t) => (
                        <span key={t} className="chip px-2.5 py-0.5 text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
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
