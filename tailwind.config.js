/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'banner-back': '#0b1320',
      },
      fontFamily: {
        sans: ['Biryani', 'sans-serif'], // Set Briyani as the primary sans-serif font
      },
      animation: {
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'pop': 'pop 0.4s ease-out forwards',
      },
      keyframes: {
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pop: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}