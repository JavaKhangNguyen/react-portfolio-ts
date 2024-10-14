import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build:{
    cssCodeSplit: false,
    rollupOptions:{
      external: ['./src/test', './src/__tests__']
    }
  }
})
