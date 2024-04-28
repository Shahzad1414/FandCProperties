/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#00398A",
        "secondary":"#06A2DD",
        "tertiary":"#252525",
        "lightblue":"#194E92"
      }
    },
  },
  plugins: [],
}

