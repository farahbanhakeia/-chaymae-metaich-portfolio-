import { aboutParagraphs, aboutSignature } from '@/data/profile';
import { Icon } from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const quickFacts = [
  { icon: 'GraduationCap', label: 'Formation', value: 'Programme Grande École — Finance (Montpellier BS)' },
  { icon: 'Target', label: 'Prochaine étape', value: 'Mastère Spécialisé ACSI — SKEMA (2027)' },
  { icon: 'Briefcase', label: 'Expérience', value: '2 ans d\'alternance en finance + conseil junior' },
  { icon: 'Landmark', label: 'Positionnement', value: 'Finance · Contrôle · Reporting · Data' },
];

export function About() {
  return (
    <section id="apropos" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="01 — À propos"
          title={<>À l'intersection de la finance, de la data et du contrôle.</>}
          description="Un profil analytique qui aime les problématiques concrètes et quantitatives — comprendre les données, les fiabiliser et les transformer en décisions."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          {/* Narrative */}
          <Reveal className="space-y-5">
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {p}
              </p>
            ))}

            <blockquote className="relative mt-8 rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-5 pl-6">
              <Icon
                name="Quote"
                size={22}
                className="absolute -top-3 left-5 text-emerald-500"
              />
              <p className="font-display text-[15px] font-medium italic leading-relaxed text-navy-800 dark:text-slate-200">
                {aboutSignature}
              </p>
            </blockquote>
          </Reveal>

          {/* Quick facts */}
          <Reveal delay={0.1} className="space-y-3">
            {quickFacts.map((f) => (
              <div key={f.label} className="card flex items-start gap-4 p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-900 text-white dark:bg-emerald-600">
                  <Icon name={f.icon} size={18} />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {f.label}
                  </p>
                  <p className="mt-0.5 text-sm font-medium leading-snug text-navy-800 dark:text-slate-200">
                    {f.value}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
