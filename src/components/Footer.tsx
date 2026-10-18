import { navLinks } from '@/data/nav';
import { profile, socials } from '@/data/profile';
import { Icon } from './Icon';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-100/70 bg-white/60 dark:border-white/10 dark:bg-navy-950/60">
      <div className="container py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <a href="#accueil" className="flex items-center gap-2.5" aria-label="Chaymae Metaich — accueil">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy-900 font-mono text-sm font-semibold text-white dark:bg-white dark:text-navy-900">
                {profile.initials}
              </span>
              <span className="font-display text-[15px] font-semibold text-navy-900 dark:text-white">
                {profile.name}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {profile.taglineFr}
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <Icon name="MapPin" size={15} className="text-emerald-500" />
              {profile.location}
            </p>
          </div>

          <nav aria-label="Pied de page" className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-sm text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.cvPath}
              download
              className="text-sm font-medium text-navy-800 transition-colors hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400"
            >
              Télécharger le CV
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-navy-100/70 pt-6 dark:border-white/10 sm:flex-row">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {year} {profile.name}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-navy-200 text-navy-700 transition-colors hover:border-emerald-400 hover:text-emerald-600 dark:border-white/15 dark:text-slate-300 dark:hover:text-emerald-400"
              >
                <Icon name={s.icon} size={17} />
              </a>
            ))}
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-lg border border-navy-200 text-navy-700 transition-colors hover:border-emerald-400 hover:text-emerald-600 dark:border-white/15 dark:text-slate-300 dark:hover:text-emerald-400"
              >
                <Icon name="Github" size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
