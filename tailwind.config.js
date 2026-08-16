/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
        display: ['Space Grotesk', 'General Sans', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#05050a',
          50: '#0a0a12',
          100: '#0e0e1a',
          200: '#13131f',
          300: '#1b1b2b',
          400: '#26263a',
        },
        accent: {
          indigo: '#6366f1',
          violet: '#8b5cf6',
          cyan: '#22d3ee',
        },
      },
      backgroundImage: {
        'accent-gradient':
          'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #22d3ee 100%)',
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(139, 92, 246, 0.5)',
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.45)',
        'glow-lg': '0 24px 80px -20px rgba(99, 102, 241, 0.45)',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(40px,-30px,0) scale(1.1)' },
          '66%': { transform: 'translate3d(-30px,20px,0) scale(0.95)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        aurora: 'aurora 18s ease-in-out infinite',
        'aurora-slow': 'aurora 26s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
