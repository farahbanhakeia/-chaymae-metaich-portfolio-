import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { categoryLabels, outcomeKindLabels } from '@/data/projects';
import type { Project } from '@/types';
import { cn } from '@/lib/cn';
import { Icon } from './Icon';

const outcomeTone: Record<Project['outcomeKind'], string> = {
  targeted: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-700 dark:text-emerald-300',
  design: 'border-cyan-400/40 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300',
  qualitative: 'border-navy-300/50 bg-navy-400/10 text-navy-700 dark:text-slate-300',
  deliverable: 'border-amber-400/40 bg-amber-400/10 text-amber-700 dark:text-amber-300',
};

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="card card-hover flex flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-900 text-white dark:bg-emerald-600">
          <Icon name={project.icon} size={20} />
        </span>
        <span
          className={cn(
            'rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider',
            outcomeTone[project.outcomeKind],
          )}
        >
          {outcomeKindLabels[project.outcomeKind]}
        </span>
      </div>

      <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">
        {categoryLabels[project.category]}
      </p>
      <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-navy-900 dark:text-white">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {project.tagline}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span key={s} className="chip px-2.5 py-0.5 text-xs">
            {s}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-navy-800 transition-colors hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400"
      >
        {open ? 'Masquer le détail' : 'Voir le détail'}
        <Icon
          name="ChevronUp"
          size={16}
          className={cn('transition-transform duration-300', open ? 'rotate-0' : 'rotate-180')}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <dl className="mt-4 space-y-4 border-t border-navy-100/70 pt-4 text-sm dark:border-white/10">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  Problématique
                </dt>
                <dd className="mt-1 italic text-slate-600 dark:text-slate-400">{project.problem}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  Objectif
                </dt>
                <dd className="mt-1 text-slate-700 dark:text-slate-300">{project.objective}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  Démarche
                </dt>
                <dd className="mt-1.5">
                  <ul className="space-y-1.5">
                    {project.approach.map((a) => (
                      <li key={a} className="flex gap-2 text-slate-700 dark:text-slate-300">
                        <Icon
                          name="CheckCircle2"
                          size={15}
                          className="mt-0.5 shrink-0 text-emerald-500"
                        />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  Résultat
                </dt>
                <dd className="mt-1 text-slate-700 dark:text-slate-300">{project.outcome}</dd>
              </div>
              <div className="rounded-xl bg-navy-50 p-3 dark:bg-white/5">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Ce que ça démontre
                </dt>
                <dd className="mt-1 text-navy-800 dark:text-slate-200">{project.demonstrates}</dd>
              </div>
            </dl>

            {project.links && project.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-3 py-2 text-xs"
                  >
                    {link.label}
                    <Icon name="ExternalLink" size={13} />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
