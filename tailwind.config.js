/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      lightGreen: "#8B9027",
      darkGreen: "#2E300D",
      dark: "#172121",
      light: "#F2F0E3",
      gold: "#E09200",
      green50: "#3E4012",
      green40: "#779B77",
      green30: "#8AA88A",
      green20: "#DCE08F",
      brown: "#D5C4B4",
      error: "#ff3333",
      success: "#198754",
    },
    extend: {
      backgroundImage: (theme) => ({
        bgImage: "url('/src/assets/hermes-rivera-Ww8eQWjMJWk-unsplash.jpg')",
      }),
      dropShadow: (theme) => ({
        "3xl": "0px 0px 40px 11px rgba(0,0,0,0.75);",
      }),
    },
  },
  plugins: [],
};
