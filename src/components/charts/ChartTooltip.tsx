import { useChartColors } from './useChartColors';

interface TipPayload {
  name?: string;
  value?: number | string;
  color?: string;
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: TipPayload[];
  label?: string | number;
  unit?: string;
}

export function ChartTooltip({ active, payload, label, unit = '' }: ChartTooltipProps) {
  const c = useChartColors();
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div
      className="rounded-xl px-3 py-2 text-xs shadow-xl"
      style={{
        background: c.tooltipBg,
        border: `1px solid ${c.tooltipBorder}`,
        color: c.tooltipText,
      }}
    >
      {label !== undefined && label !== '' && (
        <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.12em] opacity-60">
          {label}
        </div>
      )}
      <div className="space-y-1">
        {payload.map((p, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ background: p.color }}
            />
            <span className="opacity-80">{p.name}</span>
            <span className="ml-auto pl-3 font-mono font-medium tabular-nums">
              {p.value}
              {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
