import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Portu buraya sabitledik
    strictPort: true, // Eğer 3001 doluysa hata verir, başka porta geçmez
  }
})