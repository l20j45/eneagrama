/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          100: "#f8eaf5",
          400: '#ddbed6',
          700: "#bd98b4"
        },
        "background": "#fff6ef",

      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

