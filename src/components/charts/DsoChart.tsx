import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { dsoData } from '@/data/finance';
import { ChartTooltip } from './ChartTooltip';
import { useChartColors } from './useChartColors';

export function DsoChart() {
  const c = useChartColors();

  return (
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart data={dsoData} margin={{ top: 8, right: 8, bottom: 0, left: -18 }}>
        <defs>
          <linearGradient id="dsoFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={c.cyan} stopOpacity={0.3} />
            <stop offset="100%" stopColor={c.cyan} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke={c.grid} strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tick={{ fill: c.axis, fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          width={38}
          domain={[20, 'dataMax + 6']}
          tick={{ fill: c.axis, fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
        />
        <Tooltip cursor={{ stroke: c.grid, strokeWidth: 1 }} content={<ChartTooltip unit=" j" />} />
        <Area
          type="monotone"
          dataKey="dso"
          name="DSO (délai de paiement)"
          stroke={c.cyan}
          strokeWidth={2.5}
          fill="url(#dsoFill)"
          dot={{ r: 3, fill: c.cyan, strokeWidth: 0 }}
          activeDot={{ r: 5, strokeWidth: 0 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
