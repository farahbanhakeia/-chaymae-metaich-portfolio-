import { domains, explorations } from '@/data/finance';
import { AnomaliesChart } from '@/components/charts/AnomaliesChart';
import { AutomationChart } from '@/components/charts/AutomationChart';
import { CashFlowChart } from '@/components/charts/CashFlowChart';
import { ChartCard } from '@/components/charts/ChartCard';
import { DsoChart } from '@/components/charts/DsoChart';
import { Icon } from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

export function FinanceEconomics() {
  return (
    <section id="finance" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="05 — Finance & Data"
          title={
            <>
              Data <span className="text-gradient">×</span> Finance &amp; Économie
            </>
          }
          description="Là où mes compétences analytiques rencontrent la finance, les statistiques et l'économie. Voici les domaines que je sais aborder — et des visualisations de démonstration qui illustrent le type d'analyses que je construis."
        />

        {/* Honesty banner */}
        <Reveal className="mt-8">
          <div className="flex items-start gap-3 rounded-xl border border-amber-400/30 bg-amber-400/5 p-4 text-sm text-amber-800 dark:text-amber-200">
            <Icon name="CircleDot" size={18} className="mt-0.5 shrink-0 text-amber-500" />
            <p>
              <span className="font-semibold">Note d'honnêteté —</span> les graphiques ci-dessous
              utilisent des <strong>données illustratives</strong> (démonstration de mise en forme).
              Ils ne représentent aucun chiffre réel d'entreprise et servent uniquement à montrer le
              type d'analyses réalisables, en lien avec mes missions.
            </p>
          </div>
        </Reveal>

        {/* Domains of application */}
        <div className="mt-12">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Domaines d'application
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((d, i) => (
              <Reveal key={d.title} delay={Math.min(i * 0.05, 0.3)}>
                <div className="card card-hover flex h-full items-start gap-3.5 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Icon name={d.icon} size={19} />
                  </span>
                  <div>
                    <h4 className="font-display text-[15px] font-semibold text-navy-900 dark:text-white">
                      {d.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {d.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Visualisations */}
        <div className="mt-14">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Visualisations · démonstration
          </h3>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <ChartCard
                title="Encaissements vs impayés"
                subtitle="Suivi mensuel"
                icon="LineChart"
                footnote="Illustratif — en lien avec le suivi des encaissements et des impayés."
              >
                <CashFlowChart />
              </ChartCard>
            </Reveal>
            <Reveal delay={0.08}>
              <ChartCard
                title="Délais de paiement (DSO)"
                subtitle="Tendance dans le temps"
                icon="Gauge"
                footnote="Illustratif — en lien avec le projet de KPI de suivi des paiements."
              >
                <DsoChart />
              </ChartCard>
            </Reveal>
            <Reveal delay={0.12}>
              <ChartCard
                title="Anomalies détectées"
                subtitle="Répartition par type"
                icon="AlertTriangle"
                footnote="Illustratif — contrôle de cohérence et détection d'écarts."
              >
                <AnomaliesChart />
              </ChartCard>
            </Reveal>
            <Reveal delay={0.16}>
              <ChartCard
                title="Automatisation d'un reporting"
                subtitle="Temps de traitement (base 100)"
                icon="Workflow"
                footnote="Illustratif — en lien avec l'automatisation VBA d'un reporting récurrent."
              >
                <AutomationChart />
              </ChartCard>
            </Reveal>
          </div>
        </div>

        {/* Explorations */}
        <div className="mt-14">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Explorations & idées de projets
            </h3>
            <span className="rounded-full border border-navy-200 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:border-white/15 dark:text-slate-400">
              pas des réalisations terminées
            </span>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {explorations.map((e, i) => (
              <Reveal key={e.title} delay={Math.min(i * 0.06, 0.2)}>
                <div className="flex h-full flex-col rounded-2xl border border-dashed border-navy-200 bg-transparent p-5 transition-colors hover:border-emerald-400/60 dark:border-white/15">
                  <Icon name={e.icon} size={20} className="text-emerald-500" />
                  <h4 className="mt-3 font-display text-[15px] font-semibold text-navy-900 dark:text-white">
                    {e.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {e.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
