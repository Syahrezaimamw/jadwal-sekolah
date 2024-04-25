/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'navy':'#00004d'
      }
    },
  },
  plugins: [],
}

