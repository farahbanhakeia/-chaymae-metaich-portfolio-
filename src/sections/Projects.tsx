import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projectFilters, projects } from '@/data/projects';
import type { ProjectCategory } from '@/types';
import { cn } from '@/lib/cn';
import { ProjectCard } from '@/components/ProjectCard';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

type Filter = ProjectCategory | 'all';

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all');
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projets" className="section bg-white/50 dark:bg-navy-900/30">
      <div className="container">
        <SectionHeading
          eyebrow="04 — Projets"
          title="Projets & réalisations"
          description="Des projets réels, présentés honnêtement : problématique, démarche, résultat et ce qu'ils démontrent. Filtrez par domaine et dépliez chaque carte pour le détail."
        />

        <Reveal className="mt-8">
          <div role="tablist" aria-label="Filtrer les projets" className="flex flex-wrap gap-2">
            {projectFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-all',
                  filter === f.id
                    ? 'bg-navy-900 text-white shadow-card dark:bg-emerald-600'
                    : 'border border-navy-200 text-navy-700 hover:border-navy-300 hover:bg-navy-50 dark:border-white/15 dark:text-slate-300 dark:hover:bg-white/5',
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-8 grid items-start gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
