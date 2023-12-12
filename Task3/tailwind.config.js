/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // enable dark mode
  theme: {
    extend: {
      colors:{
        primary: "#F5EEC8",
        secondary:"#45474B",
        third:"#495E57"
      },
fontFamily:{

  hello: "'Quicksand', sans-serif",
  m: "'Space Mono', monospace"

}
    
    },
  },
  plugins: [],
}

