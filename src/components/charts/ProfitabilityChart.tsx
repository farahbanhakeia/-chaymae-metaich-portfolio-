import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { profitabilityData } from '@/data/finance';
import { ChartTooltip } from './ChartTooltip';
import { useChartColors } from './useChartColors';

export function ProfitabilityChart() {
  const c = useChartColors();

  return (
    <ResponsiveContainer width="100%" height={240}>
      <ComposedChart data={profitabilityData} margin={{ top: 8, right: 2, bottom: 0, left: -20 }}>
        <CartesianGrid stroke={c.grid} strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="year"
          tickLine={false}
          axisLine={false}
          tick={{ fill: c.axis, fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
        />
        <YAxis
          yAxisId="left"
          width={34}
          tickLine={false}
          axisLine={false}
          tick={{ fill: c.axis, fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          width={32}
          tickLine={false}
          axisLine={false}
          tick={{ fill: c.axis, fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
        />
        <Tooltip cursor={{ fill: 'transparent' }} content={<ChartTooltip />} />
        <Bar
          yAxisId="left"
          dataKey="ca"
          name="CA (k€)"
          fill={c.navy}
          radius={[5, 5, 0, 0]}
          barSize={24}
          isAnimationActive
          animationDuration={1100}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="marge"
          name="Marge (%)"
          stroke={c.gold}
          strokeWidth={2.5}
          dot={{ r: 3, fill: c.gold, strokeWidth: 0 }}
          activeDot={{ r: 5, strokeWidth: 0 }}
          isAnimationActive
          animationDuration={1300}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
