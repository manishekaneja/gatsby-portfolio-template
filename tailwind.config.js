const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ddf1c6",
          DEFAULT: "#bde390",
          dark: "green",
        },
        secondary: {
          light: "#bde390",
          DEFAULT: "#7176b0",
          dark: "black",
        },
        light: "#fff",
        dark: "#333",
        neutral: "transparent",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
