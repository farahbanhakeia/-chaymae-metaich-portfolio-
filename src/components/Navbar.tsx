import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '@/data/nav';
import { profile } from '@/data/profile';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/lib/cn';
import { Icon } from './Icon';
import { ThemeToggle } from './ThemeToggle';

const ids = navLinks.map((l) => l.id);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(16);
  const active = useScrollSpy(ids);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-navy-100/70 bg-cream/85 backdrop-blur-lg dark:border-white/10 dark:bg-navy-950/80'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        className="container flex h-16 items-center justify-between lg:h-20"
        aria-label="Navigation principale"
      >
        <a href="#accueil" className="flex items-center gap-2.5" aria-label="Chaymae Metaich — accueil">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy-900 font-mono text-sm font-semibold text-white dark:bg-white dark:text-navy-900">
            {profile.initials}
          </span>
          <span className="hidden font-display text-[15px] font-semibold tracking-tight text-navy-900 dark:text-white sm:block">
            {profile.firstName}{' '}
            <span className="text-slate-400 dark:text-slate-500">{profile.lastName}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  active === l.id
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-navy-700 hover:text-navy-900 dark:text-slate-300 dark:hover:text-white',
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.cvPath}
            download
            className="btn-primary hidden h-10 px-4 py-0 text-sm sm:inline-flex"
          >
            <Icon name="Download" size={16} />
            CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            className="inline-grid h-10 w-10 place-items-center rounded-xl border border-navy-200 bg-white text-navy-700 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 lg:hidden"
          >
            <Icon name={open ? 'X' : 'Menu'} size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-navy-100/70 bg-cream/95 backdrop-blur-lg dark:border-white/10 dark:bg-navy-950/95 lg:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors',
                      active === l.id
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : 'text-navy-700 hover:bg-navy-50 dark:text-slate-300 dark:hover:bg-white/5',
                    )}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={profile.cvPath}
                  download
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  <Icon name="Download" size={16} />
                  Télécharger mon CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
