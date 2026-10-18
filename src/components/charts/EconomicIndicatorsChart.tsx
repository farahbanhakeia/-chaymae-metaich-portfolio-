import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { economicIndicatorsData } from '@/data/finance';
import { ChartTooltip } from './ChartTooltip';
import { useChartColors } from './useChartColors';

export function EconomicIndicatorsChart() {
  const c = useChartColors();

  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={economicIndicatorsData} margin={{ top: 8, right: 8, bottom: 0, left: -20 }}>
        <CartesianGrid stroke={c.grid} strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="year"
          tickLine={false}
          axisLine={false}
          tick={{ fill: c.axis, fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
        />
        <YAxis
          width={34}
          tickLine={false}
          axisLine={false}
          tick={{ fill: c.axis, fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
        />
        <Tooltip cursor={{ stroke: c.grid, strokeWidth: 1 }} content={<ChartTooltip unit=" %" />} />
        <Line
          type="monotone"
          dataKey="croissance"
          name="Croissance"
          stroke={c.emerald}
          strokeWidth={2.5}
          dot={{ r: 3, fill: c.emerald, strokeWidth: 0 }}
          activeDot={{ r: 5, strokeWidth: 0 }}
          isAnimationActive
          animationDuration={1200}
        />
        <Line
          type="monotone"
          dataKey="inflation"
          name="Inflation"
          stroke={c.gold}
          strokeWidth={2.5}
          dot={{ r: 3, fill: c.gold, strokeWidth: 0 }}
          activeDot={{ r: 5, strokeWidth: 0 }}
          isAnimationActive
          animationDuration={1200}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
