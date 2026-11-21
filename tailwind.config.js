/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cinema: {
          black: "#050505",
          dark: "#0b0b0d",
          card: "#121216",
          border: "#261a1a",
          deepRed: "#B50016",
          fieryRed: "#FF2020",
          burntOrange: "#FF5A00",
          goldenOrange: "#FF9B24",
          gold: "#FFB03A"
        }
      },
      fontFamily: {
        cinema: ['"Cinzel"', 'serif'],
        display: ['"Montserrat"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        tamil: ['"Mukta Malar"', '"Noto Sans Tamil"', 'sans-serif']
      },
      animation: {
        'flame-glow': 'flameGlow 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'smoke-float': 'smokeFloat 12s ease-in-out infinite alternate',
      },
      keyframes: {
        flameGlow: {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 15px rgba(255, 32, 32, 0.6)) drop-shadow(0 0 35px rgba(255, 90, 0, 0.4))'
          },
          '50%': {
            filter: 'drop-shadow(0 0 30px rgba(255, 32, 32, 0.9)) drop-shadow(0 0 60px rgba(255, 155, 36, 0.6))'
          }
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        },
        smokeFloat: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-3%, -2%) scale(1.05)' },
          '100%': { transform: 'translate(3%, 1%) scale(0.98)' }
        }
      }
    },
  },
  plugins: [],
}
