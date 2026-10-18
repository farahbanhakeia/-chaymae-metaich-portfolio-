import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/cn';
import { Icon } from './Icon';

export function ThemeToggle({ className }: { className?: string }) {
  const { isDark, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Activer le thème clair' : 'Activer le thème sombre'}
      className={cn(
        'inline-grid h-10 w-10 place-items-center rounded-xl border border-navy-200 bg-white text-navy-700 transition-colors hover:bg-navy-50',
        'dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10',
        className,
      )}
    >
      <Icon name={isDark ? 'Sun' : 'Moon'} size={18} />
    </button>
  );
}
