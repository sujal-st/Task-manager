import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true, // listen on all network interfaces
    port: 5173, // optional: set fixed port
    allowedHosts: ['.local', '192.168.101.5', "repealable-nonstriated-randal.ngrok-free.dev"] 
  }
})
