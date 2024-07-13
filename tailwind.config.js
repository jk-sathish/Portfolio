/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      mycolor:'#3b3b3b',
      back:'#191919',
      
    }},
    
  },
  plugins: [],
}

