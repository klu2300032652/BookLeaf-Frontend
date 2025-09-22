import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/bookleaf/',
  // server: {
  //   port: 5173,
  //   proxy: {
  //     '/books': 'http://localhost:8081'
  //   }
  // }
})
