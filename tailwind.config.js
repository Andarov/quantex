const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors:{
        'main-bg': '#030d14',
        'header-bg': '#08002f',
        'light-green': '#56AB91',
        'green-card': 'rgba(48, 224, 161, 0.10)',
        'red-card': 'rgba(246, 84, 62, 0.10)',
        'tab-bg': 'rgba(255, 255, 255, 0.02)'
      },
      maxWidth:{
        'base': '1440px',
      }
    },
  },
  plugins: [],
})