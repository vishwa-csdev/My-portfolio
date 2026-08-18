/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#030407',
        surface: {
          DEFAULT: '#08090e',
          elevated: '#0e1017',
          card: '#0a0b12',
          hover: '#131520',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          light: 'rgba(255, 255, 255, 0.12)',
        },
        accent: {
          cyan: '#38bdf8',
          indigo: '#818cf8',
          violet: '#a855f7',
          emerald: '#34d399',
          amber: '#fbbf24',
          rose: '#f43f5e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glass-card': '0 0 0 1px rgba(255, 255, 255, 0.07), 0 10px 30px -5px rgba(0, 0, 0, 0.8)',
        'glow-cyan': '0 0 35px -5px rgba(56, 189, 248, 0.25)',
        'glow-indigo': '0 0 35px -5px rgba(129, 140, 248, 0.25)',
        'glow-emerald': '0 0 35px -5px rgba(52, 211, 153, 0.25)',
        'glow-amber': '0 0 35px -5px rgba(251, 191, 36, 0.25)',
        'glow-rose': '0 0 35px -5px rgba(244, 63, 94, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
