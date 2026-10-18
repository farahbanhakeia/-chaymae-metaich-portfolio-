import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { cashFlowData } from '@/data/finance';
import { ChartTooltip } from './ChartTooltip';
import { useChartColors } from './useChartColors';

export function CashFlowChart() {
  const c = useChartColors();

  return (
    <ResponsiveContainer width="100%" height={240}>
      <ComposedChart data={cashFlowData} margin={{ top: 8, right: 8, bottom: 0, left: -18 }}>
        <defs>
          <linearGradient id="encaissementsFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={c.emerald} stopOpacity={0.35} />
            <stop offset="100%" stopColor={c.emerald} stopOpacity={0.02} />
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
          tick={{ fill: c.axis, fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
        />
        <Tooltip
          cursor={{ stroke: c.grid, strokeWidth: 1 }}
          content={<ChartTooltip unit=" k€" />}
        />
        <Area
          type="monotone"
          dataKey="encaissements"
          name="Encaissements"
          stroke={c.emerald}
          strokeWidth={2.5}
          fill="url(#encaissementsFill)"
          dot={false}
          activeDot={{ r: 4, strokeWidth: 0 }}
        />
        <Line
          type="monotone"
          dataKey="impayes"
          name="Impayés"
          stroke={c.danger}
          strokeWidth={2.5}
          strokeDasharray="5 4"
          dot={false}
          activeDot={{ r: 4, strokeWidth: 0 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
