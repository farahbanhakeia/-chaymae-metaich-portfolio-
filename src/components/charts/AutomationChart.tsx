import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { automationData } from '@/data/finance';
import { ChartTooltip } from './ChartTooltip';
import { useChartColors } from './useChartColors';

export function AutomationChart() {
  const c = useChartColors();
  const colors = [c.slate, c.emerald];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        layout="vertical"
        data={automationData}
        margin={{ top: 4, right: 36, bottom: 4, left: 8 }}
        barCategoryGap={22}
      >
        <XAxis type="number" hide domain={[0, 120]} />
        <YAxis
          type="category"
          dataKey="name"
          width={140}
          tickLine={false}
          axisLine={false}
          tick={{ fill: c.axis, fontSize: 12 }}
        />
        <Tooltip cursor={{ fill: 'transparent' }} content={<ChartTooltip unit=" %" />} />
        <Bar dataKey="temps" name="Temps de traitement" radius={[6, 6, 6, 6]} barSize={26}>
          {automationData.map((_, i) => (
            <Cell key={i} fill={colors[i % colors.length]} />
          ))}
          <LabelList
            dataKey="label"
            position="right"
            fill={c.axis}
            fontSize={12}
            fontFamily="IBM Plex Mono, monospace"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
