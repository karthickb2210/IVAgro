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
      }
    },
  },
  plugins: [],
}