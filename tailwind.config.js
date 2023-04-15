/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
      'lightGreen': '#6B8E23',
      'darkGreen': '#2F4F2F',
      'dark': '#121416',
      'light': '#FCEFF9',
      'gold': '#E09200,'
    },
    extend: {
      backgroundImage:(theme)=>({
        'bgImage':"url('/src/assets/hermes-rivera-Ww8eQWjMJWk-unsplash.jpg')"
      }),
      dropShadow:(theme)=>({
        '3xl': '0px 0px 40px 11px rgba(0,0,0,0.75);'
      }),
    },
  },
  plugins: [],
}
