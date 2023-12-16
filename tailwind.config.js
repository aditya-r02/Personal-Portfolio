/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'calibri':["Calibri", "arial"],
    },
    screens:{
      'laptop':'1024px'
    },
    boxShadow:{
      'card':'0px 4px 8px rgba(0, 0, 0, 0.1)',
    }
  },
  plugins: [],
}