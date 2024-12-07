/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3563E9",
        secondary: "#54A6FF",
        accent: "#90A3BF",
        icon: "#596780"
      }
    },

  },
  plugins: [],
}