import { Icon } from './Icon';

/** Badge d'honnêteté : signale explicitement des données de démonstration. */
export function IllustrativeBadge({ label = 'Données illustratives' }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-amber-700 dark:text-amber-300">
      <Icon name="CircleDot" size={11} />
      {label}
    </span>
  );
}
