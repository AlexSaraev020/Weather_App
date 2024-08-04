/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': "0 0 20px rgba(255, 255, 255, 0.35)",
        'glow-sm': "0 0 10px rgba(255, 255, 255, 0.35)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        blink: {
          '50%': { opacity: 0 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
        blink: 'blink 1s infinite both',
      },
      colors: {
        'fancyGray': '#62617B'
      },
    },
  },
  plugins: [],
}