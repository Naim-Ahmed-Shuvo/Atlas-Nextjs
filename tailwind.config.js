const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily:{
        poppins: ['Poppins']
      }
    },
  },
  plugins: [],
}
