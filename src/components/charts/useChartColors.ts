import { useTheme } from '@/hooks/useTheme';

export interface ChartPalette {
  emerald: string;
  navy: string;
  cyan: string;
  gold: string;
  danger: string;
  slate: string;
  grid: string;
  axis: string;
  donut: string[];
  tooltipBg: string;
  tooltipBorder: string;
  tooltipText: string;
}

const light: ChartPalette = {
  emerald: '#059669',
  navy: '#1C3F6E',
  cyan: '#0891B2',
  gold: '#C0954A',
  danger: '#D9796B',
  slate: '#94A3B8',
  grid: '#E6EBF2',
  axis: '#64748B',
  donut: ['#1C3F6E', '#059669', '#C0954A', '#0891B2', '#94A3B8'],
  tooltipBg: '#FFFFFF',
  tooltipBorder: '#E2E8F0',
  tooltipText: '#0A1A2F',
};

const dark: ChartPalette = {
  emerald: '#34D399',
  navy: '#7B9DC6',
  cyan: '#22D3EE',
  gold: '#DCC17D',
  danger: '#F0998A',
  slate: '#64748B',
  grid: 'rgba(148,163,184,0.16)',
  axis: '#94A3B8',
  donut: ['#4E74A5', '#34D399', '#DCC17D', '#22D3EE', '#94A3B8'],
  tooltipBg: '#0E2240',
  tooltipBorder: 'rgba(255,255,255,0.14)',
  tooltipText: '#E2E8F0',
};

export function useChartColors(): ChartPalette {
  const { isDark } = useTheme();
  return isDark ? dark : light;
}
