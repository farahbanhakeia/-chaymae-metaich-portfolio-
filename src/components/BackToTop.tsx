import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/lib/cn';
import { Icon } from './Icon';

export function BackToTop() {
  const show = useScrolled(600);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Retour en haut de page"
      className={cn(
        'fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-navy-900 text-white shadow-card-hover transition-all duration-300 hover:bg-navy-800',
        'dark:bg-emerald-600 dark:hover:bg-emerald-500',
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <Icon name="ChevronUp" size={20} />
    </button>
  );
}
