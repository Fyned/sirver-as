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
          primary: '#1B5E20',    // Daha derin, orman yeşili (Eskisi: #2E7D32)
          secondary: '#111827',  // Tam siyah değil, çok koyu antrasit (Premium his)
          accent: '#FF6F00',     // Turuncu aynı kalabilir (Enerji için iyi)
          surface: '#FFFFFF',    // Kartların zemini
          light: '#F3F4F6',      // Açık gri detaylar
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Okunurluğu yüksek modern font
        heading: ['Oswald', 'sans-serif'], // Güçlü başlıklar
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)', // Yumuşak gölge
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)', // Cam gölgesi
      }
    },
  },
  plugins: [],
}