/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        rajahGold: "rgba(255, 192, 97,1.0)",
        marigold: "rgba(234, 162, 34, 1.0)",
        blackOlive: "rgba(59, 60, 53, 1.0)",
        blackEerie: "rgba(30, 31, 27,1.0)",
        darkBrown: "rgba(101, 67, 33,1.0)",
        brownSugar: "rgba(173, 114, 78,1.0)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};