/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      small: "576px",
      medium: "768px",
      large: "992px",
      veryLarg: "1200px",
      extraLarge: "1536px",
    },
    extend: {},
  },
  plugins: [],
};
