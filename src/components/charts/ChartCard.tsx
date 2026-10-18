import type { ReactNode } from 'react';
import { Icon } from '@/components/Icon';
import { IllustrativeBadge } from '@/components/IllustrativeBadge';

interface ChartCardProps {
  title: string;
  subtitle: string;
  icon: string;
  children: ReactNode;
  footnote?: string;
}

export function ChartCard({ title, subtitle, icon, children, footnote }: ChartCardProps) {
  return (
    <div className="card card-hover flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Icon name={icon} size={19} />
          </span>
          <div>
            <h3 className="font-display text-base font-semibold text-navy-900 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
          </div>
        </div>
        <IllustrativeBadge />
      </div>

      <div className="mt-5 flex-1">{children}</div>

      {footnote && (
        <p className="mt-3 text-xs text-slate-400 dark:text-slate-500">{footnote}</p>
      )}
    </div>
  );
}
