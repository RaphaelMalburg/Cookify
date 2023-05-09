/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
      'lightGreen': '#457345',
      'darkGreen': '#2F4F2F',
      'dark': '#121416',
      'light': '#FCEFF9',
      'gold': '#E09200',
      'green50':'#5D6E5D',
      'green40':'#779B77',
      'green30':'#8AA88A',
      'green20':'#B5CEB5',
      'brown': '#D5C4B4',
      'error': '##ff3333',


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
