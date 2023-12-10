/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  variants: {
    extend: {
      opacity: ['group-hover'],
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
      backdropFilter: ['responsive'], // this line is important
    },
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

