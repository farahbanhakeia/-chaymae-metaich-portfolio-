import { certifications, languages, skillCategories } from '@/data/skills';
import type { SkillLevel } from '@/types';
import { cn } from '@/lib/cn';
import { Icon } from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const levelDot: Record<SkillLevel, string> = {
  practiced: 'bg-emerald-500',
  studied: 'bg-cyan-500',
  notion: 'bg-slate-400',
};

const legend: { level: SkillLevel; label: string }[] = [
  { level: 'practiced', label: 'Mis en pratique' },
  { level: 'studied', label: 'Étudié' },
  { level: 'notion', label: 'Notions' },
];

export function Skills() {
  return (
    <section id="competences" className="section">
      <div className="container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="03 — Compétences"
            title="Un socle finance, data et outils"
            description="Des compétences concrètes, acquises en formation et en alternance. Chaque compétence est honnêtement située selon mon niveau de pratique."
          />
          <Reveal delay={0.1}>
            <ul className="flex flex-wrap gap-4">
              {legend.map((l) => (
                <li key={l.level} className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className={cn('h-2.5 w-2.5 rounded-full', levelDot[l.level])} />
                  {l.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={Math.min(i * 0.06, 0.3)}>
              <div className="card card-hover h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-white dark:bg-emerald-600">
                    <Icon name={cat.icon} size={20} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>
                {cat.blurb && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {cat.blurb}
                  </p>
                )}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <li key={skill.name} className="chip text-xs sm:text-sm">
                      {skill.level && (
                        <span className={cn('h-1.5 w-1.5 rounded-full', levelDot[skill.level])} />
                      )}
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Certifications & languages */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="card h-full p-6">
              <h3 className="flex items-center gap-2 font-display text-base font-semibold text-navy-900 dark:text-white">
                <Icon name="Award" size={18} className="text-emerald-500" />
                Certifications & formations
              </h3>
              <ul className="mt-4 space-y-3">
                {certifications.map((c) => (
                  <li key={c.title} className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Icon name={c.icon} size={16} />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-navy-800 dark:text-slate-200">{c.title}</p>
                      <p className="font-mono text-xs text-slate-500 dark:text-slate-400">{c.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card h-full p-6">
              <h3 className="flex items-center gap-2 font-display text-base font-semibold text-navy-900 dark:text-white">
                <Icon name="Users" size={18} className="text-emerald-500" />
                Langues
              </h3>
              <ul className="mt-4 space-y-4">
                {languages.map((l) => (
                  <li key={l.name}>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-medium text-navy-800 dark:text-slate-200">{l.name}</span>
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{l.level}</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-navy-100 dark:bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
                        style={{ width: `${l.score}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
