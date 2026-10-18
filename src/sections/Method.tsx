import { methodSteps } from '@/data/method';
import { Icon } from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

export function Method() {
  return (
    <section id="methode" className="section bg-white/50 dark:bg-navy-900/30">
      <div className="container">
        <SectionHeading
          eyebrow="02 — Méthode"
          title="Comment je travaille"
          description="Au-delà de ce que je sais faire : ma manière d'aborder un problème, de la compréhension du besoin jusqu'à la décision."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {methodSteps.map((step, i) => (
            <Reveal key={step.num} delay={Math.min(i * 0.05, 0.3)}>
              <div className="card card-hover group relative h-full overflow-hidden p-6">
                <span className="pointer-events-none absolute -right-2 -top-3 font-display text-7xl font-extrabold text-navy-50 transition-colors group-hover:text-emerald-500/10 dark:text-white/5">
                  {step.num}
                </span>
                <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Icon name={step.icon} size={20} />
                </span>
                <h3 className="relative mt-4 font-display text-lg font-semibold text-navy-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}

          {/* Flow summary tile */}
          <Reveal delay={0.35}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-navy-900 bg-navy-900 p-6 text-white dark:border-emerald-600/40 dark:bg-gradient-to-br dark:from-navy-800 dark:to-navy-900">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-400">
                Le fil conducteur
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-display text-lg font-semibold">
                <span>Données</span>
                <Icon name="ArrowRight" size={16} className="text-emerald-400" />
                <span>Analyse</span>
                <Icon name="ArrowRight" size={16} className="text-emerald-400" />
                <span>Information</span>
                <Icon name="ArrowRight" size={16} className="text-emerald-400" />
                <span className="text-emerald-400">Décision</span>
              </div>
              <p className="mt-3 text-sm text-slate-300">
                Produire un résultat compréhensible et utile — pas seulement un résultat.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
