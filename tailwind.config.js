/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors:{
        'main-bg': '#030d14',
        'header-bg': '#08002f',
        'light-green': '#56AB91',
      },
      maxWidth:{
        'base': '1440px'
      }
    },
  },
  plugins: [],
}