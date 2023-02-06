/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container : {
      padding: '16px',
      center: true,

    },
    extend: {
      screens : {
        '2xl' : '1440px',
      },
      colors : {
        primary : '#FFD624',
        secondary : '#BD9A00',
        third : '#E0B703',
        four : '#FFE366'

      },
      
      backgroundImage: {
        'wallpoke': "url('../public/wallpaper.png')",
        
      },
   
    },
  },
  plugins: [],
}
