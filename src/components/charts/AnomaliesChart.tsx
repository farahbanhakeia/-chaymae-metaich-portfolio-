import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { anomaliesData } from '@/data/finance';
import { ChartTooltip } from './ChartTooltip';
import { useChartColors } from './useChartColors';

export function AnomaliesChart() {
  const c = useChartColors();
  const total = anomaliesData.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
      <div className="relative h-[180px] w-[180px] shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip content={<ChartTooltip unit=" %" />} />
            <Pie
              data={anomaliesData}
              dataKey="value"
              nameKey="name"
              innerRadius={54}
              outerRadius={82}
              paddingAngle={3}
              stroke="none"
            >
              {anomaliesData.map((_, i) => (
                <Cell key={i} fill={c.donut[i % c.donut.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-2xl font-bold text-navy-900 dark:text-white">
            {total}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
            anomalies
          </span>
        </div>
      </div>

      <ul className="w-full space-y-2.5">
        {anomaliesData.map((d, i) => (
          <li key={d.name} className="flex items-center gap-2.5 text-sm">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-sm"
              style={{ background: c.donut[i % c.donut.length] }}
            />
            <span className="text-navy-700 dark:text-slate-300">{d.name}</span>
            <span className="ml-auto font-mono text-navy-500 dark:text-slate-400">{d.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
