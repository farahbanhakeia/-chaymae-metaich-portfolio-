import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { marketIndexData } from '@/data/finance';
import { ChartTooltip } from './ChartTooltip';
import { useChartColors } from './useChartColors';

export function MarketChart() {
  const c = useChartColors();

  return (
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart data={marketIndexData} margin={{ top: 8, right: 8, bottom: 0, left: -18 }}>
        <defs>
          <linearGradient id="marketFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={c.emerald} stopOpacity={0.32} />
            <stop offset="100%" stopColor={c.emerald} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke={c.grid} strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="t"
          interval={2}
          tickLine={false}
          axisLine={false}
          tick={{ fill: c.axis, fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
        />
        <YAxis
          width={38}
          domain={['dataMin - 4', 'dataMax + 4']}
          tickLine={false}
          axisLine={false}
          tick={{ fill: c.axis, fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
        />
        <Tooltip cursor={{ stroke: c.grid, strokeWidth: 1 }} content={<ChartTooltip unit=" pts" />} />
        <Area
          type="monotone"
          dataKey="value"
          name="Indice"
          stroke={c.emerald}
          strokeWidth={2.5}
          fill="url(#marketFill)"
          dot={false}
          activeDot={{ r: 4, strokeWidth: 0 }}
          isAnimationActive
          animationDuration={1300}
          animationEasing="ease-out"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
