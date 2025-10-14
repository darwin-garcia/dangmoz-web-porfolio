/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', // o 'class'
  content: [
    // ...tus rutas de archivos
  ],  
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse-colors 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-colors': {
          '0%, 100%': {
            opacity: '0.75',
            filter: 'blur(32px) hue-rotate(0deg)',
          },
          '50%': {
            opacity: '1',
            filter: 'blur(48px) hue-rotate(-90deg)',
          },
        },
      },
    },
  },
  plugins: [],
  
};