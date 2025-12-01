/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sirver: {
          primary: '#2E7D32',    // Orman Yeşili
          secondary: '#263238',  // Antrasit
          accent: '#FF6F00',     // Güvenlik Turuncusu
          surface: '#F5F5F5',    // Açık Gri
          dark: '#1A1A1A',       // Koyu Zemin
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}