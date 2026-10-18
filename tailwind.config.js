/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        navy: {
          50: '#EEF3F9',
          100: '#D6E2F0',
          200: '#AEC5E0',
          300: '#7B9DC6',
          400: '#4E74A5',
          500: '#2E527F',
          600: '#1C3F6E',
          700: '#143055',
          800: '#0E2240',
          900: '#0A1A2F',
          950: '#050E1C',
        },
        emerald: {
          50: '#ECFBF4',
          100: '#CFF2E2',
          200: '#9FE2C6',
          300: '#64CBA4',
          400: '#2FAE83',
          500: '#0E9268',
          600: '#0B7A57',
          700: '#0A6448',
          800: '#0A4F3A',
          900: '#093F30',
        },
        cyan: {
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        gold: {
          100: '#F6EDD4',
          200: '#ECDCA9',
          300: '#DCC17D',
          400: '#CDAA5A',
          500: '#C0954A',
          600: '#A2793A',
          700: '#7E5E2E',
        },
        cream: '#F7F9F8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(10, 26, 47, 0.04), 0 8px 24px -12px rgba(10, 26, 47, 0.18)',
        'card-hover': '0 2px 4px rgba(10, 26, 47, 0.06), 0 20px 40px -16px rgba(10, 26, 47, 0.28)',
        glow: '0 0 0 1px rgba(16, 185, 129, 0.18), 0 10px 40px -12px rgba(16, 185, 129, 0.35)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(16,53,85,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,53,85,0.06) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(120,160,210,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,160,210,0.08) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(18px, -14px) scale(1.06)' },
          '66%': { transform: 'translate(-14px, 10px) scale(0.96)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
        'marquee-slow': 'marquee 48s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        drift: 'drift 20s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
      },
    },
  },
  plugins: [],
};
