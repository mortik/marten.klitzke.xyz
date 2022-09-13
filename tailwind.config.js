/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        brand: {
          primary: "#428bca",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
