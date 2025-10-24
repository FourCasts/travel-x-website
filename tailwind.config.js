/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0D0D0D',
          white: '#F5F5F5',
          gold: '#C7A45E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(199,164,94,0.4), 0 0 12px -2px rgba(199,164,94,0.6)'
      }
    },
  },
  plugins: [],
};
