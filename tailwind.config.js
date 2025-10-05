/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
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