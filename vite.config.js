//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//export default defineConfig({
//  plugins: [react()],
//})


// vite.config.js
export default {
  server: {
    hmr: {
      overlay: false, // Optional - disables the error popup
    },
  },
}

