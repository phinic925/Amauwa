/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        navy: '#84F45D',
        customGreen: '#1E5F08',
        sky: '#184E06'
      },
      text:{
        navy: '#84F45D',
        customGreen: '#1E5F08'
      },
      colors:{
        navy: '#84F45D',
        customGreen: '#1E5F08'
      },
      border:{
        navy: '#84F45D',
        customGreen: '#1E5F08'
      }

    },
  },
  plugins: [],
}