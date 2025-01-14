/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-one': '#0b004e',
        'color-two': '#1d152f', 
        'color-three': '#002834',
      },
      fontFamily:{
        custom:['Poppins','sans-serif'],
      },
      lineHeight:{
        cs:'1.5',
      },
      screens:{
        'xs':{'max':'500px'},
      },
    },
  },
  plugins: [],
}