import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', 
  preview: {
    allowedHosts: ['my-react-game-front.onrender.com'],
  },
})
