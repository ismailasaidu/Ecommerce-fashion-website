/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    values: {
      "100px": "100px",
    },

    shades: {
      "ash": "#555555",
    },

    fontFamily: {
      display: ["lato"],
    },

    backgroundImage: {
      heroImage: ["url(`./Assets/hero.png`)"],
    },
    extend: {},
  },
  plugins: [],
};