/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   slideUp: {
      //     '0%': { transform: 'translateY(100%)', opacity: 0 },
      //     '100%': { transform: 'translateY(0)', opacity: 1 },
      //   },
      // },
      // animation: {
      //   slideUp: 'slideUp 0.5s ease-out',
      // },
      transitionProperty: {
        'transform': 'transform',
        'opacity': 'opacity',
      },
    },
  },
  plugins: [],
}

